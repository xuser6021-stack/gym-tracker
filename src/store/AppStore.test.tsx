import { beforeEach, describe, expect, it } from 'vitest'
import { act, render, screen, waitFor } from '@testing-library/react'
import { AppStoreProvider, useApp } from './AppStore'
import { readAppData, writeAppData, listRecoverySnapshots } from '../storage/repositories/appRepository'
import { STORE_ASSETS, STORE_DOCUMENTS, STORE_META, idbClear, idbPut } from '../storage/database'
import { getAssetBlob } from '../storage/repositories/assetRepository'
import { serializeBackup } from '../storage/backup'
import { createInitialData } from '../lib/storage'
import { makeExercise, makeSession, makeSet } from '../test/fixtures'

function Probe() {
  const { status, data, updateProfile } = useApp()
  if (status === 'loading') return <p>loading</p>
  if (status === 'recovery') return <p>recovery</p>
  return (
    <div>
      <p>{data.profile.displayName}</p>
      <p>{data.sessions.map((s) => s.id).join(',')}</p>
      <button type="button" onClick={() => updateProfile({ displayName: 'Renamed' })}>
        Rename
      </button>
    </div>
  )
}

function ImportProbe({ backup }: { backup: string }) {
  const { status, importBackup, data } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  return (
    <div>
      <p>{data.sessions.map((s) => s.id).join(',') || 'none'}</p>
      <button type="button" onClick={() => void importBackup(backup)}>
        Import
      </button>
    </div>
  )
}

function RepeatProbe({ backup }: { backup: string }) {
  const { status, data, importBackup, repeatWorkout } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  const active = data.sessions.find((s) => s.status === 'active')
  return (
    <div>
      <p>{data.sessions.map((s) => s.id).join(',') || 'none'}</p>
      <p data-testid="active-sets">{active ? active.sets.length : 0}</p>
      <p data-testid="active-weight">{active?.sets[0]?.weightKg ?? 'x'}</p>
      <button type="button" onClick={() => void importBackup(backup)}>
        Import
      </button>
      <button type="button" onClick={() => repeatWorkout('done')}>
        Repeat
      </button>
    </div>
  )
}

function NutritionProbe() {
  const { status, data, addFood, copyDayMeals, saveMealTemplate, applyMealTemplate } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  const dayCals = (date: string) =>
    data.nutrition
      .find((d) => d.date === date)
      ?.meals.reduce((s, m) => s + m.items.reduce((a, i) => a + i.calories, 0), 0) ?? 0
  return (
    <div>
      <p data-testid="days">{data.nutrition.map((d) => `${d.date}:${dayCals(d.date)}`).join(',') || 'none'}</p>
      <p data-testid="templates">{data.mealTemplates.map((t) => t.name).join(',') || 'none'}</p>
      <button
        type="button"
        onClick={() =>
          addFood('2026-01-01', 'Lunch', {
            name: 'Rice',
            quantity: '200g',
            calories: 300,
            proteinG: 6,
            carbsG: 60,
            fatG: 2,
            estimated: false,
          })
        }
      >
        Seed
      </button>
      <button type="button" onClick={() => saveMealTemplate('2026-01-01', 'Plan A')}>
        SaveTemplate
      </button>
      <button onClick={() => data.mealTemplates[0] && applyMealTemplate(data.mealTemplates[0].id, '2026-01-02')}>
        Apply
      </button>
      <button type="button" onClick={() => copyDayMeals('2026-01-01', '2026-01-03')}>
        Copy
      </button>
    </div>
  )
}

