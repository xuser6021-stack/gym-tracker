import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Stat({
  label,
  value,
  sub,
  icon,
  tone = 'default',
  className,
}: {
  label: string
  value: ReactNode
  sub?: ReactNode
  icon?: ReactNode
  tone?: 'default' | 'accent' | 'success' | 'danger' | 'warn'
  className?: string
}) {
  const valueTone: Record<string, string> = {
    default: 'text-ink',
    accent: 'text-accent',
    success: 'text-success',
    danger: 'text-danger',
    warn: 'text-warn',
  }
  return (
    <div className={cn('rounded-2xl border border-line bg-surface p-4', className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
        {icon ? <span className="text-faint">{icon}</span> : null}
      </div>
      <div className={cn('mt-2 text-2xl font-extrabold tabular-nums tracking-tight', valueTone[tone])}>
        {value}
      </div>
      {sub ? <div className="mt-1 text-xs text-muted">{sub}</div> : null}
    </div>
  )
}
