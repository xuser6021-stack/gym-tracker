import type { Achievement, AchievementKey, AppData } from '../types'
import { sessionVolumeKg } from './progression'
import { currentStreak, plannedPerWeek } from './stats'

export interface AchievementDefinition {
  key: AchievementKey
  title: string
  description: string
  icon: string
  category: 'workouts' | 'streak' | 'volume' | 'records' | 'nutrition'
}

export const ACHIEVEMENT_CATALOG: AchievementDefinition[] = [
  {
    key: 'first_workout',
    title: 'First Step',
    description: 'Completed your first full workout session.',
    icon: '🏋️',
    category: 'workouts',
  },
  {
    key: 'workouts_10',
    title: 'Consistent Warrior',
    description: 'Completed 10 workout sessions.',
    icon: '🔥',
    category: 'workouts',
  },
  {
    key: 'workouts_50',
    title: 'Iron Dedication',
    description: 'Completed 50 workout sessions.',
    icon: '⚡',
    category: 'workouts',
  },
  {
    key: 'workouts_100',
    title: 'Century Club',
    description: 'Completed 100 workout sessions.',
    icon: '👑',
    category: 'workouts',
  },
  {
    key: 'streak_4',
    title: 'Habit Formed',
    description: 'Maintained a 4-week workout streak.',
    icon: '📅',
    category: 'streak',
  },
  {
    key: 'streak_8',
    title: 'Unbreakable',
    description: 'Maintained an 8-week workout streak.',
    icon: '🛡️',
    category: 'streak',
  },
  {
    key: 'volume_10k',
    title: '10 Ton Lifter',
    description: 'Moved over 10,000 kg of total working volume.',
    icon: '🥉',
    category: 'volume',
  },
  {
    key: 'volume_100k',
    title: '100 Ton Titan',
    description: 'Moved over 100,000 kg of total working volume.',
    icon: '🥈',
    category: 'volume',
  },
  {
    key: 'volume_1m',
    title: 'Million Kilogram Legend',
    description: 'Moved over 1,000,000 kg of total working volume.',
    icon: '🥇',
    category: 'volume',
  },
  {
    key: 'first_pr',
    title: 'Record Breaker',
    description: 'Set your very first personal record.',
    icon: '🎯',
    category: 'records',
  },
  {
    key: 'prs_5',
    title: 'Strength Ascendant',
    description: 'Set 5 personal records.',
    icon: '⭐',
    category: 'records',
  },
  {
    key: 'prs_20',
    title: 'Hall of Fame',
    description: 'Set 20 personal records.',
    icon: '🏆',
    category: 'records',
  },
  {
    key: 'hydration_hero',
    title: 'Hydration Master',
    description: 'Reached your daily water target.',
    icon: '💧',
    category: 'nutrition',
  },
  {
    key: 'protein_master',
    title: 'Protein Fuelled',
    description: 'Reached your daily protein target.',
    icon: '🥩',
    category: 'nutrition',
  },
]

/**
 * Scan user data and evaluate which achievements have been unlocked.
 * Returns newly unlocked achievements that are not yet recorded.
 */
export function evaluateAchievements(
  data: AppData,
  exercisesById: Map<string, any>,
): Achievement[] {
  const existingKeys = new Set((data.achievements ?? []).map((a) => a.key))
  const completed = data.sessions.filter((s) => s.status === 'completed' && !s.discarded)
  const workoutCount = completed.length

  const totalVolume = completed.reduce((sum, s) => sum + sessionVolumeKg(s, exercisesById), 0)
  const planned = plannedPerWeek(data.templates)
  const streak = currentStreak(data.sessions, data.settings.minSessionsForStreak, planned)
  const prCount = data.personalRecords.length

  const hasWaterGoal = data.nutrition.some((n) => n.waterMl >= data.settings.waterTargetMl)
  const hasProteinGoal = data.nutrition.some((n) => {
    const totalP = n.meals.reduce((s, m) => s + m.items.reduce((acc, it) => acc + it.proteinG, 0), 0)
    return totalP >= data.settings.proteinTargetG
  })

  const nowIso = new Date().toISOString()
  const newlyUnlocked: Achievement[] = []

  const check = (key: AchievementKey, condition: boolean) => {
    if (condition && !existingKeys.has(key)) {
      const def = ACHIEVEMENT_CATALOG.find((d) => d.key === key)
      if (def) {
        newlyUnlocked.push({
          id: `ach_${key}`,
          key,
          unlockedAt: nowIso,
          title: def.title,
          description: def.description,
          icon: def.icon,
        })
      }
    }
  }

  check('first_workout', workoutCount >= 1)
  check('workouts_10', workoutCount >= 10)
  check('workouts_50', workoutCount >= 50)
  check('workouts_100', workoutCount >= 100)
  check('streak_4', streak.weeks >= 4)
  check('streak_8', streak.weeks >= 8)
  check('volume_10k', totalVolume >= 10000)
  check('volume_100k', totalVolume >= 100000)
  check('volume_1m', totalVolume >= 1000000)
  check('first_pr', prCount >= 1)
  check('prs_5', prCount >= 5)
  check('prs_20', prCount >= 20)
  check('hydration_hero', hasWaterGoal)
  check('protein_master', hasProteinGoal)

  return newlyUnlocked
}

/**
 * Monthly training recap computation.
 */
export interface MonthlyRecap {
  monthName: string
  year: number
  totalWorkouts: number
  totalVolumeKg: number
  totalWorkingSets: number
  prsSet: number
  topExerciseName: string | null
}

export function computeMonthlyRecap(
  sessions: any[],
  personalRecords: any[],
  exercisesById: Map<string, any>,
  date: Date = new Date(),
): MonthlyRecap {
  const year = date.getFullYear()
  const month = date.getMonth() // 0-indexed
  const monthName = date.toLocaleDateString('en-US', { month: 'long' })

  const monthSessions = sessions.filter((s) => {
    if (s.status !== 'completed' || s.discarded) return false
    const d = new Date(s.date)
    return d.getFullYear() === year && d.getMonth() === month
  })

  let totalVolumeKg = 0
  let totalWorkingSets = 0
  const exerciseSetCounts = new Map<string, number>()

  for (const s of monthSessions) {
    totalVolumeKg += sessionVolumeKg(s, exercisesById)
    for (const set of s.sets) {
      if (set.completed && set.type === 'working') {
        totalWorkingSets += 1
        exerciseSetCounts.set(set.exerciseId, (exerciseSetCounts.get(set.exerciseId) ?? 0) + 1)
      }
    }
  }

  const monthPrs = personalRecords.filter((pr) => {
    const d = new Date(pr.date)
    return d.getFullYear() === year && d.getMonth() === month
  }).length

  let topExerciseId: string | null = null
  let maxSets = 0
  for (const [id, count] of exerciseSetCounts.entries()) {
    if (count > maxSets) {
      maxSets = count
      topExerciseId = id
    }
  }

  const topExerciseName = topExerciseId ? exercisesById.get(topExerciseId)?.name ?? null : null

  return {
    monthName,
    year,
    totalWorkouts: monthSessions.length,
    totalVolumeKg: Math.round(totalVolumeKg),
    totalWorkingSets,
    prsSet: monthPrs,
    topExerciseName,
  }
}
