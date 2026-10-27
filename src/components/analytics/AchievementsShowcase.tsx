import { useState } from 'react'
import { Trophy, Lock, Calendar, CheckCircle2 } from 'lucide-react'
import { Card, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Dialog } from '../ui/Dialog'
import { cn } from '../../lib/cn'
import type { Achievement } from '../../types'
import { ACHIEVEMENT_CATALOG, type AchievementDefinition, computeMonthlyRecap } from '../../lib/achievements'
import { formatDate } from '../../lib/format'

interface AchievementsShowcaseProps {
  unlockedAchievements: Achievement[]
  sessions: any[]
  personalRecords: any[]
  exercisesById: Map<string, any>
  className?: string
}

export function AchievementsShowcase({
  unlockedAchievements,
  sessions,
  personalRecords,
  exercisesById,
  className,
}: AchievementsShowcaseProps) {
  const [selectedBadge, setSelectedBadge] = useState<{ def: AchievementDefinition; unlocked?: Achievement } | null>(null)
  const [recapModalOpen, setRecapModalOpen] = useState(false)

  const unlockedMap = new Map(unlockedAchievements.map((a) => [a.key, a]))
  const recap = computeMonthlyRecap(sessions, personalRecords, exercisesById)

  const unlockedCount = unlockedAchievements.length
  const totalCount = ACHIEVEMENT_CATALOG.length

  return (
    <>
      <Card className={cn('overflow-hidden', className)}>
        <CardHeader
          title={
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accentsoft text-accent">
                <Trophy size={16} />
              </span>
              <span>Achievements & Milestones</span>
              <Badge tone="accent">
                {unlockedCount} / {totalCount}
              </Badge>
            </div>
          }
          subtitle="Unlock badges as you build lifetime strength and consistency"
          action={
            sessions.length > 0 && (
              <Button variant="secondary" size="sm" onClick={() => setRecapModalOpen(true)}>
                <Calendar size={14} /> {recap.monthName} Recap
              </Button>
            )
          }
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {ACHIEVEMENT_CATALOG.map((def) => {
            const unlocked = unlockedMap.get(def.key)
            const isUnlocked = Boolean(unlocked)

            return (
              <div
                key={def.key}
                onClick={() => setSelectedBadge({ def, unlocked })}
                className={cn(
                  'group flex cursor-pointer flex-col items-center rounded-2xl border p-3 text-center transition-all hover:scale-105',
                  isUnlocked
                    ? 'border-accent/40 bg-gradient-to-b from-surface to-accentsoft/20 text-ink shadow-sm'
                    : 'border-line/60 bg-surface2/30 text-muted opacity-60 hover:opacity-100',
                )}
              >
                <div className="relative flex h-12 w-12 items-center justify-center text-2xl">
                  {def.icon}
                  {!isUnlocked && (
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface3 text-faint">
                      <Lock size={10} />
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs font-bold leading-tight group-hover:text-accent">
                  {def.title}
                </p>
                <span className="mt-1 text-[10px] text-faint">
                  {isUnlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Badge Detail Modal */}
      <Dialog
        open={selectedBadge !== null}
        onClose={() => setSelectedBadge(null)}
        title={selectedBadge?.def.title ?? 'Achievement'}
        footer={
          <Button onClick={() => setSelectedBadge(null)}>
            Close
          </Button>
        }
      >
        {selectedBadge && (
          <div className="flex flex-col items-center text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-surface2 text-4xl shadow-inner">
              {selectedBadge.def.icon}
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-ink">{selectedBadge.def.title}</h3>
            <p className="mt-1 text-sm text-muted">{selectedBadge.def.description}</p>
            {selectedBadge.unlocked ? (
              <div className="mt-4 flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                <CheckCircle2 size={14} /> Unlocked on {formatDate(selectedBadge.unlocked.unlockedAt)}
              </div>
            ) : (
              <div className="mt-4 flex items-center gap-1.5 rounded-full border border-line bg-surface2 px-3 py-1 text-xs font-medium text-faint">
                <Lock size={12} /> Locked — Keep training to unlock
              </div>
            )}
          </div>
        )}
      </Dialog>

      {/* Monthly Recap Modal */}
      <Dialog
        open={recapModalOpen}
        onClose={() => setRecapModalOpen(false)}
        title={`${recap.monthName} ${recap.year} Training Recap`}
        description="A comprehensive offline summary of your efforts this calendar month."
        footer={
          <Button onClick={() => setRecapModalOpen(false)}>
            Done
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-surface2 p-3 text-center">
              <p className="text-2xl font-extrabold text-ink">{recap.totalWorkouts}</p>
              <p className="text-xs text-muted">Workouts Completed</p>
            </div>
            <div className="rounded-xl border border-line bg-surface2 p-3 text-center">
              <p className="text-2xl font-extrabold text-accent">{recap.totalVolumeKg.toLocaleString()} kg</p>
              <p className="text-xs text-muted">Total Volume Lifted</p>
            </div>
            <div className="rounded-xl border border-line bg-surface2 p-3 text-center">
              <p className="text-2xl font-extrabold text-ink">{recap.totalWorkingSets}</p>
              <p className="text-xs text-muted">Hard Working Sets</p>
            </div>
            <div className="rounded-xl border border-line bg-surface2 p-3 text-center">
              <p className="text-2xl font-extrabold text-success">{recap.prsSet}</p>
              <p className="text-xs text-muted">Personal Records Broken</p>
            </div>
          </div>

          {recap.topExerciseName && (
            <div className="rounded-xl border border-accent/25 bg-accentsoft/20 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Top Movement</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{recap.topExerciseName}</p>
              <p className="mt-0.5 text-xs text-muted">Most frequently trained lift this month.</p>
            </div>
          )}
        </div>
      </Dialog>
    </>
  )
}
