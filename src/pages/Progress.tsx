import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Award, Flame, LineChart, TrendingUp } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { PageHeader, Notice } from '../components/ui/PageHeader'
import { Card, CardHeader } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Select } from '../components/ui/Input'
import { EmptyState } from '../components/ui/EmptyState'
import { Stat } from '../components/ui/Stat'
import { Segmented } from '../components/ui/Segmented'
import { BarsChart, TrendChart } from '../components/charts/Charts'
import { ActivityHeatmap } from '../components/charts/ActivityHeatmap'
import { exerciseHistory, sessionVolumeKg } from '../lib/progression'
import {
  currentStreak,
  isoDate,
  plannedPerWeek,
  rangeStart,
  sessionsInRange,
  weeklyVolumes,
} from '../lib/stats'
import { convertWeightValue, formatWeightValue, prKindLabel } from '../lib/display'
import { formatDate } from '../lib/format'
import { useToday } from '../lib/useNow'
import { cn } from '../lib/cn'

type RangeKey = '30' | '90' | '365'

const RANGE_DAYS: Record<RangeKey, number> = { '30': 30, '90': 90, '365': 365 }

export function Progress() {
  const { data, exercisesById } = useApp()
  const navigate = useNavigate()
  const [range, setRange] = useState<RangeKey>('90')
  const [exerciseId, setExerciseId] = useState('')
  const [showAllPrs, setShowAllPrs] = useState(false)
  const unit = data.settings.units.weight
  const days = RANGE_DAYS[range]
  const start = rangeStart(days)
  const today = useToday()
  const end = isoDate(today)

  const sessions = useMemo(() => sessionsInRange(data.sessions, start, end), [data.sessions, start, end])

  const trackedExercises = useMemo(() => {
    const ids = new Set<string>()
    for (const s of sessions) for (const set of s.sets) ids.add(set.exerciseId)
    return [...ids]
      .map((id) => exercisesById.get(id))
      .filter((e): e is NonNullable<typeof e> => Boolean(e))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [sessions, exercisesById])

  const activeExerciseId = exerciseId || trackedExercises[0]?.id || ''
  const activeExercise = activeExerciseId ? exercisesById.get(activeExerciseId) : undefined

  const totalVolume = useMemo(
    () => sessions.reduce((sum, s) => sum + sessionVolumeKg(s, exercisesById), 0),
    [sessions, exercisesById],
  )
  const totalWorkingSets = useMemo(
    () => sessions.reduce((sum, s) => sum + s.sets.filter((x) => x.completed && x.type === 'working').length, 0),
    [sessions],
  )

  const weekly = useMemo(() => weeklyVolumes(data.sessions, exercisesById), [data.sessions, exercisesById])
  const weeklyInRange = useMemo(() => weekly.filter((w) => w.week >= start), [weekly, start])

  const volumeChartData = useMemo(
    () =>
      weeklyInRange.map((w) => ({
        label: w.label,
        volume: Math.round(w.volumeKg),
        workouts: w.workouts,
      })),
    [weeklyInRange],
  )

  const muscleData = useMemo(() => {
    const map = new Map<string, number>()
    for (const s of sessions) {
      for (const set of s.sets) {
        if (!set.completed || set.type !== 'working') continue
        const muscle = exercisesById.get(set.exerciseId)?.primaryMuscle ?? 'Other'
        map.set(muscle, (map.get(muscle) ?? 0) + 1)
      }
    }
    return [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([muscle, sets]) => ({ muscle, sets }))
  }, [sessions, exercisesById])

  const weeksInRange = Math.max(1, weeklyInRange.length)
  const muscleWeekly = useMemo(
    () => muscleData.map((m) => ({ muscle: m.muscle, perWeek: m.sets / weeksInRange })),
    [muscleData, weeksInRange],
  )

  const e1rmData = useMemo(() => {
    if (!activeExercise) return []
    return [...exerciseHistory(sessions, activeExercise.id, activeExercise)]
      .reverse()
      .filter((h) => h.e1rm !== null)
      .map((h) => ({
        date: formatDate(h.date).replace(/,.*$/, ''),
        e1rm: convertWeightValue(h.e1rm as number, unit),
      }))
  }, [sessions, activeExercise, unit])

  const streak = currentStreak(data.sessions, data.settings.minSessionsForStreak, plannedPerWeek(data.templates))
  const avgPerWeek = weeklyInRange.length
    ? weeklyInRange.reduce((s, w) => s + w.workouts, 0) / weeklyInRange.length
    : 0

  const e1rmChange = e1rmData.length >= 2 ? (e1rmData[e1rmData.length - 1].e1rm ?? 0) - (e1rmData[0].e1rm ?? 0) : null

  const prs = useMemo(
    () => [...data.personalRecords].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [data.personalRecords],
  )
  const visiblePrs = showAllPrs ? prs : prs.slice(0, 8)

  return (
    <div>
      <PageHeader title="Progress" subtitle="Volume, strength and consistency over time" />

      <Segmented
        className="mb-4"
        value={range}
        onChange={setRange}
        options={[
          { value: '30', label: '30 days' },
          { value: '90', label: '90 days' },
          { value: '365', label: '1 year' },
        ]}
      />

      {sessions.length === 0 ? (
        <EmptyState
          icon={<LineChart size={26} />}
          title="No data in this range"
          description="Finish a few workouts and your training analytics will appear here."
        />
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Workouts" value={sessions.length} sub={`in last ${days} days`} />
            <Stat
              label="Total volume"
              value={`${Math.round(totalVolume).toLocaleString()}`}
              sub="kg lifted"
              tone="accent"
            />
            <Stat label="Working sets" value={totalWorkingSets} sub="completed" />
            <Stat
              label="Avg / week"
              value={avgPerWeek.toFixed(1)}
              sub={`streak ${streak.weeks} wk`}
              icon={<Flame size={16} />}
            />
          </div>

          <Card>
            <CardHeader
              title="Weekly volume"
              subtitle="Total kg lifted each week"
              action={<Badge tone="accent">{weeklyInRange.length} weeks</Badge>}
            />
            {volumeChartData.length ? (
              <BarsChart
                data={volumeChartData}
                xKey="label"
                unit="kg"
                series={[{ key: 'volume', label: 'Volume', color: 'var(--app-accent)' }]}
                valueFormatter={(v) => `${v.toLocaleString()} kg`}
              />
            ) : (
              <p className="text-sm text-muted">No volume recorded in this range.</p>
            )}
          </Card>

          <Card>
            <CardHeader
              title="Estimated 1RM"
              subtitle="Epley estimate from your best working set (not a tested max)"
              action={
                trackedExercises.length ? (
                  <Select
                    className="h-9 w-40"
                    value={activeExerciseId}
                    onChange={(e) => setExerciseId(e.target.value)}
                    aria-label="Choose exercise"
                  >
                    {trackedExercises.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </Select>
                ) : undefined
              }
            />
            {e1rmData.length >= 2 ? (
              <>
                <TrendChart
                  data={e1rmData}
                  xKey="date"
                  unit={unit}
                  valueFormatter={(v) => `${Number(v.toFixed(1))} ${unit}`}
                  series={[{ key: 'e1rm', label: 'Est. 1RM', color: 'var(--app-info)' }]}
                />
                {e1rmChange !== null ? (
                  <p className="mt-2 text-xs text-muted">
                    Change across this range:{' '}
                    <strong
                      className={cn(
                        'font-bold',
                        e1rmChange > 0 ? 'text-success' : e1rmChange < 0 ? 'text-danger' : 'text-ink',
                      )}
                    >
                      {e1rmChange > 0 ? '+' : ''}
                      {e1rmChange.toFixed(1)} {unit}
                    </strong>
                  </p>
                ) : null}
              </>
            ) : (
              <p className="text-sm text-muted">
                Log this exercise with 3–12 reps in at least two sessions to plot an estimate.
              </p>
            )}
          </Card>

          <Card>
            <CardHeader
              title="Muscle group balance"
              subtitle="Working sets per muscle in this range"
              action={<Badge tone="neutral">{totalWorkingSets} sets</Badge>}
            />
            {muscleData.length ? (
              <>
                <BarsChart
                  data={muscleData}
                  xKey="muscle"
                  unit="sets"
                  series={[{ key: 'sets', label: 'Sets', color: 'var(--app-success)' }]}
                />
                <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs sm:grid-cols-3">
                  {muscleWeekly.map((m) => (
                    <li
                      key={m.muscle}
                      className="flex items-center justify-between gap-2 rounded-lg border border-line bg-surface2 px-2 py-1"
                    >
                      <span className="truncate text-muted">{m.muscle}</span>
                      <span
                        className={cn(
                          'shrink-0 font-bold tabular-nums',
                          m.perWeek < 10 ? 'text-warn' : m.perWeek > 20 ? 'text-info' : 'text-success',
                        )}
                      >
                        {m.perWeek.toFixed(1)}/wk
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[11px] leading-relaxed text-faint">
                  Weekly average sets per muscle. Rough hypertrophy guideline: ~10–20 hard sets per muscle per
                  week — individual needs vary.
                </p>
              </>
            ) : (
              <p className="text-sm text-muted">No working sets yet.</p>
            )}
          </Card>

          <Card>
            <CardHeader
              title="Consistency"
              subtitle="Completed workouts vs. your weekly plan"
              action={<Badge tone="accent">goal {streak.thisWeekPlanned} / wk</Badge>}
            />
            <div className="flex items-center gap-3">
              <TrendingUp size={18} className="text-accent" />
              <p className="text-sm text-muted">
                This week: <strong className="text-ink">{streak.thisWeekCompleted}</strong> of{' '}
                {streak.thisWeekPlanned} planned sessions.
              </p>
            </div>
            <ActivityHeatmap sessions={data.sessions} exercisesById={exercisesById} weeks={12} />
            {streak.weeks > 0 ? (
              <Notice tone="success" className="mt-3">
                You are on a {streak.weeks}-week streak of hitting at least{' '}
                {data.settings.minSessionsForStreak} sessions per week. Keep it rolling.
              </Notice>
            ) : (
              <Notice tone="info" className="mt-3">
                Hit at least {data.settings.minSessionsForStreak} sessions in a week to start a streak.
              </Notice>
            )}
          </Card>

          <Card>
            <CardHeader
              title="Personal records"
              subtitle="Your bests across all exercises"
              action={<Badge tone="neutral">{prs.length} total</Badge>}
            />
            {prs.length === 0 ? (
              <p className="text-sm text-muted">No records yet. Complete working sets to set your first PRs.</p>
            ) : (
              <>
                <ul className="space-y-2">
                  {visiblePrs.map((pr) => (
                    <li
                      key={pr.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <Award size={16} className="shrink-0 text-accent" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-ink">
                            {exercisesById.get(pr.exerciseId)?.name ?? 'Exercise'}
                          </p>
                          <p className="text-xs text-muted">
                            {prKindLabel(pr.kind)} · {formatDate(pr.date)}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm font-bold tabular-nums text-accent">
                        {formatWeightValue(pr.value, unit)}
                      </span>
                    </li>
                  ))}
                </ul>
                {prs.length > 8 ? (
                  <Button variant="secondary" className="mt-3 w-full" onClick={() => setShowAllPrs((v) => !v)}>
                    {showAllPrs ? 'Show fewer' : `Show all ${prs.length} records`}
                  </Button>
                ) : null}
              </>
            )}
          </Card>
        </div>
      )}

      <div className="mt-4">
        <button
          type="button"
          onClick={() => navigate('/body')}
          className="text-sm font-semibold text-accent"
        >
          Track body weight and measurements →
        </button>
      </div>
    </div>
  )
}
