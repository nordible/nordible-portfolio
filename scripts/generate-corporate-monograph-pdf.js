import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BROCHURE_CONFIG = {
  brandName: 'Nordible Technologies',
  founderName: 'Kabeer Shah',
  websiteUrl: 'https://nordible.co',
  bookingShortUrl: 'cal.com/nordible/30min',
  bookingUrl: 'https://cal.com/nordible/30min',
  email: 'mail@nordible.co',
  phoneDisplay: '+49 1521 1065739',
  phoneRaw: '+4915211065739',
  linkedinUrl: 'https://www.linkedin.com/in/meetkabeershah/',
  address: {
    street: 'Breitlacherstraße 101',
    postalCode: '60489',
    city: 'Frankfurt am Main',
    region: 'Hessen',
    countryEn: 'Germany',
    countryDe: 'Deutschland',
  },
};

// Helper to convert public images to base64 data URIs
function getBase64Image(relPath) {
  try {
    const fullPath = path.join(projectRoot, 'public', relPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase();
      let mime = 'image/jpeg';
      if (ext === '.png') mime = 'image/png';
      else if (ext === '.svg') mime = 'image/svg+xml';
      else if (ext === '.webp') mime = 'image/webp';
      else if (ext === '.jpg' || ext === '.jpeg') mime = 'image/jpeg';
      const data = fs.readFileSync(fullPath).toString('base64');
      return `data:${mime};base64,${data}`;
    }
  } catch (e) {
    console.warn(`Could not read image: ${relPath}`, e);
  }
  return '';
}

console.log('Compiling organized 6-Page Nordible Business Brochure in German & English (DIN A4 Portrait)...');

// Brand & Executive Assets
const logoImg = getBase64Image('images/logos/nordible-icon.png');
const founderImg = getBase64Image('images/founder.png');

// Proof & Case Study Visuals
const seoGrowthSummaryDe = getBase64Image('images/blog/seo-ai-growth-summary-de.png');
const seoGrowthSummaryEn = getBase64Image('images/blog/seo-ai-growth-summary-en.png');
const shamsHero = getBase64Image('images/shams-consult/shams-consult-homepage-hero.png');
const vantiveHero = getBase64Image('images/portfolio/vantive-baxter-remote-service.png');
const geHero = getBase64Image('images/portfolio/ge-careintellect-oncology.png');
const instaremHero = getBase64Image('images/portfolio/nium-instarem-fintech.png');

