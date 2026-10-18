import { describe, expect, it } from 'vitest'
import {
  buildSuggestion,
  estimate1RM,
  exerciseHistory,
  fromStoredWeight,
  fromStoredWeightDisplay,
  totalLoadKg,
  toStoredWeight,
  weightIncrementFor,
  setVolumeKg,
} from './progression'
import { roundTo, toKg } from './units'
import { makeExercise, makeSession, makeSet, makeSettings } from '../test/fixtures'

const barbell = makeExercise({ id: 'bb', equipment: 'Barbell', category: 'legs', exerciseClass: 'compound' })
const dumbbell = makeExercise({ id: 'db', equipment: 'Dumbbell', unilateral: false })
const unilateral = makeExercise({ id: 'uni', equipment: 'Cable', unilateral: true })

describe('weight storage model', () => {
  it('keeps the entered value for barbells regardless of dumbbellInput', () => {
    expect(toStoredWeight(80, barbell, makeSettings({ dumbbellInput: 'pair' }))).toBe(80)
    expect(fromStoredWeight(80, barbell, makeSettings({ dumbbellInput: 'pair' }))).toBe(80)
  })

  it('halves and doubles dumbbell pairs so stored values stay per-implement', () => {
    const settings = makeSettings({ dumbbellInput: 'pair' })
    expect(toStoredWeight(30, dumbbell, settings)).toBe(15)
    expect(fromStoredWeight(15, dumbbell, settings)).toBe(30)
  })

  it('leaves dumbbell "each" mode untouched', () => {
    const settings = makeSettings({ dumbbellInput: 'each' })
    expect(toStoredWeight(15, dumbbell, settings)).toBe(15)
  })

  it('maps null to null', () => {
    expect(toStoredWeight(null, barbell, makeSettings())).toBeNull()
    expect(fromStoredWeight(null, barbell, makeSettings())).toBeNull()
  })
})

describe('weight input display unit conversion', () => {
  it('shows stored kg in the chosen unit', () => {
    const lb = makeSettings({ units: { weight: 'lb', length: 'cm' } })
    expect(roundTo(fromStoredWeightDisplay(100, 'lb', barbell, lb) as number, 1)).toBe(220.5)
    expect(fromStoredWeightDisplay(100, 'kg', barbell, lb)).toBe(100)
  })

  it('doubles pair-entry dumbbells before converting units', () => {
    const settings = makeSettings({ dumbbellInput: 'pair', units: { weight: 'lb', length: 'cm' } })
    // 15 kg per dumbbell -> 30 kg total -> ~66.1 lb
    expect(roundTo(fromStoredWeightDisplay(15, 'lb', dumbbell, settings) as number, 1)).toBe(66.1)
  })

  it('round-trips a typed value back to per-implement kg', () => {
    const settings = makeSettings({ dumbbellInput: 'pair', units: { weight: 'lb', length: 'cm' } })
    const entered = fromStoredWeightDisplay(15, 'lb', dumbbell, settings) as number
    expect(toStoredWeight(toKg(entered, 'lb'), dumbbell, settings)).toBeCloseTo(15, 5)
  })

  it('maps null to null', () => {
    expect(fromStoredWeightDisplay(null, 'lb', barbell, makeSettings())).toBeNull()
  })
})

describe('totalLoadKg', () => {
  it('doubles dumbbells and unilateral work, not barbells', () => {
    expect(totalLoadKg(makeSet({ weightKg: 50, reps: 5 }), barbell)).toBe(50)
    expect(totalLoadKg(makeSet({ weightKg: 15 }), dumbbell)).toBe(30)
    expect(totalLoadKg(makeSet({ weightKg: 20 }), unilateral)).toBe(40)
  })
})

describe('setVolumeKg', () => {
  it('is zero for incomplete sets or missing reps', () => {
    expect(setVolumeKg(makeSet({ completed: false }), barbell)).toBe(0)
    expect(setVolumeKg(makeSet({ reps: null }), barbell)).toBe(0)
  })

  it('multiplies total load by reps', () => {
    expect(setVolumeKg(makeSet({ weightKg: 50, reps: 8 }), barbell)).toBe(400)
    expect(setVolumeKg(makeSet({ weightKg: 20, reps: 8 }), unilateral)).toBe(320)
  })
})

