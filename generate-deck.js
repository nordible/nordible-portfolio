import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nordible Technologies - Pitch Deck</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: 1920px 1080px;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0B132B;
      color: #FFFFFF;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .slide {
      width: 1920px;
      height: 1080px;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px 100px;
      background: #0B132B;
      background-image: 
        radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.12) 0%, transparent 40%);
    }
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .logo-badge {
      width: 48px;
      height: 48px;
      background: #FFFFFF;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Sora', sans-serif;
      font-weight: 800;
      color: #0B132B;
      font-size: 24px;
      box-shadow: 0 4px 20px rgba(37,99,235,0.3);
    }
    .brand-title {
      font-family: 'Sora', sans-serif;
      font-weight: 800;
      font-size: 24px;
      letter-spacing: -0.5px;
      color: #FFFFFF;
    }
    .brand-title span {
      color: #3B82F6;
    }
    .slide-tag {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #60A5FA;
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3);
      padding: 8px 18px;
      border-radius: 100px;
    }
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 24px;
      font-size: 14px;
      color: rgba(255,255,255,0.5);
      font-weight: 600;
      z-index: 10;
    }
    .slide-footer .contact-bits {
      display: flex;
      gap: 32px;
    }

    /* Cover Slide */
    .cover-content {
      margin-top: auto;
      margin-bottom: auto;
      max-width: 1300px;
      z-index: 10;
    }
    .cover-tagline {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #60A5FA;
      margin-bottom: 24px;
    }
    .cover-title {
      font-family: 'Sora', sans-serif;
      font-size: 76px;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -2px;
      margin-bottom: 32px;
    }
    .cover-title .highlight {
      background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .cover-desc {
      font-size: 24px;
      line-height: 1.6;
      color: rgba(255,255,255,0.8);
      max-width: 960px;
      font-weight: 400;
      margin-bottom: 48px;
    }
    .cover-metrics {
      display: flex;
      gap: 40px;
    }
    .metric-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 20px 32px;
    }
    .metric-value {
      font-family: 'Sora', sans-serif;
      font-size: 40px;
      font-weight: 800;
      color: #60A5FA;
      line-height: 1;
      margin-bottom: 8px;
    }
    .metric-label {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba(255,255,255,0.6);
    }

    /* Standard Slide Typography */
    .slide-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 40px 0;
      z-index: 10;
    }
    .section-headline {
      font-family: 'Sora', sans-serif;
      font-size: 48px;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 16px;
      line-height: 1.15;
    }
    .section-subline {
      font-size: 20px;
      color: rgba(255,255,255,0.7);
      margin-bottom: 40px;
      max-width: 1000px;
    }

    /* Grids */
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 36px;
      display: flex;
      flex-direction: column;
    }
    .card-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #60A5FA;
      margin-bottom: 24px;
    }
    .card-title {
      font-family: 'Sora', sans-serif;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #FFFFFF;
    }
    .card-text {
      font-size: 16px;
      line-height: 1.6;
      color: rgba(255,255,255,0.7);
    }
    .card-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 20px;
    }
    .pill {
      font-size: 12px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      background: rgba(255,255,255,0.08);
      color: #93C5FD;
    }

    /* Founder Slide */
    .founder-layout {
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 50px;
      align-items: center;
    }
    .founder-card {
      background: linear-gradient(180deg, rgba(37,99,235,0.15) 0%, rgba(255,255,255,0.03) 100%);
      border: 1px solid rgba(59,130,246,0.3);
      border-radius: 24px;
      padding: 40px 32px;
      text-align: center;
    }
    .founder-avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      background: linear-gradient(135deg, #2563EB, #60A5FA);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Sora', sans-serif;
      font-size: 44px;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0 auto 24px;
      box-shadow: 0 8px 30px rgba(37,99,235,0.4);
    }
    .founder-name {
      font-family: 'Sora', sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 6px;
    }
    .founder-role {
      font-size: 14px;
      font-weight: 700;
      color: #60A5FA;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 24px;
    }
    .founder-stats {
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      text-align: center;
    }
    .founder-stat-num {
      font-family: 'Sora', sans-serif;
      font-size: 24px;
      font-weight: 800;
      color: #FFFFFF;
    }
    .founder-stat-label {
      font-size: 11px;
      font-weight: 600;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
    }
    .experience-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .exp-item {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .exp-left h4 {
      font-family: 'Sora', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 4px;
    }
    .exp-left p {
      font-size: 14px;
      color: rgba(255,255,255,0.7);
    }
    .exp-right {
      text-align: right;
    }
    .exp-badge {
      font-size: 12px;
      font-weight: 700;
      background: rgba(59,130,246,0.15);
      color: #93C5FD;
      padding: 6px 12px;
      border-radius: 8px;
      border: 1px solid rgba(59,130,246,0.25);
    }

    /* Case Studies */
    .case-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .case-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .client-tag {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #60A5FA;
    }
    .case-title {
      font-family: 'Sora', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 12px;
    }
    .case-desc {
      font-size: 15px;
      color: rgba(255,255,255,0.7);
      line-height: 1.5;
      margin-bottom: 20px;
    }
    .case-highlight {
      background: rgba(37,99,235,0.1);
      border-left: 3px solid #3B82F6;
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
      font-size: 14px;
      font-weight: 600;
      color: #BFDBFE;
      margin-bottom: 16px;
    }

    /* Contact Slide */
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .contact-card-box {
      background: linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(255,255,255,0.02) 100%);
      border: 1px solid rgba(59,130,246,0.3);
      border-radius: 24px;
      padding: 48px;
    }
    .contact-item {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      margin-bottom: 32px;
    }
    .contact-item:last-child {
      margin-bottom: 0;
    }
    .contact-icon-box {
      width: 48px;
      height: 48px;
      background: rgba(59,130,246,0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #60A5FA;
      flex-shrink: 0;
    }
    .contact-info h5 {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba(255,255,255,0.5);
      margin-bottom: 4px;
    }
    .contact-info p {
      font-size: 18px;
      font-weight: 600;
      color: #FFFFFF;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-logo">
        <div class="logo-badge">N</div>
        <div class="brand-title">Nordible <span>Technologies</span></div>
      </div>
      <div class="slide-tag">Company Pitch Deck 2026</div>
    </div>

    <div class="cover-content">
      <div class="cover-tagline">Software Engineering &amp; Cloud Architecture Partner</div>
      <h1 class="cover-title">
        Engineering <span class="highlight">Exceptional</span><br>Digital Systems.
      </h1>
      <p class="cover-desc">
        We architect, build, and scale mission-critical software products for hyper-growth startups and global enterprises across Fintech, Healthtech, and Cloud SaaS.
      </p>

      <div class="cover-metrics">
        <div class="metric-card">
          <div class="metric-value">15+</div>
          <div class="metric-label">Years Engineering Excellence</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">50+</div>
          <div class="metric-label">Production Systems Shipped</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">99.9%</div>
          <div class="metric-label">SLA &amp; Enterprise Uptime</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">&lt;24h</div>
          <div class="metric-label">Rapid Response Protocol</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>Nordible Technologies &bull; Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany</div>
      <div class="contact-bits">
        <div>Tel: +4915235850031</div>
        <div>Email: mail@nordible.co</div>
        <div>Web: nordible.co</div>
      </div>
    </div>
  </div>

  <!-- SLIDE 2: VALUE PROPOSITION & CAPABILITIES -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-logo">
        <div class="logo-badge">N</div>
        <div class="brand-title">Nordible <span>Technologies</span></div>
      </div>
      <div class="slide-tag">Value Proposition</div>
    </div>

    <div class="slide-body">
      <h2 class="section-headline">Why Enterprise Leaders Partner With Nordible</h2>
      <p class="section-subline">Combining deep architectural mastery, cognitive science-backed UX, and strict regulatory compliance to build resilient software.</p>

      <div class="grid-3">
        <div class="card">
          <div class="card-icon">&lt;/&gt;</div>
          <h3 class="card-title">Clean &amp; Resilient Architecture</h3>
          <p class="card-text">
            Microservices, event-driven pipelines, and serverless backends built for extreme fault-tolerance, zero-downtime deployments, and horizontal scalability.
          </p>
          <div class="card-pills">
            <span class="pill">AWS / Serverless</span>
            <span class="pill">Microservices</span>
            <span class="pill">Docker / K8s</span>
          </div>
        </div>

        <div class="card">
          <div class="card-icon">&#9881;</div>
          <h3 class="card-title">Science-Backed UX Design</h3>
          <p class="card-text">
            Interfaces crafted with cognitive ergonomics, thumb-zone accessibility, Fitts's law, and behavioral psychology to maximize conversion and user velocity.
          </p>
          <div class="card-pills">
            <span class="pill">Ergonomic UX</span>
            <span class="pill">Behavioral Flows</span>
            <span class="pill">High Conversion</span>
          </div>
        </div>

        <div class="card">
          <div class="card-icon">&#128274;</div>
          <h3 class="card-title">Regulatory &amp; Security Compliance</h3>
          <p class="card-text">
            Battle-tested in high-stakes sectors with strict adherence to PCI-DSS (Fintech remittance), HIPAA (Healthtech data governance), and SOC-2 controls.
          </p>
          <div class="card-pills">
            <span class="pill">PCI-DSS Audit</span>
            <span class="pill">HIPAA Security</span>
            <span class="pill">TDD / CI/CD</span>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>Nordible Technologies &bull; Engineering Architecture &amp; Strategy</div>
      <div>Page 02</div>
    </div>
  </div>

  <!-- SLIDE 3: FOUNDER PROFILE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-logo">
        <div class="logo-badge">N</div>
        <div class="brand-title">Nordible <span>Technologies</span></div>
      </div>
      <div class="slide-tag">Leadership</div>
    </div>

    <div class="slide-body">
      <div class="founder-layout">
        <div class="founder-card">
          <div class="founder-avatar">KS</div>
          <h3 class="founder-name">Kabeer Shah</h3>
          <div class="founder-role">Founder &amp; Principal Architect</div>
          <p style="font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.5; margin-bottom: 20px;">
            15+ years engineering leadership building scalable systems for Unicorns &amp; Fortune 500 enterprises.
          </p>
          <div class="founder-stats">
            <div>
              <div class="founder-stat-num">15+</div>
              <div class="founder-stat-label">Yrs Experience</div>
            </div>
            <div>
              <div class="founder-stat-num">~32k</div>
              <div class="founder-stat-label">StackOverflow Rep</div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="section-headline" style="font-size: 36px; margin-bottom: 12px;">Executive Leadership &amp; Track Record</h2>
          <p class="section-subline" style="font-size: 16px; margin-bottom: 24px;">Proven experience managing multi-disciplinary engineering departments of 18+ engineers and scaling complex platforms.</p>

          <div class="experience-list">
            <div class="exp-item">
              <div class="exp-left">
                <h4>Quest Global &bull; Tech Lead / Engineering Manager</h4>
                <p>Delivered mission-critical medical systems for GE Healthcare (OncoCare) &amp; Baxter/Vantive (RST IoT diagnostics).</p>
              </div>
              <div class="exp-right">
                <span class="exp-badge">Healthtech / IoT</span>
              </div>
            </div>

            <div class="exp-item">
              <div class="exp-left">
                <h4>Nium Inc. (Instarem) &bull; Interim Head of Engineering</h4>
                <p>Fintech Unicorn: Led 18+ engineers, PCI-DSS compliance audits, and high-value API integrations (PhonePe).</p>
              </div>
              <div class="exp-right">
                <span class="exp-badge">Fintech Unicorn</span>
              </div>
            </div>

            <div class="exp-item">
              <div class="exp-left">
                <h4>The Parent Inc. (TickledMedia) &bull; Lead Senior SDE (SDE-3)</h4>
                <p>Architected microservices and micro-frontends overhaul for flagship Parents.VIP marketing platform.</p>
              </div>
              <div class="exp-right">
                <span class="exp-badge">Microservices</span>
              </div>
            </div>

            <div class="exp-item">
              <div class="exp-left">
                <h4>SmarTek21 &amp; NerdsPal &bull; AI Architect &amp; Co-Founder</h4>
                <p>Built SmartbotHub conversational NLP chatbot AI platform and bootstrapped EdTech cloud community.</p>
              </div>
              <div class="exp-right">
                <span class="exp-badge">AI / EdTech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>Nordible Technologies &bull; Founder Story &amp; Leadership</div>
      <div>Page 03</div>
    </div>
  </div>

  <!-- SLIDE 4: CASE STUDIES & TRACK RECORD -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-logo">
        <div class="logo-badge">N</div>
        <div class="brand-title">Nordible <span>Technologies</span></div>
      </div>
      <div class="slide-tag">Proven Impact</div>
    </div>

    <div class="slide-body">
      <h2 class="section-headline">Enterprise Impact &amp; Case Studies</h2>
      <p class="section-subline">Real-world results delivered across high-scale global platforms.</p>

      <div class="grid-2">
        <div class="case-card">
          <div>
            <div class="case-header">
              <span class="client-tag">General Electric Healthcare</span>
              <span class="pill">Oncology Platform</span>
            </div>
            <h3 class="case-title">OncoCare Clinical Decision Platform</h3>
            <p class="case-desc">
              Architected a specialized decision-support system aggregating complex patient oncological data to empower confident clinical choices worldwide.
            </p>
          </div>
          <div>
            <div class="case-highlight">
              &bull; 40% faster clinical data aggregation &bull; 60% reduction in processing latency
            </div>
            <div class="card-pills">
              <span class="pill">Node.js</span>
              <span class="pill">PostgreSQL</span>
              <span class="pill">AWS Cloud</span>
              <span class="pill">HIPAA Standards</span>
            </div>
          </div>
        </div>

        <div class="case-card">
          <div>
            <div class="case-header">
              <span class="client-tag">Vantive (Baxter Healthcare)</span>
              <span class="pill">IoT Remote Service</span>
            </div>
            <h3 class="case-title">RST - Medical Device Diagnostics</h3>
            <p class="case-desc">
              Engineered the cloud backend for Remote Service Tool using AWS IoT and Lambda to diagnose medical hardware remotely without onsite visits.
            </p>
          </div>
          <div>
            <div class="case-highlight">
              &bull; 50% reduction in device downtime &bull; 75% boost in remote diagnostic accuracy
            </div>
            <div class="card-pills">
              <span class="pill">AWS IoT</span>
              <span class="pill">AWS Lambda</span>
              <span class="pill">TDD / Jest</span>
              <span class="pill">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="case-card">
          <div>
            <div class="case-header">
              <span class="client-tag">Nium Inc. (Instarem)</span>
              <span class="pill">Fintech Unicorn</span>
            </div>
            <h3 class="case-title">Global Cross-Border Remittance</h3>
            <p class="case-desc">
              Built and directed cross-functional teams delivering high-volume remittance platforms processing millions in international payments.
            </p>
          </div>
          <div>
            <div class="case-highlight">
              &bull; 99.9% uptime at peak volume &bull; 100% PCI-DSS audit compliance
            </div>
            <div class="card-pills">
              <span class="pill">Microservices</span>
              <span class="pill">PhonePe API</span>
              <span class="pill">React.js</span>
              <span class="pill">Redis / Node.js</span>
            </div>
          </div>
        </div>

        <div class="case-card">
          <div>
            <div class="case-header">
              <span class="client-tag">Nordible Ecosystem</span>
              <span class="pill">Proprietary Products</span>
            </div>
            <h3 class="case-title">Nordible Professional Email &amp; Tools</h3>
            <p class="case-desc">
              Launched secure business email infrastructure with custom domain routing and privacy-first automation extensions for professional workflows.
            </p>
          </div>
          <div>
            <div class="case-highlight">
              &bull; Enterprise SSL/TLS encryption &bull; 99.9% delivery SLA
            </div>
            <div class="card-pills">
              <span class="pill">Docker</span>
              <span class="pill">Cloud Infrastructure</span>
              <span class="pill">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>Nordible Technologies &bull; Case Studies &amp; Track Record</div>
      <div>Page 04</div>
    </div>
  </div>

  <!-- SLIDE 5: ENGAGEMENT MODELS & CONTACT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-logo">
        <div class="logo-badge">N</div>
        <div class="brand-title">Nordible <span>Technologies</span></div>
      </div>
      <div class="slide-tag">Engagement</div>
    </div>

    <div class="slide-body">
      <div class="contact-layout">
        <div>
          <h2 class="section-headline">Let's Build Something Exceptional Together</h2>
          <p class="section-subline" style="margin-bottom: 32px;">
            Whether you need end-to-end product engineering, architectural guidance for high scale, or a modern cloud overhaul, we are ready to accelerate your roadmap.
          </p>

          <div class="grid-2" style="gap: 16px; margin-bottom: 24px;">
            <div style="background: rgba(255,255,255,0.03); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
              <h4 style="font-size: 16px; font-weight: 700; color: #60A5FA; margin-bottom: 4px;">Dedicated Pods</h4>
              <p style="font-size: 13px; color: rgba(255,255,255,0.7);">Full-stack cross-functional engineering teams embedded with your leadership.</p>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
              <h4 style="font-size: 16px; font-weight: 700; color: #60A5FA; margin-bottom: 4px;">Fractional CTO / Architect</h4>
              <p style="font-size: 13px; color: rgba(255,255,255,0.7);">Senior strategic advisory, compliance audits, and architectural blueprints.</p>
            </div>
          </div>
        </div>

        <div class="contact-card-box">
          <h3 style="font-family: 'Sora', sans-serif; font-size: 24px; font-weight: 800; margin-bottom: 28px; color: #FFFFFF;">
            Get in Touch
          </h3>

          <div class="contact-item">
            <div class="contact-icon-box">&#128222;</div>
            <div class="contact-info">
              <h5>Direct Phone &amp; WhatsApp</h5>
              <p>+4915235850031</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon-box">&#9993;</div>
            <div class="contact-info">
              <h5>Email Inquiries</h5>
              <p>mail@nordible.co &bull; kabeer@nordible.co</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon-box">&#128205;</div>
            <div class="contact-info">
              <h5>European Headquarters</h5>
              <p>Nordible Technologies<br>Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon-box">&#127760;</div>
            <div class="contact-info">
              <h5>Online &amp; LinkedIn</h5>
              <p>nordible.co &bull; linkedin.com/company/nordible-co</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>Nordible Technologies &bull; All Rights Reserved &copy; 2026</div>
      <div>Page 05</div>
    </div>
  </div>

</body>
</html>`;

async function generatePdf() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfPath = path.join(publicDir, 'nordible-pitch-deck.pdf');
  await page.pdf({
    path: pdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    pageRanges: '1-5'
  });

  console.log(`Generated pitch deck PDF at: ${pdfPath}`);
  await browser.close();
}

generatePdf().catch(err => {
  console.error('Failed to generate pitch deck PDF:', err);
  process.exit(1);
});
