import type { LengthUnit, WeightUnit } from '../types'

export const KG_PER_LB = 0.45359237

export function kgToLb(kg: number): number {
  return kg / KG_PER_LB
}

export function lbToKg(lb: number): number {
  return lb * KG_PER_LB
}

export function cmToIn(cm: number): number {
  return cm / 2.54
}

export function inToCm(inches: number): number {
  return inches * 2.54
}

/** Convert a stored kg/cm value into the user's display unit. */
export function displayWeight(kg: number | null | undefined, unit: WeightUnit): number | null {
  if (kg === null || kg === undefined || Number.isNaN(kg)) return null
  return unit === 'lb' ? kgToLb(kg) : kg
}

export function displayLength(cm: number | null | undefined, unit: LengthUnit): number | null {
  if (cm === null || cm === undefined || Number.isNaN(cm)) return null
  return unit === 'in' ? cmToIn(cm) : cm
}

/** Convert a value entered in the user's display unit back into stored kg/cm. */
export function toKg(value: number | null | undefined, unit: WeightUnit): number | null {
  if (value === null || value === undefined || Number.isNaN(value)) return null
  return unit === 'lb' ? lbToKg(value) : value
}

export function toCm(value: number | null | undefined, unit: LengthUnit): number | null {
  if (value === null || value === undefined || Number.isNaN(value)) return null
  return unit === 'in' ? inToCm(value) : value
}

export function weightLabel(unit: WeightUnit): string {
  return unit === 'kg' ? 'kg' : 'lb'
}

export function lengthLabel(unit: LengthUnit): string {
  return unit === 'cm' ? 'cm' : 'in'
}

/** Increment used by weight steppers, expressed in kg internally. */
export function weightIncrementKg(unit: WeightUnit): number {
  return unit === 'kg' ? 2.5 : 5
}

export function roundTo(value: number, decimals = 1): number {
  const f = 10 ** decimals
  return Math.round(value * f) / f
}
