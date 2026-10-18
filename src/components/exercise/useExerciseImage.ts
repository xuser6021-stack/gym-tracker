import { useEffect, useState } from 'react'
import { getAssetBlob } from '../../storage/repositories/assetRepository'

export interface ExerciseImageState {
  assetId: string | undefined
  url: string | null
  loading: boolean
  failed: boolean
}

/**
 * Load a user-uploaded exercise image (stored as a Blob) and expose an object
 * URL, revoking it on change/unmount. Returns `failed` when the asset is gone.
 */
export function useExerciseImage(assetId: string | undefined): ExerciseImageState {
  const [state, setState] = useState<ExerciseImageState>(() => ({
    assetId,
    url: null,
    loading: Boolean(assetId),
    failed: false,
  }))

  // Adjust state during render when the requested asset changes (React's
  // "derived state" pattern) — avoids resetting state inside an effect.
  if (state.assetId !== assetId) {
    setState({ assetId, url: null, loading: Boolean(assetId), failed: false })
  }

  useEffect(() => {
    if (!assetId) return
    let cancelled = false
    let objectUrl: string | null = null
    getAssetBlob(assetId)
      .then((blob) => {
        if (cancelled) return
        if (!blob) {
          setState((prev) => ({ ...prev, loading: false, failed: true }))
          return
        }
        objectUrl = URL.createObjectURL(blob)
        setState({ assetId, url: objectUrl, loading: false, failed: false })
      })
      .catch(() => {
        if (!cancelled) setState((prev) => ({ ...prev, loading: false, failed: true }))
      })
    return () => {
      cancelled = true
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [assetId])

  return state
}
