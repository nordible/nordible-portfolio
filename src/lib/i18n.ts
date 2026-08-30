export type Language = 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    founderStory: string;
    consultation: string;
    getStarted: string;
  };
  hero: {
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    ctaButton: string;
    founderName: string;
    founderRole: string;
    readFounderStory: string;
  };
  trustSignals: {
    badge: string;
    title: string;
    subtitle: string;
    stats: Array<{
      number: string;
      label: string;
      description: string;
    }>;
    partnersBadge: string;
    partnersTitle: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    visitProduct: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
      link?: string;
    }>;
  };
  businessBenefits: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      metric: string;
    }>;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    viewLive: string;
    technologies: string;
    outcome: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    mostPopular: string;
    ctaButton: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc1: string;
    desc2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    qualities: Array<{
      title: string;
      description: string;
    }>;
    founderStoryLinkBadge: string;
    founderStoryLinkTitle: string;
    founderStoryLinkDesc: string;
    founderStoryLinkButton: string;
  };
  founderPage: {
    backToHome: string;
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
    introTitle: string;
    introP1: string;
    introP2: string;
    introP3: string;
    milestonesTitle: string;
    milestonesSubtitle: string;
    milestones: Array<{
      period: string;
      role: string;
      company: string;
      description: string;
      tags: string[];
    }>;
    valuesTitle: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    ctaHeading: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    methodsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    headquartersLabel: string;
    headquartersValue: string;
    protocolTitle: string;
    protocolText: string;
    fullNameLabel: string;
    emailAddressLabel: string;
    phoneLabelForm: string;
    categoryLabel: string;
    categorySelect: string;
    budgetLabel: string;
    budgetSelect: string;
    briefLabel: string;
    briefPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    privacyNotice: string;
  };
  footer: {
    tagline: string;
    expertiseTitle: string;
    companyTitle: string;
    founderStory: string;
    contactUs: string;
    pitchDeck: string;
    legalTitle: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      founderStory: "Founder Story",
      consultation: "Consultation",
      getStarted: "Get Started"
    },
    hero: {
      titlePart1: "We don’t just build technology solutions for businesses—",
      titleHighlight: "we build partnerships with people.",
      subtitle: "Your complete technology partner for every stage of business growth—whether you need to launch a new product, modernize legacy systems, or optimize operations.",
      ctaButton: "Schedule Architecture Consultation",
      founderName: "Kabeer Shah",
      founderRole: "Founder & Head of Client Success",
      readFounderStory: "Read founder's story →"
    },
    trustSignals: {
      badge: "Full-Spectrum Technology Partner",
      title: "Your complete technology partner for every stage of business growth.",
      subtitle: "Whether you need to launch a new product, modernize legacy systems, or optimize operations—we deliver scalable solutions tailored to your vision.",
      stats: [
        { number: "15+", label: "Years Experience", description: "Battle-tested leadership" },
        { number: "50+", label: "Solutions Delivered", description: "Across web, mobile & cloud" },
        { number: "1M+", label: "Users Served", description: "Across global platforms" },
        { number: "100%", label: "Client Satisfaction", description: "On-time delivery commitment" }
      ],
      partnersBadge: "Global Partnerships",
      partnersTitle: "Trusted by Industry Leaders Worldwide"
    },
    services: {
      badge: "Core Competencies",
      title: "Our Expertise",
      subtitle: "From design to deployment and global growth—we engineer technology solutions that drive real impact.",
      visitProduct: "Visit Product",
      items: [
        {
          title: "Business Email",
          description: "Professional business email hosting with custom domains, top-tier security, and effortless migration.",
          features: ["Custom Domains", "Spam Protection", "Zero-Downtime Migration", "24/7 Expert Support"],
          link: "https://email.nordible.co/"
        },
        {
          title: "Technology Solutions",
          description: "Building scalable, high-performance applications for Web, Mobile, and Cloud environments.",
          features: ["Web & Mobile Apps", "Scalable Backend", "API Systems", "Cloud-Native Architecture"]
        },
        {
          title: "Enterprise Solutions",
          description: "Developing robust digital platforms that streamline operations and drive business efficiency.",
          features: ["Workflow Automation", "Data Architecture", "System Integration", "Custom ERP/CRM"]
        }
      ]
    },
    businessBenefits: {
      badge: "Commercial Value",
      title: "Engineered for Measurable Impact",
      subtitle: "We align technology architectures directly with your revenue and operational efficiency.",
      items: [
        { title: "Increase Revenue", description: "Modern technology solutions convert 3x better than legacy systems", metric: "+150% ROI" },
        { title: "Save Time", description: "Automated processes reduce manual work by hours daily", metric: "40h/week Saved" },
        { title: "Scale Faster", description: "Cloud-native solutions that grow seamlessly with your business", metric: "10x Capacity" }
      ]
    },
    portfolio: {
      badge: "Selected Works",
      title: "Our Technology Solutions",
      subtitle: "We build and scale high-impact technology solutions across diverse industries—from cross-platform consumer apps to enterprise healthcare platforms.",
      viewLive: "View Live Project",
      technologies: "Technologies",
      outcome: "Measurable Outcome"
    },
    pricing: {
      badge: "Transparent Engagement",
      title: "Investment Models",
      subtitle: "Predictable engineering engagements tailored to your roadmap and technical complexity.",
      mostPopular: "Most Popular",
      ctaButton: "Select Plan"
    },
    testimonials: {
      badge: "Client Testimonials",
      title: "Built on Trust & Proven Delivery",
      subtitle: "What engineering managers, directors, and founders say about collaborating with Nordible."
    },
    process: {
      badge: "Execution Rigor",
      title: "How We Deliver Technology Solutions",
      subtitle: "A structured, transparent engineering process designed to eliminate risk and maximize velocity.",
      steps: [
        { number: "01", title: "Discovery & Strategy", description: "Deep dive into your business logic, technical constraints, and strategic goals." },
        { number: "02", title: "Architecture & Design", description: "Designing scalable system topologies, data flows, and cognitive UX interfaces." },
        { number: "03", title: "Agile Engineering", description: "Iterative sprints with clean code, automated tests, and continuous delivery." },
        { number: "04", title: "Deployment & Scaling", description: "Production hardening, monitoring, and proactive architectural scaling." }
      ]
    },
    about: {
      badge: "Company Profile",
      title: "Technology Solutions",
      titleHighlight: "Partner",
      desc1: "Nordible Technologies is a specialized technology solutions partner dedicated to architecting high-performance systems. We don't just develop; we design and deploy high-impact technology solutions that solve real-world problems at scale.",
      desc2: "From building cross-platform consumer apps to architecting complex enterprise technology solutions for global organizations, our expertise spans the entire technology landscape. We believe in science-backed UX, clean engineering, and resilient architectures.",
      stat1Number: "15+",
      stat1Label: "Years Experience",
      stat2Number: "50+",
      stat2Label: "Solutions Shipped",
      qualities: [
        { title: "Clean Engineering", description: "We write robust, maintainable code that stands the test of time and scale." },
        { title: "Rapid Execution", description: "We ship features and systems with unmatched velocity and technical rigor." },
        { title: "Business Focused", description: "We don't just build tech; we build tools that solve real business challenges." }
      ],
      founderStoryLinkBadge: "MEET THE FOUNDER",
      founderStoryLinkTitle: "Discover the Journey of Kabeer Shah",
      founderStoryLinkDesc: "From 15+ years leading engineering for Fintech unicorns and Healthcare enterprises to founding Nordible Technologies.",
      founderStoryLinkButton: "Read Founder's Journey →"
    },
    founderPage: {
      backToHome: "Back to Home",
      badge: "THE FOUNDER'S JOURNEY",
      title: "Direct Leadership, Architectural Rigor & Strategic Partnership",
      subtitle: "15+ years of engineering leadership, hands-on business discovery, and mission-critical cloud scaling.",
      quote: "“The best technology solutions aren’t built in isolation—they are born from listening deeply to business challenges and engineering with heart and rigor.”",
      quoteAuthor: "Kabeer Shah",
      quoteRole: "Founder & Solutions Lead",
      introTitle: "From Hands-on Engineering to Strategic Leadership",
      introP1: "With over 15 years of battle-tested software and systems engineering experience, Kabeer Shah founded Nordible Technologies with a fundamental principle: technology must directly serve business outcomes through authentic human partnerships.",
      introP2: "Having architected mission-critical platforms for Fortune 500 healthcare enterprises like GE Healthcare & Baxter/Vantive, and led engineering teams for Fintech unicorns like Nium Inc. (Instarem), Kabeer brings rare full-spectrum mastery—from low-level cloud architecture and PCI-DSS/HIPAA compliance to executive technical strategy.",
      introP3: "Unlike traditional agencies with layers of account managers, Kabeer personally leads client discovery, technical strategy, and architectural direction—ensuring zero communication breakdown and 100% accountability.",
      milestonesTitle: "Career Milestones & Technical Leadership",
      milestonesSubtitle: "A proven track record delivering scalable systems across global industries.",
      milestones: [
        {
          period: "Enterprise Healthcare",
          role: "Tech Lead / Engineering Manager",
          company: "Quest Global (GE Healthcare & Baxter/Vantive)",
          description: "Delivered mission-critical systems for GE Healthcare (OncoCare platform) and Baxter/Vantive (RST AWS IoT diagnostics), adhering to strict FDA and HIPAA healthcare compliance.",
          tags: ["GE Healthcare", "Baxter / Vantive", "AWS IoT", "HIPAA Compliance"]
        },
        {
          period: "Fintech Unicorn",
          role: "Engineering Lead / Interim Head of Engineering",
          company: "Nium Inc. (Instarem)",
          description: "Built & led 18+ engineers, orchestrating high-value API integrations (PhonePe), PCI-DSS Level 1 compliance audits, and multi-currency transaction scaling.",
          tags: ["Fintech Unicorn", "PCI-DSS Level 1", "18+ Engineers Led", "High-Volume APIs"]
        },
        {
          period: "Digital Media & Scale",
          role: "Lead Senior Software Engineer (SDE-3)",
          company: "The Parent Inc. (TickledMedia)",
          description: "Architected microservices and micro-frontends transition for flagship Parents.VIP marketing platform serving millions of active users.",
          tags: ["Microservices", "Micro-frontends", "Database Migrations", "High Concurrency"]
        },
        {
          period: "AI & Innovation",
          role: "Senior AI / Full-Stack Engineer & Co-Founder",
          company: "SmarTek21 & NerdsPal",
          description: "Engineered SmartbotHub NLP chatbot AI platform (Best Performer Award) and bootstrapped interactive EdTech systems.",
          tags: ["NLP Chatbots", "AI Systems", "Cloud Architecture"]
        }
      ],
      valuesTitle: "Core Operating Principles",
      values: [
        { title: "Direct Founder Access", description: "You consult directly with the founder and principal architect. No middlemen, no junior handoffs." },
        { title: "Commercial Alignment", description: "Every architecture decision is calibrated to your business ROI, velocity, and customer retention." },
        { title: "Zero Technical Debt", description: "Clean, self-documenting code and automated testing that scales seamlessly with your growth." }
      ],
      ctaHeading: "Ready to Discuss Your Technology Strategy?",
      ctaSubtitle: "Schedule a direct consultation with Kabeer to explore your technical roadmap, architecture, or new product development.",
      ctaButton: "Schedule Founder Consultation →"
    },
    contact: {
      badge: "Initialize Project Request",
      title: "Let's Engineer",
      titleHighlight: "Something Amazing",
      subtitle: "Ready to transform your vision into a high-performance system? Let's start the conversation.",
      methodsTitle: "Contact Methods",
      emailLabel: "Email Address",
      phoneLabel: "Phone & WhatsApp",
      headquartersLabel: "Headquarters",
      headquartersValue: "Nordible Technologies\nBreitlacherstraße 101, 60489 Frankfurt, Germany",
      protocolTitle: "Global Protocol",
      protocolText: "Average response time is under 24 hours. We prioritize high-impact innovative products.",
      fullNameLabel: "Full Name",
      emailAddressLabel: "Email Address",
      phoneLabelForm: "Phone Number (Optional)",
      categoryLabel: "Project Category",
      categorySelect: "-- Select Category --",
      budgetLabel: "Budget Range",
      budgetSelect: "-- Select Scale --",
      briefLabel: "Project Brief",
      briefPlaceholder: "Tell us about your goals, timelines, and technical requirements...",
      submitButton: "Send Message",
      submittingButton: "Sending Request...",
      privacyNotice: "We value your privacy. Your data is never shared with third parties."
    },
    footer: {
      tagline: "A specialized technology solutions partner dedicated to architecting high-performance systems. We build high-impact technology solutions for businesses globally.",
      expertiseTitle: "Expertise",
      companyTitle: "Company",
      founderStory: "Founder's Journey",
      contactUs: "Contact Us",
      pitchDeck: "Download Pitch Deck",
      legalTitle: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      portfolio: "Projekte",
      about: "Über uns",
      founderStory: "Gründer-Story",
      consultation: "Erstgespräch",
      getStarted: "Projekt anfragen"
    },
    hero: {
      titlePart1: "Wir entwickeln nicht nur Technologielösungen für Unternehmen – ",
      titleHighlight: "wir bauen Partnerschaften mit Menschen auf.",
      subtitle: "Ihr verlässlicher Technologiepartner für jede Phase Ihres Unternehmenswachstums – von der Neuproduktentwicklung bis zur Modernisierung von Altsystemen und Skalierung von Betriebsabläufen.",
      ctaButton: "Architektur-Erstgespräch anfragen",
      founderName: "Kabeer Shah",
      founderRole: "Gründer & Head of Client Success",
      readFounderStory: "Gründergeschichte lesen →"
    },
    trustSignals: {
      badge: "Ganzheitlicher Technologiepartner",
      title: "Ihr verlässlicher Partner für jede Phase des Unternehmenswachstums.",
      subtitle: "Ob Sie ein neues Produkt lancieren, Altsysteme modernisieren oder Prozesse optimieren möchten – wir liefern skalierbare Lösungen, die exakt zu Ihrer Vision passen.",
      stats: [
        { number: "15+", label: "Jahre Erfahrung", description: "Erprobte technische Führung" },
        { number: "50+", label: "Realisierte Lösungen", description: "Web, Mobile & Cloud-Systeme" },
        { number: "1M+", label: "Nutzer Erreicht", description: "Auf weltweiten Plattformen" },
        { number: "100%", label: "Kundenzufriedenheit", description: "Termintreue & Qualitätsgarantie" }
      ],
      partnersBadge: "Internationale Partnerschaften",
      partnersTitle: "Das Vertrauen führender Unternehmen weltweit"
    },
    services: {
      badge: "Kernkompetenzen",
      title: "Unsere Expertise",
      subtitle: "Von der Konzeption über die Bereitstellung bis zum weltweiten Rollout – wir entwickeln Technologielösungen mit spürbarer Wirkung.",
      visitProduct: "Produkt ansehen",
      items: [
        {
          title: "Business Email",
          description: "Professionelles E-Mail-Hosting für Unternehmen mit eigener Domain, höchster Sicherheit und unterbrechungsfreier Migration.",
          features: ["Eigene Domains", "Spamschutz", "Zero-Downtime Migration", "24/7 Support"],
          link: "https://email.nordible.co/"
        },
        {
          title: "Technologielösungen",
          description: "Entwicklung hochperformanter, skalierbarer Anwendungen für Web-, Mobile- und Cloud-Umgebungen.",
          features: ["Web & Mobile Apps", "Skalierbare Backends", "API-Systeme", "Cloud-Native Architektur"]
        },
        {
          title: "Unternehmenslösungen",
          description: "Entwicklung robuster digitaler Plattformen, die betriebliche Abläufe optimieren und Effizienz steigern.",
          features: ["Prozessautomatisierung", "Datenarchitektur", "Systemintegration", "Individuelle ERP/CRM-Systeme"]
        }
      ]
    },
    businessBenefits: {
      badge: "Wirtschaftlicher Mehrwert",
      title: "Entwickelt für messbaren Unternehmenserfolg",
      subtitle: "Wir richten technologische Architekturen direkt an Ihrem Umsatz und Ihrer betrieblichen Effizienz aus.",
      items: [
        { title: "Umsatz Steigern", description: "Moderne Technologielösungen konvertieren 3x besser als Altsysteme", metric: "+150% ROI" },
        { title: "Zeit Sparen", description: "Automatisierte Prozesse reduzieren manuelle Arbeit um viele Stunden pro Woche", metric: "40h/Woche gespart" },
        { title: "Schneller Skalieren", description: "Cloud-native Lösungen, die flexibel und sicher mit Ihrem Geschäft wachsen", metric: "10x Kapazität" }
      ]
    },
    portfolio: {
      badge: "Ausgewählte Arbeiten",
      title: "Unsere Technologielösungen",
      subtitle: "Wir entwickeln und skalieren hochwirksame Technologielösungen für unterschiedlichste Branchen – von B2C-Apps bis zu komplexen Healthcare-Plattformen.",
      viewLive: "Projekt ansehen",
      technologies: "Technologien",
      outcome: "Messbares Ergebnis"
    },
    pricing: {
      badge: "Transparente Zusammenarbeit",
      title: "Investitionsmodelle",
      subtitle: "Planbare Entwicklungspakete, exakt abgestimmt auf Ihre Roadmap und technische Komplexität.",
      mostPopular: "Am beliebtesten",
      ctaButton: "Paket wählen"
    },
    testimonials: {
      badge: "Kundenstimmen",
      title: "Gegründet auf Vertrauen & verlässlicher Umsetzung",
      subtitle: "Was Engineering Manager, Direktoren und Gründer über die Zusammenarbeit mit Nordible sagen."
    },
    process: {
      badge: "Strukturierte Umsetzung",
      title: "Wie wir Technologielösungen umsetzen",
      subtitle: "Ein transparenter Entwicklungsprozess nach höchsten Engineering-Standards zur Minimierung von Risiken.",
      steps: [
        { number: "01", title: "Bedarfsanalyse & Strategie", description: "Tiefgehende Analyse Ihrer Geschäftslogik, technischen Rahmenbedingungen und Ziele." },
        { number: "02", title: "Architektur & Konzeption", description: "Entwurf hochskalierbarer Systemtopologien, Datenflüsse und intuitiver UX-Schnittstellen." },
        { number: "03", title: "Agile Entwicklung", description: "Iterative Sprints mit sauberem Code, automatisierten Tests und kontinuierlicher Auslieferung." },
        { number: "04", title: "Bereitstellung & Skalierung", description: "Produktionsabsicherung, 24/7 Monitoring und proaktive architektonische Skalierung." }
      ]
    },
    about: {
      badge: "Unternehmensprofil",
      title: "Technologielösungen",
      titleHighlight: "Partner",
      desc1: "Nordible Technologies ist ein spezialisierter Technologiepartner für hochperformante digitale Systeme. Wir entwickeln nicht nur – wir konzipieren und implementieren Technologielösungen, die reale geschäftliche Herausforderungen skalierbar lösen.",
      desc2: "Von plattformübergreifenden Consumer-Apps bis hin zu komplexen Enterprise-Architekturen für globale Organisationen decken wir das gesamte Technologiespektrum ab. Wir stehen für wissenschaftlich fundiertes UX-Design, sauberes Engineering und ausfallsichere Architekturen.",
      stat1Number: "15+",
      stat1Label: "Jahre Erfahrung",
      stat2Number: "50+",
      stat2Label: "Lösungen Realisiert",
      qualities: [
        { title: "Sauberes Engineering", description: "Wir schreiben robusten, wartbaren Code, der langfristig skaliert." },
        { title: "Schnelle Umsetzung", description: "Wir liefern Funktionen und Systeme mit höchster Geschwindigkeit und technischer Präzision." },
        { title: "Geschäftsorientiert", description: "Wir bauen keine Technologie um der Technologie willen, sondern Werkzeuge, die echten geschäftlichen Mehrwert schaffen." }
      ],
      founderStoryLinkBadge: "LERNEN SIE DEN GRÜNDER KENNEN",
      founderStoryLinkTitle: "Der persönliche Werdegang von Kabeer Shah",
      founderStoryLinkDesc: "Von über 15 Jahren technischer Leitung für Fintech-Unicorns und Healthcare-Konzerne bis zur Gründung von Nordible Technologies.",
      founderStoryLinkButton: "Werdegang des Gründers lesen →"
    },
    founderPage: {
      backToHome: "Zurück zur Startseite",
      badge: "DER WERDEGANG DES GRÜNDERS",
      title: "Direkte Führung, technische Exzellenz & echte Partnerschaft",
      subtitle: "Über 15 Jahre Erfahrung in Software-Architektur, unternehmerischer Beratung und geschäftskritischer Cloud-Skalierung.",
      quote: "„Die besten Technologielösungen entstehen nicht isoliert – sie wachsen aus dem aufmerksamen Zuhören bei geschäftlichen Herausforderungen und der Leidenschaft für präzises Engineering.“",
      quoteAuthor: "Kabeer Shah",
      quoteRole: "Gründer & Solutions Lead",
      introTitle: "Vom passionierten Ingenieur zum strategischen Technologiepartner",
      introP1: "Mit über 15 Jahren praxiserprobter Erfahrung im Bereich Software- und Systemarchitektur gründete Kabeer Shah Nordible Technologies mit einem klaren Leitsatz: Technologie muss stets messbare geschäftliche Resultate durch verlässliche menschliche Partnerschaften schaffen.",
      introP2: "Nachdem er geschäftskritische Systeme für Fortune-500-Gesundheitsunternehmen wie GE Healthcare und Baxter/Vantive entworfen und Teams bei Fintech-Unicorns wie Nium Inc. (Instarem) geleitet hat, vereint Kabeer tiefes Fachwissen – von regulatorischer Compliance (PCI-DSS, HIPAA) bis hin zu strategischer Führung.",
      introP3: "Anders als bei anonymen Agenturen mit vielen Zwischenebenen führt Kabeer die strategische Beratung, Konzeption und architektonische Umsetzung persönlich – für eine direkte Kommunikation ohne Reibungsverluste und 100% Verbindlichkeit.",
      milestonesTitle: "Berufliche Meilensteine & Technische Führung",
      milestonesSubtitle: "Eine nachweisbare Erfolgsbilanz bei der Entwicklung skalierbarer Systeme in internationalen Branchen.",
      milestones: [
        {
          period: "Enterprise Healthcare",
          role: "Tech Lead / Engineering Manager",
          company: "Quest Global (GE Healthcare & Baxter/Vantive)",
          description: "Entwicklung geschäftskritischer Systeme für GE Healthcare (OncoCare-Plattform) und Baxter/Vantive (RST AWS IoT-Diagnostik) unter strenger Einhaltung von FDA- und HIPAA-Standards.",
          tags: ["GE Healthcare", "Baxter / Vantive", "AWS IoT", "HIPAA Compliance"]
        },
        {
          period: "Fintech Unicorn",
          role: "Engineering Lead / Interim Head of Engineering",
          company: "Nium Inc. (Instarem)",
          description: "Aufbau und Leitung von 18+ Ingenieuren, API-Großintegrationen (PhonePe), PCI-DSS Level 1 Sicherheitsaudits und internationale Transaktionsabwicklung.",
          tags: ["Fintech Unicorn", "PCI-DSS Level 1", "18+ Teamleitung", "Hochvolumen-APIs"]
        },
        {
          period: "Digitale Medien & Skalierung",
          role: "Lead Senior Software Engineer (SDE-3)",
          company: "The Parent Inc. (TickledMedia)",
          description: "Architektur von Microservices und Micro-Frontends für die Parents.VIP-Plattform mit Millionen aktiven Nutzern.",
          tags: ["Microservices", "Micro-Frontends", "Datenbank-Migrationen", "High Concurrency"]
        },
        {
          period: "KI & Innovation",
          role: "Senior AI / Full-Stack Engineer & Co-Founder",
          company: "SmarTek21 & NerdsPal",
          description: "Entwicklung der SmartbotHub NLP-Chatbot-Plattform (Best Performer Award) und Aufbau interaktiver EdTech-Systeme.",
          tags: ["NLP Chatbots", "KI-Systeme", "Cloud-Architektur"]
        }
      ],
      valuesTitle: "Unsere Handlungsprinzipien",
      values: [
        { title: "Direkter Gründerkontakt", description: "Sie sprechen und arbeiten direkt mit dem Gründer und Chefarchitekten. Keine Mittelsmänner, keine Übergabe an Junioren." },
        { title: "Wirtschaftliche Ausrichtung", description: "Jede architektonische Entscheidung dient Ihrem ROI, Ihrer Umsetzungsgeschwindigkeit und Kundenbindung." },
        { title: "Keine technischen Schulden", description: "Sauberer, modularer Code mit automatisierten Tests, der sicher mit Ihrem Unternehmenswachstum skaliert." }
      ],
      ctaHeading: "Möchten Sie Ihre Technologiestrategie besprechen?",
      ctaSubtitle: "Vereinbaren Sie ein unverbindliches Erstgespräch mit Kabeer Shah, um Ihre Roadmap, Systemarchitektur oder Neuproduktentwicklung strukturiert zu planen.",
      ctaButton: "Erstgespräch mit dem Gründer anfragen →"
    },
    contact: {
      badge: "Projektanfrage starten",
      title: "Lassen Sie uns",
      titleHighlight: "etwas Großartiges schaffen",
      subtitle: "Bereit, Ihre Vision in ein hochperformantes System zu verwandeln? Lassen Sie uns sprechen.",
      methodsTitle: "Kontaktmöglichkeiten",
      emailLabel: "E-Mail-Adresse",
      phoneLabel: "Telefon & WhatsApp",
      headquartersLabel: "Hauptsitz",
      headquartersValue: "Nordible Technologies\nBreitlacherstraße 101, 60489 Frankfurt, Deutschland",
      protocolTitle: "Reaktionszeit",
      protocolText: "Durchschnittliche Antwortzeit unter 24 Stunden. Wir priorisieren zukunftsweisende Projekte.",
      fullNameLabel: "Vollständiger Name",
      emailAddressLabel: "E-Mail-Adresse",
      phoneLabelForm: "Telefonnummer (Optional)",
      categoryLabel: "Projektkategorie",
      categorySelect: "-- Kategorie wählen --",
      budgetLabel: "Budgetrahmen",
      budgetSelect: "-- Budget wählen --",
      briefLabel: "Projektbeschreibung",
      briefPlaceholder: "Erzählen Sie uns von Ihren Zielen, Zeitplänen und technischen Anforderungen...",
      submitButton: "Nachricht senden",
      submittingButton: "Wird gesendet...",
      privacyNotice: "Wir schätzen Ihre Privatsphäre. Ihre Daten werden niemals an Dritte weitergegeben."
    },
    footer: {
      tagline: "Ein spezialisierter Technologiepartner für hochperformante Systeme. Wir entwickeln wirkungsvolle Technologielösungen für Unternehmen weltweit.",
      expertiseTitle: "Leistungen",
      companyTitle: "Unternehmen",
      founderStory: "Werdegang des Gründers",
      contactUs: "Kontakt",
      pitchDeck: "Pitch Deck herunterladen",
      legalTitle: "Rechtliches",
      privacy: "Datenschutzerklärung",
      terms: "Impressum & AGB",
      rights: "Alle Rechte vorbehalten."
    }
  }
};
