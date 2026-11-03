import fs from 'fs';
import path from 'path';

const catalog = JSON.parse(fs.readFileSync('scripts/free-exercise-db-catalog.json', 'utf8'));
const content = fs.readFileSync('src/data/exerciseDatabase.ts', 'utf8');
const match = content.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const ex = JSON.parse(match[1]);

const existingNames = new Set(ex.map(e => e.name.toLowerCase()));
const existingIds = new Set(ex.map(e => e.id));

// Catalog muscle to standardized primaryMuscle & category
function mapMuscleAndCategory(catMuscle, name) {
  const m = (catMuscle || '').toLowerCase();
  const n = (name || '').toLowerCase();

  if (m === 'chest') return { primary: 'Chest', category: 'push' };
  if (m === 'shoulders') {
    if (n.includes('rear') || n.includes('face')) return { primary: 'Rear delts', category: 'pull' };
    if (n.includes('lateral') || n.includes('side')) return { primary: 'Side delts', category: 'push' };
    return { primary: 'Front delts', category: 'push' };
  }
  if (m === 'triceps') return { primary: 'Triceps', category: 'push' };
  if (m === 'biceps') return { primary: 'Biceps', category: 'pull' };
  if (m === 'forearms') return { primary: 'Forearms', category: 'pull' };
  if (m === 'lats') return { primary: 'Lats', category: 'pull' };
  if (m === 'middle back') return { primary: 'Upper back', category: 'pull' };
  if (m === 'lower back') return { primary: 'Lower back', category: 'pull' };
  if (m === 'traps') return { primary: 'Upper traps', category: 'pull' };
  if (m === 'quadriceps') return { primary: 'Quadriceps', category: 'legs' };
  if (m === 'hamstrings') return { primary: 'Hamstrings', category: 'legs' };
  if (m === 'glutes') return { primary: 'Glutes', category: 'legs' };
  if (m === 'calves') return { primary: 'Calves', category: 'legs' };
  if (m === 'adductors') return { primary: 'Adductors', category: 'legs' };
  if (m === 'abductors') return { primary: 'Glutes', category: 'legs' };
  if (m === 'abdominals') {
    if (n.includes('oblique') || n.includes('twist') || n.includes('side')) return { primary: 'Obliques', category: 'core' };
    return { primary: 'Abs', category: 'core' };
  }
  if (m === 'neck') return { primary: 'Upper traps', category: 'pull' };

  return { primary: 'Core', category: 'core' };
}

// Select 105 high-quality, distinct bodyweight & calisthenics exercises
const candidates = [];
const seenCleanNames = new Set();

for (const c of catalog) {
  if (!c.images || c.images.length < 2) continue;
  const name = c.name.trim();
  const lower = name.toLowerCase();

  // Exclude strongman / equipment heavy items
  if (lower.includes('stone') || lower.includes('tire') || lower.includes('sled') || lower.includes('wheel') || lower.includes('chain') || lower.includes('axle') || lower.includes('keg') || lower.includes('car deadlift') || lower.includes('battling') || lower.includes('smr')) continue;

  const eq = (c.equipment || '').toLowerCase();
  const isBw = eq === 'body only' || eq === '' || (eq === 'other' && !c.category?.includes('strongman'));
  if (!isBw) continue;

  if (existingNames.has(lower)) continue;

  // Normalize clean name to avoid trivial duplicates
  const cleanKey = lower.replace(/[^a-z0-9]/g, '');
  if (seenCleanNames.has(cleanKey)) continue;
  seenCleanNames.add(cleanKey);

  candidates.push(c);
  if (candidates.length >= 105) break;
}

console.log('Selected candidates count:', candidates.length);
console.log('Candidates list:');
candidates.forEach((c, i) => console.log(`${i + 1}. ${c.name} (${c.primaryMuscles?.[0]})`));

fs.writeFileSync('scripts/selected-bw-candidates.json', JSON.stringify(candidates, null, 2));
