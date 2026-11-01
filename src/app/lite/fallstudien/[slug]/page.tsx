import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articlesBySlug } from '@/data/blogContent';
import { contactConfig } from '@/config/contact';

export function generateStaticParams() {
  return Object.keys(articlesBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesBySlug[slug]?.de || articlesBySlug[slug]?.en;
  if (!article) return { title: 'Fallstudie nicht gefunden | Nordible Lite' };

  return {
    title: `${article.title} - Lite-Version | Nordible Technologies`,
    description: article.introParagraphs?.[0] || 'Fallstudie von Nordible Technologies',
  };
}

export default async function LiteCaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesBySlug[slug]?.de || articlesBySlug[slug]?.en;
  if (!article) notFound();

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Link href="/lite/fallstudien" style={{ fontSize: '13px' }}>← Zurück zu allen Fallstudien</Link>
      </div>

      <header style={{ marginBottom: '24px' }}>
        <span className="badge">{article.badge}</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', lineHeight: '1.25', margin: '8px 0' }}>
          {article.title}
        </h1>
        <div style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
          {article.client?.name && (
            <>
              <span>·</span>
              <span><strong>Auftraggeber:</strong> {article.client.name}</span>
            </>
          )}
        </div>
      </header>

      {/* Metrics Bar */}
      {article.metrics && article.metrics.length > 0 && (
        <div className="metric-grid" style={{ marginBottom: '24px' }}>
          {article.metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <span className="metric-val">{m.value}</span>
              <span className="metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Intro Paragraphs */}
      <section className="card" style={{ marginBottom: '24px', backgroundColor: 'var(--badge-bg)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>
          Kernanalyse für Entscheider
        </h2>
        {article.introParagraphs.map((para, idx) => (
          <p key={idx} style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '10px' }}>
            {para}
          </p>
        ))}
      </section>

      {/* Objective */}
      {article.objective && (
        <section className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>
            {article.objective.title}
          </h2>
          {article.objective.text && (
            <p style={{ fontSize: '14px', marginBottom: '10px', color: 'var(--muted)' }}>
              {article.objective.text}
            </p>
          )}
          {article.objective.points && (
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              {article.objective.points.map((pt, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>{pt}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Sections */}
      {article.sections.map((section, idx) => (
        <section key={idx} className="card" style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px' }}>
            ABSCHNITT {section.number}
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
            {section.title}
          </h2>

          {section.businessTakeaway && (
            <div style={{ padding: '8px 12px', backgroundColor: 'var(--bg)', borderLeft: '3px solid var(--primary)', fontSize: '13px', fontStyle: 'italic', marginBottom: '12px' }}>
              <strong>Kernaussage für Führungskräfte:</strong> {section.businessTakeaway}
            </div>
          )}

          {section.paragraphs && section.paragraphs.map((para, pIdx) => (
            <p key={pIdx} style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '10px' }}>
              {para}
            </p>
          ))}

          {section.cards && section.cards.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginTop: '12px' }}>
              {section.cards.map((card, cIdx) => (
                <div key={cIdx} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>{card.badge}</div>
                  <strong style={{ fontSize: '13px', display: 'block', margin: '4px 0' }}>{card.title}</strong>
                  <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          )}

          {section.quote && (
            <div style={{ marginTop: '16px', padding: '12px', background: 'var(--bg)', borderLeft: '4px solid var(--primary)', fontStyle: 'italic', fontSize: '13px' }}>
              "{section.quote}"
            </div>
          )}
        </section>
      ))}

      {/* CTA Box */}
      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          {article.cta.title}
        </h3>
        {article.cta.desc && (
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
            {article.cta.desc}
          </p>
        )}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
            {article.cta.buttonText} →
          </a>
          <a href={`/blog/${slug}`} className="btn btn-secondary">
            ✨ Vollversion mit Grafiken aufrufen
          </a>
        </div>
      </div>
    </div>
  );
}
