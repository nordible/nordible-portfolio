export interface ServiceOutcome {
  metric: string;
  label: string;
  desc: string;
}

export interface ServiceProofItem {
  titleDe: string;
  titleEn: string;
  client: string;
  impactDe: string;
  impactEn: string;
  caseStudySlug?: string;
  externalUrl?: string;
  externalLabelDe?: string;
  externalLabelEn?: string;
}

export interface ServiceItem {
  slug: string;
  nameDe: string;
  nameEn: string;
  heroTaglineDe: string;
  heroTaglineEn: string;
  descriptionDe: string;
  descriptionEn: string;
  overviewDe: string[];
  overviewEn: string[];
  badgeDe: string;
  badgeEn: string;
  iconName: 'Layers' | 'Cpu' | 'TrendingUp' | 'Video' | 'MailCheck' | 'Workflow';
  outcomesDe: ServiceOutcome[];
  outcomesEn: ServiceOutcome[];
  deliverablesDe: string[];
  deliverablesEn: string[];
  featuresDe: string[];
  featuresEn: string[];
  proofItems: ServiceProofItem[];
  externalProductUrl?: string;
  faqsDe: Array<{ q: string; a: string }>;
  faqsEn: Array<{ q: string; a: string }>;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'digital-marketing-seo',
    nameDe: 'Digital Marketing & SEO / GEO',
    nameEn: 'Digital Marketing & SEO / GEO',
    heroTaglineDe: 'Messbare Neukundengewinnung durch Top-Google-Rankings und direkte Empfehlungen in KI-Suchmaschinen (ChatGPT, Perplexity, Gemini).',
    heroTaglineEn: 'Measurable customer acquisition via top Google rankings and direct recommendations in AI search engines (ChatGPT, Perplexity, Gemini).',
    descriptionDe: 'Verbinden Sie klassisches lokales SEO mit moderner Generative Engine Optimization (GEO). Wir positionieren Ihr Unternehmen dort, wo Entscheider heute und morgen suchen.',
    descriptionEn: 'Combine local search authority with modern Generative Engine Optimization (GEO) to get your business cited and recommended by AI engines and Google.',
    overviewDe: [
      'Moderne B2B- und B2C-Kunden suchen längst nicht mehr nur über klassische Links. Entscheider fragen ChatGPT, Perplexity und Google Gemini direkt nach dem besten Anbieter in Frankfurt, im Rhein-Main-Gebiet oder branchenweit.',
      'Nordible Technologies verbindet saubere Informationsarchitektur, strukturierte Schema.org-Entitätsgraphen, lokales Google-Business-Profile-Wachstum und Social-Media-Management zu einem messbaren Akquise-System – mit belegten Ergebnissen von +490 % bis +1.244 % organischem Klickwachstum ohne laufende Werbekosten.',
    ],
    overviewEn: [
      'Modern B2B and local buyers no longer rely solely on traditional blue links. Decision makers ask ChatGPT, Perplexity, and Google Gemini directly which company to contact first.',
      'Nordible Technologies combines semantic SEO, Schema.org entity graphs, Google Business Profile growth, and social media management into a measurable inbound acquisition engine—proven by +490% to +1,244% organic growth without relying solely on paid ads.',
    ],
    badgeDe: 'Messbare Leads',
    badgeEn: 'Measurable Leads',
    iconName: 'TrendingUp',
    outcomesDe: [
      { metric: '+1.045 %', label: 'Organische Klicks', desc: 'Verifiziertes Wachstum in 28–90 Tagen via Google Search Console ohne Anzeigenbudget.' },
      { metric: '#1 ChatGPT', label: 'KI-Empfehlungen (GEO)', desc: 'Direkte Nennung als Erstempfehlung in ChatGPT, Perplexity & Google AI.' },
      { metric: '+74 %', label: 'Umsatz-Sprint', desc: 'Steigerung direkter Bestellungen und Anfragen durch Conversion-UX.' },
    ],
    outcomesEn: [
      { metric: '+1,045%', label: 'Organic Clicks', desc: 'Verified 28–90 day Google Search Console surges achieved with €0 paid ad spend.' },
      { metric: '#1 ChatGPT', label: 'AI Search Citations', desc: 'Positioned as the first recommended firm inside ChatGPT, Perplexity & Gemini.' },
      { metric: '+74%', label: 'Revenue Sprint', desc: 'Direct customer orders and mandates driven by conversion-focused UX.' },
    ],
    deliverablesDe: [
      'Generative Engine Optimization (GEO) für direkte Nennung in KI-Assistenten',
      'Lokale SEO-Optimierung (Google Seite 1, 3-Pack, Schema.org Entitäten-Graphen)',
      'Social-Media-Kanalmanagement (LinkedIn, Instagram, YouTube, X) & Kampagnen',
      'High-Intent B2B Content-Marketing & Conversion-Landingpages',
      'Physische NFC-Google-Bewertungskarten & Tischaufsteller für lokale Geschäfte',
    ],
    deliverablesEn: [
      'Generative Engine Optimization (GEO) for AI search citations',
      'Local SEO dominance (Google Page 1, 3-Pack, Schema.org entity graphs)',
      'Social media channel management (LinkedIn, Instagram, YouTube, X) & paid campaigns',
      'High-intent B2B content marketing and conversion funnels',
      'NFC Google Review Cards & Smart Displays for local customer trust',
    ],
    featuresDe: [
      'Entitäten-basierte Markenautorität statt veraltetem Keyword-Stuffing',
      'Verifizierung im kostenfreien Nordible B2B-Branchenverzeichnis (0 % Provision)',
      'Fokus auf qualifizierte B2B-Anfragen und Mandate statt wertloser Vanity-Klicks',
      'Transparente Google Search Console & GA4 Performance-Nachweise',
    ],
    featuresEn: [
      'Entity-based brand authority instead of outdated keyword stuffing',
      'Verified listing on the zero-commission Nordible B2B Business Directory',
      'Laser focus on qualified B2B inquiries and mandates rather than vanity clicks',
      'Transparent Google Search Console & GA4 performance verification',
    ],
    proofItems: [
      {
        titleDe: '90-Tage SEO & KI-Such-Sprint (3 Kundenprojekte)',
        titleEn: '90-Day Multi-Industry SEO & AI Search Sprint',
        client: 'B2B IT · Architektur · Design',
        impactDe: '+1.045 % bis +1.244 % Klickwachstum, Seite-1-Durchschnittsposition (9,4) und 1.110+ KI-Impressionen ohne Anzeigen.',
        impactEn: '+1,045% to +1,244% click surges, Page-1 average position (9.4), and 1,110+ Generative AI impressions at €0 ad spend.',
        caseStudySlug: 'real-seo-ai-search-growth-case-study',
      },
      {
        titleDe: 'Shams Consult Architektur (Frankfurt am Main)',
        titleEn: 'Shams Consult Architecture & Urban Planning',
        client: 'Shams Consult',
        impactDe: '+490 % Google-Impressionen, +317 % organische Klicks und 2 unterschriebene Großmandate in 30 Tagen.',
        impactEn: '+490% search impressions, +317% organic clicks, and 2 signed commercial mandates in 30 days.',
        caseStudySlug: 'architecture-firm-seo-case-study',
      },
      {
        titleDe: 'Bombay Studio (GEO & High-Ticket-Filterung)',
        titleEn: 'Bombay Studio Luxury Turnkey Architecture',
        client: 'Bombay Studio',
        impactDe: 'Platz 1 bei ChatGPT als Erstempfehlung („First one to contact“) mit Vorqualifizierung von 1,2 Cr.+ Budgets.',
        impactEn: 'Ranked #1 on ChatGPT as "First one to contact", pre-qualifying ₹1.2Cr+ turnkey project budgets.',
        caseStudySlug: 'bombay-studio-luxury-interior-architecture-geo-case-study',
      },
      {
        titleDe: 'BUNS 069 & Nordible NFC Bewertungskarten',
        titleEn: 'BUNS 069 Local Commerce & NFC Review Cards',
        client: 'BUNS 069 / Nordible NFC',
        impactDe: '+74 % Umsatzwachstum im Liefergeschäft mit 0 % Stornorate und lokalem Google-Maps-Wachstum.',
        impactEn: '+74% digital revenue sprint with 0% cancellations paired with local Google Maps authority.',
        caseStudySlug: 'restaurant-delivery-growth-case-study',
        externalUrl: 'https://nfc-cards.nordible.co/',
        externalLabelDe: 'NFC-Karten ansehen',
        externalLabelEn: 'Explore NFC Cards',
      },
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
        a: 'Ja. Wir berichten über echte Geschäftskontakte, qualifizierte Leads und messbare Search-Console-Zuwächse statt reiner Traffic-Zahlen.',
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
        a: 'Yes, we track qualified inbound inquiries and real Google Search Console visibility milestones rather than superficial impressions.',
      },
    ],
  },
  {
    slug: 'videobearbeitung-content',
    nameDe: 'Videobearbeitung & Content-Produktion',
    nameEn: 'Video Editing & Content Production',
    heroTaglineDe: 'High-Retention Kurzvideos, LinkedIn-Content und Video-Assets für messbare Markenbekanntheit und Lead-Generierung.',
    heroTaglineEn: 'High-retention short-form video, LinkedIn content, and brand assets for scalable awareness and qualified leads.',
    descriptionDe: 'Wir verwandeln Rohmaterial in fesselnde Social-Media-Reels, YouTube-Shorts und LinkedIn-Videoposts, die Vertrauen aufbauen und qualifizierte B2B-Anfragen generieren.',
    descriptionEn: 'We transform raw footage into captivating social video reels, shorts, and corporate video assets that convert viewers into high-intent inbound inquiries.',
    overviewDe: [
      'Auf LinkedIn, Instagram Reels, YouTube Shorts und TikTok entscheidet das visuelle Tempo der ersten 3 Sekunden darüber, ob Entscheider weiterschauen oder weiterscrollen.',
      'Nordible produziert und schneidet professionelle Kurzvideos, Produktdemos, Erklärvideos und regionale Marken-Clips – basierend auf unseren eigenen Social-Media- und YouTube-Produktionen (@nordible) sowie koordinierten B2B-Promotions wie bei Shams Consult und Creator-Ökosystemen wie Parents.VIP (35 Mio.+ Reichweite).',
    ],
    overviewEn: [
      'On LinkedIn, Instagram Reels, YouTube Shorts, and TikTok, the visual pacing of the first 3 seconds determines whether buyers watch or scroll past.',
      'Nordible edits and produces high-retention short-form videos, product walkthroughs, and regional B2B promotions—backed by our own active YouTube & social channels (@nordible), B2B campaign coordination for clients like Shams Consult, and creator-scale media workflows like Parents.VIP (35M+ reach).',
    ],
    badgeDe: 'High Engagement',
    badgeEn: 'High Engagement',
    iconName: 'Video',
    outcomesDe: [
      { metric: '48 Std.', label: 'Schnelle Lieferung', desc: 'Zügige Post-Production für agile Kampagnen und wöchentliche Reels.' },
      { metric: '9:16 + 16:9', label: 'Alle Plattformen', desc: 'Perfekt optimiert für LinkedIn, Reels, YouTube Shorts, TikTok & Web.' },
      { metric: '100 %', label: 'Nutzungsrechte', desc: 'Volle kommerzielle Rechte an allen Video-Assets ohne versteckte Lizenzen.' },
    ],
    outcomesEn: [
      { metric: '48h', label: 'Rapid Turnaround', desc: 'Fast post-production cycles for agile campaigns and weekly social schedules.' },
      { metric: '9:16 + 16:9', label: 'Multi-Platform Ready', desc: 'Delivered formatted for LinkedIn, Instagram Reels, YouTube Shorts, and web.' },
      { metric: '100%', label: 'Commercial Rights', desc: 'Full unrestricted usage rights across every exported asset.' },
    ],
    deliverablesDe: [
      'Reels, YouTube Shorts, TikToks & LinkedIn-Videoformate im B2B- & Consumer-Bereich',
      'Dynamische Untertitel, Captions, Motion Graphics & Sound Design',
      'Schnitt mit Fokus auf Hook-Rate und maximale Zuschauerbindung (Retention)',
      'Produkt-Walkthroughs, Kundenstimmen & Pitch-Präsentationen',
      'Wöchentliche Content-Pakete für planbare Social-Media-Präsenz',
    ],
    deliverablesEn: [
      'Reels, YouTube Shorts, TikToks & LinkedIn video production',
      'Dynamic captions, motion graphics, and broadcast-grade sound design',
      'Retention-focused pacing engineered for hook rate and watch time',
      'Product walkthroughs, client testimonials & executive pitch videos',
      'Weekly content packages for continuous multi-channel authority',
    ],
    featuresDe: [
      'Unkomplizierte Zulieferung – modernes Smartphone-Material genügt',
      'Timecode-genaue Feedback- und Freigabeschleifen',
      'Markengerechtes Color Grading und klares Audio-Mastering',
      'Nahtlose Verknüpfung mit Social-Media-Posting und Lead-Funnels',
    ],
    featuresEn: [
      'Zero heavy studio required—smartphone footage following our quick guide works',
      'Frictionless timecode review and revision cycles',
      'On-brand color grading, typography, and clear audio mastering',
      'Seamlessly paired with channel management and lead-generation funnels',
    ],
    proofItems: [
      {
        titleDe: 'Nordible YouTube & Short-Form Content Hub (@nordible)',
        titleEn: 'Nordible YouTube & Short-Form Video Channels (@nordible)',
        client: 'Nordible Technologies',
        impactDe: 'Laufende Produktion von Tech-, KI- und B2B-Wachstumsvideos, Shorts und Produktdemos für Unternehmer.',
        impactEn: 'Ongoing production of tech, AI workflow, and business growth videos, Shorts, and product demos.',
        externalUrl: 'https://www.youtube.com/@nordible',
        externalLabelDe: 'YouTube-Kanal ansehen',
        externalLabelEn: 'Watch on YouTube',
      },
      {
        titleDe: 'Shams Consult – Regionale Promotion & Videoschnitt',
        titleEn: 'Shams Consult – Regional Video Promotion & Growth',
        client: 'Shams Consult (Frankfurt)',
        impactDe: 'Koordinierte regionale Promotions und Videoschnitte kombiniert mit Google-Seite-1-Sichtbarkeit.',
        impactEn: 'Coordinated regional promotional video editing paired with Google Page-1 search authority.',
        caseStudySlug: 'architecture-firm-seo-case-study',
      },
      {
        titleDe: 'Parents.VIP – Creator- & Video-Kampagnen-Plattform',
        titleEn: 'Parents.VIP – High-Scale Creator Media Platform',
        client: 'The Parent Inc. / TickleMedia',
        impactDe: 'Automatisierung von über 5.000 Brand-Kampagnen mit 130.000+ Creators und 35 Mio.+ Reichweite.',
        impactEn: 'Scaled 5,000+ creator campaigns across 130,000+ ambassadors reaching 35M+ monthly consumers.',
        caseStudySlug: 'parents-vip-influencer-creator-marketing-platform-case-study',
      },
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
    slug: 'ki-agenten-automation',
    nameDe: 'Implementierung von KI-Agenten',
    nameEn: 'AI Agent Implementation',
    heroTaglineDe: 'Autonome KI-Agenten, Multi-Agenten-Systeme und MCP-Integrationen für bis zu 80 % weniger Routineaufwand.',
    heroTaglineEn: 'Autonomous AI agents, multi-agent pipelines, and MCP integrations delivering up to 80% less manual busywork.',
    descriptionDe: 'Automatisieren Sie zeitraubende manuelle Aufgaben in Kundenbetreuung, Dokumentenprüfung und Lead-Qualifizierung mit autonomen KI-Agenten und DSGVO-konformen LLM-Pipelines.',
    descriptionEn: 'Automate manual bottlenecks in customer success, document parsing, and lead qualification with autonomous AI agents and GDPR-compliant LLM pipelines.',
    overviewDe: [
      'KI bringt erst dann wirtschaftlichen Nutzen, wenn sie direkt mit Ihren echten Geschäftssystemen verbunden ist – statt nur isolierte Chat-Fenster bereitzustellen.',
      'Nordible entwickelt produktive KI-Agenten mit Tool-Calling, RAG-Wissensdatenbanken und offiziellen Model Context Protocol (MCP) Schnittstellen – erprobt in Enterprise-Bot-Plattformen für über 500 Unternehmen (IntelliTek.ai / SmartBotHub, -60 % Supportkosten) sowie unserem Open-Source-Paket @nordible/invoice-mcp.',
    ],
    overviewEn: [
      'AI only creates commercial ROI when connected directly to your live operational tools—not as an isolated chat box.',
      'Nordible engineers production AI agents with tool-use, private RAG knowledge retrieval, and Model Context Protocol (MCP) servers—proven across 500+ enterprise bot deployments (IntelliTek.ai / SmartBotHub, -60% support OpEx) and our open-source @nordible/invoice-mcp package.',
    ],
    badgeDe: 'Max. Effizienz',
    badgeEn: 'Max Efficiency',
    iconName: 'Cpu',
    outcomesDe: [
      { metric: '-60 % OpEx', label: 'Geringere Supportkosten', desc: '90 % Erstlösungsquote im Kundenservice über 500+ Enterprise-Deployments.' },
      { metric: 'Bis 80 %', label: 'Zeitersparnis', desc: 'Automatisierte Dokumenten-, Rechnungs- und Lead-Qualifizierung.' },
      { metric: '100 % DSGVO', label: 'Zero Data Leakage', desc: 'Sichere EU-Pipelines ohne Modelltraining an Ihren vertraulichen Daten.' },
    ],
    outcomesEn: [
      { metric: '-60% OpEx', label: 'Lower Support Costs', desc: '90% first-contact resolution proven across 500+ enterprise deployments.' },
      { metric: 'Up to 80%', label: 'Time Saved', desc: 'Automated PDF/invoice extraction, lead qualification, and triage.' },
      { metric: '100% GDPR', label: 'Zero Data Leakage', desc: 'Private zero-retention LLM pipelines that never train on your company data.' },
    ],
    deliverablesDe: [
      'Autonome 24/7 KI-Agenten für Kundensupport, Onboarding & Lead-Qualifizierung',
      'Model Context Protocol (MCP) Server zur Anbindung von Claude, Cursor & ChatGPT',
      'RAG-Systeme (Retrieval-Augmented Generation) auf Basis Ihrer Firmendokumente',
      'Intelligente Dokumenten- und Datenextraktion aus PDFs, E-Mails & Rechnungen',
      'Human-in-the-Loop-Leitplanken und vollständige Audit-Protokolle',
    ],
    deliverablesEn: [
      'Autonomous 24/7 AI agents for customer onboarding & lead qualification',
      'Model Context Protocol (MCP) servers connecting Claude, Cursor & ChatGPT to your tools',
      'Private RAG enterprise knowledge retrieval with vector databases',
      'Intelligent document and table extraction from PDFs, emails & invoices',
      'Human-in-the-loop safeguards and immutable audit logs',
    ],
    featuresDe: [
      'Nahtlose Anbindung an HubSpot, Salesforce, Slack, Notion, E-Mail & SQL',
      'Unterstützung für OpenAI, Anthropic Claude, Google Gemini & lokale LLMs',
      'Schlüsselfertige Bedienung ohne spezielles KI-Vorwissen im Team',
      'Klare Fehlerbehandlung und deterministische Validierung kritischer Schritte',
    ],
    featuresEn: [
      'Direct API & webhook integration with HubSpot, Salesforce, Slack, Notion & SQL',
      'Multi-model support across OpenAI, Anthropic Claude, Google Gemini & local LLMs',
      'Turnkey dashboards requiring zero technical AI expertise from your staff',
      'Strict schema validation and fail-safe fallback handling',
    ],
    proofItems: [
      {
        titleDe: 'IntelliTek.ai (SmartBotHub) – Enterprise Konversations-KI',
        titleEn: 'IntelliTek.ai (SmartBotHub) – Enterprise Conversational AI',
        client: 'SmarTek21',
        impactDe: '60 % niedrigere Support-Betriebskosten und 90 % Erstlösungsquote bei über 500 Unternehmenskunden.',
        impactEn: 'Slashed customer service OpEx by 60% with 90% first-contact resolution across 500+ enterprises.',
        caseStudySlug: 'smartbothub-enterprise-conversational-ai-cost-reduction-case-study',
      },
      {
        titleDe: 'Free Invoice Generator & @nordible/invoice-mcp Server',
        titleEn: 'Free Invoice Generator & @nordible/invoice-mcp Server',
        client: 'Nordible Open Source',
        impactDe: 'Offizieller MCP-Server auf npm, mit dem KI-Agenten GoBD-konforme DIN-5008-Rechnungen ohne Datenbank erstellen.',
        impactEn: 'Official npm MCP server enabling Claude, Cursor, and AI agents to emit compliant PDF invoices with zero data leaks.',
        caseStudySlug: 'nordible-free-invoice-generator-privacy-first-case-study',
        externalUrl: 'https://free-invoice-generator.nordible.co',
        externalLabelDe: 'Live-Tool & MCP testen',
        externalLabelEn: 'Try Live Tool & MCP',
      },
      {
        titleDe: 'Nordible Agentisches B2B-Branchenverzeichnis',
        titleEn: 'Nordible Agentic B2B Business Directory',
        client: 'Nordible Platform',
        impactDe: 'Native KI-Auffindbarkeit via Schema.org-Entitätsgraphen und `/.well-known/agent.json` Spezifikation.',
        impactEn: 'Engineered with Schema.org entity graphs and agent-ready discovery endpoints for autonomous AI procurement.',
        caseStudySlug: 'nordible-business-directory-ai-search-indexing-case-study',
      },
    ],
    faqsDe: [
      {
        q: 'Wie sicher sind unsere internen Unternehmensdaten bei KI-Workflows?',
        a: 'Datensicherheit und DSGVO stehen an erster Stelle. Wir nutzen Enterprise-Pipelines ohne Modell-Training an Ihren Daten und sichere europäische Cloud-Infrastrukturen.',
      },
      {
        q: 'Können KI-Agenten an bestehende ERP- und CRM-Systeme angebunden werden?',
        a: 'Ja, wir integrieren Agenten nahtlos über REST-APIs, Webhooks und MCP-Server in Systeme wie HubSpot, Salesforce, Slack, Notion oder SQL-Datenbanken.',
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
        a: 'Yes, we integrate agents directly via standard APIs and MCP servers with HubSpot, Salesforce, Slack, Notion, and relational databases.',
      },
      {
        q: 'Does our team need technical AI expertise?',
        a: 'No. We provide turn-key interfaces and conduct thorough onboarding with your team.',
      },
    ],
  },
  {
    slug: 'web-app-entwicklung',
    nameDe: 'Technologielösungen & Softwareentwicklung',
    nameEn: 'Technology Solutions & Software Engineering',
    heroTaglineDe: 'Maßgeschneiderte Webportale, SaaS-Architekturen und mobile Apps (iOS & Android) mit 100 % Code-Eigentum.',
    heroTaglineEn: 'Custom web portals, SaaS architectures, and mobile apps (iOS & Android) with 100% IP ownership.',
    descriptionDe: 'Wir konzipieren und entwickeln maßgeschneiderte Webplattformen, Cloud-Architekturen und mobile Applikationen für Unternehmen. Schnell zur Marktreife durch agile 2–4 Wochen MVP-Zyklen.',
    descriptionEn: 'We design and engineer bespoke web platforms, scalable cloud systems, and native mobile applications with rapid 2–4 week MVP turnaround.',
    overviewDe: [
      'Langsame Standard-Templates und zersplitterte Agentur-Teams kosten Unternehmen Umsatz und Flexibilität. Ob Kundenportal, komplexe Cloud-Plattform oder Cross-Platform-App: Jedes System von Nordible wird direkt von Solutions Architect Kabeer Shah verantwortet.',
      'Unsere Architektur-Erfahrung reicht von globalen MedTech- und FinTech-Systemen (GE Healthcare CareIntellect, Vantive/Baxter Remote Service Tool, NIUM Instarem mit $6B+ Volumen) bis hin zu schnellen B2C-Apps (Habitualist) und Open-Source-Entwicklerplattformen (Zerodha Sandbox, NerdsPal).',
    ],
    overviewEn: [
      'Sluggish templates and fragmented agency handoffs cost businesses revenue and agility. Whether launching a customer portal, SaaS product, or mobile app, every architecture at Nordible is led directly by Solutions Architect Kabeer Shah.',
      'Our production track record spans global MedTech and FinTech systems (GE Healthcare CareIntellect, Vantive/Baxter RST, NIUM Instarem at $6B+ annual volume) as well as B2C apps (Habitualist) and developer platforms (Zerodha Sandbox, NerdsPal).',
    ],
    badgeDe: '2–4 Woc. MVP',
    badgeEn: '2–4 Wks MVP',
    iconName: 'Layers',
    outcomesDe: [
      { metric: '2–4 Woc.', label: 'Rapid MVP Launch', desc: 'Einsatzbereite Prototypen und Live-Plattformen in Wochen statt Monaten.' },
      { metric: '-50 %', label: 'Entwicklungskosten', desc: 'Einheitliche React-Native- & Web-Architekturen ohne doppelte Teams.' },
      { metric: '100 % IP', label: 'Volles Eigentum', desc: 'Kompletter Quellcode, Repos und Infrastruktur gehören ab Tag 1 Ihnen.' },
    ],
    outcomesEn: [
      { metric: '2–4 Wks', label: 'Rapid MVP Launch', desc: 'Working prototypes and live production platforms shipped in weeks, not months.' },
      { metric: '-50%', label: 'Dev Cost Savings', desc: 'Unified Web & Mobile React Native architectures without duplicate teams.' },
      { metric: '100% IP', label: 'Full Ownership', desc: 'Every repository, schema, and cloud configuration belongs to you from day one.' },
    ],
    deliverablesDe: [
      'Produktionsreife Webanwendungen & Kundenportale (Next.js, React, TypeScript)',
      'Native & plattformübergreifende Mobile-Apps für iOS & Android (React Native)',
      'DSGVO-, HIPAA- & PCI-DSS-konforme Cloud-Architekturen & APIs (AWS, Node.js, PostgreSQL)',
      '100 % Quellcode-Eigentum ohne Vendor-Lock-in oder Lizenzgebühren',
    ],
    deliverablesEn: [
      'Production-ready web apps & client portals (Next.js, React, TypeScript)',
      'Cross-platform mobile applications for iOS & Android (React Native)',
      'GDPR, HIPAA & PCI-DSS hardened cloud architectures & APIs (AWS, Node.js, PostgreSQL)',
      '100% IP & source code ownership with zero vendor lock-in',
    ],
    featuresDe: [
      'Modernster Next.js & TypeScript Tech-Stack mit Subsekunden-Ladezeiten',
      'Wissenschaftlich fundierte UI/UX nach Fitts’s Law & Nielsen-Heuristiken',
      'Nahtlose Anbindung an bestehende ERP-, CRM- und Zahlungssysteme',
      'Direkter Austausch mit Gründer Kabeer Shah ohne Junior-Übergaben',
    ],
    featuresEn: [
      'Modern Next.js & TypeScript stack with sub-second response times',
      'Science-backed UI/UX engineered for conversion and thumb-zone ergonomics',
      'Seamless API integrations with existing ERP, CRM, and payment rails',
      'Direct collaboration with founder Kabeer Shah with zero junior handoffs',
    ],
    proofItems: [
      {
        titleDe: 'GE Healthcare · CareIntellect (Onkologie-Plattform)',
        titleEn: 'GE Healthcare · CareIntellect Oncology Platform',
        client: 'General Electric Healthcare',
        impactDe: '60 % weniger Datenaufbereitungszeit und +40 % klinischer Durchsatz durch Sub-100ms-Zeitachsen-UI.',
        impactEn: 'Slashed clinician data bottlenecks by 60% and boosted care coordination by 40% under HIPAA compliance.',
        caseStudySlug: 'ge-healthcare-careintellect-oncology-case-study',
      },
      {
        titleDe: 'NIUM / Instarem – Globale FinTech-Zahlungsstrecken',
        titleEn: 'NIUM / Instarem – Global FinTech Payment Rails',
        client: 'NIUM Inc.',
        impactDe: '$6B+ Jahresvolumen in 160+ Ländern, 100 % bestandene PCI-DSS-Audits und PhonePe-Integration.',
        impactEn: '$6B+ annual remittance volume across 160+ countries with 100% PCI-DSS audit pass rate.',
        caseStudySlug: 'nium-instarem-fintech-remittance-scale-case-study',
      },
      {
        titleDe: 'Vantive / Baxter · Remote Service Tool (IoT)',
        titleEn: 'Vantive / Baxter · Remote Service Tool (IoT)',
        client: 'Vantive Healthcare',
        impactDe: '50 % weniger Vor-Ort-Technikereinsätze und halbierte Ausfallzeiten bei 15.000+ Medizingeräten.',
        impactEn: 'Cut on-site field dispatches and hospital device downtime by 50% across 15,000+ medical devices.',
        caseStudySlug: 'vantive-baxter-healthcare-remote-diagnostics-case-study',
      },
      {
        titleDe: 'Habitualist App & Zerodha Trading Sandbox',
        titleEn: 'Habitualist App & Zerodha Trading Sandbox',
        client: 'D2C & Fintech Ecosystem',
        impactDe: '50 % geringere App-Baukosten (React Native) sowie 4x schnelleres Fintech-Testing mit 25+ simulierten APIs.',
        impactEn: '50% lower cross-platform build cost (Habitualist) and 4x faster API onboarding (Zerodha Sandbox).',
        caseStudySlug: 'habitualist-cross-platform-habit-tracker-growth-case-study',
      },
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
    slug: 'business-systems-automation',
    nameDe: 'Geschäftsprozess-Automatisierung & Systeme',
    nameEn: 'Business Systems & Automation',
    heroTaglineDe: 'Vernetzen Sie Ihre Software-Tools und eliminieren Sie manuelle Routinearbeit durch zuverlässige Prozessautomatisierung und RPA.',
    heroTaglineEn: 'Connect your business software stack and eliminate repetitive manual busywork with reliable workflow automation and RPA.',
    descriptionDe: 'Wir verbinden Ihre bestehenden Software-Tools (CRM, ERP, Rechnungen, E-Mail) und automatisieren wiederkehrende Back-Office-Aufgaben für messbare Zeitersparnis und null Fehler.',
    descriptionEn: 'We integrate your everyday software tools (CRM, ERP, billing, email) and automate repetitive back-office tasks so your team saves hours every week.',
    overviewDe: [
      'Wenn Mitarbeiter Daten per Copy-and-Paste zwischen Portalen, Tabellen, E-Mails und Buchhaltungsprogrammen übertragen, verliert Ihr Unternehmen jede Woche wertvolle Arbeitsstunden und riskiert teure Übertragungsfehler.',
      'Nordible automatisiert diese Abläufe von Grund auf: von HIPAA-konformer Versicherungs- und Abrechnungs-RPA (NextAuto: 80 % automatisierte Workflows, 40+ Std./Woche gespart) über automatisierte Creator-Pipelines (Parents.VIP) bis hin zum datenschutzsicheren LinkedIn-Beziehungsmanagement und GoBD-konformer Rechnungsautomatisierung.',
    ],
    overviewEn: [
      'Whenever teams copy-paste data between portals, spreadsheets, emails, and billing tools, businesses lose valuable hours every week and invite costly human errors.',
      'Nordible automates operational pipelines end-to-end: proven by NextAuto healthcare RPA (80% workflows automated, 40+ staff hours saved weekly, 90% error reduction), automated campaign pipelines (Parents.VIP), LinkedIn Catch-up Assistant (+35% warm re-engagement), and zero-database GoBD invoicing.',
    ],
    badgeDe: '40+ Std./Woc. gespart',
    badgeEn: '40+ Hrs/Wk Saved',
    iconName: 'Workflow',
    outcomesDe: [
      { metric: '80 %', label: 'Automatisierungsgrad', desc: 'Wiederkehrende Prüf-, Melde- und Datenprozesse laufen vollautomatisch.' },
      { metric: '40+ Std.', label: 'Wöchentliche Ersparnis', desc: 'Entlastung Ihres Kernteams von manueller Portal- und Excel-Arbeit.' },
      { metric: '-90 %', label: 'Weniger Fehler', desc: 'Saubere Datenvalidierung statt fehleranfälliger Handeingaben.' },
    ],
    outcomesEn: [
      { metric: '80%', label: 'Workflows Automated', desc: 'Routine portal checks, reporting, and sync tasks execute automatically.' },
      { metric: '40+ hrs/wk', label: 'Staff Time Reclaimed', desc: 'Frees skilled employees from repetitive spreadsheet and portal entry.' },
      { metric: '-90%', label: 'Fewer Billing Errors', desc: 'Deterministic validation eliminates manual transposition mistakes.' },
    ],
    deliverablesDe: [
      'End-to-End Workflow- & Robotic Process Automation (RPA) für Back-Office-Prozesse',
      'Individuelle REST-API-, Webhook- & Datenbank-Integrationen (CRM, ERP, Billing)',
      'Maßgeschneiderte Geschäftsführungs-Dashboards & Echtzeit-Auswertungen',
      'Datenschutzkonforme Browser- & Rechnungs-Automatisierung (GoBD / DSGVO)',
    ],
    deliverablesEn: [
      'End-to-end workflow and Robotic Process Automation (RPA) for back-office ops',
      'Custom REST API, webhook & relational database integrations (CRM, ERP, billing)',
      'Real-time executive dashboards and operational reporting pipelines',
      'Privacy-first browser automation & GoBD-compliant invoicing utilities',
    ],
    featuresDe: [
      'Keine doppelte Dateneingabe zwischen isolierten Inselsystemen',
      'Lückenlose Audit-Protokolle und Ausfallüberwachung',
      'Skalierbar ohne zusätzliche monatliche Pro-Nutzer-SaaS-Kosten',
      'DSGVO- & Compliance-konforme Datenhaltung in EU-Infrastruktur',
    ],
    featuresEn: [
      'Eliminate duplicate data entry across disconnected software silos',
      'Full audit trails, alerting, and zero-downtime background workers',
      'Built without escalating per-seat SaaS subscription taxes',
      'GDPR and regulatory compliance built directly into data pipelines',
    ],
    proofItems: [
      {
        titleDe: 'NextAuto – Automatisierte Abrechnungs- & Prüf-RPA',
        titleEn: 'NextAuto – Healthcare Claims & Eligibility RPA Suite',
        client: 'NextServices HSS',
        impactDe: '80 % automatisierte Workflows, über 40 Std./Woche gespart und 90 % weniger Fehler unter HIPAA-Compliance.',
        impactEn: 'Automated 80% of routine workflows, saving 40+ hours/week and cutting billing errors by 90%.',
        caseStudySlug: 'nextauto-enterprise-workflow-rpa-automation-case-study',
      },
      {
        titleDe: 'LinkedIn Catch-up Assistant – Sichere B2B-Pipeline-Automation',
        titleEn: 'LinkedIn Catch-up Assistant – Safe Relationship Automation',
        client: 'Nordible Product',
        impactDe: '+35 % warme B2B-Reaktivierung durch menschlich emulierte Browser-Automation bei 100 % Kontoschutz.',
        impactEn: '+35% warm B2B re-engagement via human-emulated browser automation with 100% account safety.',
        caseStudySlug: 'linkedin-catchup-assistant-b2b-relationship-automation-case-study',
      },
      {
        titleDe: 'Nordible Free Invoice Generator & QR-Code-Tools',
        titleEn: 'Nordible Free Invoice Generator & QR Utilities',
        client: 'Nordible Open Source',
        impactDe: 'Automatisierte, 100 % clientseitige DIN-5008-Rechnungen und Tracking-freie Vektor-QR-Codes.',
        impactEn: 'Zero-database DIN 5008 / GoBD invoicing and instant vector QR tools with zero recurring SaaS fees.',
        caseStudySlug: 'nordible-free-invoice-generator-privacy-first-case-study',
        externalUrl: 'https://free-invoice-generator.nordible.co',
        externalLabelDe: 'Rechnungs-Tool öffnen',
        externalLabelEn: 'Open Invoice Tool',
      },
    ],
    faqsDe: [
      {
        q: 'Welche Tools können Sie miteinander verbinden?',
        a: 'Praktisch alle modernen Cloud- und On-Premise-Systeme mit API, Webhook oder Datenbankzugriff – z. B. HubSpot, Salesforce, DATEV-Exporte, Slack, Microsoft 365, Google Workspace und PostgreSQL/MySQL.',
      },
      {
        q: 'Ersetzt Prozessautomatisierung unsere Mitarbeiter?',
        a: 'Nein – sie befreit Ihr Team von monotoner Copy-Paste-Routinearbeit, sodass sich Ihre Fachkräfte auf Kundenbeziehungen, Vertrieb und strategische Aufgaben konzentrieren können.',
      },
      {
        q: 'Wie schnell amortisiert sich eine Workflow-Automatisierung?',
        a: 'Wenn ein Prozess 10–40 Stunden pro Woche einspart, macht sich die Investition meist bereits innerhalb der ersten 1 bis 3 Monate bezahlt.',
      },
    ],
    faqsEn: [
      {
        q: 'Which software tools can you connect?',
        a: 'Virtually any system with an API, webhook, or database—including HubSpot, Salesforce, Slack, Microsoft 365, Google Workspace, Stripe, and SQL databases.',
      },
      {
        q: 'How fast does workflow automation pay for itself?',
        a: 'When an automated pipeline reclaims 10 to 40+ hours of staff time per week, ROI is typically realized within 1 to 3 months.',
      },
      {
        q: 'Do we retain control over the automated workflows?',
        a: 'Yes. Unlike locked-in SaaS automation subscriptions, you own the code, logs, and infrastructure completely.',
      },
    ],
  },
  {
    slug: 'business-it-email',
    nameDe: 'Business Email & Setup',
    nameEn: 'Business Email & Setup',
    heroTaglineDe: 'Sichere geschäftliche E-Mail-Systeme, eigene Domains und DNS-Sicherheit (SPF/DKIM/DMARC) ohne teure Big-Tech-Abos.',
    heroTaglineEn: 'Secure corporate email systems, custom domain branding, and anti-spam DNS hardening without big-tech bloatware fees.',
    descriptionDe: 'Wir richten Ihre professionelle Unternehmens-E-Mail (ihrname@ihrunternehmen.de) ein, konfigurieren modernen Spamschutz (SPF, DKIM, DMARC) und sparen bis zu 70 % laufende Kosten.',
    descriptionEn: 'Get secure, branded company email (you@yourcompany.com) with custom domains, hardened deliverability (SPF, DKIM, DMARC), and up to 70% OpEx savings.',
    overviewDe: [
      'Unprofessionelle Freemail-Adressen oder falsch konfigurierte Mailserver kosten täglich Vertrauen und lassen wichtige Angebote unbemerkt im Spam-Ordner von Kunden landen.',
      'Mit Nordible Professional Email (email.nordible.co) erhalten Unternehmen in nur 5 Minuten eine isolierte, DSGVO-orientierte E-Mail-Infrastruktur auf eigener Domain – kompatibel mit Outlook, Apple Mail, Gmail, iOS und Android und bis zu 70 % günstiger als klassische Pro-Kopf-Lizenzen.',
    ],
    overviewEn: [
      'Generic free email addresses or misconfigured DNS records quietly send high-value business proposals straight to your client’s spam folder.',
      'With Nordible Professional Email (email.nordible.co), companies get an isolated, privacy-first email infrastructure on their custom domain in minutes—working seamlessly across Outlook, Apple Mail, Gmail, and mobile while cutting recurring per-seat SaaS costs by up to 70%.',
    ],
    badgeDe: '24/7 Verlässlich',
    badgeEn: '24/7 Reliability',
    iconName: 'MailCheck',
    externalProductUrl: 'https://email.nordible.co/',
    outcomesDe: [
      { metric: '-70 % OpEx', label: 'Weniger E-Mail-Kosten', desc: 'Keine unnötigen Pro-Mitarbeiter-Gebühren für ungenutzte Office-Suiten.' },
      { metric: '99,9 %', label: 'Zustellbarkeit', desc: 'Saubere SPF-, DKIM-, DMARC- & TLS-1.3-Signierung für den Posteingang.' },
      { metric: '5 Min.', label: 'Schnelles Setup', desc: 'Reibungslose Migration bestehender Postfächer ohne Ausfallzeit.' },
    ],
    outcomesEn: [
      { metric: '-70% OpEx', label: 'Lower Email Costs', desc: 'Eliminate per-user bloatware taxes while keeping full enterprise features.' },
      { metric: '99.9%', label: 'Inbox Deliverability', desc: 'Hardened SPF, DKIM, DMARC & TLS 1.3 security out of the box.' },
      { metric: '5 Mins', label: 'Rapid Onboarding', desc: 'Zero-downtime mailbox migration and instant cross-device sync.' },
    ],
    deliverablesDe: [
      'Eigene Firmen-Domain mit professionellen Adressen (ihrname@ihrunternehmen.de)',
      'SPF-, DKIM- & DMARC-Sicherheitskonfiguration gegen Phishing & Spam',
      'Zero-Downtime E-Mail-Migration (Google Workspace, Microsoft 365, IMAP)',
      'DSGVO-konforme Datenhaltung ohne KI-Scanning Ihrer Korrespondenz',
    ],
    deliverablesEn: [
      'Custom company domain with branded email accounts (you@yourcompany.com)',
      'SPF, DKIM, and DMARC defense setup against phishing and spoofing',
      'Zero-downtime email migration (Google Workspace, Microsoft 365, IMAP)',
      'Private data sovereignty with zero third-party AI scraping of your emails',
    ],
    featuresDe: [
      'Funktioniert auf Apple Mail, Outlook, Gmail, iOS, Android & im Browser',
      'Zentrales Postfach- und Rechtemanagement für wachsende Teams',
      'Containerisierte, gehärtete Server-Infrastruktur',
      'Persönlicher Support direkt vom Architekten-Team',
    ],
    featuresEn: [
      'Seamless sync across Apple Mail, Outlook, Gmail, iOS, Android & Webmail',
      'Centralized mailbox, alias, and access governance for growing teams',
      'Isolated containerized Linux infrastructure with automated SSL/TLS',
      'Direct priority support without call-center queues',
    ],
    proofItems: [
      {
        titleDe: 'Nordible Professional Email (email.nordible.co)',
        titleEn: 'Nordible Professional Email Platform (email.nordible.co)',
        client: 'Nordible Product',
        impactDe: 'Schlüsselfertige Business-E-Mail-Plattform mit 70 % Kostenersparnis, 5-Minuten-Setup und 99,9 % Verfügbarkeit.',
        impactEn: 'Turnkey corporate email infrastructure cutting OpEx by 70% with 5-minute onboarding and 99.9% uptime.',
        caseStudySlug: 'nordible-email-b2b-saas-security-infrastructure-case-study',
        externalUrl: 'https://email.nordible.co/',
        externalLabelDe: 'email.nordible.co öffnen',
        externalLabelEn: 'Visit email.nordible.co',
      },
      {
        titleDe: 'Empfohlen von Frankfurter Unternehmern',
        titleEn: 'Trusted by Frankfurt Founders & Businesses',
        client: 'Amruth Jai (Kundenstimme)',
        impactDe: 'Verifizierte 5-Sterne-Empfehlung für professionelle geschäftliche E-Mail-Lösungen in Frankfurt am Main.',
        impactEn: 'Verified 5-star client recommendation for professional corporate email setup in Frankfurt.',
        caseStudySlug: 'nordible-email-b2b-saas-security-infrastructure-case-study',
      },
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
        q: 'Können wir unsere bestehende Domain behalten?',
        a: 'Ja. Sie können jede bestehende Domain verknüpfen oder direkt über uns eine neue Domain sauber einrichten lassen.',
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
        q: 'Can we connect an existing company domain?',
        a: 'Yes. Any existing custom domain can be connected seamlessly in minutes with automated DNS verification.',
      },
    ],
  },
];

export function getAllServices(): ServiceItem[] {
  return SERVICES;
}

export function getService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}
