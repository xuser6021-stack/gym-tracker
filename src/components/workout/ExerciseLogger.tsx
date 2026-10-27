import { useState } from 'react'
import { Info, Play, Plus, Repeat, Trash, X } from 'lucide-react'
import type { Exercise, SetRecord } from '../../types'
import type { ExerciseHistoryEntry, ProgressionSuggestion } from '../../lib/progression'
import { fromStoredWeight, fromStoredWeightDisplay } from '../../lib/progression'
import { useApp } from '../../store/AppStore'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { SetRow } from './SetRow'
import { ExerciseImage } from '../exercise/ExerciseImage'
import { ExerciseDemoDialog } from '../exercise/ExerciseDemoDialog'

const SUPERSET_OPTIONS = ['', 'A', 'B', 'C', 'D']

function isTimeBased(exercise: Exercise | undefined): boolean {
  if (!exercise) return false
  return /\d\s*(s|sec)\b/i.test(exercise.repRange)
}

export function ExerciseLogger({
  sessionId,
  exercise,
  prescribed,
  sets,
  history,
  suggestion,
  supersetGroup,
  onSupersetChange,
  onToggleComplete,
  onRemove,
}: {
  sessionId: string
  exercise: Exercise
  prescribed: { sets: number; repsMin: number; repsMax: number } | null
  sets: SetRecord[]
  history: ExerciseHistoryEntry | null
  suggestion: ProgressionSuggestion
  supersetGroup?: string
  onSupersetChange?: (group: string | null) => void
  onToggleComplete: (set: SetRecord, next: boolean) => void
  onRemove?: () => void
}) {
  const { data, addSet, updateSet } = useApp()
  const unit = data.settings.units.weight
  const [dismissed, setDismissed] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  const timeBased = isTimeBased(exercise)

  const previousWorking = history ? history.sets.filter((s) => s.type === 'working' && s.completed) : []

  const lastSummary = previousWorking
    .map((s) => {
      const w = fromStoredWeightDisplay(s.weightKg, unit, exercise, data.settings)
      const weightLabel = w === null ? 'BW' : `${Number(w.toFixed(1))}${unit}`
      return `${weightLabel}×${s.reps ?? 0}`
    })
    .join('  ·  ')

  const showSuggestion = !dismissed && suggestion.kind !== 'baseline'

  const addSetFor = (type: 'working' | 'warmup') =>
    addSet(sessionId, {
      exerciseId: exercise.id,
      type,
      weightKg: null,
      reps: null,
      completed: false,
      rir: null,
      note: '',
      perSide: exercise.unilateral,
      supersetGroup,
    })

  /** Pre-fill any empty weight/reps from the same numbered set last session. */
  const repeatLast = () => {
    if (!previousWorking.length) return
    const ordered = [...sets].sort((a, b) => a.sortOrder - b.sortOrder)
    let workingIndex = 0
    for (const set of ordered) {
      if (set.type !== 'working') continue
      const previous = previousWorking[workingIndex]
      workingIndex += 1
      if (!previous) continue
      const patch: Partial<SetRecord> = {}
      if (set.reps === null && previous.reps !== null) patch.reps = previous.reps
      if (set.weightKg === null && previous.weightKg !== null) {
        patch.weightKg = fromStoredWeight(previous.weightKg, exercise, data.settings) ?? 0
      }
      if (Object.keys(patch).length) updateSet(sessionId, set.id, patch)
    }
  }

  let workingIndex = 0

  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            aria-label={`View ${exercise.name} technique and demo`}
            className="group relative shrink-0 overflow-hidden rounded-lg"
          >
            <ExerciseImage exercise={exercise} kind="thumbnail" compact className="h-11 w-11" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <Play size={14} className="text-white" fill="currentColor" aria-hidden="true" />
            </span>
          </button>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-ink">{exercise.name}</h3>
            {prescribed ? (
              <p className="mt-0.5 text-sm text-muted">
                Target {prescribed.sets} × {prescribed.repsMin}–{prescribed.repsMax}
                {timeBased ? 's' : ''}
              </p>
            ) : (
              <p className="mt-0.5 text-sm text-muted">Custom exercise</p>
            )}
          </div>
        </div>
        {lastSummary || onRemove || onSupersetChange ? (
          <div className="flex shrink-0 items-start gap-2">
            {lastSummary ? (
              <div className="max-w-[44%] text-right">
                <p className="text-[10px] font-bold uppercase tracking-wide text-faint">Last time</p>
                <p className="text-xs tabular-nums text-muted">{lastSummary}</p>
              </div>
            ) : null}
            {onRemove ? (
              <button
                type="button"
                onClick={onRemove}
                aria-label="Remove exercise from this workout"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
              >
                <Trash size={15} />
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      {showSuggestion ? (
        <div className="mt-3 flex items-start gap-2 rounded-xl border border-accent/40 bg-accentsoft px-3 py-2">
          <Info size={15} className="mt-0.5 shrink-0 text-accent" />
          <p className="min-w-0 flex-1 text-xs leading-relaxed text-accent">{suggestion.message}</p>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss suggestion"
            className="shrink-0 text-accent/70 hover:text-accent"
          >
            <X size={14} />
          </button>
        </div>
      ) : null}

      <div className="mt-3 space-y-1.5">
        {sets.length === 0 ? (
          <p className="rounded-xl border border-dashed border-line px-3 py-4 text-center text-sm text-muted">
            No sets yet — add your first set below.
          </p>
        ) : (
          [...sets]
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((set) => {
              let index = 0
              let previous: { weightKg: number | null; reps: number | null } | null = null
              if (set.type === 'working') {
                previous = previousWorking[workingIndex] ?? null
                index = workingIndex
                workingIndex += 1
              }
              return (
                <SetRow
                  key={set.id}
                  sessionId={sessionId}
                  set={set}
                  index={index}
                  exercise={exercise}
                  timeBased={timeBased}
                  previous={previous}
                  onToggleComplete={onToggleComplete}
                />
              )
            })
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button variant="secondary" size="sm" onClick={() => addSetFor('working')}>
          <Plus size={16} /> Add set
        </Button>
        <Button variant="ghost" size="sm" onClick={() => addSetFor('warmup')}>
          <Plus size={16} /> Warm-up
        </Button>
        {previousWorking.length ? (
          <Button
            variant="secondary"
            size="sm"
            onClick={repeatLast}
            className="border border-accent/40 bg-accentsoft text-accent hover:bg-accent hover:text-white"
          >
            <Repeat size={15} /> Use Last Workout
          </Button>
        ) : null}
        {onSupersetChange ? (
          <label className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-muted">
            Superset
            <select
              value={supersetGroup ?? ''}
              onChange={(e) => onSupersetChange(e.target.value || null)}
              aria-label="Superset group"
              className="h-8 rounded-lg border border-line bg-surface3 px-1.5 text-xs font-bold text-ink"
            >
              {SUPERSET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? 'None' : option}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>

      <ExerciseDemoDialog exercise={exercise} open={demoOpen} onClose={() => setDemoOpen(false)} />
    </Card>
  )
}
