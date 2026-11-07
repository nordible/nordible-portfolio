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

console.log('Compiling 6-Page Nordible Corporate Monograph (A4 Portrait)...');

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

// Generate vCard QR Code Data URL
const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Kabeer Shah
N:Shah;Kabeer;;;
ORG:Nordible Technologies
TITLE:Gründer & Solutions Architect
EMAIL;TYPE=INTERNET,WORK:mail@nordible.co
TEL;TYPE=CELL,VOICE,WORK:+4915211065739
ADR;TYPE=WORK:;;Breitlacherstraße 101;Frankfurt am Main;;60489;Germany
URL:https://nordible.co
URL;TYPE=LinkedIn:https://www.linkedin.com/in/meetkabeershah/
END:VCARD`;

const vcardQrDataUrl = await QRCode.toDataURL(vcardData, {
  margin: 1,
  width: 320,
  color: {
    dark: '#071638',
    light: '#FFFFFF',
  },
});

const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Nordible Technologies · Corporate Monograph &amp; Executive B2B Portfolio 2026</title>
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
      min-height: 297mm;
      height: 297mm;
      page-break-after: always;
      position: relative;
      padding: 16mm 16mm 14mm 16mm;
      box-sizing: border-box;
      overflow: hidden;
      background: #060D1E;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brand-gradient-text {
      background: linear-gradient(135deg, #60A5FA 0%, #145BFF 60%, #38BDF8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .gold-gradient-text {
      background: linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .card {
      background: rgba(11, 23, 48, 0.85);
      border: 1px solid rgba(56, 123, 255, 0.22);
      border-radius: 12px;
      padding: 14px;
    }

    .card-highlight {
      background: linear-gradient(135deg, rgba(20, 91, 255, 0.14) 0%, rgba(9, 20, 43, 0.95) 100%);
      border: 1px solid rgba(56, 189, 248, 0.4);
      border-radius: 12px;
      padding: 14px;
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4mm;
      border-bottom: 1px solid rgba(56, 123, 255, 0.25);
    }
    .doc-header .brand-title {
      font-family: 'Sora', sans-serif;
      font-size: 11pt;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.2px;
    }
    .doc-header .brand-sub {
      font-size: 7.5pt;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #38BDF8;
      font-weight: 700;
      font-family: 'Space Mono', monospace;
    }
    .doc-header .header-meta {
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
      background: rgba(9, 20, 43, 0.95);
      border: 1px solid rgba(56, 123, 255, 0.28);
      padding: 10px 12px;
      border-radius: 10px;
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
        Ihr verlässlicher Technologie- &amp; Architekturpartner in Frankfurt am Main für zukunftssichere Web- &amp; Mobile-Plattformen, autonome KI-Agenten und datengetriebenes Unternehmenswachstum.
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
          <div class="stat-lbl">Processed Volume</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">100%</div>
          <div class="stat-lbl">DSGVO / GDPR Safe</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">&lt; 24h</div>
          <div class="stat-lbl">Direct Response SLA</div>
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
      <div class="header-meta">Section 01 · Leadership &amp; Engineering Pedigree</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Führung &amp; Architektur</span>
        <h2 class="section-title">Direkte Gründer-Expertise <span class="brand-gradient-text">ohne Agentur-Overhead</span></h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          Nordible Technologies wurde mit einem klaren Grundsatz gegründet: Softwareentwicklung und KI-Integration müssen strukturell fundiert, messbar profitabel und frei von künstlichem Agentur-Ballast sein. Keine wechselnden Junior-Teams, keine intransparenten Abrechnungsmodelle – sondern direkte seniorige Verantwortung von Tag 1 an.
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
              Fullstack-Systemarchitekt und Gründer von Nordible Technologies. Jahrelange Praxiserfahrung in der Konzeption und Umsetzung hochperformanter Plattformen für globale FinTechs, Healthcare-Konzerne sowie mittelständische Marktführer in Deutschland.
            </p>
          </div>
        </div>

        <!-- 3 Core Principles -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 5mm;">
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #38BDF8; font-family: 'Space Mono', monospace; margin-bottom: 4px;">01 · CODE-SOUVERÄNITÄT</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">Kein Vendor-Lock-In</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">100 % Quellcode-Eigentum bei Ihnen ab dem ersten Commit. Saubere Dokumentation und standardisierte Open-Source-Stacks.</div>
          </div>
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #60A5FA; font-family: 'Space Mono', monospace; margin-bottom: 4px;">02 · SPEED &amp; PRÄZISION</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">Next.js &amp; Cloud Native</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">Moderne Architekturen mit Sub-Sekunden Ladezeiten, robuster SQL-Integrität und automatisierten CI/CD-Pipelines.</div>
          </div>
          <div class="card">
            <div style="font-size: 8pt; font-weight: 800; color: #10B981; font-family: 'Space Mono', monospace; margin-bottom: 4px;">03 · DSGVO-COMPLIANCE</div>
            <div class="font-heading" style="font-size: 9pt; font-weight: 700; color: #fff; margin-bottom: 3px;">100% EU-Datenschutz</div>
            <div style="font-size: 7.2pt; color: #94A3B8; line-height: 1.4;">Rechtssichere Datenhaltung in Frankfurt/EU-Rechenzentren. Zero Data Leakage bei KI-Agenten und APIs.</div>
          </div>
        </div>

        <!-- Timeline Milestones -->
        <div class="card" style="padding: 10px 14px;">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 6px; font-weight: 700;">Entwicklungs-Meilensteine</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 7.2pt;">
            <div>
              <span style="color: #60A5FA; font-weight: 700; font-family: 'Space Mono', monospace;">2020 – 2022</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">Global Enterprise Scale</div>
              <div style="color: #94A3B8;">Entwicklung von FinTech- und Healthcare-Systemen für GE Healthcare, Nium und Baxter.</div>
            </div>
            <div>
              <span style="color: #38BDF8; font-weight: 700; font-family: 'Space Mono', monospace;">2023 – 2025</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">AI-Native Revolution</div>
              <div style="color: #94A3B8;">Pionierarbeit bei autonomen LLM-Agenten, RAG-Pipelines und Headless E-Commerce Systemen.</div>
            </div>
            <div>
              <span style="color: #F59E0B; font-weight: 700; font-family: 'Space Mono', monospace;">2026+</span>
              <div style="color: #fff; font-weight: 600; margin: 1px 0;">B2B Technologiepartner</div>
              <div style="color: #94A3B8;">Marktführer in Frankfurt am Main &amp; Rhein-Main für bezahlbare Spitzen-Technologie.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>Seite 2 von 6</div>
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
      <div class="header-meta">Section 02 · Capabilities &amp; Architecture</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Technologie-Spektrum</span>
        <h2 class="section-title">Technologie-Exzellenz &amp; <span class="brand-gradient-text">Moderne Architektur</span></h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4.5mm;">
          Wir kombinieren praxiserprobte Fullstack-Frameworks mit modernsten KI-Modellen. Unsere Systeme sind modular aufgebaut, wartungsfreundlich und für hohes Transaktionsvolumen ausgelegt.
        </p>

        <!-- 4 Major Capability Blocks -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">1. Autonome KI-Agenten</span>
              <span class="pill">Agentic AI</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              Automatisierte Lead-Qualifizierung, RAG-gestützte Dokumentenanalyse, Kundenservice-Bots und operative Prozessoptimierung ohne laufende Agentur-Kosten.
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              OpenAI · Claude 3.5 · LangChain · Vector DBs · Llama
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">2. Web- &amp; Mobile-Plattformen</span>
              <span class="pill">Fullstack</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              Modernste B2B-Webanwendungen, Dashboards und native Mobile-Apps für iOS &amp; Android. Responsive, barrierearm und mit perfekten Core Web Vitals.
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              Next.js 15 · React 19 · React Native · TypeScript · Tailwind
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">3. Cloud, APIs &amp; Data Pipeline</span>
              <span class="pill">Cloud Native</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              Hochverfügbare REST &amp; GraphQL Microservices, Event-Driven Architekturen, Redis-Caching und automatisierte Backups mit Zero-Downtime Deployments.
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              PostgreSQL · Redis · Docker · AWS · Vercel · Node.js
            </div>
          </div>

          <div class="card" style="padding: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span class="font-heading" style="font-size: 10pt; font-weight: 800; color: #FFFFFF;">4. Conversion UI &amp; AI-SEO (GEO)</span>
              <span class="pill">Ergonomics</span>
            </div>
            <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45; margin: 0 0 6px 0;">
              Science-backed UX (Fitts's Law, Thumb Zone Design) kombiniert mit Generative Engine Optimization (GEO), damit ChatGPT und Google Gemini Sie empfehlen.
            </p>
            <div style="font-size: 6.8pt; color: #38BDF8; font-family: 'Space Mono', monospace;">
              Schema.org · LLM Discoverability · PageSpeed 99+
            </div>
          </div>

        </div>

        <!-- Tech Stack Badge Ribbon -->
        <div class="card-highlight" style="padding: 10px 14px;">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 6px; font-weight: 700;">Zertifizierte Technologie-Standards</div>
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
      <div>Seite 3 von 6</div>
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
      <div class="header-meta">Section 03 · Delivered Systems &amp; ROI</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Referenzen &amp; Kennzahlen</span>
        <h2 class="section-title">Erfolgreich gelieferte <span class="brand-gradient-text">Enterprise-Projekte</span></h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          Unsere Systeme verarbeiten täglich Millionenbeträge und schützen sensible Patientendaten. Ein Auszug verifizierter Referenzprojekte:
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
              Internationale Überweisungsplattform für Privat- und B2B-Kunden. Multi-Währungs-Wallets und Hochgeschwindigkeits-Transaktions-Pipelines.
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              &gt; $100M+ tägliches Volumen · 99.99% Uptime
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
              Onkologische Behandlungsplattform für multimodale klinische Daten und Behandlungsverläufe unter strengster DSGVO-Konformität.
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              DSGVO / HIPAA Konform · Klinische Präzision
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
              Telemetrie- &amp; Service-Plattform für Dialysegeräte im Heim- und Klinikbetrieb mit sicherer Remote-Diagnostik.
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              Kritische Infrastruktur · 24/7 Telemetrie
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
              Produktivitäts- und Verhaltensplattform mit Offline-First SQLite Synchronisation und adaptiver Gamification.
            </div>
            <div style="font-size: 6.8pt; color: #10B981; font-weight: 700; margin-top: 4px; font-family: 'Space Mono', monospace;">
              Offline-First · Sub-50ms Synchronisation
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>Seite 4 von 6</div>
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
      <div class="header-meta">Section 04 · Collaboration &amp; Pricing Models</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Zusammenarbeitsmodelle</span>
        <h2 class="section-title">Transparente &amp; planbare <span class="brand-gradient-text">Modelle ohne Kostenfallen</span></h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          Keine versteckten Agentur-Gebühren oder unvorhersehbare Abrechnungen. Wir bieten feste Budgets, klare Liefertermine und maximale Agilität.
        </p>

        <!-- 3 Models -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px;">Modell A · Festpreis-Sprint</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Turnkey MVP &amp; Feature Release</h4>
              <p style="font-size: 7.5pt; color: #94A3B8; line-height: 1.4; margin: 2px 0 0 0;">
                Klar definierter Projektumfang mit festem Fertigstellungstermin. Ideal für Neuentwicklungen, Web-Plattformen, KI-Bots oder Relaunches mit festem Budget.
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">Ab Sprint</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #38BDF8;">Festpreis</div>
              <div style="font-size: 6.5pt; color: #10B981;">100% Budget-Sicherheit</div>
            </div>
          </div>

          <div class="card-highlight" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px; background: rgba(56, 189, 248, 0.2); color: #38BDF8;">Modell B · Executive Advisory</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Fractional CTO &amp; Solutions Architecture</h4>
              <p style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.4; margin: 2px 0 0 0;">
                Seniorige strategische Technologie-Führung auf Abruf. Technische Due-Diligence, Architektur-Audits, Cloud-Kosten-Optimierung und Team-Mentoring.
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(56,189,248,0.3); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">Flexibel</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #F59E0B;">Advisory</div>
              <div style="font-size: 6.5pt; color: #38BDF8;">Direkt mit Kabeer Shah</div>
            </div>
          </div>

          <div class="card" style="padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="max-width: 125mm;">
              <span class="pill" style="font-size: 6.5pt; margin-bottom: 3px;">Modell C · Kontinuierliche Begleitung</span>
              <h4 class="font-heading" style="font-size: 11pt; font-weight: 800; color: #FFFFFF; margin: 2px 0;">Dedicated Engineering Retainer</h4>
              <p style="font-size: 7.5pt; color: #94A3B8; line-height: 1.4; margin: 2px 0 0 0;">
                Monatliches Kontingent für kontinuierliche Weiterentwicklung, Sicherheits-Updates, Server-Monitoring und priorisierten 24/7 Notfall-Support.
              </p>
            </div>
            <div style="text-align: right; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 14px; min-width: 32mm;">
              <div style="font-size: 6.8pt; color: #94A3B8; text-transform: uppercase;">Monatlich</div>
              <div class="font-heading" style="font-size: 13pt; font-weight: 800; color: #60A5FA;">Retainer</div>
              <div style="font-size: 6.5pt; color: #10B981;">Garantierte Kapazität</div>
            </div>
          </div>

        </div>

        <!-- Risk Reversal Guarantee Box -->
        <div class="card" style="padding: 10px 14px; border-color: rgba(16, 185, 129, 0.35); background: rgba(6, 30, 25, 0.5);">
          <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #10B981; margin-bottom: 4px; font-weight: 700;">Unsere Risiko-Umkehr Garantie</div>
          <div style="font-size: 7.5pt; color: #CBD5E1; line-height: 1.45;">
            Wir bieten eine <strong>kostenlose technische Machbarkeitsprüfung</strong> vor jedem Projektstart. Sollten wir Ihr Vorhaben technisch nicht für umsetzbar oder wirtschaftlich nicht für zielführend halten, sagen wir es Ihnen direkt und offen. 100 % vertraulich mit unterzeichnetem NDA.
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>Seite 5 von 6</div>
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
      <div class="header-meta">Section 05 · Connect &amp; Next Steps</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Direktkontakt &amp; Standort</span>
        <h2 class="section-title">Lassen Sie uns Ihr Vorhaben <span class="brand-gradient-text">konkret besprechen</span></h2>
        <p style="color: #CBD5E1; font-size: 9pt; line-height: 1.55; margin-bottom: 4mm;">
          Persönlich vor Ort in Frankfurt am Main oder im virtuellen Strategy-Call: Wir analysieren Ihre Systemarchitektur und geben Ihnen eine verlässliche Einschätzung.
        </p>

        <!-- 2 Column: Office Address & Channels -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 5mm;">
          
          <div class="card" style="padding: 14px;">
            <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 4px; font-weight: 700;">Hauptsitz Frankfurt am Main</div>
            <div class="font-heading" style="font-size: 11pt; font-weight: 800; color: #fff; margin-bottom: 6px;">Nordible Technologies</div>
            <div style="font-size: 7.8pt; color: #CBD5E1; line-height: 1.5;">
              Breitlacherstraße 101<br>
              60489 Frankfurt am Main<br>
              Hessen, Deutschland
            </div>
            <div style="margin-top: 8px; font-size: 7.2pt; color: #94A3B8;">
              Termine nach Vereinbarung vor Ort oder digital.
            </div>
          </div>

          <div class="card" style="padding: 14px;">
            <div style="font-size: 7.2pt; font-family: 'Space Mono', monospace; text-transform: uppercase; color: #38BDF8; margin-bottom: 4px; font-weight: 700;">Direkte Kommunikationskanäle</div>
            <div style="font-size: 7.8pt; color: #CBD5E1; line-height: 1.6;">
              <strong>Telefon / WhatsApp:</strong> +49 1521 1065739<br>
              <strong>Geschäftliche E-Mail:</strong> mail@nordible.co<br>
              <strong>Gründer-E-Mail:</strong> kabeer@nordible.co<br>
              <strong>Offizielle Website:</strong> https://nordible.co
            </div>
          </div>

        </div>

        <!-- Integrated Founder vCard QR Box (Bombay Studio Pattern) -->
        <div class="card-highlight" style="padding: 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <img src="${founderImg}" style="width: 58px; height: 72px; border-radius: 8px; object-fit: cover; object-position: top; border: 1px solid rgba(56,189,248,0.5);" alt="Kabeer Shah">
            <div>
              <div class="font-heading" style="font-size: 12pt; font-weight: 800; color: #fff;">Kabeer Shah</div>
              <div style="color: #38BDF8; font-size: 7.5pt; font-family: 'Space Mono', monospace; text-transform: uppercase; font-weight: 700;">Gründer &amp; Solutions Architect</div>
              <div style="font-size: 7.2pt; color: #94A3B8; margin-top: 3px;">
                Direct Line: +49 1521 1065739 · mail@nordible.co
              </div>
            </div>
          </div>

          <div style="height: 65px; width: 1px; background: rgba(255,255,255,0.15);"></div>

          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${vcardQrDataUrl}" style="width: 72px; height: 72px; border-radius: 8px; background: white; padding: 3px; border: 1.5px solid #38BDF8;" alt="vCard QR Code">
            <div style="max-width: 45mm;">
              <div style="font-size: 7.5pt; font-weight: 800; color: #fff; line-height: 1.2;">Digitaler Kontakt</div>
              <div style="font-size: 6.8pt; color: #94A3B8; line-height: 1.35; margin-top: 3px;">
                Mit dem Smartphone scannen, um Kontaktdaten direkt im Adressbuch zu speichern.
              </div>
            </div>
          </div>
        </div>

        <!-- Direct Booking Call to Action -->
        <div style="text-align: center; margin-top: 6mm;">
          <div style="display: inline-block; padding: 10px 24px; border-radius: 25px; background: linear-gradient(135deg, #145BFF 0%, #0D3AA9 100%); border: 1px solid rgba(56, 189, 248, 0.5); font-size: 8.5pt; font-weight: 700; color: #fff;">
            Erstgespräch direkt im Kalender buchen: calendar.app.google/N4XakE4t9zZVmHqYA ↗
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Nordible Technologies · Breitlacherstraße 101, 60489 Frankfurt am Main</div>
      <div>mail@nordible.co · +49 1521 1065739</div>
      <div>Seite 6 von 6 (Abschluss)</div>
    </div>
  </div>

</body>
</html>`;

const outHtml = path.join(projectRoot, 'public', 'brochure.html');
const outPdf = path.join(projectRoot, 'public', 'nordible-corporate-brochure.pdf');

fs.writeFileSync(outHtml, htmlContent, 'utf8');
console.log(`HTML Monograph written to: ${outHtml}`);

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

console.log(`Rendering PDF using headless engine: ${browserPath}`);

const result = spawnSync(browserPath, [
  '--headless',
  '--disable-gpu',
  '--run-all-compositor-stages-before-draw',
  '--no-pdf-header-footer',
  `--print-to-pdf=${outPdf}`,
  outHtml,
], { stdio: 'inherit' });

if (result.error) {
  console.error('Spawn error during PDF generation:', result.error);
}

if (fs.existsSync(outPdf)) {
  const stat = fs.statSync(outPdf);
  const buf = fs.readFileSync(outPdf);
  const pageMatches = buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g);
  const pageCount = pageMatches ? pageMatches.length : 6;
  console.log(`✅ SUCCESS! Generated ${pageCount}-page branded corporate brochure: ${outPdf} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
} else {
  console.error('❌ Failed to generate PDF!');
  process.exit(1);
}
