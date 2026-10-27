import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Dumbbell, Filter, Plus, Search, Star, X } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { PageHeader } from '../components/ui/PageHeader'
import { Input, Select } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { CustomExerciseDialog } from '../components/CustomExerciseDialog'
import { ExerciseImage } from '../components/exercise/ExerciseImage'
import { MuscleMap } from '../components/exercise/MuscleMap'
import { hasBundledAnimation } from '../data/exerciseVisuals'
import { cn } from '../lib/cn'
import type { Exercise, ExerciseDifficulty } from '../types'

// ─── constants ────────────────────────────────────────────────────────────────

const CATEGORIES: { value: string; label: string }[] = [
  { value: 'all', label: 'All movements' },
  { value: 'push', label: 'Push' },
  { value: 'pull', label: 'Pull' },
  { value: 'legs', label: 'Legs' },
  { value: 'core', label: 'Core' },
  { value: 'cardio', label: 'Cardio' },
  { value: 'mobility', label: 'Mobility' },
]

const DIFFICULTIES: { value: string; label: string }[] = [
  { value: 'all', label: 'Any level' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

const EXERCISE_TYPES: { value: string; label: string }[] = [
  { value: 'all', label: 'All types' },
  { value: 'compound', label: 'Compound' },
  { value: 'isolation', label: 'Isolation' },
]

const DIFFICULTY_COLORS: Record<ExerciseDifficulty, string> = {
  beginner: 'text-emerald-600 dark:text-emerald-400',
  intermediate: 'text-amber-600 dark:text-amber-400',
  advanced: 'text-red-600 dark:text-red-400',
}

// ─── component ────────────────────────────────────────────────────────────────

export function Exercises() {
  const { allExercises, toggleFavorite } = useApp()
  const [query, setQuery] = useState('')
  const [muscle, setMuscle] = useState<string | null>(null)
  const [equipment, setEquipment] = useState('all')
  const [category, setCategory] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [exerciseType, setExerciseType] = useState('all')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [showMuscleMap, setShowMuscleMap] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)

  // Derive filter options from the full exercise library
  const equipmentList = useMemo(
    () => Array.from(new Set(allExercises.map((e) => e.equipment))).sort(),
    [allExercises],
  )

  // Exercise counts per muscle group for the muscle map
  const exerciseCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const e of allExercises) {
      counts[e.primaryMuscle] = (counts[e.primaryMuscle] ?? 0) + 1
    }
    return counts
  }, [allExercises])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allExercises
      .filter((e) => {
        if (favoritesOnly && !e.favorite) return false
        if (muscle && e.primaryMuscle !== muscle && !e.secondaryMuscles.includes(muscle)) return false
        if (equipment !== 'all' && e.equipment !== equipment) return false
        if (category !== 'all' && e.category !== category) return false
        if (difficulty !== 'all' && e.difficulty !== difficulty) return false
        if (exerciseType !== 'all' && e.exerciseClass !== exerciseType) return false
        if (q) {
          const nameMatch = e.name.toLowerCase().includes(q)
          const aliasMatch = e.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false
          const muscleMatch = e.primaryMuscle.toLowerCase().includes(q)
          const equipMatch = e.equipment.toLowerCase().includes(q)
          const patternMatch = e.movementPattern?.toLowerCase().includes(q) ?? false
          if (!nameMatch && !aliasMatch && !muscleMatch && !equipMatch && !patternMatch) return false
        }
        return true
      })
      .sort((a, b) => {
        // Favorites first, then alphabetical
        if (a.favorite && !b.favorite) return -1
        if (!a.favorite && b.favorite) return 1
        return a.name.localeCompare(b.name)
      })
  }, [allExercises, query, muscle, equipment, category, difficulty, exerciseType, favoritesOnly])

  const hasActiveFilters =
    muscle !== null ||
    equipment !== 'all' ||
    category !== 'all' ||
    difficulty !== 'all' ||
    exerciseType !== 'all' ||
    favoritesOnly

  const clearFilters = () => {
    setMuscle(null)
    setEquipment('all')
    setCategory('all')
    setDifficulty('all')
    setExerciseType('all')
    setFavoritesOnly(false)
  }

  return (
    <div>
      <PageHeader
        title="Exercises"
        subtitle={`${allExercises.length} movements · ${filtered.length} shown`}
        action={
          <Button onClick={() => setCreateOpen(true)}>
            <Plus size={16} /> <span className="hidden sm:inline">New</span>
          </Button>
        }
      />

      {/* Search bar */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, muscle, alias…"
              className="h-11 pl-9"
              aria-label="Search exercises"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-ink"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <Button
            variant={showFilters || hasActiveFilters ? 'primary' : 'secondary'}
            onClick={() => setShowFilters((v) => !v)}
            aria-pressed={showFilters}
            className="shrink-0"
          >
            <Filter size={16} />
            {hasActiveFilters && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                !
              </span>
            )}
          </Button>

          {/* Favorites */}
          <Button
            variant={favoritesOnly ? 'primary' : 'secondary'}
            onClick={() => setFavoritesOnly((v) => !v)}
            aria-pressed={favoritesOnly}
            className="shrink-0"
          >
            <Star size={16} className={cn(favoritesOnly && 'fill-current')} />
          </Button>
        </div>

        {/* Expandable filter panel */}
        {showFilters && (
          <div className="rounded-2xl border border-line bg-surface p-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by movement">
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </Select>
              <Select value={equipment} onChange={(e) => setEquipment(e.target.value)} aria-label="Filter by equipment">
                <option value="all">All equipment</option>
                {equipmentList.map((eq) => (
                  <option key={eq} value={eq}>{eq}</option>
                ))}
              </Select>
              <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} aria-label="Filter by difficulty">
                {DIFFICULTIES.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </Select>
              <Select value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} aria-label="Filter by exercise type">
                {EXERCISE_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </Select>
            </div>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-faint hover:text-ink">
                <X size={14} /> Clear all filters
              </Button>
            )}
          </div>
        )}

        {/* Muscle Map toggle */}
        <button
          type="button"
          onClick={() => setShowMuscleMap((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface2 transition-colors"
          aria-expanded={showMuscleMap}
        >
          <span className="flex items-center gap-2">
            <Dumbbell size={16} className="text-accent" />
            Filter by muscle map
            {muscle && (
              <Badge tone="accent" className="ml-1">{muscle}</Badge>
            )}
          </span>
          {showMuscleMap ? <ChevronUp size={16} className="text-faint" /> : <ChevronDown size={16} className="text-faint" />}
        </button>

        {showMuscleMap && (
          <div className="rounded-2xl border border-line bg-surface p-3">
            <MuscleMap
              selectedMuscle={muscle}
              onSelectMuscle={(m) => setMuscle(m)}
              exerciseCounts={exerciseCounts}
            />
            {muscle && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs text-muted">
                  Filtering by <strong className="text-ink">{muscle}</strong> — {filtered.length} exercises
                </p>
                <Button variant="ghost" size="sm" onClick={() => setMuscle(null)} className="text-xs text-faint">
                  <X size={12} /> Clear
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Exercise grid */}
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
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>

      <CustomExerciseDialog open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  )
}

// ─── exercise card ─────────────────────────────────────────────────────────────

function ExerciseCard({
  exercise,
  onToggleFavorite,
}: {
  exercise: Exercise
  onToggleFavorite: (id: string) => void
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 hover:border-linestrong transition-colors">
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
              onClick={() => onToggleFavorite(exercise.id)}
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg hover:bg-surface3',
                exercise.favorite ? 'text-accent' : 'text-faint',
              )}
            >
              <Star size={16} fill={exercise.favorite ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Badges row */}
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Badge tone={exercise.exerciseClass === 'compound' ? 'accent' : 'neutral'}>
              {exercise.exerciseClass}
            </Badge>
            {exercise.difficulty && (
              <span
                className={cn(
                  'inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold',
                  DIFFICULTY_COLORS[exercise.difficulty as ExerciseDifficulty],
                )}
              >
                {exercise.difficulty}
              </span>
            )}
            {hasBundledAnimation(exercise) && (
              <Badge tone="info">demo</Badge>
            )}
            {exercise.isCustom && <Badge tone="info">custom</Badge>}
          </div>
        </div>
      </div>
    </div>
  )
}
