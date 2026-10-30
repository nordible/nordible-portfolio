import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imagesDir = path.join(rootDir, 'public', 'carousels', 'images');
const outputPdf = path.join(rootDir, 'public', 'carousels', 'bombay-studio-case-study.pdf');
const tempHtmlPath = path.join(rootDir, 'public', 'carousels', 'pdf-template.html');

const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'msedge',
  'chrome'
];

const browserPath = browserCandidates.find(cand => {
  try { return fs.existsSync(cand); } catch { return false; }
}) || 'msedge';

console.log(`Using browser: ${browserPath}`);

const slideCount = 7;
let pagesHtml = '';

for (let i = 1; i <= slideCount; i++) {
  const imagePath = path.join(imagesDir, `slide-${i}.png`);
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Missing slide image: ${imagePath}`);
  }
  const imageBase64 = fs.readFileSync(imagePath).toString('base64');
  pagesHtml += `
    <div class="page">
      <img src="data:image/png;base64,${imageBase64}" alt="Slide ${i}" />
    </div>
  `;
}

const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Nordible × Bombay Studio - Generative Engine Optimization (GEO) Case Study</title>
  <style>
    @page {
      size: 1080px 1350px;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      width: 1080px;
      height: 100%;
      margin: 0;
      padding: 0;
      background: #000000;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      width: 1080px;
      height: 1350px;
      page-break-after: always;
      break-after: page;
      position: relative;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }
    .page img {
      width: 1080px;
      height: 1350px;
      display: block;
      object-fit: cover;
    }
  </style>
</head>
<body>
  ${pagesHtml}
</body>
</html>`;

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');
console.log(`Generated PDF template at: ${tempHtmlPath}`);

console.log(`Generating multi-page PDF document...`);
const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPdf}" "${tempHtmlPath}"`;
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(outputPdf)) {
  const stats = fs.statSync(outputPdf);
  console.log(`✅ Success! Generated ${outputPdf} (${(stats.size / 1024 / 1024).toFixed(2)} MB) containing all 7 slides.`);
}
