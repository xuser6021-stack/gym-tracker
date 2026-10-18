import type { WorkoutSession } from '../types'

export interface HistoryFilter {
  query: string
  templateName: string
}

/**
 * Filters completed sessions for the workout history list. A session matches when
 * its template name or notes contain the (case-insensitive) query, or when any
 * prescribed exercise's name matches. `templateName === 'all'` disables that filter.
 */
export function filterSessions(
  sessions: WorkoutSession[],
  filter: HistoryFilter,
  exerciseName: (id: string) => string | undefined,
): WorkoutSession[] {
  const q = filter.query.trim().toLowerCase()
  return sessions.filter((s) => {
    if (filter.templateName !== 'all' && s.templateName !== filter.templateName) return false
    if (!q) return true
    if (s.templateName.toLowerCase().includes(q)) return true
    if (s.notes.toLowerCase().includes(q)) return true
    return (s.prescribed ?? []).some((te) =>
      (exerciseName(te.exerciseId) ?? '').toLowerCase().includes(q),
    )
  })
}
