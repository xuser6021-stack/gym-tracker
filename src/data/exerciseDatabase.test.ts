import { describe, expect, it } from 'vitest'
import { COMPREHENSIVE_EXERCISES, EXERCISE_DATABASE_MAP } from './exerciseDatabase'

// ─── constants ────────────────────────────────────────────────────────────────

const VALID_CATEGORIES = new Set(['push', 'pull', 'legs', 'core', 'cardio', 'mobility'])
const VALID_EXERCISE_CLASSES = new Set(['compound', 'isolation'])
const VALID_TRACKING_TYPES = new Set([
  'weight_reps',
  'duration',
  'distance',
  'hold',
  'bodyweight_reps',
  'assisted_reps',
])
const VALID_DIFFICULTIES = new Set(['beginner', 'intermediate', 'advanced'])

// Known seed exercise IDs that must be preserved (matching actual src/data/exercises.ts)
const SEED_IDS = [
  'ex_barbell_bench_press',
  'ex_incline_dumbbell_press',
  'ex_seated_db_shoulder_press',
  'ex_db_lateral_raise',
  'ex_cable_lateral_raise',
  'ex_machine_chest_press',
  'ex_lat_pulldown',
  'ex_seated_cable_row',
  'ex_dumbbell_biceps_curl',
  'ex_hammer_curl',
  'ex_ez_bar_curl',
  'ex_leg_press',
  'ex_barbell_squat',
  'ex_goblet_squat',
  'ex_leg_extension',
  'ex_seated_leg_curl',
  'ex_lying_leg_curl',
  'ex_hip_thrust_machine',
  'ex_standing_calf_raise',
  'ex_seated_calf_raise',
  'ex_plank',
  'ex_dead_bug',
]

// ─── test suite ───────────────────────────────────────────────────────────────

