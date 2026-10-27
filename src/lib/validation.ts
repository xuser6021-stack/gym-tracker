import { z } from 'zod'
import type { AppData } from '../types'

export const exerciseVisualsSchema = z.object({
  thumbnail: z.string().optional(),
  anatomyImage: z.string().optional(),
  startPositionImage: z.string().optional(),
  endPositionImage: z.string().optional(),
  animation: z.string().optional(),
  attributionId: z.string().optional(),
})

export const exerciseTrackingTypeSchema = z.enum([
  'weight_reps',
  'bodyweight_reps',
  'assisted_reps',
  'duration',
  'distance',
  'duration_distance',
  'hold',
])

export const exerciseSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  primaryMuscle: z.string().min(1),
  secondaryMuscles: z.array(z.string()).default([]),
  equipment: z.string().min(1),
  category: z.enum(['push', 'pull', 'legs', 'core', 'cardio', 'mobility']),
  exerciseClass: z.enum(['compound', 'isolation']),
  repRange: z.string().default(''),
  instructions: z.string().default(''),
  mistakes: z.string().default(''),
  mediaUrl: z.string().optional(),
  mediaAssetId: z.string().optional(),
  visuals: exerciseVisualsSchema.optional(),
  isCustom: z.boolean().default(false),
  favorite: z.boolean().default(false),
  usesBodyweight: z.boolean().default(false),
  unilateral: z.boolean().default(false),

  aliases: z.array(z.string()).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  movementPattern: z.string().optional(),
  exerciseType: z.string().optional(),
  safetyTips: z.array(z.string()).optional(),
  commonMistakes: z.array(z.string()).optional(),
  variationGroupId: z.string().optional(),
  alternativeExerciseIds: z.array(z.string()).optional(),
  trackingType: exerciseTrackingTypeSchema.optional(),
})

export const templateExerciseSchema = z.object({
  id: z.string().min(1),
  exerciseId: z.string().min(1),
  sets: z.number().int().min(1).max(20),
  repsMin: z.number().int().min(0).max(500),
  repsMax: z.number().int().min(0).max(500),
  restSeconds: z.number().int().min(0).max(3600).optional(),
  notes: z.string().optional(),
  supersetGroup: z.string().max(8).optional(),
})

export const templateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  day: z.string().min(1),
  isRestDay: z.boolean(),
  exercises: z.array(templateExerciseSchema),
  notes: z.string().optional(),
})

export const setRecordSchema = z.object({
  id: z.string().min(1),
  exerciseId: z.string().min(1),
  type: z.enum(['warmup', 'working']),
  weightKg: z.number().nullable(),
  reps: z.number().int().nullable(),
  completed: z.boolean(),
  rir: z.number().int().min(0).max(10).nullable(),
  note: z.string().default(''),
  perSide: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
  supersetGroup: z.string().max(8).optional(),
})

export const sessionSchema = z.object({
  id: z.string().min(1),
  templateId: z.string().nullable(),
  templateName: z.string(),
  dayLabel: z.string().default(''),
  prescribed: z.array(templateExerciseSchema).nullable(),
  date: z.string().min(8),
  startedAt: z.string().min(1),
  finishedAt: z.string().nullable(),
  status: z.enum(['active', 'completed']),
  sets: z.array(setRecordSchema),
  notes: z.string().default(''),
  durationSeconds: z.number().default(0),
  discarded: z.boolean().optional(),
})

export const measurementSchema = z.object({
  id: z.string().min(1),
  date: z.string().min(8),
  weightKg: z.number().nullable(),
  waistCm: z.number().nullable(),
  chestCm: z.number().nullable(),
  armCm: z.number().nullable(),
  thighCm: z.number().nullable(),
  hipCm: z.number().nullable(),
  photos: z.array(z.string()).default([]),
  note: z.string().default(''),
})

export const foodItemSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  quantity: z.string().default(''),
  calories: z.number().min(0),
  proteinG: z.number().min(0),
  carbsG: z.number().min(0),
  fatG: z.number().min(0),
  estimated: z.boolean().default(false),
})

export const mealSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  items: z.array(foodItemSchema).default([]),
})

export const nutritionDaySchema = z.object({
  id: z.string().min(1),
  date: z.string().min(8),
  meals: z.array(mealSchema).default([]),
  waterMl: z.number().min(0).default(0),
})

export const mealTemplateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  meals: z.array(mealSchema).default([]),
})

