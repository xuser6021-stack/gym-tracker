import type { AppSettings, Exercise, SetRecord, WeightUnit, WorkoutSession } from '../types'
import { displayWeight } from './units'

export function isDumbbellExercise(exercise: Exercise | undefined): boolean {
  if (!exercise) return false
  return exercise.equipment.toLowerCase().includes('dumbbell')
}

/**
 * Weights are stored internally as the load for a single implement (one dumbbell,
 * one side of a barbell, one stack). The `dumbbellInput` setting only changes how
 * the number is interpreted/displayed, so historical comparison stays consistent.
 */
export function toStoredWeight(
  entered: number | null,
  exercise: Exercise | undefined,
  settings: AppSettings,
): number | null {
  if (entered === null || Number.isNaN(entered)) return null
  if (isDumbbellExercise(exercise) && settings.dumbbellInput === 'pair') {
    return entered / 2
  }
  return entered
}

export function fromStoredWeight(
  stored: number | null,
  exercise: Exercise | undefined,
  settings: AppSettings,
): number | null {
  if (stored === null || Number.isNaN(stored)) return null
  if (isDumbbellExercise(exercise) && settings.dumbbellInput === 'pair') {
    return stored * 2
  }
  return stored
}

/**
 * The number the user edits for a set: stored per-implement kg converted into the
 * user's display unit (and doubled for pair-entry dumbbells). Inverse of the
 * conversion the store applies to a `weightKg` patch.
 */
export function fromStoredWeightDisplay(
  stored: number | null,
  unit: WeightUnit,
  exercise: Exercise | undefined,
  settings: AppSettings,
): number | null {
  return displayWeight(fromStoredWeight(stored, exercise, settings), unit)
}

/** Total external load moved for one rep, accounting for both sides. */export function totalLoadKg(set: SetRecord, exercise: Exercise | undefined): number {
  const stored = set.weightKg ?? 0
  if (exercise?.unilateral) return stored * 2
  if (isDumbbellExercise(exercise)) return stored * 2
  return stored
}

export function setVolumeKg(set: SetRecord, exercise: Exercise | undefined): number {
  if (set.type !== 'working' || !set.completed || set.reps === null) return 0
  return totalLoadKg(set, exercise) * set.reps
}

export function sessionVolumeKg(
  session: WorkoutSession,
  exercisesById: Map<string, Exercise>,
): number {
  return session.sets.reduce((sum, s) => sum + setVolumeKg(s, exercisesById.get(s.exerciseId)), 0)
}

/**
 * Epley estimate. Only produced when there is enough valid, sub-maximal data
 * (reps between 3 and 12) — labelled clearly as an estimate in the UI.
 */
export function estimate1RM(totalLoad: number, reps: number): number | null {
  if (!Number.isFinite(totalLoad) || totalLoad <= 0) return null
  if (reps < 3 || reps > 12) return null
  return totalLoad * (1 + reps / 30)
}

export function workingSets(sets: SetRecord[]): SetRecord[] {
  return sets.filter((s) => s.type === 'working')
}

export function completedWorkingSets(sets: SetRecord[]): SetRecord[] {
  return sets.filter((s) => s.type === 'working' && s.completed)
}

export function exercisesInSession(session: WorkoutSession): string[] {
  const seen = new Set<string>()
  const order: string[] = []
  for (const s of session.sets) {
    if (!seen.has(s.exerciseId)) {
      seen.add(s.exerciseId)
      order.push(s.exerciseId)
    }
  }
  return order
}

export interface ExerciseHistoryEntry {
  sessionId: string
  date: string
  sets: SetRecord[]
  topWeightKg: number
  bestVolumeKg: number
  bestReps: number
  e1rm: number | null
}

