import { memo, useMemo, useState } from 'react'
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
import { STANDARDIZED_MUSCLES, exerciseMatchesMuscle } from '../lib/muscleTaxonomy'
import { cn } from '../lib/cn'
import type { Exercise, ExerciseDifficulty } from '../types'

// ─── constants ────────────────────────────────────────────────────────────────

const QUICK_CATEGORIES = [
  { id: 'all', label: 'All Exercises' },
  { id: 'gym', label: 'Gym Exercises' },
  { id: 'bodyweight', label: 'Bodyweight' },
  { id: 'calisthenics', label: 'Calisthenics' },
  { id: 'mobility', label: 'Mobility' },
  { id: 'cardio', label: 'Conditioning' },
]

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
  const [quickCategory, setQuickCategory] = useState('all')
  const [selectedMuscleId, setSelectedMuscleId] = useState<string | null>(null)
  const [muscleFilterMode, setMuscleFilterMode] = useState<'primary' | 'involves'>('primary')
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

        // Quick Category Filter
        if (quickCategory === 'gym') {
          const eq = e.equipment.toLowerCase()
          if (eq.includes('bodyweight') && !eq.includes('barbell') && !eq.includes('dumbbell') && !eq.includes('cable') && !eq.includes('machine')) {
            return false
          }
        } else if (quickCategory === 'bodyweight') {
          if (!e.usesBodyweight && !e.equipment.toLowerCase().includes('bodyweight')) return false
        } else if (quickCategory === 'calisthenics') {
          const isCalisthenic =
            e.usesBodyweight ||
            ['Bodyweight', 'Pull-up bar', 'Parallel bars', 'Gymnastic rings'].includes(e.equipment)
          if (!isCalisthenic) return false
        } else if (quickCategory === 'mobility') {
          if (e.category !== 'mobility') return false
        } else if (quickCategory === 'cardio') {
          if (e.category !== 'cardio') return false
        }

        // Standardized Muscle Filtering (Primary vs Involves)
        if (selectedMuscleId && selectedMuscleId !== 'all') {
          if (!exerciseMatchesMuscle(e, selectedMuscleId, muscleFilterMode)) return false
        }

        // Category, Equipment, Difficulty, Exercise Class
        if (equipment !== 'all' && e.equipment !== equipment) return false
        if (category !== 'all' && e.category !== category) return false
        if (difficulty !== 'all' && e.difficulty !== difficulty) return false
        if (exerciseType !== 'all' && e.exerciseClass !== exerciseType) return false

        // Search text matching
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
  }, [
    allExercises,
    query,
    quickCategory,
    selectedMuscleId,
    muscleFilterMode,
    equipment,
    category,
    difficulty,
    exerciseType,
    favoritesOnly,
  ])

  const hasActiveFilters =
    selectedMuscleId !== null ||
    quickCategory !== 'all' ||
    equipment !== 'all' ||
    category !== 'all' ||
    difficulty !== 'all' ||
    exerciseType !== 'all' ||
    favoritesOnly

  const clearFilters = () => {
    setSelectedMuscleId(null)
    setQuickCategory('all')
    setMuscleFilterMode('primary')
    setEquipment('all')
    setCategory('all')
    setDifficulty('all')
    setExerciseType('all')
    setFavoritesOnly(false)
  }

  // Find label of active muscle filter
  const activeMuscleLabel = useMemo(() => {
    if (!selectedMuscleId) return null
    return STANDARDIZED_MUSCLES.find((m) => m.id === selectedMuscleId)?.name || selectedMuscleId
  }, [selectedMuscleId])

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

      {/* Quick Category Pills */}
      <div className="mb-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {QUICK_CATEGORIES.map((qc) => (
          <button
            key={qc.id}
            type="button"
            onClick={() => setQuickCategory(qc.id)}
            className={cn(
              'shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-colors',
              quickCategory === qc.id
                ? 'bg-accent text-slate-950 shadow-sm'
                : 'bg-surface2 text-muted hover:text-ink'
            )}
          >
            {qc.label}
          </button>
        ))}
      </div>

      {/* Search bar & Filter toggles */}
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
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {/* Standardized Muscle Group dropdown */}
              <Select
                value={selectedMuscleId || 'all'}
                onChange={(e) => setSelectedMuscleId(e.target.value === 'all' ? null : e.target.value)}
                aria-label="Filter by muscle group"
              >
                <option value="all">All Muscles</option>
                {STANDARDIZED_MUSCLES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.taxonomicGroup})
                  </option>
                ))}
              </Select>

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

              <Select value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} aria-label="Filter by type">
                {EXERCISE_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </Select>
            </div>

            {/* Muscle Mode selector when muscle is selected */}
            {selectedMuscleId && (
              <div className="flex items-center gap-2 pt-1 border-t border-line text-xs">
                <span className="font-semibold text-muted">Muscle filter mode:</span>
                <div className="flex rounded-lg border border-line bg-surface2 p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setMuscleFilterMode('primary')}
                    className={cn(
                      'px-2.5 py-1 rounded-md transition-colors',
                      muscleFilterMode === 'primary' ? 'bg-accent text-slate-950 shadow-sm' : 'text-muted hover:text-ink'
                    )}
                  >
                    Primary Target
                  </button>
                  <button
                    type="button"
                    onClick={() => setMuscleFilterMode('involves')}
                    className={cn(
                      'px-2.5 py-1 rounded-md transition-colors',
                      muscleFilterMode === 'involves' ? 'bg-accent text-slate-950 shadow-sm' : 'text-muted hover:text-ink'
                    )}
                  >
                    Involves Muscle (Primary + Secondary)
                  </button>
                </div>
              </div>
            )}

            {hasActiveFilters && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-muted">
                  Filtered by:{' '}
                  {activeMuscleLabel ? (
                    <strong className="text-ink">
                      {activeMuscleLabel} ({muscleFilterMode === 'primary' ? 'Primary' : 'Involves'})
                    </strong>
                  ) : null}
                  {category !== 'all' ? ` · Category: ${category}` : ''}
                  {equipment !== 'all' ? ` · Equip: ${equipment}` : ''}
                </span>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-faint hover:text-ink">
                  <X size={14} /> Clear all filters
                </Button>
              </div>
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
            Interactive Muscle Anatomy Map
            {activeMuscleLabel && (
              <Badge tone="accent" className="ml-1">
                {activeMuscleLabel} ({muscleFilterMode})
              </Badge>
            )}
          </span>
          {showMuscleMap ? <ChevronUp size={16} className="text-faint" /> : <ChevronDown size={16} className="text-faint" />}
        </button>

        {showMuscleMap && (
          <div className="rounded-2xl border border-line bg-surface p-3">
            <MuscleMap
              selectedMuscle={activeMuscleLabel}
              onSelectMuscle={(m) => {
                if (!m) {
                  setSelectedMuscleId(null)
                  return
                }
                const found = STANDARDIZED_MUSCLES.find(
                  (sm) => sm.name.toLowerCase() === m.toLowerCase() || sm.dbAliases.some((a) => a.toLowerCase() === m.toLowerCase())
                )
                setSelectedMuscleId(found ? found.id : null)
              }}
              exerciseCounts={exerciseCounts}
              muscleFilterMode={muscleFilterMode}
              onToggleFilterMode={(mode) => setMuscleFilterMode(mode)}
            />
            {selectedMuscleId && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs text-muted">
                  Filtering by <strong className="text-ink">{activeMuscleLabel}</strong> ({muscleFilterMode}) —{' '}
                  {filtered.length} exercises
                </p>
                <Button variant="ghost" size="sm" onClick={() => setSelectedMuscleId(null)} className="text-xs text-faint">
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
            description="Try adjusting your filters or search keywords."
            action={
              <Button variant="secondary" onClick={clearFilters}>
                <X size={16} /> Reset filters
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

const ExerciseCard = memo(function ExerciseCard({
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
          className="shrink-0 overflow-hidden rounded-xl border border-line bg-surface2 hover:opacity-90 transition-opacity"
          aria-label={`View ${exercise.name} details`}
        >
          <ExerciseImage exercise={exercise} kind="thumbnail" compact className="h-16 w-16" />
        </Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-1">
            <Link
              to={`/exercises/${exercise.id}`}
              className="text-sm font-bold text-ink hover:text-accent transition-colors truncate block"
            >
              {exercise.name}
            </Link>
            <button
              type="button"
              aria-label={exercise.favorite ? `Unfavorite ${exercise.name}` : `Favorite ${exercise.name}`}
              onClick={() => onToggleFavorite(exercise.id)}
              className="shrink-0 text-faint hover:text-accent transition-colors"
            >
              <Star
                size={16}
                className={cn(exercise.favorite && 'fill-accent text-accent')}
              />
            </button>
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <span className="font-semibold text-ink">{exercise.primaryMuscle}</span>
            <span>·</span>
            <span>{exercise.equipment}</span>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <Badge tone="neutral" className="text-[10px]">
              {exercise.category}
            </Badge>
            {exercise.difficulty && (
              <span className={cn('text-[10px] font-bold capitalize', DIFFICULTY_COLORS[exercise.difficulty])}>
                {exercise.difficulty}
              </span>
            )}
            {hasBundledAnimation(exercise) && (
              <Badge tone="accent" className="text-[10px]">
                Demo
              </Badge>
            )}
            {exercise.isCustom && <Badge tone="info" className="text-[10px]">custom</Badge>}
          </div>
        </div>
      </div>
    </div>
  )
})

