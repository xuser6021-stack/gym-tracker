import type { Exercise, MajorMuscleGroup, WeeklyMuscleSettings, WorkoutSession } from '../types'

export const MAJOR_MUSCLE_GROUPS: MajorMuscleGroup[] = [
  'Chest',
  'Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Quadriceps',
  'Hamstrings',
  'Glutes',
  'Calves',
  'Core',
]

export const DEFAULT_WEEKLY_TARGETS: Record<MajorMuscleGroup, number> = {
  Chest: 12,
  Back: 14,
  Shoulders: 10,
  Biceps: 8,
  Triceps: 8,
  Quadriceps: 12,
  Hamstrings: 10,
  Glutes: 10,
  Calves: 8,
  Core: 8,
}

export const DEFAULT_MUSCLE_SETTINGS: WeeklyMuscleSettings = {
  targets: DEFAULT_WEEKLY_TARGETS,
  primaryMultiplier: 1.0,
  secondaryMultiplier: 0.5,
}

/**
 * Map specific anatomical sub-muscles from the 520 exercise library
 * into the 10 major functional muscle groups.
 */
export function mapToMajorMuscleGroup(muscle: string): MajorMuscleGroup | null {
  const m = (muscle || '').toLowerCase().trim()
  if (!m) return null

  // Chest
  if (m.includes('chest') || m === 'pecs' || m.includes('pectoral')) return 'Chest'

  // Back
  if (
    m.includes('lat') ||
    m.includes('upper back') ||
    m.includes('lower back') ||
    m.includes('back') ||
    m.includes('rhomboid') ||
    m.includes('traps') ||
    m.includes('trap') ||
    m.includes('spine')
  ) {
    return 'Back'
  }

  // Shoulders
  if (
    m.includes('shoulder') ||
    m.includes('delt') ||
    m.includes('rotator cuff') ||
    m.includes('supraspinatus') ||
    m.includes('teres')
  ) {
    return 'Shoulders'
  }

  // Biceps
  if (m.includes('bicep') || m.includes('brachialis') || m.includes('brachioradialis')) {
    return 'Biceps'
  }

  // Triceps
  if (m.includes('tricep')) return 'Triceps'

  // Quadriceps
  if (m.includes('quad') || m.includes('quadriceps') || m.includes('rectus femoris')) {
    return 'Quadriceps'
  }

  // Hamstrings
  if (m.includes('hamstring') || m.includes('biceps femoris')) {
    return 'Hamstrings'
  }

  // Glutes
  if (m.includes('glute') || m.includes('gluteus') || m.includes('hip flexor') || m.includes('hips')) {
    return 'Glutes'
  }

  // Calves
  if (
    m.includes('cal') ||
    m.includes('soleus') ||
    m.includes('gastrocnemius') ||
    m.includes('tibialis') ||
    m.includes('achilles') ||
    m.includes('ankle')
  ) {
    return 'Calves'
  }

  // Core
  if (
    m.includes('core') ||
    m.includes('ab') ||
    m.includes('oblique') ||
    m.includes('transverse') ||
    m.includes('serratus')
  ) {
    return 'Core'
  }

  return null
}

export interface MuscleAnalysisItem {
  muscleGroup: MajorMuscleGroup
  /** Direct sets where this muscle was the primary target */
  primarySets: number
  /** Sets where this muscle was a secondary synergist */
  secondarySets: number
  /** Weighted contribution = (primarySets * primaryMultiplier) + (secondarySets * secondaryMultiplier) */
  calculatedSets: number
  targetSets: number
  status: 'Optimal' | 'On Track' | 'Below Target' | 'Not Trained'
  progressPercent: number
}

export interface WeeklyMuscleAnalysisReport {
  weekStart: string // YYYY-MM-DD (Monday)
  weekEnd: string // YYYY-MM-DD (Sunday)
  isCurrentWeek: boolean
  totalWorkoutDays: number
  totalCompletedExercises: number
  totalCompletedSets: number
  totalReps: number
  totalVolumeKg: number
  trainingFrequency: number
  muscleDistribution: MuscleAnalysisItem[]
  insights: string[]
  comparisonWithPreviousWeek?: {
    volumeDiffPercent: number | null
    setsDiffPercent: number | null
    workoutDaysDiff: number
  }
}

