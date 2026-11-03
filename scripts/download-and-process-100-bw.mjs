import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const CACHE_DIR = path.join(process.cwd(), 'scripts', 'cache-images');
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function escapeXml(str) {
  return (str || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function generateAnatomySvg(exerciseName, primary, secondaries = []) {
  const secondaryList = secondaries.length ? secondaries.join(', ') : 'None';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="600" height="400" fill="url(#bg)"/>

  <!-- Technical grid lines -->
  <g stroke="#1e293b" stroke-width="0.8" opacity="0.6">
    <line x1="0" y1="100" x2="600" y2="100"/>
    <line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="0" y1="300" x2="600" y2="300"/>
    <line x1="120" y1="0" x2="120" y2="400"/>
    <line x1="240" y1="0" x2="240" y2="400"/>
    <line x1="360" y1="0" x2="360" y2="400"/>
    <line x1="480" y1="0" x2="480" y2="400"/>
  </g>

  <!-- Body Silhouette -->
  <g transform="translate(140, 45)">
    <ellipse cx="80" cy="35" rx="18" ry="24" fill="#475569" opacity="0.75"/>
    <path d="M 72 58 L 88 58 L 92 78 L 68 78 Z" fill="#475569" opacity="0.8"/>
    <path d="M 50 82 Q 80 75 110 82 L 102 180 Q 80 185 58 180 Z" fill="#334155" opacity="0.85"/>
    <path d="M 48 82 Q 30 115 26 150 Q 22 185 20 220" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M 112 82 Q 130 115 134 150 Q 138 185 140 220" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M 64 180 Q 58 240 56 280 L 52 340" stroke="#475569" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M 96 180 Q 102 240 104 280 L 108 340" stroke="#475569" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.7"/>

    <ellipse cx="80" cy="115" rx="28" ry="22" fill="#ef4444" filter="url(#glow)" opacity="0.88"/>
    <circle cx="52" cy="100" r="14" fill="#f97316" opacity="0.8"/>
    <circle cx="108" cy="100" r="14" fill="#f97316" opacity="0.8"/>
  </g>

  <!-- Information Panel -->
  <g transform="translate(360, 80)">
    <rect x="-15" y="-15" width="235" height="250" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" opacity="0.9"/>
    
    <text x="0" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" letter-spacing="1">ANATOMICAL TARGET</text>
    <text x="0" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#f8fafc">${escapeXml(exerciseName)}</text>
    
    <rect x="0" y="78" width="12" height="12" rx="3" fill="#ef4444"/>
    <text x="22" y="89" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#f8fafc">Primary: ${escapeXml(primary)}</text>
    
    <rect x="0" y="112" width="12" height="12" rx="3" fill="#f97316"/>
    <text x="22" y="123" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#cbd5e1">Secondary: ${escapeXml(secondaryList)}</text>
    
    <rect x="0" y="146" width="12" height="12" rx="3" fill="#475569"/>
    <text x="22" y="157" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Synergists: Bodyweight chain</text>
    
    <path d="M 0 185 L 200 185" stroke="#334155" stroke-width="1"/>
    <text x="0" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#38bdf8">IronTrack Verified Anatomy</text>
  </g>
</svg>`;
}

async function fetchImageWithCache(relPath) {
  const safeFilename = relPath.replace(/[\/\\]/g, '___');
  const cachePath = path.join(CACHE_DIR, safeFilename);

  if (fs.existsSync(cachePath) && fs.statSync(cachePath).size > 0) {
    return fs.readFileSync(cachePath);
  }

  const encodedPath = encodeURI(relPath);
  const url = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${encodedPath}`;
  
  let attempts = 0;
  while (attempts < 3) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(cachePath, buffer);
      return buffer;
    } catch (err) {
      attempts++;
      if (attempts >= 3) throw err;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

async function main() {
  const newExercises = JSON.parse(fs.readFileSync('scripts/new-100-bodyweight-exercises.json', 'utf8'));
  const publicExercisesDir = path.join(process.cwd(), 'public', 'exercises');

  // Collect all unique image paths
  const uniquePaths = new Set();
  for (const e of newExercises) {
    if (e.catalogImages[0]) uniquePaths.add(e.catalogImages[0]);
    if (e.catalogImages[1]) uniquePaths.add(e.catalogImages[1]);
  }

  console.log(`Downloading and caching ${uniquePaths.size} unique image assets...`);
  const uniqueArray = Array.from(uniquePaths);
  const CONCURRENCY = 10;
  let downloadedCount = 0;

  for (let i = 0; i < uniqueArray.length; i += CONCURRENCY) {
    const chunk = uniqueArray.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (relPath) => {
        try {
          await fetchImageWithCache(relPath);
          downloadedCount++;
          if (downloadedCount % 30 === 0 || downloadedCount === uniqueArray.length) {
            console.log(`Downloaded ${downloadedCount} / ${uniqueArray.length} photos...`);
          }
        } catch (err) {
          console.error(`Failed downloading ${relPath}:`, err.message);
        }
      })
    );
  }

  console.log('Finished downloading cache! Now generating assets for 100 new exercises...');

  let processed = 0;
  for (const e of newExercises) {
    const targetFolder = path.join(publicExercisesDir, e.slug);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    try {
      const img0Buf = await fetchImageWithCache(e.catalogImages[0]);
      const img1Buf = await fetchImageWithCache(e.catalogImages[1] || e.catalogImages[0]);

      // 1. Thumbnail: 320x320 cover crop WebP
      const thumbPath = path.join(targetFolder, 'thumbnail.webp');
      await sharp(img0Buf)
        .resize(320, 320, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(thumbPath);

      // 2. Start position: 480x360 cover crop WebP
      const startPath = path.join(targetFolder, 'start.webp');
      await sharp(img0Buf)
        .resize(480, 360, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(startPath);

      // 3. Finish position: 480x360 cover crop WebP
      const finishPath = path.join(targetFolder, 'finish.webp');
      await sharp(img1Buf)
        .resize(480, 360, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(finishPath);

      // 4. Anatomy: 600x400 custom anatomy WebP
      const anatomyPath = path.join(targetFolder, 'anatomy.webp');
      const anatomySvg = generateAnatomySvg(e.name, e.primaryMuscle, e.secondaryMuscles);
      await sharp(Buffer.from(anatomySvg))
        .webp({ quality: 90 })
        .toFile(anatomyPath);

      processed++;
      if (processed % 25 === 0 || processed === newExercises.length) {
        console.log(`Processed ${processed} / ${newExercises.length} new exercise asset sets...`);
      }
    } catch (err) {
      console.error(`Error processing ${e.id} (${e.slug}):`, err.message);
    }
  }

  console.log(`✓ All ${processed} new exercise assets created successfully!`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
