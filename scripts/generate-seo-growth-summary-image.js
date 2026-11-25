import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const outputDir = path.join(rootDir, 'public', 'images', 'blog');
const scratchDir = path.join(rootDir, '.next', 'tmp-summary-render');
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(scratchDir, { recursive: true });

const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'google-chrome',
  'chromium-browser',
  'chromium',
];

const browserPath =
  browserCandidates.find((cand) => {
    try {
      return fs.existsSync(cand);
    } catch {
      return false;
    }
  }) || 'msedge';

const logoPath = path.join(rootDir, 'public', 'images', 'logos', 'nordible-icon.png');
const logoDataUri = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;

const mascotPath = path.join(rootDir, 'public', 'mascot', 'celebrate.webp');
const mascotDataUri = `data:image/webp;base64,${fs.readFileSync(mascotPath).toString('base64')}`;

const locales = {
  en: {
    filename: 'seo-ai-growth-summary-en.png',
    eyebrow: 'VERIFIED GSC & AI SEARCH CASE STUDY · 90 DAYS',
    pill: '3 Anonymized Clients · $0 Ad Spend',
    headlineLead: '+1,000% Search Growth',
    headlineRest: '& AI Visibility Across 3 Industries',
    totalAiBadgeLabel: 'GENERATIVE AI IMPRESSIONS',
    totalAiBadgeValue: '1,110+',
    totalAiSub: '100% Organic · Zero Paid Ads',
    mascotCaption: 'Verified Engineering Results',
    cards: [
      {
        num: 'CLIENT #1',
        industry: 'B2B IT & Infrastructure',
        timeframe: '28-Day Sprint',
        accent: '#145BFF',
        accentSoft: '#EFF6FF',
        accentBorder: '#BFDBFE',
        heroMetric: '+1,045%',
        heroLabel: 'Organic Click Surge',
        stats: [
          { label: 'Impressions', value: '10.5k (+1,022%)' },
          { label: 'Clicks', value: '126 in 28d' },
          { label: 'Review Snippets', value: '182 Valid · 0 Err' },
          { label: 'AI Impressions', value: '164' },
        ],
        points: '0,62 28,59 56,56 84,54 112,50 140,42 168,14 196,24 224,26 252,18 280,10',
        fillPoints: '0,62 28,59 56,56 84,54 112,50 140,42 168,14 196,24 224,26 252,18 280,10 280,74 0,74',
      },
      {
        num: 'CLIENT #2',
        industry: 'Architecture & Planning',
        timeframe: '3-Month Growth',
        accent: '#059669',
        accentSoft: '#ECFDF5',
        accentBorder: '#A7F3D0',
        heroMetric: '9.4',
        heroBadge: 'PAGE 1 AVG',
        heroLabel: 'Google Search Position',
        stats: [
          { label: 'AI Impressions', value: '792 (Beta)' },
          { label: 'Clicks / Impr.', value: '292 / 9.19k' },
          { label: 'Avg. CTR', value: '3.2%' },
          { label: 'Milestones', value: '90 → 100 → 120' },
        ],
        points: '0,64 28,56 56,52 84,48 112,50 140,40 168,36 196,28 224,20 252,14 280,8',
        fillPoints: '0,64 28,56 56,52 84,48 112,50 140,40 168,36 196,28 224,20 252,14 280,8 280,74 0,74',
      },
      {
        num: 'CLIENT #3',
        industry: 'Luxury Interior & Design',
        timeframe: '3-Month Lift',
        accent: '#EA580C',
        accentSoft: '#FFF7ED',
        accentBorder: '#FED7AA',
        heroMetric: '+1,244%',
        heroLabel: 'Organic Click Growth',
        stats: [
          { label: 'Impressions', value: '3.68k (+3,769%)' },
          { label: 'Clicks', value: '121 Total' },
          { label: 'Avg. CTR', value: '3.3%' },
          { label: 'AI Impressions', value: '154' },
        ],
        points: '0,66 28,63 56,60 84,56 112,54 140,48 168,42 196,35 224,26 252,16 280,9',
        fillPoints: '0,66 28,63 56,60 84,56 112,54 140,48 168,42 196,35 224,26 252,16 280,9 280,74 0,74',
      },
    ],
    footerItems: [
      'Google Search Console Verified',
      'Zero Manual Actions or Errors',
      'Schema.org + GEO + Local Architecture',
    ],
    brandLabel: 'nordible.co',
  },
  de: {
    filename: 'seo-ai-growth-summary-de.png',
    eyebrow: 'VERIFIZIERTE GSC- & KI-FALLSTUDIE · 90 TAGE',
    pill: '3 Anonymisierte Kunden · 0 € Ads',
    headlineLead: '+1.000 % Suchwachstum',
    headlineRest: '& KI-Sichtbarkeit in 3 Branchen',
    totalAiBadgeLabel: 'GENERATIVE-KI-IMPRESSIONEN',
    totalAiBadgeValue: '1.110+',
    totalAiSub: '100 % Organisch · Ohne Ads',
    mascotCaption: 'Verifizierte Engineering-Daten',
    cards: [
      {
        num: 'KUNDE #1',
        industry: 'B2B-IT & Infrastruktur',
        timeframe: '28-Tage-Sprint',
        accent: '#145BFF',
        accentSoft: '#EFF6FF',
        accentBorder: '#BFDBFE',
        heroMetric: '+1.045 %',
        heroLabel: 'Organisches Klickplus',
        stats: [
          { label: 'Impressionen', value: '10,5 Tsd. (+1.022 %)' },
          { label: 'Klicks', value: '126 in 28T' },
          { label: 'Review-Snippets', value: '182 Valide · 0 Fehler' },
          { label: 'KI-Impressionen', value: '164' },
        ],
        points: '0,62 28,59 56,56 84,54 112,50 140,42 168,14 196,24 224,26 252,18 280,10',
        fillPoints: '0,62 28,59 56,56 84,54 112,50 140,42 168,14 196,24 224,26 252,18 280,10 280,74 0,74',
      },
      {
        num: 'KUNDE #2',
        industry: 'Architektur & Planung',
        timeframe: '3-Monats-Wachstum',
        accent: '#059669',
        accentSoft: '#ECFDF5',
        accentBorder: '#A7F3D0',
        heroMetric: '9,4',
        heroBadge: 'Ø SEITE 1',
        heroLabel: 'Google-Suchposition',
        stats: [
          { label: 'KI-Impressionen', value: '792 (Beta)' },
          { label: 'Klicks / Impr.', value: '292 / 9,19 Tsd.' },
          { label: 'Ø CTR', value: '3,2 %' },
          { label: 'Meilensteine', value: '90 → 100 → 120' },
        ],
        points: '0,64 28,56 56,52 84,48 112,50 140,40 168,36 196,28 224,20 252,14 280,8',
        fillPoints: '0,64 28,56 56,52 84,48 112,50 140,40 168,36 196,28 224,20 252,14 280,8 280,74 0,74',
      },
      {
        num: 'KUNDE #3',
        industry: 'Luxus-Architektur & Design',
        timeframe: '3-Monats-Aufbau',
        accent: '#EA580C',
        accentSoft: '#FFF7ED',
        accentBorder: '#FED7AA',
        heroMetric: '+1.244 %',
        heroLabel: 'Klickwachstum (3M)',
        stats: [
          { label: 'Impressionen', value: '3,68 Tsd. (+3.769 %)' },
          { label: 'Klicks', value: '121 Gesamt' },
          { label: 'Ø CTR', value: '3,3 %' },
          { label: 'KI-Impressionen', value: '154' },
        ],
        points: '0,66 28,63 56,60 84,56 112,54 140,48 168,42 196,35 224,26 252,16 280,9',
        fillPoints: '0,66 28,63 56,60 84,56 112,54 140,48 168,42 196,35 224,26 252,16 280,9 280,74 0,74',
      },
    ],
    footerItems: [
      'Google Search Console verifiziert',
      '0 manuelle Maßnahmen oder Fehler',
      'Schema.org + GEO + Lokale Architektur',
    ],
    brandLabel: 'nordible.co',
  },
};

