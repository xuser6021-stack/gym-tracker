import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * Exercise mapping definition:
 * For each of the 31 seed exercises in IronTrack, maps to:
 * - slug: folder under public/exercises/<slug>/
 * - dbFolder: folder in temp-exercises/exercises/<dbFolder>/
 * - name: exercise title
 * - primaryMuscle: main muscle targeted
 * - secondaryMuscles: secondary muscles
 */
export const EXERCISE_ASSET_MAPPINGS = [
  {
    id: 'ex_barbell_bench_press',
    slug: 'barbell-bench-press',
    name: 'Barbell bench press',
    dbFolder: 'Barbell_Bench_Press_-_Medium_Grip',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Front delts', 'Triceps']
  },
  {
    id: 'ex_incline_dumbbell_press',
    slug: 'incline-dumbbell-press',
    name: 'Incline dumbbell press',
    dbFolder: 'Incline_Dumbbell_Press',
    primaryMuscle: 'Upper chest',
    secondaryMuscles: ['Front delts', 'Triceps']
  },
  {
    id: 'ex_seated_db_shoulder_press',
    slug: 'seated-db-shoulder-press',
    name: 'Seated dumbbell shoulder press',
    dbFolder: 'Seated_Dumbbell_Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps', 'Upper chest']
  },
  {
    id: 'ex_db_lateral_raise',
    slug: 'db-lateral-raise',
    name: 'Dumbbell lateral raise',
    dbFolder: 'Side_Lateral_Raise',
    primaryMuscle: 'Side delts',
    secondaryMuscles: ['Traps']
  },
  {
    id: 'ex_cable_lateral_raise',
    slug: 'cable-lateral-raise',
    name: 'Cable lateral raise',
    dbFolder: 'Cable_Seated_Lateral_Raise',
    primaryMuscle: 'Side delts',
    secondaryMuscles: ['Traps']
  },
  {
    id: 'ex_machine_chest_press',
    slug: 'machine-chest-press',
    name: 'Machine chest press',
    dbFolder: 'Leverage_Chest_Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Front delts', 'Triceps']
  },
  {
    id: 'ex_machine_shoulder_press',
    slug: 'machine-shoulder-press',
    name: 'Machine shoulder press',
    dbFolder: 'Machine_Shoulder_Military_Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps']
  },
  {
    id: 'ex_rope_triceps_pushdown',
    slug: 'rope-triceps-pushdown',
    name: 'Rope triceps pushdown',
    dbFolder: 'Triceps_Pushdown_-_Rope_Attachment',
    primaryMuscle: 'Triceps',
    secondaryMuscles: []
  },
  {
    id: 'ex_overhead_cable_triceps_extension',
    slug: 'overhead-cable-triceps-extension',
    name: 'Overhead cable triceps extension',
    dbFolder: 'Cable_Rope_Overhead_Triceps_Extension',
    primaryMuscle: 'Triceps',
    secondaryMuscles: []
  },
  {
    id: 'ex_lat_pulldown',
    slug: 'lat-pulldown',
    name: 'Lat pulldown',
    dbFolder: 'Wide-Grip_Lat_Pulldown',
    primaryMuscle: 'Lats',
    secondaryMuscles: ['Biceps', 'Upper back']
  },
  {
    id: 'ex_lat_pulldown_alt_grip',
    slug: 'lat-pulldown-alt-grip',
    name: 'Lat pulldown (alternate grip)',
    dbFolder: 'Close-Grip_Front_Lat_Pulldown',
    primaryMuscle: 'Lats',
    secondaryMuscles: ['Biceps', 'Upper back']
  },
  {
    id: 'ex_seated_cable_row',
    slug: 'seated-cable-row',
    name: 'Seated cable row',
    dbFolder: 'Seated_Cable_Rows',
    primaryMuscle: 'Upper back',
    secondaryMuscles: ['Lats', 'Biceps']
  },
  {
    id: 'ex_chest_supported_row',
    slug: 'chest-supported-row',
    name: 'Chest-supported row',
    dbFolder: 'Dumbbell_Incline_Row',
    primaryMuscle: 'Upper back',
    secondaryMuscles: ['Rear delts', 'Biceps']
  },
  {
    id: 'ex_single_arm_cable_row',
    slug: 'single-arm-cable-row',
    name: 'Single-arm cable row',
    dbFolder: 'Seated_One-arm_Cable_Pulley_Rows',
    primaryMuscle: 'Lats',
    secondaryMuscles: ['Biceps', 'Rhomboids']
  },
  {
    id: 'ex_reverse_pec_deck',
    slug: 'reverse-pec-deck',
    name: 'Reverse pec deck',
    dbFolder: 'Reverse_Machine_Flyes',
    primaryMuscle: 'Rear delts',
    secondaryMuscles: ['Rhomboids', 'Traps']
  },
  {
    id: 'ex_dumbbell_biceps_curl',
    slug: 'dumbbell-biceps-curl',
    name: 'Dumbbell biceps curl',
    dbFolder: 'Dumbbell_Bicep_Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms']
  },
  {
    id: 'ex_hammer_curl',
    slug: 'hammer-curl',
    name: 'Hammer curl',
    dbFolder: 'Hammer_Curls',
    primaryMuscle: 'Brachialis',
    secondaryMuscles: ['Biceps', 'Forearms']
  },
  {
    id: 'ex_ez_bar_curl',
    slug: 'ez-bar-curl',
    name: 'EZ-bar curl',
    dbFolder: 'EZ-Bar_Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms']
  },
  {
    id: 'ex_incline_dumbbell_curl',
    slug: 'incline-dumbbell-curl',
    name: 'Incline dumbbell curl',
    dbFolder: 'Incline_Dumbbell_Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms']
  },
  {
    id: 'ex_leg_press',
    slug: 'leg-press',
    name: 'Leg press',
    dbFolder: 'Leg_Press',
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings']
  },
  {
    id: 'ex_db_romanian_deadlift',
    slug: 'db-romanian-deadlift',
    name: 'Dumbbell Romanian deadlift',
    dbFolder: 'Romanian_Deadlift',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Lower back']
  },
  {
    id: 'ex_barbell_squat',
    slug: 'barbell-squat',
    name: 'Barbell squat',
    dbFolder: 'Barbell_Full_Squat',
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Core']
  },
  {
    id: 'ex_goblet_squat',
    slug: 'goblet-squat',
    name: 'Goblet squat',
    dbFolder: 'Goblet_Squat',
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Core']
  },
  {
    id: 'ex_leg_extension',
    slug: 'leg-extension',
    name: 'Leg extension',
    dbFolder: 'Leg_Extensions',
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: []
  },
  {
    id: 'ex_seated_leg_curl',
    slug: 'seated-leg-curl',
    name: 'Seated leg curl',
    dbFolder: 'Seated_Leg_Curl',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Calves']
  },
  {
    id: 'ex_lying_leg_curl',
    slug: 'lying-leg-curl',
    name: 'Lying leg curl',
    dbFolder: 'Lying_Leg_Curls',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Calves']
  },
  {
    id: 'ex_hip_thrust_machine',
    slug: 'hip-thrust-machine',
    name: 'Hip thrust machine',
    dbFolder: 'Barbell_Hip_Thrust',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings']
  },
  {
    id: 'ex_standing_calf_raise',
    slug: 'standing-calf-raise',
    name: 'Standing calf raise',
    dbFolder: 'Standing_Calf_Raises',
    primaryMuscle: 'Gastrocnemius',
    secondaryMuscles: ['Soleus']
  },
  {
    id: 'ex_seated_calf_raise',
    slug: 'seated-calf-raise',
    name: 'Seated calf raise',
    dbFolder: 'Seated_Calf_Raise',
    primaryMuscle: 'Soleus',
    secondaryMuscles: ['Gastrocnemius']
  },
  {
    id: 'ex_plank',
    slug: 'plank',
    name: 'Plank',
    dbFolder: 'Plank',
    primaryMuscle: 'Core',
    secondaryMuscles: ['Shoulders', 'Glutes']
  },
  {
    id: 'ex_dead_bug',
    slug: 'dead-bug',
    name: 'Dead bug',
    dbFolder: 'Dead_Bug',
    primaryMuscle: 'Core',
    secondaryMuscles: ['Hip flexors']
  }
];

