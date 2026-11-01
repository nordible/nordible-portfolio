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
