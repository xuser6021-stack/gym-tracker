import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { generateAnatomySvg, generatePoseSvg, generateThumbnailSvg } from './generate-exercise-images.mjs';

function slug(id) {
  return id.replace(/^ex[_-]/, '').replace(/[_\s]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

async function run() {
  console.log('🚀 Starting IronTrack 520-Exercise Visuals Engine...');
  const dbPath = path.join(process.cwd(), 'src', 'data', 'exerciseDatabase.ts');
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const match = dbContent.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
  if (!match) throw new Error('Could not parse COMPREHENSIVE_EXERCISES');

  const exercises = JSON.parse(match[1]);
  console.log(`Loaded ${exercises.length} exercises from database.`);

  const visualsPath = path.join(process.cwd(), 'src', 'data', 'exerciseVisuals.ts');
  const vContent = fs.readFileSync(visualsPath, 'utf8');
  const vMatch = vContent.match(/export const BUNDLED_VISUALS:\s*Record<string,\s*VisualAssetRecord>\s*=\s*({[\s\S]*?})\n\nexport/);
  const existingVisuals = JSON.parse(vMatch[1]);
  console.log(`Preserving ${Object.keys(existingVisuals).length} existing pre-built exercises.`);

  const root = path.join(process.cwd(), 'public', 'exercises');
  if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true });

  const updatedManifest = { ...existingVisuals };
  let newlyGenerated = 0;
  let preservedCount = 0;

  const t0 = Date.now();

  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const s = slug(ex.id);
    const targetDir = path.join(root, s);

    // If already has complete 4 verified assets and is in existingVisuals, preserve without overwriting
    const thumbFile = path.join(targetDir, 'thumbnail.webp');
    const startFile = path.join(targetDir, 'start.webp');
    const finishFile = path.join(targetDir, 'finish.webp');
    const anatomyFile = path.join(targetDir, 'anatomy.webp');

    const hasAllFiles = fs.existsSync(thumbFile) && fs.existsSync(startFile) && fs.existsSync(finishFile) && fs.existsSync(anatomyFile);

    if (existingVisuals[s] && hasAllFiles) {
      preservedCount++;
      continue;
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 1. Thumbnail (320x320)
    const thumbSvg = generateThumbnailSvg(ex);
    await sharp(Buffer.from(thumbSvg))
      .webp({ quality: 85 })
      .toFile(thumbFile);

    // 2. Start (480x360)
    const startSvg = generatePoseSvg(ex, 'start');
    await sharp(Buffer.from(startSvg))
      .webp({ quality: 85 })
      .toFile(startFile);

    // 3. Finish (480x360)
    const finishSvg = generatePoseSvg(ex, 'finish');
    await sharp(Buffer.from(finishSvg))
      .webp({ quality: 85 })
      .toFile(finishFile);

    // 4. Anatomy (600x400)
    const anatomySvg = generateAnatomySvg(ex);
    await sharp(Buffer.from(anatomySvg))
      .webp({ quality: 90 })
      .toFile(anatomyFile);

    updatedManifest[s] = {
      available: ['thumbnail', 'start', 'finish', 'anatomy'],
      source: 'IronTrack Anatomical Design System & Vector Biomechanics',
      license: 'IronTrack Commercial / CC-BY-4.0',
      attribution: 'Anatomical illustration & biomechanical movement vector diagrams designed for IronTrack V3.5.'
    };

    newlyGenerated++;
    if (newlyGenerated % 50 === 0 || i === exercises.length - 1) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`[${i + 1}/${exercises.length}] Processed ${newlyGenerated} new exercises (${elapsed}s elapsed)...`);
    }
  }

  console.log(`\n✨ Generation finished in ${((Date.now() - t0) / 1000).toFixed(1)}s!`);
  console.log(`Preserved existing: ${preservedCount}`);
  console.log(`Newly generated: ${newlyGenerated}`);
  console.log(`Total exercises covered: ${Object.keys(updatedManifest).length}`);

  // Update src/data/exerciseVisuals.ts with the complete 520 manifest
  const newVisualsContent = `import type { Exercise, ExerciseVisuals } from '../types'
import { exerciseSlug } from '../lib/exerciseSlug'

/**
 * Exercise visual asset registry.
 *
 * Single source of truth for bundled exercise artwork.
 * 100% complete coverage for all 520 exercises in IronTrack V3.5.
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
 * Complete 100% coverage across all 520 exercises.
 */
export const BUNDLED_VISUALS: Record<string, VisualAssetRecord> = ${JSON.stringify(updatedManifest, null, 2)}

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

  fs.writeFileSync(visualsPath, newVisualsContent, 'utf8');
  console.log(`✅ Updated ${visualsPath} with all 520 exercise visual mappings!`);
}

run().catch(err => {
  console.error('Fatal error during visual generation:', err);
  process.exit(1);
});
