import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Dialog } from './ui/Dialog'
import { Input } from './ui/Input'
import { ExerciseImage } from './exercise/ExerciseImage'

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
  const { allExercises } = useApp()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const excludeKey = excludeIds.join(',')

  const list = useMemo(() => {
    const excluded = new Set(excludeKey ? excludeKey.split(',') : [])
    const q = query.trim().toLowerCase()
    return allExercises
      .filter((e) => !excluded.has(e.id))
      .filter((e) => category === 'all' || e.category === category)
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
  }, [allExercises, query, category, excludeKey])

  const CATEGORY_CHIPS = [
    { value: 'all', label: 'All' },
    { value: 'push', label: 'Push' },
    { value: 'pull', label: 'Pull' },
    { value: 'legs', label: 'Legs' },
    { value: 'core', label: 'Core' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'mobility', label: 'Mobility' },
  ]

  return (
    <Dialog open={open} onClose={onClose} title={title}>
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
                  <span className={`text-[10px] font-bold ${
                    e.difficulty === 'beginner' ? 'text-emerald-500' :
                    e.difficulty === 'intermediate' ? 'text-amber-500' :
                    'text-red-500'
                  }`}>
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
          <li className="py-6 text-center text-sm text-muted">No exercises match your search.</li>
        ) : null}
      </ul>
    </Dialog>
  )
}
