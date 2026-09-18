import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, ArrowLeft, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import './ProspectFlyerPage.css';

export default function ProspectFlyerPage() {
  const navigate = useNavigate();
  const { getPath } = useLanguage();

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Nordible Technologies – B2B Exekutiv-Prospekt & Leistungsflyer';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(getPath('/portal'));
    }
  };

  return (
    <div className="flyer-view-container">
      {/* =========================================================
          DESKTOP STICKY TOOLBAR (HIDDEN ON MOBILE & PRINT)
          ========================================================= */}
      <header className="flyer-toolbar hidden md:flex">
        <button
          type="button"
          onClick={handleBack}
          className="flyer-toolbar-back"
          title="Zurück zur vorherigen Seite"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Zurück</span>
        </button>

        <div className="flyer-toolbar-title">
          <span>Nordible Technologies · <span className="highlight">B2B Flyer</span></span>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="flyer-btn-print"
          title="PDF generieren & drucken (Strg + P)"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>PDF generieren & drucken</span>
        </button>
      </header>

      {/* =========================================================
          MOBILE BOTTOM ERGONOMIC DOCK (FITTS'S LAW / THUMB REACH)
          ========================================================= */}
      <nav aria-label="Flyer Quick Actions" className="flyer-mobile-dock md:hidden">
        <button
          type="button"
          onClick={handleBack}
          className="p-3 rounded-full bg-white/10 text-white border border-white/20 active:scale-95"
          title="Zurück"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="flyer-btn-print"
          title="PDF generieren & drucken"
        >
          <Printer className="w-4 h-4" />
          <span>Drucken / Als PDF sichern</span>
        </button>
      </nav>

      {/* =========================================================
          SHEETS WRAPPER
          ========================================================= */}
      <main className="flyer-sheets-wrapper">
        {/* =========================================================
            SHEET 1: EXECUTIVE POSITIONING, ARCHITECTURE & TRUST
            ========================================================= */}
        <section className="flyer-sheet" aria-label="B2B Flyer Seite 1">
          {/* Header */}
          <header className="flyer-sheet-header">
            <div className="flyer-brand-group">
              <div className="flyer-brand-icon-box">
                <img src="/images/logos/nordible-icon.png" alt="Nordible Technologies" />
              </div>
              <div className="flyer-brand-text">
                <span className="flyer-brand-title">Nordible Technologies</span>
                <span className="flyer-brand-sub">AI-Native Engineering Partner</span>
              </div>
            </div>
            <div className="flyer-header-meta">
              <span className="flyer-meta-tag">B2B Exekutiv-Prospekt</span>
              <span className="flyer-meta-tag">Frankfurt am Main</span>
              <span className="flyer-page-pill">01 / 02</span>
            </div>
          </header>

          {/* Body */}
          <div className="flyer-content-body">
            {/* Hero / Positioning */}
            <div>
              <h1 className="flyer-main-title">
                High-Velocity Software-Architektur, autonome KI-Agenten &{' '}
                <span className="highlight">messbares B2B-Wachstum.</span>
              </h1>
              <p className="flyer-lead-text">
                Nordible ist der spezialisierte Technologiepartner für mittelständische Unternehmen, B2B-Dienstleister und
                ambitionierte Innovatoren im Rhein-Main-Gebiet und weltweit. Wir verbinden 15+ Jahre Enterprise-Systemerfahrung
                mit modernsten autonomen KI-Pipelines – für einsatzbereite Software und skalierbare Prozesse ohne
                traditionelle Agentur-Reibungsverluste.
              </p>
            </div>

            {/* 4 Key Proof Metrics */}
            <div className="flyer-metrics-grid">
              <div className="flyer-metric-card">
                <div className="flyer-metric-val">15+ Jahre</div>
                <div className="flyer-metric-label">Enterprise Leadership</div>
                <div className="flyer-metric-desc">Erprobte Systemführung bei GE Healthcare, NIUM & Baxter.</div>
              </div>
              <div className="flyer-metric-card">
                <div className="flyer-metric-val">50+</div>
                <div className="flyer-metric-label">Lösungen Realisiert</div>
                <div className="flyer-metric-desc">Web- & Mobile-Apps, KI-Agenten und ausfallsichere Portale.</div>
              </div>
              <div className="flyer-metric-card">
                <div className="flyer-metric-val">100 %</div>
                <div className="flyer-metric-label">Pünktliche Lieferung</div>
                <div className="flyer-metric-desc">Feste Meilensteine, transparente Sprints & 100 % IP-Eigentum.</div>
              </div>
              <div className="flyer-metric-card">
                <div className="flyer-metric-val">&lt; 24 Std.</div>
                <div className="flyer-metric-label">Direkte Reaktionszeit</div>
                <div className="flyer-metric-desc">Direkter Draht zum Architekten ohne Vermittler oder Junior-Handoffs.</div>
              </div>
            </div>

            {/* Enterprise Trust & Heritage Bar */}
            <div className="flyer-heritage-strip">
              <div className="flyer-strip-label">
                <span className="pulse-dot" />
                <span>Erprobte Engineering-Erfahrung & Vertrauen führender Unternehmen</span>
              </div>
              <div className="flyer-logos-row">
                <div className="flyer-logo-badge">
                  <img src="/images/logos/GeneralElectric_logo.svg" alt="General Electric" />
                  <span>GE Healthcare</span>
                </div>
                <div className="flyer-logo-badge">
                  <img src="/images/logos/InstaRem_logo.svg" alt="InstaRem / NIUM" />
                  <span>NIUM / Fintech</span>
                </div>
                <div className="flyer-logo-badge">
                  <img src="/images/logos/vantive_logo.jpg" alt="Baxter / Vantive" />
                  <span>Baxter / Vantive</span>
                </div>
                <div className="flyer-logo-badge">
                  <img src="/images/logos/shams-consult-logo.png" alt="Shams Consult" />
                  <span>Shams Consult</span>
                </div>
              </div>
            </div>

            {/* Founder Authority Spotlight */}
            <div className="flyer-founder-card">
              <div className="flyer-founder-photo-box">
                <img src="/images/founder.png" alt="Kabeer Shah, Gründer & Solutions Architect" />
              </div>
              <div className="flyer-founder-details">
                <div className="flyer-founder-name-row">
                  <span className="flyer-founder-name">Kabeer Shah</span>
                  <span className="flyer-founder-role-tag">Gründer & Lead Architect</span>
                </div>
                <div className="flyer-founder-title">Senior Solutions Architect · Frankfurt am Main</div>
                <p className="flyer-founder-bio">
                  Ergebnisorientierter Tech-Leader mit über 15 Jahren Erfahrung im Aufbau und Skalieren von
                  Hochleistungs-Software. Nachgewiesene Erfolge bei der Architektur komplexer Cloud-Systeme (AWS,
                  Microservices) und strenger regulatorischer Compliance (Fintech PCI-DSS, Healthcare HIPAA) bei globalen
                  Konzernen und führenden Mittelständlern.
                </p>
                <div className="flyer-founder-badges">
                  <span className="flyer-f-badge highlight">
                    <ShieldCheck className="w-2.5 h-2.5 text-blue-600 inline mr-0.5" />
                    AWS Certified Cloud Practitioner
                  </span>
                  <span className="flyer-f-badge">Top ~32k Stack Overflow Contributor</span>
                  <span className="flyer-f-badge">100 % Gründerverantwortung</span>
                  <span className="flyer-f-badge">Hands-on Execution</span>
                </div>
              </div>
            </div>

            {/* Comparison Matrix: Agency vs Nordible */}
            <div className="flyer-comparison-strip">
              <div className="flyer-comp-col flyer-comp-agency">
                <div className="flyer-comp-title">
                  <span>✕</span> Traditionelle Agenturen
                </div>
                <ul className="flyer-comp-list">
                  <li>• Wochenlange Abstimmungen & bürokratische Overhead-Kosten</li>
                  <li>• Projektübergabe an unerfahrene Junior-Entwickler</li>
                  <li>• Vendor Lock-in und monatliche proprietäre Abhängigkeiten</li>
                </ul>
              </div>
              <div className="flyer-comp-col flyer-comp-nordible">
                <div className="flyer-comp-title">
                  <span>✓</span> Der Nordible Partnerschafts-Ansatz
                </div>
                <ul className="flyer-comp-list">
                  <li>• Direkte Abstimmung mit dem Lead-Architekten ohne Zwischenebenen</li>
                  <li>• Funktionsfähige Prototypen (MVPs) in 2–4 Wochen statt Quartalen</li>
                  <li>• 100 % Eigentum an Quellcode, Systemen und geistigem Eigentum (IP)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="flyer-sheet-footer">
            <div className="flyer-footer-left">
              <strong>Nordible Technologies</strong> · Breitlacherstraße 101, 60489 Frankfurt am Main
            </div>
            <div className="flyer-footer-right">
              <span>Vertrauliches B2B-Prospekt</span>
              <span className="accent-dot" />
              <span>Weiter zu Seite 2: Kernleistungen & Kooperation</span>
            </div>
          </footer>
        </section>

        {/* =========================================================
            SHEET 2: CAPABILITY PILLARS, GUARANTEES & DIRECT ACTION
            ========================================================= */}
        <section className="flyer-sheet" aria-label="B2B Flyer Seite 2">
          {/* Header */}
          <header className="flyer-sheet-header">
            <div className="flyer-brand-group">
              <div className="flyer-brand-icon-box">
                <img src="/images/logos/nordible-icon.png" alt="Nordible Technologies" />
              </div>
              <div className="flyer-brand-text">
                <span className="flyer-brand-title">Nordible Technologies</span>
                <span className="flyer-brand-sub">Leistungsspektrum & Kooperation</span>
              </div>
            </div>
            <div className="flyer-header-meta">
              <span className="flyer-meta-tag">Leistungsübersicht</span>
              <span className="flyer-meta-tag">2026 / 2027</span>
              <span className="flyer-page-pill">02 / 02</span>
            </div>
          </header>

          {/* Body */}
          <div className="flyer-content-body">
            {/* Section Title */}
            <div>
              <h2 className="flyer-main-title" style={{ fontSize: '16pt', marginBottom: '2mm' }}>
                Ganzheitliche Begleitung:{' '}
                <span className="highlight">Von der Software bis zur KI-Automatisierung.</span>
              </h2>
              <p className="flyer-lead-text" style={{ fontSize: '7.8pt', marginBottom: '3.5mm' }}>
                Jedes Modul kann als zielgerichtetes Einzelprojekt oder als integrierte Partnerschaft umgesetzt werden. Wir
                passen uns Ihren bestehenden Prozessen flexibel an.
              </p>
            </div>

            {/* 5 Core Capability Cards */}
            <div className="flyer-services-grid">
              {/* 1. Marketing & GEO */}
              <div className="flyer-service-card">
                <div className="flyer-service-card-header">
                  <div className="flyer-service-icon-pill">01</div>
                  <div className="flyer-service-title">Digital Marketing & GEO-Sichtbarkeit</div>
                </div>
                <p className="flyer-service-desc">
                  Präsenz dort, wo Entscheider heute suchen: Wir optimieren Ihre Marke für Google sowie neue
                  KI-Suchmaschinen (Perplexity, ChatGPT, Google AI Overviews) und steuern gezielte B2B-Kampagnen.
                </p>
                <div className="flyer-service-tags">
                  <span className="flyer-tag-item">GEO / KI-Suche</span>
                  <span className="flyer-tag-item">Social Media Management</span>
                  <span className="flyer-tag-item">B2B Lead-Gen</span>
                </div>
              </div>

              {/* 2. Video Production */}
              <div className="flyer-service-card">
                <div className="flyer-service-card-header">
                  <div className="flyer-service-icon-pill">02</div>
                  <div className="flyer-service-title">Videobearbeitung & Content-Produktion</div>
                </div>
                <p className="flyer-service-desc">
                  Professioneller Videoschnitt für LinkedIn, Kurzformate, Erklärvideos und Unternehmenspräsentationen – mit
                  Motion Graphics, klaren Botschaften und maximaler Zielgruppenwirkung.
                </p>
                <div className="flyer-service-tags">
                  <span className="flyer-tag-item">Short-Form Reels</span>
                  <span className="flyer-tag-item">Motion Graphics</span>
                  <span className="flyer-tag-item">Executive Branding</span>
                </div>
              </div>

              {/* 3. AI Agents */}
              <div className="flyer-service-card">
                <div className="flyer-service-card-header">
                  <div className="flyer-service-icon-pill">03</div>
                  <div className="flyer-service-title">Autonome KI-Agenten & Workflows</div>
                </div>
                <p className="flyer-service-desc">
                  Praxisnahe KI-Agenten, die wiederkehrende Geschäftsabläufe automatisieren, Daten abgleichen,
                  Kundenanfragen vorqualifizieren und Ihre bestehenden Software-Tools intelligent verbinden.
                </p>
                <div className="flyer-service-tags">
                  <span className="flyer-tag-item">Custom AI-Pipelines</span>
                  <span className="flyer-tag-item">Prozessautomatisierung</span>
                  <span className="flyer-tag-item">API-Integrationen</span>
                </div>
              </div>

              {/* 4. Web & Mobile Engineering */}
              <div className="flyer-service-card">
                <div className="flyer-service-card-header">
                  <div className="flyer-service-icon-pill">04</div>
                  <div className="flyer-service-title">Individuelle Web- & Mobile-Entwicklung</div>
                </div>
                <p className="flyer-service-desc">
                  Maßgeschneiderte Web-Anwendungen, Kundenportale und plattformübergreifende mobile Apps (iOS & Android) –
                  schnell, ausfallsicher, zukunftssicher und intuitiv bedienbar.
                </p>
                <div className="flyer-service-tags">
                  <span className="flyer-tag-item">React / Next.js / Mobile</span>
                  <span className="flyer-tag-item">Cloud & Microservices</span>
                  <span className="flyer-tag-item">100 % Code-Eigentum</span>
                </div>
              </div>

              {/* 5. Business Systems & Email (Wide) */}
              <div className="flyer-service-card wide">
                <div className="flyer-service-card-header">
                  <div className="flyer-service-icon-pill">05</div>
                  <div className="flyer-service-title">Geschäftssystem-Automatisierung & Sichere Firmen-E-Mail</div>
                </div>
                <p className="flyer-service-desc">
                  Beseitigung manueller Datenduplikate durch Verbindung von CRM, ERP und Buchhaltungstools. Bereitstellung
                  hochgradig sicherer, eigener Firmen-E-Mail-Adressen (ihrname@ihrunternehmen.de) mit zuverlässigem
                  Spamschutz und garantierter Erreichbarkeit.
                </p>
                <div className="flyer-service-tags">
                  <span className="flyer-tag-item">System- & Tool-Integrationen</span>
                  <span className="flyer-tag-item">Eigene Firmen-Domains</span>
                  <span className="flyer-tag-item">Spamschutz & DSGVO</span>
                  <span className="flyer-tag-item">24/7 Betriebssicherheit</span>
                </div>
              </div>
            </div>

            {/* 3 Nordible Operating Guarantees */}
            <div className="flyer-guarantee-grid">
              <div className="flyer-guarantee-box">
                <div className="flyer-g-num">Prinzip 01</div>
                <div className="flyer-g-title">100 % IP & Code-Eigentum</div>
                <div className="flyer-g-text">
                  Sie besitzen jeden geschriebenen Code, alle Schnittstellen und Designs ab Tag 1 vollständig. Kein
                  Plattform-Lock-in.
                </div>
              </div>
              <div className="flyer-guarantee-box">
                <div className="flyer-g-num">Prinzip 02</div>
                <div className="flyer-g-title">Direkte Gründerbetreuung</div>
                <div className="flyer-g-text">
                  Keine Vertriebsschleifen: Ihr Ansprechpartner ist der leitende Architekt mit 15+ Jahren Senior-Erfahrung.
                </div>
              </div>
              <div className="flyer-guarantee-box">
                <div className="flyer-g-num">Prinzip 03</div>
                <div className="flyer-g-title">Echte Sprint-Geschwindigkeit</div>
                <div className="flyer-g-text">
                  Funktionsfähige Prototypen und einsatzbereite Systeme in 2–4 Wochen statt monatelanger Konzeptphasen.
                </div>
              </div>
            </div>

            {/* Executive Call-To-Action Block */}
            <div className="flyer-cta-container">
              <div className="flyer-cta-top">
                <div className="flyer-cta-headings">
                  <div className="flyer-cta-title">Bereit, Ihre Technologie & Prozesse zu beschleunigen?</div>
                  <div className="flyer-cta-subtitle">
                    Lassen Sie uns in einem unverbindlichen Video-Erstgespräch (30 Minuten) Ihre technische Ausgangslage prüfen
                    und die wirksamsten Hebel für Automatisierung, moderne Software und Neukundengewinnung identifizieren.
                  </div>
                </div>
                <div className="flyer-cta-actions">
                  <a
                    href={contactConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flyer-cta-button-visual"
                    title="Online-Terminbuchung öffnen"
                  >
                    <span>Termin anfragen</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    href={contactConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flyer-qr-card"
                    title="QR-Code scannen: Direkt zum Buchungskalender"
                  >
                    <img
                      src="/images/qr-booking.svg"
                      alt="QR-Code Direktbuchung"
                      className="flyer-qr-img"
                    />
                    <span className="flyer-qr-label">Direkt buchen</span>
                  </a>
                </div>
              </div>

              <div className="flyer-cta-contact-matrix">
                <div className="flyer-matrix-item">
                  <span className="flyer-matrix-label">Standort</span>
                  <span className="flyer-matrix-value">Frankfurt am Main, DE</span>
                </div>
                <div className="flyer-matrix-item">
                  <span className="flyer-matrix-label">E-Mail (Direkt)</span>
                  <span className="flyer-matrix-value">mail@nordible.co</span>
                </div>
                <div className="flyer-matrix-item">
                  <span className="flyer-matrix-label">Telefon</span>
                  <span className="flyer-matrix-value">+49 1521 1065739</span>
                </div>
                <div className="flyer-matrix-item">
                  <span className="flyer-matrix-label">Webportal</span>
                  <span className="flyer-matrix-value">nordible.co</span>
                </div>
              </div>

              <div className="flyer-cta-language-notice">
                <strong>Hinweis zur Kommunikation:</strong> Wir beraten aktuell vorrangig auf Englisch und vertiefen
                parallel unsere Deutschkenntnisse kontinuierlich – Projektanfragen auf Deutsch oder Englisch sind
                gleichermaßen herzlich willkommen!
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="flyer-sheet-footer">
            <div className="flyer-footer-left">
              <strong>Nordible Technologies</strong> · Breitlacherstraße 101, 60489 Frankfurt am Main · mail@nordible.co
            </div>
            <div className="flyer-footer-right">
              <span>Vertrauliches Dokument</span>
              <span className="accent-dot" />
              <span>© 2026 Nordible Technologies. Alle Rechte vorbehalten.</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
