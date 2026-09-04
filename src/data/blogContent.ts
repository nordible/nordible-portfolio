export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: 'geo' | 'ai' | 'engineering';
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  published: boolean;
}

export interface BlogHubContent {
  navBack: string;
  hubBadge: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  categories: {
    all: string;
    geo: string;
    ai: string;
  };
  searchPlaceholder: string;
  featuredBadge: string;
  readComplete: string;
  allArticlesHeading: string;
  showing: string;
  articleSingle: string;
  articlePlural: string;
  readMore: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaSecondary: string;
  posts: BlogPostItem[];
}

export interface FrankfurtPostContent {
  navHome: string;
  navBlog: string;
  navCurrent: string;
  share: string;
  copied: string;
  badge: string;
  date: string;
  readTime: string;
  title: string;
  introP1: string;
  objectiveBoxTitle: string;
  objective1: string;
  objective2: string;
  heroAlt: string;
  sec1Number: string;
  sec1Title: string;
  sec1P1: string;
  sec1P2: string;
  sec1Cards: {
    pillarsTitle: string;
    pillarsDesc: string;
    regionalTitle: string;
    regionalDesc: string;
    b2bTitle: string;
    b2bDesc: string;
    legalTitle: string;
    legalDesc: string;
  };
  sec2Number: string;
  sec2Title: string;
  sec2P1: string;
  sec2Cards: {
    gbpTitle: string;
    gbpBadge: string;
    gbpDesc: string;
    appleTitle: string;
    appleBadge: string;
    appleDesc: string;
    bingTitle: string;
    bingBadge: string;
    bingDesc: string;
  };
  sec3Number: string;
  sec3Title: string;
  sec3P1: string;
  schemaTitle: string;
  schemaP1: string;
  schemaPoints: string[];
  schemaFilename: string;
  crawlerTitle: string;
  crawlerRobotsTitle: string;
  crawlerRobotsDesc: string;
  crawlerLlmsTitle: string;
  crawlerLlmsDesc: string;
  sec4Number: string;
  sec4Title: string;
  sec4P1: string;
  sec4Quote: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaSecondary: string;
  mobileBookBtn: string;
}

