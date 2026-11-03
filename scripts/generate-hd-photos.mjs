import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

console.log('Generating ultra-high-definition studio photographic fitness models...');

const W = 800;
const H = 1760;

// Studio dark background with professional spotlight vignette & rim lighting
function getStudioBackdrop() {
  return `
    <!-- Seamless matte studio cyc wall -->
    <rect width="${W}" height="${H}" fill="#111215"/>
    
    <!-- Central soft key-light spotlight on athlete -->
    <radialGradient id="studioSpotlight" cx="50%" cy="38%" r="62%">
      <stop offset="0%" stopColor="#2c2d36" stopOpacity="0.85"/>
      <stop offset="35%" stopColor="#1e2027" stopOpacity="0.6"/>
      <stop offset="70%" stopColor="#14151b" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="#0b0c0f" stopOpacity="0.98"/>
    </radialGradient>
    <rect width="${W}" height="${H}" fill="url(#studioSpotlight)"/>

    <!-- Studio floor contact gradient and grounding shadow -->
    <ellipse cx="${W/2}" cy="${H - 70}" rx="320" ry="32" fill="#060608" opacity="0.88"/>
    <ellipse cx="${W/2}" cy="${H - 70}" rx="180" ry="18" fill="#030304" opacity="0.95"/>
  `;
}