/**
 * Get the Monday YYYY-MM-DD and Sunday YYYY-MM-DD for any date string.
 */
export function getWeekRange(dateStr: string): { start: string; end: string } {
  // Parse date safely
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  
  // Day of week: 0=Sun, 1=Mon, ..., 6=Sat
  const dayOfWeek = d.getDay()
  // Diff to Monday (1): if day is Sun (0), diff is -6; else 1 - dayOfWeek
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  
  const monday = new Date(d)
  monday.setDate(d.getDate() + diffToMonday)
  
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  
  const fmt = (date: Date) => {
    const y = date.getFullYear()
    const m = `${date.getMonth() + 1}`.padStart(2, '0')
    const dt = `${date.getDate()}`.padStart(2, '0')
    return `${y}-${m}-${dt}`
  }

  return {
    start: fmt(monday),
    end: fmt(sunday),
  }
}

/**
 * Perform weekly muscle analysis from actual completed workouts.
 */
export function calculateWeeklyMuscleAnalysis(
  sessions: WorkoutSession[],
  exercisesById: Map<string, Exercise>,
  targetDate: string,
  settings: WeeklyMuscleSettings = DEFAULT_MUSCLE_SETTINGS,
  todayStr: string = new Date().toISOString().slice(0, 10),
): WeeklyMuscleAnalysisReport {
  const { start: weekStart, end: weekEnd } = getWeekRange(targetDate)
  const isCurrentWeek = todayStr >= weekStart && todayStr <= weekEnd

  // Filter completed, non-discarded sessions in this calendar week
  const weekSessions = sessions.filter(
    (s) => s.status === 'completed' && !s.discarded && s.date >= weekStart && s.date <= weekEnd,
  )

  const distinctWorkoutDays = new Set(weekSessions.map((s) => s.date)).size
  let totalCompletedSets = 0
  let totalReps = 0
  let totalVolumeKg = 0
  const completedExercisesSet = new Set<string>()

  // Tally muscle primary & secondary sets
  const primaryCounts: Record<MajorMuscleGroup, number> = {
    Chest: 0,
    Back: 0,
    Shoulders: 0,
    Biceps: 0,
    Triceps: 0,
    Quadriceps: 0,
    Hamstrings: 0,
    Glutes: 0,
    Calves: 0,
    Core: 0,
  }

  const secondaryCounts: Record<MajorMuscleGroup, number> = {
    Chest: 0,
    Back: 0,
    Shoulders: 0,
    Biceps: 0,
    Triceps: 0,
    Quadriceps: 0,
    Hamstrings: 0,
    Glutes: 0,
    Calves: 0,
    Core: 0,
  }

  for (const session of weekSessions) {
    for (const set of session.sets) {
      if (set.type !== 'working' || !set.completed) continue
      totalCompletedSets += 1
      if (set.reps) totalReps += set.reps
      if (set.weightKg && set.reps) {
        totalVolumeKg += set.weightKg * set.reps
      }

      const exercise = exercisesById.get(set.exerciseId)
      if (!exercise) continue
      completedExercisesSet.add(set.exerciseId)

      // Primary muscle
      const primaryGroup = mapToMajorMuscleGroup(exercise.primaryMuscle)
      if (primaryGroup) {
        primaryCounts[primaryGroup] += 1
      }

      // Secondary muscles (deduped so 1 set doesn't count twice for same major group)
      const secondaryGroups = new Set<MajorMuscleGroup>()
      for (const sec of exercise.secondaryMuscles || []) {
        const mapped = mapToMajorMuscleGroup(sec)
        if (mapped && mapped !== primaryGroup) {
          secondaryGroups.add(mapped)
        }
      }
      for (const secGroup of secondaryGroups) {
        secondaryCounts[secGroup] += 1
      }
    }
  }

  const targets = { ...DEFAULT_WEEKLY_TARGETS, ...(settings.targets || {}) }
  const primMult = settings.primaryMultiplier ?? 1.0
  const secMult = settings.secondaryMultiplier ?? 0.5

  const muscleDistribution: MuscleAnalysisItem[] = MAJOR_MUSCLE_GROUPS.map((mg) => {
    const pSets = primaryCounts[mg]
    const sSets = secondaryCounts[mg]
    const calculated = Number((pSets * primMult + sSets * secMult).toFixed(1))
    const target = targets[mg] ?? 10

    let status: MuscleAnalysisItem['status'] = 'Not Trained'
    if (calculated === 0) {
      status = 'Not Trained'
    } else if (calculated >= target) {
      status = 'Optimal'
    } else if (calculated >= target * 0.7) {
      status = 'On Track'
    } else {
      status = 'Below Target'
    }

    const progressPercent = target > 0 ? Math.min(200, Math.round((calculated / target) * 100)) : 100

    return {
      muscleGroup: mg,
      primarySets: pSets,
      secondarySets: sSets,
      calculatedSets: calculated,
      targetSets: target,
      status,
      progressPercent,
    }
  })

  // Previous week comparison
  const prevDate = new Date(weekStart)
  prevDate.setDate(prevDate.getDate() - 7)
  const prevDateStr = prevDate.toISOString().slice(0, 10)
  const { start: prevWeekStart, end: prevWeekEnd } = getWeekRange(prevDateStr)

  const prevWeekSessions = sessions.filter(
    (s) => s.status === 'completed' && !s.discarded && s.date >= prevWeekStart && s.date <= prevWeekEnd,
  )

  let prevVolume = 0
  let prevSets = 0
  for (const s of prevWeekSessions) {
    for (const set of s.sets) {
      if (set.type === 'working' && set.completed) {
        prevSets += 1
        if (set.weightKg && set.reps) prevVolume += set.weightKg * set.reps
      }
    }
  }

  const prevDays = new Set(prevWeekSessions.map((s) => s.date)).size
  const comparisonWithPreviousWeek = {
    volumeDiffPercent: prevVolume > 0 ? Math.round(((totalVolumeKg - prevVolume) / prevVolume) * 100) : null,
    setsDiffPercent: prevSets > 0 ? Math.round(((totalCompletedSets - prevSets) / prevSets) * 100) : null,
    workoutDaysDiff: distinctWorkoutDays - prevDays,
  }

  // Generate evidence-based smart weekly insights
  const insights: string[] = []

  if (distinctWorkoutDays === 0) {
    insights.push(
      isCurrentWeek
        ? 'No workouts logged yet this week. Log a session to see your muscle analysis and insights.'
        : 'No workout sessions were completed during this week.',
    )
  } else {
    insights.push(`You completed workouts across ${distinctWorkoutDays} calendar day(s) this week.`)

    if (comparisonWithPreviousWeek.volumeDiffPercent !== null) {
      if (comparisonWithPreviousWeek.volumeDiffPercent > 0) {
        insights.push(
          `Your total training volume increased by ${comparisonWithPreviousWeek.volumeDiffPercent}% compared with last week.`,
        )
      } else if (comparisonWithPreviousWeek.volumeDiffPercent < 0) {
        insights.push(
          `Your total training volume was ${Math.abs(comparisonWithPreviousWeek.volumeDiffPercent)}% lower than last week.`,
        )
      }
    }

    const optimalMuscles = muscleDistribution.filter((m) => m.status === 'Optimal')
    if (optimalMuscles.length > 0) {
      insights.push(
        `Target volume reached for ${optimalMuscles.map((m) => m.muscleGroup).slice(0, 3).join(', ')}${optimalMuscles.length > 3 ? ` and ${optimalMuscles.length - 3} more` : ''}.`,
      )
    }

    const belowTarget = muscleDistribution.filter((m) => m.status === 'Below Target' || m.status === 'Not Trained')
    if (belowTarget.length > 0 && belowTarget.length <= 4) {
      insights.push(
        `${belowTarget.map((m) => m.muscleGroup).join(', ')} received fewer sets than your configured weekly target.`,
      )
    }
  }

  return {
    weekStart,
    weekEnd,
    isCurrentWeek,
    totalWorkoutDays: distinctWorkoutDays,
    totalCompletedExercises: completedExercisesSet.size,
    totalCompletedSets,
    totalReps,
    totalVolumeKg: Math.round(totalVolumeKg),
    trainingFrequency: distinctWorkoutDays,
    muscleDistribution,
    insights,
    comparisonWithPreviousWeek,
  }
}
