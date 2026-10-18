# IronTrack - Upgrade Progress

Local-first workout/body/nutrition tracker (React 19 + TS + Vite 8 + Tailwind 4).
This file tracks the production-readiness upgrade so work can resume cleanly.

## Verification status (last run)

| Check | Command | Result |
| --- | --- | --- |
| Types | `npx tsc -b` | clean |
| Build | `npm run build` | OK (main ~325 kB / 104 kB gzip; charts in separate 376 kB chunk) |
| Lint | `npm run lint` | OK. 0 errors, 8 warnings (React Compiler advisory rules only) |
| Tests | `npm run test` | OK. 117 passed / 20 files |

## Completed

### Phase 1 - Audit
Verified defects fixed: CSV formula injection, drift-prone rest timer,
localStorage-only storage with silent data loss, weak import validation.

### Phase 2 - Data reliability
- `src/storage/database.ts` - IndexedDB wrapper (atomic, transactional writes).
- `src/storage/repositories/appRepository.ts` - load/save/clear, one-time
  localStorage to IndexedDB migration that **never deletes** the original and
  keeps a raw backup in the `meta` store; cross-tab sync via `BroadcastChannel`.
- `src/storage/validation.ts` - zod + integrity repair (duplicate ids, set order,
  single active session, duplicate nutrition days, dangling PRs, newer-schema guard).
- `src/storage/backup.ts` - versioned envelope, 25 MB import cap, legacy support,
  parse/validate/preview reporting.
- `src/store/AppStore.tsx` - async hydration with `status`, debounced writes,
  flush on hide, cross-tab adoption, richer import result, theme mirror.
- Cross-tab conflict feedback: a detected write conflict is confirmed to the user
  via a dismissible banner in `src/App.tsx` (the conflicting version is preserved
  as a snapshot) instead of failing silently.
- `src/lib/csv.ts` - formula-injection neutralisation.
- `src/App.tsx` - boot splash while hydrating.

### Phase 3 - Workout experience
- `RestTimer.tsx` - **deadline-based** (drift-free, background-safe), pause/resume,
  +15s, vibrate on completion.
- `ExerciseLogger.tsx` - per-set "Last time" comparison, "Repeat last" quick-fill,
  superset grouping selector.
- `SetRow.tsx` - shows previous-session value per set.
- Weight unit correctness: the logger previously showed stored kg next to the
  user's unit suffix (a lb user saw kg numbers labelled "lb"). Weight inputs and
  history now convert kg <-> display unit via `fromStoredWeightDisplay` +
  `toKg`, while keeping storage canonical in per-implement kg. Also fixed a
  double-conversion in "Repeat last" that halved dumbbell-pair weights under the
  pair setting.
- "Add to workout" prefill (`ExerciseDetail`) now seeds the last session's top
  working weight *as entered* (so the store's normalization stores the correct
  per-implement kg) instead of copying total load, which previously doubled the
  suggestion for unilateral, non-dumbbell exercises.
- Volume metrics now count **working sets only** (`setVolumeKg`): completed warmup
  sets no longer inflate session/weekly volume, matching the working-set counter.
- Persist scheduling: a pending debounced write is now cancelled on provider
  unmount, so a stale timer can no longer fire (and write) after teardown.
- Supersets: `supersetGroup?` on `TemplateExercise`/`SetRecord` + logger grouping.
- Recoverable workouts: discarding an active session (or deleting one from
  `SessionDetail`) now soft-deletes it (`discarded: true`). Discarded sessions are
  excluded from stats/analytics but kept on-device and listed under
  Settings -> Recoverable workouts with Restore / Delete permanently. Nothing is
  destroyed until the user explicitly purges it.
- Repeat workout: `SessionDetail` has a **Repeat** action -> `repeatWorkout`
  starts a fresh active session with the same exercises, superset layout and
  last-used weights (reps left blank to re-earn). If a session is already active
  it resumes that instead. History is untouched.
- Meal templates (previously a dead model with no UI): **Copy yesterday** and
  **Save as template** buttons on the Nutrition page plus reusable template chips
  that append their items to any selected day. Store actions: `copyDayMeals`,
  `saveMealTemplate`, `applyMealTemplate`, `deleteMealTemplate` — all
  non-destructive (apply always appends, never overwrites).
