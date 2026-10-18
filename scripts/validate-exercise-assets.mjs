import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function validate() {
  console.log('--- IronTrack Exercise Assets Validator ---');
  
  // 1. Read registry
  const visualsFile = path.join(process.cwd(), 'src', 'data', 'exerciseVisuals.ts');
  if (!fs.existsSync(visualsFile)) {
    console.error('FAIL: Missing exerciseVisuals.ts');
    process.exit(1);
  }

  const fileContent = fs.readFileSync(visualsFile, 'utf8');
  const match = fileContent.match(/export const BUNDLED_VISUALS:\s*Record<string,\s*VisualAssetRecord>\s*=\s*({[\s\S]*?})\n\nexport/);
  if (!match) {
    console.error('FAIL: Unable to parse BUNDLED_VISUALS from src/data/exerciseVisuals.ts');
    process.exit(1);
  }

  const manifest = JSON.parse(match[1]);
  const slugs = Object.keys(manifest);
  console.log(`Checking ${slugs.length} registered exercise slugs...`);

  let totalAssetsExpected = 0;
  let totalAssetsValid = 0;
  let errors = [];

  const publicRoot = path.join(process.cwd(), 'public', 'exercises');

  for (const slug of slugs) {
    const record = manifest[slug];
    const folder = path.join(publicRoot, slug);

    if (!fs.existsSync(folder)) {
      errors.push(`Directory missing for slug: ${slug}`);
      continue;
    }

    for (const kind of record.available) {
      totalAssetsExpected++;
      const filename = kind === 'thumbnail' ? 'thumbnail.webp'
        : kind === 'anatomy' ? 'anatomy.webp'
        : kind === 'start' ? 'start.webp'
        : kind === 'finish' ? 'finish.webp'
        : 'animation.webm';

      const filePath = path.join(folder, filename);
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing file: ${filePath}`);
        continue;
      }

      const stat = fs.statSync(filePath);
      if (stat.size === 0) {
        errors.push(`Empty file (0 bytes): ${filePath}`);
        continue;
      }

      // Format validation with sharp
      try {
        const metadata = await sharp(filePath).metadata();
        if (metadata.format !== 'webp') {
          errors.push(`Invalid format (expected webp, got ${metadata.format}): ${filePath}`);
          continue;
        }
        totalAssetsValid++;
      } catch (err) {
        errors.push(`Corrupt image file: ${filePath} (${err.message})`);
      }
    }
  }

  console.log('\n--- Validation Results ---');
  console.log(`Total Slugs Checked: ${slugs.length}`);
  console.log(`Total Assets Checked: ${totalAssetsExpected}`);
  console.log(`Valid Assets: ${totalAssetsValid}`);
  console.log(`Errors Found: ${errors.length}`);

  if (errors.length > 0) {
    console.error('\nErrors:');
    errors.forEach(e => console.error(' ✗ ' + e));
    process.exit(1);
  }

  console.log('\n✓ ALL REFERENCED EXERCISE ASSETS EXIST, ARE NON-EMPTY, AND ARE VALID WEBP IMAGES!\n');
}

validate().catch(err => {
  console.error(err);
  process.exit(1);
});
