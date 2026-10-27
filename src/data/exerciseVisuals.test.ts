import { describe, expect, it } from 'vitest'
import {
  BUNDLED_VISUALS,
  bundledRecordFor,
  hasBundledAnimation,
  resolveExerciseVisuals,
  visualFilePath,
} from './exerciseVisuals'
import { makeExercise } from '../test/fixtures'

describe('exercise visual registry', () => {
  it('bundles real, verified artwork across all 520 built-in exercises', () => {
    expect(Object.keys(BUNDLED_VISUALS)).toHaveLength(520)
    expect(BUNDLED_VISUALS['barbell-bench-press']).toBeDefined()
    expect(BUNDLED_VISUALS['barbell-bench-press'].available).toContain('thumbnail')
    expect(BUNDLED_VISUALS['barbell-bench-press'].available).toContain('anatomy')
    expect(BUNDLED_VISUALS['barbell-bench-press'].available).toContain('start')
    expect(BUNDLED_VISUALS['barbell-bench-press'].available).toContain('finish')
  })

  it('builds conventional asset paths per slug and kind', () => {
    expect(visualFilePath('barbell-bench-press', 'thumbnail')).toBe(
      '/exercises/barbell-bench-press/thumbnail.webp',
    )
    expect(visualFilePath('barbell-bench-press', 'animation')).toBe(
      '/exercises/barbell-bench-press/animation.webm',
    )
  })

  it('resolves bundled visuals for a seed exercise', () => {
    const exercise = makeExercise({ id: 'ex_barbell_bench_press', name: 'Barbell Bench Press' })
    expect(bundledRecordFor(exercise.id)).toBeDefined()
    const resolved = resolveExerciseVisuals(exercise)
    expect(resolved?.thumbnail).toBe('/exercises/barbell-bench-press/thumbnail.webp')
    expect(resolved?.anatomyImage).toBe('/exercises/barbell-bench-press/anatomy.webp')
    expect(resolved?.startPositionImage).toBe('/exercises/barbell-bench-press/start.webp')
    expect(resolved?.endPositionImage).toBe('/exercises/barbell-bench-press/finish.webp')
  })

  it('resolves nothing for an unknown custom exercise without artwork', () => {
    const exercise = makeExercise({ id: 'ex_custom_unknown', name: 'Custom Unknown' })
    expect(bundledRecordFor(exercise.id)).toBeUndefined()
    expect(resolveExerciseVisuals(exercise)).toBeUndefined()
    expect(hasBundledAnimation(exercise)).toBe(false)
  })

  it('honours explicit visuals supplied on the exercise', () => {
    const exercise = makeExercise({
      id: 'ex_custom_thing',
      visuals: { thumbnail: '/uploads/thumb.webp', animation: '/uploads/move.webm' },
    })
    expect(resolveExerciseVisuals(exercise)?.thumbnail).toBe('/uploads/thumb.webp')
    expect(hasBundledAnimation(exercise)).toBe(true)
  })
})
