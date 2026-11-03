import { describe, expect, it } from 'vitest'
import {
  STANDARDIZED_MUSCLES,
  exerciseMatchesMuscle,
  exerciseMatchesTaxonomyGroup,
  getStandardMusclesForDbMuscle,
} from './muscleTaxonomy'

describe('muscleTaxonomy', () => {
  it('contains standardized muscles for all 4 taxonomy groups', () => {
    expect(STANDARDIZED_MUSCLES.length).toBeGreaterThan(15)
    expect(STANDARDIZED_MUSCLES.some(m => m.taxonomicGroup === 'Upper Body')).toBe(true)
    expect(STANDARDIZED_MUSCLES.some(m => m.taxonomicGroup === 'Lower Body')).toBe(true)
    expect(STANDARDIZED_MUSCLES.some(m => m.taxonomicGroup === 'Core')).toBe(true)
  })

  it('correctly filters primary muscle vs involves muscle', () => {
    const benchPress = {
      primaryMuscle: 'Chest',
      secondaryMuscles: ['Triceps', 'Front delts'],
    }

    // In primary mode, matches chest
    expect(exerciseMatchesMuscle(benchPress, 'chest', 'primary')).toBe(true)
    // In primary mode, does NOT match triceps
    expect(exerciseMatchesMuscle(benchPress, 'triceps', 'primary')).toBe(false)

    // In involves mode, matches both chest and secondary triceps
    expect(exerciseMatchesMuscle(benchPress, 'chest', 'involves')).toBe(true)
    expect(exerciseMatchesMuscle(benchPress, 'triceps', 'involves')).toBe(true)
  })

  it('correctly filters Lower Body taxonomy group', () => {
    const squat = { primaryMuscle: 'Quadriceps', category: 'legs' }
    const pullUp = { primaryMuscle: 'Lats', category: 'pull' }

    expect(exerciseMatchesTaxonomyGroup(squat, 'Lower Body')).toBe(true)
    expect(exerciseMatchesTaxonomyGroup(pullUp, 'Lower Body')).toBe(false)
  })

  it('maps database aliases to standardized muscles', () => {
    const mapped = getStandardMusclesForDbMuscle('Upper chest')
    expect(mapped.some(m => m.id === 'chest')).toBe(true)
  })
})
