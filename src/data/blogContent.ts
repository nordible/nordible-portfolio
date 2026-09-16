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

export interface ArticleCard {
  title: string;
  desc: string;
  badge?: string;
  icon?: 'search' | 'zap' | 'users' | 'video' | 'building' | 'map' | 'shield' | 'bot' | 'sparkles' | 'compass';
}

export interface ArticleSection {
  number: string;
  title: string;
  paragraphs?: string[];
  cards?: ArticleCard[];
  codeBlock?: {
    filename: string;
    code: string;
  };
  quote?: string;
}

export interface ArticleContent {
  navHome: string;
  navBlog: string;
  navCurrent: string;
  share: string;
  copied: string;
  badge: string;
  date: string;
  readTime: string;
  title: string;
  client?: {
    name: string;
    location?: string;
    logo?: string;
    link?: string;
  };
  introParagraphs: string[];
  objective?: {
    title: string;
    text?: string;
    points?: string[];
  };
  metrics?: Array<{
    label: string;
    value: string;
    icon?: 'trophy' | 'percent' | 'users' | 'trending';
  }>;
  heroImage: {
    src: string;
    alt: string;
    caption?: string;
    badge?: string;
  };
  sections: ArticleSection[];
  cta: {
    badge?: string;
    title: string;
    desc?: string;
    buttonText: string;
    secondaryText?: string;
    mobileButtonText?: string;
  };
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
        id: 'shams-consult-google-ranking',
        slug: 'shams-consult-google-ranking',
        title: 'Case Study: Ranking a German Architecture Consultancy #1 on Google',
        excerpt: 'How Nordible helped Shams Consult, an architecture and urban planning consultancy based in Frankfurt am Main and Rödermark, secure the #1 organic position on Google for its most critical industry search terms.',
        category: 'B2B SEO Case Study',
        categorySlug: 'geo',
        readTime: '3 min read',
        date: 'September 2026',
        image: '/images/shams-consult-architecture-case-study.jpg',
        imageAlt: 'Case Study: Ranking a German Architecture Consultancy #1 on Google - Shams Consult',
        tags: ['SEO', 'B2B', 'Architecture', 'Frankfurt', 'Google Ranking', 'Case Study'],
        featured: true,
        published: true,
      },
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
        featured: false,
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
        id: 'shams-consult-google-ranking',
        slug: 'shams-consult-google-ranking',
        title: 'Fallstudie: Platz 1 bei Google für ein deutsches Architekturbüro',
        excerpt: 'So hat Nordible das Büro Shams Consult (Frankfurt am Main / Rödermark) dabei unterstützt, die organische Spitzenposition (Platz 1) bei Google für zentrale Branchensuchbegriffe zu erreichen.',
        category: 'B2B-SEO-Fallstudie',
        categorySlug: 'geo',
        readTime: '3 Min. Lesezeit',
        date: 'September 2026',
        image: '/images/shams-consult-architecture-case-study.jpg',
        imageAlt: 'Fallstudie: Platz 1 bei Google für ein deutsches Architekturbüro - Shams Consult',
        tags: ['SEO', 'B2B', 'Architektur', 'Frankfurt', 'Google Platz 1', 'Fallstudie'],
        featured: true,
        published: true,
      },
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
        featured: false,
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

