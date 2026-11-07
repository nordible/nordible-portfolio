import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

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

console.log('Compiling 6-Page Nordible Corporate Monograph in German & English (A4 Portrait)...');

// Assets
const logoImg = getBase64Image('images/logos/nordible-icon.png');
const founderImg = getBase64Image('images/founder.png');

// Client Logos
const instaremLogo = getBase64Image('images/logos/InstaRem_logo.svg');
const geLogo = getBase64Image('images/logos/GeneralElectric_logo.svg');
const vantiveLogo = getBase64Image('images/logos/vantive_logo.jpg');
const zerodhaLogo = getBase64Image('images/logos/zerodha-logo.png');

// Portfolio Case Study Screenshots
const instaremHero = getBase64Image('images/portfolio/nium-instarem-fintech.png');
const geHero = getBase64Image('images/portfolio/ge-careintellect-oncology.png');
const vantiveHero = getBase64Image('images/portfolio/vantive-baxter-remote-service.png');
const habitualistHero = getBase64Image('images/portfolio/habitualist-app-hero.png');

// Generate vCard QR Code Data URL per language
async function getVcardQr(lang = 'de') {
  const isDe = lang === 'de';
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Kabeer Shah
N:Shah;Kabeer;;;
ORG:Nordible Technologies
TITLE:${isDe ? 'Gründer & Solutions Architect' : 'Founder & Solutions Architect'}
EMAIL;TYPE=INTERNET,WORK:mail@nordible.co
TEL;TYPE=CELL,VOICE,WORK:+4915211065739
ADR;TYPE=WORK:;;Breitlacherstraße 101;Frankfurt am Main;;60489;Germany
URL:https://nordible.co
URL;TYPE=LinkedIn:https://www.linkedin.com/in/meetkabeershah/
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

function buildMonographHtml(lang, vcardQrDataUrl) {
  const isDe = lang === 'de';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${isDe ? 'Nordible Technologies · Unternehmensbroschüre & Executive B2B Portfolio 2026' : 'Nordible Technologies · Corporate Monograph & Executive B2B Portfolio 2026'}</title>
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
      background: #050B18;
      color: #E2E8F0;
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
      padding: 16mm 18mm 14mm 18mm;
      position: relative;
      page-break-after: always;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #060D1E;
    }

    .brand-gradient-text {
      background: linear-gradient(135deg, #38BDF8 0%, #145BFF 60%, #818CF8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .card {
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 12px;
      padding: 14px;
    }

    .card-highlight {
      background: linear-gradient(135deg, rgba(20, 91, 255, 0.12) 0%, rgba(14, 165, 233, 0.08) 100%);
      border: 1px solid rgba(56, 189, 248, 0.35);
      border-radius: 12px;
      padding: 14px;
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4mm;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 4mm;
    }

    .brand-title {
      font-family: 'Sora', sans-serif;
      font-weight: 800;
      font-size: 11pt;
      color: #FFFFFF;
      letter-spacing: -0.3px;
    }

    .brand-sub {
      font-family: 'Space Mono', monospace;
      font-size: 6.8pt;
      color: #38BDF8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .header-meta {
      font-size: 7.5pt;
      color: #94A3B8;
      text-align: right;
      font-family: 'Space Mono', monospace;
    }

    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 4mm;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 7.5pt;
      color: #64748B;
    }

    .section-badge {
      display: inline-block;
      font-size: 6.8pt;
      font-family: 'Space Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 2.5px 8px;
      border-radius: 20px;
      margin-bottom: 2mm;
      font-weight: 700;
    }

    .section-title {
      font-family: 'Sora', sans-serif;
      font-size: 17pt;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0 0 2.5mm 0;
      letter-spacing: -0.3px;
      line-height: 1.2;
    }

    .pill {
      display: inline-block;
      font-size: 6.8pt;
      padding: 2.5px 7px;
      border-radius: 6px;
      background: rgba(20, 91, 255, 0.15);
      color: #60A5FA;
      border: 1px solid rgba(56, 123, 255, 0.35);
      font-weight: 600;
      font-family: 'Space Mono', monospace;
    }

    .stat-card {
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 10px;
      padding: 8px 12px;
      text-align: center;
    }
    .stat-val {
      font-family: 'Sora', sans-serif;
      font-size: 16pt;
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.1;
    }
    .stat-lbl {
      font-size: 6.8pt;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #94A3B8;
      margin-top: 3px;
      font-family: 'Space Mono', monospace;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- ======================================================================= -->
  <!-- PAGE 1: COVER & STRATEGIC POSITIONING -->
  <!-- ======================================================================= -->
  <div class="page" style="background: radial-gradient(circle at 85% 15%, #0F2A66 0%, #060D1E 75%);">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4mm;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${logoImg}" style="height: 42px; width: 42px; object-fit: contain; border-radius: 10px; background: rgba(255,255,255,0.06); padding: 5px; border: 1px solid rgba(56,123,255,0.3);" alt="Nordible Technologies">
          <div>
            <div class="font-heading" style="font-size: 15pt; font-weight: 800; color: #fff; letter-spacing: -0.3px; line-height: 1.1;">NORDIBLE TECHNOLOGIES</div>
            <div class="font-mono" style="font-size: 7.2pt; color: #38BDF8; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700;">Frankfurt am Main · Germany</div>
          </div>
        </div>
        <span class="pill" style="font-size: 7.5pt; padding: 5px 12px;">Corporate Monograph 2026</span>
      </div>

      <h1 class="font-heading" style="font-size: 23pt; color: #FFFFFF; margin: 3mm 0 1.5mm 0; line-height: 1.15; font-weight: 800; letter-spacing: -0.5px;">
        AI-Native Software Engineering &amp; <span class="brand-gradient-text">Scalable Cloud Systems</span>
      </h1>
      <p style="font-size: 9.5pt; color: #94A3B8; margin: 0; line-height: 1.5; max-width: 170mm;">
        ${isDe 
          ? 'Ihr verlässlicher Technologie- &amp; Architekturpartner in Frankfurt am Main für zukunftssichere Web- &amp; Mobile-Plattformen, autonome KI-Agenten und datengetriebenes Unternehmenswachstum.'
          : 'Your trusted technology &amp; architecture partner in Frankfurt am Main for future-proof web &amp; mobile platforms, autonomous AI agents, and data-driven business growth.'}
      </p>
    </div>

    <div style="margin: 3mm 0;">
      <div style="position: relative; border-radius: 14px; overflow: hidden; border: 1px solid rgba(56, 189, 248, 0.4); box-shadow: 0 20px 45px rgba(0,0,0,0.85);">
        <img src="${instaremHero}" style="width: 100%; height: 116mm; object-fit: cover; display: block;" alt="Nordible Flagship System">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0) 100%); padding: 18px 20px 14px 20px;">
          <div style="font-size: 7.5pt; color: #38BDF8; font-family: 'Space Mono', monospace; text-transform: uppercase; font-weight: 700;">Flagship FinTech Platform</div>
          <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Instarem / Nium Global Payment Infrastructure</div>
          <div style="font-size: 7.8pt; color: #CBD5E1;">Engineering global remittance corridors handling multi-million daily transactions with sub-second finality.</div>
        </div>
      </div>
    </div>

    <div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 4mm;">
        <div class="stat-card">
          <div class="stat-val">€100M+</div>
          <div class="stat-lbl">${isDe ? 'Verarbeitetes Volumen' : 'Processed Volume'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">100%</div>
          <div class="stat-lbl">DSGVO / GDPR Safe</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">&lt; 24h</div>
          <div class="stat-lbl">${isDe ? 'Reaktionszeit SLA' : 'Direct Response SLA'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">4.9 ★</div>
          <div class="stat-lbl">Enterprise Rating</div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 7.8pt; color: #94A3B8; padding-top: 2.5mm; border-top: 1px solid rgba(255,255,255,0.1);">
        <span>Solutions Architect: <strong style="color: #fff;">Kabeer Shah</strong></span>
        <span>Headquarters: <strong style="color: #fff;">Frankfurt am Main</strong></span>
        <span>Online: <strong style="color: #38BDF8;">nordible.co</strong></span>
      </div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 2: LEADERSHIP & ENGINEERING PEDIGREE -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${logoImg}" style="height: 28px; width: 28px; object-fit: contain;" alt="Nordible">
        <div style="border-left: 1px solid rgba(56,123,255,0.35); padding-left: 10px;">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">Corporate Monograph 2026</div>
        </div>
      </div>
      <div class="header-meta">${isDe ? 'Abschnitt 01 · Führung &amp; Ingenieursexpertise' : 'Section 01 · Leadership &amp; Engineering Pedigree'}</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Führung &amp; Architektur' : 'Leadership &amp; Architecture'}</span>
        <h2 class="section-title">${isDe ? 'Direkte Gründer-Expertise <span class="brand-gradient-text">ohne Agentur-Overhead</span>' : 'Direct Founder Expertise <span class="brand-gradient-text">without Agency Overhead</span>'}</h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          ${isDe 
            ? 'Nordible Technologies wurde mit einem klaren Grundsatz gegründet: Softwareentwicklung und KI-Integration müssen strukturell fundiert, messbar profitabel und frei von künstlichem Agentur-Ballast sein. Keine wechselnden Junior-Teams, keine intransparenten Abrechnungsmodelle – sondern direkte seniorige Verantwortung von Tag 1 an.'
            : 'Nordible Technologies was founded on a clear principle: software engineering and AI integration must be structurally sound, measurably profitable, and free from artificial agency bloat. No rotating junior teams, no opaque billing models—just direct senior accountability from day one.'}
        </p>

        <!-- Founder Profile Card -->
        <div class="card-highlight" style="display: flex; gap: 16px; align-items: center; margin-bottom: 5mm;">
          <img src="${founderImg}" style="width: 86px; height: 108px; border-radius: 10px; object-fit: cover; object-position: top; border: 1.5px solid rgba(56, 189, 248, 0.5); background: #071638;" alt="Kabeer Shah">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div>
                <span class="pill" style="font-size: 6.5pt; margin-bottom: 2px;">Founder &amp; Solutions Architect</span>
                <h3 class="font-heading" style="font-size: 13pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Kabeer Shah</h3>
              </div>
              <span class="font-mono" style="font-size: 7.5pt; color: #94A3B8;">Frankfurt am Main</span>
            </div>
            <p style="font-size: 8pt; color: #CBD5E1; line-height: 1.45; margin: 4px 0 0 0;">
              ${isDe 
                ? 'Fullstack-Systemarchitekt und Gründer von Nordible Technologies. Jahrelange Praxiserfahrung in der Konzeption und Umsetzung hochperformanter Plattformen für globale FinTechs, Healthcare-Konzerne sowie mittelständische Marktführer in Deutschland.'
                : 'Fullstack systems architect and founder of Nordible Technologies. Years of hands-on experience designing and shipping high-performance platforms for global FinTechs, healthcare enterprises, and market-leading businesses in Germany.'}
            </p>
          </div>
        </div>

        <!-- 3 Core Principles -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 5mm;">
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #38BDF8; font-family: 'Space Mono', monospace; margin-bottom: 4px;">01 · ${isDe ? 'CODE-SOUVERÄNITÄT' : 'CODE SOVEREIGNTY'}</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">${isDe ? 'Kein Vendor-Lock-In' : 'Zero Vendor Lock-In'}</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">${isDe ? '100 % Quellcode-Eigentum bei Ihnen ab dem ersten Commit. Saubere Dokumentation und standardisierte Open-Source-Stacks.' : '100% source code ownership from day one. Clean documentation and battle-tested open-source architectures.'}</div>
          </div>
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #60A5FA; font-family: 'Space Mono', monospace; margin-bottom: 4px;">02 · ${isDe ? 'SPEED &amp; PRÄZISION' : 'SPEED &amp; PRECISION'}</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">Next.js &amp; Cloud Native</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">${isDe ? 'Moderne Architekturen mit Sub-Sekunden Ladezeiten, robuster SQL-Integrität und automatisierten CI/CD-Pipelines.' : 'Modern architectures with sub-second response times, robust SQL data integrity, and automated CI/CD pipelines.'}</div>
          </div>
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #10B981; font-family: 'Space Mono', monospace; margin-bottom: 4px;">03 · ${isDe ? 'DSGVO-COMPLIANCE' : 'GDPR &amp; PRIVACY'}</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">${isDe ? '100% EU-Datenschutz' : '100% EU Compliance'}</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">${isDe ? 'Rechtssichere Datenhaltung in Frankfurt/EU-Rechenzentren. Zero Data Leakage bei KI-Agenten und APIs.' : 'Legally compliant hosting in Frankfurt/EU data centers. Zero data leakage across AI agents and enterprise APIs.'}</div>
          </div>
        </div>

        <!-- Timeline Milestones -->
        <div class="card" style="padding: 10px 14px;">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 6px; font-weight: 700;">${isDe ? 'Entwicklungs-Meilensteine' : 'Engineering Milestones'}</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 7.2pt;">
            <div>
              <span style="color: #60A5FA; font-weight: 700; font-family: 'Space Mono', monospace;">2020 – 2022</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">Global Enterprise Scale</div>
              <div style="color: #94A3B8;">${isDe ? 'Entwicklung von FinTech- und Healthcare-Systemen für GE Healthcare, Nium und Baxter.' : 'Engineering FinTech and healthcare systems for GE Healthcare, Nium, and Baxter.'}</div>
            </div>
            <div>
              <span style="color: #38BDF8; font-weight: 700; font-family: 'Space Mono', monospace;">2023 – 2025</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">AI-Native Revolution</div>
              <div style="color: #94A3B8;">${isDe ? 'Pionierarbeit bei autonomen LLM-Agenten, RAG-Pipelines und Headless E-Commerce Systemen.' : 'Pioneering work in autonomous LLM agents, production RAG pipelines, and high-concurrency systems.'}</div>
            </div>
            <div>
              <span style="color: #F59E0B; font-weight: 700; font-family: 'Space Mono', monospace;">2026+</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">${isDe ? 'B2B Technologiepartner' : 'B2B Technology Partner'}</div>
              <div style="color: #94A3B8;">${isDe ? 'Marktführer in Frankfurt am Main &amp; Rhein-Main für bezahlbare Spitzen-Technologie.' : 'Leading technology partner in Frankfurt am Main &amp; Rhine-Main for enterprise-grade digital systems.'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>${isDe ? 'Seite 2 von 6' : 'Page 2 of 6'}</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 3: CORE CAPABILITIES & TECHNOLOGY ARCHITECTURE -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${logoImg}" style="height: 28px; width: 28px; object-fit: contain;" alt="Nordible">
        <div style="border-left: 1px solid rgba(56,123,255,0.35); padding-left: 10px;">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">Corporate Monograph 2026</div>
        </div>
      </div>
      <div class="header-meta">${isDe ? 'Abschnitt 02 · Leistungsspektrum &amp; Architektur' : 'Section 02 · Capabilities &amp; Architecture'}</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Technologie-Spektrum' : 'Technology Capabilities'}</span>
        <h2 class="section-title">${isDe ? 'Technologie-Exzellenz &amp; <span class="brand-gradient-text">Moderne Architektur</span>' : 'Engineering Excellence &amp; <span class="brand-gradient-text">Modern Architecture</span>'}</h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4.5mm;">
          ${isDe 
            ? 'Wir kombinieren praxiserprobte Fullstack-Frameworks mit modernsten KI-Modellen. Unsere Systeme sind modular aufgebaut, wartungsfreundlich und für hohes Transaktionsvolumen ausgelegt.'
            : 'We combine battle-tested fullstack frameworks with modern AI capabilities. Our systems are built modularly, designed for maintainability, and optimized for high transactional volume.'}
        </p>

        <!-- 4 Major Capability Blocks -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">${isDe ? '1. Autonome KI-Agenten' : '1. Autonomous AI Agents'}</span>
              <span class="pill">Agentic AI</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe 
                ? 'Automatisierte Lead-Qualifizierung, RAG-gestützte Dokumentenanalyse, Kundenservice-Bots und operative Prozessoptimierung ohne laufende Agentur-Kosten.'
                : 'Automated lead qualification, RAG-assisted document search, 24/7 customer service workflows, and operational process automation without recurring agency fees.'}
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              OpenAI · Claude 3.5 · LangChain · Vector DBs · Llama
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">${isDe ? '2. Web- &amp; Mobile-Plattformen' : '2. Web &amp; Mobile Platforms'}</span>
              <span class="pill">Fullstack</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe 
                ? 'Modernste B2B-Webanwendungen, Dashboards und native Mobile-Apps für iOS &amp; Android. Responsive, barrierearm und mit perfekten Core Web Vitals.'
                : 'Enterprise B2B web applications, management portals, and native mobile apps for iOS &amp; Android. Highly responsive with exceptional Core Web Vitals.'}
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              Next.js 15 · React 19 · React Native · TypeScript · Tailwind
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">${isDe ? '3. Cloud, APIs &amp; Data Pipeline' : '3. Cloud, APIs &amp; Data Pipelines'}</span>
              <span class="pill">Cloud Native</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe 
                ? 'Hochverfügbare REST &amp; GraphQL Microservices, Event-Driven Architekturen, Redis-Caching und automatisierte Backups mit Zero-Downtime Deployments.'
                : 'High-availability REST &amp; GraphQL microservices, event-driven architectures, Redis caching, and automated zero-downtime deployments.'}
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              PostgreSQL · Redis · Docker · AWS · Vercel · Node.js
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">${isDe ? '4. Conversion UI &amp; AI-SEO (GEO)' : '4. Conversion UI &amp; AI Discoverability'}</span>
              <span class="pill">Ergonomics</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              ${isDe 
                ? 'Science-backed UX (Fitts\'s Law, Thumb Zone Design) kombiniert mit Generative Engine Optimization (GEO), damit ChatGPT und Google Gemini Sie empfehlen.'
                : 'Science-backed ergonomics (Fitts\'s Law, thumb-zone layout) combined with Generative Engine Optimization (GEO) for ChatGPT and Gemini recommendations.'}
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              Schema.org · LLM Discoverability · PageSpeed 99+
            </div>
          </div>

        </div>

        <!-- Tech Stack Badge Ribbon -->
        <div class="card-highlight" style="padding: 10px 14px;">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 6px; font-weight: 700;">${isDe ? 'Zertifizierte Technologie-Standards' : 'Certified Engineering Standards'}</div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            <span class="pill">Next.js 15 (Turbopack)</span>
            <span class="pill">TypeScript 5+</span>
            <span class="pill">React 19</span>
            <span class="pill">Tailwind CSS</span>
            <span class="pill">PostgreSQL &amp; Prisma</span>
            <span class="pill">Redis Cluster</span>
            <span class="pill">Docker &amp; K8s</span>
            <span class="pill">OpenAI GPT-4o</span>
            <span class="pill">Claude 3.5 Sonnet</span>
            <span class="pill">Python &amp; FastAPI</span>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>${isDe ? 'Seite 3 von 6' : 'Page 3 of 6'}</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 4: DELIVERED FLAGSHIP CASE STUDIES -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${logoImg}" style="height: 28px; width: 28px; object-fit: contain;" alt="Nordible">
        <div style="border-left: 1px solid rgba(56,123,255,0.35); padding-left: 10px;">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">Corporate Monograph 2026</div>
        </div>
      </div>
      <div class="header-meta">${isDe ? 'Abschnitt 03 · Gelieferte Systeme &amp; Kennzahlen' : 'Section 03 · Delivered Systems &amp; ROI'}</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Referenzen &amp; Kennzahlen' : 'Proven Track Record &amp; Metrics'}</span>
        <h2 class="section-title">${isDe ? 'Erfolgreich gelieferte <span class="brand-gradient-text">Enterprise-Projekte</span>' : 'Production <span class="brand-gradient-text">Enterprise Deployments</span>'}</h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          ${isDe 
            ? 'Unsere Systeme verarbeiten täglich Millionenbeträge und schützen sensible Patientendaten. Ein Auszug verifizierter Referenzprojekte:'
            : 'Our software infrastructure processes millions daily and protects mission-critical patient data. Verified case studies include:'}
        </p>

        <!-- 4 Project Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          
          <!-- Instarem -->
          <div class="card" style="padding: 10px;">
            <div style="position: relative; border-radius: 8px; overflow: hidden; height: 38mm; margin-bottom: 6px;">
              <img src="${instaremHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="Instarem">
              <span class="pill" style="position: absolute; top: 6px; right: 6px; background: rgba(6,13,30,0.85);">FinTech Scale</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #fff; margin: 0 0 2px 0;">Instarem / Nium (FinTech)</h4>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">
              ${isDe 
                ? 'Internationale Überweisungsplattform für Privat- und B2B-Kunden. Multi-Währungs-Wallets und Hochgeschwindigkeits-Transaktions-Pipelines.'
                : 'Global payment and remittance platform serving retail and enterprise accounts with real-time multi-currency processing.'}
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              &gt; $100M+ ${isDe ? 'tägliches Volumen' : 'Daily Volume'} · 99.99% Uptime
            </div>
          </div>

          <!-- GE Healthcare -->
          <div class="card" style="padding: 10px;">
            <div style="position: relative; border-radius: 8px; overflow: hidden; height: 38mm; margin-bottom: 6px;">
              <img src="${geHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="GE Healthcare">
              <span class="pill" style="position: absolute; top: 6px; right: 6px; background: rgba(6,13,30,0.85);">Med-Tech</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #fff; margin: 0 0 2px 0;">GE Healthcare · CareIntellect</h4>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">
              ${isDe 
                ? 'Onkologische Behandlungsplattform für multimodale klinische Daten und Behandlungsverläufe unter strengster DSGVO-Konformität.'
                : 'Clinical oncology intelligence platform integrating multimodal clinical data under rigorous privacy compliance.'}
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              ${isDe ? 'DSGVO / HIPAA Konform · Klinische Präzision' : 'GDPR / HIPAA Compliant · Clinical Reliability'}
            </div>
          </div>

          <!-- Baxter / Vantive -->
          <div class="card" style="padding: 10px;">
            <div style="position: relative; border-radius: 8px; overflow: hidden; height: 38mm; margin-bottom: 6px;">
              <img src="${vantiveHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="Baxter Vantive">
              <span class="pill" style="position: absolute; top: 6px; right: 6px; background: rgba(6,13,30,0.85);">IoMT Device Cloud</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #fff; margin: 0 0 2px 0;">Baxter / Vantive Remote Dialysis</h4>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">
              ${isDe 
                ? 'Telemetrie- &amp; Service-Plattform für Dialysegeräte im Heim- und Klinikbetrieb mit sicherer Remote-Diagnostik.'
                : 'Telehealth and diagnostic telemetry platform for peritoneal dialysis machines in home and hospital care.'}
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              ${isDe ? 'Kritische Infrastruktur · 24/7 Telemetrie' : 'Critical Medical Infrastructure · 24/7 Uptime'}
            </div>
          </div>

          <!-- B2B & Regional Growth -->
          <div class="card" style="padding: 10px;">
            <div style="position: relative; border-radius: 8px; overflow: hidden; height: 38mm; margin-bottom: 6px;">
              <img src="${habitualistHero}" style="width: 100%; height: 100%; object-fit: cover;" alt="Mobile App">
              <span class="pill" style="position: absolute; top: 6px; right: 6px; background: rgba(6,13,30,0.85);">Mobile / SaaS</span>
            </div>
            <h4 class="font-heading" style="font-size: 9.5pt; font-weight: 800; color: #fff; margin: 0 0 2px 0;">Habitualist iOS &amp; Web Platform</h4>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">
              ${isDe 
                ? 'Produktivitäts- und Verhaltensplattform mit Offline-First SQLite Synchronisation und adaptiver Gamification.'
                : 'Cross-platform productivity application featuring offline-first local SQLite sync and sub-50ms event latency.'}
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              ${isDe ? 'Offline-First · Sub-50ms Synchronisation' : 'Offline-First · Sub-50ms Sync'}
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>${isDe ? 'Seite 4 von 6' : 'Page 4 of 6'}</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 5: COLLABORATION & INVESTMENT FRAMEWORKS -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${logoImg}" style="height: 28px; width: 28px; object-fit: contain;" alt="Nordible">
        <div style="border-left: 1px solid rgba(56,123,255,0.35); padding-left: 10px;">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">Corporate Monograph 2026</div>
        </div>
      </div>
      <div class="header-meta">${isDe ? 'Abschnitt 04 · Zusammenarbeits- &amp; Preismodelle' : 'Section 04 · Collaboration &amp; Pricing Models'}</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Zusammenarbeitsmodelle' : 'Engagement Frameworks'}</span>
        <h2 class="section-title">${isDe ? 'Transparente &amp; planbare <span class="brand-gradient-text">Modelle ohne Kostenfallen</span>' : 'Transparent &amp; Predictable <span class="brand-gradient-text">Collaboration</span>'}</h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          ${isDe 
            ? 'Keine versteckten Agentur-Gebühren oder unvorhersehbare Abrechnungen. Wir bieten feste Budgets, klare Liefertermine und maximale Agilität.'
            : 'Zero hidden agency markup or unexpected change requests. We offer guaranteed milestones, fixed-budget sprints, and agile execution.'}
        </p>

        <!-- 3 Models -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px;">${isDe ? 'Modell A · Festpreis-Sprint' : 'Model A · Fixed-Price Sprint'}</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Turnkey MVP &amp; Feature Release</h4>
              <p style="font-size: 7.5pt; color: #94A3B8; line-height: 1.4; margin: 2px 0 0 0;">
                ${isDe 
                  ? 'Klar definierter Projektumfang mit festem Fertigstellungstermin. Ideal für Neuentwicklungen, Web-Plattformen, KI-Bots oder Relaunches mit festem Budget.'
                  : 'Clearly scoped project sprints with guaranteed delivery dates. Ideal for greenfield software, new web platforms, AI bots, or system refactoring.'}
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">${isDe ? 'Ab Sprint' : 'Per Sprint'}</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #38BDF8;">${isDe ? 'Festpreis' : 'Fixed Price'}</div>
              <div style="font-size: 6.5pt; color: #10B981;">${isDe ? '100% Budget-Sicherheit' : '100% Budget Predictability'}</div>
            </div>
          </div>

          <div class="card-highlight" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px; background: rgba(56, 189, 248, 0.2); color: #38BDF8;">${isDe ? 'Modell B · Executive Advisory' : 'Model B · Executive Advisory'}</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Fractional CTO &amp; Solutions Architecture</h4>
              <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.4; margin: 2px 0 0 0;">
                ${isDe 
                  ? 'Seniorige strategische Technologie-Führung auf Abruf. Technische Due-Diligence, Architektur-Audits, Cloud-Kosten-Optimierung und Team-Mentoring.'
                  : 'High-level technology leadership on demand. Architecture audits, cloud infrastructure optimization, due diligence, and engineering mentorship.'}
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(56,189,248,0.3); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">${isDe ? 'Flexibel' : 'Flexible'}</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #F59E0B;">Advisory</div>
              <div style="font-size: 6.5pt; color: #38BDF8;">${isDe ? 'Direkt mit Kabeer Shah' : 'Direct with Kabeer Shah'}</div>
            </div>
          </div>

          <div class="card" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px;">${isDe ? 'Modell C · Kontinuierliche Begleitung' : 'Model C · Continuous Partnership'}</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Dedicated Engineering Retainer</h4>
              <p style="font-size: 7.5pt; color: #94A3B8; line-height: 1.4; margin: 2px 0 0 0;">
                ${isDe 
                  ? 'Monatliches Kontingent für kontinuierliche Weiterentwicklung, Sicherheits-Updates, Server-Monitoring und priorisierten 24/7 Notfall-Support.'
                  : 'Dedicated monthly capacity for feature iterations, security patching, infrastructure monitoring, and priority emergency response.'}
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">${isDe ? 'Monatlich' : 'Monthly'}</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #60A5FA;">Retainer</div>
              <div style="font-size: 6.5pt; color: #10B981;">${isDe ? 'Garantierte Kapazität' : 'Guaranteed Velocity'}</div>
            </div>
          </div>

        </div>

        <!-- Risk Reversal Guarantee Box -->
        <div class="card" style="padding: 10px 14px; border-color: rgba(16, 185, 129, 0.35); background: rgba(6, 30, 25, 0.5);">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #10B981; margin-bottom: 4px; font-weight: 700;">${isDe ? 'Unsere Risiko-Umkehr Garantie' : 'Our Risk-Reversal Guarantee'}</div>
          <div style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45;">
            ${isDe 
              ? 'Wir bieten eine <strong>kostenlose technische Machbarkeitsprüfung</strong> vor jedem Projektstart. Sollten wir Ihr Vorhaben technisch nicht für umsetzbar oder wirtschaftlich nicht für zielführend halten, sagen wir es Ihnen direkt und offen. 100 % vertraulich mit unterzeichnetem NDA.'
              : 'We provide an objective <strong>technical feasibility review</strong> before initiating any contract. If we believe your roadmap is not technically sound or financially viable, we communicate this immediately. 100% confidential under mutual NDA.'}
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>${isDe ? 'Seite 5 von 6' : 'Page 5 of 6'}</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 6: HEADQUARTERS, CONTACT & FOUNDER VCARD QR -->
  <!-- ======================================================================= -->
  <div class="page" style="background: radial-gradient(circle at 15% 85%, #0F2A66 0%, #060D1E 75%);">
    <div class="doc-header">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${logoImg}" style="height: 28px; width: 28px; object-fit: contain;" alt="Nordible">
        <div style="border-left: 1px solid rgba(56,123,255,0.35); padding-left: 10px;">
          <div class="brand-title">NORDIBLE TECHNOLOGIES</div>
          <div class="brand-sub">Corporate Monograph 2026</div>
        </div>
      </div>
      <div class="header-meta">${isDe ? 'Abschnitt 05 · Kontakt &amp; Nächste Schritte' : 'Section 05 · Connect &amp; Next Steps'}</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">${isDe ? 'Direktkontakt &amp; Standort' : 'Direct Contact &amp; Location'}</span>
        <h2 class="section-title">${isDe ? 'Lassen Sie uns Ihr Vorhaben <span class="brand-gradient-text">konkret besprechen</span>' : 'Let\'s Engineer Your Vision <span class="brand-gradient-text">Together</span>'}</h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          ${isDe 
            ? 'Persönlich vor Ort in Frankfurt am Main oder im virtuellen Strategy-Call: Wir analysieren Ihre Systemarchitektur und geben Ihnen eine verlässliche Einschätzung.'
            : 'In-person in Frankfurt am Main or via video conference: We assess your architecture requirements and provide an objective feasibility roadmap.'}
        </p>

        <!-- 2 Column: Office Address & Channels -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 14px;">
            <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 4px; font-weight: 700;">${isDe ? 'Hauptsitz Frankfurt am Main' : 'Headquarters Frankfurt am Main'}</div>
            <div class="font-heading" style="font-size: 11pt; font-weight: 800; color: #fff; margin-bottom: 6px;">Nordible Technologies</div>
            <div style="font-size: 7.8pt; color: #CBD5E1; line-height: 1.5;">
              Breitlacherstraße 101<br>
              60489 Frankfurt am Main<br>
              Hessen, ${isDe ? 'Deutschland' : 'Germany'}
            </div>
            <div style="margin-top: 8px; font-size: 7.2pt; color: #94A3B8;">
              ${isDe ? 'Termine nach Vereinbarung vor Ort oder digital.' : 'Meetings by appointment on-site or remote.'}
            </div>
          </div>

          <div class="card" style="padding: 14px;">
            <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 4px; font-weight: 700;">${isDe ? 'Direkte Kommunikationskanäle' : 'Direct Communication Channels'}</div>
            <div style="font-size: 7.8pt; color: #CBD5E1; line-height: 1.6;">
              <strong>${isDe ? 'Telefon / WhatsApp:' : 'Phone / WhatsApp:'}</strong> +49 1521 1065739<br>
              <strong>${isDe ? 'Geschäftliche E-Mail:' : 'Business Email:'}</strong> mail@nordible.co<br>
              <strong>${isDe ? 'Gründer-E-Mail:' : 'Founder Email:'}</strong> kabeer@nordible.co<br>
              <strong>${isDe ? 'Offizielle Website:' : 'Official Website:'}</strong> https://nordible.co
            </div>
          </div>

        </div>

        <!-- Integrated Founder vCard QR Box -->
        <div class="card-highlight" style="padding: 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <img src="${founderImg}" style="width: 58px; height: 72px; border-radius: 8px; object-fit: cover; object-position: top; border: 1px solid rgba(56,189,248,0.5);" alt="Kabeer Shah">
            <div>
              <div class="font-heading" style="font-size: 12pt; font-weight: 800; color: #fff;">Kabeer Shah</div>
              <div style="color: #38BDF8; font-size: 7.5pt; font-family: 'Space Mono', monospace; text-transform: uppercase; font-weight: 700;">${isDe ? 'Gründer &amp; Solutions Architect' : 'Founder &amp; Solutions Architect'}</div>
              <div style="font-size: 7.2pt; color: #94A3B8; margin-top: 3px;">
                Direct Line: +49 1521 1065739 · mail@nordible.co
              </div>
            </div>
          </div>

          <div style="height: 65px; width: 1px; background: rgba(255,255,255,0.15);"></div>

          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${vcardQrDataUrl}" style="width: 72px; height: 72px; border-radius: 8px; background: white; padding: 3px; border: 1.5px solid #38BDF8;" alt="vCard QR Code">
            <div style="max-width: 45mm;">
              <div style="font-size: 7.5pt; font-weight: 800; color: #fff; line-height: 1.2;">${isDe ? 'Digitaler Kontakt' : 'Digital Contact'}</div>
              <div style="font-size: 6.8pt; color: #94A3B8; line-height: 1.35; margin-top: 3px;">
                ${isDe 
                  ? 'Mit dem Smartphone scannen, um Kontaktdaten direkt im Adressbuch zu speichern.'
                  : 'Scan with smartphone camera to save full contact details directly to your phonebook.'}
              </div>
            </div>
          </div>
        </div>

        <!-- Direct Booking Call to Action -->
        <div style="text-align: center; margin-top: 6mm;">
          <div style="display: inline-block; padding: 10px 24px; border-radius: 25px; background: linear-gradient(135deg, #145BFF 0%, #0D3AA9 100%); border: 1px solid rgba(56, 189, 248, 0.5); font-size: 8.5pt; font-weight: 700; color: #fff;">
            ${isDe 
              ? 'Erstgespräch direkt im Kalender buchen: calendar.app.google/N4XakE4t9zZVmHqYA ↗'
              : 'Book strategy session on calendar: calendar.app.google/N4XakE4t9zZVmHqYA ↗'}
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>${isDe ? 'Seite 6 von 6 (Abschluss)' : 'Page 6 of 6 (Conclusion)'}</div>
    </div>
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
  const html = buildMonographHtml(lang, qrCode);

  const outHtml = path.join(projectRoot, 'public', isDe ? 'brochure.html' : 'brochure-en.html');
  fs.writeFileSync(outHtml, html, 'utf8');
  if (isDe) {
    fs.writeFileSync(path.join(projectRoot, 'public', 'brochure-de.html'), html, 'utf8');
  }
  console.log(`HTML Monograph (${lang.toUpperCase()}) written to: ${outHtml}`);

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
    if (isDe) {
      fs.copyFileSync(outPdf, path.join(projectRoot, 'public', 'nordible-corporate-brochure-de.pdf'));
    }
    console.log(`✅ SUCCESS! Generated 6-page ${lang.toUpperCase()} corporate brochure: ${outPdf} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  } else {
    console.error(`❌ Failed to generate ${lang} PDF!`);
    process.exit(1);
  }
}
