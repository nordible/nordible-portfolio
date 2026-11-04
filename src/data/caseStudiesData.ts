import type { ArticleContent, BlogPostItem } from './blogContent';
import { portfolioProjects } from './portfolioProjects';

type Lang = 'en' | 'de';

function createCaseStudyArticle(projectId: string): Record<Lang, ArticleContent> | null {
  const project = portfolioProjects.find((p) => p.id === projectId);
  if (!project) return null;

  if (projectId === 'nordible-directory') {
    const enDirectoryArticle: ArticleContent = {
      navHome: 'Home',
      navBlog: 'Case Studies',
      navCurrent: project.title,
      share: 'Share Case Study',
      copied: 'Link copied to clipboard',
      badge: project.badge.en,
      date: 'Community Platform',
      readTime: '3 min read',
      title: project.heroHeadline.en,
      topRibbon: {
        boldText: 'Business Owner:',
        subtitle: 'List your business for free with 0% commission on our open directory.',
        buttonText: 'Join Free Directory →',
        action: 'link',
        link: 'http://business-directory.nordible.co/',
      },
      client: {
        name: 'Nordible Community Initiative',
        industry: 'Free Business Directory',
        link: 'http://business-directory.nordible.co/',
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.en,
        'We believe that business technology should create opportunities, not tollbooths. http://business-directory.nordible.co/ was launched to give every legitimate enterprise, tradesperson, and professional consultant fair visibility without paying predatory commission fees.',
      ],
      objective: {
        title: 'Mission & Community Value',
        text: 'Eliminate expensive middleman commissions and help businesses gain authentic, direct client inquiries and AI search discoverability.',
        points: project.businessChallenge.en,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Free Global Business Directory`,
        badge: 'Free to Use',
        caption: 'Connecting verified businesses directly with clients and AI search engines.',
        businessBenefit: '0% commission on all deals and inquiries',
      },
      sections: [
        {
          number: '01',
          title: 'The Challenge: Predatory Broker Fees and Paywalled Leads',
          businessTakeaway: 'When third-party aggregator portals charge 15%–30% commissions or sell €50 leads to 5 competitors at once, small business margins are decimated.',
          paragraphs: [
            'Traditional online business directories and lead brokers force business owners into costly bidding wars just to receive basic customer inquiries.',
            'Furthermore, as business buyers shift toward conversational AI engines like ChatGPT and Perplexity to source verified service providers, traditional directory listings with unstructured HTML are completely skipped by AI crawlers.',
          ],
          cards: [
            {
              title: '0% Hidden Take-Rates',
              desc: 'No middleman cuts on your contracts. What you earn from clients is 100% yours.',
              badge: 'Fair Commerce',
              icon: 'shield',
            },
            {
              title: 'Direct Client Relations',
              desc: 'Customers contact you directly through phone, WhatsApp, and email—no gatekeepers.',
              badge: 'Direct Contact',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'The Solution: An Agentic, Free, and Open-Source B2B Platform',
          businessTakeaway: 'Built on three viral pillars: Agentic AI discoverability, Free access with 0% commission, and full Open-Source transparency.',
          paragraphs: [
            'Nordible engineered http://business-directory.nordible.co/ to provide a fair, public marketplace. Any legitimate company can claim their profile, display verified services, and receive customer inquiries directly.',
            'Every listing is automatically formatted with Schema.org entity graphs, making the platform natively agentic so modern search crawlers and AI answer engines (ChatGPT, Perplexity, Gemini) can index and recommend businesses directly.',
          ],
          cards: [
            {
              title: 'Agentic AI Discovery',
              desc: 'Structured entity graphs allow autonomous AI agents and LLMs to recommend verified listings.',
              badge: 'Agentic AI',
              icon: 'sparkles',
            },
            {
              title: 'Free to Use',
              desc: 'Free to join, free to list, and free to receive direct customer messages with 0% commission.',
              badge: 'Free',
              icon: 'zap',
            },
            {
              title: 'Open Source Transparency',
              desc: 'Permissive MIT open-source codebase published on GitHub for worldwide community use.',
              badge: 'Open Source',
              icon: 'shield',
            },
          ],
        },
        {
          number: '03',
          title: 'Direct Economic Value for Business Owners',
          businessTakeaway: 'Saving thousands in ad spend and broker cuts while building enduring brand credibility.',
          paragraphs: [
            'By listing in the directory, businesses bypass expensive pay-per-click ads and broker commissions.',
            'Key advantages include 0% commission fees, 100% direct customer inquiries via WhatsApp and phone, and official verification badges that build immediate buyer trust.',
          ],
          quote: 'Technology should empower small businesses to connect directly with their customers, not extract toll fees on every relationship.',
        },
        {
          number: '04',
          title: 'Open Source Transparency & GitHub Repository',
          businessTakeaway: 'We prioritize practical business impact over technical jargon. The entire platform source code is transparently public.',
          paragraphs: [
            'We don’t hide behind complex tech jargon. The complete source code of the business directory is open-source and freely available on GitHub for the community to inspect, customize, and self-host.',
            'Explore the open-source repository on GitHub: https://github.com/nordible/business-directory',
          ],
          cards: [
            {
              title: 'Open Source on GitHub',
              desc: 'Inspect or contribute to the complete codebase at https://github.com/nordible/business-directory.',
              badge: 'GitHub Repository',
              icon: 'bot',
            },
            {
              title: 'Community First',
              desc: 'Built transparently to support entrepreneurship and open web discovery worldwide.',
              badge: 'Transparency',
              icon: 'sparkles',
            },
          ],
        },
      ],
      cta: {
        badge: 'Free Directory Listing & Platform Development',
        title: 'Add Your Business to http://business-directory.nordible.co/ or Build a Custom B2B Platform',
        desc: 'Join the free global business directory to receive direct client inquiries with 0% commission, or consult with Nordible to architect bespoke marketplace platforms.',
        buttonText: 'Discuss Platform Architecture',
        buttonAction: 'consultation',
        secondaryText: 'Open Free Directory →',
        secondaryLink: 'http://business-directory.nordible.co/',
        mobileButtonText: 'Book Platform Call',
      },
    };

    const deDirectoryArticle: ArticleContent = {
      navHome: 'Startseite',
      navBlog: 'Fallstudien',
      navCurrent: project.title,
      share: 'Fallstudie teilen',
      copied: 'Link in die Zwischenablage kopiert',
      badge: project.badge.de,
      date: 'Förderinitiative',
      readTime: '3 Min. Lesezeit',
      title: project.heroHeadline.de,
      topRibbon: {
        boldText: 'Unternehmer:',
        subtitle: 'Tragen Sie Ihren Betrieb kostenfrei und ohne Provision in unser Verzeichnis ein.',
        buttonText: 'Kostenlos eintragen →',
        action: 'link',
        link: 'http://business-directory.nordible.co/',
      },
      client: {
        name: 'Nordible Initiative für Unternehmen',
        industry: 'Kostenfreies Branchenverzeichnis',
        link: 'http://business-directory.nordible.co/',
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.de,
        'Wir sind überzeugt, dass Unternehmenstechnologie Chancen eröffnen muss, anstatt Mautgebühren zu kassieren. Mit http://business-directory.nordible.co/ schaffen wir eine offene Anlaufstelle, damit seriöse Handwerker, Berater und Betriebe ohne Provisionsabgaben von echten Kunden gefunden werden.',
      ],
      objective: {
        title: 'Mission & Nutzen für Betriebe',
        text: 'Beseitigung überteuerter Vermittlungsgebühren und Schaffung direkter Kundenkontakte sowie Auffindbarkeit in modernen KI-Suchen.',
        points: project.businessChallenge.de,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.labelDe || m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Kostenfreies internationales B2B-Verzeichnis`,
        badge: 'Kostenfrei',
        caption: 'Verbindet verifizierte Betriebe direkt mit Kunden und KI-Suchmaschinen.',
        businessBenefit: '0 % Provision auf alle Aufträge und Kundenanfragen',
      },
      sections: [
        {
          number: '01',
          title: 'Das Problem: Teure Vermittler und Gebührenfallen',
          businessTakeaway: 'Wenn Portale 15 % bis 30 % Vermittlungsprovision fordern oder Leads für 50 € mehrfach verkaufen, leidet die Marge des Betriebs massiv.',
          paragraphs: [
            'Herkömmliche Handwerker- und Dienstleisterportale zwingen Unternehmen in kostspielige Bieterkämpfe, um überhaupt Kundenanfragen zu erhalten.',
            'Gleichzeitig recherchieren Unternehmenskunden Partner zunehmend über KI-Assistenten wie ChatGPT oder Perplexity. Veraltete Verzeichnisse mit unstrukturiertem HTML werden von KI-Systemen jedoch ignoriert.',
          ],
          cards: [
            {
              title: '0 % Provision',
              desc: 'Keine Beteiligung an Ihren Umsätzen. Was Sie erwirtschaften, gehört zu 100 % Ihnen.',
              badge: 'Fairer Wettbewerb',
              icon: 'shield',
            },
            {
              title: 'Direkter Draht',
              desc: 'Kunden kontaktieren Sie direkt per Telefon, WhatsApp oder E-Mail – ohne Sperren.',
              badge: 'Direktkontakt',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'Die Lösung: Eine agentische, kostenfreie und quelloffene B2B-Plattform',
          businessTakeaway: 'Drei Kernpfeiler für maximale Wirkung: Agentic KI-Auffindbarkeit, kostenfrei ohne Provision und volle Open-Source-Transparenz.',
          paragraphs: [
            'Nordible hat http://business-directory.nordible.co/ ins Leben gerufen, um einen fairen, öffentlichen Marktplatz zu schaffen. Jedes geprüfte Unternehmen kann sein Profil kostenfrei eintragen und Kundenanfragen direkt empfangen.',
            'Jeder Eintrag wird semantisch aufbereitet, wodurch die Plattform nativ agentisch arbeitet: Moderne KI-Suchmaschinen (ChatGPT, Perplexity, Gemini) können Betriebe bei passenden Kundenfragen direkt zitieren und empfehlen.',
          ],
          cards: [
            {
              title: 'Agentische KI-Sichtbarkeit',
              desc: 'Strukturierte Entitätsdaten ermöglichen autonomen KI-Agenten das direkte Auffinden und Empfehlen.',
              badge: 'Agentic AI',
              icon: 'sparkles',
            },
            {
              title: 'Kostenfrei',
              desc: 'Kostenlose Registrierung, dauerhafter Eintrag und 0 % Vermittlungsgebühren.',
              badge: 'Kostenfrei',
              icon: 'zap',
            },
            {
              title: 'Open Source auf GitHub',
              desc: 'Vollständiger quelloffener Code für die globale Community unter freier MIT-Lizenz.',
              badge: 'Open Source',
              icon: 'shield',
            },
          ],
        },
        {
          number: '03',
          title: 'Echter Mehrwert: 100 % des Umsatzes bleibt beim Betrieb',
          businessTakeaway: 'Tausende Euro an Werbekosten und Vermittlerabgaben sparen und gleichzeitig Vertrauen aufbauen.',
          paragraphs: [
            'Durch den Eintrag im Verzeichnis sparen Unternehmen teure Klickpreise bei Google Ads und Provisionsabgaben an Portale.',
            'Der offizielle Verifizierungs-Check schützt vor Fakeprofilen und signalisiert potenziellen Kunden sofortige Seriosität.',
          ],
          quote: 'Technologie muss Betriebe stärken, anstatt bei jeder Kundenbeziehung mitzukassieren.',
        },
        {
          number: '04',
          title: 'Open Source & Transparenz: Quellcode auf GitHub',
          businessTakeaway: 'Wir stellen den echten geschäftlichen Nutzen über Fachchinesisch. Der vollständige Code ist öffentlich einsehbar.',
          paragraphs: [
            'Wir verstecken uns nicht hinter kompliziertem technischem Kauderwelsch. Der gesamte Quellcode des Verzeichnisses ist quelloffen und frei auf GitHub verfügbar.',
            'Den vollständigen Open-Source-Code finden Sie auf GitHub: https://github.com/nordible/business-directory',
          ],
          cards: [
            {
              title: 'GitHub Repository',
              desc: 'Vollständiger Quellcode auf GitHub unter https://github.com/nordible/business-directory.',
              badge: 'GitHub Code',
              icon: 'bot',
            },
            {
              title: 'Echte Offenheit',
              desc: 'Transparenz für Unternehmer und weltweite Community-Entwicklung.',
              badge: 'Transparenz',
              icon: 'sparkles',
            },
          ],
        },
      ],
      cta: {
        badge: 'Kostenloses Verzeichnis & Plattform-Entwicklung',
        title: 'Tragen Sie Ihr Unternehmen ein oder bauen Sie Ihre eigene B2B-Plattform',
        desc: 'Erhalten Sie direkte Kundenanfragen mit 0 % Provision oder besprechen Sie mit Nordible die Konzeption individueller Verzeichnis- und Plattformlösungen.',
        buttonText: 'Plattform-Architektur anfragen',
        buttonAction: 'consultation',
        secondaryText: 'Zum kostenlosen Verzeichnis →',
        secondaryLink: 'http://business-directory.nordible.co/',
        mobileButtonText: 'Plattform-Beratung',
      },
    };

    return { en: enDirectoryArticle, de: deDirectoryArticle };
  }

  if (projectId === 'invoice-generator') {
    const enInvoiceArticle: ArticleContent = {
      navHome: 'Home',
      navBlog: 'Case Studies',
      navCurrent: project.title,
      share: 'Share Case Study',
      copied: 'Link copied to clipboard',
      badge: project.badge.en,
      date: 'Open Source Product',
      readTime: '3 min read',
      title: project.heroHeadline.en,
      topRibbon: {
        boldText: 'Tech & Business Leader:',
        subtitle: 'Need custom, privacy-first software or AI agent workflows for your company?',
        buttonText: 'Schedule Strategy Call →',
        action: 'consultation',
      },
      client: {
        name: 'Nordible Open Source Platform',
        industry: 'Privacy-First Invoicing & MCP Server',
        link: 'https://free-invoice-generator.nordible.co',
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.en,
        'Nordible Free Invoice Generator was created to solve a widespread problem in business software: simple invoicing tools forcing businesses into expensive monthly subscriptions, locking documents behind watermarks, and storing sensitive customer pricing on external databases. We engineered a modern, zero-database alternative running 100% in the browser and powered by native Model Context Protocol (MCP) support.',
      ],
      objective: {
        title: 'Core Purpose & Privacy Standard',
        text: 'Provide freelancers and businesses with a free, professional, and uncompromisingly private invoicing utility that works seamlessly for humans and autonomous AI agents.',
        points: project.businessChallenge.en,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Free Privacy-First Invoice Generator`,
        badge: 'Free to Use',
        caption: 'Generate statutory DIN A4 PDF invoices client-side with zero database storage.',
        businessBenefit: '100% private, zero watermarks, and native MCP support',
      },
      sections: [
        {
          number: '01',
          title: 'The Challenge: Subscription Traps, Watermarks, and Cloud Exposure',
          businessTakeaway: 'Why should a freelancer or small business pay €300+ annually and expose confidential financial figures just to produce standard PDF invoices?',
          paragraphs: [
            'Most online invoice generators employ dark patterns: they entice users with "free" promises, only to inject intrusive watermarks at download or hit them with sudden paywalls after minutes of manual data entry.',
            'Even worse, standard SaaS invoicing software centralizes all customer data, line-item rates, and financial transactions on cloud databases, introducing GDPR liabilities and severe data leak risks for confidential client agreements.',
          ],
          cards: [
            {
              title: 'Zero Paywalls & No Watermarks',
              desc: 'Clean, export-ready DIN A4 PDFs without hidden watermark extortion or forced account creation.',
              badge: 'Free to Use',
              icon: 'shield',
            },
            {
              title: 'No Cloud Data Storage',
              desc: 'Financial drafts and client addresses never leave your browser. Zero backend telemetry.',
              badge: 'Privacy First',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'The Solution: Zero-Database Architecture & DIN 5008 / ISO 216 Precision',
          businessTakeaway: 'A pure client-side web application combining Swiss-watch accounting precision with instant vector PDF rendering.',
          paragraphs: [
            'The Free Invoice Generator runs entirely on the client side using Next.js 16 and browser LocalStorage. No server ever sees client rates, company bank details, or buyer information.',
            'The editor features a real-time DIN 5008 / ISO 216 WYSIWYG preview that preserves exact print margins and page breaks. It incorporates GoBD statutory tax math, itemized VAT rates (19%, 7%, 0%), multi-currency support (EUR, USD, GBP, CHF, CAD, AUD, JPY), and drag-and-drop branding.',
          ],
          cards: [
            {
              title: '100% Client-Side Privacy',
              desc: 'Zero databases, zero server logging. All invoice drafts reside securely in your browser.',
              badge: 'Zero Database',
              icon: 'shield',
            },
            {
              title: 'DIN 5008 & GoBD Tax Math',
              desc: 'Standard-compliant layout with multi-VAT rates, line items, discounts, and clean PDF/PNG export.',
              badge: 'Statutory Compliance',
              icon: 'zap',
            },
            {
              title: 'Multilingual Support',
              desc: 'Native interface in English, German, French, and Spanish with multi-currency handling.',
              badge: 'Global Commerce',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'AI Agent Workflows & Model Context Protocol (MCP)',
          businessTakeaway: 'Bridging generative AI and accounting compliance through the open-source @nordible/invoice-mcp package on npm.',
          paragraphs: [
            'As autonomous AI workflows enter daily business operations, Nordible published the official @nordible/invoice-mcp package on npm. AI assistants (Claude, Cursor, ChatGPT, Antigravity) can now calculate statutory taxes and draft professional invoices programmatically with 1 simple prompt.',
            'To preserve uncompromising privacy, the AI sends the completed draft straight into your local browser for instant human review and 1-click PDF printing. Confidential rates, client addresses, and banking details never pass through third-party servers.',
          ],
          quote: 'AI agents should handle repetitive math and formatting, while humans retain absolute control over final approval and sensitive financial data.',
        },
        {
          number: '04',
          title: 'Open Source Transparency on GitHub & npm',
          businessTakeaway: 'Complete technical transparency with an open-source codebase and standalone npm package for the global developer community.',
          paragraphs: [
            'Nordible believes in software transparency for mission-critical business utilities. The complete codebase is open-source under the MIT license on GitHub, and the MCP server is published directly on npm.',
            'Developers and enterprises can inspect the code, self-host the application, or integrate the MCP server into their custom AI agent pipelines.',
          ],
          cards: [
            {
              title: 'GitHub Repository',
              desc: 'Inspect or fork the complete codebase at https://github.com/nordible/free-invoice-generator.',
              badge: 'GitHub (MIT)',
              icon: 'bot',
            },
            {
              title: 'npm Package (@nordible/invoice-mcp)',
              desc: 'Run npx -y @nordible/invoice-mcp to equip Claude, Cursor, or ChatGPT with invoice capabilities.',
              badge: 'npm Package',
              icon: 'sparkles',
            },
          ],
        },
      ],
      cta: {
        badge: 'Custom Software & AI Automation',
        title: 'Need a Custom Business Application, Web Utility, or AI Agent Integration?',
        desc: 'From zero-database client-side tools to autonomous Model Context Protocol (MCP) workflows—Nordible engineers secure, high-performance software tailored to your business operations.',
        buttonText: 'Schedule Technical Discovery Call',
        buttonAction: 'consultation',
        secondaryText: 'Try Free Invoice Generator →',
        secondaryLink: 'https://free-invoice-generator.nordible.co',
        mobileButtonText: 'Book Technical Call',
      },
    };

    const deInvoiceArticle: ArticleContent = {
      navHome: 'Startseite',
      navBlog: 'Fallstudien',
      navCurrent: project.title,
      share: 'Fallstudie teilen',
      copied: 'Link in die Zwischenablage kopiert',
      badge: project.badge.de,
      date: 'Open Source Produkt',
      readTime: '3 Min. Lesezeit',
      title: project.heroHeadline.de,
      topRibbon: {
        boldText: 'Entscheider & IT-Leiter:',
        subtitle: 'Planen Sie maßgeschneiderte, datenschutzkonforme Software oder KI-Agenten?',
        buttonText: 'Strategiegespräch buchen →',
        action: 'consultation',
      },
      client: {
        name: 'Nordible Open Source Plattform',
        industry: 'Datenschutz-Rechnungstool & MCP-Server',
        link: 'https://free-invoice-generator.nordible.co',
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.de,
        'Der Nordible Free Invoice Generator entstand aus einer klaren Notwendigkeit: Viele Rechnungsprogramme drängen Selbstständige in teure Monatsabos, verunstalten Rechnungen mit Wasserzeichen oder speichern sensible Finanzdaten auf externen Cloud-Servern. Wir haben eine zeitgemäße, datenbanklose Alternative geschaffen, die vollständig im Browser läuft und über eine native Model Context Protocol (MCP) Schnittstelle für KI-Agenten verfügt.',
      ],
      objective: {
        title: 'Kernziel & Datenschutzstandard',
        text: 'Bereitstellung eines kostenfreien, professionellen und kompromisslos sicheren Rechnungswerkzeugs für Menschen und autonome KI-Agenten.',
        points: project.businessChallenge.de,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.labelDe || m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Kostenloser datenschutzkonformer Rechnungsersteller`,
        badge: 'Kostenfrei',
        caption: 'Rechtskonforme DIN A4 PDFs direkt im Browser ohne Server-Speicherung generieren.',
        businessBenefit: '100 % Datenschutz, keine Wasserzeichen und native MCP-Unterstützung',
      },
      sections: [
        {
          number: '01',
          title: 'Das Problem: Abo-Fallen, Wasserzeichen und Cloud-Risiken',
          businessTakeaway: 'Warum sollten Selbstständige jährlich hunderte Euro zahlen und Kundendaten preisgeben, nur um eine Standardrechnung zu schreiben?',
          paragraphs: [
            'Zahlreiche Online-Rechnungsersteller locken mit dem Versprechen kostenloser Nutzung, blenden dann aber beim PDF-Download störende Werbewasserzeichen ein oder blockieren den Export hinter einer Bezahlschranke.',
            'Noch schwerwiegender ist der Datenschutz: Herkömmliche Tools speichern alle Kundendaten, Stundensätze und Rechnungsbeträge in zentralen Datenbanken – ein ernstes Risiko für DSGVO-Konformität und vertrauliche Geschäftsgeheimnisse.',
          ],
          cards: [
            {
              title: 'Keine Bezahlschranken & keine Wasserzeichen',
              desc: 'Saubere, druckfertige DIN A4 PDFs ohne versteckte Gebühren oder erzwungene Registrierung.',
              badge: 'Kostenfrei',
              icon: 'shield',
            },
            {
              title: 'Keine Cloud-Datenspeicherung',
              desc: 'Rechnungsentwürfe verbleiben rein lokal im Browser. Keine Übertragung an Backend-Server.',
              badge: 'Datenschutz',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'Die Lösung: Zero-Database & DIN 5008 / ISO 216 Präzision',
          businessTakeaway: 'Eine reine Client-Side-Webanwendung, die buchhalterische Präzision mit modernem Browser-Rendering vereint.',
          paragraphs: [
            'Der Free Invoice Generator arbeitet vollständig auf Client-Ebene mit Next.js 16 und browserbasiertem LocalStorage. Kein externer Server erhält Einblick in Rechnungsbeträge, Bankverbindungen oder Kundenadressen.',
            'Die Echtzeit-Vorschau entspricht den Standards DIN 5008 und ISO 216 mit automatischer Seitenumbruch-Optimierung für den PDF-Druck. Sie bietet GoBD-konforme Steuerberechnung, differenzierte MwSt.-Sätze (19 %, 7 %, 0 %), Währungsunterstützung (EUR, USD, GBP, CHF) sowie Drag-and-Drop für Logos.',
          ],
          cards: [
            {
              title: '100 % Client-Side Datenschutz',
              desc: 'Keine Datenbanken, kein Server-Logging. Rechnungsentwürfe liegen sicher im eigenen Browser.',
              badge: 'Zero Database',
              icon: 'shield',
            },
            {
              title: 'DIN 5008 & GoBD-Steuermathematik',
              desc: 'Normgerechtes Layout mit MwSt.-Aufschlüsselung, Rabatten und direktem PDF/PNG-Export.',
              badge: 'Rechtskonform',
              icon: 'zap',
            },
            {
              title: 'Mehrsprachigkeit',
              desc: 'Intuitive Oberfläche auf Deutsch, Englisch, Französisch und Spanisch mit Multiwährungs-Support.',
              badge: 'International',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'KI-Agenten-Workflows & Model Context Protocol (MCP)',
          businessTakeaway: 'Die Brücke zwischen generativer KI und korrekter Buchhaltung über das quelloffene npm-Paket @nordible/invoice-mcp.',
          paragraphs: [
            'Für moderne Unternehmensabläufe hat Nordible das offizielle npm-Paket @nordible/invoice-mcp veröffentlicht. KI-Assistenten (Claude Desktop, Cursor, ChatGPT, Antigravity) können Rechnungen und Steueraufschlüsselungen mit einer einzigen Anweisung fehlerfrei vorbereiten.',
            'Um höchste Datensicherheit zu garantieren, übergibt die KI den fertigen Entwurf direkt an den Browser zur menschlichen Freigabe und zum PDF-Druck. Vertrauliche Stundensätze und Kundendaten verbleiben zu 100 % auf dem Gerät des Nutzers.',
          ],
          quote: 'KI-Agenten sollten repetitive Berechnungen und Formatierungen übernehmen, während der Mensch stets die finale Kontrolle über vertrauliche Finanzdaten behält.',
        },
        {
          number: '04',
          title: 'Open Source & Transparenz auf GitHub & npm',
          businessTakeaway: 'Vollständige technische Transparenz mit Open-Source-Codebasis und eigenständigem npm-Paket für Entwickler weltweit.',
          paragraphs: [
            'Nordible steht für Transparenz bei geschäftskritischen Software-Werkzeugen. Der gesamte Code steht unter der freien MIT-Lizenz auf GitHub bereit, und der MCP-Server ist direkt auf npm verfügbar.',
            'Entwickler und Unternehmen können den Code frei prüfen, die Lösung selbst hosten oder das MCP-Paket in eigene KI-Agenten-Pipelines integrieren.',
          ],
          cards: [
            {
              title: 'GitHub Repository',
              desc: 'Vollständigen Quellcode einsehen oder forken unter https://github.com/nordible/free-invoice-generator.',
              badge: 'GitHub (MIT)',
              icon: 'bot',
            },
            {
              title: 'npm-Paket (@nordible/invoice-mcp)',
              desc: 'Mit npx -y @nordible/invoice-mcp Claude, Cursor oder ChatGPT mit Invoicing-Funktionen ausstatten.',
              badge: 'npm Paket',
              icon: 'sparkles',
            },
          ],
        },
      ],
      cta: {
        badge: 'Individuelle Software & KI-Agenten',
        title: 'Planen Sie eine individuelle Business-Software oder KI-Agenten-Automatisierung?',
        desc: 'Von datenbanklosen Client-Side-Tools bis zu autonomen Model Context Protocol (MCP)-Agenten: Wir entwickeln performante, revisionssichere Software maßgeschneidert für Ihre Abläufe.',
        buttonText: 'Technisches Beratungsgespräch buchen',
        buttonAction: 'consultation',
        secondaryText: 'Kostenlosen Generator öffnen →',
        secondaryLink: 'https://free-invoice-generator.nordible.co',
        mobileButtonText: 'Beratung anfragen',
      },
    };

    return { en: enInvoiceArticle, de: deInvoiceArticle };
  }

  if (projectId === 'nextauto') {
    const enNextAutoArticle: ArticleContent = {
      navHome: 'Home',
      navBlog: 'Case Studies',
      navCurrent: project.title,
      share: 'Share Case Study',
      copied: 'Link copied to clipboard',
      badge: project.badge.en,
      date: 'Enterprise Case Study',
      readTime: '4 min read',
      title: project.heroHeadline.en,
      topRibbon: {
        boldText: 'Operations Leader:',
        subtitle: 'Automate repetitive back-office workflows and eliminate manual data entry.',
        buttonText: 'Request Automation Review →',
        action: 'consultation',
      },
      client: {
        name: project.client,
        industry: project.clientRole || 'Enterprise Healthcare Services',
        link: project.liveUrl,
      },
      introParagraphs: [
        project.executiveSummary.en,
        'In high-volume enterprise operations, scaling headcounts to handle repetitive back-office data processing destroys operating margins and introduces costly human transcription errors. Nordible engineered NextAuto: an end-to-end Robotic Process Automation (RPA) suite that automates data extraction, reconciles ledgers, and dispatches audited statements autonomously.',
      ],
      objective: {
        title: 'Operational Mission & Process Objectives',
        text: 'Eliminate manual data entry between billing portals and spreadsheets while cutting reimbursement delays and administrative overhead.',
        points: project.businessChallenge.en,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Enterprise RPA & Workflow Automation`,
        badge: 'Enterprise Automation',
        caption: 'Automated 80% of routine workflows and saved 40+ billable hours every week.',
        businessBenefit: '80% back-office automation with -90% error reduction',
      },
      sections: [
        {
          number: '01',
          title: 'The Bottleneck: Manual Data Entry & Lost Billable Hours',
          businessTakeaway: 'When operations teams spend 40+ hours weekly hand-copying figures across legacy portals, labor costs balloon and insurance reimbursements stall.',
          paragraphs: [
            'NextServices faced an operational dilemma common to fast-growing healthcare operations: surging transaction volumes required continually hiring administrative clerks to copy records between third-party insurance portals and internal billing ledgers.',
            'Human transposition mistakes led to insurance claim rejections, delaying revenue collection by 30 to 60 days and burning expensive supervisory hours on tedious invoice audits.',
          ],
          cards: [
            {
              title: 'Margin Erosion',
              desc: 'Scaling headcount linearly with transaction volume squeezes profit margins and restricts business growth.',
              badge: 'Operational Cost',
              icon: 'shield',
            },
            {
              title: 'Revenue Delays',
              desc: 'Data transposition errors triggered 30-to-60-day reimbursement lags from insurance carriers.',
              badge: 'Cash Flow Risk',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'The Solution: NextAuto Robotic Process Automation (RPA)',
          businessTakeaway: 'Autonomous software robots executing high-volume data extraction, reconciliation, and delivery with zero human intervention.',
          paragraphs: [
            'Nordible designed and engineered NextAuto, a resilient RPA platform built on C# and .NET Framework that directly interfaces with insurance portals, extracts payment vouchers, and cross-references them against internal accounts receivable ledgers.',
            'Rather than burdening humans with repetitive data transfers, the automation engine processes batches in seconds and deposits verified audit logs directly into SQL Server.',
          ],
          cards: [
            {
              title: 'End-to-End Extraction',
              desc: 'Automated scraping and API syncing across heterogeneous billing portals and spreadsheets.',
              badge: '80% Automated',
              icon: 'zap',
            },
            {
              title: 'Intelligent Exception Alerts',
              desc: 'Smart triage flags only the 5% of records requiring human review, letting staff ignore routine successes.',
              badge: 'Exception Handling',
              icon: 'bot',
            },
            {
              title: 'Executive Visibility',
              desc: 'Real-time performance dashboards track daily transaction throughput, error rates, and labor savings.',
              badge: 'Real-Time Insights',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'Direct Business Impact: 40+ Hours Saved Every Week',
          businessTakeaway: 'Reclaiming high-cost staff hours and reducing billing errors by 90% delivered immediate operating leverage.',
          paragraphs: [
            'Following deployment of NextAuto, manual data entry was slashed by 80%. Operations teams reclaimed over 40 billable hours every single week, reallocating skilled personnel toward patient advocacy and client service.',
            'With billing transposition errors plummeting by 90%, insurance claim rejections fell to historic lows, speeding up payment collection cycles and restoring predictable cash flow.',
          ],
          quote: 'Automation should liberate skilled employees from spreadsheet drudgery so they can focus on high-value client relationships.',
        },
        {
          number: '04',
          title: 'Audit-Proof Architecture & Enterprise Governance',
          businessTakeaway: 'Mission-critical data pipelines built for enterprise resilience, zero data loss, and strict healthcare compliance.',
          paragraphs: [
            'Financial and healthcare data workflows demand flawless audit trails. NextAuto was engineered with transactional ACID guarantees, comprehensive exception telemetry, and encrypted SQL data storage.',
            'Every automated transaction produces an immutable audit record, satisfying strict compliance mandates and ensuring full operational transparency.',
          ],
          cards: [
            {
              title: 'Zero Data Loss',
              desc: 'Transactional retry mechanisms and idempotent data pipelines guarantee that no claim or voucher is dropped.',
              badge: 'ACID Reliability',
              icon: 'shield',
            },
            {
              title: 'Full Audit Trail',
              desc: 'Cryptographically verified transaction logs ensure end-to-end regulatory compliance.',
              badge: 'Enterprise Compliance',
              icon: 'bot',
            },
          ],
        },
      ],
      cta: {
        badge: 'RPA & Enterprise Workflow Automation',
        title: 'Ready to Eliminate Repetitive Back-Office Work and Save 40+ Hours Every Week?',
        desc: 'Let us analyze your team’s manual data entry, billing reconciliation, and reporting bottlenecks. We engineer custom RPA bots and automated pipelines that run with 99.9% accuracy.',
        buttonText: 'Book Automation Discovery Call',
        buttonAction: 'consultation',
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book Automation Call',
      },
    };

    const deNextAutoArticle: ArticleContent = {
      navHome: 'Startseite',
      navBlog: 'Fallstudien',
      navCurrent: project.title,
      share: 'Fallstudie teilen',
      copied: 'Link in die Zwischenablage kopiert',
      badge: project.badge.de,
      date: 'Enterprise-Fallstudie',
      readTime: '4 Min. Lesezeit',
      title: project.heroHeadline.de,
      topRibbon: {
        boldText: 'Betriebsleiter & Geschäftsführer:',
        subtitle: 'Automatisieren Sie fehleranfällige Routineprozesse und sparen Sie 40+ Std./Woche.',
        buttonText: 'Potenzialanalyse anfragen →',
        action: 'consultation',
      },
      client: {
        name: project.client,
        industry: project.clientRole || 'Healthcare & Unternehmens-Services',
        link: project.liveUrl,
      },
      introParagraphs: [
        project.executiveSummary.de,
        'In wachsenden Unternehmen führt die manuelle Bewältigung von Routineaufgaben zu explodierenden Personalkosten und kostspieligen Tippfehlern. Nordible entwickelte NextAuto: eine hochperformante Robotic Process Automation (RPA)-Suite, die Datenübertragungen, Abrechnungsabgleiche und Reporting vollständig autonom durchführt.',
      ],
      objective: {
        title: 'Operativer Auftrag & Automatisierungsziele',
        text: 'Beseitigung manueller Dateneingaben zwischen Portalen und Tabellen bei gleichzeitiger Beschleunigung der Zahlungseingänge.',
        points: project.businessChallenge.de,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.labelDe || m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Enterprise RPA & Workflow-Automatisierung`,
        badge: 'Prozessautomatisierung',
        caption: '80 % der Routine-Workflows automatisiert und 40+ Wochenarbeitsstunden eingespart.',
        businessBenefit: '80 % Prozessautomatisierung mit -90 % Fehlerquote',
      },
      sections: [
        {
          number: '01',
          title: 'Der operative Engpass: Manuelle Dateneingabe & verlorene Arbeitszeit',
          businessTakeaway: 'Wenn Teams wöchentlich über 40 Stunden mit dem manuellen Abtippen von Daten verbringen, steigen die Betriebskosten und Zahlungen verzögern sich.',
          paragraphs: [
            'NextServices stand vor einer klassischen Wachstumsbremse: Das steigende Abrechnungsvolumen erforderte kontinuierlich neue Sachbearbeiter, die Daten manuell zwischen Krankenkassenportalen und internen Tabellen übertrugen.',
            'Menschliche Übertragungsfehler führten zu Abrechnungsreklamationen, verzögerten den Zahlungseingang um 30 bis 60 Tage und banden wertvolle Führungskräfte in zeitraubenden Fehlerkorrekturen.',
          ],
          cards: [
            {
              title: 'Margendruck',
              desc: 'Lineare Personalaufstockung bei wachsendem Auftragsvolumen drückt die Rendite des Unternehmens.',
              badge: 'Personalkosten',
              icon: 'shield',
            },
            {
              title: 'Zahlungsverzögerungen',
              desc: 'Tippfehler lösten Ablehnungen aus und blockierten den Cashflow über Monate hinweg.',
              badge: 'Liquiditätsrisiko',
              icon: 'building',
            },
          ],
        },
        {
          number: '02',
          title: 'Die Lösung: NextAuto Robotic Process Automation (RPA)',
          businessTakeaway: 'Software-Roboter übernehmen die automatisierte Datenextraktion, Prüfung und Buchung vollständig ohne manuellen Eingriff.',
          paragraphs: [
            'Nordible entwickelte NextAuto auf Basis von C# und dem .NET Framework. Die RPA-Engine dockt direkt an externe Portale an, extrahiert Abrechnungsbelege und gleicht offene Posten im internen System vollautomatisch ab.',
            'Statt mühsam Daten abzutippen, verarbeitet das System Tausende Transaktionen in Sekunden und speichert geprüfte Datensätze revisionssicher in Microsoft SQL Server ab.',
          ],
          cards: [
            {
              title: 'Durchgängige Automation',
              desc: 'Autonome Extraktion und Datenabgleich über heterogene Portal- und Tabellenformate hinweg.',
              badge: '80 % Automatisiert',
              icon: 'zap',
            },
            {
              title: 'Intelligente Ausnahmebehandlung',
              desc: 'Nur noch 5 % unklare Einzelfälle werden Mitarbeitern zur gezielten Prüfung vorgelegt.',
              badge: 'Ausnahme-Management',
              icon: 'bot',
            },
            {
              title: 'Cockpit für Entscheider',
              desc: 'Echtzeit-Transparenz über Transaktionsvolumen, Fehlerraten und gewonnene Arbeitszeit.',
              badge: 'Echtzeit-Reporting',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'Messbare Resultate: 40+ Stunden wöchentliche Zeitersparnis',
          businessTakeaway: '80 % weniger manuelle Routinearbeit und 90 % weniger Fehler schufen sofortige operative Skalierbarkeit.',
          paragraphs: [
            'Mit dem Produktivstart von NextAuto sanken manuelle Eingabetätigkeiten um 80 %. Das Team gewann über 40 Stunden produktive Arbeitszeit pro Woche zurück, die nun für strategische Kundenbetreuung eingesetzt werden.',
            'Da Übertragungsfehler um 90 % zurückgingen, sanken Reklamationen auf ein historisches Minimum – mit sofort spürbarer Beschleunigung des Cashflows.',
          ],
          quote: 'Automatisierung muss qualifizierte Mitarbeiter von Tabellen-Fronarbeit befreien, damit sie sich auf echte Wertschöpfung konzentrieren können.',
        },
        {
          number: '04',
          title: 'Revisionssichere Architektur & Unternehmens-Compliance',
          businessTakeaway: 'Ausfallsichere Daten-Pipelines für maximale Verlässlichkeit und lückenlose Nachvollziehbarkeit.',
          paragraphs: [
            'Abrechnungs- und Healthcare-Daten verlangen absolute Zuverlässigkeit. NextAuto garantiert transaktionale ACID-Sicherheit, detailliertes Telemetrie-Logging und verschlüsselte SQL-Speicherung.',
            'Jeder automatisierte Buchungsvorgang erzeugt ein unveränderliches Audit-Protokoll für Prüfer und Revision.',
          ],
          cards: [
            {
              title: 'Kein Datenverlust',
              desc: 'Automatische Wiederholungsmechanismen sichern jede Transaktion lückenlos ab.',
              badge: 'ACID-Sicherheit',
              icon: 'shield',
            },
            {
              title: 'Lückenlose Prüfbarkeit',
              desc: 'Revisionssichere Protokollierung für uneingeschränkte Compliance.',
              badge: 'Audit-Proof',
              icon: 'bot',
            },
          ],
        },
      ],
      cta: {
        badge: 'RPA & Prozessautomatisierung',
        title: 'Möchten auch Sie fehleranfällige Routinearbeiten eliminieren und wöchentlich 40+ Stunden einsparen?',
        desc: 'Wir analysieren Ihre manuellen Datenübertragungen, Abrechnungsabgleiche und Reporting-Engpässe und entwickeln maßgeschneiderte Automatisierungsroboter, die revisionssicher im Hintergrund arbeiten.',
        buttonText: 'Automatisierungs-Potenzialanalyse buchen',
        buttonAction: 'consultation',
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Potenzialanalyse anfragen',
      },
    };

    return { en: enNextAutoArticle, de: deNextAutoArticle };
  }

  if (projectId === 'nerdspal') {
    const enNerdsPalArticle: ArticleContent = {
      navHome: 'Home',
      navBlog: 'Case Studies',
      navCurrent: project.title,
      share: 'Share Case Study',
      copied: 'Link copied to clipboard',
      badge: project.badge.en,
      date: 'Venture Case Study',
      readTime: '5 min read',
      title: project.heroHeadline.en,
      topRibbon: {
        boldText: 'Executive & Technical Leaders:',
        subtitle: 'Discover how battle-tested real-time architectures de-risk mission-critical enterprise systems.',
        buttonText: 'Schedule Engineering Consultation →',
        action: 'consultation',
      },
      client: {
        name: 'NerdsPal.com (Co-Founded Venture)',
        industry: 'Real-Time Developer Community & Q&A Platform',
        link: project.liveUrl,
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.en,
        'For business decision-makers, evaluating an engineering partner is fundamentally an assessment of technical capability and strategic maturity under real-world pressure. In building NerdsPal from scratch with zero outside capital, Nordible proved that it can design, scale, and maintain high-concurrency event-driven systems that users actively rely upon. More importantly, it established a disciplined precedent: knowing when a technical proving ground has accomplished its mission, and strategically harvesting its architectural innovations for high-margin enterprise deployments.',
      ],
      objective: {
        title: 'The Venture Hypothesis & Technical Proving Ground',
        text: 'Validate sub-100ms real-time collaboration at scale, bootstrap a sticky developer community with zero cloud waste, and build reusable event-driven infrastructure for future enterprise applications.',
        points: project.businessChallenge.en,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.label,
        value: m.value,
        icon: m.label.includes('Traction')
          ? ('users' as const)
          : m.label.includes('Latency')
          ? ('trending' as const)
          : m.label.includes('Retention')
          ? ('percent' as const)
          : ('trophy' as const),
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Real-Time Collaborative Platform Case Study`,
        badge: 'Battle-Tested Real-Time Architecture',
        caption: 'Sub-100ms real-time WebSocket collaboration proven in production under live concurrency.',
        businessBenefit: 'Validated low-latency WebSocket infrastructure and 100% reusable IP',
      },
      sections: [
        {
          number: '01',
          title: 'The Operational Bottleneck: Why Asynchronous Developer Channels Fail',
          businessTakeaway: 'When engineering talent loses hours waiting on asynchronous forum responses, productivity plummets. Real-time peer collaboration reduces problem resolution from days to minutes.',
          paragraphs: [
            'Software development is inherently momentum-driven. When junior engineers, CS students, or independent developers hit cryptic compiler errors or configuration dead-ends, their options are severely limited. Traditional platforms like Stack Overflow are asynchronous, heavily gated, and notorious for punitive moderation that discourages early-stage experimentation.',
            'Furthermore, async ticket queues create cognitive fragmentation. By the time an answer arrives 6 to 24 hours later, the developer has lost their flow state. NerdsPal addressed this core latency gap: creating an environment where developers could connect instantly through real-time audio/chat and simultaneous code collaboration.',
          ],
          cards: [
            {
              title: 'The Cost of Asynchronous Lag',
              desc: 'Waiting hours for forum replies breaks developer flow states and stalls active development sprints.',
              badge: 'Productivity Drain',
              icon: 'shield',
            },
            {
              title: 'Punitive Gatekeeping Barriers',
              desc: 'Rigid downvoting mechanisms on legacy Q&A platforms alienate learning talent instead of resolving hurdles.',
              badge: 'Friction',
              icon: 'users',
            },
          ],
        },
        {
          number: '02',
          title: 'The Engineering Blueprint: Sub-100ms Concurrency with Zero Cloud Waste',
          businessTakeaway: 'True software resilience is not about throwing massive cloud budgets at traffic spikes; it is about event-driven architectures that scale on demand with minimal idle cost.',
          paragraphs: [
            'Real-time multi-room chat, presence detection, and live syntax-highlighted code synchronization present severe scaling hurdles. Conventional architectures that rely on frequent HTTP polling quickly exhaust server resources and generate runaway cloud invoices.',
            'Nordible designed a custom, lightweight event-driven communication backbone using WebSockets and Node.js microservices. Connection pooling and memory-efficient broadcast mechanisms ensured that active rooms experienced sub-100ms latency, while idle instances consumed virtually zero compute overhead on Google Cloud Platform.',
          ],
          cards: [
            {
              title: 'Sub-100ms WebSocket Mesh',
              desc: 'Instant messaging and synchronized code snippet distribution with sub-tenth-of-a-second latency.',
              badge: 'Real-Time Concurrency',
              icon: 'zap',
            },
            {
              title: 'Zero-Waste Cloud Economics',
              desc: 'Event-driven serverless and containerized architecture scaling dynamically during peak activity spikes.',
              badge: 'Cost Efficiency',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'Traction & Cognitive UX: 700+ Developers and 40% Cohort Retention',
          businessTakeaway: 'A technical architecture is only as valuable as the user engagement it sustains. High retention stems from intuitive cognitive ergonomics and natural incentive loops.',
          paragraphs: [
            'Without any paid marketing or external advertising spend, NerdsPal scaled to over 700 active technical developers entirely through developer word-of-mouth and a viral launch on Product Hunt.',
            'To maintain sustained engagement without salaried support staff, Nordible engineered a peer-driven karma and reputation system. Experienced mentors were rewarded with visible peer credibility and community badges for providing prompt, verified answers, leading to a remarkable 40% monthly cohort retention rate.',
          ],
          cards: [
            {
              title: 'Organic Network Growth',
              desc: '700+ registered technical contributors onboarded via developer advocacy and organic discovery.',
              badge: 'High Traction',
              icon: 'users',
            },
            {
              title: 'Gamified Peer Alignment',
              desc: 'Reputation mechanics that naturally aligned junior learner needs with senior mentor recognition.',
              badge: 'Engagement Loop',
              icon: 'compass',
            },
          ],
        },
        {
          number: '04',
          title: 'Strategic Sunset vs. The Quitter Fallacy: Why Mature Founders Know When to Transition IP',
          businessTakeaway: 'A venture succeeds when its core thesis is proven. Sunsetting a bootstrapped B2C experiment to rechannel validated real-time assets into high-margin enterprise software is strategic capital discipline, not surrender.',
          paragraphs: [
            'In the tech industry, a common misconception conflates sunsetting a product with failure. In reality, mature software executives understand capital allocation: consumer EdTech communities have notoriously low ability-to-pay, and monetizing them often requires intrusive ads or deceptive paywalls that destroy user trust.',
            'Rather than compromising the product or burning personal capital on low-margin consumer freemium models, Nordible’s leadership made the disciplined decision to conclude NerdsPal’s public lifecycle after achieving its educational and architectural milestones. Crucially, the venture had fulfilled its primary mission: proving sub-100ms real-time WebSockets and distributed state synchronization under real-world load.',
            'Every line of code, real-time socket manager, moderation microservice, and architectural lesson was retained as proprietary intellectual property—positioning Nordible with battle-tested technical assets ready for higher-leverage commercial applications.',
          ],
          cards: [
            {
              title: 'Strategic Capital Discipline',
              desc: 'Knowing when to redirect engineering talent from low-margin B2C experiments to high-value enterprise software.',
              badge: 'Executive Focus',
              icon: 'building',
            },
            {
              title: '100% IP & Asset Retention',
              desc: 'Battle-tested WebSocket architectures and real-time state sync engines preserved for enterprise systems.',
              badge: 'Proprietary IP',
              icon: 'shield',
            },
          ],
        },
        {
          number: '05',
          title: 'The Enterprise Legacy: How NerdsPal Powers Nordible’s Client Systems Today',
          businessTakeaway: 'Enterprise clients trust Nordible because our software architectures are not academic theories—they were tested, refined, and proven in public production.',
          paragraphs: [
            'Today, the real-time event infrastructure initially engineered for NerdsPal serves as a core foundational pillar across Nordible’s enterprise client engagements. From financial trading telemetry engines to live medical collaboration workspaces, our clients benefit directly from systems that have already weathered real-world traffic.',
            'When you partner with Nordible, you work directly with the systems architects who solved distributed concurrency, sub-100ms latency, and high-retention UX firsthand—delivering production reliability without agency middleman delays.',
            'To demonstrate complete transparency and code craft, the core collaborative Q&A implementation is available as open-source software on GitHub at https://github.com/nordible/StackOverflowClone. Technical evaluators and engineering leaders can directly inspect our codebase, component modularity, and event architectures.',
          ],
          cards: [
            {
              title: 'Production-Proven Reliability',
              desc: 'Enterprise clients bypass costly R&D trial-and-error by adopting real-time systems already proven under concurrency.',
              badge: 'De-Risked Software',
              icon: 'bot',
            },
            {
              title: 'Open Source Codebase (GitHub)',
              desc: 'Inspect or fork the complete collaborative repository at https://github.com/nordible/StackOverflowClone.',
              badge: 'GitHub Repository',
              icon: 'bot',
            },
            {
              title: 'Direct Founder Architecture',
              desc: 'Zero agency bloat. Enterprise leaders interface directly with the senior engineers who build and scale their systems.',
              badge: 'Senior Leadership',
              icon: 'zap',
            },
          ],
        },
      ],
      cta: {
        badge: 'Real-Time Enterprise Architecture',
        title: 'Planning a high-concurrency real-time platform or collaborative workflow?',
        desc: 'From sub-second live telemetry to scalable event-driven WebSocket architectures: We build resilient, high-performance systems with 100% code ownership from Day 1.',
        buttonText: 'Schedule Technical Architecture Review',
        buttonAction: 'consultation',
        secondaryText: 'Inspect GitHub Repository →',
        secondaryLink: 'https://github.com/nordible/StackOverflowClone',
        mobileButtonText: 'Book Architecture Review',
      },
    };

    const deNerdsPalArticle: ArticleContent = {
      navHome: 'Startseite',
      navBlog: 'Fallstudien',
      navCurrent: project.title,
      share: 'Fallstudie teilen',
      copied: 'Link in die Zwischenablage kopiert',
      badge: project.badge.de,
      date: 'Venture-Fallstudie',
      readTime: '5 Min. Lesezeit',
      title: project.heroHeadline.de,
      topRibbon: {
        boldText: 'Geschäftsführung & IT-Entscheider:',
        subtitle: 'Erfahren Sie, wie praxiserprobte Echtzeit-Architekturen das Risiko geschäftskritischer Enterprise-Systeme minimieren.',
        buttonText: 'Architektur-Erstgespräch buchen →',
        action: 'consultation',
      },
      client: {
        name: 'NerdsPal.com (Mitgegründetes Venture)',
        industry: 'Echtzeit-Entwickler-Community & Q&A-Plattform',
        link: project.liveUrl,
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        project.executiveSummary.de,
        'Für unternehmerische Entscheider ist die Wahl eines Softwarepartners vor allem eine Frage der technischen Kompetenz und strategischen Reife unter realen Marktbedingungen. Mit dem Aufbau von NerdsPal ohne externes Risikokapital hat Nordible bewiesen, hochgradig parallele, eventgesteuerte Systeme zu konzipieren, zu skalieren und stabil zu betreiben. Noch entscheidender ist jedoch die unternehmerische Disziplin: Zu erkennen, wann ein technologischer Prüfstand seine Mission erfüllt hat, und die validierten Innovationen gezielt in margenstarke B2B-Lösungen zu überführen.',
      ],
      objective: {
        title: 'Die Venture-Hypothese & der technologische Prüfstand',
        text: 'Validierung von verzögerungsfreier Sub-100ms-Kollaboration im Produktivbetrieb, Aufbau einer engagierten Entwickler-Community ohne Cloud-Verschwendung und Entwicklung wiederverwendbarer Event-Architekturen für künftige Enterprise-Systeme.',
        points: project.businessChallenge.de,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.labelDe || m.label,
        value: m.value,
        icon: m.label.includes('Traction')
          ? ('users' as const)
          : m.label.includes('Latency')
          ? ('trending' as const)
          : m.label.includes('Retention')
          ? ('percent' as const)
          : ('trophy' as const),
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - Echtzeit-Kollaborations-Fallstudie`,
        badge: 'Praxiserprobte Echtzeit-Architektur',
        caption: 'Sub-100ms WebSocket-Echtzeitkommunikation im Live-Einsatz unter realer Last bewiesen.',
        businessBenefit: 'Validierte Latenz-Optimierung und 100 % wiederverwendbare Software-Assets',
      },
      sections: [
        {
          number: '01',
          title: 'Der operative Engpass: Warum asynchrone Entwickler-Foren scheitern',
          businessTakeaway: 'Wenn technische Fachkräfte Stunden auf Antworten in Foren warten, bricht die Produktivität ein. Direkte Peer-Kollaboration in Echtzeit verkürzt die Lösungszeit von Tagen auf Minuten.',
          paragraphs: [
            'Softwareentwicklung lebt vom kontinuierlichen Arbeitsfluss. Stoßen Nachwuchsentwickler oder Informatikstudenten auf komplexe Compilerfehler oder Konfigurationsprobleme, sind herkömmliche Kanäle unzureichend. Klassische Plattformen wie Stack Overflow reagieren asynchron, erfordern zeitraubende Formatierungen und schrecken Einsteiger durch rigide Moderation ab.',
            'Das Warten auf Antworten führt zu fatalen Unterbrechungen: Wenn erst Stunden später eine Rückmeldung eintrifft, ist der gedankliche Kontext verloren. NerdsPal schloss diese Lücke, indem Lernende per Knopfdruck direkt in Live-Räume mit Fachexperten für simultanes Code-Sharing verbunden wurden.',
          ],
          cards: [
            {
              title: 'Kosten asynchroner Verzögerung',
              desc: 'Stundenlanges Warten auf Forenbeiträge unterbricht den Entwicklungsfluss und blockiert Projekte.',
              badge: 'Produktivitätsverlust',
              icon: 'shield',
            },
            {
              title: 'Hürden klassischer Foren',
              desc: 'Strenge Downvoting-Mechanismen verunsichern lernende Fachkräfte, anstatt Lösungen zu fördern.',
              badge: 'Reibungsverlust',
              icon: 'users',
            },
          ],
        },
        {
          number: '02',
          title: 'Das technologische Fundament: Sub-100ms Latenz bei minimalen Cloud-Kosten',
          businessTakeaway: 'Echte Software-Resilienz bedeutet nicht, Lastspitzen mit teurer Server-Hardware zu überdecken, sondern ereignisgesteuerte Architekturen zu bauen, die bedarfsgerecht und kostenschonend skalieren.',
          paragraphs: [
            'Multi-User-Live-Chat, Anwesenheitserkennung und synchrones Code-Highlighting stellen hohe Anforderungen an die Infrastruktur. Klassische Ansätze mit regelmäßigem HTTP-Polling überlasten Server und treiben Cloud-Kosten unkontrolliert in die Höhe.',
            'Nordible entwickelte ein leichtgewichtiges, ereignisgesteuertes Kommunikations-Backbone auf Basis von WebSockets und Node.js-Microservices. Durch optimiertes Connection-Pooling erreichten aktive Räume eine Latenz von unter 100 ms, während ungenutzte Instanzen auf der Google Cloud Platform nahezu keine Leerlaufkosten verursachten.',
          ],
          cards: [
            {
              title: 'Sub-100ms WebSocket-Mesh',
              desc: 'Verzögerungsfreie Live-Nachrichten und synchronisierte Code-Snippets in Sekundenbruchteilen.',
              badge: 'Echtzeit-Concurrency',
              icon: 'zap',
            },
            {
              title: 'Kostenschonende Cloud-Effizienz',
              desc: 'Ereignisgesteuerte Architektur, die dynamisch skaliert und Leerlaufkosten auf null minimiert.',
              badge: 'Kapitaleffizienz',
              icon: 'sparkles',
            },
          ],
        },
        {
          number: '03',
          title: 'Organische Traktion & Community-UX: 700+ Entwickler und 40 % Nutzerbindung',
          businessTakeaway: 'Eine technische Architektur entfaltet ihren Wert erst durch nachhaltige Nutzung. Hohe Bindung entsteht durch kognitive Ergonomie und wirksame Anreizsysteme.',
          paragraphs: [
            'Vollständig ohne bezahlte Werbung wuchs NerdsPal auf über 700 aktive Entwickler an – getragen allein durch Mundpropaganda in der Entwickler-Community und einen erfolgreichen Product-Hunt-Start.',
            'Um eine verlässliche Betreuung ohne feste Angestellte zu gewährleisten, konzipierte Nordible ein Reputations- und Karma-System. Erfahrene Mentoren erhielten für schnelle, qualifizierte Hilfe sichtbare Community-Anerkennung, was zu einer herausragenden monatlichen Wiedernutzungsrate von 40 % führte.',
          ],
          cards: [
            {
              title: 'Organisches Netzwerkwachstum',
              desc: '700+ registrierte Entwickler, gewonnen durch Empfehlungen und engagierte Community-Nutzung.',
              badge: 'Hohe Traktion',
              icon: 'users',
            },
            {
              title: 'Motivierendes Reputationssystem',
              desc: 'Karma-Mechanik, die das Hilfsbedürfnis von Lernenden perfekt mit der Expertise von Mentoren verband.',
              badge: 'Engagement-Schleife',
              icon: 'compass',
            },
          ],
        },
        {
          number: '04',
          title: 'Strategischer Projektabschluss statt Aufgeben: Warum weitsichtige Gründer IP gezielt überführen',
          businessTakeaway: 'Ein Projekt ist dann erfolgreich abgeschlossen, wenn seine Kernhypothese bewiesen ist. Ein Consumer-Experiment planmäßig zu beenden, um validierte Echtzeit-Assets in rentable Enterprise-Software zu überführen, ist strategische Reife – kein Aufgeben.',
          paragraphs: [
            'In der Technologiebranche wird das Beenden eines Produkts oft vorschnell mit Scheitern verwechselt. Erfahrene Führungskräfte wissen jedoch, wie wichtig disziplinierte Kapitalallokation ist: Reine B2C-Lernplattformen verfügen über geringe Zahlungsbereitschaft, und eine Monetarisierung über nervige Werbebanner hätte dem Nutzervertrauen geschadet.',
            'Anstatt das Produkt durch unpassende Werbung zu verwässern oder Ressourcen in margenarmen Consumer-Abomodellen zu binden, traf die Geschäftsführung von Nordible die wohlüberlegte Entscheidung, NerdsPal nach Erreichen der Bildungs- und Architekturziele planmäßig abzuschließen. Die zentrale Mission war vollständig erfüllt: Der Nachweis, dass Sub-100ms-WebSockets unter realer Last stabil skalieren.',
            'Sämtliche Programmcodes, WebSocket-Manager, Moderations-Microservices und Architektur-Erkenntnisse blieben zu 100 % im Besitz von Nordible – als praxiserprobtes Fundament für anspruchsvolle B2B-Projekte.',
          ],
          cards: [
            {
              title: 'Unternehmerische Fokus-Disziplin',
              desc: 'Gezielte Verlagerung von Entwicklerkapazitäten von margenarmen B2C-Diensten hin zu wertschöpfenden B2B-Lösungen.',
              badge: 'Strategischer Fokus',
              icon: 'building',
            },
            {
              title: '100 % Eigentum an Kerntechnologie',
              desc: 'Echtzeit-Synchronisationsmuster und WebSocket-Engines vollständig für Unternehmenssysteme gesichert.',
              badge: 'Proprietäres IP',
              icon: 'shield',
            },
          ],
        },
        {
          number: '05',
          title: 'Das Enterprise-Erbe: Wie NerdsPal heute Nordibles Firmenkunden stärkt',
          businessTakeaway: 'Geschäftskunden schätzen Nordible, weil unsere Software-Architekturen keine akademischen Theorien sind – sie wurden im harten Live-Betrieb erprobt und optimiert.',
          paragraphs: [
            'Heute bildet die für NerdsPal entwickelte Echtzeit-Event-Infrastruktur ein unverzichtbares Rückgrat in den Enterprise-Projekten von Nordible. Von Finanzhandels-Telemetrie bis hin zu kollaborativen medizinischen Anwendungen profitieren unsere Kunden von Systemen, die unzählige reale Nutzerverbindungen gemeistert haben.',
            'Bei Nordible arbeiten Sie direkt mit den Systemarchitekten zusammen, die Concurrency, Sub-100ms-Latenz und intuitive Nutzerführung aus erster Hand beherrschen – für maximale Ausfallsicherheit ohne Agentur-Umwege.',
            'Als Beleg für maximale Transparenz und technische Sorgfalt steht die grundlegende kollaborative Q&A-Architektur als Open-Source-Projekt auf GitHub bereit: https://github.com/nordible/StackOverflowClone. Technische Entscheider können Code-Qualität, Komponentenstruktur und Concurrency-Muster direkt im Quellcode evaluieren.',
          ],
          cards: [
            {
              title: 'Praxiserprobte Zuverlässigkeit',
              desc: 'Unternehmen umgehen riskante Entwicklungsphasen durch den Einsatz praxiserprobter Echtzeit-Komponenten.',
              badge: 'Risikominimierung',
              icon: 'bot',
            },
            {
              title: 'Open-Source-Codebase (GitHub)',
              desc: 'Vollständigen Quellcode einsehen oder forken unter https://github.com/nordible/StackOverflowClone.',
              badge: 'GitHub Repository',
              icon: 'bot',
            },
            {
              title: 'Direkter Gründerkontakt',
              desc: 'Keine verlustreichen Agentur-Ebenen: Entscheider sprechen direkt mit den leitenden Software-Architekten.',
              badge: 'Senior Leadership',
              icon: 'zap',
            },
          ],
        },
      ],
      cta: {
        badge: 'Enterprise-Echtzeit-Architektur',
        title: 'Planen Sie eine performante Echtzeit-Plattform oder kollaborative Workflows?',
        desc: 'Von latenzarmer Live-Telemetrie bis zu skalierbaren WebSocket-Infrastrukturen: Wir entwickeln ausfallsichere Systeme mit 100 % Code-Eigentum ab Tag 1.',
        buttonText: 'Technisches Architektur-Erstgespräch buchen',
        buttonAction: 'consultation',
        secondaryText: 'Open-Source-Code auf GitHub ansehen →',
        secondaryLink: 'https://github.com/nordible/StackOverflowClone',
        mobileButtonText: 'Architektur-Gespräch',
      },
    };

    return { en: enNerdsPalArticle, de: deNerdsPalArticle };
  }

  if (projectId === 'oncocare') {
    const enOncocareArticle: ArticleContent = {
      navHome: 'Home',
      navBlog: 'Case Studies',
      navCurrent: project.title,
      share: 'Share Case Study',
      copied: 'Link copied to clipboard',
      badge: project.badge.en,
      date: 'Enterprise Healthcare Case Study',
      readTime: '4 min read',
      title: project.heroHeadline.en,
      topRibbon: {
        boldText: 'MedTech & Healthcare Leader:',
        subtitle: 'Engineer mission-critical, compliant healthcare software with zero data loss.',
        buttonText: 'Discuss Architecture →',
        action: 'consultation',
      },
      client: {
        name: 'General Electric Healthcare (Budapest Team)',
        industry: 'Oncology Software & Disease Management',
        location: 'Budapest, Hungary (Remote / Online)',
        link: project.liveUrl,
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        'Specialized clinical oncology teams face an immense operational hurdle: multi-year patient journeys with hundreds of visits, chemotherapy regimens, lab panels, and diagnostic scans locked in fragmented silos. In close remote collaboration with General Electric Healthcare’s software engineering division in Budapest, Hungary, Nordible founder Kabeer Shah engineered a lightweight, clinician-centric oncology decision-support platform under GE’s CareIntellect initiative.',
        'Designed for cancer detection, prevention, and longitudinal disease management, the platform bridges the gap between raw clinical data and actionable therapy. By capturing the complete patient medicine journey and deploying closed-loop treatment optimization, the system empowers oncologists to record patient responses and dynamically tailor subsequent treatment stages with speed and clinical confidence.',
      ],
      objective: {
        title: 'Mission & Clinical Value',
        text: 'Deliver a lightweight, ultra-responsive oncology platform capable of traversing years of complex treatment data without visual lag, enabling closed-loop treatment optimization for doctors.',
        points: project.businessChallenge.en,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - GE Healthcare CareIntellect Oncology Decision Support Platform`,
        badge: 'Enterprise MedTech Impact',
        caption: 'Collaborative remote engineering between Kabeer Shah and GE Healthcare Budapest.',
        businessBenefit: '60% faster clinical data reconciliation across longitudinal cancer journeys',
      },
      sections: [
        {
          number: '01',
          title: 'The Challenge: Longitudinal Data Overload & Clinical Friction',
          businessTakeaway: 'When enterprise medical software relies on fragmented tables and sluggish interfaces, clinicians waste 60% of their working hours searching through records instead of treating patients.',
          paragraphs: [
            'Oncologists and care teams manage patients over years of continuous care. Each patient profile contains dozens of hospital visits, biomarker panels, radiation schedules, chemotherapy cycles, and imaging reports distributed across disparate electronic health record (EHR) systems.',
            'Traditional clinical interfaces attempted to display this volume through dense tables and complex data views. This created operational inertia, long preparation delays, and severe cognitive exhaustion for doctors during high-stakes tumor boards where rapid decision-making is critical.',
            'Furthermore, care teams lacked an integrated mechanism to link patient tolerance and biomarker responses from prior regimens directly into planning the next treatment phase, relying instead on manual transcription across paper and siloed systems.',
          ],
          cards: [
            {
              title: 'Physician Time Deficit',
              desc: 'Manual record collation steals hundreds of clinical hours each month from direct patient consultation.',
              badge: 'Clinical Friction',
              icon: 'shield',
            },
            {
              title: 'Workflow Fragmentation',
              desc: 'Siloed health record systems prevent a continuous, longitudinal understanding of patient disease trajectory.',
              badge: 'Operational Bottleneck',
              icon: 'zap',
            },
          ],
        },
        {
          number: '02',
          title: 'The Ergonomic Solution: An Intuitive, Frictionless Care Timeline',
          businessTakeaway: 'Applying science-backed clinical ergonomics transforms years of dense cancer history into an instantaneous, intuitive timeline interface.',
          paragraphs: [
            'Recognizing that doctors need immediate temporal context without visual clutter, Kabeer Shah and the Budapest team designed an interactive timeline interface centered entirely on clinician ergonomics.',
            'High-level clinical milestones—regimen initiations, diagnostic scans, and disease responses—appear in a clean, chronological overview. Granular lab values, medication schedules, and clinical notes expand seamlessly on demand through progressive disclosure.',
            'This human-centered design allows oncologists to effortlessly review years of prior treatment history in seconds, eliminating chart-hunting fatigue and ensuring total clarity during time-sensitive consultations.',
          ],
          cards: [
            {
              title: 'Instant Timeline Traversal',
              desc: 'Effortlessly review any point in time across the patient care lifecycle with instantaneous responsiveness.',
              badge: 'Clinical Ergonomics',
              icon: 'sparkles',
            },
            {
              title: 'Progressive Information Clarity',
              desc: 'Crucial clinical milestones stay prominent at a glance, with granular lab data accessible with a single click.',
              badge: 'Cognitive Ease',
              icon: 'compass',
            },
          ],
        },
        {
          number: '03',
          title: 'Closed-Loop Treatment Optimization: Linking Outcomes to Next-Stage Care',
          businessTakeaway: 'Closing the loop between treatment response tracking and next-stage planning delivers proven value for hospital operations, clinicians, and patients alike.',
          paragraphs: [
            'The platform introduced a closed-loop clinical feedback loop: doctors administer treatment, record the patient’s clinical response and biomarker shifts, and the platform aggregates this outcome data to dynamically optimize recommendations for the subsequent treatment phase.',
            'For healthcare enterprises and hospital administrators, this closed loop accelerated patient throughput by 40% and cut chart preparation time by 60%, removing administrative bottlenecks and lowering operational overhead.',
            'For clinicians, it removed the guesswork and manual calculations from titration adjustments. For patients, it meant personalized, data-backed treatment plans that responded proactively to their condition, reducing toxicities and improving care outcomes.',
          ],
          cards: [
            {
              title: 'Outcome-Driven Staging',
              desc: 'Each subsequent treatment phase is optimized based on concrete response metrics and tolerance from previous cycles.',
              badge: 'Closed-Loop Care',
              icon: 'bot',
            },
            {
              title: 'Tripartite Impact',
              desc: 'Measurable wins across the board: operational leverage for health systems, lower cognitive load for doctors, and safer therapy for patients.',
              badge: 'Proven ROI',
              icon: 'building',
            },
          ],
        },
        {
          number: '04',
          title: 'Institutional Governance: Collaborative Delivery with GE Healthcare Budapest',
          businessTakeaway: 'Direct collaboration between elite systems leadership and GE’s Budapest team accelerated enterprise deployment while ensuring flawless HIPAA compliance.',
          paragraphs: [
            'The project was executed through agile online collaboration between Nordible founder Kabeer Shah and GE Healthcare’s engineering division in Budapest, demonstrating how senior architectural leadership delivers enterprise outcomes without agency overhead.',
            'Engineered to meet the most stringent institutional healthcare standards, the platform incorporated cryptographic audit trails, granular role-based access governance, and resilient data privacy frameworks (HIPAA & GDPR) designed for seamless hospital network deployment.',
          ],
          cards: [
            {
              title: 'Institutional Data Governance',
              desc: 'Built-in cryptographic audit trails and role-based permissions designed to pass strict hospital compliance audits.',
              badge: 'Regulatory Certainty',
              icon: 'shield',
            },
            {
              title: 'Zero-Disruption Integration',
              desc: 'Designed for high-availability clinical environments with zero downtime and seamless adoption across hospital departments.',
              badge: 'Operational Scale',
              icon: 'building',
            },
          ],
        },
      ],
      cta: {
        badge: 'Healthcare & Mission-Critical Systems',
        title: 'Engineering High-Performance, Compliant Software for Healthcare and MedTech',
        desc: 'Speak directly with systems architect Kabeer Shah to evaluate your clinical software architecture, timeline interfaces, and HIPAA/GDPR data pipelines.',
        buttonText: 'Schedule MedTech Strategy Call',
        buttonAction: 'consultation',
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book MedTech Call',
      },
    };

    const deOncocareArticle: ArticleContent = {
      navHome: 'Startseite',
      navBlog: 'Fallstudien',
      navCurrent: project.title,
      share: 'Fallstudie teilen',
      copied: 'Link in die Zwischenablage kopiert',
      badge: project.badge.de,
      date: 'Enterprise Healthcare Fallstudie',
      readTime: '4 Min. Lesezeit',
      title: project.heroHeadline.de,
      topRibbon: {
        boldText: 'MedTech- & Healthcare-Entscheider:',
        subtitle: 'Entwickeln Sie revisionssichere, datenschutzkonforme MedTech-Software ohne Datenverlust.',
        buttonText: 'Architektur besprechen →',
        action: 'consultation',
      },
      client: {
        name: 'General Electric Healthcare (Team Budapest)',
        industry: 'Onkologie-Software & Therapiesteuerung',
        location: 'Budapest, Ungarn (Remote / Online)',
        link: project.liveUrl,
        repoUrl: project.repoUrl,
      },
      introParagraphs: [
        'Klinische Onkologie-Teams stehen vor einer gewaltigen Herausforderung: Mehrjährige Patientenverläufe mit hunderten Arztterminen, Chemotherapie-Zyklen, Laborbefunden und Bildgebungsdaten sind über getrennte Systeme verstreut. In enger Online-Zusammenarbeit mit der Software-Entwicklungsabteilung von General Electric Healthcare in Budapest (Ungarn) konzipierte Nordible-Gründer Kabeer Shah eine leichtgewichtige, klinische Assistenzplattform im Rahmen der GE CareIntellect-Initiative.',
        'Entwickelt für Krebsfrüherkennung, Prävention und ganzheitliches Krankheitsmanagement, schließt die Plattform die Lücke zwischen isolierten Daten und zielgerichteter Therapie. Durch die vollständige Erfassung des medikamentösen Behandlungsverlaufs und einen geschlossenen Optimierungskreislauf können Ärzte Therapieergebnisse präzise dokumentieren und nachfolgende Behandlungsstufen datenbasiert optimieren.',
      ],
      objective: {
        title: 'Mission & klinischer Mehrwert',
        text: 'Entwicklung einer leichtgewichtigen, hochperformanten Onkologie-Plattform, die jahrelange Behandlungsdaten ohne Latenzen navigierbar macht und Ärzten eine geschlossene Feedback-Optimierung ermöglicht.',
        points: project.businessChallenge.de,
      },
      metrics: project.businessResults.map((m) => ({
        label: m.labelDe || m.label,
        value: m.value,
        icon: 'trending' as const,
      })),
      heroImage: {
        src: project.image,
        alt: `${project.title} - GE Healthcare CareIntellect Onkologie-Entscheidungsunterstützung`,
        badge: 'Enterprise-MedTech-Erfolg',
        caption: 'Erfolgreiche Remote-Zusammenarbeit zwischen Kabeer Shah und GE Healthcare Budapest.',
        businessBenefit: '60 % schnellere Datenaufbereitung bei mehrjährigen Krebsbehandlungen',
      },
      sections: [
        {
          number: '01',
          title: 'Die Herausforderung: Datenüberlastung bei mehrjährigen Krebstherapien',
          businessTakeaway: 'Wenn medizinische Unternehmenssoftware durch überladene Tabellen und schwerfällige Abläufe ausgebremst wird, verlieren Ärzte 60 % ihrer Arbeitszeit mit der Datensuche anstatt bei der Behandlung.',
          paragraphs: [
            'Onkologen und Behandlungsteams begleiten Krebspatienten oft über viele Jahre hinweg. Jedes Patientenprofil umfasst dutzende Arztbesuche, Biomarker-Panels, Bestrahlungspläne, Chemotherapie-Zyklen und radiologische Befunde, die in isolierten KIS-Systemen gespeichert sind.',
            'Klassische klinische Software versuchte, diese Datenmengen über überladene Tabellen darzustellen. Das führte zu langen Vorbereitungszeiten, Datenengpässen und mentaler Überlastung der Ärzte während zeitkritischer Tumorboard-Konferenzen.',
            'Zudem fehlte ein integrierter Mechanismus, um die Verträglichkeit und Biomarker-Reaktionen früherer Therapiezyklen direkt in die Planung der nächsten Behandlungsstufe einfließen zu lassen – was zu fehleranfälligen manuellen Zwischenschritten führte.',
          ],
          cards: [
            {
              title: 'Klinisches Zeitdefizit',
              desc: 'Das manuelle Zusammentragen von Akten stiehlt monatlich hunderte Stunden aus der direkten Patientenbetreuung.',
              badge: 'Klinische Reibung',
              icon: 'shield',
            },
            {
              title: 'Ablauffragmentierung',
              desc: 'Getrennte Informationssysteme verhindern einen ganzheitlichen Überblick über den Behandlungsverlauf.',
              badge: 'Operativer Engpass',
              icon: 'zap',
            },
          ],
        },
        {
          number: '02',
          title: 'Die ergonomische Lösung: Eine intuitive, verzögerungsfreie Behandlungszeitachse',
          businessTakeaway: 'Durch den gezielten Einsatz klinischer Ergonomie verwandeln sich jahrelange Krebsverläufe in eine verzögerungsfreie, intuitive Timeline-Benutzeroberfläche.',
          paragraphs: [
            'Um Ärzten sofortige zeitliche Orientierung ohne visuelle Überladung zu bieten, konzipierten Kabeer Shah und das Team in Budapest eine interaktive Zeitachsen-Benutzeroberfläche nach modernsten ergonomischen Grundsätzen.',
            'Wesentliche klinische Meilensteine (Therapiebeginn, Scan-Termine, Tumoransprechen) erscheinen in einem aufgeräumten Zeitstrahl. Detaillierte Labor- und Dosierungsdaten klappen bedarfsgerecht auf, sodass der Bildschirm stets übersichtlich bleibt.',
            'Diese nutzerzentrierte Architektur ermöglicht es Onkologen, mehrjährige Behandlungsverläufe in Sekundenschnelle zu erfassen – für fundierte Entscheidungen im Tumorboard ohne mentale Ermüdung.',
          ],
          cards: [
            {
              title: 'Verzögerungsfreie Zeitachse',
              desc: 'Jahrelange Behandlungszyklen in Sekundenschnelle durchlaufen – für sofortige Orientierung im Patientengespräch.',
              badge: 'Klinische Ergonomie',
              icon: 'sparkles',
            },
            {
              title: 'Bedarfsgerechte Information',
              desc: 'Zentrale Meilensteine bleiben auf einen Blick sichtbar, während detaillierte Laborwerte mit einem Klick bereitstehen.',
              badge: 'Kognitive Entlastung',
              icon: 'compass',
            },
          ],
        },
        {
          number: '03',
          title: 'Geschlossener Regelkreis: Datenbasierte Therapieoptimierung',
          businessTakeaway: 'Die direkte Verknüpfung von Behandlungsergebnissen mit nachfolgenden Therapiestufen schafft messbaren Mehrwert für Kliniken, Ärzte und Patienten.',
          paragraphs: [
            'Die Plattform etablierte einen geschlossenen Feedback-Kreislauf: Ärzte verabreichen die Therapie, dokumentieren das klinische Ansprechen und Biomarker-Veränderungen, und das System analysiert die Ergebnisse zur dynamischen Optimierung der folgenden Behandlungsphase.',
            'Für Kliniken und Gesundheitskonzerne steigerte dieser geschlossene Ablauf den Patientendurchsatz um 40 % und reduzierte den Zeitaufwand bei der Aktenvorbereitung um 60 %.',
            'Für Onkologen entfiel die manuelle Dosisberechnung und Datenkonsolidierung. Für die Patienten bedeutete dies eine personalisierte, datenoptimierte Krebstherapie mit geringerem Nebenwirkungsrisiko und besseren Behandlungserfolgen.',
          ],
          cards: [
            {
              title: 'Dynamische Therapiestufen',
              desc: 'Jede folgende Behandlungsphase wird basierend auf konkreten Ansprechwerten und Verträglichkeit früherer Zyklen optimiert.',
              badge: 'Geschlossener Regelkreis',
              icon: 'bot',
            },
            {
              title: 'Dreifacher Mehrwert',
              desc: 'Messbarer Nutzen auf allen Ebenen: Höhere Effizienz für Kliniken, weniger Arbeitsdruck für Ärzte und mehr Sicherheit für Patienten.',
              badge: 'Messbarer ROI',
              icon: 'building',
            },
          ],
        },
        {
          number: '04',
          title: 'Institutional Governance: Erfolgreiche Kooperation mit GE Healthcare Budapest',
          businessTakeaway: 'Die direkte Zusammenarbeit zwischen erfahrener technischer Führung und dem GE-Team in Budapest beschleunigte die Bereitstellung bei garantierter Revisions- und DSGVO-Sicherheit.',
          paragraphs: [
            'Das Projekt entstand in enger Online-Zusammenarbeit zwischen Nordible-Gründer Kabeer Shah und der Entwicklungsabteilung von GE Healthcare in Budapest. Dies unterstreicht, wie fokussierte strategische Führung komplexe Großprojekte ohne Agentur-Reibungsverluste zum Erfolg führt.',
            'Konzipiert für höchste Sicherheitsanforderungen im Gesundheitswesen, integriert die Plattform revisionssichere Audit-Protokolle, differenzierte Berechtigungskonzepte und strenge Datenschutzmechanismen (HIPAA & DSGVO) zum verlässlichen Schutz hochsensibler Patientendaten in Kliniknetzwerken.',
          ],
          cards: [
            {
              title: 'Revisionssichere Daten-Governance',
              desc: 'Kryptografische Audit-Trails und rollenbasierte Zugriffsmodelle, die strengsten klinischen Sicherheitsprüfungen standhalten.',
              badge: 'Datenschutz',
              icon: 'shield',
            },
            {
              title: 'Nahtlose Klinik-Integration',
              desc: 'Ausgelegt für den unterbrechungsfreien Routinebetrieb im Krankenhaus ohne operative Ausfallzeiten.',
              badge: 'Betriebssicherheit',
              icon: 'building',
            },
          ],
        },
      ],
      cta: {
        badge: 'Healthcare & kritische Systeme',
        title: 'Sichere, gesetzeskonforme Software für Medizin und MedTech',
        desc: 'Sprechen Sie direkt mit Systems Architect Kabeer Shah über Ihre Software-Architektur, Timeline-Interfaces und HIPAA/DSGVO-konforme Datenpipelines.',
        buttonText: 'MedTech-Strategiegespräch buchen',
        buttonAction: 'consultation',
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'MedTech-Gespräch',
      },
    };

    return { en: enOncocareArticle, de: deOncocareArticle };
  }


  const isGeoSearch = ['bombay-studio', 'buns069', 'architektur'].includes(projectId);
  const isMedTech = ['oncocare', 'rst-baxter'].includes(projectId);
  const isFintech = ['instarem', 'zerodha-sandbox'].includes(projectId);
  const isAiAutomation = ['smartbothub', 'linkedin-catchup'].includes(projectId);
  const isSecurity = ['nordible-email'].includes(projectId);

  const enTopRibbon = isGeoSearch
    ? {
        boldText: 'Business Owner:',
        subtitle: 'Secure a free 15-min location audit for Google & AI search.',
        buttonText: 'Request Audit →',
        action: 'audit' as const,
      }
    : isMedTech
    ? {
        boldText: 'MedTech & Healthcare Leader:',
        subtitle: 'Engineer mission-critical, compliant healthcare software with zero data loss.',
        buttonText: 'Discuss Architecture →',
        action: 'consultation' as const,
      }
    : isFintech
    ? {
        boldText: 'Fintech Executive:',
        subtitle: 'Scale high-concurrency payment rails and compliant financial APIs.',
        buttonText: 'Schedule Strategy Call →',
        action: 'consultation' as const,
      }
    : isAiAutomation
    ? {
        boldText: 'Operations & Tech Leader:',
        subtitle: 'Lower support costs and accelerate workflows with autonomous AI agents.',
        buttonText: 'Explore AI Automation →',
        action: 'consultation' as const,
      }
    : isSecurity
    ? {
        boldText: 'IT Security Leader:',
        subtitle: 'Harden your email infrastructure and guarantee 99.9% inbox deliverability.',
        buttonText: 'Request Security Review →',
        action: 'consultation' as const,
      }
    : {
        boldText: 'Founder & Product Leader:',
        subtitle: 'Architect high-growth web and mobile platforms with 10x velocity.',
        buttonText: 'Discuss Architecture →',
        action: 'consultation' as const,
      };

  const deTopRibbon = isGeoSearch
    ? {
        boldText: 'Geschäftsinhaber:',
        subtitle: 'Sichern Sie sich ein kostenfreies 15-Min.-Standort-Audit für Google & KI-Suche.',
        buttonText: 'Audit anfragen →',
        action: 'audit' as const,
      }
    : isMedTech
    ? {
        boldText: 'MedTech- & Healthcare-Entscheider:',
        subtitle: 'Entwickeln Sie revisionssichere, datenschutzkonforme MedTech-Software ohne Datenverlust.',
        buttonText: 'Architektur besprechen →',
        action: 'consultation' as const,
      }
    : isFintech
    ? {
        boldText: 'Fintech-Entscheider:',
        subtitle: 'Skalieren Sie hochperformante Zahlungssysteme und finanzkonforme APIs.',
        buttonText: 'Strategiegespräch buchen →',
        action: 'consultation' as const,
      }
    : isAiAutomation
    ? {
        boldText: 'IT- & Betriebsleiter:',
        subtitle: 'Supportkosten senken und Abläufe mit autonomen KI-Agenten beschleunigen.',
        buttonText: 'KI-Strategie anfragen →',
        action: 'consultation' as const,
      }
    : isSecurity
    ? {
        boldText: 'IT-Sicherheitsverantwortliche:',
        subtitle: 'E-Mail-Infrastruktur abhärten und 99,9 % Zustellbarkeit garantieren.',
        buttonText: 'Sicherheitsaudit anfragen →',
        action: 'consultation' as const,
      }
    : {
        boldText: 'Gründer & Produktverantwortliche:',
        subtitle: 'Skalierbare Web- und Mobile-Plattformen mit 10x Entwicklungsgeschwindigkeit realisieren.',
        buttonText: 'Architektur besprechen →',
        action: 'consultation' as const,
      };

  const enCta = isGeoSearch
    ? {
        badge: 'Free 15-Minute Audit',
        title: 'Ready for predictable new clients via Google & AI Search?',
        desc: "We analyze your competitors' search keywords and show you how to turn clicks into paying client mandates – exactly following this case study's model.",
        buttonText: 'Start Free Potential Audit',
        buttonAction: 'audit' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Start Free Audit',
      }
    : isMedTech
    ? {
        badge: 'Healthcare & Mission-Critical Systems',
        title: 'Engineering Secure, Compliant Software for Healthcare and Life Sciences',
        desc: 'HIPAA/GDPR-compliant telemetry, medical diagnostic dashboards, and clinical data architectures engineered with zero proprietary lock-in.',
        buttonText: 'Schedule MedTech Strategy Call',
        buttonAction: 'consultation' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book MedTech Call',
      }
    : isFintech
    ? {
        badge: 'Fintech & High-Concurrency APIs',
        title: 'Scale Your Financial Infrastructure with Resilient, Compliant APIs',
        desc: 'From cross-border remittance rails to interactive financial simulation sandboxes—we engineer high-throughput financial backends.',
        buttonText: 'Schedule Fintech Discovery Call',
        buttonAction: 'consultation' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book Fintech Call',
      }
    : isAiAutomation
    ? {
        badge: 'Conversational AI & Enterprise Automation',
        title: 'Accelerate Customer Operations and Lower Costs with Autonomous AI',
        desc: 'Deploy intelligent AI workflows and conversational agents that slash response latency and eliminate repetitive human workload.',
        buttonText: 'Schedule AI Strategy Call',
        buttonAction: 'consultation' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book AI Call',
      }
    : isSecurity
    ? {
        badge: 'Enterprise IT & Cyber-Resilience',
        title: 'Protect Your Brand Reputation with Hardened Email Security',
        desc: 'Comprehensive DMARC, SPF, and DKIM security frameworks that eliminate domain spoofing and guarantee reliable B2B inbox delivery.',
        buttonText: 'Schedule Infrastructure Review',
        buttonAction: 'consultation' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book Security Review',
      }
    : {
        badge: 'Scalable Platform Engineering',
        title: 'Ready to Engineer Similar High-Impact Results for Your Product?',
        desc: 'Speak directly with systems architect Kabeer Shah to evaluate your platform architecture, scalability limits, and product velocity.',
        buttonText: 'Schedule Executive Strategy Call',
        buttonAction: 'consultation' as const,
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Book Strategy Call',
      };

  const deCta = isGeoSearch
    ? {
        badge: 'Kostenlose 15-Min.-Potenzialanalyse',
        title: 'Bereit für planbare Neukunden über Google & KI-Suche?',
        desc: 'Wir analysieren die Suchbegriffe Ihrer Wettbewerber und zeigen Ihnen, wie Sie aus Klicks zahlende Mandanten gewinnen – exakt nach diesem Modell.',
        buttonText: 'Kostenlose Analyse starten',
        buttonAction: 'audit' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Analyse starten',
      }
    : isMedTech
    ? {
        badge: 'Healthcare & kritische Systeme',
        title: 'Sichere, gesetzeskonforme Software für Medizin und Healthcare',
        desc: 'DSGVO-konforme Telemetrie, medizinische Diagnostik-Dashboards und klinische Datenarchitekturen ohne Abhängigkeit von Drittanbietern.',
        buttonText: 'MedTech-Strategiegespräch buchen',
        buttonAction: 'consultation' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'MedTech-Gespräch',
      }
    : isFintech
    ? {
        badge: 'Fintech & Hochleistungs-APIs',
        title: 'Finanzinfrastruktur mit belastbaren, konformen APIs skalieren',
        desc: 'Von grenzüberschreitenden Zahlungssystemen bis zu interaktiven Simulations-Sandboxes: Wir entwickeln hochverfügbare Backends.',
        buttonText: 'Fintech-Strategiegespräch buchen',
        buttonAction: 'consultation' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Fintech-Gespräch',
      }
    : isAiAutomation
    ? {
        badge: 'Konversationelle KI & Automation',
        title: 'Kundenprozesse beschleunigen und Betriebskosten durch KI senken',
        desc: 'Implementieren Sie intelligente KI-Workflows und Chat-Agenten, die Antwortzeiten verkürzen und Routineaufgaben automatisieren.',
        buttonText: 'KI-Strategiegespräch buchen',
        buttonAction: 'consultation' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'KI-Gespräch buchen',
      }
    : isSecurity
    ? {
        badge: 'Unternehmens-IT & Ausfallsicherheit',
        title: 'Unternehmensreputation durch gehärtete E-Mail-Sicherheit schützen',
        desc: 'Lückenlose DMARC-, SPF- und DKIM-Sicherheitsframeworks, die Domain-Spoofing verhindern und 99,9 % Zustellbarkeit sichern.',
        buttonText: 'Infrastruktur-Audit buchen',
        buttonAction: 'consultation' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Sicherheitsaudit',
      }
    : {
        badge: 'Skalierbare Plattform-Entwicklung',
        title: 'Möchten auch Sie messbare Resultate für Ihr Produkt erzielen?',
        desc: 'Sprechen Sie direkt mit Systems Architect Kabeer Shah über Ihre Software-Architektur, Skalierbarkeit und Entwicklungsgeschwindigkeit.',
        buttonText: 'Kostenloses Strategiegespräch buchen',
        buttonAction: 'consultation' as const,
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Strategiegespräch buchen',
      };

  const enArticle: ArticleContent = {
    navHome: 'Home',
    navBlog: 'Case Studies',
    navCurrent: project.title,
    share: 'Share Case Study',
    copied: 'Link copied to clipboard',
    badge: project.badge.en,
    date: 'Updated October 2026',
    readTime: '4 min read',
    title: project.heroHeadline.en,
    topRibbon: enTopRibbon,
    client: {
      name: project.client,
      industry: project.clientRole || 'Enterprise Partner',
      link: project.liveUrl,
      repoUrl: project.repoUrl,
    },
    introParagraphs: [
      project.executiveSummary.en,
      'When business leadership prioritizes speed, operational certainty, and direct ROI, traditional agency handoffs and bloated staffing models fail. Nordible works directly with executive stakeholders under the Services as Software model—delivering mission-critical platforms with 10x velocity and zero middlemen.',
    ],
    objective: {
      title: 'Executive Mission & Strategic Imperative',
      text: 'Eliminate systemic operational bottlenecks and accelerate business velocity while establishing 100% intellectual property ownership.',
      points: project.businessChallenge.en,
    },
    metrics: project.businessResults.map((m) => ({
      label: m.label,
      value: m.value,
      icon: 'trending' as const,
    })),
    heroImage: {
      src: project.image,
      alt: `${project.title} - Business Impact & Strategic Case Study`,
      badge: 'Proven Business Impact',
      caption: `Demonstrated commercial execution for ${project.client}.`,
      businessBenefit: project.businessResults[0]?.context || 'Quantified business outcome',
    },
    sections: [
      {
        number: '01',
        title: 'The Commercial Bottleneck & Operational Reality',
        businessTakeaway: 'Operational friction and legacy software workflows directly throttle gross margins and delay enterprise revenue capture.',
        paragraphs: project.businessChallenge.en,
        cards: [
          {
            title: 'Cost of Inaction',
            desc: 'Every week spent in operational inertia drains capital, burns high-cost employee hours, and leaves market share exposed to competitors.',
            badge: 'Capital Risk',
            icon: 'shield',
          },
          {
            title: 'The Agency Dilemma',
            desc: 'Traditional digital agencies deploy junior developers layered under non-technical account managers, leading to blown budgets and missed deadlines.',
            badge: 'Delivery Risk',
            icon: 'building',
          },
        ],
      },
      {
        number: '02',
        title: 'The Strategic Intervention & Execution Blueprint',
        businessTakeaway: 'Replacing bloated management layers with direct founder-led systems architecture compresses 12-month roadmaps into 6-week production sprints.',
        paragraphs: project.strategicSolution.en,
        cards: [
          {
            title: '100% Code & IP Ownership',
            desc: 'No recurring agency retainers or proprietary lock-in. Your enterprise owns the complete codebase, infrastructure, and deployment keys from Day 1.',
            badge: 'Asset Security',
            icon: 'zap',
          },
          {
            title: 'High-Velocity Architecture',
            desc: 'Purpose-built systems designed for enterprise concurrency, sub-second latency, and immediate regulatory auditability.',
            badge: 'Scalability',
            icon: 'sparkles',
          },
        ],
      },
      {
        number: '03',
        title: 'Quantified Business Return & Market Impact',
        businessTakeaway: 'Real business transformation is measured exclusively in top-line growth, operating margin expansion, and de-risked operations.',
        paragraphs: [
          `Following deployment for ${project.client}, the enterprise recorded rapid, measurable returns across its core operational KPIs.`,
          `Key achievements included ${project.businessResults.map((r) => `${r.value} (${r.label})`).join(', ')}. These results translated into immediate payback periods and substantial long-term operating leverage.`,
        ],
        quote: project.clientQuote?.quote.en || `Nordible delivered extraordinary commercial value for ${project.client}, surpassing operational benchmarks without agency overhead.`,
      },
      {
        number: '04',
        title: 'The Technological Foundation: Built for Certainty',
        businessTakeaway: 'Technology exists solely to protect your enterprise assets, guarantee compliance, and support uninterrupted commercial scale.',
        paragraphs: [
          project.technologyTrust.en,
          `Engineered using an enterprise stack comprising ${project.technologyTrust.stack.join(', ')}. The platform complies with strict institutional security requirements, audit procedures, and modern cloud governance.`,
        ],
        cards: project.technologyTrust.stack.slice(0, 4).map((tech) => ({
          title: tech,
          desc: 'Selected for proven enterprise reliability, comprehensive documentation, and zero proprietary lock-in.',
          badge: 'Verified Tech',
          icon: 'bot',
        })),
      },
    ],
    cta: enCta,
  };

  const deArticle: ArticleContent = {
    navHome: 'Startseite',
    navBlog: 'Fallstudien',
    navCurrent: project.title,
    share: 'Fallstudie teilen',
    copied: 'Link in die Zwischenablage kopiert',
    badge: project.badge.de,
    date: 'Aktualisiert Oktober 2026',
    readTime: '4 Min. Lesezeit',
    title: project.heroHeadline.de,
    topRibbon: deTopRibbon,
    client: {
      name: project.client,
      industry: project.clientRole || 'Unternehmenspartner',
      link: project.liveUrl,
      repoUrl: project.repoUrl,
    },
    introParagraphs: [
      project.executiveSummary.de,
      'Wenn für die Geschäftsführung Geschwindigkeit, Planungssicherheit und messbarer ROI im Fokus stehen, scheitern klassische Agenturmodelle mit langen Abstimmungsschleifen. Nordible arbeitet auf Augenhöhe mit Entscheidern nach dem „Services as Software“-Prinzip – für 10x schnellere Bereitstellung ohne Zwischenhändler.',
    ],
    objective: {
      title: 'Strategischer Auftrag & Geschäftsfokus',
      text: 'Beseitigung operativer Engpässe und Beschleunigung der Unternehmensprozesse bei 100 % Eigentum am Quellcode.',
      points: project.businessChallenge.de,
    },
    metrics: project.businessResults.map((m) => ({
      label: m.labelDe || m.label,
      value: m.value,
      icon: 'trending' as const,
    })),
    heroImage: {
      src: project.image,
      alt: `${project.title} - Fallstudie und geschäftlicher Mehrwert`,
      badge: 'Messbarer Geschäftserfolg',
      caption: `Verifizierte Projektergebnisse für ${project.client}.`,
      businessBenefit: project.businessResults[0]?.contextDe || 'Quantifizierter geschäftlicher Mehrwert',
    },
    sections: [
      {
        number: '01',
        title: 'Die geschäftliche Ausgangslage & der operative Engpass',
        businessTakeaway: 'Operative Reibungsverluste und veraltete Softwareabläufe belasten die Margen und verzögern das Unternehmenswachstum.',
        paragraphs: project.businessChallenge.de,
        cards: [
          {
            title: 'Kosten des Stillstands',
            desc: 'Jede Woche mit manuellen Behelfslösungen verbrennt wertvolle Arbeitszeit, bindet teures Personal und überlässt Marktanteile dem Wettbewerb.',
            badge: 'Kapitalrisiko',
            icon: 'shield',
          },
          {
            title: 'Das Agentur-Dilemma',
            desc: 'Klassische Werbe- und Webagenturen schalten unerfahrene Entwickler hinter untechnische Kundenbetreuer – Budgets explodieren, Fristen verstreichen.',
            badge: 'Lieferrisiko',
            icon: 'building',
          },
        ],
      },
      {
        number: '02',
        title: 'Die strategische Intervention & Umsetzung',
        businessTakeaway: 'Der direkte Austausch zwischen Geschäftsführung und erfahrener Software-Architektur verkürzt Jahresprojekte auf wenige Wochen.',
        paragraphs: project.strategicSolution.de,
        cards: [
          {
            title: '100 % Code- & IP-Eigentum',
            desc: 'Keine versteckten Lizenzfallen oder Abhängigkeiten. Ihr Unternehmen besitzt den gesamten Code und alle Infrastruktur-Schlüssel ab Tag 1.',
            badge: 'Vermögenswert',
            icon: 'zap',
          },
          {
            title: 'Hochperformante Architektur',
            desc: 'Systeme, die von Beginn an für höchste Ausfallsicherheit, Subsekunden-Ladezeiten und strenge Audits ausgelegt sind.',
            badge: 'Skalierbarkeit',
            icon: 'sparkles',
          },
        ],
      },
      {
        number: '03',
        title: 'Der messbare ROI & finanzielle Mehrwert',
        businessTakeaway: 'Echte Unternehmenstransformation bemisst sich ausschließlich an Umsatzplus, Margenverbesserung und verlässlicher Entlastung.',
        paragraphs: [
          `Nach dem Produktivstart für ${project.client} zeigten sich umgehend spürbare Verbesserungen der zentralen betriebswirtschaftlichen Kennzahlen.`,
          `Hervorzuheben sind insbesondere: ${project.businessResults.map((r) => `${r.value} (${r.labelDe || r.label})`).join(', ')}. Diese Kennzahlen führten zu einer schnellen Amortisation der Investition und nachhaltiger operativer Skalierbarkeit.`,
        ],
        quote: project.clientQuote?.quote.de || `Nordible lieferte für ${project.client} herausragende wirtschaftliche Ergebnisse ohne die üblichen Agentur-Reibungsverluste.`,
      },
      {
        number: '04',
        title: 'Das technologische Fundament: Sicherheit für Ihr Unternehmen',
        businessTakeaway: 'Technologie hat eine zentrale Aufgabe: Ihre Unternehmenswerte zu schützen, Compliance zu garantieren und planbares Wachstum zu sichern.',
        paragraphs: [
          project.technologyTrust.de,
          `Umgesetzt auf Basis eines bewährten Technologie-Stacks: ${project.technologyTrust.stack.join(', ')}. Die Plattform erfüllt höchste Sicherheits- und Revisionsanforderungen für den langfristigen Unternehmenseinsatz.`,
        ],
        cards: project.technologyTrust.stack.slice(0, 4).map((tech) => ({
          title: tech,
          desc: 'Ausgewählt für maximale Stabilität, weltweite Dokumentation und Unabhängigkeit von proprietären Anbietern.',
          badge: 'Geprüfte Technologie',
          icon: 'bot',
        })),
      },
    ],
    cta: deCta,
  };

  return { en: enArticle, de: deArticle };
}

// Generate case study articles for all projects that do not already have dedicated static articles in blogContent.ts
export const generatedCaseStudies: Record<string, Record<Lang, ArticleContent>> = {};

// Generate blog post list items for each generated case study
export const generatedBlogPostItems: Record<Lang, BlogPostItem[]> = {
  en: [],
  de: [],
};

const dynamicProjectIds = [
  'oncocare',
  'instarem',
  'rst-baxter',
  'parents-vip',
  'smartbothub',
  'nextauto',
  'bombay-studio',
  'nordible-email',
  'linkedin-catchup',
  'habitualist',
  'zerodha-sandbox',
  'nerdspal',
  'invoice-generator',
  'nordible-directory',
];

for (const id of dynamicProjectIds) {
  const project = portfolioProjects.find((p) => p.id === id);
  const article = createCaseStudyArticle(id);
  if (project && article) {
    generatedCaseStudies[project.caseStudySlug] = article;

    generatedBlogPostItems.en.push({
      id: project.caseStudySlug,
      slug: project.caseStudySlug,
      title: project.heroHeadline.en,
      clientName: project.client,
      projectTitle: project.title,
      excerpt: project.executiveSummary.en.slice(0, 180) + '...',
      category: project.clientRole || 'Business Case Study',
      categorySlug: project.audience === 'enterprise' ? 'engineering' : 'ai',
      readTime: '4 min read',
      date: 'October 2026',
      image: project.image,
      imageAlt: project.title,
      tags: [project.client, 'Case Study', 'Business ROI', ...project.technologyTrust.stack.slice(0, 2)],
      published: true,
    });

    generatedBlogPostItems.de.push({
      id: project.caseStudySlug,
      slug: project.caseStudySlug,
      title: project.heroHeadline.de,
      clientName: project.client,
      projectTitle: project.title,
      excerpt: project.executiveSummary.de.slice(0, 180) + '...',
      category: project.clientRole || 'Geschäftsfallstudie',
      categorySlug: project.audience === 'enterprise' ? 'engineering' : 'ai',
      readTime: '4 Min. Lesezeit',
      date: 'Oktober 2026',
      image: project.image,
      imageAlt: project.title,
      tags: [project.client, 'Fallstudie', 'Mehrwert', ...project.technologyTrust.stack.slice(0, 2)],
      published: true,
    });
  }
}
