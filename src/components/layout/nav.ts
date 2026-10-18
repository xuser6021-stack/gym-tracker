import type { ComponentType } from 'react'
import { Apple, BookOpen, Dumbbell, LayoutDashboard, Ruler, Settings, TrendingUp } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  icon: ComponentType<{ size?: number | string; className?: string }>
  end?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/workouts', label: 'Workouts', icon: Dumbbell },
  { to: '/exercises', label: 'Exercise Library', icon: BookOpen },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
  { to: '/body', label: 'Body Metrics', icon: Ruler },
  { to: '/nutrition', label: 'Nutrition', icon: Apple },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export const MOBILE_NAV: NavItem[] = [
  { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
  { to: '/workouts', label: 'Workouts', icon: Dumbbell },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
  { to: '/body', label: 'Body', icon: Ruler },
  { to: '/nutrition', label: 'Food', icon: Apple },
]
