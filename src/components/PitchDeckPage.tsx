'use client';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, ArrowLeft, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './PitchDeckPage.css';

export default function PitchDeckPage() {
  const navigate = useNavigate();
  const { getPath } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // Explicitly prevent search engines from indexing the founder pitch deck
    let metaTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'robots';
      document.head.appendChild(metaTag);
    }
    metaTag.content = 'noindex, nofollow, noarchive';

    // Auto-trigger print dialog if requested via ?print=true
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('print') === 'true') {
        const timer = setTimeout(() => {
          window.print();
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(getPath('/portal'));
    }
  };

  const scrollToSlide = (slideNum: number) => {
    setActiveSlide(slideNum);
    const element = document.getElementById(`slide-${slideNum}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="deck-container">
      {/* =========================================================
          DESKTOP STICKY TOOLBAR (HIDDEN ON PRINT)
          ========================================================= */}
      <header className="deck-toolbar hidden md:flex">
        <button onClick={handleBack} className="deck-btn-back" type="button">
          <ArrowLeft className="w-4 h-4" />
          <span>Founder Portal</span>
        </button>

        <div className="h-4 w-px bg-white/20" />

        <div className="deck-nav-dots">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => scrollToSlide(num)}
              className={`deck-nav-dot ${activeSlide === num ? 'active' : ''}`}
            >
              Slide 0{num}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-white/20" />

        <button onClick={handlePrint} className="deck-btn-print" type="button">
          <Printer className="w-4 h-4" />
          <span>Export / Print PDF</span>
        </button>
      </header>

      {/* =========================================================
          SLIDE 1: COVER
          ========================================================= */}
      <section id="slide-1" className="deck-slide">
        <div className="slide-header">
          <div className="brand-logo">
            <div className="logo-badge">N</div>
            <div className="brand-title">Nordible <span>Technologies</span></div>
          </div>
          <div className="slide-tag">Company Pitch Deck 2026</div>
        </div>

        <div className="slide-body">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400 mb-3">
            Software Engineering &amp; Cloud Architecture Partner
          </div>
          <h1 className="section-headline text-5xl lg:text-6xl mb-4 leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Exceptional</span><br />Digital Systems.
          </h1>
          <p className="section-subline text-base lg:text-lg mb-8 max-w-2xl text-blue-100/80">
            We architect, build, and scale mission-critical software products for hyper-growth startups and global enterprises across Fintech, Healthtech, and Cloud SaaS.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-blue-400 font-heading">15+</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-1">Years Leadership</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-blue-400 font-heading">50+</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-1">Systems Shipped</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400 font-heading">99.9%</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-1">Enterprise Uptime</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-blue-400 font-heading">&lt;24h</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-1">Response Protocol</div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <div>Nordible Technologies · Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany</div>
          <div className="contact-bits">
            <span>Tel: +49 1521 1065739</span>
            <span>Email: mail@nordible.co</span>
            <span>Web: nordible.co</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SLIDE 2: VALUE PROPOSITION & CAPABILITIES
          ========================================================= */}
      <section id="slide-2" className="deck-slide">
        <div className="slide-header">
          <div className="brand-logo">
            <div className="logo-badge">N</div>
            <div className="brand-title">Nordible <span>Technologies</span></div>
          </div>
          <div className="slide-tag">Value Proposition</div>
        </div>

        <div className="slide-body">
          <h2 className="section-headline">Why Enterprise Leaders Partner With Nordible</h2>
          <p className="section-subline">Combining deep architectural mastery, cognitive science-backed UX, and strict regulatory compliance to build resilient software.</p>

          <div className="deck-grid-3">
            <div className="deck-card">
              <div className="deck-card-title">&lt;/&gt; Clean &amp; Resilient Architecture</div>
              <p className="deck-card-text">
                Microservices, event-driven pipelines, and serverless backends built for extreme fault-tolerance, zero-downtime deployments, and horizontal scalability.
              </p>
              <div className="deck-pills">
                <span className="deck-pill">AWS Cloud</span>
                <span className="deck-pill">Microservices</span>
                <span className="deck-pill">Kubernetes</span>
              </div>
            </div>

            <div className="deck-card">
              <div className="deck-card-title">⚙ Science-Backed UX Design</div>
              <p className="deck-card-text">
                Interfaces crafted with cognitive ergonomics, thumb-zone accessibility, Fitts's law, and behavioral psychology to maximize conversion and user velocity.
              </p>
              <div className="deck-pills">
                <span className="deck-pill">Ergonomic UX</span>
                <span className="deck-pill">Fitts's Law</span>
                <span className="deck-pill">High Conversion</span>
              </div>
            </div>

            <div className="deck-card">
              <div className="deck-card-title">🔒 Regulatory &amp; Security Compliance</div>
              <p className="deck-card-text">
                Battle-tested in high-stakes sectors with strict adherence to PCI-DSS (Fintech remittance), HIPAA (Healthtech data governance), and SOC-2 controls.
              </p>
              <div className="deck-pills">
                <span className="deck-pill">PCI-DSS Audit</span>
                <span className="deck-pill">HIPAA Security</span>
                <span className="deck-pill">TDD / CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <div>Nordible Technologies · Engineering Architecture &amp; Strategy</div>
          <div>Page 02</div>
        </div>
      </section>

      {/* =========================================================
          SLIDE 3: FOUNDER LEADERSHIP
          ========================================================= */}
      <section id="slide-3" className="deck-slide">
        <div className="slide-header">
          <div className="brand-logo">
            <div className="logo-badge">N</div>
            <div className="brand-title">Nordible <span>Technologies</span></div>
          </div>
          <div className="slide-tag">Leadership</div>
        </div>

        <div className="slide-body">
          <div className="deck-founder-layout">
            <div className="deck-founder-card">
              <div className="deck-founder-avatar">KS</div>
              <h3 className="text-xl font-bold font-heading text-white mb-1">Kabeer Shah</h3>
              <div className="text-xs font-mono text-blue-400 mb-4">Founder &amp; Principal Architect</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                15+ years engineering leadership building scalable systems for Unicorns &amp; Fortune 500 enterprises.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-center">
                <div>
                  <div className="text-lg font-extrabold text-blue-400 font-heading">15+</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase">Yrs Experience</div>
                </div>
                <div>
                  <div className="text-lg font-extrabold text-blue-400 font-heading">~32k</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase">StackOverflow</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-headline text-2xl lg:text-3xl mb-2">Executive Leadership &amp; Track Record</h2>
              <p className="section-subline text-sm mb-4">Proven experience managing multi-disciplinary engineering departments of 18+ engineers and scaling complex platforms.</p>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">Quest Global · Tech Lead / Engineering Manager</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Delivered mission-critical medical systems for GE Healthcare (OncoCare) &amp; Baxter/Vantive (RST IoT diagnostics).</p>
                  </div>
                  <span className="deck-pill shrink-0 ml-3">Healthtech / IoT</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">Nium Inc. (Instarem) · Interim Head of Engineering</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Fintech Unicorn: Led 18+ engineers, PCI-DSS compliance audits, and high-value API integrations (PhonePe).</p>
                  </div>
                  <span className="deck-pill shrink-0 ml-3">Fintech Unicorn</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">The Parent Inc. (TickledMedia) · Lead Senior SDE (SDE-3)</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Architected microservices and micro-frontends overhaul for flagship Parents.VIP marketing platform.</p>
                  </div>
                  <span className="deck-pill shrink-0 ml-3">Microservices</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">SmarTek21 &amp; NerdsPal · AI Architect &amp; Co-Founder</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Built SmartbotHub conversational NLP chatbot AI platform and bootstrapped EdTech cloud community.</p>
                  </div>
                  <span className="deck-pill shrink-0 ml-3">AI / EdTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <div>Nordible Technologies · Founder Story &amp; Leadership</div>
          <div>Page 03</div>
        </div>
      </section>

      {/* =========================================================
          SLIDE 4: CASE STUDIES & PROVEN IMPACT
          ========================================================= */}
      <section id="slide-4" className="deck-slide">
        <div className="slide-header">
          <div className="brand-logo">
            <div className="logo-badge">N</div>
            <div className="brand-title">Nordible <span>Technologies</span></div>
          </div>
          <div className="slide-tag">Proven Impact</div>
        </div>

        <div className="slide-body">
          <h2 className="section-headline">Enterprise Impact &amp; Case Studies</h2>
          <p className="section-subline">Real-world results delivered across high-scale global platforms and premium German practices.</p>

          <div className="deck-grid-2">
            {/* Shams Consult Case */}
            <div className="deck-case-card">
              <div>
                <div className="deck-case-header">
                  <span className="deck-client-tag">Shams Consult</span>
                  <span className="deck-pill">Architecture &amp; Urban Planning</span>
                </div>
                <h3 className="deck-case-title">Frankfurt Architecture Authority &amp; Local GEO</h3>
                <p className="deck-case-desc">
                  Engineered high-performance web architecture, mobile thumb-zone conversion ergonomics, and semantic entity schema for premier Frankfurt architecture practice.
                </p>
              </div>
              <div>
                <div className="deck-case-highlight">
                  • +490% Impressions • Google Page 1 &amp; Selected #1s • Frankfurt Page 7 → Page 3 • 2 Signed Clients
                </div>
                <div className="deck-pills">
                  <span className="deck-pill">Science-Backed UX</span>
                  <span className="deck-pill">Local GEO</span>
                  <span className="deck-pill">Semantic SEO</span>
                  <span className="deck-pill">100/100 Lighthouse</span>
                </div>
              </div>
            </div>

            {/* GE Healthcare Case */}
            <div className="deck-case-card">
              <div>
                <div className="deck-case-header">
                  <span className="deck-client-tag">General Electric Healthcare</span>
                  <span className="deck-pill">Oncology Platform</span>
                </div>
                <h3 className="deck-case-title">OncoCare Clinical Decision Platform</h3>
                <p className="deck-case-desc">
                  Architected a specialized decision-support system aggregating complex patient oncological data to empower confident clinical choices worldwide.
                </p>
              </div>
              <div>
                <div className="deck-case-highlight">
                  • 40% faster clinical data aggregation • 60% reduction in processing latency
                </div>
                <div className="deck-pills">
                  <span className="deck-pill">Node.js</span>
                  <span className="deck-pill">PostgreSQL</span>
                  <span className="deck-pill">AWS Cloud</span>
                  <span className="deck-pill">HIPAA Standards</span>
                </div>
              </div>
            </div>

            {/* Baxter Case */}
            <div className="deck-case-card">
              <div>
                <div className="deck-case-header">
                  <span className="deck-client-tag">Vantive (Baxter Healthcare)</span>
                  <span className="deck-pill">IoT Remote Service</span>
                </div>
                <h3 className="deck-case-title">RST - Medical Device Diagnostics</h3>
                <p className="deck-case-desc">
                  Engineered the cloud backend for Remote Service Tool using AWS IoT and Lambda to diagnose medical hardware remotely without onsite visits.
                </p>
              </div>
              <div>
                <div className="deck-case-highlight">
                  • 50% reduction in device downtime • 75% boost in remote diagnostic accuracy
                </div>
                <div className="deck-pills">
                  <span className="deck-pill">AWS IoT</span>
                  <span className="deck-pill">AWS Lambda</span>
                  <span className="deck-pill">TDD / Jest</span>
                  <span className="deck-pill">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Nium Case */}
            <div className="deck-case-card">
              <div>
                <div className="deck-case-header">
                  <span className="deck-client-tag">Nium Inc. (Instarem)</span>
                  <span className="deck-pill">Fintech Unicorn</span>
                </div>
                <h3 className="deck-case-title">Global Cross-Border Remittance</h3>
                <p className="deck-case-desc">
                  Built and directed cross-functional teams delivering high-volume remittance platforms processing millions in international payments.
                </p>
              </div>
              <div>
                <div className="deck-case-highlight">
                  • 99.9% uptime at peak volume • 100% PCI-DSS audit compliance
                </div>
                <div className="deck-pills">
                  <span className="deck-pill">Microservices</span>
                  <span className="deck-pill">PhonePe API</span>
                  <span className="deck-pill">React.js</span>
                  <span className="deck-pill">Redis / Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <div>Nordible Technologies · Case Studies &amp; Track Record</div>
          <div>Page 04</div>
        </div>
      </section>

      {/* =========================================================
          SLIDE 5: ENGAGEMENT MODELS & CONTACT
          ========================================================= */}
      <section id="slide-5" className="deck-slide">
        <div className="slide-header">
          <div className="brand-logo">
            <div className="logo-badge">N</div>
            <div className="brand-title">Nordible <span>Technologies</span></div>
          </div>
          <div className="slide-tag">Engagement</div>
        </div>

        <div className="slide-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-headline">Let's Build Something Exceptional Together</h2>
              <p className="section-subline mb-6">
                Whether you need end-to-end product engineering, architectural guidance for high scale, or a modern cloud overhaul, we are ready to accelerate your roadmap.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-bold text-blue-400 font-heading mb-1">Dedicated Pods</h4>
                  <p className="text-[11px] text-gray-300">Full-stack cross-functional engineering teams embedded with your leadership.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-bold text-blue-400 font-heading mb-1">Fractional CTO</h4>
                  <p className="text-[11px] text-gray-300">Strategic architecture audits, regulatory roadmaps, and executive technology advisory.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 via-white/5 to-transparent border border-blue-500/30">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4 font-mono">Headquarters &amp; Direct Channel</h3>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">📍</div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-gray-400">Headquarters</div>
                    <div className="font-semibold text-white">Breitlacherstraße 101, 60489 Frankfurt am Main, Germany</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">✉</div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-gray-400">Direct Inquiries</div>
                    <div className="font-semibold text-white">mail@nordible.co · kabeer@nordible.co</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">☎</div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-gray-400">Direct Telephone</div>
                    <div className="font-semibold text-white">+49 1521 1065739</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <div>Nordible Technologies · All Rights Reserved © 2026</div>
          <div>Page 05</div>
        </div>
      </section>

      {/* =========================================================
          SCIENCE-BACKED MOBILE BOTTOM THUMB-ZONE BAR
          ========================================================= */}
      <footer className="deck-mobile-bar md:hidden">
        <button
          onClick={handleBack}
          type="button"
          className="p-2.5 rounded-xl bg-white/10 text-gray-200 border border-white/10 active:scale-95"
          aria-label="Back to portal"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-blue-300">
          <span>Slide {activeSlide} / 5</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSlide(Math.max(1, activeSlide - 1))}
            disabled={activeSlide === 1}
            type="button"
            className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(5, activeSlide + 1))}
            disabled={activeSlide === 5}
            type="button"
            className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={handlePrint}
            type="button"
            className="p-2.5 rounded-xl bg-blue-600 text-white active:scale-95 shadow-lg"
            aria-label="Export PDF"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
