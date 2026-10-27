import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import { cn } from '../../lib/cn'

export type ToastTone = 'success' | 'danger' | 'info' | 'accent'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  tone?: ToastTone
  durationMs?: number
}

interface ToastContextValue {
  toast: (options: Omit<ToastMessage, 'id'>) => void
  success: (title: string, description?: string) => void
  error: (title: string, description?: string) => void
  info: (title: string, description?: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // Graceful fallback if used outside provider
    return {
      toast: () => {},
      success: () => {},
      error: () => {},
      info: () => {},
    }
  }
  return ctx
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    ({ title, description, tone = 'accent', durationMs = 4000 }: Omit<ToastMessage, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
      setToasts((prev) => [...prev, { id, title, description, tone, durationMs }])
      if (durationMs > 0) {
        window.setTimeout(() => {
          dismiss(id)
        }, durationMs)
      }
    },
    [dismiss],
  )

  const success = useCallback(
    (title: string, description?: string) => toast({ title, description, tone: 'success' }),
    [toast],
  )

  const error = useCallback(
    (title: string, description?: string) => toast({ title, description, tone: 'danger' }),
    [toast],
  )

  const info = useCallback(
    (title: string, description?: string) => toast({ title, description, tone: 'info' }),
    [toast],
  )

  return (
    <ToastContext.Provider value={{ toast, success, error, info }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-16 z-50 flex flex-col items-center gap-2 p-4 lg:bottom-4 lg:right-4 lg:left-auto lg:items-end"
      >
        {toasts.map((t) => {
          const toneStyles =
            t.tone === 'success'
              ? 'border-success/40 bg-surface text-ink'
              : t.tone === 'danger'
                ? 'border-danger/40 bg-surface text-danger'
                : t.tone === 'info'
                  ? 'border-info/40 bg-surface text-ink'
                  : 'border-accent/40 bg-surface text-ink'

          const Icon =
            t.tone === 'danger'
              ? AlertCircle
              : t.tone === 'info'
                ? Info
                : CheckCircle2

          return (
            <div
              key={t.id}
              className={cn(
                'pointer-events-auto flex max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur transition-all duration-200 animate-in fade-in slide-in-from-bottom-2',
                toneStyles,
              )}
            >
              <Icon
                size={18}
                className={cn(
                  'mt-0.5 shrink-0',
                  t.tone === 'success'
                    ? 'text-success'
                    : t.tone === 'danger'
                      ? 'text-danger'
                      : t.tone === 'info'
                        ? 'text-info'
                        : 'text-accent',
                )}
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-ink">{t.title}</p>
                {t.description && <p className="mt-0.5 text-xs text-muted">{t.description}</p>}
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="shrink-0 rounded-lg p-1 text-muted hover:bg-surface2 hover:text-ink"
              >
                <X size={14} />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}
