import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const axisProps = {
  stroke: 'var(--app-faint)',
  fontSize: 11,
  tickLine: false,
  axisLine: false,
} as const

function TooltipBox({
  active,
  payload,
  label,
  unit,
  valueFormatter,
}: {
  active?: boolean
  payload?: { name?: string; value?: number | string; color?: string; dataKey?: string | number }[]
  label?: string | number
  unit?: string
  valueFormatter?: (value: number, key: string) => string
}) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-2 text-xs shadow-xl">
      {label !== undefined ? <p className="mb-1 font-bold text-ink">{label}</p> : null}
      {payload.map((entry, i) => {
        const value = typeof entry.value === 'number' ? entry.value : Number(entry.value)
        const key = String(entry.dataKey ?? '')
        const text = valueFormatter ? valueFormatter(value, key) : `${value}${unit ? ` ${unit}` : ''}`
        return (
          <p key={i} className="flex items-center gap-2 text-muted">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-ink">{text}</span>
          </p>
        )
      })}
    </div>
  )
}

export interface Series {
  key: string
  label: string
  color: string
}

export function TrendChart({
  data,
  xKey,
  series,
  unit,
  height = 220,
  valueFormatter,
  domain,
}: {
  data: Record<string, string | number | null>[]
  xKey: string
  series: Series[]
  unit?: string
  height?: number
  valueFormatter?: (value: number, key: string) => string
  domain?: [number | 'auto' | 'dataMin', number | 'auto' | 'dataMax']
}) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke="var(--app-line)" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} {...axisProps} />
          <YAxis {...axisProps} domain={domain ?? ['auto', 'auto']} width={44} />
          <Tooltip content={<TooltipBox unit={unit} valueFormatter={valueFormatter} />} />
          {series.map((s) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={2}
              dot={{ r: 2.5, fill: s.color, strokeWidth: 0 }}
              activeDot={{ r: 4 }}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BarsChart({
  data,
  xKey,
  series,
  unit,
  height = 220,
  valueFormatter,
}: {
  data: Record<string, string | number | null>[]
  xKey: string
  series: Series[]
  unit?: string
  height?: number
  valueFormatter?: (value: number, key: string) => string
}) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke="var(--app-line)" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} {...axisProps} />
          <YAxis {...axisProps} width={44} />
          <Tooltip
            cursor={{ fill: 'var(--app-surface-2)' }}
            content={<TooltipBox unit={unit} valueFormatter={valueFormatter} />}
          />
          {series.map((s) => (
            <Bar key={s.key} dataKey={s.key} name={s.label} fill={s.color} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
