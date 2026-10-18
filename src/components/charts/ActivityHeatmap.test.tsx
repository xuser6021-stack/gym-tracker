import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { ActivityHeatmap } from './ActivityHeatmap'
import { makeExercise, makeSession, makeSet } from '../../test/fixtures'

const exercise = makeExercise({ id: 'bb', name: 'Bench Press' })
const exercisesById = new Map([[exercise.id, exercise]])

describe('ActivityHeatmap', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-10-17T12:00:00'))
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('reports active days from completed sessions in the window', () => {
    const sessions = [
      makeSession({ id: 'a', date: '2026-10-14', sets: [makeSet({ exerciseId: 'bb', weightKg: 40, reps: 8 })] }),
      makeSession({ id: 'b', date: '2026-10-15', status: 'active', sets: [makeSet({ exerciseId: 'bb' })] }),
      makeSession({ id: 'c', date: '2026-07-01', discarded: true, sets: [makeSet({ exerciseId: 'bb' })] }),
    ]
    render(<ActivityHeatmap sessions={sessions} exercisesById={exercisesById} weeks={12} />)
    expect(screen.getByText(/1 active day in the last 12 weeks/)).toBeInTheDocument()
    expect(screen.getByTitle('2026-10-14 · 320 kg')).toBeInTheDocument()
  })

  it('shows zero active days when there is nothing logged', () => {
    render(<ActivityHeatmap sessions={[]} exercisesById={exercisesById} weeks={12} />)
    expect(screen.getByText(/0 active days in the last 12 weeks/)).toBeInTheDocument()
  })
})
