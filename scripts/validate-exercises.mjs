#!/usr/bin/env node
/**
 * IronTrack V3.5 — Exercise Library Validator
 * Run with: node scripts/validate-exercises.mjs
 *
 * Validates the comprehensive exercise database:
 * - Minimum 500 unique exercises
 * - No duplicate IDs
 * - All required fields present
 * - Valid categories and tracking types
 * - No self-referencing alternatives
 * - No broken alternative IDs
 * - Reports WebP asset coverage
 */

import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ─── load exercise database (via regex extraction from TS) ───────────────────

function loadExercises() {
  const dbPath = join(ROOT, 'src', 'data', 'exerciseDatabase.ts')
  const content = readFileSync(dbPath, 'utf8')

  // Extract the JSON array literal between first [ and last ];
  const match = content.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/)
  if (!match) throw new Error('Could not parse COMPREHENSIVE_EXERCISES from exerciseDatabase.ts')

  try {
    return JSON.parse(match[1])
  } catch {
    // Fallback: eval-style extraction using Function
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return ${match[1]}`)
    return fn()
  }
}

// ─── validation ──────────────────────────────────────────────────────────────

const VALID_CATEGORIES = new Set(['push', 'pull', 'legs', 'core', 'cardio', 'mobility'])
const VALID_TRACKING_TYPES = new Set(['weight_reps', 'duration', 'distance', 'hold', 'bodyweight_reps', 'assisted_reps'])
const VALID_EXERCISE_CLASSES = new Set(['compound', 'isolation'])
const VALID_DIFFICULTIES = new Set(['beginner', 'intermediate', 'advanced'])

let errors = 0
let warnings = 0

function error(msg) {
  console.error(`  ❌ ${msg}`)
  errors++
}

function warn(msg) {
  console.warn(`  ⚠️  ${msg}`)
  warnings++
}

function ok(msg) {
  console.log(`  ✅ ${msg}`)
}

console.log('\n🏋️  IronTrack V3.5 — Exercise Library Validator\n')
console.log('─'.repeat(60))

let exercises
try {
  exercises = loadExercises()
  ok(`Loaded exerciseDatabase.ts successfully`)
} catch (e) {
  console.error(`❌ FATAL: Could not load exercise database: ${e.message}`)
  process.exit(1)
}

// ── 1. Count ──────────────────────────────────────────────────────────────────
console.log('\n📊 Exercise Count')
console.log(`  Total exercises: ${exercises.length}`)
if (exercises.length >= 500) {
  ok(`${exercises.length} exercises ≥ 500 minimum requirement`)
} else {
  error(`Only ${exercises.length} exercises — minimum is 500`)
}

// ── 2. Unique IDs ─────────────────────────────────────────────────────────────
console.log('\n🔑 Unique ID Check')
const idSet = new Set()
const duplicates = []
for (const e of exercises) {
  if (idSet.has(e.id)) duplicates.push(e.id)
  idSet.add(e.id)
}
if (duplicates.length === 0) {
  ok(`All ${exercises.length} exercise IDs are unique`)
} else {
  error(`${duplicates.length} duplicate IDs: ${duplicates.slice(0, 5).join(', ')}`)
}

// ── 3. Required fields ────────────────────────────────────────────────────────
console.log('\n📋 Required Fields')
const REQUIRED = ['id', 'name', 'primaryMuscle', 'secondaryMuscles', 'equipment', 'category', 'exerciseClass', 'repRange', 'instructions']
const missingFields = []
for (const e of exercises) {
  for (const field of REQUIRED) {
    if (e[field] === undefined || e[field] === null || e[field] === '') {
      missingFields.push(`${e.id} missing "${field}"`)
    }
  }
}
if (missingFields.length === 0) {
  ok(`All exercises have required fields`)
} else {
  for (const m of missingFields.slice(0, 10)) error(m)
  if (missingFields.length > 10) warn(`...and ${missingFields.length - 10} more`)
}

// ── 4. Valid categories ───────────────────────────────────────────────────────
console.log('\n🏷️  Category Validation')
const badCategories = exercises.filter((e) => !VALID_CATEGORIES.has(e.category))
if (badCategories.length === 0) {
  ok(`All categories valid: ${[...VALID_CATEGORIES].join(', ')}`)
} else {
  for (const e of badCategories.slice(0, 5)) error(`${e.id} has invalid category "${e.category}"`)
}

// ── 5. Valid exerciseClass ────────────────────────────────────────────────────
console.log('\n🏋️  Exercise Class Validation')
const badClasses = exercises.filter((e) => !VALID_EXERCISE_CLASSES.has(e.exerciseClass))
if (badClasses.length === 0) {
  ok(`All exerciseClass values valid`)
} else {
  for (const e of badClasses.slice(0, 5)) error(`${e.id} has invalid exerciseClass "${e.exerciseClass}"`)
}

// ── 6. Tracking types ────────────────────────────────────────────────────────
console.log('\n⏱️  Tracking Type Validation')
const withTracking = exercises.filter((e) => e.trackingType)
const badTracking = exercises.filter((e) => e.trackingType && !VALID_TRACKING_TYPES.has(e.trackingType))
if (badTracking.length === 0) {
  ok(`${withTracking.length}/${exercises.length} exercises have trackingType — all valid`)
} else {
  for (const e of badTracking.slice(0, 5)) error(`${e.id} has invalid trackingType "${e.trackingType}"`)
}

// ── 7. Difficulty values ──────────────────────────────────────────────────────
console.log('\n🎯 Difficulty Validation')
const withDifficulty = exercises.filter((e) => e.difficulty)
const badDifficulty = exercises.filter((e) => e.difficulty && !VALID_DIFFICULTIES.has(e.difficulty))
if (badDifficulty.length === 0) {
  ok(`${withDifficulty.length}/${exercises.length} exercises have difficulty — all valid`)
} else {
  for (const e of badDifficulty.slice(0, 5)) error(`${e.id} has invalid difficulty "${e.difficulty}"`)
}

// ── 8. Self-referencing alternatives ────────────────────────────────────────
console.log('\n🔗 Alternative Exercise References')
const selfRef = exercises.filter((e) => e.alternativeExerciseIds?.includes(e.id))
if (selfRef.length === 0) {
  ok('No self-referencing alternative exercise IDs')
} else {
  for (const e of selfRef) error(`${e.id} references itself as an alternative`)
}

// ── 9. Broken alternative IDs ────────────────────────────────────────────────
const brokenAlternatives = []
for (const e of exercises) {
  if (!e.alternativeExerciseIds?.length) continue
  for (const altId of e.alternativeExerciseIds) {
    if (!idSet.has(altId)) brokenAlternatives.push(`${e.id} → "${altId}" (not found)`)
  }
}
if (brokenAlternatives.length === 0) {
  ok('All alternativeExerciseIds resolve to valid exercise IDs')
} else {
  for (const b of brokenAlternatives.slice(0, 10)) error(b)
  if (brokenAlternatives.length > 10) warn(`...and ${brokenAlternatives.length - 10} more broken refs`)
}

// ── 10. Variation groups ────────────────────────────────────────────────────
console.log('\n🔀 Variation Groups')
const groupMap = {}
for (const e of exercises) {
  if (e.variationGroupId) {
    if (!groupMap[e.variationGroupId]) groupMap[e.variationGroupId] = []
    groupMap[e.variationGroupId].push(e.id)
  }
}
const groupCount = Object.keys(groupMap).length
const avgGroupSize = groupCount > 0 ? (Object.values(groupMap).reduce((a, b) => a + b.length, 0) / groupCount).toFixed(1) : 0
ok(`${groupCount} variation groups defined (avg ${avgGroupSize} exercises per group)`)

// ── 11. Asset coverage ───────────────────────────────────────────────────────
console.log('\n🖼️  Asset Coverage')
const visualsPath = join(ROOT, 'src', 'data', 'exerciseVisuals.ts')
let registeredAssets = 0
try {
  const visualsContent = readFileSync(visualsPath, 'utf8')
  const match = visualsContent.match(/export const BUNDLED_VISUALS:\s*Record<string,\s*VisualAssetRecord>\s*=\s*({[\s\S]*?})\n\nexport/)
  if (match) {
    const obj = JSON.parse(match[1])
    registeredAssets = Object.keys(obj).length
    ok(`${registeredAssets} exercises have registered visual assets in BUNDLED_VISUALS`)
  } else {
    warn('Could not parse BUNDLED_VISUALS')
  }
} catch (e) {
  warn(`Could not read exerciseVisuals.ts: ${e.message}`)
}

// Check public WebP files
const publicDir = join(ROOT, 'public')
let webpCount = 0
try {
  const { readdirSync } = await import('fs')
  function countWebp(dir) {
    try {
      const entries = readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        if (entry.isDirectory()) countWebp(join(dir, entry.name))
        else if (entry.name.endsWith('.webp')) webpCount++
      }
    } catch { /* skip unreadable dirs */ }
  }
  countWebp(publicDir)
  ok(`${webpCount} WebP asset files in public/`)
} catch {
  warn('Could not count WebP files')
}

const unvisualized = exercises.length - registeredAssets
console.log(`  📦 ${registeredAssets} with visuals · ${unvisualized} using placeholder (artwork pending)`)

// ── 12. Category breakdown ──────────────────────────────────────────────────
console.log('\n📈 Category Breakdown')
const catCounts = {}
for (const e of exercises) {
  catCounts[e.category] = (catCounts[e.category] ?? 0) + 1
}
for (const [cat, count] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${cat.padEnd(12)}: ${count}`)
}

// ── 13. Equipment breakdown ────────────────────────────────────────────────
console.log('\n🏗️  Equipment Breakdown (top 10)')
const eqCounts = {}
for (const e of exercises) {
  eqCounts[e.equipment] = (eqCounts[e.equipment] ?? 0) + 1
}
const topEq = Object.entries(eqCounts).sort((a, b) => b[1] - a[1]).slice(0, 10)
for (const [eq, count] of topEq) {
  console.log(`  ${eq.padEnd(20)}: ${count}`)
}

// ── Summary ──────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60))
if (errors === 0) {
  console.log(`\n✅ VALIDATION PASSED — ${exercises.length} exercises, 0 errors, ${warnings} warnings\n`)
  process.exit(0)
} else {
  console.log(`\n❌ VALIDATION FAILED — ${errors} error(s), ${warnings} warning(s)\n`)
  process.exit(1)
}
