import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputHtml = path.join(rootDir, 'public', 'brochure.html');
const outputPdf = path.join(rootDir, 'public', 'nordible-corporate-brochure.pdf');

// Known browser paths
const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'google-chrome',
  'chromium-browser',
  'chromium'
];

let browserPath = null;
for (const cand of browserCandidates) {
  try {
    if (fs.existsSync(cand)) {
      browserPath = cand;
      break;
    }
  } catch {
    // Continue
  }
}

if (!browserPath) {
  browserPath = 'msedge';
}

console.log(`Generating print PDF using browser: ${browserPath}`);
console.log(`Input:  ${inputHtml}`);
console.log(`Output: ${outputPdf}`);

const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPdf}" "${inputHtml}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  if (fs.existsSync(outputPdf)) {
    const stats = fs.statSync(outputPdf);
    console.log(`✅ Success! Generated ${outputPdf} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  }
} catch (err) {
  console.error('Failed to generate PDF automatically:', err.message);
  process.exit(1);
}
