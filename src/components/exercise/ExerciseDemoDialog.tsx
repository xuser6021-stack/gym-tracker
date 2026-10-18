import { useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import type { Exercise } from '../../types'
import { resolveExerciseVisuals } from '../../data/exerciseVisuals'
import { getExerciseGuide } from '../../data/exerciseGuides'
import { usePrefersReducedMotion } from '../../lib/useReducedMotion'
import { Dialog } from '../ui/Dialog'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { ExerciseImage } from './ExerciseImage'
import { ExercisePlaceholder } from './ExercisePlaceholder'

/**
 * Demonstration viewer. Plays a bundled animation when one exists (with
 * play/pause/replay and a static toggle), otherwise shows start/finish stills
 * or a neutral placeholder next to the written technique guide. Reduced-motion
 * users are always shown a static frame and cannot be switched to motion.
 */
export function ExerciseDemoDialog({
  exercise,
  open,
  onClose,
}: {
  exercise: Exercise
  open: boolean
  onClose: () => void
}) {
  const reduced = usePrefersReducedMotion()
  const visuals = resolveExerciseVisuals(exercise)
  const animation = visuals?.animation
  const guide = getExerciseGuide(exercise)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [userStatic, setUserStatic] = useState(false)

  const hasAnimation = Boolean(animation)
  const showStatic = reduced || userStatic

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => undefined)
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const replay = () => {
    const video = videoRef.current
    if (!video) return
    setUserStatic(false)
    video.currentTime = 0
    video.play().catch(() => undefined)
    setPlaying(true)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      size="lg"
      title={exercise.name}
      description={`${exercise.primaryMuscle} · ${exercise.equipment}`}
    >
      <div className="space-y-4">
        <div className="overflow-hidden rounded-xl border border-line bg-surface2">
          {hasAnimation && !showStatic ? (
            <video
              ref={videoRef}
              src={animation}
              poster={visuals?.startPositionImage}
              autoPlay
              muted
              loop
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={`${exercise.name} demonstration`}
              className="mx-auto max-h-[46vh] w-full bg-surface2 object-contain"
            />
          ) : visuals?.startPositionImage || visuals?.endPositionImage ? (
            <div className="grid grid-cols-2 gap-px bg-line">
              <figure>
                <ExerciseImage exercise={exercise} kind="start" rounded="rounded-none" className="aspect-square" />
                <figcaption className="py-1 text-center text-[11px] text-muted">Start</figcaption>
              </figure>
              <figure>
                <ExerciseImage exercise={exercise} kind="finish" rounded="rounded-none" className="aspect-square" />
                <figcaption className="py-1 text-center text-[11px] text-muted">Finish</figcaption>
              </figure>
            </div>
          ) : (
            <ExercisePlaceholder label={exercise.name} className="aspect-video w-full" />
          )}
        </div>

        {hasAnimation ? (
          <div className="flex flex-wrap items-center gap-2">
            {!showStatic ? (
              <>
                <Button
                  variant="secondary"
                  onClick={togglePlay}
                  aria-label={playing ? 'Pause demonstration' : 'Play demonstration'}
                >
                  {playing ? <Pause size={16} /> : <Play size={16} />}
                  {playing ? 'Pause' : 'Play'}
                </Button>
                <Button variant="secondary" onClick={replay} aria-label="Replay demonstration">
                  <RotateCcw size={16} /> Replay
                </Button>
              </>
            ) : null}
            {!reduced ? (
              <Button
                variant={userStatic ? 'primary' : 'ghost'}
                onClick={() => setUserStatic((v) => !v)}
                aria-pressed={userStatic}
              >
                Static
              </Button>
            ) : null}
          </div>
        ) : (
          <p className="rounded-lg bg-surface2 px-3 py-2 text-xs text-muted">
            Animated demonstration artwork is not bundled for this exercise yet. Follow the written
            steps below.
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          <Badge tone="accent">{exercise.primaryMuscle}</Badge>
          {exercise.secondaryMuscles.map((muscle) => (
            <Badge key={muscle} tone="neutral">
              {muscle}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Starting position</p>
            <p className="mt-1 text-sm text-muted">{guide.starting}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">How to perform</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm text-muted">
              {guide.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          {exercise.mistakes ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Common mistakes</p>
              <p className="mt-1 text-sm text-muted">{exercise.mistakes}</p>
            </div>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Breathing</p>
              <p className="mt-1 text-sm text-muted">{guide.breathing}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Safety</p>
              <p className="mt-1 text-sm text-muted">{guide.safety}</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