describe('estimate1RM', () => {
  it('only estimates within the 3-12 rep window', () => {
    expect(estimate1RM(100, 2)).toBeNull()
    expect(estimate1RM(100, 13)).toBeNull()
    expect(estimate1RM(0, 5)).toBeNull()
  })

  it('uses the Epley formula', () => {
    expect(estimate1RM(100, 10)).toBeCloseTo(100 * (1 + 10 / 30), 5)
  })
})

describe('weightIncrementFor', () => {
  it('uses 5 kg for compound legs and 2.5 kg otherwise', () => {
    expect(weightIncrementFor(barbell)).toBe(5)
    expect(weightIncrementFor(dumbbell)).toBe(2.5)
  })
})

describe('exerciseHistory', () => {
  it('returns completed sessions newest first and excludes discarded/active', () => {
    const sessions = [
      makeSession({ id: 'a', date: '2026-01-01', sets: [makeSet({ exerciseId: 'bb' })] }),
      makeSession({ id: 'b', date: '2026-03-01', sets: [makeSet({ exerciseId: 'bb' })] }),
      makeSession({ id: 'c', date: '2026-02-01', status: 'active', sets: [makeSet({ exerciseId: 'bb' })] }),
      makeSession({ id: 'd', date: '2026-04-01', discarded: true, sets: [makeSet({ exerciseId: 'bb' })] }),
    ]
    const history = exerciseHistory(sessions, 'bb', barbell)
    expect(history.map((h) => h.sessionId)).toEqual(['b', 'a'])
  })
})

describe('buildSuggestion', () => {
  it('returns a baseline when there is no history', () => {
    expect(buildSuggestion(barbell, [], 8, 12).kind).toBe('baseline')
  })

  it('suggests adding weight only when every working set hits the top of the range', () => {
    const session = makeSession({
      sets: [
        makeSet({ exerciseId: 'bb', reps: 12 }),
        makeSet({ id: 's2', exerciseId: 'bb', reps: 12, sortOrder: 1 }),
      ],
    })
    const suggestion = buildSuggestion(barbell, exerciseHistory([session], 'bb', barbell), 8, 12)
    expect(suggestion.kind).toBe('increase_weight')
    expect(suggestion.toWeightKg).toBe((suggestion.fromWeightKg ?? 0) + 5)
  })

  it('holds the weight when a set falls below the minimum', () => {
    const sessions = [
      makeSession({
        id: 'a',
        sets: [makeSet({ exerciseId: 'bb', reps: 10 }), makeSet({ exerciseId: 'bb', reps: 5, sortOrder: 1 })],
      }),
    ]
    expect(buildSuggestion(barbell, exerciseHistory(sessions, 'bb', barbell), 8, 12).kind).toBe('hold')
  })

  it('asks for more reps when sets are between the range bounds', () => {
    const sessions = [makeSession({ sets: [makeSet({ exerciseId: 'bb', reps: 10 })] })]
    expect(buildSuggestion(barbell, exerciseHistory(sessions, 'bb', barbell), 8, 12).kind).toBe('add_reps')
  })

  it('is confident when top reps were hit with reps in reserve', () => {
    const sets = [
      makeSet({ exerciseId: 'bb', reps: 12, rir: 3 }),
      makeSet({ exerciseId: 'bb', reps: 12, rir: 2, id: 'set-2', sortOrder: 1 }),
    ]
    const suggestion = buildSuggestion(barbell, exerciseHistory([makeSession({ sets })], 'bb', barbell), 8, 12)
    expect(suggestion.kind).toBe('increase_weight')
    expect(suggestion.rirKnown).toBe(true)
    expect(suggestion.averageRir).toBeCloseTo(2.5, 5)
    expect(suggestion.message).toContain('room')
  })

  it('cautions when top reps were only hit at failure', () => {
    const sets = [makeSet({ exerciseId: 'bb', reps: 12, rir: 0 })]
    const suggestion = buildSuggestion(barbell, exerciseHistory([makeSession({ sets })], 'bb', barbell), 8, 12)
    expect(suggestion.kind).toBe('increase_weight')
    expect(suggestion.message).toContain('close to failure')
  })

  it('holds instead of adding reps when the lifter was at failure below the top', () => {
    const sets = [makeSet({ exerciseId: 'bb', reps: 10, rir: 0 })]
    const suggestion = buildSuggestion(barbell, exerciseHistory([makeSession({ sets })], 'bb', barbell), 8, 12)
    expect(suggestion.kind).toBe('hold')
    expect(suggestion.message).toContain('failure')
  })
})
