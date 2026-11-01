import type { Metadata } from 'next';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

export const metadata: Metadata = {
  title: 'Nordible Technologies (Lite-Version) | Schnelle Sparversion für langsames Internet',
  description: 'Ultra-schnelle, datensparende Version der Nordible Technologies Website. Optimiert für 2G/3G-Mobilfunk und barrierefreie Sofort-Ladezeiten.',
};

export default function LiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lite-root">
      <style dangerouslySetInnerHTML={{ __html: `
        .lite-root {
          --bg: #ffffff;
          --text: #0f172a;
          --muted: #334155;
          --border: #cbd5e1;
          --primary: #1d4ed8;
          --primary-hover: #1e40af;
          --card-bg: #f8fafc;
          --badge-bg: #eff6ff;
          --badge-text: #1d4ed8;

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #ffffff !important;
          color: #0f172a !important;
          line-height: 1.6;
          min-height: 100vh;
          width: 100%;
          position: relative;
          z-index: 10;
          padding-bottom: 90px;
        }
        .lite-root * { box-sizing: border-box; }
        .lite-root a { color: var(--primary); text-decoration: underline; }
        .lite-root a:hover { color: var(--primary-hover); }
        .lite-root .container { max-width: 800px; margin: 0 auto; padding: 16px; }
        .lite-root .top-banner {
          background-color: #fef3c7;
          color: #92400e;
          padding: 8px 16px;
          font-size: 13px;
          text-align: center;
          border-bottom: 1px solid #fde68a;
        }
        .lite-root .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 2px solid var(--border);
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .lite-root .brand { font-size: 18px; font-weight: bold; text-decoration: none; color: var(--text); }
        .lite-root .nav-links { display: flex; gap: 12px; flex-wrap: wrap; font-size: 14px; }
        .lite-root .card {
          background-color: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .lite-root .badge {
          display: inline-block;
          background-color: var(--badge-bg);
          color: var(--badge-text);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .lite-root .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin: 16px 0;
        }
        .lite-root .metric-card {
          background-color: #ffffff;
          border: 1px solid var(--border);
          padding: 12px;
          border-radius: 6px;
        }
        .lite-root .metric-val { font-size: 22px; font-weight: 800; color: var(--primary); display: block; }
        .lite-root .metric-lbl { font-size: 12px; font-weight: 600; color: var(--muted); }
        .lite-root .btn {
          display: inline-block;
          background-color: var(--primary);
          color: #ffffff !important;
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          margin-top: 8px;
        }
        .lite-root .btn:hover { background-color: var(--primary-hover); }
        .lite-root .btn-secondary {
          background-color: var(--badge-bg);
          color: var(--badge-text) !important;
          border: 1px solid var(--border);
        }
        .lite-root .bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-top: 2px solid var(--border);
          padding: 8px 12px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
        }
        .lite-root .bottom-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          color: var(--text);
          padding: 6px 8px;
          min-height: 44px;
          min-width: 44px;
          justify-content: center;
        }
        .lite-root .bottom-link:hover, .lite-root .bottom-link:active {
          color: var(--primary);
        }
        .lite-root .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
          font-size: 12px;
          color: var(--muted);
        }
        @media (min-width: 768px) {
          .lite-root {
            padding-bottom: 24px;
          }
          .lite-root .bottom-bar {
            display: none;
          }
        }
      ` }} />

      {/* Top Sparmodus Notice Banner */}
      <div className="top-banner">
        ⚡ <strong>Sparmodus (Lite-Version)</strong>: Maximale Geschwindigkeit für langsame Internetverbindungen (2G/3G) & minimaler Datenverbrauch.
        {' '}<a href="/" style={{ color: 'inherit', fontWeight: 'bold' }}>Zur Standard-Vollversion wechseln →</a>
      </div>

      <div className="container">
        <header className="header">
          <Link href="/lite" className="brand">
            Nordible Technologies <span style={{ fontSize: '12px', fontWeight: 'normal', color: 'var(--muted)' }}>(Lite)</span>
          </Link>
          <nav className="nav-links">
            <Link href="/lite/projekte">Projekte ({16})</Link>
            <Link href="/lite/fallstudien">Fallstudien ({16})</Link>
            <Link href="/lite/services">Leistungen</Link>
            <Link href="/lite/company-profile">Über uns</Link>
            <Link href="/lite/kontakt">Kontakt</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p><strong>Nordible Technologies</strong> · Gründer & Solutions Architect Kabeer Shah</p>
          <p>Breitlacherstraße 101, 60489 Frankfurt am Main, Deutschland · Tel: {contactConfig.phone.display}</p>
          <p style={{ marginTop: '8px' }}>
            <Link href="/lite">Lite-Startseite</Link> · <Link href="/lite/projekte">Alle Projekte</Link> · <Link href="/lite/fallstudien">Alle Fallstudien</Link> · <a href="/">✨ Vollversion</a>
          </p>
        </footer>
      </div>

      {/* Ergonomic Mobile Thumb-Zone Navigation (Fixed Bottom - Mobile Only) */}
      <nav className="bottom-bar" aria-label="Schnellnavigation">
        <Link href="/lite" className="bottom-link">
          <span>🏠</span>
          <span>Start</span>
        </Link>
        <Link href="/lite/projekte" className="bottom-link">
          <span>💼</span>
          <span>Projekte</span>
        </Link>
        <Link href="/lite/fallstudien" className="bottom-link">
          <span>📈</span>
          <span>Erfolge</span>
        </Link>
        <Link href="/lite/kontakt" className="bottom-link">
          <span>📞</span>
          <span>Kontakt</span>
        </Link>
        <a href="/" className="bottom-link" style={{ color: 'var(--primary)' }}>
          <span>⚡</span>
          <span>Vollversion</span>
        </a>
      </nav>
    </div>
  );
}
