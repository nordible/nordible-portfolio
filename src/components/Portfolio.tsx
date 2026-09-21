'use client';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Pause, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionAnchor from './SectionAnchor';

const projects = [
  {
    id: 'oncocare',
    title: 'CareIntellect Platform',
    client: 'General Electric',
    logo: '/images/logos/GeneralElectric_logo.svg',
    link: 'https://www.gehealthcare.com/en/products/software/careintellect',
    description: 'Comprehensive oncology care assistant platform for clinicians to manage patient data and enable confident cancer care decision-making.',
    technologies: ['Node.js', 'PostgreSQL', 'React.js', 'AWS', 'Leadership'],
    outcome: 'Improved patient care coordination by 40% and reduced data processing time by 60%',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    client: 'NIUM',
    logo: '/images/logos/InstaRem_logo.svg',
    link: 'https://www.instarem.com',
    description: 'Flagship fintech product for cost-effective foreign remittances serving millions of users globally.',
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Mocha', 'AWS'],
    outcome: 'Successfully delivered a platform processing millions in remittances with 99.9% uptime',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      users: '1M+',
      transactions: '$100M+',
      uptime: '99.9%'
    },
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    id: 'rst-baxter',
    title: 'RST - Remote Service Tool',
    client: 'Vantive Healthcare',
    logo: '/images/logos/vantive_logo.jpg',
    link: 'https://www.vantive.com',
    description: 'Medical device support platform for remote diagnosis and troubleshooting of medical devices in healthcare facilities.',
    technologies: ['Node.js', 'PostgreSQL', 'AWS IoT', 'Jest', 'TDD', 'AWS'],
    outcome: 'Reduced device downtime by 50% and improved remote diagnostic accuracy by 75%',
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    logo: '/images/logos/TheParentInc-logo.webp',
    link: 'https://www.parents.vip',
    description: 'End-to-end influencer social media promotions, market surveys, and content creation process management platform.',
    technologies: ['Node.js', 'MySQL', 'Mocha', 'Microservices', 'AWS', 'Redis', 'Python'],
    outcome: 'Streamlined influencer campaigns resulting in 200% increase in campaign efficiency',
    image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      campaigns: '5K+',
      efficiency: '200%',
      uptime: '99.7%'
    },
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 'smartbothub',
    title: 'SmartbotHub',
    client: 'Smartek21',
    logo: '/images/logos/smartek21_logo.png',
    link: 'https://smartek21.com',
    description: 'Chatbot-building platform with Natural Language Processing for creating conversational AI chatbots.',

    technologies: ['AngularJS', 'Node.js', 'MySQL', 'AWS', 'NLP'],
    outcome: 'Enabled 500+ businesses to deploy chatbots, reducing customer service costs by 60%',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      bots: '500+',
      cost_reduction: '60%',
      accuracy: '90%'
    },

    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'nextauto',
    title: 'NextAuto',
    client: 'NextServices HSS Pvt Ltd',
    logo: '/images/logos/nextservices_logo.png',
    link: 'https://nextservices.com/',
    description: 'Internal process automation technology solution for automating web scraping, data processing, reporting, and email workflows.',

    technologies: ['C#', 'JavaScript', 'SQL Server', '.NET Framework', 'ASP.NET MVC'],
    outcome: 'Automated 80% of manual processes, saving 40+ hours per week and reducing errors by 90%',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      automation: '80%',
      time_saved: '40h/week',
      error_reduction: '90%'
    },

    gradient: 'from-emerald-600 to-teal-600'
  },  
  {
    id: 'buns069',
    title: 'BUNS 069',
    client: 'Buns 069 Homemade Burger',
    logo: '/images/logos/buns069-logo.webp',
    link: 'https://www.buns069.de/',
    description: 'Local food commerce & digital scaling for a premier handcrafted burger brand in the Rhine-Main region. Targeted with increasing overall business volume through high-converting direct ordering funnels, local SEO/GEO visibility, and customer retention.',
    technologies: ['Local SEO & GEO', 'Conversion Optimization', 'Digital Ordering Funnels', 'Performance Marketing', 'Retention Systems'],
    outcome: 'Structured a high-impact digital expansion roadmap designed to maximize direct customer orders, boost repeat purchase frequency, and scale overall business volume across the Rhine-Main market.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      focus: 'Volume Growth',
      channel: 'Direct Orders',
      market: 'Rhein-Main (069)'
    },
    gradient: 'from-amber-600 to-orange-700'
  },
  {
    id: 'shams-consult',
    title: 'Shams Consult',
    client: 'Shams Consult',
    logo: '/images/logos/shams-consult-logo.png',
    link: 'https://shams-consult.de/',
    caseStudySlug: 'shams-consult-google-ranking',
    description: 'Architecture and urban planning consultancy based in Frankfurt am Main and Rödermark. Secured #1 organic position on Google for critical industry search terms through semantic search architecture, technical performance, and high-trust assets.',
    technologies: ['Semantic SEO', 'Technical Performance', 'Information Architecture', 'B2B Creative Strategy', 'Content Engineering'],
    outcome: 'Secured and maintained the #1 organic position on Google for core high-intent B2B search terms without paid ads.',
    image: '/images/shams-consult-architecture-case-study.jpg',
    metrics: {
      ranking: '#1 Google',
      channel: 'Organic B2B',
      market: 'Frankfurt / Rhein-Main'
    },
    gradient: 'from-blue-600 to-emerald-600'
  },
  {
    id: 'nordible-email',
    title: 'Nordible Professional Email',
    client: 'Nordible Product',
    logo: '/images/logo-email.webp',
    link: 'https://email.nordible.co/',
    description: 'A premium SaaS email hosting platform designed for businesses that need security, custom domains, and reliable infrastructure without complexity.',
    technologies: ['Shell', 'Docker', 'PHP', 'Javascript', 'Cloud Infrastructure', 'Security'],
    outcome: 'Successfully launched a high-performance email hosting service with 99.9% uptime guarantee and enterprise-grade security.',
    image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      uptime: '99.9%',
      security: 'SSL/TLS',
      support: '24/7'
    },
    gradient: 'from-nordible-blue to-blue-800'
  },
  {
    id: 'linkedin-catchup',
    title: 'LinkedIn Catch-up Assistant',
    client: 'Nordible Product',
    logo: '/images/logos/Linkedin-Catchup-assistant-icon.png',
    link: 'https://chromewebstore.google.com/detail/linkedin-catch-up-assista/npfnjcgcajdmcihppmihlnnjefkniaip',
    description: 'A safety-first automation suite for LinkedIn that helps maintain authentic relationships by managing birthdays, anniversaries, and new job notifications.',
    technologies: ['Chrome Extension', 'Node.js', 'JavaScript', 'Automation'],
    outcome: 'Automated relationship management with human-emulation delays and privacy-first local storage.',
    image: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      reach: '50 Iterations',
      safety: 'Human-Emulation',
      privacy: 'Local Storage'
    },
    gradient: 'from-blue-600 to-nordible-blue'
  },
  {
    id: 'habitualist',
    title: 'Habitualist',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzQzMzhjYSIvPjxwYXRoIGQ9Ik0zNSA1MGwxMCAxMCAyMC0yMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
    link: 'https://habitualist.app',
    description: 'A science-backed habit tracker using the Elastic Habits method to help users build sustainable consistency without the guilt of streaks. Built as a cross-platform solution from the ground up.',
    technologies: ['React Native', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    outcome: 'Successfully launched cross-platform (Web & Android) with a privacy-first, science-backed approach to habit formation.',
    image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    logo: '/images/logos/zerodha-logo.png',
    link: 'https://nordible.github.io/zerodha-sandbox/',
    description: 'Interactive trading API sandbox demonstrating Zerodha Kite Connect integration with comprehensive endpoints for orders, portfolio, quotes, and market data.',

    technologies: ['TypeScript', 'HTML5', 'CSS3', 'REST API', 'Trading APIs'],
    outcome: 'Built comprehensive trading API demonstration with real-time dummy data simulation and interactive documentation',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    client: 'Community Platform',
    logo: '/images/logos/nerdspal-logo.svg',
    link: 'https://www.producthunt.com/products/nersdpal-com',
    description: 'Platform connecting nerds and geeks with like-minded individuals for meaningful conversations and collaborations.',
    technologies: ['React.js', 'Node.js', 'AI/ML', 'WebSocket', 'MongoDB'],
    outcome: 'Built a community platform that brings together tech enthusiasts and facilitates meaningful connections',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      users: '700',
      connections: '4',
      engagement: 'inactive'
    },
    gradient: 'from-cyan-600 to-blue-600'
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
  ranking: 'Platzierung'
};

