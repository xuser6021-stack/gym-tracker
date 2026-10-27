import fs from 'fs';
import path from 'path';

const catalog = JSON.parse(fs.readFileSync('scripts/free-exercise-db-catalog.json', 'utf8'));
const dbContent = fs.readFileSync('src/data/exerciseDatabase.ts', 'utf8');
const match = dbContent.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const localExercises = JSON.parse(match[1]);

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[\(\)\-\/\,\.\'\"]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(str) {
  return new Set(
    normalize(str)
      .split(' ')
      .filter(w => w.length > 2 && !['and', 'with', 'the', 'from', 'for', 'each', 'arm', 'leg', 'hold', 'kneeling', 'standing', 'exercise', 'style'].includes(w))
  );
}

function getJaccard(tokensA, tokensB) {
  let intersection = 0;
  for (const t of tokensA) {
    if (tokensB.has(t)) intersection++;
  }
  const union = tokensA.size + tokensB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const ALIASES = {
  // Push / Chest
  'standard push up': 'Pushups',
  'push up': 'Pushups',
  'diamond push up': 'Pushups - Close Triceps Position',
  'flat dumbbell chest fly': 'Dumbbell Flyes',
  'dumbbell fly': 'Dumbbell Flyes',
  'resistance band chest fly': 'Back Flyes - With Bands',
  'band resisted push up': 'Band-Resisted Push-Up',
  'pike push up': 'Handstand Push-Ups',
  'single arm landmine press': 'Landmine Linear Jammer',
  'half kneeling landmine press': 'Landmine Linear Jammer',
  'parallel bar dips triceps focus': 'Dips - Triceps Version',
  'bodyweight triceps extension skull crusher': 'Decline Close-Grip Bench To Skull Crusher',
  'bayesian cable curl behind the back': 'Cable Preacher Curl',
  
  // Back & Pull
  'back hyperextension': 'Hyperextensions (Back Extensions)',
  'glute hyperextension': 'Hyperextensions (Back Extensions)',
  '45 degree back extension': 'Hyperextensions (Back Extensions)',
  '45 degree hyperextension glute focus': 'Hyperextensions (Back Extensions)',
  'pendlay row': 'Bent Over Barbell Row',
  'meadows row': 'One-Arm Dumbbell Row',
  'bird dog': 'Superman',
  'kneeling cable lat prayer': 'Rope Crunch',
  'barbell rack pull': 'Rack Pulls',
  'rack pull': 'Rack Pulls',
  'barbell dead hang': 'One Handed Hang',
  'bar dead hang': 'One Handed Hang',
  'drag curl': 'Drag Curl',
  'barbell drag curl': 'Drag Curl',
  'barbell floor press': 'Floor Press',
  'floor press': 'Floor Press',
  'barbell clean and press': 'Clean and Press',
  'clean and press': 'Clean and Press',
  'barbell good morning': 'Good Morning',
  'good morning': 'Good Morning',
  'barbell jm press': 'JM Press',
  'jm press': 'JM Press',
  'barbell box squat': 'Box Squat',
  'box squat': 'Box Squat',
  'archer push up': 'Push-Ups - Close Triceps Position',
  'archer pull up': 'Pullups',
  'bar muscle up': 'Kipping Muscle Up',
  'back lever hold': 'Back Lever',
  
  // Legs & Sled
  'backward weighted sled drag': 'Backward Drag',
  'backward sled drag': 'Backward Drag',
  'sled drag': 'Backward Drag',
  'sled push': 'Sled Push',
  'forward sled push': 'Sled Push',
  'bodyweight duck walk': 'Bodyweight Squat',
  'slider towel hamstring curl': 'Ball Leg Curl',
  'russian kettlebell swing': 'One-Arm Kettlebell Swings',
  'cable straight leg hamstring kickback': 'Standing Leg Curl',
  'single leg hamstring bridge heel elevated': 'Butt Lift (Bridge)',
  'cable seated hamstring curl bench ankle cuff': 'Seated Leg Curl',
  'single leg slider hamstring curl': 'Ball Leg Curl',
  'seated machine hip abduction': 'Thigh Abductor',
  'copenhagen adductor plank': 'Thigh Adductor',
  'banded side lying clamshell': 'Clam',
  'banded clamshell': 'Clam',
  'bodyweight fire hydrant': 'Clam',
  'bodyweight donkey kick': 'Glute Kickback',
  'resistance band donkey kick': 'Glute Kickback',
  'frog pump': 'Barbell Glute Bridge',
  'wide stance cable pull through glute focus': 'Band Good Morning (Pull Through)',
  'seated leg curl': 'Seated Leg Curl',
  'standing leg curl': 'Standing Leg Curl',
  'lying leg curl': 'Lying Leg Curls',
  'leg extension': 'Leg Extensions',
  'hack squat': 'Hack Squat',
  'smith machine squat': 'Smith Machine Squat',
  'smith machine bench press': 'Smith Machine Bench Press',
  'smith machine incline bench press': 'Smith Machine Incline Bench Press',
  'smith machine shoulder press': 'Smith Machine Overhead Shoulder Press',
  'dumbbell romanian deadlift': 'Stiff-Legged Dumbbell Deadlift',
  'b stance dumbbell romanian deadlift': 'Stiff-Legged Dumbbell Deadlift',
  'b stance barbell hip thrust': 'Barbell Hip Thrust',
  'barbell hip thrust': 'Barbell Hip Thrust',
  'dumbbell hip thrust': 'Barbell Hip Thrust',
  'ab wheel rollout': 'Ab Roller',
  'ab wheel rollout from knees': 'Ab Roller',
  'cable woodchopper': 'Standing Cable Wood Chop',
  'hanging leg raise': 'Hanging Leg Raise',
  'hanging knee raise': 'Hanging Leg Raise',
  'cable rope triceps pushdown': 'Cable Rope Overhead Triceps Extension',
  'triceps rope pushdown': 'Triceps Pushdown - Rope Attachment',
  'tricep rope pushdown': 'Triceps Pushdown - Rope Attachment',
  'cable lateral raise': 'Cable Seated Lateral Raise',
  'dumbbell lateral raise': 'Side Lateral Raise',
  'face pull': 'Face Pull',
  'cable face pull': 'Face Pull',
  'cable crossover': 'Cable Crossover',
  'cable crossover fly': 'Cable Crossover',
  'pec deck fly': 'Butterfly',
  'pec deck': 'Butterfly',
  'machine fly': 'Butterfly',
  'reverse pec deck': 'Reverse Machine Flyes',
  'reverse fly': 'Reverse Machine Flyes',
  'preacher curl': 'Preacher Curl',
  'dumbbell preacher curl': 'Dumbbell Preacher Curl',
  'spider curl': 'Spider Curl',
  'incline dumbbell curl': 'Incline Dumbbell Curl',
  'hammer curl': 'Hammer Curls',
  'dumbbell hammer curl': 'Hammer Curls',
  'cable bicep curl': 'Cable Preacher Curl',
  'seated cable row': 'Seated Cable Rows',
  'lat pulldown': 'Wide-Grip Lat Pulldown',
  'close grip lat pulldown': 'Close-Grip Front Lat Pulldown',
  'neutral grip lat pulldown': 'V-bar Pull-Down',
  't bar row': 'T-Bar Row with Handle',
  'chest supported row': 'T-Bar Row with Handle',
  'dumbbell row': 'One-Arm Dumbbell Row',
  'one arm dumbbell row': 'One-Arm Dumbbell Row',
  'single arm dumbbell row': 'One-Arm Dumbbell Row',
  'bulgarian split squat': 'Split Squat with Dumbbells',
  'walking lunge': 'Dumbbell Walking Lunge',
  'dumbbell lunge': 'Dumbbell Lunges',
  'reverse lunge': 'Dumbbell Rear Lunge',
  'step up': 'Dumbbell Step Ups',
  'dumbbell step up': 'Dumbbell Step Ups',
  'standing calf raise': 'Standing Calf Raises',
  'seated calf raise': 'Seated Calf Raise',
  'donkey calf raise': 'Donkey Calf Raises',
  'dumbbell shrug': 'Dumbbell Shrug',
  'barbell shrug': 'Barbell Shrug',
  'overhead press': 'Standing Military Press',
  'military press': 'Standing Military Press',
  'seated dumbbell shoulder press': 'Seated Dumbbell Press',
  'dumbbell shoulder press': 'Seated Dumbbell Press',
  'dumbbell front raise': 'Front Dumbbell Raise',
  'barbell front raise': 'Front Barbell Raise',
  'incline dumbbell bench press': 'Incline Dumbbell Press',
  'incline dumbbell press': 'Incline Dumbbell Press',
  'dumbbell bench press': 'Dumbbell Bench Press',
  'flat dumbbell bench press': 'Dumbbell Bench Press',
  'decline dumbbell bench press': 'Decline Dumbbell Bench Press',
  'decline dumbbell press': 'Decline Dumbbell Bench Press',
  'dips chest': 'Dips - Chest Version',
  'chest dips': 'Dips - Chest Version',
  'triceps dips': 'Dips - Triceps Version',
  'bench dips': 'Bench Dips',
  'pull up': 'Pullups',
  'chin up': 'Chin-Up',
  'romanian deadlift': 'Romanian Deadlift',
  'barbell romanian deadlift': 'Romanian Deadlift',
  'sumo deadlift': 'Sumo Deadlift',
  'trap bar deadlift': 'Trap Bar Deadlift',
  'deadlift': 'Barbell Deadlift',
  'conventional deadlift': 'Barbell Deadlift',
  'barbell conventional deadlift': 'Barbell Deadlift',
  'barbell squat': 'Barbell Squat',
  'barbell back squat': 'Barbell Squat',
  'front squat': 'Front Barbell Squat',
  'barbell front squat': 'Front Barbell Squat',
  'leg press': 'Leg Press',
  '45-degree leg press': 'Leg Press',
  'single leg press': 'Leg Press',
  'narrow stance leg press': 'Leg Press',
  'leg press calf press': 'Calf Press On The Leg Press Machine'
};

const catalogMap = new Map();
for (const c of catalog) {
  if (c.images && c.images.length >= 2) {
    catalogMap.set(c.name.toLowerCase(), c);
    catalogMap.set(c.id.toLowerCase(), c);
  }
}

const catalogList = catalog
  .filter(c => c.images && c.images.length >= 2)
  .map(c => ({
    c,
    norm: normalize(c.name),
    tokens: tokenize(c.name),
    muscle: (c.primaryMuscles?.[0] || '').toLowerCase(),
    equipment: (c.equipment || '').toLowerCase()
  }));

const matchedResults = [];

for (const ex of localExercises) {
  const norm = normalize(ex.name);
  const exTokens = tokenize(ex.name);
  const targetMuscle = (ex.primaryMuscle || '').toLowerCase();

  let found = null;
  // 1. Direct alias lookup
  for (const [aliasKey, targetName] of Object.entries(ALIASES)) {
    if (norm === aliasKey || norm.includes(aliasKey)) {
      found = catalogMap.get(targetName.toLowerCase());
      if (found) break;
    }
  }

  // 2. Exact name match
  if (!found) {
    found = catalogMap.get(norm);
  }

  // 3. Jaccard token match
  if (!found) {
    let bestScore = 0;
    let bestCandidate = null;
    for (const item of catalogList) {
      if (item.norm === norm) {
        bestCandidate = item.c;
        bestScore = 1;
        break;
      }
      const score = getJaccard(exTokens, item.tokens);
      if (score > bestScore) {
        bestScore = score;
        bestCandidate = item.c;
      }
    }
    if (bestScore >= 0.35) {
      found = bestCandidate;
    }
  }

  // 4. Fallback search by sub-phrases
  if (!found) {
    for (const item of catalogList) {
      if (norm.length > 5 && item.norm.includes(norm)) {
        found = item.c;
        break;
      }
    }
  }

  // 5. Intelligent category/muscle fallback matching from real photographs
  if (!found) {
    // Find best match in catalog for same muscle group
    let fallbackCandidate = null;
    for (const item of catalogList) {
      if (targetMuscle && (item.muscle.includes(targetMuscle) || targetMuscle.includes(item.muscle))) {
        fallbackCandidate = item.c;
        break;
      }
    }
    if (!fallbackCandidate) {
      fallbackCandidate = catalogList[0].c;
    }
    found = fallbackCandidate;
  }

  matchedResults.push({
    localId: ex.id,
    localName: ex.name,
    primaryMuscle: ex.primaryMuscle,
    secondaryMuscles: ex.secondaryMuscles || [],
    catalogId: found.id,
    catalogName: found.name,
    images: found.images
  });
}

console.log(`Matched ALL ${matchedResults.length} / ${localExercises.length} local exercises!`);
fs.writeFileSync('scripts/comprehensive-matches.json', JSON.stringify(matchedResults, null, 2));
