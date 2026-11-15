/**
 * Regenerates the social preview image (public/og-image.png, 1200x630)
 * and the Apple touch icon (public/apple-touch-icon.png).
 *
 *   npm run og
 *
 * Edit the text below if your title changes.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const name = 'Kusal Sandipa';
const headline = 'Turning ideas into structured solutions.';
const role = 'Project Management Intern · Sri Lanka Telecom';
const sub = 'Software Project Management Portfolio';

const bars = [
  [0, 22, '#8ECAE6'],
  [10, 28, '#219EBC'],
  [24, 26, '#8ECAE6'],
  [34, 52, '#FFB703'],
  [46, 44, '#219EBC'],
  [70, 26, '#8ECAE6'],
]
  .map(([start, width, color], i) => {
    const x = 760 + (start / 100) * 360;
    const w = (width / 100) * 360;
    const y = 190 + i * 46;
    return `<rect x="760" y="${y}" width="360" height="28" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <rect x="${x}" y="${y}" width="${w}" height="28" rx="6" fill="${color}" fill-opacity="${color === '#8ECAE6' ? 0.8 : 1}"/>`;
  })
  .join('');

let grid = '';
for (let x = 0; x <= 1200; x += 48) grid += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="#8ECAE6" stroke-opacity="0.06"/>`;
for (let y = 0; y <= 630; y += 48) grid += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#8ECAE6" stroke-opacity="0.06"/>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="0%" r="80%">
      <stop offset="0" stop-color="#219EBC" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#023047" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#023047"/>
  ${grid}
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="72" y="72" width="64" height="64" rx="14" fill="#219EBC" fill-opacity="0.25" stroke="#8ECAE6" stroke-opacity="0.4"/>
  <text x="104" y="114" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="26" fill="#8ECAE6">KS</text>
  <circle cx="134" cy="74" r="7" fill="#FFB703"/>
  <text x="156" y="113" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="28" fill="#ffffff">${name}</text>
  <text x="72" y="250" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="58" fill="#ffffff" letter-spacing="-1.5">Turning ideas into</text>
  <text x="72" y="320" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="58" fill="#ffffff" letter-spacing="-1.5">structured solutions.</text>
  <rect x="72" y="336" width="290" height="8" rx="4" fill="#FFB703"/>
  <text x="72" y="410" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="26" fill="#8ECAE6">${role}</text>
  <text x="72" y="452" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="#ffffff" fill-opacity="0.7">BSc (Hons) IT for Business Undergraduate</text>
  <text x="72" y="560" font-family="Consolas, monospace" font-size="18" fill="#8ECAE6" fill-opacity="0.8" letter-spacing="3">${sub.toUpperCase()}</text>
  <text x="760" y="168" font-family="Consolas, monospace" font-size="15" fill="#8ECAE6" fill-opacity="0.8" letter-spacing="3">IDEA → STRUCTURE</text>
  ${bars}
</svg>`;

void headline;
const render = (svg, width) => new Resvg(svg, { fitTo: { mode: 'width', value: width }, font: { loadSystemFonts: true } }).render().asPng();

writeFileSync(new URL('../public/og-image.png', import.meta.url), render(og, 1200));

const favicon = readFileSync(new URL('../public/favicon.svg', import.meta.url), 'utf8');
writeFileSync(new URL('../public/apple-touch-icon.png', import.meta.url), render(favicon, 180));

console.log('Wrote public/og-image.png and public/apple-touch-icon.png');