export const blogHubTranslations: Record<'en' | 'de', BlogHubContent> = {
  en: {
    navBack: 'Back to Home',
    hubBadge: 'Nordible Technologies · Insights Hub',
    heroBadge: 'Engineering & Strategy Insights',
    heroTitle: 'Case Studies, Blueprints & AI Discoverability',
    heroSubtitle: 'Practical breakdowns of how we build resilient software, engineer Generative Engine Optimization (GEO), and scale digital platforms for German and European enterprises.',
    categories: {
      all: 'All Insights',
      geo: 'GEO & Search',
      ai: 'AI Strategy',
    },
    searchPlaceholder: 'Search topics or keywords...',
    featuredBadge: 'Featured Case Study',
    readComplete: 'Read Complete Case Study',
    allArticlesHeading: 'All Articles & Blueprints',
    showing: 'Showing',
    articleSingle: 'article',
    articlePlural: 'articles',
    readMore: 'Read',
    ctaBadge: 'GEO Engineering & AI Strategy',
    ctaTitle: 'Ready to make your business discoverable in AI search engines?',
    ctaSubtitle: 'We audit your directory citations, configure Schema.org entity graphs, and optimize your brand footprint for recommendations in ChatGPT, Gemini, and Perplexity.',
    ctaButton: 'Schedule AI & GEO Consultation',
    ctaSecondary: 'Explore All Services →',
    posts: [
      {
        id: 'frankfurt-geo-case-study',
        slug: 'frankfurt-local-seo-ai-discoverability',
        title: 'How We Engineered Local Dominance and AI Discoverability for a Frankfurt Business',
        excerpt: 'Technical and strategic blueprint for mastering German business directory ecosystems and Generative Engine Optimization (GEO) to dominate conversational AI recommendations.',
        category: 'GEO & Local SEO',
        categorySlug: 'geo',
        readTime: '5 min read',
        date: 'September 2026',
        image: '/images/frankfurt-geo-dominate-ai-search.jpg',
        imageAlt: 'Case Study: How to Dominate AI Search and Local Directory Presence in Frankfurt',
        tags: ['GEO', 'Local SEO', 'AI Search', 'Schema.org', 'Frankfurt'],
        featured: true,
        published: true,
      },
      {
        id: 'ai-replaced-seo-blueprint',
        slug: 'frankfurt-local-seo-ai-discoverability',
        title: 'Why AI Search is Reshaping Organic Discovery: The GEO Architecture Guide',
        excerpt: 'Conversational engines like ChatGPT, Gemini, and Perplexity bypass traditional SERPs. Here is how modern businesses must structure entity graphs and citations for LLM retrieval.',
        category: 'AI Strategy',
        categorySlug: 'ai',
        readTime: '6 min read',
        date: 'September 2026',
        image: '/images/frankfurt-geo-ai-replaced-seo.jpg',
        imageAlt: 'AI Replaced SEO: Generative Engine Optimization Blueprint',
        tags: ['GEO', 'Perplexity', 'ChatGPT', 'AI Retrieval'],
        featured: false,
        published: true,
      }
    ]
  },
  de: {
    navBack: 'Zur Startseite',
    hubBadge: 'Nordible Technologies · Insights Hub',
    heroBadge: 'Engineering- & Strategie-Einblicke',
    heroTitle: 'Fallstudien, Blueprints & KI-Auffindbarkeit',
    heroSubtitle: 'Praxisnahe Analysen, wie wir zukunftssichere Software entwickeln, Generative Engine Optimization (GEO) implementieren und digitale Plattformen für Unternehmen in Deutschland skalieren.',
    categories: {
      all: 'Alle Einblicke',
      geo: 'GEO & Suche',
      ai: 'KI-Strategie',
    },
    searchPlaceholder: 'Themen oder Schlagwörter durchsuchen...',
    featuredBadge: 'Ausgewählte Fallstudie',
    readComplete: 'Vollständige Fallstudie lesen',
    allArticlesHeading: 'Alle Artikel & Leitfäden',
    showing: 'Zeigt',
    articleSingle: 'Artikel',
    articlePlural: 'Artikel',
    readMore: 'Lesen',
    ctaBadge: 'GEO-Engineering & KI-Strategie',
    ctaTitle: 'Bereit, Ihr Unternehmen in KI-Suchmaschinen auffindbar zu machen?',
    ctaSubtitle: 'Wir analysieren Ihre Brancheneinträge, konfigurieren Schema.org-Entitätsgraphen und optimieren Ihren Markenauftritt für direkte Empfehlungen in ChatGPT, Gemini und Perplexity.',
    ctaButton: 'KI- & GEO-Beratung vereinbaren',
    ctaSecondary: 'Alle Leistungen ansehen →',
    posts: [
      {
        id: 'frankfurt-geo-case-study',
        slug: 'frankfurt-local-seo-ai-discoverability',
        title: 'Wie wir lokale Dominanz und KI-Auffindbarkeit für ein Frankfurter Unternehmen realisiert haben',
        excerpt: 'Technischer und strategischer Leitfaden zur Beherrschung deutscher Branchenverzeichnisse und Generative Engine Optimization (GEO) für direkte KI-Empfehlungen.',
        category: 'GEO & Lokales SEO',
        categorySlug: 'geo',
        readTime: '5 Min. Lesezeit',
        date: 'September 2026',
        image: '/images/frankfurt-geo-dominate-ai-search.jpg',
        imageAlt: 'Fallstudie: Wie man KI-Suche und lokale Verzeichnisse in Frankfurt dominiert',
        tags: ['GEO', 'Lokales SEO', 'KI-Suche', 'Schema.org', 'Frankfurt'],
        featured: true,
        published: true,
      },
      {
        id: 'ai-replaced-seo-blueprint',
        slug: 'frankfurt-local-seo-ai-discoverability',
        title: 'Warum KI-Suche traditionelles SEO ablöst: Der GEO-Architektur-Leitfaden',
        excerpt: 'Dialogsysteme wie ChatGPT, Gemini und Perplexity verändern das Suchverhalten. So müssen Unternehmen Entitätsgraphen strukturieren, um von Sprachmodellen zitiert zu werden.',
        category: 'KI-Strategie',
        categorySlug: 'ai',
        readTime: '6 Min. Lesezeit',
        date: 'September 2026',
        image: '/images/frankfurt-geo-ai-replaced-seo.jpg',
        imageAlt: 'AI Replaced SEO: Generative Engine Optimization Blueprint',
        tags: ['GEO', 'Perplexity', 'ChatGPT', 'KI-Retrieval'],
        featured: false,
        published: true,
      }
    ]
  }
};