export const shamsPostTranslations: Record<'en' | 'de', ArticleContent> = {
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navCurrent: 'Case Study',
    share: 'Share',
    copied: 'Copied Link',
    badge: 'B2B SEO Case Study',
    date: 'September 2026',
    readTime: '3 min read',
    title: 'Case Study: Ranking a German Architecture Consultancy #1 on Google',
    client: {
      name: 'Shams Consult',
      location: 'Frankfurt am Main & Rödermark',
      logo: '/images/logos/shams-consult-logo.png',
      link: 'https://shams-consult.de/'
    },
    introParagraphs: [
      'High-intent local B2B searches require more than superficial keyword stuffing; they demand semantic precision, rock-solid technical performance, and messaging aligned with high-value commercial intent.',
      'Here is how Nordible helped Shams Consult, an architecture and urban planning consultancy based in Frankfurt am Main and Rödermark, secure the #1 organic position on Google for its most critical industry search terms.'
    ],
    metrics: [
      {
        label: 'Google Organic Ranking',
        value: '#1 Position',
        icon: 'trophy'
      },
      {
        label: 'Paid Ad Dependency',
        value: '€0 / Month',
        icon: 'percent'
      },
      {
        label: 'Target Audience',
        value: 'High-Value B2B',
        icon: 'users'
      }
    ],
    objective: {
      title: 'The Objective',
      text: 'Establish Shams Consult as the definitive authority across Frankfurt and the Rhine-Main region for public institutions, commercial investors, and private builders searching for architectural design, master planning, and project development.'
    },
    heroImage: {
      src: '/images/shams-consult-architecture-case-study.jpg',
      alt: 'Case Study: Ranking a German Architecture Consultancy #1 on Google - Shams Consult',
      caption: 'Shams Consult · Frankfurt am Main / Rödermark',
      badge: '#1 Organic Google Position'
    },
    sections: [
      {
        number: '01',
        title: 'The Strategy & Execution',
        cards: [
          {
            title: 'Semantic Search Architecture',
            desc: 'Specialized professional queries in Germany are highly specific. We engineered the site’s hierarchy around precise, long-tail phrases like „Architekturbüro für Architektur, Stadtplanung und Projektentwicklung“ rather than generic vanity terms.',
            badge: 'Semantic SEO',
            icon: 'search'
          },
          {
            title: 'Performance-First Engineering',
            desc: 'Developed a lightweight, modern web architecture optimized for instantaneous load times, zero layout shifts, and search engine crawl efficiency.',
            badge: 'Web Performance',
            icon: 'zap'
          },
          {
            title: 'Intent-Driven Information Hierarchy',
            desc: 'Structured service landing paths around three distinct client segments: public authorities, institutional investors, and private developers.',
            badge: 'Information Hierarchy',
            icon: 'users'
          },
          {
            title: 'Authentic Multi-Channel Assets',
            desc: 'Produced targeted short-form video creative showcasing actual site inspections, boardroom strategy sessions, and client handshakes to bridge technical SEO authority with human brand trust.',
            badge: 'Brand Trust',
            icon: 'video'
          }
        ]
      },
      {
        number: '02',
        title: 'The Result',
        quote: 'Shams Consult now holds the #1 spot on Google for core high-intent searches in its sector, generating continuous inbound organic discovery without dependency on paid advertising channels.'
      }
    ],
    cta: {
      title: 'Looking to establish sustainable organic search authority for your firm?',
      buttonText: 'Partner with Nordible',
      secondaryText: 'Explore All Services',
      mobileButtonText: 'Partner with Nordible'
    }
  },
  de: {
    navHome: 'Startseite',
    navBlog: 'Blog',
    navCurrent: 'Fallstudie',
    share: 'Teilen',
    copied: 'Link kopiert',
    badge: 'B2B-SEO-Fallstudie',
    date: 'September 2026',
    readTime: '3 Min. Lesezeit',
    title: 'Fallstudie: Platz 1 bei Google für ein deutsches Architekturbüro',
    client: {
      name: 'Shams Consult',
      location: 'Frankfurt am Main & Rödermark',
      logo: '/images/logos/shams-consult-logo.png',
      link: 'https://shams-consult.de/'
    },
    introParagraphs: [
      'Qualifizierte lokale B2B-Suchanfragen erfordern mehr als oberflächliches Keyword-Targeting. Sie verlangen semantische Präzision, ein einwandfreies technisches Fundament und eine klare Ansprache der Zielgruppe.',
      'So hat Nordible das Büro Shams Consult (Frankfurt am Main / Rödermark) dabei unterstützt, die organische Spitzenposition (Platz 1) bei Google für zentrale Branchensuchbegriffe zu erreichen.'
    ],
    metrics: [
      {
        label: 'Organische Google-Position',
        value: 'Platz 1',
        icon: 'trophy'
      },
      {
        label: 'Werbebudget-Abhängigkeit',
        value: '0 € / Monat',
        icon: 'percent'
      },
      {
        label: 'Zielgruppenfokus',
        value: 'B2B-Entscheider',
        icon: 'users'
      }
    ],
    objective: {
      title: 'Das Ziel',
      text: 'Positionierung von Shams Consult als führende Adresse im Rhein-Main-Gebiet für öffentliche Auftraggeber, gewerbliche Investoren und private Bauherren in den Disziplinen Architektur, Stadtplanung und Projektentwicklung.'
    },
    heroImage: {
      src: '/images/shams-consult-architecture-case-study.jpg',
      alt: 'Fallstudie: Platz 1 bei Google für ein deutsches Architekturbüro - Shams Consult',
      caption: 'Shams Consult · Frankfurt am Main / Rödermark',
      badge: 'Platz 1 bei Google'
    },
    sections: [
      {
        number: '01',
        title: 'Strategie und Umsetzung',
        cards: [
          {
            title: 'Semantische Suchstruktur',
            desc: 'Qualifizierte B2B-Suchanfragen in Deutschland sind hochpräzise. Statt auf unspezifische Massenbegriffe setzten wir auf die exakte semantische Ausrichtung für Begriffe wie „Architekturbüro für Architektur, Stadtplanung und Projektentwicklung“.',
            badge: 'Semantische Suche',
            icon: 'search'
          },
          {
            title: 'Technische Performance',
            desc: 'Entwicklung einer schnellen, modernen Webpräsenz mit minimalen Ladezeiten, stabiler Seitenarchitektur und optimaler Crawlbarkeit für Suchmaschinen.',
            badge: 'Web-Performance',
            icon: 'zap'
          },
          {
            title: 'Zielgruppengerechte Informationsarchitektur',
            desc: 'Klare Strukturierung der Leistungsseiten nach konkreten Kundengruppen: öffentliche Hand, Investoren und Bauherren.',
            badge: 'Informationsarchitektur',
            icon: 'users'
          },
          {
            title: 'Authentischer Content',
            desc: 'Produktion von praxisnahem Video-Content direkt von der Baustelle, aus Beratungsgesprächen und Verhandlungen, um technische Suchmaschinenautorität mit menschlicher Glaubwürdigkeit zu verbinden.',
            badge: 'Markenvertrauen',
            icon: 'video'
          }
        ]
      },
      {
        number: '02',
        title: 'Das Ergebnis',
        quote: 'Shams Consult belegt heute Platz 1 bei Google für entscheidende Kernsuchbegriffe im Zielmarkt und generiert planbare, organische B2B-Anfragen ganz ohne laufende Werbeausgaben.'
      }
    ],
    cta: {
      title: 'Möchten auch Sie die organische Sichtbarkeit und digitale Autorität Ihres Unternehmens ausbauen?',
      buttonText: 'Sprechen Sie mit Nordible',
      secondaryText: 'Alle Leistungen ansehen',
      mobileButtonText: 'Mit Nordible sprechen'
    }
  }
};

