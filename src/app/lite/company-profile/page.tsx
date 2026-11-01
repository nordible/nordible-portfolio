import Link from 'next/link';
import { contactConfig } from '@/config/contact';

export const metadata = {
  title: 'Über uns & Gründer (Lite-Version) | Nordible Technologies',
  description: 'Unternehmensprofil von Nordible Technologies und Werdegang von Gründer & Systems Architect Kabeer Shah.',
};

export default function LiteCompanyProfilePage() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">Unternehmensprofil & Führung</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
          Nordible Technologies & Gründer Kabeer Shah
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Erprobte Software-Architektur, KI-Agenten und Wachstumsstrategien für zukunftssichere Unternehmen.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Das Modell: Services as Software
        </h2>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text)', marginBottom: '12px' }}>
          Nordible Technologies bricht mit dem ineffizienten traditionellen Agenturmodell. Statt teure Vertriebsmitarbeiter, untechnische Account Manager und unerfahrene Entwickler zwischenzuschalten, arbeiten Sie direkt mit praxiserprobter Senior-Architektur zusammen. Wir kombinieren autonome KI-Agenten-Pipelines mit kompromissloser technischer Exzellenz – für 10x schnellere Bereitstellung bei 100 % Code-Eigentum ab Tag 1.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Über Gründer Kabeer Shah
        </h2>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text)', marginBottom: '12px' }}>
          Kabeer Shah ist erfahrener Tech Leader und Solutions Architect mit über einem Jahrzehnt Erfahrung im Aufbau und der Skalierung unternehmenskritischer Systeme im Gesundheits- und Finanzwesen.
        </p>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: 'var(--muted)' }}>
          <li><strong>GE Healthcare:</strong> Leitender Architekt der CareIntellect-Assistenzplattform für klinische Onkologie-Entscheidungen.</li>
          <li><strong>Baxter Healthcare / Vantive:</strong> Entwicklung der AWS IoT-Telemetrie und Ferndiagnose-Architektur für lebenserhaltende Medizingeräte.</li>
          <li><strong>NIUM (Instarem):</strong> Interim Head of Engineering für eine globale Fintech-Plattform mit $100M+ monatlichem Transaktionsvolumen und PCI-DSS-Zertifizierung.</li>
          <li><strong>Top 1% Stack Overflow:</strong> ~32.000 Reputation, Millionen von Entwicklern weltweit bei komplexen Systemfragen unterstützt.</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Unsere 3 Kernversprechen
        </h2>
        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
          <li><strong>100 % Code- & IP-Eigentum:</strong> Keine monatlichen Knebelverträge, kein Vendor-Lock-in. Alle Quellcodes und Schlüssel gehören Ihnen.</li>
          <li><strong>10x Umsetzungsgeschwindigkeit:</strong> Direkter Draht zum Architekten ohne zeitraubende Agentur-Hierarchien.</li>
          <li><strong>Wissenschaftlich fundierte UX:</strong> Optimiert nach Ergonomie (Thumb Zone), Subsekunden-Ladezeiten und hoher Conversion.</li>
        </ul>
      </div>

      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Möchten Sie Ihr nächstes Projekt besprechen?
        </h3>
        <p style={{ fontSize: '13px', marginBottom: '16px' }}>
          Vereinbaren Sie ein unverbindliches Kennenlernen mit Kabeer Shah.
        </p>
        <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Erstgespräch buchen →
        </a>
      </div>
    </div>
  );
}
