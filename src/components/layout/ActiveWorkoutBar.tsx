import { Link } from 'react-router-dom'
import { CirclePlay } from 'lucide-react'
import type { WorkoutSession } from '../../types'
import { useNow } from '../../lib/useNow'
import { formatClock } from '../../lib/format'

export function ActiveWorkoutBar({ session }: { session: WorkoutSession }) {
  const now = useNow(1000)
  const elapsed = Math.max(0, Math.floor((now - new Date(session.startedAt).getTime()) / 1000))
  const completed = session.sets.filter((s) => s.completed).length

  return (
    <div
      className="fixed inset-x-0 z-30 px-3 lg:pl-72 lg:pr-6"
      style={{ bottom: 'calc(4.25rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <Link
        to="/workout"
        className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-accent/40 bg-surface p-3 shadow-2xl transition-colors hover:border-accent"
      >
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accentsoft text-accent">
          <span className="absolute inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-accent" style={{ top: -2, right: -2 }} />
          <CirclePlay size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink">Resume workout · {session.templateName}</p>
          <p className="text-xs text-muted tabular-nums">
            {formatClock(elapsed)} elapsed · {completed} set{completed === 1 ? '' : 's'} logged
          </p>
        </div>
        <span className="shrink-0 rounded-lg bg-accent px-3 py-2 text-xs font-bold text-accentfg">Resume</span>
      </Link>
    </div>
  )
}