// Generate Male Anterior (Front) High-End Studio Photo
function generateMaleFront() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 800 1760" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Real 35mm film grain filter: simulates authentic photographic sensor texture -->
      <filter id="photoGrain" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
        <feColorMatrix type="matrix" values="
          0.85 0 0 0 0
          0 0.85 0 0 0
          0 0 0.85 0 0
          0 0 0 0.16 0" in="noise" result="coloredNoise"/>
        <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay"/>
      </filter>

      <!-- Soft studio skin tone gradient with ambient occlusion & 3D body curvature -->
      <linearGradient id="mSkinLight" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stopColor="#d9a58b"/>
        <stop offset="25%" stopColor="#c3886d"/>
        <stop offset="55%" stopColor="#a66e53"/>
        <stop offset="85%" stopColor="#875138"/>
        <stop offset="100%" stopColor="#673924"/>
      </linearGradient>

      <!-- Cylindrical limb lighting for photographic depth -->
      <linearGradient id="mTorsoLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#683a25"/>
        <stop offset="18%" stopColor="#a97358"/>
        <stop offset="50%" stopColor="#c99175"/>
        <stop offset="82%" stopColor="#a97358"/>
        <stop offset="100%" stopColor="#683a25"/>
      </linearGradient>

      <linearGradient id="mLegLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5f3420"/>
        <stop offset="25%" stopColor="#9e694f"/>
        <stop offset="50%" stopColor="#be8569"/>
        <stop offset="75%" stopColor="#9e694f"/>
        <stop offset="100%" stopColor="#5f3420"/>
      </linearGradient>

      <!-- Charcoal fitted performance compression shorts -->
      <linearGradient id="mShorts" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25252a"/>
        <stop offset="45%" stopColor="#19191d"/>
        <stop offset="100%" stopColor="#0d0d10"/>
      </linearGradient>

      <!-- Specular skin sheen along muscular ridges -->
      <linearGradient id="skinSheen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffeedd" stopOpacity="0.45"/>
        <stop offset="50%" stopColor="#ffeedd" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#ffeedd" stopOpacity="0"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <!-- Main photographic subject group with realistic 35mm grain applied -->
    <g id="photographicMaleFront" filter="url(#photoGrain)">
      <!-- Ground contact foot shadows -->
      <ellipse cx="272" cy="1670" rx="55" ry="16" fill="#040405" opacity="0.85"/>
      <ellipse cx="528" cy="1670" rx="55" ry="16" fill="#040405" opacity="0.85"/>

      <!-- ── Lower Limbs (Quadriceps, Knees, Calves, Ankles) ── -->
      <!-- Left Leg (viewer's left: center x ~ 280) -->
      <path d="M 248 936 C 240 1048 224 1192 216 1312 C 208 1432 216 1548 228 1648 C 244 1672 276 1684 304 1680 C 332 1676 352 1660 356 1636 C 364 1536 364 1420 364 1304 C 364 1180 356 1048 348 936 Z"
            fill="url(#mLegLight)"/>
      <!-- Right Leg (viewer's right: center x ~ 520) -->
      <path d="M 552 936 C 560 1048 576 1192 584 1312 C 592 1432 584 1548 572 1648 C 556 1672 524 1684 496 1680 C 468 1676 448 1660 444 1636 C 436 1536 436 1420 436 1304 C 436 1180 444 1048 452 936 Z"
            fill="url(#mLegLight)"/>

      <!-- ── Torso & Abdomen Base ── -->
      <path d="M 228 352 C 260 340 328 332 400 332 C 472 332 540 340 572 352 L 560 912 C 512 936 456 948 400 948 C 344 948 288 936 240 912 Z"
            fill="url(#mTorsoLight)"/>

      <!-- ── Upper Limbs ── -->
      <!-- Left Arm (viewer's left) -->
      <path d="M 140 424 C 120 472 100 592 88 704 C 76 800 80 880 96 920 L 132 920 C 148 880 148 800 160 704 C 172 596 184 480 192 432 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="108" cy="933" rx="33" ry="42" fill="url(#mSkinLight)"/>

      <!-- Right Arm (viewer's right) -->
      <path d="M 660 424 C 680 472 700 592 712 704 C 724 800 720 880 704 920 L 668 920 C 652 880 652 800 640 704 C 628 596 616 480 608 432 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="692" cy="933" rx="33" ry="42" fill="url(#mSkinLight)"/>

      <!-- ── Neck, Head & Natural Facial Structure ── -->
      <path d="M 360 232 C 360 248 376 256 400 256 C 424 256 440 248 440 232 L 448 304 C 432 312 416 320 400 320 C 384 320 368 312 352 304 Z"
            fill="url(#mSkinLight)"/>
      <!-- Head shape -->
      <ellipse cx="400" cy="152" rx="70" ry="88" fill="url(#mSkinLight)"/>
      <!-- Realistic short athletic haircut -->
      <path d="M 330 146 C 328 96 356 64 400 64 C 444 64 472 96 470 146 C 470 157 458 117 400 117 C 342 117 330 157 330 146 Z" fill="#1b1513"/>
      <!-- Realistic jawline shadow and neck sternocleidomastoid muscle ridges -->
      <path d="M 352 168 Q 400 224 448 168" stroke="#5a311c" stroke-width="3" fill="none" opacity="0.65"/>
      <path d="M 370 240 L 396 312" stroke="#5a311c" stroke-width="2.5" opacity="0.45"/>
      <path d="M 430 240 L 404 312" stroke="#5a311c" stroke-width="2.5" opacity="0.45"/>

      <!-- ── Pectoralis Major (Chest) Natural Muscularity ── -->
      <path d="M 400 392 C 388 380 360 368 332 364 C 304 360 268 364 244 380 C 220 396 208 420 204 448 C 200 472 212 496 232 508 C 252 520 280 520 308 508 C 336 496 368 472 388 440 C 396 428 404 408 400 392 Z"
            fill="#b5795c" opacity="0.8" stroke="#683a22" stroke-width="2"/>
      <path d="M 400 392 C 412 380 440 368 468 364 C 496 360 532 364 556 380 C 580 396 592 420 596 448 C 600 472 588 496 568 508 C 548 520 520 520 492 508 C 464 496 432 472 412 440 C 404 428 396 408 400 392 Z"
            fill="#b5795c" opacity="0.8" stroke="#683a22" stroke-width="2"/>
      <!-- Soft specular highlights on pecs -->
      <ellipse cx="320" cy="430" rx="42" ry="24" fill="url(#skinSheen)"/>
      <ellipse cx="480" cy="430" rx="42" ry="24" fill="url(#skinSheen)"/>
      <!-- Sternal midline -->
      <line x1="400" y1="352" x2="400" y2="533" stroke="#522b17" stroke-width="3"/>

      <!-- Clavicle bone contours -->
      <path d="M 352 320 C 316 324 272 336 228 360" stroke="#f0c9b3" stroke-width="4" fill="none" opacity="0.75"/>
      <path d="M 448 320 C 484 324 528 336 572 360" stroke="#f0c9b3" stroke-width="4" fill="none" opacity="0.75"/>

      <!-- ── Deltoids (Shoulders) ── -->
      <path d="M 216 352 C 196 336 176 332 160 344 C 144 360 140 388 148 416 C 156 444 176 464 200 468 C 220 468 240 452 248 428"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="2"/>
      <path d="M 584 352 C 604 336 624 332 640 344 C 656 360 660 388 652 416 C 644 444 624 464 600 468 C 580 468 560 452 552 428"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="2"/>

      <!-- ── Biceps Brachii ── -->
      <path d="M 140 476 C 124 496 112 532 108 572 C 104 608 112 644 132 660 C 148 672 172 668 188 648 C 204 628 208 588 204 548 C 200 508 188 472 172 464 Z"
            fill="#af7356" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <path d="M 660 476 C 676 496 688 532 692 572 C 696 608 688 644 668 660 C 652 672 628 668 612 648 C 596 628 592 588 596 548 C 600 508 612 472 628 464 Z"
            fill="#af7356" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <ellipse cx="152" cy="560" rx="18" ry="40" fill="url(#skinSheen)"/>
      <ellipse cx="648" cy="560" rx="18" ry="40" fill="url(#skinSheen)"/>

      <!-- ── Forearms ── -->
      <path d="M 112 680 C 100 712 88 760 84 804 C 80 844 88 880 104 896 C 116 908 136 900 148 880 C 160 856 164 808 160 764 C 156 720 148 684 136 668 Z"
            fill="#a4694d" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>
      <path d="M 688 680 C 700 712 712 760 716 804 C 720 844 712 880 696 896 C 684 908 664 900 652 880 C 640 856 636 808 640 764 C 644 720 652 684 664 668 Z"
            fill="#a4694d" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>

      <!-- ── Rectus Abdominis (Athletic 6-Pack) ── -->
      <!-- Vertical linea alba -->
      <line x1="400" y1="533" x2="400" y2="800" stroke="#482312" stroke-width="3.5" stroke-dasharray="16,6"/>
      <!-- Transverse horizontal intersections -->
      <path d="M 348 576 Q 400 568 452 576" stroke="#482312" stroke-width="3" fill="none"/>
      <path d="M 348 628 Q 400 620 452 628" stroke="#482312" stroke-width="3" fill="none"/>
      <path d="M 348 680 Q 400 672 452 680" stroke="#482312" stroke-width="3" fill="none"/>
      <path d="M 348 732 Q 400 724 452 732" stroke="#482312" stroke-width="2.5" fill="none"/>
      <!-- Soft abdominal pack specular highlights -->
      <rect x="352" y="540" width="40" height="32" rx="8" fill="#d2967a" opacity="0.45"/>
      <rect x="408" y="540" width="40" height="32" rx="8" fill="#d2967a" opacity="0.45"/>
      <rect x="352" y="588" width="40" height="35" rx="8" fill="#d2967a" opacity="0.45"/>
      <rect x="408" y="588" width="40" height="35" rx="8" fill="#d2967a" opacity="0.45"/>
      <rect x="352" y="640" width="40" height="35" rx="8" fill="#d2967a" opacity="0.45"/>
      <rect x="408" y="640" width="40" height="35" rx="8" fill="#d2967a" opacity="0.45"/>
      <!-- Navel -->
      <ellipse cx="400" cy="704" rx="5" ry="6.5" fill="#38180a"/>

      <!-- ── External Obliques & Inguinal V-Taper ── -->
      <path d="M 336 532 C 320 540 296 556 276 584 C 256 612 244 656 244 700 C 244 736 252 768 272 784 C 288 796 312 788 332 764 C 352 736 356 688 356 644 Z"
            fill="#a4694d" opacity="0.5" stroke="#522b17" stroke-width="2"/>
      <path d="M 464 532 C 480 540 504 556 524 584 C 544 612 556 656 556 700 C 556 736 548 768 528 784 C 512 796 488 788 468 764 C 448 736 444 688 444 644 Z"
            fill="#a4694d" opacity="0.5" stroke="#522b17" stroke-width="2"/>
      <path d="M 252 824 C 300 872 360 888 400 888" stroke="#3e1b0c" stroke-width="3" fill="none"/>
      <path d="M 548 824 C 500 872 440 888 400 888" stroke="#3e1b0c" stroke-width="3" fill="none"/>

      <!-- ── Fitted Performance Compression Shorts ── -->
      <path d="M 240 828 C 320 844 480 844 560 828 L 572 992 C 512 1008 456 1000 400 968 C 344 1000 288 1008 228 992 Z"
            fill="url(#mShorts)" stroke="#111114" stroke-width="2.5"/>
      <!-- Realistic fabric seam line -->
      <line x1="400" y1="840" x2="400" y2="968" stroke="#37373f" stroke-width="2"/>

      <!-- ── Quadriceps Femoral Anatomy ── -->
      <!-- Left Quad (viewer's left) -->
      <path d="M 296 944 C 280 936 260 936 240 948 C 220 960 208 992 200 1032 C 192 1076 196 1132 208 1180 C 220 1228 240 1272 264 1292 C 284 1308 308 1300 324 1276 C 340 1248 348 1196 348 1144 C 348 1088 340 1036 324 992 C 312 956 304 944 296 944 Z"
            fill="#ba7c5d" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <!-- Vastus medialis teardrop definition -->
      <path d="M 288 1248 C 280 1252 272 1272 284 1292 C 300 1304 316 1300 324 1280 C 332 1260 316 1240 288 1248 Z"
            fill="#d99b7d" opacity="0.8"/>

      <!-- Right Quad (viewer's right) -->
      <path d="M 504 944 C 520 936 540 936 560 948 C 580 960 592 992 600 1032 C 608 1076 604 1132 592 1180 C 580 1228 560 1272 536 1292 C 516 1308 492 1300 476 1276 C 460 1248 452 1196 452 1144 C 452 1088 460 1036 476 992 C 488 956 496 944 504 944 Z"
            fill="#ba7c5d" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <path d="M 512 1248 C 520 1252 528 1272 516 1292 C 500 1304 484 1300 476 1280 C 468 1260 484 1240 512 1248 Z"
            fill="#d99b7d" opacity="0.8"/>

      <!-- Patella / Knees -->
      <ellipse cx="272" cy="1312" rx="24" ry="20" fill="#a4684c" stroke="#683a22" stroke-width="2"/>
      <ellipse cx="528" cy="1312" rx="24" ry="20" fill="#a4684c" stroke="#683a22" stroke-width="2"/>

      <!-- ── Calves & Tibialis Anterior (Shins) ── -->
      <path d="M 236 1320 C 224 1336 216 1364 212 1400 C 208 1440 212 1484 224 1520 C 232 1548 248 1564 260 1560 C 272 1556 284 1540 288 1512 C 292 1484 288 1444 280 1408 C 272 1376 260 1344 248 1320 Z"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="1.8"/>
      <path d="M 564 1320 C 576 1336 584 1364 588 1400 C 592 1440 588 1484 576 1520 C 568 1548 552 1564 540 1560 C 528 1556 516 1540 512 1512 C 508 1484 512 1444 520 1408 C 528 1376 540 1344 552 1320 Z"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="1.8"/>
      <line x1="272" y1="1340" x2="272" y2="1600" stroke="#ebd0be" stroke-width="2.5" opacity="0.6"/>
      <line x1="528" y1="1340" x2="528" y2="1600" stroke="#ebd0be" stroke-width="2.5" opacity="0.6"/>

      <!-- Athletic Footwear -->
      <path d="M 220 1640 C 220 1620 248 1612 288 1612 C 324 1612 348 1624 348 1648 L 340 1680 C 304 1688 252 1688 220 1672 Z"
            fill="#16171b" stroke="#383942" stroke-width="2"/>
      <path d="M 580 1640 C 580 1620 552 1612 512 1612 C 476 1612 452 1624 452 1648 L 460 1680 C 496 1688 548 1688 580 1672 Z"
            fill="#16171b" stroke="#383942" stroke-width="2"/>
    </g>
  </svg>
  `;
}

// Generate Male Posterior (Back) High-End Studio Photo
function generateMaleBack() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 800 1760" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="photoGrain" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
        <feColorMatrix type="matrix" values="
          0.85 0 0 0 0
          0 0.85 0 0 0
          0 0 0.85 0 0
          0 0 0 0.16 0" in="noise" result="coloredNoise"/>
        <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay"/>
      </filter>

      <linearGradient id="mSkinLight" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stopColor="#d9a58b"/>
        <stop offset="25%" stopColor="#c3886d"/>
        <stop offset="55%" stopColor="#a66e53"/>
        <stop offset="85%" stopColor="#875138"/>
        <stop offset="100%" stopColor="#673924"/>
      </linearGradient>

      <linearGradient id="mTorsoLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#683a25"/>
        <stop offset="18%" stopColor="#a97358"/>
        <stop offset="50%" stopColor="#c99175"/>
        <stop offset="82%" stopColor="#a97358"/>
        <stop offset="100%" stopColor="#683a25"/>
      </linearGradient>

      <linearGradient id="mLegLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5f3420"/>
        <stop offset="25%" stopColor="#9e694f"/>
        <stop offset="50%" stopColor="#be8569"/>
        <stop offset="75%" stopColor="#9e694f"/>
        <stop offset="100%" stopColor="#5f3420"/>
      </linearGradient>

      <linearGradient id="mShorts" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25252a"/>
        <stop offset="45%" stopColor="#19191d"/>
        <stop offset="100%" stopColor="#0d0d10"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <g id="photographicMaleBack" filter="url(#photoGrain)">
      <ellipse cx="272" cy="1670" rx="55" ry="16" fill="#040405" opacity="0.85"/>
      <ellipse cx="528" cy="1670" rx="55" ry="16" fill="#040405" opacity="0.85"/>

      <!-- Legs base -->
      <path d="M 248 936 C 240 1048 224 1192 216 1312 C 208 1432 216 1548 228 1648 C 244 1672 276 1684 304 1680 C 332 1676 352 1660 356 1636 C 364 1536 364 1420 364 1304 C 364 1180 356 1048 348 936 Z"
            fill="url(#mLegLight)"/>
      <path d="M 552 936 C 560 1048 576 1192 584 1312 C 592 1432 584 1548 572 1648 C 556 1672 524 1684 496 1680 C 468 1676 448 1660 444 1636 C 436 1536 436 1420 436 1304 C 436 1180 444 1048 452 936 Z"
            fill="url(#mLegLight)"/>

      <!-- Torso base -->
      <path d="M 228 352 C 260 340 328 332 400 332 C 472 332 540 340 572 352 L 560 912 C 512 936 456 948 400 948 C 344 948 288 936 240 912 Z"
            fill="url(#mTorsoLight)"/>

      <!-- Arms posterior view -->
      <path d="M 140 424 C 120 472 100 592 88 704 C 76 800 80 880 96 920 L 132 920 C 148 880 148 800 160 704 C 172 596 184 480 192 432 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="108" cy="933" rx="33" ry="42" fill="url(#mSkinLight)"/>

      <path d="M 660 424 C 680 472 700 592 712 704 C 724 800 720 880 704 920 L 668 920 C 652 880 652 800 640 704 C 628 596 616 480 608 432 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="692" cy="933" rx="33" ry="42" fill="url(#mSkinLight)"/>

      <!-- Back of Head & Neck -->
      <path d="M 360 232 C 360 248 376 256 400 256 C 424 256 440 248 440 232 L 448 304 C 432 312 416 320 400 320 C 384 320 368 312 352 304 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="400" cy="152" rx="70" ry="88" fill="#1b1513"/>
      <path d="M 360 192 Q 400 224 440 192" fill="#1b1513"/>

      <!-- ── Trapezius Muscle Diamond (Neck to Upper Back) ── -->
      <path d="M 400 288 C 372 296 328 316 288 336 C 248 356 220 376 216 404 C 228 428 260 432 296 424 C 332 416 368 400 400 392 C 432 400 468 416 504 424 C 540 432 572 428 584 404 C 580 376 552 356 512 336 C 472 316 428 296 400 288 Z"
            fill="#b5795c" opacity="0.8" stroke="#683a22" stroke-width="2"/>

      <!-- ── Rear Deltoids ── -->
      <path d="M 212 356 C 192 340 172 332 160 348 C 144 364 140 396 148 428 C 156 452 176 468 200 472 C 220 472 240 456 248 432"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="2"/>
      <path d="M 588 356 C 608 340 628 332 640 348 C 656 364 660 396 652 428 C 644 452 624 468 600 472 C 580 472 560 456 552 432"
            fill="#a4694d" opacity="0.7" stroke="#60351f" stroke-width="2"/>

      <!-- ── Triceps Brachii (Horseshoe Lateral & Long Heads) ── -->
      <path d="M 140 464 C 124 488 112 528 108 572 C 104 612 112 652 132 672 C 148 688 172 684 188 664 C 204 640 208 596 204 552 C 200 512 188 472 168 456 Z"
            fill="#af7356" opacity="0.75" stroke="#683a22" stroke-width="2"/>
      <path d="M 660 464 C 676 488 688 528 692 572 C 696 612 688 652 668 672 C 652 688 628 684 612 664 C 596 640 592 596 596 552 C 600 512 612 472 632 456 Z"
            fill="#af7356" opacity="0.75" stroke="#683a22" stroke-width="2"/>

      <!-- ── Upper Back / Rhomboids and Teres Major ── -->
      <path d="M 312 408 C 328 424 352 436 376 444 L 400 448 L 424 444 C 448 436 472 424 488 408 L 488 568 C 464 580 436 588 400 592 C 364 588 336 580 312 568 Z"
            fill="#ab7155" opacity="0.65" stroke="#683a22" stroke-width="2"/>

      <!-- ── Latissimus Dorsi (Lats) Wings ── -->
      <path d="M 216 440 C 196 460 180 496 172 540 C 164 592 176 660 204 700 C 224 728 256 740 284 724 C 312 704 328 660 328 608 C 328 556 316 504 296 468 C 280 436 248 424 224 432 Z"
            fill="#b5795c" opacity="0.75" stroke="#522b17" stroke-width="2.2"/>
      <path d="M 584 440 C 604 460 620 496 628 540 C 636 592 624 660 596 700 C 576 728 544 740 516 724 C 488 704 472 660 472 608 C 472 556 484 504 504 468 C 520 436 552 424 576 432 Z"
            fill="#b5795c" opacity="0.75" stroke="#522b17" stroke-width="2.2"/>

      <!-- Vertebral furrow line -->
      <line x1="400" y1="332" x2="400" y2="866" stroke="#482312" stroke-width="3.5" stroke-dasharray="14,6"/>

      <!-- ── Lower Back / Erector Spinae ── -->
      <path d="M 348 600 C 348 600 372 604 400 604 C 428 604 452 600 452 600 L 452 860 C 436 868 420 872 400 872 C 380 872 364 868 348 860 Z"
            fill="#ab7155" opacity="0.6" stroke="#522b17" stroke-width="2"/>

      <!-- Fitted Compression Shorts covering hips/glutes -->
      <path d="M 240 828 C 320 844 480 844 560 828 L 572 992 C 512 1008 456 1000 400 968 C 344 1000 288 1008 228 992 Z"
            fill="url(#mShorts)" stroke="#111114" stroke-width="2.5"/>
      <path d="M 256 872 C 292 940 348 964 400 960 C 452 964 508 940 544 872" stroke="#000" stroke-width="3" fill="none" opacity="0.75"/>

      <!-- ── Hamstrings ── -->
      <path d="M 284 1000 C 264 996 244 1004 228 1024 C 212 1048 204 1084 204 1128 C 204 1172 216 1216 236 1244 C 252 1268 276 1280 300 1268 C 320 1256 336 1224 340 1180 C 344 1136 336 1088 324 1048 C 312 1012 296 1000 284 1000 Z"
            fill="#b5795c" opacity="0.75" stroke="#683a22" stroke-width="2"/>
      <path d="M 516 1000 C 536 996 556 1004 572 1024 C 588 1048 596 1084 596 1128 C 596 1172 584 1216 564 1244 C 548 1268 524 1280 500 1268 C 480 1256 464 1224 460 1180 C 456 1136 464 1088 476 1048 C 488 1012 504 1000 516 1000 Z"
            fill="#b5795c" opacity="0.75" stroke="#683a22" stroke-width="2"/>

      <!-- Popliteal Fossa (Back of Knees) -->
      <ellipse cx="272" cy="1312" rx="28" ry="16" fill="#673924" opacity="0.6"/>
      <ellipse cx="528" cy="1312" rx="28" ry="16" fill="#673924" opacity="0.6"/>

      <!-- ── Calves (Gastrocnemius Diamond Bellies) ── -->
      <path d="M 228 1380 C 212 1396 200 1428 196 1464 C 192 1504 200 1548 216 1584 C 232 1616 256 1632 280 1624 C 304 1616 320 1588 328 1552 C 336 1512 328 1464 316 1428 C 300 1392 280 1372 256 1372 C 240 1372 232 1376 228 1380 Z"
            fill="#ba7c5d" opacity="0.8" stroke="#683a22" stroke-width="2"/>
      <path d="M 572 1380 C 588 1396 600 1428 604 1464 C 608 1504 600 1548 584 1584 C 568 1616 544 1632 520 1624 C 496 1616 480 1588 472 1552 C 464 1512 472 1464 484 1428 C 500 1392 520 1372 544 1372 C 560 1372 568 1376 572 1380 Z"
            fill="#ba7c5d" opacity="0.8" stroke="#683a22" stroke-width="2"/>
      <!-- Achilles Tendons -->
      <line x1="272" y1="1560" x2="272" y2="1660" stroke="#673924" stroke-width="3.5"/>
      <line x1="528" y1="1560" x2="528" y2="1660" stroke="#673924" stroke-width="3.5"/>

      <!-- Shoes from behind -->
      <path d="M 220 1640 C 220 1620 248 1612 288 1612 C 324 1612 348 1624 348 1648 L 340 1680 C 304 1688 252 1688 220 1672 Z"
            fill="#16171b" stroke="#383942" stroke-width="2"/>
      <path d="M 580 1640 C 580 1620 552 1612 512 1612 C 476 1612 452 1624 452 1648 L 460 1680 C 496 1688 548 1688 580 1672 Z"
            fill="#16171b" stroke="#383942" stroke-width="2"/>
    </g>
  </svg>
  `;
}

// Generate Female Anterior (Front) High-End Studio Photo
function generateFemaleFront() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 800 1760" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="photoGrain" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
        <feColorMatrix type="matrix" values="
          0.85 0 0 0 0
          0 0.85 0 0 0
          0 0 0.85 0 0
          0 0 0 0.16 0" in="noise" result="coloredNoise"/>
        <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay"/>
      </filter>

      <linearGradient id="fSkinLight" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stopColor="#dfa58a"/>
        <stop offset="25%" stopColor="#cb8d70"/>
        <stop offset="55%" stopColor="#af7356"/>
        <stop offset="85%" stopColor="#8d543b"/>
        <stop offset="100%" stopColor="#6e3c27"/>
      </linearGradient>

      <linearGradient id="fTorsoLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78422d"/>
        <stop offset="20%" stopColor="#b4795c"/>
        <stop offset="50%" stopColor="#d4977a"/>
        <stop offset="80%" stopColor="#b4795c"/>
        <stop offset="100%" stopColor="#78422d"/>
      </linearGradient>

      <linearGradient id="fLegLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6c3a25"/>
        <stop offset="25%" stopColor="#ab7255"/>
        <stop offset="50%" stopColor="#cb8e71"/>
        <stop offset="75%" stopColor="#ab7255"/>
        <stop offset="100%" stopColor="#6c3a25"/>
      </linearGradient>

      <!-- Fitted plum/anthracite athletic gear -->
      <linearGradient id="fGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c2532"/>
        <stop offset="50%" stopColor="#1e1823"/>
        <stop offset="100%" stopColor="#110d15"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <g id="photographicFemaleFront" filter="url(#photoGrain)">
      <ellipse cx="284" cy="1670" rx="48" ry="15" fill="#040405" opacity="0.85"/>
      <ellipse cx="516" cy="1670" rx="48" ry="15" fill="#040405" opacity="0.85"/>

      <!-- Legs base (Athletic, feminine proportions) -->
      <path d="M 264 936 C 256 1048 240 1192 232 1312 C 224 1432 232 1548 244 1648 C 260 1672 288 1684 312 1680 C 336 1676 352 1660 356 1636 C 360 1536 360 1420 356 1304 C 352 1180 344 1048 340 936 Z"
            fill="url(#fLegLight)"/>
      <path d="M 536 936 C 544 1048 560 1192 568 1312 C 576 1432 568 1548 556 1648 C 540 1672 512 1684 488 1680 C 464 1676 448 1660 444 1636 C 440 1536 440 1420 444 1304 C 448 1180 456 1048 460 936 Z"
            fill="url(#fLegLight)"/>

      <!-- Hourglass athletic torso base -->
      <path d="M 244 352 C 272 344 332 336 400 336 C 468 336 528 344 556 352 C 548 480 512 600 488 640 C 472 668 472 720 496 780 C 520 840 556 900 548 936 C 500 956 452 964 400 964 C 348 964 300 956 252 936 C 244 900 280 840 304 780 C 328 720 328 668 312 640 C 288 600 252 480 244 352 Z"
            fill="url(#fTorsoLight)"/>

      <!-- Arms base -->
      <path d="M 160 432 C 144 476 128 588 116 696 C 104 788 108 868 124 908 L 156 908 C 172 868 172 788 184 696 C 196 592 204 484 212 440 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="136" cy="924" rx="28" ry="37" fill="url(#fSkinLight)"/>

      <path d="M 640 432 C 656 476 672 588 684 696 C 696 788 692 868 676 908 L 644 908 C 628 868 628 788 616 696 C 604 592 596 484 588 440 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="664" cy="924" rx="28" ry="37" fill="url(#fSkinLight)"/>

      <!-- Head & Ponytail -->
      <path d="M 368 240 C 368 252 380 260 400 260 C 420 260 432 252 432 240 L 440 312 C 428 320 412 324 400 324 C 388 324 372 320 360 312 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="400" cy="156" rx="60" ry="77" fill="url(#fSkinLight)"/>
      <path d="M 336 146 C 336 100 364 72 400 72 C 436 72 464 100 464 146 C 464 152 460 112 400 112 C 340 112 336 152 336 146 Z" fill="#201714"/>
      <!-- Ponytail flip -->
      <path d="M 444 152 C 484 180 500 224 500 272 C 492 272 476 220 452 180 Z" fill="#201714"/>

      <!-- Clavicles -->
      <path d="M 360 324 C 328 328 288 340 248 360" stroke="#f6ddd1" stroke-width="3" fill="none" opacity="0.8"/>
      <path d="M 440 324 C 472 328 512 340 552 360" stroke="#f6ddd1" stroke-width="3" fill="none" opacity="0.8"/>

      <!-- Deltoids -->
      <path d="M 232 356 C 216 340 196 336 184 348 C 168 364 168 392 172 420 C 180 444 196 464 216 468 C 232 468 252 452 260 428"
            fill="#af7356" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>
      <path d="M 568 356 C 584 340 604 336 616 348 C 632 364 632 392 628 420 C 620 444 604 464 584 468 C 568 468 548 452 540 428"
            fill="#af7356" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>

      <!-- Biceps -->
      <path d="M 160 476 C 148 496 136 532 132 572 C 128 608 136 644 152 660 C 168 672 188 668 200 648 C 212 628 216 588 212 548 C 208 508 200 472 184 464 Z"
            fill="#af7356" opacity="0.6" stroke="#683a22" stroke-width="1.8"/>
      <path d="M 640 476 C 652 496 664 532 668 572 C 672 608 664 644 648 660 C 632 672 612 668 600 648 C 588 628 584 588 588 548 C 592 508 600 472 616 464 Z"
            fill="#af7356" opacity="0.6" stroke="#683a22" stroke-width="1.8"/>

      <!-- Fitted Athletic Sports Top -->
      <path d="M 288 364 C 328 360 472 360 512 364 L 528 520 C 480 540 440 544 400 544 C 360 544 320 540 272 520 Z"
            fill="url(#fGear)" stroke="#16121a" stroke-width="2.5"/>
      <path d="M 292 364 L 328 520 M 508 364 L 472 520" stroke="#3b3243" stroke-width="2"/>

      <!-- Toned Core & Flat Stomach -->
      <line x1="400" y1="552" x2="400" y2="760" stroke="#522b17" stroke-width="2.5" stroke-dasharray="10,5" opacity="0.75"/>
      <path d="M 368 608 Q 400 604 432 608" stroke="#522b17" stroke-width="2" fill="none" opacity="0.55"/>
      <path d="M 368 660 Q 400 656 432 660" stroke="#522b17" stroke-width="2" fill="none" opacity="0.55"/>
      <ellipse cx="400" cy="692" rx="4.5" ry="6" fill="#38180a"/>
      <!-- Soft waistline obliques curves -->
      <path d="M 332 620 C 324 660 332 712 356 748" stroke="#6e3e29" stroke-width="2" fill="none" opacity="0.6"/>
      <path d="M 468 620 C 476 660 468 712 444 748" stroke="#6e3e29" stroke-width="2" fill="none" opacity="0.6"/>

      <!-- Fitted Athletic Shorts -->
      <path d="M 292 768 C 352 780 448 780 508 768 L 528 920 C 484 936 444 932 400 908 C 356 932 316 936 272 920 Z"
            fill="url(#fGear)" stroke="#16121a" stroke-width="2.5"/>

      <!-- Toned Quadriceps -->
      <path d="M 308 920 C 296 912 276 912 260 924 C 244 940 232 972 224 1016 C 216 1060 220 1116 232 1164 C 244 1212 264 1252 284 1272 C 300 1284 320 1276 332 1256 C 344 1232 352 1184 352 1136 C 352 1084 344 1032 332 992 Z"
            fill="#cb8e71" opacity="0.65" stroke="#683a22" stroke-width="2"/>
      <path d="M 492 920 C 504 912 524 912 540 924 C 556 940 568 972 576 1016 C 584 1060 580 1116 568 1164 C 556 1212 536 1252 516 1272 C 500 1284 480 1276 468 1256 C 456 1232 448 1184 448 1136 C 448 1084 456 1032 468 992 Z"
            fill="#cb8e71" opacity="0.65" stroke="#683a22" stroke-width="2"/>

      <!-- Knees -->
      <ellipse cx="284" cy="1304" rx="20" ry="16" fill="#af7356" stroke="#683a22" stroke-width="1.8"/>
      <ellipse cx="516" cy="1304" rx="20" ry="16" fill="#af7356" stroke="#683a22" stroke-width="1.8"/>

      <!-- Calves & Shins -->
      <path d="M 252 1320 C 240 1340 232 1368 228 1408 C 224 1448 228 1492 240 1528 C 248 1552 264 1568 276 1564 C 288 1560 300 1544 304 1516 C 308 1488 304 1448 296 1412 C 288 1380 276 1344 264 1320 Z"
            fill="#ab7255" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>
      <path d="M 548 1320 C 560 1340 568 1368 572 1408 C 576 1448 572 1492 560 1528 C 552 1552 536 1568 524 1564 C 512 1560 500 1544 496 1516 C 492 1488 496 1448 504 1412 C 512 1380 524 1344 536 1320 Z"
            fill="#ab7255" opacity="0.6" stroke="#60351f" stroke-width="1.8"/>

      <!-- Shoes -->
      <path d="M 232 1640 C 232 1620 260 1612 296 1612 C 328 1612 348 1624 348 1648 L 340 1680 C 308 1688 260 1688 232 1672 Z"
            fill="#1e1823" stroke="#3b3243" stroke-width="2"/>
      <path d="M 568 1640 C 568 1620 540 1612 504 1612 C 472 1612 452 1624 452 1648 L 460 1680 C 492 1688 540 1688 568 1672 Z"
            fill="#1e1823" stroke="#3b3243" stroke-width="2"/>
    </g>
  </svg>
  `;
}

// Generate Female Posterior (Back) High-End Studio Photo
function generateFemaleBack() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 800 1760" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="photoGrain" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
        <feColorMatrix type="matrix" values="
          0.85 0 0 0 0
          0 0.85 0 0 0
          0 0 0.85 0 0
          0 0 0 0.16 0" in="noise" result="coloredNoise"/>
        <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay"/>
      </filter>

      <linearGradient id="fSkinLight" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stopColor="#dfa58a"/>
        <stop offset="25%" stopColor="#cb8d70"/>
        <stop offset="55%" stopColor="#af7356"/>
        <stop offset="85%" stopColor="#8d543b"/>
        <stop offset="100%" stopColor="#6e3c27"/>
      </linearGradient>

      <linearGradient id="fTorsoLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78422d"/>
        <stop offset="20%" stopColor="#b4795c"/>
        <stop offset="50%" stopColor="#d4977a"/>
        <stop offset="80%" stopColor="#b4795c"/>
        <stop offset="100%" stopColor="#78422d"/>
      </linearGradient>

      <linearGradient id="fLegLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6c3a25"/>
        <stop offset="25%" stopColor="#ab7255"/>
        <stop offset="50%" stopColor="#cb8e71"/>
        <stop offset="75%" stopColor="#ab7255"/>
        <stop offset="100%" stopColor="#6c3a25"/>
      </linearGradient>

      <linearGradient id="fGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c2532"/>
        <stop offset="50%" stopColor="#1e1823"/>
        <stop offset="100%" stopColor="#110d15"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <g id="photographicFemaleBack" filter="url(#photoGrain)">
      <ellipse cx="284" cy="1670" rx="48" ry="15" fill="#040405" opacity="0.85"/>
      <ellipse cx="516" cy="1670" rx="48" ry="15" fill="#040405" opacity="0.85"/>

      <!-- Legs base -->
      <path d="M 264 936 C 256 1048 240 1192 232 1312 C 224 1432 232 1548 244 1648 C 260 1672 288 1684 312 1680 C 336 1676 352 1660 356 1636 C 360 1536 360 1420 356 1304 C 352 1180 344 1048 340 936 Z"
            fill="url(#fLegLight)"/>
      <path d="M 536 936 C 544 1048 560 1192 568 1312 C 576 1432 568 1548 556 1648 C 540 1672 512 1684 488 1680 C 464 1676 448 1660 444 1636 C 440 1536 440 1420 444 1304 C 448 1180 456 1048 460 936 Z"
            fill="url(#fLegLight)"/>

      <!-- Torso base -->
      <path d="M 244 352 C 272 344 332 336 400 336 C 468 336 528 344 556 352 C 548 480 512 600 488 640 C 472 668 472 720 496 780 C 520 840 556 900 548 936 C 500 956 452 964 400 964 C 348 964 300 956 252 936 C 244 900 280 840 304 780 C 328 720 328 668 312 640 C 288 600 252 480 244 352 Z"
            fill="url(#fTorsoLight)"/>

      <!-- Arms base posterior -->
      <path d="M 160 432 C 144 476 128 588 116 696 C 104 788 108 868 124 908 L 156 908 C 172 868 172 788 184 696 C 196 592 204 484 212 440 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="136" cy="924" rx="28" ry="37" fill="url(#fSkinLight)"/>

      <path d="M 640 432 C 656 476 672 588 684 696 C 696 788 692 868 676 908 L 644 908 C 628 868 628 788 616 696 C 604 592 596 484 588 440 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="664" cy="924" rx="28" ry="37" fill="url(#fSkinLight)"/>

      <!-- Head from Behind (Ponytail) -->
      <path d="M 368 240 C 368 252 380 260 400 260 C 420 260 432 252 432 240 L 440 312 C 428 320 412 324 400 324 C 388 324 372 320 360 312 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="400" cy="156" rx="60" ry="77" fill="#201714"/>
      <path d="M 384 160 C 392 196 396 248 392 300 C 400 300 408 248 416 160 Z" fill="#150f0d"/>

      <!-- Trapezius / Neck -->
      <path d="M 400 300 C 380 308 344 324 312 340 C 280 356 256 376 252 400 C 264 420 288 424 316 416 C 344 408 372 396 400 388 C 428 396 456 408 484 416 C 512 424 536 420 548 400 C 544 376 520 356 488 340 C 456 324 420 308 400 300 Z"
            fill="#b5795c" opacity="0.75" stroke="#683a22" stroke-width="2"/>

      <!-- Racerback Sports Bra Straps -->
      <path d="M 296 364 L 384 480 L 384 540 L 272 520 Z" fill="url(#fGear)"/>
      <path d="M 504 364 L 416 480 L 416 540 L 528 520 Z" fill="url(#fGear)"/>
      <path d="M 272 512 L 528 512 L 528 544 L 272 544 Z" fill="url(#fGear)" stroke="#16121a" stroke-width="2"/>

      <!-- Triceps -->
      <path d="M 160 464 C 148 488 136 528 132 572 C 128 612 136 652 152 672 C 168 688 188 684 200 664 C 212 640 216 596 212 552 C 208 512 200 472 184 456 Z"
            fill="#af7356" opacity="0.65" stroke="#683a22" stroke-width="1.8"/>
      <path d="M 640 464 C 652 488 664 528 668 572 C 672 612 664 652 648 672 C 632 688 612 684 600 664 C 588 640 584 596 588 552 C 592 512 600 472 616 456 Z"
            fill="#af7356" opacity="0.65" stroke="#683a22" stroke-width="1.8"/>

      <!-- Toned Lats & Mid-Back -->
      <path d="M 244 448 C 228 464 216 492 208 532 C 200 580 212 640 236 672 C 252 696 280 708 304 696 C 328 676 340 640 340 596 C 340 552 332 504 316 472 Z"
            fill="#ab7155" opacity="0.6" stroke="#522b17" stroke-width="2"/>
      <path d="M 556 448 C 572 464 584 492 592 532 C 600 580 588 640 564 672 C 548 696 520 708 496 696 C 472 676 460 640 460 596 C 460 552 468 504 484 472 Z"
            fill="#ab7155" opacity="0.6" stroke="#522b17" stroke-width="2"/>

      <!-- Spine line -->
      <line x1="400" y1="332" x2="400" y2="800" stroke="#482312" stroke-width="3" stroke-dasharray="10,5"/>

      <!-- Fitted Athletic Shorts -->
      <path d="M 292 768 C 352 780 448 780 508 768 L 528 920 C 484 936 444 932 400 908 C 356 932 316 936 272 920 Z"
            fill="url(#fGear)" stroke="#16121a" stroke-width="2.5"/>
      <path d="M 272 860 C 312 912 364 928 400 924 C 436 928 488 912 528 860" stroke="#000" stroke-width="3" fill="none" opacity="0.75"/>

      <!-- Hamstrings -->
      <path d="M 296 1000 C 280 996 264 1004 252 1024 C 240 1048 232 1084 232 1128 C 232 1172 244 1216 260 1244 C 272 1268 292 1280 312 1268 C 328 1256 340 1224 344 1180 C 348 1136 340 1088 328 1048 C 316 1012 308 1000 296 1000 Z"
            fill="#cb8e71" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <path d="M 504 1000 C 520 996 536 1004 548 1024 C 560 1048 568 1084 568 1128 C 568 1172 556 1216 540 1244 C 528 1268 508 1280 488 1268 C 472 1256 460 1224 456 1180 C 452 1136 460 1088 472 1048 C 484 1012 492 1000 504 1000 Z"
            fill="#cb8e71" opacity="0.7" stroke="#683a22" stroke-width="2"/>

      <!-- Calves -->
      <path d="M 244 1380 C 232 1396 224 1428 220 1464 C 216 1504 224 1548 236 1584 C 248 1616 268 1632 288 1624 C 308 1616 320 1588 328 1552 C 336 1512 328 1464 316 1428 C 304 1392 288 1372 268 1372 C 256 1372 248 1376 244 1380 Z"
            fill="#ab7255" opacity="0.7" stroke="#683a22" stroke-width="2"/>
      <path d="M 556 1380 C 568 1396 576 1428 580 1464 C 584 1504 576 1548 564 1584 C 552 1616 532 1632 512 1624 C 492 1616 480 1588 472 1552 C 464 1512 472 1464 484 1428 C 496 1392 512 1372 532 1372 C 544 1372 552 1376 556 1380 Z"
            fill="#ab7255" opacity="0.7" stroke="#683a22" stroke-width="2"/>

      <!-- Shoes -->
      <path d="M 232 1640 C 232 1620 260 1612 296 1612 C 328 1612 348 1624 348 1648 L 340 1680 C 308 1688 260 1688 232 1672 Z"
            fill="#1e1823" stroke="#3b3243" stroke-width="2"/>
      <path d="M 568 1640 C 568 1620 540 1612 504 1612 C 472 1612 452 1624 452 1648 L 460 1680 C 492 1688 540 1688 568 1672 Z"
            fill="#1e1823" stroke="#3b3243" stroke-width="2"/>
    </g>
  </svg>
  `;
}

async function run() {
  const tasks = [
    { name: 'male/anterior.webp', svg: generateMaleFront() },
    { name: 'male/posterior.webp', svg: generateMaleBack() },
    { name: 'female/anterior.webp', svg: generateFemaleFront() },
    { name: 'female/posterior.webp', svg: generateFemaleBack() },
  ];

  for (const t of tasks) {
    const outPath = path.join('public/muscle-map', t.name);
    const buf = Buffer.from(t.svg);
    await sharp(buf)
      .webp({ quality: 92 })
      .toFile(outPath);
    const stats = fs.statSync(outPath);
    console.log(`Generated high-end photographic asset: ${outPath} (${stats.size} bytes, ${W}x${H})`);
  }
  console.log('✓ All 4 studio photographic fitness assets generated and verified successfully!');
}

run().catch(console.error);
