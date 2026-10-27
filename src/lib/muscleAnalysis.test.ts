import { describe, expect, it } from 'vitest'
import {
  calculateWeeklyMuscleAnalysis,
  getWeekRange,
  mapToMajorMuscleGroup,
} from './muscleAnalysis'
import type { Exercise, WorkoutSession } from '../types'

describe('muscleAnalysis lib', () => {
  it('maps various exercise muscle terms to major muscle groups', () => {
    expect(mapToMajorMuscleGroup('Upper chest')).toBe('Chest')
    expect(mapToMajorMuscleGroup('Lats')).toBe('Back')
    expect(mapToMajorMuscleGroup('Rear delts')).toBe('Shoulders')
    expect(mapToMajorMuscleGroup('Brachialis')).toBe('Biceps')
    expect(mapToMajorMuscleGroup('Triceps')).toBe('Triceps')
    expect(mapToMajorMuscleGroup('Quadriceps')).toBe('Quadriceps')
    expect(mapToMajorMuscleGroup('Hamstrings')).toBe('Hamstrings')
    expect(mapToMajorMuscleGroup('Glutes')).toBe('Glutes')
    expect(mapToMajorMuscleGroup('Soleus')).toBe('Calves')
    expect(mapToMajorMuscleGroup('Obliques')).toBe('Core')
    expect(mapToMajorMuscleGroup('Unknown')).toBe(null)
  })

  it('calculates week range from Monday to Sunday', () => {
    // 2026-10-27 is a Tuesday
    const range = getWeekRange('2026-10-27')
    expect(range.start).toBe('2026-10-26') // Monday
    expect(range.end).toBe('2026-11-01') // Sunday
  })

  it('correctly aggregates completed sets with primary and secondary contributions', () => {
    const exercises: Exercise[] = [
      {
        id: 'bench',
        name: 'Bench Press',
        primaryMuscle: 'Chest',
        secondaryMuscles: ['Triceps', 'Front delts'],
        equipment: 'Barbell',
        category: 'push',
        exerciseClass: 'compound',
        repRange: '8-10',
        instructions: '',
        mistakes: '',
        isCustom: false,
        favorite: false,
        usesBodyweight: false,
        unilateral: false,
      },
    ]

    const exercisesById = new Map<string, Exercise>(exercises.map((e) => [e.id, e]))

    const sessions: WorkoutSession[] = [
      {
        id: 'sess1',
        templateId: null,
        templateName: 'Chest Day',
        dayLabel: 'Monday',
        prescribed: null,
        date: '2026-10-26',
        startedAt: '2026-10-26T10:00:00.000Z',
        finishedAt: '2026-10-26T11:00:00.000Z',
        status: 'completed',
        sets: [
          {
            id: 's1',
            exerciseId: 'bench',
            type: 'working',
            weightKg: 80,
            reps: 10,
            completed: true,
            rir: 2,
            note: '',
            perSide: false,
            sortOrder: 0,
          },
          {
            id: 's2',
            exerciseId: 'bench',
            type: 'working',
            weightKg: 80,
            reps: 10,
            completed: true,
            rir: 1,
            note: '',
            perSide: false,
            sortOrder: 1,
          },
        ],
        notes: '',
        durationSeconds: 3600,
      },
    ]

    const analysis = calculateWeeklyMuscleAnalysis(sessions, exercisesById, '2026-10-27')
    expect(analysis.totalCompletedSets).toBe(2)
    expect(analysis.totalVolumeKg).toBe(1600)
    expect(analysis.totalWorkoutDays).toBe(1)

    const chest = analysis.muscleDistribution.find((m) => m.muscleGroup === 'Chest')
    expect(chest?.primarySets).toBe(2)
    expect(chest?.calculatedSets).toBe(2)

    const triceps = analysis.muscleDistribution.find((m) => m.muscleGroup === 'Triceps')
    expect(triceps?.primarySets).toBe(0)
    expect(triceps?.secondarySets).toBe(2)
    expect(triceps?.calculatedSets).toBe(1.0) // 2 * 0.5

    const shoulders = analysis.muscleDistribution.find((m) => m.muscleGroup === 'Shoulders')
    expect(shoulders?.secondarySets).toBe(2)
    expect(shoulders?.calculatedSets).toBe(1.0)
  })
})
