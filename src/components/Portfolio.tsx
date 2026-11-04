'use client';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Pause, Play, ArrowRight, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export type AudienceType = 'all' | 'local' | 'startup' | 'enterprise';

const projects = [
  {
    id: 'oncocare',
    title: 'CareIntellect (Oncology Platform)',
    client: 'General Electric Healthcare',
    audience: 'enterprise' as const,
    logo: '/images/logos/GeneralElectric_logo.svg',
    link: 'https://www.gehealthcare.com/en/products/software/careintellect',
    caseStudySlug: 'ge-healthcare-careintellect-oncology-case-study',
    description: 'Oncology care intelligence platform developed with GE Healthcare Budapest, featuring a lightweight longitudinal timeline UI and closed-loop treatment optimization.',
    technologies: ['Clinical Decision Support', 'Care Timeline UX', 'HIPAA Compliance', 'Cloud Architecture'],
    outcome: 'Slashed clinician data bottlenecks by 60% with instantaneous longitudinal patient tracking',
    image: '/images/portfolio/ge-careintellect-oncology.png',
    metrics: {
      users: '10K+',
      improvement: '40%',
      uptime: '99.8%'
    },
    gradient: 'from-blue-600 to-teal-600'
  },
  {
    id: 'instarem',
    title: 'Instarem.com',
    client: 'NIUM Inc.',
    audience: 'startup' as const,
    logo: '/images/logos/InstaRem_logo.svg',
    link: 'https://www.instarem.com',
    caseStudySlug: 'nium-instarem-fintech-remittance-scale-case-study',
    description: 'End-to-end technology stewardship for NIUM’s instarem.com led by Kabeer Shah with NIUM’s engineering division—overseeing mobile, web, PCI-DSS compliance audits, and high-volume PhonePe payment rails.',
    technologies: ['Cross-Border Remittance', 'PCI-DSS Compliance', 'PhonePe Rails', 'Mobile & Web Stack'],
    outcome: 'Scaled global remittance rails with 100% audit pass rate and seamless PhonePe integration',
    image: '/images/portfolio/nium-instarem-fintech.png',
    metrics: {
      users: '1M+',
      transactions: '$6B+',
      uptime: '99.9%'
    },
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    id: 'rst-baxter',
    title: 'Remote Service Tool (RST)',
    client: 'Vantive (Baxter Kidney Care)',
    audience: 'enterprise' as const,
    logo: '/images/logos/vantive_logo.jpg',
    link: 'https://www.vantive.com',
    caseStudySlug: 'vantive-baxter-healthcare-remote-diagnostics-case-study',
    description: 'IoT remote telemetry and diagnostic platform implemented by Kabeer Shah together with Vantive’s biomedical engineering team—eliminating costly on-site technician dispatches and halving medical device downtime.',
    technologies: ['IoT Remote Diagnostics', 'Healthcare Telemetry', 'Field Service Optimization', 'Medical Device Compliance'],
    outcome: 'Eliminated 50% of on-site technician dispatches and halved device downtime across 15,000+ medical devices',
    image: '/images/portfolio/vantive-baxter-remote-service.png',
    metrics: {
      devices: '15K+',
      downtime: '-50%',
      accuracy: '95%'
    },
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 'parents-vip',
    title: 'Parents.VIP',
    client: 'The Parent Inc / TickleMedia',
    audience: 'startup' as const,
    logo: '/images/logos/TheParentInc-logo.webp',
    link: 'https://www.parents.vip',
    caseStudySlug: 'parents-vip-influencer-creator-marketing-platform-case-study',
    description: 'Autonomous creator marketing platform activating 130,000+ vetted parent micro-influencers and ambassadors across Southeast Asia for global FMCG brands.',
    technologies: ['Node.js', 'MySQL', 'Mocha', 'Microservices', 'AWS', 'Redis', 'Python'],
    outcome: 'Scaled creator marketing to 130,000+ vetted parent ambassadors and 35M+ audience reach with 100% campaign automation',
    image: '/images/portfolio/theparentinc-parents-vip.png',
    metrics: {
      creators: '130K+',
      reach: '35M+',
      automation: '100%'
    },
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 'smartbothub',
    title: 'IntelliTek.ai (formerly SmartBotHub)',
    client: 'SmarTek21',
    audience: 'enterprise' as const,
    logo: '/images/logos/smartek21_logo.png',
    link: 'https://intellitek.ai',
    caseStudySlug: 'smartbothub-enterprise-conversational-ai-cost-reduction-case-study',
    description: 'Enterprise conversational AI and bot-creation platform engineered by Kabeer Shah with SmarTek21—enabling businesses to launch intelligent self-service bots that slash support OpEx by 60%.',
    technologies: ['Conversational AI', 'Enterprise Bot Engine', 'NLP', 'CRM Integration', 'AWS Cloud Architecture'],
    outcome: 'Reduced customer service operating costs by 60% across 500+ enterprises with 90% first-contact resolution',
    image: '/images/portfolio/intellitek-ai-platform.png',
    metrics: {
      bots: '500+ Deployments',
      cost_reduction: '60% Cost Saved',
      accuracy: '90% Resolution'
    },
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'nextauto',
    title: 'NextAuto',
    client: 'NextServices HSS Pvt Ltd',
    audience: 'enterprise' as const,
    logo: '/images/logos/nextservices_logo.png',
    link: 'https://nextservices.com/',
    caseStudySlug: 'nextauto-enterprise-workflow-rpa-automation-case-study',
    description: 'HIPAA-compliant healthcare RPA suite automated by Kabeer Shah with NextServices—streamlining U.S. insurance eligibility verification and claim requests to eliminate 90% of billing errors.',
    technologies: ['Healthcare RPA', 'HIPAA Compliance', 'C#', '.NET', 'SQL Server', 'Claims Automation'],
    outcome: 'Automated 80% of routine claims eligibility workflows under strict HIPAA compliance, saving 40+ staff hours weekly',
    image: '/images/portfolio/nextservices-claims-automation.png',
    metrics: {
      automation: '80% Workflows',
      time_saved: '40h/week Saved',
      error_reduction: '90% Fewer Errors'
    },
    gradient: 'from-emerald-600 to-teal-600'
  },  
  {
    id: 'buns069',
    title: 'BUNS 069',
    client: 'Buns 069 Homemade Burger',
    audience: 'local' as const,
    logo: '/images/logos/buns069-logo.webp',
    link: 'https://www.buns069.de/',
    caseStudySlug: 'restaurant-delivery-growth-case-study',
    description: 'Local food commerce & digital scaling for a premier handcrafted burger brand in the Rhine-Main region. Targeted with increasing overall business volume through high-converting direct ordering funnels, local SEO/GEO visibility, and customer retention.',
    technologies: ['Local SEO & GEO', 'Conversion Optimization', 'Digital Ordering Funnels', 'Performance Marketing', 'Retention Systems'],
    outcome: 'Engineered storefront conversion architecture and digital ordering systems, driving a +74% revenue surge and 0% cancellations across online ordering channels.',
    image: '/images/buns-069/buns-069-homepage-hero.png',
    metrics: {
      focus: '+74% Revenue Sprint',
      channel: 'Digital Sales Volume',
      market: 'Frankfurt & Rhein-Main'
    },
    gradient: 'from-amber-600 to-orange-700'
  },
  {
    id: 'shams-consult',
    title: 'Shams Consult',
    client: 'Shams Consult',
    audience: 'local' as const,
    logo: '/images/logos/shams-consult-logo.png',
    link: 'https://shams-consult.de/',
    caseStudySlug: 'architecture-firm-seo-case-study',
    description: 'Architecture and urban planning consultancy in Frankfurt am Main. Established Google Page 1 authority across core service lines and transformed organic search interest into signed commercial mandates without paid ads.',
    technologies: ['B2B Client Funnel Architecture', 'Semantic Search Authority', 'Performance Engineering', 'Information Architecture'],
    outcome: 'Engineered a search authority architecture that drove +490% search impressions, +317% organic clicks, and secured 2 signed client mandates from 3 connected calls in 30 days.',
    image: '/images/shams-consult/shams-consult-homepage-hero.png',
    metrics: {
      impressions: '+490% Reach',
      ranking: 'Google Page 1',
      new_clients: '2 Signed Mandates'
    },
    gradient: 'from-blue-600 to-emerald-600'
  },
  {
    id: 'bombay-studio',
    title: 'Bombay Studio',
    client: 'Bombay Studio',
    audience: 'local' as const,
    logo: '/images/logos/bombay-studio-logo.png',
    link: 'https://www.bombaystudio.in/',
    caseStudySlug: 'bombay-studio-luxury-interior-architecture-geo-case-study',
    description: 'AI search authority and Generative Engine Optimization (GEO) engineered by Kabeer Shah with Bombay Studio—positioning the firm as ChatGPT’s #1 recommended luxury architect and pre-filtering ₹1.2Cr+ project budgets.',
    technologies: ['Generative Engine Optimization (GEO)', 'AI Search Authority', 'Entity Graph Engineering', 'Turnkey Funnel Architecture'],
    outcome: 'Ranked #1 on ChatGPT as "First one to contact" for luxury turnkey architecture, pre-qualifying high-ticket ₹1.2Cr+ budgets and eliminating unqualified inquiries',
    image: '/images/case-studies/bombay-studio/chatgpt-ranking.jpeg',
    metrics: {
      ranking: '#1 on ChatGPT',
      status: 'First to Contact',
      leads: '₹1.2 Cr+ Budgets'
    },
    gradient: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'nordible-email',
    title: 'Nordible Professional Email',
    client: 'Nordible Product',
    audience: 'startup' as const,
    logo: '/images/logo-email.webp',
    link: 'https://email.nordible.co/',
    caseStudySlug: 'nordible-email-b2b-saas-security-infrastructure-case-study',
    description: 'Turnkey private business email eliminating Big Tech bloatware and per-user taxes, delivering 100% data sovereignty and 70% OpEx savings.',
    technologies: ['Docker', 'Linux Security', 'TLS/SSL', 'SPF/DKIM/DMARC', 'Fast Webmail'],
    outcome: 'Engineered high-deliverability business email infrastructure slashing corporate communication costs with 99.9% uptime and 5-min setup.',
    image: '/images/portfolio/nordible-email-platform.png',
    metrics: {
      cost_reduction: '-70% OpEx',
      uptime: '99.9%',
      setup: '5 Mins'
    },
    gradient: 'from-nordible-blue to-blue-800'
  },
  {
    id: 'linkedin-catchup',
    title: 'LinkedIn Catch-up Assistant',
    client: 'Nordible Product',
    audience: 'startup' as const,
    logo: '/images/logos/Linkedin-Catchup-assistant-icon.png',
    link: 'https://chromewebstore.google.com/detail/linkedin-catch-up-assista/npfnjcgcajdmcihppmihlnnjefkniaip',
    caseStudySlug: 'linkedin-catchup-assistant-b2b-relationship-automation-case-study',
    description: 'A safety-first Chrome extension for founders and sales leaders that turns birthdays, anniversaries, and job promotions into warm deal flow and zero-ad-spend website traffic.',
    technologies: ['Chrome Extension Manifest V3', 'JavaScript', 'Node.js', 'Human-Emulation Algorithms', 'Local Storage Privacy'],
    outcome: 'Generated +35% warm re-engagement and consistent C-level inbound website traffic with 100% account safety.',
    image: '/images/portfolio/linkedin-catchup-assistant.png',
    metrics: {
      pipeline: '+35% Leads',
      inbound: 'Free C-Level Traffic',
      safety: '100% Safe'
    },
    gradient: 'from-blue-600 to-nordible-blue'
  },
  {
    id: 'habitualist',
    title: 'Habitualist',
    audience: 'startup' as const,
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzQzMzhjYSIvPjxwYXRoIGQ9Ik0zNSA1MGwxMCAxMCAyMC0yMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
    link: 'https://habitualist.app',
    caseStudySlug: 'habitualist-cross-platform-habit-tracker-growth-case-study',
    description: 'A science-backed habit tracker using the Elastic Habits method to help users build sustainable consistency without the guilt of streaks. Built as a cross-platform solution from the ground up.',
    technologies: ['React Native', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    outcome: 'Successfully launched cross-platform (Web & Android) with a privacy-first, science-backed approach to habit formation.',
    image: '/images/portfolio/project-48604.webp',
    metrics: {
      platform: 'Web & Android',
      method: 'Elastic Habits',
      privacy: '100% Private'
    },
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'zerodha-sandbox',
    title: 'Zerodha Sandbox',
    audience: 'startup' as const,
    logo: '/images/logos/zerodha-logo.png',
    link: 'https://nordible.github.io/zerodha-sandbox/',
    repoUrl: 'https://github.com/nordible/zerodha-sandbox',
    caseStudySlug: 'zerodha-sandbox-fintech-trading-api-simulator-case-study',
    description: 'High-fidelity offline trading API simulation suite eliminating financial risk, rate limits, and onboarding delays for Zerodha Kite Connect integrations.',

    technologies: ['TypeScript', 'HTML5', 'CSS3', 'REST API', 'Trading APIs'],
    outcome: 'Enabled risk-free algorithmic testing and 4x faster fintech onboarding with 25+ simulated endpoints and 24/7 CI/CD availability',
    image: '/images/portfolio/zerodha-sandbox.png',
    metrics: {
      endpoints: '25+',
      coverage: '100%',
      interactive: 'Yes'
    },

    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'nerdspal',
    title: 'NerdsPal.com',
    client: 'EdTech Venture',
    audience: 'startup' as const,
    logo: '/images/logos/nerdspal-logo.svg',
    link: 'https://www.producthunt.com/products/nersdpal-com',
    repoUrl: 'https://github.com/nordible/StackOverflowClone',
    caseStudySlug: 'nerdspal-community-knowledge-sharing-platform-case-study',
    description: 'Real-time collaborative developer platform with sub-100ms WebSocket chat, peer mentorship rooms, and scalable cloud architecture.',
    technologies: ['React.js', 'Node.js', 'WebSocket', 'MongoDB', 'GCP'],
    outcome: 'Bootstrapped to 700+ active developers and validated high-concurrency real-time architecture before transitioning IP to enterprise solutions',
    image: '/images/portfolio/nerdspal.avif',
    metrics: {
      users: '700+',
      realtime: '<100ms',
      retention: '40%'
    },
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'invoice-generator',
    title: 'Nordible Free Invoice Generator',
    client: 'Nordible Product',
    audience: 'startup' as const,
    logo: '/images/logo-email.webp',
    link: 'https://free-invoice-generator.nordible.co',
    repoUrl: 'https://github.com/nordible/free-invoice-generator',
    caseStudySlug: 'nordible-free-invoice-generator-privacy-first-case-study',
    description: 'Free to use, client-side professional invoice generator with DIN A4 PDF rendering and native Model Context Protocol (MCP) AI support.',
    technologies: ['Next.js 16', 'MCP Server', 'Client-Side PDF', 'Zero-Database', 'GoBD & GDPR'],
    outcome: '0€ server hosting costs and 100% client-side privacy with instant invoice generation.',
    image: '/images/portfolio/free-invoice-generator.png',
    metrics: {
      hosting: '0€ / mo',
      privacy: '100%',
      speed: 'Instant'
    },
    gradient: 'from-blue-600 to-teal-500'
  },
  {
    id: 'nordible-directory',
    title: 'Nordible Business Directory',
    client: 'Nordible Product',
    audience: 'enterprise' as const,
    logo: '/images/logos/nordible-logo.png',
    link: 'https://directory.nordible.co',
    repoUrl: 'https://github.com/nordible/business-directory',
    caseStudySlug: 'nordible-business-directory-ai-search-indexing-case-study',
    description: 'International verified business directory platform optimized for AI search engine discoverability (GEO) and B2B partner discovery.',
    technologies: ['Next.js 16', 'Supabase', 'Schema.org Entity Graph', 'AI Search Optimization'],
    outcome: 'Structured verified business footprint for AI search citations and international commercial visibility.',
    image: '/images/portfolio/project-3861969.webp',
    metrics: {
      visibility: 'Global Reach',
      verification: '100% Verified',
      engine: 'AI Search (GEO)'
    },
    gradient: 'from-blue-700 to-emerald-600'
  }
];

const metricLabelTranslationsDe: Record<string, string> = {
  uptime: 'Verfügbarkeit',
  security: 'Sicherheit',
  support: 'Support',
  reach: 'Reichweite',
  safety: 'Sicherheit',
  privacy: 'Datenschutz',
  users: 'Nutzer',
  transactions: 'Transaktionen',
  improvement: 'Optimierung',
  campaigns: 'Kampagnen',
  efficiency: 'Effizienz',
  devices: 'Geräte',
  downtime: 'Ausfallzeit',
  accuracy: 'Genauigkeit',
  creators: 'Creators',
  bots: 'Bots',
  cost_reduction: 'Kostenersparnis',
  automation: 'Automatisierung',
  time_saved: 'Zeitersparnis',
  error_reduction: 'Fehlerreduktion',
  platform: 'Plattform',
  method: 'Methode',
  features: 'Funktionen',
  storage: 'Speicherung',
  responsive: 'Responsiv',
  endpoints: 'Endpunkte',
  coverage: 'Abdeckung',
  interactive: 'Interaktiv',
  ai_tools: 'KI-Tools',
  realtime: 'Echtzeit',
  setup: 'Setup',
  backend: 'Backend',
  mobile: 'Mobil',
  connections: 'Verbindungen',
  engagement: 'Status',
  focus: 'Fokus',
  channel: 'Vertriebskanal',
  market: 'Zielmarkt',
  ranking: 'Platzierung',
  impressions: 'Impressionen',
  directions: 'Routenanfragen',
  new_clients: 'Neukunden',
  retention: 'Bindung',
  pipeline: 'Pipeline',
  inbound: 'Inbound-Traffic'
};

const portfolioTranslationsDe: Record<string, { client?: string; description: string; outcome: string; metricValues?: Record<string, string> }> = {
  'bombay-studio': {
    client: 'Bombay Studio',
    description: 'KI-Suchautorität und Generative Engine Optimization (GEO), entwickelt von Kabeer Shah gemeinsam mit Bombay Studio – positioniert das Büro auf Platz 1 bei ChatGPT und filtert Budgets ab 1,2 Cr. INR vor.',
    outcome: 'Platz 1 bei ChatGPT als Erstempfehlung („First one to contact“) für schlüsselfertige Luxusarchitektur mit gezielter Vorqualifizierung von 1,2 Cr.+ Projektbudgets.',
    metricValues: {
      ranking: 'Platz 1 (ChatGPT)',
      status: 'Erstempfehlung',
      leads: '1,2 Cr.+ Budgets'
    }
  },
  'shams-consult': {
    client: 'Shams Consult',
    description: 'Architektur- und Stadtplanungsbüro in Frankfurt am Main. Steigerung der Google-Suchimpressionen um +490% und der aktiven Nutzer um +275% in 30 Tagen durch wissenschaftlich fundierte UX, Subsekunden-Ladezeiten und semantische SEO.',
    outcome: '+490% Google-Impressionen, +317% organische Klicks und 2 gewonnene Neukundenmandate aus 3 Erstgesprächen in 30 Tagen ganz ohne Werbeausgaben.',
    metricValues: {
      impressions: '+490% Zuwachs',
      ranking: 'Google Platz 1',
      new_clients: '2 Mandate'
    }
  },
  'nordible-email': {
    client: 'Nordible-Produkt',
    description: 'Schlüsselfertige Unternehmens-E-Mail ohne Bloatware und Pro-Kopf-Gebühren der Tech-Riesen – mit 100 % Datenhoheit und bis zu 70 % Kostenersparnis.',
    outcome: 'Entwicklung einer hochzuverlässigen E-Mail-Infrastruktur mit garantierter Posteingangs-Zustellung, 99,9 % Verfügbarkeit und 5-Minuten-Setup.',
    metricValues: {
      cost_reduction: '-70% OpEx',
      uptime: '99,9%',
      setup: '5 Min.'
    }
  },
  'linkedin-catchup': {
    client: 'Nordible-Produkt',
    description: 'Sicherheitsorientierte Browser-Erweiterung für Geschäftsführer und Vertriebsleiter: Verwandelt Geburtstage und Beförderungen in planbare Neugeschäfts-Anfragen und kostenfreien Website-Traffic.',
    outcome: '+35 % Reaktivierung bestehender Kontakte und kontinuierlicher B2B-Traffic durch menschlich emulierte Beziehungspflege bei 100 % Profilsicherheit.',
    metricValues: {
      pipeline: '+35 % Leads',
      inbound: 'Kostenfreier Traffic',
      safety: '100 % sicher'
    }
  },
  'buns069': {
    client: 'BUNS 069 Homemade Burger',
    description: 'Lokale Gastronomie-Skalierung und digitale Wachstumsstrategie für eine Premium-Burger-Marke im Rhein-Main-Gebiet (069). Zentrale Herausforderung: Nachhaltige Steigerung des gesamten Geschäftsvolumens durch hochkonvertierende Direktbestell-Kanäle, Local SEO/GEO und gezielte Kundenbindung.',
    outcome: 'Entwicklung einer datengetriebenen Wachstums-Roadmap zur Steigerung des direkten Bestellvolumens, Erschließung lokaler Marktanteile und Maximierung der Kundenwiederkaufrate.',
    metricValues: {
      focus: 'Volumenwachstum',
      channel: 'Direktbestellungen',
      market: 'Rhein-Main (069)'
    }
  },
  'instarem': {
    client: 'NIUM',
    description: 'Flaggschiff-Fintech-Plattform für kostengünstige internationale Überweisungen für Millionen weltweiter Nutzer.',
    outcome: 'Erfolgreiche Bereitstellung einer Plattform zur Abwicklung von Millionenbeträgen im Zahlungsverkehr bei 99,9% Verfügbarkeit.'
  },
  'oncocare': {
    client: 'General Electric',
    description: 'Ganzheitliche klinische Onkologie-Assistenzplattform zur Verwaltung von Patientendaten und für fundierte Entscheidungen in der Krebsbehandlung.',
    outcome: 'Verbesserung der klinischen Versorgungskoordination um 40% und Reduzierung der Datenverarbeitungszeit um 60%.'
  },
  'parents-vip': {
    client: 'The Parent Inc / TickleMedia',
    description: 'Ganzheitliche Creator- und Influencer-Marketing-Plattform zur Skalierung von über 130.000 verifizierten Eltern-Botschaftern für weltweite Konsumgütermarken in Südostasien.',
    outcome: 'Skalierung auf 130.000+ Markenbotschafter und 35 Mio.+ monatliche Reichweite bei 100 % automatisierter Kampagnenabwicklung.',
    metricValues: {
      creators: '130K+',
      reach: '35 Mio.+',
      automation: '100 %'
    }
  },
  'rst-baxter': {
    client: 'Vantive Healthcare',
    description: 'Medizintechnik-Supportplattform zur sicheren Ferndiagnose und Fehlerbehebung von medizinischen Geräten in Gesundheitseinrichtungen.',
    outcome: 'Reduzierung von Geräteausfallzeiten um 50% und Steigerung der Ferndiagnosegenauigkeit um 75%.'
  },
  'smartbothub': {
    client: 'SmarTek21',
    description: 'Enterprise-Konversations-KI- und Bot-Erstellungsplattform, entwickelt von Kabeer Shah gemeinsam mit SmarTek21 – ermöglicht Unternehmen die Erstellung intelligenter Dialog-Bots zur Senkung der Supportkosten um 60 %.',
    outcome: 'Senkung der Kundenservice-Betriebskosten um 60 % bei über 500 Unternehmen durch 90 % Erstlösungsquote.',
    metricValues: {
      bots: '500+ Deployments',
      cost_reduction: '60 % Ersparnis',
      accuracy: '90 % Erstlösung'
    }
  },
  'nextauto': {
    client: 'NextServices HSS Pvt Ltd',
    description: 'HIPAA-konforme Healthcare-RPA-Plattform, entwickelt von Kabeer Shah gemeinsam mit NextServices – automatisiert US-Krankenkassenprüfungen und Abrechnungsworkflows für 90 % weniger Fehler.',
    outcome: '80 % Automatisierung von Abrechnungsworkflows unter strikter HIPAA-Compliance bei über 40 Stunden wöchentlicher Zeitersparnis.',
    metricValues: {
      time_saved: '40h/Woche'
    }
  },
  'habitualist': {
    client: 'Eigenprodukt',
    description: 'Wissenschaftlich fundierter Gewohnheitstracker nach der Elastic-Habits-Methode für nachhaltige Kontinuität ohne Streak-Druck als moderne plattformübergreifende Lösung.',
    outcome: 'Erfolgreicher plattformübergreifender Launch (Web & Android) mit einem datenschutzorientierten, wissenschaftlichen Ansatz.',
    metricValues: {
      privacy: '100% Privat'
    }
  },
  'zerodha-sandbox': {
    client: 'Fintech Developer Tool',
    description: 'Simulationsgetreue Offline-Trading-API-Suite für Zerodha Kite Connect – eliminiert Kapitalrisiken, Ratenbegrenzungen und Integrationsverzögerungen.',
    outcome: '100 % risikofreie Entwicklung von Handelsalgorithmen und 4-fach schnellere Marktreife mit 25+ simulierten Endpunkten rund um die Uhr.',
    metricValues: {
      interactive: 'Ja'
    }
  },
  'nerdspal': {
    client: 'EdTech-Venture',
    description: 'Echtzeit-Kollaborationsplattform für Entwickler mit Sub-100ms WebSocket-Chat, interaktiven Mentorenräumen und skalierbarer Cloud-Architektur.',
    outcome: 'Aufbau auf 700+ aktive Entwickler und Validierung der High-Concurrency-Architektur vor strategischer IP-Übernahme in Enterprise-Lösungen.',
    metricValues: {
      retention: '40 %'
    }
  }
};

export default function Portfolio() {
  const { t, language, getPath } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const currentProject = projects[currentIndex];
  const isDe = language === 'de';
  const deProject = isDe ? portfolioTranslationsDe[currentProject.id] : undefined;
  const displayClient = deProject?.client || currentProject.client;
  const displayDescription = deProject?.description || currentProject.description;
  const displayOutcome = deProject?.outcome || currentProject.outcome;

  const getMetricLabel = (key: string) => {
    if (isDe && metricLabelTranslationsDe[key]) {
      return metricLabelTranslationsDe[key];
    }
    return key.replace('_', ' ');
  };

  const getMetricValue = (key: string, value: string) => {
    if (isDe && deProject?.metricValues?.[key]) {
      return deProject.metricValues[key];
    }
    return value;
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="portfolio" className="relative py-10 sm:py-14 bg-nordible-bg dark:bg-gray-900 overflow-hidden scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {t.portfolio.title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
              {t.portfolio.title}
            </h2>
          </div>
        )}

        {/* Compact Horizontal Split Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden border border-nordible-border dark:border-gray-700 transition-all">
          <div className="grid lg:grid-cols-12 min-h-[360px]">
            
            {/* Left Column (Showcase Image & Identity): 5 cols on lg */}
            <div 
              className="lg:col-span-5 relative p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden min-h-[240px] lg:min-h-full"
              style={{ backgroundImage: `url(${currentProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/75 to-gray-900/35"></div>
              
              {/* Client & Index Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center p-2 border border-white/30 shadow-md">
                    {imageErrors.has(currentProject.id) ? (
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-base font-heading">
                        {(displayClient || currentProject.title).charAt(0)}
                      </div>
                    ) : (
                      <img
                        key={currentProject.id}
                        src={currentProject.logo}
                        alt={displayClient || currentProject.title}
                        className="max-w-full max-h-full object-contain"
                        onError={() => {
                          setImageErrors(prev => new Set(prev).add(currentProject.id));
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest block drop-shadow-sm">{displayClient}</span>
                    <span className="text-[11px] font-mono text-white/75">{currentIndex + 1} {t.portfolio.of || (isDe ? 'von' : 'of')} {projects.length}</span>
                  </div>
                </div>
              </div>

              {/* Title & Direct Project Link */}
              <div className="relative z-10 pt-6 space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-heading text-white drop-shadow-md">
                  {currentProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={getPath(`/projekte/${currentProject.id}`)}
                    className="btn-primary py-2 px-3 text-[10px] uppercase tracking-widest inline-flex items-center shadow-lg shadow-blue-500/25"
                  >
                    <span>{isDe ? 'Detailseite' : 'Project Page'}</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>

                  {currentProject.caseStudySlug && (
                    <Link
                      to={getPath(`/blog/${currentProject.caseStudySlug}`)}
                      className="inline-flex items-center gap-1 py-2 px-3 text-[10px] uppercase tracking-widest font-bold rounded-xl border border-white/40 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-all shadow-md"
                    >
                      <span>{isDe ? 'Fallstudie' : 'Case Study'}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}

                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 py-2 px-2.5 text-[10px] uppercase tracking-wider text-white/85 hover:text-white transition-colors"
                    >
                      <span>{t.portfolio.viewLive || "Live"}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  {currentProject.repoUrl && (
                    <a
                      href={currentProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 py-2 px-2.5 text-[10px] uppercase tracking-wider text-white/85 hover:text-white transition-colors"
                    >
                      <Code className="h-3 w-3" />
                      <span>{isDe ? 'Quellcode' : 'GitHub'}</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (Description, Metrics, Outcome, Stack): 7 cols on lg */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {displayDescription}
                </p>

                {/* Outcome Pill */}
                <div className="bg-blue-50/70 dark:bg-blue-900/15 rounded-xl p-3 sm:p-3.5 border-l-4 border-nordible-blue">
                  <div className="text-[9px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-0.5">
                    {t.portfolio.outcome || "Measurable Outcome"}
                  </div>
                  <p className="text-nordible-dark dark:text-gray-100 font-bold text-xs sm:text-sm leading-snug">
                    {displayOutcome}
                  </p>
                </div>

                {/* Key Metrics - Compact Horizontal Row */}
                <div>
                  <div className="flex items-center space-x-1.5 text-[9px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">
                    <TrendingUp className="h-3 w-3 text-nordible-blue" />
                    <span>{t.portfolio.keyMetrics || (isDe ? 'Kernmetriken' : 'Key Metrics')}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {Object.entries(currentProject.metrics).map(([key, value], index) => (
                      <div key={index} className="p-2.5 rounded-xl bg-nordible-section-bg dark:bg-gray-700/50 border border-nordible-border/70 dark:border-gray-700 text-left">
                        <span className="text-[8px] sm:text-[9px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-bold block truncate">
                          {getMetricLabel(key)}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold tracking-tight font-heading text-nordible-dark dark:text-white block truncate">
                          {getMetricValue(key, value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Tags */}
              <div className="pt-2 border-t border-nordible-border dark:border-gray-700 flex flex-wrap items-center gap-1.5">
                <span className="text-[9px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mr-1">
                  {t.portfolio.technologies || (isDe ? 'Technologien' : 'Stack')}:
                </span>
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white dark:bg-gray-700 border border-nordible-border dark:border-gray-600 text-gray-700 dark:text-gray-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Subtle, Low-Profile Movement Controls */}
        <div className="mt-5 flex items-center justify-center">
          <div className="inline-flex items-center rounded-full bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 p-1 shadow-sm">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="px-3 text-xs font-mono font-bold text-gray-600 dark:text-gray-300 select-none">
              0{currentIndex + 1} / 0{projects.length}
            </span>

            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="h-4 w-px bg-nordible-border dark:bg-gray-700 mx-1"></div>

            <button
              onClick={togglePause}
              aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              title={isPaused ? "Resume slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 text-nordible-blue" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Mid-Funnel Conversion Hook (Peak Intent Capture) */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 dark:from-gray-800/80 dark:via-gray-800/40 dark:to-gray-800/80 border border-nordible-border/80 dark:border-gray-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 mb-1">
              {isDe ? 'Planen Sie ein ähnliches Vorhaben?' : 'Have a Similar Project in Mind?'}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {isDe ? 'Kostenfreie Architektur- & Machbarkeitsanalyse' : 'Free Architecture & Feasibility Breakdown'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
              {isDe 
                ? 'Besprechen Sie Systemanforderungen, Tech-Stack und Budget direkt mit Gründer Kabeer Shah.'
                : 'Discuss scope, tech stack, and fixed-cost execution directly with founder Kabeer Shah.'}
            </p>
          </div>
          <button
            onClick={() => {
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-xs sm:text-sm px-6 py-3 whitespace-nowrap shadow-md shadow-blue-500/20 shrink-0 cursor-pointer"
          >
            <span>{isDe ? 'Projekt besprechen →' : 'Discuss Your Scope →'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