/** Completed sessions containing this exercise, newest first. */
export function exerciseHistory(
  sessions: WorkoutSession[],
  exerciseId: string,
  exercise: Exercise | undefined,
): ExerciseHistoryEntry[] {
  return sessions
    .filter(
      (s) => s.status === 'completed' && !s.discarded && s.sets.some((x) => x.exerciseId === exerciseId),
    )
    .map((s) => {
      const sets = s.sets.filter((x) => x.exerciseId === exerciseId)
      const working = completedWorkingSets(sets)
      let topWeightKg = 0
      let bestVolumeKg = 0
      let bestReps = 0
      let e1rm: number | null = null
      for (const set of working) {
        const load = totalLoadKg(set, exercise)
        if (load > topWeightKg) topWeightKg = load
        const vol = setVolumeKg(set, exercise)
        if (vol > bestVolumeKg) bestVolumeKg = vol
        if ((set.reps ?? 0) > bestReps) bestReps = set.reps ?? 0
        const est = estimate1RM(load, set.reps ?? 0)
        if (est !== null && (e1rm === null || est > e1rm)) e1rm = est
      }
      return { sessionId: s.id, date: s.date, sets, topWeightKg, bestVolumeKg, bestReps, e1rm }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export type SuggestionKind = 'increase_weight' | 'add_reps' | 'hold' | 'baseline'

export interface ProgressionSuggestion {
  exerciseId: string
  kind: SuggestionKind
  message: string
  fromWeightKg: number | null
  toWeightKg: number | null
  repsMin: number
  repsMax: number
  lastSessionId: string | null
  /** Mean reps-in-reserve across the last session's working sets, when recorded. */
  averageRir: number | null
  /** Whether any working set had an RIR value logged (drives tone of the message). */
  rirKnown: boolean
}

export function weightIncrementFor(exercise: Exercise | undefined): number {
  if (exercise?.category === 'legs' && exercise.exerciseClass === 'compound') return 5
  return 2.5
}

/** Mean reps-in-reserve across sets that recorded one. */
export function meanRir(sets: SetRecord[]): number | null {
  const values = sets.map((s) => s.rir).filter((v): v is number => v !== null && !Number.isNaN(v))
  if (values.length === 0) return null
  return values.reduce((sum, v) => sum + v, 0) / values.length
}

/**
 * Double-progression model, with RIR awareness when the lifter logged
 * reps-in-reserve. Only suggests a weight increase when *every* completed
 * working set reached the top of the prescribed rep range. Never forces a
 * change — the suggestion is dismissible and overridable.
 */
export function buildSuggestion(
  exercise: Exercise | undefined,
  history: ExerciseHistoryEntry[],
  repsMin: number,
  repsMax: number,
): ProgressionSuggestion {
  const base: ProgressionSuggestion = {
    exerciseId: exercise?.id ?? '',
    kind: 'baseline',
    message: 'Log a full session to get your first progression suggestion.',
    fromWeightKg: null,
    toWeightKg: null,
    repsMin,
    repsMax,
    lastSessionId: null,
    averageRir: null,
    rirKnown: false,
  }
  const withWorking = history.find((h) => completedWorkingSets(h.sets).length > 0)
  if (!withWorking) return base

  const working = completedWorkingSets(withWorking.sets)
  const allAtTop = working.length > 0 && working.every((s) => (s.reps ?? 0) >= repsMax)
  const topWeight = Math.max(...working.map((s) => totalLoadKg(s, exercise)))
  const increment = weightIncrementFor(exercise)
  const rir = meanRir(working)
  const rirKnown = rir !== null
  const rirLabel = rirKnown ? Number(rir.toFixed(1)) : null
  const rirText = rirLabel === null ? '' : `${rirLabel} RIR`

  if (allAtTop) {
    const nearFailure = rirKnown && (rir as number) <= 1
    const comfortable = rirKnown && (rir as number) >= 2
    return {
      ...base,
      kind: 'increase_weight',
      rirKnown,
      averageRir: rir,
      message: nearFailure
        ? `All sets hit ${repsMax} reps, but you were close to failure (${rirText}). Add ${increment} kg only if form stays clean — otherwise repeat this weight and build a rep in reserve first.`
        : comfortable
          ? `All sets hit ${repsMax} reps with ${rirText}. You have room — add ${increment} kg next session.`
          : `All working sets hit ${repsMax} reps. Consider adding ${increment} kg next session.`,
      fromWeightKg: topWeight,
      toWeightKg: topWeight + increment,
      lastSessionId: withWorking.sessionId,
    }
  }

  const minReps = Math.min(...working.map((s) => s.reps ?? 0))
  if (minReps < repsMin) {
    return {
      ...base,
      kind: 'hold',
      rirKnown,
      averageRir: rir,
      message: `Some sets fell below ${repsMin} reps. Repeat the weight and aim for clean reps across all sets before adding load.`,
      fromWeightKg: topWeight,
      toWeightKg: topWeight,
      lastSessionId: withWorking.sessionId,
    }
  }

  if (rirKnown && (rir as number) <= 0) {
    return {
      ...base,
      kind: 'hold',
      rirKnown,
      averageRir: rir,
      message: `You trained to failure (${rirText}). Build a rep in reserve at ${topWeight === 0 ? 'this load' : `${Number(topWeight.toFixed(1))} kg`} before adding weight or reps.`,
      fromWeightKg: topWeight,
      toWeightKg: topWeight,
      lastSessionId: withWorking.sessionId,
    }
  }

  const belowTop = working.filter((s) => (s.reps ?? 0) < repsMax).length
  return {
    ...base,
    kind: 'add_reps',
    rirKnown,
    averageRir: rir,
    message: `${belowTop} set${belowTop === 1 ? '' : 's'} below ${repsMax} reps. Keep the weight and add reps — increase load once every set reaches ${repsMax}.`,
    fromWeightKg: topWeight,
    toWeightKg: topWeight,
    lastSessionId: withWorking.sessionId,
  }
}
