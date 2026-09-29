'use client';

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
import { getService, getAllServices, ServiceItem } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';

const ICON_MAP = {
  Layers,
  Cpu,
  TrendingUp,
  Video,
  MailCheck,
};

export default function ServiceLocationLandingPage() {
  const { city: cityParam, suburb: suburbParam, service: serviceParam } = useParams<{ 
    city: string; 
    suburb: string; 
    service: string; 
  }>();
  const { language, getPath } = useLanguage();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isDe = language === 'de';

  const cityData: City | undefined = cityParam ? getCity(cityParam) : undefined;
  const suburbResult = (cityParam && suburbParam) ? getSuburb(cityParam, suburbParam) : undefined;
  const suburbData: Suburb | undefined = suburbResult?.suburb;
  const serviceData: ServiceItem | undefined = serviceParam ? getService(serviceParam) : undefined;

  const isInvalid = !cityData || !suburbData || !serviceData;

  const displayName = suburbData ? `${suburbData.name}, ${cityData?.name}` : '';
  const locationWithZip = suburbData ? `${suburbData.name} (${suburbData.postalCode})` : '';
  const serviceName = isDe ? serviceData?.nameDe : serviceData?.nameEn;

  useEffect(() => {
    if (isInvalid || !serviceData) return;
    const titleText = isDe
      ? `${serviceData.nameDe} in ${locationWithZip} | Nordible`
      : `${serviceData.nameEn} in ${locationWithZip} | Nordible`;
    
    document.title = titleText;

    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = isDe
      ? `${serviceData.nameDe} für Unternehmen in ${displayName}. ${serviceData.descriptionDe}`
      : `${serviceData.nameEn} for businesses in ${displayName}. ${serviceData.descriptionEn}`;

    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    }
  }, [isInvalid, serviceData, locationWithZip, displayName, isDe]);

  if (isInvalid || !cityData || !suburbData || !serviceData) {
    return (
      <>
        <Header />
        <NotFoundPage />
        <Footer />
      </>
    );
  }

  const ServiceIcon = ICON_MAP[serviceData.iconName] || Layers;
  const otherServices = getAllServices().filter(s => s.slug !== serviceData.slug);
  const adjacentSuburbs = getAdjacentSuburbs(cityData.slug, suburbData.slug, 6);

  const goToConsultation = () => {
    navigate(getPath('/'));
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const deliverables = isDe ? serviceData.deliverablesDe : serviceData.deliverablesEn;
  const features = isDe ? serviceData.featuresDe : serviceData.featuresEn;
  const faqs = isDe ? serviceData.faqsDe : serviceData.faqsEn;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20 selection:bg-nordible-blue selection:text-white">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
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
            <span>/</span>
            <Link to={getPath(`/${cityData.slug}/${suburbData.slug}`)} className="hover:text-nordible-blue dark:hover:text-blue-400 transition-colors">
              {suburbData.name}
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900 dark:text-white">{serviceName}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-blue-950/20 border border-nordible-border dark:border-gray-700 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            
            {/* Top Local Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-300 text-xs font-bold font-heading mb-6">
              <MapPin className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              <span>
                {displayName} · PLZ {suburbData.postalCode} · {isDe ? serviceData.badgeDe : serviceData.badgeEn}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight text-gray-900 dark:text-white mb-4">
              {serviceName}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nordible-blue to-blue-600 dark:from-blue-400 dark:to-cyan-300">
                in {locationWithZip}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
              {isDe ? serviceData.heroTaglineDe : serviceData.heroTaglineEn}
            </p>

            {/* Single Focal Conversion Trigger */}
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={goToConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-600 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>{isDe ? `${serviceName} anfragen` : `Inquire ${serviceName}`}</span>
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
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">{isDe ? 'Direkt mit Kabeer Shah' : 'Direct with founder'}</div>
                </div>
              </div>
            </div>

            {/* Core Deliverables Specific to this Service */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  {isDe ? `Was Sie in ${suburbData.name} erhalten:` : `What you receive in ${suburbData.name}:`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-700/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Technical Architecture & Value Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400">
                <ServiceIcon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {isDe ? `Warum Nordible für ${serviceName}?` : `Why Choose Nordible for ${serviceName}?`}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isDe ? `Moderne Technologie-Standards für Unternehmen in ${displayName}` : `Enterprise technology standards for businesses in ${displayName}`}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-[10px] font-bold text-nordible-blue dark:text-blue-300">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {feature}
                  </p>
                </div>
              ))}
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
                  ? `Hauptsitz in Frankfurt am Main – Kurze Wege nach ${suburbData.name}`
                  : `Headquartered in Frankfurt am Main – Direct access to ${suburbData.name}`}
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

        {/* FAQs Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6 flex items-center gap-2.5">
            <HelpCircle className="h-5 w-5 text-nordible-blue dark:text-blue-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-gray-900 dark:text-white">
                {isDe ? `Häufig gestellte Fragen zu ${serviceName}` : `Frequently Asked Questions`}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {isDe ? `Wichtige Antworten zu Ablauf, Rechten und Terminen in ${suburbData.name}:` : `Key answers regarding process, timeline, and delivery in ${suburbData.name}:`}
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

        {/* Consultation Callout */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-2 border-nordible-blue/30 dark:border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                {isDe ? 'Bereit für den nächsten Schritt?' : 'Ready for the next step?'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-gray-900 dark:text-white">
                {isDe ? `Projekt in ${suburbData.name} starten` : `Start Your Project in ${suburbData.name}`}
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

        {/* Hick's Law Cross-Links: Other Services in this Suburb */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="border-t border-nordible-border dark:border-gray-800 pt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              {isDe 
                ? `Weitere Dienstleistungen in ${suburbData.name}:` 
                : `More services in ${suburbData.name}:`}
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherServices.map((srv) => (
                <Link
                  key={srv.slug}
                  to={getPath(`/${cityData.slug}/${suburbData.slug}/${srv.slug}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                >
                  <span>{isDe ? srv.nameDe : srv.nameEn}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hick's Law Cross-Links: This Service in Adjacent Suburbs */}
        {adjacentSuburbs.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-nordible-border dark:border-gray-800 pt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {isDe 
                  ? `${serviceName} in benachbarten Stadtteilen:` 
                  : `${serviceName} in adjacent districts:`}
              </h4>
              <div className="flex flex-wrap gap-2">
                {adjacentSuburbs.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={getPath(`/${cityData.slug}/${sub.slug}/${serviceData.slug}`)}
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
