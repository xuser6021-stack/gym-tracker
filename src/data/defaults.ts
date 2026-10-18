import type { AppSettings, UserProfile } from '../types'

export function createDefaultProfile(): UserProfile {
  const today = new Date()
  const target = new Date(today)
  target.setMonth(target.getMonth() + 5)
  const iso = (d: Date) =>
    `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${`${d.getDate()}`.padStart(2, '0')}`
  return {
    displayName: 'Athlete',
    age: 18,
    sex: 'male',
    heightCm: 175,
    startWeightKg: 54,
    targetWeightKg: 60,
    startWeightDate: iso(today),
    goal: 'Muscle gain and balanced full-body development',
    targetDate: iso(target),
    experience: 'Beginner / returning — about 2 months back in the gym',
    split: 'Six-day Push / Pull / Legs (PPL)',
    sessionDurationMin: 75,
    onboarded: false,
  }
}

export function createDefaultSettings(): AppSettings {
  return {
    units: { weight: 'kg', length: 'cm' },
    theme: 'dark',
    defaultRestSeconds: 90,
    proteinTargetG: 100,
    calorieTarget: 2800,
    waterTargetMl: 2500,
    targetGainRateKgPerWeek: 0.25,
    minSessionsForStreak: 6,
    dumbbellInput: 'each',
    mealTemplatesEnabled: true,
    remindersEnabled: false,
    reminderTime: '18:00',
    notifyPrs: true,
    notifyRestTimer: true,
    lockPhotoPrivacy: true,
  }
}
