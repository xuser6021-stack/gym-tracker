import { Link } from 'react-router-dom'
import { ArrowRight, Shuffle } from 'lucide-react'
import { Card, CardHeader } from '../ui/Card'
import type { Exercise } from '../../types'
import { getExerciseAlternatives } from '../../lib/coaching'
import { ExerciseImage } from './ExerciseImage'

interface ExerciseAlternativesProps {
  currentExercise: Exercise
  allExercises: Exercise[]
  className?: string
}

export function ExerciseAlternatives({
  currentExercise,
  allExercises,
  className,
}: ExerciseAlternativesProps) {
  const alternatives = getExerciseAlternatives(currentExercise, allExercises)

  if (alternatives.length === 0) return null

  return (
    <Card className={className}>
      <CardHeader
        title={
          <div className="flex items-center gap-2">
            <Shuffle size={16} className="text-accent" />
            <span>Alternative Movements</span>
          </div>
        }
        subtitle={`Targeting the same ${currentExercise.primaryMuscle} muscle group`}
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {alternatives.map((alt) => (
          <Link
            key={alt.id}
            to={`/exercises/${alt.id}`}
            className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 p-2.5 transition-colors hover:border-accent/40 hover:bg-surface"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <ExerciseImage
                exercise={alt}
                kind="thumbnail"
                compact
                className="h-9 w-9 shrink-0 rounded-lg"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-ink group-hover:text-accent">
                  {alt.name}
                </p>
                <p className="truncate text-xs text-muted">
                  {alt.equipment} · {alt.exerciseClass}
                </p>
              </div>
            </div>
            <ArrowRight size={15} className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </Card>
  )
}
