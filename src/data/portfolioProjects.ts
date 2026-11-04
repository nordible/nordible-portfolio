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
      en: 'How GE Healthcare and Kabeer Shah Slashed Clinician Data Bottlenecks by 60% with an Oncology Decision-Support Platform',
      de: 'Wie GE Healthcare und Kabeer Shah Datenengpässe in der Onkologie um 60 % reduzierten und klinische Entscheidungen beschleunigten',
    },
    executiveSummary: {
      en: 'Specialized clinical oncology teams were bogged down spending over 60% of their working hours manually reconciling multi-modal patient data across EHRs and diagnostic silos. Collaborating remotely with GE Healthcare\'s engineering division in Budapest, Nordible founder Kabeer Shah engineered a lightweight, HIPAA-compliant clinical decision platform for cancer disease management. By introducing an intuitive longitudinal treatment timeline and closed-loop therapy optimization, the system accelerated clinical throughput by 40% while handling years of patient history with zero visual lag.',
      de: 'Onkologische Fachteams verloren über 60 % ihrer Arbeitszeit durch die manuelle Zusammenführung fragmentierter Patientendaten aus getrennten Krankenhausinformationssystemen. In enger Online-Zusammenarbeit mit dem Entwicklerteam von GE Healthcare in Budapest konzipierte Nordible-Gründer Kabeer Shah eine leichtgewichtige, HIPAA-konforme klinische Assistenzplattform für das Krebsbehandlungsmanagement. Dank einer intuitiven Behandlungszeitachse und datenbasierter Therapieoptimierung konnte der Patientendurchsatz um 40 % gesteigert und jahrelange Behandlungsverläufe ohne Latenzen visualisiert werden.',
    },
    businessChallenge: {
      en: [
        'Oncologists and care teams struggled with multi-year patient records containing dense visit logs, complex chemotherapy regimens, lab panels, and imaging reports scattered across siloed hospital systems.',
        'Dense data grids and sluggish interfaces created severe cognitive fatigue and delayed time-critical clinical evaluations during multidisciplinary tumor boards.',
        'Clinicians lacked an integrated, closed-loop mechanism to evaluate prior treatment response data and optimize the subsequent stage of cancer therapy without error-prone manual compilation.',
      ],
      de: [
        'Onkologen und medizinische Teams kämpften mit jahrelangen Patientenakten aus Arztbesuchen, Chemotherapie-Plänen, Laborwerten und Bildgebungsdaten in getrennten Systemen.',
        'Überladene Datenansichten und schwerfällige Oberflächen führten zu kognitiver Überlastung und verzögerten zeitkritische Entscheidungen in interdisziplinären Tumorboards.',
        'Es fehlte ein schlanker, geschlossener Regelkreis, um Behandlungsergebnisse aus früheren Zyklen systematisch zu erfassen und nachfolgende Therapieschritte datenbasiert anzupassen.',
      ],
    },
    strategicSolution: {
      en: [
        'Nordible founder Kabeer Shah partnered remotely with GE Healthcare\'s Budapest team to architect a high-performance oncology intelligence platform focused on longitudinal disease management and cancer prevention.',
        'Engineered an ultra-lightweight, interactive timeline UI enabling doctors to seamlessly navigate years of patient visits, medication histories, and biomarker changes without visual or operational overhead.',
        'Implemented a closed-loop treatment optimization workflow: clinicians record treatment outcomes and patient responses, allowing the system to surface data-backed recommendations for the next treatment phase.',
      ],
      de: [
        'Nordible-Gründer Kabeer Shah arbeitete online mit dem GE Healthcare-Team in Budapest zusammen, um eine hochperformante Onkologie-Plattform für Krebsprävention und Behandlungsmanagement zu realisieren.',
        'Entwicklung einer leichtgewichtigen, interaktiven Zeitachsen-Benutzeroberfläche, mit der Ärzte jahrelange Behandlungszyklen, Medikationen und Laborwerte verzögerungsfrei durchlaufen können.',
        'Implementierung eines geschlossenen Feedback-Systems: Ärzte erfassen das Ansprechen auf Therapien, woraufhin nachfolgende Behandlungsstufen datenbasiert optimiert werden.',
      ],
    },
    businessResults: [
      {
        label: 'Data Processing Time',
        value: '-60%',
        context: 'Direct reduction in clinician hours spent preparing and reviewing longitudinal patient files',
        labelDe: 'Datenaufbereitung',
        contextDe: 'Zeitersparnis für Onkologen bei der Aktenauswertung mehrjähriger Behandlungsdaten',
      },
      {
        label: 'Care Coordination',
        value: '+40%',
        context: 'Accelerated patient throughput and dynamic treatment staging across clinical cycles',
        labelDe: 'Behandlungskoordination',
        contextDe: 'Steigerung des Patientendurchsatzes durch optimierte Behandlungsstufen',
      },
      {
        label: 'Timeline Responsiveness',
        value: '<100ms',
        context: 'Instantaneous timeline navigation across years of multi-modal clinical records',
        labelDe: 'UI-Reaktionszeit',
        contextDe: 'Verzögerungsfreies Navigieren durch jahrelange Behandlungszeitachsen',
      },
    ],
    technologyTrust: {
      en: 'Engineered under rigorous HIPAA and GDPR healthcare data protection standards, featuring end-to-end cryptographic audit trails, role-based governance, and a high-availability cloud architecture designed for zero institutional downtime.',
      de: 'Entwickelt nach strengsten HIPAA- und DSGVO-Standards mit lückenlosen kryptografischen Audit-Protokollen, rollenbasierter Zugriffskontrolle und hochverfügbarer Cloud-Architektur für ausfallsicheren Klinikbetrieb.',
      stack: ['HIPAA Compliance', 'GDPR Data Governance', 'Clinical Audit Trails', 'Enterprise Cloud Architecture', 'Zero-Downtime Reliability'],
    },
    clientQuote: {
      quote: {
        en: "Collaborating remotely with Kabeer Shah and Nordible enabled our Budapest and global teams to deliver a resilient, clinician-first oncology solution that made navigating complex patient histories effortless.",
        de: 'Die Zusammenarbeit mit Kabeer Shah und Nordible ermöglichte es unserem Team in Budapest und global, eine verlässliche Onkologie-Lösung bereitzustellen, die komplexe Patientenverläufe mühelos navigierbar macht.',
      },
      author: 'Engineering & Product Leadership',
      role: 'Oncology Software Division',
      company: 'General Electric Healthcare',
    },
    liveUrl: 'https://www.gehealthcare.com/en/products/software/careintellect',
    caseStudySlug: 'ge-healthcare-careintellect-oncology-case-study',
    image: '/images/portfolio/ge-careintellect-oncology.png',
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
      en: 'Scaling Instarem to $6B+ in Global Remittance: How Kabeer Shah with the NIUM Engineering Team De-Risked PCI-DSS Audits & Scaled Payment Rails',
      de: 'Skalierung von Instarem auf über 6 Mrd. $ Volumen: Wie Kabeer Shah mit dem NIUM-Team PCI-DSS-Audits absicherte und Zahlungs-Rails skalierte',
    },
    executiveSummary: {
      en: 'Scaling a cross-border remittance powerhouse processing over $6B annually across 160+ countries requires uncompromising regulatory compliance and resilient payment infrastructure. Collaborating closely with NIUM’s technology division, Nordible founder Kabeer Shah took technical stewardship of the instarem.com technology stack across mobile applications, web platforms, and transaction processing. Together with the internal engineering and compliance teams, he resolved complex legal and compliance barriers by leading the platform through successful PCI-DSS certification and regulatory audits, while architecting critical payment rails including the strategic PhonePe integration.',
      de: 'Die Skalierung einer globalen Zahlungsplattform mit über 6 Mrd. $ Jahresvolumen in mehr als 160 Ländern verlangt kompromisslose regulatorische Compliance und ausfallsichere Zahlungssysteme. In enger Zusammenarbeit mit dem Technologieteam von NIUM übernahm Nordible-Gründer Kabeer Shah die technische Verantwortung für den instarem.com-Technologiestack über Mobile-App, Webportal und Transaktions-Infrastruktur. Gemeinsam mit den internen Entwicklungs- und Compliance-Teams von NIUM löste er komplexe regulatorische Hürden durch erfolgreiche PCI-DSS-Zertifizierungen und Audits und integrierte strategische Zahlungskorridore wie PhonePe für reibungslose Massenzahlungen.',
    },
    businessChallenge: {
      en: [
        'Expanding cross-border payment corridors across international jurisdictions required strict adherence to PCI-DSS data vaults and statutory financial regulatory audits.',
        'High-velocity consumer remittance growth demanded unified technology stewardship across mobile applications and web platforms without operational fragmentation.',
        'Opening critical, high-volume consumer payment corridors required a seamless, audit-compliant API integration with payment leaders like PhonePe.',
      ],
      de: [
        'Die Expansion globaler Zahlungskorridore erforderte strikte Einhaltung von PCI-DSS-Vorgaben und komplexen finanzrechtlichen Audit-Auflagen in mehreren Rechtsräumen.',
        'Starkes Nutzerwachstum verlangte eine ganzheitliche Steuerung des gesamten Technologiestacks über Mobile App und Webplattform ohne operative Reibungsverluste.',
        'Die Erschließung strategischer Zahlungsmärkte erforderte die nahtlose, revisionssichere Anbindung von Marktführern wie PhonePe.',
      ],
    },
    strategicSolution: {
      en: [
        'Kabeer Shah worked alongside NIUM’s technology division, taking end-to-end responsibility for the instarem.com technology stack across both mobile and web applications.',
        'Resolved complex statutory compliance and security hurdles, ensuring the technology solution satisfied every mandate of rigorous PCI-DSS and financial regulatory audits.',
        'Architected and executed the critical PhonePe payment rail integration, unlocking seamless, high-volume consumer remittance channels.',
      ],
      de: [
        'Kabeer Shah übernahm gemeinsam mit dem NIUM-Technologieteam die ganzheitliche Verantwortung für den instarem.com-Technologiestack über Mobile App und Web.',
        'Lösung komplexer rechtlicher und regulatorischer Anforderungen, sodass alle technischen Lösungen den strengen Vorgaben der PCI-DSS- und Finanz-Audits vollumfänglich entsprachen.',
        'Architektur und Realisierung der strategischen Schnittstellenanbindung an PhonePe für den reibungslosen Massenzahlungsverkehr in Wachstumsmärkten.',
      ],
    },
    businessResults: [
      {
        label: 'Global Volume',
        value: '$6B+',
        context: 'Annual international transaction volume processed across 160+ countries',
        labelDe: 'Transaktionsvolumen',
        contextDe: 'Jährlich über Instarem-Schienen abgewickeltes internationales Zahlungsvolumen',
      },
      {
        label: 'Audit Certification',
        value: '100%',
        context: 'Successful PCI-DSS and financial regulatory compliance across global corridors',
        labelDe: 'Audit-Zertifizierung',
        contextDe: 'Erfolgreich bestandene PCI-DSS- und Finanzprüfungen ohne Auflagen',
      },
      {
        label: 'Payment Rail Expansion',
        value: 'PhonePe',
        context: 'Strategic payment integration deployed for frictionless consumer transactions',
        labelDe: 'Zahlungskorridore',
        contextDe: 'Strategische Integration von PhonePe für reibungslose Transaktionen',
      },
    ],
    technologyTrust: {
      en: 'Engineered for financial-grade data sovereignty, featuring hardened PCI-DSS compliance vaults, encrypted payment processing pipelines, and zero-downtime architecture built for institutional audit approval.',
      de: 'Konzipiert für bankenkonforme Datensouveränität mit PCI-DSS-geschützten Tresoren, durchgängig verschlüsselter Zahlungsabwicklung und ausfallsicherer Architektur für institutionelle Prüfungen.',
      stack: ['PCI-DSS Compliance', 'Financial Audit Governance', 'PhonePe Payment Rails', 'Mobile & Web Infrastructure', 'High-Concurrency Processing'],
    },
    clientQuote: {
      quote: {
        en: 'Kabeer Shah’s end-to-end technical leadership was pivotal in navigating our complex PCI-DSS audits and executing strategic payment integrations like PhonePe with complete certainty.',
        de: 'Kabeer Shahs ganzheitliche technische Führung war entscheidend für die Bewältigung unserer komplexen PCI-DSS-Audits und die erfolgreiche Anbindung strategischer Partner wie PhonePe.',
      },
      author: 'Technology & Operations Leadership',
      role: 'Global Payments & Platform Engineering',
      company: 'NIUM Inc. (Instarem)',
    },
    liveUrl: 'https://www.instarem.com',
    caseStudySlug: 'nium-instarem-fintech-remittance-scale-case-study',
    image: '/images/portfolio/nium-instarem-fintech.png',
    gradient: 'from-purple-600 to-blue-600',
    logo: '/images/logos/InstaRem_logo.svg',
  },
  {
    id: 'rst-baxter',
    title: 'Remote Service Tool (RST)',
    client: 'Vantive (formerly Kidney Care at Baxter International)',
    clientRole: 'Global MedTech & Organ Support Leader',
    audience: 'enterprise',
    badge: {
      en: 'MedTech Enterprise · Vantive & Baxter',
      de: 'MedTech Enterprise · Vantive & Baxter',
    },
    heroHeadline: {
      en: 'Halving Hospital Equipment Downtime and Slashing On-Site Field Service Costs with IoT Remote Diagnostics',
      de: 'Halbierung klinischer Geräteausfälle und Drastische Reduzierung teurer Vor-Ort-Technikereinsätze via IoT-Ferndiagnose',
    },
    executiveSummary: {
      en: 'Unplanned medical device failures in dialysis clinics and intensive care units historically triggered costly emergency field technician dispatches, travel overhead, and days of equipment downtime. For Vantive (formerly the Kidney Care division of Baxter International, acquired by Carlyle for $3.8B), Nordible founder Kabeer Shah collaborated with the client’s biomedical engineering and software teams to implement the Remote Service Tool (RST). Using secure IoT telemetry, RST enables biomedical specialists to diagnose equipment anomalies, review telemetry, and resolve device errors over-the-air—eliminating expensive on-site hospital visits and cutting equipment downtime by 50% across 15,000+ life-critical machines.',
      de: 'Unerwartete Störungen an lebenserhaltenden Medizingeräten in Dialysepraxen und Intensivstationen erforderten früher teure Vor-Ort-Technikereinsätze, lange Reisezeiten und tagelangen Stillstand. Für Vantive (ehemals die Kidney-Care-Sparte von Baxter International, für 3,8 Mrd. $ von Carlyle übernommen) implementierte Nordible-Gründer Kabeer Shah gemeinsam mit den Medizintechnik- und Software-Teams des Kunden das Remote Service Tool (RST). Durch sichere IoT-Telemetrie können Serviceteams Gerätestörungen per Fernzugriff analysieren und softwaregestützt beheben – ohne teure Anfahrten ins Krankenhaus und mit einer Reduktion der Ausfallzeiten um 50 % bei 15.000+ vernetzten Geräten.',
    },
    businessChallenge: {
      en: [
        'Every device malfunction historically required dispatching certified biomedical engineers on-site, incurring steep travel logistics, high hourly billing, and multi-day clinic delays.',
        'Hospitals faced canceled patient dialysis sessions and lost operational capacity while life-critical systems sat idle waiting for physical diagnostic boards.',
        'Strict medical device regulations (FDA, ISO 13485) and clinical network security protocols strictly prohibited off-the-shelf consumer remote desktop tools.',
      ],
      de: [
        'Jede Gerätestörung erforderte den teuren Vor-Ort-Einsatz zertifizierter Medizintechniker mit hohen Reisekosten, Stundensätzen und tagelangen Ausfallzeiten.',
        'Kliniken erlitten Terminausfälle bei Dialysebehandlungen und wirtschaftliche Einbußen, solange Geräte auf die manuelle Reparatur warteten.',
        'Strenge medizintechnische Zulassungsvorschriften (FDA, ISO 13485) und strikte Kliniknetzwerk-Sicherheit untersagten gewöhnliche Fernwartungssoftware.',
      ],
    },
    strategicSolution: {
      en: [
        'Kabeer Shah worked alongside Vantive’s biomedical and software engineering teams to implement the Remote Service Tool (RST), establishing bi-directional IoT machine telemetry across global hospital dialysis deployments.',
        'Equipped support teams with an instant browser-based diagnostic cockpit to analyze telemetry, run remote tests, and resolve issues over-the-air without physical truck rolls.',
        'Built end-to-end cryptographic audit trails and role-based device controls compliant with institutional medical device regulations and zero data loss.',
      ],
      de: [
        'Kabeer Shah leitete gemeinsam mit dem Entwickler- und Medizintechnikteam von Vantive die Implementierung des Remote Service Tool (RST) und etablierte ein bidirektionales IoT-Telemetriesystem für weltweite Dialysegeräte in Kliniken.',
        'Ausstattung der Serviceteams mit einem intuitiven Diagnose-Cockpit zur sekundenschnellen Fernüberwachung und Behebung von Fehlern ohne physische Anreise.',
        'Integration lückenloser kryptografischer Audit-Protokolle und rollenbasierter Gerätezugriffe gemäß strengsten medizintechnischen Richtlinien.',
      ],
    },
    businessResults: [
      {
        label: 'Field Dispatch Costs',
        value: '-50%',
        context: 'Substantial operational savings from eliminated on-site technician truck rolls',
        labelDe: 'Vor-Ort-Einsatzkosten',
        contextDe: 'Drastische Kostenersparnis durch den Wegfall physischer Technikeranfahrten',
      },
      {
        label: 'Device Downtime',
        value: '-50%',
        context: 'Direct reduction in equipment offline hours in hospitals and dialysis centers',
        labelDe: 'Geräteausfallzeit',
        contextDe: 'Halbierung der Stillstandzeiten in Krankenhäusern und Dialysezentren',
      },
      {
        label: 'First-Touch Resolution',
        value: '95%',
        context: 'High diagnostic accuracy and over-the-air issue resolution without on-site visits',
        labelDe: 'Erstlösungsquote',
        contextDe: 'Erfolgreiche Ferndiagnose und Fehlerbehebung ohne Vor-Ort-Termin',
      },
    ],
    technologyTrust: {
      en: 'Engineered under rigorous medical device governance (FDA / ISO 13485 compliance), featuring encrypted bidirectional IoT telemetry, tamper-proof audit trails, and zero-downtime clinical cloud infrastructure.',
      de: 'Entwickelt nach strengsten Medizintechnik-Standards (FDA / ISO 13485) mit verschlüsselter IoT-Telemetrie, revisionssicheren Audit-Logs und hochverfügbarer Cloud-Infrastruktur für den unterbrechungsfreien Klinikbetrieb.',
      stack: ['IoT Remote Diagnostics', 'Healthcare Telemetry', 'Field Service Optimization', 'Medical Device Compliance', 'Zero-Downtime Infrastructure'],
    },
    clientQuote: {
      quote: {
        en: 'Implementing the Remote Service Tool transformed our field service economics. Diagnosing and resolving device issues remotely eliminated thousands of costly hospital dispatches while keeping dialysis machines running for patients.',
        de: 'Die Einführung des Remote Service Tools hat unsere Wirtschaftlichkeit im Service revolutioniert. Die Ferndiagnose ersparte uns tausende teure Vor-Ort-Einsätze und sicherte den unterbrechungsfreien Betrieb lebenswichtiger Dialysegeräte.',
      },
      author: 'Service & Operations Leadership',
      role: 'Global Device Fleet & Diagnostics',
      company: 'Vantive (formerly Baxter Kidney Care)',
    },
    liveUrl: 'https://www.vantive.com',
    caseStudySlug: 'vantive-baxter-healthcare-remote-diagnostics-case-study',
    image: '/images/portfolio/vantive-baxter-remote-service.png',
    gradient: 'from-green-600 to-blue-600',
    logo: '/images/logos/vantive_logo.jpg',
  },
  {
    id: 'parents-vip',
    title: 'Parents.VIP',
    client: 'The Parent Inc. / TickleMedia',
    clientRole: 'Southeast Asia Largest Parenting Tech & Media Group',
    audience: 'startup',
    badge: {
      en: 'Creator Marketing Platform · Pan-SEA',
      de: 'Creator-Marketing-Plattform · Südostasien',
    },
    heroHeadline: {
      en: 'Scaling Creator Marketing Across 130,000+ Vetted Parent Influencers Reaching 35M+ Consumers Without Adding Agency Headcount',
      de: 'Skalierung von Creator-Marketing auf 130.000+ verifizierte Eltern-Influencer mit 35 Mio.+ Reichweite ohne zusätzlichen Personalaufwand',
    },
    executiveSummary: {
      en: 'Managing multi-country influencer campaigns for global FMCG leaders (Danone, Kimberly-Clark, Abbott, Unilever) across Southeast Asia was severely bottlenecked by fragmented spreadsheets and manual creator tracking. Nordible founder Kabeer Shah collaborated with The Parentinc’s product and technical leadership to engineer Parents.VIP—an automated creator marketing engine that scaled the network to 130,000+ vetted parent ambassadors and 35M+ monthly audience reach with zero agency headcount surge.',
      de: 'Internationale Influencer-Kampagnen für führende Konsumgüterkonzerne (Danone, Kimberly-Clark, Abbott, Unilever) in Südostasien scheiterten an manuellen Tabellen und zeitraubender Koordination. Nordible-Gründer Kabeer Shah entwickelte gemeinsam mit dem Produkt- und Entwicklungsteam von The Parentinc Parents.VIP – eine automatisierte Creator-Marketing-Plattform, die das Netzwerk auf über 130.000 verifizierte Markenbotschafter und 35 Mio.+ monatliche Reichweite skalierte, ohne das interne Agenturteam zu vergrößern.',
    },
    businessChallenge: {
      en: [
        'Marketing managers spent over 70% of their workday manually verifying social media posts, tracking story links, and formatting reporting spreadsheets.',
        'Surging campaign demand from multinational FMCG brands (Danone, Abbott, Kimberly-Clark) threatened operational capacity without aggressive agency hiring.',
        'High-traffic viral campaign spikes risked platform downtime, endangering commercial client deliverables during time-sensitive promotional launches.',
      ],
      de: [
        'Kampagnenmanager verbrachten über 70 % ihrer Arbeitszeit mit der manuellen Prüfung von Social-Media-Posts, Story-Screenshots und Excel-Reports.',
        'Die stark steigende Nachfrage multinationaler Konsumgütermarken (Danone, Abbott, Kimberly-Clark) stieß an personelle Kapazitätsgrenzen.',
        'Reichweitenstarke Kampagnenstarts drohten durch Lastspitzen instabil zu werden und zeitkritische Werbe-Launches zu gefährden.',
      ],
    },
    strategicSolution: {
      en: [
        'Architected an automated creator campaign engine with self-service onboarding, dynamic task verification, and automated milestone payouts.',
        'Eliminated operational bottlenecks by replacing manual spreadsheet collation with asynchronous background task processing and automated metrics.',
        'Instituted zero-downtime database deployment pipelines using Sqitch, guaranteeing continuous campaign availability during peak viral traffic.',
      ],
      de: [
        'Entwicklung einer automatisierten Kampagnen-Engine mit Self-Service-Onboarding, Content-Verifikation und provisionsbasierten Auszahlungen.',
        'Vollständige Ablösung manueller Tabellen durch asynchrone Hintergrundverarbeitung für unterbrechungsfreie Workflows.',
        'Einführung ausfallsicherer Sqitch-Datenbankmigrationen für kontinuierliche Plattformverfügbarkeit während viralen Traffic-Spitzen.',
      ],
    },
    businessResults: [
      {
        label: 'Creator Network',
        value: '130K+',
        context: 'Vetted parent micro-influencers & brand ambassadors across Southeast Asia',
        labelDe: 'Creator-Netzwerk',
        contextDe: 'Verifizierte Eltern-Influencer & Markenbotschafter in Südostasien',
      },
      {
        label: 'Audience Reach',
        value: '35M+',
        context: 'Monthly active parents reached across the flagship platform ecosystem',
        labelDe: 'Monatliche Reichweite',
        contextDe: 'Monatlich aktive Eltern im Plattform-Ökosystem',
      },
      {
        label: 'Campaign Automation',
        value: '100%',
        context: 'End-to-end post verification, survey collection, and zero-downtime releases',
        labelDe: 'Prozess-Automation',
        contextDe: 'Vollständige Automation von Verifikation, Umfragen und unterbrechungsfreien Deployments',
      },
    ],
    technologyTrust: {
      en: 'Engineered with high-throughput Node.js microservices, Python analytics, Redis caching, AWS cloud infrastructure, and Sqitch schema governance for zero-downtime campaign continuity.',
      de: 'Realisierung mit hochperformanten Node.js Microservices, Python Analytics, Redis Caching, AWS Cloud und Sqitch-Datenbank-Governance für unterbrechungsfreien Kampagnenbetrieb.',
      stack: ['Node.js', 'MySQL', 'Python', 'Redis', 'AWS', 'Microservices', 'Sqitch'],
    },
    liveUrl: 'https://www.parents.vip',
    caseStudySlug: 'parents-vip-influencer-creator-marketing-platform-case-study',
    image: '/images/portfolio/theparentinc-parents-vip.png',
    gradient: 'from-pink-600 to-purple-600',
    logo: '/images/logos/TheParentInc-logo.webp',
  },
  {
    id: 'smartbothub',
    title: 'IntelliTek.ai (formerly SmartBotHub)',
    client: 'SmarTek21',
    clientRole: 'Enterprise AI & Digital Operations Partner',
    audience: 'enterprise',
    badge: {
      en: 'Enterprise AI Platform · SmarTek21',
      de: 'Enterprise-KI-Plattform · SmarTek21',
    },
    heroHeadline: {
      en: 'Slashing Customer Service OpEx by 60% Across 500+ Deployments: How Kabeer Shah with SmarTek21 Engineered an Enterprise Bot Creation Engine',
      de: 'Senkung der Kundenservice-Betriebskosten um 60 % bei 500+ Unternehmen: Wie Kabeer Shah mit SmarTek21 eine Bot-Erstellungs-Plattform realisierte',
    },
    executiveSummary: {
      en: 'Escalating customer service wage inflation, high support ticket turnover, and slow response times were severely eroding margins for mid-to-large enterprises. Nordible founder Kabeer Shah collaborated with SmarTek21’s engineering and product team to engineer the conversational AI and bot-creation platform behind IntelliTek.ai (formerly SmartBotHub). The system enables enterprise business teams to build and deploy intelligent conversational bots in hours—automating tier-1 customer inquiries, query triage, and CRM ticketing to slash operating costs by 60% across 500+ deployed commercial organizations.',
      de: 'Steigende Personalkosten im Kundenservice und lange Wartezeiten belasteten die operativen Margen von Unternehmen erheblich. Nordible-Gründer Kabeer Shah entwickelte gemeinsam mit dem Produkt- und Entwicklerteam von SmarTek21 die Konversations-KI- und Bot-Erstellungsplattform hinter IntelliTek.ai (ehemals SmartBotHub). Das System ermöglicht es Unternehmen, intelligente Dialog-Bots innerhalb von Stunden bereitzustellen, um Standardanfragen, Ticket-Zuweisungen und CRM-Synchronisierungen vollautomatisch abzuwickeln – mit 60 % Kostensenkung bei über 500 Unternehmenskunden.',
    },
    businessChallenge: {
      en: [
        'Customer service payroll expanded linearly with business growth, creating unsustainable operational overhead.',
        'Delayed customer response times during peak business hours caused customer churn and lowered Net Promoter Scores (NPS).',
        'Traditional rule-based chatbots were brittle, hardcoded, and required expensive software engineers to update simple business rules.',
      ],
      de: [
        'Die Personalkosten im Kundenservice stiegen linear zum Unternehmenswachstum und führten zu hohen Gemeinkosten.',
        'Lange Wartezeiten bei Anfrage-Spitzen führten zu Kundenfrustration und erhöhten Abwanderungsraten.',
        'Klassische regelbasierte Chatbots waren starr und erforderten für jede Textanpassung teure Entwicklerstunden.',
      ],
    },
    strategicSolution: {
      en: [
        'Collaborated with SmarTek21 to architect a high-throughput conversational AI engine capable of accurate natural language understanding and real-time intent resolution.',
        'Engineered a no-code administrative dashboard allowing non-technical business managers to design, test, and deploy customized conversation flows in hours.',
        'Integrated automated enterprise data connectors syncing securely into Salesforce, Zendesk, and proprietary SQL systems without engineering overhead.',
      ],
      de: [
        'Architektur einer performanten Konversations-KI gemeinsam mit SmarTek21 für präzise Absichtserkennung und sekundenschnelle Antworten.',
        'Entwicklung eines intuitiven No-Code-Dashboards, mit dem Fachabteilungen Dialogpfade ohne Programmieraufwand in Stunden erstellen können.',
        'Integration sicherer Schnittstellen zur automatisierten Synchronisierung mit Salesforce, Zendesk und internen Datenbanksystemen.',
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
    liveUrl: 'https://intellitek.ai',
    caseStudySlug: 'smartbothub-enterprise-conversational-ai-cost-reduction-case-study',
    image: '/images/portfolio/project-8386440.webp',
    gradient: 'from-orange-600 to-red-600',
    logo: '/images/logos/smartek21_logo.png',
  },
  {
    id: 'nextauto',
    title: 'NextAuto',
    client: 'NextServices HSS Pvt. Ltd.',
    clientRole: 'U.S. Healthcare Revenue Cycle & Claims Automation',
    audience: 'enterprise',
    badge: {
      en: 'Healthcare RPA · HIPAA Compliant',
      de: 'Healthcare-RPA · HIPAA-konform',
    },
    heroHeadline: {
      en: 'Automating U.S. Healthcare Insurance Claims & Patient Eligibility Verification Under Strict HIPAA Compliance',
      de: 'Automatisierung von US-Krankenkassenabrechnungen & Patienten-Prüfungen unter strikter HIPAA-Compliance',
    },
    executiveSummary: {
      en: 'In the U.S. healthcare model, patients receive treatment without paying upfront—leaving medical providers with the complex, labor-intensive burden of extracting reimbursements from insurance carriers. NextServices managed this mission-critical revenue cycle. Nordible founder Kabeer Shah collaborated with the NextServices team to engineer NextAuto—an automated, HIPAA-compliant claims processing suite. The platform automated repetitive manual tasks including patient insurance eligibility checks, treatment authorization requests, and claims status inquiries across payer portals, eliminating 90% of billing errors and saving 40+ staff hours every week.',
      de: 'Im US-Gesundheitswesen zahlen Patienten Behandlungen selten direkt vor Ort – Praxen und Kliniken tragen das wirtschaftliche Risiko und müssen Vergütungen mühsam bei Versicherern geltend machen. NextServices übernahm diesen geschäftskritischen Abrechnungsprozess. Nordible-Gründer Kabeer Shah entwickelte gemeinsam mit dem Team von NextServices die Plattform NextAuto: eine HIPAA-konforme Automatisierungssuite für Krankenkassenabrechnungen. Das System automatisiert zeitaufwendige manuelle Schritte wie Patienten-Versicherungsprüfungen, Behandlungsfreigaben und Statusabfragen bei Kostenträgern – mit 90 % weniger Abrechnungsfehlern und über 40 Stunden wöchentlicher Zeitersparnis.',
    },
    businessChallenge: {
      en: [
        'In the U.S., patients present insurance cards at appointment time without upfront payment, forcing clinical back-offices to manually verify complex payer coverage rules for each treatment.',
        'Administrative clerks spent dozens of hours daily logging into disparate carrier portals to check eligibility, submit claims, and track reimbursement status.',
        'Strict federal healthcare regulations (HIPAA) and payer mandates prohibited uncontrolled automation, requiring audit-proof security for sensitive patient data.',
      ],
      de: [
        'Patienten in den USA zahlen Behandlungen nicht bar, sodass Praxisteams den Versicherungsschutz für jeden einzelnen Behandlungsschritt mühsam manuell prüfen mussten.',
        'Mitarbeiter verbrachten täglich etliche Arbeitsstunden mit dem manuellen Einloggen in unzählige Versicherungsportale zur Statusüberprüfung und Abrechnungseinreichung.',
        'Strenge gesetzliche US-Vorgaben (HIPAA) und Krankenkassen-Richtlinien untersagten unregulierte Standard-Tools und verlangten lückenlose Datensicherheit für Patientendaten.',
      ],
    },
    strategicSolution: {
      en: [
        'Kabeer Shah worked with the NextServices team to architect an automated, HIPAA-compliant robotic process automation (RPA) suite interfacing directly with U.S. insurance payer portals.',
        'Automated patient eligibility verification, treatment coverage checks, and claim status inquiries, reducing human data entry while strictly routing non-standard cases for human review.',
        'Integrated encrypted data pipelines and immutable audit trails in Microsoft SQL Server, guaranteeing absolute compliance with U.S. healthcare privacy mandates.',
      ],
      de: [
        'Kabeer Shah konzipierte gemeinsam mit dem NextServices-Team eine HIPAA-konforme RPA-Automatisierungssuite mit direkter Schnittstelle zu US-Versicherungsportalen.',
        'Vollautomatische Überprüfung der Patienten-Versicherungsberechtigung, Leistungsabdeckung und Erstattungsstatus – mit gezielter manueller Prüfung bei regulatorischen Grenzfällen.',
        'Integration verschlüsselter Daten-Pipelines und unveränderlicher Prüfprotokolle in Microsoft SQL Server für lückenlose Einhaltung aller US-Datenschutzstandards.',
      ],
    },
    businessResults: [
      {
        label: 'Workflows Automated',
        value: '80%',
        context: 'Routine claims eligibility and payer inquiries executed without manual touch',
        labelDe: 'Automatisierungsgrad',
        contextDe: 'Routinierte Abrechnungs- und Vorprüfprozesse laufen vollautomatisch',
      },
      {
        label: 'Time Saved',
        value: '40h/wk',
        context: 'Billable employee hours redirected from portal data entry to patient advocacy',
        labelDe: 'Zeitersparnis',
        contextDe: 'Freigesetzte Wochenarbeitszeit für wertschöpfende Patientenbetreuung',
      },
      {
        label: 'Error Reduction',
        value: '-90%',
        context: 'Drop in billing transposition mistakes and insurance claim rejections',
        labelDe: 'Fehlerreduktion',
        contextDe: 'Rückgang von Falschabrechnungen und Abrechnungsablehnungen',
      },
    ],
    technologyTrust: {
      en: 'Engineered with C#, .NET Framework, SQL Server, and HIPAA-compliant data pipelines designed for healthcare auditability and zero data loss.',
      de: 'Umgesetzt mit C#, .NET Framework, SQL Server und HIPAA-konformen Daten-Pipelines für revisionssichere Genauigkeit und Datenschutz.',
      stack: ['Healthcare RPA', 'HIPAA Compliance', 'C#', '.NET Framework', 'SQL Server', 'Claims Automation'],
    },
    liveUrl: 'https://nextservices.com/',
    caseStudySlug: 'nextauto-enterprise-workflow-rpa-automation-case-study',
    image: '/images/portfolio/nextservices-claims-automation.png',
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
        'Engineered a hybrid static pre-rendering architecture (SSR fallback shell) with route-level Schema.org JSON-LD, guaranteeing 100% crawlability by AI agents and social preview bots without sacrificing rich client-side React hydration.',
      ],
      de: [
        'Entwicklung einer fundierten SEO-Entitätsarchitektur für kaufkräftige B2B-Suchbegriffe im Raum Frankfurt und Rhein-Main.',
        'Ergonomisches mobiles Design mit daumenfreundlicher Bottom-Bar für den direkten Anruf oder die Terminvereinbarung mit einem Klick.',
        'Strukturierung der Referenzprojekte mit Schema.org-Markup für Top-Platzierungen in Google-Suchergebnissen und KI-Antworten.',
        'Implementierung einer hybriden Vorab-Render-Architektur (SSR-Fallback-Shell) mit routenspezifischen Schema.org-Daten für sofortige Indexierung durch KI-Agenten und Crawler bei nahtloser React-Hydration.',
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
      en: 'Engineered with clean semantic HTML5, hybrid SSR pre-rendering shell, Next.js, sub-second TTFB hosting, and Schema.org architecture schema without bloated third-party plugins.',
      de: 'Umgesetzt mit semantischem Next.js, hybrider SSR-Vorab-Render-Shell, blitzschnellen Server-Antwortzeiten und Schema.org B2B-Entitätsgraphen ohne schwerfällige Plugins.',
      stack: ['B2B Client Funnel Architecture', 'Hybrid SSR & Static Shell', 'Semantic Search Authority', 'Performance Engineering', 'Information Architecture'],
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
      en: 'Positioning Bombay Studio as ChatGPT’s #1 Recommended Luxury Architecture Firm to Pre-Filter ₹1.2Cr+ Turnkey Budgets',
      de: 'Positionierung von Bombay Studio als #1-KI-Empfehlung bei ChatGPT zur gezielten Vorqualifizierung von 1,2 Cr.+ Projektbudgets',
    },
    executiveSummary: {
      en: 'High-end architectural and design studios waste dozens of partner hours pitching unqualified inquiries with unrealistic budgets. Nordible founder Kabeer Shah collaborated with the leadership of Bombay Studio to engineer a high-impact Generative Engine Optimization (GEO) and digital entity authority architecture. By embedding the studio into LLM retrieval pipelines as the authoritative leader for luxury 5 BHK residences in Mumbai, the firm was designated by ChatGPT as the "First one to contact"—consistently attracting and pre-filtering affluent clients with budgets exceeding ₹80L–₹1.2Cr+.',
      de: 'Exklusive Architekturbüros verlieren wertvolle Partner-Arbeitszeit durch unqualifizierte Anfragen mit unzureichenden Budgets. Nordible-Gründer Kabeer Shah entwickelte gemeinsam mit der Geschäftsführung von Bombay Studio eine maßgeschneiderte Generative Engine Optimization (GEO) und KI-Entitäts-Architektur. Das Studio wurde von ChatGPT und KI-Suchmaschinen als unangefochtene Erstempfehlung („First one to contact“) für schlüsselfertige 5-BHK-Luxusobjekte in Mumbai positioniert – mit systematischer Vorfilterung von High-Ticket-Budgets ab 80 Lakh bis über 1,2 Crore INR.',
    },
    businessChallenge: {
      en: [
        'Senior design partners burned 20+ hours weekly conducting complimentary site visits for clients who could not afford luxury turnkey execution fees.',
        'Traditional SEO agencies generated low-intent vanity clicks from bargain hunters rather than affluent High-Net-Worth Individuals (HNWIs).',
        'Affluent homeowners increasingly consult AI models (ChatGPT, Perplexity) instead of Google blue links, leaving legacy architectural marketing obsolete.',
      ],
      de: [
        'Geschäftsführende Partner verloren über 20 Wochenstunden mit unbezahlten Erstberatungen für Interessenten ohne passendes Budget.',
        'Klassische SEO-Agenturen lieferten preissensible Zufallsbesucher statt vermögender Bauherren mit Premium-Anspruch.',
        'Vermögende Immobilienbesitzer suchen Dienstleister heute über KI-Chatbots (ChatGPT, Perplexity) statt über veraltete Google-Ergebnislisten.',
      ],
    },
    strategicSolution: {
      en: [
        'Kabeer Shah worked with Bombay Studio’s leadership to construct an authoritative digital entity graph indexed directly into LLM retrieval architectures.',
        'Engineered transparent, budget-qualifying digital discovery funnels establishing the firm’s minimum project threshold at ₹80L–₹1.2Cr+ before consultations.',
        'Integrated frictionless mobile executive routing allowing qualified affluent prospects to connect directly with the principal architect via WhatsApp.',
      ],
      de: [
        'Kabeer Shah konzipierte gemeinsam mit der Studioleitung einen autoritativen Entitätsgraphen für bevorzugte Zitationen in modernen KI-Modellen.',
        'Entwicklung digitaler Qualifizierungs-Funnels mit klarer Kommunikation des Mindestprojektvolumens (80 Lakh bis 1,2 Crore INR) vor der Erstberatung.',
        'Direktes VIP-Routing via WhatsApp für verifizierte Interessenten zur sofortigen Abstimmung auf Geschäftsführerebene.',
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
      en: 'Enterprise Infrastructure · Zero Bloatware Tax',
      de: 'Unternehmens-Infrastruktur · Keine Bloatware-Gebühren',
    },
    heroHeadline: {
      en: 'Eliminating the Big-Tech Bloatware Tax: High-Deliverability Business Email Slashing OpEx by 70%',
      de: 'Befreiung von der Bloatware-Steuer der Tech-Konzerne: Professionelle Unternehmens-E-Mails mit 70 % weniger OpEx',
    },
    executiveSummary: {
      en: 'Growing businesses are coerced into paying $10 to $25 per user every month to tech conglomerates just for corporate email, trapped paying for unused bundled apps while leaking brand credibility with spam folder misconfigurations. Kabeer Shah worked with the Nordible product engineering team to build Nordible Professional Email: a high-reputation, turnkey corporate email platform featuring custom domain branding, hardened deliverability (SPF/DKIM/DMARC), 100% data sovereignty, and zero per-seat penalty—helping business leaders cut communications OpEx by up to 70% in under 5 minutes.',
      de: 'Wachsende Unternehmen werden von Tech-Giganten dazu gezwungen, 10 bis 25 Euro pro Mitarbeiter und Monat für ungenutzte Software-Suiten zu zahlen, nur um Firmenadressen zu betreiben. Gleichzeitig landen wichtige Angebote durch fehlerhafte Zustellbarkeit im Spam-Ordner. Kabeer Shah entwickelte gemeinsam mit dem Nordible-Entwicklerteam Nordible Professional Email: eine hochzuverlässige, schlüsselfertige E-Mail-Infrastruktur mit eigenen Domains, automatischem Spam- und Reputationsschutz (SPF/DKIM/DMARC), 100 % DSGVO-Datenhoheit und ohne Pro-Kopf-Aufschläge – für bis zu 70 % dauerhafte Kostensenkung in 5 Minuten.',
    },
    businessChallenge: {
      en: [
        'The Big-Tech Bloatware Tax: Companies pay for office suites, cloud drives, and intranet tools they never touch, causing SaaS overhead to balloon as headcounts grow.',
        'Reputational Damage & Lost Deals: Commercial proposals sent from generic domains or unauthenticated servers trigger spam filters, ruining brand trust and losing client contracts.',
        'Third-Party Data Scraping: Storing private agreements and sensitive correspondence in public cloud ecosystems exposes corporate intelligence to third-party AI training and monitoring.',
      ],
      de: [
        'Die Bloatware-Gebühr der Tech-Riesen: Unternehmen zahlen für ungenutzte Office- und Videotools mit, wodurch die monatlichen IT-Kosten bei Neueinstellungen unkontrolliert explodieren.',
        'Reputationsverlust & verlorene Aufträge: E-Mails von generischen Adressen oder unzureichend signierten Servern landen im Spam-Filter und kosten messbar Neugeschäft.',
        'Fehlende Datenhoheit: Sensible Kundenverträge und Geschäftsgeheimnisse liegen in ausländischen Cloud-Rechenzentren, die Daten für Modell-Trainings und Analysen scannen.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered dedicated private containerized email infrastructure with zero per-user seat markups, eliminating software bundle bloat.',
        'Automated enterprise deliverability orchestration (DKIM, SPF, DMARC, reverse DNS, TLS 1.3), ensuring proposals land reliably in C-level inboxes.',
        'Built frictionless 5-minute DNS migration and intuitive webmail/mobile sync (IMAP/SMTP/ActiveSync) with 99.9% guaranteed uptime.',
      ],
      de: [
        'Bereitstellung einer isolierten, containerisierten E-Mail-Server-Architektur ohne künstliche Lizenzgebühren pro Mitarbeiter.',
        'Vollautomatisierte Einrichtung aller Zustellbarkeits- und Reputationsprotokolle (DKIM, SPF, DMARC, TLS 1.3) für garantierte Posteingangs-Platzierung bei Entscheidern.',
        'Nahtlose 5-Minuten-Migration und intuitive Einrichtung auf allen Endgeräten (Webmail, iOS, Android, Outlook) mit 99,9 % Verfügbarkeitsgarantie.',
      ],
    },
    businessResults: [
      {
        label: 'Cost Reduction',
        value: '-70%',
        context: 'Direct reduction in corporate communication software OpEx vs. big tech suites',
        labelDe: 'Kostenersparnis',
        contextDe: 'Senkung der laufenden E-Mail-Kosten gegenüber Cloud-Konglomeraten',
      },
      {
        label: 'Setup Velocity',
        value: '5 Mins',
        context: 'Turnkey domain configuration and mailbox onboarding with zero downtime',
        labelDe: 'Einrichtung',
        contextDe: 'Schlüsselfertige Domain-Einrichtung und Postfach-Aktivierung in 5 Minuten',
      },
      {
        label: 'Data Sovereignty',
        value: '100%',
        context: 'Exclusive private server isolation with zero AI scraping or data tracking',
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
    image: '/images/portfolio/nordible-email-platform.png',
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
    clientRole: 'Trading API Simulation Suite',
    audience: 'startup',
    badge: {
      en: 'Fintech & Trading · Risk-Free API Sandbox',
      de: 'Fintech & Trading · Risikofreie API-Sandbox',
    },
    heroHeadline: {
      en: 'De-risking Algorithmic Trading: Accelerating Fintech Time-to-Market by 4x with an Offline Simulation Suite for Zerodha Kite',
      de: 'Fintech-Time-to-Market vervierfachen: 100 % risikofreie Entwicklung durch Offline-Trading-Simulation für Zerodha Kite',
    },
    executiveSummary: {
      en: 'Testing algorithmic trading and fintech platforms against live broker APIs introduces capital liability, strict rate limits, and multi-week onboarding delays. Nordible developed the Zerodha Sandbox—a high-fidelity offline simulation suite replicating 25+ trading endpoints. Fintech teams test order executions, portfolio rebalancing, and extreme market scenarios with 0% capital exposure, zero broker dependencies, and 4x faster product release cycles.',
      de: 'Das Testen von Handelsalgorithmen an Live-Brokerschnittstellen birgt echte Verlustrisiken, Ratenbegrenzungen und wochenlange Freigabeverzögerungen. Nordible entwickelte die Zerodha Sandbox: eine simulationsgetreue Offline-Plattform für 25+ Handels-Endpunkte. Fintech-Teams testen Orders, Portfolios und Markttiefe ohne Kapitaleinsatz, unabhängig von Börsenzeiten und viermal schneller bis zum Marktstart.',
    },
    businessChallenge: {
      en: [
        'Direct financial liability: Testing order execution algorithms against live broker environments risks costly execution errors, accidental margin calls, and irreversible capital losses.',
        'Time-to-market bottlenecks: Product teams face multi-week delays waiting for broker KYC approvals, sandbox API credentials, and restricted trading hours before development can begin.',
        'CI/CD instability and rate limits: Automated testing suites in modern agile pipelines frequently fail due to broker API rate-limiting (3 req/sec), third-party server downtime, and scheduled weekend maintenance.',
      ],
      de: [
        'Direktes Kapitalrisiko: Das Testen von Handelsalgorithmen in Live-Umgebungen birgt die Gefahr folgenreicher Fehlbuchungen und unwiderruflicher Kapitalverluste.',
        'Verzögerte Markteinführung: Produkt- und Entwicklerteams verlieren Wochen durch behördliche KYC-Prüfungen, API-Schlüssel-Freigaben und starre Börsenöffnungszeiten.',
        'Instabile CI/CD-Pipelines: Automatisierte Testläufe scheitern regelmäßig an strikten API-Ratenbegrenzungen, Server-Wartungsfenstern und Ausfällen von Drittanbietern.',
      ],
    },
    strategicSolution: {
      en: [
        'Architected a self-contained, zero-dependency offline sandbox that fully simulates the Zerodha Kite Connect REST API specification locally and in CI/CD.',
        'Engineered realistic mock state machines and synthetic data generators for orders, portfolio holdings, quotes, and order-book depth without calling live broker servers.',
        'Provided an open-source, interactive developer console with pre-configured request payloads—empowering engineers to run integration tests immediately with zero API keys.',
      ],
      de: [
        'Entwicklung einer eigenständigen Offline-Simulationsplattform, die die gesamte Zerodha Kite Connect-Spezifikation lokal und in CI/CD-Pipelines abbildet.',
        'Implementierung realistischer Zustandsmaschinen und Testdaten-Generatoren für Orders, Depotpositionen und Markttiefe ohne Zugriff auf echte Broker-Server.',
        'Bereitstellung einer quelloffenen, interaktiven Entwicklerkonsole mit vordefinierten Test-Payloads für sofortige API-Verifikation ohne Authentifizierungshürden.',
      ],
    },
    businessResults: [
      {
        label: 'Integration Speed',
        value: '4x Faster',
        context: 'Time-to-market reduced from multi-month broker certification cycles to rapid, sprint-ready deployments',
        labelDe: 'Marktreife',
        contextDe: 'Vervierfachung des Onboardings: Markteinführung in Wochen statt Monaten',
      },
      {
        label: 'Capital Risk',
        value: 'Zero Exposure',
        context: '100% paper-trade isolation eliminating trading liability and margin errors during development and QA',
        labelDe: 'Kapitalrisiko',
        contextDe: '100 % isolierte Simulation schließt finanzielle Fehlbuchungen in Entwicklung und QA aus',
      },
      {
        label: 'Testing Availability',
        value: '24/7 Uptime',
        context: 'Deterministic CI/CD test execution with zero rate-limit throttling and zero market-hour dependencies',
        labelDe: 'Verfügbarkeit',
        contextDe: 'Zuverlässige CI/CD-Pipelines rund um die Uhr, unabhängig von Börsenzeiten und Ratenlimits',
      },
    ],
    technologyTrust: {
      en: 'Architected using TypeScript, modern HTML5/CSS3, mock WebSocket event generators, and RESTful contract validation engines. Complete open-source codebase available on GitHub: https://github.com/nordible/zerodha-sandbox.',
      de: 'Erstellt mit TypeScript, HTML5/CSS3 und Echtzeit-Validierungslogik für präzise API-Zustandsprüfungen. Vollständiger Open-Source-Quellcode verfügbar auf GitHub: https://github.com/nordible/zerodha-sandbox.',
      stack: ['TypeScript', 'REST API', 'Trading APIs', 'Data Simulation', 'Interactive Documentation'],
    },
    liveUrl: 'https://nordible.github.io/zerodha-sandbox/',
    repoUrl: 'https://github.com/nordible/zerodha-sandbox',
    caseStudySlug: 'zerodha-sandbox-fintech-trading-api-simulator-case-study',
    image: '/images/portfolio/zerodha-sandbox.png',
    gradient: 'from-blue-600 to-indigo-600',
    logo: '/images/logos/zerodha-logo.png',
  },
  {
    id: 'nerdspal',
    title: 'NerdsPal.com',
    client: 'EdTech Venture & Knowledge Platform',
    clientRole: 'Co-Founder & Technical Architect',
    audience: 'startup',
    badge: {
      en: 'Venture Case Study · Real-Time Systems · Architectural Proving Ground',
      de: 'Venture-Fallstudie · Echtzeit-Systeme · Architektur-Prüfstand',
    },
    heroHeadline: {
      en: 'Bootstrapping a Real-Time Technical Community from Zero to 700+ Developers: Proving Sub-100ms Concurrency Before Strategic IP Transition',
      de: 'Aufbau einer interaktiven Entwickler-Plattform auf 700+ Nutzer: Sub-100ms Concurrency vor strategischer IP-Übernahme',
    },
    executiveSummary: {
      en: 'Developers and engineering students lose valuable hours to complex debugging hurdles because traditional forums are slow, punitive, and asynchronous. Nordible co-founded and bootstrapped NerdsPal: a real-time collaborative Q&A platform matching learners with technical mentors through instantaneous WebSocket connections. Operating with zero outside venture capital, NerdsPal achieved sub-100ms messaging latency, scaled organically to 700+ active members, and sustained 40% monthly cohort retention. Having validated high-concurrency real-time architecture in production, the venture concluded its community lifecycle, allowing its proprietary real-time synchronization blueprints and moderation microservices to be strategically integrated into Nordible’s enterprise client software.',
      de: 'Entwickler und Informatikstudenten verlieren unzählige Stunden bei komplexen Programmierproblemen, weil klassische Foren zu träge, unpersönlich und asynchron sind. Nordible gründete NerdsPal: eine interaktive Echtzeit-Plattform, die Lernende mit Fachexperten per Live-WebSocket verbindet. Ohne externes Risikokapital erreichte NerdsPal unter 100 ms Latenz, wuchs organisch auf über 700 aktive Entwickler und erzielte 40 % monatliche Nutzerbindung. Nach erfolgreicher Validierung der High-Concurrency-Architektur wurde das Community-Projekt planmäßig abgeschlossen und das geistige Eigentum sowie die Microservice-Blueprints direkt in Nordibles Enterprise-Lösungen überführt.',
    },
    businessChallenge: {
      en: [
        'Asynchronous forums (such as Stack Overflow) impose strict barriers to entry, punitive downvoting, and multi-hour response delays that derail developer momentum.',
        'Engineering multi-user real-time collaborative coding and chat environments typically generates runaway cloud infrastructure and server bandwidth costs.',
        'Bootstrapping a two-sided developer marketplace requires achieving high organic user engagement without burning venture capital runway.',
        'Balancing long-term commercial sustainability for consumer EdTech against low student ability-to-pay without resorting to intrusive advertising.',
      ],
      de: [
        'Klassische Foren (wie Stack Overflow) haben hohe Einstiegshürden, restriktive Moderation und lange Antwortzeiten, die Lernprozesse ausbremsen.',
        'Echtzeit-Verbindungen und kollaboratives Live-Coding für hunderte gleichzeitige Nutzer führen bei konventionellen Architekturen zu explodierenden Cloud-Kosten.',
        'Der Aufbau einer zweiseitigen Community erfordert maximale Geschwindigkeit und hohe organische Bindung bei strikt begrenztem Budget.',
        'Kommerzielle Tragfähigkeit im B2C-EdTech-Sektor ohne den Einsatz nerviger Werbebanner oder unrentabler Studentenabonnements.',
      ],
    },
    strategicSolution: {
      en: [
        'Engineered an ultra-low-latency, event-driven WebSocket communication backbone delivering instantaneous chat and synchronized code snippets in <100ms.',
        'Implemented a gamified peer karma and reputation engine that incentivized experienced developers to provide rapid, high-quality technical assistance.',
        'Architected lightweight, cost-optimized Node.js microservices on Google Cloud Platform that scaled dynamically with traffic spikes at zero idle waste.',
        'Executed a disciplined venture lifecycle: validated high-concurrency state synchronization, sunset the consumer experiment gracefully, and transitioned core IP to enterprise solutions.',
      ],
      de: [
        'Entwicklung eines extrem schnellen, eventgesteuerten WebSocket-Backbones für Live-Chat und Code-Sharing mit unter 100 ms Latenz.',
        'Implementierung eines Reputations- und Karma-Systems, das Fachexperten für schnelle und präzise Hilfestellungen motivierte.',
        'Aufbau schlanker, hochgradig skalierbarer Node.js-Microservices auf der Google Cloud Platform zur automatischen Bewältigung von Lastspitzen ohne Leerlaufkosten.',
        'Gezielter Lebenszyklus: Nach erfolgreichem Proof-of-Concept im Produktivbetrieb Überführung der Kernarchitektur in Nordibles B2B-Unternehmenssoftware.',
      ],
    },
    businessResults: [
      {
        label: 'Community Traction',
        value: '700+ Developers',
        context: 'Organic technical members onboarded through community advocacy and Product Hunt launch',
        labelDe: 'Community-Wachstum',
        contextDe: 'Organisch gewonnene Entwickler über Community-Empfehlungen und Product Hunt',
      },
      {
        label: 'WebSocket Latency',
        value: '<100ms',
        context: 'Sub-second real-time messaging and code snippet exchange across active peer rooms',
        labelDe: 'Echtzeit-Latenz',
        contextDe: 'Verzögerungsfreie Übertragung von Chat und Code-Snippets in Live-Räumen',
      },
      {
        label: 'Cohort Retention',
        value: '40%',
        context: 'Recurring monthly engagement among active peer study and mentor cohorts',
        labelDe: 'Nutzerbindung',
        contextDe: 'Monatliche Wiedernutzungsrate unter aktiven Mentoren und Lerngruppen',
      },
      {
        label: 'Architectural ROI',
        value: '100% IP Retained',
        context: 'Battle-tested real-time WebSocket patterns transitioned directly to enterprise software clients',
        labelDe: 'Architektur-Mehrwert',
        contextDe: 'Praxiserprobte Echtzeit-Muster direkt in B2B-Kundenlösungen integriert',
      },
    ],
    technologyTrust: {
      en: 'Engineered with React.js, Node.js, WebSockets, MongoDB, and scalable event-driven cloud architecture for seamless concurrency. Complete open-source codebase available on GitHub: https://github.com/nordible/StackOverflowClone.',
      de: 'Umgesetzt mit React.js, Node.js, WebSockets und MongoDB für stabile parallele Nutzerverbindungen. Vollständiger Open-Source-Quellcode verfügbar auf GitHub: https://github.com/nordible/StackOverflowClone.',
      stack: ['React.js', 'Node.js', 'WebSocket', 'MongoDB', 'Cloud Architecture'],
    },
    liveUrl: 'https://www.producthunt.com/products/nersdpal-com',
    repoUrl: 'https://github.com/nordible/StackOverflowClone',
    caseStudySlug: 'nerdspal-community-knowledge-sharing-platform-case-study',
    image: '/images/portfolio/nerdspal.avif',
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
