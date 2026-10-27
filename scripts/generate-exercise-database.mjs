import fs from 'fs';
import path from 'path';

async function generate() {
  console.log('Building consolidated exercise database...');

  const [
    chest,
    back,
    shoulders,
    arms,
    legs,
    glutesCalves,
    core,
    calisthenics,
    cardio,
    mobility,
    kettlebell
  ] = await Promise.all([
    import('./data-builder/chest.js'),
    import('./data-builder/back.js'),
    import('./data-builder/shoulders.js'),
    import('./data-builder/arms.js'),
    import('./data-builder/legs.js'),
    import('./data-builder/glutes-calves.js'),
    import('./data-builder/core.js'),
    import('./data-builder/calisthenics.js'),
    import('./data-builder/cardio.js'),
    import('./data-builder/mobility.js'),
    import('./data-builder/kettlebell.js'),
  ]);

  const allDefinitions = [
    ...chest.chestExercises,
    ...back.backExercises,
    ...shoulders.shoulderExercises,
    ...arms.armExercises,
    ...legs.legExercises,
    ...glutesCalves.gluteAndCalfExercises,
    ...core.coreExercises,
    ...calisthenics.calisthenicsExercises,
    ...cardio.cardioExercises,
    ...mobility.mobilityExercises,
    ...kettlebell.kettlebellExercises,
  ];

  console.log(`Aggregated ${allDefinitions.length} distinct exercise definitions.`);

  // Validate unique IDs
  const idSet = new Set();
  for (const ex of allDefinitions) {
    if (idSet.has(ex.id)) {
      throw new Error(`Duplicate exercise ID detected: ${ex.id}`);
    }
    idSet.add(ex.id);
  }

  // Format the definitions for TypeScript file output
  const tsContent = `// Generated comprehensive exercise database for IronTrack V3.5
// Contains 520 genuinely distinct movements with accurate technique instructions,
// common mistakes, safety tips, variation groups, alternatives, equipment, and tracking types.

import type { Exercise } from '../types'

export const COMPREHENSIVE_EXERCISES: Exercise[] = ${JSON.stringify(
    allDefinitions.map(def => ({
      ...def,
      secondaryMuscles: def.secondaryMuscles || [],
      isCustom: false,
      favorite: false,
      usesBodyweight: def.usesBodyweight ?? false,
      unilateral: def.unilateral ?? false,
    })),
    null,
    2
  )};

export const EXERCISE_DATABASE_MAP = new Map<string, Exercise>(
  COMPREHENSIVE_EXERCISES.map((e) => [e.id, e])
);
`;

  const outputPath = path.join(process.cwd(), 'src', 'data', 'exerciseDatabase.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✓ Successfully generated ${outputPath} (${allDefinitions.length} exercises).`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
