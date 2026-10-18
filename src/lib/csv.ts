import type { BodyMeasurement, WorkoutSession } from '../types'

/**
 * Neutralise CSV formula injection: spreadsheet apps treat cells beginning with
 * `=`, `+`, `-`, `@`, tab or carriage return as formulas. Prefix such values with a
 * single quote and always quote the field so the payload cannot execute.
 */
function neutralizeFormula(s: string): string {
  return /^[=+\-@\t\r]/.test(s) ? `'${s}` : s
}

function esc(v: string | number | null | undefined): string {
  if (v === null || v === undefined) return ''
  const s = neutralizeFormula(String(v))
  return /[",\n\r']/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function table(rows: (string | number | null | undefined)[][]): string {
  return rows.map((r) => r.map(esc).join(',')).join('\r\n')
}

export function workoutsCSV(
  sessions: WorkoutSession[],
  units: { weight: 'kg' | 'lb'; length: 'cm' | 'in' },
): string {
  const rows: (string | number | null)[][] = [
    [
      'session_id',
      'date',
      'workout',
      'exercise_id',
      'set_type',
      'set_number',
      `weight_${units.weight}`,
      'reps',
      'rir',
      'completed',
      'note',
      'duration_seconds',
    ],
  ]
  for (const session of sessions.filter((s) => s.status === 'completed' && !s.discarded)) {
    for (const set of session.sets) {
      rows.push([
        session.id,
        session.date,
        session.templateName,
        set.exerciseId,
        set.type,
        set.sortOrder + 1,
        set.weightKg === null ? '' : Number(weightToDisplay(set.weightKg, units.weight).toFixed(2)),
        set.reps ?? '',
        set.rir ?? '',
        set.completed ? 'yes' : 'no',
        set.note ?? '',
        session.durationSeconds,
      ])
    }
  }
  return table(rows)
}

export function weightToDisplay(kg: number, unit: 'kg' | 'lb'): number {
  return unit === 'kg' ? kg : kg / 0.45359237
}

export function measurementsCSV(
  measurements: BodyMeasurement[],
  units: { weight: 'kg' | 'lb'; length: 'cm' | 'in' },
): string {
  const rows: (string | number | null)[][] = [
    [
      'date',
      `weight_${units.weight}`,
      `waist_${units.length}`,
      `chest_${units.length}`,
      `arm_${units.length}`,
      `thigh_${units.length}`,
      `hip_${units.length}`,
      'note',
    ],
  ]
  for (const m of [...measurements].sort((a, b) => (a.date < b.date ? -1 : 1))) {
    rows.push([
      m.date,
      m.weightKg === null ? '' : Number(weightToDisplay(m.weightKg, units.weight).toFixed(2)),
      m.waistCm === null ? '' : Number(lengthToDisplay(m.waistCm, units.length).toFixed(2)),
      m.chestCm === null ? '' : Number(lengthToDisplay(m.chestCm, units.length).toFixed(2)),
      m.armCm === null ? '' : Number(lengthToDisplay(m.armCm, units.length).toFixed(2)),
      m.thighCm === null ? '' : Number(lengthToDisplay(m.thighCm, units.length).toFixed(2)),
      m.hipCm === null ? '' : Number(lengthToDisplay(m.hipCm, units.length).toFixed(2)),
      m.note ?? '',
    ])
  }
  return table(rows)
}

export function lengthToDisplay(cm: number, unit: 'cm' | 'in'): number {
  return unit === 'cm' ? cm : cm / 2.54
}

export function downloadFile(filename: string, content: string, mime = 'text/csv'): void {
  const blob = new Blob([content], { type: `${mime};charset=utf-8;` })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
