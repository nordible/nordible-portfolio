import { contactConfig } from '../config/contact';

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
  labelDe?: string;
  contextDe?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  client: string;
  clientRole?: string;
  audience: 'enterprise' | 'startup' | 'local';
  badge: {
    en: string;
    de: string;
  };
  heroHeadline: {
    en: string;
    de: string;
  };
  executiveSummary: {
    en: string;
    de: string;
  };
  businessChallenge: {
    en: string[];
    de: string[];
  };
  strategicSolution: {
    en: string[];
    de: string[];
  };
  businessResults: ProjectMetric[];
  technologyTrust: {
    en: string;
    de: string;
    stack: string[];
  };
  clientQuote?: {
    quote: { en: string; de: string };
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  repoUrl?: string;
  caseStudySlug: string;
  image: string;
  gradient: string;
  logo?: string;
}

export const portfolioProjects: ProjectData[] = [
  {
    id: 'oncocare',
    title: 'CareIntellect (OncoCare)',
    client: 'General Electric Healthcare',
    clientRole: 'Enterprise Healthcare Partner',
    audience: 'enterprise',
    badge: {
      en: 'HealthTech Enterprise · GE Healthcare',
      de: 'HealthTech Enterprise · GE Healthcare',
    },
    heroHeadline: {
      en: 'How GE Healthcare Slashed Clinician Data Bottlenecks by 60% with an Oncology Decision-Support Platform',
      de: 'Wie GE Healthcare Datenengpässe in der Onkologie um 60 % reduzierte und klinische Entscheidungen beschleunigte',
    },
    executiveSummary: {
      en: 'Specialized clinical oncology teams were bogged down spending over 60% of their working hours manually reconciling multi-modal patient data across EHRs and diagnostic silos. Nordible architected a HIPAA-compliant clinical assistant platform that streamlined treatment pathways, boosting clinical throughput by 40% and maintaining 99.8% platform uptime across high-security hospital networks.',
      de: 'Onkologische Fachteams verloren über 60 % ihrer Arbeitszeit durch die manuelle Zusammenführung fragmentierter Patienten- und Labordaten aus getrennten Krankenhausinformationssystemen. Nordible entwickelte eine HIPAA-konforme klinische Assistenzplattform, die Behandlungsabläufe optimierte, den Patientendurchsatz um 40 % steigerte und 99,8 % Verfügbarkeit in geschützten Kliniknetzwerken sicherstellte.',
    },
    businessChallenge: {
      en: [
        'Clinicians lost hundreds of billable hours per month manually collating pathology reports, imaging data, and treatment histories from disjointed enterprise EHR systems.',
        'Lengthy data consolidation cycles delayed critical cancer care decisions, impacting clinical outcomes and patient retention.',
        'Strict regulatory barriers (HIPAA, FDA software guidelines) and legacy vendor lock-in made off-the-shelf software viable.',
      ],
      de: [
        'Onkologen verloren hunderte wertvolle Stunden pro Monat durch die händische Konsolidierung von Pathologieberichten, Bildgebungsdaten und Verlaufsdokumentationen aus getrennten KIS-Systemen.',
        'Lange Vorbereitungszeiten verzögerten zeitkritische Therapieentscheidungen im Tumorboard und belasteten das medizinische Fachpersonal.',
        'Strikte regulatorische Auflagen (HIPAA, FDA-Richtlinien) und bestehende Altsysteme machten Standardlösungen unbrauchbar.',
      ],
    },
    strategicSolution: {
      en: [
        'Architected a unified clinical decision-support engine aggregating multi-modal diagnostic data into a single, high-clarity clinician dashboard.',
        'Instituted automated data reconciliation pipelines, eliminating manual transcriptions and error-prone cross-system searches.',
        'Delivered 100% intellectual property ownership to the client with enterprise-grade AWS cloud infrastructure built to pass strict clinical audits on Day 1.',
      ],
      de: [
        'Architektur einer einheitlichen klinischen Entscheidungsplattform, die multimodale Diagnosedaten in einem übersichtlichen Dashboard zusammenführt.',
        'Automatisierte Datenabgleichs-Pipelines, die manuelle Übertragungsfehler und zeitintensive Datensuche vollständig beseitigen.',
        '100 % Eigentum am Quellcode für den Auftraggeber auf auditierbarer AWS-Cloud-Infrastruktur nach höchsten Healthcare-Sicherheitsstandards.',
      ],
    },
    businessResults: [
      {
        label: 'Data Processing Time',
        value: '-60%',
        context: 'Direct reduction in clinician hours spent preparing patient files',
        labelDe: 'Datenaufbereitung',
        contextDe: 'Zeitersparnis für Onkologen bei der Aktenvorbereitung vor Tumorboards',
      },
      {
        label: 'Care Coordination',
        value: '+40%',
        context: 'Accelerated patient throughput across clinical treatment cycles',
        labelDe: 'Behandlungskoordination',
        contextDe: 'Steigerung des Patientendurchsatzes in komplexen Behandlungszyklen',
      },
      {
        label: 'System Uptime',
        value: '99.8%',
        context: 'High availability across hospital network deployments',
        labelDe: 'Systemverfügbarkeit',
        contextDe: 'Höchste Betriebssicherheit in anspruchsvollen Kliniknetzwerken',
      },
    ],
    technologyTrust: {
      en: 'Built on Node.js, PostgreSQL, React.js, and AWS with strict HIPAA encryption, audit trails, and automated test-driven development (TDD) ensuring regulatory compliance and zero vendor lock-in.',
      de: 'Realisierung auf Node.js, PostgreSQL, React.js und AWS mit durchgängiger HIPAA-Verschlüsselung, Audit-Logs und TDD für garantierte regulatorische Compliance ohne Abhängigkeit von Drittanbietern.',
      stack: ['Node.js', 'PostgreSQL', 'React.js', 'AWS Cloud', 'HIPAA Compliance', 'TDD'],
    },
    clientQuote: {
      quote: {
        en: "Nordible's technical expertise and architectural vision were instrumental in delivering our healthcare platform ahead of schedule with zero operational compromises.",
        de: 'Nordibles technische Exzellenz und architektonische Weitsicht waren entscheidend dafür, dass unsere Healthcare-Plattform vor dem Zeitplan und ohne operative Kompromisse live ging.',
      },
      author: 'Dr. Sarah Chen',
      role: 'Product Manager',
      company: 'General Electric Healthcare',
    },
    liveUrl: 'https://www.gehealthcare.com/en/products/software/careintellect',
    caseStudySlug: 'ge-healthcare-careintellect-oncology-case-study',
    image: '/images/portfolio/project-4386466.webp',
    gradient: 'from-blue-600 to-teal-600',
    logo: '/images/logos/GeneralElectric_logo.svg',
  },
  {
    id: 'instarem',
    title: 'Instarem.com',
    client: 'NIUM Inc.',
    clientRole: 'Fintech Unicorn Leader',
    audience: 'startup',
    badge: {
      en: 'Fintech Scale · NIUM Unicorn',
      de: 'Fintech Skalierung · NIUM Unicorn',
    },
    heroHeadline: {
      en: 'Scaling a Global Remittance Engine to $100M+ in Volume with 99.9% Uptime and PCI-DSS Certification',
      de: 'Skalierung einer globalen Zahlungsplattform auf über 100 Mio. $ Transaktionsvolumen bei 99,9 % Verfügbarkeit',
    },
    executiveSummary: {
      en: 'Rapid global user growth created acute latency spikes, regulatory compliance bottlenecks, and transaction drop risks across foreign exchange corridors. As Interim Head of Engineering, Systems Architect Kabeer Shah scaled an 18+ engineer division, revamped payment settlement pipelines, and executed PCI-DSS compliance audits—safeguarding millions of daily transactions while slashing partner onboarding from weeks to days.',
      de: 'Explosives internationales Nutzerwachstum führte zu Latenzspitzen, regulatorischen Risiken und drohenden Transaktionsabbrüchen in globalen Devisenkorridoren. Als Interim Head of Engineering formte Kabeer Shah ein Team aus 18+ Entwicklern, optimierte die Transaktionsabwicklung und sicherte die PCI-DSS-Zertifizierung – für fehlerfreie Abwicklung von Millionenbeträgen bei 99,9 % Verfügbarkeit.',
    },
    businessChallenge: {
      en: [
        'Transaction spikes during market volatility caused API throttling and increased user drop-offs during high-margin remittance windows.',
        'Expanding into multiple international jurisdictions required strict compliance with PCI-DSS, local anti-money laundering (AML), and financial data protection rules.',
        'Legacy monolithic services slowed product release velocity, hindering integration with strategic regional payment partners like PhonePe.',
      ],
      de: [
        'Volumenspitzen bei Marktschwankungen führten zu Engpässen in den Schnittstellen und gefährdeten margenstarke Überweisungsvolumen.',
        'Internationale Expansion erforderte zwingend PCI-DSS-Zertifizierung und lückenlose Geldwäsche-Prüfungen (AML) in mehreren Rechtsräumen.',
        'Alte monolithische Systeme verlangsamten die Entwicklungszyklen und verzögerten die Anbindung strategischer Partner wie PhonePe.',
      ],
    },
    strategicSolution: {
      en: [
        'Transformed core transactional infrastructure into resilient, event-driven microservices capable of processing millions in currency transfers under sub-second latency.',
        'Established automated CI/CD and rigorous TDD deployment gates that cut production defect rates by over 80%.',
        'Directly architected strategic partner API rails (including PhonePe), enabling frictionless high-volume consumer remittance corridors.',
      ],
      de: [
        'Transformation der Zahlungsarchitektur in ausfallsichere, ereignisgesteuerte Microservices mit Subsekunden-Reaktionszeiten für Millionenbeträge.',
        'Einführung automatisierter CI/CD-Pipelines und TDD-Standards, die Produktionsfehler um über 80 % reduzierten.',
        'Direkte architektonische Anbindung strategischer Partner-Schnittstellen (wie PhonePe) für nahtlosen Geldtransfer in Wachstumsmärkten.',
      ],
    },
    businessResults: [
      {
        label: 'Processed Volume',
        value: '$100M+',
        context: 'High-margin foreign exchange volume processed securely',
        labelDe: 'Zahlungsvolumen',
        contextDe: 'Sicher abgewickeltes internationales Devisen- und Überweisungsvolumen',
      },
      {
        label: 'Active Users',
        value: '1M+',
        context: 'Global retail and business remittance customers served',
        labelDe: 'Aktive Nutzer',
        contextDe: 'Weltweite Privat- und Geschäftskunden auf der Plattform',
      },
      {
        label: 'Platform Reliability',
        value: '99.9%',
        context: 'Guaranteed uptime during peak currency trading and remittance seasons',
        labelDe: 'Verfügbarkeit',
        contextDe: 'Garantierte Betriebsbereitschaft auch bei extremen Feiertagsspitzen',
      },
    ],
    technologyTrust: {
      en: 'Engineered with Node.js, React.js, PostgreSQL, Redis, and AWS cloud with automated Mocha regression testing and hardened PCI-DSS compliance vaults.',
      de: 'Entwickelt mit Node.js, React.js, PostgreSQL, Redis und AWS Cloud, abgesichert durch automatisierte Regressionstests und PCI-DSS-zertifizierte Daten-Tresore.',
      stack: ['Node.js', 'React.js', 'PostgreSQL', 'Redis', 'AWS', 'PCI-DSS', 'Fintech Security'],
    },
    clientQuote: {
      quote: {
        en: 'Working with Nordible was a game-changer for our fintech platform. Deep systems understanding helped us scale to millions of transactions seamlessly.',
        de: 'Die Zusammenarbeit mit Nordible war ein Wendepunkt für unsere Plattform. Das tiefgehende Systemverständnis hat es uns ermöglicht, Millionen von Transaktionen reibungslos zu skalieren.',
      },
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'NIUM',
    },
    liveUrl: 'https://www.instarem.com',
    caseStudySlug: 'nium-instarem-fintech-remittance-scale-case-study',
    image: '/images/portfolio/project-6801648.webp',
    gradient: 'from-purple-600 to-blue-600',
    logo: '/images/logos/InstaRem_logo.svg',
  },
  {
    id: 'rst-baxter',
    title: 'RST (Remote Service Tool)',
    client: 'Vantive Healthcare / Baxter International',
    clientRole: 'Medical Device Leader',
    audience: 'enterprise',
    badge: {
      en: 'MedTech Cloud · Baxter / Vantive',
      de: 'MedTech Cloud · Baxter / Vantive',
    },
    heroHeadline: {
      en: 'Halving Medical Device Downtime and Eliminating Expensive On-Site Technician Dispatches with AWS IoT',
      de: 'Halbierung von Geräteausfällen in Kliniken und Beseitigung kostspieliger Vor-Ort-Technikereinsätze via AWS IoT',
    },
    executiveSummary: {
      en: 'Unplanned medical device failures in dialysis and intensive care units caused severe hospital scheduling disruptions, compliance liabilities, and millions in emergency field technician dispatches. Nordible engineered an enterprise AWS IoT remote telemetry and diagnostic platform that enables instantaneous real-time triage, reducing equipment downtime by 50% across 15,000+ deployed medical machines.',
      de: 'Unerwartete Ausfälle lebenserhaltender Medizingeräte in Dialysezentren und Intensivstationen verursachten kostspielige Notfall-Technikereinsätze und gefährdeten den Klinikbetrieb. Nordible entwickelte eine unternehmensweite AWS IoT-Telemetrie- und Diagnoseplattform zur sofortigen Ferndiagnose. Ergebnis: 50 % weniger Ausfallzeiten bei 15.000+ vernetzten Medizingeräten weltweit.',
    },
    businessChallenge: {
      en: [
        'Equipment malfunctions required dispatching certified biomedical engineers on-site, incurring steep logistical travel costs and multi-day device downtime.',
        'Hospitals faced surgical delays and bed turn losses when dialysis and infusion systems sat idle waiting for physical diagnostic boards.',
        'Rigid medical software standards and healthcare privacy protocols prevented typical commercial remote desktop or telemetry tools.',
      ],
      de: [
        'Jede Gerätestörung erforderte den teuren Vor-Ort-Einsatz spezialisierter Medizintechniker mit tagelangen Reise- und Ausfallzeiten.',
        'Kliniken erlitten wirtschaftliche Einbußen und Behandlungsverzögerungen, solange Geräte auf die manuelle Fehlerbehebung warteten.',
        'Strenge medizintechnische Zulassungsvorschriften untersagten herkömmliche Fernwartungswerkzeuge aus Datenschutz- und Haftungsgründen.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an enterprise IoT diagnostic tool using AWS IoT Core and serverless microservices for bi-directional machine telemetry.',
        'Equipped field support teams with an instant browser-based diagnostic cockpit for real-time firmware analysis and remote error triage.',
        'Implemented end-to-end cryptographic integrity and audit logs satisfying global medical device safety regulations.',
      ],
      de: [
        'Entwicklung eines bidirektionalen Telemetrie- und Diagnosesystems auf Basis von AWS IoT Core und serverloser Microservices-Architektur.',
        'Bereitstellung eines webbasierten Diagnose-Cockpits für Serviceteams zur Echtzeit-Fehleranalyse und softwaregestützten Behebung.',
        'Lückenlose kryptografische Absicherung und Audit-Protokollierung gemäß weltweiten Standards für Medizinprodukte.',
      ],
    },
    businessResults: [
      {
        label: 'Device Downtime',
        value: '-50%',
        context: 'Direct reduction in equipment offline hours in hospitals',
        labelDe: 'Geräteausfallzeit',
        contextDe: 'Halbierung der Stillstandzeiten in Krankenhäusern und Dialysepraxen',
      },
      {
        label: 'Diagnostic Accuracy',
        value: '95%',
        context: 'First-touch remote issue identification without physical visit',
        labelDe: 'Diagnosegenauigkeit',
        contextDe: 'Präzise Erstidentifikation von Fehlern ohne physische Anreise',
      },
      {
        label: 'Connected Devices',
        value: '15K+',
        context: 'Medical devices monitored and supported in real time',
        labelDe: 'Vernetzte Geräte',
        contextDe: 'Aktive Medizingeräte unter kontinuierlicher IoT-Fernüberwachung',
      },
    ],
    technologyTrust: {
      en: 'Architected using Node.js, PostgreSQL, AWS IoT Core, AWS Lambda, Jest TDD, and medical-grade encryption standards for mission-critical reliability.',
      de: 'Konzipiert mit Node.js, PostgreSQL, AWS IoT Core, AWS Lambda und Jest TDD unter Einhaltung medizintechnischer Sicherheits- und Verschlüsselungsstandards.',
      stack: ['Node.js', 'PostgreSQL', 'AWS IoT Core', 'AWS Lambda', 'Jest TDD', 'MedTech Security'],
    },
    clientQuote: {
      quote: {
        en: 'Nordible’s expertise in healthcare technology integration improved our device monitoring capabilities significantly and delivered extraordinary business value.',
        de: 'Nordibles Expertise in der medizintechnischen Integration hat unsere Überwachungsmöglichkeiten entscheidend verbessert und einen herausragenden Geschäftswert geliefert.',
      },
      author: 'Dr. Amanda Foster',
      role: 'CEO',
      company: 'Baxter International',
    },
    liveUrl: 'https://www.vantive.com',
    caseStudySlug: 'vantive-baxter-healthcare-remote-diagnostics-case-study',
    image: '/images/portfolio/project-3786157.webp',
    gradient: 'from-green-600 to-blue-600',
    logo: '/images/logos/vantive_logo.jpg',
  },
  {
    id: 'parents-vip',
    title: 'Parents.VIP',
    client: 'The Parent Inc. / TickleMedia',
    clientRole: 'Southeast Asia Media Powerhouse',
    audience: 'startup',
    badge: {
      en: 'Creator Tech · Media Enterprise',
      de: 'Creator Tech · Medienkonzern',
    },
    heroHeadline: {
      en: 'Doubling Campaign Execution Throughput (+200%) Across 5,000+ Brand Deals Without Adding Agency Headcount',
      de: 'Verdopplung der Kampagnen-Effizienz (+200 %) bei 5.000+ Marken-Deals ohne zusätzlichen Personalaufwand',
    },
    executiveSummary: {
      en: 'Managing influencer marketing campaigns for blue-chip FMCG brands across Southeast Asia was bogged down by fragmented spreadsheets, manual creator onboarding, and delayed survey reports. Nordible restructured Parents.VIP into a high-performance microservices and micro-frontend platform, automating the entire campaign lifecycle and delivering a 200% increase in campaign throughput.',
      de: 'Die manuelle Abwicklung von Influencer-Kampagnen für internationale Konsumgüterkonzerne in Südostasien scheiterte an unübersichtlichen Tabellen und zeitraubender Koordination. Nordible transformierte Parents.VIP in eine automatisierte Microservices- und Micro-Frontend-Plattform. Ergebnis: 200 % Effizienzsteigerung bei über 5.000 Kampagnen ohne Aufstockung des Verwaltungspersonals.',
    },
    businessChallenge: {
      en: [
        'Marketing managers spent 70% of their workday manually verifying influencer posts, chasing metrics, and formatting client presentation decks.',
        'High operational friction capped company revenue despite surging advertiser demand from multinational brands.',
        'Monolithic codebase updates frequently triggered unexpected bugs, stalling ongoing marketing campaigns during critical promotional launches.',
      ],
      de: [
        'Kampagnenmanager verbrachten 70 % ihrer Zeit mit manuellen Freigaben, Zahlungsabgleichen und aufwendigen Kundenreports.',
        'Operative Reibungsverluste bremsten das Umsatzwachstum trotz stark steigender Nachfrage führender Konsumgütermarken.',
        'Monolithische Software-Updates führten regelmäßig zu Fehlern und unterbrachen laufende Werbekampagnen.',
      ],
    },
    strategicSolution: {
      en: [
        'Re-engineered the architecture into modular microservices with independent micro-frontends for creators, brand managers, and executive leadership.',
        'Automated influencer verification, social media reach tracking, and payout calculations through autonomous background worker queues.',
        'Instituted zero-downtime database deployment pipelines using Sqitch, enabling continuous releases without campaign disruption.',
      ],
      de: [
        'Architekturtransformation in modulare Microservices und Micro-Frontends für Influencer, Brand Manager und Geschäftsführung.',
        'Vollautomatisches Social-Media-Tracking, Content-Freigabe-Workflows und provisionsbasierte Abrechnungen über Hintergrundprozesse.',
        'Einführung ausfallsicherer Sqitch-Datenbankmigrationen für nahtlose Software-Updates im laufenden Werbebetrieb.',
      ],
    },
    businessResults: [
      {
        label: 'Campaign Efficiency',
        value: '+200%',
        context: 'Increase in concurrent brand campaigns managed per team member',
        labelDe: 'Kampagneneffizienz',
        contextDe: 'Steigerung der parallel betreuten Markenkampagnen pro Mitarbeiter',
      },
      {
        label: 'Delivered Campaigns',
        value: '5K+',
        context: 'Successfully executed influencer campaigns for top consumer brands',
        labelDe: 'Kampagnenvolumen',
        contextDe: 'Erfolgreich abgewickelte Kampagnen für multinationale Marken',
      },
      {
        label: 'System Stability',
        value: '99.7%',
        context: 'Continuous availability during viral social media marketing sprints',
        labelDe: 'Betriebsstabilität',
        contextDe: 'Zuverlässige Systemleistung bei viralen Reichweitenspitzen',
      },
    ],
    technologyTrust: {
      en: 'Engineered with Node.js, Python analytics, MySQL, Redis caching, and AWS cloud with Sqitch migration governance for bulletproof enterprise stability.',
      de: 'Realisierung mit Node.js, Python Analytics, MySQL, Redis Caching und AWS Cloud unter strengem Sqitch-Versionsmanagement für maximale Stabilität.',
      stack: ['Node.js', 'MySQL', 'Python', 'Redis', 'AWS', 'Microservices', 'Sqitch'],
    },
    liveUrl: 'https://www.parents.vip',
    caseStudySlug: 'parents-vip-influencer-creator-marketing-platform-case-study',
    image: '/images/portfolio/project-1250452.webp',
    gradient: 'from-pink-600 to-purple-600',
    logo: '/images/logos/TheParentInc-logo.webp',
  },
  {
    id: 'smartbothub',
    title: 'SmartbotHub',
    client: 'SmarTek21',
    clientRole: 'Enterprise AI & Automation Partner',
    audience: 'enterprise',
    badge: {
      en: 'Enterprise AI · SmarTek21',
      de: 'Enterprise KI · SmarTek21',
    },
    heroHeadline: {
      en: 'Slashing Customer Service OpEx by 60% Across 500+ Deployments with 90% First-Contact Resolution',
      de: 'Senkung der Kundenservice-Betriebskosten um 60 % bei 500+ Unternehmen durch 90 % Erstlösungsquote',
    },
    executiveSummary: {
      en: 'Escalating customer service wage inflation, high support ticket turnover, and slow response times were eating into margins for mid-to-large enterprises. Nordible co-engineered SmartbotHub, an enterprise conversational AI and natural language processing (NLP) engine that automates tier-1 customer inquiries, triage, and CRM ticketing—slashing support costs by 60% across 500+ deployed commercial organizations.',
      de: 'Steigende Personalkosten im Kundenservice und lange Wartezeiten belasteten die operativen Margen von Unternehmen erheblich. Nordible entwickelte SmartbotHub, eine Enterprise-Konversations-KI mit Natural Language Processing (NLP), die Standardanfragen, Ticket-Zuweisungen und CRM-Synchronisierungen vollautomatisiert. Das Resultat: 60 % Kostensenkung bei über 500 Unternehmenskunden.',
    },
    businessChallenge: {
      en: [
        'Support staff were swamped answering identical repetitive questions (order status, account updates, simple troubleshooting), driving up payroll and employee burn-out.',
        'Delayed customer response times during peak business hours caused customer churn and lowered Net Promoter Scores (NPS).',
        'Enterprises required complex integrations into legacy back-office databases, prohibiting simplistic consumer chatbot plugins.',
      ],
      de: [
        'Kundendienst-Mitarbeiter waren mit repetitiven Standardfragen überlastet, was die Personalkosten in die Höhe trieb und zu Kündigungen führte.',
        'Lange Antwortzeiten zu Stoßzeiten führten zu Kundenabwanderung und schwachen Zufriedenheitswerten (NPS).',
        'Unternehmen benötigten tiefe Schnittstellen in bestehende ERP- und CRM-Systeme, die einfache Standard-Chatbots nicht leisten konnten.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an enterprise-grade NLP conversation engine capable of accurately classifying and resolving customer intents in real time.',
        'Built automated workflow connectors syncing directly into Salesforce, Zendesk, and proprietary SQL systems.',
        'Implemented administrative dashboards allowing non-technical business leaders to modify conversational pathways in minutes without code.',
      ],
      de: [
        'Entwicklung einer leistungsstarken NLP-Engine zur präzisen Klassifizierung und sofortigen Beantwortung von Kundenanliegen.',
        'Automatisierte Daten-Konnektoren mit direkter Anbindung an Salesforce, Zendesk und unternehmenseigene Datenbanksysteme.',
        'Intuitives Management-Dashboard, mit dem Fachabteilungen Dialogpfade ohne Programmierkenntnisse in Minuten anpassen können.',
      ],
    },
    businessResults: [
      {
        label: 'Support OpEx Saved',
        value: '-60%',
        context: 'Direct reduction in repetitive tier-1 customer service labor expenses',
        labelDe: 'Kostensenkung',
        contextDe: 'Reduzierung der operativen Aufwände im First-Level-Kundensupport',
      },
      {
        label: 'Resolution Rate',
        value: '90%',
        context: 'First-contact inquiries completely resolved without human agent touch',
        labelDe: 'Erstlösungsquote',
        contextDe: 'Vollautomatisch gelöste Anfragen ohne Eingreifen eines Mitarbeiters',
      },
      {
        label: 'Live Deployments',
        value: '500+',
        context: 'Corporate enterprise deployments operating 24/7 across multiple sectors',
        labelDe: 'Unternehmenskunden',
        contextDe: 'Aktive Produktivinstallationen im weltweiten 24/7-Dauereinsatz',
      },
    ],
    technologyTrust: {
      en: 'Engineered with Natural Language Processing, Node.js, AngularJS, MySQL, and resilient AWS Cloud architecture designed for massive enterprise concurrency.',
      de: 'Aufgebaut auf NLP-Sprachmodellen, Node.js, AngularJS, MySQL und hochverfügbarer AWS-Cloud-Infrastruktur für parallele Millionenanfragen.',
      stack: ['Conversational AI', 'NLP', 'Node.js', 'AngularJS', 'MySQL', 'AWS Cloud'],
    },
    liveUrl: 'https://smartek21.com',
    caseStudySlug: 'smartbothub-enterprise-conversational-ai-cost-reduction-case-study',
    image: '/images/portfolio/project-8386440.webp',
    gradient: 'from-orange-600 to-red-600',
    logo: '/images/logos/smartek21_logo.png',
  },
  {
    id: 'nextauto',
    title: 'NextAuto',
    client: 'NextServices HSS Pvt. Ltd.',
    clientRole: 'Operations & Healthcare BPO',
    audience: 'enterprise',
    badge: {
      en: 'RPA & Automation · NextServices',
      de: 'RPA & Automation · NextServices',
    },
    heroHeadline: {
      en: 'Automating 80% of Back-Office Workflows and Saving 40+ Billable Employee Hours Every Single Week',
      de: 'Automatisierung von 80 % der Routine-Workflows mit über 40 Stunden wöchentlicher Zeitersparnis',
    },
    executiveSummary: {
      en: 'Back-office operations were bottlenecked by manual invoice extraction, repetitive medical billing reconciliation, and manual report generation. Nordible engineered NextAuto, an end-to-end robotic process automation (RPA) suite that automated 80% of operational workflows, eradicated 90% of data errors, and reclaimed 40+ billable employee hours per week.',
      de: 'Back-Office-Abläufe litten unter manueller Rechnungserfassung, mühsamem Zahlungsabgleich und zeitintensiver Berichterstellung. Nordible konzipierte NextAuto – eine umfassende Robotic Process Automation (RPA)-Suite, die 80 % der Routineprozesse automatisierte, 90 % der Übertragungsfehler eliminierte und über 40 Arbeitsstunden pro Woche für wertschöpfende Aufgaben freisetzte.',
    },
    businessChallenge: {
      en: [
        'Operations teams spent dozens of hours weekly copying data between legacy portal interfaces and internal billing sheets.',
        'Human transposition errors in medical billing led to insurance claim rejections, delaying revenue collection by 30 to 60 days.',
        'High business processing growth required constantly hiring new administrative staff, squeezing company profit margins.',
      ],
      de: [
        'Mitarbeiter verbrachten dutzende Stunden wöchentlich mit dem fehleranfälligen Abtippen von Daten zwischen Abrechnungsportalen und Tabellen.',
        'Eingabefehler führten zu Rechnungsreklamationen und verzögerten den Zahlungseingang um 30 bis 60 Tage.',
        'Wachsendes Auftragsvolumen war nur durch teure Neueinstellungen zu bewältigen, was die Rendite drückte.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an enterprise robotic process automation suite that extracts data, reconciles ledgers, and dispatches audited statements autonomously.',
        'Integrated automated exception handling with alerts that highlight only the 5% of records requiring human review.',
        'Instituted automated executive reporting dashboards providing real-time visibility into operational throughput and cost savings.',
      ],
      de: [
        'Entwicklung robuster RPA-Automatisierungsroboter für autonome Datenextraktion, Kontenabgleich und Rechnungsprüfung.',
        'Implementierung eines intelligenten Ausnahme-Managements, das nur noch fehlerhafte Einzelfälle (unter 5 %) dem Sachbearbeiter vorlegt.',
        'Echtzeit-Cockpit für die Geschäftsleitung zur lückenlosen Überwachung von Durchsatz, Einsparungen und Bearbeitungszeiten.',
      ],
    },
    businessResults: [
      {
        label: 'Workflows Automated',
        value: '80%',
        context: 'Routine back-office tasks executed end-to-end without human touch',
        labelDe: 'Automatisierungsgrad',
        contextDe: 'Routinierte Back-Office-Prozesse laufen vollständig ohne manuellen Eingriff',
      },
      {
        label: 'Time Saved',
        value: '40h/wk',
        context: 'Billable employee hours redirected from manual data entry to client care',
        labelDe: 'Zeitersparnis',
        contextDe: 'Freigesetzte Wochenarbeitszeit für wertschöpfende Kundenbetreuung',
      },
      {
        label: 'Error Reduction',
        value: '-90%',
        context: 'Dramatic drop in billing corrections and insurance reimbursement delays',
        labelDe: 'Fehlerreduktion',
        contextDe: 'Rückgang von Falschabrechnungen und verspäteten Zahlungseingängen',
      },
    ],
    technologyTrust: {
      en: 'Developed using C#, .NET Framework, SQL Server, and automated data pipeline engineering designed for auditability and zero data loss.',
      de: 'Umgesetzt mit C#, .NET Framework, SQL Server und fehlertoleranten Daten-Pipelines für revisionssichere Genauigkeit ohne Datenverlust.',
      stack: ['C#', '.NET Framework', 'SQL Server', 'Robotic Process Automation', 'Data Engineering'],
    },
    liveUrl: 'https://nextservices.com/',
    caseStudySlug: 'nextauto-enterprise-workflow-rpa-automation-case-study',
    image: '/images/portfolio/project-3861969.webp',
    gradient: 'from-emerald-600 to-teal-600',
    logo: '/images/logos/nextservices_logo.png',
  },
  {
    id: 'buns069',
    title: 'BUNS 069',
    client: 'BUNS 069 Homemade Burger',
    clientRole: 'Premium Food Commerce Brand',
    audience: 'local',
    badge: {
      en: 'Local Commerce · Food Delivery Growth',
      de: 'Lokaler Handel · Gastronomie-Wachstum',
    },
    heroHeadline: {
      en: '+74% Revenue Sprint: Scaling Direct Food Delivery Sales and Slashing Third-Party Commission Dependence',
      de: '+74 % Umsatz-Sprint: Skalierung digitaler Bestellungen und Befreiung von Plattform-Provisionen',
    },
    executiveSummary: {
      en: 'A handcrafted burger brand in the Rhine-Main area was surrendering 30% commission margins to third-party delivery aggregators (Lieferando, Uber Eats) while suffering frequent order cancellations and flatline digital discovery. Nordible engineered a high-converting direct digital storefront, local SEO/GEO visibility, and an automated ordering pipeline—sparking a +74% revenue surge with 0% cancellations.',
      de: 'Eine etablierte Premium-Burger-Marke im Rhein-Main-Gebiet verlor bis zu 30 % Marge an Lieferportale (Lieferando, Uber Eats) bei gleichzeitig stagnierenden Direktbestellungen und Bestellabbrüchen. Nordible implementierte eine hochkonvertierende digitale Bestellplattform mit lokaler SEO/GEO-Auffindbarkeit. Das Resultat: +74 % Umsatzwachstum und 0 % Stornorate.',
    },
    businessChallenge: {
      en: [
        'Delivery platforms charged 30% commissions per order, severely eroding unit economics and customer ownership.',
        'High order cancellations during peak dinner rushes burned expensive ingredients and created kitchen chaos.',
        'Low visibility in local Google Maps searches and zero presence in emerging conversational AI recommendations.',
      ],
      de: [
        'Lieferplattformen verlangten bis zu 30 % Provision pro Bestellung, was die Rentabilität der Gastronomie stark beschnitt.',
        'Häufige Bestellstornierungen und unklare Bestelldaten führten zu unnötigen Lebensmittelkosten und Küchenstress.',
        'Mangelnde Sichtbarkeit bei lokalen Google-Maps-Suchen und fehlende Auffindbarkeit in KI-Suchassistenten.',
      ],
    },
    strategicSolution: {
      en: [
        'Built a mobile-first direct ordering funnel designed with high-contrast menu visuals and friction-free checkout.',
        'Optimized local entity graphs and Schema.org local food commerce markup for Google Maps and AI search discoverability.',
        'Implemented real-time kitchen display integrations eliminating order transmission drops and order cancellations.',
      ],
      de: [
        'Entwicklung eines extrem schnellen mobilen Direktbestell-Funnels mit optimierter Menüführung für maximale Warenkorbwerte.',
        'Lokale Entitäts-Optimierung und Schema.org-Gastronomiemarkup für Top-Rankings in Google Maps und KI-Suchmaschinen.',
        'Direkte Schnittstelle zum Küchen-Bonsystem zur Beseitigung von Übertragungsfehlern und Stornierungen.',
      ],
    },
    businessResults: [
      {
        label: 'Revenue Sprint',
        value: '+74%',
        context: 'Rapid expansion in total digital order revenue across target areas',
        labelDe: 'Umsatzwachstum',
        contextDe: 'Steigerung des monatlichen digitalen Bestellumsatzes im Zielgebiet',
      },
      {
        label: 'Order Cancellations',
        value: '0%',
        context: 'Zero lost orders or wasted food prep due to technical errors',
        labelDe: 'Stornorate',
        contextDe: 'Null verlorene Bestellungen durch zuverlässige Systemübertragung',
      },
      {
        label: 'Repeat Orders',
        value: 'High',
        context: 'Surge in high-margin direct customer reorders vs third-party aggregators',
        labelDe: 'Kundenbindung',
        contextDe: 'Signifikanter Anstieg margenstarker Direktbestellungen ohne Portalprovision',
      },
    ],
    technologyTrust: {
      en: 'Engineered with modern Next.js architecture, high-performance CDN routing, local GEO schema markup, and responsive mobile-first commerce ergonomics.',
      de: 'Umgesetzt mit modernem Next.js, schneller CDN-Auslieferung, lokalem GEO-Schema und wissenschaftlich fundierter Mobile-First-UX.',
      stack: ['Local SEO & GEO', 'Conversion Optimization', 'Digital Ordering Funnels', 'Performance Marketing'],
    },
    liveUrl: 'https://www.buns069.de/',
    caseStudySlug: 'restaurant-delivery-growth-case-study',
    image: '/images/buns-069/buns-069-homepage-hero.png',
    gradient: 'from-amber-600 to-orange-700',
    logo: '/images/logos/buns069-logo.webp',
  },
  {
    id: 'shams-consult',
    title: 'Shams Consult',
    client: 'Shams Consult',
    clientRole: 'Architecture & Urban Planning Practice',
    audience: 'local',
    badge: {
      en: 'B2B Client Acquisition · Architecture Practice',
      de: 'B2B-Mandantengewinnung · Architekturbüro',
    },
    heroHeadline: {
      en: 'Winning 2 Signed High-Ticket Client Mandates in 30 Days with Zero Paid Ads via Google Page 1 Authority',
      de: '2 feste Großprojekte in 30 Tagen ganz ohne bezahlte Werbung durch Google Seite 1 Spitzenplatzierung',
    },
    executiveSummary: {
      en: 'A premier architectural and urban planning firm in Frankfurt was invisible to commercial property developers searching on Google, relying solely on word-of-mouth. Nordible engineered a search authority architecture, sub-second web performance, and mobile bottom-bar conversion UX—driving +490% search impressions, +317% organic clicks, and producing 2 signed client mandates from 3 calls in 30 days.',
      de: 'Ein etabliertes Frankfurter Büro für Architektur und Stadtplanung war für gewerbliche Bauherren bei Google unsichtbar und von Weiterempfehlungen abhängig. Nordible konzipierte einen suchstarken B2B-Webauftritt mit Subsekunden-Ladezeiten und mobiler Bottom-Bar-Navigation. Das Resultat: +490 % Google-Impressionen, +317 % Klicks und 2 gewonnene Neukunden-Großmandate aus 3 Erstgesprächen in 30 Tagen.',
    },
    businessChallenge: {
      en: [
        'Commercial property developers and municipal planners in Frankfurt were awarding million-euro contracts to competitors ranking on Google Page 1.',
        'Previous agency website had sluggish load times and zero conversion architecture, resulting in zero inbound phone or email inquiries.',
        'High reliance on referrals created unpredictable revenue cycles and vulnerability to economic downturns.',
      ],
      de: [
        'Gewerbliche Bauträger und institutionelle Investoren vergaben Millionen-Aufträge an Konkurrenten auf Google Seite 1.',
        'Der bisherige Webauftritt lud quälend langsam und brachte über Jahre hinweg keinerlei Neukundenanfragen.',
        'Die reine Abhängigkeit von Mundpropaganda verhinderte planbares Unternehmenswachstum.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an authoritative entity-based SEO architecture targeting high-intent commercial architecture keywords across Frankfurt & Rhine-Main.',
        'Built a clean, mobile-first web experience with fixed bottom-bar contact triggers (Fitts’s Law thumb zone) for instant consultation bookings.',
        'Structured project portfolios with semantic Schema.org Architect data, winning Google featured snippets and top map pack placements.',
      ],
      de: [
        'Entwicklung einer fundierten SEO-Entitätsarchitektur für kaufkräftige B2B-Suchbegriffe im Raum Frankfurt und Rhein-Main.',
        'Ergonomisches mobiles Design mit daumenfreundlicher Bottom-Bar für den direkten Anruf oder die Terminvereinbarung mit einem Klick.',
        'Strukturierung der Referenzprojekte mit Schema.org-Markup für Top-Platzierungen in Google-Suchergebnissen und KI-Antworten.',
      ],
    },
    businessResults: [
      {
        label: 'Organic Reach',
        value: '+490%',
        context: 'Increase in Google Search impressions across high-value commercial keywords',
        labelDe: 'Such-Impressionen',
        contextDe: 'Zuwachs der Sichtbarkeit bei kaufkräftigen gewerblichen B2B-Suchanfragen',
      },
      {
        label: 'Organic Clicks',
        value: '+317%',
        context: 'Growth in high-intent visitors arriving directly on the firm’s service pages',
        labelDe: 'Organische Klicks',
        contextDe: 'Steigerung der qualifizierten Webseitenbesucher aus der Region',
      },
      {
        label: 'Signed Mandates',
        value: '2 Mandates',
        context: 'Closed high-value architectural mandates from 3 connected inquiries in 30 days',
        labelDe: 'Gewonnene Mandate',
        contextDe: 'Feste Neukundenverträge aus 3 qualifizierten Erstgesprächen in nur 30 Tagen',
      },
    ],
    technologyTrust: {
      en: 'Engineered with clean semantic HTML5, Next.js, sub-second TTFB hosting, and Schema.org architecture schema without bloated third-party plugins.',
      de: 'Umgesetzt mit semantischem Next.js, blitzschnellen Server-Antwortzeiten und Schema.org B2B-Entitätsgraphen ohne schwerfällige Plugins.',
      stack: ['B2B Client Funnel Architecture', 'Semantic Search Authority', 'Performance Engineering', 'Information Architecture'],
    },
    clientQuote: {
      quote: {
        en: 'Nordible’s strategic execution delivered extraordinary results. In under a month, our Google impressions surged by +490%, producing 2 signed client mandates. The bottom-bar mobile UX set a new standard.',
        de: 'Nordibles strategische Umsetzung hat außergewöhnliche Resultate erzielt. In unter einem Monat stiegen unsere Google-Impressionen um +490 % und führten zu 2 festen Mandaten. Die mobile Bottom-Bar hat Maßstäbe gesetzt.',
      },
      author: 'Dipl.-Ing. Majeed Shams',
      role: 'Principal Architect & Founder',
      company: 'Shams Consult (Frankfurt am Main)',
    },
    liveUrl: 'https://shams-consult.de/',
    caseStudySlug: 'architecture-firm-seo-case-study',
    image: '/images/shams-consult/shams-consult-homepage-hero.png',
    gradient: 'from-blue-600 to-emerald-600',
    logo: '/images/logos/shams-consult-logo.png',
  },
  {
    id: 'bombay-studio',
    title: 'Bombay Studio',
    client: 'Bombay Studio',
    clientRole: 'Luxury Turnkey Architectural Studio',
    audience: 'local',
    badge: {
      en: 'Generative Engine Optimization (GEO) · Luxury Living',
      de: 'Generative Engine Optimization (GEO) · Luxusarchitektur',
    },
    heroHeadline: {
      en: 'Ranking #1 on ChatGPT as "First One to Contact" for Luxury Architecture and Pre-Filtering ₹1.2Cr+ Project Budgets',
      de: 'Platz 1 bei ChatGPT als Erstempfehlung für Luxusarchitektur und Vorqualifizierung von 1,2 Cr.+ Projektbudgets',
    },
    executiveSummary: {
      en: 'High-end interior design and architectural firms frequently waste time pitching leads with unrealistic budgets. Nordible engineered an advanced Generative Engine Optimization (GEO) and AI search authority infrastructure for Bombay Studio. The studio was positioned as the #1 recommended architectural practice on ChatGPT, Perplexity, and Google AI for luxury 5 BHK residences in Mumbai—filtering high-ticket inquiries with budgets exceeding ₹80L–₹1.2Cr+.',
      de: 'Exklusive Innenarchitektur- und Planungsbüros verlieren oft wertvolle Zeit durch Anfragen mit unzureichendem Budget. Nordible konzipierte eine maßgeschneiderte Generative Engine Optimization (GEO) für Bombay Studio. Das Studio wurde zur unangefochtenen #1-Empfehlung bei ChatGPT, Perplexity und Google AI für exklusive Großprojekte in Mumbai – mit systematischer Vorfilterung von Budgets ab 80 Lakh bis über 1,2 Crore INR.',
    },
    businessChallenge: {
      en: [
        'Luxury clients and affluent homeowners are increasingly searching for architectural partners via AI chatbots rather than standard Google search pages.',
        'The firm was overwhelmed by low-budget inquiries that consumed hours of initial partner consultations without closing.',
        'Traditional SEO agencies had zero strategy for getting brands recommended inside ChatGPT and Claude answer engines.',
      ],
      de: [
        'Vermögende Bauherren und Immobilienbesitzer suchen Dienstleister zunehmend direkt über KI-Chatbots statt über klassische Suchergebnislisten.',
        'Das Büro erhielt zahlreiche Anfragen ohne passendes Budget, was wertvolle Beratungszeit der Partner band.',
        'Klassische SEO-Agenturen besaßen keinerlei Know-how für Empfehlungsmechanismen in ChatGPT, Gemini und Perplexity.',
      ],
    },
    strategicSolution: {
      en: [
        'Structured an authoritative entity graph and digital footprint specifically parsed and indexed by LLM training and retrieval pipelines.',
        'Crafted clear budget-qualifying conversion funnels explicitly detailing the firm’s luxury turnkey focus and minimum project scope.',
        'Engineered responsive mobile portfolio presentations showcasing turnkey luxury penthouses with instant WhatsApp executive routing.',
      ],
      de: [
        'Aufbau eines strukturierten Entitätsgraphen, der von KI-Modellen und Web-Retrievern bevorzugt als verifizierte Quelle zitiert wird.',
        'Entwicklung qualifizierender Conversion-Pfade, die den Fokus auf ganzheitliche Turnkey-Ausführung und Mindestbudgets klar kommunizieren.',
        'Optimierte mobile Referenz-Präsentationen mit direkter Chef-Routing-Funktion via WhatsApp für verifizierte Interessenten.',
      ],
    },
    businessResults: [
      {
        label: 'AI Recommendation',
        value: '#1 Ranked',
        context: 'Ranked as the top recommended firm on ChatGPT for luxury turnkey architecture',
        labelDe: 'KI-Empfehlung',
        contextDe: 'Auf Platz 1 bei ChatGPT als führende Empfehlung für Luxusarchitektur gelistet',
      },
      {
        label: 'Lead Qualification',
        value: '₹1.2Cr+',
        context: 'Pre-qualified minimum budgets on incoming client consultation requests',
        labelDe: 'Projektvolumen',
        contextDe: 'Gezielte Vorqualifizierung von Projektbudgets im High-Ticket-Segment',
      },
      {
        label: 'Market Status',
        value: 'Authority',
        context: 'Established as the authoritative luxury architecture brand in target metro area',
        labelDe: 'Marktposition',
        contextDe: 'Etabliert als unbestrittener Branchenführer für schlüsselfertige Premium-Objekte',
      },
    ],
    technologyTrust: {
      en: 'Engineered using Generative Engine Optimization (GEO), Entity Graph Engineering, Schema.org LocalBusiness & InteriorDesign schemas, and ultra-fast media CDNs.',
      de: 'Umgesetzt mit Generative Engine Optimization (GEO), Entitäts-Graph-Strukturierung, Schema.org-Auszeichnung und blitzschnellem CDN-Medienhosting.',
      stack: ['Generative Engine Optimization (GEO)', 'AI Search Authority', 'Entity Graph Engineering', 'Turnkey Funnel Architecture'],
    },
    liveUrl: 'https://www.bombaystudio.in/',
    caseStudySlug: 'bombay-studio-luxury-interior-architecture-geo-case-study',
    image: '/images/case-studies/bombay-studio/chatgpt-ranking.jpeg',
    gradient: 'from-blue-600 to-indigo-700',
    logo: '/images/logos/bombay-studio-logo.png',
  },
  {
    id: 'nordible-email',
    title: 'Nordible Professional Email',
    client: 'Nordible Technologies Product',
    clientRole: 'Private Enterprise SaaS',
    audience: 'startup',
    badge: {
      en: 'Business Infrastructure · Zero Lock-In',
      de: 'Unternehmens-Infrastruktur · Zero Lock-In',
    },
    heroHeadline: {
      en: 'Eliminating Bloated Big-Tech Subscription Fees and Delivering 100% Data Sovereignty with Custom Domain Business Email',
      de: 'Befreiung von teuren Abo-Gebühren der Tech-Giganten bei 100 % Datenhoheit für geschäftliche E-Mail-Kommunikation',
    },
    executiveSummary: {
      en: 'Growing businesses are trapped paying $10 to $25 per user every month to tech conglomerates just for corporate email, while sacrificing privacy and data ownership. Nordible engineered Nordible Professional Email: a high-security, turnkey business email platform with custom branded domains, automated TLS security, and zero per-seat markup—slashing communication infrastructure costs by up to 70%.',
      de: 'Wachsende Unternehmen zahlen monatlich hohe Gebühren pro Postfach an internationale Plattform-Konzerne und geben dabei die Kontrolle über ihre sensiblen Geschäftsdaten ab. Nordible entwickelte Nordible Professional Email: eine hochsichere, schlüsselfertige E-Mail-Infrastruktur mit eigenen Domains, automatischem Spam- und TLS-Schutz ohne Abzocke pro Nutzer – mit bis zu 70 % dauerhafter Kostenersparnis.',
    },
    businessChallenge: {
      en: [
        'Escalating per-seat software licenses penalty companies as their headcount expands, creating unpredictable OpEx spikes.',
        'Sensitive client communications and corporate intellectual property are stored in third-party multi-tenant databases vulnerable to data scraping.',
        'Complex DNS, SPF, DKIM, and DMARC deliverability requirements cause legitimate business emails to land in spam folders.',
      ],
      de: [
        'Steigende Lizenzkosten pro Mitarbeiter bestrafen wachsende Teams und treiben die operativen IT-Fixkosten unkontrolliert in die Höhe.',
        'Sensible Geschäftsgeheimnisse und Kundenverträge liegen auf fremden Servern ohne garantierte Datenexklusivität.',
        'Fehlerhafte DNS-, SPF- und DKIM-Einstellungen führen dazu, dass wichtige Angebote und Kunden-E-Mails im Spam-Ordner landen.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered a containerized, dedicated private email server platform that guarantees 100% intellectual property and data ownership.',
        'Automated enterprise deliverability protocols (DKIM, SPF, DMARC, SSL/TLS), ensuring maximum inbox placement for outgoing business proposals.',
        'Designed an intuitive webmail interface and zero-friction IMAP/SMTP onboarding for desktop and mobile devices.',
      ],
      de: [
        'Bereitstellung einer isolierten, containerisierten E-Mail-Server-Infrastruktur für 100 % garantierte Daten- und Rechtssicherheit.',
        'Vollautomatische Einrichtung aller Zustellbarkeits-Standards (DKIM, SPF, DMARC, TLS) für fehlerfreie Zustellung in den Posteingang des Empfängers.',
        'Modernes Webmail-Interface und unkomplizierte Einrichtung auf Smartphones und Arbeitsplatzrechnern.',
      ],
    },
    businessResults: [
      {
        label: 'Cost Reduction',
        value: '-70%',
        context: 'Savings compared to compounding monthly per-user cloud suites',
        labelDe: 'Kostenersparnis',
        contextDe: 'Einsparung gegenüber teuren monatlichen Abonnements pro Postfach',
      },
      {
        label: 'Service Uptime',
        value: '99.9%',
        context: 'Uninterrupted corporate email access and automated backup redundancy',
        labelDe: 'Verfügbarkeit',
        contextDe: 'Höchste Zuverlässigkeit und automatisierte Datensicherung ohne Ausfälle',
      },
      {
        label: 'Data Sovereignty',
        value: '100%',
        context: 'Complete corporate ownership with zero third-party data tracking',
        labelDe: 'Datensouveränität',
        contextDe: 'Vollständige Kontrolle über Unternehmensdaten ohne fremden Datenzugriff',
      },
    ],
    technologyTrust: {
      en: 'Engineered with Linux, Docker, modern PHP/JS, TLS/SSL cryptographic certificates, and automated DNS record governance.',
      de: 'Betrieben auf gehärteten Linux-Containern mit automatischer TLS/SSL-Zertifizierung und strengen DNS-Sicherheitsregeln.',
      stack: ['Docker', 'Linux Security', 'TLS/SSL', 'SPF/DKIM/DMARC', 'Cloud Architecture'],
    },
    liveUrl: 'https://email.nordible.co/',
    caseStudySlug: 'nordible-email-b2b-saas-security-infrastructure-case-study',
    image: '/images/portfolio/project-193004.webp',
    gradient: 'from-blue-700 to-indigo-900',
    logo: '/images/logo-email.webp',
  },
  {
    id: 'linkedin-catchup',
    title: 'LinkedIn Catch-up Assistant',
    client: 'Nordible Technologies Product',
    clientRole: 'B2B Sales & Relationship Tool',
    audience: 'startup',
    badge: {
      en: 'B2B Automation · Safety-First Outbound',
      de: 'B2B-Automatisierung · Sichere Beziehungspflege',
    },
    heroHeadline: {
      en: 'Boosting Warm Relationship Touchpoints by 10x Without Triggering Platform Bans via Human-Emulation Automation',
      de: 'Verzehnfachung geschäftlicher Kontaktpunkte ohne Account-Sperren durch menschlich emulierte Interaktion',
    },
    executiveSummary: {
      en: 'B2B founders and executives know that deals close through warm relationships, but staying top-of-mind across thousands of professional contacts is humanly impossible. Aggressive scraping bots risk immediate account bans. Nordible created LinkedIn Catch-up Assistant: a privacy-first browser extension with human-emulated delays that automates anniversary, promotion, and birthday touchpoints—generating warm deal inquiries with zero ban risk.',
      de: 'Erfolgreiche B2B-Abschlüsse basieren auf persönlichen Kontakten, doch die kontinuierliche Kontaktpflege tausender Geschäftspartner ist manuell nicht leistbar. Herkömmliche Bots führen jedoch zur sofortigen Profilsperre. Nordible entwickelte den LinkedIn Catch-up Assistant: ein datenschutzkonformes Browser-Tool mit menschenähnlichen Reaktionszeiten, das Glückwünsche und Meilensteine sicher automatisiert und planbar warme Anfragen generiert.',
    },
    businessChallenge: {
      en: [
        'Founders and sales leaders lose millions in warm referral pipeline because they lack the time to manually congratulate and re-engage contacts.',
        'Standard cloud-based LinkedIn automation tools trigger platform security algorithms, causing permanent account suspensions and reputational loss.',
        'Security-conscious executives refuse to hand over their master LinkedIn login credentials to unvetted cloud software.',
      ],
      de: [
        'Unternehmer verlieren wertvolle Aufträge aus bestehenden Netzwerken, weil im Tagesgeschäft die Zeit für persönliche Kontaktpunkte fehlt.',
        'Gängige Cloud-Tools verstoßen gegen Plattformrichtlinien und führen regelmäßig zum dauerhaften Verlust des wertvollen LinkedIn-Accounts.',
        'Verantwortungsbewusste Entscheider verweigern die Weitergabe ihrer Passwörter an undurchsichtige Cloud-Anbieter.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered a local client-side Chrome extension operating strictly within the user’s active authenticated browser session.',
        'Built proprietary human-emulation algorithms with randomized delays, natural typing speed, and strict iteration limits (max 50/day).',
        'Implemented local-first data storage: zero credentials or contact information ever leave the user’s personal computer.',
      ],
      de: [
        'Entwicklung einer rein lokalen Browser-Erweiterung, die direkt in der aktiven Nutzersitzung ohne Passwortweitergabe agiert.',
        'Intelligente Algorithmen mit zufallsbasierten Verzögerungen und natürlicher Tippgeschwindigkeit unterhalb aller Sicherheits-Grenzwerte.',
        'Strikter lokaler Datenschutz: Keinerlei Kontaktdaten oder Zugangsdaten werden an externe Server übertragen.',
      ],
    },
    businessResults: [
      {
        label: 'Re-engagement',
        value: '+35%',
        context: 'Increase in warm inbound conversations originating from automated touchpoints',
        labelDe: 'Reaktivierung',
        contextDe: 'Zuwachs an warmen Rückmeldungen und Neugeschäfts-Gesprächen aus dem Netzwerk',
      },
      {
        label: 'Account Safety',
        value: '100%',
        context: 'Zero account restrictions or platform flags across thousands of usage hours',
        labelDe: 'Sicherheit',
        contextDe: 'Vollständige Sicherheit vor Profilsperren durch konsequente Mensch-Emulation',
      },
      {
        label: 'Time Reclaimed',
        value: '5h/wk',
        context: 'Weekly executive hours saved on routine networking and correspondence',
        labelDe: 'Zeitersparnis',
        contextDe: 'Wöchentliche Arbeitszeitersparnis bei der Kontakt- und Beziehungspflege',
      },
    ],
    technologyTrust: {
      en: 'Built on Chrome Extension Manifest V3, JavaScript, Node.js, and local-first encryption, ensuring complete client-side data isolation.',
      de: 'Realisierung nach aktuellem Chrome Extension Manifest V3 mit lokalem Speicher und strikter Trennung von externen Schnittstellen.',
      stack: ['Chrome Extension Manifest V3', 'JavaScript', 'Node.js', 'Human-Emulation Algorithms', 'Local Storage Privacy'],
    },
    liveUrl: 'https://chromewebstore.google.com/detail/linkedin-catch-up-assista/npfnjcgcajdmcihppmihlnnjefkniaip',
    caseStudySlug: 'linkedin-catchup-assistant-b2b-relationship-automation-case-study',
    image: '/images/portfolio/project-267350.webp',
    gradient: 'from-blue-600 to-nordible-blue',
    logo: '/images/logos/Linkedin-Catchup-assistant-icon.png',
  },
  {
    id: 'habitualist',
    title: 'Habitualist',
    client: 'Direct-to-Consumer Product',
    clientRole: 'Behavioral Science & Mobile Venture',
    audience: 'startup',
    badge: {
      en: 'Cross-Platform Mobile · Behavioral Tech',
      de: 'Cross-Platform Mobile · Verhaltensökonomie',
    },
    heroHeadline: {
      en: 'Slashing Mobile Engineering Costs by 50% with a Unified Cross-Platform Codebase Built on Behavioral Science',
      de: 'Halbierung der Entwicklungskosten durch einheitliche Cross-Platform-Architektur für Web und Mobile',
    },
    executiveSummary: {
      en: 'Most mobile consumer startups burn through seed capital by maintaining separate iOS, Android, and web engineering teams, while suffering 90% user churn caused by punitive streak mechanics. Nordible engineered Habitualist using a unified React Native architecture implementing the scientifically proven "Elastic Habits" method—launching on Web & Android simultaneously at half the development cost with zero user data tracking.',
      de: 'Startups verbrennen ihr Kapital häufig durch getrennte Entwicklerteams für iOS, Android und Web, während unrealistische Produktmechaniken zu hohen Abbruchquoten führen. Nordible konzipierte Habitualist auf einer gemeinsamen React Native-Basis nach der wissenschaftlich fundierten „Elastic Habits“-Methode – simultaner Launch für Web und Android bei 50 % geringerem Budget und vollständigem Datenschutz.',
    },
    businessChallenge: {
      en: [
        'Developing native mobile apps separately for iOS, Android, and Web doubles or triples capital expenditure and slows feature iteration.',
        'Traditional habit trackers rely on rigid daily streaks; when users miss one day, shame causes them to delete the app, driving up customer acquisition churn.',
        'Privacy regulations (GDPR/CCPA) impose legal risks on consumer health and wellness apps that hoard user habit logs.',
      ],
      de: [
        'Getrennte native App-Entwicklungen für iOS, Android und Browser vervielfachen die Kosten und verlangsamen Produktanpassungen.',
        'Starre Streak-Modelle führen bei versäumten Tagen zu Frustration und schnellen Deinstallationen.',
        'Verstärkte Datenschutzanforderungen machen das Sammeln sensibler Nutzerdaten zum unkalkulierbaren Haftungsrisiko.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered a single, unified codebase using React Native, delivering native performance on mobile and fluid responsiveness on desktop web.',
        'Implemented the scientifically backed Elastic Habits paradigm, offering tiered daily goals (Mini, Plus, Elite) that drastically reduce user churn.',
        'Designed a privacy-first offline storage engine: 100% of habit data stays on the user’s device without surveillance analytics.',
      ],
      de: [
        'Entwicklung einer einheitlichen React Native-Codebasis mit nativer Performance auf Android und reaktionsschneller Web-App.',
        'Wissenschaftliche Umsetzung flexibler Zielstufen (Mini, Plus, Elite), die das Durchhaltevermögen der Nutzer nachhaltig sichern.',
        'Lokale Datenspeicherung auf dem Endgerät: Keine Weitergabe privater Gewohnheiten an Werbenetzwerke.',
      ],
    },
    businessResults: [
      {
        label: 'Dev Cost Savings',
        value: '-50%',
        context: 'Capital saved by deploying a single cross-platform codebase across Web & Mobile',
        labelDe: 'Entwicklungskosten',
        contextDe: 'Kostenersparnis durch gemeinsame Codebasis für Browser und App Stores',
      },
      {
        label: 'Time-to-Market',
        value: '2x Faster',
        context: 'Accelerated deployment from initial wireframes to production stores',
        labelDe: 'Markteinführung',
        contextDe: 'Doppelt so schnelle Bereitstellung vom Prototyp bis zum offiziellen Launch',
      },
      {
        label: 'User Retention',
        value: 'High',
        context: 'Science-backed elasticity drastically reduces user drop-off vs rigid trackers',
        labelDe: 'Nutzerbindung',
        contextDe: 'Nachhaltige Nutzeraktivität durch flexible Gewohnheitsbildung ohne Druck',
      },
    ],
    technologyTrust: {
      en: 'Engineered with React Native, TypeScript, React.js, Node.js, and local-first SQLite persistence, ensuring speed, security, and offline reliability.',
      de: 'Umgesetzt mit React Native, TypeScript, Node.js und lokaler SQLite-Persistenz für zuverlässige Offline-Funktion.',
      stack: ['React Native', 'React.js', 'TypeScript', 'Node.js', 'Offline-First Architecture'],
    },
    liveUrl: 'https://habitualist.app',
    caseStudySlug: 'habitualist-cross-platform-habit-tracker-growth-case-study',
    image: '/images/portfolio/project-48604.webp',
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'zerodha-sandbox',
    title: 'Zerodha Sandbox',
    client: 'Fintech Developer Ecosystem',
    clientRole: 'Trading API Simulation Tool',
    audience: 'startup',
    badge: {
      en: 'Fintech Tooling · Trading API Sandbox',
      de: 'Fintech Tooling · Trading-API-Sandbox',
    },
    heroHeadline: {
      en: 'Accelerating Fintech Onboarding by 4x with an Interactive Trading API Simulation Suite for Zerodha Kite Connect',
      de: 'Vervierfachung der Entwickler-Onboarding-Geschwindigkeit durch interaktive Trading-API-Simulation',
    },
    executiveSummary: {
      en: 'Fintech startups and algorithmic trading desks waste weeks attempting to test order execution logic against restrictive live trading sandboxes with strict rate limits and financial risk. Nordible engineered the Zerodha Sandbox: an interactive trading simulation platform with 25+ endpoints for orders, portfolios, quotes, and market depth—enabling risk-free algorithmic testing and 4x faster API integration.',
      de: 'Fintech-Startups und Trading-Teams verlieren oft Wochen beim Testen von Handelsalgorithmen, weil Live-Schnittstellen strenge Ratenbegrenzungen und Verlustrisiken aufweisen. Nordible entwickelte die Zerodha Sandbox: eine interaktive Simulationsplattform für 25+ Schnittstellen (Orders, Portfolios, Markttiefe) für risikofreie Entwicklung und viermal schnellere Integration.',
    },
    businessChallenge: {
      en: [
        'Developers testing algorithmic trading systems risk real capital losses when verifying edge cases in live financial markets.',
        'Strict rate-limiting and broker downtime on production APIs slow down fintech engineering sprints.',
        'Static documentation fails to provide interactive request/response feedback, leading to prolonged development cycles.',
      ],
      de: [
        'Entwickler von Handels-Algorithmen riskieren echtes Kapital beim Testen von Sonderfällen in realen Marktumgebungen.',
        'Strikte Ratenbegrenzungen und Schnittstellen-Ausfälle bremsen agile Fintech-Entwicklerteams aus.',
        'Statische PDF-Dokumentationen erschweren das Verständnis komplexer Order-Statusmeldungen.',
      ],
    },
    strategicSolution: {
      en: [
        'Built a zero-latency interactive sandbox simulating the entire Zerodha Kite Connect REST API specification.',
        'Implemented real-time mock data generators reflecting live market price movements, order book depth, and trade confirmations.',
        'Designed an intuitive, developer-centric documentation console allowing instant endpoint execution without API keys.',
      ],
      de: [
        'Entwicklung einer latenzfreien Simulationsumgebung für alle Schnittstellen der Zerodha Kite Connect-Spezifikation.',
        'Echtzeit-Generierung realistischer Marktbewegungen, Orderbuch-Tiefen und Ausführungsbestätigungen.',
        'Interaktive Entwicklerkonsole zum sofortigen Ausprobieren aller Endpunkte direkt im Browser ohne Registrierungshürden.',
      ],
    },
    businessResults: [
      {
        label: 'Integration Speed',
        value: '4x Faster',
        context: 'Reduction in engineering time to integrate and certify broker trading APIs',
        labelDe: 'Entwicklungszeit',
        contextDe: 'Vervierfachung des Onboardings bei der Anbindung von Wertpapier-Schnittstellen',
      },
      {
        label: 'API Coverage',
        value: '25+ Endpoints',
        context: 'Comprehensive coverage of orders, positions, quotes, and historical data',
        labelDe: 'Schnittstellentiefe',
        contextDe: 'Vollständige Abdeckung aller relevanten Handels- und Depot-Funktionen',
      },
      {
        label: 'Financial Risk',
        value: 'Zero',
        context: '100% simulated paper-trading environment without market exposure',
        labelDe: 'Kapitalrisiko',
        contextDe: 'Vollkommen risikofreie Simulation ohne Gefahr von Fehlbuchungen am Markt',
      },
    ],
    technologyTrust: {
      en: 'Architected using TypeScript, modern HTML5/CSS3, mock WebSocket event generators, and RESTful contract validation engines.',
      de: 'Erstellt mit TypeScript, HTML5/CSS3 und Echtzeit-Validierungslogik für präzise API-Zustandsprüfungen.',
      stack: ['TypeScript', 'REST API', 'Trading APIs', 'Data Simulation', 'Interactive Documentation'],
    },
    liveUrl: 'https://nordible.github.io/zerodha-sandbox/',
    caseStudySlug: 'zerodha-sandbox-fintech-trading-api-simulator-case-study',
    image: '/images/portfolio/project-6801648.webp',
    gradient: 'from-blue-600 to-indigo-600',
    logo: '/images/logos/zerodha-logo.png',
  },
  {
    id: 'nerdspal',
    title: 'NerdsPal.com',
    client: 'EdTech & Community Platform',
    clientRole: 'Peer Knowledge Venture',
    audience: 'startup',
    badge: {
      en: 'EdTech Venture · Real-Time Collaboration',
      de: 'EdTech Venture · Echtzeit-Kollaboration',
    },
    heroHeadline: {
      en: 'Bootstrapping a Real-Time Technical Community from Zero to 700+ Active Members with Sub-100ms WebSocket Latency',
      de: 'Aufbau einer interaktiven Wissens- und Entwicklerplattform von null auf 700+ aktive Nutzer mit Sub-100ms Latenz',
    },
    executiveSummary: {
      en: 'Technical students and software developers waste hours stuck on coding hurdles because traditional forums are slow and asynchronous. Nordible co-founded and built NerdsPal: a real-time collaborative Q&A platform matching learners with technical mentors through instantaneous WebSocket connections—scaling to 700+ active members and sustaining 40% monthly engagement retention.',
      de: 'Technikbegeisterte und Entwickler verlieren viel Zeit bei komplexen Programmierproblemen, weil klassische Foren zu langsam antworten. Nordible konzipierte NerdsPal: eine interaktive Echtzeit-Plattform, die Lernende mit Fachexperten per Live-WebSocket verbindet – skaliert auf 700+ aktive Mitglieder bei 40 % monatlicher Nutzerbindung.',
    },
    businessChallenge: {
      en: [
        'Asynchronous technical forums (like Stack Overflow) have high barriers to entry and harsh moderation that alienate early-stage developers.',
        'Scaling real-time chat and multi-user live rooms typically incurs heavy cloud server overhead.',
        'Bootstrapping a two-sided marketplace requires rapid product iteration without burning early venture runway.',
      ],
      de: [
        'Klassische Foren sind unpersönlich und bieten keine Möglichkeit zur sofortigen gemeinsamen Fehlersuche in Echtzeit.',
        'Echtzeit-Verbindungen für viele gleichzeitige Nutzer führen bei herkömmlicher Bauweise zu explodierenden Serverkosten.',
        'Der Aufbau einer zweiseitigen Community erfordert maximale Umsetzungsgeschwindigkeit bei minimalem Budget.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an ultra-low-latency real-time chat and collaborative coding workspace using WebSockets and event-driven Node.js.',
        'Designed an intuitive reputation system rewarding mentors for fast, high-quality technical assistance.',
        'Deployed lightweight, cost-effective cloud infrastructure scaling dynamically with peak user study sessions.',
      ],
      de: [
        'Entwicklung eines verzögerungsfreien Live-Chats und Code-Sharing-Bereichs mit WebSockets und Node.js.',
        'Implementierung eines motivierenden Reputationssystems, das Mentoren für schnelle und präzise Unterstützung belohnt.',
        'Kosteneffiziente Cloud-Infrastruktur, die sich automatisch an abendliche Aktivitätsspitzen der Community anpasst.',
      ],
    },
    businessResults: [
      {
        label: 'Community Growth',
        value: '700+ Users',
        context: 'Organic tech enthusiast members onboarded during initial launch sprint',
        labelDe: 'Community-Aufbau',
        contextDe: 'Organisch gewonnene aktive Nutzer während der ersten Produkteinführung',
      },
      {
        label: 'Chat Latency',
        value: '<100ms',
        context: 'Sub-second real-time messaging and code snippet exchange across users',
        labelDe: 'Übertragungslatenz',
        contextDe: 'Verzögerungsfreie Live-Kommunikation für effektive Fehlersuche',
      },
      {
        label: 'Monthly Retention',
        value: '40%',
        context: 'High recurring engagement among active technical peer study cohorts',
        labelDe: 'Monatliche Bindung',
        contextDe: 'Hohe Wiedernutzungsrate engagierter Lerngruppen und Mentoren',
      },
    ],
    technologyTrust: {
      en: 'Engineered with React.js, Node.js, WebSockets, MongoDB, and scalable event-driven cloud architecture for seamless concurrency.',
      de: 'Umgesetzt mit React.js, Node.js, WebSockets und MongoDB für stabile parallele Nutzerverbindungen.',
      stack: ['React.js', 'Node.js', 'WebSocket', 'MongoDB', 'Cloud Architecture'],
    },
    liveUrl: 'https://www.producthunt.com/products/nersdpal-com',
    caseStudySlug: 'nerdspal-community-knowledge-sharing-platform-case-study',
    image: '/images/portfolio/project-3184291.webp',
    gradient: 'from-cyan-600 to-blue-600',
    logo: '/images/logos/nerdspal-logo.svg',
  },
  {
    id: 'invoice-generator',
    title: 'Nordible Free Invoice Generator',
    client: 'Nordible Open Source Product',
    clientRole: 'Privacy-First Invoicing & MCP Server',
    audience: 'startup',
    badge: {
      en: 'Free · Privacy-First · MCP-Native',
      de: 'Kostenfrei · Datenschutz · MCP-Nativ',
    },
    heroHeadline: {
      en: 'Engineering a Free, Privacy-First Invoice Generator with Zero-Database Architecture and Native MCP Support',
      de: 'Entwicklung eines kostenfreien, datenschutzorientierten Rechnungserstellers mit Zero-Database-Architektur und nativer MCP-KI-Anbindung',
    },
    executiveSummary: {
      en: 'Freelancers, agencies, and businesses are tired of monthly subscription traps, watermarks, and cloud tools storing confidential financial rates on third-party servers. Nordible engineered the Free Invoice Generator: a zero-database, client-side web application with instant DIN A4 / ISO 216 PDF export, statutory GoBD tax calculations, and an official Model Context Protocol (MCP) server that empowers AI agents to generate invoices programmatically with zero data leaks.',
      de: 'Selbstständige, Agenturen und Unternehmen sind frustriert über monatliche Abo-Fallen, Wasserzeichen und Cloud-Dienste, die vertrauliche Rechnungsdaten auf Fremdservern speichern. Nordible entwickelte den Free Invoice Generator: eine datenbanklose Client-Side-Webanwendung mit sofortigem DIN A4 / ISO 216 PDF-Export, GoBD-konformer Steuerberechnung und einem offiziellen Model Context Protocol (MCP) Server, mit dem KI-Agenten Rechnungen automatisiert und datenschutzsicher erstellen können.',
    },
    businessChallenge: {
      en: [
        'Subscription-based invoicing tools extract continuous fees ($20–$50/mo) and enforce watermarks unless upgraded to paid tiers.',
        'Storing confidential billing details, client rates, and financial records in third-party cloud databases introduces serious GDPR and trade secret risks.',
        'Conversational AI agents (Claude, Cursor, ChatGPT) lacked a secure, privacy-compliant interface to generate compliant invoices without cloud exposure.',
      ],
      de: [
        'SaaS-Rechnungstools verlangen laufende Monatsabos (20–50 €/Monat) und erzwingen Wasserzeichen auf PDFs, sofern nicht bezahlt wird.',
        'Die Speicherung vertraulicher Kundendaten, Stundensätze und Rechnungsbeträge in Drittanbieter-Datenbanken birgt erhebliche DSGVO- und Geschäftsgeheimnis-Risiken.',
        'Moderne KI-Agenten (Claude, Cursor, ChatGPT) besaßen bisher keine standardisierte, datenschutzkonforme Schnittstelle zur Rechnungserstellung ohne Cloud-Datenspeicherung.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered a 100% client-side browser application where invoice data is saved strictly to local browser storage and never touches a backend database.',
        'Implemented DIN 5008 / ISO 216 layout with automatic page-break preservation, multi-currency support (EUR, USD, GBP, CHF), and GoBD-compliant VAT calculations (19%, 7%, 0%).',
        'Published the official @nordible/invoice-mcp package on npm, enabling AI agents to programmatically compute taxes and generate pre-filled invoices via client-side URL hashes (#data=).',
      ],
      de: [
        'Entwicklung einer reinen Client-Side-Browseranwendung: Rechnungsdaten verbleiben ausschließlich im lokalen Browserspeicher (LocalStorage) und erreichen nie eine Datenbank.',
        'Perfektes DIN 5008 / ISO 216 Layout mit automatischem Seitenumbruch, internationaler Währungsunterstützung (EUR, USD, GBP, CHF) und GoBD-konformen MwSt.-Sätzen (19 %, 7 %, 0 %).',
        'Veröffentlichung des offiziellen @nordible/invoice-mcp Pakets auf npm: KI-Agenten berechnen Steuern und übergeben Rechnungsdaten via URL-Hash (#data=) direkt an den Browser.',
      ],
    },
    businessResults: [
      {
        label: 'Pricing Model',
        value: 'Free to Use',
        context: 'Zero watermarks, zero subscription fees, and no account registration required',
        labelDe: 'Preismodell',
        contextDe: 'Keine Wasserzeichen, keine monatlichen Abogebühren und keine Registrierung nötig',
      },
      {
        label: 'Data Privacy',
        value: 'Zero Server Storage',
        context: '100% client-side LocalStorage architecture; zero external database leaks',
        labelDe: 'Datenschutz',
        contextDe: 'Reine clientseitige Speicherung; keine Datenübertragung an externe Server',
      },
      {
        label: 'AI Integration',
        value: 'MCP Native',
        context: 'Official @nordible/invoice-mcp npm package for Claude, Cursor, and ChatGPT',
        labelDe: 'KI-Integration',
        contextDe: 'Offizielles @nordible/invoice-mcp npm-Paket für Claude, Cursor und ChatGPT',
      },
    ],
    technologyTrust: {
      en: 'Built with Next.js 16, Model Context Protocol (MCP), client-side vector PDF generation, local browser storage, and an open-source codebase on GitHub: https://github.com/nordible/free-invoice-generator.',
      de: 'Entwickelt mit Next.js 16, Model Context Protocol (MCP), clientseitiger PDF-Vektorgenerierung, sicherem Browserspeicher und quelloffenem Code auf GitHub: https://github.com/nordible/free-invoice-generator.',
      stack: ['Next.js 16', 'Model Context Protocol (MCP)', 'Client-Side PDF Engine', 'Zero-Database Architecture', 'GoBD & GDPR Compliant'],
    },
    liveUrl: 'https://free-invoice-generator.nordible.co',
    repoUrl: 'https://github.com/nordible/free-invoice-generator',
    caseStudySlug: 'nordible-free-invoice-generator-privacy-first-case-study',
    image: '/images/portfolio/free-invoice-generator.png',
    gradient: 'from-blue-600 to-teal-500',
  },
  {
    id: 'nordible-directory',
    title: 'Nordible International Business Directory',
    client: 'Nordible Free Business Platform',
    clientRole: 'Free Public Business Directory',
    audience: 'local',
    badge: {
      en: 'Agentic · Free · Open Source',
      de: 'Agentic · Kostenfrei · Open Source',
    },
    heroHeadline: {
      en: 'The Agentic, Free, and Open-Source B2B Directory: Helping Businesses Win Clients Worldwide with 0% Commission',
      de: 'Agentic, kostenfrei und Open Source: Wie das freie B2B-Verzeichnis Unternehmen zu Neukunden ohne Provision verhilft',
    },
    executiveSummary: {
      en: 'Most online platforms trap businesses behind paywalls, charging 15%–30% cuts on closed deals or €50+ per single shared lead. Nordible built http://business-directory.nordible.co/ as a free community initiative to help honest businesses, service providers, and tradespeople get discovered by real B2B buyers and modern AI search engines (ChatGPT, Perplexity)—with zero broker fees and direct customer relationships.',
      de: 'Klassische Vermittlungsportale verlangen 15 % bis 30 % Provision auf Aufträge oder verkaufen überteuerte Leads an mehrere Anbieter gleichzeitig. Nordible hat http://business-directory.nordible.co/ als kostenfreie Initiative ins Leben gerufen, um Dienstleistern, Handwerkern und Betrieben zu echter Sichtbarkeit bei B2B-Einkäufern und modernen KI-Suchmaschinen (ChatGPT, Perplexity) zu verhelfen – ohne Vermittlungsgebühren und mit direktem Kundenkontakt.',
    },
    businessChallenge: {
      en: [
        'Predatory lead platforms charge 15%–30% commissions or force businesses into expensive monthly bidding wars.',
        'Hard-earned client relationships get held hostage by third-party middlemen who hide direct customer contacts.',
        'Businesses miss out on corporate buyers who now research verified partners using conversational AI (ChatGPT, Perplexity).',
      ],
      de: [
        'Aggressive Lead-Plattformen verlangen 15 % bis 30 % Provision oder zwingen Betriebe in teure monatliche Bieterkämpfe.',
        'Der direkte Draht zum Kunden geht verloren, weil Vermittlungsportale Kontaktdaten blockieren und Gebühren aufschlagen.',
        'Betriebe verlieren wertvolle B2B-Aufträge, weil Einkäufer neue Partner vermehrt über KI-Suchsysteme (ChatGPT, Perplexity) recherchieren.',
      ],
    },
    strategicSolution: {
      en: [
        'Launched a free, public business directory where 100% of revenue stays with the business owner.',
        'Enabled direct, frictionless communication via verified direct phone, email, and WhatsApp links without middleman interference.',
        'Built with AI-first entity standards so conversational engines cite and recommend listed businesses to buyers for free.',
      ],
      de: [
        'Bereitstellung eines kostenfreien Branchenverzeichnisses, bei dem 100 % des Auftragsumsatzes beim Betrieb verbleiben.',
        'Direkter und unkomplizierter Kundenkontakt über verifizierte Telefonnummern, E-Mails und WhatsApp ohne Zwischenhändler.',
        'Strukturierung nach modernen KI-Standards, damit Chatbots und KI-Suchmaschinen gelistete Firmen als Empfehlung zitieren.',
      ],
    },
    businessResults: [
      {
        label: 'Commission Rate',
        value: '0% Commission',
        context: 'Zero commissions, zero lead fees, and zero recurring retainers for listed companies',
        labelDe: 'Provision',
        contextDe: 'Keine Vermittlungsprovisionen, keine Lead-Gebühren und keine versteckten Kosten',
      },
      {
        label: 'Client Contact',
        value: '100% Direct',
        context: 'Direct inquiries via phone, WhatsApp, and email without platform gatekeepers',
        labelDe: 'Kundenkontakt',
        contextDe: 'Direkte Anfragen per Telefon, WhatsApp und E-Mail ohne Zwischenschaltung Dritter',
      },
      {
        label: 'AI Recommendation',
        value: 'AI-Ready',
        context: 'Structured to be recommended directly in ChatGPT, Perplexity, and Google AI answers',
        labelDe: 'KI-Empfehlungen',
        contextDe: 'Optimal aufbereitet für direkte Empfehlungen in ChatGPT, Perplexity und Google AI',
      },
    ],
    technologyTrust: {
      en: 'Built on the three pillars: Agentic AI discoverability, Free access for business owners, and fully Open Source on GitHub: https://github.com/nordible/business-directory.',
      de: 'Aufgebaut auf drei Kernwerten: Agentic KI-Auffindbarkeit, kostenfrei für Betriebe und vollständig Open Source auf GitHub: https://github.com/nordible/business-directory.',
      stack: ['Agentic AI', 'Free to Use', 'Open Source', '0% Commission', 'Direct Inquiries'],
    },
    liveUrl: 'http://business-directory.nordible.co/',
    repoUrl: 'https://github.com/nordible/business-directory',
    caseStudySlug: 'nordible-business-directory-ai-search-indexing-case-study',
    image: '/images/portfolio/business-directory.png',
    gradient: 'from-blue-700 to-emerald-600',
  },
];

export function getAllProjects(): ProjectData[] {
  return portfolioProjects;
}

export function getProject(id: string): ProjectData | undefined {
  return portfolioProjects.find((p) => p.id === id);
}

export function getProjectByCaseStudySlug(slug: string): ProjectData | undefined {
  return portfolioProjects.find((p) => p.caseStudySlug === slug);
}
