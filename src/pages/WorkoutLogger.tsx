import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, Plus, Trash, Trophy } from 'lucide-react'
import type { SetRecord, TemplateExercise, WorkoutSummary } from '../types'
import { useApp } from '../store/AppStore'
import { Card, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Textarea } from '../components/ui/Input'
import { Dialog } from '../components/ui/Dialog'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'
import { ExercisePickerDialog } from '../components/ExercisePickerDialog'
import { ExerciseLogger } from '../components/workout/ExerciseLogger'
import { RestTimer } from '../components/workout/RestTimer'
import { useNow } from '../lib/useNow'
import { formatClock, formatDuration } from '../lib/format'
import { formatWeightValue, prKindLabel } from '../lib/display'
import { buildSuggestion, exerciseHistory } from '../lib/progression'

function parseRepRange(range: string): { min: number; max: number } {
  const match = range.match(/(\d+)\s*[–-]\s*(\d+)/)
  if (match) return { min: Number(match[1]), max: Number(match[2]) }
  const single = range.match(/(\d+)/)
  if (single) return { min: Number(single[1]), max: Number(single[1]) }
  return { min: 8, max: 12 }
}

export function WorkoutLogger() {
  const {
    data,
    exercisesById,
    activeSession: session,
    updateSet,
    deleteSet,
    addSet,
    updateSession,
    setExerciseSuperset,
    finishWorkout,
    discardWorkout,
    startWorkout,
  } = useApp()
  const navigate = useNavigate()
  const now = useNow(1000)

  const [rest, setRest] = useState<{ runId: number; seconds: number } | null>(null)
  const [showRest, setShowRest] = useState(true)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [discardOpen, setDiscardOpen] = useState(false)
  const [removeTarget, setRemoveTarget] = useState<string | null>(null)
  const [summary, setSummary] = useState<{ summary: WorkoutSummary; id: string } | null>(null)

  const elapsedSeconds = session
    ? Math.max(0, Math.floor((now - new Date(session.startedAt).getTime()) / 1000))
    : 0

  const groups = useMemo(() => {
    if (!session)
      return [] as { exerciseId: string; prescribed: TemplateExercise | null; supersetGroup?: string }[]
    const map = new Map<
      string,
      { exerciseId: string; prescribed: TemplateExercise | null; supersetGroup?: string }
    >()
    for (const te of session.prescribed ?? []) {
      if (!map.has(te.exerciseId))
        map.set(te.exerciseId, { exerciseId: te.exerciseId, prescribed: te, supersetGroup: te.supersetGroup })
    }
    for (const s of session.sets) {
      const existing = map.get(s.exerciseId)
      if (!existing) {
        map.set(s.exerciseId, { exerciseId: s.exerciseId, prescribed: null, supersetGroup: s.supersetGroup })
      } else if (s.supersetGroup) {
        existing.supersetGroup = s.supersetGroup
      }
    }
    const values = [...map.values()]
    return values
      .map((group, index) => ({ group, index }))
      .sort((a, b) => {
        const ka = a.group.supersetGroup ?? `~${a.index}`
        const kb = b.group.supersetGroup ?? `~${b.index}`
        return ka < kb ? -1 : ka > kb ? 1 : 0
      })
      .map((entry) => entry.group)
  }, [session])

  const handleToggle = (set: SetRecord, next: boolean, restSeconds?: number) => {
    if (!session) return
    updateSet(session.id, set.id, { completed: next })
    if (next) {
      const seconds = restSeconds ?? data.settings.defaultRestSeconds
      setRest((prev) => ({ runId: (prev?.runId ?? 0) + 1, seconds }))
      setShowRest(true)
    }
  }

  const handleAddExercise = (exerciseId: string) => {
    if (!session) return
    const exercise = exercisesById.get(exerciseId)
    for (let i = 0; i < 3; i++) {
      addSet(session.id, {
        exerciseId,
        type: 'working',
        weightKg: null,
        reps: null,
        completed: false,
        rir: null,
        note: '',
        perSide: exercise?.unilateral ?? false,
      })
    }
    setPickerOpen(false)
  }

  const handleFinish = () => {
    if (!session) return
    const result = finishWorkout(session.id, elapsedSeconds)
    if (result) setSummary({ summary: result, id: session.id })
  }

  const removeExercise = (exerciseId: string) => {
    if (!session) return
    for (const s of session.sets.filter((x) => x.exerciseId === exerciseId)) {
      deleteSet(session.id, s.id)
    }
    setRemoveTarget(null)
  }

  const chooser = (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Start a workout</h1>
        <p className="mt-1 text-sm text-muted">
          No session in progress. Pick a template or start an empty workout.
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {data.templates
          .filter((t) => !t.isRestDay)
          .map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => startWorkout(t.id, t.name, t.day)}
              className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 text-left transition-colors hover:border-accent"
            >
              <span className="min-w-0">
                <span className="block text-sm font-bold text-ink">{t.name}</span>
                <span className="block text-xs text-muted">
                  {t.day} · {t.exercises.length} exercises
                </span>
              </span>
              <span className="text-accent">→</span>
            </button>
          ))}
      </div>
      <Button
        variant="secondary"
        className="mt-3"
        onClick={() =>
          startWorkout(null, 'Custom workout', new Date().toLocaleDateString('en-US', { weekday: 'long' }))
        }
      >
        <Plus size={18} /> Start empty workout
      </Button>
    </div>
  )

  const logger = session ? (
    <div className="pb-2">
      <div className="sticky top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-20 -mx-4 mb-3 border-b border-line bg-app/90 px-4 py-3 backdrop-blur lg:static lg:mx-0 lg:mb-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-accent">In progress</p>
            <h1 className="truncate text-lg font-extrabold tracking-tight text-ink">
              {session.templateName}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-2.5 py-1.5 text-sm font-bold tabular-nums text-ink">
              <Clock size={15} /> {formatClock(elapsedSeconds)}
            </span>
            <Button size="sm" onClick={handleFinish}>
              Finish
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={() => setPickerOpen(true)}>
          <Plus size={16} /> Add exercise
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setDiscardOpen(true)}
          className="text-danger hover:bg-dangersoft"
        >
          <Trash size={15} /> Discard
        </Button>
      </div>

      <div className="grid gap-3">
        {groups.map((group) => {
          const exercise = exercisesById.get(group.exerciseId)
          if (!exercise) return null
          const sets = session.sets.filter((s) => s.exerciseId === group.exerciseId)
          const entries = exerciseHistory(data.sessions, group.exerciseId, exercise)
          const range = group.prescribed
            ? { min: group.prescribed.repsMin, max: group.prescribed.repsMax }
            : parseRepRange(exercise.repRange)
          const suggestion = buildSuggestion(exercise, entries, range.min, range.max)
          return (
            <div key={group.exerciseId} className="space-y-1">
              {group.supersetGroup ? (
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-accent">
                  <span className="flex h-4 min-w-4 items-center justify-center rounded bg-accentsoft px-1">
                    {group.supersetGroup}
                  </span>
                  Superset {group.supersetGroup}
                </p>
              ) : null}
              <ExerciseLogger
                sessionId={session.id}
                exercise={exercise}
                prescribed={
                  group.prescribed
                    ? {
                        sets: group.prescribed.sets,
                        repsMin: group.prescribed.repsMin,
                        repsMax: group.prescribed.repsMax,
                      }
                    : null
                }
                sets={sets}
                history={entries[0] ?? null}
                suggestion={suggestion}
                supersetGroup={group.supersetGroup}
                onSupersetChange={(value) => setExerciseSuperset(session.id, group.exerciseId, value)}
                onToggleComplete={(set, next) => handleToggle(set, next, group.prescribed?.restSeconds)}
                onRemove={() => setRemoveTarget(group.exerciseId)}
              />
            </div>
          )
        })}
      </div>

      <Card className="mt-3">
        <CardHeader title="Session notes" />
        <Textarea
          value={session.notes}
          onChange={(e) => updateSession(session.id, { notes: e.target.value })}
          placeholder="Energy, technique cues, anything noteworthy…"
        />
      </Card>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Sets completed</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-ink">
            {session.sets.filter((s) => s.completed).length}
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Working sets</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-ink">
            {session.sets.filter((s) => s.completed && s.type === 'working').length}
          </p>
        </div>
      </div>

      <Button size="lg" className="mt-3 w-full" onClick={handleFinish}>
        <Trophy size={18} /> Finish workout
      </Button>
    </div>
  ) : null

  return (
    <>
      {session ? logger : chooser}

      {session && rest && showRest ? (
        <RestTimer
          runId={rest.runId}
          durationSeconds={rest.seconds}
          soundEnabled={data.settings.notifyRestTimer}
          onClose={() => setShowRest(false)}
        />
      ) : null}

      <ExercisePickerDialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onPick={handleAddExercise}
        excludeIds={session ? session.sets.map((s) => s.exerciseId) : []}
      />

      <ConfirmDialog
        open={discardOpen}
        onClose={() => setDiscardOpen(false)}
        onConfirm={() => {
          if (!session) return
          discardWorkout(session.id)
          navigate('/workouts')
        }}
        title="Discard this workout?"
        description="The session will be kept under Settings → Recoverable workouts, where you can restore it or delete it for good."
        confirmLabel="Discard workout"
        destructive
      />

      <ConfirmDialog
        open={removeTarget !== null}
        onClose={() => setRemoveTarget(null)}
        onConfirm={() => removeTarget && removeExercise(removeTarget)}
        title="Remove exercise?"
        description="All sets for this exercise will be removed from the current workout."
        confirmLabel="Remove"
        destructive
      />

      <Dialog
        open={summary !== null}
        onClose={() => summary && navigate(`/workouts/${summary.id}`)}
        title="Workout complete"
        description="Here is a summary of the session you just finished."
        footer={
          <Button onClick={() => summary && navigate(`/workouts/${summary.id}`)}>View workout</Button>
        }
      >
        {summary ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-xs uppercase text-muted">Duration</p>
                <p className="text-lg font-extrabold text-ink">{formatDuration(summary.summary.durationSeconds)}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-xs uppercase text-muted">Working sets</p>
                <p className="text-lg font-extrabold text-ink">{summary.summary.workingSets}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-xs uppercase text-muted">Exercises</p>
                <p className="text-lg font-extrabold text-ink">{summary.summary.exerciseCount}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-xs uppercase text-muted">Volume</p>
                <p className="text-lg font-extrabold text-ink">
                  {Math.round(summary.summary.volumeKg).toLocaleString()} kg
                </p>
              </div>
            </div>
            {data.settings.notifyPrs && summary.summary.prs.length ? (
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-sm font-bold text-accent">
                  <Trophy size={15} /> New personal records
                </p>
                <ul className="space-y-1.5">
                  {summary.summary.prs.map((pr) => (
                    <li
                      key={pr.id}
                      className="flex items-center justify-between gap-2 rounded-lg border border-line bg-surface2 px-3 py-2 text-sm"
                    >
                      <span className="min-w-0 truncate text-ink">{exercisesById.get(pr.exerciseId)?.name}</span>
                      <span className="shrink-0 text-xs font-semibold text-accent">
                        {prKindLabel(pr.kind)} · {formatWeightValue(pr.weightKg ?? pr.value, data.settings.units.weight)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-muted">
                No new personal records this session — consistency still builds progress.
              </p>
            )}
          </div>
        ) : null}
      </Dialog>
    </>
  )
}
