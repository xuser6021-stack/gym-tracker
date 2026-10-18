import { describe, expect, it } from 'vitest'
import {
  MAX_IMAGE_BYTES,
  deleteAsset,
  getAsset,
  getAssetBlob,
  isQuotaError,
  putAsset,
  validateImageFile,
} from './assetRepository'

describe('validateImageFile', () => {
  it('accepts supported image types within the size limit', () => {
    expect(validateImageFile({ type: 'image/webp', size: 1024 })).toEqual({ ok: true })
    expect(validateImageFile({ type: 'image/png', size: MAX_IMAGE_BYTES })).toEqual({ ok: true })
  })

  it('rejects unsupported types', () => {
    const result = validateImageFile({ type: 'image/svg+xml', size: 1024 })
    expect(result.ok).toBe(false)
  })

  it('rejects files above the limit', () => {
    const result = validateImageFile({ type: 'image/jpeg', size: MAX_IMAGE_BYTES + 1 })
    expect(result.ok).toBe(false)
  })

  it('rejects empty files', () => {
    expect(validateImageFile({ type: 'image/png', size: 0 }).ok).toBe(false)
  })
})

describe('isQuotaError', () => {
  it('detects QuotaExceededError', () => {
    expect(isQuotaError(new DOMException('full', 'QuotaExceededError'))).toBe(true)
    expect(isQuotaError(new Error('nope'))).toBe(false)
  })
})

describe('asset store round-trip', () => {
  it('stores, reads and deletes a blob', async () => {
    const blob = new Blob([new Uint8Array([1, 2, 3])], { type: 'image/png' })
    await putAsset('asset_test_1', blob)

    const record = await getAsset('asset_test_1')
    expect(record?.type).toBe('image/png')
    expect(record?.size).toBe(3)

    const stored = await getAssetBlob('asset_test_1')
    expect(stored).toBeInstanceOf(Blob)
    expect(await stored?.arrayBuffer()).toEqual(await blob.arrayBuffer())

    await deleteAsset('asset_test_1')
    expect(await getAssetBlob('asset_test_1')).toBeUndefined()
  })
})
