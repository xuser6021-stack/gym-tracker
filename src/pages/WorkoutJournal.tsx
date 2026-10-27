import { useEffect, useMemo, useState } from 'react'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Info,
  Plus,
  RotateCcw,
  Sliders,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { ExercisePickerDialog } from '../components/ExercisePickerDialog'
import { ExerciseLogger } from '../components/workout/ExerciseLogger'
import { RestTimer } from '../components/workout/RestTimer'
import { TrendChart } from '../components/charts/Charts'
import { buildSuggestion, exerciseHistory, fromStoredWeightDisplay } from '../lib/progression'
import {
  calculateWeeklyMuscleAnalysis,
  DEFAULT_WEEKLY_TARGETS,
  MAJOR_MUSCLE_GROUPS,
} from '../lib/muscleAnalysis'
import { formatDuration } from '../lib/format'
import { todayISODate } from '../lib/id'
import { cn } from '../lib/cn'
import type { SetRecord, WorkoutSession, WorkoutSummary } from '../types'

type JournalTab = 'today' | 'calendar' | 'weekly' | 'progress'

export function WorkoutJournal() {
  const {
    data,
    exercisesById,
    allExercises,
    saveState,
    getOrCreateDailyWorkout,
    reopenWorkout,
    finishWorkout,
    addSet,
    updateSet,
    deleteSet,
    updateSession,
    updateWeeklyMuscleSettings,
  } = useApp()

  const [activeTab, setActiveTab] = useState<JournalTab>('today')
  const [selectedDate, setSelectedDate] = useState<string>(() => todayISODate())
  const [pickerOpen, setPickerOpen] = useState(false)
  const [summaryDialog, setSummaryDialog] = useState<WorkoutSummary | null>(null)
  const [rest, setRest] = useState<{ runId: number; seconds: number } | null>(null)
  const [showRest, setShowRest] = useState(true)

  // Target editing state for weekly report
  const [editingTargets, setEditingTargets] = useState(false)

  // Progress tab selected exercise
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('ex_barbell_bench_press')

  const unit = data.settings.units.weight
  const isToday = selectedDate === todayISODate()

  // Find or create daily session using useEffect so commit() is not executed during render
  const existingSession = useMemo(() => {
    return data.sessions.find((s) => s.date === selectedDate && !s.discarded)
  }, [data.sessions, selectedDate])

  const [createdSession, setCreatedSession] = useState<WorkoutSession | null>(null)

  useEffect(() => {
    if (!existingSession) {
      const created = getOrCreateDailyWorkout(selectedDate)
      setCreatedSession(created)
    } else {
      setCreatedSession(null)
    }
  }, [existingSession, getOrCreateDailyWorkout, selectedDate])

  const currentSession = existingSession ?? createdSession

  // Group sets by exercise for currentSession
  const sessionExerciseGroups = useMemo(() => {
    if (!currentSession) return []
    const map = new Map<string, { exerciseId: string; supersetGroup?: string }>()
    for (const s of currentSession.sets) {
      if (!map.has(s.exerciseId)) {
        map.set(s.exerciseId, { exerciseId: s.exerciseId, supersetGroup: s.supersetGroup })
      }
    }
    return Array.from(map.values())
  }, [currentSession])

  const handleToggleSet = (set: SetRecord, next: boolean, restSeconds?: number) => {
    if (!currentSession) return
    updateSet(currentSession.id, set.id, { completed: next })
    if (next) {
      const seconds = restSeconds ?? data.settings.defaultRestSeconds
      setRest((prev) => ({ runId: (prev?.runId ?? 0) + 1, seconds }))
      setShowRest(true)
    }
  }

  const handleAddExerciseToDay = (exerciseId: string) => {
    if (!currentSession) return
    const exercise = exercisesById.get(exerciseId)
    // Add default 3 working sets
    for (let i = 0; i < 3; i++) {
      addSet(currentSession.id, {
        exerciseId,
        type: 'working',
        weightKg: null,
        reps: null,
        completed: false,
        rir: null,
        note: '',
        perSide: exercise?.unilateral ?? false,
      })
    }
    setPickerOpen(false)
  }

  const handleFinishToday = () => {
    if (!currentSession) return
    const elapsed = currentSession.durationSeconds || 3600
    const summary = finishWorkout(currentSession.id, elapsed)
    if (summary) {
      setSummaryDialog(summary)
    }
  }

  // Weekly muscle analysis for the week of selectedDate
  const weeklyAnalysis = useMemo(() => {
    return calculateWeeklyMuscleAnalysis(
      data.sessions,
      exercisesById,
      selectedDate,
      data.weeklyMuscleSettings,
      todayISODate(),
    )
  }, [data.sessions, exercisesById, selectedDate, data.weeklyMuscleSettings])

  // Exercise history for Progress section
  const progressHistory = useMemo(() => {
    const ex = exercisesById.get(selectedExerciseId)
    return exerciseHistory(data.sessions, selectedExerciseId, ex)
  }, [data.sessions, selectedExerciseId, exercisesById])

  const progressChartData = useMemo(() => {
    return [...progressHistory]
      .reverse()
      .map((h) => ({
        date: h.date.slice(5),
        weight: Number(fromStoredWeightDisplay(h.topWeightKg, unit, exercisesById.get(selectedExerciseId), data.settings)?.toFixed(1)),
        reps: h.bestReps,
        e1rm: h.e1rm ? Number(fromStoredWeightDisplay(h.e1rm, unit, exercisesById.get(selectedExerciseId), data.settings)?.toFixed(1)) : null,
      }))
  }, [progressHistory, selectedExerciseId, exercisesById, unit, data.settings])

  // Calendar dates generation
  const calendarDays = useMemo(() => {
    const [y, m] = selectedDate.split('-').map(Number)
    const firstDay = new Date(y, m - 1, 1)
    const lastDay = new Date(y, m, 0)
    const totalDays = lastDay.getDate()
    const startWeekday = (firstDay.getDay() + 6) % 7 // Monday = 0

    const days: { dateStr: string; dayNum: number; session?: (typeof data.sessions)[0] }[] = []
    for (let i = 0; i < startWeekday; i++) {
      days.push({ dateStr: '', dayNum: 0 })
    }
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      const session = data.sessions.find((s) => s.date === dateStr && !s.discarded)
      days.push({ dateStr, dayNum: d, session })
    }
    return days
  }, [selectedDate, data.sessions])

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-20">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-ink">Workout Journal</h1>
          <p className="mt-0.5 text-xs text-muted">
            Track daily workouts, view previous performance, and analyze weekly muscle distribution.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl border border-line bg-surface p-1">
          <button
            type="button"
            onClick={() => setActiveTab('today')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-xs font-bold transition-colors',
              activeTab === 'today' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-ink',
            )}
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-xs font-bold transition-colors',
              activeTab === 'calendar' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-ink',
            )}
          >
            Calendar
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('weekly')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-xs font-bold transition-colors',
              activeTab === 'weekly' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-ink',
            )}
          >
            Weekly Report
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('progress')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-xs font-bold transition-colors',
              activeTab === 'progress' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-ink',
            )}
          >
            Progress
          </button>
        </div>
      </div>

      {/* TAB 1: TODAY / DAILY JOURNAL */}
      {activeTab === 'today' && currentSession && (
        <div className="space-y-4">
          {/* Daily Journal Card */}
          <Card>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon size={18} className="text-accent" />
                <span className="text-sm font-bold text-ink">
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                {isToday && (
                  <span className="rounded-md bg-accentsoft px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-accent">
                    Today
                  </span>
                )}
                <span
                  className={cn(
                    'rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide',
                    currentSession.status === 'completed'
                      ? 'bg-success/15 text-success'
                      : 'bg-warn/15 text-warn',
                  )}
                >
                  {currentSession.status === 'completed' ? 'Completed' : 'Draft / Active'}
                </span>
              </div>

              {/* Date navigator */}
              <div className="flex items-center gap-1.5">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => e.target.value && setSelectedDate(e.target.value)}
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs font-semibold text-ink"
                />
                {!isToday && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedDate(todayISODate())}
                    className="h-8 text-xs font-bold"
                  >
                    Go to Today
                  </Button>
                )}
              </div>
            </div>

            {/* Workout Notes */}
            <div className="mt-3">
              <Textarea
                value={currentSession.notes}
                onChange={(e) => updateSession(currentSession.id, { notes: e.target.value })}
                placeholder="Workout notes, sleep, energy level, or warm-up notes…"
                rows={2}
                className="text-xs"
              />
            </div>
          </Card>

          {/* Rest Timer */}
          {rest && showRest && (
            <RestTimer
              runId={rest.runId}
              durationSeconds={rest.seconds}
              onClose={() => setShowRest(false)}
              onComplete={() => setRest(null)}
              soundEnabled={data.settings.notifyRestTimer}
            />
          )}

          {/* Exercise list */}
          {sessionExerciseGroups.length === 0 ? (
            <Card className="py-12 text-center">
              <Dumbbell size={36} className="mx-auto text-faint" />
              <h3 className="mt-3 text-base font-bold text-ink">No exercises logged for this date</h3>
              <p className="mx-auto mt-1 max-w-sm text-xs text-muted">
                Start logging your workout. Every exercise displays your previous performance as a helpful guide.
              </p>
              <Button onClick={() => setPickerOpen(true)} className="mt-4 gap-2">
                <Plus size={16} /> Add Exercise
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {sessionExerciseGroups.map((group) => {
                const exercise = exercisesById.get(group.exerciseId)
                if (!exercise) return null
                const exerciseSets = currentSession.sets.filter((s) => s.exerciseId === group.exerciseId)
                const pastSessions = data.sessions.filter((s: WorkoutSession) => s.id !== currentSession.id)
                const historyList = exerciseHistory(pastSessions, exercise.id, exercise)
                const history = historyList[0] ?? null
                const suggestion = buildSuggestion(exercise, historyList, 8, 12)

                return (
                  <ExerciseLogger
                    key={group.exerciseId}
                    sessionId={currentSession.id}
                    exercise={exercise}
                    prescribed={null}
                    sets={exerciseSets}
                    history={history}
                    suggestion={suggestion}
                    supersetGroup={group.supersetGroup}
                    onToggleComplete={handleToggleSet}
                    onRemove={() => {
                      for (const s of exerciseSets) {
                        deleteSet(currentSession.id, s.id)
                      }
                    }}
                  />
                )
              })}

              <div className="flex justify-center pt-2">
                <Button variant="secondary" onClick={() => setPickerOpen(true)} className="gap-2">
                  <Plus size={16} /> Add Another Exercise
                </Button>
              </div>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="sticky bottom-16 z-20 flex items-center justify-between rounded-2xl border border-line bg-surface/95 p-3.5 shadow-xl backdrop-blur lg:bottom-4">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'h-2.5 w-2.5 rounded-full',
                  saveState === 'saving'
                    ? 'animate-pulse bg-warn'
                    : saveState === 'saved'
                      ? 'bg-success'
                      : 'bg-danger',
                )}
              />
              <span className="text-xs font-semibold text-muted">
                {saveState === 'saving'
                  ? 'Saving…'
                  : saveState === 'saved'
                    ? 'Autosaved locally'
                    : 'Error saving'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentSession.status === 'completed' ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => reopenWorkout(currentSession.id)}
                  className="gap-1.5"
                >
                  <RotateCcw size={14} /> Reopen Workout
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleFinishToday}
                  disabled={currentSession.sets.filter((s: SetRecord) => s.completed).length === 0}
                  className="gap-1.5"
                >
                  Finish Workout
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CALENDAR */}
      {activeTab === 'calendar' && (
        <div className="space-y-4">
          <Card>
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <h2 className="text-base font-bold text-ink">
                {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous month"
                  onClick={() => {
                    const [y, m, d] = selectedDate.split('-').map(Number)
                    const prevM = m === 1 ? 12 : m - 1
                    const prevY = m === 1 ? y - 1 : y
                    setSelectedDate(`${prevY}-${String(prevM).padStart(2, '0')}-${String(d).padStart(2, '0')}`)
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:bg-surface2"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next month"
                  onClick={() => {
                    const [y, m, d] = selectedDate.split('-').map(Number)
                    const nextM = m === 12 ? 1 : m + 1
                    const nextY = m === 12 ? y + 1 : y
                    setSelectedDate(`${nextY}-${String(nextM).padStart(2, '0')}-${String(d).padStart(2, '0')}`)
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:bg-surface2"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Weekday headers */}
            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-bold text-faint">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* Calendar grid */}
            <div className="mt-2 grid grid-cols-7 gap-1">
              {calendarDays.map((cell, idx) => {
                if (!cell.dateStr) {
                  return <div key={`empty-${idx}`} className="h-14 rounded-lg bg-transparent" />
                }
                const isSelected = cell.dateStr === selectedDate
                const isCellToday = cell.dateStr === todayISODate()
                const hasCompleted = cell.session?.status === 'completed'
                const hasDraft = cell.session && cell.session.status !== 'completed' && cell.session.sets.length > 0
                const completedSets = cell.session?.sets.filter((s) => s.completed).length ?? 0

                return (
                  <button
                    key={cell.dateStr}
                    type="button"
                    onClick={() => {
                      setSelectedDate(cell.dateStr)
                      setActiveTab('today')
                    }}
                    className={cn(
                      'flex h-16 flex-col justify-between rounded-xl border p-1.5 text-left transition-colors',
                      isSelected ? 'border-accent bg-accentsoft' : 'border-line bg-surface2 hover:border-linestrong',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          'text-xs font-bold',
                          isCellToday ? 'rounded-full bg-accent px-1.5 py-0.2 text-white' : 'text-ink',
                        )}
                      >
                        {cell.dayNum}
                      </span>
                      {hasCompleted && (
                        <span className="h-2 w-2 rounded-full bg-success" title="Workout completed" />
                      )}
                      {hasDraft && !hasCompleted && (
                        <span className="h-2 w-2 rounded-full bg-warn" title="Unfinished draft" />
                      )}
                    </div>
                    {completedSets > 0 ? (
                      <span className="text-[10px] font-semibold text-muted">
                        {completedSets} set{completedSets !== 1 ? 's' : ''}
                      </span>
                    ) : (
                      <span className="text-[10px] text-faint">Rest</span>
                    )}
                  </button>
                )
              })}
            </div>
          </Card>
        </div>
      )}

      {/* TAB 3: WEEKLY REPORT */}
      {activeTab === 'weekly' && (
        <div className="space-y-4">
          {/* Week Selector Card */}
          <Card>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-ink">
                    Weekly Muscle Analysis ({weeklyAnalysis.weekStart} to {weeklyAnalysis.weekEnd})
                  </h2>
                  {weeklyAnalysis.isCurrentWeek && (
                    <span className="rounded bg-accentsoft px-2 py-0.5 text-[10px] font-bold text-accent">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted">
                  Analyzes completed working sets with primary and secondary synergist contributions.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingTargets((v) => !v)}
                  className="gap-1.5 text-xs font-bold"
                >
                  <Sliders size={14} /> {editingTargets ? 'Close Targets' : 'Adjust Targets'}
                </Button>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Previous week"
                    onClick={() => {
                      const d = new Date(weeklyAnalysis.weekStart)
                      d.setDate(d.getDate() - 7)
                      setSelectedDate(d.toISOString().slice(0, 10))
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:bg-surface2"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next week"
                    onClick={() => {
                      const d = new Date(weeklyAnalysis.weekStart)
                      d.setDate(d.getDate() + 7)
                      setSelectedDate(d.toISOString().slice(0, 10))
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:bg-surface2"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Target Editor Drawer */}
            {editingTargets && (
              <div className="mt-4 rounded-xl border border-line bg-surface2 p-3.5">
                <h3 className="text-xs font-bold text-ink">Configure Weekly Set Targets by Muscle Group</h3>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {MAJOR_MUSCLE_GROUPS.map((mg) => {
                    const currentTarget =
                      data.weeklyMuscleSettings?.targets?.[mg] ?? DEFAULT_WEEKLY_TARGETS[mg]
                    return (
                      <div key={mg} className="space-y-1">
                        <label className="text-[11px] font-semibold text-muted">{mg}</label>
                        <Input
                          type="number"
                          min={0}
                          max={50}
                          value={currentTarget}
                          onChange={(e) =>
                            updateWeeklyMuscleSettings({
                              targets: {
                                ...(data.weeklyMuscleSettings?.targets ?? {}),
                                [mg]: Number(e.target.value) || 0,
                              },
                            })
                          }
                          className="h-8 text-xs font-bold"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Weekly KPI Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Workout Days</p>
                <p className="mt-1 text-xl font-extrabold text-ink">{weeklyAnalysis.totalWorkoutDays}</p>
                <p className="text-[10px] text-muted">Days trained</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Completed Sets</p>
                <p className="mt-1 text-xl font-extrabold text-ink">{weeklyAnalysis.totalCompletedSets}</p>
                <p className="text-[10px] text-muted">Working sets</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Total Reps</p>
                <p className="mt-1 text-xl font-extrabold text-ink">{weeklyAnalysis.totalReps}</p>
                <p className="text-[10px] text-muted">Repetitions completed</p>
              </div>
              <div className="rounded-xl border border-line bg-surface2 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Volume</p>
                <p className="mt-1 text-xl font-extrabold text-ink">
                  {weeklyAnalysis.totalVolumeKg.toLocaleString()} {unit}
                </p>
                <p className="text-[10px] text-muted">Estimated training load</p>
              </div>
            </div>
          </Card>

          {/* Muscle Summary Table */}
          <Card>
            <h3 className="text-sm font-bold text-ink">Muscle Group Volume Summary</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-line text-faint">
                    <th className="pb-2 font-bold uppercase tracking-wider">Muscle Group</th>
                    <th className="pb-2 font-bold uppercase tracking-wider">Direct Sets</th>
                    <th className="pb-2 font-bold uppercase tracking-wider">Secondary</th>
                    <th className="pb-2 font-bold uppercase tracking-wider">Calculated Sets</th>
                    <th className="pb-2 font-bold uppercase tracking-wider">Target</th>
                    <th className="pb-2 font-bold uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {weeklyAnalysis.muscleDistribution.map((item) => (
                    <tr key={item.muscleGroup} className="hover:bg-surface2/50">
                      <td className="py-2.5 font-bold text-ink">{item.muscleGroup}</td>
                      <td className="py-2.5 tabular-nums text-muted">{item.primarySets}</td>
                      <td className="py-2.5 tabular-nums text-muted">{item.secondarySets}</td>
                      <td className="py-2.5 font-bold tabular-nums text-ink">{item.calculatedSets}</td>
                      <td className="py-2.5 tabular-nums text-muted">{item.targetSets}</td>
                      <td className="py-2.5">
                        <span
                          className={cn(
                            'rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                            item.status === 'Optimal'
                              ? 'bg-success/15 text-success'
                              : item.status === 'On Track'
                                ? 'bg-accentsoft text-accent'
                                : item.status === 'Below Target'
                                  ? 'bg-warn/15 text-warn'
                                  : 'bg-surface3 text-faint',
                          )}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Smart Weekly Insights */}
          <Card>
            <h3 className="text-sm font-bold text-ink">Smart Weekly Insights</h3>
            <ul className="mt-3 space-y-2">
              {weeklyAnalysis.insights.map((insight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface2 p-3 text-xs text-ink"
                >
                  <Info size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* TAB 4: PROGRESS */}
      {activeTab === 'progress' && (
        <div className="space-y-4">
          <Card>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-base font-bold text-ink">Exercise Progress &amp; History</h2>
                <p className="mt-0.5 text-xs text-muted">
                  View strength progression, best weight, repetitions, and estimated 1RM.
                </p>
              </div>

              {/* Exercise Selector */}
              <select
                value={selectedExerciseId}
                onChange={(e) => setSelectedExerciseId(e.target.value)}
                className="h-9 rounded-xl border border-line bg-surface2 px-3 text-xs font-bold text-ink"
              >
                {allExercises.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Exercise KPI Snapshot */}
            {progressHistory.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-xl border border-line bg-surface2 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Best Weight</p>
                  <p className="mt-1 text-xl font-extrabold text-ink">
                    {Number(fromStoredWeightDisplay(Math.max(...progressHistory.map((h) => h.topWeightKg)), unit, exercisesById.get(selectedExerciseId), data.settings)?.toFixed(1))} {unit}
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface2 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Best Reps</p>
                  <p className="mt-1 text-xl font-extrabold text-ink">
                    {Math.max(...progressHistory.map((h) => h.bestReps))}
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface2 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Logged Sessions</p>
                  <p className="mt-1 text-xl font-extrabold text-ink">{progressHistory.length}</p>
                </div>
                <div className="rounded-xl border border-line bg-surface2 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Best Est. 1RM</p>
                  <p className="mt-1 text-xl font-extrabold text-ink">
                    {Number(fromStoredWeightDisplay(Math.max(...progressHistory.map((h) => h.e1rm ?? 0)), unit, exercisesById.get(selectedExerciseId), data.settings)?.toFixed(1))} {unit}
                  </p>
                </div>
              </div>
            )}
          </Card>

          {/* Progress Chart */}
          {progressChartData.length > 0 ? (
            <Card>
              <h3 className="text-sm font-bold text-ink">Weight Progression Chart</h3>
              <div className="mt-4">
                <TrendChart
                  data={progressChartData}
                  xKey="date"
                  series={[
                    { key: 'weight', label: `Weight (${unit})`, color: 'var(--app-accent)' },
                    { key: 'e1rm', label: `Est. 1RM (${unit})`, color: '#10b981' },
                  ]}
                  unit={unit}
                />
              </div>
            </Card>
          ) : (
            <Card className="py-12 text-center">
              <TrendingUp size={36} className="mx-auto text-faint" />
              <h3 className="mt-3 text-base font-bold text-ink">No history logged for this exercise</h3>
              <p className="mx-auto mt-1 max-w-sm text-xs text-muted">
                Complete a workout containing this exercise to generate strength progression charts.
              </p>
            </Card>
          )}

          {/* Historical Sessions Table */}
          {progressHistory.length > 0 && (
            <Card>
              <h3 className="text-sm font-bold text-ink">Recent Session Performances</h3>
              <div className="mt-3 divide-y divide-line">
                {progressHistory.slice(0, 10).map((h) => (
                  <div key={h.sessionId} className="flex items-center justify-between py-2.5 text-xs">
                    <div>
                      <span className="font-bold text-ink">{h.date}</span>
                      <p className="text-[11px] text-muted">
                        {h.sets
                          .filter((s) => s.completed)
                          .map((s) => {
                            const w = fromStoredWeightDisplay(s.weightKg, unit, exercisesById.get(selectedExerciseId), data.settings)
                            return `${w === null ? 'BW' : `${Number(w.toFixed(1))}${unit}`}×${s.reps ?? 0}`
                          })
                          .join('  ·  ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-ink">
                        {Number(fromStoredWeightDisplay(h.topWeightKg, unit, exercisesById.get(selectedExerciseId), data.settings)?.toFixed(1))} {unit}
                      </span>
                      <p className="text-[10px] text-faint">Top Load</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Exercise Picker Dialog */}
      <ExercisePickerDialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onPick={handleAddExerciseToDay}
        title="Add Exercise to Daily Journal"
      />

      {/* Workout Finished Summary Modal */}
      {summaryDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-md animate-scale-in text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-success/20 text-success">
              <Trophy size={28} />
            </span>
            <h2 className="mt-4 text-xl font-black text-ink">Workout Completed!</h2>
            <p className="mt-1 text-xs text-muted">
              Great job! Your sets, volume, and weekly muscle distribution have been updated.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-surface2 p-3 text-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Duration</p>
                <p className="mt-0.5 text-sm font-extrabold text-ink">
                  {formatDuration(summaryDialog.durationSeconds)}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Sets</p>
                <p className="mt-0.5 text-sm font-extrabold text-ink">{summaryDialog.completedSets}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Volume</p>
                <p className="mt-0.5 text-sm font-extrabold text-ink">
                  {Math.round(summaryDialog.volumeKg)} {unit}
                </p>
              </div>
            </div>

            <Button onClick={() => setSummaryDialog(null)} className="mt-5 w-full">
              Back to Journal
            </Button>
          </Card>
        </div>
      )}
    </div>
  )
}
