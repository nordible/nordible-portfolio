import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolioProjects';
import { contactConfig } from '@/config/contact';

export default function LiteHomePage() {
  const topProjects = portfolioProjects.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ marginBottom: '32px' }}>
        <span className="badge">KI-Native Softwareentwicklung & Digitalisierung</span>
        <h1 style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1.25', marginBottom: '12px' }}>
          Individuelle Software, autonome KI-Agenten & planbares Wachstum für Unternehmen
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '16px' }}>
          Geleitet von Systems Architect Kabeer Shah (u. a. ehemals GE Healthcare, Baxter, NIUM). 10x Umsetzungsgeschwindigkeit, ohne Zwischenhändler und mit 100 % Code-Eigentum ab Tag 1.
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Kostenloses Strategiegespräch buchen →
          </a>
          <Link href="/lite/projekte" className="btn btn-secondary">
            Alle 16 Projekte ansehen
          </Link>
        </div>
      </section>

      {/* Trust & Proven Delivery */}
      <section className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
          Erprobte Exzellenz für Marktführer & innovative Startups
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>
          Verifizierte Projekterfolge für globale Konzerne und regionale Vorreiter:
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '12px', fontWeight: 'bold' }}>
          <span style={{ padding: '4px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px' }}>General Electric Healthcare</span>
          <span style={{ padding: '4px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px' }}>Baxter / Vantive</span>
          <span style={{ padding: '4px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px' }}>NIUM (Instarem)</span>
          <span style={{ padding: '4px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px' }}>Shams Consult</span>
          <span style={{ padding: '4px 8px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px' }}>BUNS 069</span>
        </div>
      </section>

      {/* Projects Highlights */}
      <section style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Ausgewählte Projekte ({portfolioProjects.length})</h2>
          <Link href="/lite/projekte" style={{ fontSize: '13px', fontWeight: 'bold' }}>Alle ansehen →</Link>
        </div>

        <div>
          {topProjects.map((project) => (
            <div key={project.id} className="card">
              <span className="badge">{project.badge.de}</span>
              <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '6px' }}>
                <Link href={`/lite/projekte/${project.id}`}>{project.title}</Link>
                <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 'normal', marginLeft: '6px' }}>({project.client})</span>
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
                {project.executiveSummary.de.slice(0, 160)}...
              </p>
              
              <div className="metric-grid" style={{ margin: '8px 0' }}>
                {project.businessResults.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="metric-card">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.labelDe || m.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px', fontSize: '13px' }}>
                <Link href={`/lite/projekte/${project.id}`} style={{ fontWeight: 'bold' }}>Projekt-Details ansehen →</Link>
                <Link href={`/lite/fallstudien/${project.caseStudySlug}`}>Fallstudie lesen →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>Unsere Kernleistungen</h2>
        <div className="card">
          <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
            <li><strong>Autonome KI-Agenten:</strong> Automatisierung von Geschäftsprozessen, Schnittstellen und CRM-Systemen.</li>
            <li><strong>Individuelle Softwareentwicklung:</strong> Moderne Web- & Mobile-Apps mit 100 % Quellcode-Eigentum.</li>
            <li><strong>Digitales Marketing & GEO:</strong> Auffindbarkeit in KI-Suchmaschinen (ChatGPT, Perplexity) & Google.</li>
            <li><strong>Videobearbeitung & Content:</strong> Professioneller Schnitt, Social Media Reels & Imagevideos.</li>
            <li><strong>Geschäftsprozess-Automatisierung:</strong> Workflows vernetzen und repetitive Büroaufgaben eliminieren.</li>
            <li><strong>Sichere Business-E-Mails:</strong> Eigene geschäftliche E-Mail-Infrastruktur ohne Fremdanbieter-Abhängigkeit.</li>
          </ul>
          <div style={{ marginTop: '12px' }}>
            <Link href="/lite/services" style={{ fontWeight: 'bold', fontSize: '13px' }}>Detaillierte Leistungsübersicht ansehen →</Link>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="card" style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Direktes Erstgespräch mit Gründer Kabeer Shah
        </h2>
        <p style={{ fontSize: '13px', marginBottom: '12px' }}>
          Keine Vertriebsmitarbeiter, keine Warteschleifen. Wir analysieren Ihre Anforderungen direkt auf Augenhöhe.
        </p>
        <p style={{ fontSize: '13px', lineHeight: '1.8' }}>
          <strong>Telefon / WhatsApp:</strong> <a href={contactConfig.phone.telHref}>{contactConfig.phone.display}</a><br />
          <strong>E-Mail:</strong> <a href={contactConfig.email.mailToFounder}>{contactConfig.email.founder}</a><br />
          <strong>Kalender:</strong> <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Online-Termin buchen</a>
        </p>
      </section>
    </div>
  );
}
