import { describe, it, expect } from 'vitest'
import { COMPREHENSIVE_EXERCISES } from '../data/exerciseDatabase'
import {
  exerciseMatchesMuscle,
  exerciseMatchesTaxonomyGroup,
} from './muscleTaxonomy'

describe('Exercise Library Muscle Filtering & Classification (Phase 8)', () => {
  it('total exercises in database is 620', () => {
    expect(COMPREHENSIVE_EXERCISES.length).toBe(620)
  })

  describe('Rule 1: Selecting LEGS returns ONLY lower-body exercises', () => {
    it('every leg-matched exercise belongs to the LOWER BODY taxonomy group', () => {
      const legExercises = COMPREHENSIVE_EXERCISES.filter((e) =>
        exerciseMatchesTaxonomyGroup(e, 'Lower Body')
      )

      expect(legExercises.length).toBeGreaterThan(150)

      const nonLowerBodyPrimaryMuscles = [
        'Chest',
        'Upper chest',
        'Lower chest',
        'Lats',
        'Upper back',
        'Shoulders',
        'Front delts',
        'Side delts',
        'Rear delts',
        'Biceps',
        'Triceps',
        'Abs',
        'Obliques',
      ]

      for (const ex of legExercises) {
        expect(nonLowerBodyPrimaryMuscles).not.toContain(ex.primaryMuscle)
      }
    })

    it('all exercises with primary muscle Quadriceps, Hamstrings, Glutes, Calves, Adductors are captured', () => {
      const specificLegMuscles = ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Adductors']
      for (const m of specificLegMuscles) {
        const found = COMPREHENSIVE_EXERCISES.filter((e) => e.primaryMuscle === m)
        expect(found.length).toBeGreaterThan(0)
        for (const ex of found) {
          expect(exerciseMatchesTaxonomyGroup(ex, 'Lower Body')).toBe(true)
        }
      }
    })
  })

  describe('Rule 2: Selecting CHEST returns chest exercises and does not leak back/legs', () => {
    it('primary chest exercises only include Chest, Upper chest, Lower chest', () => {
      const chestExercises = COMPREHENSIVE_EXERCISES.filter((e) =>
        exerciseMatchesMuscle(e, 'chest', 'primary')
      )

      expect(chestExercises.length).toBeGreaterThan(30)
      for (const ex of chestExercises) {
        expect(['Chest', 'Upper chest', 'Lower chest']).toContain(ex.primaryMuscle)
      }
    })

    it('involves chest mode returns primary plus compound push exercises where chest is secondary', () => {
      const primaryChest = COMPREHENSIVE_EXERCISES.filter((e) =>
        exerciseMatchesMuscle(e, 'chest', 'primary')
      )
      const involvesChest = COMPREHENSIVE_EXERCISES.filter((e) =>
        exerciseMatchesMuscle(e, 'chest', 'involves')
      )

      expect(involvesChest.length).toBeGreaterThan(primaryChest.length)
      // Dips or close-grip bench involving chest secondarily
      const dip = COMPREHENSIVE_EXERCISES.find((e) => e.id === 'ex_dips' || e.name.toLowerCase().includes('dips'))
      if (dip && dip.secondaryMuscles.some((m) => m.toLowerCase().includes('chest'))) {
        expect(exerciseMatchesMuscle(dip, 'chest', 'involves')).toBe(true)
      }
    })
  })

  describe('Rule 3: Bodyweight & Calisthenics Expansion', () => {
    it('has at least 100 bodyweight/calisthenics exercises', () => {
      const bodyweightExercises = COMPREHENSIVE_EXERCISES.filter(
        (e) =>
          e.usesBodyweight ||
          ['Bodyweight', 'Pull-up bar', 'Parallel bars', 'Gymnastic rings'].includes(e.equipment) ||
          e.equipment.toLowerCase().includes('bodyweight')
      )
      expect(bodyweightExercises.length).toBeGreaterThanOrEqual(180)
    })

    it('has static hold exercises with hold or duration trackingType', () => {
      const holds = COMPREHENSIVE_EXERCISES.filter(
        (e) => e.trackingType === 'hold' || e.trackingType === 'duration'
      )
      expect(holds.length).toBeGreaterThan(15)
      // Plank, hollow hold, dead hang, etc.
      const hasPlank = holds.some((e) => e.name.toLowerCase().includes('plank'))
      expect(hasPlank).toBe(true)
    })
  })

  describe('Rule 4: Multi-criteria filtering', () => {
    it('correctly filters Lower Body + Bodyweight', () => {
      const legBw = COMPREHENSIVE_EXERCISES.filter(
        (e) =>
          exerciseMatchesTaxonomyGroup(e, 'Lower Body') &&
          (e.usesBodyweight || e.equipment.toLowerCase().includes('bodyweight'))
      )
      expect(legBw.length).toBeGreaterThan(20)
      for (const ex of legBw) {
        expect(exerciseMatchesTaxonomyGroup(ex, 'Lower Body')).toBe(true)
        expect(ex.usesBodyweight || ex.equipment.toLowerCase().includes('bodyweight')).toBe(true)
      }
    })
  })
})
