import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExerciseDemoDialog } from './ExerciseDemoDialog'
import { makeExercise } from '../../test/fixtures'

const bench = makeExercise({ id: 'ex_barbell_bench_press', name: 'Barbell Bench Press' })

describe('ExerciseDemoDialog', () => {
  it('shows the written guide and an honest note when no animation is bundled', () => {
    const exerciseWithMistakes = makeExercise({
      id: 'ex_barbell_bench_press',
      name: 'Barbell Bench Press',
      mistakes: 'Bouncing the bar off the chest',
    })
    render(<ExerciseDemoDialog exercise={exerciseWithMistakes} open onClose={() => {}} />)
    expect(screen.getByText(/Animated demonstration artwork is not bundled/i)).toBeInTheDocument()
    expect(screen.getByText('Starting position')).toBeInTheDocument()
    expect(screen.getByText(/shoulder blades pinched back and down/i)).toBeInTheDocument()
    expect(screen.getByText('Common mistakes')).toBeInTheDocument()
    expect(screen.getByText(/Bouncing the bar off the chest/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Play demonstration')).toBeNull()
  })

  it('renders playback controls when animation is supplied', () => {
    const animatedExercise = makeExercise({
      id: 'ex_custom_squat',
      name: 'Custom Squat',
      visuals: { animation: '/exercises/squat/animation.webm' },
    })
    render(<ExerciseDemoDialog exercise={animatedExercise} open onClose={() => {}} />)
    expect(screen.getByRole('button', { name: 'Play demonstration' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Replay demonstration' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Static' })).toBeInTheDocument()
  })

  it('renders nothing while closed', () => {
    render(<ExerciseDemoDialog exercise={bench} open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
