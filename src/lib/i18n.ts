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
    investmentModels: string;
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
    partnersLabel: string;
    clientsHeading: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    tagGrowth?: string;
    tagTech?: string;
    visitProduct: string;
    inquireService: string;
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
    keyMetrics: string;
    of: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    mostPopular: string;
    ctaButton: string;
    teaserText: string;
    exploreModels: string;
    backToHome: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      company: string;
      rating: number;
      text: string;
      avatar: string;
    }>;
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
    founderPortal: string;
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
      getStarted: "Get Started",
      investmentModels: "Investment Models"
    },
    hero: {
      titlePart1: "We don’t just build technology solutions for businesses—",
      titleHighlight: "we build partnerships with people.",
      subtitle: "Your complete technology partner for every stage of business growth—whether you need to launch a new product, modernize legacy systems, or optimize operations.",
      ctaButton: "Schedule Free Consultation",
      founderName: "Kabeer Shah",
      founderRole: "Founder & Head of Client Success",
      readFounderStory: "Read founder's story →"
    },
    trustSignals: {
      badge: "",
      title: "Proven Results Across Industries",
      subtitle: "",
      stats: [
        { number: "15+", label: "Years Experience", description: "Battle-tested leadership" },
        { number: "50+", label: "Solutions Delivered", description: "Across web, mobile & cloud" },
        { number: "1M+", label: "Users Served", description: "Across global platforms" },
        { number: "24h", label: "Response Time", description: "Rapid Direct Sync" },
        { number: "100%", label: "Delivery Rate", description: "On-Time Excellence" },
        { number: "Direct", label: "Founder Lead", description: "No Middlemen" }
      ],
      partnersLabel: "",
      clientsHeading: "Trusted by Industry Leaders & Innovators"
    },
    services: {
      badge: "",
      title: "How We Empower Your Business",
      subtitle: "",
      tagGrowth: "🚀 Grow Your Business: Marketing & Social Media",
      tagTech: "💻 Build Your Product: Tech Solutions & Systems",
      visitProduct: "Visit Product",
      inquireService: "Discuss Solution",
      items: [
        {
          title: "Digital Marketing & Social Media Management",
          description: "We manage your social media channels, create engaging content, and optimize your presence so your business gets discovered by high-intent clients on Google, AI engines, and social platforms.",
          features: ["Social Media Channel Management", "AI Search & Google Visibility (GEO)", "Paid Campaigns & Lead Generation", "Brand Engagement & Growth"]
        },
        {
          title: "Technology Solutions",
          description: "We design and build custom websites, web tools, and mobile apps tailored to your business needs—fast, reliable, and user-friendly on every device.",
          features: ["Custom Web & Mobile Apps", "Modern Websites & Portals", "Reliable & Scalable Software", "100% Code Ownership"]
        },
        {
          title: "Business Systems & Automation",
          description: "We connect your everyday software tools and automate repetitive tasks, saving your team countless hours and letting your business run smoothly on autopilot.",
          features: ["Workflow & Process Automation", "Tool & System Integrations", "Custom Dashboards & Portals", "Operational Time Savings"]
        },
        {
          title: "Business Email & Setup",
          description: "Get secure, branded company email (you@yourcompany.com) with custom domains, spam protection, and hassle-free setup.",
          features: ["Custom Branded Domains", "Advanced Spam & Security Defense", "Hassle-Free Migration", "24/7 Reliable Support"],
          link: "https://email.nordible.co/"
        }
      ]
    },
    businessBenefits: {
      badge: "",
      title: "Why High-Growth Companies Choose Nordible",
      subtitle: "",
      items: [
        {
          title: "Speedy Results",
          description: "Agile, rapid sprint cycles delivering functional prototypes and working systems in weeks, not months.",
          metric: "2–4 Wks MVP"
        },
        {
          title: "Proven Track Record",
          description: "15+ years delivering successful digital platforms, marketing growth, and technology solutions for global brands and growing businesses.",
          metric: "15+ Yrs Depth"
        },
        {
          title: "Complete Accountability",
          description: "Direct founder responsibility. No junior handoffs, no middle management—we take full ownership of your deliverables and success.",
          metric: "100% Ownership"
        },
        {
          title: "Results-Driven Focus",
          description: "Every decision is focused on driving customer acquisition, team productivity, and commercial return on investment.",
          metric: "Commercial Impact"
        },
        {
          title: "Reliability & Quality",
          description: "Highest German quality standards, clear communication, and an uncompromised 100% on-time delivery record.",
          metric: "100% On-Time"
        }
      ]
    },
    portfolio: {
      badge: "",
      title: "Featured Client Results & Solutions",
      subtitle: "",
      viewLive: "View Live Project",
      technologies: "Technologies",
      outcome: "Measurable Outcome",
      keyMetrics: "Key Metrics",
      of: "of"
    },
    pricing: {
      badge: "",
      title: "How We Work Together",
      subtitle: "",
      mostPopular: "Most Popular",
      ctaButton: "Select Scope",
      teaserText: "",
      exploreModels: "Explore How We Work Together",
      backToHome: "Back to Overview"
    },
    testimonials: {
      badge: "",
      title: "What Business & Tech Leaders Say",
      subtitle: "",
      items: [
        {
          name: "Majeed Shams",
          role: "Founder",
          company: "Shams Consult",
          rating: 5,
          text: "Nordible transformed our digital platforms and marketing infrastructure. Their combined mastery of modern web architecture and AI-driven discoverability (GEO) has generated tangible commercial growth.",
          avatar: "/images/logos/shams-consult-logo.png"
        },
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "Healthcare Tech",
          rating: 5,
          text: "Nordible delivered an exceptional healthcare platform that exceeded our expectations. Their attention to detail and technical expertise made the project a huge success.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Vrishank Shete",
          role: "Tech Lead",
          company: "Baxter Healthcare",
          rating: 5,
          text: "The architectural depth Nordible brings to technology solutions is rare. They didn't just write code; they built a resilient infrastructure that handles our scale effortlessly.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    process: {
      badge: "",
      title: "How We Work With You",
      subtitle: "",
      steps: [
        { number: "01", title: "Discovery & Goals", description: "Understanding your business goals, target audience, and key operational needs." },
        { number: "02", title: "Strategy & Planning", description: "Mapping out a clear roadmap, intuitive user experience, and practical solutions before building." },
        { number: "03", title: "Rapid Execution", description: "Fast, focused sprints with frequent progress updates and working deliverables." },
        { number: "04", title: "Launch & Growth", description: "Smooth deployment, ongoing support, and proactive optimization to ensure sustained business growth." }
      ]
    },
    about: {
      badge: "Company Profile",
      title: "AI-Native Business Technology",
      titleHighlight: "Partner",
      desc1: "Nordible Technologies empowers businesses with tech. Operating as an AI-native business technology partner, we deliver production-grade technology solutions, resilient cloud architectures, and high-impact social media channel management that drive measurable revenue.",
      desc2: "From rapid MVP engineering to comprehensive enterprise software platforms and data-driven social media growth, we eliminate traditional agency bloat by pairing 15+ years of senior systems architecture with autonomous AI workflows.",
      stat1Number: "15+",
      stat1Label: "Years Experience",
      stat2Number: "50+",
      stat2Label: "Solutions Shipped",
      qualities: [
        { title: "Empowering Businesses With Tech", description: "We engineer pragmatic, high-impact technology solutions and automated workflows built for commercial ROI." },
        { title: "AI-Native Velocity & Rigor", description: "Leveraging autonomous AI pipelines to build scalable technology solutions and manage social media channels at 10x speed." },
        { title: "Principal-Led Accountability", description: "Direct collaboration with founder Kabeer Shah—ensuring enterprise-grade architecture, zero junior handoffs, and 100% IP ownership." }
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
      headquartersValue: "Nordible Technologies\nBreitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany",
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
      founderPortal: "Founder Portal",
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
      getStarted: "Projekt anfragen",
      investmentModels: "Investitionsmodelle"
    },
    hero: {
      titlePart1: "Wir entwickeln nicht nur Technologielösungen für Unternehmen – ",
      titleHighlight: "wir bauen Partnerschaften mit Menschen auf.",
      subtitle: "Ihr verlässlicher Technologiepartner für jede Phase Ihres Unternehmenswachstums – von der Neuproduktentwicklung bis zur Modernisierung von Altsystemen und Skalierung von Betriebsabläufen.",
      ctaButton: "Kostenfreies Erstgespräch anfragen",
      founderName: "Kabeer Shah",
      founderRole: "Gründer & Head of Client Success",
      readFounderStory: "Gründergeschichte lesen →"
    },
    trustSignals: {
      badge: "",
      title: "Erprobte Ergebnisse für wachsende Unternehmen",
      subtitle: "",
      stats: [
        { number: "15+", label: "Jahre Erfahrung", description: "Erprobte technische Führung" },
        { number: "50+", label: "Realisierte Lösungen", description: "Web, Mobile & Cloud-Systeme" },
        { number: "1M+", label: "Nutzer Erreicht", description: "Auf weltweiten Plattformen" },
        { number: "24h", label: "Reaktionszeit", description: "Schnelle direkte Abstimmung" },
        { number: "100%", label: "Lieferquote", description: "Pünktliche Spitzenqualität" },
        { number: "Direkt", label: "Gründergeführt", description: "Ohne Zwischenhändler" }
      ],
      partnersLabel: "",
      clientsHeading: "Vertraut von Branchenführern & Innovatoren"
    },
    services: {
      badge: "",
      title: "Wie wir Ihr Unternehmen voranbringen",
      subtitle: "",
      tagGrowth: "🚀 Wachstum & Bekanntheit: Marketing & Social Media",
      tagTech: "💻 Entwicklung & Effizienz: Technologielösungen & Systeme",
      visitProduct: "Produkt ansehen",
      inquireService: "Lösung anfragen",
      items: [
        {
          title: "Digitales Marketing & Social-Media-Management",
          description: "Wir übernehmen Ihr Social-Media-Kanalmanagement, erstellen überzeugende Inhalte und optimieren Ihre Auffindbarkeit in Google und KI-Suchsystemen, um kontinuierlich Neukunden zu gewinnen.",
          features: ["Social-Media-Kanalmanagement", "Sichtbarkeit in Google & KI-Suche (GEO)", "Zielgerichtete Werbekampagnen", "Nachhaltiger Markenaufbau"]
        },
        {
          title: "Technologielösungen",
          description: "Wir konzipieren und entwickeln maßgeschneiderte Websites, mobile Apps und digitale Plattformen für Ihr Unternehmen – schnell, zuverlässig und intuitiv bedienbar.",
          features: ["Individuelle Web- & Mobile-Apps", "Moderne Websites & Portale", "Ausfallsichere Software", "100 % Eigentum am Code"]
        },
        {
          title: "Geschäftsprozess-Automatisierung & Systeme",
          description: "Wir vernetzen Ihre bestehenden Software-Tools und automatisieren zeitraubende manuelle Routineaufgaben, damit Ihr Geschäftsbetrieb effizient und fehlerfrei läuft.",
          features: ["Workflow- & Prozessautomatisierung", "System- & Tool-Integrationen", "Individuelle Dashboards & Portale", "Messbare Zeitersparnis"]
        },
        {
          title: "Business Email & Setup",
          description: "Professionelle geschäftliche E-Mail-Adressen (ihrname@ihrunternehmen.de) mit eigener Domain, wirksamem Spamschutz und reibungsloser Einrichtung.",
          features: ["Eigene Firmen-Domains", "Zuverlässiger Spam- & Virenschutz", "Unterbrechungsfreie Migration", "24/7 Persönlicher Support"],
          link: "https://email.nordible.co/"
        }
      ]
    },
    businessBenefits: {
      badge: "",
      title: "Warum führende Unternehmen Nordible wählen",
      subtitle: "",
      items: [
        {
          title: "Schnelle Ergebnisse",
          description: "Agile, zügige Sprints mit funktionsfähigen Prototypen und Produktivsystemen in Wochen statt Monaten.",
          metric: "2–4 Woc. MVP"
        },
        {
          title: "Langjährige Praxiserfahrung",
          description: "Über 15 Jahre Erfahrung im Aufbau erfolgreicher digitaler Lösungen und Marketingstrategien für globale Marken und mittelständische Unternehmen.",
          metric: "15+ Jahre Tiefe"
        },
        {
          title: "Volle Verantwortung",
          description: "Direkte Gründerverantwortung ohne Zwischenebenen oder Junior-Übergaben – wir stehen für Ihre Ergebnisse und termintreue Lieferung ein.",
          metric: "100% Verbindlich"
        },
        {
          title: "Ergebnisorientierter Fokus",
          description: "Jede Maßnahme zielt direkt auf Kundengewinnung, gesteigerte Produktivität und messbaren geschäftlichen Return on Investment ab.",
          metric: "Messbarer Nutzen"
        },
        {
          title: "Verlässlichkeit & Qualität",
          description: "Verlässliche deutsche Qualitätsstandards, transparente Kommunikation und eine makellose 100%-Lieferquote.",
          metric: "100% Termintreue"
        }
      ]
    },
    portfolio: {
      badge: "",
      title: "Erfolgreiche Kundenprojekte & Ergebnisse",
      subtitle: "",
      viewLive: "Projekt ansehen",
      technologies: "Technologien",
      outcome: "Messbares Ergebnis",
      keyMetrics: "Kernmetriken",
      of: "von"
    },
    pricing: {
      badge: "",
      title: "Wie wir zusammenarbeiten",
      subtitle: "",
      mostPopular: "Am beliebtesten",
      ctaButton: "Umfang anfragen",
      teaserText: "",
      exploreModels: "Zusammenarbeitsmodelle ansehen",
      backToHome: "Zurück zur Übersicht"
    },
    testimonials: {
      badge: "",
      title: "Was Kunden & Unternehmenslenker sagen",
      subtitle: "",
      items: [
        {
          name: "Majeed Shams",
          role: "Gründer",
          company: "Shams Consult",
          rating: 5,
          text: "Nordible hat unsere digitalen Plattformen und unsere Marketing-Infrastruktur grundlegend transformiert. Die Kombination aus moderner Web-Architektur und KI-Suchmaschinenoptimierung (GEO) sorgt für spürbares geschäftliches Wachstum.",
          avatar: "/images/logos/shams-consult-logo.png"
        },
        {
          name: "Sarah Johnson",
          role: "Produktmanagerin",
          company: "Healthcare Tech",
          rating: 5,
          text: "Nordible lieferte eine herausragende Healthcare-Plattform, die unsere Erwartungen übertroffen hat. Ihre Liebe zum Detail und ihre technische Expertise machten das Projekt zu einem vollen Erfolg.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Vrishank Shete",
          role: "Technischer Leiter",
          company: "Baxter Healthcare",
          rating: 5,
          text: "Die architektonische Tiefe, die Nordible in Technologielösungen einbringt, ist außergewöhnlich. Sie haben nicht nur Code geschrieben, sondern eine widerstandsfähige Infrastruktur aufgebaut, die unsere Skalierung mühelos bewältigt.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    process: {
      badge: "",
      title: "Wie wir mit Ihnen zusammenarbeiten",
      subtitle: "",
      steps: [
        { number: "01", title: "Bedarf & Ziele", description: "Verständnis Ihrer geschäftlichen Ziele, Zielgruppen und zentralen Herausforderungen." },
        { number: "02", title: "Strategie & Planung", description: "Ausarbeitung eines klaren Fahrplans, intuitiver Nutzerführung und praxistauglicher Lösungen vor der Umsetzung." },
        { number: "03", title: "Zügige Umsetzung", description: "Schnelle, fokussierte Sprints mit regelmäßigen Zwischenständen und direkt funktionierenden Ergebnissen." },
        { number: "04", title: "Launch & Wachstum", description: "Reibungsloser Start, verlässliche Begleitung und proaktive Optimierung für kontinuierliches Wachstum." }
      ]
    },
    about: {
      badge: "Unternehmensprofil",
      title: "KI-nativer Business-Technologie",
      titleHighlight: "Partner",
      desc1: "Nordible Technologies stärkt Unternehmen durch Technologie. Als KI-nativer Business-Technologiepartner liefern wir produktionsreife Technologielösungen, ausfallsichere Cloud-Architekturen und zielgerichtetes Social-Media-Kanalmanagement für nachhaltiges Geschäftswachstum.",
      desc2: "Von schneller MVP-Entwicklung bis hin zu komplexen Unternehmensplattformen und Wachstumsinitiativen eliminieren wir klassischen Agentur-Ballast durch die direkte Verbindung von 15+ Jahren Senior-Architektur mit autonomen KI-Workflows.",
      stat1Number: "15+",
      stat1Label: "Jahre Erfahrung",
      stat2Number: "50+",
      stat2Label: "Lösungen Realisiert",
      qualities: [
        { title: "Unternehmen durch Technologie stärken", description: "Wir entwickeln pragmatische, hochwirksame Technologielösungen und automatisierte Prozesse für echten geschäftlichen Return on Investment." },
        { title: "KI-native Geschwindigkeit & Präzision", description: "Einsatz autonomer KI-Pipelines zur Entwicklung von Technologielösungen und zum Management von Social-Media-Kanälen in 10-facher Geschwindigkeit." },
        { title: "Direkte Gründerverantwortung", description: "Direkte Zusammenarbeit mit Gründer Kabeer Shah – für Enterprise-Architektur auf höchstem Niveau, ohne Zwischenhändler und mit 100 % Eigentum am Code." }
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
      founderPortal: "Gründer-Portal",
      contactUs: "Kontakt",
      pitchDeck: "Pitch Deck herunterladen",
      legalTitle: "Rechtliches",
      privacy: "Datenschutzerklärung",
      terms: "Impressum & AGB",
      rights: "Alle Rechte vorbehalten."
    }
  }
};
