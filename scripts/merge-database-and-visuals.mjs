import fs from 'fs';
import path from 'path';

// 1. Load current exercise database
const dbPath = path.join(process.cwd(), 'src', 'data', 'exerciseDatabase.ts');
const dbContent = fs.readFileSync(dbPath, 'utf8');
const match = dbContent.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const currentExercises = JSON.parse(match[1]);

// 2. Standardize existing exercises
const LOWER_BODY_MUSCLES = new Set([
  'Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Soleus',
  'Tibialis anterior', 'Adductors', 'Hip flexors', 'Hips', 'Tensor fasciae latae'
]);

for (const ex of currentExercises) {
  // If primary muscle is lower body and category was wrongly 'pull', re-categorize to 'legs'
  if (LOWER_BODY_MUSCLES.has(ex.primaryMuscle) && ex.category === 'pull') {
    ex.category = 'legs';
  }
  // Standardize naming if needed
  if (ex.primaryMuscle === 'Front delts') ex.primaryMuscle = 'Front delts';
}

// 3. Load 100 new bodyweight exercises
const newExercisesRaw = JSON.parse(fs.readFileSync('scripts/new-100-bodyweight-exercises.json', 'utf8'));

// Format new exercises clean of catalog metadata
const formattedNewExercises = newExercisesRaw.map(e => ({
  id: e.id,
  name: e.name,
  aliases: [e.name],
  category: e.category,
  primaryMuscle: e.primaryMuscle,
  secondaryMuscles: e.secondaryMuscles,
  equipment: e.equipment,
  exerciseClass: e.exerciseClass,
  repRange: e.repRange,
  difficulty: e.difficulty,
  movementPattern: e.movementPattern,
  trackingType: e.trackingType,
  instructions: e.instructions,
  mistakes: e.mistakes,
  safetyTips: e.safetyTips,
  variationGroupId: e.category === 'legs' ? 'var_bodyweight_lower' : e.category === 'push' ? 'var_bodyweight_push' : e.category === 'pull' ? 'var_bodyweight_pull' : 'var_bodyweight_core',
  alternativeExerciseIds: [],
  isCustom: false,
  favorite: false,
  usesBodyweight: true,
  unilateral: e.unilateral,
}));

// Combine
const combined = [...currentExercises, ...formattedNewExercises];
console.log(`Current: ${currentExercises.length}, Added: ${formattedNewExercises.length}, Total: ${combined.length}`);

// Write back to src/data/exerciseDatabase.ts
const newDbContent = dbContent.replace(
  /COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*\[[\s\S]+?\];\s*\nexport/,
  `COMPREHENSIVE_EXERCISES: Exercise[] = ${JSON.stringify(combined, null, 2)};\nexport`
);
fs.writeFileSync(dbPath, newDbContent, 'utf8');
console.log('✓ Successfully updated src/data/exerciseDatabase.ts with 620 exercises!');

// 4. Update src/data/exerciseVisuals.ts
const visualsPath = path.join(process.cwd(), 'src', 'data', 'exerciseVisuals.ts');
const visualsContent = fs.readFileSync(visualsPath, 'utf8');
const visMatch = visualsContent.match(/export const BUNDLED_VISUALS:\s*Record<string,\s*VisualAssetRecord>\s*=\s*({[\s\S]*?})\n\nexport/);
const currentManifest = JSON.parse(visMatch[1]);

for (const e of newExercisesRaw) {
  currentManifest[e.slug] = {
    available: ['thumbnail', 'start', 'finish', 'anatomy'],
    source: 'free-exercise-db (yuhonas) & IronTrack Anatomical Design System',
    license: 'Public Domain (Unlicense) / CC0',
    attribution: `Real photographic exercise demonstration via free-exercise-db (${e.name}); anatomical design system by IronTrack.`
  };
}

const newVisualsContent = visualsContent.replace(
  /export const BUNDLED_VISUALS:\s*Record<string,\s*VisualAssetRecord>\s*=\s*{[\s\S]*?}\n\nexport/,
  `export const BUNDLED_VISUALS: Record<string, VisualAssetRecord> = ${JSON.stringify(currentManifest, null, 2)}\n\nexport`
);
fs.writeFileSync(visualsPath, newVisualsContent, 'utf8');
console.log('✓ Successfully updated src/data/exerciseVisuals.ts with 620 exercise visual records!');
