import fs from 'fs';

const catalog = JSON.parse(fs.readFileSync('scripts/free-exercise-db-catalog.json', 'utf8'));
const content = fs.readFileSync('src/data/exerciseDatabase.ts', 'utf8');
const match = content.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const ex = JSON.parse(match[1]);
const existingNames = new Set(ex.map(e => e.name.toLowerCase()));
const existingIds = new Set(ex.map(e => e.id));

// Map free-exercise-db to our taxonomy
function getMetadata(c) {
  const m = (c.primaryMuscles?.[0] || 'core').toLowerCase();
  const n = c.name.toLowerCase();

  let primary = 'Core';
  let category = 'core';
  let secondary = ['Core'];
  let equipment = 'Bodyweight';
  let exerciseClass = 'isolation';
  let movementPattern = 'Core stabilization';
  let difficulty = (c.level || 'intermediate').toLowerCase();
  let trackingType = 'bodyweight_reps';

  // Equipment
  if (n.includes('pull-up') || n.includes('chin-up') || n.includes('hang')) {
    equipment = 'Pull-up bar';
    exerciseClass = 'compound';
  } else if (n.includes('dip') || n.includes('l-sit')) {
    equipment = 'Parallel bars';
    exerciseClass = 'compound';
  } else if (n.includes('bench') || n.includes('box')) {
    equipment = 'Bench';
  } else if (n.includes('ball')) {
    equipment = 'Exercise ball';
  } else if (n.includes('band')) {
    equipment = 'Resistance band';
  } else {
    equipment = 'Bodyweight';
  }

  // Muscles & categories
  if (m === 'chest' || n.includes('push-up') || n.includes('dip - chest')) {
    primary = 'Chest';
    category = 'push';
    secondary = ['Front delts', 'Triceps'];
    movementPattern = 'Horizontal push';
    exerciseClass = 'compound';
  } else if (m === 'triceps' || n.includes('dip') || n.includes('tricep')) {
    primary = 'Triceps';
    category = 'push';
    secondary = ['Front delts', 'Chest'];
    movementPattern = 'Arm extension';
  } else if (m === 'shoulders') {
    primary = n.includes('rear') ? 'Rear delts' : 'Front delts';
    category = 'push';
    secondary = ['Triceps', 'Upper back'];
    movementPattern = 'Overhead push';
  } else if (m === 'lats' || n.includes('pull-up') || n.includes('chin-up')) {
    primary = 'Lats';
    category = 'pull';
    secondary = ['Biceps', 'Upper back', 'Forearms'];
    movementPattern = 'Vertical pull';
    exerciseClass = 'compound';
  } else if (m === 'middle back' || n.includes('row')) {
    primary = 'Upper back';
    category = 'pull';
    secondary = ['Biceps', 'Lats', 'Rear delts'];
    movementPattern = 'Horizontal pull';
    exerciseClass = 'compound';
  } else if (m === 'lower back' || n.includes('hyperextension')) {
    primary = 'Lower back';
    category = 'pull';
    secondary = ['Glutes', 'Hamstrings'];
    movementPattern = 'Hip hinge';
  } else if (m === 'biceps') {
    primary = 'Biceps';
    category = 'pull';
    secondary = ['Forearms', 'Upper back'];
    movementPattern = 'Arm flexion';
  } else if (m === 'forearms') {
    primary = 'Forearms';
    category = 'pull';
    secondary = ['Biceps'];
    movementPattern = 'Grip';
  } else if (m === 'quadriceps' || n.includes('squat') || n.includes('lunge') || n.includes('step') || n.includes('jump')) {
    primary = 'Quadriceps';
    category = 'legs';
    secondary = ['Glutes', 'Hamstrings', 'Calves'];
    movementPattern = n.includes('lunge') ? 'Unilateral knee flexion' : 'Knee flexion';
    exerciseClass = 'compound';
  } else if (m === 'hamstrings') {
    primary = 'Hamstrings';
    category = 'legs';
    secondary = ['Glutes', 'Calves'];
    movementPattern = 'Hip hinge / knee flexion';
    exerciseClass = 'compound';
  } else if (m === 'glutes' || n.includes('bridge') || n.includes('kickback')) {
    primary = 'Glutes';
    category = 'legs';
    secondary = ['Hamstrings', 'Lower back'];
    movementPattern = 'Hip extension';
    exerciseClass = 'compound';
  } else if (m === 'calves') {
    primary = 'Calves';
    category = 'legs';
    secondary = ['Soleus', 'Tibialis anterior'];
    movementPattern = 'Plantar flexion';
  } else if (m === 'adductors') {
    primary = 'Adductors';
    category = 'legs';
    secondary = ['Glutes', 'Quadriceps'];
    movementPattern = 'Hip adduction';
  } else if (m === 'abdominals' || n.includes('crunch') || n.includes('sit-up') || n.includes('plank') || n.includes('leg raise')) {
    primary = (n.includes('oblique') || n.includes('twist') || n.includes('side')) ? 'Obliques' : 'Abs';
    category = 'core';
    secondary = ['Obliques', 'Lower back'];
    movementPattern = 'Trunk flexion';
    if (n.includes('hold') || n.includes('plank')) {
      trackingType = 'hold';
    }
  }

  // Difficulty fallback
  if (!['beginner', 'intermediate', 'advanced'].includes(difficulty)) {
    difficulty = 'intermediate';
  }

  // Instructions
  const instructions = Array.isArray(c.instructions) && c.instructions.length
    ? c.instructions.join(' ')
    : `Execute the ${c.name} with strict form, engaging target musculature through a complete, controlled range of motion.`;

  return {
    primaryMuscle: primary,
    secondaryMuscles: secondary,
    category,
    equipment,
    exerciseClass,
    movementPattern,
    difficulty,
    trackingType,
    instructions,
  };
}

