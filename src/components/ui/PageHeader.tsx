import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

type NoticeTone = 'info' | 'warn' | 'danger' | 'accent' | 'success'

const noticeTones: Record<NoticeTone, string> = {
  info: 'border-info/30 bg-info/10 text-info',
  warn: 'border-warn/30 bg-warn/10 text-warn',
  danger: 'border-danger/30 bg-danger/10 text-danger',
  accent: 'border-accent/40 bg-accentsoft text-accent',
  success: 'border-success/30 bg-success/10 text-success',
}

export function Notice({
  tone = 'info',
  icon,
  children,
  className,
}: {
  tone?: NoticeTone
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-sm',
        noticeTones[tone],
        className,
      )}
      role={tone === 'danger' ? 'alert' : undefined}
    >
      {icon ? <span className="mt-0.5 shrink-0">{icon}</span> : null}
      <div className="min-w-0 leading-relaxed">{children}</div>
    </div>
  )
}
