import type { AppData } from '../../types'
import { STORAGE_KEY, coerceData, createInitialData } from '../../lib/storage'
import {
  STORE_DOCUMENTS,
  STORE_META,
  idbGet,
  idbGetAll,
  idbWriteBatch,
  isIndexedDbAvailable,
  resetDatabaseConnection,
  withWriteLock,
  type WriteOperation,
} from '../database'
import { CURRENT_SCHEMA_VERSION, validateAndRepair } from '../validation'

export { CURRENT_SCHEMA_VERSION }

export const DOC_KEY = 'app'

export type StorageMode = 'indexeddb' | 'localstorage' | 'memory'

export interface StoredDocument {
  key: string
  schemaVersion: number
  updatedAt: number
  /** Monotonic per-write counter used for optimistic concurrency across tabs. */
  revision: number
  writerId: string
  data: AppData
}

export interface MigrationMeta {
  key: string
  done: boolean
  at: number
  source: 'none' | 'localStorage'
  note?: string
}

export type SnapshotReason = 'pre-import' | 'conflict' | 'corrupt' | 'legacy'

export interface RecoverySnapshot {
  key: string
  at: number
  label: string
  reason: SnapshotReason
  data?: AppData
  raw?: string
}

export interface LoadResult {
  data: AppData
  mode: StorageMode
  migrated: boolean
  revision: number
  repairs: string[]
  warnings: string[]
  /** The stored document existed but could not be read; it must not be overwritten silently. */
  corrupt?: boolean
  /** Storage failed entirely; the app should open in read-only recovery mode. */
  error?: string
}

export interface WriteResult {
  revision: number
  conflict: boolean
}

export interface WriteOptions {
  /** Revision the caller believes is current; a mismatch flags a cross-tab conflict. */
  expectedRevision?: number
}

/* ---------- keys & ids ---------- */

const META_MIGRATION = 'migration'

const SNAPSHOT_KEYS: Record<SnapshotReason, string> = {
  'pre-import': 'snapshot:pre-import',
  conflict: 'snapshot:conflict',
  corrupt: 'snapshot:corrupt',
  legacy: 'localStorageBackup',
}

const WRITER_ID = createWriterId()

