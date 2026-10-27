import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, TrendingUp, AlertTriangle, BatteryCharging, ChevronRight, Activity } from 'lucide-react'
import { Card, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Dialog } from '../ui/Dialog'
import { cn } from '../../lib/cn'
import type { CoachingInsight, Exercise, WorkoutSession } from '../../types'
import { calculateMuscleRecovery, generateCoachingInsights } from '../../lib/coaching'

interface CoachingCardProps {
  sessions: WorkoutSession[]
  exercises: Exercise[]
  templates: { exercises: { exerciseId: string; repsMin: number; repsMax: number }[] }[]
  exercisesById: Map<string, Exercise>
  className?: string
}

export function CoachingCard({
  sessions,
  exercises,
  templates,
  exercisesById,
  className,
}: CoachingCardProps) {
  const [selectedInsight, setSelectedInsight] = useState<CoachingInsight | null>(null)
  const [recoveryModalOpen, setRecoveryModalOpen] = useState(false)

  const insights = generateCoachingInsights(sessions, exercises, templates, exercisesById)
  const recoveries = calculateMuscleRecovery(sessions, exercisesById)

  const readyMuscles = recoveries.filter((r) => r.status === 'ready' || r.status === 'fresh')

  if (insights.length === 0 && sessions.length < 2) {
    return (
      <Card className={cn('relative overflow-hidden border-accent/20 bg-gradient-to-br from-surface to-surface2', className)}>
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accentsoft text-accent">
            <Sparkles size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-ink">Personal Fitness Pro Coach</h3>
              <Badge tone="accent">Offline AI</Badge>
            </div>
            <p className="mt-1 text-xs text-muted">
              Complete your first 2 workouts to activate intelligent double progression recommendations, plateau detection, and muscle recovery tracking.
            </p>
          </div>
        </div>
      </Card>
    )
  }

  const topInsight = insights[0]

  return (
    <>
      <Card className={cn('relative overflow-hidden border-accent/25 bg-gradient-to-br from-surface to-surface2', className)}>
        <CardHeader
          title={
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accentsoft text-accent">
                <Sparkles size={16} />
              </span>
              <span className="font-extrabold tracking-tight">Coach Insights</span>
            </div>
          }
          action={
            <button
              type="button"
              onClick={() => setRecoveryModalOpen(true)}
              className="flex items-center gap-1 text-xs font-bold text-accent hover:underline"
            >
              <Activity size={14} /> Muscle recovery ({readyMuscles.length} primed)
            </button>
          }
        />

        {topInsight ? (
          <div
            onClick={() => setSelectedInsight(topInsight)}
            className="group flex cursor-pointer items-start justify-between gap-3 rounded-2xl border border-line bg-surface/70 p-3.5 transition-all hover:border-accent/40 hover:bg-surface2"
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
                  topInsight.type === 'increase'
                    ? 'bg-success/15 text-success'
                    : topInsight.type === 'plateau'
                      ? 'bg-warn/15 text-warn'
                      : 'bg-info/15 text-info',
                )}
              >
                {topInsight.type === 'increase' ? (
                  <TrendingUp size={17} />
                ) : topInsight.type === 'plateau' ? (
                  <AlertTriangle size={17} />
                ) : (
                  <BatteryCharging size={17} />
                )}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-ink group-hover:text-accent">{topInsight.title}</p>
                  {topInsight.metric && <Badge tone="success">{topInsight.metric}</Badge>}
                </div>
                <p className="mt-0.5 text-xs text-muted">{topInsight.message}</p>
                {topInsight.recommendation && (
                  <p className="mt-1.5 text-xs font-semibold text-accent">{topInsight.recommendation}</p>
                )}
              </div>
            </div>
            <ChevronRight size={18} className="mt-2 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
          </div>
        ) : (
          <p className="text-xs text-muted">All exercises are progressing steadily. Keep hitting your prescribed sets!</p>
        )}

        {insights.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {insights.slice(1).map((ins) => (
              <button
                key={ins.id}
                type="button"
                onClick={() => setSelectedInsight(ins)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-muted hover:border-linestrong hover:text-ink"
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    ins.type === 'increase' ? 'bg-success' : ins.type === 'plateau' ? 'bg-warn' : 'bg-info',
                  )}
                />
                <span className="truncate max-w-[180px]">{ins.title}</span>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Insight Detail Modal */}
      <Dialog
        open={selectedInsight !== null}
        onClose={() => setSelectedInsight(null)}
        title={selectedInsight?.title ?? 'Coaching Insight'}
        footer={
          <Button onClick={() => setSelectedInsight(null)}>
            Understood
          </Button>
        }
      >
        {selectedInsight && (
          <div className="space-y-3">
            <p className="text-sm text-ink">{selectedInsight.message}</p>
            {selectedInsight.recommendation && (
              <div className="rounded-xl border border-accent/30 bg-accentsoft p-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Coach Recommendation</p>
                <p className="mt-1 text-sm font-semibold text-ink">{selectedInsight.recommendation}</p>
              </div>
            )}
            {selectedInsight.exerciseId && (
              <div className="pt-2">
                <Link
                  to={`/exercises/${selectedInsight.exerciseId}`}
                  className="text-xs font-bold text-accent hover:underline"
                  onClick={() => setSelectedInsight(null)}
                >
                  View exercise details & technique guide →
                </Link>
              </div>
            )}
          </div>
        )}
      </Dialog>

      {/* Muscle Recovery Modal */}
      <Dialog
        open={recoveryModalOpen}
        onClose={() => setRecoveryModalOpen(false)}
        title="Muscle Group Recovery Status"
        description="Estimates systemic and local fatigue based on working sets logged over the past 72 hours."
        footer={
          <Button onClick={() => setRecoveryModalOpen(false)}>
            Close
          </Button>
        }
      >
        <div className="space-y-2">
          {recoveries.map((m) => {
            const statusConfig = {
              fatigued: { label: 'Fatigued', tone: 'danger' as const, desc: 'Trained recently. Rest to avoid overreaching.' },
              recovering: { label: 'Recovering', tone: 'warn' as const, desc: 'Rebuilding glycogen & muscle tissue.' },
              ready: { label: 'Ready', tone: 'success' as const, desc: 'Primed for progressive overload.' },
              fresh: { label: 'Fresh', tone: 'neutral' as const, desc: 'Fully rested.' },
            }[m.status]

            return (
              <div
                key={m.muscle}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-bold text-ink">{m.muscle}</p>
                  <p className="text-xs text-muted">
                    {m.hoursAgo !== null ? `Last trained ~${m.hoursAgo}h ago (${m.setsInLast48h} sets in 48h)` : 'No recent sessions'}
                  </p>
                </div>
                <Badge tone={statusConfig.tone}>{statusConfig.label}</Badge>
              </div>
            )
          })}
        </div>
      </Dialog>
    </>
  )
}
