import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  CirclePlay,
  Dumbbell,
  Droplet,
  Flame,
  Scale,
  Target,
  TrendingUp,
  Trophy,
  Utensils,
  BookOpen,
} from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Card, CardHeader } from '../components/ui/Card'
import { CoachingCard } from '../components/coaching/CoachingCard'
import { Stat } from '../components/ui/Stat'
import { Progress } from '../components/ui/Progress'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader, Notice } from '../components/ui/PageHeader'
import { Segmented } from '../components/ui/Segmented'
import { TrendChart, BarsChart } from '../components/charts/Charts'
import { cn } from '../lib/cn'
import {
  addDays,
  completedSessions,
  countSessionsInWeek,
  currentStreak,
  goalProgress,
  isoDate,
  latestWeight,
  plannedPerWeek,
  rangeStart,
  sessionsInRange,
  startOfWeek,
  weekLabel,
  weeklyWeightAverages,
  weightTrend,
} from '../lib/stats'
import { sessionVolumeKg } from '../lib/progression'
import { currentRecords } from '../lib/records'
import { formatDate, formatDuration, relativeDay } from '../lib/format'
import { formatWeightValue, prKindLabel, prTone } from '../lib/display'
import { useNow, useToday } from '../lib/useNow'

function greeting(now: Date): string {
  const h = now.getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export function Dashboard() {
  const { data, exercisesById, startWorkout, activeSession, allExercises } = useApp()
  const navigate = useNavigate()
  const [rangeDays, setRangeDays] = useState<'7' | '30' | '90'>('7')

  const unit = data.settings.units.weight
  const today = useToday()
  const nowMs = useNow(60000)
  const todayIso = isoDate(today)
  const todayName = today.toLocaleDateString('en-US', { weekday: 'long' })

  const derived = useMemo(() => {
    const completed = completedSessions(data.sessions)
    const current = latestWeight(data.measurements)
    const goal = goalProgress(data.profile.startWeightKg, data.profile.targetWeightKg, current)
    const weekly = weeklyWeightAverages(data.measurements)
    const trend = weightTrend(data.measurements, data.profile.targetWeightKg, data.settings.targetGainRateKgPerWeek)
    const weekStartIso = isoDate(startOfWeek(today))
    const thisWeek = countSessionsInWeek(data.sessions, weekStartIso)
    const planned = plannedPerWeek(data.templates)
    const streak = currentStreak(data.sessions, data.settings.minSessionsForStreak, planned)
    const recent = [...completed].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5)

    const monday = startOfWeek(today)
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = addDays(monday, i)
      const iso = isoDate(date)
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
      const template = data.templates.find((t) => t.day === dayName)
      const done = completed.find((s) => s.date === iso)
      return { iso, label: date.toLocaleDateString(undefined, { weekday: 'short' }), dayNum: date.getDate(), template, done }
    })

    const completionData = Array.from({ length: 8 }, (_, idx) => {
      const weeksAgo = 7 - idx
      const start = addDays(startOfWeek(today), -7 * weeksAgo)
      const iso = isoDate(start)
      return { label: weekLabel(iso), Completed: countSessionsInWeek(data.sessions, iso), Planned: planned }
    })

    const volume = sessionsInRange(data.sessions, rangeStart(Number(rangeDays)), todayIso).reduce(
      (sum, s) => sum + sessionVolumeKg(s, exercisesById),
      0,
    )

    const prs = [...currentRecords(data.personalRecords).values()].sort((a, b) => (a.date < b.date ? 1 : -1))

    const todayNutrition = data.nutrition.find((d) => d.date === todayIso)
    let caloriesToday = 0
    let proteinToday = 0
    const waterToday = todayNutrition?.waterMl ?? 0
    if (todayNutrition) {
      for (const m of todayNutrition.meals) {
        for (const i of m.items) {
          caloriesToday += i.calories
          proteinToday += i.proteinG
        }
      }
    }

    const bodyWeightChart = weekly.map((w) => ({
      label: w.label,
      weight: Number((unit === 'lb' ? w.averageKg / 0.45359237 : w.averageKg).toFixed(1)),
    }))

    return {
      completed,
      current,
      goal,
      weekly,
      trend,
      thisWeek,
      planned,
      streak,
      recent,
      weekDays,
      completionData,
      volume,
      prs,
      caloriesToday,
      proteinToday,
      waterToday,
      bodyWeightChart,
    }
  }, [data, exercisesById, rangeDays, todayIso, unit, today])

  const todayTemplate = data.templates.find((t) => t.day === todayName)

  const now = new Date(nowMs)
  const [reminderHour, reminderMinute] = data.settings.reminderTime.split(':').map(Number)
  const reminderMinutes = (Number.isFinite(reminderHour) ? reminderHour : 0) * 60 + (Number.isFinite(reminderMinute) ? reminderMinute : 0)
  const trainedToday = derived.completed.some((s) => s.date === todayIso)
  const showReminder =
    data.settings.remindersEnabled &&
    Boolean(todayTemplate && !todayTemplate.isRestDay) &&
    !trainedToday &&
    now.getHours() * 60 + now.getMinutes() >= reminderMinutes

  const handleStartOrResume = () => {
    if (activeSession) {
      navigate('/workout')
      return
    }
    if (todayTemplate && !todayTemplate.isRestDay) {
      startWorkout(todayTemplate.id, todayTemplate.name, todayTemplate.day)
    } else {
      const first = data.templates.find((t) => !t.isRestDay)
      startWorkout(first?.id ?? null, first?.name ?? 'Custom workout', first?.day ?? todayName)
    }
    navigate('/workout')
  }

  return (
    <div>
      <PageHeader
        title={`${greeting(today)}, ${data.profile.displayName || 'Athlete'}`}
        subtitle={today.toLocaleDateString(undefined, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      />

      {showReminder ? (
        <Notice tone="info" className="mb-4">
          It is past {data.settings.reminderTime} — {todayTemplate?.name} is on today's plan and you have not logged
          it yet.
        </Notice>
      ) : null}

      {/* Hero Action Bar & Quick Actions */}
      <div className="mb-4 flex flex-col gap-2.5">
        <div className="flex flex-col gap-2 sm:flex-row">
          {activeSession ? (
            <Button size="lg" className="w-full sm:w-auto" onClick={handleStartOrResume}>
              <CirclePlay size={20} /> Resume workout
            </Button>
          ) : (
            <Button size="lg" className="w-full sm:w-auto" onClick={handleStartOrResume}>
              <Dumbbell size={20} /> Start {todayTemplate && !todayTemplate.isRestDay ? todayTemplate.name : 'workout'}
            </Button>
          )}
          <Link
            to="/workouts"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 text-base font-semibold text-ink hover:bg-surface2"
          >
            View schedule
          </Link>
        </div>

        {/* Quick action pill shortcuts */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
          <Link
            to="/nutrition"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-muted hover:border-accent hover:text-ink"
          >
            <Utensils size={13} className="text-accent" /> Log Food
          </Link>
          <Link
            to="/body"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-muted hover:border-accent hover:text-ink"
          >
            <Scale size={13} className="text-accent" /> Track Weight
          </Link>
          <Link
            to="/exercises"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-muted hover:border-accent hover:text-ink"
          >
            <BookOpen size={13} className="text-accent" /> Exercise Library
          </Link>
        </div>
      </div>

      {/* Offline AI Coaching Engine Highlight */}
      <CoachingCard
        sessions={data.sessions}
        exercises={allExercises}
        templates={data.templates}
        exercisesById={exercisesById}
        className="mb-4"
      />

      {/* Daily Nutrition & Hydration Glance */}
      <Card className="mb-4">
        <CardHeader
          title="Daily Fuel & Hydration"
          subtitle="Calories, protein, and water targets for today"
          action={
            <Link to="/nutrition" className="text-xs font-bold text-accent hover:underline">
              Open Food Log →
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface2 p-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Calories</span>
              <span className="font-bold text-ink">
                {Math.round(derived.caloriesToday)} / {data.settings.calorieTarget} kcal
              </span>
            </div>
            <Progress
              className="mt-2"
              value={derived.caloriesToday}
              max={data.settings.calorieTarget}
              tone={derived.caloriesToday >= data.settings.calorieTarget ? 'success' : 'accent'}
            />
          </div>

          <div className="rounded-xl border border-line bg-surface2 p-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Protein</span>
              <span className="font-bold text-ink">
                {Math.round(derived.proteinToday)} / {data.settings.proteinTargetG} g
              </span>
            </div>
            <Progress
              className="mt-2"
              value={derived.proteinToday}
              max={data.settings.proteinTargetG}
              tone={derived.proteinToday >= data.settings.proteinTargetG ? 'success' : 'accent'}
            />
          </div>

          <div className="rounded-xl border border-line bg-surface2 p-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="flex items-center gap-1">
                <Droplet size={13} className="text-info" /> Water
              </span>
              <span className="font-bold text-ink">
                {(derived.waterToday / 1000).toFixed(1)} / {(data.settings.waterTargetMl / 1000).toFixed(1)} L
              </span>
            </div>
            <Progress
              className="mt-2"
              value={derived.waterToday}
              max={data.settings.waterTargetMl}
              tone="accent"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat
          label="Current weight"
          value={formatWeightValue(derived.current, unit)}
          sub={derived.current === null ? 'Log your first weight' : `Started ${formatWeightValue(data.profile.startWeightKg, unit)}`}
          icon={<Scale size={16} />}
        />
        <Stat label="Target weight" value={formatWeightValue(data.profile.targetWeightKg, unit)} sub={formatDate(data.profile.targetDate)} icon={<Target size={16} />} />
        <Stat
          label="Change since start"
          value={`${derived.goal.gainedKg >= 0 ? '+' : ''}${formatWeightValue(Math.abs(derived.goal.gainedKg), unit)}`}
          tone={derived.goal.gainedKg > 0 ? 'success' : derived.goal.gainedKg < 0 ? 'danger' : 'default'}
          sub={`${Math.abs(derived.goal.remainingKg).toFixed(1)} ${unit} to go`}
          icon={<TrendingUp size={16} />}
        />
        <Stat
          label="Workout streak"
          value={`${derived.streak.weeks} wk`}
          sub={`${derived.streak.thisWeekCompleted}/${derived.streak.thisWeekPlanned} this week`}
          icon={<Flame size={16} />}
        />
      </div>

      <Card className="mt-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold">Goal progress</h2>
            <p className="text-sm text-muted">
              {derived.goal.direction === 'gain'
                ? 'Building toward your target weight'
                : derived.goal.direction === 'loss'
                  ? 'Cutting toward your target weight'
                  : 'Maintaining weight'}
            </p>
          </div>
          <span className="text-2xl font-extrabold text-accent tabular-nums">{derived.goal.progressPct.toFixed(0)}%</span>
        </div>
        <Progress className="mt-3" value={derived.goal.progressPct} />
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>{formatWeightValue(data.profile.startWeightKg, unit)} start</span>
          <span>{formatWeightValue(data.profile.targetWeightKg, unit)} target</span>
        </div>
        {derived.trend.diverging ? (
          <p className="mt-3 rounded-xl border border-warn/30 bg-warn/10 px-3 py-2 text-xs text-warn">
            Your weight has been flat over the last few weeks. Before raising calories, check that food intake is
            logged consistently, weigh-ins follow the same routine, and recovery is adequate.
          </p>
        ) : null}
      </Card>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardHeader title="This week" subtitle={`Week of ${weekLabel(isoDate(startOfWeek(today)))} · ${derived.thisWeek}/${derived.planned} sessions`} />
          <div className="grid grid-cols-7 gap-1.5">
            {derived.weekDays.map((d) => (
              <div
                key={d.iso}
                className={cn(
                  'flex flex-col items-center rounded-xl border px-1 py-2 text-center',
                  d.done
                    ? 'border-transparent bg-accentsoft'
                    : d.template?.isRestDay
                      ? 'border-line bg-surface2/50'
                      : 'border-line bg-surface2',
                )}
              >
                <span className="text-[10px] font-bold uppercase text-faint">{d.label}</span>
                <span className={cn('mt-0.5 text-sm font-bold', d.done ? 'text-accent' : 'text-ink')}>{d.dayNum}</span>
                <span
                  className={cn(
                    'mt-1 line-clamp-2 text-[9px] leading-tight',
                    d.done ? 'text-accent' : 'text-muted',
                  )}
                >
                  {d.template?.isRestDay ? 'Rest' : (d.template?.name ?? '—')}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Training volume"
            action={
              <Segmented
                size="sm"
                className="w-auto"
                value={rangeDays}
                onChange={setRangeDays}
                options={[
                  { value: '7', label: '7d' },
                  { value: '30', label: '30d' },
                  { value: '90', label: '90d' },
                ]}
              />
            }
          />
          <div className="flex items-end gap-3">
            <span className="text-3xl font-extrabold tabular-nums tracking-tight text-ink">
              {Math.round(derived.volume).toLocaleString()}
            </span>
            <span className="pb-1 text-sm text-muted">kg total working volume</span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Sum of load × reps for completed working sets. Volume across different exercises is not directly
            comparable as a strength measure.
          </p>
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardHeader title="Body weight" subtitle="Weekly averages" />
          {derived.bodyWeightChart.length >= 2 ? (
            <TrendChart
              data={derived.bodyWeightChart}
              xKey="label"
              unit={unit}
              series={[{ key: 'weight', label: 'Weight', color: 'var(--app-accent)' }]}
              domain={['auto', 'auto']}
            />
          ) : (
            <EmptyState
              icon={<Scale size={26} />}
              title="Not enough weigh-ins yet"
              description="Log your body weight on a few different days and your weekly averages will appear here."
              action={
                <Link to="/body" className="text-sm font-semibold text-accent">
                  Log body weight
                </Link>
              }
            />
          )}
        </Card>

        <Card>
          <CardHeader title="Workout consistency" subtitle="Completed vs planned, last 8 weeks" />
          {derived.completed.length ? (
            <BarsChart
              data={derived.completionData}
              xKey="label"
              series={[
                { key: 'Completed', label: 'Completed', color: 'var(--app-accent)' },
                { key: 'Planned', label: 'Planned', color: 'var(--app-surface-3)' },
              ]}
            />
          ) : (
            <EmptyState
              icon={<Flame size={26} />}
              title="No workouts yet"
              description="Finish your first session and your consistency chart will build from real data."
            />
          )}
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardHeader
            title="Personal records"
            subtitle="Actual bests from completed working sets"
            action={
              <Link to="/progress" className="text-xs font-semibold text-accent">
                All records
              </Link>
            }
          />
          {derived.prs.length ? (
            <ul className="space-y-2">
              {derived.prs.slice(0, 5).map((pr) => {
                const exercise = exercisesById.get(pr.exerciseId)
                const isE1rm = pr.kind === 'e1rm'
                const value =
                  isE1rm || pr.kind !== 'maxReps'
                    ? formatWeightValue(pr.weightKg ?? pr.value, unit)
                    : `${pr.value} reps`
                return (
                  <li key={pr.id} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink">{exercise?.name ?? 'Unknown exercise'}</p>
                      <p className="text-xs text-muted">
                        {prKindLabel(pr.kind)}
                        {isE1rm ? ' (estimate)' : ''} · {relativeDay(pr.date)}
                      </p>
                    </div>
                    <Badge tone={prTone(pr.kind)}>{value}</Badge>
                  </li>
                )
              })}
            </ul>
          ) : (
            <EmptyState
              icon={<Trophy size={26} />}
              title="No records yet"
              description="Complete working sets to set your first real personal records."
            />
          )}
        </Card>

        <Card>
          <CardHeader
            title="Recent workouts"
            action={
              <Link to="/workouts" className="text-xs font-semibold text-accent">
                History
              </Link>
            }
          />
          {derived.recent.length ? (
            <ul className="space-y-2">
              {derived.recent.map((s) => {
                const volume = sessionVolumeKg(s, exercisesById)
                const sets = s.sets.filter((x) => x.completed && x.type === 'working').length
                return (
                  <li key={s.id}>
                    <Link
                      to={`/workouts/${s.id}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2 transition-colors hover:border-linestrong"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink">{s.templateName}</p>
                        <p className="text-xs text-muted">
                          {relativeDay(s.date)} · {formatDuration(s.durationSeconds)} · {sets} sets
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <span className="tabular-nums">{Math.round(volume).toLocaleString()} kg</span>
                        <ArrowRight size={15} />
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <EmptyState
              icon={<Dumbbell size={26} />}
              title="No workouts recorded"
              description="Tap Start workout to log your first Push / Pull / Legs session."
            />
          )}
        </Card>
      </div>

      <Card className="mt-3">
        <CardHeader
          title="Protein today"
          action={
            <Link to="/nutrition" className="text-xs font-semibold text-accent">
              Log food
            </Link>
          }
        />
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tabular-nums text-ink">
            {Math.round(derived.proteinToday)}g
            <span className="text-sm font-semibold text-muted"> / {data.settings.proteinTargetG}g</span>
          </span>
          <Progress
            className="flex-1"
            value={derived.proteinToday}
            max={data.settings.proteinTargetG}
            tone={derived.proteinToday >= data.settings.proteinTargetG ? 'success' : 'accent'}
          />
          <Utensils size={18} className="text-faint" />
        </div>
      </Card>
    </div>
  )
}
