export const SUPPORTED_LANGUAGES = [
  { code: 'de', label: 'Deutsch', shortLabel: 'DE' },
  { code: 'en', label: 'English', shortLabel: 'EN' }
] as const;

export type Language = typeof SUPPORTED_LANGUAGES[number]['code'];
export const DEFAULT_LANGUAGE: Language = 'de';
export const NON_DEFAULT_LANGUAGES: Language[] = SUPPORTED_LANGUAGES
  .map(l => l.code)
  .filter((code): code is Language => code !== DEFAULT_LANGUAGE);

export interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    caseStudies: string;
    about: string;
    founderStory: string;
    consultation: string;
    getStarted: string;
    investmentModels: string;
  };
  hero: {
    rotatingTitles: string[];
    titlePart1: string;
    titleHighlight: string;
    capabilities: string;
    locationAnchor: string;
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
    timelineLabel: string;
    includedFeaturesLabel: string;
    customScopeTitle: string;
    customScopeDesc: string;
    tiers: Array<{
      name: string;
      duration: string;
      focus: string;
    }>;
    packages: Array<{
      name: string;
      duration: string;
      badge?: string;
      description: string;
      features: string[];
      popular: boolean;
    }>;
    guarantees: Array<{
      title: string;
      desc: string;
    }>;
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
      avatar?: string;
      language?: string;
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
    pageBreadcrumb: string;
    coreValuesHeading: string;
    engineeringPillarsHeading: string;
    engineeringPillarsSubheading: string;
    engineeringPillars: Array<{
      badge: string;
      title: string;
      description: string;
    }>;
  };
  motto: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      tag: string;
      title: string;
      description: string;
    }>;
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
      highlights?: string[];
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
    languageNotice: string;
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
    regionalHub: {
      title: string;
      subtitle: string;
      viewAll: string;
      coreServices: string;
      serviceLinks: Array<{ label: string; path: string }>;
    };
  };
  notFound: {
    badge: string;
    title: string;
    description: string;
    backHome: string;
    exploreServices: string;
    quickLinksTitle: string;
    links: {
      services: string;
      founderStory: string;
      investmentModels: string;
      blog: string;
      contact: string;
    };
  };
  blogTeaser: {
    badge: string;
    exploreAll: string;
  };
  blogPost: {
    fullscreen: string;
    closeFullscreen: string;
    executiveTakeaway: string;
    whatYouSee: string;
    businessBenefit: string;
    exploreLiveWebsite: string;
    clientPracticePartner: string;
    shareArticle: string;
    linkCopied: string;
    copyCode: string;
    codeCopied: string;
    notFoundBadge: string;
    notFoundTitle: string;
    notFoundDesc: string;
    notFoundBackBtn: string;
  };
  homeFaq: Array<{ q: string; a: string }>;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      caseStudies: "Case Studies",
      about: "About",
      founderStory: "Founder Story",
      consultation: "Consultation",
      getStarted: "Get Started",
      investmentModels: "Investment Models"
    },
    hero: {
      rotatingTitles: [
        "Solve Bigger Problems",
        "Always Prioritize People",
        "Build for the Long Term"
      ],
      titlePart1: "Technology & Marketing Partner in ",
      titleHighlight: "Frankfurt & Rhein-Main.",
      capabilities: "Custom software & AI systems paired with data-driven marketing.",
      locationAnchor: "Frankfurt am Main & Rhein-Main · Regional, Nationwide & Global",
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
        { number: "10x", label: "Delivery Velocity", description: "AI-native speed & precision" },
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
          title: "Video Editing & Content Production",
          description: "We edit professional videos for social media, marketing campaigns, presentations, and brand communication—clear, engaging, and tailored to your audience.",
          features: ["Short-form Social Videos", "Reels & Promotional Videos", "Subtitles, Captions & Motion Graphics", "Brand-focused Editing"]
        },
        {
          title: "AI Agent Implementation",
          description: "We implement practical AI agents that automate workflows, support teams, connect business tools, and help companies work faster and more efficiently.",
          features: ["Custom AI Agent Workflows", "Business Process Automation", "Tool & API Integrations", "AI Strategy and Deployment"]
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
          description: "Delivering high-impact digital platforms, revenue growth, and scalable technology solutions for global brands and growing businesses.",
          metric: "Proven Impact"
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
      title: "Client Results & Solutions",
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
      subtitle: "Flexible collaboration models engineered for rapid velocity, complete transparency, and 100% intellectual property ownership.",
      mostPopular: "Most Popular",
      ctaButton: "Select Scope",
      teaserText: "",
      exploreModels: "Explore How We Work Together",
      backToHome: "Back to Overview",
      timelineLabel: "Timeline",
      includedFeaturesLabel: "Included Capabilities:",
      customScopeTitle: "Have a custom project scope?",
      customScopeDesc: "We design custom architectures and flexible engagement frameworks tailored to your specific organizational goals.",
      tiers: [
        {
          name: "Rapid MVP",
          duration: "2-4 Weeks",
          focus: "Rapid Node.js & Next.js prototyping & market validation"
        },
        {
          name: "Production Platform",
          duration: "6-10 Weeks",
          focus: "Nearshore software development with German architecture & dedicated squads"
        },
        {
          name: "Enterprise Architecture",
          duration: "12+ Weeks",
          focus: "Enterprise Node.js microservices, multi-region cloud & compliance"
        }
      ],
      packages: [
        {
          name: "Rapid MVP",
          duration: "2-4 weeks",
          badge: "Fast-Track Launch",
          description: "Rapid development of high-impact prototypes and core products with modern Node.js, Next.js & TypeScript. Tailored to your specific budget and functional requirements.",
          features: [
            "Requirements & Architecture Discovery",
            "Modern Node.js & TypeScript Stack",
            "Science-Backed UX Core (Thumb-Zone Optimized)",
            "Cloud-Native Deployment (AWS / Vercel)",
            "Performance & Conversion Analytics",
            "Security & SSL Verification",
            "30 Days Post-Launch Support"
          ],
          popular: false
        },
        {
          name: "Production Platform",
          duration: "6-10 weeks",
          badge: "Nearshore Scaling",
          description: "Scalable nearshore software development paired with German project leadership. Full-lifecycle web, mobile, and cloud platforms built for high user concurrency.",
          features: [
            "End-to-End Product & Technical Strategy",
            "Scalable Nearshore Software Engineering Squads",
            "Node.js Microservices & API Orchestration",
            "Cross-Platform Mobile (iOS & Android) & Web",
            "High-Availability Cloud Architecture & CI/CD",
            "Infrastructure as Code (IaC) & Automated Tests",
            "90 Days Dedicated Operational Support"
          ],
          popular: true
        },
        {
          name: "Enterprise Architecture",
          duration: "12-24 weeks",
          badge: "Enterprise Mission-Critical",
          description: "Complex technology ecosystems for global industry leaders. High-concurrency Node.js systems, autonomous AI agent pipelines, and strict GDPR / ISO compliance.",
          features: [
            "Multi-Region Cloud Deployment & Failover",
            "Enterprise Node.js Backend & Custom APIs",
            "AI Agent Workflows & GEO Search Integration",
            "Enterprise Security & DSGVO/GDPR Stack",
            "High-Availability Clustering & Zero-Downtime Releases",
            "Full Data Sovereignty & 100% IP Ownership",
            "6 Months Priority Architecture Support"
          ],
          popular: false
        }
      ],
      guarantees: [
        {
          title: "100% IP Ownership",
          desc: "All source code, architectural assets, and intellectual property remain 100% yours with zero vendor lock-in."
        },
        {
          title: "Predictable Sprints",
          desc: "Structured sprint cycles with weekly demos, clear deliverables, and zero scope drift."
        },
        {
          title: "Enterprise Security",
          desc: "Built to European GDPR and enterprise security standards with automated compliance checks."
        }
      ]
    },
    testimonials: {
      badge: "",
      title: "What Business & Tech Leaders Say",
      subtitle: "",
      items: [
        {
          name: "Shams Consult",
          role: "Architecture & Urban Planning",
          company: "Google Review",
          rating: 5,
          text: "Für Shams Consult ist absolute Detailgenauigkeit entscheidend – das gilt auch für unsere digitale Infrastruktur. Die Zusammenarbeit mit Kabeer Shah hebt sich deutlich von klassischen Agenturen ab. Herr Shah hat nicht nur unseren Webauftritt optimiert und unsere regionalen Promotions sowie Videoschnitte koordiniert, sondern auch maßgeschneiderte KI-Agenten implementiert, die unsere täglichen Workflows entlasten. Besonders schätzen wir den direkten Zugang auf Gründerebene: Es gibt keine Reibungsverluste durch Zwischeninstanzen oder Juniormanager. Kabeer Shah agiert als echter, strategischer Partner, der unsere Geschäftsprozesse versteht und technische Lösungen mit Fokus auf eine nachhaltige, langfristige Zusammenarbeit liefert.",
          language: "de"
        },
        {
          name: "Amruth Jai",
          role: "Verified Client",
          company: "Google Review",
          rating: 5,
          text: "Die Zusammenarbeit mit Nordible Technologies hat mir sehr viel Spaß gemacht. Kabeer ist ein absolut professioneller und erfahrener Architekt für technische Lösungen. Ich würde Nordible Technologies jedem empfehlen, der in Frankfurt professionelle geschäftliche E-Mail-Lösungen, maßgeschneiderte Software, Social-Media-Management oder Marketing-Dienstleistungen sucht.",
          language: "de"
        },
        {
          name: "Vrishank Shete",
          role: "Senior Principal Engineer",
          company: "Vantive International (Baxter Healthcare) · LinkedIn",
          rating: 5,
          text: "I had the opportunity to work with Kabeer Shah at Vantive (Baxter Healthcare) on strategic initiatives for our Remote Service Tool platform. Kabeer consistently demonstrated exceptional product and engineering leadership, driving architectural direction, aligning cross-functional teams, and making decisions that significantly improved operational efficiency and business outcomes. His ability to combine technical strategy, stakeholder alignment, and execution clarity sets him apart. Kabeer thinks and operates like an executive leader, and any organization would benefit greatly from his vision, ownership, and strategic mindset.",
          language: "en"
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
      desc1: "Nordible Technologies empowers businesses with technology and creative content. As an AI-native business technology partner, we deliver production-grade technology solutions, AI agent implementation, resilient cloud architectures, digital marketing, social media management, and professional video editing that drive measurable revenue.",
      desc2: "From rapid MVP and product builds to comprehensive enterprise software platforms and data-driven social media growth, we eliminate traditional agency bloat by pairing enterprise-grade systems architecture with autonomous AI workflows.",
      stat1Number: "10x",
      stat1Label: "Delivery Speed",
      stat2Number: "50+",
      stat2Label: "Solutions Shipped",
      qualities: [
        { title: "Empowering Businesses With Tech", description: "We build pragmatic, high-impact tech solutions and automated workflows tailored for commercial ROI." },
        { title: "AI-Native Velocity & Rigor", description: "Leveraging autonomous AI pipelines to build scalable technology solutions and manage social media channels at 10x speed." },
        { title: "Principal-Led Accountability", description: "Direct collaboration with founder Kabeer Shah—ensuring enterprise-grade architecture, zero junior handoffs, and 100% IP ownership." }
      ],
      founderStoryLinkBadge: "MEET THE FOUNDER",
      founderStoryLinkTitle: "Discover the Journey of Kabeer Shah",
      founderStoryLinkDesc: "From leading tech teams for Fintech unicorns and Healthcare enterprises to founding Nordible Technologies.",
      founderStoryLinkButton: "Read Founder's Journey →",
      pageBreadcrumb: "About Us",
      coreValuesHeading: "Core Operating Principles",
      engineeringPillarsHeading: "Architectural Rigor & Engineering Capacity",
      engineeringPillarsSubheading: "How we combine Frankfurt-based project leadership with scalable nearshore delivery squads.",
      engineeringPillars: [
        {
          badge: "Nearshore Software Development",
          title: "German Leadership + Scalable Nearshore Squads",
          description: "Direct founder accountability and local project direction in Frankfurt am Main, coupled with cost-efficient nearshore software engineering squads that scale on demand."
        },
        {
          badge: "Node.js System Architecture",
          title: "High-Performance Node.js & Fullstack Systems",
          description: "High-throughput Node.js microservices, Next.js serverless runtimes, and resilient TypeScript architectures built for speed, zero regressions, and enterprise uptime."
        },
        {
          badge: "100% IP Ownership",
          title: "Zero Vendor Lock-In & Complete Data Sovereignty",
          description: "Every line of code, Docker container, and cloud configuration is transferred directly to your organization with zero proprietary licensing ties."
        }
      ]
    },
    motto: {
      badge: "OUR GUIDING PRINCIPLES",
      title: "Built on Purpose. ",
      titleHighlight: "Driven by Impact.",
      subtitle: "Three non-negotiable principles that shape every architecture, line of code, and partnership at Nordible Technologies.",
      items: [
        {
          tag: "01 / Ambition",
          title: "Solve Bigger Problems",
          description: "We don't settle for surface-level fixes. We embrace technical complexity and build solutions for challenges that truly move business needles."
        },
        {
          tag: "02 / Empathy",
          title: "Always Prioritize People",
          description: "Software is built by people for people. We lead with transparent communication, respect, and deep partnership at eye level."
        },
        {
          tag: "03 / Permanence",
          title: "Build for the Long Term",
          description: "We design resilient architectures and sustainable solutions engineered to endure and scale—never disposable shortcuts."
        }
      ]
    },
    founderPage: {
      backToHome: "Back to Home",
      badge: "THE FOUNDER'S JOURNEY",
      title: "Direct Leadership, Architectural Rigor & Strategic Partnership",
      subtitle: "Enterprise tech leadership, hands-on business discovery, and mission-critical cloud scaling.",
      quote: "“The best technology solutions aren’t built in isolation—they are born from listening deeply to business challenges and building with care and precision.”",
      quoteAuthor: "Kabeer Shah",
      quoteRole: "Tech Leader & Founder",
      introTitle: "From Hands-on Building to Strategic Tech Leadership",
      introP1: "With a battle-tested track record delivering high-impact software and tech solutions, Kabeer Shah founded Nordible Technologies with a fundamental principle: technology must directly serve business outcomes through authentic human partnerships.",
      introP2: "Having architected mission-critical platforms for Fortune 500 and MedTech leaders like GE Healthcare, Baxter/Vantive, and Nipro, and led tech teams for Fintech unicorns like Nium Inc. (Instarem), Kabeer brings rare full-spectrum mastery—from low-level cloud architecture and PCI-DSS/HIPAA compliance to executive technical strategy.",
      introP3: "Unlike traditional agencies with layers of account managers, Kabeer personally leads client discovery, technical strategy, and architectural direction—ensuring zero communication breakdown and 100% accountability.",
      milestonesTitle: "Career Milestones & Technical Leadership",
      milestonesSubtitle: "A proven track record delivering scalable systems across global industries.",
      milestones: [
        {
          period: "May 2023 – June 2026",
          role: "Technical Lead / Engineering Manager",
          company: "Quest Global (GE Healthcare, Baxter/Vantive & Nipro)",
          description: "Directing software delivery and architectural strategy for global healthcare and medical device leaders.",
          highlights: [
            "Architected GE Healthcare's 'OncoCare' decision-support platform aggregating complex patient data for cancer care.",
            "Led backend strategy for Baxter/Vantive's Remote Service Tool (RST) using AWS IoT & Lambda for remote device diagnostics.",
            "Directed the SDLC for critical medical device support systems for Nipro under strict FDA & HIPAA compliance.",
            "Enforced standardized checklist-driven development to minimize deployment errors."
          ],
          tags: ["GE Healthcare", "Baxter / Vantive", "Nipro", "AWS IoT & Lambda", "HIPAA Compliance", "Medical Devices"]
        },
        {
          period: "August 2020 – March 2023",
          role: "Lead Senior Software Engineer (SDE-3)",
          company: "The Parent Inc. (TickledMedia)",
          description: "Led core architecture, microservices transitions, and data governance for high-concurrency media and influencer platforms.",
          highlights: [
            "Architected microservices and micro-frontends transition for flagship 'Parents.VIP' platform, improving developer velocity.",
            "Implemented Sqitch for robust database change management, resolving deployment bottlenecks.",
            "Owned end-to-end stack (Node.js, AWS, Python, Redis) for content and influencer marketing engines.",
            "Established engineering quality culture with TDD, automated CI/CD pipelines, and rigorous code reviews."
          ],
          tags: ["Microservices", "Micro-frontends", "Sqitch", "Redis", "Python", "Node.js", "CI/CD"]
        },
        {
          period: "September 2018 – March 2020",
          role: "Engineering Lead / Interim Head of Engineering",
          company: "Nium Inc. (Instarem) — Global Fintech Unicorn",
          description: "Headed cross-functional engineering and technical compliance for one of Asia's fastest-growing fintech remittance unicorns.",
          highlights: [
            "Built and scaled an engineering department of 18+ engineers across Mobile, Frontend, Backend, and QA.",
            "Spearheaded technical roadmap for PCI-DSS compliance audits, securing top-tier financial grade security.",
            "Architected high-volume API integrations with major financial institutions (including PhonePe).",
            "Transformed company culture with Agile Scrum methodology from scratch; awarded 'Best Team'."
          ],
          tags: ["Fintech Unicorn", "PCI-DSS Level 1", "18+ Team Leadership", "PhonePe API", "Agile Transformation"]
        },
        {
          period: "March 2017 – August 2018",
          role: "Senior Full Stack Engineer",
          company: "SmarTek21",
          description: "Built scalable enterprise conversational AI and natural language processing (NLP) chatbot solutions.",
          highlights: [
            "Engineered backend and frontend architectures for 'SmartbotHub', an enterprise NLP conversational chatbot platform.",
            "Awarded 'Best Performer Award' for outstanding software delivery velocity using Node.js and Angular.js."
          ],
          tags: ["Enterprise AI", "NLP Chatbots", "SmartbotHub", "Node.js", "Angular.js"]
        },
        {
          period: "June 2015 – March 2017",
          role: "Co-Founder & CTO",
          company: "NerdsPal.com",
          description: "Bootstrapped an interactive Q&A educational technology platform from inception to global reach.",
          highlights: [
            "Architected and deployed cloud infrastructure on Google Cloud Platform to support rapid user growth.",
            "Executed monetization, SEO, and user acquisition strategies through targeted Google Ads."
          ],
          tags: ["Co-Founder & CTO", "EdTech", "Google Cloud", "Bootstrapping", "Product Strategy"]
        },
        {
          period: "April 2012 – March 2016",
          role: "Software Engineer",
          company: "Next Service HSS Pvt. Ltd.",
          description: "Designed core operational automation suites and served as a technical trainer and R&D mentor.",
          highlights: [
            "Engineered 'NextAuto', an internal process automation suite in C#, .NET, and Node.js that eliminated manual tasks.",
            "Mentored junior engineers and collaborated with C-suite executives on operational efficiency.",
            "Honored with 'Best Performer Award' for automation excellence."
          ],
          tags: ["Internal Automation", "C# / .NET", "Node.js", "System Optimization"]
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
      headquartersValue: "Nordible Technologies\nBreitlacherstraße 101, 60489 Frankfurt am Main, Germany",
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
      privacyNotice: "We value your privacy. Your data is never shared with third parties.",
      languageNotice: "We currently consult primarily in English while actively learning German — inquiries in German or English are warmly welcome!"
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
      rights: "All rights reserved.",
      regionalHub: {
        title: "Regional Technology & SEO Hubs (Rhine-Main)",
        subtitle: "Local software engineering, AI systems & SEO services across Hesse:",
        viewAll: "View all 15 regions",
        coreServices: "Core Services:",
        serviceLinks: [
          { label: "Web Development Frankfurt", path: "/frankfurt/altstadt/web-app-entwicklung" },
          { label: "SEO & GEO Bad Homburg", path: "/bad-homburg/mitte/digital-marketing-seo" },
          { label: "Digital Marketing Hanau", path: "/hanau/steinheim/digital-marketing-seo" },
          { label: "AI Agents Oberursel", path: "/oberursel/mitte/ki-agenten-automation" },
          { label: "Search Engine Optimization Frankfurt", path: "/frankfurt/altstadt/digital-marketing-seo" }
        ]
      }
    },
    notFound: {
      badge: "404 Error",
      title: "Page Not Found",
      description: "The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track.",
      backHome: "Back to Home",
      exploreServices: "Explore Services",
      quickLinksTitle: "Quick Destinations",
      links: {
        services: "Solutions & Architecture",
        founderStory: "Founder's Journey",
        investmentModels: "Investment Models",
        blog: "Tech Insights",
        contact: "Get in Touch"
      }
    },
    blogTeaser: {
      badge: "Our Technology Insights",
      exploreAll: "Explore All Insights & Case Studies"
    },
    blogPost: {
      fullscreen: "Full Screen",
      closeFullscreen: "Close (Esc)",
      executiveTakeaway: "Executive Business Takeaway",
      whatYouSee: "Plain-Language Explanation",
      businessBenefit: "Business Benefit",
      exploreLiveWebsite: "Explore Live Practice Website",
      clientPracticePartner: "Client & Practice Partner",
      shareArticle: "Share",
      linkCopied: "Copied Link",
      copyCode: "Copy",
      codeCopied: "Copied",
      notFoundBadge: "404 Error",
      notFoundTitle: "Case Study Not Found",
      notFoundDesc: "The requested article or case study could not be located.",
      notFoundBackBtn: "Back to Case Studies"
    },
    homeFaq: [
      {
        q: "Which software development company builds custom solutions in Frankfurt & Rhine-Main?",
        a: "Nordible Technologies is a specialized technology & marketing partner headquartered in Frankfurt am Main. Under direct leadership of founder Kabeer Shah, we build bespoke web applications, mobile apps (iOS & Android), and AI agent workflows with 100% IP ownership and no vendor lock-in."
      },
      {
        q: "Does Nordible offer nearshore software development and Node.js systems architecture?",
        a: "Yes. We combine German architectural rigor with scalable nearshore engineering pipelines. Our stack features modern Next.js, Node.js, TypeScript, and resilient cloud architectures (AWS, Vercel) for rapid time-to-market."
      },
      {
        q: "In which regions across Hesse does Nordible provide SEO, AI automation, and software engineering?",
        a: "We support businesses directly on-site in Frankfurt am Main and across the entire Rhine-Main area, including Bad Homburg, Hanau, Oberursel, Wiesbaden, Offenbach, and Darmstadt, with on-site response times typically under 24 hours."
      },
      {
        q: "How fast can a functional MVP or custom software project launch?",
        a: "We typically deliver production-grade MVPs in 2–4 weeks. Every initiative starts with a free 20-minute strategy call directly with founder Kabeer Shah."
      }
    ]
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      portfolio: "Projekte",
      caseStudies: "Fallstudien",
      about: "Über uns",
      founderStory: "Gründer-Story",
      consultation: "Erstgespräch",
      getStarted: "Projekt anfragen",
      investmentModels: "Investitionsmodelle"
    },
    hero: {
      rotatingTitles: [
        "Größere Probleme lösen",
        "Den Menschen immer an erste Stelle setzen",
        "Langfristig denken und bauen"
      ],
      titlePart1: "Technologie- & Marketingpartner in ",
      titleHighlight: "Frankfurt & Rhein-Main.",
      capabilities: "Maßgeschneiderte Software & KI-Systeme gepaart mit datengetriebenem Marketing.",
      locationAnchor: "Frankfurt am Main & Rhein-Main · Hessen, Bundesweit & Weltweit",
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
        { number: "10x", label: "Umsetzungs-Speed", description: "KI-native Effizienz & Präzision" },
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
          title: "Videobearbeitung & Content-Produktion",
          description: "Wir schneiden professionelle Videos für Social Media, Marketingkampagnen, Präsentationen und Ihre Markenkommunikation – klar, ansprechend und passend zu Ihrer Zielgruppe.",
          features: ["Kurzvideos für Social Media", "Reels & Werbevideos", "Untertitel, Captions & Motion Graphics", "Markengerechter Videoschnitt"]
        },
        {
          title: "Implementierung von KI-Agenten",
          description: "Wir implementieren praxisnahe KI-Agenten, die Arbeitsabläufe automatisieren, Teams unterstützen, Geschäftstools verbinden und Ihr Unternehmen effizienter machen.",
          features: ["Individuelle KI-Agenten-Workflows", "Automatisierung von Geschäftsprozessen", "Tool- & API-Integrationen", "KI-Strategie und Einführung"]
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
          title: "Nachweisbare Resultate",
          description: "Erfolgreicher Aufbau performanter digitaler Lösungen und Marketingstrategien für globale Marken und mittelständische Unternehmen.",
          metric: "Messbarer Erfolg"
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
      subtitle: "Flexible Zusammenarbeitsmodelle für höchste Entwicklungsgeschwindigkeit, maximale Transparenz und 100 % Eigentum am Quellcode.",
      mostPopular: "Am beliebtesten",
      ctaButton: "Umfang anfragen",
      teaserText: "",
      exploreModels: "Zusammenarbeitsmodelle ansehen",
      backToHome: "Zurück zur Übersicht",
      timelineLabel: "Projektlaufzeit",
      includedFeaturesLabel: "Enthaltene Leistungen & Spezifikationen:",
      customScopeTitle: "Individuelles Projekt besprechen?",
      customScopeDesc: "Wir erstellen maßgeschneiderte Architekturen und flexible Kooperationsmodelle für Ihre spezifischen Unternehmensanforderungen.",
      tiers: [
        {
          name: "Rapid MVP",
          duration: "2-4 Wochen",
          focus: "Schnelle Prototypen mit modernem Node.js & Next.js Stack"
        },
        {
          name: "Produktions-Plattform",
          duration: "6-10 Wochen",
          focus: "Skalierbare Nearshore-Softwareentwicklung mit deutscher Projektleitung"
        },
        {
          name: "Enterprise Architektur",
          duration: "12+ Wochen",
          focus: "Missionskritische Enterprise Node.js Systeme, Multi-Region & DSGVO"
        }
      ],
      packages: [
        {
          name: "Rapid MVP",
          duration: "2-4 Wochen",
          badge: "Schnellstart-MVP",
          description: "Schnelle Entwicklung von Prototypen und marktreifen Kernprodukten mit Node.js, Next.js & TypeScript. Exakt auf Ihr Budget und Ihre funktionalen Anforderungen zugeschnitten.",
          features: [
            "Detaillierte Anforderungs- & Architekturanalyse",
            "Moderne Node.js & TypeScript Systemarchitektur",
            "Wissenschaftsbasiertes UX-Design (Daumenzonen-optimiert)",
            "Cloud-Native Bereitstellung (AWS / Vercel)",
            "Performance- und Conversion-Analytics",
            "Sicherheits- und SSL-Audit",
            "30 Tage Support nach Launch"
          ],
          popular: false
        },
        {
          name: "Produktions-Plattform",
          duration: "6-10 Wochen",
          badge: "Nearshore-Skalierung",
          description: "Ganzheitliche Nearshore-Softwareentwicklung mit deutscher Projektleitung und weltweiter Skalierbarkeit. Entwickelt für hohe Nutzerlasten und maximale Zuverlässigkeit.",
          features: [
            "Ganzheitliche Produkt- und Technologiestrategie",
            "Skalierbare Nearshore-Entwicklungskapazitäten",
            "Node.js Microservices & API-Orchestrierung",
            "Plattformübergreifende Mobile- (iOS/Android) & Web-Apps",
            "Hochverfügbare Cloud-Infrastruktur & CI/CD",
            "Infrastructure as Code (IaC) & automatisierte Tests",
            "90 Tage dedizierter Betriebssupport"
          ],
          popular: true
        },
        {
          name: "Enterprise Architektur",
          duration: "12-24 Wochen",
          badge: "Enterprise Mission-Critical",
          description: "Komplexe Technologie-Ökosysteme für führende Industrieunternehmen. Enterprise Node.js Backend-Systeme, autonome KI-Agenten und strengste DSGVO-Standards.",
          features: [
            "Multi-Region Cloud Deployment & Failover",
            "Enterprise Node.js Backend & maßgeschneiderte APIs",
            "KI-Agenten & GEO-Suchoptimierung",
            "Enterprise Security & DSGVO-Compliance-Stack",
            "Hochverfügbarkeits-Cluster & Zero-Downtime-Releases",
            "Volle Datensouveränität & 100 % Quellcode-Eigentum",
            "6 Monate Prioritäts-Architektursupport"
          ],
          popular: false
        }
      ],
      guarantees: [
        {
          title: "100 % IP-Eigentum",
          desc: "Sämtlicher Quellcode, alle Architektur-Assets und Lizenzen gehören vom ersten Tag an uneingeschränkt Ihnen – ohne Vendor-Lock-in."
        },
        {
          title: "Planbare Meilensteine",
          desc: "Feste Sprints mit transparenten Deadlines, wöchentlichen Live-Demos und kontinuierlicher Berichterstattung."
        },
        {
          title: "Enterprise-Sicherheit",
          desc: "Entwicklung nach strengen europäischen DSGVO- und ISO-Sicherheitsrichtlinien mit automatisierten Prüfungen."
        }
      ]
    },
    testimonials: {
      badge: "",
      title: "Was Kunden & Unternehmenslenker sagen",
      subtitle: "",
      items: [
        {
          name: "Shams Consult",
          role: "Architektur und Stadtplanung",
          company: "Google-Rezension",
          rating: 5,
          text: "Für Shams Consult ist absolute Detailgenauigkeit entscheidend – das gilt auch für unsere digitale Infrastruktur. Die Zusammenarbeit mit Kabeer Shah hebt sich deutlich von klassischen Agenturen ab. Herr Shah hat nicht nur unseren Webauftritt optimiert und unsere regionalen Promotions sowie Videoschnitte koordiniert, sondern auch maßgeschneiderte KI-Agenten implementiert, die unsere täglichen Workflows entlasten. Besonders schätzen wir den direkten Zugang auf Gründerebene: Es gibt keine Reibungsverluste durch Zwischeninstanzen oder Juniormanager. Kabeer Shah agiert als echter, strategischer Partner, der unsere Geschäftsprozesse versteht und technische Lösungen mit Fokus auf eine nachhaltige, langfristige Zusammenarbeit liefert.",
          language: "de"
        },
        {
          name: "Amruth Jai",
          role: "Verifizierte Bewertung",
          company: "Google-Rezension",
          rating: 5,
          text: "Die Zusammenarbeit mit Nordible Technologies hat mir sehr viel Spaß gemacht. Kabeer ist ein absolut professioneller und erfahrener Architekt für technische Lösungen. Ich würde Nordible Technologies jedem empfehlen, der in Frankfurt professionelle geschäftliche E-Mail-Lösungen, maßgeschneiderte Software, Social-Media-Management oder Marketing-Dienstleistungen sucht.",
          language: "de"
        },
        {
          name: "Vrishank Shete",
          role: "Senior Principal Engineer",
          company: "Vantive International (Baxter Healthcare) · LinkedIn-Empfehlung",
          rating: 5,
          text: "I had the opportunity to work with Kabeer Shah at Vantive (Baxter Healthcare) on strategic initiatives for our Remote Service Tool platform. Kabeer consistently demonstrated exceptional product and engineering leadership, driving architectural direction, aligning cross-functional teams, and making decisions that significantly improved operational efficiency and business outcomes. His ability to combine technical strategy, stakeholder alignment, and execution clarity sets him apart. Kabeer thinks and operates like an executive leader, and any organization would benefit greatly from his vision, ownership, and strategic mindset.",
          language: "en"
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
      desc1: "Nordible Technologies stärkt Unternehmen durch Technologie und kreative Inhalte. Als KI-nativer Business-Technologiepartner liefern wir produktionsreife Technologielösungen, die Implementierung von KI-Agenten, ausfallsichere Cloud-Architekturen, digitales Marketing, Social-Media-Management und professionelle Videobearbeitung für nachhaltiges Geschäftswachstum.",
      desc2: "Von schneller MVP- und Produktentwicklung bis hin zu komplexen Unternehmensplattformen und Wachstumsinitiativen eliminieren wir klassischen Agentur-Ballast durch die direkte Verbindung von praxiserprobter Enterprise-Architektur mit autonomen KI-Workflows.",
      stat1Number: "10x",
      stat1Label: "Umsetzungs-Speed",
      stat2Number: "50+",
      stat2Label: "Lösungen Realisiert",
      qualities: [
        { title: "Unternehmen durch Technologie stärken", description: "Wir entwickeln pragmatische, hochwirksame Technologielösungen und automatisierte Prozesse für echten geschäftlichen Return on Investment." },
        { title: "KI-native Geschwindigkeit & Präzision", description: "Einsatz autonomer KI-Pipelines zur Entwicklung von Technologielösungen und zum Management von Social-Media-Kanälen in 10-facher Geschwindigkeit." },
        { title: "Direkte Gründerverantwortung", description: "Direkte Zusammenarbeit mit Gründer Kabeer Shah – für Enterprise-Architektur auf höchstem Niveau, ohne Zwischenhändler und mit 100 % Eigentum am Code." }
      ],
      founderStoryLinkBadge: "LERNEN SIE DEN GRÜNDER KENNEN",
      founderStoryLinkTitle: "Der persönliche Werdegang von Kabeer Shah",
      founderStoryLinkDesc: "Von technischer Führung für Fintech-Unicorns und Healthcare-Konzerne bis zur Gründung von Nordible Technologies.",
      founderStoryLinkButton: "Werdegang des Gründers lesen →",
      pageBreadcrumb: "Über uns",
      coreValuesHeading: "Unsere Kernwerte",
      engineeringPillarsHeading: "Architektonische Präzision & Entwicklungskapazität",
      engineeringPillarsSubheading: "Wie wir Frankfurter Projektführung mit flexibler Nearshore-Skalierung verbinden.",
      engineeringPillars: [
        {
          badge: "Nearshore-Softwareentwicklung",
          title: "Deutsche Projektleitung + Skalierbare Nearshore-Teams",
          description: "Direkter persönlicher Austausch auf Augenhöhe mit Gründerebene in Frankfurt am Main, kombiniert mit kosteneffizienten Nearshore-Entwicklerteams, die sich flexibel an Ihren Projektumfang anpassen."
        },
        {
          badge: "Node.js Systemarchitektur",
          title: "Enterprise Node.js & Fullstack-Systeme",
          description: "Hochperformante Node.js Microservices, serverseitige Next.js Edge-Architekturen und typsicheres TypeScript – ausgelegt auf extreme Geschwindigkeit, Ausfallsicherheit und Echtzeit-Verarbeitung."
        },
        {
          badge: "100 % Quellcode-Eigentum",
          title: "Zero Vendor-Lock-in & Volle Datensouveränität",
          description: "Jede Zeile Code, jede Datenbankstruktur und jede Cloud-Konfiguration wird direkt in Ihre Repositories übergeben – für maximale Unabhängigkeit und Investitionssicherheit."
        }
      ]
    },
    motto: {
      badge: "UNSER LEITBILD",
      title: "Geleitet von Werten. ",
      titleHighlight: "Fokussiert auf Wirkung.",
      subtitle: "Drei unverhandelbare Grundsätze, die jede Architektur, jeden Algorithmus und jede Partnerschaft bei Nordible Technologies prägen.",
      items: [
        {
          tag: "01 / Ambition",
          title: "Größere Probleme lösen",
          description: "Wir geben uns nicht mit oberflächlichen Übergangslösungen zufrieden. Wir meistern technische Komplexität und lösen Herausforderungen, die echten geschäftlichen Mehrwert schaffen."
        },
        {
          tag: "02 / Empathie",
          title: "Den Menschen immer an erste Stelle setzen",
          description: "Technologie entsteht von Menschen für Menschen. Wir setzen auf offene Kommunikation, gegenseitigen Respekt und echte Partnerschaft auf Augenhöhe."
        },
        {
          tag: "03 / Nachhaltigkeit",
          title: "Langfristig denken und bauen",
          description: "Wir entwickeln zukunftssichere Architekturen und skalierbare Systeme mit dauerhaftem Wert – keine kurzlebigen Schnellschüsse."
        }
      ]
    },
    founderPage: {
      backToHome: "Zurück zur Startseite",
      badge: "DER WERDEGANG DES GRÜNDERS",
      title: "Direkte Führung, technische Exzellenz & echte Partnerschaft",
      subtitle: "Praxiserprobte Tech-Führung, unternehmerische Beratung und geschäftskritische Cloud-Skalierung.",
      quote: "„Die besten Technologielösungen entstehen nicht isoliert – sie wachsen aus dem aufmerksamen Zuhören bei geschäftlichen Herausforderungen und der Leidenschaft für verlässliche Technologie.“",
      quoteAuthor: "Kabeer Shah",
      quoteRole: "Tech Leader & Gründer",
      introTitle: "Vom passionierten Entwickler zum strategischen Technologiepartner",
      introP1: "Mit nachweisbaren Erfolgen bei der Umsetzung geschäftskritischer Software- und Technologielösungen gründete Kabeer Shah Nordible Technologies mit einem klaren Leitsatz: Technologie muss stets messbare geschäftliche Resultate durch verlässliche menschliche Partnerschaften schaffen.",
      introP2: "Nachdem er geschäftskritische Systeme für globale Gesundheitsunternehmen wie GE Healthcare, Baxter/Vantive und Nipro entworfen und Tech-Teams bei Fintech-Unicorns wie Nium Inc. (Instarem) geleitet hat, vereint Kabeer tiefes Fachwissen – von regulatorischer Compliance (PCI-DSS, HIPAA) bis hin zu strategischer Führung.",
      introP3: "Anders als bei anonymen Agenturen mit vielen Zwischenebenen führt Kabeer die strategische Beratung, Konzeption und architektonische Umsetzung persönlich – für eine direkte Kommunikation ohne Reibungsverluste und 100% Verbindlichkeit.",
      milestonesTitle: "Berufliche Meilensteine & Technische Führung",
      milestonesSubtitle: "Eine nachweisbare Erfolgsbilanz bei der Entwicklung skalierbarer Systeme in internationalen Branchen.",
      milestones: [
        {
          period: "Mai 2023 – Juni 2026",
          role: "Technical Lead / Engineering Manager",
          company: "Quest Global (GE Healthcare, Baxter/Vantive & Nipro)",
          description: "Leitung der Softwareentwicklung und Architekturstrategie für weltweit führende MedTech- und Gesundheitsunternehmen.",
          highlights: [
            "Architektur der OncoCare-Entscheidungsunterstützungsplattform für GE Healthcare zur Aggregation komplexer onkologischer Patientendaten.",
            "Leitung der Backend-Strategie für das Remote Service Tool (RST) von Baxter/Vantive mit AWS IoT und Lambda zur Fernwartung von Medizingeräten.",
            "Steuerung des SDLC für geschäftskritische Medizinprodukte-Supportsysteme für Nipro unter strengen FDA- und HIPAA-Vorgaben.",
            "Einführung standardisierter Checklisten-Prozesse zur Minimierung von Deployment-Fehlern."
          ],
          tags: ["GE Healthcare", "Baxter / Vantive", "Nipro", "AWS IoT & Lambda", "HIPAA-Compliance", "Medizingeräte"]
        },
        {
          period: "August 2020 – März 2023",
          role: "Lead Senior Software Engineer (SDE-3)",
          company: "The Parent Inc. (TickledMedia)",
          description: "Verantwortung für Plattformarchitektur, Microservices-Migration und Daten-Governance für hochfrequentierte Medien- und Influencer-Plattformen.",
          highlights: [
            "Leitung der Umstellung auf Microservices und Micro-Frontends für die Flaggschiff-Plattform 'Parents.VIP'.",
            "Einführung von Sqitch für strukturiertes Datenbank-Change-Management zur Beseitigung von Deployment-Engpässen.",
            "End-to-End-Stack-Verantwortung (Node.js, AWS, Python, Redis) für Marketing- und Content-Management-Systeme.",
            "Etablierung einer Qualitätskultur mit TDD, automatisierten CI/CD-Pipelines und Code-Reviews."
          ],
          tags: ["Microservices", "Micro-Frontends", "Sqitch", "Redis", "Python", "Node.js", "CI/CD"]
        },
        {
          period: "September 2018 – März 2020",
          role: "Engineering Lead / Interim Head of Engineering",
          company: "Nium Inc. (Instarem) — Globales Fintech-Unicorn",
          description: "Führung der crossfunktionalen Entwicklungsabteilung und Compliance für ein weltweit führendes Fintech-Unicorn im Remittance-Sektor.",
          highlights: [
            "Aufbau und Leitung eines 18-köpfigen Entwicklerteams (Mobile, Frontend, Backend, QA).",
            "Technische Leitung der PCI-DSS-Audits zur Sicherstellung höchster globaler Finanzsicherheitsstandards.",
            "Architektur strategischer API-Großintegrationen mit Finanzpartnern wie PhonePe; Auszeichnung mit dem 'Best Team Award'.",
            "Vollständige Implementierung der Agile-Scrum-Methodik von Grund auf."
          ],
          tags: ["Fintech Unicorn", "PCI-DSS Level 1", "18+ Teamleitung", "PhonePe API", "Agile Scrum"]
        },
        {
          period: "März 2017 – August 2018",
          role: "Senior Full Stack Engineer",
          company: "SmarTek21",
          description: "Entwicklung von Enterprise-Conversational-AI und Chatbot-Lösungen auf Basis natürlicher Sprachverarbeitung (NLP).",
          highlights: [
            "Full-Stack-Entwicklung für 'SmartbotHub', eine NLP-gestützte KI-Chatbot-Plattform für Großkunden.",
            "Auszeichnung mit dem 'Best Performer Award' für herausragende Lieferqualität mit Node.js und Angular.js."
          ],
          tags: ["Enterprise KI", "NLP Chatbots", "SmartbotHub", "Node.js", "Angular.js"]
        },
        {
          period: "Juni 2015 – März 2017",
          role: "Co-Founder & CTO",
          company: "NerdsPal.com",
          description: "Bootstrapping einer interaktiven Q&A-EdTech-Plattform von Null bis zur internationalen Nutzung.",
          highlights: [
            "Entwicklung und Skalierung der Cloud-Infrastruktur auf der Google Cloud Platform.",
            "Umsetzung von Monetarisierungs- und Wachstumsstrategien über zielgerichtete Google Ads Kampagnen."
          ],
          tags: ["Co-Founder & CTO", "EdTech Startup", "Google Cloud", "Bootstrapping", "Produktvision"]
        },
        {
          period: "April 2012 – März 2016",
          role: "Software Engineer",
          company: "Next Service HSS Pvt. Ltd.",
          description: "Entwicklung interner Prozessautomatisierungen sowie technische Schulung und Mentoring von Entwicklerteams.",
          highlights: [
            "Entwicklung von 'NextAuto', einer internen Prozessautomatisierungssuite in C#, .NET und Node.js zur Eliminierung manueller Schritte.",
            "Technischer Mentor und Schnittstelle zur Geschäftsführung für operative Prozessoptimierung.",
            "Ausgezeichnet mit dem 'Best Performer Award' für Automatisierungserfolge."
          ],
          tags: ["Prozessautomatisierung", "NextAuto", "C# / .NET", "Node.js", "Technisches Mentoring"]
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
      privacyNotice: "Wir schätzen Ihre Privatsphäre. Ihre Daten werden niemals an Dritte weitergegeben.",
      languageNotice: "Wir beraten derzeit vorrangig auf Englisch und lernen aktiv Deutsch – Anfragen auf Deutsch oder Englisch sind herzlich willkommen!"
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
      rights: "Alle Rechte vorbehalten.",
      regionalHub: {
        title: "Regionale Standorte & SEO-Hubs (Rhein-Main)",
        subtitle: "Lokale Softwareentwicklung, KI-Systeme & SEO-Betreuung vor Ort:",
        viewAll: "Alle 15 Standorte anzeigen",
        coreServices: "Fokusleistungen:",
        serviceLinks: [
          { label: "Webentwicklung Frankfurt", path: "/frankfurt/altstadt/web-app-entwicklung" },
          { label: "SEO & GEO Bad Homburg", path: "/bad-homburg/mitte/digital-marketing-seo" },
          { label: "Digital Marketing Hanau", path: "/hanau/steinheim/digital-marketing-seo" },
          { label: "KI-Agenten Oberursel", path: "/oberursel/mitte/ki-agenten-automation" },
          { label: "Suchmaschinenoptimierung Frankfurt", path: "/frankfurt/altstadt/digital-marketing-seo" }
        ]
      }
    },
    notFound: {
      badge: "Fehler 404",
      title: "Seite nicht gefunden",
      description: "Die gesuchte Seite wurde möglicherweise verschoben, umbenannt oder ist vorübergehend nicht verfügbar. Wir bringen Sie wieder auf Kurs.",
      backHome: "Zur Startseite",
      exploreServices: "Leistungen ansehen",
      quickLinksTitle: "Schnelleinstiege",
      links: {
        services: "Lösungen & Architektur",
        founderStory: "Gründer-Story",
        investmentModels: "Investitionsmodelle",
        blog: "Tech-Einblicke",
        contact: "Kontakt aufnehmen"
      }
    },
    blogTeaser: {
      badge: "Unsere Technologie-Einblicke",
      exploreAll: "Alle Einblicke & Fallstudien ansehen"
    },
    blogPost: {
      fullscreen: "Vollbild",
      closeFullscreen: "Schließen (Esc)",
      executiveTakeaway: "Kernaussage für Entscheider",
      whatYouSee: "Was Sie hier sehen",
      businessBenefit: "Geschäftlicher Nutzen",
      exploreLiveWebsite: "Live-Praxis-Webseite erkunden",
      clientPracticePartner: "Auftraggeber & Praxispartner",
      shareArticle: "Teilen",
      linkCopied: "Link kopiert",
      copyCode: "Kopieren",
      codeCopied: "Kopiert",
      notFoundBadge: "Fehler 404",
      notFoundTitle: "Fallstudie nicht gefunden",
      notFoundDesc: "Der gewünschte Artikel oder die Fallstudie konnte nicht gefunden werden.",
      notFoundBackBtn: "Zurück zu den Fallstudien"
    },
    homeFaq: [
      {
        q: "Welches Softwareentwicklungs-Unternehmen entwickelt maßgeschneiderte Lösungen in Frankfurt & Rhein-Main?",
        a: "Nordible Technologies ist ein spezialisierter Technologie- & Marketingpartner mit Sitz in Frankfurt am Main. Unter direkter Führung von Gründer Kabeer Shah entwickeln wir maßgeschneiderte Webplattformen, mobile Apps (iOS & Android) und KI-Agenten mit 100 % Quellcode-Eigentum ohne Vendor-Lock-in."
      },
      {
        q: "Bietet Nordible Nearshore-Softwareentwicklung und moderne Node.js-Architekturen an?",
        a: "Ja. Wir verbinden deutsche Architektur- und Projektführung mit skalierbaren Nearshore-Entwicklungskapazitäten. Unser Tech-Stack umfasst moderne Next.js-, Node.js-, TypeScript- und Cloud-Infrastrukturen (AWS, Vercel) für maximale Geschwindigkeit und Kosteneffizienz."
      },
      {
        q: "In welchen Regionen in Hessen bietet Nordible SEO, KI-Automatisierung und Webentwicklung an?",
        a: "Wir betreuen Unternehmen direkt vor Ort in Frankfurt am Main sowie im gesamten Rhein-Main-Gebiet, darunter Bad Homburg, Hanau, Oberursel, Wiesbaden, Offenbach und Darmstadt. Unsere Reaktionszeit vor Ort beträgt in der Regel unter 24 Stunden."
      },
      {
        q: "Wie schnell kann ein funktionsfähiges MVP oder Softwareprojekt starten?",
        a: "Erste produktionsreife MVPs liefern wir typischerweise in 2–4 Wochen. Jedes Vorhaben beginnt mit einem kostenlosen 20-minütigen Strategiegespräch direkt mit Gründer Kabeer Shah."
      }
    ]
  }
};
