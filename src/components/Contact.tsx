import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, UserCheck, Sparkles, Languages, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const c = t.contact;
  const isDe = language === 'de';

  const whatsappUrl = "https://wa.me/4915235850031?text=Hello%20Nordible,%20I'd%20like%20to%20discuss%20a%20technology%20project.";
  const bookingUrl = "https://calendar.app.google/N4XakE4t9zZVmHqYA";

  return (
    <section id="consultation" className="relative py-16 sm:py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Value Proposition */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 text-xs font-bold font-heading mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isDe ? 'Unverbindliche Erstberatung' : 'Zero-Obligation Consultation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {c.title} <span className="text-nordible-blue">{c.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isDe 
              ? 'Sprechen Sie direkt mit unserem Gründer Kabeer Shah über Scope, Machbarkeit und Zeitpläne. 100% vertraulich, ohne Verkaufsdruck.' 
              : 'Direct 1-on-1 with founder Kabeer Shah on project scope, architecture, and timelines. 100% confidential, zero sales pressure.'}
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
            <span>{isDe ? 'Flexible Online-Termine' : 'Flexible Online Slots'}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <UserCheck className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>{isDe ? 'Direkt mit dem Gründer' : 'Direct Founder Lead'}</span>
          </div>
        </div>

        {/* Primary Booking Hero Card */}
        <div className="mb-10 rounded-2xl border-2 border-nordible-blue/30 bg-gradient-to-b from-blue-50/60 via-white to-white dark:from-blue-950/40 dark:via-gray-900 dark:to-gray-900 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-nordible-blue/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20">
              <Calendar className="h-4 w-4" />
              <span>{isDe ? 'Empfohlen: Google Calendar' : 'Recommended: Google Calendar'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {isDe ? 'Wählen Sie Ihren Wunschtermin' : 'Choose Your Preferred Time Slot'}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
              {isDe
                ? 'Buchen Sie direkt ein 20-minütiges Google Meet. Wir besprechen Ihre Ziele, prüfen die technische Machbarkeit und erstellen einen ersten Fahrplan.'
                : 'Book a 20-minute Google Meet directly on our calendar. We will review your goals, verify technical feasibility, and map out next steps.'}
            </p>

            {/* Benefit Checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-gray-600 dark:text-gray-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{isDe ? '20 Minuten via Google Meet' : '20 min via Google Meet'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{isDe ? 'Sofortige Terminbestätigung' : 'Instant Calendar Confirmation'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{isDe ? '100% unverbindlich' : 'Zero obligation'}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-agent-action="book-consultation"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold bg-nordible-blue hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                <span>{isDe ? 'Kostenfreies Erstgespräch buchen' : 'Book Free Discovery Call'}</span>
                <ArrowRight className="h-4 w-4 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Alternative Direct Channels: 3-column row */}
        <div className="space-y-4 mb-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
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
                    +49 1523 5850031
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                <span>{isDe ? 'Chat starten' : 'Start chat'}</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Phone Call */}
            <a
              href="tel:+4915235850031"
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
                    +49 1523 5850031
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
              href="mailto:mail@nordible.co?subject=Project%20Inquiry%20-%20Nordible%20Technologies"
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
                    mail@nordible.co
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 pt-1">
                <span>{isDe ? 'E-Mail senden' : 'Send email'}</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* What Happens Next - 3-Step Mental Model Roadmap */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm text-left mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
            {isDe ? 'Was passiert als Nächstes?' : 'What Happens Next'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-400 font-bold text-xs flex items-center justify-center font-mono">1</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? '20-Min. Erstgespräch' : '20-Min Scope Call'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Wir analysieren gemeinsam Ihre Projektziele, technischen Rahmenbedingungen und Zeitpläne.'
                  : 'We discuss your project goals, technical constraints, and desired launch dates.'}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center font-mono">2</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? 'Machbarkeitsanalyse' : 'Feasibility Audit'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Wir prüfen Architektur, Technologiewahl und potenzielle Risiken im Detail.'
                  : 'We review architecture, technology stack trade-offs, and operational risks.'}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">3</span>
                <h4 className="font-bold text-sm text-nordible-dark dark:text-white font-heading">
                  {isDe ? 'Konkreter Fahrplan' : 'Action Plan & Estimate'}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isDe 
                  ? 'Sie erhalten ein transparentes, kalkuliertes Angebot und einen Sprint-Fahrplan. Völlig unverbindlich.'
                  : 'You receive a transparent roadmap and fixed-scope estimate. Completely zero obligation.'}
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

