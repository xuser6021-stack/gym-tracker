import { describe, expect, it } from 'vitest'
import { backupFilename, parseBackupText, serializeBackup } from './backup'
import { createInitialData } from '../lib/storage'
import { makeSession } from '../test/fixtures'

describe('backup round-trip', () => {
  it('serialises to an envelope and parses it back', () => {
    const data = createInitialData()
    data.sessions = [makeSession({ id: 's1' })]
    const text = serializeBackup(data)
    const parsed = parseBackupText(text)
    expect(parsed.ok).toBe(true)
    expect(parsed.meta?.legacy).toBe(false)
    expect(parsed.counts?.sessions).toBe(1)
    expect(parsed.data?.sessions).toHaveLength(1)
  })

  it('accepts legacy raw AppData and flags it', () => {
    const data = createInitialData()
    const parsed = parseBackupText(JSON.stringify(data))
    expect(parsed.ok).toBe(true)
    expect(parsed.meta?.legacy).toBe(true)
    expect(parsed.report.warnings.some((w) => w.includes('envelope'))).toBe(true)
  })
})

describe('backup error handling', () => {
  it('rejects empty input', () => {
    expect(parseBackupText('').ok).toBe(false)
  })

  it('rejects invalid JSON', () => {
    const result = parseBackupText('{not json')
    expect(result.ok).toBe(false)
    expect(result.error).toContain('JSON')
  })

  it('rejects a newer envelope format version', () => {
    const result = parseBackupText(
      JSON.stringify({ format: 'irontrack-backup', formatVersion: 99, data: createInitialData() }),
    )
    expect(result.ok).toBe(false)
    expect(result.error).toContain('newer format')
  })

  it('rejects payloads that are not IronTrack data', () => {
    expect(parseBackupText('"just a string"').ok).toBe(false)
  })
})

describe('backupFilename', () => {
  it('produces a stable, sortable name', () => {
    expect(backupFilename(new Date('2026-05-01T08:09:10Z'))).toBe('irontrack-backup-2026-05-01-08-09-10.json')
  })
})
