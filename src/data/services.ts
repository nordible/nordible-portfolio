export interface ServiceItem {
  slug: string;
  nameDe: string;
  nameEn: string;
  heroTaglineDe: string;
  heroTaglineEn: string;
  descriptionDe: string;
  descriptionEn: string;
  badgeDe: string;
  badgeEn: string;
  iconName: 'Layers' | 'Cpu' | 'TrendingUp' | 'Video' | 'MailCheck';
  deliverablesDe: string[];
  deliverablesEn: string[];
  featuresDe: string[];
  featuresEn: string[];
  faqsDe: Array<{ q: string; a: string }>;
  faqsEn: Array<{ q: string; a: string }>;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'web-app-entwicklung',
    nameDe: 'Web- & App-Entwicklung',
    nameEn: 'Web & App Development',
    heroTaglineDe: 'Maßgeschneiderte Webportale, SaaS-Architekturen und mobile Apps (iOS & Android) mit 100 % Code-Eigentum.',
    heroTaglineEn: 'Custom web portals, SaaS architectures, and mobile apps (iOS & Android) with 100% IP ownership.',
    descriptionDe: 'Wir konzipieren und entwickeln maßgeschneiderte Webplattformen, Cloud-Architekturen und mobile Applikationen für Unternehmen. Schnell zur Marktreife durch agile 2–4 Wochen MVP-Zyklen.',
    descriptionEn: 'We design and engineer bespoke web platforms, scalable cloud systems, and native mobile applications with rapid 2–4 week MVP turnaround.',
    badgeDe: '2–4 Woc. MVP',
    badgeEn: '2–4 Wks MVP',
    iconName: 'Layers',
    deliverablesDe: [
      'Produktionsreife Webanwendungen & Plattformen (Next.js, TypeScript, React)',
      'Native & plattformübergreifende mobile Apps für iOS & Android',
      'DSGVO-konforme Cloud-Infrastruktur & modulare APIs',
      '100 % Quellcode-Eigentum ohne Vendor-Lock-in',
    ],
    deliverablesEn: [
      'Production-ready web apps & portals (Next.js, TypeScript, React)',
      'Cross-platform mobile applications for iOS & Android',
      'GDPR-compliant cloud architecture & modular APIs',
      '100% IP & source code ownership with zero vendor lock-in',
    ],
    featuresDe: [
      'Modernster Next.js & TypeScript Tech-Stack',
      'Ergonomische UI/UX nach Fitts’s Law & Nielsen-Heuristiken',
      'Nahtlose Anbindung an bestehende ERP-, CRM- und Datenbanksysteme',
      'Direkter Austausch mit Gründer Kabeer Shah ohne Vermittler',
    ],
    featuresEn: [
      'Modern Next.js & TypeScript enterprise tech stack',
      'Science-backed UI/UX designed for peak conversion',
      'Seamless API integrations with existing enterprise systems',
      'Direct collaboration with founder Kabeer Shah',
    ],
    faqsDe: [
      {
        q: 'Wem gehört der entwickelte Quellcode nach Projektabschluss?',
        a: 'Ihnen zu 100 %. Sie erhalten vollständigen Zugriff auf alle Repositories, Datenbankschemata und Bereitstellungen ohne wiederkehrende Lizenzgebühren.',
      },
      {
        q: 'Wie lange dauert die Entwicklung eines funktionalen MVP?',
        a: 'Typischerweise liefern wir einsatzbereite, testbare MVPs innerhalb von 2 bis 4 Wochen ab Projektstart.',
      },
      {
        q: 'Sind persönliche Vor-Ort-Termine möglich?',
        a: 'Ja! Unser Hauptsitz befindet sich in Frankfurt am Main. Wir vereinbaren unkompliziert persönliche Termine im gesamten Rhein-Main-Gebiet.',
      },
    ],
    faqsEn: [
      {
        q: 'Who owns the developed intellectual property and source code?',
        a: 'You own 100% of the code and assets. We transfer all repositories, schemas, and configurations without lock-in.',
      },
      {
        q: 'How fast can a functional MVP be delivered?',
        a: 'We typically deliver working, production-ready MVPs within 2 to 4 weeks after scope alignment.',
      },
      {
        q: 'Are in-person meetings possible?',
        a: 'Yes! We are based in Frankfurt am Main and happily meet in person across the Rhine-Main metropolitan area.',
      },
    ],
  },
  {
    slug: 'ki-agenten-automation',
    nameDe: 'KI-Agenten & Workflow-Automation',
    nameEn: 'AI Agents & Workflow Automation',
    heroTaglineDe: 'Autonome KI-Agenten, Multi-Agenten-Systeme und intelligente Prozessautomatisierung für maximale operative Effizienz.',
    heroTaglineEn: 'Autonomous AI agents, multi-agent workflows, and intelligent business process automation.',
    descriptionDe: 'Automatisieren Sie zeitraubende manuelle Aufgaben in Kundenbetreuung, Datenaufbereitung und Lead-Qualifizierung mit autonomen KI-Agenten und maßgeschneiderten LLM-Pipelines.',
    descriptionEn: 'Automate manual bottlenecks in customer success, document parsing, and lead qualification with autonomous AI agents and enterprise LLM pipelines.',
    badgeDe: 'Max. Effizienz',
    badgeEn: 'Max Efficiency',
    iconName: 'Cpu',
    deliverablesDe: [
      'Autonome 24/7 KI-Agenten für Kundensupport & Lead-Qualifizierung',
      'Intelligente Dokumenten- und Datenextraktion aus Rechnungen & Verträgen',
      'Multi-Agenten-Orchestrierung mit Human-in-the-Loop-Leitplanken',
      'DSGVO-konforme LLM-Pipelines ohne Training an Ihren Daten',
    ],
    deliverablesEn: [
      'Autonomous 24/7 AI agents for onboarding & lead qualification',
      'Intelligent document and table extraction from PDFs & invoices',
      'Multi-agent orchestration with human-in-the-loop safeguards',
      'GDPR-compliant LLM pipelines with zero data training leakage',
    ],
    featuresDe: [
      'Tool-Use & Function Calling für direkte API-Interaktionen',
      'RAG-Systeme (Retrieval-Augmented Generation) mit Unternehmenswissen',
      'Zeitersparnis von bis zu 80 % bei repetitiven Büroprozessen',
      'Transparente Audit-Logs und verlässliche Fehlerbehandlung',
    ],
    featuresEn: [
      'Tool-use & function calling for live software system actions',
      'RAG enterprise knowledge retrieval with private vector databases',
      'Up to 80% time saved on repetitive manual workflows',
      'Full audit trails and fail-safe error handling mechanisms',
    ],
    faqsDe: [
      {
        q: 'Wie sicher sind unsere internen Unternehmensdaten bei KI-Workflows?',
        a: 'Datensicherheit und DSGVO stehen an erster Stelle. Wir nutzen Enterprise-Pipelines ohne Modell-Training an Ihren Daten und sichere europäische Cloud-Infrastrukturen.',
      },
      {
        q: 'Können KI-Agenten an bestehende ERP- und CRM-Systeme angebunden werden?',
        a: 'Ja, wir integrieren Agenten nahtlos über REST-APIs und Webhooks in Systeme wie HubSpot, Salesforce, Slack, Notion oder SQL-Datenbanken.',
      },
      {
        q: 'Benötigt unser internes Team spezielle KI-Vorkenntnisse?',
        a: 'Nein. Wir bauen schlüsselfertige, intuitive Schnittstellen und führen eine verständliche Einführung mit Ihrem Team durch.',
      },
    ],
    faqsEn: [
      {
        q: 'How secure is our proprietary corporate data?',
        a: 'Data privacy and GDPR are paramount. We use enterprise zero-retention APIs and private cloud setups where your data is never used for model training.',
      },
      {
        q: 'Can AI agents integrate with our current CRM and ERP?',
        a: 'Yes, we integrate agents directly via standard APIs with HubSpot, Salesforce, Slack, Notion, and relational databases.',
      },
      {
        q: 'Does our team need technical AI expertise?',
        a: 'No. We provide turn-key interfaces and conduct thorough onboarding with your team.',
      },
    ],
  },
  {
    slug: 'digital-marketing-seo',
    nameDe: 'Digital Marketing & SEO / GEO',
    nameEn: 'Digital Marketing & SEO / GEO',
    heroTaglineDe: 'Messbare Neukundengewinnung durch Top-Google-Rankings und direkte Empfehlungen in KI-Suchmaschinen (ChatGPT, Perplexity, Gemini).',
    heroTaglineEn: 'Measurable customer acquisition via top Google rankings and direct recommendations in AI search engines (ChatGPT, Perplexity, Gemini).',
    descriptionDe: 'Verbinden Sie klassisches lokales SEO mit moderner Generative Engine Optimization (GEO). Wir positionieren Ihr Unternehmen dort, wo Entscheider heute und morgen suchen.',
    descriptionEn: 'Combine local search authority with modern Generative Engine Optimization (GEO) to get your business cited and recommended by AI engines and Google.',
    badgeDe: 'Messbare Leads',
    badgeEn: 'Measurable Leads',
    iconName: 'TrendingUp',
    deliverablesDe: [
      'Generative Engine Optimization (GEO) für direkte Nennung in KI-Assistenten',
      'Lokale SEO-Optimierung (Google 3-Pack, Schema.org Entitäten-Graphen)',
      'High-Intent B2B Content-Marketing & Landingpage-Funnel',
      'Ergonomische Conversion-Rate-Optimierung für Mobilgeräte',
    ],
    deliverablesEn: [
      'Generative Engine Optimization (GEO) for AI search visibility',
      'Local SEO dominance (Google 3-Pack, Schema.org entity graphs)',
      'High-intent B2B content marketing and conversion funnels',
      'Mobile thumb-zone UX optimization for higher inbound calls',
    ],
    featuresDe: [
      'Entitäten-basierte Markenautorität statt veraltetem Keyword-Stuffing',
      'Verifizierung und Stärkung lokaler Branchenverzeichnisse (NAP-Konsistenz)',
      'Fokus auf qualifizierte B2B-Anfragen statt wertloser Vanity-Klicks',
      'Klare monatliche Performance-Transparenz',
    ],
    featuresEn: [
      'Entity-based brand authority instead of keyword stuffing',
      'NAP consistency across high-trust German industry directories',
      'Laser focus on qualified B2B inquiries rather than vanity clicks',
      'Transparent performance reporting and actionable analytics',
    ],
    faqsDe: [
      {
        q: 'Was unterscheidet GEO (Generative Engine Optimization) von klassischem SEO?',
        a: 'Klassisches SEO zielt auf Klicks in Linklisten ab. GEO optimiert Ihre Marke so, dass KI-Modelle wie ChatGPT, Gemini und Perplexity Ihr Unternehmen als beste Empfehlung in Frankfurt und der Region nennen.',
      },
      {
        q: 'Wie schnell stellen sich erste Ergebnisse ein?',
        a: 'Ergonomische Conversion-Optimierungen wirken sofort bei bestehenden Besuchern. Ranking- und GEO-Zitierungen etablieren sich typischerweise innerhalb von 4 bis 12 Wochen.',
      },
      {
        q: 'Erhalten wir transparente Reportings?',
        a: 'Ja. Wir berichten über echte Geschäftskontakte, qualifizierte Leads und messbare Sichtbarkeitsgewinne statt reiner Traffic-Zahlen.',
      },
    ],
    faqsEn: [
      {
        q: 'How does GEO differ from traditional SEO?',
        a: 'Traditional SEO targets blue links. GEO structures your entity so AI engines like ChatGPT and Perplexity actively cite and recommend your firm.',
      },
      {
        q: 'How soon can we expect measurable traction?',
        a: 'Conversion optimizations take effect immediately on existing traffic. Organic ranking and AI citation footprint typically compound over 4 to 12 weeks.',
      },
      {
        q: 'Do you provide transparent reports?',
        a: 'Yes, we track qualified inbound inquiries and real visibility milestones rather than superficial impressions.',
      },
    ],
  },
  {
    slug: 'videobearbeitung-content',
    nameDe: 'Videobearbeitung & Social Content',
    nameEn: 'Video Editing & Social Content',
    heroTaglineDe: 'High-Retention Kurzvideos, LinkedIn-Content und Video-Assets für messbare Markenbekanntheit und Lead-Generierung.',
    heroTaglineEn: 'High-retention short-form video, LinkedIn content, and brand assets for scalable awareness and qualified leads.',
    descriptionDe: 'Wir verwandeln Rohmaterial in fesselnde Social-Media-Reels, YouTube-Shorts und LinkedIn-Videoposts, die Vertrauen aufbauen und qualifizierte B2B-Anfragen generieren.',
    descriptionEn: 'We transform raw footage into captivating social video reels, shorts, and corporate video assets that convert viewers into high-intent inbound inquiries.',
    badgeDe: 'High Engagement',
    badgeEn: 'High Engagement',
    iconName: 'Video',
    deliverablesDe: [
      'Reels, YouTube Shorts & TikTok Formate im B2B- & Consumer-Bereich',
      'Professionelle Untertitel, Motion Graphics & Sound Design',
      'Dynamischer Schnitt mit Fokus auf maximale Verweildauer (Hook & Retention)',
      'Wöchentliche Content-Pakete für planbare Social-Media-Präsenz',
    ],
    deliverablesEn: [
      'Reels, YouTube Shorts & LinkedIn video production',
      'Subtitles, motion graphics, and sound design tuned for retention',
      'Dynamic editing focused on hook rate and viewer retention',
      'Weekly content packages for continuous multi-channel presence',
    ],
    featuresDe: [
      'Schnelle 48h-Turnaround-Zeiten für zeitkritische Kampagnen',
      'Einfacher Freigabeprozess über visuelle Feedback-Links',
      'Markengerechtes Color Grading und Sound Mastering',
      '100 % uneingeschränkte Nutzungsrechte auf allen Kanälen',
    ],
    featuresEn: [
      'Fast 48h turnaround for agile marketing campaigns',
      'Frictionless visual timecode review and approval process',
      'On-brand color grading and broadcast-grade audio mastering',
      '100% royalty-free commercial usage rights across all platforms',
    ],
    faqsDe: [
      {
        q: 'Müssen wir das Rohmaterial selbst filmen?',
        a: 'Ja, unkompliziertes Smartphone-Material nach unserem kurzen Leitfaden genügt vollkommen – wir verwandeln es in professionelle High-End-Reels.',
      },
      {
        q: 'Wie läuft die Korrekturschleife ab?',
        a: 'Über einen interaktiven Review-Link können Sie direkt im Video Timecode-genaue Kommentare hinterlassen, die wir schnell umsetzen.',
      },
      {
        q: 'Welche Formate werden geliefert?',
        a: 'Alle gängigen Vertikalformate (9:16 für Reels/Shorts) sowie Querformate (16:9 für Web & YouTube), fertig exportiert und upload-bereit.',
      },
    ],
    faqsEn: [
      {
        q: 'Do we need high-end camera equipment?',
        a: 'No. Modern smartphone footage following our simple briefing template is completely sufficient—we handle professional post-production.',
      },
      {
        q: 'How does revision review work?',
        a: 'You receive an interactive preview link where you can place timecode comments directly on the video timeline.',
      },
      {
        q: 'Which formats are delivered?',
        a: 'All standard aspect ratios (9:16 vertical for Shorts/Reels, 16:9 horizontal for web/YouTube), ready for instant publishing.',
      },
    ],
  },
  {
    slug: 'business-it-email',
    nameDe: 'Business IT & E-Mail-Infrastruktur',
    nameEn: 'Business IT & Corporate Email',
    heroTaglineDe: 'Sichere geschäftliche E-Mail-Systeme, Domain-Infrastruktur und IT-Tools für ausfallsichere Unternehmenskommunikation.',
    heroTaglineEn: 'Secure corporate email infrastructure, domain management, and cloud tools for zero-downtime operations.',
    descriptionDe: 'Wir richten Ihre professionelle Unternehmens-E-Mail mit eigener Domain ein, konfigurieren modernen Spamschutz (SPF, DKIM, DMARC) und sorgen für nahtlose Tool-Anbindungen.',
    descriptionEn: 'We establish secure corporate email systems on your custom domain, configure anti-spoofing protocols (SPF, DKIM, DMARC), and streamline your cloud workplace.',
    badgeDe: '24/7 Verlässlich',
    badgeEn: '24/7 Reliability',
    iconName: 'MailCheck',
    deliverablesDe: [
      'Eigene Firmen-Domain mit professionellen Adressen (ihrname@ihrunternehmen.de)',
      'SPF-, DKIM- & DMARC-Sicherheitskonfiguration gegen Phishing & Spam',
      'Zero-Downtime E-Mail-Migration (Google Workspace, Microsoft 365)',
      'DSGVO-konforme Datenspeicherung und Backup-Strategien',
    ],
    deliverablesEn: [
      'Custom company domain with branded email accounts',
      'SPF, DKIM, and DMARC defense setup against phishing and spoofing',
      'Zero-downtime email migration (Google Workspace, Microsoft 365)',
      'GDPR-compliant cloud data storage and backup routines',
    ],
    featuresDe: [
      '100 % Zustellbarkeitsgarantie im Posteingang statt im Spam-Ordner',
      'Zentrales Nutzer-, Passwort- und Rechtemanagement für Ihr Team',
      'Deutsche Cloud- und Rechenzentrumsanbindung',
      'Persönlicher Notfall-Support ohne Callcenter-Warteschleifen',
    ],
    featuresEn: [
      'Maximum inbox deliverability avoiding spam filters',
      'Centralized identity, access, and permissions management',
      'European cloud hosting compliance',
      'Direct priority support without call-center delays',
    ],
    faqsDe: [
      {
        q: 'Gehen bei einer E-Mail-Migration bestehende Nachrichten verloren?',
        a: 'Nein. Wir führen migrationsgetestete Übertragungen ohne Datenverlust und ohne Unterbrechung Ihres laufenden Geschäftsbetriebs durch.',
      },
      {
        q: 'Warum ist die SPF-, DKIM- und DMARC-Einrichtung unverzichtbar?',
        a: 'Große E-Mail-Provider wie Google und Microsoft weisen geschäftliche E-Mails ohne diese Sicherheitsnachweise zunehmend ab oder stufen sie als Spam ein.',
      },
      {
        q: 'Beraten Sie uns objektiv bei der Wahl zwischen Google Workspace und Microsoft 365?',
        a: 'Ja. Wir evaluieren Ihre bestehende Softwarelandschaft und empfehlen die wirtschaftlich und funktional beste Lösung für Ihr Team.',
      },
    ],
    faqsEn: [
      {
        q: 'Will any existing emails be lost during migration?',
        a: 'No. We perform verified zero-downtime migrations that preserve your entire mailbox history without interruption.',
      },
      {
        q: 'Why are SPF, DKIM, and DMARC records essential?',
        a: 'Major providers (Google, Microsoft) now strictly reject or flag corporate domains that lack authenticated DNS security records.',
      },
      {
        q: 'Can you advise us on Google Workspace vs. Microsoft 365?',
        a: 'Yes. We objectively review your workflows and implement the most cost-effective and scalable setup for your team.',
      },
    ],
  },
];

export function getAllServices(): ServiceItem[] {
  return SERVICES;
}

export function getService(slug: string): ServiceItem | undefined {
  return SERVICES.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
