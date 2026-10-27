/**
 * IronTrack Visual Asset Generator
 * Generates accurate, high-quality, lightweight WebP reference images for all exercises:
 * - thumbnail.webp (320x320)
 * - start.webp (480x360)
 * - finish.webp (480x360)
 * - anatomy.webp (600x400)
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Equipment silhouette icon paths
function getEquipmentSvg(equipment) {
  const eq = (equipment || '').toLowerCase();
  if (eq.includes('barbell') || eq.includes('trap bar') || eq.includes('smith')) {
    return `
      <!-- Barbell -->
      <line x1="40" y1="200" x2="440" y2="200" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
      <rect x="70" y="150" width="16" height="100" rx="4" fill="#38bdf8"/>
      <rect x="92" y="160" width="12" height="80" rx="3" fill="#0284c7"/>
      <rect x="372" y="160" width="12" height="80" rx="3" fill="#0284c7"/>
      <rect x="394" y="150" width="16" height="100" rx="4" fill="#38bdf8"/>
    `;
  }
  if (eq.includes('dumbbell')) {
    return `
      <!-- Dumbbell -->
      <rect x="180" y="194" width="120" height="12" rx="4" fill="#94a3b8"/>
      <rect x="150" y="165" width="24" height="70" rx="6" fill="#38bdf8"/>
      <rect x="130" y="175" width="16" height="50" rx="4" fill="#0284c7"/>
      <rect x="306" y="165" width="24" height="70" rx="6" fill="#38bdf8"/>
      <rect x="334" y="175" width="16" height="50" rx="4" fill="#0284c7"/>
    `;
  }
  if (eq.includes('kettlebell')) {
    return `
      <!-- Kettlebell -->
      <path d="M 200 190 C 200 140 280 140 280 190" fill="none" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
      <circle cx="240" cy="225" r="45" fill="#38bdf8"/>
      <circle cx="240" cy="225" r="38" fill="#0284c7" opacity="0.5"/>
    `;
  }
  if (eq.includes('cable') || eq.includes('machine')) {
    return `
      <!-- Cable / Pulley Rig -->
      <line x1="240" y1="80" x2="240" y2="240" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4"/>
      <circle cx="240" cy="80" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
      <rect x="220" y="240" width="40" height="12" rx="4" fill="#94a3b8"/>
    `;
  }
  if (eq.includes('band')) {
    return `
      <!-- Resistance Band Loop -->
      <ellipse cx="240" cy="200" rx="90" ry="35" fill="none" stroke="#f43f5e" stroke-width="8" stroke-dasharray="8,2" opacity="0.85"/>
    `;
  }
  if (eq.includes('pull-up') || eq.includes('rings') || eq.includes('parallel')) {
    return `
      <!-- Rig Bar -->
      <line x1="80" y1="90" x2="400" y2="90" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
      <line x1="120" y1="90" x2="120" y2="40" stroke="#64748b" stroke-width="6"/>
      <line x1="360" y1="90" x2="360" y2="40" stroke="#64748b" stroke-width="6"/>
    `;
  }
  // Generic bodyweight ground line / mat
  return `
    <!-- Floor Marker -->
    <line x1="60" y1="280" x2="420" y2="280" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  `;
}

// Anatomical coordinates for highlight overlays based on muscle groups
function getMuscleHighlightCoordinates(muscle) {
  const m = (muscle || '').toLowerCase();
  if (m.includes('chest') || m.includes('pec')) {
    return { front: [{ cx: 80, cy: 112, rx: 26, ry: 16 }], back: [] };
  }
  if (m.includes('upper chest')) {
    return { front: [{ cx: 80, cy: 98, rx: 22, ry: 12 }], back: [] };
  }
  if (m.includes('lower chest')) {
    return { front: [{ cx: 80, cy: 124, rx: 24, ry: 12 }], back: [] };
  }
  if (m.includes('lat') || m.includes('back')) {
    return { front: [{ cx: 58, cy: 128, rx: 12, ry: 24 }, { cx: 102, cy: 128, rx: 12, ry: 24 }], back: [{ cx: 80, cy: 128, rx: 28, ry: 30 }] };
  }
  if (m.includes('trap')) {
    return { front: [{ cx: 80, cy: 78, rx: 20, ry: 10 }], back: [{ cx: 80, cy: 82, rx: 24, ry: 18 }] };
  }
  if (m.includes('delt') || m.includes('shoulder')) {
    if (m.includes('rear')) {
      return { front: [], back: [{ cx: 48, cy: 90, rx: 12, ry: 14 }, { cx: 112, cy: 90, rx: 12, ry: 14 }] };
    }
    return { front: [{ cx: 46, cy: 90, rx: 12, ry: 14 }, { cx: 114, cy: 90, rx: 12, ry: 14 }], back: [{ cx: 48, cy: 90, rx: 12, ry: 14 }, { cx: 112, cy: 90, rx: 12, ry: 14 }] };
  }
  if (m.includes('bicep') || m.includes('brach')) {
    return { front: [{ cx: 34, cy: 126, rx: 10, ry: 18 }, { cx: 126, cy: 126, rx: 10, ry: 18 }], back: [] };
  }
  if (m.includes('tricep')) {
    return { front: [], back: [{ cx: 34, cy: 124, rx: 10, ry: 20 }, { cx: 126, cy: 124, rx: 10, ry: 20 }] };
  }
  if (m.includes('forearm')) {
    return { front: [{ cx: 24, cy: 172, rx: 8, ry: 22 }, { cx: 136, cy: 172, rx: 8, ry: 22 }], back: [{ cx: 24, cy: 172, rx: 8, ry: 22 }, { cx: 136, cy: 172, rx: 8, ry: 22 }] };
  }
  if (m.includes('abs') || m.includes('core')) {
    return { front: [{ cx: 80, cy: 148, rx: 18, ry: 26 }], back: [] };
  }
  if (m.includes('oblique')) {
    return { front: [{ cx: 62, cy: 152, rx: 10, ry: 20 }, { cx: 98, cy: 152, rx: 10, ry: 20 }], back: [] };
  }
  if (m.includes('glute') || m.includes('hip')) {
    return { front: [{ cx: 80, cy: 186, rx: 26, ry: 16 }], back: [{ cx: 80, cy: 190, rx: 28, ry: 20 }] };
  }
  if (m.includes('quad') || m.includes('adductor')) {
    return { front: [{ cx: 66, cy: 236, rx: 14, ry: 32 }, { cx: 94, cy: 236, rx: 14, ry: 32 }], back: [] };
  }
  if (m.includes('hamstring')) {
    return { front: [], back: [{ cx: 66, cy: 240, rx: 14, ry: 32 }, { cx: 94, cy: 240, rx: 14, ry: 32 }] };
  }
  if (m.includes('calf') || m.includes('soleus') || m.includes('gastrocnemius')) {
    return { front: [{ cx: 64, cy: 305, rx: 10, ry: 24 }, { cx: 96, cy: 305, rx: 10, ry: 24 }], back: [{ cx: 64, cy: 305, rx: 12, ry: 26 }, { cx: 96, cy: 305, rx: 12, ry: 26 }] };
  }
  // Default Torso / General
  return { front: [{ cx: 80, cy: 130, rx: 26, ry: 26 }], back: [{ cx: 80, cy: 130, rx: 26, ry: 26 }] };
}

// Generate the 600x400 Anatomy WebP
export function generateAnatomySvg(exercise) {
  const name = exercise.name;
  const primary = exercise.primaryMuscle || 'Target Muscle';
  const secondaries = exercise.secondaryMuscles || [];
  const secondaryList = secondaries.length ? secondaries.join(', ') : 'Kinetic chain stabilizers';
  const primHl = getMuscleHighlightCoordinates(primary);
  
  // Combine secondary highlights
  const secFront = [];
  const secBack = [];
  for (const s of secondaries.slice(0, 2)) {
    const hl = getMuscleHighlightCoordinates(s);
    secFront.push(...hl.front);
    secBack.push(...hl.back);
  }

  const primFrontSvg = primHl.front.map(c => `<ellipse cx="${c.cx}" cy="${c.cy}" rx="${c.rx}" ry="${c.ry}" fill="#ef4444" filter="url(#glow)" opacity="0.9"/>`).join('\n');
  const primBackSvg = primHl.back.map(c => `<ellipse cx="${c.cx}" cy="${c.cy}" rx="${c.rx}" ry="${c.ry}" fill="#ef4444" filter="url(#glow)" opacity="0.9"/>`).join('\n');

  const secFrontSvg = secFront.map(c => `<ellipse cx="${c.cx}" cy="${c.cy}" rx="${Math.max(6, c.rx - 4)}" ry="${Math.max(6, c.ry - 4)}" fill="#f97316" opacity="0.75"/>`).join('\n');
  const secBackSvg = secBack.map(c => `<ellipse cx="${c.cx}" cy="${c.cy}" rx="${Math.max(6, c.rx - 4)}" ry="${Math.max(6, c.ry - 4)}" fill="#f97316" opacity="0.75"/>`).join('\n');

  return `<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Technical Grid Background -->
  <g stroke="#1f2937" stroke-width="0.75" opacity="0.6">
    <line x1="0" y1="80" x2="600" y2="80"/>
    <line x1="0" y1="160" x2="600" y2="160"/>
    <line x1="0" y1="240" x2="600" y2="240"/>
    <line x1="0" y1="320" x2="600" y2="320"/>
    <line x1="100" y1="0" x2="100" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
    <line x1="400" y1="0" x2="400" y2="400"/>
    <line x1="500" y1="0" x2="500" y2="400"/>
  </g>

  <!-- Dual Figures: Anterior (Left) and Posterior (Right) -->
  <!-- 1. Anterior Silhouette (translate 30, 30) -->
  <g transform="translate(30, 25)">
    <text x="80" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle" letter-spacing="1">ANTERIOR</text>
    <!-- Head & Neck -->
    <ellipse cx="80" cy="46" rx="14" ry="18" fill="#334155"/>
    <path d="M 74 64 L 86 64 L 88 78 L 72 78 Z" fill="#334155"/>
    <!-- Clavicle & Torso -->
    <path d="M 52 80 Q 80 75 108 80 L 98 175 Q 80 180 62 175 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <!-- Arms -->
    <path d="M 50 82 Q 32 120 28 150 Q 24 180 20 215" stroke="#334155" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 110 82 Q 128 120 132 150 Q 136 180 140 215" stroke="#334155" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Pelvis & Legs -->
    <path d="M 64 176 Q 60 235 58 275 L 56 335" stroke="#334155" stroke-width="15" stroke-linecap="round" fill="none"/>
    <path d="M 96 176 Q 100 235 102 275 L 104 335" stroke="#334155" stroke-width="15" stroke-linecap="round" fill="none"/>
    
    <!-- Secondary Overlay Anterior -->
    ${secFrontSvg}
    <!-- Primary Overlay Anterior -->
    ${primFrontSvg}
  </g>

  <!-- 2. Posterior Silhouette (translate 190, 25) -->
  <g transform="translate(180, 25)">
    <text x="80" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle" letter-spacing="1">POSTERIOR</text>
    <!-- Head & Neck -->
    <ellipse cx="80" cy="46" rx="14" ry="18" fill="#334155"/>
    <path d="M 74 64 L 86 64 L 88 78 L 72 78 Z" fill="#334155"/>
    <!-- Upper Back & Spine Column -->
    <path d="M 52 80 Q 80 75 108 80 L 98 175 Q 80 180 62 175 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <line x1="80" y1="80" x2="80" y2="175" stroke="#0f172a" stroke-width="2"/>
    <!-- Arms -->
    <path d="M 50 82 Q 32 120 28 150 Q 24 180 20 215" stroke="#334155" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 110 82 Q 128 120 132 150 Q 136 180 140 215" stroke="#334155" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Glutes & Hamstrings -->
    <path d="M 64 176 Q 60 235 58 275 L 56 335" stroke="#334155" stroke-width="15" stroke-linecap="round" fill="none"/>
    <path d="M 96 176 Q 100 235 102 275 L 104 335" stroke="#334155" stroke-width="15" stroke-linecap="round" fill="none"/>
    
    <!-- Secondary Overlay Posterior -->
    ${secBackSvg}
    <!-- Primary Overlay Posterior -->
    ${primBackSvg}
  </g>

  <!-- Right Descriptive Anatomy Dashboard -->
  <g transform="translate(345, 45)">
    <rect x="0" y="0" width="235" height="320" rx="16" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
    
    <text x="20" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#38bdf8" letter-spacing="1">ANATOMICAL PROFILE</text>
    <text x="20" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#f8fafc">${escapeXml(name.slice(0, 28))}${name.length > 28 ? '…' : ''}</text>
    
    <!-- Category & Equipment Pill -->
    <rect x="20" y="72" width="70" height="20" rx="6" fill="#1e293b"/>
    <text x="55" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">${escapeXml(exercise.category?.toUpperCase() || 'GENERAL')}</text>
    <rect x="96" y="72" width="118" height="20" rx="6" fill="#1e293b"/>
    <text x="155" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#cbd5e1" text-anchor="middle">${escapeXml(exercise.equipment?.slice(0, 16) || 'Bodyweight')}</text>

    <line x1="20" y1="108" x2="215" y2="108" stroke="#1f2937" stroke-width="1"/>

    <!-- Primary Muscle Legend -->
    <circle cx="28" cy="130" r="7" fill="#ef4444"/>
    <text x="44" y="134" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f8fafc">Primary</text>
    <text x="44" y="152" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ef4444">${escapeXml(primary)}</text>

    <!-- Secondary Muscle Legend -->
    <circle cx="28" cy="186" r="7" fill="#f97316"/>
    <text x="44" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f8fafc">Secondary</text>
    <text x="44" y="208" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#cbd5e1">${escapeXml(secondaryList.slice(0, 32))}${secondaryList.length > 32 ? '…' : ''}</text>

    <!-- Movement Mechanics -->
    <circle cx="28" cy="242" r="7" fill="#3b82f6"/>
    <text x="44" y="246" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f8fafc">Mechanics</text>
    <text x="44" y="264" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">${escapeXml(exercise.movementPattern?.slice(0, 30) || exercise.exerciseClass || 'Standard compound')}</text>

    <line x1="20" y1="284" x2="215" y2="284" stroke="#1f2937" stroke-width="1"/>
    <text x="20" y="304" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#38bdf8">IronTrack Visual Science System</text>
  </g>
</svg>`;
}

// Biomechanical Pose Renderers (Start & Finish position diagrams)
// 480x360
export function generatePoseSvg(exercise, phase) {
  const isStart = phase === 'start';
  const name = exercise.name;
  const category = (exercise.category || '').toLowerCase();
  const pattern = (exercise.movementPattern || '').toLowerCase();
  const equipment = exercise.equipment || 'Bodyweight';
  const equipmentSvg = getEquipmentSvg(equipment);

  // Determine pose archetype based on category, pattern & muscle
  let figureSvg = '';
  const accent = isStart ? '#38bdf8' : '#10b981';
  const phaseLabel = isStart ? 'START POSITION' : 'FINISH POSITION';
  const phaseSub = isStart ? 'Set alignment and setup posture' : 'Peak contraction and extension';

  if (category === 'push' || pattern.includes('press') || pattern.includes('push')) {
    if (pattern.includes('overhead') || pattern.includes('vertical')) {
      // Overhead Press Pose
      if (isStart) {
        figureSvg = `
          <!-- Torso upright -->
          <ellipse cx="240" cy="110" rx="16" ry="20" fill="#64748b"/>
          <path d="M 218 140 L 262 140 L 254 220 L 226 220 Z" fill="#334155" stroke="#475569" stroke-width="2"/>
          <!-- Arms at clavicle (racked) -->
          <path d="M 220 145 L 195 175 L 210 160" stroke="#94a3b8" stroke-width="12" stroke-linecap="round" fill="none"/>
          <path d="M 260 145 L 285 175 L 270 160" stroke="#94a3b8" stroke-width="12" stroke-linecap="round" fill="none"/>
          <!-- Bar / Implements at chin -->
          <rect x="180" y="152" width="120" height="10" rx="4" fill="${accent}"/>
          <!-- Legs straight -->
          <line x1="230" y1="220" x2="225" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
          <line x1="250" y1="220" x2="255" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
        `;
      } else {
        figureSvg = `
          <!-- Torso upright -->
          <ellipse cx="240" cy="110" rx="16" ry="20" fill="#64748b"/>
          <path d="M 218 140 L 262 140 L 254 220 L 226 220 Z" fill="#334155" stroke="#475569" stroke-width="2"/>
          <!-- Arms extended overhead -->
          <path d="M 220 140 L 210 95 L 225 55" stroke="#94a3b8" stroke-width="12" stroke-linecap="round" fill="none"/>
          <path d="M 260 140 L 270 95 L 255 55" stroke="#94a3b8" stroke-width="12" stroke-linecap="round" fill="none"/>
          <!-- Bar / Implements locked out overhead -->
          <rect x="170" y="45" width="140" height="10" rx="4" fill="${accent}"/>
          <!-- Legs straight -->
          <line x1="230" y1="220" x2="225" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
          <line x1="250" y1="220" x2="255" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
        `;
      }
    } else {
      // Horizontal Bench Press / Push-up archetype
      if (isStart) {
        figureSvg = `
          <!-- Bench platform -->
          <rect x="140" y="215" width="200" height="14" rx="3" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
          <line x1="160" y1="229" x2="160" y2="290" stroke="#334155" stroke-width="6"/>
          <line x1="320" y1="229" x2="320" y2="290" stroke="#334155" stroke-width="6"/>
          <!-- Supine Torso & Head -->
          <ellipse cx="160" cy="205" rx="14" ry="12" fill="#64748b"/>
          <rect x="175" y="196" width="110" height="20" rx="6" fill="#334155"/>
          <!-- Legs planted -->
          <path d="M 285 206 L 310 220 L 320 280" stroke="#475569" stroke-width="12" stroke-linecap="round" fill="none"/>
          <!-- Arms extended (holding weight up) -->
          <line x1="215" y1="196" x2="215" y2="120" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
          <line x1="245" y1="196" x2="245" y2="120" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
          <!-- Bar / Weight at top -->
          <rect x="160" y="112" width="140" height="10" rx="4" fill="${accent}"/>
        `;
      } else {
        figureSvg = `
          <!-- Bench platform -->
          <rect x="140" y="215" width="200" height="14" rx="3" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
          <line x1="160" y1="229" x2="160" y2="290" stroke="#334155" stroke-width="6"/>
          <line x1="320" y1="229" x2="320" y2="290" stroke="#334155" stroke-width="6"/>
          <!-- Supine Torso & Head -->
          <ellipse cx="160" cy="205" rx="14" ry="12" fill="#64748b"/>
          <rect x="175" y="196" width="110" height="20" rx="6" fill="#334155"/>
          <!-- Legs planted -->
          <path d="M 285 206 L 310 220 L 320 280" stroke="#475569" stroke-width="12" stroke-linecap="round" fill="none"/>
          <!-- Arms flared at chest bottom -->
          <path d="M 215 196 L 200 230 L 220 185" stroke="#94a3b8" stroke-width="10" stroke-linecap="round" fill="none"/>
          <path d="M 245 196 L 260 230 L 240 185" stroke="#94a3b8" stroke-width="10" stroke-linecap="round" fill="none"/>
          <!-- Bar / Weight touching chest -->
          <rect x="160" y="180" width="140" height="10" rx="4" fill="${accent}"/>
        `;
      }
    }
  } else if (category === 'pull' || pattern.includes('pull') || pattern.includes('row')) {
    if (pattern.includes('vertical') || exercise.name.toLowerCase().includes('pulldown') || exercise.name.toLowerCase().includes('pull-up')) {
      // Vertical Pull Archetype
      if (isStart) {
        figureSvg = `
          <!-- Arms reaching up to bar -->
          <ellipse cx="240" cy="150" rx="15" ry="18" fill="#64748b"/>
          <path d="M 222 175 L 258 175 L 252 245 L 228 245 Z" fill="#334155"/>
          <path d="M 224 175 L 205 125 L 215 75" stroke="#94a3b8" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M 256 175 L 275 125 L 265 75" stroke="#94a3b8" stroke-width="11" stroke-linecap="round" fill="none"/>
          <!-- Pull-up / Pulldown Bar -->
          <line x1="160" y1="72" x2="320" y2="72" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
          <!-- Lower body -->
          <line x1="232" y1="245" x2="230" y2="320" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <line x1="248" y1="245" x2="250" y2="320" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
        `;
      } else {
        figureSvg = `
          <!-- Body pulled up / bar to upper chest -->
          <ellipse cx="240" cy="100" rx="15" ry="18" fill="#64748b"/>
          <path d="M 220 125 L 260 125 L 252 200 L 228 200 Z" fill="#334155"/>
          <path d="M 220 125 L 205 130 L 220 75" stroke="#94a3b8" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M 260 125 L 275 130 L 260 75" stroke="#94a3b8" stroke-width="11" stroke-linecap="round" fill="none"/>
          <!-- Bar pulled close to chest -->
          <line x1="160" y1="72" x2="320" y2="72" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
          <!-- Lower body -->
          <line x1="232" y1="200" x2="230" y2="280" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <line x1="248" y1="200" x2="250" y2="280" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
        `;
      }
    } else {
      // Horizontal Row / Bent-over pull
      if (isStart) {
        figureSvg = `
          <!-- Bent torso at 45 deg -->
          <ellipse cx="190" cy="140" rx="14" ry="16" fill="#64748b"/>
          <path d="M 200 150 L 270 190 L 255 220 L 195 175 Z" fill="#334155"/>
          <!-- Arms hanging down -->
          <line x1="220" y1="165" x2="215" y2="250" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
          <line x1="235" y1="172" x2="230" y2="250" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
          <!-- Weight at bottom -->
          <rect x="180" y="246" width="70" height="12" rx="4" fill="${accent}"/>
          <!-- Bent knees -->
          <path d="M 265 205 L 280 250 L 280 310" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        `;
      } else {
        figureSvg = `
          <!-- Bent torso with elbows driven back -->
          <ellipse cx="190" cy="140" rx="14" ry="16" fill="#64748b"/>
          <path d="M 200 150 L 270 190 L 255 220 L 195 175 Z" fill="#334155"/>
          <!-- Elbows tucked up into ribs -->
          <path d="M 220 165 L 245 150 L 230 190" stroke="#94a3b8" stroke-width="11" stroke-linecap="round" fill="none"/>
          <!-- Weight retracted to abdomen -->
          <rect x="210" y="184" width="70" height="12" rx="4" fill="${accent}"/>
          <!-- Bent knees -->
          <path d="M 265 205 L 280 250 L 280 310" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        `;
      }
    }
  } else if (category === 'legs' || pattern.includes('squat') || pattern.includes('hinge') || pattern.includes('lunge')) {
    if (pattern.includes('squat') || pattern.includes('lunge')) {
      // Squat Archetype
      if (isStart) {
        figureSvg = `
          <!-- Standing upright -->
          <ellipse cx="240" cy="90" rx="15" ry="18" fill="#64748b"/>
          <path d="M 220 115 L 260 115 L 252 195 L 228 195 Z" fill="#334155"/>
          <!-- Barbell on traps -->
          <rect x="160" y="108" width="160" height="8" rx="3" fill="${accent}"/>
          <!-- Legs straight -->
          <line x1="232" y1="195" x2="228" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
          <line x1="248" y1="195" x2="252" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
        `;
      } else {
        figureSvg = `
          <!-- Squat bottom: knees bent, hips deep -->
          <ellipse cx="240" cy="150" rx="15" ry="18" fill="#64748b"/>
          <path d="M 220 172 L 260 172 L 250 235 L 230 235 Z" fill="#334155"/>
          <!-- Barbell lowered with torso -->
          <rect x="160" y="165" width="160" height="8" rx="3" fill="${accent}"/>
          <!-- Deep knee flexion (thighs parallel) -->
          <path d="M 230 230 L 195 240 L 220 310" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M 250 230 L 285 240 L 260 310" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        `;
      }
    } else {
      // Deadlift / Hinge
      if (isStart) {
        figureSvg = `
          <!-- Hinge setup over bar -->
          <ellipse cx="190" cy="140" rx="14" ry="16" fill="#64748b"/>
          <path d="M 200 150 L 270 195 L 255 225 L 195 175 Z" fill="#334155"/>
          <!-- Arms reaching down to barbell -->
          <line x1="220" y1="165" x2="225" y2="280" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
          <rect x="150" y="278" width="180" height="10" rx="4" fill="${accent}"/>
          <!-- Hips pushed back -->
          <path d="M 265 210 L 285 250 L 265 315" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        `;
      } else {
        figureSvg = `
          <!-- Hinge Lockout: upright hips through -->
          <ellipse cx="240" cy="90" rx="15" ry="18" fill="#64748b"/>
          <path d="M 220 115 L 260 115 L 254 195 L 226 195 Z" fill="#334155"/>
          <!-- Arms extended down holding locked out weight -->
          <line x1="225" y1="125" x2="225" y2="215" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
          <line x1="255" y1="125" x2="255" y2="215" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
          <rect x="160" y="210" width="160" height="10" rx="4" fill="${accent}"/>
          <line x1="232" y1="195" x2="230" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
          <line x1="248" y1="195" x2="250" y2="310" stroke="#475569" stroke-width="15" stroke-linecap="round"/>
        `;
      }
    }
  } else if (category === 'core') {
    // Plank / Crunch archetype
    if (isStart) {
      figureSvg = `
        <!-- Horizontal prone position -->
        <ellipse cx="140" cy="220" rx="14" ry="14" fill="#64748b"/>
        <line x1="155" y1="225" x2="300" y2="245" stroke="#334155" stroke-width="18" stroke-linecap="round"/>
        <!-- Forearm / Hand support -->
        <line x1="165" y1="230" x2="165" y2="280" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
        <!-- Toes support -->
        <line x1="300" y1="245" x2="350" y2="280" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
        <!-- Floor line -->
        <line x1="100" y1="285" x2="380" y2="285" stroke="${accent}" stroke-width="3"/>
      `;
    } else {
      figureSvg = `
        <!-- Contracted Core Position -->
        <ellipse cx="140" cy="205" rx="14" ry="14" fill="#64748b"/>
        <path d="M 155 210 Q 220 190 290 235" stroke="#334155" stroke-width="18" stroke-linecap="round" fill="none"/>
        <!-- Active arm/forearm support -->
        <line x1="165" y1="215" x2="165" y2="280" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
        <line x1="290" y1="235" x2="340" y2="280" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
        <line x1="100" y1="285" x2="380" y2="285" stroke="${accent}" stroke-width="3"/>
      `;
    }
  } else {
    // Cardio / Mobility / General athlete pose
    if (isStart) {
      figureSvg = `
        <ellipse cx="240" cy="100" rx="15" ry="18" fill="#64748b"/>
        <path d="M 220 125 L 260 125 L 252 205 L 228 205 Z" fill="#334155"/>
        <path d="M 224 130 L 195 170" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
        <path d="M 256 130 L 285 170" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
        <path d="M 232 205 L 210 260 L 205 315" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M 248 205 L 270 260 L 275 315" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
      `;
    } else {
      figureSvg = `
        <ellipse cx="240" cy="95" rx="15" ry="18" fill="#64748b"/>
        <path d="M 220 120 L 260 120 L 252 200 L 228 200 Z" fill="#334155"/>
        <!-- Dynamic extension -->
        <path d="M 224 125 L 180 140" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
        <path d="M 256 125 L 300 140" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
        <path d="M 232 200 L 195 245 L 190 305" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M 248 200 L 285 245 L 290 305" stroke="#475569" stroke-width="14" stroke-linecap="round" fill="none"/>
      `;
    }
  }

  return `<svg width="480" height="360" viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Subtle Studio Grid -->
  <g stroke="#334155" stroke-width="0.5" opacity="0.4">
    <line x1="0" y1="72" x2="480" y2="72"/>
    <line x1="0" y1="144" x2="480" y2="144"/>
    <line x1="0" y1="216" x2="480" y2="216"/>
    <line x1="0" y1="288" x2="480" y2="288"/>
    <line x1="96" y1="0" x2="96" y2="360"/>
    <line x1="192" y1="0" x2="192" y2="360"/>
    <line x1="288" y1="0" x2="288" y2="360"/>
    <line x1="384" y1="0" x2="384" y2="360"/>
  </g>

  <!-- Ground Shadow / Platform -->
  <ellipse cx="240" cy="320" rx="140" ry="12" fill="#000000" opacity="0.35"/>

  <!-- Biomechanical Figure -->
  ${figureSvg}

  <!-- Header Card Badge -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="145" height="26" rx="8" fill="${isStart ? '#0369a1' : '#047857'}" opacity="0.9"/>
    <text x="12" y="17" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#ffffff" letter-spacing="1">${phaseLabel}</text>
  </g>

  <!-- Title Bottom Bar -->
  <g transform="translate(20, 310)">
    <rect x="-8" y="-18" width="456" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" opacity="0.95"/>
    <text x="8" y="4" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#f8fafc">${escapeXml(name.slice(0, 38))}${name.length > 38 ? '…' : ''}</text>
    <text x="8" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">${phaseSub} · ${escapeXml(equipment)}</text>
  </g>
</svg>`;
}

// 320x320 Compact Exercise Thumbnail
export function generateThumbnailSvg(exercise) {
  const name = exercise.name;
  const primary = exercise.primaryMuscle || 'Muscle';
  const category = (exercise.category || '').toLowerCase();
  const equipment = exercise.equipment || 'Exercise';

  // Distinct category badge color
  const catColor = category === 'push' ? '#ef4444'
    : category === 'pull' ? '#3b82f6'
    : category === 'legs' ? '#10b981'
    : category === 'core' ? '#f59e0b'
    : category === 'mobility' ? '#8b5cf6'
    : '#06b6d4'; // cardio

  return `<svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="accentGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Radial highlight center -->
  <circle cx="160" cy="140" r="90" fill="${catColor}" opacity="0.12" filter="url(#accentGlow)"/>

  <!-- Geometric Exercise Iconography -->
  <g transform="translate(160, 130)">
    <!-- Stylized Human Body Silhouette -->
    <ellipse cx="0" cy="-35" rx="14" ry="17" fill="#64748b"/>
    <path d="M -18 -12 L 18 -12 L 14 42 L -14 42 Z" fill="#334155"/>
    <line x1="-16" y1="-8" x2="-35" y2="25" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
    <line x1="16" y1="-8" x2="35" y2="25" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
    <line x1="-8" y1="42" x2="-14" y2="85" stroke="#475569" stroke-width="11" stroke-linecap="round"/>
    <line x1="8" y1="42" x2="14" y2="85" stroke="#475569" stroke-width="11" stroke-linecap="round"/>
    
    <!-- Primary Muscle Glow Point -->
    <circle cx="0" cy="10" r="14" fill="${catColor}" filter="url(#accentGlow)" opacity="0.85"/>
  </g>

  <!-- Category Pill Top Right -->
  <rect x="20" y="20" width="85" height="22" rx="6" fill="#111827" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="31" r="4" fill="${catColor}"/>
  <text x="44" y="35" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#f8fafc" letter-spacing="0.5">${escapeXml(category.toUpperCase())}</text>

  <!-- Bottom Information Plate -->
  <rect x="16" y="228" width="288" height="76" rx="14" fill="#0b1120" stroke="#1f2937" stroke-width="1.5"/>
  <text x="32" y="256" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">${escapeXml(name.slice(0, 24))}${name.length > 24 ? '…' : ''}</text>
  <text x="32" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="${catColor}">${escapeXml(primary)}</text>
  <text x="32" y="291" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">${escapeXml(equipment)}</text>
</svg>`;
}
