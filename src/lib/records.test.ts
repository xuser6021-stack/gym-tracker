import { describe, expect, it } from 'vitest'
import { currentRecords, detectSessionPRs, getRecord } from './records'
import type { PersonalRecord } from '../types'
import { makeExercise, makeSession, makeSet } from '../test/fixtures'

const barbell = makeExercise({ id: 'bb', equipment: 'Barbell' })
const exercises = new Map([['bb', barbell]])

function record(overrides: Partial<PersonalRecord>): PersonalRecord {
  return {
    id: 'pr-x',
    exerciseId: 'bb',
    kind: 'maxWeight',
    value: 100,
    weightKg: 100,
    reps: 5,
    date: '2025-01-01',
    sessionId: 'old',
    ...overrides,
  }
}

describe('detectSessionPRs', () => {
  it('detects each record kind from completed working sets', () => {
    const session = makeSession({
      sets: [
        makeSet({ exerciseId: 'bb', weightKg: 100, reps: 5 }),
        makeSet({ exerciseId: 'bb', weightKg: 90, reps: 8, sortOrder: 1 }),
      ],
    })
    const prs = detectSessionPRs(session, exercises, [])
    const kinds = prs.map((p) => p.kind).sort()
    expect(kinds).toEqual(['bestVolume', 'e1rm', 'maxReps', 'maxWeight'])
    const maxWeight = prs.find((p) => p.kind === 'maxWeight')
    expect(maxWeight?.value).toBe(100)
    const bestVolume = prs.find((p) => p.kind === 'bestVolume')
    expect(bestVolume?.value).toBe(720)
  })

  it('ignores warmups, incomplete sets and repeat sessions below the record', () => {
    const session = makeSession({
      sets: [
        makeSet({ exerciseId: 'bb', type: 'warmup', weightKg: 200, reps: 10 }),
        makeSet({ exerciseId: 'bb', completed: false, weightKg: 200, reps: 10, sortOrder: 1 }),
      ],
    })
    expect(detectSessionPRs(session, exercises, [])).toHaveLength(0)
  })

  it('does not re-award a record that is not beaten', () => {
    const existing = [record({ kind: 'maxWeight', value: 120 })]
    const session = makeSession({ sets: [makeSet({ exerciseId: 'bb', weightKg: 100, reps: 5 })] })
    const prs = detectSessionPRs(session, exercises, existing)
    expect(prs.some((p) => p.kind === 'maxWeight')).toBe(false)
  })
})

describe('currentRecords / getRecord', () => {
  it('keeps the highest value per exercise and kind', () => {
    const records = [record({ value: 100 }), record({ id: 'pr-y', value: 120 })]
    expect(currentRecords(records).size).toBe(1)
    expect(getRecord(records, 'bb', 'maxWeight')?.value).toBe(120)
  })
})
