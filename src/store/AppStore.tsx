import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type {
  AppData,
  AppSettings,
  BodyMeasurement,
  Exercise,
  FoodItem,
  Meal,
  MealTemplate,
  NutritionDay,
  SetRecord,
  TemplateExercise,
  UserProfile,
  WorkoutSession,
  WorkoutSummary,
  WorkoutTemplate,
} from '../types'
import { coerceData, createInitialData } from '../lib/storage'
import {
  clearRecoverySnapshot,
  deleteAppData,
  listRecoverySnapshots,
  loadAppData,
  notifyExternalChange,
  readAppData,
  saveRecoverySnapshot,
  snapshotKey,
  subscribeToExternalChanges,
  writeAppData,
  type RecoverySnapshot,
  type StorageMode,
} from '../storage/repositories/appRepository'
import { parseBackupText, serializeBackup } from '../storage/backup'
import { validateAndRepair, type IntegrityReport } from '../storage/validation'
import { uid, todayISODate } from '../lib/id'
import { deleteAsset, isQuotaError, putAsset } from '../storage/repositories/assetRepository'
import { detectSessionPRs } from '../lib/records'
import { setVolumeKg, toStoredWeight } from '../lib/progression'

export interface ImportResult {
  ok: boolean
  error?: string
  report?: IntegrityReport
}

export type SaveState = 'saved' | 'unsaved' | 'saving' | 'error'

interface StoreValue {
  data: AppData
  status: 'loading' | 'ready' | 'recovery'
  recoveryMessage: string | null
  saveState: SaveState
  conflictNotice: boolean
  dismissConflictNotice: () => void
  retryLoad: () => Promise<void>
  recoverySnapshots: RecoverySnapshot[]
  refreshRecoverySnapshots: () => Promise<void>
  restoreSnapshot: (snapshot: RecoverySnapshot) => Promise<ImportResult>
  discardSnapshot: (key: string) => Promise<void>
  storageMode: StorageMode
  storageNotices: string[]
  dismissStorageNotices: () => void
  exercisesById: Map<string, Exercise>
  lastError: string | null
  clearError: () => void

  updateProfile: (patch: Partial<UserProfile>) => void
  updateSettings: (patch: Partial<AppSettings>) => void
  resetAll: () => Promise<void>
  exportBackup: () => AppData
  backupJson: () => string
  importBackup: (raw: string) => Promise<ImportResult>

      addExercise: (input: Omit<Exercise, 'id' | 'isCustom' | 'favorite'>) => Exercise
      updateExercise: (id: string, patch: Partial<Exercise>) => void
      deleteExercise: (id: string) => void
      setExerciseImage: (exerciseId: string, blob: Blob) => Promise<{ ok: boolean; error?: string }>
      removeExerciseImage: (exerciseId: string) => Promise<void>
  toggleFavorite: (id: string) => void
  resetExerciseLibrary: () => void

  addTemplate: (name: string, day: string) => WorkoutTemplate
  updateTemplate: (id: string, patch: Partial<WorkoutTemplate>) => void
  deleteTemplate: (id: string) => void
  addExerciseToTemplate: (templateId: string, exerciseId: string) => void
  updateTemplateExercise: (templateId: string, teId: string, patch: Partial<TemplateExercise>) => void
  removeTemplateExercise: (templateId: string, teId: string) => void
  moveTemplateExercise: (templateId: string, teId: string, direction: -1 | 1) => void

  activeSession: WorkoutSession | undefined
  startWorkout: (templateId: string | null, name: string, dayLabel: string) => WorkoutSession
  repeatWorkout: (sessionId: string) => WorkoutSession | null
  updateSession: (id: string, patch: Partial<WorkoutSession>) => void
  addSet: (sessionId: string, input: Omit<SetRecord, 'id' | 'sortOrder'>) => SetRecord
  updateSet: (sessionId: string, setId: string, patch: Partial<SetRecord>) => void
  deleteSet: (sessionId: string, setId: string) => void
  setExerciseSuperset: (sessionId: string, exerciseId: string, group: string | null) => void
  finishWorkout: (sessionId: string, durationSeconds: number) => WorkoutSummary | null
  discardWorkout: (sessionId: string) => void
  restoreWorkout: (sessionId: string) => void
  deleteSession: (sessionId: string) => void