- Settings that now actually do something (were dead toggles): **Personal record
  alerts** gates the PR celebration in the workout finish summary, and
  **Workout reminders** + reminder time shows an in-app "time to train" nudge on
  the Dashboard once the time has passed, today is a planned (non-rest) day and no
  workout has been logged yet. The rest-timer toggle was relabelled to
  **Rest timer sound** to match its actual behaviour (plays a chime on completion).
- purity: `greeting()` on the Dashboard no longer calls `new Date()` in render;
  it takes the `useToday()` date instead.
- Deployment docs: README rewritten for the current architecture — IndexedDB
  primary storage + Web Locks cross-tab safety, recovery mode, soft-deleted
  workouts, snapshots, offline/PWA (SW `irontrack-v2`, prod-only registration),
  tests and how to deploy the static `dist/` build.
- Workout history usability: the History tab now has a search box (template,
  notes and prescribed exercise names) and a template filter, plus incremental
  "Show more" pagination (15 at a time). Filtering lives in the pure, tested
  `filterSessions` helper (`src/lib/history.ts`).
- Body check-in history paginated the same way ("Show more", 15 at a time).
- Security/perf hardening:
  - `public/sw.js` only caches successful navigations (an error page can no
    longer become the offline shell) and keeps the stale-while-revalidate
  background update alive via `event.waitUntil`; cross-origin JSON responses
  replaced with a same-origin `Response.error()` fallback. Cache bumped
  `irontrack-v2` -> `irontrack-v3` (now `irontrack-v4` with exercise artwork).
  - `index.html` sends `Referrer-Policy: no-referrer`; README documents
    recommended CSP / `X-Content-Type-Options` response headers for the host.
  - Audited: no `dangerouslySetInnerHTML` / `eval` / `document.write`; user text
    is rendered as React children (auto-escaped).
- Mobile UX: added a `.safe-top` utility and applied it to the sticky mobile
  header (which previously sat under the notch on notched iPhones, since the app
  uses `viewport-fit=cover` + a translucent status bar); the workout logger's
  sticky sub-header offset now accounts for the safe-area inset too. The
  `theme-color` meta is kept in sync with the active theme.
- Analytics depth (Progress): the estimated-1RM card now shows the **change in
  e1RM across the selected range** for the chosen exercise (colour-coded), and the
  personal-records card shows a total count with a "Show all N records" toggle
  instead of being hard-capped at 8.
- Crash rescue: the `ErrorBoundary` screen now has a **Download backup** button
  that reads straight from storage (`readAppData`) and saves a JSON backup, so a
  render crash no longer blocks exporting your data before reloading.
- End-to-end coverage without a browser binary: `src/app.flow.test.tsx` mounts the
  real `App` (router + store + IndexedDB) and drives user flows — onboarding for a
  fresh profile, the full start -> finish -> view-detail workout loop, and
  persistence of a finished workout across a simulated reload. This stands in for
  the deferred Playwright run (browser binaries unavailable in this environment).

### Phase 17/20 - PWA + performance
- `public/manifest.webmanifest`, `icon.svg` + PNG raster icons (192/512 + maskable).
- `public/sw.js` - offline shell (network-first navigations, stale-while-revalidate
  assets); registered from `main.tsx` in production only.
- Route-level code-splitting via `React.lazy` + `Suspense`.

### Phase 4 - Analytics + robustness
- RIR-aware progression: `buildSuggestion` reads reps-in-reserve (`meanRir`) -
  confident "you have room" message at top reps with RIR >= 2, a caution when top
  reps were only hit at failure, and a `hold` (not "add reps") when a lifter failed
  below the target range.
- `ActivityHeatmap` (12-week GitHub-style training calendar, intensity = daily
  volume, no chart-library dependency) in Progress -> Consistency; muscle-balance
  card shows weekly average sets per muscle against a ~10-20 sets/week band.
- `ErrorBoundary` wraps the app (friendly fallback); all `new Date()`/`Date.now()`
  in-render purity warnings removed via the `useToday()` hook (`src/lib/useNow.ts`).

