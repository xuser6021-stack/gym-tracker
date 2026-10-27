import { createDefaultProfile, createDefaultSettings } from '../data/defaults'
import { SEED_EXERCISES } from '../data/exercises'
import { SEED_TEMPLATES } from '../data/templates'
import type { AppData } from '../types'

export const STORAGE_KEY = 'irontrack.v1'
export const SCHEMA_VERSION = 2

export type Migration = (data: Record<string, unknown>) => Record<string, unknown>

/**
 * Ordered migrations keyed by the version they upgrade *from*.
 * When schemaVersion increments in a future release, add the step here so
 * existing users are upgraded safely instead of losing their history.
 */
const MIGRATIONS: Record<number, Migration> = {
  1: (data) => ({
    ...data,
    schemaVersion: 2,
    progressPhotos: Array.isArray(data.progressPhotos) ? data.progressPhotos : [],
    achievements: Array.isArray(data.achievements) ? data.achievements : [],
    favoriteFoods: Array.isArray(data.favoriteFoods) ? data.favoriteFoods : [],
    recipes: Array.isArray(data.recipes) ? data.recipes : [],
  }),
}

export function createInitialData(): AppData {
  return {
    schemaVersion: SCHEMA_VERSION,
    profile: createDefaultProfile(),
    settings: createDefaultSettings(),
    exercises: SEED_EXERCISES,
    templates: SEED_TEMPLATES,
    sessions: [],
    measurements: [],
    nutrition: [],
    mealTemplates: [],
    personalRecords: [],
    progressPhotos: [],
    achievements: [],
    favoriteFoods: [],
    recipes: [],
  }
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

function ensureArray<T>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]) : []
}

/**
 * Merge a parsed object over the defaults so missing keys never crash the UI.
 * Run migrations first, then fill gaps.
 */
export function coerceData(input: unknown): AppData {
  const base = createInitialData()
  if (!isRecord(input)) return base

  let data: Record<string, unknown> = { ...input }
  let version = typeof data.schemaVersion === 'number' ? data.schemaVersion : 0

  while (version < SCHEMA_VERSION) {
    const migration = MIGRATIONS[version]
    if (migration) data = migration(data)
    version += 1
  }

  const profile = isRecord(data.profile) ? data.profile : {}
  const settings = isRecord(data.settings) ? data.settings : {}
  const settingsUnits = isRecord(settings.units) ? settings.units : {}

  return {
    schemaVersion: SCHEMA_VERSION,
    profile: { ...base.profile, ...profile },
    settings: {
      ...base.settings,
      ...settings,
      units: { ...base.settings.units, ...settingsUnits },
    },
    exercises: ensureArray(data.exercises).length ? (data.exercises as AppData['exercises']) : base.exercises,
    templates: ensureArray(data.templates).length ? (data.templates as AppData['templates']) : base.templates,
    sessions: ensureArray(data.sessions),
    measurements: ensureArray(data.measurements),
    nutrition: ensureArray(data.nutrition),
    mealTemplates: ensureArray(data.mealTemplates),
    personalRecords: ensureArray(data.personalRecords),
    progressPhotos: ensureArray(data.progressPhotos),
    achievements: ensureArray(data.achievements),
    favoriteFoods: ensureArray(data.favoriteFoods),
    recipes: ensureArray(data.recipes),
    schedule: isRecord(data.schedule) ? (data.schedule as unknown as AppData['schedule']) : undefined,
  }
}

export function loadData(): AppData {
  if (typeof localStorage === 'undefined') return createInitialData()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createInitialData()
    return coerceData(JSON.parse(raw))
  } catch (err) {
    console.error('[IronTrack] Failed to load stored data, starting fresh.', err)
    return createInitialData()
  }
}

let lastWriteError: string | null = null

export function saveData(data: AppData): { ok: boolean; error?: string } {
  if (typeof localStorage === 'undefined') return { ok: false, error: 'Storage unavailable' }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    lastWriteError = null
    return { ok: true }
  } catch (err) {
    lastWriteError = err instanceof Error ? err.message : 'Unknown storage error'
    console.error('[IronTrack] Failed to save data.', err)
    return { ok: false, error: lastWriteError }
  }
}

export function getLastWriteError(): string | null {
  return lastWriteError
}

export function clearData(): void {
  if (typeof localStorage === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}