function WorkoutProbe() {
  const { status, data, startWorkout, discardWorkout, restoreWorkout } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  const describe = (s: (typeof data.sessions)[number]) =>
    `${s.id}:${s.status}:${s.discarded ? 'D' : 'K'}`
  return (
    <div>
      <p data-testid="sessions">{data.sessions.map(describe).join(',') || 'none'}</p>
      <button type="button" onClick={() => startWorkout(null, 'Custom', 'Monday')}>
        Start
      </button>
      <button type="button" onClick={() => data.sessions[0] && discardWorkout(data.sessions[0].id)}>
        Discard
      </button>
      <button type="button" onClick={() => data.sessions[0] && restoreWorkout(data.sessions[0].id)}>
        Restore
      </button>
    </div>
  )
}
function AddSetProbe() {
  const { status, data, startWorkout, addSet } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  const active = data.sessions.find((s) => s.status === 'active')
  const storedWeight = (exerciseId: string) =>
    active?.sets.find((s) => s.exerciseId === exerciseId)?.weightKg ?? 'x'
  const run = () => {
    const session = startWorkout(null, 'Custom', 'Monday')
    const base = { type: 'working' as const, reps: null, completed: false, rir: null, note: '', perSide: false }
    addSet(session.id, { ...base, exerciseId: 'db', weightKg: 30 })
    addSet(session.id, { ...base, exerciseId: 'uni', weightKg: 20, perSide: true })
  }
  return (
    <div>
      <p data-testid="stored">{`${storedWeight('db')},${storedWeight('uni')}`}</p>
      <button type="button" onClick={run}>
        Run
      </button>
    </div>
  )
}

function ExerciseImageProbe() {
  const { status, data, setExerciseImage, removeExerciseImage } = useApp()
  if (status !== 'ready') return <p>{status}</p>
  const target = data.exercises[0]
  const withImage = data.exercises.find((e) => e.mediaAssetId)
  return (
    <div>
      <p data-testid="has-image">{withImage ? 'yes' : 'no'}</p>
      <p data-testid="asset-id">{withImage?.mediaAssetId ?? 'none'}</p>
      <button
        type="button"
        onClick={() =>
          void setExerciseImage(
            target.id,
            new Blob([new Uint8Array([9])], { type: 'image/png' }),
          )
        }
      >
        SetImage
      </button>
      <button
        type="button"
        onClick={() => withImage && void removeExerciseImage(withImage.id)}
      >
        RemoveImage
      </button>
    </div>
  )
}

