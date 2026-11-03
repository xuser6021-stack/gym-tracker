import sharp from 'sharp';

const svg = `
<svg width="600" height="1320" viewBox="0 0 600 1320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0"/>
      <feBlend in="SourceGraphic" in2="noise" mode="multiply"/>
    </filter>
  </defs>
  <rect width="600" height="1320" fill="#141418"/>
  <circle cx="300" cy="600" r="200" fill="#c68662" filter="url(#grain)"/>
</svg>
`;

sharp(Buffer.from(svg))
  .webp({ quality: 92 })
  .toBuffer()
  .then(b => console.log('Successfully rendered with grain filter! Size:', b.length))
  .catch(console.error);
