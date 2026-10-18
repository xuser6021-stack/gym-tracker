import { Dumbbell } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Neutral fallback shown whenever an exercise has no bundled illustration or
 * uploaded image. Deliberately abstract (a dumbbell glyph + label) — it never
 * depicts the movement, so it can never misrepresent the exercise.
 */
export function ExercisePlaceholder({
  label,
  compact = false,
  className,
}: {
  label: string
  compact?: boolean
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — no illustration available yet`}
      className={cn(
        'flex flex-col items-center justify-center gap-1 bg-surface2 text-faint',
        className,
      )}
    >
      <Dumbbell size={compact ? 18 : 26} strokeWidth={1.75} aria-hidden="true" />
      {!compact ? (
        <span className="px-2 text-center text-[10px] font-semibold uppercase tracking-wide">
          Artwork pending
        </span>
      ) : null}
    </div>
  )
}
