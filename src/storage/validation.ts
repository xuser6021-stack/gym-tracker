import type { AppData } from '../types'
import { appDataSchema } from '../lib/validation'

/** Bump when the persisted document shape changes; keep in sync with lib/storage. */
export const CURRENT_SCHEMA_VERSION = 1

export interface IntegrityReport {
  /** Fatal issues: the payload must not be accepted as-is. */
  problems: string[]
  /** Non-destructive fixes that were applied to make the payload safe. */
  repairs: string[]
  /** Informational notes that do not block acceptance. */
  warnings: string[]
}

export interface ValidationReport {
  ok: boolean
  error?: string
  data?: AppData
  report: IntegrityReport
}

function emptyReport(): IntegrityReport {
  return { problems: [], repairs: [], warnings: [] }
}

function dedupeById<T extends { id: string }>(rows: T[], label: string, report: IntegrityReport): T[] {
  const seen = new Set<string>()
  const out: T[] = []
  let removed = 0
  for (const row of rows) {
    if (seen.has(row.id)) {
      removed += 1
      continue
    }
    seen.add(row.id)
    out.push(row)
  }
  if (removed > 0) report.repairs.push(`Removed ${removed} duplicate ${label}.`)
  return out
}

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}/.test(value)
}

/**
 * Validate a persisted/imported payload, then apply safe, non-destructive repairs
 * (id de-duplication, ordering, single-active-session enforcement). Never throws.
 */
export function validateAndRepair(input: unknown): ValidationReport {
  const report = emptyReport()
  const parsed = appDataSchema.safeParse(input)
  if (!parsed.success) {
    const issue = parsed.error.issues[0]
    const path = issue?.path.join('.') || 'root'
    return { ok: false, error: `${path}: ${issue?.message ?? 'invalid data'}`, report }
  }

  const data = parsed.data as AppData

  if (data.schemaVersion > CURRENT_SCHEMA_VERSION) {
    const problem = `This data was created by a newer version of IronTrack (schema v${data.schemaVersion}). Update the app first.`
    report.problems.push(problem)
    return { ok: false, error: problem, report }
  }

  data.exercises = dedupeById(data.exercises, 'exercises', report)
  data.templates = dedupeById(data.templates, 'templates', report)
  data.sessions = dedupeById(data.sessions, 'sessions', report)
  data.measurements = dedupeById(data.measurements, 'measurements', report)
  data.mealTemplates = dedupeById(data.mealTemplates, 'meal templates', report)

  const exerciseIds = new Set(data.exercises.map((e) => e.id))

  const missingSets = data.sessions.reduce(
    (sum, s) => sum + s.sets.filter((set) => !exerciseIds.has(set.exerciseId)).length,
    0,
  )
  if (missingSets > 0) {
    report.warnings.push(
      `${missingSets} logged set(s) reference an exercise that is no longer in the library.`,
    )
  }
  const missingTemplateRefs = data.templates.reduce(
    (sum, t) => sum + t.exercises.filter((te) => !exerciseIds.has(te.exerciseId)).length,
    0,
  )
  if (missingTemplateRefs > 0) {
    report.warnings.push('Some template exercises reference missing library items.')
  }

  for (const session of data.sessions) {
    session.sets = [...session.sets].sort((a, b) => a.sortOrder - b.sortOrder)
    if (!isIsoDate(session.date)) {
      const derived = new Date(session.startedAt)
      session.date = Number.isNaN(derived.getTime())
        ? session.date
        : derived.toISOString().slice(0, 10)
      report.repairs.push('Corrected a session with an invalid date.')
    }
    if (session.finishedAt && session.finishedAt < session.startedAt) {
      session.finishedAt = session.startedAt
      session.durationSeconds = 0
      report.repairs.push('Corrected a session with an inconsistent finish time.')
    }
  }

  const activeSessions = data.sessions.filter((s) => s.status === 'active')
  if (activeSessions.length > 1) {
    const keep = activeSessions.reduce((a, b) => (a.startedAt >= b.startedAt ? a : b))
    for (const session of activeSessions) {
      if (session.id === keep.id) continue
      session.status = 'completed'
      session.finishedAt = session.finishedAt ?? session.startedAt
    }
    report.repairs.push(`Closed ${activeSessions.length - 1} leftover unfinished session(s).`)
  }

  const seenDates = new Set<string>()
  const nutrition: AppData['nutrition'] = []
  for (const day of data.nutrition) {
    if (seenDates.has(day.date)) {
      report.repairs.push('Merged a duplicate nutrition day.')
      continue
    }
    seenDates.add(day.date)
    nutrition.push(day)
  }
  data.nutrition = nutrition

  const validRecords = data.personalRecords.filter((pr) => exerciseIds.has(pr.exerciseId))
  if (validRecords.length !== data.personalRecords.length) {
    report.repairs.push('Removed personal records for deleted exercises.')
  }
  data.personalRecords = dedupeById(validRecords, 'personal records', report)

  return { ok: true, data, report }
}
