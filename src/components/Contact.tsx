'use client';
import React from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Languages, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  QrCode, 
  Download
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import StepQuestionnaire from './StepQuestionnaire';

export default function Contact() {
  const { t, language } = useLanguage();
  const c = t.contact;
  const isDe = language === 'de';

  const whatsappUrl = contactConfig.whatsapp.chatUrl;

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden scroll-mt-20">
      <div id="consultation" className="absolute top-0 pointer-events-none scroll-mt-20" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Value Proposition */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold font-heading mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isDe ? 'Unverbindliche Erstberatung' : 'Zero-Obligation Consultation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            <span>{c.title} <span className="text-nordible-blue">{c.titleHighlight}</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isDe 
              ? 'Erhalten Sie eine kostenfreie technische Einschätzung und realistische Kostenschätzung direkt von Gründer Kabeer Shah. 100% vertraulich, ohne Verkaufsdruck.' 
              : 'Get an actionable technical feasibility assessment and realistic cost estimate directly from founder Kabeer Shah. 100% confidential, zero sales pressure.'}
          </p>
        </div>

        {/* Psychological Risk-Reversal Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{isDe ? '100% Kostenfrei & Vertraulich' : '100% Free & Confidential'}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <Clock className="h-4 w-4 text-nordible-blue shrink-0" />
            <span>{isDe ? 'Reaktionszeit unter 24h' : 'Under 24h Response SLA'}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <UserCheck className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>{isDe ? 'Direkt mit dem Gründer' : 'Direct Founder Lead'}</span>
          </div>
        </div>

        {/* The 2-Field High-Value Free Breakdown Hero */}
        <StepQuestionnaire mode="inline" sourceContext="contact" className="mb-14" />

        {/* Alternative Direct Channels: 3-column row */}
        <div className="space-y-4 mb-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
              {isDe ? 'Oder direkt kontaktieren' : 'Or Reach Out Directly'}
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {/* WhatsApp Direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-5 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/30 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-nordible-dark dark:text-white font-heading">
                    WhatsApp
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    {contactConfig.phone.display}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-emerald-700 dark:text-emerald-400 pt-1">
                <span>{isDe ? 'Chat starten' : 'Start chat'}</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Phone Call */}
            <a
              href={contactConfig.phone.telHref}
              className="card-premium p-5 rounded-2xl border border-blue-500/20 dark:border-blue-500/30 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-nordible-blue/50 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-nordible-blue text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-nordible-dark dark:text-white font-heading">
                    {isDe ? 'Telefon' : 'Phone'}
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    {contactConfig.phone.display}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-nordible-blue dark:text-blue-400 pt-1">
                <span>{isDe ? 'Direkt anrufen' : 'Call directly'}</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactConfig.email.general}?subject=Project%20Inquiry%20-%20Nordible%20Technologies`}
              className="card-premium p-5 rounded-2xl border border-indigo-500/20 dark:border-indigo-500/30 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-nordible-dark dark:text-white font-heading">
                    E-Mail
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    {contactConfig.email.general}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 pt-1">
                <span>{isDe ? 'E-Mail senden' : 'Send email'}</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Digital Business Card / vCard CTA */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white dark:from-slate-800/80 dark:via-blue-950/40 dark:to-slate-900 border border-blue-200/60 dark:border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#145BFF] text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                <QrCode className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {isDe ? 'Digitale Visitenkarte & QR-Code' : 'Digital Business Card & QR Code'}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300">
                  {isDe 
                    ? 'Kontaktdaten inkl. aller Social-Media-Profile mit einem Klick auf dem Smartphone speichern.'
                    : 'Download full company & founder contact details including social profiles in 1 click.'}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto shrink-0">
              <a
                href={contactConfig.vcardDownloadUrl}
                download="Nordible-Technologies.vcf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#145BFF] hover:bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all text-center"
                title={isDe ? 'Visitenkarte direkt herunterladen' : 'Download vCard directly'}
              >
                <Download className="h-3.5 w-3.5" />
                <span>{isDe ? 'Direkt herunterladen' : 'Download Contact'}</span>
              </a>

              <a
                href="/card"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm active:scale-95 transition-all text-center"
              >
                <span>{isDe ? 'Visitenkarte ansehen' : 'View Card & QR'}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Office Location & Interactive Google Map */}
        <div className="card-premium p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm text-left mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Office Info & CTA */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 text-xs font-bold font-heading">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{isDe ? 'Standort Frankfurt am Main' : 'Frankfurt am Main Office'}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
                  {isDe ? 'Besuchen Sie uns vor Ort' : 'Visit Our Office'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {isDe 
                    ? 'Persönliche Strategiegespräche und Beratung in Frankfurt am Main.' 
                    : 'In-person strategy sessions and consultation in Frankfurt am Main.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-nordible-border/60 dark:border-gray-700/60 space-y-1.5 text-xs">
                <div className="font-bold text-gray-900 dark:text-gray-100">
                  {contactConfig.address.company}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {contactConfig.address.street}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {contactConfig.address.postalCode} {contactConfig.address.city}, {contactConfig.address.country}
                </div>
                <div className="pt-2 text-[11px] text-gray-500 dark:text-gray-400 border-t border-gray-200/60 dark:border-gray-700/60">
                  {isDe 
                    ? 'Termine vor Ort flexibel nach Vereinbarung.' 
                    : 'On-site appointments flexibly scheduled by arrangement.'}
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={contactConfig.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold bg-nordible-blue hover:bg-blue-600 text-white rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Navigation className="h-4 w-4" />
                  <span>{isDe ? 'Route in Google Maps öffnen' : 'Open Directions in Google Maps'}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="lg:col-span-7 h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-nordible-border dark:border-gray-800 shadow-inner relative bg-gray-100 dark:bg-gray-800">
              <iframe
                title="Nordible Technologies Google Maps Location"
                src={contactConfig.address.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* What Happens Next - 3-Step Mental Model Roadmap */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm text-left mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 font-mono">
            {isDe ? 'Was passiert als Nächstes?' : 'What Happens Next'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-400 font-bold text-xs flex items-center justify-center font-mono">1</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? 'Prüfung durch Gründer' : 'Founder Assessment'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Kabeer Shah prüft Ihre Anforderungen, technische Machbarkeit und mögliche Risiken.'
                  : 'Kabeer Shah personally evaluates your requirements, architecture, and potential pitfalls.'}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center font-mono">2</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? 'Kostenfreie Auswertung' : 'Actionable Review'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Sie erhalten eine verständliche technische Einschätzung und Kostenschätzung per E-Mail.'
                  : 'You receive an actionable technical architecture review and realistic cost estimate via email.'}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">3</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? 'Entscheidung ohne Druck' : 'Zero-Pressure Next Steps'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Sie entscheiden in Ruhe, ob Sie das Vorhaben mit uns umsetzen möchten. Völlig unverbindlich.'
                  : 'You review the breakdown on your own terms. Zero sales calls, zero follow-up pressure.'}
              </p>
            </div>
          </div>
        </div>

        {/* Language Transparency Trust Note */}
        <div className="max-w-3xl mx-auto px-4 py-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40 flex items-center justify-center gap-2.5 text-center text-xs text-blue-900 dark:text-blue-200 font-medium shadow-sm">
          <Languages className="h-4 w-4 text-nordible-blue dark:text-blue-400 shrink-0" />
          <span>{c.languageNotice}</span>
        </div>

      </div>
    </section>
  );
}