function buildHtml(copy) {
  const cardsHtml = copy.cards
    .map(
      (c, idx) => `
      <div class="card">
        <div class="card-accent-bar" style="background: ${c.accent};"></div>
        <div class="card-top">
          <div class="card-meta">
            <span class="client-tag" style="color: ${c.accent}; background: ${c.accentSoft}; border-color: ${c.accentBorder};">${c.num}</span>
            <span class="timeframe">${c.timeframe}</span>
          </div>
          <div class="industry">${c.industry}</div>
        </div>

        <div class="hero-stat-row">
          <div class="hero-value-wrap">
            <span class="hero-value">${c.heroMetric}</span>
            ${c.heroBadge ? `<span class="hero-pill" style="color: ${c.accent}; background: ${c.accentSoft}; border-color: ${c.accentBorder};">${c.heroBadge}</span>` : ''}
          </div>
          <div class="hero-label">${c.heroLabel}</div>
        </div>

        <div class="sparkline-box">
          <svg viewBox="0 0 290 74" preserveAspectRatio="none" class="sparkline-svg">
            <defs>
              <linearGradient id="grad-${idx}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.22" />
                <stop offset="100%" stop-color="${c.accent}" stop-opacity="0.01" />
              </linearGradient>
            </defs>
            <line x1="0" y1="22" x2="280" y2="22" stroke="#E2E8F0" stroke-dasharray="4 4" />
            <line x1="0" y1="48" x2="280" y2="48" stroke="#E2E8F0" stroke-dasharray="4 4" />
            <polygon points="${c.fillPoints}" fill="url(#grad-${idx})" />
            <polyline points="${c.points}" fill="none" stroke="${c.accent}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="280" cy="${c.points.split(' ').pop().split(',')[1]}" r="5" fill="#FFFFFF" stroke="${c.accent}" stroke-width="3" />
          </svg>
        </div>

        <div class="stats-grid">
          ${c.stats
            .map(
              (s) => `
            <div class="stat-item">
              <div class="stat-label">${s.label}</div>
              <div class="stat-val">${s.value}</div>
            </div>`
            )
            .join('')}
        </div>
      </div>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Mono:wght@700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --nordible-blue: #145BFF;
    --nordible-dark: #0D2B75;
    --nordible-orange: #FF9F1A;
    --nordible-bg: #FAFBFF;
    --nordible-border: #E2E8F0;
    --nordible-slate: #1E293B;
    --nordible-muted: #64748B;
  }

  html, body {
    width: 1600px;
    height: 900px;
    overflow: hidden;
    background: var(--nordible-bg);
    color: var(--nordible-slate);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .canvas {
    position: relative;
    width: 1600px;
    height: 900px;
    padding: 42px 54px 36px 54px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:
      radial-gradient(ellipse 85% 48% at 42% -6%, rgba(56, 189, 248, 0.22), rgba(20, 91, 255, 0.06), transparent 70%),
      radial-gradient(circle at 92% 85%, rgba(255, 159, 26, 0.08), transparent 45%),
      #FAFBFF;
  }

  /* Subtle light technical dot pattern */
  .canvas::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(13, 43, 117, 0.07) 1.2px, transparent 1.2px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 92% 82% at 50% 45%, black 35%, transparent 100%);
    pointer-events: none;
  }

  /* Top Nordible brand accent bar (matches flyer system) */
  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #145BFF 0%, #38BDF8 52%, #FF9F1A 100%);
  }

  .header {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .eyebrow-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand-chip {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 4px 12px rgba(20, 91, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  .brand-chip img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .eyebrow-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 15px;
    border-radius: 999px;
    background: #EFF6FF;
    border: 1.5px solid #BFDBFE;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: var(--nordible-blue);
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #10B981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }

  .pill-secondary {
    padding: 7px 15px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    font-size: 14px;
    font-weight: 700;
    color: #334155;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  }

  .headline {
    font-family: 'Sora', sans-serif;
    font-size: 46px;
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.025em;
    color: var(--nordible-dark);
  }

  .headline-accent {
    color: var(--nordible-blue);
  }

  .main-stage {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 296px;
    gap: 24px;
    align-items: stretch;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .card {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    padding: 24px 22px 20px 22px;
    background: #FFFFFF;
    border: 2px solid #E2E8F0;
    box-shadow: 0 14px 34px rgba(20, 91, 255, 0.07), 0 2px 6px rgba(15, 23, 42, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
  }

  .card-accent-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
  }

  .card-top {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .client-tag {
    font-family: 'Space Mono', monospace;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border-radius: 8px;
    border: 1.5px solid;
  }

  .timeframe {
    font-size: 12.5px;
    font-weight: 600;
    color: #64748B;
  }

  .industry {
    font-family: 'Sora', sans-serif;
    font-size: 19px;
    font-weight: 800;
    color: var(--nordible-dark);
    letter-spacing: -0.015em;
  }

  .hero-value-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hero-value {
    font-family: 'Sora', sans-serif;
    font-size: 48px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    color: #0F172A;
  }

  .hero-pill {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 999px;
    border: 1.5px solid;
    letter-spacing: 0.04em;
  }

  .hero-label {
    margin-top: 5px;
    font-size: 13.5px;
    font-weight: 600;
    color: #64748B;
  }

  .sparkline-box {
    height: 70px;
    width: 100%;
    border-radius: 14px;
    background: #F8FAFF;
    border: 1.5px solid #E8EEF8;
    padding: 6px 8px 0 8px;
    overflow: hidden;
  }

  .sparkline-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9px;
  }

  .stat-item {
    padding: 9px 11px;
    border-radius: 12px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
  }

  .stat-label {
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #64748B;
    margin-bottom: 3px;
  }

  .stat-val {
    font-size: 13.5px;
    font-weight: 800;
    color: #0F172A;
    white-space: nowrap;
  }

  /* Right Column: AI Callout + Mascot Spotlight */
  .side-rail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .ai-callout {
    padding: 20px 22px;
    border-radius: 24px;
    background: linear-gradient(135deg, #145BFF 0%, #0D2B75 100%);
    color: #FFFFFF;
    box-shadow: 0 18px 36px rgba(20, 91, 255, 0.28);
    text-align: left;
  }

  .ai-callout-label {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.07em;
    color: #BAE6FD;
    margin-bottom: 4px;
  }

  .ai-callout-val {
    font-family: 'Sora', sans-serif;
    font-size: 46px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }

  .ai-callout-sub {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 700;
    color: #6EE7B7;
  }

  .mascot-stage {
    flex: 1;
    position: relative;
    border-radius: 24px;
    background: linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%);
    border: 2px solid #DBEAFE;
    box-shadow: 0 14px 32px rgba(20, 91, 255, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 14px 16px 14px 16px;
    overflow: hidden;
  }

  .mascot-halo {
    position: absolute;
    width: 240px;
    height: 240px;
    top: 24px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(255, 159, 26, 0.12) 55%, transparent 72%);
    pointer-events: none;
  }

  .mascot-img {
    position: relative;
    z-index: 2;
    width: 270px;
    height: 300px;
    object-fit: contain;
    mix-blend-mode: multiply;
    transform: scale(1.36);
    transform-origin: center 54%;
    margin-bottom: 6px;
  }

  .mascot-caption {
    position: relative;
    z-index: 2;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--nordible-dark);
    background: #FFFFFF;
    border: 1.5px solid #BFDBFE;
    padding: 5px 12px;
    border-radius: 999px;
  }

  .footer {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 2px solid #E2E8F0;
  }

  .footer-checks {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .check-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #334155;
  }

  .check-icon {
    width: 21px;
    height: 21px;
    border-radius: 999px;
    background: #ECFDF5;
    border: 1.5px solid #6EE7B7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #059669;
    font-size: 12px;
    font-weight: 800;
  }

  .brand-lockup {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px 7px 10px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
  }

  .brand-lockup img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  .brand-lockup span {
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: var(--nordible-dark);
    letter-spacing: -0.01em;
  }
</style>
</head>
<body>
  <div class="canvas">
    <div class="top-bar"></div>

    <div class="header">
      <div class="eyebrow-row">
        <div class="brand-chip">
          <img src="${logoDataUri}" alt="Nordible" />
        </div>
        <div class="eyebrow-badge">
          <span class="pulse-dot"></span>
          <span>${copy.eyebrow}</span>
        </div>
        <div class="pill-secondary">${copy.pill}</div>
      </div>

      <h1 class="headline">
        <span class="headline-accent">${copy.headlineLead}</span> ${copy.headlineRest}
      </h1>
    </div>

    <div class="main-stage">
      <div class="cards-grid">
        ${cardsHtml}
      </div>

      <div class="side-rail">
        <div class="ai-callout">
          <div class="ai-callout-label">${copy.totalAiBadgeLabel}</div>
          <div class="ai-callout-val">${copy.totalAiBadgeValue}</div>
          <div class="ai-callout-sub">${copy.totalAiSub}</div>
        </div>

        <div class="mascot-stage">
          <div class="mascot-halo"></div>
          <img class="mascot-img" src="${mascotDataUri}" alt="Nordible Mascot" />
          <div class="mascot-caption">${copy.mascotCaption}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-checks">
        ${copy.footerItems
          .map(
            (item) => `
          <div class="check-item">
            <span class="check-icon">✓</span>
            <span>${item}</span>
          </div>`
          )
          .join('')}
      </div>

      <div class="brand-lockup">
        <img src="${logoDataUri}" alt="Nordible" />
        <span>${copy.brandLabel}</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

console.log(`Using headless browser: ${browserPath}`);

for (const [lang, copy] of Object.entries(locales)) {
  const htmlPath = path.join(scratchDir, `summary-${lang}.html`);
  const imagePath = path.join(outputDir, copy.filename);

  fs.writeFileSync(htmlPath, buildHtml(copy), 'utf-8');

  const cmd = `"${browserPath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=3000 --window-size=1600,900 --hide-scrollbars --screenshot="${imagePath}" "${htmlPath}"`;
  execSync(cmd, { stdio: 'ignore' });

  const stats = fs.statSync(imagePath);
  console.log(`✅ Generated ${copy.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
}

fs.rmSync(scratchDir, { recursive: true, force: true });
