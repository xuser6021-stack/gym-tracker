import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { AppStoreProvider } from './store/AppStore'
import { readAppData, writeAppData } from './storage/repositories/appRepository'
import { STORE_DOCUMENTS, STORE_META, idbClear } from './storage/database'
import { createInitialData } from './lib/storage'

function renderApp(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <AppStoreProvider>
        <App />
      </AppStoreProvider>
    </MemoryRouter>,
  )
}

describe('IronTrack end-to-end flows', () => {
  beforeEach(async () => {
    localStorage.clear()
    await idbClear(STORE_DOCUMENTS)
    await idbClear(STORE_META)
  })

  it('runs the core workout loop: start -> finish -> history -> detail', async () => {
    const seed = createInitialData()
    seed.profile = { ...seed.profile, onboarded: true, displayName: 'Tester' }
    await writeAppData(seed)

    const user = userEvent.setup()
    renderApp('/workout')

    // Chooser appears once the store has hydrated.
    const startEmpty = await screen.findByRole('button', { name: /start empty workout/i })
    await user.click(startEmpty)

    // Logger is now active; finish the session.
    const finish = await screen.findByRole('button', { name: /finish workout/i })
    await user.click(finish)

    const viewWorkout = await screen.findByRole('button', { name: /view workout/i })
    await user.click(viewWorkout)

    // Session detail renders the completed session.
    expect(await screen.findByRole('heading', { name: 'Custom workout' })).toBeInTheDocument()
  })

  it('shows onboarding for a brand-new profile', async () => {
    renderApp('/')
    expect(await screen.findByRole('heading', { name: /set up your training/i })).toBeInTheDocument()
  })

  it('persists a finished workout across a reload', async () => {
    const seed = createInitialData()
    seed.profile = { ...seed.profile, onboarded: true, displayName: 'Tester' }
    await writeAppData(seed)

    const user = userEvent.setup()
    const first = renderApp('/workout')

    await user.click(await screen.findByRole('button', { name: /start empty workout/i }))
    await user.click(await screen.findByRole('button', { name: /finish workout/i }))
    await screen.findByRole('button', { name: /view workout/i })

    // Wait until the debounced write has reached IndexedDB, then simulate a reload.
    await waitFor(async () => {
      const persisted = await readAppData()
      expect(persisted.data.sessions).toHaveLength(1)
    })
    first.unmount()

    renderApp('/workouts')
    expect(await screen.findByRole('link', { name: /custom workout/i })).toBeInTheDocument()
  })
})