describe('COMPREHENSIVE_EXERCISES', () => {
  it('exports at least 500 exercises', () => {
    expect(COMPREHENSIVE_EXERCISES.length).toBeGreaterThanOrEqual(500)
  })

  it('exports exactly 520 exercises', () => {
    expect(COMPREHENSIVE_EXERCISES.length).toBe(520)
  })

  it('has no duplicate IDs', () => {
    const ids = COMPREHENSIVE_EXERCISES.map((e) => e.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })

  it('preserves all seed exercise IDs', () => {
    const idSet = new Set(COMPREHENSIVE_EXERCISES.map((e) => e.id))
    for (const seedId of SEED_IDS) {
      expect(idSet.has(seedId), `Missing seed exercise: ${seedId}`).toBe(true)
    }
  })

  it('has all required fields on every exercise', () => {
    const required = ['id', 'name', 'primaryMuscle', 'secondaryMuscles', 'equipment', 'category', 'exerciseClass', 'repRange', 'instructions']
    for (const e of COMPREHENSIVE_EXERCISES) {
      const rec = e as unknown as Record<string, unknown>
      for (const field of required) {
        expect(
          rec[field] !== undefined && rec[field] !== null && rec[field] !== '',
          `Exercise ${e.id} is missing field "${field}"`,
        ).toBe(true)
      }
    }
  })

  it('has valid category on every exercise', () => {
    const invalid = COMPREHENSIVE_EXERCISES.filter((e) => !VALID_CATEGORIES.has(e.category))
    expect(invalid.map((e) => `${e.id}: "${e.category}"`)).toEqual([])
  })

  it('has valid exerciseClass on every exercise', () => {
    const invalid = COMPREHENSIVE_EXERCISES.filter((e) => !VALID_EXERCISE_CLASSES.has(e.exerciseClass))
    expect(invalid.map((e) => `${e.id}: "${e.exerciseClass}"`)).toEqual([])
  })

  it('has valid trackingType when present', () => {
    const invalid = COMPREHENSIVE_EXERCISES.filter(
      (e) => e.trackingType !== undefined && !VALID_TRACKING_TYPES.has(e.trackingType),
    )
    expect(invalid.map((e) => `${e.id}: "${e.trackingType}"`)).toEqual([])
  })

  it('has valid difficulty when present', () => {
    const invalid = COMPREHENSIVE_EXERCISES.filter(
      (e) => e.difficulty !== undefined && !VALID_DIFFICULTIES.has(e.difficulty),
    )
    expect(invalid.map((e) => `${e.id}: "${e.difficulty}"`)).toEqual([])
  })

  it('has no self-referencing alternative IDs', () => {
    const selfRef = COMPREHENSIVE_EXERCISES.filter((e) => e.alternativeExerciseIds?.includes(e.id))
    expect(selfRef.map((e) => e.id)).toEqual([])
  })

  it('has no broken alternative exercise IDs', () => {
    const idSet = new Set(COMPREHENSIVE_EXERCISES.map((e) => e.id))
    const broken: string[] = []
    for (const e of COMPREHENSIVE_EXERCISES) {
      for (const altId of e.alternativeExerciseIds ?? []) {
        if (!idSet.has(altId)) broken.push(`${e.id} → "${altId}"`)
      }
    }
    expect(broken).toEqual([])
  })

  it('has secondaryMuscles as arrays (not strings)', () => {
    const bad = COMPREHENSIVE_EXERCISES.filter((e) => !Array.isArray(e.secondaryMuscles))
    expect(bad.map((e) => e.id)).toEqual([])
  })

  it('has isCustom=false and favorite=false on all built-in exercises', () => {
    const badCustom = COMPREHENSIVE_EXERCISES.filter((e) => e.isCustom !== false)
    const badFav = COMPREHENSIVE_EXERCISES.filter((e) => e.favorite !== false)
    expect(badCustom.map((e) => e.id)).toEqual([])
    expect(badFav.map((e) => e.id)).toEqual([])
  })
})

describe('EXERCISE_DATABASE_MAP', () => {
  it('is a Map with the same size as COMPREHENSIVE_EXERCISES', () => {
    expect(EXERCISE_DATABASE_MAP).toBeInstanceOf(Map)
    expect(EXERCISE_DATABASE_MAP.size).toBe(COMPREHENSIVE_EXERCISES.length)
  })

  it('can look up exercises by ID', () => {
    const bench = EXERCISE_DATABASE_MAP.get('ex_barbell_bench_press')
    expect(bench).toBeDefined()
    expect(bench?.name).toBe('Barbell bench press')
    expect(bench?.primaryMuscle).toBe('Chest')
  })

  it('returns undefined for unknown IDs', () => {
    expect(EXERCISE_DATABASE_MAP.get('ex_nonexistent_exercise')).toBeUndefined()
  })
})

describe('Exercise database filtering', () => {
  it('can filter by push category', () => {
    const push = COMPREHENSIVE_EXERCISES.filter((e) => e.category === 'push')
    expect(push.length).toBeGreaterThan(50)
  })

  it('can filter by pull category', () => {
    const pull = COMPREHENSIVE_EXERCISES.filter((e) => e.category === 'pull')
    expect(pull.length).toBeGreaterThan(50)
  })

  it('can filter by legs category', () => {
    const legs = COMPREHENSIVE_EXERCISES.filter((e) => e.category === 'legs')
    expect(legs.length).toBeGreaterThan(20)
  })

  it('can filter compound exercises', () => {
    const compound = COMPREHENSIVE_EXERCISES.filter((e) => e.exerciseClass === 'compound')
    expect(compound.length).toBeGreaterThan(100)
  })

  it('can filter isolation exercises', () => {
    const isolation = COMPREHENSIVE_EXERCISES.filter((e) => e.exerciseClass === 'isolation')
    expect(isolation.length).toBeGreaterThan(50)
  })

  it('can filter by primary muscle', () => {
    const chest = COMPREHENSIVE_EXERCISES.filter((e) => e.primaryMuscle === 'Chest')
    expect(chest.length).toBeGreaterThan(10)
  })

  it('can search by name (case-insensitive)', () => {
    const results = COMPREHENSIVE_EXERCISES.filter((e) =>
      e.name.toLowerCase().includes('bench'),
    )
    expect(results.length).toBeGreaterThan(3)
    expect(results.some((e) => e.id === 'ex_barbell_bench_press')).toBe(true)
  })

  it('can search by alias', () => {
    const bench = COMPREHENSIVE_EXERCISES.find((e) => e.id === 'ex_barbell_bench_press')
    expect(bench?.aliases).toBeDefined()
    expect(bench?.aliases?.some((a) => a.toLowerCase().includes('flat bench'))).toBe(true)
  })

  it('can filter bodyweight exercises', () => {
    const bw = COMPREHENSIVE_EXERCISES.filter((e) => e.equipment === 'Bodyweight')
    expect(bw.length).toBeGreaterThan(20)
  })

  it('can filter by beginner difficulty', () => {
    const beginner = COMPREHENSIVE_EXERCISES.filter((e) => e.difficulty === 'beginner')
    expect(beginner.length).toBeGreaterThan(30)
  })
})

describe('Variation groups', () => {
  it('has at least 10 variation groups', () => {
    const groups = new Set(
      COMPREHENSIVE_EXERCISES.filter((e) => e.variationGroupId).map((e) => e.variationGroupId),
    )
    expect(groups.size).toBeGreaterThanOrEqual(10)
  })

  it('most variation groups have at least 2 members', () => {
    const groupMap = new Map<string, string[]>()
    for (const e of COMPREHENSIVE_EXERCISES) {
      if (!e.variationGroupId) continue
      const arr = groupMap.get(e.variationGroupId) ?? []
      arr.push(e.id)
      groupMap.set(e.variationGroupId, arr)
    }
    const singletons = [...groupMap.entries()].filter(([, members]) => members.length < 2)
    // Allow at most 5% singleton groups (data quality threshold)
    const singletonPct = singletons.length / groupMap.size
    expect(
      singletonPct,
      `Too many singleton variation groups (${singletons.length}/${groupMap.size}): ${singletons.map(([g]) => g).join(', ')}`,
    ).toBeLessThanOrEqual(0.05)
  })

  it('bench press exercises are in the same variation group', () => {
    const bench = COMPREHENSIVE_EXERCISES.find((e) => e.id === 'ex_barbell_bench_press')
    expect(bench?.variationGroupId).toBeDefined()
    const family = COMPREHENSIVE_EXERCISES.filter(
      (e) => e.variationGroupId === bench?.variationGroupId,
    )
    expect(family.length).toBeGreaterThan(2)
  })
})

describe('Muscle map coverage', () => {
  const EXPECTED_MUSCLES = ['Chest', 'Back', 'Quadriceps', 'Hamstrings', 'Biceps', 'Triceps', 'Shoulders', 'Abs']

  it('has exercises for all major muscle groups', () => {
    const muscleSet = new Set(COMPREHENSIVE_EXERCISES.map((e) => e.primaryMuscle))
    for (const muscle of EXPECTED_MUSCLES) {
      // Some muscles may use slightly different names, so we check substring match
      const found = [...muscleSet].some((m) => m.toLowerCase().includes(muscle.toLowerCase()) || muscle.toLowerCase().includes(m.toLowerCase()))
      expect(found, `No exercises found for muscle group "${muscle}"`).toBe(true)
    }
  })

  it('has exercises for cardio', () => {
    const cardio = COMPREHENSIVE_EXERCISES.filter((e) => e.category === 'cardio')
    expect(cardio.length).toBeGreaterThanOrEqual(10)
  })

  it('has exercises for mobility/flexibility', () => {
    const mobility = COMPREHENSIVE_EXERCISES.filter((e) => e.category === 'mobility')
    expect(mobility.length).toBeGreaterThanOrEqual(10)
  })
})
