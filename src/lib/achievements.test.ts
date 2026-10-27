import { describe, expect, it } from 'vitest'
import { evaluateAchievements, computeMonthlyRecap } from './achievements'
import { createInitialData } from './storage'
import { makeSession, makeSet } from '../test/fixtures'
import { SEED_EXERCISES } from '../data/exercises'

describe('Achievements and Gamification', () => {
  const exercisesById = new Map(SEED_EXERCISES.map((e) => [e.id, e]))

  it('unlocks first_workout when user completes 1 session', () => {
    const data = createInitialData()
    data.sessions = [
      makeSession({
        status: 'completed',
        sets: [makeSet({ completed: true, type: 'working', weightKg: 50, reps: 10 })],
      }),
    ]

    const unlocked = evaluateAchievements(data, exercisesById)
    expect(unlocked.some((a) => a.key === 'first_workout')).toBe(true)
  })

  it('unlocks volume_10k when total working load surpasses 10,000 kg', () => {
    const data = createInitialData()
    data.sessions = [
      makeSession({
        status: 'completed',
        sets: [
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }), // 1,000 kg
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }),
          makeSet({ completed: true, type: 'working', weightKg: 100, reps: 10 }), // 10,000 kg total
        ],
      }),
    ]

    const unlocked = evaluateAchievements(data, exercisesById)
    expect(unlocked.some((a) => a.key === 'volume_10k')).toBe(true)
  })

  it('does not re-unlock already recorded achievements', () => {
    const data = createInitialData()
    data.sessions = [makeSession({ status: 'completed' })]
    data.achievements = [
      {
        id: 'ach_first_workout',
        key: 'first_workout',
        unlockedAt: '2026-01-01T00:00:00Z',
        title: 'First Step',
        description: 'Completed',
        icon: '🏋️',
      },
    ]

    const unlocked = evaluateAchievements(data, exercisesById)
    expect(unlocked.some((a) => a.key === 'first_workout')).toBe(false)
  })

  describe('computeMonthlyRecap', () => {
    it('summarizes total workouts, tonnage, and top exercise for the current month', () => {
      const now = new Date('2026-06-15T10:00:00Z')
      const bench = SEED_EXERCISES[0]
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-06-05',
          sets: [makeSet({ exerciseId: bench.id, completed: true, type: 'working', weightKg: 80, reps: 5 })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-06-10',
          sets: [makeSet({ exerciseId: bench.id, completed: true, type: 'working', weightKg: 80, reps: 5 })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-05-20', // Previous month
          sets: [makeSet({ exerciseId: bench.id, completed: true, type: 'working', weightKg: 80, reps: 5 })],
        }),
      ]
      const recap = computeMonthlyRecap(sessions, [], exercisesById, now)
      expect(recap.totalWorkouts).toBe(2)
      expect(recap.monthName).toBe('June')
      expect(recap.totalWorkingSets).toBe(2)
      expect(recap.topExerciseName).toBe(bench.name)
    })
  })
})