describe('AppStoreProvider', () => {
  beforeEach(async () => {
    localStorage.clear()
    await idbClear(STORE_DOCUMENTS)
    await idbClear(STORE_META)
    await idbClear(STORE_ASSETS)
  })

  it('hydrates, then persists committed changes to storage', async () => {
    render(
      <AppStoreProvider>
        <Probe />
      </AppStoreProvider>,
    )

    expect(await screen.findByText('Athlete')).toBeInTheDocument()

    await act(async () => {
      screen.getByRole('button', { name: 'Rename' }).click()
    })

    await waitFor(async () => {
      const persisted = await readAppData()
      expect(persisted.data.profile.displayName).toBe('Renamed')
    })
  })

  it('opens recovery mode instead of overwriting unreadable stored data', async () => {
    await idbPut(STORE_DOCUMENTS, {
      key: 'app',
      schemaVersion: 1,
      updatedAt: 0,
      revision: 1,
      writerId: 'other',
      data: { corrupt: true },
    })

    render(
      <AppStoreProvider>
        <Probe />
      </AppStoreProvider>,
    )

    expect(await screen.findByText('recovery')).toBeInTheDocument()
    const doc = await idbGetData()
    expect(doc).toEqual({ corrupt: true })
  })

  it('persists imported data and keeps a pre-import safety copy', async () => {
    const backup = createInitialData()
    backup.sessions = [makeSession({ id: 'imported' })]
    const text = serializeBackup(backup)

    render(
      <AppStoreProvider>
        <ImportProbe backup={text} />
      </AppStoreProvider>,
    )

    expect(await screen.findByText('none')).toBeInTheDocument()

    await act(async () => {
      screen.getByRole('button', { name: 'Import' }).click()
    })

    expect(await screen.findByText('imported')).toBeInTheDocument()
    await waitFor(async () => {
      const persisted = await readAppData()
      expect(persisted.data.sessions.map((s) => s.id)).toEqual(['imported'])
    })
    const snapshots = await listRecoverySnapshots()
    expect(snapshots.some((s) => s.reason === 'pre-import')).toBe(true)
  })

  it('keeps discarded sessions recoverable instead of deleting them', async () => {
    render(
      <AppStoreProvider>
        <WorkoutProbe />
      </AppStoreProvider>,
    )

    expect(await screen.findByText('none')).toBeInTheDocument()

    await act(async () => {
      screen.getByRole('button', { name: 'Start' }).click()
    })
    expect(screen.getByTestId('sessions').textContent).toMatch(/:active:K$/)

    await act(async () => {
      screen.getByRole('button', { name: 'Discard' }).click()
    })
    expect(screen.getByTestId('sessions').textContent).toMatch(/:completed:D$/)

    await act(async () => {
      screen.getByRole('button', { name: 'Restore' }).click()
    })
    expect(screen.getByTestId('sessions').textContent).toMatch(/:active:K$/)
  })

  it('repeats a past workout with the same exercises and weights', async () => {
    const backup = createInitialData()
    backup.sessions = [
      makeSession({
        id: 'done',
        status: 'completed',
        sets: [makeSet({ id: 'a', exerciseId: 'ex-1', weightKg: 50, reps: 8 })],
      }),
    ]

    render(
      <AppStoreProvider>
        <RepeatProbe backup={serializeBackup(backup)} />
      </AppStoreProvider>,
    )

    expect(await screen.findByText('none')).toBeInTheDocument()
    await act(async () => {
      screen.getByRole('button', { name: 'Import' }).click()
    })
    expect(await screen.findByText('done')).toBeInTheDocument()

    await act(async () => {
      screen.getByRole('button', { name: 'Repeat' }).click()
    })
    expect(screen.getByTestId('active-sets').textContent).toBe('1')
    expect(screen.getByTestId('active-weight').textContent).toBe('50')
  })

  it('copies days and round-trips meal templates', async () => {
    render(
      <AppStoreProvider>
        <NutritionProbe />
      </AppStoreProvider>,
    )

    expect(await screen.findByTestId('days')).toHaveTextContent('none')

    await act(async () => {
      screen.getByRole('button', { name: 'Seed' }).click()
    })
    expect(screen.getByTestId('days').textContent).toBe('2026-01-01:300')

    await act(async () => {
      screen.getByRole('button', { name: 'SaveTemplate' }).click()
    })
    expect(screen.getByTestId('templates').textContent).toBe('Plan A')

    await act(async () => {
      screen.getByRole('button', { name: 'Apply' }).click()
    })
    expect(screen.getByTestId('days').textContent).toContain(':300')

    await act(async () => {
      screen.getByRole('button', { name: 'Copy' }).click()
    })
    const days = screen.getByTestId('days').textContent ?? ''
    expect(days).toContain('2026-01-01:300')
    expect(days).toContain('2026-01-03:300')
  })

  it('normalizes entered weights to per-implement kg per exercise type', async () => {
    const backup = createInitialData()
    backup.settings = { ...backup.settings, dumbbellInput: 'pair' }
    backup.exercises = [
      ...backup.exercises,
      makeExercise({ id: 'db', name: 'DB Curl', equipment: 'Dumbbell' }),
      makeExercise({ id: 'uni', name: 'Cable Row', equipment: 'Cable', unilateral: true }),
    ]
    await writeAppData(backup)

    render(
      <AppStoreProvider>
        <AddSetProbe />
      </AppStoreProvider>,
    )

    await screen.findByTestId('stored')
    await act(async () => {
      screen.getByRole('button', { name: 'Run' }).click()
    })

    // dumbbell pair (30 entered -> 15 per dumbbell); unilateral cable stays 20.
    expect(screen.getByTestId('stored').textContent).toBe('15,20')
  })

  it('stores and clears a custom exercise image blob', async () => {
    render(
      <AppStoreProvider>
        <ExerciseImageProbe />
      </AppStoreProvider>,
    )

    expect(await screen.findByTestId('has-image')).toHaveTextContent('no')

    await act(async () => {
      screen.getByRole('button', { name: 'SetImage' }).click()
    })
    await waitFor(() => expect(screen.getByTestId('has-image')).toHaveTextContent('yes'))

    const assetId = screen.getByTestId('asset-id').textContent ?? ''
    expect(assetId).not.toBe('none')
    expect(await getAssetBlob(assetId)).toBeInstanceOf(Blob)

    await act(async () => {
      screen.getByRole('button', { name: 'RemoveImage' }).click()
    })
    await waitFor(() => expect(screen.getByTestId('has-image')).toHaveTextContent('no'))
    expect(await getAssetBlob(assetId)).toBeUndefined()
  })
})

async function idbGetData(): Promise<unknown> {
  const { idbGet } = await import('../storage/database')
  const doc = await idbGet<{ data: unknown }>(STORE_DOCUMENTS, 'app')
  return doc?.data
}
