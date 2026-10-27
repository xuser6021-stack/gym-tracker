import { useState } from 'react'
import { Calendar, ChevronRight, Dumbbell, Coffee, Sparkles } from 'lucide-react'
import { Card, CardHeader } from '../ui/Card'
import { Button } from '../ui/Button'
import { Dialog } from '../ui/Dialog'
import { cn } from '../../lib/cn'
import type { WorkoutTemplate } from '../../types'
import { DAYS_OF_WEEK } from '../../data/templates'

interface WeeklySchedulerProps {
  templates: WorkoutTemplate[]
  onUpdateTemplate: (id: string, patch: Partial<WorkoutTemplate>) => void
  onAddTemplate: (name: string, day: string) => WorkoutTemplate
  className?: string
}

const SPLIT_PRESETS = [
  {
    name: 'Push / Pull / Legs (6-Day)',
    description: 'Push A, Pull A, Legs A, Push B, Pull B, Legs B, Rest',
    days: [
      { day: 'Monday', name: 'Push A', isRest: false },
      { day: 'Tuesday', name: 'Pull A', isRest: false },
      { day: 'Wednesday', name: 'Legs A', isRest: false },
      { day: 'Thursday', name: 'Push B', isRest: false },
      { day: 'Friday', name: 'Pull B', isRest: false },
      { day: 'Saturday', name: 'Legs B', isRest: false },
      { day: 'Sunday', name: 'Rest', isRest: true },
    ],
  },
  {
    name: 'Upper / Lower (4-Day)',
    description: 'Mon: Upper A, Tue: Lower A, Wed: Rest, Thu: Upper B, Fri: Lower B, Sat-Sun: Rest',
    days: [
      { day: 'Monday', name: 'Upper A', isRest: false },
      { day: 'Tuesday', name: 'Lower A', isRest: false },
      { day: 'Wednesday', name: 'Rest', isRest: true },
      { day: 'Thursday', name: 'Upper B', isRest: false },
      { day: 'Friday', name: 'Lower B', isRest: false },
      { day: 'Saturday', name: 'Rest', isRest: true },
      { day: 'Sunday', name: 'Rest', isRest: true },
    ],
  },
  {
    name: 'Full Body (3-Day)',
    description: 'Mon: Full Body A, Tue: Rest, Wed: Full Body B, Thu: Rest, Fri: Full Body C, Sat-Sun: Rest',
    days: [
      { day: 'Monday', name: 'Full Body A', isRest: false },
      { day: 'Tuesday', name: 'Rest', isRest: true },
      { day: 'Wednesday', name: 'Full Body B', isRest: false },
      { day: 'Thursday', name: 'Rest', isRest: true },
      { day: 'Friday', name: 'Full Body C', isRest: false },
      { day: 'Saturday', name: 'Rest', isRest: true },
      { day: 'Sunday', name: 'Rest', isRest: true },
    ],
  },
]

export function WeeklyScheduler({
  templates,
  onUpdateTemplate,
  className,
}: WeeklySchedulerProps) {
  const [editingDay, setEditingDay] = useState<string | null>(null)
  const [splitDialogOpen, setSplitDialogOpen] = useState(false)

  const dayTemplates = DAYS_OF_WEEK.map((day) => {
    const tpl = templates.find((t) => t.day === day)
    return { day, template: tpl }
  })

  const currentTemplate = templates.find((t) => t.day === editingDay)

  const applyPreset = (preset: typeof SPLIT_PRESETS[0]) => {
    for (const d of preset.days) {
      const match = templates.find((t) => t.day === d.day)
      if (match) {
        onUpdateTemplate(match.id, {
          name: d.name,
          isRestDay: d.isRest,
        })
      }
    }
    setSplitDialogOpen(false)
  }

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader
        title={
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface2 text-accent">
              <Calendar size={16} />
            </span>
            <span>Weekly Split & Schedule</span>
          </div>
        }
        subtitle="Assign your workout split across days of the week"
        action={
          <Button variant="secondary" size="sm" onClick={() => setSplitDialogOpen(true)}>
            <Sparkles size={14} /> Presets
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-7">
        {dayTemplates.map(({ day, template }) => {
          const isRest = template?.isRestDay ?? false
          const exerciseCount = template?.exercises.length ?? 0

          return (
            <div
              key={day}
              onClick={() => setEditingDay(day)}
              className={cn(
                'group flex cursor-pointer flex-col justify-between rounded-xl border p-3 transition-all hover:border-accent/40',
                isRest
                  ? 'border-line/60 bg-surface2/40 text-muted'
                  : 'border-line bg-surface text-ink hover:bg-surface2',
              )}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-faint">
                    {day.slice(0, 3)}
                  </span>
                  {isRest ? (
                    <Coffee size={14} className="text-muted" />
                  ) : (
                    <Dumbbell size={14} className="text-accent" />
                  )}
                </div>
                <p className="mt-1 truncate text-sm font-bold text-ink group-hover:text-accent">
                  {template?.name ?? (isRest ? 'Rest' : 'Unassigned')}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{isRest ? 'Recovery' : `${exerciseCount} exercises`}</span>
                <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Day Configuration Dialog */}
      <Dialog
        open={editingDay !== null}
        onClose={() => setEditingDay(null)}
        title={`Configure ${editingDay}`}
        footer={
          <Button onClick={() => setEditingDay(null)}>
            Done
          </Button>
        }
      >
        {currentTemplate ? (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-muted">Day Type</label>
              <div className="mt-2 flex gap-2">
                <Button
                  variant={currentTemplate.isRestDay ? 'secondary' : 'primary'}
                  className="flex-1"
                  onClick={() => onUpdateTemplate(currentTemplate.id, { isRestDay: false })}
                >
                  <Dumbbell size={15} /> Training Day
                </Button>
                <Button
                  variant={currentTemplate.isRestDay ? 'primary' : 'secondary'}
                  className="flex-1"
                  onClick={() => onUpdateTemplate(currentTemplate.id, { isRestDay: true })}
                >
                  <Coffee size={15} /> Rest Day
                </Button>
              </div>
            </div>

            {!currentTemplate.isRestDay && (
              <div>
                <label className="text-xs font-bold uppercase text-muted">Workout Name</label>
                <input
                  type="text"
                  value={currentTemplate.name}
                  onChange={(e) => onUpdateTemplate(currentTemplate.id, { name: e.target.value })}
                  placeholder="e.g. Push A"
                  className="mt-1 h-11 w-full rounded-xl border border-line bg-surface2 px-3 text-sm text-ink outline-none focus:border-accent"
                />
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted">No template assigned to this day.</p>
        )}
      </Dialog>

      {/* Preset Dialog */}
      <Dialog
        open={splitDialogOpen}
        onClose={() => setSplitDialogOpen(false)}
        title="Choose a Split Preset"
        description="Quickly align your weekly training days with proven muscle growth splits."
        footer={
          <Button variant="ghost" onClick={() => setSplitDialogOpen(false)}>
            Cancel
          </Button>
        }
      >
        <div className="space-y-3">
          {SPLIT_PRESETS.map((preset) => (
            <div
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="group flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-line bg-surface2 p-3 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div>
                <p className="text-sm font-bold text-ink group-hover:text-accent">{preset.name}</p>
                <p className="mt-1 text-xs text-muted">{preset.description}</p>
              </div>
              <Button size="sm" variant="secondary" className="shrink-0 group-hover:border-accent">
                Apply
              </Button>
            </div>
          ))}
        </div>
      </Dialog>
    </Card>
  )
}
