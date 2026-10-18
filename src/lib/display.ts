import type { PersonalRecord, WeightUnit } from '../types'

export function formatWeightValue(kg: number | null, unit: WeightUnit, decimals = 1): string {
  if (kg === null || !Number.isFinite(kg)) return '—'
  const value = unit === 'kg' ? kg : kg / 0.45359237
  const rounded = Number(value.toFixed(decimals))
  return `${rounded.toLocaleString(undefined, { maximumFractionDigits: decimals })} ${unit}`
}

export function convertWeightValue(kg: number, unit: WeightUnit): number {
  return unit === 'kg' ? kg : kg / 0.45359237
}

export function prKindLabel(kind: PersonalRecord['kind']): string {
  switch (kind) {
    case 'maxWeight':
      return 'Heaviest load'
    case 'maxReps':
      return 'Most reps'
    case 'bestVolume':
      return 'Best single-set volume'
    case 'e1rm':
      return 'Estimated 1RM'
  }
}

export function prTone(kind: PersonalRecord['kind']): 'accent' | 'success' | 'warn' | 'info' {
  switch (kind) {
    case 'maxWeight':
      return 'accent'
    case 'bestVolume':
      return 'success'
    case 'maxReps':
      return 'info'
    case 'e1rm':
      return 'warn'
  }
}
