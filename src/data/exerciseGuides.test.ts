import { describe, expect, it } from 'vitest'
import { EXERCISE_GUIDES, getExerciseGuide } from './exerciseGuides'
import { SEED_EXERCISES } from './exercises'

describe('exercise technique guides', () => {
  it('has a curated guide for every built-in exercise', () => {
    const missing = SEED_EXERCISES.filter((exercise) => !EXERCISE_GUIDES[exercise.id]).map(
      (exercise) => exercise.id,
    )
    expect(missing).toEqual([])
  })

  it('every curated guide is complete', () => {
    for (const [id, guide] of Object.entries(EXERCISE_GUIDES)) {
      expect(guide.starting.trim(), `${id} starting`).not.toBe('')
      expect(guide.breathing.trim(), `${id} breathing`).not.toBe('')
      expect(guide.safety.trim(), `${id} safety`).not.toBe('')
      expect(guide.steps.length, `${id} steps`).toBeGreaterThanOrEqual(3)
      for (const step of guide.steps) expect(step.trim()).not.toBe('')
    }
  })

  it('falls back to stored instructions for an unknown exercise', () => {
    const guide = getExerciseGuide({
      id: 'ex_unknown',
      name: 'Made Up Move',
      primaryMuscle: 'Chest',
      secondaryMuscles: [],
      equipment: 'Bodyweight',
      category: 'push',
      exerciseClass: 'compound',
      repRange: '8-12',
      instructions: 'One. Two. Three.',
      mistakes: 'Rushing.',
      isCustom: true,
      favorite: false,
      usesBodyweight: true,
      unilateral: false,
    })
    expect(guide.steps).toEqual(['One.', 'Two.', 'Three.'])
    expect(guide.safety).toContain('Rushing.')
  })
})
