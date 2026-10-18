import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { AppStoreProvider, useApp } from '../store/AppStore'
import { StorageStatus } from './StorageStatus'
import { STORE_DOCUMENTS, STORE_META, idbClear } from '../storage/database'

function Rename() {
  const { status, updateProfile } = useApp()
  if (status === 'loading') return null
  return (
    <button type="button" onClick={() => updateProfile({ displayName: 'X' })}>
      Rename
    </button>
  )
}

describe('StorageStatus', () => {
  beforeEach(async () => {
    localStorage.clear()
    await idbClear(STORE_DOCUMENTS)
    await idbClear(STORE_META)
  })

  it('reports when all changes are saved', async () => {
    render(
      <AppStoreProvider>
        <StorageStatus />
      </AppStoreProvider>,
    )
    expect(await screen.findByText('All changes saved')).toBeInTheDocument()
  })

  it('returns to the saved state after an edit is persisted', async () => {
    render(
      <AppStoreProvider>
        <Rename />
        <StorageStatus />
      </AppStoreProvider>,
    )
    await screen.findByText('All changes saved')
    await screen.findByRole('button', { name: 'Rename' })
    screen.getByRole('button', { name: 'Rename' }).click()
    await waitFor(() => expect(screen.getByText('All changes saved')).toBeInTheDocument())
  })
})