export const frankfurtPostTranslations: Record<'en' | 'de', FrankfurtPostContent> = {
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navCurrent: 'Case Study',
    share: 'Share',
    copied: 'Copied Link',
    badge: 'GEO & Local SEO Case Study',
    date: 'September 2026',
    readTime: '5 min read',
    title: 'How We Engineered Local Dominance and AI Discoverability for a Frankfurt Business',
    introP1: 'When businesses expand or modernize their digital presence in Germany, traditional SEO is no longer the entire playing field. Search has evolved: potential clients, partners, and decision-makers are no longer just typing queries into search bars—they are asking conversational AI engines like ChatGPT, Google Gemini, and Perplexity for direct recommendations.',
    objectiveBoxTitle: 'Recently at Nordible, we took on the challenge of establishing a complete local and generative presence for our client based in Frankfurt am Main with two core objectives:',
    objective1: 'Dominate local discovery across the core German directory and mapping ecosystems.',
    objective2: 'Engineer AI discoverability (GEO) so that when an AI model is asked for top regional specialists, our client is directly cited.',
    heroAlt: 'Case Study: How to Dominate AI Search and Local Directory Presence in Frankfurt',
    sec1Number: '01',
    sec1Title: 'Establishing NAP Consistency Across the German Directory Ecosystem',
    sec1P1: 'In Germany, directory data integrity is heavily weighted by both search algorithms and legal standards. Discrepancies in company naming, address formatting, or contact details dilute domain trust and confuse algorithmic indexers.',
    sec1P2: 'We unified our client’s NAP (Name, Address, Phone Number) footprint across premier German business directories and citation networks:',
    sec1Cards: {
      pillarsTitle: 'Authoritative German Pillars',
      pillarsDesc: 'Claimed, verified, and synchronized listings on Gelbe Seiten, Das Örtliche, Das Telefonbuch, and 11880.com.',
      regionalTitle: 'Regional & Industry Hubs',
      regionalDesc: 'Indexed on Meinestadt.de, Cylex Deutschland, and Frankfurt-specific regional citation networks.',
      b2bTitle: 'B2B Platforms',
      b2bDesc: 'Standardized company entity records across LinkedIn, Xing, and Wer liefert was (wlw).',
      legalTitle: 'Legal Alignment',
      legalDesc: 'Ensured all directory descriptions and business parameters precisely mirrored statutory Impressum and commercial registration standards.',
    },
    sec2Number: '02',
    sec2Title: 'Unifying the Primary Map Data Feeders',
    sec2P1: 'Generative models rely extensively on grounding data pulled from major map ecosystems. We secured and optimized verified listings across the three primary providers:',
    sec2Cards: {
      gbpTitle: 'Google Business Profile (GBP)',
      gbpBadge: 'Search & Gemini',
      gbpDesc: 'Configured with precise Frankfurt geo-coordinates, verified service categories, primary business attributes, and regular status updates—feeding both Google Search and Gemini’s real-time local search graphs.',
      appleTitle: 'Apple Business Connect',
      appleBadge: 'Maps & Siri',
      appleDesc: 'Fully integrated to ensure seamless surfacing inside Apple Maps, Siri, and Apple Intelligence.',
      bingTitle: 'Bing Places for Business',
      bingBadge: 'Copilot & Bing',
      bingDesc: 'Configured to anchor the entity data directly within Microsoft Copilot and Bing’s enterprise discovery index.',
    },
    sec3Number: '03',
    sec3Title: 'Generative Engine Optimization (GEO) & Machine-Readable Architecture',
    sec3P1: "Being listed on directory websites is only half the battle. To be recommended by LLMs, a brand's website must be structured so automated reasoning systems can parse services, credibility, and location without ambiguity.",
    schemaTitle: 'Rich Schema.org Entity Graph',
    schemaP1: "Instead of relying on basic metadata, we deployed nested JSON-LD Schema directly into the client’s web architecture:",
    schemaPoints: [
      'Implemented LocalBusiness / ProfessionalService structured data.',
      'Mapped exact geographic coordinates (geo), service radii, opening hours, and structured hasOfferCatalog definitions.',
      'Linked verified third-party entities (sameAs) pointing to official registry pages and certified directories to validate domain authority.'
    ],
    schemaFilename: 'schema-entity.jsonld',
    crawlerTitle: 'AI Crawler Access & Structured Context (llms.txt)',
    crawlerRobotsTitle: 'Robots Policy',
    crawlerRobotsDesc: 'Configured modern crawler rules to openly permit semantic parsing agents (including GPTBot, PerplexityBot, and Google-Extended) while protecting sensitive internal assets.',
    crawlerLlmsTitle: 'llms.txt Standard',
    crawlerLlmsDesc: 'Deployed a standardized lightweight markdown file at /llms.txt summarizing core capabilities, Frankfurt market focus, and contact interfaces for instant ingestion by LLM scrapers.',
    sec4Number: '04',
    sec4Title: 'The Result: Built for the Next Era of Discovery',
    sec4P1: 'By bridging traditional German business directories with modern Generative Engine Optimization, our client moved from a fragmented web footprint to an authoritative, verifiable local entity.',
    sec4Quote: '"Today, whether a potential customer searches via Google Maps in downtown Frankfurt or queries an AI model for a trusted local partner, our client’s business is positioned at the top of the conversation."',
    ctaBadge: 'Transform Your Growth',
    ctaTitle: 'Ready to Dominate Local Search & AI Discovery?',
    ctaDesc: "Need to modernize your digital presence, deploy custom web applications, or optimize your business for AI discovery? Let's build digital systems engineered for long-term growth.",
    ctaButton: 'Book a Consultation',
    ctaSecondary: 'Explore Full Portfolio',
    mobileBookBtn: 'Book Consultation',
  },
  de: {
    navHome: 'Startseite',
    navBlog: 'Blog',
    navCurrent: 'Fallstudie',
    share: 'Teilen',
    copied: 'Link kopiert',
    badge: 'GEO & Lokales SEO · Fallstudie',
    date: 'September 2026',
    readTime: '5 Min. Lesezeit',
    title: 'Wie wir lokale Dominanz und KI-Auffindbarkeit für ein Frankfurter Unternehmen realisiert haben',
    introP1: 'Wenn Unternehmen in Deutschland expandieren oder ihre digitale Präsenz modernisieren, reicht traditionelles SEO allein längst nicht mehr aus. Das Suchverhalten hat sich fundamental gewandelt: Interessenten, Geschäftspartner und Entscheider tippen nicht mehr nur isolierte Keywords in Suchmasken – sie befragen dialogbasierte KI-Suchsysteme wie ChatGPT, Google Gemini und Perplexity nach maßgeschneiderten Empfehlungen.',
    objectiveBoxTitle: 'Vor Kurzem übernahm Nordible die Aufgabe, für unseren Kunden mit Sitz in Frankfurt am Main eine ganzheitliche lokale und generative Webpräsenz aufzubauen – mit zwei Kernzielen:',
    objective1: 'Lokale Auffindbarkeit in den führenden deutschen Branchenverzeichnissen und Kartensystemen dominieren.',
    objective2: 'Generative Engine Optimization (GEO) gezielt umsetzen, damit KI-Modelle bei regionalen Anfragen unseren Kunden als erste Wahl empfehlen.',
    heroAlt: 'Fallstudie: Wie man KI-Suche und lokale Verzeichnisse in Frankfurt dominiert',
    sec1Number: '01',
    sec1Title: 'Etablierung lückenloser NAP-Konsistenz im deutschen Verzeichnis-Ökosystem',
    sec1P1: 'In Deutschland wird die Konsistenz und Richtigkeit von Verzeichnisdaten von Suchmaschinen und rechtlichen Prüfinstanzen extrem hoch bewertet. Abweichungen bei Firmenbezeichnung, Anschrift oder Rufnummer verwässern das Vertrauen und erschweren die algorithmische Indizierung.',
    sec1P2: 'Wir haben die NAP-Identität (Name, Address, Phone Number) unseres Kunden über alle führenden deutschen Verzeichnisse und Bewertungsnetzwerke synchronisiert:',
    sec1Cards: {
      pillarsTitle: 'Führende deutsche Kernportale',
      pillarsDesc: 'Verifizierte und synchronisierte Profile auf Gelbe Seiten, Das Örtliche, Das Telefonbuch und 11880.com.',
      regionalTitle: 'Regionale & thematische Portale',
      regionalDesc: 'Indizierung auf Meinestadt.de, Cylex Deutschland und regionalen Frankfurter Standortnetzwerken.',
      b2bTitle: 'B2B- & Branchenplattformen',
      b2bDesc: 'Einheitliche Unternehmensdaten auf LinkedIn, Xing und „Wer liefert was“ (wlw).',
      legalTitle: 'Rechtssicherheit & Impressum',
      legalDesc: 'Exakte Abstimmung aller Unternehmensangaben mit dem gesetzlichen Impressum und den Handelsregistereinträgen.',
    },
    sec2Number: '02',
    sec2Title: 'Konsolidierung der primären Kartendaten-Lieferanten',
    sec2P1: 'Generative KI-Modelle nutzen Kartendienste als primäre Grounding-Datenquelle zur Verifizierung physischer Unternehmen. Wir haben verifizierte Präsenzen bei den drei führenden Plattformen aufgebaut:',
    sec2Cards: {
      gbpTitle: 'Google Business Profile (GBP)',
      gbpBadge: 'Suche & Gemini',
      gbpDesc: 'Hinterlegt mit exakten Frankfurter Geokoordinaten, validierten Kategorien und laufenden Updates – speist sowohl Google Maps als auch Geminis Echtzeit-Graphen.',
      appleTitle: 'Apple Business Connect',
      appleBadge: 'Karten & Siri',
      appleDesc: 'Vollständig integriert für optimale Sichtbarkeit in Apple Karten, Siri und Apple Intelligence.',
      bingTitle: 'Bing Places for Business',
      bingBadge: 'Copilot & Bing',
      bingDesc: 'Konfiguriert zur direkten Verankerung im Microsoft Copilot- und Bing Enterprise-Index.',
    },
    sec3Number: '03',
    sec3Title: 'Generative Engine Optimization (GEO) & maschinenlesbare Architektur',
    sec3P1: 'Die Listung in Verzeichnissen ist nur das Fundament. Um von LLMs empfohlen zu werden, muss die Website so strukturiert sein, dass Reasoning-Modelle Leistungen, Reputation und Standort zweifelsfrei interpretieren können.',
    schemaTitle: 'Tief integrierter Schema.org-Entitätsgraph',
    schemaP1: 'Statt auf einfache Metatags zu setzen, haben wir mehrdimensionale JSON-LD-Schemas direkt in die Webarchitektur integriert:',
    schemaPoints: [
      'Implementierung strukturierter Daten nach LocalBusiness / ProfessionalService Standards.',
      'Exakte Geokoordinaten (geo), Einzugsgebiete, Öffnungszeiten und strukturierte hasOfferCatalog Leistungsbeschreibungen.',
      'Verknüpfung verifizierter Drittquellen (sameAs) mit Registerportalen und Branchenbüchern zur Bestätigung der Domänen-Autorität.'
    ],
    schemaFilename: 'schema-entity.jsonld',
    crawlerTitle: 'KI-Crawler-Freigabe & strukturierter Kontext (llms.txt)',
    crawlerRobotsTitle: 'Robots-Richtlinie',
    crawlerRobotsDesc: 'Moderne Crawler-Regeln erlauben semantischen Indexern (wie GPTBot, PerplexityBot und Google-Extended) den Vollzugriff, während interne Ressourcen geschützt bleiben.',
    crawlerLlmsTitle: 'llms.txt Standard',
    crawlerLlmsDesc: 'Bereitstellung einer standardisierten /llms.txt Datei mit Kernkompetenzen, Frankfurt-Fokus und Kontaktwegen für die direkte LLM-Verarbeitung.',
    sec4Number: '04',
    sec4Title: 'Das Ergebnis: Entwickelt für die nächste Ära der Auffindbarkeit',
    sec4P1: 'Durch die Verbindung klassischer deutscher Verzeichnisse mit innovativer Generative Engine Optimization entstand eine verifizierbare, hochgradig autoritative lokale Markenpräsenz.',
    sec4Quote: '„Ob ein potenzieller Kunde heute über Google Maps im Frankfurter Bankenviertel sucht oder ein KI-Modell nach einem vertrauenswürdigen lokalen Partner befragt: Unser Kunde wird direkt an erster Stelle empfohlen.“',
    ctaBadge: 'Wachstum gezielt beschleunigen',
    ctaTitle: 'Bereit, lokale Suche & KI-Auffindbarkeit zu dominieren?',
    ctaDesc: 'Möchten Sie Ihre Webpräsenz modernisieren, individuelle Webanwendungen bauen oder Ihr Unternehmen für KI-Suchsysteme rüsten? Lassen Sie uns messbare digitale Ergebnisse erzielen.',
    ctaButton: 'Beratungsgespräch vereinbaren',
    ctaSecondary: 'Portfolio entdecken',
    mobileBookBtn: 'Beratung anfragen',
  }
};

export type DetailedArticleContent = FrankfurtPostContent;

export const articlesBySlug: Record<string, Record<'en' | 'de', DetailedArticleContent>> = {
  'frankfurt-local-seo-ai-discoverability': frankfurtPostTranslations,
};

export const defaultArticleSlug = 'frankfurt-local-seo-ai-discoverability';

export const articleNotFoundTranslations: Record<'en' | 'de', {
  badge: string;
  title: string;
  desc: string;
  backBtn: string;
}> = {
  en: {
    badge: '404 · Not Found',
    title: 'Article Not Found',
    desc: 'The insight or case study you are looking for does not exist or may have been moved.',
    backBtn: 'Back to Insights Hub'
  },
  de: {
    badge: '404 · Nicht gefunden',
    title: 'Artikel nicht gefunden',
    desc: 'Der gesuchte Fachartikel oder die Fallstudie existiert nicht oder wurde verschoben.',
    backBtn: 'Zurück zur Beitragsübersicht'
  }
};

