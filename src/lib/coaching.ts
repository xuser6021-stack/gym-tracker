import type { Exercise, WorkoutSession, CoachingInsight } from '../types'
import { exerciseHistory, buildSuggestion, weightIncrementFor } from './progression'

export interface MuscleRecovery {
  muscle: string
  hoursAgo: number | null
  setsInLast48h: number
  setsInLast72h: number
  status: 'fatigued' | 'recovering' | 'ready' | 'fresh'
  lastTrainedDate: string | null
}

export interface PlateauInfo {
  exerciseId: string
  exerciseName: string
  consecutiveSessions: number
  isPlateau: boolean
  currentWeightKg: number
  recommendation: string
}

/**
 * Check if an exercise has stalled over the last 3 or more completed sessions.
 */
export function detectPlateau(
  exercise: Exercise,
  sessions: WorkoutSession[],
): PlateauInfo {
  const history = exerciseHistory(sessions, exercise.id, exercise)
  if (history.length < 3) {
    return {
      exerciseId: exercise.id,
      exerciseName: exercise.name,
      consecutiveSessions: history.length,
      isPlateau: false,
      currentWeightKg: history[0]?.topWeightKg ?? 0,
      recommendation: 'Continue building baseline data.',
    }
  }

  const recent = history.slice(0, 4)
  const weights = recent.map((h) => h.topWeightKg)
  const reps = recent.map((h) => h.bestReps)

  // Plateau condition: weights and reps haven't progressed for 3+ sessions
  const weightStagnant = weights.every((w) => Math.abs(w - weights[0]) < 0.5)
  const repsStagnant = reps.every((r) => r <= reps[0])

  const isPlateau = weightStagnant && repsStagnant && recent.length >= 3

  let recommendation = 'Progression is on track.'
  if (isPlateau) {
    const deloadWeight = Math.max(0, Number((weights[0] * 0.9).toFixed(1)))
    recommendation = `Stalled for ${recent.length} consecutive sessions at ${weights[0]} kg. Consider a 1-week deload to ${deloadWeight} kg (-10%) or switch to an alternate movement.`
  }

  return {
    exerciseId: exercise.id,
    exerciseName: exercise.name,
    consecutiveSessions: recent.length,
    isPlateau,
    currentWeightKg: weights[0] ?? 0,
    recommendation,
  }
}

/**
 * Compute recovery and fatigue metrics for each muscle group based on recent sessions.
 */
export function calculateMuscleRecovery(
  sessions: WorkoutSession[],
  exercisesById: Map<string, Exercise>,
  now: Date = new Date(),
): MuscleRecovery[] {
  const primaryMuscles = [
    'Chest',
    'Back',
    'Shoulders',
    'Quads',
    'Hamstrings',
    'Glutes',
    'Biceps',
    'Triceps',
    'Calves',
    'Core',
  ]

  const nowMs = now.getTime()
  const completed = sessions.filter((s) => s.status === 'completed' && !s.discarded)

  return primaryMuscles.map((muscle) => {
    let mostRecentDate: string | null = null
    let hoursAgo: number | null = null
    let setsInLast48h = 0
    let setsInLast72h = 0

    for (const s of completed) {
      const sessionDate = new Date(s.finishedAt || s.startedAt || s.date)
      const diffHours = (nowMs - sessionDate.getTime()) / (1000 * 60 * 60)

      for (const set of s.sets) {
        if (!set.completed || set.type !== 'working') continue
        const ex = exercisesById.get(set.exerciseId)
        if (!ex) continue

        const matches =
          ex.primaryMuscle.toLowerCase() === muscle.toLowerCase() ||
          ex.secondaryMuscles.some((m) => m.toLowerCase() === muscle.toLowerCase())

        if (matches) {
          if (hoursAgo === null || diffHours < hoursAgo) {
            hoursAgo = Math.max(0, diffHours)
            mostRecentDate = s.date
          }
          if (diffHours <= 48) setsInLast48h += 1
          if (diffHours <= 72) setsInLast72h += 1
        }
      }
    }

    let status: MuscleRecovery['status'] = 'fresh'
    if (hoursAgo === null) {
      status = 'fresh'
    } else if (hoursAgo < 24 && setsInLast48h >= 4) {
      status = 'fatigued'
    } else if (hoursAgo < 48 && setsInLast48h >= 2) {
      status = 'recovering'
    } else if (hoursAgo < 96) {
      status = 'ready'
    } else {
      status = 'fresh'
    }

    return {
      muscle,
      hoursAgo: hoursAgo !== null ? Math.round(hoursAgo) : null,
      setsInLast48h,
      setsInLast72h,
      status,
      lastTrainedDate: mostRecentDate,
    }
  })
}

