'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Mail,
  ArrowRight,
  TrendingUp,
  Clock,
  Cpu,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import { sendContactEmail } from '../services/emailService';
import { downloadBrochurePdf } from '../lib/downloadBrochure';

export default function BrochurePage() {
  const { language } = useLanguage();
  const isDe = language === 'de';

  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const brochureAsset = isDe ? contactConfig.brochureAssets.de : contactConfig.brochureAssets.en;
  const downloadUrl = brochureAsset.pdfUrl;
  const downloadFileName = brochureAsset.fileName;
  const webVersionUrl = brochureAsset.webUrl;

  const businessBenefits = isDe
    ? [
        {
          icon: Clock,
          metric: '2–4 Wochen',
          title: 'Schneller am Markt & früher zum Umsatz',
          desc: 'Einsatzbereite Websites, Kundenportale und KI-Workflows in Wochen statt Monaten.',
        },
        {
          icon: TrendingUp,
          metric: '+1.045 % Klicks',
          title: 'Planbare Neukunden über Google & KI-Suche',
          desc: 'Gefunden werden auf Google Seite 1 und in ChatGPT/Gemini ohne reine Anzeigen-Abhängigkeit.',
        },
        {
          icon: Cpu,
          metric: 'Bis 80 % Ersparnis',
          title: 'Weniger manuelle Routinearbeit durch KI',
          desc: '24/7 Lead-Qualifizierung, Dokumentenprüfung und automatische CRM-Prozesse.',
        },
        {
          icon: ShieldCheck,
          metric: '100 % Eigentum',
          title: 'Direkte Gründerverantwortung & DSGVO',
          desc: 'Volles Quellcode-Eigentum, klare Festpreise und direkter Kontakt zu Kabeer Shah.',
        },
      ]
    : [
        {
          icon: Clock,
          metric: '2–4 Weeks',
          title: 'Faster Time-to-Market & Earlier ROI',
          desc: 'Launch high-converting websites, client portals, and AI tools in weeks instead of months.',
        },
        {
          icon: TrendingUp,
          metric: '+1,045% Clicks',
          title: 'Win Customers via Google & AI Search (GEO)',
          desc: 'Rank on Google Page 1 and get recommended in ChatGPT/Gemini without rising ad costs.',
        },
        {
          icon: Cpu,
          metric: 'Up to 80% Saved',
          title: 'Cut Manual Busywork With AI Automation',
          desc: '24/7 lead qualification, invoice/PDF extraction, and automated CRM synchronization.',
        },
        {
          icon: ShieldCheck,
          metric: '100% Ownership',
          title: 'Direct Founder Access & GDPR Safety',
          desc: 'Zero agency bloat, fixed-scope clarity, and full source code ownership from day one.',
        },
      ];

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      setError(
        isDe
          ? 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse an.'
          : 'Please enter a valid work email address.'
      );
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const downloaded = await downloadBrochurePdf(downloadUrl, downloadFileName);
    if (!downloaded) {
      setIsSubmitting(false);
      setError(
        isDe
          ? 'Die PDF-Datei konnte gerade nicht geladen werden. Bitte öffnen Sie alternativ die Web-Version oder versuchen Sie es erneut.'
          : 'Could not download the PDF right now. Please try again or open the online web version.'
      );
      return;
    }

    try {
      await sendContactEmail({
        fullName: company.trim() || trimmedEmail.split('@')[0],
        email: trimmedEmail,
        phone: '',
        projectType: isDe ? 'Broschüren-Download 2026' : 'Brochure Download 2026',
        budget: isDe ? 'Kostenlose Broschüre angefordert' : 'Free Brochure Requested',
        description: isDe
          ? `Kunde hat die offizielle Unternehmensbroschüre (DE) heruntergeladen. Unternehmen: ${company.trim() || 'k. A.'}`
          : `Client downloaded official Corporate Brochure (EN). Company: ${company.trim() || 'N/A'}`,
        brochureDownload: true,
        language,
        to: contactConfig.leadTestRecipients,
      });
    } catch (err) {
      console.error('Lead submission failed:', err);
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 py-12 sm:py-20 text-nordible-dark dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200/70 dark:border-blue-800/60 text-nordible-blue dark:text-blue-300 text-xs font-bold font-mono uppercase tracking-wider mb-4">
            <FileText className="h-3.5 w-3.5" />
            <span>{isDe ? '6 Seiten DIN A4 · PDF Publikation' : '6 Pages DIN A4 · PDF Brochure'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {isDe ? 'Nordible Unternehmensbroschüre' : 'Nordible Business Brochure'}{' '}
            <span className="text-nordible-blue dark:text-blue-400">2026</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? 'Wie mittelständische und wachsende Unternehmen mit KI-Workflows, Google- & ChatGPT-Sichtbarkeit sowie schneller Softwareentwicklung planbar mehr Kunden gewinnen und Kosten senken.'
              : 'How growing businesses win more qualified customers, automate manual workflows with AI, and launch high-converting platforms in 2–4 weeks with full ownership.'}
          </p>
        </div>

        {/* Organized 2-Column Layout: Business Benefits Overview + ONE Download Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Organized Business Benefits & Brochure Highlights */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-lg overflow-hidden text-left">
              <div className="h-1.5 bg-gradient-to-r from-nordible-blue via-indigo-600 to-emerald-500" />

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400">
                    {isDe ? 'Ihr geschäftlicher Nutzen im Überblick' : 'Business Benefits Inside'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-nordible-dark dark:text-white">
                    {isDe
                      ? 'Was diese Broschüre für Ihr Unternehmen zeigt'
                      : 'What This Brochure Delivers for Your Business'}
                  </h2>
                </div>

                {/* 4 Business Benefit Pillars */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {businessBenefits.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200/80 dark:border-gray-700/60 p-4 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-blue-100/80 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400 flex items-center justify-center">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                            {item.metric}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold font-heading text-nordible-dark dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Clean 6-Page Structure Preview + Inline Web Preview Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {isDe
                      ? 'Enthält: ROI-Vorteile · Lösungen · Verifizierte Case Studies · Festpreis-Modelle'
                      : 'Includes: ROI Benefits · Solutions · Verified Case Studies · Fixed-Scope Models'}
                  </div>
                  <a
                    href={webVersionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-nordible-blue dark:text-blue-400 hover:underline"
                  >
                    <span>{isDe ? 'Im Browser ansehen' : 'Preview in browser'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: ONE Unified Download Section */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 sm:p-8 shadow-xl text-left space-y-5">
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-nordible-dark dark:text-white">
                  {isDe ? 'Broschüre kostenlos herunterladen' : 'Download Free Brochure (PDF)'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isDe
                    ? 'Geben Sie Ihre geschäftliche E-Mail-Adresse ein – der PDF-Download startet sofort.'
                    : 'Enter your work email below to start the instant 6-page PDF download.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-500 text-white shadow-md">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    {isDe ? 'Download gestartet!' : 'Download Started!'}
                  </h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    {isDe
                      ? 'Ihre 6-seitige Nordible Unternehmensbroschüre (PDF) wird heruntergeladen.'
                      : 'Your 6-page Nordible Business Brochure (PDF) is downloading now.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => downloadBrochurePdf(downloadUrl, downloadFileName)}
                    className="btn-primary w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>{isDe ? 'Erneut herunterladen (PDF)' : 'Download Again (PDF)'}</span>
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="brochure-email"
                      className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {isDe ? 'Geschäftliche E-Mail-Adresse *' : 'Work Email Address *'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        id="brochure-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isDe ? 'ihr.name@unternehmen.de' : 'your.name@company.com'}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="brochure-company"
                      className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {isDe ? 'Unternehmen (optional)' : 'Company Name (optional)'}
                    </label>
                    <input
                      id="brochure-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={isDe ? 'Firma GmbH' : 'Company Inc.'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 px-6 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                  >
                    <Download className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? isDe
                          ? 'PDF wird heruntergeladen...'
                          : 'Downloading PDF...'
                        : isDe
                          ? 'Broschüre herunterladen (PDF)'
                          : 'Download Brochure (PDF)'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center">
                    {isDe
                      ? '100 % kostenfrei · DSGVO-konform · Kein Spam'
                      : '100% Free · GDPR Compliant · Zero Spam'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
