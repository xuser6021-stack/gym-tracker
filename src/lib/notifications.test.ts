import { describe, expect, it } from 'vitest'
import { evaluateReminders } from './notifications'

describe('Notifications and Reminders', () => {
  const baseSettings = {
    remindersEnabled: true,
    reminderTime: '18:00',
    waterReminderEnabled: true,
    nutritionReminderEnabled: true,
    waterTargetMl: 3000,
    proteinTargetG: 160,
  }

  it('triggers workout reminder when past scheduled time and not trained', () => {
    const evening = new Date('2026-04-10T19:30:00') // 19:30 (past 18:00)
    const result = evaluateReminders(evening, baseSettings, {
      trainedToday: false,
      todayTemplateName: 'Push A',
      waterLoggedMl: 2500,
      proteinLoggedG: 150,
    })

    expect(result.shouldNotifyWorkout).toBe(true)
    expect(result.workoutTemplateName).toBe('Push A')
  })

  it('suppresses workout reminder if already trained today', () => {
    const evening = new Date('2026-04-10T19:30:00')
    const result = evaluateReminders(evening, baseSettings, {
      trainedToday: true,
      todayTemplateName: 'Push A',
      waterLoggedMl: 2500,
      proteinLoggedG: 150,
    })

    expect(result.shouldNotifyWorkout).toBe(false)
  })

  it('triggers water reminder in afternoon if logged water is under 50%', () => {
    const afternoon = new Date('2026-04-10T15:00:00')
    const result = evaluateReminders(afternoon, baseSettings, {
      trainedToday: true,
      waterLoggedMl: 1000, // 1000 / 3000 < 50%
      proteinLoggedG: 150,
    })

    expect(result.shouldNotifyWater).toBe(true)
  })

  it('triggers nutrition reminder in evening if protein is under 70%', () => {
    const night = new Date('2026-04-10T20:00:00')
    const result = evaluateReminders(night, baseSettings, {
      trainedToday: true,
      waterLoggedMl: 3000,
      proteinLoggedG: 80, // 80 / 160 < 70%
    })

    expect(result.shouldNotifyNutrition).toBe(true)
  })
})
