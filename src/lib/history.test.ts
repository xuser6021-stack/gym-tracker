import { describe, expect, it } from 'vitest'
import type { TemplateExercise } from '../types'
import { filterSessions } from './history'
import { makeSession } from '../test/fixtures'

const names: Record<string, string> = { 'ex-1': 'Bench Press', 'ex-2': 'Squat' }
const nameOf = (id: string) => names[id]

const prescribed = (exerciseId: string): TemplateExercise => ({
  id: `te-${exerciseId}`,
  exerciseId,
  sets: 3,
  repsMin: 8,
  repsMax: 12,
})

const sessions = [
  makeSession({ id: 'a', templateName: 'Push Day', notes: 'felt strong' }),
  makeSession({
    id: 'b',
    templateName: 'Leg Day',
    notes: '',
    prescribed: [prescribed('ex-2')],
  }),
  makeSession({ id: 'c', templateName: 'Push Day', notes: 'squat form cues' }),
]

describe('filterSessions', () => {
  it('returns everything with an empty filter', () => {
    expect(filterSessions(sessions, { query: '', templateName: 'all' }, nameOf)).toHaveLength(3)
  })

  it('filters by template name', () => {
    const out = filterSessions(sessions, { query: '', templateName: 'Push Day' }, nameOf)
    expect(out.map((s) => s.id)).toEqual(['a', 'c'])
  })

  it('matches notes case-insensitively', () => {
    const out = filterSessions(sessions, { query: 'STRONG', templateName: 'all' }, nameOf)
    expect(out.map((s) => s.id)).toEqual(['a'])
  })

  it('matches prescribed exercise names', () => {
    const out = filterSessions(sessions, { query: 'squat', templateName: 'all' }, nameOf)
    expect(out.map((s) => s.id)).toEqual(['b', 'c'])
  })

  it('combines a template filter with a query', () => {
    const out = filterSessions(sessions, { query: 'squat', templateName: 'Push Day' }, nameOf)
    expect(out.map((s) => s.id)).toEqual(['c'])
  })
})
