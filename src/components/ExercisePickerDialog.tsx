import { useMemo, useState } from 'react'
import { Plus, Search, X } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Dialog } from './ui/Dialog'
import { Input } from './ui/Input'
import { ExerciseImage } from './exercise/ExerciseImage'
import { Button } from './ui/Button'
import type { MovementCategory } from '../types'

export function ExercisePickerDialog({
  open,
  onClose,
  onPick,
  excludeIds = [],
  title = 'Add exercise',
}: {
  open: boolean
  onClose: () => void
  onPick: (exerciseId: string) => void
  excludeIds?: string[]
  title?: string
}) {
  const { allExercises, addExercise } = useApp()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [muscleFilter, setMuscleFilter] = useState('all')
  const [equipmentFilter, setEquipmentFilter] = useState('all')
  const [showCreateCustom, setShowCreateCustom] = useState(false)

  // Custom exercise form state
  const [customName, setCustomName] = useState('')
  const [customPrimary, setCustomPrimary] = useState('Chest')
  const [customSecondary, setCustomSecondary] = useState('')
  const [customEquipment, setCustomEquipment] = useState('Dumbbells')
  const [customCategory, setCustomCategory] = useState<MovementCategory>('push')
  const [customNotes, setCustomNotes] = useState('')

  const excludeKey = excludeIds.join(',')

  // Unique muscles & equipment for dropdown filters
  const { availableMuscles, availableEquipment } = useMemo(() => {
    const mSet = new Set<string>()
    const eSet = new Set<string>()
    for (const ex of allExercises) {
      if (ex.primaryMuscle) mSet.add(ex.primaryMuscle)
      if (ex.equipment) eSet.add(ex.equipment)
    }
    return {
      availableMuscles: Array.from(mSet).sort(),
      availableEquipment: Array.from(eSet).sort(),
    }
  }, [allExercises])

  const list = useMemo(() => {
    const excluded = new Set(excludeKey ? excludeKey.split(',') : [])
    const q = query.trim().toLowerCase()
    return allExercises
      .filter((e) => !excluded.has(e.id))
      .filter((e) => category === 'all' || e.category === category)
      .filter((e) => muscleFilter === 'all' || e.primaryMuscle === muscleFilter)
      .filter((e) => equipmentFilter === 'all' || e.equipment === equipmentFilter)
      .filter(
        (e) =>
          !q ||
          e.name.toLowerCase().includes(q) ||
          e.primaryMuscle.toLowerCase().includes(q) ||
          e.equipment.toLowerCase().includes(q) ||
          (e.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false),
      )
      .sort((a, b) => {
        if (a.favorite && !b.favorite) return -1
        if (!a.favorite && b.favorite) return 1
        return a.name.localeCompare(b.name)
      })
  }, [allExercises, query, category, muscleFilter, equipmentFilter, excludeKey])

  const CATEGORY_CHIPS = [
    { value: 'all', label: 'All' },
    { value: 'push', label: 'Push' },
    { value: 'pull', label: 'Pull' },
    { value: 'legs', label: 'Legs' },
    { value: 'core', label: 'Core' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'mobility', label: 'Mobility' },
  ]

  const handleSaveCustom = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customName.trim()) return

    const secondaryArray = customSecondary
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const created = addExercise({
      name: customName.trim(),
      primaryMuscle: customPrimary,
      secondaryMuscles: secondaryArray,
      equipment: customEquipment,
      category: customCategory,
      exerciseClass: 'isolation',
      repRange: '8-12',
      instructions: customNotes.trim(),
      mistakes: '',
      usesBodyweight: customEquipment.toLowerCase().includes('bodyweight'),
      unilateral: false,
    })

    setShowCreateCustom(false)
    setCustomName('')
    setCustomNotes('')
    onPick(created.id)
  }

  return (
    <Dialog open={open} onClose={onClose} title={title}>
      {showCreateCustom ? (
        <form onSubmit={handleSaveCustom} className="space-y-3">
          <div className="flex items-center justify-between pb-1">
            <h3 className="text-sm font-bold text-ink">Create Custom Exercise</h3>
            <button
              type="button"
              onClick={() => setShowCreateCustom(false)}
              className="text-xs font-semibold text-accent hover:underline"
            >
              Back to search
            </button>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted">Exercise Name *</label>
            <Input
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="e.g. Incline Cable Y-Raise"
              required
              autoFocus
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold text-muted">Primary Muscle *</label>
              <select
                value={customPrimary}
                onChange={(e) => setCustomPrimary(e.target.value)}
                className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-xs font-semibold text-ink"
              >
                {availableMuscles.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted">Equipment *</label>
              <select
                value={customEquipment}
                onChange={(e) => setCustomEquipment(e.target.value)}
                className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-xs font-semibold text-ink"
              >
                {availableEquipment.map((eq) => (
                  <option key={eq} value={eq}>
                    {eq}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold text-muted">Category *</label>
              <select
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value as MovementCategory)}
                className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-xs font-semibold text-ink"
              >
                <option value="push">Push</option>
                <option value="pull">Pull</option>
                <option value="legs">Legs</option>
                <option value="core">Core</option>
                <option value="cardio">Cardio</option>
                <option value="mobility">Mobility</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted">Secondary Muscles</label>
              <Input
                value={customSecondary}
                onChange={(e) => setCustomSecondary(e.target.value)}
                placeholder="Comma separated"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted">Exercise Notes / Instructions</label>
            <Input
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Optional form tips or notes"
              className="mt-1"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" size="sm" onClick={() => setShowCreateCustom(false)}>
              Cancel
            </Button>
            <Button type="submit" size="sm" disabled={!customName.trim()}>
              Save &amp; Add Exercise
            </Button>
          </div>
        </form>
      ) : (
        <>
          {/* Search */}
          <div className="relative mb-2">
            <Search size={16} className="absolute left-3 top-3.5 text-faint" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, muscle or equipment"
              className="pl-9 pr-8"
              autoFocus
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="absolute right-3 top-3.5 text-faint hover:text-ink"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Muscle & Equipment Dropdown Filters */}
          <div className="mb-2.5 flex items-center gap-2">
            <select
              value={muscleFilter}
              onChange={(e) => setMuscleFilter(e.target.value)}
              className="h-8 flex-1 rounded-lg border border-line bg-surface2 px-2 text-xs font-semibold text-ink"
            >
              <option value="all">All Muscles</option>
              {availableMuscles.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={equipmentFilter}
              onChange={(e) => setEquipmentFilter(e.target.value)}
              className="h-8 flex-1 rounded-lg border border-line bg-surface2 px-2 text-xs font-semibold text-ink"
            >
              <option value="all">All Equipment</option>
              {availableEquipment.map((eq) => (
                <option key={eq} value={eq}>
                  {eq}
                </option>
              ))}
            </select>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowCreateCustom(true)}
              className="h-8 shrink-0 gap-1 px-2.5 text-xs"
            >
              <Plus size={14} />
              Custom
            </Button>
          </div>

          {/* Category chips */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {CATEGORY_CHIPS.map((chip) => (
              <button
                key={chip.value}
                type="button"
                onClick={() => setCategory(chip.value)}
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${
                  category === chip.value
                    ? 'bg-accent text-white'
                    : 'bg-surface2 text-muted hover:bg-surface3 hover:text-ink'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <p className="mb-1.5 text-xs text-faint">{list.length} exercises</p>

          <ul className="max-h-80 space-y-1.5 overflow-y-auto">
            {list.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    onPick(e.id)
                    setQuery('')
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2.5 text-left transition-colors hover:border-linestrong"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <ExerciseImage
                      exercise={e}
                      kind="thumbnail"
                      compact
                      className="h-9 w-9 shrink-0 rounded-lg"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">{e.name}</span>
                      <span className="block truncate text-xs text-muted">
                        {e.primaryMuscle} · {e.equipment}
                      </span>
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {e.difficulty && (
                      <span
                        className={`text-[10px] font-bold ${
                          e.difficulty === 'beginner'
                            ? 'text-emerald-500'
                            : e.difficulty === 'intermediate'
                              ? 'text-amber-500'
                              : 'text-red-500'
                        }`}
                      >
                        {e.difficulty.slice(0, 3).toUpperCase()}
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wide text-faint">
                      {e.category}
                    </span>
                  </div>
                </button>
              </li>
            ))}
            {list.length === 0 ? (
              <li className="py-6 text-center text-sm text-muted">
                No exercises match your search.
                <button
                  type="button"
                  onClick={() => setShowCreateCustom(true)}
                  className="mt-2 block w-full text-xs font-bold text-accent hover:underline"
                >
                  + Create custom exercise "{query}"
                </button>
              </li>
            ) : null}
          </ul>
        </>
      )}
    </Dialog>
  )
}
