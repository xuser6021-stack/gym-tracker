import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { BodyMeasurement } from '../types'
import {
  currentStreak,
  goalProgress,
  isoDate,
  latestWeight,
  startOfWeek,
  weeklyVolumes,
  weeklyWeightAverages,
  weightTrend,
} from './stats'
import { makeExercise, makeSession, makeSet } from '../test/fixtures'

function m(date: string, weightKg: number | null, id = date): BodyMeasurement {
  return {
    id,
    date,
    weightKg,
    waistCm: null,
    chestCm: null,
    armCm: null,
    thighCm: null,
    hipCm: null,
    photos: [],
    note: '',
  }
}

describe('date helpers', () => {
  it('formats local dates with zero padding', () => {
    expect(isoDate(new Date(2026, 0, 5))).toBe('2026-01-05')
    expect(isoDate(new Date(2026, 11, 31))).toBe('2026-12-31')
  })

  it('anchors weeks on Monday', () => {
    // 2026-10-17 is a Saturday; 2026-10-18 a Sunday; 2026-10-19 a Monday.
    expect(isoDate(startOfWeek('2026-10-17'))).toBe('2026-10-12')
    expect(isoDate(startOfWeek('2026-10-18'))).toBe('2026-10-12')
    expect(isoDate(startOfWeek('2026-10-19'))).toBe('2026-10-19')
  })
})

describe('goalProgress', () => {
  it('computes gain progress and remaining weight', () => {
    const g = goalProgress(54, 60, 57)
    expect(g.direction).toBe('gain')
    expect(g.gainedKg).toBeCloseTo(3)
    expect(g.remainingKg).toBeCloseTo(3)
    expect(g.progressPct).toBeCloseTo(50)
  })

  it('detects a loss goal', () => {
    const g = goalProgress(90, 80, 85)
    expect(g.direction).toBe('loss')
    expect(g.gainedKg).toBeCloseTo(-5)
    expect(g.progressPct).toBeCloseTo(50)
  })

  it('clamps progress to 0-100 and treats a null current as the start', () => {
    expect(goalProgress(54, 60, 70).progressPct).toBe(100)
    expect(goalProgress(54, 60, 50).progressPct).toBe(0)
    const noData = goalProgress(54, 60, null)
    expect(noData.currentWeightKg).toBeNull()
    expect(noData.gainedKg).toBe(0)
  })

  it('reports maintain when start equals target', () => {
    expect(goalProgress(60, 60, 61).direction).toBe('maintain')
    expect(goalProgress(60, 60, 61).progressPct).toBe(0)
  })
})

describe('weightTrend', () => {
  it('needs at least 5 entries spanning 14 days', () => {
    expect(weightTrend([m('2026-01-01', 54), m('2026-01-02', 54.2)], 60, 0.25).slopeKgPerWeek).toBeNull()
    const close = ['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04', '2026-01-05'].map((d, i) =>
      m(d, 54 + i * 0.1),
    )
    expect(weightTrend(close, 60, 0.25).slopeKgPerWeek).toBeNull()
  })

  it('estimates slope and a target date for a steady gain', () => {
    const points = [
      m('2026-01-01', 54),
      m('2026-01-08', 54.5),
      m('2026-01-15', 55),
      m('2026-01-22', 55.5),
      m('2026-01-29', 56),
    ]
    const trend = weightTrend(points, 60, 0.5)
    expect(trend.slopeKgPerWeek).toBeCloseTo(0.5, 2)
    expect(trend.sampleSize).toBe(5)
    expect(trend.estimatedTargetDate).not.toBeNull()
    expect(trend.diverging).toBe(false)
  })

  it('flags divergence when weight is flat but the goal is to gain', () => {
    const flat = [
      m('2026-01-01', 54),
      m('2026-01-08', 54),
      m('2026-01-15', 54),
      m('2026-01-22', 54),
      m('2026-02-01', 54),
    ]
    expect(weightTrend(flat, 60, 0.25).diverging).toBe(true)
  })
})

describe('weeklyWeightAverages', () => {
  it('averages entries per Monday-based week, ignoring null weights', () => {
    const weeks = weeklyWeightAverages([
      m('2026-01-05', 54),
      m('2026-01-07', 55, 'b'),
      m('2026-01-12', 56, 'c'),
      m('2026-01-13', null, 'd'),
    ])
    expect(weeks.map((w) => w.week)).toEqual(['2026-01-05', '2026-01-12'])
    expect(weeks[0].averageKg).toBeCloseTo(54.5)
    expect(weeks[0].entries).toBe(2)
    expect(weeks[1].averageKg).toBeCloseTo(56)
  })

  it('returns the latest measured weight', () => {
    expect(latestWeight([m('2026-01-01', 54), m('2026-02-01', 56), m('2026-03-01', null)])).toBe(56)
  })
})

describe('training stats', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Saturday 2026-10-17 -> current week starts Monday 2026-10-12.
    vi.setSystemTime(new Date(2026, 9, 17, 12))
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('keeps a streak alive when the current week is not finished yet', () => {
    const sessions = [
      makeSession({ id: 'a', date: '2026-10-13' }),
      makeSession({ id: 'b', date: '2026-10-07' }),
    ]
    const streak = currentStreak(sessions, 1, 6)
    expect(streak.thisWeekCompleted).toBe(1)
    expect(streak.thisWeekPlanned).toBe(6)
    expect(streak.weeks).toBe(2)
  })

  it('does not break a streak for an empty in-progress week', () => {
    const sessions = [makeSession({ id: 'b', date: '2026-10-07' })]
    const streak = currentStreak(sessions, 1, 6)
    expect(streak.thisWeekCompleted).toBe(0)
    expect(streak.weeks).toBe(1)
  })

  it('sums weekly volume from completed working sets only', () => {
    const exercises = new Map([['ex-1', makeExercise({ id: 'ex-1' })]])
    const sessions = [
      makeSession({
        id: 'a',
        date: '2026-10-13',
        sets: [
          makeSet({ id: 's1', weightKg: 40, reps: 8 }),
          makeSet({ id: 's2', weightKg: 40, reps: 8, type: 'warmup' }),
          makeSet({ id: 's3', weightKg: 40, reps: 8, completed: false }),
        ],
      }),
      makeSession({
        id: 'b',
        date: '2026-10-14',
        sets: [makeSet({ id: 's4', weightKg: 50, reps: 5 })],
      }),
    ]
    const weeks = weeklyVolumes(sessions, exercises)
    expect(weeks).toHaveLength(1)
    expect(weeks[0].workouts).toBe(2)
    expect(weeks[0].sets).toBe(2)
    expect(weeks[0].volumeKg).toBeCloseTo(40 * 8 + 50 * 5)
  })
})
