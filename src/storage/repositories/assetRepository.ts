/**
 * Storage for user-uploaded exercise images. Blobs live in their own object
 * store (never inside the main `AppData` JSON document) so snapshots, backups
 * and cross-tab sync stay small.
 */
import { STORE_ASSETS, idbDelete, idbGet, idbPut } from '../database'

export interface StoredAsset {
  key: string
  /** Raw image bytes. Stored as an ArrayBuffer (portable across IDB implementations). */
  bytes: ArrayBuffer
  type: string
  size: number
  updatedAt: number
}

/** 2 MB — generous for a photo thumbnail yet cheap to keep on-device. */
export const MAX_IMAGE_BYTES = 2 * 1024 * 1024

export const SUPPORTED_IMAGE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/avif',
  'image/gif',
] as const

export type ImageValidation = { ok: true } | { ok: false; error: string }

/** Validate an image before it is stored — type, size and non-empty. */
export function validateImageFile(file: { type: string; size: number }): ImageValidation {
  if (!(SUPPORTED_IMAGE_TYPES as readonly string[]).includes(file.type)) {
    return { ok: false, error: 'Unsupported image type. Use PNG, JPEG, WebP, AVIF or GIF.' }
  }
  if (file.size === 0) {
    return { ok: false, error: 'That file appears to be empty.' }
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return { ok: false, error: 'Image is larger than 2 MB. Please choose a smaller file.' }
  }
  return { ok: true }
}

export function isQuotaError(err: unknown): boolean {
  return (
    err instanceof DOMException &&
    (err.name === 'QuotaExceededError' || err.code === 22 || err.code === 1014)
  )
}

export async function putAsset(key: string, blob: Blob): Promise<void> {
  const bytes = await blob.arrayBuffer()
  await idbPut<StoredAsset>(STORE_ASSETS, {
    key,
    bytes,
    type: blob.type,
    size: blob.size,
    updatedAt: Date.now(),
  })
}

export async function getAsset(key: string): Promise<StoredAsset | undefined> {
  return idbGet<StoredAsset>(STORE_ASSETS, key)
}

export async function getAssetBlob(key: string): Promise<Blob | undefined> {
  const record = await idbGet<StoredAsset>(STORE_ASSETS, key)
  if (!record) return undefined
  return new Blob([record.bytes], { type: record.type })
}

export async function deleteAsset(key: string): Promise<void> {
  await idbDelete(STORE_ASSETS, key)
}
