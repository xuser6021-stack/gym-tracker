import type { AppSettings, Exercise, SetRecord, WorkoutSession } from '../types'
import { createDefaultSettings } from '../data/defaults'

export function makeSettings(overrides: Partial<AppSettings> = {}): AppSettings {
  return { ...createDefaultSettings(), ...overrides, units: { ...createDefaultSettings().units, ...overrides.units } }
}

export function makeExercise(overrides: Partial<Exercise> = {}): Exercise {
  return {
    id: 'ex-1',
    name: 'Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: [],
    equipment: 'Barbell',
    category: 'push',
    exerciseClass: 'compound',
    repRange: '8-12',
    instructions: '',
    mistakes: '',
    isCustom: false,
    favorite: false,
    usesBodyweight: false,
    unilateral: false,
    ...overrides,
  }
}

export function makeDumbbell(overrides: Partial<Exercise> = {}): Exercise {
  return makeExercise({ id: 'ex-db', name: 'Dumbbell Curl', equipment: 'Dumbbell', ...overrides })
}

export function makeSet(overrides: Partial<SetRecord> = {}): SetRecord {
  return {
    id: 'set-1',
    exerciseId: 'ex-1',
    type: 'working',
    weightKg: 40,
    reps: 8,
    completed: true,
    rir: null,
    note: '',
    perSide: false,
    sortOrder: 0,
    ...overrides,
  }
}

export function makeSession(overrides: Partial<WorkoutSession> = {}): WorkoutSession {
  return {
    id: 'sess-1',
    templateId: null,
    templateName: 'Test Day',
    dayLabel: 'Monday',
    prescribed: null,
    date: '2026-01-01',
    startedAt: '2026-01-01T10:00:00.000Z',
    finishedAt: '2026-01-01T11:00:00.000Z',
    status: 'completed',
    sets: [],
    notes: '',
    durationSeconds: 3600,
    ...overrides,
  }
}
