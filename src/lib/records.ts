import type { Exercise, PersonalRecord, SetRecord, WorkoutSession } from '../types'
import { estimate1RM, totalLoadKg } from './progression'
import { uid } from './id'

export function prKey(exerciseId: string, kind: PersonalRecord['kind']): string {
  return `${exerciseId}:${kind}`
}

export function currentRecords(records: PersonalRecord[]): Map<string, PersonalRecord> {
  const map = new Map<string, PersonalRecord>()
  for (const r of records) {
    const key = prKey(r.exerciseId, r.kind)
    const existing = map.get(key)
    if (!existing || r.value > existing.value) map.set(key, r)
  }
  return map
}

export function getRecord(
  records: PersonalRecord[],
  exerciseId: string,
  kind: PersonalRecord['kind'],
): PersonalRecord | undefined {
  return currentRecords(records).get(prKey(exerciseId, kind))
}

/**
 * Detect new personal records from a finished session's completed working sets.
 * Only *actual* performance counts as a PR — estimates are labelled separately.
 */
export function detectSessionPRs(
  session: WorkoutSession,
  exercisesById: Map<string, Exercise>,
  existing: PersonalRecord[],
): PersonalRecord[] {
  const newRecords: PersonalRecord[] = []
  const byExercise = new Map<string, SetRecord[]>()
  for (const s of session.sets) {
    if (s.type !== 'working' || !s.completed) continue
    const arr = byExercise.get(s.exerciseId) ?? []
    arr.push(s)
    byExercise.set(s.exerciseId, arr)
  }

  for (const [exerciseId, sets] of byExercise) {
    const exercise = exercisesById.get(exerciseId)
    let topLoad = 0
    let topLoadReps = 0
    let bestSetVolume = 0
    let bestVolumeWeight = 0
    let bestVolumeReps = 0
    let bestE1rm = 0
    let bestE1rmWeight = 0
    let bestE1rmReps = 0
    let bestReps = 0
    let bestRepsWeight = 0

    for (const set of sets) {
      const load = totalLoadKg(set, exercise)
      const reps = set.reps ?? 0
      const volume = load * reps
      if (load > topLoad) {
        topLoad = load
        topLoadReps = reps
      }
      if (volume > bestSetVolume) {
        bestSetVolume = volume
        bestVolumeWeight = load
        bestVolumeReps = reps
      }
      if (reps > bestReps) {
        bestReps = reps
        bestRepsWeight = load
      }
      const est = estimate1RM(load, reps)
      if (est !== null && est > bestE1rm) {
        bestE1rm = est
        bestE1rmWeight = load
        bestE1rmReps = reps
      }
    }

    const addIfPR = (
      kind: PersonalRecord['kind'],
      value: number,
      weightKg: number | null,
      reps: number,
    ) => {
      if (value <= 0) return
      const previous = getRecord(existing, exerciseId, kind)?.value ?? 0
      if (value > previous) {
        newRecords.push({
          id: uid('pr'),
          exerciseId,
          kind,
          value,
          weightKg,
          reps,
          date: session.date,
          sessionId: session.id,
        })
      }
    }

    addIfPR('maxWeight', topLoad, topLoad, topLoadReps)
    addIfPR('bestVolume', bestSetVolume, bestVolumeWeight, bestVolumeReps)
    addIfPR('maxReps', bestReps, bestRepsWeight, bestReps)
    addIfPR('e1rm', bestE1rm, bestE1rmWeight, bestE1rmReps)
  }

  return newRecords
}
