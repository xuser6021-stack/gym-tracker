import { useState } from 'react'
import type { Exercise } from '../../types'
import { resolveExerciseVisuals } from '../../data/exerciseVisuals'
import { cn } from '../../lib/cn'
import { ExercisePlaceholder } from './ExercisePlaceholder'
import { useExerciseImage } from './useExerciseImage'

export type ExerciseImageKind = 'thumbnail' | 'anatomy' | 'start' | 'finish'

const ALT: Record<ExerciseImageKind, string> = {
  thumbnail: 'thumbnail',
  anatomy: 'muscles worked',
  start: 'starting position',
  finish: 'finishing position',
}

/**
 * Renders the best available still image for an exercise: a bundled asset when
 * one exists, otherwise the user-uploaded image (thumbnails only), otherwise a
 * neutral placeholder. Falls back gracefully on load errors and reserves no
 * layout shift (the parent controls the box).
 */
export function ExerciseImage({
  exercise,
  kind,
  className,
  compact = false,
  eager = false,
  rounded = 'rounded-xl',
}: {
  exercise: Exercise
  kind: ExerciseImageKind
  className?: string
  compact?: boolean
  eager?: boolean
  rounded?: string
}) {
  const [errored, setErrored] = useState(false)
  const visuals = resolveExerciseVisuals(exercise)
  const bundled =
    kind === 'thumbnail'
      ? visuals?.thumbnail
      : kind === 'anatomy'
        ? visuals?.anatomyImage
        : kind === 'start'
          ? visuals?.startPositionImage
          : visuals?.endPositionImage

  const customAssetId = kind === 'thumbnail' && !bundled ? exercise.mediaAssetId : undefined
  const { url: customUrl, loading } = useExerciseImage(customAssetId)
  const src = bundled ?? customUrl ?? undefined

  let content
  if (customAssetId && loading) {
    content = <div className="h-full w-full animate-pulse bg-surface2" aria-hidden="true" />
  } else if (!src || errored) {
    content = <ExercisePlaceholder label={exercise.name} compact={compact || kind === 'thumbnail'} className="h-full w-full" />
  } else {
    content = (
      <img
        src={src}
        alt={`${exercise.name} ${ALT[kind]}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setErrored(true)}
        className="h-full w-full object-cover"
      />
    )
  }

  return <div className={cn('relative overflow-hidden bg-surface2', rounded, className)}>{content}</div>
}