const portfolioTranslationsDe: Record<string, { client?: string; description: string; outcome: string; metricValues?: Record<string, string> }> = {
  'shams-consult': {
    client: 'Shams Consult',
    description: 'Architektur- und Stadtplanungsbüro mit Sitz in Frankfurt am Main und Rödermark. Erzielte Platz 1 bei Google für zentrale Branchensuchbegriffe durch semantische Suchstruktur, moderne Web-Performance und zielgruppengerechte Informationsarchitektur.',
    outcome: 'Sicherte die organische Spitzenposition (Platz 1) bei Google für zentrale B2B-Kernsuchbegriffe ganz ohne laufende Werbeausgaben.',
    metricValues: {
      ranking: 'Platz 1 bei Google',
      channel: 'Organisch B2B',
      market: 'Frankfurt / Rhein-Main'
    }
  },
  'nordible-email': {
    client: 'Nordible-Produkt',
    description: 'Premium SaaS-E-Mail-Hosting-Plattform für Unternehmen mit höchsten Sicherheitsansprüchen, individuellen Domains und zuverlässiger Infrastruktur ohne unnötige Komplexität.',
    outcome: 'Erfolgreicher Launch eines hochperformanten E-Mail-Hosting-Dienstes mit 99,9% Verfügbarkeitsgarantie und Enterprise-Sicherheitsstandards.'
  },
  'linkedin-catchup': {
    client: 'Nordible-Produkt',
    description: 'Sicherheitsorientierte Automatisierungssuite für LinkedIn zur Pflege authentischer Geschäftsbeziehungen durch automatisiertes Tracking von Geburtstagen, Jubiläen und Jobwechseln.',
    outcome: 'Automatisiertes Beziehungsmanagement mit menschenähnlicher Interaktionsverzögerung und datenschutzkonformer lokaler Speicherung.',
    metricValues: {
      reach: '50 Iterationen',
      safety: 'Mensch-Emulation',
      privacy: 'Lokaler Speicher'
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
    description: 'Ganzheitliche Plattform für Influencer-Marketing, Marktumfragen und die durchgängige Verwaltung von Content-Erstellungsprozessen.',
    outcome: 'Optimierte Influencer-Kampagnen mit einer Steigerung der Kampagneneffizienz um 200%.'
  },
  'rst-baxter': {
    client: 'Vantive Healthcare',
    description: 'Medizintechnik-Supportplattform zur sicheren Ferndiagnose und Fehlerbehebung von medizinischen Geräten in Gesundheitseinrichtungen.',
    outcome: 'Reduzierung von Geräteausfallzeiten um 50% und Steigerung der Ferndiagnosegenauigkeit um 75%.'
  },
  'smartbothub': {
    client: 'Smartek21',
    description: 'Chatbot-Entwicklungsplattform mit Natural Language Processing (NLP) zur Erstellung intelligenter Konversations-KIs.',
    outcome: 'Ermöglichte über 500 Unternehmen den Einsatz intelligenter Chatbots und senkte Kundenservicekosten um 60%.'
  },
  'nextauto': {
    client: 'NextServices HSS Pvt Ltd',
    description: 'Interne Prozessautomatisierungslösung für Web-Scraping, automatisierte Datenverarbeitung, Reporting und E-Mail-Workflows.',
    outcome: 'Automatisierung von 80% manueller Prozesse mit einer Ersparnis von über 40 Stunden pro Woche und 90% weniger Fehlern.',
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
    description: 'Interaktive Trading-API-Sandbox zur Demonstration der Zerodha Kite Connect-Integration mit umfassenden Endpunkten für Orders, Portfolios und Marktdaten.',
    outcome: 'Umfassende Handels-API-Demonstration mit Echtzeit-Simulation und interaktiver technischer Dokumentation.',
    metricValues: {
      interactive: 'Ja'
    }
  },
  'nerdspal': {
    client: 'Community-Plattform',
    description: 'Community-Plattform zur Vernetzung von Tech-Enthusiasten und Entwicklern für fachlichen Austausch und Kooperationen.',
    outcome: 'Aufbau einer spezialisierten Community-Plattform zur Förderung tiefgehender technischer Vernetzung.',
    metricValues: {
      engagement: 'Inaktiv'
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
          <div className="text-center mb-10">
            <h2 className="group inline-flex items-center justify-center gap-2 text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
              <span>{t.portfolio.title}</span>
              <SectionAnchor id="portfolio" />
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
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 px-4 text-[10px] uppercase tracking-widest inline-flex items-center shadow-lg shadow-blue-500/25"
                  >
                    <span>{t.portfolio.viewLive || "View Project"}</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                  {currentProject.caseStudySlug && (
                    <Link
                      to={getPath(`/blog/${currentProject.caseStudySlug}`)}
                      className="inline-flex items-center gap-1.5 py-2 px-3 text-[10px] uppercase tracking-widest font-bold rounded-xl border border-white/40 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-all shadow-md"
                    >
                      <span>{isDe ? 'Fallstudie' : 'Case Study'}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
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
                  <div className="flex items-center space-x-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    <TrendingUp className="h-3 w-3 text-nordible-blue" />
                    <span>{t.portfolio.keyMetrics || (isDe ? 'Kernmetriken' : 'Key Metrics')}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {Object.entries(currentProject.metrics).map(([key, value], index) => (
                      <div key={index} className="p-2.5 rounded-xl bg-nordible-section-bg dark:bg-gray-700/50 border border-nordible-border/70 dark:border-gray-700 text-left">
                        <span className="text-[8px] sm:text-[9px] text-gray-400 dark:text-gray-400 uppercase tracking-wider font-bold block truncate">
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
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mr-1">
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
