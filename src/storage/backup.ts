import type { AppData } from '../types'
import { coerceData } from '../lib/storage'
import { validateAndRepair, type IntegrityReport } from './validation'

export const BACKUP_FORMAT = 'irontrack-backup'
export const BACKUP_FORMAT_VERSION = 1
/** Hard cap on imported files to avoid locking up the tab on huge/hostile input. */
export const MAX_IMPORT_BYTES = 25 * 1024 * 1024

export interface BackupCounts {
  exercises: number
  templates: number
  sessions: number
  measurements: number
  nutrition: number
  personalRecords: number
}

export interface BackupEnvelope {
  format: string
  formatVersion: number
  appVersion: string
  schemaVersion: number
  exportedAt: string
  counts: BackupCounts
  data: AppData
}

export interface BackupMeta {
  appVersion: string
  formatVersion: number
  schemaVersion: number
  exportedAt: string
  legacy: boolean
}

export interface BackupParseResult {
  ok: boolean
  error?: string
  data?: AppData
  report: IntegrityReport
  counts?: BackupCounts
  meta?: BackupMeta
}

function createReport(): IntegrityReport {
  return { problems: [], repairs: [], warnings: [] }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function countData(data: AppData): BackupCounts {
  return {
    exercises: data.exercises.length,
    templates: data.templates.length,
    sessions: data.sessions.length,
    measurements: data.measurements.length,
    nutrition: data.nutrition.length,
    personalRecords: data.personalRecords.length,
  }
}

export function createBackupEnvelope(data: AppData, appVersion = '1.0.0'): BackupEnvelope {
  return {
    format: BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    appVersion,
    schemaVersion: data.schemaVersion,
    exportedAt: new Date().toISOString(),
    counts: countData(data),
    data,
  }
}

export function serializeBackup(data: AppData, appVersion?: string): string {
  return JSON.stringify(createBackupEnvelope(data, appVersion), null, 2)
}

export function backupFilename(now = new Date()): string {
  const stamp = now.toISOString().slice(0, 19).replace(/[:T]/g, '-')
  return `irontrack-backup-${stamp}.json`
}

/**
 * Parse a backup payload from raw text. Accepts both the envelope format and the
 * legacy raw-`AppData` format, then validates and repairs before returning data.
 */
export function parseBackupText(text: string): BackupParseResult {
  const report = createReport()
  if (!text.trim()) return { ok: false, error: 'The file is empty.', report }

  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    return { ok: false, error: 'The file is not valid JSON.', report }
  }

  let payload: unknown = parsed
  let meta: BackupMeta | undefined

  if (isRecord(parsed) && parsed.format === BACKUP_FORMAT) {
    if (typeof parsed.formatVersion === 'number' && parsed.formatVersion > BACKUP_FORMAT_VERSION) {
      return {
        ok: false,
        error: 'This backup uses a newer format than this app understands. Update IronTrack first.',
        report,
      }
    }
    payload = parsed.data
    meta = {
      appVersion: typeof parsed.appVersion === 'string' ? parsed.appVersion : 'unknown',
      formatVersion: typeof parsed.formatVersion === 'number' ? parsed.formatVersion : 1,
      schemaVersion: typeof parsed.schemaVersion === 'number' ? parsed.schemaVersion : 0,
      exportedAt: typeof parsed.exportedAt === 'string' ? parsed.exportedAt : '',
      legacy: false,
    }
  }

  if (!isRecord(payload)) {
    return { ok: false, error: 'This file does not contain IronTrack data.', report }
  }

  if (!meta) {
    meta = {
      appVersion: 'legacy',
      formatVersion: 1,
      schemaVersion: typeof payload.schemaVersion === 'number' ? payload.schemaVersion : 0,
      exportedAt: '',
      legacy: true,
    }
    report.warnings.push('No backup envelope found; imported as a legacy export.')
  }

  let candidate: AppData
  try {
    candidate = coerceData(payload)
  } catch {
    return { ok: false, error: 'The backup data could not be read.', report }
  }

  const validated = validateAndRepair(candidate)
  report.problems.push(...validated.report.problems)
  report.repairs.push(...validated.report.repairs)
  report.warnings.push(...validated.report.warnings)

  if (!validated.ok || !validated.data) {
    return { ok: false, error: validated.error ?? 'The backup data is invalid.', report }
  }

  return { ok: true, data: validated.data, report, counts: countData(validated.data), meta }
}
