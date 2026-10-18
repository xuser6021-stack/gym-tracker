import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { ExerciseImage } from './ExerciseImage'
import { putAsset } from '../../storage/repositories/assetRepository'
import { makeExercise } from '../../test/fixtures'

function stubObjectUrls() {
  const createObjectURL = vi.fn(() => 'blob:mock-url')
  const revokeObjectURL = vi.fn()
  ;(URL as unknown as { createObjectURL: (blob: Blob) => string }).createObjectURL = createObjectURL
  ;(URL as unknown as { revokeObjectURL: (url: string) => void }).revokeObjectURL = revokeObjectURL
}

describe('ExerciseImage', () => {
  it('shows a neutral placeholder when no artwork exists', () => {
    render(<ExerciseImage exercise={makeExercise({ id: 'ex_custom_cable_fly', name: 'Cable Fly', isCustom: true })} kind="thumbnail" />)
    expect(
      screen.getByRole('img', { name: /no illustration available yet/i }),
    ).toBeInTheDocument()
  })

  it('renders a bundled image when visuals are supplied', () => {
    const exercise = makeExercise({
      name: 'Banded Row',
      visuals: { thumbnail: '/exercises/banded-row/thumbnail.webp' },
    })
    render(<ExerciseImage exercise={exercise} kind="thumbnail" />)
    const img = screen.getByRole('img', { name: /banded row thumbnail/i })
    expect(img).toHaveAttribute('src', '/exercises/banded-row/thumbnail.webp')
  })

  it('loads a user-uploaded image from the asset store', async () => {
    stubObjectUrls()
    const blob = new Blob([new Uint8Array([1])], { type: 'image/png' })
    await putAsset('asset_img_1', blob)
    const exercise = makeExercise({
      name: 'My Move',
      isCustom: true,
      mediaAssetId: 'asset_img_1',
    })
    render(<ExerciseImage exercise={exercise} kind="thumbnail" />)
    const img = await screen.findByRole('img', { name: /my move thumbnail/i })
    expect(img).toHaveAttribute('src', 'blob:mock-url')
  })

  it('falls back to the placeholder when the uploaded asset is gone', async () => {
    const exercise = makeExercise({
      name: 'Ghost Move',
      isCustom: true,
      mediaAssetId: 'asset_missing',
    })
    render(<ExerciseImage exercise={exercise} kind="thumbnail" />)
    await waitFor(() =>
      expect(
        screen.getByRole('img', { name: /no illustration available yet/i }),
      ).toBeInTheDocument(),
    )
  })
})
