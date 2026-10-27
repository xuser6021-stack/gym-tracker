/**
 * IronTrack Intelligent Reminder & Notification Manager.
 * Operates 100% offline using the Web Notification API with graceful in-app banner fallback.
 */

export interface NotificationStatus {
  supported: boolean
  permission: NotificationPermission
}

export function getNotificationStatus(): NotificationStatus {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return { supported: false, permission: 'denied' }
  }
  return {
    supported: true,
    permission: Notification.permission,
  }
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied'
  }
  try {
    return await Notification.requestPermission()
  } catch (err) {
    console.warn('[IronTrack] Notification permission request error:', err)
    return 'denied'
  }
}

export function sendLocalNotification(title: string, options?: NotificationOptions): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false
  }
  if (Notification.permission !== 'granted') {
    return false
  }
  try {
    new Notification(title, {
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      ...options,
    })
    return true
  } catch (err) {
    console.warn('[IronTrack] Local notification failed:', err)
    return false
  }
}

export interface ReminderCheck {
  shouldNotifyWorkout: boolean
  workoutTemplateName?: string
  shouldNotifyWater: boolean
  shouldNotifyNutrition: boolean
}

export function evaluateReminders(
  now: Date,
  settings: {
    remindersEnabled: boolean
    reminderTime: string
    waterReminderEnabled?: boolean
    nutritionReminderEnabled?: boolean
    waterTargetMl: number
    proteinTargetG: number
  },
  state: {
    trainedToday: boolean
    todayTemplateName?: string
    waterLoggedMl: number
    proteinLoggedG: number
  },
): ReminderCheck {
  if (!settings.remindersEnabled) {
    return {
      shouldNotifyWorkout: false,
      shouldNotifyWater: false,
      shouldNotifyNutrition: false,
    }
  }

  const [reminderH, reminderM] = settings.reminderTime.split(':').map(Number)
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const targetMinutes = (Number.isFinite(reminderH) ? reminderH : 18) * 60 + (Number.isFinite(reminderM) ? reminderM : 0)

  const isPastTime = currentMinutes >= targetMinutes

  // Workout reminder: past scheduled time and not trained yet
  const shouldNotifyWorkout = isPastTime && !state.trainedToday && Boolean(state.todayTemplateName)

  // Water reminder: afternoon (after 14:00) and less than 50% water goal logged
  const shouldNotifyWater =
    Boolean(settings.waterReminderEnabled) &&
    now.getHours() >= 14 &&
    state.waterLoggedMl < settings.waterTargetMl * 0.5

  // Nutrition reminder: evening (after 19:00) and protein under 70%
  const shouldNotifyNutrition =
    Boolean(settings.nutritionReminderEnabled) &&
    now.getHours() >= 19 &&
    state.proteinLoggedG < settings.proteinTargetG * 0.7

  return {
    shouldNotifyWorkout,
    workoutTemplateName: state.todayTemplateName,
    shouldNotifyWater,
    shouldNotifyNutrition,
  }
}
