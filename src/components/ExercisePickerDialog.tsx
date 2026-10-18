import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
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
  const { data } = useApp()
  const [query, setQuery] = useState('')
  const excludeKey = excludeIds.join(',')

  const list = useMemo(() => {
    const excluded = new Set(excludeKey ? excludeKey.split(',') : [])
    const q = query.trim().toLowerCase()
    return data.exercises
      .filter((e) => !excluded.has(e.id))
      .filter(
        (e) =>
          !q ||
          e.name.toLowerCase().includes(q) ||
          e.primaryMuscle.toLowerCase().includes(q) ||
          e.equipment.toLowerCase().includes(q),
      )
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [data.exercises, query, excludeKey])

  return (
    <Dialog open={open} onClose={onClose} title={title}>
      <div className="relative mb-3">
        <Search size={16} className="absolute left-3 top-3.5 text-faint" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, muscle or equipment"
          className="pl-9"
          autoFocus
        />
      </div>
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
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-faint">
                {e.category}
              </span>
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
