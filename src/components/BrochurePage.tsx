'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Mail, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import { sendContactEmail } from '../services/emailService';

export default function BrochurePage() {
  const { language } = useLanguage();
  const isDe = language === 'de';

  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadUrl = isDe
    ? (contactConfig.brochurePdfUrl || '/nordible-corporate-brochure.pdf')
    : '/nordible-corporate-brochure-en.pdf';
  const downloadFileName = isDe
    ? 'Nordible-Technologies-Unternehmensbroschuere.pdf'
    : 'Nordible-Technologies-Corporate-Brochure.pdf';
  const webVersionUrl = isDe ? '/brochure.html' : '/brochure-en.html';

  const triggerDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = downloadFileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.warn('Direct file download error:', e);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(
        isDe 
          ? 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse an.' 
          : 'Please enter a valid work email address.'
      );
      return;
    }
    setError(null);
    setIsSubmitting(true);

    triggerDownload();

    try {
      await sendContactEmail({
        fullName: company.trim() || email.split('@')[0],
        email: email.trim(),
        phone: '',
        projectType: isDe ? 'Broschüren-Download 2026' : 'Brochure Download 2026',
        budget: isDe ? 'Kostenlose Broschüre angefordert' : 'Free Brochure Requested',
        description: isDe
          ? `Kunde hat die offizielle Unternehmensbroschüre (DE) heruntergeladen. Unternehmen: ${company.trim() || 'k. A.'}`
          : `Client downloaded official Corporate Monograph (EN). Company: ${company.trim() || 'N/A'}`,
        brochureDownload: true,
        to: contactConfig.leadTestRecipients,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission failed:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 py-12 sm:py-20 text-nordible-dark dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Publication Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {isDe ? 'Nordible Unternehmensbroschüre' : 'Nordible Corporate Monograph'}{' '}
            <span className="text-nordible-blue dark:text-blue-400">2026</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? 'Druckreife 6-seitige B2B-Publikation für CTOs, Architekten und technische Entscheider: Hochverfügbare Systemarchitektur, verifizierte ROI-Metriken und transparente Zusammenarbeitsmodelle.'
              : 'Print-ready 6-page B2B monograph for CTOs, architects, and technical decision makers: Highly concurrent architectures, verified ROI benchmarks, and transparent engagement frameworks.'}
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Authentic DIN A4 Monograph Presentation */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tangible Document Card */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-xl overflow-hidden text-left relative">
              {/* Spine Accent */}
              <div className="h-1.5 bg-gradient-to-r from-nordible-blue via-indigo-600 to-nordible-blue" />

              <div className="p-6 sm:p-8 space-y-6">
                {/* Monograph Top Meta */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-nordible-blue" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      DOC-ID: NORD-PUB-2026-A4
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                    6 {isDe ? 'Seiten DIN A4' : 'Pages DIN A4'}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Nordible Technologies · Frankfurt am Main
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-nordible-dark dark:text-white">
                    Capability Statement & System Architecture
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {isDe
                      ? 'Technologieberatung, High-Performance Software-Engineering und KI-Workflows für mittelständische Unternehmen und skalierende Vorhaben.'
                      : 'Technology consulting, high-performance software engineering, and AI pipelines for German Mittelstand and scaling enterprises.'}
                  </p>
                </div>

                {/* Table of Contents Preview */}
                <div className="rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200/80 dark:border-gray-700/60 p-4 space-y-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {isDe ? 'Inhaltsverzeichnis der Publikation' : 'Monograph Table of Contents'}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-nordible-blue font-bold shrink-0">01</span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {isDe ? 'Architektur-Standards & Cloud-Latenzen (<100ms)' : 'Engineering Standards & Sub-100ms Concurrency'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-nordible-blue font-bold shrink-0">02</span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {isDe ? 'DSGVO-konforme KI & Lokale LLM-Workflows' : 'GDPR-Compliant AI & Local LLM Integration'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-nordible-blue font-bold shrink-0">03</span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {isDe ? 'Verifizierte B2B-Fallstudien & ROI-Kennzahlen' : 'Delivered Case Studies & Verified Client ROI'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-nordible-blue font-bold shrink-0">04</span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {isDe ? 'Transparente Festpreis- & Zusammenarbeitsmodelle' : 'Fixed-Price Frameworks & Engagement Models'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Metadata Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-slate-100 dark:border-gray-800">
                  <span>Frankfurt / Main Edition</span>
                  <span className="font-mono text-[11px] text-gray-400">DIN A4 · PDF</span>
                </div>
              </div>
            </div>

            {/* Direct Web Version Card */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-5 shadow-sm flex items-center justify-between gap-4 text-left">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-nordible-dark dark:text-white">
                  {isDe ? 'Interaktive Web-Version' : 'Interactive Web Monograph'}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400">
                  {isDe ? 'Broschüre direkt ohne Download im Browser lesen' : 'Read full publication online without downloading PDF'}
                </div>
              </div>
              <a
                href={webVersionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-nordible-blue dark:text-blue-400 border border-nordible-blue/30 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span>{isDe ? 'Web öffnen' : 'Open Web'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct High-Trust Download & Access Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 sm:p-8 shadow-xl text-left space-y-6">
              
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-nordible-dark dark:text-white">
                  {isDe ? 'Publikation sofort erhalten' : 'Access Publication Instantly'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isDe 
                    ? 'Laden Sie die 6-seitige PDF direkt herunter oder fordern Sie das Exemplar für Ihr Team per E-Mail an.' 
                    : 'Download the 6-page PDF directly or receive a copy for your team via email.'}
                </p>
              </div>

              {/* Instant 1-Click Direct Download Button */}
              <div className="space-y-2">
                <a
                  href={downloadUrl}
                  download={downloadFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 text-sm shadow-lg shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>{isDe ? 'Broschüre herunterladen (PDF)' : 'Download Brochure (PDF)'}</span>
                </a>
              </div>

              {/* Clean Divider */}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-gray-700"></div>
                <span className="flex-shrink mx-4 text-xs font-mono text-gray-400 uppercase">
                  {isDe ? 'Oder per E-Mail erhalten' : 'Or send copy to work email'}
                </span>
                <div className="flex-grow border-t border-slate-200 dark:border-gray-700"></div>
              </div>

              {/* Clean 1-Step Work Email Form */}
              {isSubmitted ? (
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white shadow-md">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    {isDe ? 'Download gestartet & E-Mail versendet!' : 'Download started & email confirmed!'}
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    {isDe 
                      ? 'Ihre 6-seitige Nordible Unternehmensbroschüre wird heruntergeladen.' 
                      : 'Your 6-page Nordible corporate monograph is downloading.'}
                  </p>
                </div>
              ) : (
                <form noValidate onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="brochure-email" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {isDe ? 'Geschäftliche E-Mail-Adresse' : 'Work Email Address'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        id="brochure-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isDe ? 'ihr.name@unternehmen.de' : 'your.name@company.com'}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="brochure-company" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {isDe ? 'Unternehmen (optional)' : 'Company Name (optional)'}
                    </label>
                    <input
                      id="brochure-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={isDe ? 'Firma GmbH' : 'Company Inc.'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl font-bold text-xs bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting 
                        ? (isDe ? 'Wird vorbereitet...' : 'Preparing...') 
                        : (isDe ? 'PDF an E-Mail senden & herunterladen ↗' : 'Email PDF & Download ↗')}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
