import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BookOpen, Dumbbell, Settings } from 'lucide-react'
import { cn } from '../../lib/cn'
import { MOBILE_NAV, NAV_ITEMS } from './nav'
import { ActiveWorkoutBar } from './ActiveWorkoutBar'
import { StorageStatus } from '../StorageStatus'
import { useApp } from '../../store/AppStore'

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accentfg">
        <Dumbbell size={18} strokeWidth={2.5} />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink">
        Iron<span className="text-accent">Track</span>
      </span>
      {compact ? null : null}
    </Link>
  )
}

export function AppShell() {
  const { activeSession } = useApp()
  const location = useLocation()
  const onWorkoutScreen = location.pathname.startsWith('/workout')
  const showResumeBar = Boolean(activeSession) && !onWorkoutScreen

  return (
    <div className="min-h-dvh bg-app text-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-surface lg:flex">
        <div className="flex h-16 items-center px-5">
          <Logo />
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
                  isActive ? 'bg-accentsoft text-accent' : 'text-muted hover:bg-surface2 hover:text-ink',
                )
              }
            >
              <item.icon size={19} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-line p-4">
          <StorageStatus />
          <p className="mt-2 text-xs leading-relaxed text-faint">
            Local-first. Your data is saved in this browser only — export a backup from Settings.
          </p>
        </div>
      </aside>

      <header className="safe-top sticky top-0 z-30 flex min-h-14 items-center justify-between border-b border-line bg-app/85 px-4 backdrop-blur lg:hidden">
        <Logo compact />
        <StorageStatus className="mr-1" />
        <div className="flex items-center gap-1">
          <Link
            to="/exercises"
            aria-label="Exercise library"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:bg-surface2 hover:text-ink"
          >
            <BookOpen size={20} />
          </Link>
          <Link
            to="/settings"
            aria-label="Settings"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:bg-surface2 hover:text-ink"
          >
            <Settings size={20} />
          </Link>
        </div>
      </header>

      <div className="lg:pl-64">
        <main
          className={cn(
            'mx-auto w-full max-w-4xl px-4 pt-4 lg:px-8 lg:pt-8',
            showResumeBar ? 'pb-44' : 'pb-28 lg:pb-12',
          )}
        >
          <Outlet />
        </main>
      </div>

      {showResumeBar && activeSession ? <ActiveWorkoutBar session={activeSession} /> : null}

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 backdrop-blur lg:hidden"
        aria-label="Primary"
      >
        <div className="flex items-stretch safe-bottom">
          {MOBILE_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors',
                  isActive ? 'text-accent' : 'text-muted',
                )
              }
            >
              <item.icon size={21} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
