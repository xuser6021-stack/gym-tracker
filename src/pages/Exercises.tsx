import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Star } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { PageHeader } from '../components/ui/PageHeader'
import { Input, Select } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { CustomExerciseDialog } from '../components/CustomExerciseDialog'
import { ExerciseImage } from '../components/exercise/ExerciseImage'
import { hasBundledAnimation } from '../data/exerciseVisuals'
import { cn } from '../lib/cn'

export function Exercises() {
  const { data, toggleFavorite } = useApp()
  const [query, setQuery] = useState('')
  const [muscle, setMuscle] = useState('all')
  const [equipment, setEquipment] = useState('all')
  const [category, setCategory] = useState('all')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)

  const muscles = useMemo(
    () => Array.from(new Set(data.exercises.map((e) => e.primaryMuscle))).sort(),
    [data.exercises],
  )
  const equipmentList = useMemo(
    () => Array.from(new Set(data.exercises.map((e) => e.equipment))).sort(),
    [data.exercises],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return data.exercises
      .filter((e) => {
        if (favoritesOnly && !e.favorite) return false
        if (muscle !== 'all' && e.primaryMuscle !== muscle) return false
        if (equipment !== 'all' && e.equipment !== equipment) return false
        if (category !== 'all' && e.category !== category) return false
        if (q && !e.name.toLowerCase().includes(q)) return false
        return true
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [data.exercises, query, muscle, equipment, category, favoritesOnly])

  return (
    <div>
      <PageHeader
        title="Exercises"
        subtitle={`${data.exercises.length} movements in your library`}
        action={
          <Button onClick={() => setCreateOpen(true)}>
            <Plus size={16} /> <span className="hidden sm:inline">New</span>
          </Button>
        }
      />

      <div className="space-y-3">
        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises…"
            className="h-11 pl-9"
            aria-label="Search exercises"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Select value={muscle} onChange={(e) => setMuscle(e.target.value)} aria-label="Filter by muscle">
            <option value="all">All muscles</option>
            {muscles.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </Select>
          <Select value={equipment} onChange={(e) => setEquipment(e.target.value)} aria-label="Filter by equipment">
            <option value="all">All equipment</option>
            {equipmentList.map((eq) => (
              <option key={eq} value={eq}>
                {eq}
              </option>
            ))}
          </Select>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by movement">
            <option value="all">All movements</option>
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
            <option value="core">Core</option>
          </Select>
          <Button
            variant={favoritesOnly ? 'primary' : 'secondary'}
            onClick={() => setFavoritesOnly((v) => !v)}
            aria-pressed={favoritesOnly}
          >
            <Star size={16} className={cn(favoritesOnly && 'fill-current')} /> Favorites
          </Button>
        </div>
      </div>

      <div className="mt-4">
        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search size={26} />}
            title="No exercises found"
            description="Try adjusting your filters or add a custom exercise."
            action={
              <Button variant="secondary" onClick={() => setCreateOpen(true)}>
                <Plus size={16} /> Create exercise
              </Button>
            }
          />
        ) : (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((exercise) => (
              <div key={exercise.id} className="rounded-2xl border border-line bg-surface p-4">
                <div className="flex items-start gap-3">
                  <Link
                    to={`/exercises/${exercise.id}`}
                    aria-label={`View ${exercise.name}`}
                    className="shrink-0"
                  >
                    <ExerciseImage
                      exercise={exercise}
                      kind="thumbnail"
                      compact
                      className="h-14 w-14 rounded-xl"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/exercises/${exercise.id}`} className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-ink">{exercise.name}</p>
                        <p className="mt-0.5 truncate text-xs text-muted">
                          {exercise.primaryMuscle} · {exercise.equipment}
                        </p>
                      </Link>
                      <button
                        type="button"
                        aria-label={exercise.favorite ? 'Remove from favorites' : 'Add to favorites'}
                        onClick={() => toggleFavorite(exercise.id)}
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg hover:bg-surface3',
                          exercise.favorite ? 'text-accent' : 'text-faint',
                        )}
                      >
                        <Star size={16} fill={exercise.favorite ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    {hasBundledAnimation(exercise) ? (
                      <Badge tone="info" className="mt-1.5">
                        demo
                      </Badge>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge tone={exercise.exerciseClass === 'compound' ? 'accent' : 'neutral'}>
                    {exercise.exerciseClass}
                  </Badge>
                  <Badge tone="neutral">{exercise.repRange} reps</Badge>
                  {exercise.isCustom ? <Badge tone="info">custom</Badge> : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CustomExerciseDialog open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  )
}
