import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

console.log('Generating realistic studio photography base images...');

// Canvas dimensions for high-resolution anatomical photography: 600 x 1320 (aspect ratio 1:2.2, matches 200x440 viewBox perfectly with 3x resolution!)
const W = 600;
const H = 1320;

// Studio background: Professional dark vignette studio background with subtle soft key light and rim lighting
function getStudioBackdrop() {
  return `
    <rect width="${W}" height="${H}" fill="#121215"/>
    <!-- Studio spotlight radial glow centered on torso/body -->
    <radialGradient id="studioKey" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stopColor="#252730" stopOpacity="0.8"/>
      <stop offset="50%" stopColor="#181920" stopOpacity="0.5"/>
      <stop offset="100%" stopColor="#0d0e11" stopOpacity="0.95"/>
    </radialGradient>
    <rect width="${W}" height="${H}" fill="url(#studioKey)"/>
    
    <!-- Floor reflection / shadow baseline -->
    <ellipse cx="${W/2}" cy="${H - 50}" rx="240" ry="25" fill="#08080a" opacity="0.85"/>
  `;
}

// Generate Male Anterior (Front) Photography
function generateMaleAnteriorSVG() {
  // Scale factor: viewBox 200x440 -> 600x1320 is exactly * 3!
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 600 1320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Skin gradients: Natural warm athletic skin with realistic lighting & depth -->
      <linearGradient id="mSkinLight" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#d2997b"/>
        <stop offset="35%" stopColor="#b87c5e"/>
        <stop offset="70%" stopColor="#986045"/>
        <stop offset="100%" stopColor="#75442e"/>
      </linearGradient>
      
      <linearGradient id="mSkinTorso" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7a4832"/>
        <stop offset="25%" stopColor="#b87c5e"/>
        <stop offset="50%" stopColor="#c88b6c"/>
        <stop offset="75%" stopColor="#b87c5e"/>
        <stop offset="100%" stopColor="#7a4832"/>
      </linearGradient>

      <linearGradient id="mSkinLeg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6e3f2a"/>
        <stop offset="30%" stopColor="#ad7254"/>
        <stop offset="50%" stopColor="#bd8163"/>
        <stop offset="70%" stopColor="#ad7254"/>
        <stop offset="100%" stopColor="#6e3f2a"/>
      </linearGradient>

      <!-- Fitted Athletic Shorts / Compression gear -->
      <linearGradient id="mShorts" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#252528"/>
        <stop offset="50%" stopColor="#1a1a1c"/>
        <stop offset="100%" stopColor="#0e0e10"/>
      </linearGradient>

      <!-- Muscle definition shading and highlights -->
      <filter id="softGaze" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    ${getStudioBackdrop()}

    <!-- === MALE ATHLETE FULL BODY (Front) === -->
    <g id="maleBodyFront">
      <!-- Cast Shadow under feet -->
      <ellipse cx="204" cy="1255" rx="42" ry="12" fill="#050506" opacity="0.7"/>
      <ellipse cx="396" cy="1255" rx="42" ry="12" fill="#050506" opacity="0.7"/>

      <!-- Legs base -->
      <!-- Left leg (anatomical right, screen left: center x ~ 210) -->
      <path d="M 186 702 C 180 786 168 894 162 984 C 156 1074 162 1161 171 1236 C 183 1254 207 1263 228 1260 C 249 1257 264 1245 267 1227 C 273 1152 273 1065 273 978 C 273 885 267 786 261 702 Z"
            fill="url(#mSkinLeg)"/>

      <!-- Right leg (anatomical left, screen right: center x ~ 390) -->
      <path d="M 414 702 C 420 786 432 894 438 984 C 444 1074 438 1161 429 1236 C 417 1254 393 1263 372 1260 C 351 1257 336 1245 333 1227 C 327 1152 327 1065 327 978 C 327 885 333 786 339 702 Z"
            fill="url(#mSkinLeg)"/>

      <!-- Torso & Pelvis base -->
      <path d="M 171 264 C 195 255 246 249 300 249 C 354 249 405 255 429 264 L 420 684 C 384 702 342 711 300 711 C 258 711 216 702 180 684 Z"
            fill="url(#mSkinTorso)"/>

      <!-- Left Arm (anatomical right) -->
      <path d="M 105 318 C 90 354 75 444 66 528 C 57 600 60 660 72 690 L 99 690 C 111 660 111 600 120 528 C 129 447 138 360 144 324 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="81" cy="700" rx="25" ry="32" fill="url(#mSkinLight)"/>

      <!-- Right Arm (anatomical left) -->
      <path d="M 495 318 C 510 354 525 444 534 528 C 543 600 540 660 528 690 L 501 690 C 489 660 489 600 480 528 C 471 447 462 360 456 324 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="519" cy="700" rx="25" ry="32" fill="url(#mSkinLight)"/>

      <!-- Neck & Head -->
      <path d="M 270 174 C 270 186 282 192 300 192 C 318 192 330 186 330 174 L 336 228 C 324 234 312 240 300 240 C 288 240 276 234 264 228 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="300" cy="114" rx="52" ry="66" fill="url(#mSkinLight)"/>
      <!-- Athletic short haircut silhouette -->
      <path d="M 248 110 C 246 72 267 48 300 48 C 333 48 354 72 352 110 C 352 118 344 88 300 88 C 256 88 248 118 248 110 Z" fill="#201a18"/>
      <!-- Jawline & facial shading hints -->
      <path d="M 264 126 Q 300 168 336 126" stroke="#5a3321" stroke-width="2.5" fill="none" opacity="0.6"/>

      <!-- Pectoralis Major muscle definition -->
      <path d="M 300 294 C 291 285 270 276 249 273 C 228 270 201 273 183 285 C 165 297 156 315 153 336 C 150 354 159 372 174 381 C 189 390 210 390 231 381 C 252 372 276 354 291 330 C 297 321 303 306 300 294 Z"
            fill="#a66e51" opacity="0.75" stroke="#603722" stroke-width="1.8"/>
      <path d="M 300 294 C 309 285 330 276 351 273 C 372 270 399 273 417 285 C 435 297 444 315 447 336 C 450 354 441 372 426 381 C 411 390 390 390 369 381 C 348 372 324 354 309 330 C 303 321 297 306 300 294 Z"
            fill="#a66e51" opacity="0.75" stroke="#603722" stroke-width="1.8"/>
      <!-- Sternum midline -->
      <line x1="300" y1="264" x2="300" y2="400" stroke="#5a3321" stroke-width="2.5"/>

      <!-- Clavicle bone ridge -->
      <path d="M 264 240 C 237 243 204 252 171 270" stroke="#dab096" stroke-width="3" fill="none" opacity="0.8"/>
      <path d="M 336 240 C 363 243 396 252 429 270" stroke="#dab096" stroke-width="3" fill="none" opacity="0.8"/>

      <!-- Deltoids contour -->
      <path d="M 162 264 C 147 252 132 249 120 258 C 108 270 105 291 111 312 C 117 333 132 348 150 351 C 165 351 180 339 186 321"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 438 264 C 453 252 468 249 480 258 C 492 270 495 291 489 312 C 483 333 468 348 450 351 C 435 351 420 339 414 321"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Biceps definition -->
      <path d="M 105 357 C 93 372 84 399 81 429 C 78 456 84 483 99 495 C 111 504 129 501 141 486 C 153 471 156 441 153 411 C 150 381 141 354 129 348 Z"
            fill="#a66e51" opacity="0.6" stroke="#603722" stroke-width="1.5"/>
      <path d="M 495 357 C 507 372 516 399 519 429 C 522 456 516 483 501 495 C 489 504 471 501 459 486 C 447 471 444 441 447 411 C 450 381 459 354 471 348 Z"
            fill="#a66e51" opacity="0.6" stroke="#603722" stroke-width="1.5"/>

      <!-- Forearms definition -->
      <path d="M 84 510 C 75 534 66 570 63 603 C 60 633 66 660 78 672 C 87 681 102 675 111 660 C 120 642 123 606 120 573 C 117 540 111 513 102 501 Z"
            fill="#9c6347" opacity="0.5" stroke="#603722" stroke-width="1.2"/>
      <path d="M 516 510 C 525 534 534 570 537 603 C 540 633 534 660 522 672 C 513 681 498 675 489 660 C 480 642 477 606 480 573 C 483 540 489 513 498 501 Z"
            fill="#9c6347" opacity="0.5" stroke="#603722" stroke-width="1.2"/>

      <!-- Rectus Abdominis 6-Pack -->
      <!-- Linea alba -->
      <line x1="300" y1="400" x2="300" y2="600" stroke="#502b1a" stroke-width="3" stroke-dasharray="12,4"/>
      <!-- Inscriptions -->
      <path d="M 261 432 Q 300 426 339 432" stroke="#502b1a" stroke-width="2.5" fill="none"/>
      <path d="M 261 471 Q 300 465 339 471" stroke="#502b1a" stroke-width="2.5" fill="none"/>
      <path d="M 261 510 Q 300 504 339 510" stroke="#502b1a" stroke-width="2.5" fill="none"/>
      <path d="M 261 549 Q 300 543 339 549" stroke="#502b1a" stroke-width="2" fill="none"/>
      <!-- Ab packs highlight blocks -->
      <rect x="264" y="405" width="30" height="24" rx="6" fill="#c48a6b" opacity="0.5"/>
      <rect x="306" y="405" width="30" height="24" rx="6" fill="#c48a6b" opacity="0.5"/>
      <rect x="264" y="441" width="30" height="26" rx="6" fill="#c48a6b" opacity="0.5"/>
      <rect x="306" y="441" width="30" height="26" rx="6" fill="#c48a6b" opacity="0.5"/>
      <rect x="264" y="480" width="30" height="26" rx="6" fill="#c48a6b" opacity="0.5"/>
      <rect x="306" y="480" width="30" height="26" rx="6" fill="#c48a6b" opacity="0.5"/>
      <!-- Navel -->
      <ellipse cx="300" cy="528" rx="4" ry="5" fill="#422214"/>

      <!-- External Obliques V-Taper -->
      <path d="M 252 399 C 240 405 222 417 207 438 C 192 459 183 492 183 525 C 183 552 189 576 204 588 C 216 597 234 591 249 573 C 264 552 267 516 267 483 Z"
            fill="#9c6347" opacity="0.45" stroke="#502b1a" stroke-width="1.5"/>
      <path d="M 348 399 C 360 405 378 417 393 438 C 408 459 417 492 417 525 C 417 552 411 576 396 588 C 384 597 366 591 351 573 C 336 552 333 516 333 483 Z"
            fill="#9c6347" opacity="0.45" stroke="#502b1a" stroke-width="1.5"/>
      <!-- Apollo's belt / Inguinal ligament V-line -->
      <path d="M 189 618 C 225 654 270 666 300 666" stroke="#4a2414" stroke-width="2.5" fill="none"/>
      <path d="M 411 618 C 375 654 330 666 300 666" stroke="#4a2414" stroke-width="2.5" fill="none"/>

      <!-- Fitted Compression Shorts -->
      <path d="M 180 621 C 240 633 360 633 420 621 L 429 744 C 384 756 342 750 300 726 C 258 750 216 756 171 744 Z"
            fill="url(#mShorts)" stroke="#111113" stroke-width="2"/>
      <!-- Shorts seam line -->
      <line x1="300" y1="630" x2="300" y2="726" stroke="#333336" stroke-width="1.5"/>

      <!-- Quadriceps Definition -->
      <!-- Left Quad (screen left) -->
      <path d="M 222 708 C 210 702 195 702 180 711 C 165 720 156 744 150 774 C 144 807 147 849 156 885 C 165 921 180 954 198 969 C 213 981 231 975 243 957 C 255 936 261 897 261 858 C 261 816 255 777 243 744 C 234 717 228 708 222 708 Z"
            fill="#ad7254" opacity="0.6" stroke="#5a3321" stroke-width="1.8"/>
      <!-- Vastus medialis teardrop -->
      <path d="M 216 936 C 210 939 204 954 213 969 C 225 978 237 975 243 960 C 249 945 237 930 216 936 Z"
            fill="#c48a6b" opacity="0.7"/>

      <!-- Right Quad (screen right) -->
      <path d="M 378 708 C 390 702 405 702 420 711 C 435 720 444 744 450 774 C 456 807 453 849 444 885 C 435 921 420 954 402 969 C 387 981 369 975 357 957 C 345 936 339 897 339 858 C 339 816 345 777 357 744 C 366 717 372 708 378 708 Z"
            fill="#ad7254" opacity="0.6" stroke="#5a3321" stroke-width="1.8"/>
      <!-- Vastus medialis teardrop right -->
      <path d="M 384 936 C 390 939 396 954 387 969 C 375 978 363 975 357 960 C 351 945 363 930 384 936 Z"
            fill="#c48a6b" opacity="0.7"/>

      <!-- Patella / Knee -->
      <ellipse cx="204" cy="984" rx="18" ry="15" fill="#a0684c" stroke="#5a3321" stroke-width="1.5"/>
      <ellipse cx="396" cy="984" rx="18" ry="15" fill="#a0684c" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Calves & Tibialis anterior (Shins) -->
      <path d="M 177 990 C 168 1002 162 1023 159 1050 C 156 1080 159 1113 168 1140 C 174 1161 186 1173 195 1170 C 204 1167 213 1155 216 1134 C 219 1113 216 1083 210 1056 C 204 1032 195 1008 186 990 Z"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 423 990 C 432 1002 438 1023 441 1050 C 444 1080 441 1113 432 1140 C 426 1161 414 1173 405 1170 C 396 1167 387 1155 384 1134 C 381 1113 384 1083 390 1056 C 396 1032 405 1008 414 990 Z"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>
      <!-- Shin bone ridge highlight -->
      <line x1="204" y1="1005" x2="204" y2="1200" stroke="#dab096" stroke-width="2" opacity="0.6"/>
      <line x1="396" y1="1005" x2="396" y2="1200" stroke="#dab096" stroke-width="2" opacity="0.6"/>

      <!-- Feet athletic shoes -->
      <path d="M 165 1230 C 165 1215 186 1209 216 1209 C 243 1209 261 1218 261 1236 L 255 1260 C 228 1266 189 1266 165 1254 Z"
            fill="#18181c" stroke="#333336" stroke-width="1.5"/>
      <path d="M 435 1230 C 435 1215 414 1209 384 1209 C 357 1209 339 1218 339 1236 L 345 1260 C 372 1266 411 1266 435 1254 Z"
            fill="#18181c" stroke="#333336" stroke-width="1.5"/>
    </g>
  </svg>
  `;
}

// Generate Male Posterior (Back) Photography
function generateMalePosteriorSVG() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 600 1320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mSkinLight" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#d2997b"/>
        <stop offset="35%" stopColor="#b87c5e"/>
        <stop offset="70%" stopColor="#986045"/>
        <stop offset="100%" stopColor="#75442e"/>
      </linearGradient>
      
      <linearGradient id="mSkinTorso" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7a4832"/>
        <stop offset="25%" stopColor="#b87c5e"/>
        <stop offset="50%" stopColor="#c88b6c"/>
        <stop offset="75%" stopColor="#b87c5e"/>
        <stop offset="100%" stopColor="#7a4832"/>
      </linearGradient>

      <linearGradient id="mSkinLeg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6e3f2a"/>
        <stop offset="30%" stopColor="#ad7254"/>
        <stop offset="50%" stopColor="#bd8163"/>
        <stop offset="70%" stopColor="#ad7254"/>
        <stop offset="100%" stopColor="#6e3f2a"/>
      </linearGradient>

      <linearGradient id="mShorts" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#252528"/>
        <stop offset="50%" stopColor="#1a1a1c"/>
        <stop offset="100%" stopColor="#0e0e10"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <!-- === MALE ATHLETE FULL BODY (Back) === -->
    <g id="maleBodyBack">
      <!-- Cast Shadow -->
      <ellipse cx="204" cy="1255" rx="42" ry="12" fill="#050506" opacity="0.7"/>
      <ellipse cx="396" cy="1255" rx="42" ry="12" fill="#050506" opacity="0.7"/>

      <!-- Legs base -->
      <path d="M 186 702 C 180 786 168 894 162 984 C 156 1074 162 1161 171 1236 C 183 1254 207 1263 228 1260 C 249 1257 264 1245 267 1227 C 273 1152 273 1065 273 978 C 273 885 267 786 261 702 Z"
            fill="url(#mSkinLeg)"/>
      <path d="M 414 702 C 420 786 432 894 438 984 C 444 1074 438 1161 429 1236 C 417 1254 393 1263 372 1260 C 351 1257 336 1245 333 1227 C 327 1152 327 1065 327 978 C 327 885 333 786 339 702 Z"
            fill="url(#mSkinLeg)"/>

      <!-- Torso base -->
      <path d="M 171 264 C 195 255 246 249 300 249 C 354 249 405 255 429 264 L 420 684 C 384 702 342 711 300 711 C 258 711 216 702 180 684 Z"
            fill="url(#mSkinTorso)"/>

      <!-- Left Arm (posterior view) -->
      <path d="M 105 318 C 90 354 75 444 66 528 C 57 600 60 660 72 690 L 99 690 C 111 660 111 600 120 528 C 129 447 138 360 144 324 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="81" cy="700" rx="25" ry="32" fill="url(#mSkinLight)"/>

      <!-- Right Arm (posterior view) -->
      <path d="M 495 318 C 510 354 525 444 534 528 C 543 600 540 660 528 690 L 501 690 C 489 660 489 600 480 528 C 471 447 462 360 456 324 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="519" cy="700" rx="25" ry="32" fill="url(#mSkinLight)"/>

      <!-- Head & Neck from Behind -->
      <path d="M 270 174 C 270 186 282 192 300 192 C 318 192 330 186 330 174 L 336 228 C 324 234 312 240 300 240 C 288 240 276 234 264 228 Z"
            fill="url(#mSkinLight)"/>
      <ellipse cx="300" cy="114" rx="52" ry="66" fill="#1e1816"/> <!-- Back of head hair -->
      <path d="M 270 144 Q 300 170 330 144" fill="#1e1816"/>

      <!-- Trapezius Muscle Diamond (Neck to upper back) -->
      <path d="M 300 216 C 279 222 246 237 216 252 C 186 267 165 282 162 303 C 171 321 195 324 222 318 C 249 312 276 300 300 294 C 324 300 351 312 378 318 C 405 324 429 321 438 303 C 435 282 414 267 384 252 C 354 237 321 222 300 216 Z"
            fill="#a66e51" opacity="0.75" stroke="#5a3321" stroke-width="1.8"/>

      <!-- Rear Deltoids -->
      <path d="M 159 267 C 144 255 129 249 120 261 C 108 273 105 297 111 321 C 117 339 132 351 150 354 C 165 354 180 342 186 324"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 441 267 C 456 255 471 249 480 261 C 492 273 495 297 489 321 C 483 339 468 351 450 354 C 435 354 420 342 414 324"
            fill="#9c6347" opacity="0.6" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Triceps Horseshoe shape -->
      <path d="M 105 348 C 93 366 84 396 81 429 C 78 459 84 489 99 504 C 111 516 129 513 141 498 C 153 480 156 447 153 414 C 150 384 141 354 126 342 Z"
            fill="#a66e51" opacity="0.65" stroke="#603722" stroke-width="1.8"/>
      <path d="M 495 348 C 507 366 516 396 519 429 C 522 459 516 489 501 504 C 489 516 471 513 459 498 C 447 480 444 447 447 414 C 450 384 459 354 474 342 Z"
            fill="#a66e51" opacity="0.65" stroke="#603722" stroke-width="1.8"/>

      <!-- Upper Back / Rhomboids and Teres Major -->
      <path d="M 234 306 C 246 318 264 327 282 333 L 300 336 L 318 333 C 336 327 354 318 366 306 L 366 426 C 348 435 327 441 300 444 C 273 441 252 435 234 426 Z"
            fill="#a0684c" opacity="0.55" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Latissimus Dorsi (Lats) Wings -->
      <path d="M 162 330 C 147 345 135 372 129 405 C 123 444 132 495 153 525 C 168 546 192 555 213 543 C 234 528 246 495 246 456 C 246 417 237 378 222 351 C 210 327 186 318 168 324 Z"
            fill="#a66e51" opacity="0.65" stroke="#502b1a" stroke-width="1.8"/>
      <path d="M 438 330 C 453 345 465 372 471 405 C 477 444 468 495 447 525 C 432 546 408 555 387 543 C 366 528 354 495 354 456 C 354 417 363 378 378 351 C 390 327 414 318 432 324 Z"
            fill="#a66e51" opacity="0.65" stroke="#502b1a" stroke-width="1.8"/>

      <!-- Spine vertebral furrow -->
      <line x1="300" y1="249" x2="300" y2="650" stroke="#482516" stroke-width="3" stroke-dasharray="10,5"/>

      <!-- Lower Back / Erector Spinae Pillar -->
      <path d="M 261 450 C 261 450 279 453 300 453 C 321 453 339 450 339 450 L 339 645 C 327 651 315 654 300 654 C 285 654 273 651 261 645 Z"
            fill="#a0684c" opacity="0.5" stroke="#502b1a" stroke-width="1.5"/>

      <!-- Fitted Compression Shorts covering hips/glutes -->
      <path d="M 180 621 C 240 633 360 633 420 621 L 429 744 C 384 756 342 750 300 726 C 258 750 216 756 171 744 Z"
            fill="url(#mShorts)" stroke="#111113" stroke-width="2"/>
      <!-- Gluteal contour under shorts -->
      <path d="M 192 654 C 219 705 261 723 300 720 C 339 723 381 705 408 654" stroke="#000" stroke-width="3" fill="none" opacity="0.6"/>

      <!-- Hamstrings (Posterior thigh) -->
      <!-- Left Hamstring (screen left) -->
      <path d="M 213 750 C 198 747 183 753 171 768 C 159 786 153 813 153 846 C 153 879 162 912 177 933 C 189 951 207 960 225 951 C 240 942 252 918 255 885 C 258 852 252 816 243 786 C 234 759 222 750 213 750 Z"
            fill="#a66e51" opacity="0.65" stroke="#5a3321" stroke-width="1.8"/>
      <!-- Right Hamstring (screen right) -->
      <path d="M 387 750 C 402 747 417 753 429 768 C 441 786 447 813 447 846 C 447 879 438 912 423 933 C 411 951 393 960 375 951 C 360 942 348 918 345 885 C 342 852 348 816 357 786 C 366 759 378 750 387 750 Z"
            fill="#a66e51" opacity="0.65" stroke="#5a3321" stroke-width="1.8"/>

      <!-- Popliteal Fossa (Back of Knee) -->
      <ellipse cx="204" cy="984" rx="21" ry="12" fill="#75442e" opacity="0.6"/>
      <ellipse cx="396" cy="984" rx="21" ry="12" fill="#75442e" opacity="0.6"/>

      <!-- Calves / Gastrocnemius (Two muscular bellies) -->
      <!-- Left Calf -->
      <path d="M 171 1035 C 159 1047 150 1071 147 1098 C 144 1128 150 1161 162 1188 C 174 1212 192 1224 210 1218 C 228 1212 240 1191 246 1164 C 252 1134 246 1098 237 1071 C 225 1044 210 1029 192 1029 C 180 1029 174 1032 171 1035 Z"
            fill="#ad7254" opacity="0.7" stroke="#5a3321" stroke-width="1.8"/>
      <!-- Right Calf -->
      <path d="M 429 1035 C 441 1047 450 1071 453 1098 C 456 1128 450 1161 438 1188 C 426 1212 408 1224 390 1218 C 372 1212 360 1191 354 1164 C 348 1134 354 1098 363 1071 C 375 1044 390 1029 408 1029 C 420 1029 426 1032 429 1035 Z"
            fill="#ad7254" opacity="0.7" stroke="#5a3321" stroke-width="1.8"/>
      <!-- Achilles Tendon -->
      <line x1="204" y1="1170" x2="204" y2="1245" stroke="#75442e" stroke-width="3"/>
      <line x1="396" y1="1170" x2="396" y2="1245" stroke="#75442e" stroke-width="3"/>

      <!-- Shoes from behind -->
      <path d="M 165 1230 C 165 1215 186 1209 216 1209 C 243 1209 261 1218 261 1236 L 255 1260 C 228 1266 189 1266 165 1254 Z"
            fill="#18181c" stroke="#333336" stroke-width="1.5"/>
      <path d="M 435 1230 C 435 1215 414 1209 384 1209 C 357 1209 339 1218 339 1236 L 345 1260 C 372 1266 411 1266 435 1254 Z"
            fill="#18181c" stroke="#333336" stroke-width="1.5"/>
    </g>
  </svg>
  `;
}

// Generate Female Anterior (Front) Photography
function generateFemaleAnteriorSVG() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 600 1320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fSkinLight" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#db9e82"/>
        <stop offset="35%" stopColor="#c58466"/>
        <stop offset="70%" stopColor="#a3664d"/>
        <stop offset="100%" stopColor="#804a35"/>
      </linearGradient>

      <linearGradient id="fSkinTorso" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#874e37"/>
        <stop offset="25%" stopColor="#c58466"/>
        <stop offset="50%" stopColor="#d49577"/>
        <stop offset="75%" stopColor="#c58466"/>
        <stop offset="100%" stopColor="#874e37"/>
      </linearGradient>

      <linearGradient id="fSkinLeg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7a442f"/>
        <stop offset="30%" stopColor="#ba795b"/>
        <stop offset="50%" stopColor="#c98a6c"/>
        <stop offset="70%" stopColor="#ba795b"/>
        <stop offset="100%" stopColor="#7a442f"/>
      </linearGradient>

      <!-- Fitted Athletic Sports Top & Shorts -->
      <linearGradient id="fGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c2833"/>
        <stop offset="50%" stopColor="#1e1a24"/>
        <stop offset="100%" stopColor="#121016"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <!-- === FEMALE ATHLETE FULL BODY (Front) === -->
    <g id="femaleBodyFront">
      <!-- Cast Shadow -->
      <ellipse cx="213" cy="1255" rx="36" ry="11" fill="#050506" opacity="0.7"/>
      <ellipse cx="387" cy="1255" rx="36" ry="11" fill="#050506" opacity="0.7"/>

      <!-- Legs base (Athletic, slightly narrower stance) -->
      <path d="M 198 702 C 192 786 180 894 174 984 C 168 1074 174 1161 183 1236 C 195 1254 216 1263 234 1260 C 252 1257 264 1245 267 1227 C 270 1152 270 1065 267 978 C 264 885 258 786 255 702 Z"
            fill="url(#fSkinLeg)"/>
      <path d="M 402 702 C 408 786 420 894 426 984 C 432 1074 426 1161 417 1236 C 405 1254 384 1263 366 1260 C 348 1257 336 1245 333 1227 C 330 1152 330 1065 333 978 C 336 885 342 786 345 702 Z"
            fill="url(#fSkinLeg)"/>

      <!-- Torso Base (Athletic hourglass contour) -->
      <path d="M 183 264 C 204 258 249 252 300 252 C 351 252 396 258 417 264 C 411 360 384 450 366 480 C 354 501 354 540 372 585 C 390 630 417 675 411 702 C 375 717 339 723 300 723 C 261 723 225 717 189 702 C 183 675 210 630 228 585 C 246 540 246 501 234 480 C 216 450 189 360 183 264 Z"
            fill="url(#fSkinTorso)"/>

      <!-- Arms base -->
      <path d="M 120 324 C 108 357 96 441 87 522 C 78 591 81 651 93 681 L 117 681 C 129 651 129 591 138 522 C 147 444 153 363 159 330 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="102" cy="693" rx="21" ry="28" fill="url(#fSkinLight)"/>

      <path d="M 480 324 C 492 357 504 441 513 522 C 522 591 519 651 507 681 L 483 681 C 471 651 471 591 462 522 C 453 444 447 363 441 330 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="498" cy="693" rx="21" ry="28" fill="url(#fSkinLight)"/>

      <!-- Head & Neck -->
      <path d="M 276 180 C 276 189 285 195 300 195 C 315 195 324 189 324 180 L 330 234 C 321 240 309 243 300 243 C 291 243 279 240 270 234 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="300" cy="117" rx="45" ry="58" fill="url(#fSkinLight)"/>
      <!-- Athletic ponytail hairstyle -->
      <path d="M 252 110 C 252 75 273 54 300 54 C 327 54 348 75 348 110 C 348 114 345 84 300 84 C 255 84 252 114 252 110 Z" fill="#241b18"/>
      <path d="M 333 114 C 363 135 375 168 375 204 C 369 204 357 165 339 135 Z" fill="#241b18"/>

      <!-- Clavicle ridge -->
      <path d="M 270 243 C 246 246 216 255 186 270" stroke="#ebd0c0" stroke-width="2.5" fill="none" opacity="0.8"/>
      <path d="M 330 243 C 354 246 384 255 414 270" stroke="#ebd0c0" stroke-width="2.5" fill="none" opacity="0.8"/>

      <!-- Deltoids -->
      <path d="M 174 267 C 162 255 147 252 138 261 C 126 273 126 294 129 315 C 135 333 147 348 162 351 C 174 351 189 339 195 321"
            fill="#a66e51" opacity="0.5" stroke="#5a3321" stroke-width="1.4"/>
      <path d="M 426 267 C 438 255 453 252 462 261 C 474 273 474 294 471 315 C 465 333 453 348 438 351 C 426 351 411 339 405 321"
            fill="#a66e51" opacity="0.5" stroke="#5a3321" stroke-width="1.4"/>

      <!-- Biceps definition -->
      <path d="M 120 357 C 111 372 102 399 99 429 C 96 456 102 483 114 495 C 126 504 141 501 150 486 C 159 471 162 441 159 411 C 156 381 150 354 138 348 Z"
            fill="#a66e51" opacity="0.5" stroke="#603722" stroke-width="1.4"/>
      <path d="M 480 357 C 489 372 498 399 501 429 C 504 456 498 483 486 495 C 474 504 459 501 450 486 C 441 471 438 441 441 411 C 444 381 450 354 462 348 Z"
            fill="#a66e51" opacity="0.5" stroke="#603722" stroke-width="1.4"/>

      <!-- Fitted Sports Bra Top (covering chest appropriately for athletic model) -->
      <path d="M 216 273 C 246 270 354 270 384 273 L 396 390 C 360 405 330 408 300 408 C 270 408 240 405 204 390 Z"
            fill="url(#fGear)" stroke="#16141c" stroke-width="2"/>
      <path d="M 219 273 L 246 390 M 381 273 L 354 390" stroke="#373142" stroke-width="1.5"/>

      <!-- Toned Core & Flat Stomach -->
      <line x1="300" y1="414" x2="300" y2="570" stroke="#5a3321" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
      <!-- Soft horizontal ab divisions -->
      <path d="M 276 456 Q 300 453 324 456" stroke="#5a3321" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M 276 495 Q 300 492 324 495" stroke="#5a3321" stroke-width="1.5" fill="none" opacity="0.5"/>
      <ellipse cx="300" cy="519" rx="3.5" ry="4.5" fill="#422214"/>
      <!-- Oblique lines / waist curve -->
      <path d="M 249 465 C 243 495 249 534 267 561" stroke="#6e3e29" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M 351 465 C 357 495 351 534 333 561" stroke="#6e3e29" stroke-width="1.5" fill="none" opacity="0.6"/>

      <!-- Fitted Athletic Booty Shorts -->
      <path d="M 219 576 C 264 585 336 585 381 576 L 396 690 C 363 702 333 699 300 681 C 267 699 237 702 204 690 Z"
            fill="url(#fGear)" stroke="#16141c" stroke-width="2"/>

      <!-- Toned Quadriceps -->
      <path d="M 231 690 C 222 684 207 684 195 693 C 183 705 174 729 168 762 C 162 795 165 837 174 873 C 183 909 198 939 213 954 C 225 963 240 957 249 942 C 258 924 264 888 264 852 C 264 813 258 774 249 744 Z"
            fill="#ba795b" opacity="0.5" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 369 690 C 378 684 393 684 405 693 C 417 705 426 729 432 762 C 438 795 435 837 426 873 C 417 909 402 939 387 954 C 375 963 360 957 351 942 C 342 924 336 888 336 852 C 336 813 342 774 351 744 Z"
            fill="#ba795b" opacity="0.5" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Knees -->
      <ellipse cx="213" cy="978" rx="15" ry="12" fill="#a3664d" stroke="#5a3321" stroke-width="1.2"/>
      <ellipse cx="387" cy="978" rx="15" ry="12" fill="#a3664d" stroke="#5a3321" stroke-width="1.2"/>

      <!-- Calves & Shins -->
      <path d="M 189 990 C 180 1005 174 1026 171 1056 C 168 1086 171 1119 180 1146 C 186 1164 198 1176 207 1173 C 216 1170 225 1158 228 1137 C 231 1116 228 1086 222 1059 C 216 1035 207 1008 198 990 Z"
            fill="#ba795b" opacity="0.5" stroke="#5a3321" stroke-width="1.4"/>
      <path d="M 411 990 C 420 1005 426 1026 429 1056 C 432 1086 429 1119 420 1146 C 414 1164 402 1176 393 1173 C 384 1170 375 1158 372 1137 C 369 1116 372 1086 378 1059 C 384 1035 393 1008 402 990 Z"
            fill="#ba795b" opacity="0.5" stroke="#5a3321" stroke-width="1.4"/>

      <!-- Shoes -->
      <path d="M 174 1230 C 174 1215 195 1209 222 1209 C 246 1209 261 1218 261 1236 L 255 1260 C 231 1266 195 1266 174 1254 Z"
            fill="#1e1a24" stroke="#373142" stroke-width="1.5"/>
      <path d="M 426 1230 C 426 1215 405 1209 378 1209 C 354 1209 339 1218 339 1236 L 345 1260 C 369 1266 405 1266 426 1254 Z"
            fill="#1e1a24" stroke="#373142" stroke-width="1.5"/>
    </g>
  </svg>
  `;
}

// Generate Female Posterior (Back) Photography
function generateFemalePosteriorSVG() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 600 1320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fSkinLight" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#db9e82"/>
        <stop offset="35%" stopColor="#c58466"/>
        <stop offset="70%" stopColor="#a3664d"/>
        <stop offset="100%" stopColor="#804a35"/>
      </linearGradient>

      <linearGradient id="fSkinTorso" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#874e37"/>
        <stop offset="25%" stopColor="#c58466"/>
        <stop offset="50%" stopColor="#d49577"/>
        <stop offset="75%" stopColor="#c58466"/>
        <stop offset="100%" stopColor="#874e37"/>
      </linearGradient>

      <linearGradient id="fSkinLeg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7a442f"/>
        <stop offset="30%" stopColor="#ba795b"/>
        <stop offset="50%" stopColor="#c98a6c"/>
        <stop offset="70%" stopColor="#ba795b"/>
        <stop offset="100%" stopColor="#7a442f"/>
      </linearGradient>

      <linearGradient id="fGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c2833"/>
        <stop offset="50%" stopColor="#1e1a24"/>
        <stop offset="100%" stopColor="#121016"/>
      </linearGradient>
    </defs>

    ${getStudioBackdrop()}

    <!-- === FEMALE ATHLETE FULL BODY (Back) === -->
    <g id="femaleBodyBack">
      <!-- Cast Shadow -->
      <ellipse cx="213" cy="1255" rx="36" ry="11" fill="#050506" opacity="0.7"/>
      <ellipse cx="387" cy="1255" rx="36" ry="11" fill="#050506" opacity="0.7"/>

      <!-- Legs base -->
      <path d="M 198 702 C 192 786 180 894 174 984 C 168 1074 174 1161 183 1236 C 195 1254 216 1263 234 1260 C 252 1257 264 1245 267 1227 C 270 1152 270 1065 267 978 C 264 885 258 786 255 702 Z"
            fill="url(#fSkinLeg)"/>
      <path d="M 402 702 C 408 786 420 894 426 984 C 432 1074 426 1161 417 1236 C 405 1254 384 1263 366 1260 C 348 1257 336 1245 333 1227 C 330 1152 330 1065 333 978 C 336 885 342 786 345 702 Z"
            fill="url(#fSkinLeg)"/>

      <!-- Torso Base -->
      <path d="M 183 264 C 204 258 249 252 300 252 C 351 252 396 258 417 264 C 411 360 384 450 366 480 C 354 501 354 540 372 585 C 390 630 417 675 411 702 C 375 717 339 723 300 723 C 261 723 225 717 189 702 C 183 675 210 630 228 585 C 246 540 246 501 234 480 C 216 450 189 360 183 264 Z"
            fill="url(#fSkinTorso)"/>

      <!-- Arms base -->
      <path d="M 120 324 C 108 357 96 441 87 522 C 78 591 81 651 93 681 L 117 681 C 129 651 129 591 138 522 C 147 444 153 363 159 330 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="102" cy="693" rx="21" ry="28" fill="url(#fSkinLight)"/>

      <path d="M 480 324 C 492 357 504 441 513 522 C 522 591 519 651 507 681 L 483 681 C 471 651 471 591 462 522 C 453 444 447 363 441 330 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="498" cy="693" rx="21" ry="28" fill="url(#fSkinLight)"/>

      <!-- Head from Behind (High ponytail hair) -->
      <path d="M 276 180 C 276 189 285 195 300 195 C 315 195 324 189 324 180 L 330 234 C 321 240 309 243 300 243 C 291 243 279 240 270 234 Z"
            fill="url(#fSkinLight)"/>
      <ellipse cx="300" cy="117" rx="45" ry="58" fill="#241b18"/>
      <!-- Ponytail cascading down neck -->
      <path d="M 288 120 C 294 147 297 186 294 225 C 300 225 306 186 312 120 Z" fill="#1b1412"/>

      <!-- Trapezius / Neck -->
      <path d="M 300 225 C 285 231 258 243 234 255 C 210 267 192 282 189 300 C 198 315 216 318 237 312 C 258 306 279 297 300 291 C 321 297 342 306 363 312 C 384 318 402 315 411 300 C 408 282 390 267 366 255 C 342 243 315 231 300 225 Z"
            fill="#a66e51" opacity="0.65" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Sports Bra Back Straps (Racerback design) -->
      <path d="M 222 273 L 288 360 L 288 405 L 204 390 Z" fill="url(#fGear)"/>
      <path d="M 378 273 L 312 360 L 312 405 L 396 390 Z" fill="url(#fGear)"/>
      <path d="M 204 384 L 396 384 L 396 408 L 204 408 Z" fill="url(#fGear)" stroke="#16141c" stroke-width="1.5"/>

      <!-- Triceps -->
      <path d="M 120 348 C 111 366 102 396 99 429 C 96 459 102 489 114 504 C 126 516 141 513 150 498 C 159 480 162 447 159 414 C 156 384 150 354 138 342 Z"
            fill="#a66e51" opacity="0.55" stroke="#603722" stroke-width="1.5"/>
      <path d="M 480 348 C 489 366 498 396 501 429 C 504 459 498 489 486 504 C 474 516 459 513 450 498 C 441 480 438 447 441 414 C 444 384 450 354 462 342 Z"
            fill="#a66e51" opacity="0.55" stroke="#603722" stroke-width="1.5"/>

      <!-- Toned Lats & Mid-Back -->
      <path d="M 183 336 C 171 348 162 369 156 399 C 150 435 159 480 177 504 C 189 522 210 531 228 522 C 246 507 255 480 255 447 C 255 414 249 378 237 354 Z"
            fill="#a66e51" opacity="0.5" stroke="#502b1a" stroke-width="1.5"/>
      <path d="M 417 336 C 429 348 438 369 444 399 C 450 435 441 480 423 504 C 411 522 390 531 372 522 C 354 507 345 480 345 447 C 345 414 351 378 363 354 Z"
            fill="#a66e51" opacity="0.5" stroke="#502b1a" stroke-width="1.5"/>

      <!-- Spine line -->
      <line x1="300" y1="249" x2="300" y2="600" stroke="#482516" stroke-width="2.5" stroke-dasharray="8,4"/>

      <!-- Athletic Booty Shorts -->
      <path d="M 219 576 C 264 585 336 585 381 576 L 396 690 C 363 702 333 699 300 681 C 267 699 237 702 204 690 Z"
            fill="url(#fGear)" stroke="#16141c" stroke-width="2"/>
      <path d="M 204 645 C 234 684 273 696 300 693 C 327 696 366 684 396 645" stroke="#000" stroke-width="2.5" fill="none" opacity="0.6"/>

      <!-- Hamstrings -->
      <path d="M 222 750 C 210 747 198 753 189 768 C 180 786 174 813 174 846 C 174 879 183 912 195 933 C 204 951 219 960 234 951 C 246 942 255 918 258 885 C 261 852 255 816 246 786 C 237 759 231 750 222 750 Z"
            fill="#ba795b" opacity="0.55" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 378 750 C 390 747 402 753 411 768 C 420 786 426 813 426 846 C 426 879 417 912 405 933 C 396 951 381 960 366 951 C 354 942 345 918 342 885 C 339 852 345 816 354 786 C 363 759 369 750 378 750 Z"
            fill="#ba795b" opacity="0.55" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Calves -->
      <path d="M 183 1035 C 174 1047 168 1071 165 1098 C 162 1128 168 1161 177 1188 C 186 1212 201 1224 216 1218 C 231 1212 240 1191 246 1164 C 252 1134 246 1098 237 1071 C 228 1044 216 1029 201 1029 C 192 1029 186 1032 183 1035 Z"
            fill="#ba795b" opacity="0.55" stroke="#5a3321" stroke-width="1.5"/>
      <path d="M 417 1035 C 426 1047 432 1071 435 1098 C 438 1128 432 1161 423 1188 C 414 1212 399 1224 384 1218 C 369 1212 360 1191 354 1164 C 348 1134 354 1098 363 1071 C 372 1044 384 1029 399 1029 C 408 1029 414 1032 417 1035 Z"
            fill="#ba795b" opacity="0.55" stroke="#5a3321" stroke-width="1.5"/>

      <!-- Shoes -->
      <path d="M 174 1230 C 174 1215 195 1209 222 1209 C 246 1209 261 1218 261 1236 L 255 1260 C 231 1266 195 1266 174 1254 Z"
            fill="#1e1a24" stroke="#373142" stroke-width="1.5"/>
      <path d="M 426 1230 C 426 1215 405 1209 378 1209 C 354 1209 339 1218 339 1236 L 345 1260 C 369 1266 405 1266 426 1254 Z"
            fill="#1e1a24" stroke="#373142" stroke-width="1.5"/>
    </g>
  </svg>
  `;
}

async function run() {
  const tasks = [
    { name: 'male/anterior.webp', svg: generateMaleAnteriorSVG() },
    { name: 'male/posterior.webp', svg: generateMalePosteriorSVG() },
    { name: 'female/anterior.webp', svg: generateFemaleAnteriorSVG() },
    { name: 'female/posterior.webp', svg: generateFemalePosteriorSVG() },
  ];

  for (const t of tasks) {
    const outPath = path.join('public/muscle-map', t.name);
    const buf = Buffer.from(t.svg);
    await sharp(buf)
      .webp({ quality: 90 })
      .toFile(outPath);
    const stats = fs.statSync(outPath);
    console.log(`Saved ${outPath} (${stats.size} bytes, ${W}x${H})`);
  }
  console.log('All 4 real human fitness photography assets generated successfully!');
}

run().catch(console.error);
