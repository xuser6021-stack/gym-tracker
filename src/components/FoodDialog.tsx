import { useEffect, useState } from 'react'
import { useApp } from '../store/AppStore'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Field } from './ui/Field'
import { Switch } from './ui/Switch'

export function FoodDialog({
  open,
  onClose,
  date,
  mealName,
}: {
  open: boolean
  onClose: () => void
  date: string
  mealName: string
}) {
  const { addFood } = useApp()
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [calories, setCalories] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')
  const [estimated, setEstimated] = useState(true)

  useEffect(() => {
    if (!open) return
    setName('')
    setQuantity('')
    setCalories('')
    setProtein('')
    setCarbs('')
    setFat('')
    setEstimated(true)
  }, [open])

  const num = (v: string) => {
    const n = Number(v)
    return Number.isFinite(n) && n > 0 ? n : 0
  }

  const submit = () => {
    if (!name.trim()) return
    addFood(date, mealName, {
      name: name.trim(),
      quantity: quantity.trim(),
      calories: num(calories),
      proteinG: num(protein),
      carbsG: num(carbs),
      fatG: num(fat),
      estimated,
    })
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      size="lg"
      title="Add food"
      description={`Adds to ${mealName}. Values are optional — rough estimates are fine.`}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!name.trim()} onClick={submit}>
            Add food
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Food" htmlFor="f-name">
            <Input id="f-name" placeholder="e.g. Oats" value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label="Quantity" htmlFor="f-qty">
            <Input id="f-qty" placeholder="e.g. 80 g" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Field label="Calories" htmlFor="f-kcal">
            <Input id="f-kcal" inputMode="numeric" placeholder="kcal" value={calories} onChange={(e) => setCalories(e.target.value)} />
          </Field>
          <Field label="Protein (g)" htmlFor="f-p">
            <Input id="f-p" inputMode="decimal" value={protein} onChange={(e) => setProtein(e.target.value)} />
          </Field>
          <Field label="Carbs (g)" htmlFor="f-c">
            <Input id="f-c" inputMode="decimal" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
          </Field>
          <Field label="Fat (g)" htmlFor="f-f">
            <Input id="f-f" inputMode="decimal" value={fat} onChange={(e) => setFat(e.target.value)} />
          </Field>
        </div>
        <label className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3.5 py-3">
          <span>
            <span className="block text-sm font-semibold text-ink">Estimated values</span>
            <span className="block text-xs text-muted">Mark foods whose macros are approximate</span>
          </span>
          <Switch checked={estimated} onChange={setEstimated} />
        </label>
      </div>
    </Dialog>
  )
}
