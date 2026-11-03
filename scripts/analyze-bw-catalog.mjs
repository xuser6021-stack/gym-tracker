import fs from 'fs';
const content = fs.readFileSync('src/data/exerciseDatabase.ts', 'utf8');
const match = content.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const ex = JSON.parse(match[1]);

const catalog = JSON.parse(fs.readFileSync('scripts/free-exercise-db-catalog.json', 'utf8'));
const existingNames = new Set(ex.map(e => e.name.toLowerCase()));
const existingIds = new Set(ex.map(e => e.id));

console.log('Existing DB count:', ex.length);

// Check bodyweight exercises in catalog
const bwCatalog = catalog.filter(c => {
  const eq = (c.equipment || '').toLowerCase();
  return (eq === 'body only' || eq === 'other') && c.images && c.images.length >= 2;
});

console.log('BW catalog items with >=2 images:', bwCatalog.length);

const unusedBwCatalog = bwCatalog.filter(c => !existingNames.has(c.name.toLowerCase()));
console.log('Unused BW catalog items:', unusedBwCatalog.length);
console.log('Sample unused BW:', unusedBwCatalog.slice(0, 25).map(c => ({ name: c.name, muscle: c.primaryMuscles?.[0], images: c.images })));
