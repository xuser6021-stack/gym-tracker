/**
 * Low-level IndexedDB access.
 *
 * A single-user, local-first app does not need a relational schema, so the whole
 * `AppData` document is stored atomically in one object store. That keeps writes
 * transactional and avoids partial-update corruption, while IndexedDB gives us a
 * far larger, more durable quota than localStorage.
 */

const DB_NAME = 'irontrack'
const DB_VERSION = 2

export const STORE_DOCUMENTS = 'documents'
export const STORE_META = 'meta'
/** User-uploaded image blobs (custom exercise media). Never part of the JSON document. */
export const STORE_ASSETS = 'assets'

let dbPromise: Promise<IDBDatabase> | null = null

export function isIndexedDbAvailable(): boolean {
  try {
    return typeof indexedDB !== 'undefined' && indexedDB !== null
  } catch {
    return false
  }
}

export function resetDatabaseConnection(): void {
  dbPromise = null
}

export function openDatabase(): Promise<IDBDatabase> {
  if (!isIndexedDbAvailable()) {
    return Promise.reject(new Error('IndexedDB is not available in this environment.'))
  }
  if (dbPromise) return dbPromise

  dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
    let request: IDBOpenDBRequest
    try {
      request = indexedDB.open(DB_NAME, DB_VERSION)
    } catch (err) {
      reject(err instanceof Error ? err : new Error('Failed to open IndexedDB'))
      return
    }
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_DOCUMENTS)) {
        db.createObjectStore(STORE_DOCUMENTS, { keyPath: 'key' })
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'key' })
      }
      if (!db.objectStoreNames.contains(STORE_ASSETS)) {
        db.createObjectStore(STORE_ASSETS, { keyPath: 'key' })
      }
    }
    request.onsuccess = () => {
      const db = request.result
      // If another tab triggers an upgrade we must close so they can proceed.
      db.onversionchange = () => db.close()
      resolve(db)
    }
    request.onerror = () => reject(request.error ?? new Error('Failed to open IndexedDB'))
    request.onblocked = () =>
      reject(new Error('Storage upgrade is blocked by another open tab. Close other tabs and reload.'))
  })

  // Allow a later retry if the first attempt failed (e.g. blocked tab).
  dbPromise.catch(() => {
    dbPromise = null
  })
  return dbPromise
}

export interface WriteOperation {
  store: string
  type: 'put' | 'delete'
  value?: unknown
  key?: string
}

/**
 * Apply several writes across one or more object stores inside a single
 * transaction. The promise resolves only once the transaction has committed, so
 * callers can treat success as "durably persisted" (all-or-nothing).
 */
export async function idbWriteBatch(operations: WriteOperation[]): Promise<void> {
  if (operations.length === 0) return
  const db = await openDatabase()
  const stores = [...new Set(operations.map((op) => op.store))]
  return new Promise<void>((resolve, reject) => {
    let tx: IDBTransaction
    try {
      tx = db.transaction(stores, 'readwrite')
    } catch (err) {
      reject(err instanceof Error ? err : new Error('Could not start a storage transaction'))
      return
    }
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB transaction failed'))
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
    for (const op of operations) {
      const store = tx.objectStore(op.store)
      if (op.type === 'put') store.put(op.value)
      else store.delete(op.key as IDBValidKey)
    }
  })
}

/** Minimal structural type for the Web Locks API (not in all TS DOM libs). */
interface LockManagerLike {
  request<T>(name: string, callback: () => Promise<T>): Promise<T>
}

/**
 * Run `fn` while holding a cross-tab write lock so two tabs cannot interleave a
 * read-modify-write on the same document. Falls back to an unguarded run where
 * the Web Locks API is unavailable (older Safari/Firefox).
 */
export async function withWriteLock<T>(fn: () => Promise<T>): Promise<T> {
  let locks: LockManagerLike | undefined
  try {
    locks =
      typeof navigator !== 'undefined'
        ? (navigator as unknown as { locks?: LockManagerLike }).locks
        : undefined
  } catch {
    locks = undefined
  }
  if (locks && typeof locks.request === 'function') {
    try {
      return await locks.request('irontrack.write', fn)
    } catch (err) {
      if (err instanceof Error && err.name === 'NotSupportedError') return fn()
      throw err
    }
  }
  return fn()
}

function promisify<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('IndexedDB request failed'))
  })
}

export async function idbGet<T>(store: string, key: string): Promise<T | undefined> {
  const db = await openDatabase()
  const tx = db.transaction(store, 'readonly')
  const result = await promisify(tx.objectStore(store).get(key))
  return result as T | undefined
}

export async function idbGetAll<T>(store: string): Promise<T[]> {
  const db = await openDatabase()
  const tx = db.transaction(store, 'readonly')
  const result = await promisify(tx.objectStore(store).getAll())
  return result as T[]
}

export async function idbCount(store: string): Promise<number> {
  const db = await openDatabase()
  const tx = db.transaction(store, 'readonly')
  return promisify(tx.objectStore(store).count())
}

/** Write a single value inside one transaction — resolves only after commit. */
export async function idbPut<T>(store: string, value: T): Promise<void> {
  const db = await openDatabase()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite')
    tx.objectStore(store).put(value)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB write failed'))
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
  })
}

export async function idbDelete(store: string, key: string): Promise<void> {
  const db = await openDatabase()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite')
    tx.objectStore(store).delete(key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB delete failed'))
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
  })
}

export async function idbClear(store: string): Promise<void> {
  const db = await openDatabase()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite')
    tx.objectStore(store).clear()
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB clear failed'))
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
  })
}
