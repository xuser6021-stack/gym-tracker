import { useRef, useState } from 'react'
import { Database, Download, Moon, RotateCcw, Sun, Upload } from 'lucide-react'
import type { ReactNode } from 'react'
import { useApp } from '../store/AppStore'
import type { IntegrityReport } from '../storage/validation'
import { PageHeader, Notice } from '../components/ui/PageHeader'
import { Card, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input, Select } from '../components/ui/Input'
import { Field } from '../components/ui/Field'
import { Segmented } from '../components/ui/Segmented'
import { Switch } from '../components/ui/Switch'
import { StorageStatus } from '../components/StorageStatus'
import { downloadFile, measurementsCSV, workoutsCSV } from '../lib/csv'
import { backupFilename, MAX_IMPORT_BYTES } from '../storage/backup'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'

function SettingRow({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{title}</p>
        {description ? <p className="text-xs text-muted">{description}</p> : null}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

export function SettingsPage() {
  const {
    data,
    storageMode,
    storageNotices,
    dismissStorageNotices,
    updateProfile,
    updateSettings,
    resetAll,
    backupJson,
    importBackup,
    resetExerciseLibrary,
    lastError,
    clearError,
    restoreWorkout,
    deleteSession,
  } = useApp()
  const fileRef = useRef<HTMLInputElement>(null)
  const [importMsg, setImportMsg] = useState<{ tone: 'success' | 'danger'; text: string } | null>(null)
  const [confirmReset, setConfirmReset] = useState(false)
  const [confirmLibrary, setConfirmLibrary] = useState(false)
  const [purgeTarget, setPurgeTarget] = useState<string | null>(null)

  const { profile, settings } = data
  const discarded = data.sessions.filter((s) => s.discarded)

  const describeReport = (report?: IntegrityReport): string => {
    if (!report) return ''
    const notes = [...report.repairs, ...report.warnings]
    return notes.length ? ` ${notes.join(' ')}` : ''
  }

  const handleImportFile = async (file: File) => {
    clearError()
    if (file.size > MAX_IMPORT_BYTES) {
      setImportMsg({
        tone: 'danger',
        text: `That file is too large (max ${Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB).`,
      })
      return
    }
    let text: string
    try {
      text = await file.text()
    } catch {
      setImportMsg({ tone: 'danger', text: 'The file could not be read.' })
      return
    }
    const result = await importBackup(text)
    if (result.ok) {
      setImportMsg({ tone: 'success', text: `Backup restored.${describeReport(result.report)}` })
    } else {
      setImportMsg({ tone: 'danger', text: result.error ?? 'Could not import this file.' })
    }
  }

  return (
    <div>
      <PageHeader title="Settings" subtitle="Profile, units, targets and your data" />

      {lastError ? (
        <Notice tone="danger" className="mb-4" icon={<span>!</span>}>
          {lastError}
          <button type="button" onClick={clearError} className="ml-2 font-semibold underline">
            Dismiss
          </button>
        </Notice>
      ) : null}
      {importMsg ? (
        <Notice tone={importMsg.tone} className="mb-4">
          {importMsg.text}
        </Notice>
      ) : null}

      <div className="space-y-4">
        <Card>
          <CardHeader title="Profile" subtitle="Used to personalise targets and analytics" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name" htmlFor="s-name">
              <Input
                id="s-name"
                value={profile.displayName}
                onChange={(e) => updateProfile({ displayName: e.target.value })}
              />
            </Field>
            <Field label="Goal" htmlFor="s-goal">
              <Input value={profile.goal} onChange={(e) => updateProfile({ goal: e.target.value })} id="s-goal" />
            </Field>
            <Field label="Age" htmlFor="s-age">
              <Input
                id="s-age"
                type="number"
                inputMode="numeric"
                value={profile.age}
                onChange={(e) => updateProfile({ age: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Height (cm)" htmlFor="s-height">
              <Input
                id="s-height"
                type="number"
                inputMode="numeric"
                value={profile.heightCm}
                onChange={(e) => updateProfile({ heightCm: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Start weight (kg)" htmlFor="s-startw">
              <Input
                id="s-startw"
                type="number"
                inputMode="decimal"
                value={profile.startWeightKg}
                onChange={(e) => updateProfile({ startWeightKg: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Target weight (kg)" htmlFor="s-targetw">
              <Input
                id="s-targetw"
                type="number"
                inputMode="decimal"
                value={profile.targetWeightKg}
                onChange={(e) => updateProfile({ targetWeightKg: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Target date" htmlFor="s-targetdate">
              <Input
                id="s-targetdate"
                type="date"
                value={profile.targetDate}
                onChange={(e) => updateProfile({ targetDate: e.target.value })}
              />
            </Field>
            <Field label="Sessions per week" htmlFor="s-split">
              <Select
                id="s-split"
                value={profile.split}
                onChange={(e) => updateProfile({ split: e.target.value })}
              >
                <option value="PPL 6-day">PPL 6-day</option>
                <option value="PPL 5-day">PPL 5-day</option>
                <option value="Upper/Lower 4-day">Upper/Lower 4-day</option>
                <option value="Full body 3-day">Full body 3-day</option>
              </Select>
            </Field>
          </div>
        </Card>

        <Card>
          <CardHeader title="Units & appearance" />
          <SettingRow title="Weight unit" description="Applied across the whole app">
            <Segmented
              className="w-40"
              value={settings.units.weight}
              onChange={(v) => updateSettings({ units: { ...settings.units, weight: v } })}
              options={[
                { value: 'kg', label: 'kg' },
                { value: 'lb', label: 'lb' },
              ]}
            />
          </SettingRow>
          <SettingRow title="Length unit" description="Measurements and body check-ins">
            <Segmented
              className="w-40"
              value={settings.units.length}
              onChange={(v) => updateSettings({ units: { ...settings.units, length: v } })}
              options={[
                { value: 'cm', label: 'cm' },
                { value: 'in', label: 'in' },
              ]}
            />
          </SettingRow>
          <SettingRow title="Theme">
            <Segmented
              className="w-44"
              value={settings.theme}
              onChange={(v) => updateSettings({ theme: v })}
              options={[
                { value: 'dark', label: <span className="flex items-center gap-1.5"><Moon size={14} /> Dark</span> },
                { value: 'light', label: <span className="flex items-center gap-1.5"><Sun size={14} /> Light</span> },
              ]}
            />
          </SettingRow>
          <SettingRow title="Dumbbell input" description="How you enter dumbbell weights">
            <Select
              className="w-44"
              value={settings.dumbbellInput}
              onChange={(e) => updateSettings({ dumbbellInput: e.target.value as 'each' | 'pair' })}
            >
              <option value="each">Per dumbbell</option>
              <option value="pair">Pair total</option>
            </Select>
          </SettingRow>
        </Card>

        <Card>
          <CardHeader title="Training & nutrition targets" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Default rest (seconds)" htmlFor="s-rest">
              <Input
                id="s-rest"
                type="number"
                inputMode="numeric"
                value={settings.defaultRestSeconds}
                onChange={(e) => updateSettings({ defaultRestSeconds: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Calorie target (kcal)" htmlFor="s-cal">
              <Input
                id="s-cal"
                type="number"
                inputMode="numeric"
                value={settings.calorieTarget}
                onChange={(e) => updateSettings({ calorieTarget: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Protein target (g)" htmlFor="s-prot">
              <Input
                id="s-prot"
                type="number"
                inputMode="numeric"
                value={settings.proteinTargetG}
                onChange={(e) => updateSettings({ proteinTargetG: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Water target (ml)" htmlFor="s-water">
              <Input
                id="s-water"
                type="number"
                inputMode="numeric"
                value={settings.waterTargetMl}
                onChange={(e) => updateSettings({ waterTargetMl: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Target gain (kg/week)" htmlFor="s-gain" hint="A lean bulk is usually 0.25–0.5 kg/week">
              <Input
                id="s-gain"
                type="number"
                step="0.05"
                inputMode="decimal"
                value={settings.targetGainRateKgPerWeek}
                onChange={(e) => updateSettings({ targetGainRateKgPerWeek: Number(e.target.value) || 0 })}
              />
            </Field>
            <Field label="Min sessions for streak" htmlFor="s-streak">
              <Input
                id="s-streak"
                type="number"
                inputMode="numeric"
                value={settings.minSessionsForStreak}
                onChange={(e) => updateSettings({ minSessionsForStreak: Number(e.target.value) || 0 })}
              />
            </Field>
          </div>
        </Card>

        <Card>
          <CardHeader title="Reminders & notifications" />
          <SettingRow title="Rest timer sound" description="Play a chime when the rest timer finishes">
            <Switch checked={settings.notifyRestTimer} onChange={(v) => updateSettings({ notifyRestTimer: v })} />
          </SettingRow>
          <SettingRow title="Personal record alerts" description="Highlight new PRs at the end of a workout">
            <Switch checked={settings.notifyPrs} onChange={(v) => updateSettings({ notifyPrs: v })} />
          </SettingRow>
          <SettingRow title="Workout reminders" description="A gentle nudge on planned training days">
            <Switch checked={settings.remindersEnabled} onChange={(v) => updateSettings({ remindersEnabled: v })} />
          </SettingRow>
          {settings.remindersEnabled ? (
            <SettingRow title="Reminder time">
              <Input
                type="time"
                className="w-32"
                value={settings.reminderTime}
                onChange={(e) => updateSettings({ reminderTime: e.target.value })}
              />
            </SettingRow>
          ) : null}
        </Card>

        <Card>
          <CardHeader title="Data" subtitle="Everything is stored locally on this device" />
          <p className="mb-3 flex items-center justify-between text-xs text-muted">
            <span className="flex items-center gap-2">
              <Database size={14} />
              {storageMode === 'indexeddb'
                ? 'Durable browser database (IndexedDB)'
                : storageMode === 'localstorage'
                  ? 'Browser local storage (reduced capacity)'
                  : 'Temporary in-memory storage — changes may not persist'}
            </span>
            <StorageStatus />
          </p>
          {storageNotices.length ? (
            <Notice tone="info" className="mb-3">
              <span>{storageNotices.join(' ')}</span>
              <button onClick={dismissStorageNotices} className="ml-2 font-semibold underline">
                Dismiss
              </button>
            </Notice>
          ) : null}
          {importMsg ? (
            <Notice tone={importMsg.tone} className="mb-3">
              {importMsg.text}
            </Notice>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              onClick={() => downloadFile(backupFilename(), backupJson(), 'application/json')}
            >
              <Download size={16} /> Export backup
            </Button>
            <Button variant="secondary" onClick={() => fileRef.current?.click()}>
              <Upload size={16} /> Import backup
            </Button>
            <Button
              variant="secondary"
              onClick={() => downloadFile('irontrack-workouts.csv', workoutsCSV(data.sessions, settings.units))}
            >
              <Download size={16} /> Workouts CSV
            </Button>
            <Button
              variant="secondary"
              onClick={() => downloadFile('irontrack-measurements.csv', measurementsCSV(data.measurements, settings.units))}
            >
              <Download size={16} /> Measurements CSV
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) void handleImportFile(file)
                e.target.value = ''
              }}
            />
          </div>
        </Card>

        {discarded.length ? (
          <Card>
            <CardHeader
              title="Recoverable workouts"
              subtitle="Discarded sessions are kept here until you delete them for good"
            />
            <ul className="space-y-2">
              {discarded.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-ink">{s.templateName}</span>
                    <span className="block text-xs text-muted">
                      {new Date(s.startedAt).toLocaleDateString()} ·{' '}
                      {s.sets.filter((x) => x.completed).length} sets logged
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1">
                    <Button variant="secondary" size="sm" onClick={() => restoreWorkout(s.id)}>
                      Restore
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-danger hover:bg-dangersoft"
                      onClick={() => setPurgeTarget(s.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        <Card>
          <CardHeader title="Reset" subtitle="Destructive actions — read carefully" />
          <SettingRow
            title="Restore exercise library"
            description="Re-add the default PPL exercises. Custom exercises are kept."
          >
            <Button variant="secondary" size="sm" onClick={() => setConfirmLibrary(true)}>
              <RotateCcw size={15} /> Restore
            </Button>
          </SettingRow>
          <SettingRow title="Erase all data" description="Delete profile, workouts, measurements and nutrition">
            <Button variant="danger" size="sm" onClick={() => setConfirmReset(true)}>
              Erase
            </Button>
          </SettingRow>
        </Card>
      </div>

      <ConfirmDialog
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        onConfirm={() => {
          void resetAll()
          setImportMsg(null)
        }}
        title="Erase all data?"
        description="This permanently deletes everything on this device, including workouts, PRs and measurements. This cannot be undone."
        confirmLabel="Erase everything"
        destructive
        requireText="RESET"
      />

      <ConfirmDialog
        open={confirmLibrary}
        onClose={() => setConfirmLibrary(false)}
        onConfirm={resetExerciseLibrary}
        title="Restore default exercises?"
        description="Adds back any missing seed exercises. Your custom exercises and history are preserved."
        confirmLabel="Restore library"
      />

      <ConfirmDialog
        open={purgeTarget !== null}
        onClose={() => setPurgeTarget(null)}
        onConfirm={() => {
          if (purgeTarget) deleteSession(purgeTarget)
          setPurgeTarget(null)
        }}
        title="Delete this workout?"
        description="This permanently removes the discarded session. This cannot be undone."
        confirmLabel="Delete permanently"
        destructive
      />
    </div>
  )
}
