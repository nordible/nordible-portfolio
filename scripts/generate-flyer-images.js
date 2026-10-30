import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const carouselsDir = path.join(rootDir, 'public', 'carousels');
const imagesDir = path.join(carouselsDir, 'images');
const slidesDir = path.join(carouselsDir, 'slides');

for (const dir of [carouselsDir, imagesDir, slidesDir]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Browser candidates
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

let browserPath = browserCandidates.find(cand => {
  try { return fs.existsSync(cand); } catch { return false; }
}) || 'msedge';

console.log(`Using headless browser: ${browserPath}`);

// EXACT Website Fonts: Sora for headings, Inter for body
const commonFlyerCss = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --nordible-blue: #145BFF;
    --nordible-dark: #071638;
    --nordible-orange: #FF6B00;
    --nordible-emerald: #059669;
    --nordible-bg: #FAFBFF;
    --nordible-card: #FFFFFF;
    --nordible-border: #E2E8F0;
    --nordible-slate: #1E293B;
    --nordible-muted: #64748B;
    --font-heading: 'Sora', sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  html, body {
    width: 1080px;
    height: 1350px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--nordible-bg);
    color: var(--nordible-slate);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Canvas with Generous Edge Breathing Space (104px horizontal padding) */
  .flyer-canvas {
    width: 1080px;
    height: 1350px;
    background: #FAFBFF;
    background-image: 
      radial-gradient(ellipse 90% 45% at 50% -5%, rgba(56, 189, 248, 0.28), rgba(20, 91, 255, 0.08), transparent 70%),
      radial-gradient(circle at 90% 90%, rgba(20, 91, 255, 0.06), transparent 50%);
    position: relative;
    padding: 80px 104px 72px 104px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
  }

  /* Top accent strip */
  .flyer-canvas::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(90deg, #145BFF 0%, #38BDF8 50%, #FF9F1A 100%);
  }

  /* Stacked Large Nordible Header (Slide 1 & Slide 6) */
  .stacked-nordible-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .stacked-brand-icon {
    width: 88px;
    height: 88px;
    background: #FFFFFF;
    border: 3px solid var(--nordible-border);
    border-radius: 26px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(20, 91, 255, 0.15);
  }

  .stacked-brand-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .stacked-brand-text {
    font-family: var(--font-heading);
    font-size: 38px;
    font-weight: 800;
    color: var(--nordible-dark);
    letter-spacing: -0.02em;
  }

  /* Dark Luxury Capsule for Bombay Studio Logo (100% Contrast & Legibility) */
  .dark-luxury-capsule {
    background: #071638;
    border: 2px solid #1E293B;
    border-radius: 999px;
    padding: 10px 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 18px rgba(7, 22, 56, 0.25);
  }

  .dark-luxury-capsule img {
    height: 38px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  /* Minimal Slide Counter Header (Slides 2, 3, 4, 5) */
  .minimal-header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  .slide-counter-pill {
    background: #FFFFFF;
    border: 2.5px solid var(--nordible-border);
    border-radius: 999px;
    padding: 10px 28px;
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 800;
    color: var(--nordible-dark);
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  }

  /* Typography Billboard Style - SORA & INTER */
  .billboard-title {
    font-family: var(--font-heading);
    font-size: 92px;
    font-weight: 800;
    line-height: 1.05;
    color: var(--nordible-dark);
    letter-spacing: -0.03em;
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  .billboard-subtitle {
    font-family: var(--font-body);
    font-size: 40px;
    font-weight: 600;
    line-height: 1.38;
    color: #334155;
    max-width: 900px;
  }

  /* Poster Cards */
  .flyer-card {
    background: #FFFFFF;
    border: 3px solid var(--nordible-border);
    border-radius: 32px;
    padding: 38px 44px;
    box-shadow: 0 16px 40px rgba(20, 91, 255, 0.08);
  }

  /* Thumb Zone Footer */
  .flyer-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 28px;
    border-top: 2.5px solid var(--nordible-border);
  }

  .footer-proof-tag {
    font-size: 26px;
    font-weight: 700;
    color: var(--nordible-slate);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-swipe-pill {
    background: var(--nordible-blue);
    color: #FFFFFF;
    padding: 16px 36px;
    border-radius: 999px;
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 800;
    box-shadow: 0 10px 26px rgba(20, 91, 255, 0.4);
    letter-spacing: 0.02em;
  }
`;

// Slide 1: Stacked Hero + Curiosity Hook (01 / 07)
const slide1Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <!-- Top: Symmetrical Stacked Nordible × Bombay Studio Collaboration Header -->
  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
    <div style="display: flex; align-items: center; gap: 24px;">
      <!-- Stacked Nordible -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <div class="stacked-brand-icon" style="width: 84px; height: 84px; padding: 14px; border-radius: 24px;">
          <img src="../../images/logos/nordible-icon.png" alt="Nordible">
        </div>
        <div style="font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--nordible-dark); letter-spacing: -0.01em;">
          Nordible
        </div>
      </div>

      <!-- Collaboration Multiplier Symbol -->
      <div style="font-family: var(--font-heading); font-size: 42px; font-weight: 800; color: var(--nordible-blue); margin-bottom: 30px;">×</div>

      <!-- Stacked Bombay Studio in Dark Luxury Box with Box Logo -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <div style="width: 84px; height: 84px; border-radius: 24px; background: #071638; border: 2.5px solid #1E293B; display: flex; align-items: center; justify-content: center; padding: 10px; box-shadow: 0 10px 25px rgba(7, 22, 56, 0.25);">
          <img src="../../images/logos/bombay-studio-box.png" style="width: 100%; height: 100%; object-fit: contain;" alt="Bombay Studio">
        </div>
        <div style="font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--nordible-dark); letter-spacing: -0.01em;">
          Bombay Studio
        </div>
      </div>
    </div>

    <div class="slide-counter-pill">01 / 07</div>
  </div>

  <div style="margin: auto 0; text-align: center;">
    <!-- Graphic Kicker Badge -->
    <div style="display: inline-flex; align-items: center; gap: 10px; background: rgba(20, 91, 255, 0.08); border: 2px solid rgba(20, 91, 255, 0.25); padding: 10px 24px; border-radius: 999px; font-size: 22px; font-weight: 800; color: var(--nordible-blue); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;">
      <span>✦</span> AI DISCOVERY CASE STUDY <span>✦</span>
    </div>

    <h1 style="font-family: var(--font-heading); font-size: 64px; font-weight: 800; line-height: 1.18; color: var(--nordible-dark); max-width: 900px; margin: 0 auto 48px auto; letter-spacing: -0.02em;">
      How we ranked <span style="color: var(--nordible-blue);">our client #1</span> over global luxury architecture firms.
    </h1>

    <!-- Centered #1 Proof Card with Graphic Badges -->
    <div class="flyer-card" style="display: flex; align-items: center; justify-content: center; gap: 36px; background: linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%); border: 3.5px solid #BFDBFE; text-align: left; padding: 40px 48px;">
      <div style="min-width: 160px; height: 160px; border-radius: 32px; background: linear-gradient(135deg, #145BFF 0%, #0D2B75 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; box-shadow: 0 16px 36px rgba(20, 91, 255, 0.45); flex-shrink: 0;">
        <span style="font-family: var(--font-heading); font-size: 80px; font-weight: 800; line-height: 1;">#1</span>
        <span style="font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em;">Ranked</span>
      </div>

      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="width: 92px; height: 92px; border-radius: 24px; background: #071638; border: 2px solid #1E293B; display: flex; align-items: center; justify-content: center; padding: 10px; flex-shrink: 0; box-shadow: 0 8px 20px rgba(7, 22, 56, 0.2);">
          <img src="../../images/logos/bombay-studio-box.png" style="width: 100%; height: 100%; object-fit: contain;" alt="Bombay Studio">
        </div>
        <div>
          <div style="font-family: var(--font-heading); font-size: 46px; font-weight: 800; color: var(--nordible-dark); margin-bottom: 6px;">
            Bombay Studio
          </div>
          <div style="font-size: 28px; font-weight: 700; color: #475569; line-height: 1.35;">
            Turnkey Luxury Architecture
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">Live AI Search Optimization</div>
    <div class="footer-swipe-pill">Meet our client →</div>
  </div>
</div>
</body></html>`;

// Slide 2: Dedicated Client Introduction (02 / 07) — Clean Luxury Branding (No background image, Est. 1992)
const slide2Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <div class="minimal-header-right">
    <div class="slide-counter-pill">02 / 07</div>
  </div>

  <div style="margin: auto 0; text-align: center;">
    <!-- Kicker Header -->
    <div style="font-size: 24px; font-weight: 800; color: var(--nordible-blue); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px;">
      MEET OUR CLIENT
    </div>
    <h2 style="font-family: var(--font-heading); font-size: 64px; font-weight: 800; color: var(--nordible-dark); margin-bottom: 40px; letter-spacing: -0.02em;">
      BOMBAY STUDIO
    </h2>

    <!-- Clean Luxury Client Card: Box Logo & Authentic Studio Identity (No background image) -->
    <div class="flyer-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 40px; border-radius: 36px; border: 3.5px solid #E2E8F0; margin-bottom: 40px; box-shadow: 0 16px 44px rgba(7, 22, 56, 0.08); background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);">
      <!-- High-Contrast 140px Dark Luxury Logo Box -->
      <div style="width: 140px; height: 140px; border-radius: 32px; background: #071638; border: 3px solid #D4AF37; display: flex; align-items: center; justify-content: center; padding: 18px; box-shadow: 0 14px 36px rgba(7, 22, 56, 0.25); margin-bottom: 24px;">
        <img src="../../images/logos/bombay-studio-box.png" style="width: 100%; height: 100%; object-fit: contain;" alt="Bombay Studio">
      </div>

      <div style="font-family: var(--font-heading); font-size: 48px; font-weight: 800; color: var(--nordible-dark); margin-bottom: 8px;">
        Bombay Studio
      </div>
      <div style="font-size: 28px; font-weight: 600; color: #475569; margin-bottom: 20px;">
        Turnkey Luxury Architecture · Mumbai
      </div>

      <!-- Gold Est. 1992 Tag -->
      <div style="display: inline-flex; align-items: center; gap: 8px; background: #FFFBEB; border: 2px solid #F59E0B; color: #B45309; font-size: 22px; font-weight: 800; padding: 10px 24px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.08em;">
        <span>✦</span> Est. 1992 · 30+ Year Legacy <span>✦</span>
      </div>
    </div>

    <!-- 3 Core Business Highlights with Graphics -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;">
      <div style="background: #FFFFFF; border: 2.5px solid #E2E8F0; border-radius: 24px; padding: 26px 18px; box-shadow: 0 8px 20px rgba(0,0,0,0.04);">
        <div style="font-size: 40px; margin-bottom: 8px;">🏛️</div>
        <div style="font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--nordible-dark); margin-bottom: 4px;">Civil Mastery</div>
        <div style="font-size: 20px; font-weight: 600; color: #64748B;">Turnkey Execution</div>
      </div>

      <div style="background: #FFFFFF; border: 2.5px solid #BFDBFE; border-radius: 24px; padding: 26px 18px; box-shadow: 0 8px 20px rgba(20,91,255,0.06);">
        <div style="font-size: 40px; margin-bottom: 8px;">💎</div>
        <div style="font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--nordible-blue); margin-bottom: 4px;">Bespoke 5 BHK</div>
        <div style="font-size: 20px; font-weight: 600; color: #64748B;">Luxury Residences</div>
      </div>

      <div style="background: #FFFFFF; border: 2.5px solid #86EFAC; border-radius: 24px; padding: 26px 18px; box-shadow: 0 8px 20px rgba(16,185,129,0.06);">
        <div style="font-size: 40px; margin-bottom: 8px;">💼</div>
        <div style="font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--nordible-emerald); margin-bottom: 4px;">₹1.2 Cr+ Budgets</div>
        <div style="font-size: 20px; font-weight: 600; color: #64748B;">High-Ticket Clients</div>
      </div>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">bombaystudio.in</div>
    <div class="footer-swipe-pill">The search shift →</div>
  </div>
</div>
</body></html>`;

// Slide 3: The Search Shift: Google vs ChatGPT (03 / 07) — Authentic Vector Logos
const slide3Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <div class="minimal-header-right">
    <div class="slide-counter-pill">03 / 07</div>
  </div>

  <div style="margin: auto 0; text-align: center;">
    <h2 style="font-family: var(--font-heading); font-size: 64px; font-weight: 800; line-height: 1.22; color: var(--nordible-dark); max-width: 880px; margin: 0 auto 52px auto; letter-spacing: -0.02em;">
      High-ticket buyers don't scroll Google ads.<br><span style="color: var(--nordible-blue);">They ask conversational AI.</span>
    </h2>

    <!-- Two Giant High-Contrast Comparison Bars with Authentic Icons -->
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 900px; margin: 0 auto; width: 100%;">
      <!-- Google Bar with Google Icon -->
      <div style="background: #FEF2F2; border: 3.5px solid #FCA5A5; border-radius: 28px; padding: 34px 36px; display: flex; align-items: center; justify-content: center; gap: 20px; box-shadow: 0 10px 24px rgba(220, 38, 38, 0.06);">
        <div style="width: 52px; height: 52px; border-radius: 14px; background: #FFFFFF; border: 1.5px solid #E2E8F0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.06);">
          <svg width="32" height="32" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>
        <span style="font-family: var(--font-heading); font-size: 42px; font-weight: 800; color: #DC2626; letter-spacing: -0.01em; white-space: nowrap;">
          ✕ Google 10 Blue Links
        </span>
      </div>

      <!-- Arrow Flow Graphic -->
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px; color: var(--nordible-muted); font-size: 20px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">
        <span>↓</span> The AI Search Evolution <span>↓</span>
      </div>

      <!-- ChatGPT Bar with Official Simple-Icons OpenAI Vector Logo -->
      <div style="background: #F0FDF4; border: 3.5px solid #86EFAC; border-radius: 28px; padding: 34px 36px; display: flex; align-items: center; justify-content: center; gap: 20px; box-shadow: 0 16px 36px rgba(16, 185, 129, 0.16);">
        <div style="width: 52px; height: 52px; border-radius: 14px; background: #10A37F; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(16,163,127,0.3);">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
          </svg>
        </div>
        <span style="font-family: var(--font-heading); font-size: 42px; font-weight: 800; color: var(--nordible-emerald); letter-spacing: -0.01em; white-space: nowrap;">
          ✓ ChatGPT Recommendations
        </span>
      </div>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">Generative Engine Optimization (GEO)</div>
    <div class="footer-swipe-pill">See live result →</div>
  </div>
</div>
</body></html>`;

// Slide 4: Live Evidence Hero (04 / 07)
const slide4Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <div class="minimal-header-right">
    <div class="slide-counter-pill">04 / 07</div>
  </div>

  <div style="margin: auto 0; text-align: center;">
    <!-- Full-Bleed Centered ChatGPT Proof Frame -->
    <div style="width: 100%; height: 640px; border-radius: 36px; border: 4px solid #CBD5E1; overflow: hidden; position: relative; box-shadow: 0 24px 54px rgba(0,0,0,0.22); background: #000000; margin-bottom: 36px;">
      <img src="../../images/case-studies/bombay-studio/chatgpt-ranking.jpeg" style="width: 100%; position: absolute; top: -930px; left: 0;" alt="ChatGPT Zoomed Proof">
    </div>

    <!-- Takeaway Card with Trophy Graphic -->
    <div style="background: #FFFFFF; border: 3.5px solid var(--nordible-emerald); border-radius: 28px; padding: 32px 44px; display: flex; align-items: center; justify-content: center; gap: 20px; box-shadow: 0 12px 30px rgba(16, 185, 129, 0.12);">
      <span style="font-size: 48px;">🏆</span>
      <span style="font-family: var(--font-heading); font-size: 38px; font-weight: 800; color: var(--nordible-dark); text-align: center;">
        ChatGPT picked Bombay Studio: <span style="color: var(--nordible-emerald);">„First one to contact“</span>
      </span>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">Verified ChatGPT Output</div>
    <div class="footer-swipe-pill">How we did it →</div>
  </div>
</div>
</body></html>`;

// Slide 5: Framework with Brief Title + Graphic Icons (05 / 07)
const slide5Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <div class="minimal-header-right">
    <div class="slide-counter-pill">05 / 07</div>
  </div>

  <div style="margin: auto 0;">
    <!-- Brief Title -->
    <h2 style="font-family: var(--font-heading); font-size: 54px; font-weight: 800; color: var(--nordible-dark); text-align: center; margin-bottom: 40px; letter-spacing: -0.02em;">
      HOW WE <span style="color: var(--nordible-blue);">RANKED #1.</span>
    </h2>

    <div style="display: grid; grid-template-columns: 360px 1fr; gap: 40px; align-items: center;">
      <!-- Hero Primary Mascot -->
      <div style="height: 480px; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 20px 30px rgba(20, 91, 255, 0.22));">
        <img src="../../mascot/primary-mascot.webp" style="max-height: 100%; max-width: 100%; object-fit: contain;" alt="Mascot">
      </div>

      <!-- 3 Punchy Pillars with Graphic Emblems -->
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div class="flyer-card" style="padding: 36px 40px; border-left: 12px solid var(--nordible-blue); display: flex; align-items: center; gap: 20px; box-shadow: 0 12px 30px rgba(20, 91, 255, 0.08);">
          <span style="font-size: 38px;">🌐</span>
          <div style="font-family: var(--font-heading); font-size: 38px; font-weight: 800; color: var(--nordible-dark);">
            1. Knowledge Graphs
          </div>
        </div>

        <div class="flyer-card" style="padding: 36px 40px; border-left: 12px solid var(--nordible-emerald); display: flex; align-items: center; gap: 20px; box-shadow: 0 12px 30px rgba(5, 150, 105, 0.08);">
          <span style="font-size: 38px;">🎯</span>
          <div style="font-family: var(--font-heading); font-size: 38px; font-weight: 800; color: var(--nordible-dark);">
            2. High-Ticket Semantics
          </div>
        </div>

        <div class="flyer-card" style="padding: 36px 40px; border-left: 12px solid var(--nordible-orange); display: flex; align-items: center; gap: 20px; box-shadow: 0 12px 30px rgba(255, 107, 0, 0.08);">
          <span style="font-size: 38px;">🛡️</span>
          <div style="font-family: var(--font-heading); font-size: 38px; font-weight: 800; color: var(--nordible-dark);">
            3. Neural Trust Signals
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">Nordible GEO Engineering</div>
    <div class="footer-swipe-pill">The commercial impact →</div>
  </div>
</div>
</body></html>`;

// Slide 6: Reduced Text Commercial Outcome (06 / 07)
const slide6Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas">
  <div class="minimal-header-right">
    <div class="slide-counter-pill">06 / 07</div>
  </div>

  <div style="margin: auto 0; text-align: center;">
    <!-- Reduced 1-line Hook -->
    <h2 style="font-family: var(--font-heading); font-size: 48px; font-weight: 800; color: var(--nordible-dark); max-width: 900px; margin: 0 auto 36px auto; letter-spacing: -0.02em;">
      ChatGPT pre-filters buyers <span style="color: var(--nordible-blue);">by budget.</span>
    </h2>

    <!-- Maximum Hero Width Proof Frame -->
    <div style="width: 100%; height: 530px; border-radius: 36px; border: 4px solid #CBD5E1; overflow: hidden; position: relative; box-shadow: 0 24px 54px rgba(0,0,0,0.24); background: #000000; margin-bottom: 28px;">
      <img src="../../images/case-studies/bombay-studio/chatgpt-funnel.jpeg" style="width: 100%; position: absolute; top: -250px; left: 0;" alt="ChatGPT Funnel Proof">
    </div>

    <!-- Reduced Text Highlight Card with Graphic Shield -->
    <div class="flyer-card" style="padding: 36px 48px; background: linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%); border-color: #22C55E; border-width: 3.5px; box-shadow: 0 16px 40px rgba(34, 197, 94, 0.14); text-align: center;">
      <div style="display: inline-flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 8px;">
        <span style="font-size: 44px;">🛡️</span>
        <span style="font-family: var(--font-heading); font-size: 50px; font-weight: 800; color: #15803D; letter-spacing: -0.02em;">
          ZERO TIRE-KICKERS.
        </span>
      </div>
      <div style="font-family: var(--font-heading); font-size: 36px; font-weight: 800; color: var(--nordible-dark);">
        ₹80 Lakh to ₹1.2 Crore+ Turnkey Budgets
      </div>
    </div>
  </div>

  <div class="flyer-footer">
    <div class="footer-proof-tag">Inbound Sales Automation</div>
    <div class="footer-swipe-pill">Take action →</div>
  </div>
</div>
</body></html>`;

// Slide 7: High-Converting Finale (07 / 07)
const slide7Html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${commonFlyerCss}</style></head><body>
<div class="flyer-canvas" style="text-align: center;">
  <!-- Prominent Stacked Nordible Header -->
  <div class="stacked-nordible-brand" style="margin-top: 20px;">
    <div class="stacked-brand-icon" style="width: 110px; height: 110px; padding: 20px; border-radius: 32px; box-shadow: 0 14px 34px rgba(20, 91, 255, 0.25);">
      <img src="../../images/logos/nordible-icon.png" alt="Nordible">
    </div>
    <div class="stacked-brand-text" style="font-size: 52px; margin-top: 8px;">Nordible Technologies</div>
  </div>

  <div style="margin: auto 0; padding: 0 20px;">
    <!-- Giant Poster Button: The ONE Primary Conversion CTA with Graphic Glow -->
    <div style="display: inline-block; background: var(--nordible-blue); color: #FFFFFF; font-family: var(--font-heading); font-size: 44px; font-weight: 800; padding: 42px 92px; border-radius: 999px; box-shadow: 0 20px 52px rgba(20, 91, 255, 0.5); text-transform: uppercase; letter-spacing: 0.04em; cursor: pointer; margin-bottom: 24px;">
      Claim Your Free AI Audit →
    </div>

    <!-- Trust Badge Graphic -->
    <div style="display: flex; justify-content: center; align-items: center; gap: 16px; color: var(--nordible-muted); font-size: 22px; font-weight: 700; margin-bottom: 12px;">
      <span>🔒 Confidential</span>
      <span>•</span>
      <span>⚡ 24-Hour Delivery</span>
      <span>•</span>
      <span>📊 Full AI Readiness Score</span>
    </div>

    <!-- Self-Explanatory High-Contrast Contact Strip -->
    <div style="display: flex; justify-content: center; align-items: center; gap: 40px; margin-top: 40px; padding-top: 36px; border-top: 2.5px solid var(--nordible-border);">
      <span style="font-family: var(--font-heading); font-size: 42px; font-weight: 800; color: var(--nordible-dark); letter-spacing: -0.01em;">
        nordible.com
      </span>
      <span style="font-size: 38px; color: var(--nordible-muted); font-weight: 700;">•</span>
      <span style="font-family: var(--font-heading); font-size: 42px; font-weight: 800; color: var(--nordible-dark); letter-spacing: -0.01em;">
        info@nordible.com
      </span>
    </div>
  </div>

  <div class="flyer-footer" style="justify-content: center;">
    <div class="footer-proof-tag" style="font-size: 24px; color: var(--nordible-muted);">
      Nordible Technologies · Generative Engine Optimization (GEO)
    </div>
  </div>
</div>
</body></html>`;

// Write all 7 slide HTML files
const slides = [
  { num: 1, html: slide1Html },
  { num: 2, html: slide2Html },
  { num: 3, html: slide3Html },
  { num: 4, html: slide4Html },
  { num: 5, html: slide5Html },
  { num: 6, html: slide6Html },
  { num: 7, html: slide7Html }
];

console.log('Writing updated flyer slide HTML files...');
slides.forEach(s => {
  const filePath = path.join(slidesDir, `slide-${s.num}.html`);
  fs.writeFileSync(filePath, s.html, 'utf-8');
});

console.log('Generating high-converting flyer images (1080x1350)...');
slides.forEach(s => {
  const filePath = path.join(slidesDir, `slide-${s.num}.html`);
  const imagePath = path.join(imagesDir, `slide-${s.num}.png`);
  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --window-size=1080,1350 --hide-scrollbars --screenshot="${imagePath}" "${filePath}"`;
  execSync(cmd, { stdio: 'ignore' });
  const stats = fs.statSync(imagePath);
  console.log(`✅ Generated flyer slide-${s.num}.png (${(stats.size / 1024).toFixed(1)} KB)`);
});

console.log('All flyer images generated successfully!');
