import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Repeat, Trash } from 'lucide-react'
import type { SetRecord } from '../types'
import { useApp } from '../store/AppStore'
import { Card, CardHeader } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { fromStoredWeightDisplay, sessionVolumeKg } from '../lib/progression'
import { ExerciseImage } from '../components/exercise/ExerciseImage'
import { formatDate, formatDuration } from '../lib/format'
import { ExerciseDemoDialog } from '../components/exercise/ExerciseDemoDialog'
import type { Exercise } from '../types'

export function SessionDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, exercisesById, discardWorkout, repeatWorkout, activeSession } = useApp()
  const navigate = useNavigate()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [confirmRepeat, setConfirmRepeat] = useState(false)
  const [demoExercise, setDemoExercise] = useState<Exercise | null>(null)

  const session = data.sessions.find((s) => s.id === id)

  const grouped = useMemo(() => {
    if (!session) return [] as { exerciseId: string; sets: SetRecord[] }[]
    const order: string[] = []
    const map = new Map<string, SetRecord[]>()
    for (const set of [...session.sets].sort((a, b) => a.sortOrder - b.sortOrder)) {
      if (!map.has(set.exerciseId)) {
        map.set(set.exerciseId, [])
        order.push(set.exerciseId)
      }
      map.get(set.exerciseId)!.push(set)
    }
    return order.map((exerciseId) => ({ exerciseId, sets: map.get(exerciseId)! }))
  }, [session])

  if (!session || session.status !== 'completed') {
    return (
      <div>
        <EmptyState
          title="Workout not found"
          description="This session may have been deleted."
          action={
            <Link to="/workouts" className="text-sm font-semibold text-accent">
              Back to workouts
            </Link>
          }
        />
      </div>
    )
  }

  const volume = sessionVolumeKg(session, exercisesById)
  const workingSets = session.sets.filter((s) => s.completed && s.type === 'working').length
  const unit = data.settings.units.weight

  return (
    <div>
      <Link to="/workouts" className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
        <ArrowLeft size={16} /> Workouts
      </Link>

      <PageHeader
        title={session.templateName}
        subtitle={formatDate(session.date)}
        action={
          <div className="flex items-center gap-1">
            <Button variant="secondary" onClick={() => setConfirmRepeat(true)}>
              <Repeat size={16} /> Repeat
            </Button>
            <Button variant="ghost" onClick={() => setConfirmDelete(true)} className="text-danger hover:bg-dangersoft">
              <Trash size={16} /> Delete
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Duration', value: formatDuration(session.durationSeconds) },
          { label: 'Working sets', value: String(workingSets) },
          { label: 'Exercises', value: String(grouped.length) },
          { label: 'Volume', value: `${Math.round(volume).toLocaleString()} kg` },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{s.label}</p>
            <p className="mt-1 text-lg font-extrabold tabular-nums text-ink">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {grouped.map((group) => {
          const exercise = exercisesById.get(group.exerciseId)
          return (
            <Card key={group.exerciseId}>
              <CardHeader
                title={
                  <span className="flex items-center gap-2.5">
                    {exercise ? (
                      <button
                        type="button"
                        onClick={() => setDemoExercise(exercise)}
                        aria-label={`View ${exercise.name} technique and demo`}
                        className="group relative shrink-0 overflow-hidden rounded-lg transition-transform active:scale-95"
                      >
                        <ExerciseImage
                          exercise={exercise}
                          kind="thumbnail"
                          compact
                          className="h-8 w-8"
                        />
                      </button>
                    ) : null}
                    {exercise ? (
                      <button
                        type="button"
                        onClick={() => setDemoExercise(exercise)}
                        className="min-w-0 truncate text-left font-bold text-ink hover:text-accent"
                      >
                        {exercise.name}
                      </button>
                    ) : (
                      <span className="min-w-0 truncate">Unknown exercise</span>
                    )}
                  </span>
                }
                subtitle={exercise?.primaryMuscle}
                action={
                  <Badge tone="neutral">
                    {group.sets.filter((s) => s.completed).length}/{group.sets.length} sets
                  </Badge>
                }
              />
              <ul className="space-y-1.5">
                {group.sets.map((set, i) => {
                  const displayWeight = fromStoredWeightDisplay(set.weightKg, unit, exercise, data.settings)
                  return (
                    <li
                      key={set.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2 text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-surface3 text-xs font-bold text-muted">
                          {set.type === 'warmup' ? 'W' : i + 1}
                        </span>
                        <span className="text-ink">
                          {displayWeight === null ? 'Bodyweight' : `${Number(displayWeight.toFixed(1))} ${unit}`}
                          {' × '}
                          {set.reps ?? '—'}
                          {set.perSide ? ' per side' : ''}
                        </span>
                      </span>
                      <span className="flex items-center gap-2 text-xs text-muted">
                        {set.rir !== null ? <span>RIR {set.rir}</span> : null}
                        {set.completed ? <Badge tone="success">Done</Badge> : <Badge tone="neutral">Skipped</Badge>}
                      </span>
                    </li>
                  )
                })}
              </ul>
              {group.sets.some((s) => s.note) ? (
                <p className="mt-2 text-xs text-muted">
                  {group.sets
                    .filter((s) => s.note)
                    .map((s) => s.note)
                    .join(' · ')}
                </p>
              ) : null}
            </Card>
          )
        })}
      </div>

      {session.notes ? (
        <Card className="mt-3">
          <CardHeader title="Session notes" />
          <p className="whitespace-pre-wrap text-sm text-muted">{session.notes}</p>
        </Card>
      ) : null}

      <ConfirmDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          discardWorkout(session.id)
          navigate('/workouts')
        }}
        title="Delete this workout?"
        description="The session is removed from your history and analytics but kept under Settings → Recoverable workouts until you delete it for good."
        confirmLabel="Delete workout"
        destructive
      />

      <ConfirmDialog
        open={confirmRepeat}
        onClose={() => setConfirmRepeat(false)}
        onConfirm={() => {
          const started = repeatWorkout(session.id)
          if (started) navigate('/workout')
        }}
        title={activeSession ? 'Workout already in progress' : 'Repeat this workout?'}
        description={
          activeSession
            ? 'You already have a session in progress — finishing it comes first. Resume it to continue.'
            : 'A new workout is started with the same exercises and last-used weights. Your history is not changed.'
        }
        confirmLabel={activeSession ? 'Resume current workout' : 'Start workout'}
      />

      {demoExercise ? (
        <ExerciseDemoDialog
          exercise={demoExercise}
          open={Boolean(demoExercise)}
          onClose={() => setDemoExercise(null)}
        />
      ) : null}
    </div>
  )
}
