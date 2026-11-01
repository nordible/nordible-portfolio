import Link from 'next/link';
import { blogHubTranslations } from '@/data/blogContent';
import { contactConfig } from '@/config/contact';

export const metadata = {
  title: 'Fallstudien (Lite-Version) | Nordible Technologies',
  description: 'Wirtschaftliche Fallstudien aus der Sicht von Unternehmensentscheidern: Echte Zahlen, quantifizierter ROI und de-riskierte Technologie.',
};

export default function LiteCaseStudiesPage() {
  const posts = blogHubTranslations.de.posts;

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">Erfolgsberichte für Entscheider</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
          Wirtschaftliche Fallstudien ({posts.length})
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Messbare Geschäftsergebnisse, Kostenreduktionen und Umsatzsprünge – verifiziert für Geschäftsführung und Investoren.
        </p>
      </div>

      <div>
        {posts.map((post, idx) => (
          <article key={post.slug || idx} className="card" style={{ marginBottom: '18px' }}>
            <span className="badge">{post.category}</span>
            <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '6px 0' }}>
              <Link href={`/lite/fallstudien/${post.slug}`}>{post.title}</Link>
            </h2>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '12px' }}>
              {post.excerpt}
            </p>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', fontSize: '12px', color: 'var(--muted)', borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
              <span>Lesezeit: {post.readTime}</span>
              <span>·</span>
              <span>Schlagwörter: {post.tags.slice(0, 3).join(', ')}</span>
              <span>·</span>
              <Link href={`/lite/fallstudien/${post.slug}`} style={{ fontWeight: 'bold' }}>
                Fallstudie lesen →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="card" style={{ textAlign: 'center', padding: '24px', marginTop: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Haben Sie Fragen zu einer bestimmten Fallstudie?
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
          Gründer Kabeer Shah erläutert Ihnen gerne die Übertragbarkeit der Ergebnisse auf Ihr Geschäftsmodell.
        </p>
        <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Strategiegespräch buchen →
        </a>
      </div>
    </div>
  );
}
