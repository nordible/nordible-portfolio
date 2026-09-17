import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  UserCheck,
  ChevronDown,
  Video,
  MailCheck,
  HelpCircle,
  Building2,
  Sparkles
} from 'lucide-react';
import { getCity, getSuburb, getAdjacentSuburbs, City, Suburb } from '../data/locations';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';

export default function LocationLandingPage() {
  const { city: cityParam, suburb: suburbParam } = useParams<{ city: string; suburb?: string }>();
  const { language, getPath } = useLanguage();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default for immediate clarity

  const isDe = language === 'de';

  const cityData: City | undefined = cityParam ? getCity(cityParam) : undefined;
  const suburbData: Suburb | undefined = (cityParam && suburbParam) 
    ? getSuburb(cityParam, suburbParam)?.suburb 
    : undefined;

  // 404 handling if invalid city or invalid suburb requested
  const isInvalid = !cityData || (suburbParam && !suburbData);

  const displayName = suburbData 
    ? `${suburbData.name}, ${cityData?.name}` 
    : cityData?.name || '';

  const locationTitle = suburbData ? suburbData.name : cityData?.name;
  const postalCode = suburbData?.postalCode || (cityData?.slug === 'frankfurt' ? '60311' : '');
  const locationWithZip = postalCode ? `${locationTitle} (${postalCode})` : (locationTitle || '');
  const displayWithZip = postalCode ? `${displayName} (${postalCode})` : displayName;

  // Dynamic SEO meta tags & Page Title
  useEffect(() => {
    if (isInvalid) return;
    const titleText = isDe
      ? `Softwareentwicklung, KI & Digitalisierung in ${locationWithZip} | Nordible`
      : `Software Development, AI & Digital Solutions in ${locationWithZip} | Nordible`;
    
    document.title = titleText;

    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = isDe
      ? `Ihr Technologiepartner für ${displayWithZip}. Maßgeschneiderte Web- & App-Entwicklung, KI-Agenten und Digitales Marketing mit 24h Reaktionszeit.`
      : `Your technology partner in ${displayWithZip}. Custom web & app development, AI agents, and digital marketing with 24h turnaround.`;

    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    }
  }, [displayWithZip, locationWithZip, isDe, isInvalid]);

  if (isInvalid) {
    return (
      <>
        <Header />
        <NotFoundPage />
        <Footer />
      </>
    );
  }

  const adjacentSuburbs = suburbParam 
    ? getAdjacentSuburbs(cityData.slug, suburbParam, 8)
    : cityData.suburbs.slice(0, 8);

  // Unified routing: Everything channels to the main page's canonical consultation section
  const goToConsultation = () => {
    navigate(getPath('/'));
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Full Spectrum Services List shown directly in Hero
  const allServices = [
    {
      id: 'tech',
      icon: Layers,
      title: isDe ? 'Web- & App-Entwicklung' : 'Web & App Development',
      badge: isDe ? '2–4 Woc. MVP' : '2–4 Wks MVP',
      points: isDe 
        ? ['Individuelle Webportale & Plattformen', 'Mobile Apps (iOS & Android)', '100% Code-Eigentum']
        : ['Custom web portals & platforms', 'Mobile apps (iOS & Android)', '100% IP ownership']
    },
    {
      id: 'ai',
      icon: Cpu,
      title: isDe ? 'KI-Agenten & Automation' : 'AI Agents & Automation',
      badge: isDe ? 'Max. Effizienz' : 'Max Efficiency',
      points: isDe
        ? ['Autonome KI-Agenten-Workflows', 'Tool- & API-Systemintegrationen', 'Automatisierung manueller Aufgaben']
        : ['Autonomous AI agent workflows', 'Tool & API system integrations', 'Automated manual workflows']
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: isDe ? 'Digital Marketing & SEO' : 'Digital Marketing & SEO',
      badge: isDe ? 'Messbare Leads' : 'Measurable Leads',
      points: isDe
        ? ['Auffindbarkeit in Google & KI-Suche (GEO)', 'Social-Media-Kanalbetreuung', 'Qualifizierte Neukundengewinnung']
        : ['Google & AI search (GEO) visibility', 'Social media channel management', 'Qualified lead acquisition']
    },
    {
      id: 'video',
      icon: Video,
      title: isDe ? 'Videobearbeitung & Content' : 'Video Editing & Content',
      badge: isDe ? 'High Engagement' : 'High Engagement',
      points: isDe
        ? ['Reels & Kurzvideos für Social Media', 'Untertitel, Captions & Motion Design', 'Markengerechte Produktion']
        : ['Reels & short-form video production', 'Subtitles, captions & motion graphics', 'High-retention brand editing']
    },
    {
      id: 'business',
      icon: MailCheck,
      title: isDe ? 'Business IT & Email Setup' : 'Business IT & Email Setup',
      badge: isDe ? '24/7 Verlässlich' : '24/7 Reliability',
      points: isDe
        ? ['Professionelle Firmen-E-Mails mit Domain', 'Spamschutz & Ausfallsicherheit', 'Nahtlose Tool-Einrichtung']
        : ['Custom branded corporate email', 'Spam defense & zero downtime', 'Hassle-free setup & migration']
    }
  ];

  // Objection-Killing FAQs with Language Transparency
  const faqs = [
    {
      q: isDe
        ? `In welcher Sprache findet die Beratung statt?`
        : `In which language is the consultation conducted?`,
      a: isDe
        ? `Unsere persönliche Beratung und technische Leitung führen wir vorrangig auf Englisch durch (we consult primarily in English). Projektanfragen, Spezifikationen und Unterlagen auf Deutsch sind selbstverständlich herzlich willkommen – wir verstehen und bearbeiten deutsche Anfragen einwandfrei und antworten schnell.`
        : `Our strategic consultation and technical leadership are conducted primarily in English. Briefings and inquiries submitted in German or English are warmly welcomed.`
    },
    {
      q: isDe
        ? `Welche Leistungen bieten Sie für Unternehmen in ${locationTitle} an?`
        : `What services do you provide for businesses in ${locationTitle}?`,
      a: isDe
        ? `Wir bieten das vollständige Spektrum an moderner Business-Technologie: Maßgeschneiderte Webportale, Apps (iOS/Android), autonome KI-Agenten, Workflow-Automatisierung, KI-optimierte Auffindbarkeit (GEO/SEO) sowie professionellen Videoschnitt und Business-IT-Infrastruktur.`
        : `We provide full-spectrum business technology: custom web portals, mobile apps (iOS/Android), autonomous AI agents, workflow automation, AI search optimization (GEO/SEO), video editing, and secure business IT setup.`
    },
    {
      q: isDe
        ? `Wem gehört der entwickelte Quellcode und das geistige Eigentum?`
        : `Who owns the source code and intellectual property?`,
      a: isDe
        ? `Ihnen zu 100 %. Bei Nordible gibt es keinen Vendor-Lock-in. Der gesamte Quellcode, die Datenbankstrukturen und Bereitstellungen gehen vollständig in das Eigentum Ihres Unternehmens über.`
        : `You own 100% of the intellectual property. There is zero vendor lock-in; all source code, databases, and assets are fully transferred to your company.`
    },
    {
      q: isDe
        ? `Wie schnell können wir starten und wann ist ein erstes Ergebnis fertig?`
        : `How quickly can we start and when will the first version be ready?`,
      a: isDe
        ? `Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage. Nach einem kurzen Erstgespräch liefern wir funktionale Prototypen oder produktionsreife MVPs in der Regel innerhalb von 2 bis 4 Wochen.`
        : `We reply within 24 hours. After an initial consultation, functional prototypes and MVPs are typically delivered within 2 to 4 weeks.`
    },
    {
      q: isDe
        ? `Sind persönliche Vor-Ort-Termine in Frankfurt am Main möglich?`
        : `Are in-person meetings in Frankfurt am Main possible?`,
      a: isDe
        ? `Ja, sehr gerne! Unser Hauptsitz befindet sich in Frankfurt am Main. Für Projektbesprechungen oder Kennenlerngespräche können wir unkompliziert persönliche Vor-Ort-Termine im gesamten Rhein-Main-Gebiet vereinbaren.`
        : `Yes, absolutely! We are headquartered in Frankfurt am Main. In-person meetings are easily arranged across the Rhine-Main metropolitan region.`
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20 selection:bg-nordible-blue selection:text-white">
        
        {/* Breadcrumb Navigation - Ergonomic & SEO friendly */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <Link to={getPath('/')} className="hover:text-nordible-blue dark:hover:text-blue-400 transition-colors">
              {isDe ? 'Startseite' : 'Home'}
            </Link>
            <span>/</span>
            <Link to={getPath('/standorte')} className="hover:text-nordible-blue dark:hover:text-blue-400 transition-colors">
              {isDe ? 'Einzugsgebiet' : 'Areas Served'}
            </Link>
            <span>/</span>
            <Link to={getPath(`/${cityData.slug}`)} className="hover:text-nordible-blue dark:hover:text-blue-400 transition-colors">
              {cityData.name}
            </Link>
            {suburbData && (
              <>
                <span>/</span>
                <span className="font-semibold text-gray-900 dark:text-white">{suburbData.name}</span>
              </>
            )}
          </nav>
        </div>

        {/* Hero Section: Local Zip Code + Full Service Spectrum */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-white via-white to-blue-50/40 dark:from-gray-800 dark:via-gray-800 dark:to-blue-950/20 border border-nordible-border dark:border-gray-700 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            
            {/* Top Local Micro-badge with Exact Zip Code */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-300 text-xs font-bold font-heading mb-6">
              <MapPin className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              <span>
                {displayName} {postalCode && `· PLZ ${postalCode}`} · {isDe ? 'Frankfurt & Rhein-Main' : 'Frankfurt & Rhine-Main'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight text-gray-900 dark:text-white mb-4">
              {isDe ? (
                <>
                  Software, KI & Digitalisierung in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nordible-blue to-blue-600 dark:from-blue-400 dark:to-cyan-300">
                    {locationWithZip}
                  </span>
                </>
              ) : (
                <>
                  Software, AI & Digital Solutions in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nordible-blue to-blue-600 dark:from-blue-400 dark:to-cyan-300">
                    {locationWithZip}
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline: Exactly 1 concise sentence */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
              {isDe
                ? `Ihr lokaler Technologiepartner für maßgeschneiderte Software, autonome KI-Agenten und messbare Sichtbarkeit in ${locationWithZip} und ganz Frankfurt.`
                : `Your local technology partner for custom platforms, autonomous AI agents, and high-visibility digital growth in ${locationWithZip} and Frankfurt.`}
            </p>

            {/* Single Focal Conversion Trigger - Channels directly to main page */}
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={goToConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-600 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>{isDe ? 'Projekt anfragen & Erstgespräch' : 'Inquire Project & Book Call'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 px-2">
                <Clock className="h-3.5 w-3.5 text-nordible-blue" />
                <span>{isDe ? 'Reaktionszeit unter 24h' : 'Response time < 24h'}</span>
              </span>
            </div>

            {/* 3 Instant De-risking Proof Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 pt-6 border-t border-gray-100 dark:border-gray-700/60">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700/60">
                <Clock className="h-5 w-5 text-nordible-blue dark:text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">24h {isDe ? 'Reaktionszeit' : 'Response'}</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">{isDe ? 'Direkter Kontakt' : 'Direct sync'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700/60">
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">100% {isDe ? 'Code-Eigentum' : 'Code Ownership'}</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">{isDe ? 'Kein Lock-in, DSGVO' : 'Zero lock-in, GDPR'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700/60">
                <UserCheck className="h-5 w-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">{isDe ? 'Gründergeführt' : 'Founder-Led'}</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">{isDe ? '15+ Jahre Erfahrung' : '15+ yrs depth'}</div>
                </div>
              </div>
            </div>

            {/* All 5 Services Displayed in the Hero (Zero fluff, visual pills) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  {isDe ? `Unsere Leistungen in ${locationTitle}:` : `Services Offered in ${locationTitle}:`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allServices.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={srv.id}
                      className="p-4 rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                            {srv.badge}
                          </span>
                        </div>

                        <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-2">
                          {srv.title}
                        </h3>

                        <ul className="space-y-1">
                          {srv.points.map((p, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                              <CheckCircle2 className="h-3 w-3 mt-0.5 text-nordible-blue shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Local Credibility Section: Headquartered in Frankfurt am Main */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-nordible-blue dark:text-blue-400 font-bold flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                <span>{isDe ? 'Lokale Präsenz in Frankfurt am Main' : 'Frankfurt am Main Presence'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {isDe
                  ? `Hauptsitz in Frankfurt am Main – Kurze Wege nach ${locationTitle}`
                  : `Headquartered in Frankfurt am Main – Direct access to ${locationTitle}`}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {isDe
                  ? 'Frankfurt am Main. Persönliche Vor-Ort-Termine, verlässliche Betreuung und direkter Austausch ohne Zwischenebenen.'
                  : 'Frankfurt am Main. In-person meetings, reliable execution, and direct collaboration without middlemen.'}
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={goToConsultation}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-nordible-blue hover:bg-blue-600 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>{isDe ? 'Termin anfragen' : 'Request Meeting'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* FAQs Section (Hick's Law - Progressive Disclosure to Resolve Objections) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6 flex items-center gap-2.5">
            <HelpCircle className="h-5 w-5 text-nordible-blue dark:text-blue-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-gray-900 dark:text-white">
                {isDe ? 'Häufig gestellte Fragen (FAQ)' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {isDe ? 'Wichtige Antworten zu Ablauf, Rechten und Sprache:' : 'Key answers regarding process, ownership, and language:'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/70 dark:hover:bg-gray-700/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-nordible-blue dark:text-blue-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60 bg-blue-50/20 dark:bg-gray-900/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Single Conversion Funnel Section: Seamless handoff to Main Page's Consultation */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-2 border-nordible-blue/30 dark:border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                {isDe ? 'Bereit für den nächsten Schritt?' : 'Ready for the next step?'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-gray-900 dark:text-white">
                {isDe ? `Lassen Sie uns Ihr Vorhaben in ${locationTitle} starten` : `Let's Start Your Project in ${locationTitle}`}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {isDe
                  ? 'Besprechen Sie Scope, Machbarkeit und Zeitpläne direkt mit Gründer Kabeer Shah – 100% vertraulich und unverbindlich.'
                  : 'Discuss scope, feasibility, and timelines directly with founder Kabeer Shah – 100% confidential and obligation-free.'}
              </p>
            </div>

            <button
              type="button"
              onClick={goToConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <Calendar className="h-4 w-4" />
              <span>{isDe ? 'Zum Erstgespräch →' : 'Go to Consultation →'}</span>
            </button>
          </div>
        </section>

        {/* Neighboring Suburbs & Regions (Hick's Law navigation pills) */}
        {adjacentSuburbs.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-nordible-border dark:border-gray-800 pt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {isDe 
                  ? `Weitere Stadtteile & Standorte in ${cityData.name}:` 
                  : `More districts & locations in ${cityData.name}:`}
              </h4>
              <div className="flex flex-wrap gap-2">
                {adjacentSuburbs.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={getPath(`/${cityData.slug}/${sub.slug}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{sub.name}</span>
                    <span className="text-[10px] text-gray-400 font-mono">({sub.postalCode})</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
