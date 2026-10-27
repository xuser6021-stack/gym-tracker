import { describe, expect, it } from 'vitest'
import { detectPlateau, calculateMuscleRecovery, getExerciseAlternatives, generateCoachingInsights } from './coaching'
import { SEED_EXERCISES } from '../data/exercises'
import { makeSession, makeSet } from '../test/fixtures'

describe('Coaching Engine', () => {
  const bench = SEED_EXERCISES.find((e) => e.id === 'ex_barbell_bench_press')!
  const exercisesById = new Map(SEED_EXERCISES.map((e) => [e.id, e]))

  describe('detectPlateau', () => {
    it('returns isPlateau: false when history is under 3 sessions', () => {
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-01-01',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 8, type: 'working' })],
        }),
      ]
      const result = detectPlateau(bench, sessions)
      expect(result.isPlateau).toBe(false)
    })

    it('detects a plateau when weight and reps stay flat for 3+ sessions', () => {
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-01-15',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 8, type: 'working' })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-01-10',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 8, type: 'working' })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-01-05',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 8, type: 'working' })],
        }),
      ]
      const result = detectPlateau(bench, sessions)
      expect(result.isPlateau).toBe(true)
      expect(result.recommendation).toContain('deload')
    })

    it('does not flag a plateau when reps or weight increased', () => {
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-01-15',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 82.5, reps: 8, type: 'working' })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-01-10',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 8, type: 'working' })],
        }),
        makeSession({
          status: 'completed',
          date: '2026-01-05',
          sets: [makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 7, type: 'working' })],
        }),
      ]
      const result = detectPlateau(bench, sessions)
      expect(result.isPlateau).toBe(false)
    })
  })

  describe('calculateMuscleRecovery', () => {
    it('marks muscle as fatigued when trained < 24h ago with 4+ working sets', () => {
      const now = new Date('2026-05-10T12:00:00Z')
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-05-10',
          finishedAt: '2026-05-10T08:00:00Z', // 4h ago
          sets: [
            makeSet({ exerciseId: bench.id, completed: true, type: 'working' }),
            makeSet({ exerciseId: bench.id, completed: true, type: 'working' }),
            makeSet({ exerciseId: bench.id, completed: true, type: 'working' }),
            makeSet({ exerciseId: bench.id, completed: true, type: 'working' }),
          ],
        }),
      ]
      const recoveries = calculateMuscleRecovery(sessions, exercisesById, now)
      const chest = recoveries.find((r) => r.muscle === 'Chest')
      expect(chest?.status).toBe('fatigued')
      expect(chest?.setsInLast48h).toBe(4)
    })

    it('marks muscle as ready when trained 48-96h ago', () => {
      const now = new Date('2026-05-12T12:00:00Z')
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-05-10',
          finishedAt: '2026-05-10T10:00:00Z', // 50h ago
          sets: [makeSet({ exerciseId: bench.id, completed: true, type: 'working' })],
        }),
      ]
      const recoveries = calculateMuscleRecovery(sessions, exercisesById, now)
      const chest = recoveries.find((r) => r.muscle === 'Chest')
      expect(chest?.status).toBe('ready')
    })
  })

  describe('getExerciseAlternatives', () => {
    it('finds other exercises in the same muscle group or category', () => {
      const alts = getExerciseAlternatives(bench, SEED_EXERCISES)
      expect(alts.length).toBeGreaterThan(0)
      expect(alts.every((a) => a.id !== bench.id)).toBe(true)
      expect(alts.some((a) => a.primaryMuscle === bench.primaryMuscle || a.category === bench.category)).toBe(true)
    })
  })

  describe('generateCoachingInsights', () => {
    it('generates overload recommendation when all sets reach top of rep range', () => {
      const sessions = [
        makeSession({
          status: 'completed',
          date: '2026-01-01',
          sets: [
            makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 10, type: 'working' }),
            makeSet({ exerciseId: bench.id, completed: true, weightKg: 80, reps: 10, type: 'working' }),
          ],
        }),
      ]
      const templates = [
        {
          exercises: [{ exerciseId: bench.id, repsMin: 6, repsMax: 10 }],
        },
      ]
      const insights = generateCoachingInsights(sessions, [bench], templates, exercisesById)
      const overload = insights.find((i) => i.type === 'increase')
      expect(overload).toBeDefined()
      expect(overload?.message).toContain('top of rep range')
    })
  })
})
