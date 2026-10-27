import { useState } from 'react'
import { Check, Trash } from 'lucide-react'
import type { Exercise, SetRecord } from '../../types'
import { fromStoredWeightDisplay } from '../../lib/progression'
import { toKg, weightIncrementKg } from '../../lib/units'
import { useApp } from '../../store/AppStore'
import { Stepper } from '../ui/Stepper'
import { cn } from '../../lib/cn'

const RIR_OPTIONS = ['', '0', '1', '2', '3', '4', '5']

export function SetRow({
  sessionId,
  set,
  index,
  exercise,
  timeBased,
  previous,
  onToggleComplete,
}: {
  sessionId: string
  set: SetRecord
  index: number
  exercise: Exercise
  timeBased: boolean
  previous?: { weightKg: number | null; reps: number | null } | null
  onToggleComplete: (set: SetRecord, next: boolean) => void
}) {
  const { data, updateSet, deleteSet } = useApp()
  const unit = data.settings.units.weight
  const [expanded, setExpanded] = useState(false)
  const displayWeight = fromStoredWeightDisplay(set.weightKg, unit, exercise, data.settings)
  const isWarmup = set.type === 'warmup'
  const canComplete = set.reps !== null
  const previousLabel = previous
    ? `${previous.weightKg === null ? 'BW' : `${Number(fromStoredWeightDisplay(previous.weightKg, unit, exercise, data.settings)?.toFixed(1))}${unit}`}×${previous.reps ?? 0}`
    : null

  return (
    <div
      className={cn(
        'rounded-xl border p-2 transition-colors',
        isWarmup ? 'border-line bg-surface2/60' : 'border-line bg-surface2',
        set.completed && 'border-success/40 bg-success/5',
      )}
    >
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          aria-label="Toggle set options"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors',
            isWarmup ? 'bg-surface3 text-muted' : 'bg-surface3 text-ink',
            set.completed && 'bg-success/20 text-success',
          )}
        >
          {isWarmup ? 'W' : index + 1}
        </button>

        {previousLabel ? (
          <div
            title={`Previous performance: ${previousLabel}`}
            className="hidden shrink-0 rounded-lg bg-surface3 px-2 py-1 text-center sm:block"
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-faint">Prev</p>
            <p className="text-[11px] font-semibold tabular-nums text-muted">{previousLabel}</p>
          </div>
        ) : null}

        <Stepper
          className="min-w-0 flex-1"
          value={displayWeight}
          onChange={(v) => updateSet(sessionId, set.id, { weightKg: toKg(v, unit) })}
          step={weightIncrementKg(unit)}
          min={0}
          max={2000}
          decimals={1}
          ariaLabel="Weight"
          suffix={unit}
        />

        <Stepper
          className="min-w-0 flex-1"
          value={set.reps}
          onChange={(v) => updateSet(sessionId, set.id, { reps: v === null ? null : Math.round(v) })}
          step={1}
          min={0}
          max={999}
          decimals={0}
          ariaLabel={timeBased ? 'Seconds' : 'Reps'}
          suffix={timeBased ? 's' : undefined}
        />

        <button
          type="button"
          disabled={!canComplete}
          onClick={() => onToggleComplete(set, !set.completed)}
          aria-label={set.completed ? 'Mark set incomplete' : 'Mark set complete'}
          aria-pressed={set.completed}
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors disabled:opacity-40',
            set.completed
              ? 'border-transparent bg-success text-white'
              : 'border-linestrong text-muted hover:border-accent hover:text-accent',
          )}
        >
          <Check size={20} strokeWidth={3} />
        </button>
      </div>

      {expanded ? (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted">
            RIR
            <select
              value={set.rir === null ? '' : String(set.rir)}
              onChange={(e) =>
                updateSet(sessionId, set.id, { rir: e.target.value === '' ? null : Number(e.target.value) })
              }
              className="h-8 rounded-lg border border-line bg-surface3 px-1.5 text-xs font-bold text-ink"
            >
              {RIR_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o === '' ? '—' : o}
                </option>
              ))}
            </select>
          </label>

          {exercise.unilateral ? (
            <button
              type="button"
              onClick={() => updateSet(sessionId, set.id, { perSide: !set.perSide })}
              className={cn(
                'h-8 rounded-lg border px-2 text-xs font-semibold',
                set.perSide ? 'border-accent bg-accentsoft text-accent' : 'border-line text-muted',
              )}
            >
              Per side
            </button>
          ) : null}

          <input
            type="text"
            value={set.note}
            onChange={(e) => updateSet(sessionId, set.id, { note: e.target.value })}
            placeholder="Set note"
            className="h-8 min-w-0 flex-1 rounded-lg border border-line bg-surface3 px-2 text-xs text-ink placeholder:text-faint"
          />

          <button
            type="button"
            onClick={() => deleteSet(sessionId, set.id)}
            aria-label="Delete set"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
          >
            <Trash size={15} />
          </button>
        </div>
      ) : (set.rir !== null || set.note || previousLabel) ? (
        <div className="mt-1 flex items-center justify-between gap-2 pl-11 text-[11px] text-faint">
          <span className="min-w-0 truncate">
            {set.rir !== null ? `RIR ${set.rir}` : ''}
            {set.rir !== null && set.note ? ' · ' : ''}
            {set.note}
          </span>
          {previousLabel ? <span className="shrink-0 tabular-nums">Last {previousLabel}</span> : null}
        </div>
      ) : null}
    </div>
  )
}
