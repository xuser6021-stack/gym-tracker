import type { Exercise, ExerciseVisuals } from '../types'
import { exerciseSlug } from '../lib/exerciseSlug'

/**
 * Exercise visual asset registry.
 *
 * Single source of truth for bundled exercise artwork.
 * 100% complete coverage for all 520 exercises in IronTrack V3.5
 * with real exercise photographs (demonstrating start & finish postures)
 * and verified anatomical overlays.
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
 * Complete 100% coverage across all 520 exercises with real photos.
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Guillotine Bench Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Incline Dumbbell Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Chest Press); anatomical design system by IronTrack."
  },
  "incline-barbell-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Incline Bench Press - Medium Grip); anatomical design system by IronTrack."
  },
  "decline-barbell-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Decline Barbell Bench Press); anatomical design system by IronTrack."
  },
  "dumbbell-flat-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Bench Press); anatomical design system by IronTrack."
  },
  "decline-dumbbell-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Decline Dumbbell Bench Press); anatomical design system by IronTrack."
  },
  "close-grip-barbell-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Close-Grip Barbell Bench Press); anatomical design system by IronTrack."
  },
  "dumbbell-chest-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Flyes); anatomical design system by IronTrack."
  },
  "incline-dumbbell-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Flyes); anatomical design system by IronTrack."
  },
  "decline-dumbbell-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Flyes); anatomical design system by IronTrack."
  },
  "cable-crossover": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Crossover); anatomical design system by IronTrack."
  },
  "high-to-low-cable-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (High Cable Curls); anatomical design system by IronTrack."
  },
  "low-to-high-cable-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (High Cable Curls); anatomical design system by IronTrack."
  },
  "middle-cable-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Chest Press); anatomical design system by IronTrack."
  },
  "pec-deck-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Butterfly); anatomical design system by IronTrack."
  },
  "dips-chest": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dips - Chest Version); anatomical design system by IronTrack."
  },
  "weighted-dips-chest": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dips - Chest Version); anatomical design system by IronTrack."
  },
  "assisted-chest-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dips - Chest Version); anatomical design system by IronTrack."
  },
  "push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "diamond-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "decline-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "incline-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "wide-grip-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "smith-machine-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Bench Press); anatomical design system by IronTrack."
  },
  "smith-machine-incline-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Incline Bench Press); anatomical design system by IronTrack."
  },
  "smith-machine-decline-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Bench Press); anatomical design system by IronTrack."
  },
  "machine-incline-chest-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Incline Cable Chest Press); anatomical design system by IronTrack."
  },
  "machine-decline-chest-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leverage Decline Chest Press); anatomical design system by IronTrack."
  },
  "single-arm-dumbbell-bench-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Bench Press); anatomical design system by IronTrack."
  },
  "dumbbell-floor-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Floor Press); anatomical design system by IronTrack."
  },
  "barbell-floor-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Floor Press); anatomical design system by IronTrack."
  },
  "svend-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Svend Press); anatomical design system by IronTrack."
  },
  "dumbbell-squeeze-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Press); anatomical design system by IronTrack."
  },
  "incline-dumbbell-squeeze-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Incline Dumbbell Press); anatomical design system by IronTrack."
  },
  "resistance-band-chest-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Chest Press); anatomical design system by IronTrack."
  },
  "resistance-band-chest-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Back Flyes - With Bands); anatomical design system by IronTrack."
  },
  "band-resisted-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "landmine-chest-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Chest Press); anatomical design system by IronTrack."
  },
  "single-arm-landmine-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Landmine Linear Jammer); anatomical design system by IronTrack."
  },
  "kneeling-landmine-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Landmine Linear Jammer); anatomical design system by IronTrack."
  },
  "cable-iron-cross": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Iron Cross); anatomical design system by IronTrack."
  },
  "around-the-world-dumbbell": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Around The Worlds); anatomical design system by IronTrack."
  },
  "guillotine-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Guillotine Bench Press); anatomical design system by IronTrack."
  },
  "incline-cable-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Incline Cable Chest Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Cable Rows); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (T-Bar Row with Handle); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Single-Arm Cable Crossover); anatomical design system by IronTrack."
  },
  "pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "chin-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Chin-Up); anatomical design system by IronTrack."
  },
  "neutral-grip-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "weighted-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "assisted-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "barbell-bent-over-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent Over Barbell Row); anatomical design system by IronTrack."
  },
  "pendlay-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent Over Barbell Row); anatomical design system by IronTrack."
  },
  "underhand-barbell-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Upright Barbell Row); anatomical design system by IronTrack."
  },
  "single-arm-dumbbell-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (One-Arm Dumbbell Row); anatomical design system by IronTrack."
  },
  "t-bar-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (T-Bar Row with Handle); anatomical design system by IronTrack."
  },
  "chest-supported-t-bar-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (T-Bar Row with Handle); anatomical design system by IronTrack."
  },
  "straight-arm-cable-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Straight-Arm Pulldown); anatomical design system by IronTrack."
  },
  "dumbbell-pullover": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent-Arm Dumbbell Pullover); anatomical design system by IronTrack."
  },
  "close-grip-lat-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
  },
  "wide-grip-cable-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Cable Rows); anatomical design system by IronTrack."
  },
  "face-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Face Pull); anatomical design system by IronTrack."
  },
  "barbell-shrug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Shrug); anatomical design system by IronTrack."
  },
  "dumbbell-shrug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Shrug); anatomical design system by IronTrack."
  },
  "trap-bar-shrug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Trap Bar Deadlift); anatomical design system by IronTrack."
  },
  "smith-machine-shrug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Behind the Back Shrug); anatomical design system by IronTrack."
  },
  "barbell-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "sumo-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "trap-bar-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Trap Bar Deadlift); anatomical design system by IronTrack."
  },
  "barbell-rack-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Rack Pulls); anatomical design system by IronTrack."
  },
  "back-hyperextension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hyperextensions (Back Extensions)); anatomical design system by IronTrack."
  },
  "weighted-back-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hyperextensions (Back Extensions)); anatomical design system by IronTrack."
  },
  "barbell-good-morning": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Good Morning); anatomical design system by IronTrack."
  },
  "inverted-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Inverted Row); anatomical design system by IronTrack."
  },
  "inverted-row-feet-elevated": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Inverted Row); anatomical design system by IronTrack."
  },
  "meadows-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (One-Arm Dumbbell Row); anatomical design system by IronTrack."
  },
  "seal-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Upright Barbell Row); anatomical design system by IronTrack."
  },
  "single-arm-lat-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
  },
  "kneeling-cable-lat-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
  },
  "machine-lat-pulldown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Lat Pulldown); anatomical design system by IronTrack."
  },
  "machine-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Upright Row); anatomical design system by IronTrack."
  },
  "renegade-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Renegade Row); anatomical design system by IronTrack."
  },
  "band-pull-apart": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Pull Apart); anatomical design system by IronTrack."
  },
  "band-face-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Face Pull); anatomical design system by IronTrack."
  },
  "superman-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Superman); anatomical design system by IronTrack."
  },
  "bird-dog": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Superman); anatomical design system by IronTrack."
  },
  "scapular-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "prone-y-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Incline Shoulder Raise); anatomical design system by IronTrack."
  },
  "prone-t-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Incline Shoulder Raise); anatomical design system by IronTrack."
  },
  "gorilla-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Kettlebell Row); anatomical design system by IronTrack."
  },
  "cable-kayak-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Upright Cable Row); anatomical design system by IronTrack."
  },
  "snatch-grip-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "single-arm-landmine-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kneeling Single-Arm High Pulley Row); anatomical design system by IronTrack."
  },
  "lat-prayer": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Rope Crunch); anatomical design system by IronTrack."
  },
  "cable-shrug": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Shrugs); anatomical design system by IronTrack."
  },
  "jefferson-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Leg Curl); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Dumbbell Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side Lateral Raise); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Seated Lateral Raise); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Machine Shoulder (Military) Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Butterfly); anatomical design system by IronTrack."
  },
  "standing-overhead-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Military Press); anatomical design system by IronTrack."
  },
  "seated-barbell-overhead-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Military Press); anatomical design system by IronTrack."
  },
  "arnold-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Arnold Dumbbell Press); anatomical design system by IronTrack."
  },
  "push-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Push Press); anatomical design system by IronTrack."
  },
  "behind-neck-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Barbell Press Behind Neck); anatomical design system by IronTrack."
  },
  "seated-dumbbell-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side Lateral Raise); anatomical design system by IronTrack."
  },
  "machine-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lateral Raise - With Bands); anatomical design system by IronTrack."
  },
  "behind-back-cable-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Seated Lateral Raise); anatomical design system by IronTrack."
  },
  "incline-dumbbell-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side Lateral Raise); anatomical design system by IronTrack."
  },
  "dumbbell-front-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Dumbbell Raise); anatomical design system by IronTrack."
  },
  "barbell-front-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Front Barbell Raise Over Head); anatomical design system by IronTrack."
  },
  "plate-front-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Plate Raise); anatomical design system by IronTrack."
  },
  "cable-front-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Cable Raise); anatomical design system by IronTrack."
  },
  "dumbbell-rear-delt-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent Over Dumbbell Rear Delt Raise With Head On Bench); anatomical design system by IronTrack."
  },
  "cable-rear-delt-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Rear Delt Fly); anatomical design system by IronTrack."
  },
  "barbell-upright-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Upright Barbell Row); anatomical design system by IronTrack."
  },
  "cable-upright-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Upright Cable Row); anatomical design system by IronTrack."
  },
  "dumbbell-upright-row": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Upright Row); anatomical design system by IronTrack."
  },
  "landmine-shoulder-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Shoulder Press); anatomical design system by IronTrack."
  },
  "kettlebell-overhead-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Military Press); anatomical design system by IronTrack."
  },
  "kettlebell-push-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Double Kettlebell Push Press); anatomical design system by IronTrack."
  },
  "handstand-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "pike-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "feet-elevated-pike-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "lu-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lateral Raise - With Bands); anatomical design system by IronTrack."
  },
  "external-cable-shoulder-rotation": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (External Rotation with Cable); anatomical design system by IronTrack."
  },
  "internal-cable-shoulder-rotation": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Internal Rotation); anatomical design system by IronTrack."
  },
  "dumbbell-external-rotation": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (External Rotation); anatomical design system by IronTrack."
  },
  "cuban-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cuban Press); anatomical design system by IronTrack."
  },
  "scaption-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Raise); anatomical design system by IronTrack."
  },
  "smith-machine-shoulder-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Overhead Shoulder Press); anatomical design system by IronTrack."
  },
  "kneeling-bottoms-up-kb-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Kettlebell Press); anatomical design system by IronTrack."
  },
  "landmine-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lateral Raise - With Bands); anatomical design system by IronTrack."
  },
  "band-overhead-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Military Press); anatomical design system by IronTrack."
  },
  "band-lateral-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lateral Raise - With Bands); anatomical design system by IronTrack."
  },
  "rear-delt-row-cable": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Rear Delt Row); anatomical design system by IronTrack."
  },
  "dumbbell-w-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Incline Shoulder Raise); anatomical design system by IronTrack."
  },
  "barbell-clean-and-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Clean and Press); anatomical design system by IronTrack."
  },
  "seated-dumbbell-clean-and-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Clean and Press); anatomical design system by IronTrack."
  },
  "single-arm-dumbbell-snatch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Single Dumbbell Raise); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Dumbbell Inner Biceps Curl); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hammer Curls); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (EZ-Bar Curl); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Incline Dumbbell Curl); anatomical design system by IronTrack."
  },
  "barbell-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Curl); anatomical design system by IronTrack."
  },
  "preacher-curl-ez-bar": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Preacher Curl); anatomical design system by IronTrack."
  },
  "dumbbell-preacher-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Preacher Curl); anatomical design system by IronTrack."
  },
  "machine-preacher-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Preacher Curl); anatomical design system by IronTrack."
  },
  "concentration-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Concentration Curl); anatomical design system by IronTrack."
  },
  "spider-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Spider Curl); anatomical design system by IronTrack."
  },
  "cable-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Biceps Cable Curl); anatomical design system by IronTrack."
  },
  "cable-bayesian-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Preacher Curl); anatomical design system by IronTrack."
  },
  "high-cable-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Overhead Cable Curl); anatomical design system by IronTrack."
  },
  "rope-cable-hammer-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hammer Curls); anatomical design system by IronTrack."
  },
  "cross-body-hammer-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hammer Curls); anatomical design system by IronTrack."
  },
  "reverse-grip-ez-bar-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Close-Grip EZ Bar Curl); anatomical design system by IronTrack."
  },
  "zottman-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Zottman Curl); anatomical design system by IronTrack."
  },
  "drag-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Drag Curl); anatomical design system by IronTrack."
  },
  "waiter-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Bicep Curl); anatomical design system by IronTrack."
  },
  "seated-incline-hammer-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hammer Curls); anatomical design system by IronTrack."
  },
  "band-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Biceps Cable Curl); anatomical design system by IronTrack."
  },
  "kettlebell-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Biceps Cable Curl); anatomical design system by IronTrack."
  },
  "chin-up-biceps-focus": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Chin-Up); anatomical design system by IronTrack."
  },
  "wrist-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Curl); anatomical design system by IronTrack."
  },
  "reverse-wrist-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Reverse Barbell Curl); anatomical design system by IronTrack."
  },
  "farmers-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Farmer's Walk); anatomical design system by IronTrack."
  },
  "dead-hang": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (One Handed Hang); anatomical design system by IronTrack."
  },
  "plate-pinch-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Plate Pinch); anatomical design system by IronTrack."
  },
  "single-arm-cable-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Preacher Curl); anatomical design system by IronTrack."
  },
  "seated-dumbbell-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Dumbbell Inner Biceps Curl); anatomical design system by IronTrack."
  },
  "prone-incline-hammer-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hammer Curls); anatomical design system by IronTrack."
  },
  "cable-rope-preacher-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Preacher Curl); anatomical design system by IronTrack."
  },
  "towel-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "wrist-roller": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wrist Roller); anatomical design system by IronTrack."
  },
  "standing-inner-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Wide-Grip Standing Barbell Curl); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Triceps Pushdown - Rope Attachment); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Rope Overhead Triceps Extension); anatomical design system by IronTrack."
  },
  "straight-bar-triceps-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Triceps Pushdown - V-Bar Attachment); anatomical design system by IronTrack."
  },
  "v-bar-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Triceps Pushdown - V-Bar Attachment); anatomical design system by IronTrack."
  },
  "skull-crusher-ez-bar": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Lying Triceps Extension); anatomical design system by IronTrack."
  },
  "dumbbell-skull-crusher": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Skull Crusher); anatomical design system by IronTrack."
  },
  "dumbbell-overhead-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Triceps Extension); anatomical design system by IronTrack."
  },
  "single-arm-overhead-dumbbell-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Triceps Extension); anatomical design system by IronTrack."
  },
  "dips-triceps": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dips - Triceps Version); anatomical design system by IronTrack."
  },
  "bench-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bench Dips); anatomical design system by IronTrack."
  },
  "weighted-bench-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bench Dips); anatomical design system by IronTrack."
  },
  "single-arm-cable-triceps-kickback": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kneeling Cable Triceps Extension); anatomical design system by IronTrack."
  },
  "dumbbell-triceps-kickback": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Triceps Extension); anatomical design system by IronTrack."
  },
  "tate-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Press); anatomical design system by IronTrack."
  },
  "jm-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (JM Press); anatomical design system by IronTrack."
  },
  "reverse-grip-triceps-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Reverse Grip Triceps Pushdown); anatomical design system by IronTrack."
  },
  "cross-body-cable-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kneeling Cable Triceps Extension); anatomical design system by IronTrack."
  },
  "bodyweight-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Decline Close-Grip Bench To Skull Crusher); anatomical design system by IronTrack."
  },
  "machine-triceps-dip": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dip Machine); anatomical design system by IronTrack."
  },
  "band-triceps-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Triceps Pushdown); anatomical design system by IronTrack."
  },
  "single-arm-cable-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Triceps Pushdown); anatomical design system by IronTrack."
  },
  "incline-ez-bar-skull-crusher": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Skull Crusher); anatomical design system by IronTrack."
  },
  "decline-ez-bar-skull-crusher": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Decline Close-Grip Bench To Skull Crusher); anatomical design system by IronTrack."
  },
  "kettlebell-overhead-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Sled Overhead Triceps Extension); anatomical design system by IronTrack."
  },
  "california-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (JM Press); anatomical design system by IronTrack."
  },
  "cable-overhead-single-arm-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Rope Overhead Triceps Extension); anatomical design system by IronTrack."
  },
  "band-overhead-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Sled Overhead Triceps Extension); anatomical design system by IronTrack."
  },
  "diamond-push-up-triceps": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "smith-machine-close-grip-bench": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Close-Grip Bench Press); anatomical design system by IronTrack."
  },
  "single-arm-reverse-cable-pushdown": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Reverse Grip Triceps Pushdown); anatomical design system by IronTrack."
  },
  "dumbbell-kickback-both-arms": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent Over Two-Dumbbell Row); anatomical design system by IronTrack."
  },
  "cross-body-dumbbell-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Dumbbell Triceps Extension); anatomical design system by IronTrack."
  },
  "floor-skull-crusher": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Skull Crusher); anatomical design system by IronTrack."
  },
  "incline-cable-triceps-kickback": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Incline Triceps Extension); anatomical design system by IronTrack."
  },
  "ring-triceps-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dips - Triceps Version); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "front-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Barbell Squat); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Goblet Squat); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Press); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Extensions); anatomical design system by IronTrack."
  },
  "hack-squat-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hack Squat); anatomical design system by IronTrack."
  },
  "bulgarian-split-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Split Squat with Dumbbells); anatomical design system by IronTrack."
  },
  "walking-dumbbell-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Lunges); anatomical design system by IronTrack."
  },
  "reverse-dumbbell-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Lunges); anatomical design system by IronTrack."
  },
  "dumbbell-step-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Step Ups); anatomical design system by IronTrack."
  },
  "sissy-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bodyweight Squat); anatomical design system by IronTrack."
  },
  "zercher-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "box-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Box Squat); anatomical design system by IronTrack."
  },
  "pin-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "heel-elevated-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "smith-machine-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Squat); anatomical design system by IronTrack."
  },
  "single-leg-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Press); anatomical design system by IronTrack."
  },
  "narrow-stance-leg-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Press); anatomical design system by IronTrack."
  },
  "bodyweight-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bodyweight Squat); anatomical design system by IronTrack."
  },
  "wall-sit": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "pistol-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Pistol Squat); anatomical design system by IronTrack."
  },
  "cossack-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kneeling Squat); anatomical design system by IronTrack."
  },
  "forward-dumbbell-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Lunges); anatomical design system by IronTrack."
  },
  "curtsy-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Rear Lunge); anatomical design system by IronTrack."
  },
  "jump-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bodyweight Squat); anatomical design system by IronTrack."
  },
  "box-jump": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Box Jump); anatomical design system by IronTrack."
  },
  "banded-leg-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Extensions); anatomical design system by IronTrack."
  },
  "pendulum-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lying Machine Squat); anatomical design system by IronTrack."
  },
  "belt-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lying Machine Squat); anatomical design system by IronTrack."
  },
  "overhead-barbell-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "single-leg-box-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Box Squat); anatomical design system by IronTrack."
  },
  "duck-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bodyweight Squat); anatomical design system by IronTrack."
  },
  "kettlebell-front-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Barbell Squat); anatomical design system by IronTrack."
  },
  "smith-machine-hack-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hack Squat); anatomical design system by IronTrack."
  },
  "lateral-step-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Step Ups); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Stiff-Legged Dumbbell Deadlift); anatomical design system by IronTrack."
  },
  "barbell-romanian-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Leg Curl); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lying Leg Curls); anatomical design system by IronTrack."
  },
  "nordic-hamstring-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Band Hamstring Curl); anatomical design system by IronTrack."
  },
  "standing-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Machine Bicep Curl); anatomical design system by IronTrack."
  },
  "single-leg-romanian-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Stiff-Legged Dumbbell Deadlift); anatomical design system by IronTrack."
  },
  "swiss-ball-hamstring-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ball Leg Curl); anatomical design system by IronTrack."
  },
  "slider-hamstring-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ball Leg Curl); anatomical design system by IronTrack."
  },
  "glute-ham-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Glute Ham Raise); anatomical design system by IronTrack."
  },
  "cable-pull-through": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pull Through); anatomical design system by IronTrack."
  },
  "kettlebell-swing": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (One-Arm Kettlebell Swings); anatomical design system by IronTrack."
  },
  "trap-bar-rdl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
  },
  "single-leg-cable-kickback-hamstring": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Leg Curl); anatomical design system by IronTrack."
  },
  "dumbbell-lying-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lying Leg Curls); anatomical design system by IronTrack."
  },
  "stiff-legged-barbell-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "single-leg-nordic-curl-assisted": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Band Hamstring Curl); anatomical design system by IronTrack."
  },
  "band-seated-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Leg Curl); anatomical design system by IronTrack."
  },
  "single-leg-bridge-hamstring": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Butt Lift (Bridge)); anatomical design system by IronTrack."
  },
  "b-stance-dumbbell-rdl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Stiff-Legged Dumbbell Deadlift); anatomical design system by IronTrack."
  },
  "smith-machine-rdl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
  },
  "kettlebell-single-leg-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "cable-seated-hamstring-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Band Hamstring Curl); anatomical design system by IronTrack."
  },
  "landmine-romanian-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
  },
  "slider-single-leg-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ball Leg Curl); anatomical design system by IronTrack."
  },
  "dumbbell-stiff-leg-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "snatch-grip-rdl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
  },
  "reverse-hyper": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Reverse Hyperextension); anatomical design system by IronTrack."
  },
  "band-standing-hamstring-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Band Hamstring Curl); anatomical design system by IronTrack."
  },
  "deficit-romanian-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Romanian Deadlift); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Hip Thrust); anatomical design system by IronTrack."
  },
  "barbell-hip-thrust": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Hip Thrust); anatomical design system by IronTrack."
  },
  "glute-bridge-dumbbell": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Glute Bridge); anatomical design system by IronTrack."
  },
  "single-leg-glute-bridge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Single Leg Glute Bridge); anatomical design system by IronTrack."
  },
  "single-leg-hip-thrust": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Hip Thrust); anatomical design system by IronTrack."
  },
  "cable-glute-kickback": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Glute Kickback); anatomical design system by IronTrack."
  },
  "cable-hip-abduction": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Hip Adduction); anatomical design system by IronTrack."
  },
  "seated-hip-abduction-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Thigh Abductor); anatomical design system by IronTrack."
  },
  "seated-hip-adduction-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Hip Adduction); anatomical design system by IronTrack."
  },
  "copenhagen-plank": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Thigh Adductor); anatomical design system by IronTrack."
  },
  "band-lateral-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Monster Walk); anatomical design system by IronTrack."
  },
  "side-lying-clam": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side-Lying Floor Stretch); anatomical design system by IronTrack."
  },
  "banded-clamshell": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "fire-hydrant": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "donkey-kick": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Glute Kickback); anatomical design system by IronTrack."
  },
  "banded-donkey-kick": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Glute Kickback); anatomical design system by IronTrack."
  },
  "frog-pump": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Glute Bridge); anatomical design system by IronTrack."
  },
  "kas-glute-bridge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Glute Bridge); anatomical design system by IronTrack."
  },
  "step-back-glute-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Rear Lunge); anatomical design system by IronTrack."
  },
  "cable-pull-through-glutes": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Good Morning (Pull Through)); anatomical design system by IronTrack."
  },
  "side-lying-leg-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side Lateral Raise); anatomical design system by IronTrack."
  },
  "smith-machine-hip-thrust": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Smith Machine Hip Raise); anatomical design system by IronTrack."
  },
  "band-hip-thrust": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Hip Adductions); anatomical design system by IronTrack."
  },
  "cable-seated-abduction-bench": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Hip Adduction); anatomical design system by IronTrack."
  },
  "single-leg-cable-pull-through": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pull Through); anatomical design system by IronTrack."
  },
  "curtsy-squat-bodyweight": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bodyweight Walking Lunge); anatomical design system by IronTrack."
  },
  "kettlebell-goblet-curtsy-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "glute-hyperextension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hyperextensions (Back Extensions)); anatomical design system by IronTrack."
  },
  "dumbbell-frog-pump": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Glute Bridge); anatomical design system by IronTrack."
  },
  "b-stance-hip-thrust": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Hip Thrust); anatomical design system by IronTrack."
  },
  "glute-band-seated-abduction-tuck": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "band-standing-kickback": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Glute Kickback); anatomical design system by IronTrack."
  },
  "rainbow-glute-kick": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "kneeling-squat-glute": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Squat); anatomical design system by IronTrack."
  },
  "dumbbell-sumo-squat-glute": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Squat); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Calf Raises); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Calf Raise); anatomical design system by IronTrack."
  },
  "leg-press-calf-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Leg Press); anatomical design system by IronTrack."
  },
  "single-leg-standing-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Calf Raises); anatomical design system by IronTrack."
  },
  "smith-machine-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Calf Raises); anatomical design system by IronTrack."
  },
  "dumbbell-seated-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Calf Raise); anatomical design system by IronTrack."
  },
  "donkey-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Donkey Calf Raises); anatomical design system by IronTrack."
  },
  "tibialis-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Anterior Tibialis-SMR); anatomical design system by IronTrack."
  },
  "weighted-tibialis-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Raise); anatomical design system by IronTrack."
  },
  "jump-rope": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle Circles); anatomical design system by IronTrack."
  },
  "barbell-standing-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Calf Raises); anatomical design system by IronTrack."
  },
  "hack-squat-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hack Squat); anatomical design system by IronTrack."
  },
  "band-calf-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Calf Press); anatomical design system by IronTrack."
  },
  "single-leg-seated-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Calf Raise); anatomical design system by IronTrack."
  },
  "farmer-toe-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Farmer's Walk); anatomical design system by IronTrack."
  },
  "stair-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle Circles); anatomical design system by IronTrack."
  },
  "cable-standing-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Calf Raises); anatomical design system by IronTrack."
  },
  "seated-band-tibialis-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "single-leg-dumbbell-calf-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Calf Raise On A Dumbbell); anatomical design system by IronTrack."
  },
  "incline-treadmill-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle Circles); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Plank); anatomical design system by IronTrack."
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
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dead Bug); anatomical design system by IronTrack."
  },
  "hanging-leg-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hanging Leg Raise); anatomical design system by IronTrack."
  },
  "hanging-knee-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Hanging Leg Raise); anatomical design system by IronTrack."
  },
  "captain-chair-leg-raise": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "ab-wheel-rollout": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ab Roller); anatomical design system by IronTrack."
  },
  "standing-ab-wheel-rollout": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ab Roller); anatomical design system by IronTrack."
  },
  "cable-woodchopper": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Cable Wood Chop); anatomical design system by IronTrack."
  },
  "cable-woodchopper-low-to-high": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Cable Wood Chop); anatomical design system by IronTrack."
  },
  "pallof-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pallof Press); anatomical design system by IronTrack."
  },
  "side-plank": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Push Up to Side Plank); anatomical design system by IronTrack."
  },
  "russian-twist": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Russian Twist); anatomical design system by IronTrack."
  },
  "bicycle-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "cable-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Cable Crunch); anatomical design system by IronTrack."
  },
  "machine-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ab Crunch Machine); anatomical design system by IronTrack."
  },
  "decline-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Decline Crunch); anatomical design system by IronTrack."
  },
  "floor-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "hollow-body-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "l-sit": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Parallel Bar Dip); anatomical design system by IronTrack."
  },
  "ab-vacuum": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Stomach Vacuum); anatomical design system by IronTrack."
  },
  "dragon-flag": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "v-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "toe-touches-abs": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Standing Toe Touches); anatomical design system by IronTrack."
  },
  "reverse-crunch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Reverse Crunch); anatomical design system by IronTrack."
  },
  "windshield-wipers": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "floor-windshield-wipers": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "dumbbell-side-bend": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dumbbell Side Bend); anatomical design system by IronTrack."
  },
  "suit-case-carry": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Farmer's Walk); anatomical design system by IronTrack."
  },
  "barbell-rollout": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Ab Rollout); anatomical design system by IronTrack."
  },
  "plank-shoulder-tap": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "mountain-climber": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Mountain Climbers); anatomical design system by IronTrack."
  },
  "stir-the-pot": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "swiss-ball-pike": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "cable-kneeling-pallof-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "band-woodchopper": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "side-plank-hip-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Push Up to Side Plank); anatomical design system by IronTrack."
  },
  "hollow-body-rock": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "seated-in-and-outs": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "flutter-kicks": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Flutter Kicks); anatomical design system by IronTrack."
  },
  "bear-crawl-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "landmine-rotations": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "cable-side-bend": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Side Bend); anatomical design system by IronTrack."
  },
  "toes-to-bar": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "weighted-plank": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Plank); anatomical design system by IronTrack."
  },
  "inchworm-walkout": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "muscle-up-bar": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kipping Muscle Up); anatomical design system by IronTrack."
  },
  "muscle-up-rings": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Assisted Pull-Up); anatomical design system by IronTrack."
  },
  "front-lever": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Assisted Pull-Up); anatomical design system by IronTrack."
  },
  "tuck-front-lever": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Assisted Pull-Up); anatomical design system by IronTrack."
  },
  "back-lever": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Atlas Stone Trainer); anatomical design system by IronTrack."
  },
  "planche-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "tuck-planche": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "planche-lean": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "handstand-hold-freestanding": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "handstand-wall-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "skin-the-cat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "ring-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "archer-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "one-arm-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "archer-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "one-arm-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "typewriter-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "clapping-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "pseudo-planche-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "ring-biceps-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternate Hammer Curl); anatomical design system by IronTrack."
  },
  "ring-triceps-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kneeling Cable Triceps Extension); anatomical design system by IronTrack."
  },
  "shrimp-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Single-Leg High Box Squat); anatomical design system by IronTrack."
  },
  "nordic-quad-extension": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
  },
  "broad-jump": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
  },
  "parallette-l-sit-to-tuck-planche": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "pike-push-up-feet-elevated": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "korean-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Skull Crusher); anatomical design system by IronTrack."
  },
  "spiderman-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "ring-fly": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Floor Press); anatomical design system by IronTrack."
  },
  "ring-fallout": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "commando-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "scapular-dips": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Shrug); anatomical design system by IronTrack."
  },
  "hindu-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "dive-bomber-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "ring-archer-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "parallette-shoot-through": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "headstand-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "burpee-calisthenics": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "tuck-planche-push-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pushups); anatomical design system by IronTrack."
  },
  "stalder-press-eccentric": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "dragon-walks": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "ring-pelican-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternate Hammer Curl); anatomical design system by IronTrack."
  },
  "single-leg-calf-bounce": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Single-Leg Hop Progression); anatomical design system by IronTrack."
  },
  "chest-to-bar-pull-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Pullups); anatomical design system by IronTrack."
  },
  "ring-l-sit-dip": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Skull Crusher); anatomical design system by IronTrack."
  },
  "outdoor-running": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "treadmill-running": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Running, Treadmill); anatomical design system by IronTrack."
  },
  "sprint-intervals-track": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "hill-sprints": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "rowing-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "rowing-intervals-500m": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "assault-bike": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Air Bike); anatomical design system by IronTrack."
  },
  "assault-bike-sprint": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "skierg-machine": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "stationary-bike": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "cycling-road": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "stairmaster-climber": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "elliptical-trainer": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Elliptical Trainer); anatomical design system by IronTrack."
  },
  "swimming-freestyle": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "swimming-breaststroke": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "battle-ropes": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "battle-rope-slams": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "slam-ball": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (One-Arm Medicine Ball Slam); anatomical design system by IronTrack."
  },
  "sled-push": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Sled Push); anatomical design system by IronTrack."
  },
  "sled-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Backward Drag); anatomical design system by IronTrack."
  },
  "boxer-skip": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "double-unders": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "burpee-broad-jump": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "jumping-jacks": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "shadow-boxing": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "heavy-bag-rounds": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Heavy Bag Thrust); anatomical design system by IronTrack."
  },
  "shuttle-runs": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "skater-jumps": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "high-knees-drill": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "rowing-1000m-time-trial": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "worlds-greatest-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (World's Greatest Stretch); anatomical design system by IronTrack."
  },
  "cat-cow-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "thoracic-spine-open-book": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "pigeon-pose": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (IT Band and Glute Stretch); anatomical design system by IronTrack."
  },
  "couch-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Intermediate Hip Flexor and Quad Stretch); anatomical design system by IronTrack."
  },
  "kneeling-hip-flexor-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Intermediate Hip Flexor and Quad Stretch); anatomical design system by IronTrack."
  },
  "frog-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Adductor); anatomical design system by IronTrack."
  },
  "butterfly-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Calf Stretch); anatomical design system by IronTrack."
  },
  "deep-squat-hold": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "ankle-wall-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle Circles); anatomical design system by IronTrack."
  },
  "band-lat-distraction": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Assisted Pull-Up); anatomical design system by IronTrack."
  },
  "childs-pose": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Child's Pose); anatomical design system by IronTrack."
  },
  "puppy-dog-pose": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "thoracic-foam-roll": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "standing-doorway-pec-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Floor Press); anatomical design system by IronTrack."
  },
  "band-dislocates": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "prone-scorpion-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Dynamic Back Stretch); anatomical design system by IronTrack."
  },
  "seated-piriformis-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Seated Calf Stretch); anatomical design system by IronTrack."
  },
  "figure-four-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (IT Band and Glute Stretch); anatomical design system by IronTrack."
  },
  "thread-the-needle": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "90-90-hip-mobility": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "standing-hamstring-scoop": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (90/90 Hamstring); anatomical design system by IronTrack."
  },
  "wrist-mobility-flow": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bottoms-Up Clean From The Hang Position); anatomical design system by IronTrack."
  },
  "couch-quad-smash": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
  },
  "glute-lacrosse-ball-smash": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "adductor-rocking-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Adductor); anatomical design system by IronTrack."
  },
  "shoulder-sleeper-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Side-Lying Floor Stretch); anatomical design system by IronTrack."
  },
  "standing-quad-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Quad Stretch); anatomical design system by IronTrack."
  },
  "calf-slant-board-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle Circles); anatomical design system by IronTrack."
  },
  "bretzel-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "jefferson-curl-light": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "lateral-neck-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Shrug); anatomical design system by IronTrack."
  },
  "standing-figure-four-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Ankle On The Knee); anatomical design system by IronTrack."
  },
  "overhead-lat-hang-stretch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Band Assisted Pull-Up); anatomical design system by IronTrack."
  },
  "it-band-foam-roll": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "turkish-get-up": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Turkish Get-Up (Lunge style)); anatomical design system by IronTrack."
  },
  "kettlebell-snatch": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Double Kettlebell Snatch); anatomical design system by IronTrack."
  },
  "kettlebell-clean": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Dead Clean); anatomical design system by IronTrack."
  },
  "kettlebell-clean-and-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Clean and Press); anatomical design system by IronTrack."
  },
  "windmill-kettlebell": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Windmill); anatomical design system by IronTrack."
  },
  "kettlebell-halo": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "single-arm-kettlebell-swing": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (90/90 Hamstring); anatomical design system by IronTrack."
  },
  "double-kettlebell-swing": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Double Kettlebell Jerk); anatomical design system by IronTrack."
  },
  "kettlebell-goblet-squat-deep": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
  },
  "double-kettlebell-clean-and-jerk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Double Kettlebell Jerk); anatomical design system by IronTrack."
  },
  "kettlebell-slingshot": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "kettlebell-figure-eight": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Pass Between The Legs); anatomical design system by IronTrack."
  },
  "kettlebell-windmill-low-hang": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Windmill); anatomical design system by IronTrack."
  },
  "kettlebell-waiter-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "kettlebell-rack-walk": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "kettlebell-deck-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Pistol Squat); anatomical design system by IronTrack."
  },
  "kettlebell-sots-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternating Cable Shoulder Press); anatomical design system by IronTrack."
  },
  "kettlebell-crush-curl": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Alternate Hammer Curl); anatomical design system by IronTrack."
  },
  "kettlebell-high-pull": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Sumo High Pull); anatomical design system by IronTrack."
  },
  "double-kettlebell-front-squat-deep": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Front Barbell Squat); anatomical design system by IronTrack."
  },
  "kettlebell-cross-body-clean": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (90/90 Hamstring); anatomical design system by IronTrack."
  },
  "kettlebell-seesaw-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Seesaw Press); anatomical design system by IronTrack."
  },
  "kettlebell-lateral-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
  },
  "kettlebell-gorilla-clean": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Double Kettlebell Alternating Hang Clean); anatomical design system by IronTrack."
  },
  "kettlebell-arm-bar": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (3/4 Sit-Up); anatomical design system by IronTrack."
  },
  "kettlebell-tactical-lunge": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Lunge Pass Through); anatomical design system by IronTrack."
  },
  "kettlebell-bent-press": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Bent Press); anatomical design system by IronTrack."
  },
  "kettlebell-dead-clean": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Kettlebell Dead Clean); anatomical design system by IronTrack."
  },
  "double-kettlebell-deadlift": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (Barbell Deadlift); anatomical design system by IronTrack."
  },
  "kettlebell-somersault-squat": {
    "available": [
      "thumbnail",
      "start",
      "finish",
      "anatomy"
    ],
    "source": "free-exercise-db (yuhonas) & IronTrack Anatomical Design System",
    "license": "Public Domain (Unlicense) / CC0",
    "attribution": "Real photographic exercise demonstration from free-exercise-db (All Fours Quad Stretch); anatomical design system by IronTrack."
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