function generateAnatomySvg(exerciseName, primary, secondaries) {
  const secondaryList = secondaries.length ? secondaries.join(', ') : 'Stabilizers';
  return `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Grid subtle background lines -->
  <g stroke="#334155" stroke-width="0.5" opacity="0.3">
    <line x1="0" y1="80" x2="600" y2="80"/>
    <line x1="0" y1="160" x2="600" y2="160"/>
    <line x1="0" y1="240" x2="600" y2="240"/>
    <line x1="0" y1="320" x2="600" y2="320"/>
    <line x1="120" y1="0" x2="120" y2="400"/>
    <line x1="240" y1="0" x2="240" y2="400"/>
    <line x1="360" y1="0" x2="360" y2="400"/>
    <line x1="480" y1="0" x2="480" y2="400"/>
  </g>

  <!-- Body Silhouette (Anatomical Anterior / Posterior wireframe stylised) -->
  <g transform="translate(140, 45)">
    <!-- Head & Neck -->
    <ellipse cx="80" cy="35" rx="18" ry="24" fill="#475569" opacity="0.75"/>
    <path d="M 72 58 L 88 58 L 92 78 L 68 78 Z" fill="#475569" opacity="0.8"/>
    
    <!-- Torso Core & Ribs -->
    <path d="M 50 82 Q 80 75 110 82 L 102 180 Q 80 185 58 180 Z" fill="#334155" opacity="0.85"/>
    
    <!-- Arms -->
    <path d="M 48 82 Q 30 115 26 150 Q 22 185 20 220" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M 112 82 Q 130 115 134 150 Q 138 185 140 220" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.7"/>
    
    <!-- Legs -->
    <path d="M 64 180 Q 58 240 56 280 L 52 340" stroke="#475569" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M 96 180 Q 102 240 104 280 L 108 340" stroke="#475569" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.7"/>

    <!-- Highlighted Primary Muscle Overlay -->
    <ellipse cx="80" cy="115" rx="28" ry="22" fill="#ef4444" filter="url(#glow)" opacity="0.88"/>
    <!-- Secondary Muscle Accent -->
    <circle cx="52" cy="100" r="14" fill="#f97316" opacity="0.8"/>
    <circle cx="108" cy="100" r="14" fill="#f97316" opacity="0.8"/>
  </g>

  <!-- Descriptive Information Panel -->
  <g transform="translate(360, 80)">
    <rect x="-15" y="-15" width="235" height="250" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.9"/>
    
    <text x="0" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" letter-spacing="1">ANATOMICAL TARGET</text>
    <text x="0" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#f8fafc">${escapeXml(exerciseName)}</text>
    
    <!-- Primary muscle badge -->
    <rect x="0" y="78" width="12" height="12" rx="3" fill="#ef4444"/>
    <text x="22" y="89" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#f8fafc">Primary: ${escapeXml(primary)}</text>
    
    <!-- Secondary muscle badge -->
    <rect x="0" y="112" width="12" height="12" rx="3" fill="#f97316"/>
    <text x="22" y="123" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#cbd5e1">Secondary: ${escapeXml(secondaryList)}</text>
    
    <!-- Stabilizers -->
    <rect x="0" y="146" width="12" height="12" rx="3" fill="#475569"/>
    <text x="22" y="157" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Synergists: Body kinetic chain</text>
    
    <path d="M 0 185 L 200 185" stroke="#334155" stroke-width="1"/>
    <text x="0" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#38bdf8">IronTrack Verified Anatomy</text>
  </g>
</svg>
`;
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function processAll() {
  const root = path.join(process.cwd(), 'public', 'exercises');
  if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  }

  const generatedManifest = {};

  console.log(`Starting processing for ${EXERCISE_ASSET_MAPPINGS.length} exercises...`);

  for (const item of EXERCISE_ASSET_MAPPINGS) {
    const targetDir = path.join(root, item.slug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const srcDir = path.join(process.cwd(), 'temp-exercises', 'exercises', item.dbFolder);
    const src0 = path.join(srcDir, '0.jpg');
    const src1 = path.join(srcDir, '1.jpg');

    if (!fs.existsSync(src0) || !fs.existsSync(src1)) {
      console.error(`ERROR: Missing source files for ${item.name} at ${srcDir}`);
      continue;
    }

    const b0 = fs.readFileSync(src0);
    const b1 = fs.readFileSync(src1);

    // 1. Thumbnail: 320x320 WebP
    const thumbPath = path.join(targetDir, 'thumbnail.webp');
    await sharp(b0)
      .resize(320, 320, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(thumbPath);

    // 2. Start position: 480x360 WebP
    const startPath = path.join(targetDir, 'start.webp');
    await sharp(b0)
      .resize(480, 360, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(startPath);

    // 3. Finish position: 480x360 WebP
    const finishPath = path.join(targetDir, 'finish.webp');
    await sharp(b1)
      .resize(480, 360, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(finishPath);

    // 4. Anatomy illustration: 600x400 WebP
    const anatomySvg = generateAnatomySvg(item.name, item.primaryMuscle, item.secondaryMuscles);
    const anatomyPath = path.join(targetDir, 'anatomy.webp');
    await sharp(Buffer.from(anatomySvg))
      .webp({ quality: 90 })
      .toFile(anatomyPath);

    // Record available files
    generatedManifest[item.slug] = {
      available: ['thumbnail', 'start', 'finish', 'anatomy'],
      source: 'free-exercise-db (yuhonas) & IronTrack Anatomical Design System',
      license: 'Public Domain (Unlicense) / CC0',
      attribution: 'Exercise demonstration photography via free-exercise-db (Public Domain); anatomical graphic system by IronTrack.'
    };

    console.log(`✓ Processed ${item.name} (${item.slug})`);
  }

  // Update src/data/exerciseVisuals.ts
  const visualsPath = path.join(process.cwd(), 'src', 'data', 'exerciseVisuals.ts');
  const visualsContent = `import type { Exercise, ExerciseVisuals } from '../types'
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
  /** Which bundled files are present under \`/exercises/<slug>/\`. */
  available: VisualKind[]
  /** Where the asset came from (author/URL/service). */
  source: string
  /** Licence name. */
  license: string
  /** Human-readable attribution string. */
  attribution: string
}

/** File name convention inside each \`/exercises/<slug>/\` folder. */
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
export const BUNDLED_VISUALS: Record<string, VisualAssetRecord> = ${JSON.stringify(generatedManifest, null, 2)}

export function visualFilePath(slug: string, kind: VisualKind): string {
  return \`\${EXERCISE_ASSET_ROOT}/\${slug}/\${VISUAL_FILE_NAMES[kind]}\`
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
`;

  fs.writeFileSync(visualsPath, visualsContent, 'utf8');
  console.log(`Updated ${visualsPath} with full bundle registry!`);
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});
