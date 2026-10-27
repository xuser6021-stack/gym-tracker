import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CalendarDays, Pencil, Play, Plus, Search } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { Input, Select } from '../components/ui/Input'
import { Segmented } from '../components/ui/Segmented'
import { PageHeader } from '../components/ui/PageHeader'
import { TemplateEditor } from '../components/TemplateEditor'
import { completedSessions } from '../lib/stats'
import { filterSessions } from '../lib/history'
import { sessionVolumeKg } from '../lib/progression'
import { formatDate, formatDuration, relativeDay } from '../lib/format'
import { ExerciseImage } from '../components/exercise/ExerciseImage'
import { WeeklyScheduler } from '../components/workout/WeeklyScheduler'
import { DAYS_OF_WEEK } from '../data/templates'

const PAGE_SIZE = 15

export function Workouts() {
  const { data, exercisesById, startWorkout, addTemplate, updateTemplate } = useApp()
  const navigate = useNavigate()
  const [tab, setTab] = useState<'history' | 'templates'>('history')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [templateFilter, setTemplateFilter] = useState('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const sessions = useMemo(
    () => completedSessions(data.sessions).sort((a, b) => (a.date < b.date ? 1 : -1)),
    [data.sessions],
  )

  const templateNames = useMemo(
    () => [...new Set(sessions.map((s) => s.templateName))].sort((a, b) => a.localeCompare(b)),
    [sessions],
  )

  const filtered = useMemo(
    () =>
      filterSessions(sessions, { query, templateName: templateFilter }, (id) => exercisesById.get(id)?.name),
    [sessions, query, templateFilter, exercisesById],
  )

  const shown = filtered.slice(0, visible)

  return (
    <div>
      <PageHeader title="Workouts" subtitle="Your training history and editable Push / Pull / Legs templates" />

      <Segmented
        className="mb-4"
        value={tab}
        onChange={setTab}
        options={[
          { value: 'history', label: 'History' },
          { value: 'templates', label: 'Templates' },
        ]}
      />

      {tab === 'history' ? (
        sessions.length ? (
          <>
            <div className="mb-3 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
                <Input
                  className="pl-9"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setVisible(PAGE_SIZE)
                  }}
                  placeholder="Search workouts, notes or exercises"
                  aria-label="Search workouts"
                />
              </div>
              <Select
                aria-label="Filter by template"
                className="sm:w-56"
                value={templateFilter}
                onChange={(e) => {
                  setTemplateFilter(e.target.value)
                  setVisible(PAGE_SIZE)
                }}
              >
                <option value="all">All workouts</option>
                {templateNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </div>

            {shown.length ? (
              <div className="space-y-2">
                {shown.map((s) => {
                  const workingSets = s.sets.filter((x) => x.completed && x.type === 'working').length
                  const volume = sessionVolumeKg(s, exercisesById)
                  return (
                    <Link
                      key={s.id}
                      to={`/workouts/${s.id}`}
                      className="block rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-linestrong"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-ink">{s.templateName}</p>
                          <p className="mt-0.5 text-xs text-muted">
                            {formatDate(s.date)} · {relativeDay(s.date)}
                          </p>
                        </div>
                        <Badge tone="accent">{formatDuration(s.durationSeconds)}</Badge>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted">
                        <div className="flex gap-5">
                          <span>
                            <strong className="text-ink">{workingSets}</strong> working sets
                          </span>
                          <span>
                            <strong className="text-ink">{Math.round(volume).toLocaleString()}</strong> kg volume
                          </span>
                        </div>
                        <div className="flex -space-x-1 overflow-hidden">
                          {Array.from(new Set(s.sets.map((x) => x.exerciseId)))
                            .slice(0, 4)
                            .map((exId) => {
                              const ex = exercisesById.get(exId)
                              if (!ex) return null
                              return (
                                <ExerciseImage
                                  key={exId}
                                  exercise={ex}
                                  kind="thumbnail"
                                  compact
                                  className="h-6 w-6 rounded-full border border-surface ring-1 ring-line"
                                />
                              )
                            })}
                        </div>
                      </div>
                    </Link>
                  )
                })}
                {filtered.length > shown.length ? (
                  <Button variant="secondary" className="w-full" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                    Show more ({filtered.length - shown.length} remaining)
                  </Button>
                ) : (
                  <p className="pt-1 text-center text-xs text-faint">
                    {filtered.length} workout{filtered.length === 1 ? '' : 's'}
                  </p>
                )}
              </div>
            ) : (
              <EmptyState
                icon={<Search size={26} />}
                title="No matching workouts"
                description="Try a different search term or clear the template filter."
                action={
                  <button
                    type="button"
                    className="text-sm font-semibold text-accent"
                    onClick={() => {
                      setQuery('')
                      setTemplateFilter('all')
                      setVisible(PAGE_SIZE)
                    }}
                  >
                    Clear filters
                  </button>
                }
              />
            )}
          </>
        ) : (
          <EmptyState
            icon={<CalendarDays size={26} />}
            title="No workouts yet"
            description="Once you finish a session it will appear here with volume, sets and duration."
            action={
              <Link to="/workout" className="text-sm font-semibold text-accent">
                Start a workout
              </Link>
            }
          />
        )
      ) : (
        <div className="space-y-4">
          <WeeklyScheduler
            templates={data.templates}
            onUpdateTemplate={updateTemplate}
            onAddTemplate={addTemplate}
          />

          <div className="space-y-2">
            {DAYS_OF_WEEK.map((day) => {
              const template = data.templates.find((x) => x.day === day)
              if (!template) return null
              return (
                <Card key={template.id}>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-faint">{day}</span>
                      {template.isRestDay ? (
                        <Badge tone="neutral">Rest</Badge>
                      ) : (
                        <Badge tone="accent">{template.exercises.length} exercises</Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-bold text-ink">{template.name}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Button variant="secondary" size="sm" onClick={() => setEditingId(template.id)}>
                      <Pencil size={15} /> Edit
                    </Button>
                    {!template.isRestDay ? (
                      <Button
                        size="sm"
                        onClick={() => {
                          startWorkout(template.id, template.name, template.day)
                          navigate('/workout')
                        }}
                      >
                        <Play size={15} /> Start
                      </Button>
                    ) : null}
                  </div>
                </div>
                {!template.isRestDay ? (
                  <div className="mt-3 flex items-center gap-2 overflow-hidden">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      {template.exercises.slice(0, 5).map((te) => {
                        const ex = exercisesById.get(te.exerciseId)
                        if (!ex) return null
                        return (
                          <ExerciseImage
                            key={te.id}
                            exercise={ex}
                            kind="thumbnail"
                            compact
                            className="h-7 w-7 rounded-full border border-surface ring-1 ring-line"
                          />
                        )
                      })}
                    </div>
                    <p className="min-w-0 truncate text-xs text-muted">
                      {template.exercises
                        .map((te) => exercisesById.get(te.exerciseId)?.name ?? '?')
                        .join(' · ')}
                    </p>
                  </div>
                ) : template.notes ? (
                  <p className="mt-2 text-xs text-muted">{template.notes}</p>
                ) : null}
              </Card>
            )
          })}
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              const template = addTemplate('Custom workout', 'Monday')
              setEditingId(template.id)
            }}
          >
            <Plus size={16} /> New template
          </Button>
          </div>
        </div>
      )}

      <TemplateEditor templateId={editingId} open={editingId !== null} onClose={() => setEditingId(null)} />
    </div>
  )
}
