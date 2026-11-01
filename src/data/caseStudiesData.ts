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
      client: {
        name: 'Nordible Community Initiative',
        industry: '100% Free Business Directory',
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
        badge: '100% Free Forever',
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
          businessTakeaway: 'Built on three viral pillars: Agentic AI discoverability, 100% Free access with 0% commission, and full Open-Source transparency.',
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
              title: '100% Free Forever',
              desc: 'Free to join, free to list, and free to receive direct customer messages with 0% commission.',
              badge: '100% Free',
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
        badge: 'Free Directory Listing',
        title: 'Add Your Business to http://business-directory.nordible.co/ Today',
        desc: 'Join the free global business directory. Get your verified profile and start receiving direct inquiries with 0% commission.',
        buttonText: 'Visit Free Business Directory →',
        secondaryText: 'Explore More Case Studies',
        mobileButtonText: 'Open Free Directory',
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
      client: {
        name: 'Nordible Initiative für Unternehmen',
        industry: '100 % Kostenfreies Branchenverzeichnis',
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
        badge: '100 % Kostenfrei',
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
          businessTakeaway: 'Drei Kernpfeiler für maximale Wirkung: Agentic KI-Auffindbarkeit, 100 % kostenfrei ohne Provision und volle Open-Source-Transparenz.',
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
              title: '100 % Kostenfrei',
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
        badge: 'Kostenloser Eintrag',
        title: 'Tragen Sie Ihr Unternehmen jetzt auf http://business-directory.nordible.co/ ein',
        desc: 'Werden Sie Teil des freien Unternehmensverzeichnisses. Erhalten Sie Ihr verifiziertes Profil und direkte Kundenanfragen mit 0 % Provision.',
        buttonText: 'Zum kostenlosen Verzeichnis →',
        secondaryText: 'Weitere Fallstudien ansehen',
        mobileButtonText: 'Kostenlos eintragen',
      },
    };

    return { en: enDirectoryArticle, de: deDirectoryArticle };
  }

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
    cta: {
      badge: 'Executive Consultation',
      title: `Ready to engineer similar business results for your organization?`,
      desc: 'Speak directly with founder and systems architect Kabeer Shah to evaluate your technology roadmap and operational bottlenecks.',
      buttonText: 'Schedule Executive Strategy Call',
      secondaryText: 'Explore More Case Studies',
      mobileButtonText: 'Book Strategy Call',
    },
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
    cta: {
      badge: 'Erstgespräch für Entscheider',
      title: `Möchten auch Sie messbare geschäftliche Resultate für Ihr Unternehmen erzielen?`,
      desc: 'Sprechen Sie direkt mit Gründer und Systems Architect Kabeer Shah über Ihre technischen Herausforderungen und Digitalisierungsziele.',
      buttonText: 'Kostenloses Strategiegespräch buchen',
      secondaryText: 'Weitere Fallstudien ansehen',
      mobileButtonText: 'Strategiegespräch buchen',
    },
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
