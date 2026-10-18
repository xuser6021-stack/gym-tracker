import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'neutral' | 'accent' | 'success' | 'warn' | 'danger' | 'info'

const tones: Record<Tone, string> = {
  neutral: 'bg-surface3 text-muted border-line',
  accent: 'bg-accentsoft text-accent border-transparent',
  success: 'bg-success/15 text-success border-transparent',
  warn: 'bg-warn/15 text-warn border-transparent',
  danger: 'bg-dangersoft text-danger border-transparent',
  info: 'bg-info/15 text-info border-transparent',
}

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
