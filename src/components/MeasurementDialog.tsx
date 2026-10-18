import { useEffect, useState } from 'react'
import type { BodyMeasurement } from '../types'
import { useApp } from '../store/AppStore'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input, Textarea } from './ui/Input'
import { Field } from './ui/Field'
import { displayLength, displayWeight, inToCm, lbToKg, lengthLabel, weightLabel } from '../lib/units'
import { isoDate } from '../lib/stats'
import { useToday } from '../lib/useNow'

function toNum(raw: string): number | null {
  const t = raw.trim()
  if (t === '') return null
  const n = Number(t)
  return Number.isFinite(n) ? n : null
}

const LENGTH_FIELDS: { key: keyof BodyMeasurement; label: string }[] = [
  { key: 'waistCm', label: 'Waist' },
  { key: 'chestCm', label: 'Chest' },
  { key: 'armCm', label: 'Arm' },
  { key: 'thighCm', label: 'Thigh' },
  { key: 'hipCm', label: 'Hip' },
]

export function MeasurementDialog({
  open,
  onClose,
  existing,
}: {
  open: boolean
  onClose: () => void
  existing?: BodyMeasurement | null
}) {
  const { data, addMeasurement, updateMeasurement } = useApp()
  const { weight: wUnit, length: lUnit } = data.settings.units
  const today = useToday()

  const [date, setDate] = useState(isoDate(today))
  const [weight, setWeight] = useState('')
  const [lens, setLens] = useState<Record<string, string>>({})
  const [note, setNote] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    if (existing) {
      setDate(existing.date)
      const w = displayWeight(existing.weightKg, wUnit)
      setWeight(w === null ? '' : String(w))
      const next: Record<string, string> = {}
      for (const f of LENGTH_FIELDS) {
        const v = displayLength(existing[f.key] as number | null, lUnit)
        next[f.key] = v === null ? '' : String(v)
      }
      setLens(next)
      setNote(existing.note)
    } else {
      setDate(isoDate(new Date()))
      setWeight('')
      setLens({})
      setNote('')
    }
  }, [open, existing, wUnit, lUnit])

  const submit = () => {
    const weightKg = weight.trim() === '' ? null : wUnit === 'kg' ? Number(weight) : lbToKg(Number(weight))
    if (weight.trim() !== '' && (weightKg === null || !Number.isFinite(weightKg))) {
      setError('Enter a valid weight or leave it blank.')
      return
    }
    const lengthValues: Partial<Record<keyof BodyMeasurement, number | null>> = {}
    for (const f of LENGTH_FIELDS) {
      const raw = lens[f.key] ?? ''
      const v = toNum(raw)
      lengthValues[f.key] = v === null ? null : lUnit === 'cm' ? v : inToCm(v)
    }
    const payload = {
      date,
      weightKg,
      waistCm: (lengthValues.waistCm ?? null) as number | null,
      chestCm: (lengthValues.chestCm ?? null) as number | null,
      armCm: (lengthValues.armCm ?? null) as number | null,
      thighCm: (lengthValues.thighCm ?? null) as number | null,
      hipCm: (lengthValues.hipCm ?? null) as number | null,
      note,
    }
    if (existing) {
      updateMeasurement(existing.id, payload)
    } else {
      addMeasurement({ ...payload, photos: [] })
    }
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      size="lg"
      title={existing ? 'Edit entry' : 'Log body check-in'}
      description="Weigh in at a consistent time of day, ideally in the morning before eating."
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={submit}>{existing ? 'Save changes' : 'Add entry'}</Button>
        </>
      }
    >
      <div className="space-y-4">
        {error ? <p className="text-sm font-medium text-danger">{error}</p> : null}
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Date" htmlFor="m-date">
            <Input id="m-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>
          <Field label={`Body weight (${weightLabel(wUnit)})`} htmlFor="m-weight">
            <Input
              id="m-weight"
              inputMode="decimal"
              placeholder="—"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {LENGTH_FIELDS.map((f) => (
            <Field key={f.key} label={`${f.label} (${lengthLabel(lUnit)})`} htmlFor={`m-${f.key}`}>
              <Input
                id={`m-${f.key}`}
                inputMode="decimal"
                placeholder="—"
                value={lens[f.key] ?? ''}
                onChange={(e) => setLens((prev) => ({ ...prev, [f.key]: e.target.value }))}
              />
            </Field>
          ))}
        </div>
        <Field label="Note" htmlFor="m-note">
          <Textarea id="m-note" rows={2} placeholder="Energy, sleep, measurements conditions…" value={note} onChange={(e) => setNote(e.target.value)} />
        </Field>
      </div>
    </Dialog>
  )
}
