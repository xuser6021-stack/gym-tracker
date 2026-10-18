import { cn } from '../../lib/cn'

type Tone = 'accent' | 'success' | 'warn'

const tones: Record<Tone, string> = {
  accent: 'bg-accent',
  success: 'bg-success',
  warn: 'bg-warn',
}

export function Progress({
  value,
  max = 100,
  tone = 'accent',
  className,
}: {
  value: number
  max?: number
  tone?: Tone
  className?: string
}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0
  return (
    <div
      className={cn('h-2 w-full overflow-hidden rounded-full bg-surface3', className)}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={cn('h-full rounded-full transition-[width]', tones[tone])} style={{ width: `${pct}%` }} />
    </div>
  )
}