  addMeasurement: (input: Omit<BodyMeasurement, 'id'>) => void
  updateMeasurement: (id: string, patch: Partial<BodyMeasurement>) => void
  deleteMeasurement: (id: string) => void

  getNutritionDay: (date: string) => NutritionDay
  addFood: (date: string, mealName: string, item: Omit<FoodItem, 'id'>) => void
  deleteFood: (date: string, mealName: string, itemId: string) => void
  addMeal: (date: string, name: string) => void
  updateWater: (date: string, waterMl: number) => void
  copyDayMeals: (fromDate: string, toDate: string) => void
  saveMealTemplate: (date: string, name: string) => void
  applyMealTemplate: (templateId: string, date: string) => void
  deleteMealTemplate: (id: string) => void
}

const StoreContext = createContext<StoreValue | null>(null)

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => createInitialData())
  const [status, setStatus] = useState<'loading' | 'ready' | 'recovery'>('loading')
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null)
  const [saveState, setSaveState] = useState<SaveState>('saved')
  const [conflictNotice, setConflictNotice] = useState(false)
  const [storageMode, setStorageMode] = useState<StorageMode>('memory')
  const [storageNotices, setStorageNotices] = useState<string[]>([])
  const [recoverySnapshots, setRecoverySnapshots] = useState<RecoverySnapshot[]>([])
  const [lastError, setLastError] = useState<string | null>(null)

  const dataRef = useRef(data)
  const revisionRef = useRef(0)
  const lastWriteAt = useRef(0)
  const persistTimer = useRef<number | null>(null)
  const bootstrapped = useRef(false)
  const readOnlyRef = useRef(false)

  // Keep the ref in sync with committed state without writing to it during render.
  useEffect(() => {
    dataRef.current = data
  }, [data])

  const persistNow = useCallback(async (): Promise<boolean> => {
    if (readOnlyRef.current) return false
    const snapshot = dataRef.current
    setSaveState('saving')
    try {
      const result = await writeAppData(snapshot, { expectedRevision: revisionRef.current })
      revisionRef.current = result.revision
      lastWriteAt.current = Date.now()
      setLastError(null)
      setSaveState('saved')
      if (result.conflict) setConflictNotice(true)
      notifyExternalChange()
      return true
    } catch (err) {
      setLastError(err instanceof Error ? err.message : 'Could not save your data.')
      setSaveState('error')
      return false
    }
  }, [])

  const schedulePersist = useCallback(() => {
    if (persistTimer.current !== null) window.clearTimeout(persistTimer.current)
    persistTimer.current = window.setTimeout(() => {
      persistTimer.current = null
      void persistNow()
    }, 200)
  }, [persistNow])

  const commit = useCallback(
    (updater: (prev: AppData) => AppData) => {
      if (readOnlyRef.current) return
      const next = updater(dataRef.current)
      dataRef.current = next
      setData(next)
      setSaveState('unsaved')
      schedulePersist()
    },
    [schedulePersist],
  )

  const hydrate = useCallback(async () => {
    const result = await loadAppData()
    setStorageMode(result.mode)
    setStorageNotices([...result.repairs, ...result.warnings])
    if (result.error) {
      // Never write over data we could not read: open read-only recovery mode.
      readOnlyRef.current = true
      setRecoveryMessage(result.error)
      setStatus('recovery')
      return
    }
    readOnlyRef.current = false
    revisionRef.current = result.revision
    dataRef.current = result.data
    setData(result.data)
    setRecoveryMessage(null)
    setSaveState('saved')
    setStatus('ready')
  }, [])

  const retryLoad = useCallback(async () => {
    setStatus('loading')
    await hydrate()
  }, [hydrate])

  // Initial hydration (runs exactly once, even under React StrictMode).
  useEffect(() => {
    if (bootstrapped.current) return
    bootstrapped.current = true
    void hydrate()
  }, [hydrate])

  // Flush pending writes when the tab is hidden or closed.
  useEffect(() => {
    const flush = () => {
      if (persistTimer.current !== null) {
        window.clearTimeout(persistTimer.current)
        persistTimer.current = null
        void persistNow()
      }
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    window.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', flush)
    return () => {
      window.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', flush)
    }
  }, [persistNow])

  // Drop any pending debounced write on unmount so a stale timer cannot fire
  // (and write) after the provider is gone. Real teardown is covered by the
  // pagehide/visibility flush above.
  useEffect(
    () => () => {
      if (persistTimer.current !== null) {
        window.clearTimeout(persistTimer.current)
        persistTimer.current = null
      }
    },
    [],
  )

  // Adopt changes written by another tab (unless we have unsaved local edits).
  useEffect(() => {
    const unsubscribe = subscribeToExternalChanges(() => {
      if (readOnlyRef.current) return
      if (document.visibilityState === 'hidden') return
      if (Date.now() - lastWriteAt.current < 500) return
      if (persistTimer.current !== null) return
      void (async () => {
        const result = await readAppData()
        if (result.mode === 'memory' || result.error) return
        revisionRef.current = result.revision
        dataRef.current = result.data
        setData(result.data)
        setStorageMode(result.mode)
      })()
    })
    return unsubscribe
  }, [])

  const refreshRecoverySnapshots = useCallback(async () => {
    setRecoverySnapshots(await listRecoverySnapshots())
  }, [])

  /** Replace the whole dataset only after it is durably persisted (Phase 3.1). */
  const applyValidatedData = useCallback(
    async (next: AppData, report: IntegrityReport): Promise<ImportResult> => {
      try {
        await saveRecoverySnapshot({
          key: snapshotKey('pre-import'),
          at: Date.now(),
          label: 'Before replacing data',
          reason: 'pre-import',
          data: dataRef.current,
        })
      } catch {
        return {
          ok: false,
          error: 'Could not create a safety copy before replacing your data. Nothing was changed.',
        }
      }
      try {
        const written = await writeAppData(next, { expectedRevision: revisionRef.current })
        revisionRef.current = written.revision
      } catch (err) {
        return {
          ok: false,
          error: err instanceof Error ? err.message : 'Could not save the new data. Nothing was changed.',
        }
      }
      readOnlyRef.current = false
      dataRef.current = next
      setData(next)
      setStorageNotices([...report.repairs, ...report.warnings])
      setSaveState('saved')
      setRecoveryMessage(null)
      setStatus('ready')
      notifyExternalChange()
      return { ok: true, report }
    },
    [],
  )

  const restoreSnapshot = useCallback(
    async (snapshot: RecoverySnapshot): Promise<ImportResult> => {
      if (!snapshot.data) {
        return { ok: false, error: 'This snapshot does not contain restorable data.' }
      }
      const validated = validateAndRepair(coerceData(snapshot.data))
      if (!validated.ok || !validated.data) {
        return { ok: false, error: validated.error ?? 'This snapshot is not valid.' }
      }
      return applyValidatedData(validated.data, validated.report)
    },
    [applyValidatedData],
  )

  const discardSnapshot = useCallback(async (key: string) => {
    await clearRecoverySnapshot(key)
    setRecoverySnapshots(await listRecoverySnapshots())
  }, [])

  useEffect(() => {
    const theme = data.settings.theme
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#f4f5f2')
    try {
      localStorage.setItem('irontrack.theme', theme)
    } catch {
      /* theme mirror is a best-effort optimisation */
    }
  }, [data.settings.theme])

  const exercisesById = useMemo(() => new Map(data.exercises.map((e) => [e.id, e])), [data.exercises])

  const value = useMemo<StoreValue>(() => {
    const upd = {
      updateProfile: (patch: Partial<UserProfile>) =>
        commit((prev) => ({ ...prev, profile: { ...prev.profile, ...patch } })),
      updateSettings: (patch: Partial<AppSettings>) =>
        commit((prev) => ({
          ...prev,
          settings: { ...prev.settings, ...patch, units: { ...prev.settings.units, ...patch.units } },
        })),
      resetAll: async () => {
        const fresh = createInitialData()
        try {
          await saveRecoverySnapshot({
            key: snapshotKey('pre-import'),
            at: Date.now(),
            label: 'Before erasing all data',
            reason: 'pre-import',
            data: dataRef.current,
          })
        } catch {
          setLastError('Could not create a safety copy; the reset was cancelled.')
          return
        }
        dataRef.current = fresh
        setData(fresh)
        setStorageNotices([])
        try {
          await deleteAppData()
          const written = await writeAppData(fresh)
          revisionRef.current = written.revision
        } catch (err) {
          setLastError(err instanceof Error ? err.message : 'Could not erase your data.')
          setSaveState('error')
          return
        }
        readOnlyRef.current = false
        setRecoveryMessage(null)
        setStatus('ready')
        setSaveState('saved')
        notifyExternalChange()
      },
      exportBackup: () => dataRef.current,
      backupJson: () => serializeBackup(dataRef.current),
      importBackup: async (raw: string): Promise<ImportResult> => {
        const result = parseBackupText(raw)
        if (!result.ok || !result.data) {
          return { ok: false, error: result.error ?? 'Invalid backup.', report: result.report }
        }
        return applyValidatedData(result.data, result.report)
      },

      addExercise: (input: Omit<Exercise, 'id' | 'isCustom' | 'favorite'>) => {
        const exercise: Exercise = { ...input, id: uid('ex'), isCustom: true, favorite: false }
        commit((prev) => ({ ...prev, exercises: [...prev.exercises, exercise] }))
        return exercise
      },
      updateExercise: (id: string, patch: Partial<Exercise>) =>
        commit((prev) => ({
          ...prev,
          exercises: prev.exercises.map((e) => (e.id === id ? { ...e, ...patch } : e)),
        })),
      deleteExercise: (id: string) =>
        commit((prev) => ({ ...prev, exercises: prev.exercises.filter((e) => e.id !== id) })),
      setExerciseImage: async (exerciseId: string, blob: Blob) => {
        const key = uid('asset')
        try {
          await putAsset(key, blob)
        } catch (err) {
          return {
            ok: false,
            error: isQuotaError(err)
              ? 'Not enough storage space to save that image.'
              : 'Could not save the image.',
          }
        }
        const previous = dataRef.current.exercises.find((e) => e.id === exerciseId)?.mediaAssetId
        commit((prev) => ({
          ...prev,
          exercises: prev.exercises.map((e) =>
            e.id === exerciseId ? { ...e, mediaAssetId: key } : e,
          ),
        }))
        if (previous) {
          try {
            await deleteAsset(previous)
          } catch {
            /* orphaned blob is harmless */
          }
        }
        return { ok: true }
      },
      removeExerciseImage: async (exerciseId: string) => {
        const previous = dataRef.current.exercises.find((e) => e.id === exerciseId)?.mediaAssetId
        commit((prev) => ({
          ...prev,
          exercises: prev.exercises.map((e) =>
            e.id === exerciseId ? { ...e, mediaAssetId: undefined } : e,
          ),
        }))
        if (previous) {
          try {
            await deleteAsset(previous)
          } catch {
            /* ignore */
          }
        }
      },
      toggleFavorite: (id: string) =>
        commit((prev) => ({
          ...prev,
          exercises: prev.exercises.map((e) => (e.id === id ? { ...e, favorite: !e.favorite } : e)),
        })),
      resetExerciseLibrary: () =>
        commit((prev) => {
          const custom = prev.exercises.filter((e) => e.isCustom)
          return { ...prev, exercises: [...createInitialData().exercises, ...custom] }
        }),

      addTemplate: (name: string, day: string) => {
        const template: WorkoutTemplate = {
          id: uid('tpl'),
          name,
          day,
          isRestDay: false,
          exercises: [],
        }
        commit((prev) => ({ ...prev, templates: [...prev.templates, template] }))
        return template
      },
      updateTemplate: (id: string, patch: Partial<WorkoutTemplate>) =>
        commit((prev) => ({
          ...prev,
          templates: prev.templates.map((t) => (t.id === id ? { ...t, ...patch } : t)),
        })),
      deleteTemplate: (id: string) =>
        commit((prev) => ({ ...prev, templates: prev.templates.filter((t) => t.id !== id) })),
      addExerciseToTemplate: (templateId: string, exerciseId: string) =>
        commit((prev) => ({
          ...prev,
          templates: prev.templates.map((t) =>
            t.id === templateId
              ? {
                  ...t,
                  exercises: [
                    ...t.exercises,
                    { id: uid('te'), exerciseId, sets: 3, repsMin: 8, repsMax: 12 },
                  ],
                }
              : t,
          ),
        })),
      updateTemplateExercise: (templateId: string, teId: string, patch: Partial<TemplateExercise>) =>
        commit((prev) => ({
          ...prev,
          templates: prev.templates.map((t) =>
            t.id === templateId
              ? {
                  ...t,
                  exercises: t.exercises.map((te) => (te.id === teId ? { ...te, ...patch } : te)),
                }
              : t,
          ),
        })),
      removeTemplateExercise: (templateId: string, teId: string) =>
        commit((prev) => ({
          ...prev,
          templates: prev.templates.map((t) =>
            t.id === templateId ? { ...t, exercises: t.exercises.filter((te) => te.id !== teId) } : t,
          ),
        })),
      moveTemplateExercise: (templateId: string, teId: string, direction: -1 | 1) =>
        commit((prev) => ({
          ...prev,
          templates: prev.templates.map((t) => {
            if (t.id !== templateId) return t
            const index = t.exercises.findIndex((te) => te.id === teId)
            const target = index + direction
            if (index < 0 || target < 0 || target >= t.exercises.length) return t
            const next = [...t.exercises]
            const [item] = next.splice(index, 1)
            next.splice(target, 0, item)
            return { ...t, exercises: next }
          }),
        })),

      startWorkout: (templateId: string | null, name: string, dayLabel: string) => {
        const existing = dataRef.current.sessions.find((s) => s.status === 'active')
        if (existing) return existing
        const template = dataRef.current.templates.find((t) => t.id === templateId) ?? null
        const prescribed = template ? template.exercises.map((te) => ({ ...te })) : null
        const sets: SetRecord[] = []
        let order = 0
        for (const te of prescribed ?? []) {
          const exercise = dataRef.current.exercises.find((e) => e.id === te.exerciseId)
          const lastSets = latestWorkingWeightSet(dataRef.current, te.exerciseId)
          for (let i = 0; i < te.sets; i++) {
            sets.push({
              id: uid('set'),
              exerciseId: te.exerciseId,
              type: 'working',
              weightKg: lastSets[i]?.weightKg ?? lastSets[0]?.weightKg ?? null,
              reps: null,
              completed: false,
              rir: null,
              note: '',
              perSide: exercise?.unilateral ?? false,
              sortOrder: order++,
              supersetGroup: te.supersetGroup,
            })
          }
        }
        const session: WorkoutSession = {
          id: uid('sess'),
          templateId,
          templateName: name,
          dayLabel,
          prescribed,
          date: todayISODate(),
          startedAt: new Date().toISOString(),
          finishedAt: null,
          status: 'active',
          sets,
          notes: '',
          durationSeconds: 0,
        }
        commit((prev) => ({ ...prev, sessions: [...prev.sessions, session] }))
        return session
      },
      repeatWorkout: (sessionId: string) => {
        const existing = dataRef.current.sessions.find((s) => s.status === 'active')
        if (existing) return existing
        const source = dataRef.current.sessions.find((s) => s.id === sessionId)
        if (!source) return null
        const groups: {
          exerciseId: string
          weights: (number | null)[]
          supersetGroup?: string
        }[] = []
        const byExercise = new Map<string, (typeof groups)[number]>()
        for (const s of [...source.sets].sort((a, b) => a.sortOrder - b.sortOrder)) {
          if (s.type !== 'working') continue
          let group = byExercise.get(s.exerciseId)
          if (!group) {
            group = { exerciseId: s.exerciseId, weights: [], supersetGroup: s.supersetGroup }
            byExercise.set(s.exerciseId, group)
            groups.push(group)
          }
          group.weights.push(s.weightKg)
        }
        if (!groups.length && source.prescribed) {
          for (const te of source.prescribed) {
            if (byExercise.has(te.exerciseId)) continue
            const group = { exerciseId: te.exerciseId, weights: [], supersetGroup: te.supersetGroup }
            byExercise.set(te.exerciseId, group)
            groups.push(group)
          }
        }
        const sets: SetRecord[] = []
        let order = 0
        for (const group of groups) {
          const exercise = dataRef.current.exercises.find((e) => e.id === group.exerciseId)
          const prescribedSets = source.prescribed?.find((te) => te.exerciseId === group.exerciseId)?.sets
          const count = Math.max(group.weights.length, prescribedSets ?? 0, 1)
          for (let i = 0; i < count; i++) {
            sets.push({
              id: uid('set'),
              exerciseId: group.exerciseId,
              type: 'working',
              weightKg: group.weights[i] ?? group.weights[0] ?? null,
              reps: null,
              completed: false,
              rir: null,
              note: '',
              perSide: exercise?.unilateral ?? false,
              sortOrder: order++,
              supersetGroup: group.supersetGroup,
            })
          }
        }
        const session: WorkoutSession = {
          id: uid('sess'),
          templateId: source.templateId,
          templateName: source.templateName,
          dayLabel: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
          prescribed: source.prescribed ? source.prescribed.map((te) => ({ ...te })) : null,
          date: todayISODate(),
          startedAt: new Date().toISOString(),
          finishedAt: null,
          status: 'active',
          sets,
          notes: '',
          durationSeconds: 0,
        }
        commit((prev) => ({ ...prev, sessions: [...prev.sessions, session] }))
        return session
      },
      updateSession: (id: string, patch: Partial<WorkoutSession>) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) => (s.id === id ? { ...s, ...patch } : s)),
        })),
      addSet: (sessionId: string, input: Omit<SetRecord, 'id' | 'sortOrder'>) => {
        const created: SetRecord = { ...input, id: uid('set'), sortOrder: 0 }
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) => {
            if (s.id !== sessionId) return s
            const maxOrder = s.sets.reduce((m, x) => Math.max(m, x.sortOrder), -1)
            const withOrder = { ...created, sortOrder: maxOrder + 1 }
            const normalized = normalizeSetWeights(withOrder, prev)
            created.sortOrder = normalized.sortOrder
            return { ...s, sets: [...s.sets, normalized] }
          }),
        }))
        return created
      },
      updateSet: (sessionId: string, setId: string, patch: Partial<SetRecord>) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) =>
            s.id === sessionId
              ? {
                  ...s,
                  sets: s.sets.map((set) => {
                    if (set.id !== setId) return set
                    const next = { ...set, ...patch }
                    if (patch.weightKg !== undefined) {
                      const exercise = prev.exercises.find((e) => e.id === set.exerciseId)
                      next.weightKg = toStoredWeight(patch.weightKg, exercise, prev.settings)
                    }
                    return next
                  }),
                }
              : s,
          ),
        })),
      deleteSet: (sessionId: string, setId: string) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) =>
            s.id === sessionId ? { ...s, sets: s.sets.filter((set) => set.id !== setId) } : s,
          ),
        })),
      setExerciseSuperset: (sessionId: string, exerciseId: string, group: string | null) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) =>
            s.id !== sessionId
              ? s
              : {
                  ...s,
                  sets: s.sets.map((set) =>
                    set.exerciseId !== exerciseId
                      ? set
                      : group
                        ? { ...set, supersetGroup: group }
                        : { ...set, supersetGroup: undefined },
                  ),
                },
          ),
        })),
      finishWorkout: (sessionId: string, durationSeconds: number) => {
        const session = dataRef.current.sessions.find((s) => s.id === sessionId)
        if (!session) return null
        const exercisesMap = new Map(dataRef.current.exercises.map((e) => [e.id, e]))
        const newPRs = detectSessionPRs(session, exercisesMap, dataRef.current.personalRecords)
        const finished: WorkoutSession = {
          ...session,
          status: 'completed',
          finishedAt: new Date().toISOString(),
          durationSeconds,
        }
        const summary: WorkoutSummary = {
          durationSeconds,
          exerciseCount: new Set(
            finished.sets.filter((s) => s.completed && s.type === 'working').map((s) => s.exerciseId),
          ).size,
          completedSets: finished.sets.filter((s) => s.completed).length,
          workingSets: finished.sets.filter((s) => s.completed && s.type === 'working').length,
          volumeKg: finished.sets
            .filter((s) => s.completed && s.type === 'working')
            .reduce((sum, s) => sum + setVolumeKg(s, exercisesMap.get(s.exerciseId)), 0),
          prs: newPRs,
        }
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) => (s.id === sessionId ? finished : s)),
          personalRecords: [...prev.personalRecords, ...newPRs],
        }))
        return summary
      },
      discardWorkout: (sessionId: string) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.map((s) =>
            s.id === sessionId
              ? { ...s, discarded: true, status: 'completed', finishedAt: s.finishedAt ?? new Date().toISOString() }
              : s,
          ),
        })),
      restoreWorkout: (sessionId: string) =>
        commit((prev) => {
          const hasActive = prev.sessions.some((s) => s.status === 'active' && !s.discarded)
          return {
            ...prev,
            sessions: prev.sessions.map((s) =>
              s.id === sessionId
                ? hasActive
                  ? { ...s, discarded: false, status: 'completed', finishedAt: s.finishedAt ?? new Date().toISOString() }
                  : { ...s, discarded: false, status: 'active', finishedAt: null }
                : s,
            ),
          }
        }),
      deleteSession: (sessionId: string) =>
        commit((prev) => ({
          ...prev,
          sessions: prev.sessions.filter((s) => s.id !== sessionId),
        })),

      addMeasurement: (input: Omit<BodyMeasurement, 'id'>) =>
        commit((prev) => ({ ...prev, measurements: [...prev.measurements, { ...input, id: uid('bm') }] })),
      updateMeasurement: (id: string, patch: Partial<BodyMeasurement>) =>
        commit((prev) => ({
          ...prev,
          measurements: prev.measurements.map((m) => (m.id === id ? { ...m, ...patch } : m)),
        })),
      deleteMeasurement: (id: string) =>
        commit((prev) => ({ ...prev, measurements: prev.measurements.filter((m) => m.id !== id) })),

      getNutritionDay: (date: string) =>
        dataRef.current.nutrition.find((d) => d.date === date) ?? { id: '', date, meals: [], waterMl: 0 },
      addFood: (date: string, mealName: string, item: Omit<FoodItem, 'id'>) =>
        commit((prev) => {
          const day = ensureNutritionDay(prev, date)
          const newItem: FoodItem = { ...item, id: uid('food') }
          const exists = day.meals.some((m) => m.name === mealName)
          const meals: Meal[] = exists
            ? day.meals.map((m) => (m.name === mealName ? { ...m, items: [...m.items, newItem] } : m))
            : [...day.meals, { id: uid('meal'), name: mealName, items: [newItem] }]
          return { ...prev, nutrition: upsertNutrition(prev.nutrition, { ...day, meals }) }
        }),
      deleteFood: (date: string, mealName: string, itemId: string) =>
        commit((prev) => {
          const day = prev.nutrition.find((d) => d.date === date)
          if (!day) return prev
          const meals = day.meals.map((m) =>
            m.name === mealName ? { ...m, items: m.items.filter((i) => i.id !== itemId) } : m,
          )
          return { ...prev, nutrition: upsertNutrition(prev.nutrition, { ...day, meals }) }
        }),
      addMeal: (date: string, name: string) =>
        commit((prev) => {
          const day = ensureNutritionDay(prev, date)
          if (day.meals.some((m) => m.name === name)) return prev
          return {
            ...prev,
            nutrition: upsertNutrition(prev.nutrition, {
              ...day,
              meals: [...day.meals, { id: uid('meal'), name, items: [] }],
            }),
          }
        }),
      updateWater: (date: string, waterMl: number) =>
        commit((prev) => {
          const day = ensureNutritionDay(prev, date)
          return {
            ...prev,
            nutrition: upsertNutrition(prev.nutrition, { ...day, waterMl }),
          }
        }),
      copyDayMeals: (fromDate: string, toDate: string) =>
        commit((prev) => {
          if (fromDate === toDate) return prev
          const source = prev.nutrition.find((d) => d.date === fromDate)
          if (!source || !source.meals.some((m) => m.items.length)) return prev
          return { ...prev, nutrition: upsertNutrition(prev.nutrition, appendMealsToDay(prev.nutrition, toDate, source.meals)) }
        }),
      saveMealTemplate: (date: string, name: string) =>
        commit((prev) => {
          const source = prev.nutrition.find((d) => d.date === date)
          if (!source || !source.meals.some((m) => m.items.length)) return prev
          const meals = source.meals
            .filter((m) => m.items.length)
            .map((m) => ({ ...m, items: m.items.map((i) => ({ ...i })) }))
          const template: MealTemplate = { id: uid('tpl'), name, meals }
          return { ...prev, mealTemplates: [...prev.mealTemplates, template] }
        }),
      applyMealTemplate: (templateId: string, date: string) =>
        commit((prev) => {
          const template = prev.mealTemplates.find((t) => t.id === templateId)
          if (!template || !template.meals.some((m) => m.items.length)) return prev
          return { ...prev, nutrition: upsertNutrition(prev.nutrition, appendMealsToDay(prev.nutrition, date, template.meals)) }
        }),
      deleteMealTemplate: (id: string) =>
        commit((prev) => ({ ...prev, mealTemplates: prev.mealTemplates.filter((t) => t.id !== id) })),
    }

    return {
      data,
      status,
      recoveryMessage,
      saveState,
      conflictNotice,
      dismissConflictNotice: () => setConflictNotice(false),
      retryLoad,
      recoverySnapshots,
      refreshRecoverySnapshots,
      restoreSnapshot,
      discardSnapshot,
      storageMode,
      storageNotices,
      dismissStorageNotices: () => setStorageNotices([]),
      exercisesById,
      activeSession: data.sessions.find((s) => s.status === 'active'),
      lastError,
      clearError: () => setLastError(null),
      ...upd,
    }
  }, [
    data,
    status,
    recoveryMessage,
    saveState,
    conflictNotice,
    retryLoad,
    recoverySnapshots,
    refreshRecoverySnapshots,
    restoreSnapshot,
    discardSnapshot,
    storageMode,
    storageNotices,
    exercisesById,
    lastError,
    commit,
    applyValidatedData,
  ])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useApp(): StoreValue {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useApp must be used within AppStoreProvider')
  return ctx
}

