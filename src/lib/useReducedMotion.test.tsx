import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { prefersReducedMotion, usePrefersReducedMotion } from './useReducedMotion'

function stubMatchMedia(matches: boolean) {
  const listeners = new Set<() => void>()
  const mql = {
    matches,
    addEventListener: (_: string, cb: () => void) => listeners.add(cb),
    removeEventListener: (_: string, cb: () => void) => listeners.delete(cb),
  }
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => mql),
  )
  return { mql, listeners }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('usePrefersReducedMotion', () => {
  it('reflects the current preference', () => {
    stubMatchMedia(true)
    expect(prefersReducedMotion()).toBe(true)
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(true)
  })

  it('updates when the preference changes', () => {
    const { mql, listeners } = stubMatchMedia(false)
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)
    mql.matches = true
    act(() => {
      listeners.forEach((cb) => cb())
    })
    expect(result.current).toBe(true)
  })
})
