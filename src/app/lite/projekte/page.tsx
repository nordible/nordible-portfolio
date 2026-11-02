import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolioProjects';
import { contactConfig } from '@/config/contact';

export const metadata = {
  title: 'Alle Projekte (Lite-Version) | Nordible Technologies',
  description: 'Übersicht aller 16 Referenzprojekte von Nordible Technologies für Enterprise, Startups und regionale Vorreiter.',
};

export default function LiteProjectsPage() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">Portfolio-Übersicht</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
          Alle Referenzprojekte ({portfolioProjects.length})
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Entdecken Sie unsere verifizierten Produktivsysteme, Plattformen und datengetriebenen Wachstumsarchitekturen.
        </p>
      </div>

      <div>
        {portfolioProjects.map((project, index) => (
          <article key={project.id} className="card" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <span className="badge">{project.badge.de}</span>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 'bold' }}>Projekt #{index + 1}</span>
            </div>

            <h2 style={{ fontSize: '18px', fontWeight: '800', marginTop: '4px', marginBottom: '6px' }}>
              <Link href={`/lite/projekte/${project.id}`}>{project.title}</Link>
            </h2>

            <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
              <strong>Kunde:</strong> {project.client} {project.clientRole ? `· ${project.clientRole}` : ''}
            </div>

            <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.6', marginBottom: '12px' }}>
              {project.executiveSummary.de}
            </p>

            {/* Metric Highlights */}
            <div className="metric-grid" style={{ margin: '12px 0' }}>
              {project.businessResults.map((m, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.labelDe || m.label}</span>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                    {m.contextDe || m.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Anchor */}
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
              <strong>Technologie:</strong> {project.technologyTrust.stack.join(', ')}
            </div>

            {/* Action Links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '13px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
              <Link href={`/lite/projekte/${project.id}`} style={{ fontWeight: 'bold' }}>
                Ausführliche Projekt-Details →
              </Link>
              <Link href={`/lite/fallstudien/${project.caseStudySlug}`}>
                Geschäfts-Fallstudie lesen →
              </Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live aufrufen ↗
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  GitHub-Quellcode ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Möchten Sie ein ähnliches Projekt für Ihr Unternehmen realisieren?
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
          Sprechen Sie direkt mit Gründer Kabeer Shah über Ihre Ziele und Herausforderungen.
        </p>
        <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Strategiegespräch buchen →
        </a>
      </div>
    </div>
  );
}
