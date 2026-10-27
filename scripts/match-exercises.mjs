import fs from 'fs';
import path from 'path';

async function main() {
  console.log('Fetching free-exercise-db exercises.json catalog...');
  const res = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
  const dbExercises = await res.json();
  console.log(`Fetched ${dbExercises.length} catalog exercises.`);

  const localDbPath = path.join(process.cwd(), 'src', 'data', 'exerciseDatabase.ts');
  const dbContent = fs.readFileSync(localDbPath, 'utf8');
  const match = dbContent.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
  const localExercises = JSON.parse(match[1]);

  function normalize(str) {
    return (str || '')
      .toLowerCase()
      .replace(/[\(\)\-\/\,\.\'\"]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Pre-index dbExercises
  const dbMap = new Map();
  const dbNormalizedList = dbExercises.map(e => ({
    raw: e,
    normName: normalize(e.name),
    images: e.images || []
  }));

  function findMatch(localEx) {
    const norm = normalize(localEx.name);
    // 1. Exact name match
    for (const item of dbNormalizedList) {
      if (item.normName === norm && item.images.length >= 2) return item;
    }
    // 2. Check aliases
    if (localEx.aliases) {
      for (const alias of localEx.aliases) {
        const normAlias = normalize(alias);
        for (const item of dbNormalizedList) {
          if (item.normName === normAlias && item.images.length >= 2) return item;
        }
      }
    }
    // 3. Substring match
    for (const item of dbNormalizedList) {
      if (item.images.length >= 2) {
        if (norm.length > 5 && (item.normName.includes(norm) || norm.includes(item.normName))) {
          return item;
        }
      }
    }
    return null;
  }

  let matched = 0;
  const matches = [];
  for (const ex of localExercises) {
    const m = findMatch(ex);
    if (m) {
      matched++;
      matches.push({ localId: ex.id, localName: ex.name, matchedName: m.raw.name, images: m.images });
    }
  }

  console.log(`\nMatched ${matched} of ${localExercises.length} exercises to real photograph records!`);
  console.log('Sample 10 matches:');
  console.log(matches.slice(0, 10));

  fs.writeFileSync('scripts/matches.json', JSON.stringify(matches, null, 2), 'utf8');
}

main().catch(console.error);
