import fs from 'fs';
import path from 'path';

async function main() {
  const catalogRes = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
  const catalog = await catalogRes.json();

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

  // Token-based similarity & keywords
  function tokenize(str) {
    return new Set(normalize(str).split(' ').filter(w => w.length > 2 && !['and', 'with', 'the', 'from', 'for', 'each', 'arm', 'leg', 'hold'].includes(w)));
  }

  function getJaccard(tokensA, tokensB) {
    let intersection = 0;
    for (const t of tokensA) {
      if (tokensB.has(t)) intersection++;
    }
    const union = tokensA.size + tokensB.size - intersection;
    return union === 0 ? 0 : intersection / union;
  }

  const catalogWithTokens = catalog
    .filter(c => c.images && c.images.length >= 2)
    .map(c => ({
      raw: c,
      norm: normalize(c.name),
      tokens: tokenize(c.name),
      category: (c.category || '').toLowerCase(),
      equipment: (c.equipment || '').toLowerCase(),
      primaryMuscle: (c.primaryMuscles?.[0] || '').toLowerCase()
    }));

  const matches = [];

  for (const ex of localExercises) {
    const norm = normalize(ex.name);
    const exTokens = tokenize(ex.name);
    if (ex.aliases) {
      ex.aliases.forEach(a => tokenize(a).forEach(t => exTokens.add(t)));
    }

    // 1. Exact match
    let best = null;
    let bestScore = 0;

    for (const c of catalogWithTokens) {
      if (c.norm === norm) {
        best = c;
        bestScore = 1.0;
        break;
      }
      if (ex.aliases && ex.aliases.some(a => normalize(a) === c.norm)) {
        best = c;
        bestScore = 1.0;
        break;
      }
    }

    // 2. Substring & Token matching
    if (!best) {
      for (const c of catalogWithTokens) {
        if (c.norm.includes(norm) || norm.includes(c.norm)) {
          const score = 0.85 + (c.norm === norm ? 0.1 : 0);
          if (score > bestScore) {
            best = c;
            bestScore = score;
          }
        } else {
          const jaccard = getJaccard(exTokens, c.tokens);
          if (jaccard > 0.45 && jaccard > bestScore) {
            best = c;
            bestScore = jaccard;
          }
        }
      }
    }

    if (best && bestScore >= 0.45) {
      matches.push({
        localId: ex.id,
        localName: ex.name,
        catalogName: best.raw.name,
        score: bestScore,
        images: best.raw.images
      });
    }
  }

  console.log(`Matched ${matches.length} out of ${localExercises.length} local exercises!`);
  fs.writeFileSync('scripts/matches-improved.json', JSON.stringify(matches, null, 2), 'utf8');
}

main().catch(console.error);
