import type { BodyMeasurement, Exercise, WorkoutSession } from '../types'
import { sessionVolumeKg } from './progression'

/* ---------- date helpers (Monday-based weeks) ---------- */

export function isoDate(d: Date): string {
  return `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${`${d.getDate()}`.padStart(2, '0')}`
}

export function parseDate(iso: string): Date {
  return new Date(`${iso.slice(0, 10)}T00:00:00`)
}

export function startOfWeek(input: string | Date): Date {
  const d = typeof input === 'string' ? parseDate(input) : new Date(input)
  const day = d.getDay() // 0 = Sunday
  const diff = (day + 6) % 7 // days since Monday
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff)
  return monday
}

export function addDays(d: Date, n: number): Date {
  const copy = new Date(d)
  copy.setDate(copy.getDate() + n)
  return copy
}

export function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000)
}

export function weekKey(iso: string): string {
  return isoDate(startOfWeek(iso))
}

export function weekLabel(startIso: string): string {
  return parseDate(startIso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

/* ---------- weight & goal ---------- */

export function latestWeight(measurements: BodyMeasurement[]): number | null {
  const sorted = [...measurements]
    .filter((m) => m.weightKg !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  return sorted.length ? sorted[0].weightKg : null
}

export function sortedWeights(measurements: BodyMeasurement[]): BodyMeasurement[] {
  return [...measurements].filter((m) => m.weightKg !== null).sort((a, b) => (a.date < b.date ? -1 : 1))
}

export interface WeeklyWeight {
  week: string
  label: string
  averageKg: number
  entries: number
}

export function weeklyWeightAverages(measurements: BodyMeasurement[]): WeeklyWeight[] {
  const buckets = new Map<string, number[]>()
  for (const m of sortedWeights(measurements)) {
    const key = weekKey(m.date)
    const arr = buckets.get(key) ?? []
    arr.push(m.weightKg as number)
    buckets.set(key, arr)
  }
  return [...buckets.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([week, values]) => ({
      week,
      label: weekLabel(week),
      averageKg: values.reduce((s, v) => s + v, 0) / values.length,
      entries: values.length,
    }))
}

export interface GoalProgress {
  startWeightKg: number
  targetWeightKg: number
  currentWeightKg: number | null
  gainedKg: number
  remainingKg: number
  progressPct: number
  direction: 'gain' | 'loss' | 'maintain'
}

export function goalProgress(
  startWeightKg: number,
  targetWeightKg: number,
  currentWeightKg: number | null,
): GoalProgress {
  const current = currentWeightKg ?? startWeightKg
  const total = targetWeightKg - startWeightKg
  const gained = current - startWeightKg
  const direction: GoalProgress['direction'] = total > 0 ? 'gain' : total < 0 ? 'loss' : 'maintain'
  let progressPct = 0
  if (total !== 0) progressPct = Math.max(0, Math.min(100, (gained / total) * 100))
  return {
    startWeightKg,
    targetWeightKg,
    currentWeightKg,
    gainedKg: gained,
    remainingKg: targetWeightKg - current,
    progressPct,
    direction,
  }
}

export interface TrendResult {
  slopeKgPerWeek: number | null
  estimatedTargetDate: string | null
  diverging: boolean
  sampleSize: number
}

/**
 * Least-squares trend over body-weight entries. Only produces an estimated
 * target date when there is enough data (>= 5 entries spanning >= 14 days).
 */
export function weightTrend(
  measurements: BodyMeasurement[],
  targetWeightKg: number,
  targetGainRateKgPerWeek: number,
): TrendResult {
  const pts = sortedWeights(measurements)
  if (pts.length < 5) return { slopeKgPerWeek: null, estimatedTargetDate: null, diverging: false, sampleSize: pts.length }
  const first = parseDate(pts[0].date)
  const last = parseDate(pts[pts.length - 1].date)
  const span = daysBetween(first, last)
  if (span < 14) return { slopeKgPerWeek: null, estimatedTargetDate: null, diverging: false, sampleSize: pts.length }

  const xs = pts.map((p) => daysBetween(first, parseDate(p.date)))
  const ys = pts.map((p) => p.weightKg as number)
  const n = xs.length
  const meanX = xs.reduce((s, v) => s + v, 0) / n
  const meanY = ys.reduce((s, v) => s + v, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    num += (xs[i] - meanX) * (ys[i] - meanY)
    den += (xs[i] - meanX) ** 2
  }
  if (den === 0) return { slopeKgPerWeek: null, estimatedTargetDate: null, diverging: false, sampleSize: n }
  const slopePerDay = num / den
  const slopeKgPerWeek = slopePerDay * 7

  const current = ys[n - 1]
  let estimatedTargetDate: string | null = null
  const remaining = targetWeightKg - current
  if (slopePerDay > 0.0001 && remaining > 0) {
    const days = remaining / slopePerDay
    if (days < 3650) estimatedTargetDate = isoDate(addDays(last, Math.round(days)))
  }

  const monitoringWindow = 21
  const recent = pts.filter((p) => daysBetween(parseDate(p.date), last) <= monitoringWindow)
  const recentChange = recent.length >= 2 ? (recent[recent.length - 1].weightKg as number) - (recent[0].weightKg as number) : 0
  const diverging =
    targetGainRateKgPerWeek > 0 && slopeKgPerWeek !== null && slopeKgPerWeek <= 0.02 && recentChange <= 0.05

  return { slopeKgPerWeek, estimatedTargetDate, diverging, sampleSize: n }
}

/* ---------- training stats ---------- */

export function completedSessions(sessions: WorkoutSession[]): WorkoutSession[] {
  return sessions.filter((s) => s.status === 'completed' && !s.discarded)
}

export function sessionsInRange(
  sessions: WorkoutSession[],
  startIso: string,
  endIso: string,
): WorkoutSession[] {
  return completedSessions(sessions).filter((s) => s.date >= startIso && s.date <= endIso)
}

export function plannedPerWeek(templates: { isRestDay: boolean }[]): number {
  return templates.filter((t) => !t.isRestDay).length
}

export function countSessionsInWeek(sessions: WorkoutSession[], weekStart: string): number {
  const end = isoDate(addDays(parseDate(weekStart), 6))
  return completedSessions(sessions).filter((s) => s.date >= weekStart && s.date <= end).length
}

export interface StreakInfo {
  weeks: number
  thisWeekCompleted: number
  thisWeekPlanned: number
}

/**
 * A week "counts" when it contains at least `minSessions` completed workouts.
 * The in-progress week is not allowed to break a streak.
 */
export function currentStreak(
  sessions: WorkoutSession[],
  minSessions: number,
  planned: number,
): StreakInfo {
  const thisWeekStart = isoDate(startOfWeek(new Date()))
  const thisWeekCompleted = countSessionsInWeek(sessions, thisWeekStart)

  let streak = 0
  let cursor = startOfWeek(new Date())
  for (let i = 0; i < 520; i++) {
    const key = isoDate(cursor)
    const count = countSessionsInWeek(sessions, key)
    const isCurrent = i === 0
    if (count >= minSessions) {
      streak += 1
    } else if (!isCurrent) {
      break
    }
    cursor = addDays(cursor, -7)
  }
  return { weeks: streak, thisWeekCompleted, thisWeekPlanned: planned }
}

export interface WeeklyVolume {
  week: string
  label: string
  volumeKg: number
  sets: number
  workouts: number
}

export function weeklyVolumes(
  sessions: WorkoutSession[],
  exercisesById: Map<string, Exercise>,
): WeeklyVolume[] {
  const buckets = new Map<string, WeeklyVolume>()
  for (const s of completedSessions(sessions)) {
    const key = weekKey(s.date)
    const bucket =
      buckets.get(key) ?? { week: key, label: weekLabel(key), volumeKg: 0, sets: 0, workouts: 0 }
    bucket.volumeKg += sessionVolumeKg(s, exercisesById)
    bucket.sets += s.sets.filter((x) => x.type === 'working' && x.completed).length
    bucket.workouts += 1
    buckets.set(key, bucket)
  }
  return [...buckets.values()].sort((a, b) => (a.week < b.week ? -1 : 1))
}

export function rangeStart(days: number): string {
  return isoDate(addDays(new Date(), -(days - 1)))
}
