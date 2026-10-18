import { describe, expect, it } from 'vitest'
import { exerciseSlug } from './exerciseSlug'

describe('exerciseSlug', () => {
  it('strips the id prefix and hyphenates', () => {
    expect(exerciseSlug('ex_barbell_bench_press')).toBe('barbell-bench-press')
  })

  it('is idempotent for already-slugged input', () => {
    expect(exerciseSlug('barbell-bench-press')).toBe('barbell-bench-press')
  })

  it('collapses repeated separators and trims edges', () => {
    expect(exerciseSlug('ex__leg   press__')).toBe('leg-press')
  })

  it('lowercases everything', () => {
    expect(exerciseSlug('ex_EZ_Bar_Curl')).toBe('ez-bar-curl')
  })
})
