import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CircleAlert, Dumbbell, TriangleAlert } from 'lucide-react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { useApp } from './store/AppStore'
import { Onboarding } from './pages/Onboarding'
import { AppShell } from './components/layout/AppShell'
import { RecoveryScreen } from './components/RecoveryScreen'
const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const Workouts = lazy(() => import('./pages/Workouts').then((m) => ({ default: m.Workouts })))
const WorkoutLogger = lazy(() => import('./pages/WorkoutLogger').then((m) => ({ default: m.WorkoutLogger })))
const SessionDetail = lazy(() => import('./pages/SessionDetail').then((m) => ({ default: m.SessionDetail })))
const Exercises = lazy(() => import('./pages/Exercises').then((m) => ({ default: m.Exercises })))
const ExerciseDetail = lazy(() => import('./pages/ExerciseDetail').then((m) => ({ default: m.ExerciseDetail })))
const Progress = lazy(() => import('./pages/Progress').then((m) => ({ default: m.Progress })))
const BodyMetrics = lazy(() => import('./pages/BodyMetrics').then((m) => ({ default: m.BodyMetrics })))
const Nutrition = lazy(() => import('./pages/Nutrition').then((m) => ({ default: m.Nutrition })))
const SettingsPage = lazy(() => import('./pages/Settings').then((m) => ({ default: m.SettingsPage })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function BootSplash() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-app text-ink">
      <span className="flex h-10 w-10 animate-pulse items-center justify-center rounded-xl bg-accent text-accentfg">
        <Dumbbell size={20} strokeWidth={2.5} />
      </span>
      <p className="text-sm text-muted">Opening IronTrack…</p>
    </div>
  )
}

function RouteFallback() {
  return (
    <div className="flex items-center justify-center py-16 text-sm text-muted" role="status">
      Loading…
    </div>
  )
}

function AppRoutes() {
  const { data, status, lastError, clearError, conflictNotice, dismissConflictNotice } = useApp()

  if (status === 'loading') {
    return <BootSplash />
  }

  if (status === 'recovery') {
    return <RecoveryScreen />
  }

  if (!data.profile.onboarded) {
    return <Onboarding />
  }

  return (
    <>
      {lastError ? (
        <div className="fixed inset-x-0 top-0 z-[60] flex justify-center p-3">
          <div className="flex items-center gap-2 rounded-xl border border-danger/40 bg-surface px-4 py-2.5 text-sm text-danger shadow-xl">
            <CircleAlert size={16} />
            <span>Storage error: {lastError}</span>
            <button onClick={clearError} className="ml-1 font-bold underline">
              Dismiss
            </button>
          </div>
        </div>
      ) : conflictNotice ? (
        <div className="fixed inset-x-0 top-0 z-[60] flex justify-center p-3">
          <div className="flex items-center gap-2 rounded-xl border border-warn/40 bg-surface px-4 py-2.5 text-sm text-warn shadow-xl">
            <TriangleAlert size={16} />
            <span>Another tab changed your data. Your copy is safe; the other version was saved as a snapshot.</span>
            <button onClick={dismissConflictNotice} className="ml-1 font-bold underline">
              Dismiss
            </button>
          </div>
        </div>
      ) : null}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Dashboard />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="workout" element={<WorkoutLogger />} />
            <Route path="workouts/:id" element={<SessionDetail />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="exercises/:id" element={<ExerciseDetail />} />
            <Route path="progress" element={<Progress />} />
            <Route path="body" element={<BodyMetrics />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  )
}
