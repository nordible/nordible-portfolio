import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProject } from '@/data/portfolioProjects';
import { contactConfig } from '@/config/contact';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: 'Projekt nicht gefunden | Nordible Lite' };

  return {
    title: `${project.title} (${project.client}) - Lite-Version | Nordible Technologies`,
    description: project.executiveSummary.de,
  };
}

export default async function LiteProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Link href="/lite/projekte" style={{ fontSize: '13px' }}>← Zurück zur Projektübersicht</Link>
      </div>

      <header style={{ marginBottom: '24px' }}>
        <span className="badge">{project.badge.de}</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', lineHeight: '1.25', marginBottom: '8px' }}>
          {project.heroHeadline.de}
        </h1>
        <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span><strong>Kunde:</strong> {project.client}</span>
          {project.clientRole && <span><strong>Rolle:</strong> {project.clientRole}</span>}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Offizielle Website ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              GitHub-Repository ↗
            </a>
          )}
        </div>
      </header>

      {/* Metrics Bar */}
      <div className="metric-grid" style={{ marginBottom: '24px' }}>
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

      {/* Executive Summary */}
      <section className="card" style={{ marginBottom: '24px', backgroundColor: 'var(--badge-bg)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>
          Management-Zusammenfassung (Executive Summary)
        </h2>
        <p style={{ fontSize: '14px', lineHeight: '1.7' }}>
          {project.executiveSummary.de}
        </p>
        <div style={{ marginTop: '12px' }}>
          <Link href={`/lite/fallstudien/${project.caseStudySlug}`} style={{ fontWeight: 'bold', fontSize: '13px' }}>
            Ausführliche Fallstudie hierzu lesen →
          </Link>
        </div>
      </section>

      {/* Business Bottlenecks */}
      <section className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', color: '#b45309' }}>
          Der geschäftliche Engpass vor der Intervention
        </h2>
        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
          {project.businessChallenge.de.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Strategic Intervention */}
      <section className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', color: '#047857' }}>
          Die strategische Nordible-Lösung & 10x Velocity
        </h2>
        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
          {project.strategicSolution.de.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Client Quote */}
      {project.clientQuote && (
        <section className="card" style={{ marginBottom: '24px', fontStyle: 'italic', borderLeft: '4px solid var(--primary)' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '8px' }}>
            "{project.clientQuote.quote.de}"
          </p>
          <div style={{ fontSize: '12px', fontWeight: 'bold', fontStyle: 'normal' }}>
            — {project.clientQuote.author}, {project.clientQuote.role} ({project.clientQuote.company})
          </div>
        </section>
      )}

      {/* Technology Trust Anchor */}
      <section className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>
          Technologisches Fundament als Sicherheitsgarantie
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '10px' }}>
          {project.technologyTrust.de}
        </p>
        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
          Technologie-Stack: {project.technologyTrust.stack.join(' · ')}
        </p>
      </section>

      {/* Direct CTA */}
      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Bereit für messbare Ergebnisse bei 100 % Code-Eigentum?
        </h3>
        <p style={{ fontSize: '13px', marginBottom: '16px' }}>
          Sprechen Sie direkt mit Gründer und Solutions Architect Kabeer Shah.
        </p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Strategiegespräch buchen →
          </a>
          <a href={`/projekte/${project.id}`} className="btn btn-secondary">
            ✨ Vollversion dieser Seite ansehen
          </a>
        </div>
      </div>
    </div>
  );
}
