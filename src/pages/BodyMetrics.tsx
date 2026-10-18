import { useMemo, useState } from 'react'
import { Download, Pencil, Plus, Ruler, Target, Trash, TrendingUp } from 'lucide-react'
import type { BodyMeasurement } from '../types'
import { useApp } from '../store/AppStore'
import { PageHeader, Notice } from '../components/ui/PageHeader'
import { Card, CardHeader } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { Select } from '../components/ui/Input'
import { Stat } from '../components/ui/Stat'
import { Progress } from '../components/ui/Progress'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'
import { MeasurementDialog } from '../components/MeasurementDialog'
import { TrendChart } from '../components/charts/Charts'
import { convertWeightValue, formatWeightValue } from '../lib/display'
import { displayLength, lengthLabel, weightLabel } from '../lib/units'
import { goalProgress, sortedWeights, weeklyWeightAverages, weightTrend } from '../lib/stats'
import { measurementsCSV, downloadFile } from '../lib/csv'
import { formatDate } from '../lib/format'

const LENGTH_METRICS = [
  { key: 'waistCm', label: 'Waist' },
  { key: 'chestCm', label: 'Chest' },
  { key: 'armCm', label: 'Arm' },
  { key: 'thighCm', label: 'Thigh' },
  { key: 'hipCm', label: 'Hip' },
] as const

const PAGE_SIZE = 15

type MetricKey = 'weight' | (typeof LENGTH_METRICS)[number]['key']

