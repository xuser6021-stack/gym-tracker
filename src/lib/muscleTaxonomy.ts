/**
 * Standardized Muscle Group & Taxonomy Definitions
 *
 * Provides hierarchical muscle group organization:
 * UPPER BODY, LOWER BODY, CORE, FULL BODY / OTHER
 *
 * Supports Primary Muscle filtering vs Involves Muscle (Primary + Secondary) filtering.
 */

export type MuscleTaxonomyGroup = 'Upper Body' | 'Lower Body' | 'Core' | 'Full Body'

export interface StandardizedMuscle {
  id: string
  name: string
  taxonomicGroup: MuscleTaxonomyGroup
  /** Matching aliases in database records */
  dbAliases: string[]
}

export const STANDARDIZED_MUSCLES: StandardizedMuscle[] = [
  // --- UPPER BODY ---
  { id: 'chest', name: 'Chest', taxonomicGroup: 'Upper Body', dbAliases: ['Chest', 'Upper chest', 'Lower chest'] },
  { id: 'back', name: 'Back', taxonomicGroup: 'Upper Body', dbAliases: ['Back', 'Upper back', 'Lower back', 'Lats', 'Traps', 'Upper traps', 'Lower traps', 'Spine', 'Thoracic spine'] },
  { id: 'lats', name: 'Lats', taxonomicGroup: 'Upper Body', dbAliases: ['Lats'] },
  { id: 'upper_back', name: 'Upper Back', taxonomicGroup: 'Upper Body', dbAliases: ['Upper back', 'Rhomboids', 'Teres major'] },
  { id: 'lower_back', name: 'Lower Back', taxonomicGroup: 'Upper Body', dbAliases: ['Lower back', 'Spine'] },
  { id: 'shoulders', name: 'Shoulders', taxonomicGroup: 'Upper Body', dbAliases: ['Shoulders', 'Front delts', 'Side delts', 'Rear delts', 'Rotator cuff', 'Supraspinatus'] },
  { id: 'front_delts', name: 'Front Deltoids', taxonomicGroup: 'Upper Body', dbAliases: ['Front delts'] },
  { id: 'side_delts', name: 'Side Deltoids', taxonomicGroup: 'Upper Body', dbAliases: ['Side delts'] },
  { id: 'rear_delts', name: 'Rear Deltoids', taxonomicGroup: 'Upper Body', dbAliases: ['Rear delts'] },
  { id: 'traps', name: 'Traps', taxonomicGroup: 'Upper Body', dbAliases: ['Traps', 'Upper traps', 'Lower traps'] },
  { id: 'biceps', name: 'Biceps', taxonomicGroup: 'Upper Body', dbAliases: ['Biceps', 'Brachialis', 'Brachioradialis'] },
  { id: 'triceps', name: 'Triceps', taxonomicGroup: 'Upper Body', dbAliases: ['Triceps'] },
  { id: 'forearms', name: 'Forearms', taxonomicGroup: 'Upper Body', dbAliases: ['Forearms', 'Grip', 'Wrists'] },

  // --- LOWER BODY ---
  { id: 'quadriceps', name: 'Quadriceps', taxonomicGroup: 'Lower Body', dbAliases: ['Quadriceps'] },
  { id: 'hamstrings', name: 'Hamstrings', taxonomicGroup: 'Lower Body', dbAliases: ['Hamstrings'] },
  { id: 'glutes', name: 'Glutes', taxonomicGroup: 'Lower Body', dbAliases: ['Glutes', 'Hip flexors', 'Hips', 'Tensor fasciae latae', 'Piriformis'] },
  { id: 'calves', name: 'Calves', taxonomicGroup: 'Lower Body', dbAliases: ['Calves', 'Soleus', 'Tibialis anterior', 'Achilles tendon', 'Ankles'] },
  { id: 'hip_adductors', name: 'Hip Adductors', taxonomicGroup: 'Lower Body', dbAliases: ['Adductors', 'Gracilis', 'Groin'] },
  { id: 'hip_abductors', name: 'Hip Abductors', taxonomicGroup: 'Lower Body', dbAliases: ['Abductors', 'Tensor fasciae latae'] },

  // --- CORE ---
  { id: 'abs', name: 'Abs', taxonomicGroup: 'Core', dbAliases: ['Abs'] },
  { id: 'obliques', name: 'Obliques', taxonomicGroup: 'Core', dbAliases: ['Obliques'] },
  { id: 'lower_core', name: 'Lower Core', taxonomicGroup: 'Core', dbAliases: ['Abs', 'Core'] },
  { id: 'deep_core', name: 'Deep Core', taxonomicGroup: 'Core', dbAliases: ['Core', 'Transverse abdominis', 'Quadratus lumborum', 'Pelvis'] },

  // --- FULL BODY / OTHER ---
  { id: 'full_body', name: 'Full Body', taxonomicGroup: 'Full Body', dbAliases: ['Cardiovascular system', 'Core', 'Legs', 'Upper body', 'Arms'] },
]