const frankfurtSchemaSnippet = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Client Business Name]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Name & No.]",
    "addressLocality": "Frankfurt am Main",
    "postalCode": "[Postal Code]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.1109",
    "longitude": "8.6821"
  },
  "sameAs": [
    "https://www.gelbeseiten.de/...",
    "https://www.linkedin.com/company/..."
  ]
}`;

export const frankfurtPostTranslations: Record<'en' | 'de', ArticleContent> = {
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
    introParagraphs: [
      'When businesses expand or modernize their digital presence in Germany, traditional SEO is no longer the entire playing field. Search has evolved: potential clients, partners, and decision-makers are no longer just typing queries into search bars—they are asking conversational AI engines like ChatGPT, Google Gemini, and Perplexity for direct recommendations.'
    ],
    objective: {
      title: 'Recently at Nordible, we took on the challenge of establishing a complete local and generative presence for our client based in Frankfurt am Main with two core objectives:',
      points: [
        'Dominate local discovery across the core German directory and mapping ecosystems.',
        'Engineer AI discoverability (GEO) so that when an AI model is asked for top regional specialists, our client is directly cited.'
      ]
    },
    heroImage: {
      src: '/images/frankfurt-geo-dominate-ai-search.jpg',
      alt: 'Case Study: How to Dominate AI Search and Local Directory Presence in Frankfurt'
    },
    sections: [
      {
        number: '01',
        title: 'Establishing NAP Consistency Across the German Directory Ecosystem',
        paragraphs: [
          'In Germany, directory data integrity is heavily weighted by both search algorithms and legal standards. Discrepancies in company naming, address formatting, or contact details dilute domain trust and confuse algorithmic indexers.',
          'We unified our client’s NAP (Name, Address, Phone Number) footprint across premier German business directories and citation networks:'
        ],
        cards: [
          {
            title: 'Authoritative German Pillars',
            desc: 'Claimed, verified, and synchronized listings on Gelbe Seiten, Das Örtliche, Das Telefonbuch, and 11880.com.',
            icon: 'building'
          },
          {
            title: 'Regional & Industry Hubs',
            desc: 'Indexed on Meinestadt.de, Cylex Deutschland, and Frankfurt-specific regional citation networks.',
            icon: 'map'
          },
          {
            title: 'B2B Platforms',
            desc: 'Standardized company entity records across LinkedIn, Xing, and Wer liefert was (wlw).',
            icon: 'search'
          },
          {
            title: 'Legal Alignment',
            desc: 'Ensured all directory descriptions and business parameters precisely mirrored statutory Impressum and commercial registration standards.',
            icon: 'shield'
          }
        ]
      },
      {
        number: '02',
        title: 'Unifying the Primary Map Data Feeders',
        paragraphs: [
          'Generative models rely extensively on grounding data pulled from major map ecosystems. We secured and optimized verified listings across the three primary providers:'
        ],
        cards: [
          {
            title: 'Google Business Profile (GBP)',
            badge: 'Search & Gemini',
            desc: 'Configured with precise Frankfurt geo-coordinates, verified service categories, primary business attributes, and regular status updates—feeding both Google Search and Gemini’s real-time local search graphs.',
            icon: 'map'
          },
          {
            title: 'Apple Business Connect',
            badge: 'Maps & Siri',
            desc: 'Fully integrated to ensure seamless surfacing inside Apple Maps, Siri, and Apple Intelligence.',
            icon: 'compass'
          },
          {
            title: 'Bing Places for Business',
            badge: 'Copilot & Bing',
            desc: 'Configured to anchor the entity data directly within Microsoft Copilot and Bing’s enterprise discovery index.',
            icon: 'search'
          }
        ]
      },
      {
        number: '03',
        title: 'Generative Engine Optimization (GEO) & Machine-Readable Architecture',
        paragraphs: [
          "Being listed on directory websites is only half the battle. To be recommended by LLMs, a brand's website must be structured so automated reasoning systems can parse services, credibility, and location without ambiguity.",
          'Instead of relying on basic metadata, we deployed nested JSON-LD Schema directly into the client’s web architecture, mapped exact geographic coordinates, and linked verified third-party entities to validate domain authority.'
        ],
        codeBlock: {
          filename: 'schema-entity.jsonld',
          code: frankfurtSchemaSnippet
        },
        cards: [
          {
            title: 'Robots Policy',
            desc: 'Configured modern crawler rules to openly permit semantic parsing agents (including GPTBot, PerplexityBot, and Google-Extended) while protecting sensitive internal assets.',
            icon: 'bot'
          },
          {
            title: 'llms.txt Standard',
            desc: 'Deployed a standardized lightweight markdown file at /llms.txt summarizing core capabilities, Frankfurt market focus, and contact interfaces for instant ingestion by LLM scrapers.',
            icon: 'sparkles'
          }
        ]
      },
      {
        number: '04',
        title: 'The Result: Built for the Next Era of Discovery',
        paragraphs: [
          'By bridging traditional German business directories with modern Generative Engine Optimization, our client moved from a fragmented web footprint to an authoritative, verifiable local entity.'
        ],
        quote: '„Today, whether a potential customer searches via Google Maps in downtown Frankfurt or queries an AI model for a trusted local partner, our client’s business is positioned at the top of the conversation.“'
      }
    ],
    cta: {
      badge: 'Transform Your Growth',
      title: 'Ready to Dominate Local Search & AI Discovery?',
      desc: "Need to modernize your digital presence, deploy custom web applications, or optimize your business for AI discovery? Let's build digital systems engineered for long-term growth.",
      buttonText: 'Book a Consultation',
      secondaryText: 'Explore Full Portfolio',
      mobileButtonText: 'Book Consultation'
    }
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
    introParagraphs: [
      'Wenn Unternehmen in Deutschland expandieren oder ihre digitale Präsenz modernisieren, reicht traditionelles SEO allein längst nicht mehr aus. Das Suchverhalten hat sich fundamental gewandelt: Interessenten, Geschäftspartner und Entscheider tippen nicht mehr nur isolierte Keywords in Suchmasken – sie befragen dialogbasierte KI-Suchsysteme wie ChatGPT, Google Gemini und Perplexity nach maßgeschneiderten Empfehlungen.'
    ],
    objective: {
      title: 'Vor Kurzem übernahm Nordible die Aufgabe, für unseren Kunden mit Sitz in Frankfurt am Main eine ganzheitliche lokale und generative Webpräsenz aufzubauen – mit zwei Kernzielen:',
      points: [
        'Lokale Auffindbarkeit in den führenden deutschen Branchenverzeichnissen und Kartensystemen dominieren.',
        'Generative Engine Optimization (GEO) gezielt umsetzen, damit KI-Modelle bei regionalen Anfragen unseren Kunden als erste Wahl empfehlen.'
      ]
    },
    heroImage: {
      src: '/images/frankfurt-geo-dominate-ai-search.jpg',
      alt: 'Fallstudie: Wie man KI-Suche und lokale Verzeichnisse in Frankfurt dominiert'
    },
    sections: [
      {
        number: '01',
        title: 'Etablierung lückenloser NAP-Konsistenz im deutschen Verzeichnis-Ökosystem',
        paragraphs: [
          'In Deutschland wird die Konsistenz und Richtigkeit von Verzeichnisdaten von Suchmaschinen und rechtlichen Prüfinstanzen extrem hoch bewertet. Abweichungen bei Firmenbezeichnung, Anschrift oder Rufnummer verwässern das Vertrauen und erschweren die algorithmische Indizierung.',
          'Wir haben die NAP-Identität (Name, Address, Phone Number) unseres Kunden über alle führenden deutschen Verzeichnisse und Bewertungsnetzwerke synchronisiert:'
        ],
        cards: [
          {
            title: 'Führende deutsche Kernportale',
            desc: 'Verifizierte und synchronisierte Profile auf Gelbe Seiten, Das Örtliche, Das Telefonbuch und 11880.com.',
            icon: 'building'
          },
          {
            title: 'Regionale & thematische Portale',
            desc: 'Indizierung auf Meinestadt.de, Cylex Deutschland und regionalen Frankfurter Standortnetzwerken.',
            icon: 'map'
          },
          {
            title: 'B2B- & Branchenplattformen',
            desc: 'Einheitliche Unternehmensdaten auf LinkedIn, Xing und „Wer liefert was“ (wlw).',
            icon: 'search'
          },
          {
            title: 'Rechtssicherheit & Impressum',
            desc: 'Exakte Abstimmung aller Unternehmensangaben mit dem gesetzlichen Impressum und den Handelsregistereinträgen.',
            icon: 'shield'
          }
        ]
      },
      {
        number: '02',
        title: 'Konsolidierung der primären Kartendaten-Lieferanten',
        paragraphs: [
          'Generative KI-Modelle nutzen Kartendienste als primäre Grounding-Datenquelle zur Verifizierung physischer Unternehmen. Wir haben verifizierte Präsenzen bei den drei führenden Plattformen aufgebaut:'
        ],
        cards: [
          {
            title: 'Google Business Profile (GBP)',
            badge: 'Suche & Gemini',
            desc: 'Hinterlegt mit exakten Frankfurter Geokoordinaten, validierten Kategorien und laufenden Updates – speist sowohl Google Maps als auch Geminis Echtzeit-Graphen.',
            icon: 'map'
          },
          {
            title: 'Apple Business Connect',
            badge: 'Karten & Siri',
            desc: 'Vollständig integriert für optimale Sichtbarkeit in Apple Karten, Siri und Apple Intelligence.',
            icon: 'compass'
          },
          {
            title: 'Bing Places for Business',
            badge: 'Copilot & Bing',
            desc: 'Konfiguriert zur direkten Verankerung im Microsoft Copilot- und Bing Enterprise-Index.',
            icon: 'search'
          }
        ]
      },
      {
        number: '03',
        title: 'Generative Engine Optimization (GEO) & maschinenlesbare Architektur',
        paragraphs: [
          'Die Listung in Verzeichnissen ist nur das Fundament. Um von LLMs empfohlen zu werden, muss die Website so strukturiert sein, dass Reasoning-Modelle Leistungen, Reputation und Standort zweifelsfrei interpretieren können.',
          'Statt auf einfache Metatags zu setzen, haben wir mehrdimensionale JSON-LD-Schemas direkt in die Webarchitektur integriert, Geokoordinaten präzisiert und Drittquellen verknüpft.'
        ],
        codeBlock: {
          filename: 'schema-entity.jsonld',
          code: frankfurtSchemaSnippet
        },
        cards: [
          {
            title: 'Robots-Richtlinie',
            desc: 'Moderne Crawler-Regeln erlauben semantischen Indexern (wie GPTBot, PerplexityBot und Google-Extended) den Vollzugriff, während interne Ressourcen geschützt bleiben.',
            icon: 'bot'
          },
          {
            title: 'llms.txt Standard',
            desc: 'Bereitstellung einer standardisierten /llms.txt Datei mit Kernkompetenzen, Frankfurt-Fokus und Kontaktwegen für die direkte LLM-Verarbeitung.',
            icon: 'sparkles'
          }
        ]
      },
      {
        number: '04',
        title: 'Das Ergebnis: Entwickelt für die nächste Ära der Auffindbarkeit',
        paragraphs: [
          'Durch die Verbindung klassischer deutscher Verzeichnisse mit innovativer Generative Engine Optimization entstand eine verifizierbare, hochgradig autoritative lokale Markenpräsenz.'
        ],
        quote: '„Ob ein potenzieller Kunde heute über Google Maps im Frankfurter Bankenviertel sucht oder ein KI-Modell nach einem vertrauenswürdigen lokalen Partner befragt: Unser Kunde wird direkt an erster Stelle empfohlen.“'
      }
    ],
    cta: {
      badge: 'Wachstum gezielt beschleunigen',
      title: 'Bereit, lokale Suche & KI-Auffindbarkeit zu dominieren?',
      desc: 'Möchten Sie Ihre Webpräsenz modernisieren, individuelle Webanwendungen bauen oder Ihr Unternehmen für KI-Suchsysteme rüsten? Lassen Sie uns messbare digitale Ergebnisse erzielen.',
      buttonText: 'Beratungsgespräch vereinbaren',
      secondaryText: 'Portfolio entdecken',
      mobileButtonText: 'Beratung anfragen'
    }
  }
};

export const articlesBySlug: Record<string, Record<'en' | 'de', ArticleContent>> = {
  'shams-consult-google-ranking': shamsPostTranslations,
  'frankfurt-local-seo-ai-discoverability': frankfurtPostTranslations,
};

export const defaultArticleSlug = 'shams-consult-google-ranking';

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