// Generate vCard QR Code Data URL per language
async function getVcardQr(lang = 'de') {
  const isDe = lang === 'de';
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${BROCHURE_CONFIG.founderName}
N:Shah;Kabeer;;;
ORG:${BROCHURE_CONFIG.brandName}
TITLE:${isDe ? 'Gründer & Solutions Architect' : 'Founder & Solutions Architect'}
EMAIL;TYPE=INTERNET,WORK:${BROCHURE_CONFIG.email}
TEL;TYPE=CELL,VOICE,WORK:${BROCHURE_CONFIG.phoneRaw}
ADR;TYPE=WORK:;;${BROCHURE_CONFIG.address.street};${BROCHURE_CONFIG.address.city};;${BROCHURE_CONFIG.address.postalCode};${BROCHURE_CONFIG.address.countryEn}
URL:${BROCHURE_CONFIG.websiteUrl}
URL;TYPE=LinkedIn:${BROCHURE_CONFIG.linkedinUrl}
END:VCARD`;

  return await QRCode.toDataURL(vcardData, {
    margin: 1,
    width: 320,
    color: {
      dark: '#071638',
      light: '#FFFFFF',
    },
  });
}

function renderHeader(isDe, sectionMeta) {
  return `
    <div class="doc-header">
      <div class="doc-header-brand">
        <img src="${logoImg}" class="doc-header-logo" alt="Nordible Technologies">
        <div class="doc-header-title-wrap">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">${isDe ? 'Unternehmensbroschüre 2026 · Frankfurt am Main' : 'Corporate Brochure 2026 · Frankfurt am Main'}</div>
        </div>
      </div>
      <div class="header-meta">${sectionMeta}</div>
    </div>
  `;
}

function renderFooter(isDe, pageNum) {
  return `
    <div class="doc-footer">
      <div>${BROCHURE_CONFIG.brandName} · ${BROCHURE_CONFIG.address.street}, ${BROCHURE_CONFIG.address.postalCode} ${BROCHURE_CONFIG.address.city}</div>
      <div>${BROCHURE_CONFIG.email} · ${BROCHURE_CONFIG.phoneDisplay} · nordible.co</div>
      <div class="footer-page">${isDe ? `Seite ${pageNum} von 6` : `Page ${pageNum} of 6`}</div>
    </div>
  `;
}

function buildBrochureHtml(lang, vcardQrDataUrl) {
  const isDe = lang === 'de';
  const seoImg = isDe ? seoGrowthSummaryDe : seoGrowthSummaryEn;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${isDe ? 'Nordible Technologies · Unternehmensbroschüre 2026 (Geschäftsnutzen & Lösungen)' : 'Nordible Technologies · Corporate Brochure 2026 (Business Benefits & Solutions)'}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Mono:wght@400;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      margin: 0;
      padding: 0;
      background: #E2E8F0;
      color: #0F172A;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .font-heading {
      font-family: 'Sora', 'Inter', sans-serif;
    }

    .font-mono {
      font-family: 'Space Mono', monospace;
    }

    .page {
      width: 210mm;
      height: 297mm;
      padding: 13mm 16mm 12mm 16mm;
      position: relative;
      page-break-after: always;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #FFFFFF;
    }

    .page:last-child {
      page-break-after: auto;
    }

    /* Running Header & Footer */
    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 3.5mm;
      border-bottom: 1.5px solid #E2E8F0;
      margin-bottom: 4mm;
    }

    .doc-header-brand {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .doc-header-logo {
      height: 26px;
      width: 26px;
      object-fit: contain;
      border-radius: 6px;
      background: #F1F5F9;
      padding: 3px;
      border: 1px solid #E2E8F0;
    }

    .doc-header-title-wrap {
      border-left: 1.5px solid #CBD5E1;
      padding-left: 9px;
    }

    .brand-title {
      font-family: 'Sora', sans-serif;
      font-weight: 800;
      font-size: 9.5pt;
      color: #071638;
      letter-spacing: -0.2px;
      line-height: 1.1;
    }

    .brand-sub {
      font-family: 'Space Mono', monospace;
      font-size: 6.4pt;
      color: #145BFF;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      margin-top: 1px;
      font-weight: 700;
    }

    .header-meta {
      font-size: 7pt;
      color: #475569;
      text-align: right;
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3.2mm;
      border-top: 1px solid #E2E8F0;
      font-size: 7pt;
      color: #64748B;
      margin-top: 3mm;
    }

    .footer-page {
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      color: #071638;
    }

    /* Typography & Section Blocks */
    .section-badge {
      display: inline-block;
      font-size: 6.5pt;
      font-family: 'Space Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: #145BFF;
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      padding: 2.5px 9px;
      border-radius: 20px;
      margin-bottom: 2mm;
      font-weight: 700;
    }

    .section-title {
      font-family: 'Sora', sans-serif;
      font-size: 16.5pt;
      font-weight: 800;
      color: #071638;
      margin: 0 0 2mm 0;
      letter-spacing: -0.4px;
      line-height: 1.18;
    }

    .accent-blue {
      color: #145BFF;
    }

    .section-lead {
      color: #475569;
      font-size: 8.6pt;
      line-height: 1.5;
      margin: 0 0 4mm 0;
    }

    /* Cards & Surfaces */
    .card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 11px 13px;
    }

    .card-white {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 10px;
      padding: 11px 13px;
    }

    .card-accent {
      background: linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%);
      border: 1.5px solid #93C5FD;
      border-radius: 10px;
      padding: 12px 14px;
    }

    .card-navy {
      background: linear-gradient(135deg, #071638 0%, #0D2B75 100%);
      color: #FFFFFF;
      border-radius: 12px;
      padding: 14px 16px;
    }

    .pill {
      display: inline-block;
      font-size: 6.4pt;
      padding: 2px 7px;
      border-radius: 5px;
      background: #DBEAFE;
      color: #1D4ED8;
      font-weight: 700;
      font-family: 'Space Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .pill-green {
      display: inline-block;
      font-size: 6.4pt;
      padding: 2px 7px;
      border-radius: 5px;
      background: #D1FAE5;
      color: #047857;
      font-weight: 700;
      font-family: 'Space Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    /* Cover Specific */
    .cover-hero {
      background: linear-gradient(135deg, #071638 0%, #0B2563 65%, #145BFF 100%);
      color: #FFFFFF;
      border-radius: 14px;
      padding: 15mm 14mm 12mm 14mm;
      position: relative;
      overflow: hidden;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .kpi-box {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-top: 3px solid #145BFF;
      border-radius: 9px;
      padding: 8px 9px;
      text-align: center;
    }

    .kpi-val {
      font-family: 'Sora', sans-serif;
      font-size: 14pt;
      font-weight: 800;
      color: #071638;
      line-height: 1.1;
    }

    .kpi-lbl {
      font-size: 6.5pt;
      font-weight: 700;
      color: #475569;
      margin-top: 3px;
      line-height: 1.25;
    }

    /* Comparison Table */
    table.cmp-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.4pt;
      border-radius: 9px;
      overflow: hidden;
      border: 1px solid #CBD5E1;
    }

    table.cmp-table th {
      text-align: left;
      padding: 6px 9px;
      font-family: 'Sora', sans-serif;
      font-size: 7.4pt;
      font-weight: 800;
    }

    table.cmp-table td {
      padding: 5.5px 9px;
      border-top: 1px solid #E2E8F0;
      vertical-align: top;
      line-height: 1.35;
    }
  </style>
</head>
<body>

  <!-- ======================================================================= -->
  <!-- PAGE 1: COVER & COMMERCIAL VALUE PROPOSITION -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <!-- Top Cover Hero Banner -->
      <div class="cover-hero">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6mm;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${logoImg}" style="height: 36px; width: 36px; object-fit: contain; border-radius: 9px; background: #FFFFFF; padding: 4px;" alt="Nordible Technologies">
            <div>
              <div class="font-heading" style="font-size: 12.5pt; font-weight: 800; color: #FFFFFF; letter-spacing: -0.2px; line-height: 1.1;">NORDIBLE TECHNOLOGIES</div>
              <div class="font-mono" style="font-size: 6.8pt; color: #93C5FD; letter-spacing: 1px; text-transform: uppercase;">Frankfurt am Main · Rhein-Main · EU</div>
            </div>
          </div>
          <span style="font-family: 'Space Mono', monospace; font-size: 7pt; font-weight: 700; color: #FFFFFF; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.28); padding: 4px 10px; border-radius: 20px;">
            ${isDe ? 'B2B Lösungsbroschüre 2026' : 'B2B Solutions Brochure 2026'}
          </span>
        </div>

        <h1 class="font-heading" style="font-size: 22pt; font-weight: 800; color: #FFFFFF; margin: 0 0 3mm 0; line-height: 1.16; letter-spacing: -0.5px;">
          ${isDe
            ? 'Mehr Kunden gewinnen.<br>Kosten mit KI senken. <span style="color: #60A5FA;">Schneller wachsen.</span>'
            : 'Win More Customers.<br>Cut Costs with AI. <span style="color: #60A5FA;">Scale Faster.</span>'}
        </h1>

        <p style="font-size: 9pt; color: #E2E8F0; margin: 0; line-height: 1.5; max-width: 160mm;">
          ${isDe
            ? 'Ihr direkter Technologie- &amp; Wachstumspartner in Frankfurt am Main. Wir entwickeln kundenstarke Websites, autonome KI-Workflows und Google-/KI-Sichtbarkeitssysteme, die messbar neue Aufträge bringen – in 2 bis 4 Wochen statt Monaten.'
            : 'Your direct technology &amp; growth partner in Frankfurt am Main. We build high-converting platforms, autonomous AI workflows, and Google/AI search engines that bring in measurable new business—delivered in 2–4 weeks, not months.'}
        </p>
      </div>

      <!-- 4 Executive Business KPIs -->
      <div class="kpi-grid" style="margin-top: 4.5mm; margin-bottom: 4.5mm;">
        <div class="kpi-box">
          <div class="kpi-val">2–4 ${isDe ? 'Woc.' : 'Wks'}</div>
          <div class="kpi-lbl">${isDe ? 'Bis zum produktiven Launch (MVP)' : 'To Live Launch &amp; ROI'}</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-val">+1.045%</div>
          <div class="kpi-lbl">${isDe ? 'Organisches Klickwachstum (90 Tage)' : 'Verified Organic Click Surge'}</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-val">${isDe ? 'Bis 80%' : 'Up to 80%'}</div>
          <div class="kpi-lbl">${isDe ? 'Weniger manuelle Büroarbeit durch KI' : 'Less Manual Admin via AI'}</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-val">100% IP</div>
          <div class="kpi-lbl">${isDe ? 'Code-Eigentum &amp; DSGVO-konform' : 'Full Code Ownership &amp; GDPR'}</div>
        </div>
      </div>

      <!-- Visual Growth Proof Showcase -->
      <div class="card-white" style="padding: 10px 12px; margin-bottom: 4mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <div>
            <span class="pill-green">${isDe ? 'Messbares Kundenwachstum' : 'Verified Client Acquisition'}</span>
            <span class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin-left: 6px;">
              ${isDe ? '90-Tage Google &amp; KI-Suche (ChatGPT / Gemini) Ergebnisse' : '90-Day Google &amp; AI Search (ChatGPT / Gemini) Impact'}
            </span>
          </div>
          <span class="font-mono" style="font-size: 6.6pt; color: #64748B;">€0 Ad Spend</span>
        </div>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid #E2E8F0; background: #071638;">
          <img src="${seoImg}" style="width: 100%; height: 67mm; object-fit: cover; object-position: center; display: block;" alt="Nordible 90-Day SEO and AI Search Results">
        </div>
        <div style="font-size: 7.2pt; color: #475569; margin-top: 5px; line-height: 1.4;">
          ${isDe
            ? '<strong>Geschäftsnutzen:</strong> Unternehmen, die über Google &amp; KI-Assistenten direkt gefunden werden, gewinnen kaufbereite B2B-Kunden ohne dauerhafte Abhängigkeit von teuren Anzeigenbudgets.'
            : '<strong>Business Impact:</strong> Businesses recommended directly on Google Page 1 and inside ChatGPT/Gemini win high-intent buyers consistently without relying solely on rising ad spend.'}
        </div>
      </div>

      <!-- Organized Table of Contents Strip -->
      <div class="card" style="padding: 9px 12px;">
        <div class="font-mono" style="font-size: 6.6pt; font-weight: 700; color: #145BFF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 5px;">
          ${isDe ? 'Übersicht: Was Sie in dieser Broschüre erwartet' : 'Organized Guide: What You Will Find Inside'}
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; font-size: 6.8pt;">
          <div><strong style="color: #145BFF;">02</strong> · ${isDe ? 'Ihre Vorteile &amp; ROI' : 'Business Benefits'}</div>
          <div><strong style="color: #145BFF;">03</strong> · ${isDe ? 'Lösungen &amp; Ablauf' : 'Solutions &amp; Process'}</div>
          <div><strong style="color: #145BFF;">04</strong> · ${isDe ? 'Kundenergebnisse' : 'Client Results'}</div>
          <div><strong style="color: #145BFF;">05</strong> · ${isDe ? 'Preise &amp; Garantie' : 'Models &amp; Guarantee'}</div>
          <div><strong style="color: #145BFF;">06</strong> · ${isDe ? 'Gründer &amp; Kontakt' : 'Leadership &amp; Audit'}</div>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 1)}
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 2: BUSINESS BENEFITS & WHY CLIENTS CHOOSE NORDIBLE -->
  <!-- ======================================================================= -->
  <div class="page">
    ${renderHeader(isDe, isDe ? '01 · Ihr geschäftlicher Nutzen' : '01 · Business Benefits')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Warum Unternehmen Nordible wählen' : 'Why High-Growth Companies Choose Us'}</span>
        <h2 class="section-title">${isDe ? 'Messbare Geschäftsvorteile <span class="accent-blue">statt komplexer IT-Theorie</span>' : 'Tangible Business Outcomes <span class="accent-blue">Without Agency Overhead</span>'}</h2>
        <p class="section-lead">
          ${isDe
            ? 'Wir messen unseren Erfolg nicht an Codezeilen, sondern an Ihren Ergebnissen: mehr qualifizierte Kundenanfragen, schnellere Abläufe im Team und volle Kosten- und Datenkontrolle.'
            : 'We do not measure success by lines of code—we measure it by your commercial outcomes: more qualified customer inquiries, leaner team operations, and complete ownership.'}
        </p>

        <!-- 5 Business Benefit Cards -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-bottom: 3.5mm;">
          <div class="card-accent">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
              <span class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #071638;">${isDe ? '1. Schneller zum Umsatz' : '1. Faster Time-to-Revenue'}</span>
              <span class="pill">2–4 ${isDe ? 'Wochen' : 'Weeks'}</span>
            </div>
            <p style="font-size: 7.4pt; color: #334155; line-height: 1.45; margin: 0;">
              ${isDe
                ? 'Während klassische Agenturen Monate für Konzepte brauchen, liefern wir einsatzbereite Websites, Portale und KI-Workflows in 2–4 Wochen. Sie gewinnen früher Kunden und erzielen schneller ROI.'
                : 'While traditional agencies take months just to align specs, we launch working websites, portals, and AI tools in 2–4 weeks—helping you capture market share and revenue sooner.'}
            </p>
          </div>

          <div class="card-accent">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
              <span class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #071638;">${isDe ? '2. Planbare Neukundengewinnung' : '2. Automated Customer Acquisition'}</span>
              <span class="pill-green">SEO + GEO</span>
            </div>
            <p style="font-size: 7.4pt; color: #334155; line-height: 1.45; margin: 0;">
              ${isDe
                ? 'Verbinden Sie verkaufspsychologisches UI/UX mit Google-SEO und KI-Suche (ChatGPT, Gemini). Kaufbereite Entscheider finden Ihr Unternehmen genau dann, wenn Bedarf besteht.'
                : 'Combine conversion-focused UI/UX with Google Page-1 SEO and AI Search Optimization (ChatGPT, Gemini) so high-intent buyers find and trust you organically.'}
            </p>
          </div>

          <div class="card-white">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
              <span class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #071638;">${isDe ? '3. Bis zu 80 % weniger Routinearbeit' : '3. Cut Operational Busywork up to 80%'}</span>
              <span class="pill">24/7 KI</span>
            </div>
            <p style="font-size: 7.4pt; color: #475569; line-height: 1.45; margin: 0;">
              ${isDe
                ? 'Unsere KI-Agenten qualifizieren Leads, beantworten Kundenfragen, lesen PDFs/Rechnungen aus und pflegen Ihr CRM automatisch – rund um die Uhr ohne zusätzliches Personal.'
                : 'Custom AI agents qualify leads, answer customer inquiries, extract invoice/PDF data, and sync your CRM automatically—saving your team hours every week.'}
            </p>
          </div>

          <div class="card-white">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
              <span class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #071638;">${isDe ? '4. Direkte Gründerverantwortung' : '4. Direct Founder Accountability'}</span>
              <span class="pill">0% Overhead</span>
            </div>
            <p style="font-size: 7.4pt; color: #475569; line-height: 1.45; margin: 0;">
              ${isDe
                ? 'Keine Junior-Übergaben, keine Account-Manager-Schleifen. Sie arbeiten direkt mit Gründer &amp; Architekt Kabeer Shah – für klare Entscheidungen und 100 % Termintreue.'
                : 'No middlemen, no junior handoffs, no agency layers. You collaborate directly with Founder &amp; Architect Kabeer Shah for clear strategy and 100% on-time delivery.'}
            </p>
          </div>
        </div>

        <!-- Pillar 5 Wide Highlight -->
        <div class="card" style="display: flex; justify-content: space-between; align-items: center; gap: 14px; margin-bottom: 4mm;">
          <div style="flex: 1;">
            <div class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin-bottom: 2px;">
              ${isDe ? '5. 100 % Eigentum &amp; DSGVO-Sicherheit ohne Abhängigkeiten' : '5. 100% IP Ownership &amp; German GDPR Security'}
            </div>
            <div style="font-size: 7.3pt; color: #475569; line-height: 1.4;">
              ${isDe
                ? 'Jede Zeile Quellcode, jede Domain und alle Daten gehören ab dem ersten Tag Ihnen. Keine versteckten Lizenzgebühren, voller EU-Datenschutz.'
                : 'You own every line of source code, every domain, and all customer data from day one. Zero recurring lock-in fees and full EU GDPR compliance.'}
            </div>
          </div>
          <span class="pill-green" style="white-space: nowrap;">${isDe ? 'Kein Lock-In' : 'Zero Lock-In'}</span>
        </div>

        <!-- Comparison Table -->
        <div>
          <div class="font-mono" style="font-size: 6.8pt; font-weight: 700; color: #145BFF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px;">
            ${isDe ? 'Direktvergleich: Klassische Agentur vs. Nordible Technologies' : 'Side-by-Side Comparison: Traditional Agency vs. Nordible Technologies'}
          </div>
          <table class="cmp-table">
            <thead>
              <tr style="background: #071638; color: #FFFFFF;">
                <th style="width: 24%;">${isDe ? 'Kriterium' : 'Factor'}</th>
                <th style="width: 36%; color: #CBD5E1;">${isDe ? 'Klassische Agentur' : 'Traditional Agency'}</th>
                <th style="width: 40%; background: #145BFF; color: #FFFFFF;">Nordible Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #FFFFFF;">
                <td><strong>${isDe ? 'Umsetzungszeit' : 'Speed to Launch'}</strong></td>
                <td style="color: #64748B;">${isDe ? '3–9 Monate bis zum ersten Release' : '3–9 months before first live release'}</td>
                <td style="color: #071638; font-weight: 600;">${isDe ? '2–4 Wochen bis zum produktiven MVP' : '2–4 weeks to working live MVP'}</td>
              </tr>
              <tr style="background: #F8FAFC;">
                <td><strong>${isDe ? 'Ansprechpartner' : 'Who Builds It'}</strong></td>
                <td style="color: #64748B;">${isDe ? 'Vertriebler + wechselnde Junior-Teams' : 'Account managers + rotating juniors'}</td>
                <td style="color: #071638; font-weight: 600;">${isDe ? 'Direkt mit Gründer &amp; Principal Architect' : 'Direct with Founder &amp; Senior Architect'}</td>
              </tr>
              <tr style="background: #FFFFFF;">
                <td><strong>${isDe ? 'Kundengewinnung' : 'Growth Focus'}</strong></td>
                <td style="color: #64748B;">${isDe ? 'Nur Technik oder nur Design ohne ROI-Fokus' : 'Siloed tech without conversion or SEO'}</td>
                <td style="color: #071638; font-weight: 600;">${isDe ? 'Software + Conversion-UX + SEO &amp; KI-Suche' : 'Engineering + Conversion UX + SEO &amp; GEO'}</td>
              </tr>
              <tr style="background: #F8FAFC;">
                <td><strong>${isDe ? 'Kosten &amp; Eigentum' : 'Cost &amp; Ownership'}</strong></td>
                <td style="color: #64748B;">${isDe ? 'Teure Stundensätze &amp; Agentur-Bindung' : 'Opaque hourly retainers &amp; lock-in'}</td>
                <td style="color: #071638; font-weight: 600;">${isDe ? 'Klare Festpreise &amp; 100 % Code-Eigentum' : 'Fixed-scope clarity &amp; 100% IP ownership'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 2)}
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 3: OUTCOME-DRIVEN SOLUTIONS & 3-STEP DELIVERY -->
  <!-- ======================================================================= -->
  <div class="page">
    ${renderHeader(isDe, isDe ? '02 · Lösungen für Ihr Wachstum' : '02 · Outcome-Driven Solutions')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Leistungsspektrum nach Geschäftsnutzen' : 'Solutions Organized by Business Outcome'}</span>
        <h2 class="section-title">${isDe ? 'Zwei Wachstumsmotoren: <span class="accent-blue">Mehr Kunden &amp; Effiziente Systeme</span>' : 'Two Growth Engines: <span class="accent-blue">Win Clients &amp; Automate Delivery</span>'}</h2>
        <p class="section-lead">
          ${isDe
            ? 'Statt isolierter Einzellösungen verbinden wir Sichtbarkeit, Software und KI-Automatisierung zu einem nahtlosen System, das Neukunden anzieht und intern Arbeit abnimmt.'
            : 'Instead of disconnected vendors, we unify customer acquisition, custom software, and AI automation into one cohesive growth system.'}
        </p>

        <!-- 2x2 Outcome Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 4.5mm;">
          <!-- Block 1 -->
          <div class="card-white" style="border-top: 3px solid #145BFF;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span class="pill">${isDe ? 'Mehr Neukunden' : 'More Customers'}</span>
              <span class="font-mono" style="font-size: 6.5pt; color: #64748B;">01</span>
            </div>
            <h3 class="font-heading" style="font-size: 10pt; font-weight: 800; color: #071638; margin: 0 0 4px 0;">
              ${isDe ? 'Google-SEO, KI-Suche (GEO) &amp; Video-Marketing' : 'AI Search (GEO), Local SEO &amp; Content Growth'}
            </h3>
            <p style="font-size: 7.3pt; color: #475569; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe
                ? 'Wir machen Ihr Unternehmen auf Google Seite 1, Google Maps und in KI-Antworten (ChatGPT, Gemini, Perplexity) sichtbar – ergänzt durch professionelle Reels &amp; Social-Media-Kanäle.'
                : 'Rank on Google Page 1, Google Maps Top 3, and inside ChatGPT/Gemini recommendations—paired with high-impact video reels and social media management.'}
            </p>
            <div style="font-size: 6.8pt; color: #047857; font-weight: 700;">
              ✓ ${isDe ? 'Ergebnis: Qualifizierte Anfragen ohne steigende Werbekosten' : 'Outcome: Inbound buyer leads without endless ad spend'}
            </div>
          </div>

          <!-- Block 2 -->
          <div class="card-white" style="border-top: 3px solid #145BFF;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span class="pill">${isDe ? 'Höhere Konversion' : 'Higher Conversion'}</span>
              <span class="font-mono" style="font-size: 6.5pt; color: #64748B;">02</span>
            </div>
            <h3 class="font-heading" style="font-size: 10pt; font-weight: 800; color: #071638; margin: 0 0 4px 0;">
              ${isDe ? 'Verkaufsstarke Websites, Portale &amp; Mobile Apps' : 'High-Converting Websites, Portals &amp; Mobile Apps'}
            </h3>
            <p style="font-size: 7.3pt; color: #475569; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe
                ? 'Blitzschnelle Web-Plattformen, Kundenportale und iOS/Android-Apps mit wissenschaftlich fundierter UX (Fitts’s Law), die Besucher gezielt zu Buchungen und Anfragen führen.'
                : 'Lightning-fast web platforms, client portals, and iOS/Android apps engineered with science-backed UX to convert visitors into booked consultations and orders.'}
            </p>
            <div style="font-size: 6.8pt; color: #047857; font-weight: 700;">
              ✓ ${isDe ? 'Ergebnis: Höhere Abschlussquoten &amp; 100 % Code-Eigentum' : 'Outcome: Better conversion rates &amp; 100% IP ownership'}
            </div>
          </div>

          <!-- Block 3 -->
          <div class="card-white" style="border-top: 3px solid #059669;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span class="pill-green">${isDe ? 'Kosten &amp; Zeit sparen' : 'Lower OpEx'}</span>
              <span class="font-mono" style="font-size: 6.5pt; color: #64748B;">03</span>
            </div>
            <h3 class="font-heading" style="font-size: 10pt; font-weight: 800; color: #071638; margin: 0 0 4px 0;">
              ${isDe ? 'Autonome KI-Agenten &amp; Prozessautomatisierung' : 'Autonomous AI Agents &amp; Workflow Automation'}
            </h3>
            <p style="font-size: 7.3pt; color: #475569; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe
                ? '24/7 KI-Assistenten für Kunden-Onboarding, Lead-Vorqualifizierung, Dokumenten-/Rechnungsprüfung und nahtlose Anbindung an CRM, ERP und E-Mail – DSGVO-sicher.'
                : '24/7 AI assistants for client onboarding, lead qualification, invoice/PDF extraction, and seamless CRM/ERP orchestration under strict EU GDPR guardrails.'}
            </p>
            <div style="font-size: 6.8pt; color: #047857; font-weight: 700;">
              ✓ ${isDe ? 'Ergebnis: Bis zu 80 % Zeitersparnis bei Routineaufgaben' : 'Outcome: Up to 80% faster operations with zero extra staff'}
            </div>
          </div>

          <!-- Block 4 -->
          <div class="card-white" style="border-top: 3px solid #059669;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span class="pill-green">${isDe ? 'Stabilität &amp; Vertrauen' : 'Scale &amp; Trust'}</span>
              <span class="font-mono" style="font-size: 6.5pt; color: #64748B;">04</span>
            </div>
            <h3 class="font-heading" style="font-size: 10pt; font-weight: 800; color: #071638; margin: 0 0 4px 0;">
              ${isDe ? 'Cloud-Modernisierung, APIs &amp; Business-E-Mail' : 'Cloud Systems, APIs &amp; Branded Business Email'}
            </h3>
            <p style="font-size: 7.3pt; color: #475569; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe
                ? 'Wir lösen langsame Altsysteme ab, verbinden getrennte Tools über sichere APIs und richten professionelle Firmen-E-Mails (ihrname@firma.de) mit höchster Zustellbarkeit ein.'
                : 'Modernize slow legacy tools, connect disconnected software via clean APIs, and deploy secure custom-domain corporate email with enterprise deliverability.'}
            </p>
            <div style="font-size: 6.8pt; color: #047857; font-weight: 700;">
              ✓ ${isDe ? 'Ergebnis: Ausfallsichere Abläufe &amp; professioneller Auftritt' : 'Outcome: Zero-downtime reliability &amp; stronger brand trust'}
            </div>
          </div>
        </div>

        <!-- 3-Step Delivery Process -->
        <div class="card-accent" style="padding: 11px 14px;">
          <div class="font-mono" style="font-size: 6.8pt; font-weight: 700; color: #145BFF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px;">
            ${isDe ? 'Unser strukturierter Ablauf in 3 klaren Schritten' : 'Our Structured 3-Step Delivery Process'}
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div>
              <div class="font-heading" style="font-size: 8.6pt; font-weight: 800; color: #071638;">
                <span style="color: #145BFF;">01.</span> ${isDe ? 'Kostenloses ROI-Audit' : 'Free ROI &amp; Feasibility Audit'}
              </div>
              <div style="font-size: 7pt; color: #475569; line-height: 1.38; margin-top: 2px;">
                ${isDe ? '20-Min.-Analyse Ihrer Ziele, Engpässe &amp; Such-Sichtbarkeit – inkl. konkretem Fahrplan.' : '20-min review of your growth goals, workflow bottlenecks, and AI/search visibility.'}
              </div>
            </div>
            <div>
              <div class="font-heading" style="font-size: 8.6pt; font-weight: 800; color: #071638;">
                <span style="color: #145BFF;">02.</span> ${isDe ? '2–4 Wochen Build-Sprint' : '2–4 Week Build Sprint'}
              </div>
              <div style="font-size: 7pt; color: #475569; line-height: 1.38; margin-top: 2px;">
                ${isDe ? 'Wöchentliche Live-Demos, direktes Gründer-Feedback und transparenter Festpreis.' : 'Weekly live previews, direct founder collaboration, and guaranteed milestone delivery.'}
              </div>
            </div>
            <div>
              <div class="font-heading" style="font-size: 8.6pt; font-weight: 800; color: #071638;">
                <span style="color: #145BFF;">03.</span> ${isDe ? 'Launch &amp; Kundengewinnung' : 'Launch, Own &amp; Scale'}
              </div>
              <div style="font-size: 7pt; color: #475569; line-height: 1.38; margin-top: 2px;">
                ${isDe ? '100 % Code-Übergabe, Team-Einarbeitung und laufende Optimierung für mehr Anfragen.' : '100% source code handover, team onboarding, and measurable lead/ROI tracking.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 3)}
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 4: VERIFIED CLIENT RESULTS & CASE STUDIES -->
  <!-- ======================================================================= -->
  <div class="page">
    ${renderHeader(isDe, isDe ? '03 · Verifizierte Kundenergebnisse' : '03 · Verified Client Results')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Nachweisbare Wirkung in der Praxis' : 'Proven Commercial &amp; Enterprise Impact'}</span>
        <h2 class="section-title">${isDe ? 'Echte Projekte. <span class="accent-blue">Messbare Umsatz- &amp; Kostenvorteile.</span>' : 'Real Deployments. <span class="accent-blue">Measurable Growth &amp; Savings.</span>'}</h2>
        <p class="section-lead">
          ${isDe
            ? 'Vom regionalen Mittelstand in Frankfurt bis zu globalen FinTech- und MedTech-Konzernen: Unsere Systeme liefern nachweisbare Resultate.'
            : 'From regional businesses in Frankfurt to global FinTech and MedTech leaders, our engineering and growth playbooks produce verifiable outcomes.'}
        </p>

        <!-- 2x2 Case Study Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-bottom: 3.5mm;">
          <!-- Case 1: Shams Consult -->
          <div class="card-white" style="padding: 9px 11px;">
            <div style="position: relative; border-radius: 7px; overflow: hidden; height: 32mm; margin-bottom: 6px; border: 1px solid #E2E8F0;">
              <img src="${shamsHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="Shams Consult Architecture">
              <span class="pill" style="position: absolute; top: 5px; right: 5px; background: rgba(7,22,56,0.9); color: #fff;">${isDe ? 'Regionales B2B' : 'Regional B2B'}</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin: 0 0 2px 0;">Shams Consult Architektur · Frankfurt</h4>
            <p style="font-size: 7pt; color: #475569; line-height: 1.4; margin: 0 0 5px 0;">
              ${isDe
                ? '<strong>Lösung:</strong> Performance-Website, regionale SEO/GEO-Architektur und maßgeschneiderte KI-Workflows zur Entlastung des Tagesgeschäfts.'
                : '<strong>Solution:</strong> High-speed web platform, regional SEO/GEO architecture, and custom AI agents streamlining daily office workflows.'}
            </p>
            <div class="pill-green">${isDe ? 'Google Seite 1 &amp; KI-Empfehlungen (Rhein-Main)' : 'Google Page 1 &amp; ChatGPT Visibility'}</div>
          </div>

          <!-- Case 2: 90-Day Multi-Industry SEO & GEO -->
          <div class="card-white" style="padding: 9px 11px;">
            <div style="position: relative; border-radius: 7px; overflow: hidden; height: 32mm; margin-bottom: 6px; border: 1px solid #E2E8F0; background: #071638;">
              <img src="${seoImg}" style="width: 100%; height: 100%; object-fit: cover;" alt="90-Day SEO Growth">
              <span class="pill" style="position: absolute; top: 5px; right: 5px; background: rgba(7,22,56,0.9); color: #fff;">SEO &amp; GEO</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin: 0 0 2px 0;">${isDe ? '90-Tage Such- &amp; KI-Wachstum (3 Kunden)' : '90-Day Search &amp; AI Growth (3 Clients)'}</h4>
            <p style="font-size: 7pt; color: #475569; line-height: 1.4; margin: 0 0 5px 0;">
              ${isDe
                ? '<strong>Lösung:</strong> Strukturierte Landing-Architektur, fehlerfreie Schema.org-Daten und KI-lesbare Metadaten ohne bezahlte Anzeigen.'
                : '<strong>Solution:</strong> Intent-matched local landing architecture, error-free Schema.org graphs, and AI-crawlable metadata at €0 ad spend.'}
            </p>
            <div class="pill-green">+1.045% – +1.244% ${isDe ? 'Klicks · Ø Pos. 9,4' : 'Clicks · Avg. Pos 9.4'}</div>
          </div>

          <!-- Case 3: Vantive / Baxter -->
          <div class="card-white" style="padding: 9px 11px;">
            <div style="position: relative; border-radius: 7px; overflow: hidden; height: 32mm; margin-bottom: 6px; border: 1px solid #E2E8F0;">
              <img src="${vantiveHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="Vantive Baxter Healthcare">
              <span class="pill" style="position: absolute; top: 5px; right: 5px; background: rgba(7,22,56,0.9); color: #fff;">Enterprise IoT</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin: 0 0 2px 0;">Vantive / Baxter · Remote Service Tool</h4>
            <p style="font-size: 7pt; color: #475569; line-height: 1.4; margin: 0 0 5px 0;">
              ${isDe
                ? '<strong>Lösung:</strong> Cloud-Telemetrie &amp; Ferndiagnose für medizinische Geräte im Klinik- und Heimbetrieb unter strengsten Standards.'
                : '<strong>Solution:</strong> Cloud telemetry and remote diagnostic platform for critical medical devices across hospital and home care.'}
            </p>
            <div class="pill-green">${isDe ? '50 % weniger Vor-Ort-Einsätze · +75 % Diagnosegenauigkeit' : '50% Fewer On-Site Dispatches · +75% Accuracy'}</div>
          </div>

          <!-- Case 4: GE Healthcare & Instarem -->
          <div class="card-white" style="padding: 9px 11px;">
            <div style="position: relative; border-radius: 7px; overflow: hidden; height: 32mm; margin-bottom: 6px; border: 1px solid #E2E8F0;">
              <img src="${geHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="GE Healthcare CareIntellect">
              <span class="pill" style="position: absolute; top: 5px; right: 5px; background: rgba(7,22,56,0.9); color: #fff;">MedTech &amp; FinTech</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.2pt; font-weight: 800; color: #071638; margin: 0 0 2px 0;">GE Healthcare &amp; Nium / Instarem</h4>
            <p style="font-size: 7pt; color: #475569; line-height: 1.4; margin: 0 0 5px 0;">
              ${isDe
                ? '<strong>Lösung:</strong> Onkologie-Datenplattform (CareIntellect) sowie globale Zahlungsstrecken mit PCI-DSS / DSGVO Compliance.'
                : '<strong>Solution:</strong> Oncology clinical intelligence (CareIntellect) &amp; global payment rails engineered for PCI-DSS / GDPR scale.'}
            </p>
            <div class="pill-green">${isDe ? '60 % schnellere Datenverarbeitung · 99,99 % Uptime' : '60% Faster Data Processing · 99.99% Uptime'}</div>
          </div>
        </div>

        <!-- Client Testimonial Callout -->
        <div class="card-accent" style="padding: 10px 14px;">
          <div style="font-size: 7.4pt; color: #071638; line-height: 1.45; font-style: italic;">
            ${isDe
              ? '„Die Zusammenarbeit mit Kabeer Shah hebt sich deutlich von klassischen Agenturen ab. Besonders schätzen wir den direkten Zugang auf Gründerebene: Keine Reibungsverluste durch Zwischeninstanzen – sondern echte strategische Partnerschaft mit messbarem Nutzen.“'
              : '“Collaborating with Kabeer Shah stands apart from traditional agencies. Direct founder-level access means zero friction, strategic clarity, and technical solutions that demonstrably improve business efficiency and outcomes.”'}
          </div>
          <div style="font-size: 6.8pt; font-weight: 700; color: #145BFF; margin-top: 4px; font-family: 'Space Mono', monospace;">
            — ${isDe ? 'Shams Consult Architektur &amp; Stadtplanung · Frankfurt / Rhein-Main (5.0 ★ Kundenbewertung)' : 'Verified B2B &amp; Enterprise Leadership Reviews · 5.0 ★ Rating'}
          </div>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 4)}
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 5: COLLABORATION MODELS & RISK-REVERSAL GUARANTEE -->
  <!-- ======================================================================= -->
  <div class="page">
    ${renderHeader(isDe, isDe ? '04 · Zusammenarbeitsmodelle &amp; Garantie' : '04 · Engagement Models &amp; Guarantee')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Planbare Zusammenarbeit' : 'Transparent Investment Models'}</span>
        <h2 class="section-title">${isDe ? 'Klare Modelle mit <span class="accent-blue">voller Budget- und Terminsicherheit</span>' : 'Predictable Models Built for <span class="accent-blue">Fast Return on Investment</span>'}</h2>
        <p class="section-lead">
          ${isDe
            ? 'Keine versteckten Agentur-Aufschläge oder endlose Stundenzettel. Wählen Sie das Modell, das exakt zu Ihrer aktuellen Wachstumsphase passt.'
            : 'Zero hidden agency markups or open-ended billing surprises. Choose the engagement structure tailored to your immediate commercial goal.'}
        </p>

        <!-- 3 Organized Models -->
        <div style="display: flex; flex-direction: column; gap: 9px; margin-bottom: 4.5mm;">
          <!-- Model A -->
          <div class="card-white" style="display: flex; justify-content: space-between; align-items: center; gap: 14px; border-left: 4px solid #145BFF;">
            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                <span class="pill">${isDe ? 'Modell A · Schnellstart' : 'Model A · Rapid Launch'}</span>
                <span class="font-mono" style="font-size: 6.8pt; color: #64748B;">2–4 ${isDe ? 'Wochen' : 'Weeks'}</span>
              </div>
              <h3 class="font-heading" style="font-size: 10.5pt; font-weight: 800; color: #071638; margin: 0 0 3px 0;">
                ${isDe ? 'Rapid MVP &amp; Neukunden-Plattform' : 'Rapid MVP &amp; Customer Acquisition Launch'}
              </h3>
              <p style="font-size: 7.4pt; color: #475569; line-height: 1.42; margin: 0;">
                ${isDe
                  ? 'Ideal für eine neue verkaufsstarke Website, ein MVP-Softwareprodukt oder einen KI-Lead-Assistenten. Fester Projektumfang, klarer Termin, schneller ROI.'
                  : 'Ideal for launching a high-converting website, functional MVP app, or automated AI lead workflow with a fixed scope and guaranteed go-live date.'}
              </p>
            </div>
            <div style="text-align: right; min-width: 34mm; border-left: 1px solid #E2E8F0; padding-left: 12px;">
              <div class="font-heading" style="font-size: 11.5pt; font-weight: 800; color: #145BFF;">${isDe ? 'Festpreis' : 'Fixed Scope'}</div>
              <div style="font-size: 6.8pt; color: #047857; font-weight: 700; margin-top: 2px;">${isDe ? '100% Budget-Sicherheit' : '100% Budget Clarity'}</div>
            </div>
          </div>

          <!-- Model B -->
          <div class="card-accent" style="display: flex; justify-content: space-between; align-items: center; gap: 14px; border-left: 4px solid #071638;">
            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                <span class="pill" style="background: #071638; color: #fff;">${isDe ? 'Modell B · Beliebteste Wahl' : 'Model B · Most Popular'}</span>
                <span class="font-mono" style="font-size: 6.8pt; color: #475569;">6–10 ${isDe ? 'Wochen' : 'Weeks'}</span>
              </div>
              <h3 class="font-heading" style="font-size: 10.5pt; font-weight: 800; color: #071638; margin: 0 0 3px 0;">
                ${isDe ? 'Produktions-Plattform &amp; KI-Systemintegration' : 'Production Platform &amp; AI Workflow Suite'}
              </h3>
              <p style="font-size: 7.4pt; color: #334155; line-height: 1.42; margin: 0;">
                ${isDe
                  ? 'Vollständige Unternehmenssoftware, CRM/ERP-Vernetzung, DSGVO-konforme KI-Agenten und skalierbare Cloud-Infrastruktur inkl. 100 % Quellcode-Übergabe.'
                  : 'Complete bespoke software, CRM/ERP integrations, GDPR-compliant AI pipelines, and scalable cloud deployment with 100% intellectual property transfer.'}
              </p>
            </div>
            <div style="text-align: right; min-width: 34mm; border-left: 1px solid #93C5FD; padding-left: 12px;">
              <div class="font-heading" style="font-size: 11.5pt; font-weight: 800; color: #071638;">${isDe ? 'Meilensteine' : 'Milestone'}</div>
              <div style="font-size: 6.8pt; color: #145BFF; font-weight: 700; margin-top: 2px;">${isDe ? '100% Code-Eigentum' : '100% IP Ownership'}</div>
            </div>
          </div>

          <!-- Model C -->
          <div class="card-white" style="display: flex; justify-content: space-between; align-items: center; gap: 14px; border-left: 4px solid #059669;">
            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                <span class="pill-green">${isDe ? 'Modell C · Laufendes Wachstum' : 'Model C · Continuous Growth'}</span>
                <span class="font-mono" style="font-size: 6.8pt; color: #64748B;">${isDe ? 'Monatlich kündbar' : 'Monthly'}</span>
              </div>
              <h3 class="font-heading" style="font-size: 10.5pt; font-weight: 800; color: #071638; margin: 0 0 3px 0;">
                ${isDe ? 'Wachstumspartner &amp; Fractional CTO Retainer' : 'Growth Partner &amp; Fractional CTO Retainer'}
              </h3>
              <p style="font-size: 7.4pt; color: #475569; line-height: 1.42; margin: 0;">
                ${isDe
                  ? 'Kontinuierliche Weiterentwicklung, Google-SEO &amp; KI-Suche (GEO), Social-Media-/Video-Wachstum und direkter Architektur-Support für Ihr Team.'
                  : 'Ongoing feature sprints, SEO/GEO growth, social/video content production, and direct executive technology advisory on demand.'}
              </p>
            </div>
            <div style="text-align: right; min-width: 34mm; border-left: 1px solid #E2E8F0; padding-left: 12px;">
              <div class="font-heading" style="font-size: 11.5pt; font-weight: 800; color: #047857;">Retainer</div>
              <div style="font-size: 6.8pt; color: #047857; font-weight: 700; margin-top: 2px;">${isDe ? 'Garantierte Kapazität' : 'Guaranteed Velocity'}</div>
            </div>
          </div>
        </div>

        <!-- Risk-Reversal Guarantee Box -->
        <div class="card-navy" style="padding: 13px 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <span style="font-family: 'Space Mono', monospace; font-size: 7pt; font-weight: 700; color: #34D399; text-transform: uppercase; letter-spacing: 0.8px;">
              ✓ ${isDe ? 'Unsere Risiko-Umkehr-Garantie für Entscheider' : 'Our Risk-Reversal Guarantee for Decision Makers'}
            </span>
            <span style="font-family: 'Space Mono', monospace; font-size: 6.5pt; color: #93C5FD;">NDA · DSGVO · 100% IP</span>
          </div>
          <p style="font-size: 7.8pt; color: #E2E8F0; line-height: 1.5; margin: 0;">
            ${isDe
              ? 'Vor jedem Projekt erhalten Sie eine <strong>kostenfreie, ehrliche Machbarkeits- &amp; ROI-Einschätzung</strong> direkt von Gründer Kabeer Shah. Wenn sich eine Idee wirtschaftlich oder technisch nicht lohnt, sagen wir es Ihnen offen vorab – 100 % vertraulich mit beiderseitiger Geheimhaltungsvereinbarung (NDA).'
              : 'Before you commit a single euro, you receive a <strong>free, objective technical &amp; ROI feasibility review</strong> directly from Founder Kabeer Shah. If an approach is not commercially viable, we tell you upfront—100% confidential under mutual NDA.'}
          </p>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 5)}
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 6: LEADERSHIP, FREE AUDIT & CONTACT QR -->
  <!-- ======================================================================= -->
  <div class="page">
    ${renderHeader(isDe, isDe ? '05 · Führung &amp; Nächste Schritte' : '05 · Leadership &amp; Next Steps')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Ihr direkter Partner in Frankfurt am Main' : 'Your Direct Partner in Frankfurt am Main'}</span>
        <h2 class="section-title">${isDe ? 'Starten Sie mit einer <span class="accent-blue">kostenfreien Potenzialanalyse</span>' : 'Start With a <span class="accent-blue">Free Strategy &amp; ROI Audit</span>'}</h2>
        <p class="section-lead">
          ${isDe
            ? 'Kein unverbindliches Verkaufsgespräch, sondern konkrete Antworten in 20 Minuten – persönlich vor Ort in Frankfurt/Rhein-Main oder digital per Videocall.'
            : 'No pushy sales pitch—get concrete answers in 20 minutes, either in person across Frankfurt/Rhine-Main or online via video call.'}
        </p>

        <!-- Founder Card -->
        <div class="card-white" style="display: flex; gap: 14px; align-items: center; margin-bottom: 4mm; padding: 12px 14px;">
          <img src="${founderImg}" style="width: 74px; height: 92px; border-radius: 10px; object-fit: cover; object-position: top; border: 2px solid #145BFF; background: #071638;" alt="Kabeer Shah">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span class="pill">${isDe ? 'Gründer &amp; Solutions Architect' : 'Founder &amp; Solutions Architect'}</span>
                <h3 class="font-heading" style="font-size: 12.5pt; font-weight: 800; color: #071638; margin: 3px 0 2px 0;">${BROCHURE_CONFIG.founderName}</h3>
              </div>
              <span class="font-mono" style="font-size: 7pt; color: #64748B;">AWS Certified · B.Sc. IT</span>
            </div>
            <p style="font-size: 7.4pt; color: #475569; line-height: 1.45; margin: 2px 0 0 0;">
              ${isDe
                ? 'Über 12 Jahre Erfahrung in der Leitung geschäftskritischer Plattformen (u. a. GE Healthcare, Vantive/Baxter, Nium FinTech). Heute verbindet Kabeer Shah deutsche Qualitätsstandards mit modernster KI-Entwicklung, um mittelständischen Unternehmen und Wachstumsfirmen echte Wettbewerbsvorteile zu verschaffen.'
                : '12+ years leading mission-critical platforms for GE Healthcare, Vantive/Baxter, and Nium FinTech. Today, Kabeer Shah combines German engineering precision with AI-native speed to help ambitious businesses win more customers and automate operations.'}
            </p>
          </div>
        </div>

        <!-- What You Get Checklist -->
        <div class="card-accent" style="padding: 11px 14px; margin-bottom: 4mm;">
          <div class="font-mono" style="font-size: 6.8pt; font-weight: 700; color: #145BFF; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px;">
            ${isDe ? 'Was Sie im kostenfreien Erstgespräch (20 Min.) erhalten' : 'What You Get in Your Free 20-Minute Consultation'}
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 7.3pt; color: #0F172A;">
            <div>
              <strong style="color: #047857;">✓ ${isDe ? 'Sichtbarkeits-Check' : 'Visibility Check'}</strong>
              <div style="color: #475569; margin-top: 2px; line-height: 1.38;">${isDe ? 'Prüfung, ob Google &amp; ChatGPT Ihr Unternehmen bei Kundenanfragen empfehlen.' : 'Check whether Google &amp; ChatGPT recommend your business today.'}</div>
            </div>
            <div>
              <strong style="color: #047857;">✓ ${isDe ? 'KI-Einsparpotenzial' : 'AI Savings Estimate'}</strong>
              <div style="color: #475569; margin-top: 2px; line-height: 1.38;">${isDe ? 'Konkrete Prozesse, die sofort mit KI automatisiert werden können.' : 'Pinpoint manual workflows you can automate immediately with AI.'}</div>
            </div>
            <div>
              <strong style="color: #047857;">✓ ${isDe ? 'Klarer Projektplan' : 'Clear Action Plan'}</strong>
              <div style="color: #475569; margin-top: 2px; line-height: 1.38;">${isDe ? 'Realistischer Zeitrahmen (2–4 Wochen) &amp; transparente Kostenspanne.' : 'Realistic 2–4 week roadmap and transparent fixed-budget range.'}</div>
            </div>
          </div>
        </div>

        <!-- Contact & vCard QR Block -->
        <div class="card-navy" style="padding: 15px 16px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="flex: 1;">
            <div style="font-family: 'Space Mono', monospace; font-size: 6.8pt; color: #60A5FA; text-transform: uppercase; font-weight: 700; margin-bottom: 4px;">
              ${isDe ? 'Direkter Kontakt &amp; Terminbuchung' : 'Direct Contact &amp; Instant Booking'}
            </div>
            <div class="font-heading" style="font-size: 12pt; font-weight: 800; color: #FFFFFF; margin-bottom: 6px;">
              ${BROCHURE_CONFIG.brandName}
            </div>
            <div style="font-size: 7.6pt; color: #E2E8F0; line-height: 1.6;">
              <strong>${isDe ? 'Standort:' : 'Headquarters:'}</strong> ${BROCHURE_CONFIG.address.street}, ${BROCHURE_CONFIG.address.postalCode} ${BROCHURE_CONFIG.address.city}<br>
              <strong>${isDe ? 'Telefon / WhatsApp (24/7 KI-Agent):' : 'Phone / WhatsApp (24/7 AI Agent):'}</strong> ${BROCHURE_CONFIG.phoneDisplay}<br>
              <strong>E-Mail:</strong> ${BROCHURE_CONFIG.email} · <strong>Web:</strong> https://nordible.co<br>
              <strong>${isDe ? 'Kalender:' : 'Booking:'}</strong> <span style="color: #93C5FD;">${BROCHURE_CONFIG.bookingShortUrl}</span>
            </div>
            <div style="margin-top: 8px; display: inline-block; background: #145BFF; color: #FFFFFF; font-size: 7.6pt; font-weight: 700; padding: 6px 12px; border-radius: 8px;">
              ${isDe ? 'Antwortgarantie innerhalb von 24 Stunden ↗' : 'Guaranteed Response Within 24 Hours ↗'}
            </div>
          </div>

          <div style="background: #FFFFFF; border-radius: 10px; padding: 8px; text-align: center; width: 34mm; shrink: 0;">
            <img src="${vcardQrDataUrl}" style="width: 28mm; height: 28mm; display: block; margin: 0 auto;" alt="vCard QR Code">
            <div style="font-size: 6.2pt; font-weight: 800; color: #071638; margin-top: 3px; line-height: 1.2;">
              ${isDe ? 'Kontakt scannen &amp; speichern' : 'Scan to Save Contact'}
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderFooter(isDe, 6)}
  </div>

</body>
</html>`;
}