### V3.1 - Visual exercise library
- Data model: `ExerciseVisuals` (thumbnail/anatomy/start/finish/animation paths)
  and `Exercise.mediaAssetId` (custom upload reference) added to
  `src/types/index.ts`.
- Visual registry: `src/data/exerciseVisuals.ts` is the single source of truth for
  **bundled** artwork. It ships **empty on purpose** — no licensed anatomical
  illustrations or movement animations are included (none could be produced/
  verified in this environment). Rendering reads the registry, so nothing is
  requested and no broken images appear until a real asset is added; dropping a
  file at `public/exercises/<slug>/<file>` and adding a registry entry enables it
  everywhere automatically. See `EXERCISE_VISUALS_STATUS.md`.
- Technique guides: `src/data/exerciseGuides.ts` — curated, reviewable
  starting-position / steps / breathing / safety text for all 31 built-in
  exercises (unknown/custom exercises fall back to their stored instructions).
- Components (`src/components/exercise/`): `ExerciseImage` (bundled -> uploaded
  -> neutral placeholder, lazy, onError fallback), `ExercisePlaceholder` (abstract
  dumbbell glyph — never depicts the movement), `ExerciseDemoDialog` (plays a
  bundled animation when present, else start/finish stills or placeholder, with
  play/pause/replay/static and `prefers-reduced-motion` respected),
  `useExerciseImage` (Blob -> object URL).
- Custom uploads: `CustomExerciseDialog` and `ExerciseDetail` accept an image
  (PNG/JPEG/WebP/AVIF/GIF, <= 2 MB). Stored as raw bytes in a new IndexedDB
  `assets` store (DB v2) via `src/storage/repositories/assetRepository.ts`; the
  main data document only holds `mediaAssetId`. Store actions
  `setExerciseImage` / `removeExerciseImage`. User images are **not** included in
  JSON backups (documented in README).
- Integration: library cards, exercise detail ("View technique & demo"), and the
  workout logger exercise header all show thumbnails; the logger thumbnail opens
  the demo.
- Offline: `public/sw.js` caches `/exercises/` artwork cache-first (immutable);
  cache bumped `irontrack-v3` -> `irontrack-v4`.

### Phase 22 - Testing
- Vitest + jsdom + Testing Library + fake-indexeddb.
- Coverage: progression, records, CSV, validation repairs, backup parse,
  repository + migration, store persistence, discard/restore recovery, repeat
  workout, meal templates/copy day, history filtering, stats (dates, goal
  progress, weight trend, streaks, weekly volume), full-app flow
  (`app.flow.test.tsx`), UI components (`StorageStatus`, `ErrorBoundary` incl.
  crash-screen backup, `ActivityHeatmap`), exercise visuals (`exerciseSlug`,
  visual registry, technique-guide completeness, `useReducedMotion`,
  `ExerciseImage`, `ExerciseDemoDialog`, asset repository + store image actions).

## Dependencies added (dev)
`vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`,
`@testing-library/user-event`, `fake-indexeddb`.

## Remaining / recommended next
- **Remaining advisories** (safe to ignore): 8 warnings from React Compiler advisory
  rules (`only-export-components` for `buttonClass`/`useApp`, `set-state-in-effect`
  in dialogs/rest timer, `incompatible-library` in Onboarding's RHF usage).
- Playwright end-to-end run (log a workout, import backup) - not added (browser
  binaries not installed).
- PWA icons: full raster set generated with no new dependency - `icon-192.png`,
  `icon-512.png` (any) and `icon-maskable-512.png` (maskable), produced by a
  self-contained PNG encoder; SW cache `irontrack-v4`.
- **Exercise artwork is intentionally not bundled** (see
  `EXERCISE_VISUALS_STATUS.md`): no verified/licensed illustrations or animations
  are included, so every exercise renders an honest neutral placeholder until real
  assets are added. Users can upload their own image for custom exercises.
- Unimplemented-by-design data: `lockPhotoPrivacy` and `Measurement.photos` exist
  in the schema for import compatibility but have no UI (no photo capture feature);
  `photos` is always `[]`.
- Next: continue polishing; candidate areas include richer body/photo support and
  any remaining V3 phase follow-ups.
