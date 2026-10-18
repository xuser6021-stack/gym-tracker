import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, SkipForward, X } from 'lucide-react'
import { formatClock } from '../../lib/format'
import { useNow } from '../../lib/useNow'
import { cn } from '../../lib/cn'

function beep() {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 880
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5)
    osc.start()
    osc.stop(ctx.currentTime + 0.55)
    setTimeout(() => ctx.close(), 700)
  } catch {
    /* audio is optional */
  }
}

function vibrate() {
  try {
    navigator.vibrate?.([200, 100, 200])
  } catch {
    /* vibration is optional */
  }
}

/**
 * Rest timer backed by an absolute deadline rather than a per-second counter, so it
 * stays accurate when the tab is throttled or backgrounded. `useNow` only drives the
 * re-render; the remaining time is always recomputed from `Date.now()`.
 */
export function RestTimer({
  runId,
  durationSeconds,
  onClose,
  onComplete,
  soundEnabled,
}: {
  runId: number
  durationSeconds: number
  onClose: () => void
  onComplete?: () => void
  soundEnabled: boolean
}) {
  const now = useNow(250)
  const [deadline, setDeadline] = useState<number | null>(null)
  const [remainingMs, setRemainingMs] = useState(() => durationSeconds * 1000)
  const [totalMs, setTotalMs] = useState(() => durationSeconds * 1000)
  const [running, setRunning] = useState(true)
  const firedRef = useRef(false)

  useEffect(() => {
    if (runId === 0) return
    const ms = Math.max(0, durationSeconds * 1000)
    setTotalMs(ms)
    setRemainingMs(ms)
    setDeadline(Date.now() + ms)
    setRunning(true)
    firedRef.current = false
  }, [runId, durationSeconds])

  useEffect(() => {
    if (!running || deadline === null) return
    setRemainingMs(Math.max(0, deadline - now))
  }, [now, deadline, running])

  const done = remainingMs <= 0

  useEffect(() => {
    if (!done || firedRef.current) return
    firedRef.current = true
    setRunning(false)
    setDeadline(null)
    if (soundEnabled) beep()
    vibrate()
    onComplete?.()
  }, [done, soundEnabled, onComplete])

  const toggleRunning = useCallback(() => {
    if (running) {
      setRemainingMs((r) => (deadline !== null ? Math.max(0, deadline - Date.now()) : r))
      setDeadline(null)
      setRunning(false)
    } else {
      setDeadline(Date.now() + Math.max(0, remainingMs))
      setRunning(true)
    }
  }, [running, deadline, remainingMs])

  const addTime = useCallback(
    (seconds: number) => {
      const delta = seconds * 1000
      setTotalMs((t) => t + delta)
      firedRef.current = false
      if (running && deadline !== null) {
        setDeadline((d) => (d ?? Date.now()) + delta)
      } else {
        const next = remainingMs + delta
        setRemainingMs(next)
        setDeadline(Date.now() + next)
        setRunning(true)
      }
    },
    [running, deadline, remainingMs],
  )

  const reset = useCallback(() => {
    const ms = Math.max(0, durationSeconds * 1000)
    setTotalMs(ms)
    setRemainingMs(ms)
    setDeadline(Date.now() + ms)
    setRunning(true)
    firedRef.current = false
  }, [durationSeconds])

  const progress = totalMs > 0 ? Math.min(1, Math.max(0, (totalMs - remainingMs) / totalMs)) : 1
  const secondsLeft = Math.ceil(remainingMs / 1000)
  const circumference = 2 * Math.PI * 16

  return (
    <div
      className="fixed inset-x-0 z-40 px-3 lg:pl-72 lg:pr-6"
      style={{ bottom: 'calc(4.25rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div
        role="timer"
        aria-live="polite"
        aria-label={`Rest timer, ${formatClock(secondsLeft)} remaining`}
        className={cn(
          'mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border bg-surface p-2.5 shadow-2xl',
          done ? 'border-success/50' : 'border-accent/40',
        )}
      >
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="18" cy="18" r="16" fill="none" stroke="var(--app-surface-3)" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={done ? 'var(--app-success)' : 'var(--app-accent)'}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
            />
          </svg>
          <span className="text-xs font-extrabold tabular-nums text-ink">{formatClock(secondsLeft)}</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-ink">{done ? 'Rest complete' : 'Rest timer'}</p>
          <p className="text-xs text-muted">
            {done ? 'Time for your next set' : 'Recover, then log your next set'}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {!done ? (
            <button
              type="button"
              aria-label={running ? 'Pause rest timer' : 'Resume rest timer'}
              aria-pressed={!running}
              onClick={toggleRunning}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted hover:bg-surface2 hover:text-ink"
            >
              {running ? <Pause size={18} /> : <Play size={18} />}
            </button>
          ) : null}
          <button
            type="button"
            aria-label="Add 15 seconds of rest"
            onClick={() => addTime(15)}
            className="flex h-10 items-center justify-center rounded-xl px-2.5 text-xs font-bold text-accent hover:bg-surface2"
          >
            +15s
          </button>
          <button
            type="button"
            aria-label="Restart rest timer"
            onClick={reset}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted hover:bg-surface2 hover:text-ink"
          >
            <RotateCcw size={17} />
          </button>
          <button
            type="button"
            aria-label="Skip rest"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted hover:bg-surface2 hover:text-ink"
          >
            <SkipForward size={18} />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-1 max-w-3xl">
        <button
          type="button"
          onClick={onClose}
          className="mx-auto flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] text-faint hover:text-ink"
        >
          <X size={12} /> Hide timer
        </button>
      </div>
    </div>
  )
}

export function RestTimerMiniIndicator({ seconds, onClick }: { seconds: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show rest timer, ${formatClock(seconds)} remaining`}
      className="fixed bottom-24 right-4 z-30 flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-3 py-2 text-xs font-bold text-accent shadow-xl"
    >
      <RotateCcw size={14} /> {formatClock(seconds)}
    </button>
  )
}