export function BodyMetrics() {
  const { data, deleteMeasurement } = useApp()
  const { weight: wUnit, length: lUnit } = data.settings.units
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<BodyMeasurement | null>(null)
  const [metric, setMetric] = useState<MetricKey>('weight')
  const [confirmDelete, setConfirmDelete] = useState<BodyMeasurement | null>(null)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const entries = useMemo(
    () => [...data.measurements].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [data.measurements],
  )
  const latest = useMemo(() => {
    const w = sortedWeights(data.measurements)
    return w.length ? w[w.length - 1].weightKg : null
  }, [data.measurements])

  const goal = goalProgress(data.profile.startWeightKg, data.profile.targetWeightKg, latest)
  const trend = weightTrend(data.measurements, data.profile.targetWeightKg, data.settings.targetGainRateKgPerWeek)
  const weekly = useMemo(() => weeklyWeightAverages(data.measurements), [data.measurements])

  const weightChartData = useMemo(
    () =>
      weekly.map((w) => ({
        label: w.label,
        weight: convertWeightValue(w.averageKg, wUnit),
        target: convertWeightValue(data.profile.targetWeightKg, wUnit),
      })),
    [weekly, wUnit, data.profile.targetWeightKg],
  )

  const metricChartData = useMemo(() => {
    if (metric === 'weight') return weightChartData
    const pts = data.measurements
      .filter((m) => m[metric] !== null)
      .slice()
      .sort((a, b) => (a.date < b.date ? -1 : 1))
    return pts.map((m) => ({
      label: formatDate(m.date).replace(/,.*$/, ''),
      value: displayLength(m[metric] as number, lUnit) ?? 0,
    }))
  }, [metric, data.measurements, weightChartData, lUnit])

  const openDialog = (existing: BodyMeasurement | null) => {
    setEditing(existing)
    setDialogOpen(true)
  }

  const metricLabel = metric === 'weight' ? `Weight (${weightLabel(wUnit)})` : `${LENGTH_METRICS.find((m) => m.key === metric)?.label} (${lengthLabel(lUnit)})`

  return (
    <div>
      <PageHeader
        title="Body"
        subtitle="Track weight and measurements to verify your lean-bulk progress"
        action={
          <Button onClick={() => openDialog(null)}>
            <Plus size={16} /> <span className="hidden sm:inline">Log</span>
          </Button>
        }
      />

      {entries.length === 0 ? (
        <EmptyState
          icon={<Ruler size={26} />}
          title="No check-ins yet"
          description="Log your first weight and measurements to start tracking your goal toward 60 kg."
          action={<Button onClick={() => openDialog(null)}>Log body check-in</Button>}
        />
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat
              label="Current"
              value={formatWeightValue(latest, wUnit)}
              sub={`${goal.gainedKg >= 0 ? '+' : ''}${formatWeightValue(goal.gainedKg, wUnit)} since start`}
              tone="accent"
            />
            <Stat
              label="Target"
              value={formatWeightValue(data.profile.targetWeightKg, wUnit)}
              sub={`${formatWeightValue(Math.abs(goal.remainingKg), wUnit)} ${goal.remainingKg > 0 ? 'to gain' : 'to lose'}`}
            />
            <Stat
              label="Trend"
              value={trend.slopeKgPerWeek === null ? '—' : `${formatWeightValue(trend.slopeKgPerWeek, wUnit)}/wk`}
              icon={<TrendingUp size={16} />}
              tone={trend.diverging ? 'danger' : 'default'}
              sub={trend.slopeKgPerWeek === null ? 'needs more data' : undefined}
            />
            <Stat label="Check-ins" value={entries.length} icon={<Ruler size={16} />} sub="logged" />
          </div>

          <Card>
            <CardHeader
              title="Goal progress"
              subtitle={`${formatWeightValue(goal.startWeightKg, wUnit)} → ${formatWeightValue(goal.targetWeightKg, wUnit)}`}
              action={<Badge tone="accent">{Math.round(goal.progressPct)}%</Badge>}
            />
            <Progress value={goal.progressPct} />
            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Target size={15} className="text-accent" />
              {trend.estimatedTargetDate ? (
                <span>
                  At your current rate you reach target around{' '}
                  <strong className="text-ink">{formatDate(trend.estimatedTargetDate)}</strong>.
                </span>
              ) : (
                <span>Log five check-ins over two weeks to project a target date.</span>
              )}
            </div>
            {trend.diverging ? (
              <Notice tone="warn" className="mt-3">
                Your trend is moving away from the target. Review calories and recovery to stay on a lean-bulk pace.
              </Notice>
            ) : null}
          </Card>

          <Card>
            <CardHeader
              title="Trend"
              subtitle={metric === 'weight' ? 'Weekly average body weight vs target' : 'Measurement over time'}
              action={
                <Select
                  className="h-9 w-36"
                  value={metric}
                  onChange={(e) => setMetric(e.target.value as MetricKey)}
                  aria-label="Choose metric"
                >
                  <option value="weight">Weight</option>
                  {LENGTH_METRICS.map((m) => (
                    <option key={m.key} value={m.key}>
                      {m.label}
                    </option>
                  ))}
                </Select>
              }
            />
            {metricChartData.length >= 2 ? (
              metric === 'weight' ? (
                <TrendChart
                  data={metricChartData}
                  xKey="label"
                  unit={wUnit}
                  valueFormatter={(v) => `${Number(v.toFixed(1))} ${wUnit}`}
                  series={[
                    { key: 'weight', label: 'Avg weight', color: 'var(--app-accent)' },
                    { key: 'target', label: 'Target', color: 'var(--app-faint)' },
                  ]}
                />
              ) : (
                <TrendChart
                  data={metricChartData}
                  xKey="label"
                  unit={lUnit}
                  valueFormatter={(v) => `${Number(v.toFixed(1))} ${lUnit}`}
                  series={[{ key: 'value', label: metricLabel, color: 'var(--app-info)' }]}
                />
              )
            ) : (
              <p className="text-sm text-muted">Add at least two entries for this metric to see a trend.</p>
            )}
          </Card>

          <Card>
            <CardHeader
              title="Check-in history"
              action={
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => downloadFile('irontrack-measurements.csv', measurementsCSV(data.measurements, data.settings.units))}
                >
                  <Download size={15} /> CSV
                </Button>
              }
            />
            <ul className="space-y-2">
              {entries.slice(0, visible).map((m) => (
                <li key={m.id} className="rounded-xl border border-line bg-surface2 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ink">{formatDate(m.date)}</p>
                      <p className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted">
                        {m.weightKg !== null ? <span>⚖ {formatWeightValue(m.weightKg, wUnit)}</span> : null}
                        {LENGTH_METRICS.map((f) => {
                          const v = displayLength(m[f.key] as number | null, lUnit)
                          return v === null ? null : (
                            <span key={f.key}>
                              {f.label} {Number(v.toFixed(1))} {lengthLabel(lUnit)}
                            </span>
                          )
                        })}
                      </p>
                      {m.note ? <p className="mt-1 text-xs text-faint">{m.note}</p> : null}
                    </div>
                    <div className="flex shrink-0 gap-0.5">
                      <button
                        type="button"
                        aria-label="Edit entry"
                        onClick={() => openDialog(m)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-surface3"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        type="button"
                        aria-label="Delete entry"
                        onClick={() => setConfirmDelete(m)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
                      >
                        <Trash size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {entries.length > visible ? (
              <Button variant="secondary" className="mt-3 w-full" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Show more ({entries.length - visible} remaining)
              </Button>
            ) : null}
          </Card>
        </div>
      )}

      <MeasurementDialog open={dialogOpen} onClose={() => setDialogOpen(false)} existing={editing} />

      <ConfirmDialog
        open={confirmDelete !== null}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => {
          if (confirmDelete) deleteMeasurement(confirmDelete.id)
        }}
        title="Delete this check-in?"
        description="This removes the entry from your weight trend and history."
        confirmLabel="Delete"
        destructive
      />
    </div>
  )
}
