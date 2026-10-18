# Exercise Visuals Status

Honest, per-exercise inventory of bundled exercise artwork for IronTrack V3.2.

> **Status: 124 verified image assets are bundled locally across all 31 exercises.**
> All 31 built-in exercises now feature a dedicated exercise thumbnail, a high-contrast
> anatomical muscle targeting diagram, and photographic start and finish execution diagrams.
> All assets are stored as optimized WebP files under `public/exercises/<slug>/` and served
> offline via the service worker.

## What the app renders today

For each exercise the viewer resolves artwork in this order:

1. **Bundled asset** registered in `src/data/exerciseVisuals.ts` (124 files active).
2. **User-uploaded image** (`Exercise.mediaAssetId`) — custom exercises only.
3. **Neutral placeholder** — an abstract dumbbell glyph used when a custom exercise has no photo.

The written technique guide (starting position, step-by-step performance, breathing cues, common mistakes, and safety notes) is always displayed alongside the visuals.

## Asset kinds and paths

| Kind | Path | Format | Status |
| --- | --- | --- | --- |
| Thumbnail | `/exercises/<slug>/thumbnail.webp` | 320x320 WebP | ✓ Bundled (31/31) |
| Anatomy | `/exercises/<slug>/anatomy.webp` | 600x400 WebP | ✓ Bundled (31/31) |
| Start position | `/exercises/<slug>/start.webp` | 480x360 WebP | ✓ Bundled (31/31) |
| Finish position | `/exercises/<slug>/finish.webp` | 480x360 WebP | ✓ Bundled (31/31) |
| Animation | `/exercises/<slug>/animation.webm` | WebM loop | Disclosed below |

## Bundled library inventory (31 exercises)

`thumb` / `anatomy` / `start` / `finish` = `✓` present; `anim` = `—` pending dedicated 60fps video capture.

| Exercise | Slug | thumb | anatomy | start | finish | anim |
| --- | --- | :---: | :---: | :---: | :---: | :---: |
| Barbell Bench Press | `barbell-bench-press` | ✓ | ✓ | ✓ | ✓ | — |
| Incline Dumbbell Press | `incline-dumbbell-press` | ✓ | ✓ | ✓ | ✓ | — |
| Seated DB Shoulder Press | `seated-db-shoulder-press` | ✓ | ✓ | ✓ | ✓ | — |
| Dumbbell Lateral Raise | `db-lateral-raise` | ✓ | ✓ | ✓ | ✓ | — |
| Cable Lateral Raise | `cable-lateral-raise` | ✓ | ✓ | ✓ | ✓ | — |
| Machine Chest Press | `machine-chest-press` | ✓ | ✓ | ✓ | ✓ | — |
| Machine Shoulder Press | `machine-shoulder-press` | ✓ | ✓ | ✓ | ✓ | — |
| Rope Triceps Pushdown | `rope-triceps-pushdown` | ✓ | ✓ | ✓ | ✓ | — |
| Overhead Cable Triceps Extension | `overhead-cable-triceps-extension` | ✓ | ✓ | ✓ | ✓ | — |
| Lat Pulldown | `lat-pulldown` | ✓ | ✓ | ✓ | ✓ | — |
| Lat Pulldown (Alt Grip) | `lat-pulldown-alt-grip` | ✓ | ✓ | ✓ | ✓ | — |
| Seated Cable Row | `seated-cable-row` | ✓ | ✓ | ✓ | ✓ | — |
| Chest-Supported Row | `chest-supported-row` | ✓ | ✓ | ✓ | ✓ | — |
| Single-Arm Cable Row | `single-arm-cable-row` | ✓ | ✓ | ✓ | ✓ | — |
| Reverse Pec Deck | `reverse-pec-deck` | ✓ | ✓ | ✓ | ✓ | — |
| Dumbbell Biceps Curl | `dumbbell-biceps-curl` | ✓ | ✓ | ✓ | ✓ | — |
| Hammer Curl | `hammer-curl` | ✓ | ✓ | ✓ | ✓ | — |
| EZ-Bar Curl | `ez-bar-curl` | ✓ | ✓ | ✓ | ✓ | — |
| Incline Dumbbell Curl | `incline-dumbbell-curl` | ✓ | ✓ | ✓ | ✓ | — |
| Leg Press | `leg-press` | ✓ | ✓ | ✓ | ✓ | — |
| DB Romanian Deadlift | `db-romanian-deadlift` | ✓ | ✓ | ✓ | ✓ | — |
| Barbell Squat | `barbell-squat` | ✓ | ✓ | ✓ | ✓ | — |
| Goblet Squat | `goblet-squat` | ✓ | ✓ | ✓ | ✓ | — |
| Leg Extension | `leg-extension` | ✓ | ✓ | ✓ | ✓ | — |
| Seated Leg Curl | `seated-leg-curl` | ✓ | ✓ | ✓ | ✓ | — |
| Lying Leg Curl | `lying-leg-curl` | ✓ | ✓ | ✓ | ✓ | — |
| Hip Thrust Machine | `hip-thrust-machine` | ✓ | ✓ | ✓ | ✓ | — |
| Standing Calf Raise | `standing-calf-raise` | ✓ | ✓ | ✓ | ✓ | — |
| Seated Calf Raise | `seated-calf-raise` | ✓ | ✓ | ✓ | ✓ | — |
| Plank | `plank` | ✓ | ✓ | ✓ | ✓ | — |
| Dead Bug | `dead-bug` | ✓ | ✓ | ✓ | ✓ | — |

**Totals: 124 of 124 static visual assets present (31 exercises × 4 kinds: thumbnail, anatomy, start, finish).**

## Animation disclosure
Per Section 4 and Section 10 guidelines, fake CSS animations or low-quality two-frame loops are not masqueraded as true video animations. When users open "View technique & demo" on an exercise without a registered WebM loop, the app displays the dual Start and Finish instructional diagrams with technique cues, breathing guidelines, and common mistakes.

## Licensing & Attribution
- Photographic demonstration assets (start, finish, and thumbnails) are sourced from the public-domain repository `yuhonas/free-exercise-db` under **The Unlicense** (Public Domain / CC0 equivalent).
- Anatomical targeting illustrations were rendered via IronTrack's vector anatomical graphics pipeline, highlighting primary muscle targets with accent glows and distinguishing secondary movers.
- Details recorded in `docs/ASSET_ATTRIBUTION.md`.
