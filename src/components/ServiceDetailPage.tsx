'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Cpu,
  ExternalLink,
  HelpCircle,
  Layers,
  MailCheck,
  TrendingUp,
  Video,
  Workflow,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import { getAllServices, getService, ServiceItem } from '../data/services';
import NotFoundPage from './NotFoundPage';

const ICON_MAP: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Video,
  Cpu,
  Layers,
  Workflow,
  MailCheck,
};

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const { language, getPath } = useLanguage();
  const isDe = language === 'de';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = getService(slug);
  if (!service) {
    return <NotFoundPage />;
  }

  const ServiceIcon = ICON_MAP[service.iconName] || Layers;
  const serviceName = isDe ? service.nameDe : service.nameEn;
  const heroTagline = isDe ? service.heroTaglineDe : service.heroTaglineEn;
  const overviewParagraphs = isDe ? service.overviewDe : service.overviewEn;
  const outcomes = isDe ? service.outcomesDe : service.outcomesEn;
  const deliverables = isDe ? service.deliverablesDe : service.deliverablesEn;
  const features = isDe ? service.featuresDe : service.featuresEn;
  const faqs = isDe ? service.faqsDe : service.faqsEn;
  const otherServices = getAllServices().filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-10 sm:pt-14 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-4">
          <Link
            to={`${getPath('/')}#services`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{isDe ? 'Alle Leistungen' : 'All Services'}</span>
          </Link>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            Nordible Technologies · {isDe ? service.badgeDe : service.badgeEn}
          </span>
        </div>

        {/* Hero Section */}
        <section className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/70 dark:border-blue-800 text-nordible-blue dark:text-blue-300 text-xs font-bold font-mono uppercase tracking-wider">
            <ServiceIcon className="h-4 w-4" />
            <span>{isDe ? service.badgeDe : service.badgeEn}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {serviceName}
          </h1>

          <p className="text-base sm:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed max-w-3xl">
            {heroTagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={contactConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm px-7 py-4 shadow-lg shadow-blue-500/20 inline-flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              <span>{isDe ? '30-Min. Erstgespräch buchen' : 'Book Free 30-Min Strategy Call'}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {service.externalProductUrl && (
              <a
                href={service.externalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm px-6 py-4 inline-flex items-center gap-2"
              >
                <span>{isDe ? 'Live-Plattform ansehen' : 'Visit Live Platform'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </section>

        {/* Measurable Business Outcomes */}
        <section className="grid sm:grid-cols-3 gap-5 text-left">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="card-premium p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-nordible-blue dark:text-blue-400 font-heading mb-1">
                {item.metric}
              </div>
              <div className="text-sm font-extrabold text-nordible-dark dark:text-white mb-2">
                {item.label}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Strategic Overview */}
        <section className="rounded-3xl bg-white dark:bg-gray-800/70 border border-nordible-border dark:border-gray-700 p-6 sm:p-8 space-y-4 text-left shadow-sm">
          <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading">
            {isDe ? 'Warum Unternehmen auf Nordible setzen' : 'How Nordible Delivers Measurable Impact'}
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {overviewParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Deliverables & Capabilities */}
        <section className="grid md:grid-cols-2 gap-6 text-left">
          <div className="card-premium p-6 sm:p-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {isDe ? 'Konkrete Leistungen & Ergebnisse' : 'Core Deliverables'}
            </h2>
            <ul className="space-y-3">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-6 sm:p-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {isDe ? 'Ihre Vorteile in der Zusammenarbeit' : 'Execution Standards'}
            </h2>
            <ul className="space-y-3">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proven Work & Real Case Studies */}
        <section className="space-y-6 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
              <Award className="h-4 w-4" />
              <span>{isDe ? 'Nachweisbare Referenzen' : 'Proven Nordible Track Record'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {isDe
                ? `Was wir im Bereich ${serviceName} bereits umgesetzt haben`
                : `What We Have Built in ${serviceName}`}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.proofItems.map((proof, idx) => (
              <div
                key={idx}
                className="card-premium p-6 flex flex-col justify-between space-y-4 hover:border-nordible-blue/40 transition-all"
              >
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                    {proof.client}
                  </div>
                  <h3 className="text-lg font-extrabold text-nordible-dark dark:text-white font-heading leading-snug">
                    {isDe ? proof.titleDe : proof.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {isDe ? proof.impactDe : proof.impactEn}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-nordible-border dark:border-gray-800">
                  {proof.caseStudySlug && (
                    <Link
                      to={getPath(`/blog/${proof.caseStudySlug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 hover:underline"
                    >
                      <span>{isDe ? 'Fallstudie lesen' : 'Read Case Study'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}

                  {proof.externalUrl && (
                    <a
                      href={proof.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      <span>{isDe ? proof.externalLabelDe : proof.externalLabelEn}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-5 text-left">
          <div className="flex items-center gap-2 text-nordible-dark dark:text-white">
            <HelpCircle className="h-5 w-5 text-nordible-blue" />
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading">
              {isDe ? 'Häufige Fragen' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-nordible-dark dark:text-white cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-nordible-blue' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-nordible-border/60 dark:border-gray-700/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Services Navigation */}
        <section className="space-y-4 text-left pt-4 border-t border-nordible-border dark:border-gray-800">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isDe ? 'Weitere Leistungen entdecken' : 'Explore Other Services'}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={getPath(`/services/${other.slug}`)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-xs font-bold text-nordible-dark dark:text-gray-200 hover:border-nordible-blue hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
              >
                <span>{isDe ? other.nameDe : other.nameEn}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-3xl p-8 sm:p-10 bg-nordible-dark text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            {isDe
              ? `Bereit für den nächsten Schritt im Bereich ${serviceName}?`
              : `Ready to Get Started With ${serviceName}?`}
          </h2>
          <p className="text-sm text-blue-100/85 max-w-2xl mx-auto">
            {isDe
              ? 'Buchen Sie direkt ein unverbindliches 30-Minuten-Strategiegespräch mit Gründer Kabeer Shah.'
              : 'Schedule a free 30-minute strategy session directly with Founder & Solutions Architect Kabeer Shah.'}
          </p>
          <div className="pt-2">
            <a
              href={contactConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 inline-flex items-center gap-2 shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              <span>{isDe ? 'Termin auf Cal.com buchen' : 'Book 30-Min Call on Cal.com'}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
