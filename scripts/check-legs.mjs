import fs from 'fs';
const content = fs.readFileSync('src/data/exerciseDatabase.ts', 'utf8');
const match = content.match(/COMPREHENSIVE_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]+?\]);\s*\nexport/);
const ex = JSON.parse(match[1]);

const inLegs = ex.filter(e => e.category === 'legs');
console.log('In legs category count:', inLegs.length);
const notLegsMuscles = inLegs.filter(e => !['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Adductors', 'Soleus', 'Tibialis anterior', 'Hip flexors', 'Hips'].includes(e.primaryMuscle));
console.log('Non-leg muscles in legs category:', notLegsMuscles);

const lowerBodyMuscles = ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Adductors', 'Soleus', 'Tibialis anterior', 'Hip flexors', 'Hips', 'Tensor fasciae latae'];
const allLowerBody = ex.filter(e => lowerBodyMuscles.includes(e.primaryMuscle));
console.log('Total lower body exercises in database:', allLowerBody.length);
console.log('Categories of all lower body exercises:');
const catMap = {};
for (const e of allLowerBody) {
  catMap[e.category] = (catMap[e.category] || 0) + 1;
}
console.log(catMap);
