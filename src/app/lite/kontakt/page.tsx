import { contactConfig } from '@/config/contact';

export const metadata = {
  title: 'Kontakt (Lite-Version) | Nordible Technologies',
  description: 'Direkter Kontakt zu Gründer & Solutions Architect Kabeer Shah: Telefon, WhatsApp, E-Mail und Kalendertermin.',
};

export default function LiteContactPage() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">Direkter Draht</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
          Kontakt zu Nordible Technologies
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Keine Zwischenhändler, keine Callcenter. Sprechen Sie direkt mit Gründer und Solutions Architect Kabeer Shah.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px' }}>
          Sofortige Kontaktwege
        </h2>
        <div style={{ fontSize: '14px', lineHeight: '2' }}>
          <div>
            <strong>📅 Online-Termin:</strong>{' '}
            <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Freien Termin im Google-Kalender auswählen →
            </a>
          </div>
          <div>
            <strong>📞 Telefon:</strong>{' '}
            <a href={contactConfig.phone.telHref}>{contactConfig.phone.display}</a>
          </div>
          <div>
            <strong>💬 WhatsApp:</strong>{' '}
            <a href={contactConfig.whatsapp.chatUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp-Nachricht senden →
            </a>
          </div>
          <div>
            <strong>✉️ E-Mail (Gründer direkt):</strong>{' '}
            <a href={contactConfig.email.mailToFounder}>{contactConfig.email.founder}</a>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px' }}>
          Unternehmenssitz & Impressum
        </h2>
        <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--muted)' }}>
          <strong>Nordible Technologies</strong><br />
          Breitlacherstraße 101<br />
          60489 Frankfurt am Main<br />
          Deutschland<br />
          Inhaber: Kabeer Shah<br />
          <a href={contactConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">
            Standort in Google Maps anzeigen ↗
          </a>
        </p>
      </div>

      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Bereit für das nächste Level?
        </h3>
        <p style={{ fontSize: '13px', marginBottom: '16px' }}>
          Buchen Sie ein kostenloses, 15-minütiges Strategiegespräch für Ihr Vorhaben.
        </p>
        <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Strategiegespräch reservieren →
        </a>
      </div>
    </div>
  );
}
