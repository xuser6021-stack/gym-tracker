import { beforeEach, describe, expect, it } from 'vitest'
import {
  listRecoverySnapshots,
  loadAppData,
  readAppData,
  writeAppData,
} from './appRepository'
import { STORE_DOCUMENTS, STORE_META, idbClear, idbGet, idbPut } from '../database'
import { STORAGE_KEY, createInitialData } from '../../lib/storage'
import { makeSession } from '../../test/fixtures'
import type { AppData } from '../../types'

async function resetStores() {
  localStorage.clear()
  await idbClear(STORE_DOCUMENTS)
  await idbClear(STORE_META)
}

describe('appRepository', () => {
  beforeEach(resetStores)

  it('bootstraps a fresh document in IndexedDB', async () => {
    const result = await loadAppData()
    expect(result.mode).toBe('indexeddb')
    expect(result.data.exercises.length).toBeGreaterThan(0)
    const doc = await idbGet<{ data: AppData }>(STORE_DOCUMENTS, 'app')
    expect(doc).toBeTruthy()
  })

  it('round-trips written data', async () => {
    const data = createInitialData()
    data.sessions = [makeSession({ id: 's1', templateName: 'Push' })]
    await writeAppData(data)
    const result = await loadAppData()
    expect(result.data.sessions).toHaveLength(1)
    expect(result.data.sessions[0].templateName).toBe('Push')
  })

  it('migrates localStorage data into IndexedDB exactly once, preserving the source', async () => {
    const legacy: Partial<AppData> = { schemaVersion: 1, sessions: [makeSession({ id: 'legacy-1' })] }
    const raw = JSON.stringify(legacy)
    localStorage.setItem(STORAGE_KEY, raw)

    const first = await loadAppData()
    expect(first.migrated).toBe(true)
    expect(first.mode).toBe('indexeddb')
    expect(first.data.sessions).toHaveLength(1)
    expect(first.data.sessions[0].id).toBe('legacy-1')

    // Original localStorage payload is never deleted.
    expect(localStorage.getItem(STORAGE_KEY)).toBe(raw)
    const backup = await idbGet<{ key: string; raw: string }>(STORE_META, 'localStorageBackup')
    expect(backup?.raw).toBe(raw)

    // A second load does not re-migrate.
    const second = await loadAppData()
    expect(second.migrated).toBe(false)
  })

  it('never overwrites a richer existing document with a poorer localStorage copy', async () => {
    const richer = createInitialData()
    richer.sessions = [makeSession({ id: 'a' }), makeSession({ id: 'b' })]
    await writeAppData(richer)

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ schemaVersion: 1, sessions: [makeSession({ id: 'only' })] }))

    const result = await loadAppData()
    expect(result.data.sessions.map((s) => s.id).sort()).toEqual(['a', 'b'])
  })

  it('assigns an incrementing revision on every write', async () => {
    const data = createInitialData()
    const first = await writeAppData(data)
    const second = await writeAppData(data)
    expect(first.revision).toBe(1)
    expect(second.revision).toBe(2)
    const doc = await idbGet<{ revision: number }>(STORE_DOCUMENTS, 'app')
    expect(doc?.revision).toBe(2)
  })

  it('rejects stale writes without overwriting the latest saved document', async () => {
    const live = createInitialData()
    live.sessions = [makeSession({ id: 'live' })]
    const written = await writeAppData(live)

    const stale = createInitialData()
    stale.sessions = [makeSession({ id: 'stale' })]
    const result = await writeAppData(stale, { expectedRevision: written.revision - 1 })

    expect(result.conflict).toBe(true)
    expect(result.revision).toBe(written.revision)
    const snapshots = await listRecoverySnapshots()
    const conflict = snapshots.find((s) => s.reason === 'conflict')
    expect(conflict?.data?.sessions.map((s) => s.id)).toEqual(['live'])
    const stored = await readAppData()
    expect(stored.data.sessions.map((s) => s.id)).toEqual(['live'])
  })

  it('preserves the legacy copy as a recoverable snapshot when both sources hold data', async () => {
    const existing = createInitialData()
    existing.sessions = [makeSession({ id: 'db' })]
    await writeAppData(existing)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ schemaVersion: 1, sessions: [makeSession({ id: 'legacy' })] }))

    const result = await loadAppData()
    expect(result.warnings.join(' ')).toMatch(/two separate sets/i)
    const snapshots = await listRecoverySnapshots()
    expect(snapshots.some((s) => s.reason === 'legacy')).toBe(true)
  })

  it('flags corrupt stored data without overwriting it', async () => {
    await idbPut(STORE_DOCUMENTS, {
      key: 'app',
      schemaVersion: 1,
      updatedAt: 0,
      revision: 4,
      writerId: 'other',
      data: { not: 'valid' },
    })

    const result = await loadAppData()
    expect(result.corrupt).toBe(true)
    expect(result.error).toBeTruthy()

    const doc = await idbGet<{ data: unknown }>(STORE_DOCUMENTS, 'app')
    expect(doc?.data).toEqual({ not: 'valid' })
    const snapshots = await listRecoverySnapshots()
    expect(snapshots.some((s) => s.reason === 'corrupt')).toBe(true)
  })
})

describe('appRepository fallback', () => {
  it('still loads when data was written plainly', async () => {
    await resetStores()
    const data: AppData = createInitialData()
    data.sessions = [makeSession({ id: 'z' })]
    await writeAppData(data)
    const result = await loadAppData()
    expect(result.data.sessions[0].id).toBe('z')
  })
})