/* ---------- pure helpers ---------- */

function normalizeSetWeights(set: SetRecord, data: AppData): SetRecord {
  const exercise = data.exercises.find((e) => e.id === set.exerciseId)
  return { ...set, weightKg: toStoredWeight(set.weightKg, exercise, data.settings) }
}

function ensureNutritionDay(data: AppData, date: string): NutritionDay {
  return data.nutrition.find((d) => d.date === date) ?? { id: uid('nd'), date, meals: [], waterMl: 0 }
}

function upsertNutrition(list: NutritionDay[], day: NutritionDay): NutritionDay[] {
  const index = list.findIndex((d) => d.date === day.date)
  if (index === -1) return [...list, day]
  const next = [...list]
  next[index] = day
  return next
}

/** Appends items from `sourceMeals` onto `list`'s entry for `date`, creating missing meals. Non-destructive. */
function appendMealsToDay(list: NutritionDay[], date: string, sourceMeals: Meal[]): NutritionDay {
  const day = list.find((d) => d.date === date) ?? { id: uid('nd'), date, meals: [], waterMl: 0 }
  const meals = [...day.meals]
  for (const tm of sourceMeals) {
    if (!tm.items.length) continue
    const items = tm.items.map((i) => ({ ...i, id: uid('food') }))
    const index = meals.findIndex((m) => m.name === tm.name)
    if (index === -1) meals.push({ id: uid('meal'), name: tm.name, items })
    else meals[index] = { ...meals[index], items: [...meals[index].items, ...items] }
  }
  return { ...day, meals }
}

/** Most recent completed working sets for an exercise, used to pre-fill weights. */
function latestWorkingWeightSet(data: AppData, exerciseId: string): SetRecord[] {
  const sessions = data.sessions
    .filter(
      (s) => s.status === 'completed' && !s.discarded && s.sets.some((x) => x.exerciseId === exerciseId),
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  const session = sessions[0]
  if (!session) return []
  return session.sets.filter((set) => set.exerciseId === exerciseId && set.type === 'working' && set.completed)
}
