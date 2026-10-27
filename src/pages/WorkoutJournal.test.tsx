import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { AppStoreProvider } from '../store/AppStore'
import { WorkoutJournal } from './WorkoutJournal'

function TestHarness() {
  return (
    <MemoryRouter initialEntries={['/journal']}>
      <AppStoreProvider>
        <WorkoutJournal />
      </AppStoreProvider>
    </MemoryRouter>
  )
}

describe('WorkoutJournal feature test', () => {
  it('renders Daily Workout Journal with tabs and empty state', async () => {
    render(<TestHarness />)

    // Verify tabs
    expect(await screen.findByRole('button', { name: /^today$/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /^calendar$/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /^weekly report$/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /^progress$/i })).toBeDefined()

    // Add Exercise button should be present
    const addExBtn = screen.getByRole('button', { name: /add exercise/i })
    expect(addExBtn).toBeDefined()
  })

  it('can open Weekly Report and switch tabs smoothly', async () => {
    const user = userEvent.setup()
    render(<TestHarness />)

    const weeklyTab = await screen.findByRole('button', { name: /^weekly report$/i })
    await user.click(weeklyTab)

    expect(await screen.findByText(/weekly muscle analysis/i)).toBeDefined()
    expect(screen.getByText(/muscle group volume summary/i)).toBeDefined()
    expect(screen.getByText(/smart weekly insights/i)).toBeDefined()
  })

  it('can open Calendar view and see days', async () => {
    const user = userEvent.setup()
    render(<TestHarness />)

    const calendarTab = await screen.findByRole('button', { name: /^calendar$/i })
    await user.click(calendarTab)

    expect(await screen.findByText(/^mon$/i)).toBeDefined()
    expect(screen.getByText(/^sun$/i)).toBeDefined()
  })

  it('can view Progress section and chart container', async () => {
    const user = userEvent.setup()
    render(<TestHarness />)

    const progressTab = await screen.findByRole('button', { name: /^progress$/i })
    await user.click(progressTab)

    expect(await screen.findByText(/exercise progress & history/i)).toBeDefined()
  })
})