export const TAXONOMIC_GROUPS: MuscleTaxonomyGroup[] = [
  'Upper Body',
  'Lower Body',
  'Core',
  'Full Body',
]

/** Map any specific database muscle string to its parent standard muscle */
export function getStandardMusclesForDbMuscle(dbMuscle: string): StandardizedMuscle[] {
  const norm = (dbMuscle || '').toLowerCase().trim()
  return STANDARDIZED_MUSCLES.filter(sm =>
    sm.dbAliases.some(alias => alias.toLowerCase() === norm || norm.includes(alias.toLowerCase()))
  )
}

/** Check if an exercise matches a selected muscle filter in either 'primary' or 'involves' mode */
export function exerciseMatchesMuscle(
  exercise: { primaryMuscle: string; secondaryMuscles?: string[] },
  selectedMuscleId: string | null,
  mode: 'primary' | 'involves' = 'primary'
): boolean {
  if (!selectedMuscleId || selectedMuscleId === 'all') return true

  const standard = STANDARDIZED_MUSCLES.find(m => m.id === selectedMuscleId)
  if (!standard) return true

  const primaryMatches = standard.dbAliases.some(
    alias => alias.toLowerCase() === exercise.primaryMuscle.toLowerCase() ||
             exercise.primaryMuscle.toLowerCase().includes(alias.toLowerCase())
  )

  if (mode === 'primary') {
    return primaryMatches
  }

  // 'involves' mode: matches primary OR any secondary
  if (primaryMatches) return true

  const secondaries = exercise.secondaryMuscles || []
  return secondaries.some(sec =>
    standard.dbAliases.some(
      alias => alias.toLowerCase() === sec.toLowerCase() || sec.toLowerCase().includes(alias.toLowerCase())
    )
  )
}

/** Check if an exercise belongs to a broader region like Lower Body / Upper Body / Core */
export function exerciseMatchesTaxonomyGroup(
  exercise: { primaryMuscle: string; category?: string },
  taxonomicGroup: MuscleTaxonomyGroup
): boolean {
  if (taxonomicGroup === 'Lower Body') {
    return STANDARDIZED_MUSCLES.filter(m => m.taxonomicGroup === 'Lower Body').some(m =>
      m.dbAliases.some(a => a.toLowerCase() === exercise.primaryMuscle.toLowerCase())
    ) || exercise.category === 'legs'
  }
  if (taxonomicGroup === 'Upper Body') {
    return STANDARDIZED_MUSCLES.filter(m => m.taxonomicGroup === 'Upper Body').some(m =>
      m.dbAliases.some(a => a.toLowerCase() === exercise.primaryMuscle.toLowerCase())
    ) || exercise.category === 'push' || exercise.category === 'pull'
  }
  if (taxonomicGroup === 'Core') {
    return STANDARDIZED_MUSCLES.filter(m => m.taxonomicGroup === 'Core').some(m =>
      m.dbAliases.some(a => a.toLowerCase() === exercise.primaryMuscle.toLowerCase())
    ) || exercise.category === 'core'
  }
  return true
}
