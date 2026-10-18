import type { Exercise, ExerciseVisuals } from '../types'
import { exerciseSlug } from '../lib/exerciseSlug'

/**
 * Exercise visual asset registry.
 *
 * Single source of truth for bundled exercise artwork.
 * Generated and validated locally with verified public-domain photography
 * and custom anatomical illustrations.
 */
export const EXERCISE_ASSET_ROOT = '/exercises'

export type VisualKind = 'thumbnail' | 'anatomy' | 'start' | 'finish' | 'animation'

export interface VisualAssetRecord {
  /** Which bundled files are present under `/exercises/<slug>/`. */
  available: VisualKind[]
  /** Where the asset came from (author/URL/service). */
  source: string
  /** Licence name. */
  license: string
  /** Human-readable attribution string. */
  attribution: string
}

/** File name convention inside each `/exercises/<slug>/` folder. */
export const VISUAL_FILE_NAMES: Record<VisualKind, string> = {
  thumbnail: 'thumbnail.webp',
  anatomy: 'anatomy.webp',
  start: 'start.webp',
  finish: 'finish.webp',
  animation: 'animation.webm',
}

/**
 * Bundled artwork shipped with the app.
 * Full coverage across all 31 built-in exercises.
 */
export const BUNDLED_VISUALS: Record<string, VisualAssetRecord> = {
  "barbell-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "incline-dumbbell-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "seated-db-shoulder-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "db-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "cable-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "machine-chest-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "machine-shoulder-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "rope-triceps-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "overhead-cable-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "lat-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "lat-pulldown-alt-grip": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "seated-cable-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "chest-supported-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "single-arm-cable-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "reverse-pec-deck": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "dumbbell-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "hammer-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "ez-bar-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "incline-dumbbell-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "leg-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "db-romanian-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "barbell-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "goblet-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "leg-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "seated-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "lying-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "hip-thrust-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "standing-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "seated-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "plank": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  },
  "dead-bug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack."
  }
}

export function visualFilePath(slug: string, kind: VisualKind): string {
  return `${EXERCISE_ASSET_ROOT}/${slug}/${VISUAL_FILE_NAMES[kind]}`
}

export function bundledRecordFor(exerciseId: string): VisualAssetRecord | undefined {
  return BUNDLED_VISUALS[exerciseSlug(exerciseId)]
}

/** True when a bundled animation exists (used for the library "demo available" badge). */
export function hasBundledAnimation(exercise: Exercise): boolean {
  const record = bundledRecordFor(exercise.id)
  return Boolean(record?.available.includes('animation') || exercise.visuals?.animation)
}

/** Resolve an exercise's bundled artwork into concrete file paths (undefined when none). */
export function resolveExerciseVisuals(exercise: Exercise): ExerciseVisuals | undefined {
  // Respect an explicit value (e.g. a future import) before the registry.
  if (exercise.visuals && Object.keys(exercise.visuals).length > 0) return exercise.visuals
  const record = bundledRecordFor(exercise.id)
  if (!record || record.available.length === 0) return undefined
  const slug = exerciseSlug(exercise.id)
  const has = (kind: VisualKind) => record.available.includes(kind)
  return {
    thumbnail: has('thumbnail') ? visualFilePath(slug, 'thumbnail') : undefined,
    anatomyImage: has('anatomy') ? visualFilePath(slug, 'anatomy') : undefined,
    startPositionImage: has('start') ? visualFilePath(slug, 'start') : undefined,
    endPositionImage: has('finish') ? visualFilePath(slug, 'finish') : undefined,
    animation: has('animation') ? visualFilePath(slug, 'animation') : undefined,
    attributionId: record.source,
  }
}