// Select 100 clean bodyweight / calisthenics exercises
const newExercises = [];
const seenCleanNames = new Set();

for (const c of catalog) {
  if (!c.images || c.images.length < 2) continue;
  const name = c.name.trim();
  const lower = name.toLowerCase();

  // Exclude unwanted objects
  if (lower.includes('stone') || lower.includes('tire') || lower.includes('sled') || lower.includes('wheel') || lower.includes('chain') || lower.includes('axle') || lower.includes('keg') || lower.includes('car deadlift') || lower.includes('battling') || lower.includes('smr') || lower.includes('plate') || lower.includes('bag') || lower.includes('bicycling') || lower.includes('drag') || lower.includes('board') || lower.includes('circles') || lower.includes('stretch') || lower.includes('pose') || lower.includes('bell') || lower.includes('ropes') || lower.includes('sprint') || lower.includes('skipping') || lower.includes('smr') || lower.includes('dumbbell') || lower.includes('barbell') || lower.includes('kettlebell')) continue;

  const eq = (c.equipment || '').toLowerCase();
  const isBw = eq === 'body only' || eq === '' || eq === 'other';
  if (!isBw) continue;

  if (existingNames.has(lower)) continue;

  const cleanKey = lower.replace(/[^a-z0-9]/g, '');
  if (seenCleanNames.has(cleanKey)) continue;
  seenCleanNames.add(cleanKey);

  const meta = getMetadata(c);
  const slug = c.name
    .toLowerCase()
    .replace(/[\(\)\/\,\.\'\"]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/^-|-$/g, '');

  const id = `ex_${slug.replace(/-/g, '_')}`;
  if (existingIds.has(id)) continue;

  newExercises.push({
    id,
    slug,
    name: c.name.trim(),
    catalogFolder: c.images[0].split('/')[0],
    catalogImages: c.images,
    category: meta.category,
    primaryMuscle: meta.primaryMuscle,
    secondaryMuscles: meta.secondaryMuscles,
    equipment: meta.equipment,
    exerciseClass: meta.exerciseClass,
    repRange: meta.trackingType === 'hold' ? '30–60s' : '10–15',
    difficulty: meta.difficulty,
    movementPattern: meta.movementPattern,
    trackingType: meta.trackingType,
    instructions: meta.instructions,
    mistakes: 'Rushing repetitions, breaking core alignment, and cutting range of motion short.',
    safetyTips: ['Keep your core braced and maintain neutral spinal alignment throughout.'],
    isCustom: false,
    favorite: false,
    usesBodyweight: true,
    unilateral: meta.movementPattern.includes('Unilateral'),
  });

  if (newExercises.length >= 100) break;
}

console.log(`Generated ${newExercises.length} pristine bodyweight & calisthenics exercises!`);
console.log('Sample newly generated:');
console.log(newExercises.slice(0, 5));

fs.writeFileSync('scripts/new-100-bodyweight-exercises.json', JSON.stringify(newExercises, null, 2));
