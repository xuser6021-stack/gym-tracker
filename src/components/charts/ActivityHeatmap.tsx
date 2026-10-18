import { useMemo } from 'react'
import type { Exercise, WorkoutSession } from '../../types'
import { addDays, completedSessions, isoDate, startOfWeek } from '../../lib/stats'
import { setVolumeKg } from '../../lib/progression'
import { useToday } from '../../lib/useNow'
import { cn } from '../../lib/cn'

const LEVEL_CLASS = [
  'bg-surface3',
  'bg-accent/25',
  'bg-accent/45',
  'bg-accent/70',
  'bg-accent',
]

interface DayCell {
  date: string
  /** -1 = future/disabled, 0 = rest, 1-4 = activity intensity */
  level: number
  volumeKg: number
}

/**
 * GitHub-style training calendar. Intensity is daily training volume (kg) so the
 * grid rewards productive sessions rather than merely "appeared at the gym".
 */
export function ActivityHeatmap({
  sessions,
  exercisesById,
  weeks = 12,
}: {
  sessions: WorkoutSession[]
  exercisesById: Map<string, Exercise>
  weeks?: number
}) {
  const today = useToday()
  const { columns, activeDays } = useMemo(() => {
    const perDay = new Map<string, number>()
    for (const s of completedSessions(sessions)) {
      const volume = s.sets.reduce((sum, set) => sum + setVolumeKg(set, exercisesById.get(set.exerciseId)), 0)
      perDay.set(s.date, (perDay.get(s.date) ?? 0) + volume)
    }
    const max = Math.max(1, ...perDay.values())
    const firstWeekStart = addDays(startOfWeek(today), -(weeks - 1) * 7)
    const columns: { key: string; days: DayCell[] }[] = []

    for (let w = 0; w < weeks; w++) {
      const weekStart = addDays(firstWeekStart, w * 7)
      const cells: DayCell[] = []
      for (let d = 0; d < 7; d++) {
        const current = addDays(weekStart, d)
        const date = isoDate(current)
        if (current.getTime() > today.getTime()) {
          cells.push({ date, level: -1, volumeKg: 0 })
          continue
        }
        const volume = perDay.get(date) ?? 0
        const level = volume <= 0 ? 0 : Math.min(4, 1 + Math.floor((volume / max) * 3.999))
        cells.push({ date, level, volumeKg: volume })
      }
      columns.push({ key: isoDate(weekStart), days: cells })
    }

    const activeDays = columns.reduce((sum, col) => sum + col.days.filter((day) => day.level > 0).length, 0)
    return { columns, activeDays }
  }, [sessions, exercisesById, weeks, today])

  const dayLabels = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun']

  return (
    <div className="mt-3">
      <div className="flex gap-2">
        <div className="flex flex-col justify-between py-px text-[9px] leading-none text-faint">
          {dayLabels.map((label, i) => (
            <span key={i} className="h-3">
              {label}
            </span>
          ))}
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-[3px]">
            {columns.map((col) => (
              <div key={col.key} className="flex flex-col gap-[3px]">
                {col.days.map((day) => (
                  <div
                    key={day.date}
                    title={day.level < 0 ? undefined : `${day.date} · ${Math.round(day.volumeKg).toLocaleString()} kg`}
                    aria-hidden={day.level < 0}
                    className={cn(
                      'h-3 w-3 rounded-[3px]',
                      day.level < 0 ? 'bg-transparent' : LEVEL_CLASS[day.level],
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-faint">
        <span>
          {activeDays} active day{activeDays === 1 ? '' : 's'} in the last {weeks} weeks
        </span>
        <span className="flex items-center gap-1">
          Less
          {LEVEL_CLASS.map((cls, i) => (
            <span key={i} className={cn('h-2.5 w-2.5 rounded-[2px]', cls)} />
          ))}
          More
        </span>
      </div>
    </div>
  )
}