function createWriterId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
  } catch {
    /* fall through to a non-crypto id */
  }
  return `writer-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

export function snapshotKey(reason: SnapshotReason): string {
  return SNAPSHOT_KEYS[reason]
}

function readLocalStorageRaw(): string | null {
  if (typeof localStorage === 'undefined') return null
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? ''
  } catch {
    return ''
  }
}

async function writeMeta(value: MigrationMeta | RecoverySnapshot): Promise<void> {
  await idbWriteBatch([{ store: STORE_META, type: 'put', value } satisfies WriteOperation])
}

/* ---------- write ---------- */

/**
 * Persist the whole document atomically. Resolves only after the IndexedDB
 * transaction commits, so a resolved promise means the data is durable.
 * When `expectedRevision` is supplied and does not match the stored revision,
 * another tab wrote in the meantime: the version about to be replaced is
 * preserved as a recovery snapshot and `conflict` is reported (never lost).
 */
export async function writeAppData(data: AppData, options: WriteOptions = {}): Promise<WriteResult> {
  return withWriteLock(async () => {
    if (!isIndexedDbAvailable()) {
      if (typeof localStorage === 'undefined') {
        throw new Error('Storage is unavailable on this device.')
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      return { revision: 0, conflict: false }
    }

    const current = await idbGet<StoredDocument>(STORE_DOCUMENTS, DOC_KEY)
    const currentRevision = current?.revision ?? 0
    const conflict =
      options.expectedRevision !== undefined &&
      current !== undefined &&
      currentRevision !== options.expectedRevision

    const revision = currentRevision + 1
    const doc: StoredDocument = {
      key: DOC_KEY,
      schemaVersion: data.schemaVersion ?? CURRENT_SCHEMA_VERSION,
      updatedAt: Date.now(),
      revision,
      writerId: WRITER_ID,
      data,
    }

    const ops: WriteOperation[] = [{ store: STORE_DOCUMENTS, type: 'put', value: doc }]
    if (conflict && current) {
      ops.push({
        store: STORE_META,
        type: 'put',
        value: {
          key: SNAPSHOT_KEYS.conflict,
          at: Date.now(),
          label: 'Changes made in another tab',
          reason: 'conflict',
          data: current.data,
        } satisfies RecoverySnapshot,
      })
    }
    await idbWriteBatch(ops)
    return { revision, conflict }
  })
}

export async function deleteAppData(): Promise<void> {
  if (!isIndexedDbAvailable()) {
    if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY)
    return
  }
  await withWriteLock(() =>
    idbWriteBatch([{ store: STORE_DOCUMENTS, type: 'delete', key: DOC_KEY }]),
  )
}

/* ---------- migration ---------- */

function hasRealUserData(data: AppData): boolean {
  return (
    data.sessions.length > 0 ||
    data.measurements.length > 0 ||
    data.nutrition.length > 0 ||
    data.personalRecords.length > 0 ||
    data.mealTemplates.length > 0 ||
    data.profile.onboarded
  )
}

/**
 * Deterministic one-time migration of any legacy localStorage document.
 *
 *  - No legacy data            → mark done, nothing to do.
 *  - No IndexedDB document     → adopt legacy data (it is the only source).
 *  - IndexedDB empty/default   → adopt legacy data.
 *  - Both hold real user data  → DO NOT guess; keep both and warn (recovery UI).
 *  - Legacy unreadable         → preserve a raw copy and warn.
 * The raw legacy bytes are always preserved and never deleted.
 */
async function ensureMigrated(repairs: string[], warnings: string[]): Promise<boolean> {
  const meta = await idbGet<MigrationMeta>(STORE_META, META_MIGRATION)
  if (meta?.done) return false

  const raw = readLocalStorageRaw()
  if (!raw) {
    await writeMeta({ key: META_MIGRATION, done: true, at: Date.now(), source: 'none' })
    return false
  }

  await writeMeta({
    key: SNAPSHOT_KEYS.legacy,
    at: Date.now(),
    label: 'Legacy browser data',
    reason: 'legacy',
    raw,
  })

  let legacyData: AppData | null = null
  try {
    const validated = validateAndRepair(coerceData(JSON.parse(raw)))
    legacyData = validated.ok && validated.data ? validated.data : null
  } catch {
    legacyData = null
  }

  const finish = (note: string) =>
    writeMeta({ key: META_MIGRATION, done: true, at: Date.now(), source: 'localStorage', note })

  const existingDoc = await idbGet<StoredDocument>(STORE_DOCUMENTS, DOC_KEY)

  if (!existingDoc) {
    if (legacyData && hasRealUserData(legacyData)) {
      await writeAppData(legacyData)
      await finish('adopted-no-existing')
      repairs.push('Your previous browser data was moved into the new storage engine.')
      return true
    }
    await finish(legacyData ? 'legacy-empty' : 'legacy-unreadable')
    if (!legacyData) warnings.push('Legacy browser data could not be read; a copy was preserved.')
    return false
  }

  if (!legacyData) {
    await finish('legacy-unreadable')
    warnings.push('Legacy browser data could not be read; a copy was preserved.')
    return false
  }

  const existingHasData = hasRealUserData(existingDoc.data)
  const legacyHasData = hasRealUserData(legacyData)

  if (!existingHasData && legacyHasData) {
    await writeAppData(legacyData)
    await finish('adopted-into-empty')
    repairs.push('Your previous browser data was moved into the new storage engine.')
    return true
  }

  if (existingHasData && legacyHasData) {
    await finish('ambiguous-kept-both')
    warnings.push(
      'Two separate sets of data were found (older browser storage and the new database). The current database was kept and the older copy was preserved — you can review and restore it from Settings.',
    )
    return false
  }

  await finish('kept-existing')
  return false
}

/* ---------- read ---------- */

function loadFromLocalStorage(warnings: string[]): LoadResult {
  const raw = readLocalStorageRaw()
  const repairs: string[] = []
  if (!raw) {
    return { data: createInitialData(), mode: 'localstorage', migrated: false, revision: 0, repairs, warnings }
  }
  try {
    const validated = validateAndRepair(coerceData(JSON.parse(raw)))
    if (validated.ok && validated.data) {
      return {
        data: validated.data,
        mode: 'localstorage',
        migrated: false,
        revision: 0,
        repairs: validated.report.repairs,
        warnings: [...warnings, ...validated.report.warnings],
      }
    }
    return {
      data: createInitialData(),
      mode: 'localstorage',
      migrated: false,
      revision: 0,
      repairs,
      warnings,
      corrupt: true,
      error: validated.error ?? 'Stored data was invalid.',
    }
  } catch {
    return {
      data: createInitialData(),
      mode: 'localstorage',
      migrated: false,
      revision: 0,
      repairs,
      warnings,
      corrupt: true,
      error: 'Stored data could not be read.',
    }
  }
}

export async function loadAppData(): Promise<LoadResult> {
  const repairs: string[] = []
  const warnings: string[] = []

  if (!isIndexedDbAvailable()) {
    return loadFromLocalStorage(warnings)
  }

  try {
    const migrated = await ensureMigrated(repairs, warnings)
    const doc = await idbGet<StoredDocument>(STORE_DOCUMENTS, DOC_KEY)

    if (!doc) {
      const fresh = createInitialData()
      const written = await writeAppData(fresh)
      return { data: fresh, mode: 'indexeddb', migrated, revision: written.revision, repairs, warnings }
    }

    const validated = validateAndRepair(doc.data)
    if (validated.ok && validated.data) {
      repairs.push(...validated.report.repairs)
      warnings.push(...validated.report.warnings)
      return {
        data: validated.data,
        mode: 'indexeddb',
        migrated,
        revision: doc.revision ?? 0,
        repairs,
        warnings,
      }
    }

    // The primary record is unreadable. Preserve it and refuse to overwrite it.
    await writeMeta({
      key: SNAPSHOT_KEYS.corrupt,
      at: Date.now(),
      label: 'Unreadable database copy',
      reason: 'corrupt',
      raw: safeStringify(doc.data),
    })
    return {
      data: createInitialData(),
      mode: 'indexeddb',
      migrated,
      revision: 0,
      repairs,
      warnings,
      corrupt: true,
      error: validated.error
        ? `Stored data could not be read (${validated.error}).`
        : 'Stored data could not be read.',
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage is unavailable.'
    return { data: createInitialData(), mode: 'memory', migrated: false, revision: 0, repairs, warnings, error: message }
  }
}

/** Read the current document without triggering migration or repairs side effects. */
export async function readAppData(): Promise<LoadResult> {
  const repairs: string[] = []
  const warnings: string[] = []

  if (!isIndexedDbAvailable()) {
    return loadFromLocalStorage(warnings)
  }

  try {
    const doc = await idbGet<StoredDocument>(STORE_DOCUMENTS, DOC_KEY)
    if (!doc) {
      return { data: createInitialData(), mode: 'indexeddb', migrated: false, revision: 0, repairs, warnings }
    }
    const validated = validateAndRepair(doc.data)
    if (validated.ok && validated.data) {
      return {
        data: validated.data,
        mode: 'indexeddb',
        migrated: false,
        revision: doc.revision ?? 0,
        repairs,
        warnings: validated.report.warnings,
      }
    }
    return {
      data: createInitialData(),
      mode: 'indexeddb',
      migrated: false,
      revision: 0,
      repairs,
      warnings,
      corrupt: true,
      error: 'Stored data could not be read.',
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage is unavailable.'
    return { data: createInitialData(), mode: 'memory', migrated: false, revision: 0, repairs, warnings, error: message }
  }
}

/* ---------- cross-tab synchronisation ---------- */

type ChangeListener = () => void

const CHANGE_CHANNEL = 'irontrack.sync'
const listeners = new Set<ChangeListener>()

function createChannel(): BroadcastChannel | null {
  try {
    if (typeof BroadcastChannel === 'undefined') return null
    return new BroadcastChannel(CHANGE_CHANNEL)
  } catch {
    return null
  }
}

let channel: BroadcastChannel | null = createChannel()
if (channel) channel.onmessage = () => emitTo(listeners)

function emitTo(targets: Set<ChangeListener>): void {
  for (const listener of targets) listener()
}

export function notifyExternalChange(): void {
  try {
    channel?.postMessage({ type: 'change', at: Date.now() })
  } catch {
    /* cross-tab sync is best-effort */
  }
}

export function subscribeToExternalChanges(listener: ChangeListener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/* ---------- recovery snapshots ---------- */

export async function listRecoverySnapshots(): Promise<RecoverySnapshot[]> {
  try {
    const rows = await idbGetAll<unknown>(STORE_META)
    return rows
      .filter((row): row is RecoverySnapshot => {
        if (typeof row !== 'object' || row === null) return false
        const record = row as Record<string, unknown>
        return (
          typeof record.reason === 'string' &&
          typeof record.label === 'string' &&
          typeof record.key === 'string' &&
          typeof record.at === 'number'
        )
      })
      .sort((a, b) => b.at - a.at)
  } catch {
    return []
  }
}

export async function saveRecoverySnapshot(snapshot: RecoverySnapshot): Promise<void> {
  await writeMeta(snapshot)
}

export async function clearRecoverySnapshot(key: string): Promise<void> {
  await idbWriteBatch([{ store: STORE_META, type: 'delete', key }])
}

/** Reset module-level connection/listener state (used by tests). */
export function __resetRepositoryForTests(): void {
  listeners.clear()
  if (channel) {
    try {
      channel.close()
    } catch {
      /* ignore */
    }
    channel = null
  }
  resetDatabaseConnection()
}
