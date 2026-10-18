import { describe, expect, it } from 'vitest'
import { validateAndRepair } from './validation'
import { createInitialData } from '../lib/storage'
import { makeSession, makeSet } from '../test/fixtures'

describe('validateAndRepair', () => {
  it('rejects structurally invalid payloads', () => {
    const result = validateAndRepair({ schemaVersion: 1, profile: 'nope' })
    expect(result.ok).toBe(false)
    expect(result.error).toBeTruthy()
  })

  it('rejects data from a newer schema version', () => {
    const data = createInitialData()
    data.schemaVersion = 999
    const result = validateAndRepair(data)
    expect(result.ok).toBe(false)
    expect(result.error).toContain('newer version')
  })

  it('removes duplicate ids', () => {
    const data = createInitialData()
    data.exercises = [data.exercises[0], { ...data.exercises[0] }]
    const result = validateAndRepair(data)
    expect(result.ok).toBe(true)
    expect(result.data?.exercises).toHaveLength(1)
    expect(result.report.repairs.some((r) => r.includes('duplicate'))).toBe(true)
  })

  it('preserves exercise image references and bundled visuals', () => {
    const data = createInitialData()
    data.exercises = [
      {
        ...data.exercises[0],
        mediaAssetId: 'asset_abc',
        visuals: { thumbnail: '/exercises/x/thumbnail.webp' },
      },
    ]
    const result = validateAndRepair(data)
    expect(result.ok).toBe(true)
    const exercise = result.data?.exercises[0]
    expect(exercise?.mediaAssetId).toBe('asset_abc')
    expect(exercise?.visuals?.thumbnail).toBe('/exercises/x/thumbnail.webp')
  })

  it('closes all but the most recent active session', () => {
    const data = createInitialData()
    data.sessions = [
      makeSession({ id: 'a', status: 'active', startedAt: '2026-01-01T10:00:00.000Z' }),
      makeSession({ id: 'b', status: 'active', startedAt: '2026-01-02T10:00:00.000Z' }),
    ]
    const result = validateAndRepair(data)
    const active = result.data?.sessions.filter((s) => s.status === 'active') ?? []
    expect(active).toHaveLength(1)
    expect(active[0].id).toBe('b')
  })

  it('orders sets within a session by sortOrder', () => {
    const data = createInitialData()
    data.sessions = [
      makeSession({
        sets: [makeSet({ id: 'set-2', sortOrder: 2 }), makeSet({ id: 'set-0', sortOrder: 0 })],
      }),
    ]
    const result = validateAndRepair(data)
    expect(result.data?.sessions[0].sets.map((s) => s.id)).toEqual(['set-0', 'set-2'])
  })

  it('merges duplicate nutrition days', () => {
    const data = createInitialData()
    data.nutrition = [
      { id: 'n1', date: '2026-01-01', meals: [], waterMl: 0 },
      { id: 'n2', date: '2026-01-01', meals: [], waterMl: 500 },
    ]
    const result = validateAndRepair(data)
    expect(result.data?.nutrition).toHaveLength(1)
  })

  it('drops personal records that reference deleted exercises', () => {
    const data = createInitialData()
    data.personalRecords = [
      {
        id: 'pr1',
        exerciseId: 'does-not-exist',
        kind: 'maxWeight',
        value: 100,
        weightKg: 100,
        reps: 5,
        date: '2026-01-01',
        sessionId: 'x',
      },
    ]
    const result = validateAndRepair(data)
    expect(result.data?.personalRecords).toHaveLength(0)
  })
})
