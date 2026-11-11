import { contactConfig } from '@/config/contact';

export const metadata = {
  title: 'Leistungen & Services (Lite-Version) | Nordible Technologies',
  description: 'Unsere 6 Kernkompetenzen: KI-Agenten, Individualsoftware, Digitales Marketing & GEO, Videoproduktion, Prozessautomatisierung und Business-E-Mail.',
};

export default function LiteServicesPage() {
  const services = [
    {
      title: '1. Autonome KI-Agenten & Prozessintegration',
      desc: 'Praxisorientierte autonome KI-Workflows für Kundenservice, automatisierte Rechnungsprüfung, CRM-Synchronisierung und operative Entlastung ohne laufende Agentur-Kosten.',
      highlights: ['Kundenservice-Automatisierung mit 90 % Erstlösungsquote', 'Nahtlose Integration in ERP, CRM und SQL-Datenbanken', '100 % DSGVO-konforme Datensouveränität'],
    },
    {
      title: '2. Individuelle Softwareentwicklung & Cloud-Systeme',
      desc: 'Maßgeschneiderte Webanwendungen, Kundenportale und plattformübergreifende Mobile-Apps (iOS, Android, React Native) mit 100 % Quellcode-Eigentum ab Tag 1.',
      highlights: ['Keine Abhängigkeit von teuren Standard-SaaS-Plattformen', 'Subsekunden-Ladezeiten und moderne Cloud-Architektur auf AWS', 'Höchste Sicherheits- und Revisionsstandards'],
    },
    {
      title: '3. Digitales Marketing & Generative Engine Optimization (GEO)',
      desc: 'Positionierung Ihrer Marke als verifizierte Erstempfehlung in KI-Suchmaschinen (ChatGPT, Perplexity, Gemini) und dominierende Google Page 1 Auffindbarkeit.',
      highlights: ['Strukturierung von Schema.org-Entitätsgraphen für Sprachmodelle', 'Planbare B2B-Neukundengewinnung ohne bezahlte Werbung', 'Messbare Zuwächse bei Klicks und qualifizierten Anfragen'],
    },
    {
      title: '4. Videobearbeitung & High-Impact Content-Produktion',
      desc: 'Professioneller Schnitt für Social Media Reels, B2B-Erklärvideos, dynamische Untertitel und visuelle Markenauftritte mit maximaler Durchsichtsrate.',
      highlights: ['Aufmerksamkeitsstarke Schnitte für LinkedIn, Instagram & YouTube', 'Präzise Botschaften für kaufkräftige Zielgruppen', 'Schnelle Bereitstellung für kontinuierliche Markenpräsenz'],
    },
    {
      title: '5. Geschäftsprozess-Automatisierung & Robotic Process Automation (RPA)',
      desc: 'Beseitigung repetitiver manueller Arbeitsschritte im Back-Office durch automatisierte Datenübertragung, Schnittstellen und Echtzeit-Dashboards.',
      highlights: ['Bis zu 40+ Stunden Zeitersparnis pro Woche für Ihr Kernteam', '90 % Fehlerreduktion bei Buchhaltungs- und Verwaltungsdaten', 'Vollständige Prozesstransparenz für die Geschäftsführung'],
    },
    {
      title: '6. Sichere geschäftliche E-Mail-Infrastruktur',
      desc: 'Eigene private E-Mail-Server (`ihrname@ihrunternehmen.de`) mit automatischem TLS/SSL-Schutz, Spam-Abwehr und vollständiger Datenhoheit.',
      highlights: ['Bis zu 70 % Kostenersparnis gegenüber monatlichen Pro-Kopf-Abonnements', 'Verlässliche Zustellbarkeit in den Posteingang dank SPF, DKIM & DMARC', 'Garantierte 99,9 % Verfügbarkeit ohne Ausfälle'],
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">Leistungsspektrum</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
          Services as Software: 6 Kernkompetenzen für messbares Wachstum
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Wir verbinden hochrangige Software-Architektur mit agiler Umsetzung – schnell, transparent und direkt auf Augenhöhe.
        </p>
      </div>

      <div>
        {services.map((svc, idx) => (
          <div key={idx} className="card" style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
              {svc.title}
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text)', marginBottom: '12px' }}>
              {svc.desc}
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.7', color: 'var(--muted)' }}>
              {svc.highlights.map((hl, hIdx) => (
                <li key={hIdx}>{hl}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--badge-bg)', border: '1px solid var(--primary)', padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
          Welche Leistung passt zu Ihrer aktuellen geschäftlichen Herausforderung?
        </h3>
        <p style={{ fontSize: '13px', marginBottom: '16px' }}>
          Im unverbindlichen 15-minütigen Strategiegespräch ermitteln wir gemeinsam Ihren größten Hebel.
        </p>
        <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Strategiegespräch buchen →
        </a>
      </div>
    </div>
  );
}
