import { useApp } from '../store/AppStore'
import { cn } from '../lib/cn'

const TONES: Record<'saved' | 'saving' | 'unsaved' | 'error', { label: string; dot: string }> = {
  saved: { label: 'All changes saved', dot: 'bg-success' },
  saving: { label: 'Saving…', dot: 'bg-warn animate-pulse' },
  unsaved: { label: 'Unsaved changes', dot: 'bg-warn animate-pulse' },
  error: { label: 'Save failed — changes not stored', dot: 'bg-danger' },
}

/**
 * Subtle, screen-reader-friendly indicator of whether the current change set is
 * durable. Never blocks the UI — it only reassures or warns.
 */
export function StorageStatus({ className }: { className?: string }) {
  const { saveState } = useApp()
  const tone = TONES[saveState]
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn(
        'flex items-center gap-1.5 text-xs',
        saveState === 'error' ? 'text-danger' : 'text-muted',
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone.dot)} aria-hidden />
      {tone.label}
    </p>
  )
}
