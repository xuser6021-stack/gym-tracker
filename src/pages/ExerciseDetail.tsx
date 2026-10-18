import { useMemo, useRef, useState, type ChangeEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Dumbbell, Play, Plus, Star, Trash } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Card, CardHeader } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'
import { PageHeader } from '../components/ui/PageHeader'
import { Stat } from '../components/ui/Stat'
import { TrendChart } from '../components/charts/Charts'
import { ExerciseImage } from '../components/exercise/ExerciseImage'
import { ExerciseDemoDialog } from '../components/exercise/ExerciseDemoDialog'
import { getExerciseGuide } from '../data/exerciseGuides'
import { validateImageFile } from '../storage/repositories/assetRepository'
import { completedWorkingSets, exerciseHistory, fromStoredWeight, fromStoredWeightDisplay } from '../lib/progression'
import { getRecord } from '../lib/records'
import { convertWeightValue } from '../lib/display'
import { formatDate, formatDayShort, formatWeightKg } from '../lib/format'
import { cn } from '../lib/cn'

export function ExerciseDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, exercisesById, toggleFavorite, deleteExercise, activeSession, addSet, setExerciseImage, removeExerciseImage } =
    useApp()
  const navigate = useNavigate()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [imageError, setImageError] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const exercise = id ? exercisesById.get(id) : undefined
  const unit = data.settings.units.weight

  const history = useMemo(
    () => (exercise ? exerciseHistory(data.sessions, exercise.id, exercise) : []),
    [data.sessions, exercise],
  )

  const chartData = useMemo(() => {
    return [...history]
      .reverse()
      .filter((h) => h.topWeightKg > 0)
      .map((h) => ({
        date: formatDayShort(h.date),
        weight: convertWeightValue(h.topWeightKg, unit),
        e1rm: h.e1rm !== null ? convertWeightValue(h.e1rm, unit) : null,
      }))
  }, [history, unit])

  if (!exercise) {
    return (
      <EmptyState
        title="Exercise not found"
        description="It may have been deleted from your library."
        action={
          <Link to="/exercises" className="text-sm font-semibold text-accent">
            Back to exercises
          </Link>
        }
      />
    )
  }

  const maxWeight = getRecord(data.personalRecords, exercise.id, 'maxWeight')
  const bestE1rm = getRecord(data.personalRecords, exercise.id, 'e1rm')
  const maxReps = getRecord(data.personalRecords, exercise.id, 'maxReps')
  const guide = getExerciseGuide(exercise)

  const onPickImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    const result = validateImageFile(file)
    if (!result.ok) {
      setImageError(result.error)
      return
    }
    setImageError(null)
    const stored = await setExerciseImage(exercise.id, file)
    if (!stored.ok) setImageError(stored.error ?? 'Could not save the image.')
  }

  const handleAddToWorkout = () => {
    if (!activeSession) return
    const latest = history.find((h) => completedWorkingSets(h.sets).some((s) => s.weightKg !== null))
    const working = latest ? completedWorkingSets(latest.sets).filter((s) => s.weightKg !== null) : []
    const topStored = working.length ? Math.max(...working.map((s) => s.weightKg as number)) : null
    // Pass the value "as entered" (dumbbell-pair doubled) so the store's
    // normalization stores it back as per-implement kg for every exercise type.
    const suggested = topStored === null ? null : fromStoredWeight(topStored, exercise, data.settings)
    const perSide = exercise.unilateral
    for (let i = 0; i < 3; i++) {
      addSet(activeSession.id, {
        exerciseId: exercise.id,
        type: 'working',
        weightKg: suggested,
        reps: null,
        completed: false,
        rir: null,
        note: '',
        perSide,
      })
    }
  }

  return (
    <div>
      <Link
        to="/exercises"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink"
      >
        <ArrowLeft size={16} /> Exercises
      </Link>

      <PageHeader
        title={exercise.name}
        subtitle={
          <span className="flex flex-wrap items-center gap-1.5">
            <Badge tone={exercise.exerciseClass === 'compound' ? 'accent' : 'neutral'}>
              {exercise.exerciseClass}
            </Badge>
            <Badge tone="neutral">{exercise.category}</Badge>
            {exercise.isCustom ? <Badge tone="info">custom</Badge> : null}
          </span>
        }
        action={
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              aria-label={exercise.favorite ? 'Remove from favorites' : 'Add to favorites'}
              className={cn(exercise.favorite && 'text-accent')}
              onClick={() => toggleFavorite(exercise.id)}
            >
              <Star size={18} fill={exercise.favorite ? 'currentColor' : 'none'} />
            </Button>
            {exercise.isCustom ? (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Delete exercise"
                className="text-danger hover:bg-dangersoft"
                onClick={() => setConfirmDelete(true)}
              >
                <Trash size={18} />
              </Button>
            ) : null}
          </div>
        }
      />

      {activeSession ? (
        <Button variant="secondary" className="mb-4 w-full" onClick={handleAddToWorkout}>
          <Plus size={16} /> Add 3 sets to current workout
        </Button>
      ) : null}

      <Card className="mb-4">
        <div className="flex gap-3">
          <ExerciseImage exercise={exercise} kind="thumbnail" className="h-28 w-28 shrink-0 rounded-xl" eager />
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Muscles worked</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge tone="accent">{exercise.primaryMuscle}</Badge>
              {exercise.secondaryMuscles.map((muscle) => (
                <Badge key={muscle} tone="neutral">
                  {muscle}
                </Badge>
              ))}
            </div>
            <Button variant="secondary" className="mt-3 self-start" onClick={() => setDemoOpen(true)}>
              <Play size={16} /> View technique &amp; demo
            </Button>
            {exercise.isCustom ? (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
                  className="sr-only"
                  aria-label="Upload exercise photo"
                  onChange={onPickImage}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => imageInputRef.current?.click()}
                >
                  {exercise.mediaAssetId ? 'Change photo' : 'Add photo'}
                </Button>
                {exercise.mediaAssetId ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExerciseImage(exercise.id)}
                  >
                    Remove photo
                  </Button>
                ) : null}
              </div>
            ) : null}
            {imageError ? <p className="mt-1 text-xs text-danger">{imageError}</p> : null}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat
          label="Best weight"
          value={maxWeight ? formatWeightKg(maxWeight.weightKg, unit) : '—'}
          sub={maxWeight ? `${maxWeight.reps} reps` : 'No data yet'}
        />
        <Stat
          label="Est. 1RM"
          value={bestE1rm ? formatWeightKg(bestE1rm.value, unit) : '—'}
          sub="Epley estimate"
          tone="accent"
        />
        <Stat label="Best reps" value={maxReps ? `${maxReps.value}` : '—'} sub={maxReps ? 'in one set' : 'No data yet'} />
        <Stat label="Sessions" value={history.length} sub="logged" icon={<Dumbbell size={16} />} />
      </div>

      <Card className="mt-4">
        <CardHeader title="Strength trend" subtitle="Top set weight and estimated 1RM per session" />
        {chartData.length >= 2 ? (
          <TrendChart
            data={chartData}
            xKey="date"
            unit={unit}
            valueFormatter={(v) => `${Number(v.toFixed(1))} ${unit}`}
            series={[
              { key: 'weight', label: 'Top set', color: 'var(--app-accent)' },
              { key: 'e1rm', label: 'Est. 1RM', color: 'var(--app-faint)' },
            ]}
          />
        ) : (
          <p className="text-sm text-muted">
            Log this exercise at least twice to see a trend line here.
          </p>
        )}
      </Card>

      <Card className="mt-4">
        <CardHeader
          title="Muscles involved & anatomy"
          subtitle={`Primary: ${exercise.primaryMuscle}${exercise.secondaryMuscles.length ? ` · Secondary: ${exercise.secondaryMuscles.join(', ')}` : ''}`}
        />
        <div className="overflow-hidden rounded-xl border border-line bg-surface2">
          <ExerciseImage
            exercise={exercise}
            kind="anatomy"
            className="aspect-video w-full object-contain"
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
            <span>Primary: <strong className="text-ink">{exercise.primaryMuscle}</strong></span>
          </div>
          {exercise.secondaryMuscles.length ? (
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-3 w-3 rounded-full bg-accent/40" aria-hidden="true" />
              <span>Secondary: <strong className="text-ink">{exercise.secondaryMuscles.join(', ')}</strong></span>
            </div>
          ) : null}
        </div>
      </Card>

      <Card className="mt-4">
        <CardHeader title="Details" />
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ['Primary muscle', exercise.primaryMuscle],
            ['Equipment', exercise.equipment],
            ['Rep range', exercise.repRange],
            ['Secondary muscles', exercise.secondaryMuscles.join(', ') || '—'],
            ['Bodyweight', exercise.usesBodyweight ? 'Yes' : 'No'],
            ['Per side', exercise.unilateral ? 'Yes' : 'No'],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</dt>
              <dd className="mt-0.5 text-sm text-ink">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Starting position</p>
            <p className="mt-1 text-sm text-muted">{guide.starting}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">How to perform</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-muted">
              {guide.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          {exercise.mistakes ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Common mistakes</p>
              <p className="mt-1 text-sm text-muted">{exercise.mistakes}</p>
            </div>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Breathing</p>
              <p className="mt-1 text-sm text-muted">{guide.breathing}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Safety</p>
              <p className="mt-1 text-sm text-muted">{guide.safety}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-4">
        <CardHeader title="History" subtitle={`${history.length} session${history.length === 1 ? '' : 's'}`} />
        {history.length === 0 ? (
          <p className="text-sm text-muted">No completed sets for this exercise yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((entry) => (
              <li key={entry.sessionId} className="rounded-xl border border-line bg-surface2 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-ink">{formatDate(entry.date)}</span>
                  <Link to={`/workouts/${entry.sessionId}`} className="text-xs font-semibold text-accent">
                    View workout
                  </Link>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {entry.sets
                    .filter((s) => s.completed)
                    .map((s) => {
                      const w = fromStoredWeightDisplay(s.weightKg, unit, exercise, data.settings)
                      return (
                        <span
                          key={s.id}
                          className="rounded-md bg-surface3 px-2 py-0.5 text-xs tabular-nums text-muted"
                        >
                          {w === null ? 'BW' : `${Number(w.toFixed(1))} ${unit}`} × {s.reps ?? '—'}
                          {s.type === 'warmup' ? ' (w/u)' : ''}
                        </span>
                      )
                    })}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <ExerciseDemoDialog exercise={exercise} open={demoOpen} onClose={() => setDemoOpen(false)} />

      <ConfirmDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          deleteExercise(exercise.id)
          navigate('/exercises')
        }}
        title={`Delete "${exercise.name}"?`}
        description="The exercise is removed from your library and templates. Past workout history keeps its records."
        confirmLabel="Delete exercise"
        destructive
      />
    </div>
  )
}
