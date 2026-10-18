import { useEffect, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/cn'

export function Stepper({
  value,
  onChange,
  step = 1,
  min = 0,
  max = 9999,
  decimals = 1,
  ariaLabel,
  placeholder,
  suffix,
  className,
}: {
  value: number | null
  onChange: (value: number | null) => void
  step?: number
  min?: number
  max?: number
  decimals?: number
  ariaLabel: string
  placeholder?: string
  suffix?: string
  className?: string
}) {
  const format = (v: number | null) => (v === null ? '' : `${Number(v.toFixed(decimals))}`)
  const [text, setText] = useState(format(value))

  useEffect(() => {
    setText(format(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals])

  const commit = (raw: string) => {
    const trimmed = raw.trim()
    if (trimmed === '') {
      onChange(null)
      return
    }
    const n = Number(trimmed)
    if (Number.isNaN(n)) {
      setText(format(value))
      return
    }
    onChange(Math.max(min, Math.min(max, n)))
  }

  const bump = (dir: -1 | 1) => {
    const base = value ?? 0
    const next = Math.max(min, Math.min(max, Number((base + dir * step).toFixed(decimals))))
    onChange(next)
  }

  return (
    <div className={cn('flex items-stretch overflow-hidden rounded-xl border border-line bg-surface2', className)}>
      <button
        type="button"
        aria-label={`Decrease ${ariaLabel}`}
        onClick={() => bump(-1)}
        className="flex w-11 items-center justify-center text-muted hover:bg-surface3 hover:text-ink active:bg-surface3"
      >
        <Minus size={18} />
      </button>
      <div className="relative flex flex-1 items-center border-x border-line">
        <input
          aria-label={ariaLabel}
          inputMode="decimal"
          value={text}
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit((e.target as HTMLInputElement).value)
          }}
          className="h-11 w-full bg-transparent px-2 text-center text-base font-bold tabular-nums text-ink outline-none placeholder:font-normal placeholder:text-faint"
        />
        {suffix ? <span className="pr-2 text-xs font-semibold text-faint">{suffix}</span> : null}
      </div>
      <button
        type="button"
        aria-label={`Increase ${ariaLabel}`}
        onClick={() => bump(1)}
        className="flex w-11 items-center justify-center text-muted hover:bg-surface3 hover:text-ink active:bg-surface3"
      >
        <Plus size={18} />
      </button>
    </div>
  )
}
