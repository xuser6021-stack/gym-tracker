import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, cleanup, act, waitFor } from '@testing-library/react'
import { ErrorBoundary } from './ErrorBoundary'

function Boom(): never {
  throw new Error('kaboom')
}

describe('ErrorBoundary', () => {
  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders children when nothing throws', () => {
    render(
      <ErrorBoundary>
        <p>all good</p>
      </ErrorBoundary>,
    )
    expect(screen.getByText('all good')).toBeInTheDocument()
  })

  it('shows a recovery screen and the error message when a child throws', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('kaboom')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reload app/i })).toBeInTheDocument()
    spy.mockRestore()
  })

  it('offers a backup download from the crash screen', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    URL.createObjectURL = vi.fn(() => 'blob:mock')
    URL.revokeObjectURL = vi.fn()
    const clickSpy = vi.fn()
    const original = document.createElement.bind(document)
    vi.spyOn(document, 'createElement').mockImplementation(((tag: string) => {
      const el = original(tag)
      if (tag === 'a') (el as HTMLAnchorElement).click = clickSpy
      return el
    }) as typeof document.createElement)

    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    )
    await act(async () => {
      screen.getByRole('button', { name: /download backup/i }).click()
    })
    await waitFor(() => expect(clickSpy).toHaveBeenCalled())
    spy.mockRestore()
  })
})