// Browser Candidates for Headless Printing
const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'msedge',
  'google-chrome',
  'chromium',
];

const browserPath = browserCandidates.find((cand) => {
  try {
    return fs.existsSync(cand);
  } catch {
    return false;
  }
}) || 'msedge';

console.log(`Rendering PDFs using headless engine: ${browserPath}`);

for (const lang of ['de', 'en']) {
  const isDe = lang === 'de';
  const qrCode = await getVcardQr(lang);
  const html = buildBrochureHtml(lang, qrCode);

  const outHtml = path.join(projectRoot, 'public', isDe ? 'brochure.html' : 'brochure-en.html');
  fs.writeFileSync(outHtml, html, 'utf8');
  console.log(`HTML Brochure (${lang.toUpperCase()}) written to: ${outHtml}`);

  const outPdf = path.join(projectRoot, 'public', isDe ? 'nordible-corporate-brochure.pdf' : 'nordible-corporate-brochure-en.pdf');

  const result = spawnSync(browserPath, [
    '--headless',
    '--disable-gpu',
    '--run-all-compositor-stages-before-draw',
    '--no-pdf-header-footer',
    `--print-to-pdf=${outPdf}`,
    outHtml,
  ], { stdio: 'inherit' });

  if (result.error) {
    console.error(`Spawn error during PDF generation (${lang}):`, result.error);
  }

  if (fs.existsSync(outPdf)) {
    const stat = fs.statSync(outPdf);
    const header = fs.readFileSync(outPdf).subarray(0, 5).toString('ascii');
    if (header !== '%PDF-') {
      console.error(`❌ Generated file is not a valid PDF (${lang}): ${header}`);
      process.exit(1);
    }
    console.log(`✅ SUCCESS! Generated 6-page ${lang.toUpperCase()} corporate brochure: ${outPdf} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  } else {
    console.error(`❌ Failed to generate ${lang} PDF!`);
    process.exit(1);
  }
}