/**
 * Find recommended alternative exercises for a given exercise based on muscle group and category.
 */
export function getExerciseAlternatives(
  exercise: Exercise,
  allExercises: Exercise[],
): Exercise[] {
  return allExercises.filter(
    (e) =>
      e.id !== exercise.id &&
      (e.primaryMuscle.toLowerCase() === exercise.primaryMuscle.toLowerCase() ||
        e.category === exercise.category),
  ).slice(0, 4)
}

/**
 * Generate high-value offline coaching insights for the user.
 */
export function generateCoachingInsights(
  sessions: WorkoutSession[],
  exercises: Exercise[],
  templates: { exercises: { exerciseId: string; repsMin: number; repsMax: number }[] }[],
  exercisesById: Map<string, Exercise>,
  now: Date = new Date(),
): CoachingInsight[] {
  const insights: CoachingInsight[] = []
  const todayIso = now.toISOString().slice(0, 10)

  // 1. Check for progressive overload increases ready
  for (const tpl of templates) {
    for (const te of tpl.exercises) {
      const ex = exercisesById.get(te.exerciseId)
      if (!ex) continue
      const hist = exerciseHistory(sessions, ex.id, ex)
      if (hist.length === 0) continue

      const suggestion = buildSuggestion(ex, hist, te.repsMin, te.repsMax)
      if (suggestion.kind === 'increase_weight' && suggestion.toWeightKg !== null) {
        const inc = weightIncrementFor(ex)
        insights.push({
          id: `insight-overload-${ex.id}`,
          exerciseId: ex.id,
          exerciseName: ex.name,
          type: 'increase',
          title: `Overload Ready: ${ex.name}`,
          message: `All working sets hit top of rep range (${te.repsMax} reps).`,
          recommendation: `Add +${inc} kg (target: ${suggestion.toWeightKg} kg) next session!`,
          metric: `+${inc} kg`,
          date: todayIso,
        })
      }
    }
  }

  // 2. Check for plateaus
  for (const ex of exercises) {
    const plateau = detectPlateau(ex, sessions)
    if (plateau.isPlateau) {
      insights.push({
        id: `insight-plateau-${ex.id}`,
        exerciseId: ex.id,
        exerciseName: ex.name,
        type: 'plateau',
        title: `Plateau Detected: ${ex.name}`,
        message: `Weight and reps have stalled over ${plateau.consecutiveSessions} sessions at ${plateau.currentWeightKg} kg.`,
        recommendation: plateau.recommendation,
        date: todayIso,
      })
    }
  }

  // 3. Recovery insight
  const recoveries = calculateMuscleRecovery(sessions, exercisesById, now)
  const freshMuscles = recoveries.filter((r) => r.status === 'ready' || r.status === 'fresh')
  const fatiguedMuscles = recoveries.filter((r) => r.status === 'fatigued')

  if (fatiguedMuscles.length > 0) {
    insights.push({
      id: 'insight-recovery-fatigue',
      type: 'recovery',
      title: 'Muscle Fatigue Alert',
      message: `${fatiguedMuscles.map((m) => m.muscle).join(', ')} trained within the last 24h.`,
      recommendation: 'Prioritize adequate sleep, hydration, and protein before targeting them again.',
      date: todayIso,
    })
  } else if (freshMuscles.length > 0 && sessions.length >= 3) {
    const topFresh = freshMuscles.slice(0, 3).map((m) => m.muscle).join(', ')
    insights.push({
      id: 'insight-recovery-ready',
      type: 'recovery',
      title: 'Prime Recovery Status',
      message: `${topFresh} are fully recovered and primed for progressive overload.`,
      recommendation: 'Great day to push for quality volume or higher load on these groups.',
      date: todayIso,
    })
  }

  // Deduplicate by id and limit to top 5 most actionable
  const unique = new Map<string, CoachingInsight>()
  for (const ins of insights) {
    if (!unique.has(ins.id)) {
      unique.set(ins.id, ins)
    }
  }

  return [...unique.values()].slice(0, 5)
}
