export type WeightUnit = 'kg' | 'lb'
export type LengthUnit = 'cm' | 'in'
export type ThemeMode = 'dark' | 'light'

export type MovementCategory = 'push' | 'pull' | 'legs' | 'core' | 'cardio' | 'mobility'
export type ExerciseClass = 'compound' | 'isolation'
export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced'
export type ExerciseTrackingType =
  | 'weight_reps'
  | 'bodyweight_reps'
  | 'assisted_reps'
  | 'duration'
  | 'distance'
  | 'duration_distance'
  | 'hold'

export type SetType = 'warmup' | 'working'
export type SessionStatus = 'active' | 'completed'

export interface UserProfile {
  displayName: string
  age: number
  sex: 'male' | 'female' | 'other'
  heightCm: number
  startWeightKg: number
  targetWeightKg: number
  startWeightDate: string
  goal: string
  targetDate: string
  experience: string
  split: string
  sessionDurationMin: number
  onboarded: boolean
}

export interface AppSettings {
  units: {
    weight: WeightUnit
    length: LengthUnit
  }
  theme: ThemeMode
  defaultRestSeconds: number
  proteinTargetG: number
  calorieTarget: number
  waterTargetMl: number
  targetGainRateKgPerWeek: number
  minSessionsForStreak: number
  dumbbellInput: 'each' | 'pair'
  mealTemplatesEnabled: boolean
  remindersEnabled: boolean
  reminderTime: string
  notifyPrs: boolean
  notifyRestTimer: boolean
  lockPhotoPrivacy: boolean
  waterReminderEnabled?: boolean
  nutritionReminderEnabled?: boolean
  weeklyRecapEnabled?: boolean
  autoProgressiveOverload?: boolean
  availableEquipment?: string[]
}

/** Resolved paths to bundled exercise artwork. Never user data — paths only. */
export interface ExerciseVisuals {
  thumbnail?: string
  anatomyImage?: string
  startPositionImage?: string
  endPositionImage?: string
  animation?: string
  attributionId?: string
}

export interface Exercise {
  id: string
  name: string
  primaryMuscle: string
  secondaryMuscles: string[]
  equipment: string
  category: MovementCategory
  exerciseClass: ExerciseClass
  repRange: string
  instructions: string
  mistakes: string
  mediaUrl?: string
  /**
   * Identifier of a user-uploaded image stored as a Blob in the `assets` object
   * store. Kept out of the main data document to avoid bloating JSON snapshots.
   */
  mediaAssetId?: string
  /** Bundled artwork resolved by the visual registry (paths, not blobs). */
  visuals?: ExerciseVisuals
  isCustom: boolean
  favorite: boolean
  usesBodyweight: boolean
  unilateral: boolean

  // Extended fields for V3.5
  aliases?: string[]
  difficulty?: ExerciseDifficulty
  movementPattern?: string
  exerciseType?: string
  safetyTips?: string[]
  commonMistakes?: string[]
  variationGroupId?: string
  alternativeExerciseIds?: string[]
  trackingType?: ExerciseTrackingType
}

export interface TemplateExercise {
  id: string
  exerciseId: string
  sets: number
  repsMin: number
  repsMax: number
  restSeconds?: number
  notes?: string
  /** Optional superset label (e.g. "A"); exercises sharing one are performed back-to-back. */
  supersetGroup?: string
}

export interface WorkoutTemplate {
  id: string
  name: string
  day: string
  isRestDay: boolean
  exercises: TemplateExercise[]
  notes?: string
}

export interface SetRecord {
  id: string
  exerciseId: string
  type: SetType
  /** null means pure bodyweight (no added load) */
  weightKg: number | null
  reps: number | null
  completed: boolean
  rir: number | null
  note: string
  perSide: boolean
  sortOrder: number
  /** Optional superset label carried over from the template. */
  supersetGroup?: string
}

export interface WorkoutSession {
  id: string
  templateId: string | null
  templateName: string
  /** day label captured at start, e.g. "Monday" */
  dayLabel: string
  /** immutable snapshot of prescribed exercises at the moment the session started */
  prescribed: TemplateExercise[] | null
  date: string
  startedAt: string
  finishedAt: string | null
  status: SessionStatus
  sets: SetRecord[]
  notes: string
  durationSeconds: number
  discarded?: boolean
}

export interface BodyMeasurement {
  id: string
  date: string
  weightKg: number | null
  waistCm: number | null
  chestCm: number | null
  armCm: number | null
  thighCm: number | null
  hipCm: number | null
  photos: string[]
  note: string
}

export type PhotoPose = 'front' | 'side' | 'back' | 'other'

export interface ProgressPhoto {
  id: string
  date: string
  pose: PhotoPose
  assetId: string
  weightKg?: number | null
  note?: string
}

export type AchievementKey =
  | 'first_workout'
  | 'workouts_10'
  | 'workouts_50'
  | 'workouts_100'
  | 'streak_4'
  | 'streak_8'
  | 'volume_10k'
  | 'volume_100k'
  | 'volume_1m'
  | 'first_pr'
  | 'prs_5'
  | 'prs_20'
  | 'hydration_hero'
  | 'protein_master'

export interface Achievement {
  id: string
  key: AchievementKey
  unlockedAt: string
  title: string
  description: string
  icon: string
}

export interface FavoriteFood {
  id: string
  name: string
  quantity: string
  calories: number
  proteinG: number
  carbsG: number
  fatG: number
}

export interface Recipe {
  id: string
  name: string
  servings: number
  instructions?: string
  items: FoodItem[]
}

export interface ScheduleDay {
  dayOfWeek: number // 0=Sun, 1=Mon, ..., 6=Sat
  dayName: string
  templateId: string | null
  isRestDay: boolean
  label?: string
}

export interface WorkoutSchedule {
  splitName: string
  days: ScheduleDay[]
}

export interface FoodItem {
  id: string
  name: string
  quantity: string
  calories: number
  proteinG: number
  carbsG: number
  fatG: number
  estimated: boolean
}

export interface Meal {
  id: string
  name: string
  items: FoodItem[]
}

export interface NutritionDay {
  id: string
  date: string
  meals: Meal[]
  waterMl: number
}

export interface MealTemplate {
  id: string
  name: string
  meals: Meal[]
}

export type PersonalRecordKind = 'maxWeight' | 'maxReps' | 'bestVolume' | 'e1rm'

export interface PersonalRecord {
  id: string
  exerciseId: string
  kind: PersonalRecordKind
  value: number
  weightKg: number | null
  reps: number
  date: string
  sessionId: string
}

export interface CoachingInsight {
  id: string
  exerciseId?: string
  exerciseName?: string
  type: 'increase' | 'deload' | 'plateau' | 'consistency' | 'recovery'
  title: string
  message: string
  recommendation?: string
  metric?: string
  date: string
}

export interface AppData {
  schemaVersion: number
  profile: UserProfile
  settings: AppSettings
  exercises: Exercise[]
  templates: WorkoutTemplate[]
  sessions: WorkoutSession[]
  measurements: BodyMeasurement[]
  nutrition: NutritionDay[]
  mealTemplates: MealTemplate[]
  personalRecords: PersonalRecord[]
  progressPhotos?: ProgressPhoto[]
  achievements?: Achievement[]
  favoriteFoods?: FavoriteFood[]
  recipes?: Recipe[]
  schedule?: WorkoutSchedule
}

export interface WorkoutSummary {
  durationSeconds: number
  exerciseCount: number
  completedSets: number
  workingSets: number
  volumeKg: number
  prs: PersonalRecord[]
}