export const personalRecordSchema = z.object({
  id: z.string().min(1),
  exerciseId: z.string().min(1),
  kind: z.enum(['maxWeight', 'maxReps', 'bestVolume', 'e1rm']),
  value: z.number(),
  weightKg: z.number().nullable(),
  reps: z.number().int(),
  date: z.string(),
  sessionId: z.string().default(''),
})

export const profileSchema = z.object({
  displayName: z.string().min(1),
  age: z.number().int().min(10).max(100),
  sex: z.enum(['male', 'female', 'other']),
  heightCm: z.number().min(50).max(260),
  startWeightKg: z.number().min(20).max(400),
  targetWeightKg: z.number().min(20).max(400),
  startWeightDate: z.string(),
  goal: z.string().default(''),
  targetDate: z.string(),
  experience: z.string().default(''),
  split: z.string().default(''),
  sessionDurationMin: z.number().int().min(10).max(300).default(60),
  onboarded: z.boolean().default(false),
})

export const settingsSchema = z.object({
  units: z.object({ weight: z.enum(['kg', 'lb']), length: z.enum(['cm', 'in']) }),
  theme: z.enum(['dark', 'light']),
  defaultRestSeconds: z.number().int().min(0).max(3600),
  proteinTargetG: z.number().min(0).max(500),
  calorieTarget: z.number().min(0).max(10000),
  waterTargetMl: z.number().min(0).max(10000),
  targetGainRateKgPerWeek: z.number().min(-2).max(2),
  minSessionsForStreak: z.number().int().min(1).max(14),
  dumbbellInput: z.enum(['each', 'pair']),
  mealTemplatesEnabled: z.boolean(),
  remindersEnabled: z.boolean(),
  reminderTime: z.string(),
  notifyPrs: z.boolean(),
  notifyRestTimer: z.boolean(),
  lockPhotoPrivacy: z.boolean(),
  waterReminderEnabled: z.boolean().optional(),
  nutritionReminderEnabled: z.boolean().optional(),
  weeklyRecapEnabled: z.boolean().optional(),
  autoProgressiveOverload: z.boolean().optional(),
  availableEquipment: z.array(z.string()).optional(),
})

export const progressPhotoSchema = z.object({
  id: z.string().min(1),
  date: z.string().min(8),
  pose: z.enum(['front', 'side', 'back', 'other']),
  assetId: z.string().min(1),
  weightKg: z.number().nullable().optional(),
  note: z.string().optional(),
})

export const achievementSchema = z.object({
  id: z.string().min(1),
  key: z.string().min(1),
  unlockedAt: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
})

export const favoriteFoodSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  quantity: z.string().default(''),
  calories: z.number().min(0),
  proteinG: z.number().min(0),
  carbsG: z.number().min(0),
  fatG: z.number().min(0),
})

export const recipeSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  servings: z.number().int().min(1).default(1),
  instructions: z.string().optional(),
  items: z.array(foodItemSchema).default([]),
})

export const scheduleDaySchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  dayName: z.string().min(1),
  templateId: z.string().nullable(),
  isRestDay: z.boolean(),
  label: z.string().optional(),
})

export const workoutScheduleSchema = z.object({
  splitName: z.string(),
  days: z.array(scheduleDaySchema),
})

export const appDataSchema = z.object({
  schemaVersion: z.number().int().min(0),
  profile: profileSchema,
  settings: settingsSchema,
  exercises: z.array(exerciseSchema),
  templates: z.array(templateSchema),
  sessions: z.array(sessionSchema),
  measurements: z.array(measurementSchema),
  nutrition: z.array(nutritionDaySchema),
  mealTemplates: z.array(mealTemplateSchema),
  personalRecords: z.array(personalRecordSchema),
  progressPhotos: z.array(progressPhotoSchema).optional().default([]),
  achievements: z.array(achievementSchema).optional().default([]),
  favoriteFoods: z.array(favoriteFoodSchema).optional().default([]),
  recipes: z.array(recipeSchema).optional().default([]),
  schedule: workoutScheduleSchema.optional(),
})

export type ValidationResult =
  | { success: true; data: AppData }
  | { success: false; error: string }

export function validateAppData(input: unknown): ValidationResult {
  const parsed = appDataSchema.safeParse(input)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    const path = first?.path.join('.') || 'root'
    return { success: false, error: `${path}: ${first?.message ?? 'invalid data'}` }
  }
  return { success: true, data: parsed.data as AppData }
}
