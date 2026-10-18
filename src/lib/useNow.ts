import { useEffect, useState } from 'react'

export function useNow(intervalMs = 1000): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])
  return now
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

/**
 * A stable "today" (local midnight). Reads the clock once per mount and
 * refreshes just after midnight so date-based views roll over without the
 * impure call happening during render.
 */
export function useToday(): Date {
  const [today, setToday] = useState(() => startOfDay(new Date()))
  useEffect(() => {
    let id = 0
    const schedule = () => {
      const now = new Date()
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime()
      id = window.setTimeout(() => {
        setToday(startOfDay(new Date()))
        schedule()
      }, nextMidnight - now.getTime() + 1000)
    }
    schedule()
    return () => window.clearTimeout(id)
  }, [])
  return today
}

