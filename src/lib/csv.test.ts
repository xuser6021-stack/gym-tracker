import { describe, expect, it } from 'vitest'
import { measurementsCSV, workoutsCSV } from './csv'
import { makeSession, makeSet } from '../test/fixtures'

describe('workoutsCSV', () => {
  it('renders a header and one row per set', () => {
    const session = makeSession({
      templateName: 'Push',
      sets: [makeSet({ exerciseId: 'bb', weightKg: 100, reps: 5, sortOrder: 0 })],
    })
    const csv = workoutsCSV([session], { weight: 'kg', length: 'cm' })
    const lines = csv.split('\r\n')
    expect(lines[0]).toContain('session_id')
    expect(lines).toHaveLength(2)
    expect(lines[1]).toContain('Push')
  })

  it('neutralises spreadsheet formula injection', () => {
    const session = makeSession({
      sets: [makeSet({ note: '=HYPERLINK("http://evil","click")' })],
    })
    const csv = workoutsCSV([session], { weight: 'kg', length: 'cm' })
    expect(csv).toContain(`"'=HYPERLINK`)
    expect(csv).not.toMatch(/(^|,|\r\n)=HYPERLINK/)
  })

  it('neutralises leading +, - and @ payloads', () => {
    const session = makeSession({
      sets: [
        makeSet({ note: '+1+1', sortOrder: 0 }),
        makeSet({ note: '-2+3', sortOrder: 1 }),
        makeSet({ note: '@SUM(A1)', sortOrder: 2 }),
      ],
    })
    const csv = workoutsCSV([session], { weight: 'kg', length: 'cm' })
    expect(csv).toContain("'+1+1")
    expect(csv).toContain("'-2+3")
    expect(csv).toContain("'@SUM(A1)")
  })

  it('escapes embedded quotes and commas', () => {
    const session = makeSession({ sets: [makeSet({ note: 'a,b "quoted"' })] })
    const csv = workoutsCSV([session], { weight: 'kg', length: 'cm' })
    expect(csv).toContain('"a,b ""quoted"""')
  })
})

describe('measurementsCSV', () => {
  it('sorts by date and converts to display units', () => {
    const csv = measurementsCSV(
      [
        {
          id: 'm2',
          date: '2026-02-01',
          weightKg: 55,
          waistCm: 70,
          chestCm: null,
          armCm: null,
          thighCm: null,
          hipCm: null,
          photos: [],
          note: '',
        },
        {
          id: 'm1',
          date: '2026-01-01',
          weightKg: 54,
          waistCm: 71,
          chestCm: null,
          armCm: null,
          thighCm: null,
          hipCm: null,
          photos: [],
          note: '',
        },
      ],
      { weight: 'kg', length: 'cm' },
    )
    const lines = csv.split('\r\n')
    expect(lines[1].startsWith('2026-01-01')).toBe(true)
    expect(lines[2].startsWith('2026-02-01')).toBe(true)
  })
})
