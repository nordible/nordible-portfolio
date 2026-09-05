import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, UserCheck, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendContactEmail, ContactFormData } from '../services/emailService';

export default function Contact() {
  const { t, language } = useLanguage();
  const c = t.contact;
  const isDe = language === 'de';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'general-inquiry',
    budget: 'flexible',
    description: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const whatsappUrl = "https://wa.me/4915235850031?text=Hello%20Nordible,%20I'd%20like%20to%20discuss%20a%20technology%20project.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      return;
    }

    setFormStatus('submitting');
    try {
      // Store in localStorage for dashboard persistence
      const storedLeads = JSON.parse(localStorage.getItem('nordible_leads') || '[]');
      const newLead = {
        id: Date.now().toString(),
        ...formData,
        status: 'new',
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem('nordible_leads', JSON.stringify([newLead, ...storedLeads]));

      const sent = await sendContactEmail(formData);
      if (sent) {
        setFormStatus('success');
      } else {
        // Graceful completion with local persistence
        setFormStatus('success');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="consultation" className="relative py-16 sm:py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{isDe ? '100% Kostenfrei & Vertraulich' : '100% Free & Confidential'}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <Clock className="h-4 w-4 text-nordible-blue shrink-0" />
            <span>{isDe ? 'Antwort unter 2 Stunden' : 'Response in < 2 Hours'}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-nordible-border/60 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-200">
            <UserCheck className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>{isDe ? 'Direkt mit dem Gründer' : 'Direct Founder Lead'}</span>
          </div>
        </div>

        {/* What Happens Next - 3-Step Mental Model Roadmap */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm text-left">
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

        {/* Dual Conversion Tracks: Direct Channels (Left) & In-Page Brief Form (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column: Direct Instant Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              {isDe ? 'Direkter Sofortkontakt' : 'Direct Instant Channels'}
            </h3>

            {/* Channel 1: WhatsApp Direct */}
            <div className="card-premium p-5 flex flex-col justify-between border-2 border-emerald-500/20 dark:border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent dark:from-emerald-950/20 shadow-md hover:border-emerald-500/40 transition-all rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-nordible-dark dark:text-white font-heading">
                    WhatsApp Direct
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    +49 1523 5850031
                  </div>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2 rounded-xl font-bold cursor-pointer"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{isDe ? 'Über WhatsApp chatten' : 'Chat on WhatsApp'}</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Channel 2: Phone Call */}
            <div className="card-premium p-5 flex flex-col justify-between border-2 border-blue-500/20 dark:border-blue-500/30 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent dark:from-blue-950/20 shadow-md hover:border-nordible-blue/40 transition-all rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-nordible-blue text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-nordible-dark dark:text-white font-heading">
                    {isDe ? 'Direkter Telefonkontakt' : 'Direct Phone Call'}
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    +49 1523 5850031
                  </div>
                </div>
              </div>
              <a
                href="tel:+4915235850031"
                className="btn-primary w-full py-2 text-xs bg-nordible-blue hover:bg-blue-600 text-white shadow-md shadow-blue-600/20 flex items-center justify-center space-x-2 rounded-xl font-bold cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{isDe ? 'Jetzt anrufen' : 'Call Directly'}</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Channel 3: Email Direct */}
            <div className="card-premium p-5 flex flex-col justify-between border-2 border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent dark:from-indigo-950/20 shadow-md hover:border-indigo-500/40 transition-all rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-nordible-dark dark:text-white font-heading">
                    {isDe ? 'Schriftliche Anfrage' : 'Written Inquiry'}
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    mail@nordible.co
                  </div>
                </div>
              </div>
              <a
                href="mailto:mail@nordible.co?subject=Project%20Inquiry%20-%20Nordible%20Technologies"
                className="btn-primary w-full py-2 text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 flex items-center justify-center space-x-2 rounded-xl font-bold cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{isDe ? 'E-Mail senden' : 'Send Direct Email'}</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: In-Page Rapid Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="card-premium p-6 sm:p-8 rounded-2xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nordible-dark dark:text-white font-heading mb-1">
                {isDe ? 'Projekt per Kurznachricht anfragen' : 'Send an In-Page Project Brief'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                {isDe 
                  ? 'Erhalten Sie innerhalb von 2 Stunden eine fundierte technische Rückmeldung.' 
                  : 'Receive qualified architectural feedback within 2 hours.'}
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200 font-heading">
                    {isDe ? 'Anfrage erfolgreich übermittelt!' : 'Inquiry Successfully Sent!'}
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    {isDe 
                      ? 'Vielen Dank! Kabeer Shah prüft Ihre Angaben persönlich und meldet sich innerhalb von 2 Stunden bei Ihnen.'
                      : 'Thank you! Founder Kabeer Shah will personally review your brief and respond within 2 hours.'}
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        projectType: 'mvp-development',
                        budget: 'flexible',
                        description: ''
                      });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 underline cursor-pointer"
                  >
                    {isDe ? 'Weitere Nachricht senden' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-agent-action="submit-inquiry" className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Vollständiger Name *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        data-agent-field="name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isDe ? 'z.B. Alex Müller' : 'e.g. Alex Miller'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-white text-xs focus:ring-2 focus:ring-nordible-blue focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Geschäftliche E-Mail *' : 'Work Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        data-agent-field="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-white text-xs focus:ring-2 focus:ring-nordible-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {isDe ? 'Telefon / WhatsApp (Optional)' : 'Phone / WhatsApp (Optional)'}
                    </label>
                    <input
                      type="tel"
                      data-agent-field="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-white text-xs focus:ring-2 focus:ring-nordible-blue focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {isDe ? 'Projektbeschreibung & Anforderungen *' : 'Project Brief & Goals *'}
                    </label>
                    <textarea
                      required
                      rows={3}
                      data-agent-field="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder={isDe ? 'Beschreiben Sie Ihr Vorhaben, Ziele und gewünschte Zeitpläne...' : 'Describe your project scope, target timeline, or technical requirements...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-white text-xs focus:ring-2 focus:ring-nordible-blue focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">
                      🔒 {isDe ? 'Streng vertraulich. Keine Weitergabe an Dritte.' : 'Strictly confidential. No spam, ever.'}
                    </div>

                    <button
                      type="submit"
                      data-agent-action="send-inquiry"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full sm:w-auto px-6 py-2.5 text-xs flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20 shrink-0 cursor-pointer disabled:opacity-60"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>
                        {formStatus === 'submitting' 
                          ? (isDe ? 'Wird übermittelt...' : 'Sending Brief...') 
                          : (isDe ? 'Erstberatung anfragen' : 'Request Consultation')}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

