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

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  explanation?: string;
  businessBenefit?: string;
}

export interface ArticleSection {
  number: string;
  title: string;
  businessTakeaway?: string;
  paragraphs?: string[];
  cards?: ArticleCard[];
  image?: ArticleImage;
  images?: ArticleImage[];
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
    label?: string;
    industry?: string;
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
  heroImage: ArticleImage;
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
        id: 'b2b-seo-case-study-google-page-1',
        slug: 'b2b-seo-case-study-google-page-1',
        title: 'Case Study: Google Page 1 & Regional #1 Positions for an Architecture Firm',
        excerpt: 'How Nordible helped an architecture practice achieve Google Page 1 across primary services, secure selected #1 regional rankings, climb 4 pages in Frankfurt, and win 2 signed clients from inbound calls.',
        category: 'B2B SEO Case Study',
        categorySlug: 'geo',
        readTime: '3 min read',
        date: 'September 2026',
        image: '/images/shams-consult/shams-consult-homepage-hero.png',
        imageAlt: 'Case Study: Google Page 1 & Regional #1 Rankings - Shams Consult',
        tags: ['SEO', 'B2B', 'Architecture', 'Frankfurt', 'Google Page 1', 'Case Study'],
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
        id: 'b2b-seo-case-study-google-page-1',
        slug: 'b2b-seo-case-study-google-page-1',
        title: 'Fallstudie: Google Seite 1 & regionale Spitzenplatzierungen für ein Architekturbüro',
        excerpt: 'Wie Nordible ein deutsches Architekturbüro zu Google Seite 1 für Kernleistungen, ausgewählten regionalen Spitzenplätzen, einem 4-Seiten-Sprung in Frankfurt und 2 festen Neukundenmandaten aus direkten Anrufen verhalf.',
        category: 'B2B-SEO-Fallstudie',
        categorySlug: 'geo',
        readTime: '3 Min. Lesezeit',
        date: 'September 2026',
        image: '/images/shams-consult/shams-consult-homepage-hero.png',
        imageAlt: 'Fallstudie: Google Seite 1 & regionale Spitzenplatzierungen - Shams Consult',
        tags: ['SEO', 'B2B', 'Architektur', 'Frankfurt', 'Google Seite 1', 'Fallstudie'],
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
    badge: 'B2B SEO & UX Case Study',
    date: 'September 2026',
    readTime: '4 min read',
    title: 'Case Study: Scaling an Architecture Firm to Google Page 1 & Regional #1 Positions with Science-Backed UX',
    client: {
      name: 'Shams Consult',
      location: 'Frankfurt am Main & Rödermark',
      label: 'Client & Practice Partner',
      industry: 'Architecture & Urban Planning',
      logo: '/images/logos/shams-consult-logo.png',
      link: 'https://shams-consult.de/'
    },
    introParagraphs: [
      'High-intent local B2B searches require more than superficial keyword stuffing; they demand semantic precision, rock-solid technical performance, cognitive ergonomics, and messaging aligned with high-value commercial intent.',
      'Here is how Nordible helped Shams Consult, an architecture and urban planning consultancy based in Frankfurt am Main and Rödermark, establish Google Page 1 authority across its primary services, secure selected #1 regional rankings, climb 4 full pages in Frankfurt (from Page 7 to Page 3 in 30 days), and convert direct Google search calls into 2 signed client mandates.'
    ],
    metrics: [
      {
        label: 'Google Search Impressions',
        value: '+490%',
        icon: 'trending'
      },
      {
        label: 'Active Users (30 Days)',
        value: '+275% (480)',
        icon: 'users'
      },
      {
        label: 'Signed Client Mandates',
        value: '2 Signed Clients',
        icon: 'trophy'
      }
    ],
    objective: {
      title: 'The Objective',
      text: 'Establish Shams Consult as the definitive authority across Frankfurt and the Rhine-Main region for public institutions, commercial investors, and private builders searching for architectural design, master planning, and project development.'
    },
    heroImage: {
      src: '/images/shams-consult/shams-consult-homepage-hero.png',
      alt: 'Case Study: Scaling an Architecture Firm to Google Page 1 - Shams Consult',
      caption: 'Shams Consult · Frankfurt am Main / Rödermark',
      badge: 'Google Page 1 & Regional #1 Rankings',
      explanation: 'Modern, high-converting digital presence built specifically for property developers, public authorities, and private clients.',
      businessBenefit: 'Establishes instant institutional trust and turns high-net-worth commercial visitors into direct phone consultations.'
    },
    sections: [
      {
        number: '01',
        title: 'The Strategy & Execution',
        businessTakeaway: 'Instead of chasing vague vanity buzzwords, we positioned the firm around the exact high-value terms commercial developers actually search for—backed by instant 1-second page loads.',
        cards: [
          {
            title: 'High-Intent Search Targeting',
            desc: 'Commercial property clients rarely search for just "architect." We engineered the firm\'s website around high-value mandate terms like "Architekturbüro für Stadtplanung und Projektentwicklung" and building permit submissions ("Bauantrag"), capturing serious property developers ready to build.',
            badge: 'Targeted Search',
            icon: 'search'
          },
          {
            title: 'Sub-Second Page Speed',
            desc: '53% of mobile visitors leave if a page takes more than 3 seconds to open. We engineered an ultra-lightweight website that opens in under one second on any phone, keeping prospective clients engaged.',
            badge: 'Fast Loading',
            icon: 'zap'
          },
          {
            title: 'Clear Client Pathways',
            desc: 'Structured the site so institutional investors, municipal city planners, and private building owners each have an immediate, dedicated path to the relevant credentials and past projects.',
            badge: 'Clear Navigation',
            icon: 'users'
          },
          {
            title: 'Real-World Proof & Video',
            desc: 'Short authentic videos and on-site inspection photos demonstrate real engineering mastery and construction authority, transforming anonymous website visits into trusted relationships.',
            badge: 'Client Trust',
            icon: 'video'
          }
        ]
      },
      {
        number: '02',
        title: 'Instant Loading & Science-Backed Mobile Usability',
        businessTakeaway: 'A sub-second load time and thumb-friendly action buttons ensure busy executives never bounce away and can call or message the architects with a single tap.',
        paragraphs: [
          'When busy decision-makers—such as institutional investors or city developers—search for an architectural partner on their phones between meetings, every second of lag hurts business. Google directly penalizes slow websites and rewards pages that load instantly and provide effortless mobile navigation.',
          'We designed the mobile experience around human ergonomics (Fitts’s Law): placing the direct telephone, WhatsApp consultation, and appointment buttons permanently at the bottom of the screen right under the user\'s thumb for effortless, zero-friction contact.'
        ],
        images: [
          {
            src: '/images/shams-consult/lighthouse-overview.png',
            alt: 'Lighthouse Quality Score 92 Performance 100 SEO',
            caption: 'Google Lighthouse Audit: 92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO',
            badge: '100% SEO & Accessibility',
            explanation: 'Google’s official speed and quality diagnostic tool awarding top scores (100/100 in SEO, Accessibility, and Best Practices).',
            businessBenefit: 'Google actively favors top-scoring sites in search rankings, while prospective clients experience instantaneous page loads on any smartphone.'
          },
          {
            src: '/images/shams-consult/lighthouse-audits.png',
            alt: 'Lighthouse Passed Audits',
            caption: 'Passed Audits: 26/26 Accessibility, 4/4 Best Practices, 6/6 SEO, 2/2 Agentic Browsing',
            badge: 'Zero Audit Defects',
            explanation: 'Detailed verification showing that all 38 technical, mobile usability, and search engine crawling audits passed with zero errors.',
            businessBenefit: 'Completely eliminates hidden technical code defects that silently degrade search rankings and cause competitors to rank higher.'
          }
        ]
      },
      {
        number: '03',
        title: 'Search Dominance: +490% Google Impressions & Frankfurt Page 7 → Page 3 Climb',
        businessTakeaway: 'Inbound search visibility quadrupled (+490%) and website clicks tripled (+317%) in just 28 days—all organically without paying for Google Ads.',
        paragraphs: [
          'Within 28 days of launch, Google Search Console registered a +490% surge in how often Shams Consult appeared in Google search results (rising from 505 to 2,980 total impressions) and a +317% jump in qualified organic visitors (from 23 to 96 clicks).',
          'Crucially, in the hyper-competitive Frankfurt am Main metropolitan market, Shams Consult leaped 4 full pages higher—advancing from Page 7 to Page 3 in just 30 days. Across the entire region, the firm\'s average ranking rose to position 9.7, securing prime Google Page 1 visibility for key target services.'
        ],
        images: [
          {
            src: '/images/shams-consult/gsc-performance-impressions-clicks.png',
            alt: 'Google Search Console Impressions and Clicks Growth',
            caption: 'Google Search Console: 2,980 impressions (+490%) and 96 clicks (+317%) with average position 9.7',
            badge: '+490% Impressions Surge',
            explanation: 'Google\'s verified webmaster dashboard showing the practice appeared 2,980 times in search results (+490% increase) in just 28 days.',
            businessBenefit: 'Tripled inbound prospective client visits (96 qualified clicks) organically without spending any budget on paid search advertisements.'
          },
          {
            src: '/images/shams-consult/gsc-top-content-insights.png',
            alt: 'Search Console Top Content Insights',
            caption: 'GSC Insights: Homepage (+160%) and Credentials/About page driving double-digit traffic growth',
            badge: 'Top Organic Content',
            explanation: 'Search traffic analytics confirming that visitors land directly on the firm\'s most persuasive pages: the corporate homepage and executive team profile.',
            businessBenefit: 'Connects serious corporate clients immediately with partner credentials, past achievements, and authorized planning capabilities.'
          }
        ]
      },
      {
        number: '04',
        title: 'Live Google Search Proof: Selected #1 Rankings & First-Page Regional Authority',
        businessTakeaway: 'Live search evidence confirms #1 rankings across key submarkets and commercial cities, plus rapid 4-page momentum in Frankfurt am Main.',
        paragraphs: [
          'Real commercial success comes from honest, verifiable visibility where it matters most. Rather than claiming universal #1 positions, real-world data demonstrates that Shams Consult captures solid first-page dominance across the region, while commanding undisputed #1 rankings in high-intent submarkets and commercial hubs.',
          'Live search verifications confirm #1 organic positions in Wiesbaden, Darmstadt, Hanau, Bad Homburg, Rödermark, Taunus Bauantrag, and Kreis Offenbach, alongside a 4-page climb in the Frankfurt am Main market.'
        ],
        images: [
          {
            src: '/images/shams-consult/google-search-frankfurt-am-main.png',
            alt: 'Google Search Progress - Architekturbüro Frankfurt am Main',
            caption: 'Google Search: "Architekturbüro Frankfurt am Main" → Rapid Climb: Page 7 → Page 3 in 30 Days',
            badge: 'Page 7 → Page 3 (Frankfurt)',
            explanation: 'Live Google search in Germany’s most competitive financial capital showing Shams Consult surging 4 full pages higher in only 30 days.',
            businessBenefit: 'Fast-tracks exposure in Germany\'s most lucrative real estate development market, putting the practice within reach of Page 1 commercial mandates.'
          },
          {
            src: '/images/shams-consult/google-search-wiesbaden.png',
            alt: 'Google Search Rank 1 - Architekturbüro Wiesbaden',
            caption: 'Google Search: "Architekturbüro Wiesbaden" → Shams Consult #1 Organic Rank',
            badge: '#1 in Wiesbaden',
            explanation: 'Live Google search in the Hessian state capital (Wiesbaden) placing Shams Consult at the absolute top of organic results.',
            businessBenefit: 'Captures state government tenders, commercial redevelopments, and prestigious residential projects in the state capital before competitors.'
          },
          {
            src: '/images/shams-consult/google-search-darmstadt.png',
            alt: 'Google Search Rank 1 - Architekturbüro Darmstadt',
            caption: 'Google Search: "Architekturbüro Darmstadt" → Shams Consult #1 Organic Rank',
            badge: '#1 in Darmstadt',
            explanation: 'Live Google search in Darmstadt (southern Rhein-Main science and technology corridor) ranking Shams Consult #1 Organic.',
            businessBenefit: 'Attracts corporate and tech real estate developers commissioning modern office parks, research facilities, and residential quarters.'
          },
          {
            src: '/images/shams-consult/google-search-hanau.png',
            alt: 'Google Search Rank 1 - Architekturbüro Hanau',
            caption: 'Google Search: "Architekturbüro Hanau" → Shams Consult #1 Organic Rank',
            badge: '#1 in Hanau',
            explanation: 'Google search in Hanau (eastern Rhein-Main growth corridor) positioning Shams Consult in the #1 Organic spot.',
            businessBenefit: 'Secures high-value commercial construction, urban infill projects, and municipal master planning contracts in the Hanau district.'
          },
          {
            src: '/images/shams-consult/google-search-bad-homburg.png',
            alt: 'Google Search Rank 1 - Architekt Bad Homburg',
            caption: 'Google Search: "Architekt Bad Homburg" → Shams Consult #1 Organic Rank',
            badge: '#1 in Bad Homburg',
            explanation: 'Google search in Bad Homburg (one of Germany’s wealthiest residential and corporate districts) ranking Shams Consult #1 Organic.',
            businessBenefit: 'Connects directly with high-net-worth private clients and luxury villa renovations where architectural budgets are substantial.'
          },
          {
            src: '/images/shams-consult/google-search-taunus-bauantrag.png',
            alt: 'Google Search Rank 1 - Architekt Taunus Bauantrag',
            caption: 'Google Search: "Architekt Taunus Bauantrag" → Shams Consult #1 Organic Rank',
            badge: '#1 Taunus Bauantrag',
            explanation: 'Search for official building permit applications ("Bauantrag") in the Taunus region, capturing position #1 Organic.',
            businessBenefit: 'Reaches land and property owners who have already acquired real estate and urgently need an authorized architect for legal planning approval.'
          },
          {
            src: '/images/shams-consult/google-search-roedermark.png',
            alt: 'Google Search Rank 1 - Architekt Rödermark',
            caption: 'Google Search: "Architekt Rödermark" → Shams Consult #1 Organic Rank',
            badge: '#1 in Rödermark',
            explanation: 'Google search in the firm\'s headquarters location of Rödermark showing Shams Consult leading all local results at #1.',
            businessBenefit: 'Uncontested local dominance—every local developer, business, or homeowner looking for an architect sees Shams Consult first.'
          },
          {
            src: '/images/shams-consult/google-search-kreis-offenbach.png',
            alt: 'Google Search Rank 1 - Planungsbüro Kreis Offenbach',
            caption: 'Google Search: "Planungsbüro Kreis Offenbach" → Shams Consult #1 Organic Rank',
            badge: '#1 Kreis Offenbach',
            explanation: 'Search for comprehensive master-planning offices across the entire 350,000-resident Kreis Offenbach district, ranking Shams Consult #1.',
            businessBenefit: 'Secures district-wide public zoning, infrastructure planning, and urban development assignments from regional municipalities.'
          }
        ]
      },
      {
        number: '05',
        title: 'GA4 User Engagement & Conversion Funnel (+275% Active Users)',
        businessTakeaway: 'Nearly 500 decision-makers thoroughly investigated the firm, and views of the direct consultation booking page surged by +633%.',
        paragraphs: [
          'Google Analytics 4 recorded 480 active business users (+275.0% increase) and 4,300 total interaction events (+246.7%), with 471 brand new prospective clients discovering the practice.',
          'Traffic quality was exceptionally focused: 303 users originated specifically from Germany (+359.1%), with page views for the Contact & Consultation page multiplying by +633.3%. Organic search sessions surged by +323.8%, supplemented by AI assistant referrals from ChatGPT.'
        ],
        images: [
          {
            src: '/images/shams-consult/ga4-active-users.png',
            alt: 'GA4 Active Users Growth',
            caption: 'GA4 Overview: 480 active users (+275.0%), 4.3k events (+246.7%), 471 new users (+262.3%)',
            badge: '+275% Active Users',
            explanation: 'Google Analytics dashboard tracking 480 active business users performing 4,300 engaged actions (exploring projects, reviewing service scopes).',
            businessBenefit: 'Proves genuine commercial interest—hundreds of potential clients actively evaluate the architects\' portfolio rather than quickly leaving.'
          },
          {
            src: '/images/shams-consult/ga4-pages-countries.png',
            alt: 'GA4 Country and Page Views Breakdown',
            caption: 'Geographic spread: 303 users in Germany (+359.1%); Contact & Consultation page views up +633.3%',
            badge: '+633% Contact Interest',
            explanation: 'Analytics confirming 303 visitors came specifically from Germany, with visits to the direct consultation booking page multiplying sevenfold (+633%).',
            businessBenefit: 'High commercial buying intent—visitors are actively looking for direct phone numbers and office locations to schedule consultations.'
          },
          {
            src: '/images/shams-consult/ga4-acquisition-channels.png',
            alt: 'GA4 Primary Acquisition Channels',
            caption: 'Channel distribution: Organic Search (+323.8%), Direct (+289.5%), Referrals (+650.0%) and AI Assistant sessions',
            badge: 'Organic Search Lead',
            explanation: 'Channel breakdown showing free Google searches (+324%) and direct brand searches (+290%) driving the vast majority of traffic, alongside AI engine mentions.',
            businessBenefit: 'Establishes a predictable, automated pipeline of new business inquiries without ongoing digital marketing or pay-per-click ad expenses.'
          },
          {
            src: '/images/shams-consult/ga4-city-distribution.png',
            alt: 'GA4 Top Cities Distribution',
            caption: 'Top metropolitan areas: Frankfurt am Main (+221.1%), Berlin (+600%), Munster, and Dresden',
            badge: 'Rhein-Main Dominance',
            explanation: 'Metropolitan visitor distribution showing Frankfurt am Main (+221%) as the primary growth engine, alongside investor interest from Berlin and other centers.',
            businessBenefit: 'Channels client interest from the most affluent, development-heavy regions directly into the firm\'s project pipeline.'
          }
        ]
      },
      {
        number: '06',
        title: 'Google Business Profile: Inbound Calls & 2 Signed Client Mandates',
        businessTakeaway: 'Out of 6 call clicks from Google search, 3 connected as in-depth consultations—and 2 became signed, paying clients.',
        paragraphs: [
          'Digital visibility is only meaningful when it generates real commercial revenue. On Google Business Profile, Shams Consult recorded 73 total interactions in September 2026—including 61 navigation requests and 6 website clicks.',
          'The true commercial breakthrough occurred through direct phone inquiries: out of 6 prospective clients who clicked the call button directly from Google search results, 3 connected for comprehensive architectural consultations. From those 3 qualified calls, 2 signed as paying clients—an extraordinary 66.7% close rate that proves the high commercial intent of inbound organic searchers.'
        ],
        images: [
          {
            src: '/images/shams-consult/gbp-total-interactions.png',
            alt: 'Google Business Profile Total Interactions',
            caption: 'Google Business Profile: 73 total interactions in September 2026',
            badge: '73 Total Interactions',
            explanation: 'Google\'s verified local business dashboard recording all user engagement—including phone inquiries, navigation requests, and website clicks.',
            businessBenefit: 'Validates steady local brand engagement and provides clear data on which channels convert directly into paying business.'
          },
          {
            src: '/images/shams-consult/gbp-direction-requests.png',
            alt: 'Google Maps Navigation Requests',
            caption: 'Google Maps: 61 navigation requests',
            badge: '61 Navigation Requests',
            explanation: '61 navigation requests recorded on Google Maps for the office location.',
            businessBenefit: 'Confirms active geographic presence and accurate mapping across Google navigation services.'
          },
          {
            src: '/images/shams-consult/gbp-phone-calls.png',
            alt: 'Direct Calls to Client Conversion: 6 Call Clicks, 3 Calls, 2 Signed Clients',
            caption: 'Direct Calls to Client Conversion: 6 Call Clicks → 3 Calls → 2 Signed Clients',
            badge: '2 Signed Clients (from 3 Calls)',
            explanation: 'Phone call tracking showing 6 call button clicks in Google search, resulting in 3 connected consultations and 2 signed, paying clients.',
            businessBenefit: 'A 66.7% conversion rate from connected phone calls into contracted clients, proving that organic Google search delivers high-ticket buyers ready to sign.'
          },
          {
            src: '/images/shams-consult/gbp-website-clicks.png',
            alt: 'Website Clicks from Business Profile',
            caption: 'Google Maps Website Visits: 6 direct clicks to in-depth credentials',
            badge: 'Direct Profile Clicks',
            explanation: '6 high-intent users clicked directly from the Google Maps knowledge card to inspect portfolio projects and team qualifications.',
            businessBenefit: 'Captures property owners researching local planning offices visually on Google Maps before initiating contact.'
          }
        ]
      },
      {
        number: '07',
        title: 'Technical Integrity, Schema Validation & Backlink Authority',
        businessTakeaway: 'Flawless security, Google-verified 5-star review snippets, and 54 trusted German directory citations permanently protect the firm\'s rankings.',
        paragraphs: [
          'Sustainable search dominance requires rock-solid technical infrastructure and structured data that Google\'s algorithms trust completely. Google Search Console verified 21 valid HTTPS pages with zero security errors, 21 valid Breadcrumbs schemas, and 26 valid Review snippet rich results.',
          'Google detected 0 security issues and 0 manual penalties, while 54 high-authority German business directory backlinks (LinkedIn, Infobel, Regional.de, Cylex, Das Telefonbuch) reinforce domain authority and search resilience.'
        ],
        images: [
          {
            src: '/images/shams-consult/gsc-https-status.png',
            alt: 'GSC 21 Valid HTTPS URLs',
            caption: '100% valid HTTPS indexation across all 21 URLs with 0 critical security issues',
            badge: '21 Valid HTTPS Pages',
            explanation: 'Google verification confirming that all 21 pages are 100% secure, encrypted, and correctly indexed without broken links.',
            businessBenefit: 'Guarantees corporate IT compliance so municipal and institutional clients can safely access the site without corporate firewall blocks.'
          },
          {
            src: '/images/shams-consult/gsc-breadcrumbs-schema.png',
            alt: 'GSC 21 Valid Breadcrumbs Schema',
            caption: '21 valid Schema.org Breadcrumb items indexed with zero validation errors',
            badge: '21 Valid Breadcrumbs',
            explanation: 'Invisible coding tags that teach Google’s search robots the exact structure of services, cities, and planning specializations.',
            businessBenefit: 'Google formats the firm’s search listings with clear sub-category links, increasing credibility and click-through rates.'
          },
          {
            src: '/images/shams-consult/gsc-review-snippets-rich-results.png',
            alt: 'GSC 26 Valid Review Snippets',
            caption: '26 valid Review snippet rich results displayed in Google SERPs for enhanced click-through',
            badge: '26 Rich Review Snippets',
            explanation: 'Search engine markup that displays golden star ratings directly under Shams Consult’s search listings.',
            businessBenefit: 'Visual star ratings dramatically increase click-through rates because decision-makers instinctively trust firms with visible proof.'
          },
          {
            src: '/images/shams-consult/gsc-external-backlinks.png',
            alt: '54 External High-Authority Backlinks',
            caption: '54 authoritative directory links: LinkedIn (11), Infobel (8), Regional.de (7), Cylex (6), Das Telefonbuch (5)',
            badge: '54 Authority Backlinks',
            explanation: '54 verified listings across authoritative German directories like Das Telefonbuch, Regional.de, LinkedIn, and Cylex.',
            businessBenefit: 'Acts as digital endorsements that prove to Google’s algorithm that the firm is a legitimate, established German business.'
          },
          {
            src: '/images/shams-consult/gsc-manual-actions.png',
            alt: 'Google Search Console Manual Actions Clean',
            caption: 'Google Search Console Manual Actions: No issues detected (100% clean standing)',
            badge: '0 Manual Penalties',
            explanation: 'Official confirmation from Google that the website follows all search quality guidelines with zero penalties or spam flags.',
            businessBenefit: 'Provides peace of mind that rankings are built on solid, ethical engineering and will not disappear after future Google updates.'
          },
          {
            src: '/images/shams-consult/gsc-security-status.png',
            alt: 'Google Search Console Security Issues Clean',
            caption: 'Google Search Console Security: No security issues detected',
            badge: '0 Security Defects',
            explanation: 'Continuous automated scanning by Google confirming zero malware, hacking attempts, or security vulnerabilities.',
            businessBenefit: 'Protects brand prestige and guarantees prospective clients will never encounter alarming security warnings.'
          }
        ]
      },
      {
        number: '08',
        title: 'The Result',
        businessTakeaway: 'Sustainable digital authority that translates directly into booked client consultations, without recurring advertising costs.',
        quote: 'Shams Consult now commands strong Google Page 1 visibility across core commercial services, holds selected #1 rankings for high-intent submarket queries, and leaped from Page 7 to Page 3 in Frankfurt am Main in its first 30 days.'
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
    badge: 'B2B-SEO- & UX-Fallstudie',
    date: 'September 2026',
    readTime: '4 Min. Lesezeit',
    title: 'Fallstudie: Google Seite 1 & regionale Spitzenplatzierungen für ein deutsches Architekturbüro durch wissenschaftlich fundierte UX',
    client: {
      name: 'Shams Consult',
      location: 'Frankfurt am Main & Rödermark',
      label: 'Auftraggeber & Praxispartner',
      industry: 'Architektur & Stadtplanung',
      logo: '/images/logos/shams-consult-logo.png',
      link: 'https://shams-consult.de/'
    },
    introParagraphs: [
      'Qualifizierte lokale B2B-Suchanfragen erfordern mehr als oberflächliches Keyword-Targeting. Sie verlangen semantische Präzision, ein einwandfreies technisches Fundament, kognitive Ergonomie und eine klare Ansprache der Zielgruppe.',
      'So hat Nordible das Büro Shams Consult (Frankfurt am Main / Rödermark) dabei unterstützt, Google Seite 1 für Kernleistungen zu sichern, ausgewählte regionale Spitzenpositionen (Platz 1) zu erobern, in Frankfurt in nur 30 Tagen von Seite 7 auf Seite 3 aufzusteigen (+4 Seiten) und direkte Google-Suchanrufe in 2 feste Mandatsabschlüsse zu verwandeln.'
    ],
    metrics: [
      {
        label: 'Google-Suchimpressionen',
        value: '+490%',
        icon: 'trending'
      },
      {
        label: 'Aktive Nutzer (30 Tage)',
        value: '+275% (480)',
        icon: 'users'
      },
      {
        label: 'Gewonnene Mandate',
        value: '2 Neukunden',
        icon: 'trophy'
      }
    ],
    objective: {
      title: 'Das Ziel',
      text: 'Positionierung von Shams Consult als führende Adresse im Rhein-Main-Gebiet für öffentliche Auftraggeber, gewerbliche Investoren und private Bauherren in den Disziplinen Architektur, Stadtplanung und Projektentwicklung.'
    },
    heroImage: {
      src: '/images/shams-consult/shams-consult-homepage-hero.png',
      alt: 'Fallstudie: Google Seite 1 & regionale Spitzenplatzierungen - Shams Consult',
      caption: 'Shams Consult · Frankfurt am Main / Rödermark',
      badge: 'Google Seite 1 & Regionale Spitzenpositionen',
      explanation: 'Moderne, verkaufsstarke Webpräsenz, exakt zugeschnitten auf gewerbliche Bauträger, Kommunen und private Bauherren.',
      businessBenefit: 'Schafft sofortiges Vertrauen bei Entscheidern und wandelt Webseitenbesucher in direkte Beratungsgespräche um.'
    },
    sections: [
      {
        number: '01',
        title: 'Strategie und Umsetzung',
        businessTakeaway: 'Statt unpräzisen Allerweltsbegriffen fokussierten wir uns auf die konkreten Mandatsbegriffe gewerblicher Bauherren – getragen von Ladezeiten unter einer Sekunde.',
        cards: [
          {
            title: 'Gezielte Mandats-Suche',
            desc: 'Gewerbliche Bauherren suchen selten nur nach „Architekt“. Wir bauten die Positionierung um exakte Leistungsbegriffe wie „Architekturbüro für Stadtplanung und Projektentwicklung“ und „Bauantrag“ auf, um kaufbereite Bauherren direkt abzufangen.',
            badge: 'Zielgerichtete Suche',
            icon: 'search'
          },
          {
            title: 'Ladezeiten unter 1 Sekunde',
            desc: '53% aller mobilen Nutzer verlassen eine Website, wenn sie länger als 3 Sekunden lädt. Durch eine hochmoderne, schlanke Programmierung öffnet die Seite auf Smartphones verzögerungsfrei.',
            badge: 'Blitzschnell',
            icon: 'zap'
          },
          {
            title: 'Klare Wege für Entscheider',
            desc: 'Öffentliche Auftraggeber, institutionelle Investoren und private Bauherren finden jeweils mit einem einzigen Klick die für sie relevanten Referenzen, Genehmigungskompetenzen und Projekte.',
            badge: 'Klare Führung',
            icon: 'users'
          },
          {
            title: 'Echte Baustellen-Videos',
            desc: 'Authentische Kurzvideos und Fotos direkt von Bauabnahmen und Verhandlungen belegen handwerkliche und planerische Souveränität – und schaffen sofortiges Vertrauen.',
            badge: 'Glaubwürdigkeit',
            icon: 'video'
          }
        ]
      },
      {
        number: '02',
        title: 'Blitzschnelle Ladezeiten & Ergonomische Smartphone-Bedienung',
        businessTakeaway: 'Ladezeiten unter einer Sekunde und ergonomische Daumen-Buttons stellen sicher, dass mobile Entscheider sofort anrufen, ohne abzuspringen.',
        paragraphs: [
          'Wenn vielbeschäftigte Geschäftsführer und Bauherren unterwegs auf dem Smartphone nach einem Planungsbüro suchen, entscheidet jede Sekunde. Google bestraft langsame Websites im Ranking und belohnt Seiten, die sofort öffnen und ohne Suchen bedient werden können.',
          'Wir haben die Smartphone-Bedienung nach ergonomischen Gesetzen (Fitts’ Law) optimiert: Anruf-, WhatsApp- und Terminbuttons sind dauerhaft am unteren Bildschirmrand fixiert – genau dort, wo der Daumen natürlich ruht.'
        ],
        images: [
          {
            src: '/images/shams-consult/lighthouse-overview.png',
            alt: 'Lighthouse Score 92 Performance 100 SEO',
            caption: 'Google Lighthouse Audit: 92 Leistung, 100 Barrierefreiheit, 100 Best Practices, 100 SEO',
            badge: '100% SEO & Barrierefreiheit',
            explanation: 'Googles offizielles Prüfwerkzeug für Schnelligkeit und Qualität vergibt die Höchstnote (100/100 in SEO, Barrierefreiheit und Best Practices).',
            businessBenefit: 'Google stuft die Website als technisch erstklassig ein und belohnt dies mit besseren Platzierungen; Besucher erleben eine völlig verzögerungsfreie Seite.'
          },
          {
            src: '/images/shams-consult/lighthouse-audits.png',
            alt: 'Lighthouse bestandene Audits',
            caption: 'Bestandene Audits: 26/26 Barrierefreiheit, 4/4 Best Practices, 6/6 SEO, 2/2 KI-Browsing',
            badge: '0 Audit-Fehler',
            explanation: 'Detailbestätigung von Google: Alle 38 Prüfkriterien für fehlerfreien Programmcode, mobile Lesbarkeit und Suchmaschinen-Erfassung wurden makellos bestanden.',
            businessBenefit: 'Schließt verdeckte technische Mängel aus, die Mitbewerber-Websites unbemerkt nach hinten drängen und Besucher kosten.'
          }
        ]
      },
      {
        number: '03',
        title: 'Suchdominanz: +490% Google-Impressionen & Frankfurter Aufstieg von Seite 7 auf 3',
        businessTakeaway: 'Suchsichtbarkeit vervierfacht (+490%) und Klicks verdreifacht (+317%) in 28 Tagen – rein organisch ohne Werbekosten.',
        paragraphs: [
          'Bereits 28 Tage nach dem Relaunch verzeichnete die Google Search Console einen Anstieg der Suchimpressionen um +490% (von 505 auf 2.980) und ein Plus von +317% bei den organischen Klicks (von 23 auf 96).',
          'Besonders eindrucksvoll: Im hart umkämpften Kernmarkt Frankfurt am Main kletterte Shams Consult in nur 30 Tagen von Seite 7 auf Seite 3 (+4 Seiten). Im regionalen Gesamtschnitt verbesserte sich die Position auf 9,7 – und sicherte verlässliche Google-Seite-1-Sichtbarkeit für relevante Suchbegriffe.'
        ],
        images: [
          {
            src: '/images/shams-consult/gsc-performance-impressions-clicks.png',
            alt: 'Google Search Console Impressionen und Klickwachstum',
            caption: 'Google Search Console: 2.980 Impressionen (+490%) und 96 Klicks (+317%) bei Durchschnittsposition 9,7',
            badge: '+490% Impressionen',
            explanation: 'Googles Betreiber-Dashboard zeigt: Die Häufigkeit, mit der das Büro suchenden Kunden angezeigt wurde, sprang in 28 Tagen auf 2.980 (+490%), Klicks stiegen auf 96.',
            businessBenefit: 'Verdreifachte den Zustrom qualifizierter Neukundenanfragen über Google – völlig ohne Budget für bezahlte Google-Werbung auszugeben.'
          },
          {
            src: '/images/shams-consult/gsc-top-content-insights.png',
            alt: 'Search Console Top Content Insights',
            caption: 'GSC Insights: Startseite (+160%) und Profil/Leistungen als stärkste Besuchermagneten',
            badge: 'Top-Content Organisch',
            explanation: 'Suchanalyse belegt: Besucher landen gezielt auf den vertrauensbildenden Seiten – der Startseite und der Qualifikationsübersicht der Architekten.',
            businessBenefit: 'Verbindet interessierte Bauherren sofort mit den Zulassungen, Referenzbauten und der Planungskompetenz des Teams.'
          }
        ]
      },
      {
        number: '04',
        title: 'Live-Google-Suchergebnisse: Ausgewählte Spitzenpositionen & Seite-1-Autorität',
        businessTakeaway: 'Reale Live-Suchergebnisse belegen Platz 1 in wichtigen Städten und eine dynamische 4-Seiten-Aufholjagd in Frankfurt am Main.',
        paragraphs: [
          'Echter geschäftlicher Erfolg beruht auf nachprüfbaren Ergebnissen. Statt pauschaler Werbeversprechen zeigen die Live-Daten: Shams Consult sichert sich in den meisten Zielmärkten starke Seite-1-Präsenz und erobert bei kaufkräftigen Nischensuchbegriffen die unangefochtene Spitzenposition (Platz 1).',
          'Reale Suchnachweise bestätigen Platz-1-Platzierungen in Wiesbaden, Darmstadt, Hanau, Bad Homburg, Rödermark, Taunus Bauantrag und dem Kreis Offenbach, während das Büro in Frankfurt am Main 4 Google-Seiten nach vorne rückte.'
        ],
        images: [
          {
            src: '/images/shams-consult/google-search-frankfurt-am-main.png',
            alt: 'Google-Suche Fortschritt - Architekturbüro Frankfurt am Main',
            caption: 'Google-Suche: „Architekturbüro Frankfurt am Main“ → Dynamischer Aufstieg: Seite 7 → Seite 3 in 30 Tagen',
            badge: 'Seite 7 → Seite 3 (Frankfurt)',
            explanation: 'Live-Google-Suche im hart umkämpften Finanzzentrum Frankfurt am Main: Shams Consult verbesserte sich in nur 30 Tagen um 4 volle Seiten nach vorne.',
            businessBenefit: 'Erschließt den margenstärksten Immobilienmarkt Hessens und rückt in greifbare Reichweite der ersten Seite für Großprojekte.'
          },
          {
            src: '/images/shams-consult/google-search-wiesbaden.png',
            alt: 'Google-Suche Platz 1 - Architekturbüro Wiesbaden',
            caption: 'Google-Suche: „Architekturbüro Wiesbaden“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 in Wiesbaden',
            explanation: 'Google-Suche in der Landeshauptstadt Wiesbaden: Shams Consult steht ganz oben in den unbezahlten Suchtreffern.',
            businessBenefit: 'Sichert das Erstzugriffsrecht auf Landesbauausschreibungen, institutionelle Projekte und gehobene Privatbauten in der Landeshauptstadt.'
          },
          {
            src: '/images/shams-consult/google-search-darmstadt.png',
            alt: 'Google-Suche Platz 1 - Architekturbüro Darmstadt',
            caption: 'Google-Suche: „Architekturbüro Darmstadt“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 in Darmstadt',
            explanation: 'Google-Suche in der Wissenschaftsstadt Darmstadt: Shams Consult belegt die Spitzenposition.',
            businessBenefit: 'Gewinnt Technologieunternehmen und gewerbliche Entwickler, die moderne Büro-, Labor- und Neubauprojekte vergeben.'
          },
          {
            src: '/images/shams-consult/google-search-hanau.png',
            alt: 'Google-Suche Platz 1 - Architekturbüro Hanau',
            caption: 'Google-Suche: „Architekturbüro Hanau“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 in Hanau',
            explanation: 'Google-Suche in der Wachstumsregion Hanau: Shams Consult führt die Suchergebnisse an.',
            businessBenefit: 'Eröffnet den direkten Draht zu Gewerbeansiedlungen, städtebaulichen Planungen und Bauvorhaben im Main-Kinzig-Raum.'
          },
          {
            src: '/images/shams-consult/google-search-bad-homburg.png',
            alt: 'Google-Suche Platz 1 - Architekt Bad Homburg',
            caption: 'Google-Suche: „Architekt Bad Homburg“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 in Bad Homburg',
            explanation: 'Google-Suche in einer der vermögendsten Städte Deutschlands: Shams Consult steht auf Platz 1.',
            businessBenefit: 'Zieht kaufkräftige private Bauherren und anspruchsvolle Villensanierungen mit überdurchschnittlich hohen Projektbudgets an.'
          },
          {
            src: '/images/shams-consult/google-search-taunus-bauantrag.png',
            alt: 'Google-Suche Platz 1 - Architekt Taunus Bauantrag',
            caption: 'Google-Suche: „Architekt Taunus Bauantrag“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 Taunus Bauantrag',
            explanation: 'Gezielte Suche nach Baugenehmigungen („Bauantrag“) im Taunus mit Shams Consult auf Platz 1.',
            businessBenefit: 'Erreicht Bauherren mit sofortiger Handlungsabsicht, die bereits Grundstücke besitzen und dringend einen Architekten für Genehmigungsanträge benötigen.'
          },
          {
            src: '/images/shams-consult/google-search-roedermark.png',
            alt: 'Google-Suche Platz 1 - Architekt Rödermark',
            caption: 'Google-Suche: „Architekt Rödermark“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 in Rödermark',
            explanation: 'Google-Suche am Kanzleisitz Rödermark: Shams Consult dominiert das lokale Suchfeld auf Platz 1.',
            businessBenefit: 'Vollständige lokale Marktführerschaft: Jeder Bauinteressierte, Gewerbetreibende und Kommunalvertreter stößt sofort auf das Büro.'
          },
          {
            src: '/images/shams-consult/google-search-kreis-offenbach.png',
            alt: 'Google-Suche Platz 1 - Planungsbüro Kreis Offenbach',
            caption: 'Google-Suche: „Planungsbüro Kreis Offenbach“ → Shams Consult Platz 1 organisch',
            badge: 'Platz 1 Kreis Offenbach',
            explanation: 'Google-Suche für Planungsbüros im gesamten Landkreis Offenbach (350.000 Einwohner): Shams Consult steht an der Spitze.',
            businessBenefit: 'Ermöglicht den Zuschlag für kreisweite Rahmenplanungen, Bebauungspläne und städtebauliche Gutachten kommunaler Träger.'
          }
        ]
      },
      {
        number: '05',
        title: 'GA4-Nutzerinteraktion & Conversion-Trichter (+275% aktive Nutzer)',
        businessTakeaway: 'Fast 500 Entscheider prüften das Büro im Detail, und die Aufrufe der direkten Beratungsseite stiegen um +633%.',
        paragraphs: [
          'Google Analytics 4 erfasste 480 aktive Nutzer (+275,0%) und 4.300 Interaktionsereignisse (+246,7%), wobei 471 Erstbesucher gewonnen wurden.',
          'Die Zielgruppenqualität überzeugte: 303 Nutzer kamen direkt aus Deutschland (+359,1%), während die Seitenaufrufe für die Kontakt- und Beratungsseite um +633,3% explodierten. Der organische Suchkanal wuchs um +323,8%, ergänzt durch KI-Verweise über ChatGPT.'
        ],
        images: [
          {
            src: '/images/shams-consult/ga4-active-users.png',
            alt: 'GA4 Aktive Nutzer Zuwachs',
            caption: 'GA4 Übersicht: 480 aktive Nutzer (+275,0%), 4.300 Ereignisse (+246,7%), 471 neue Nutzer (+262,3%)',
            badge: '+275% Aktive Nutzer',
            explanation: 'Google Analytics erfasst 480 geschäftliche Nutzer, die 4.300 gezielte Aktionen (Projekte durchsehen, Leistungsbeschreibungen lesen) durchführten.',
            businessBenefit: 'Belegt echtes geschäftliches Interesse: Kaufkräftige Interessenten prüfen die Referenzen sorgfältig, statt die Seite gleich zu verlassen.'
          },
          {
            src: '/images/shams-consult/ga4-pages-countries.png',
            alt: 'GA4 Länder- und Seitenaufrufe',
            caption: 'Geografische Verteilung: 303 Nutzer aus Deutschland (+359,1%); Aufrufe der Kontaktseite um +633,3% gestiegen',
            badge: '+633% Kontakt-Interesse',
            explanation: 'Bestätigt, dass 303 Besucher gezielt aus Deutschland stammen und die Aufrufe der Kontakt- und Beratungsseite um das Siebenfache stiegen.',
            businessBenefit: 'Hohe Kaufabsicht: Besucher suchen gezielt nach Telefonnummern, Ansprechpartnern und Adressdaten für eine Erstberatung.'
          },
          {
            src: '/images/shams-consult/ga4-acquisition-channels.png',
            alt: 'GA4 Akquisitionskanäle',
            caption: 'Kanalverteilung: Organische Suche (+323,8%), Direktzugriffe (+289,5%), Verweise (+650,0%) und KI-Assistenten',
            badge: 'Organische Führung',
            explanation: 'Kanalübersicht zeigt: Unbezahlte Google-Suchen (+324%) und gezielte Namenssuchen (+290%) treiben den Großteil des Verkehrs an, ergänzt durch Empfehlungen in ChatGPT.',
            businessBenefit: 'Schafft einen verlässlichen Strom an Neukundenanfragen, der völlig unabhängig von laufenden Werbebudgets funktioniert.'
          },
          {
            src: '/images/shams-consult/ga4-city-distribution.png',
            alt: 'GA4 Städteverteilung',
            caption: 'Führende Städte: Frankfurt am Main (+221,1%), Berlin (+600%), Münster und Dresden',
            badge: 'Rhein-Main Fokus',
            explanation: 'Herkunftsanalyse zeigt Frankfurt (+221%) als stärksten Besuchertreiber, gefolgt von Investoreninteresse aus Metropolen wie Berlin (+600%).',
            businessBenefit: 'Bündelt die Aufmerksamkeit solventer Auftraggeber aus baustarken Regionen direkt im Terminkalender des Architekturbüros.'
          }
        ]
      },
      {
        number: '06',
        title: 'Google Unternehmensprofil: Direktanrufe & 2 gewonnene Mandate',
        businessTakeaway: 'Von 6 Anrufklicks aus der Google-Suche führten 3 zu ausführlichen Erstgesprächen – und daraus wurden 2 feste Mandatsabschlüsse erzielt.',
        paragraphs: [
          'Digitale Reichweite entfaltet ihren Wert erst im echten Geschäftsleben. Im Google Unternehmensprofil verzeichnete Shams Consult im September 2026 insgesamt 73 Interaktionen – darunter 61 Navigationsanfragen sowie 6 Website-Klicks.',
          'Der eigentliche geschäftliche Durchbruch entstand über die Direktanrufe: Von 6 Interessenten, die direkt aus der Google-Trefferliste auf den Anruf-Button klickten, führten 3 ein fundiertes Erstberatungsgespräch mit den Architekten. Aus diesen 3 qualifizierten Gesprächen wurden 2 feste Mandate gewonnen – eine bemerkenswerte Abschlussquote von 66,7%, die die hohe Zahlungsbereitschaft der Anfragenden unterstreicht.'
        ],
        images: [
          {
            src: '/images/shams-consult/gbp-total-interactions.png',
            alt: 'Google Unternehmensprofil Gesamte Interaktionen',
            caption: 'Google Unternehmensprofil: 73 Interaktionen im September 2026',
            badge: '73 Interaktionen',
            explanation: 'Googles offizielles Dashboard erfasst alle Profilinteraktionen – von Direktanrufen über Navigationsanfragen bis zu Website-Klicks.',
            businessBenefit: 'Belegt die kontinuierliche lokale Markenpräsenz und zeigt genau, über welche Kanäle echte Neukunden gewonnen werden.'
          },
          {
            src: '/images/shams-consult/gbp-direction-requests.png',
            alt: 'Google Maps Navigationsanfragen',
            caption: 'Google Maps: 61 Navigationsanfragen',
            badge: '61 Navigationsanfragen',
            explanation: '61 Navigationsanfragen für den Standort auf Google Maps erfasst.',
            businessBenefit: 'Sichert die einwandfreie Auffindbarkeit des Standorts in Navigationssystemen und Kartendiensten.'
          },
          {
            src: '/images/shams-consult/gbp-phone-calls.png',
            alt: 'Telefonanrufe mit Mandatsabschluss: 6 Klicks, 3 Telefonate, 2 feste Mandate',
            caption: 'Telefonanrufe mit Mandatsabschluss: 6 Klicks → 3 Telefonate → 2 feste Mandate',
            badge: '2 Mandate (aus 3 Telefonaten)',
            explanation: 'Anruftracking belegt 6 Klicks auf den Anruf-Button, woraus 3 ausführliche Beratungsgespräche und 2 feste Neukundenmandate entstanden.',
            businessBenefit: 'Eine Abschlussquote von 66,7% bei geführten Telefonaten beweist, dass organische Google-Suchen kaufbereite Bauherren direkt zum Abschluss führen.'
          },
          {
            src: '/images/shams-consult/gbp-website-clicks.png',
            alt: 'Website-Klicks aus Unternehmensprofil',
            caption: 'Website-Klicks aus Google Maps: 6 Zugriffe auf Referenzen und Team',
            badge: 'Lokale Klicks',
            explanation: '6 qualifizierte Nutzer wechselten von Google Maps direkt auf die Website, um Bauprojekte und Referenzen genauer zu prüfen.',
            businessBenefit: 'Gewinnt gewerbliche Auftraggeber, die Architekturbüros bevorzugt über interaktive Karten suchen und vergleichen.'
          }
        ]
      },
      {
        number: '07',
        title: 'Technische Integrität, strukturierte Daten & Backlink-Autorität',
        businessTakeaway: 'Einwandfreie Sicherheit, geprüfte 5-Sterne-Rezensionen in Google und 54 vertrauenswürdige Branchenbucheinträge schützen die Spitzenplätze dauerhaft.',
        paragraphs: [
          'Dauerhafter Spitzenplatz bei Google setzt saubere Indexierung und Schema-Markup voraus. Die Google Search Console bestätigte 21 fehlerfreie HTTPS-Seiten ohne Warnungen, 21 valide Breadcrumb-Schemata und 26 geprüfte Rezensions-Rich-Snippets.',
          'Google meldete 0 Sicherheitswarnungen und 0 manuelle Maßnahmen. Gleichzeitig stärken 54 hochwertige deutsche Branchenbucheinträge (LinkedIn, Infobel, Regional.de, Cylex, Das Telefonbuch) das Domainvertrauen nachhaltig.'
        ],
        images: [
          {
            src: '/images/shams-consult/gsc-https-status.png',
            alt: 'GSC 21 valide HTTPS URLs',
            caption: '100% valide HTTPS-Indexierung über alle 21 Seiten mit 0 kritischen Fehlern',
            badge: '21 valide HTTPS-Seiten',
            explanation: 'Google bestätigt, dass sämtliche 21 Seiten sicher verschlüsselt sind und fehlerfrei ohne tote Links ausgeliefert werden.',
            businessBenefit: 'Erfüllt strenge Sicherheitsstandards für öffentliche Auftraggeber und verhindert Warnmeldungen in Firmennetzwerken.'
          },
          {
            src: '/images/shams-consult/gsc-breadcrumbs-schema.png',
            alt: 'GSC 21 valide Breadcrumbs Schema',
            caption: '21 fehlerfreie Schema.org-Breadcrumb-Elemente von Google indexiert',
            badge: '21 valide Breadcrumbs',
            explanation: 'Spezielle Code-Auszeichnungen, die Google die genaue Struktur der Leistungsbereiche und Standorte übermitteln.',
            businessBenefit: 'Google zeigt strukturierte Unterkategorien direkt in der Trefferliste an, was das Suchergebnis deutlich professioneller wirken lässt.'
          },
          {
            src: '/images/shams-consult/gsc-review-snippets-rich-results.png',
            alt: 'GSC 26 Rezensions-Snippets',
            caption: '26 geprüfte Rezensions-Rich-Snippets für maximale Klickrate in den Suchergebnissen',
            badge: '26 Rich Snippets',
            explanation: 'Spezielle Auszeichnung, die goldene Sterne-Bewertungen direkt unter dem Google-Suchergebnis anzeigt.',
            businessBenefit: 'Sichtbare Kundenbewertungen verdoppeln die Klickrate, da Vertrauen und Qualität auf den ersten Blick erkennbar sind.'
          },
          {
            src: '/images/shams-consult/gsc-external-backlinks.png',
            alt: '54 externe Verzeichnis-Backlinks',
            caption: '54 vertrauenswürdige Backlinks: LinkedIn (11), Infobel (8), Regional.de (7), Cylex (6), Das Telefonbuch (5)',
            badge: '54 Backlinks',
            explanation: '54 verifizierte Einträge in führenden deutschen Portalen wie Das Telefonbuch, Regional.de, LinkedIn und Cylex.',
            businessBenefit: 'Wirken wie digitale Empfehlungsschreiben, die Google signalisieren, dass es sich um ein etabliertes, seriöses Unternehmen handelt.'
          },
          {
            src: '/images/shams-consult/gsc-manual-actions.png',
            alt: 'GSC Manuelle Maßnahmen fehlerfrei',
            caption: 'Google Search Console Manuelle Maßnahmen: Keine Probleme erkannt',
            badge: '0 Abstrafungen',
            explanation: 'Offizielle Bestätigung von Google, dass alle Richtlinien für Suchqualität eingehalten werden – ganz ohne Tricks oder Abstrafungen.',
            businessBenefit: 'Gibt langfristige Planungssicherheit: Die Rankings bleiben auch bei zukünftigen Google-Updates stabil und geschützt.'
          },
          {
            src: '/images/shams-consult/gsc-security-status.png',
            alt: 'GSC Sicherheitsstatus einwandfrei',
            caption: 'Google Search Console Sicherheit: Keine Sicherheitsprobleme erkannt',
            badge: '0 Sicherheitsmängel',
            explanation: 'Kontinuierliche Sicherheitsprüfung von Google bestätigt: Keine Schadsoftware, Hacking-Versuche oder Sicherheitslücken.',
            businessBenefit: 'Schützt das Renommee des Büros und stellt sicher, dass Interessenten stets auf eine vertrauenswürdige Website gelangen.'
          }
        ]
      },
      {
        number: '08',
        title: 'Das Ergebnis',
        businessTakeaway: 'Nachhaltige digitale Sichtbarkeit, die direkt in konkrete Beratungsgespräche mündet – ganz ohne dauerhafte Werbekosten.',
        quote: 'Shams Consult verfügt heute über eine starke Google-Seite-1-Präsenz für Kernleistungen, hält ausgewählte Spitzenpositionen (Platz 1) bei gezielten Nischensuchen und kletterte in Frankfurt am Main in den ersten 30 Tagen von Seite 7 auf Seite 3.'
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
  'b2b-seo-case-study-google-page-1': shamsPostTranslations,
  'shams-consult-google-ranking': shamsPostTranslations,
  'frankfurt-local-seo-ai-discoverability': frankfurtPostTranslations,
};

export const defaultArticleSlug = 'b2b-seo-case-study-google-page-1';

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
