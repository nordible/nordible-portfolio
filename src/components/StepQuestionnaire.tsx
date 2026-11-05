'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  X,
  Lock,
  Clock,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendContactEmail } from '../services/emailService';

export interface StepQuestionnaireProps {
  mode?: 'inline' | 'modal';
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  sourceContext?: 'contact' | 'case-study';
  slug?: string;
  preferredGoal?: string;
  onSuccess?: () => void;
}

export default function StepQuestionnaire({
  mode = 'inline',
  isOpen = true,
  onClose,
  className = '',
  sourceContext = 'contact',
  slug = '',
  preferredGoal = '',
  onSuccess
}: StepQuestionnaireProps) {
  const { language } = useLanguage();
  const isDe = language === 'de';

  const [projectDescription, setProjectDescription] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState<{
    description?: string;
    email?: string;
  }>({});
  const [touched, setTouched] = useState<{
    description?: boolean;
    email?: boolean;
  }>({});

  // Quick intent chips
  const getChips = () => {
    const s = slug.toLowerCase();
    if (s.includes('restaurant') || s.includes('delivery') || s.includes('buns')) {
      return isDe 
        ? ['0%-Provisions-Shop aufbauen', 'Bestellumsatz steigern', 'Küchen- & Fahrerlogistik']
        : ['Launch 0% Commission Direct Ordering', 'Grow Online Basket Size', 'Driver & Kitchen Logistics'];
    }
    if (s.includes('architect') || s.includes('architektur') || s.includes('shams')) {
      return isDe
        ? ['Gewerbliche Bauherren gewinnen', 'Google Page 1 Sichtbarkeit', 'Architektur-Portfolio erneuern']
        : ['Attract Commercial Developers', 'Google Page 1 Rankings', 'Digital Portfolio Relaunch'];
    }
    if (s.includes('seo') || s.includes('discoverability')) {
      return isDe
        ? ['Prüfen ob ChatGPT uns empfiehlt', 'Google Maps Top 3', 'Regionale B2B-Marktführerschaft']
        : ['Check if ChatGPT recommends us', 'Google Maps Local 3-Pack', 'Regional B2B Lead Dominance'];
    }
    return isDe
      ? ['Neue Web- oder Mobile-App', 'KI-Agenten & Automatisierung', 'Bestehende Software optimieren', 'Cloud-Architektur & Skalierung']
      : ['New Web or Mobile App', 'AI Agents & Automation', 'Refactor Existing Software', 'Cloud Architecture & Scale'];
  };

  const chips = getChips();

  const handleChipClick = (chipText: string) => {
    if (!projectDescription.trim()) {
      setProjectDescription(chipText);
    } else if (!projectDescription.includes(chipText)) {
      setProjectDescription((prev) => `${prev.trim()}, ${chipText}`);
    }
  };

  const validate = () => {
    const errors: { description?: string; email?: string } = {};
    if (!projectDescription.trim()) {
      errors.description = isDe 
        ? 'Bitte beschreiben Sie kurz Ihr Vorhaben oder wählen Sie einen der Schwerpunkte oben.'
        : 'Please briefly describe your project or select an option above.';
    }
    if (!workEmail.trim()) {
      errors.email = isDe 
        ? 'Bitte geben Sie Ihre geschäftliche E-Mail-Adresse an.'
        : 'Please provide your work email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(workEmail.trim())) {
        errors.email = isDe 
          ? 'Bitte prüfen Sie das E-Mail-Format.'
          : 'Please enter a valid email address.';
      }
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ description: true, email: true });
    const errors = validate();
    setFieldErrors(errors);

    if (errors.description || errors.email) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const isCaseStudy = sourceContext === 'case-study';
    const projectTypeTitle = isCaseStudy
      ? `Case Study Review: ${slug || 'Specific Article'}`
      : 'Kostenfreie Architektur- & Machbarkeitsprüfung';

    const fullDescription = [
      `Vorhaben / Anfrage: ${projectDescription.trim()}`,
      companyWebsite.trim() ? `Website / Unternehmen: ${companyWebsite.trim()}` : null,
      `Kontext: ${sourceContext} (${slug || 'Homepage'})`
    ].filter(Boolean).join('\n');

    // 1. Persist to localStorage for local dashboard
    try {
      const stored = localStorage.getItem('nordible_leads');
      const existingLeads = stored ? JSON.parse(stored) : [];
      const newLead = {
        id: Date.now().toString(),
        fullName: companyWebsite.trim() || workEmail.split('@')[0],
        email: workEmail.trim(),
        phone: '',
        projectType: projectTypeTitle,
        budget: 'Free Architecture Review',
        description: fullDescription,
        status: 'new' as const,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem('nordible_leads', JSON.stringify([newLead, ...existingLeads]));
    } catch (err) {
      console.warn('Could not persist lead to localStorage:', err);
    }

    // 2. Dispatch email
    try {
      const success = await sendContactEmail({
        fullName: companyWebsite.trim() || workEmail.split('@')[0],
        email: workEmail.trim(),
        phone: '',
        projectType: projectTypeTitle,
        budget: 'Free Architecture Review',
        description: fullDescription
      });

      if (success) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setSubmitError(
          isDe
            ? 'Beim Versenden ist ein Fehler aufgetreten. Bitte schreiben Sie uns direkt an mail@nordible.co.'
            : 'Could not send message. Please write directly to mail@nordible.co.'
        );
      }
    } catch {
      setSubmitError(
        isDe
          ? 'Beim Versenden ist ein Fehler aufgetreten. Bitte schreiben Sie uns direkt an mail@nordible.co.'
          : 'Could not send message. Please write directly to mail@nordible.co.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (mode === 'modal' && !isOpen) {
    return null;
  }

  const innerForm = (
    <div className="space-y-6 text-left">
      {/* Modal Close & Header (Modal Only) */}
      {mode === 'modal' && (
        <div className="flex items-center justify-between pb-3 border-b border-nordible-border dark:border-gray-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-400">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
              {isDe ? 'Kostenfreie Machbarkeitsprüfung' : 'Free Architecture Review'}
            </span>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      )}

      {isSubmitted ? (
        /* SUCCESS CONFIRMATION - ZERO PRESSURE */
        <div className="p-8 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-fade-in">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="h-7 w-7" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-200 font-heading">
              {isDe ? 'Vielen Dank für Ihre Anfrage!' : 'Thank you for your request!'}
            </h3>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
              {isDe 
                ? 'Unser Gründer Kabeer Shah analysiert Ihr Vorhaben persönlich und sendet Ihnen die technische Machbarkeits- und Kosteneinschätzung innerhalb von 24 Stunden an Ihre E-Mail.'
                : 'Founder Kabeer Shah will personally review your project scope and email you a technical feasibility & realistic cost estimate within 24 hours.'}
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setProjectDescription('');
                setWorkEmail('');
                setCompanyWebsite('');
              }}
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 underline hover:opacity-80 cursor-pointer"
            >
              {isDe ? 'Weiteres Projekt anfragen' : 'Submit another inquiry'}
            </button>
          </div>
        </div>
      ) : (
        /* THE 2-FIELD HIGH-VALUE FORM */
        <form noValidate onSubmit={handleSubmit} className="space-y-5">
          {/* Header */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {isDe 
                ? 'Kostenfreie Architektur- & Machbarkeitsprüfung' 
                : 'Free Architecture & Feasibility Breakdown'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {isDe 
                ? 'Kein Verkaufsgespräch. Gründer Kabeer Shah prüft Ihr Vorhaben persönlich und sendet Ihnen eine konkrete technische Einschätzung und Kostenschätzung innerhalb von 24h per E-Mail.'
                : 'Zero sales pitch. Founder Kabeer Shah will personally analyze your project scope and email you an actionable architecture review & cost estimate within 24h.'}
            </p>
          </div>

          {/* Quick Clickable Chips */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
              {isDe ? 'Schnellwahl (Klicken zum Übernehmen):' : 'Quick Select (Click to add):'}
            </span>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => handleChipClick(chip)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-nordible-border/80 dark:border-gray-700 hover:border-nordible-blue hover:text-nordible-blue dark:hover:text-blue-400 transition-all cursor-pointer active:scale-95"
                >
                  + {chip}
                </button>
              ))}
            </div>
          </div>

          {/* FIELD 1: What are you planning to build or fix? */}
          <div className="space-y-1.5">
            <label htmlFor="projectDesc" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              {isDe ? '1. Was planen Sie zu bauen oder zu optimieren?' : '1. What are you planning to build or fix?'} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDesc"
              rows={3}
              value={projectDescription}
              onBlur={() => setTouched((p) => ({ ...p, description: true }))}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder={isDe 
                ? 'z. B. Wir möchten eine maßgeschneiderte Web-Plattform für ... bauen / Unsere aktuelle Software ist langsam und muss refaktorisiert werden...'
                : 'e.g. We want to build a custom web platform for ... / Our existing app is slow and needs architecture refactoring...'}
              className={`w-full p-4 rounded-2xl border text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                touched.description && fieldErrors.description
                  ? 'border-red-500 bg-red-50/20 dark:bg-red-950/20'
                  : 'border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue'
              }`}
            />
            {touched.description && fieldErrors.description && (
              <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{fieldErrors.description}</span>
              </p>
            )}
          </div>

          {/* FIELD 2: Where should Kabeer send the breakdown? */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="workEmail" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                {isDe ? '2. Wohin dürfen wir die Auswertung senden?' : '2. Where should Kabeer send the breakdown?'} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                autoCapitalize="none"
                autoCorrect="off"
                value={workEmail}
                onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder={isDe ? 'name@unternehmen.de' : 'name@company.com'}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${
                  touched.email && fieldErrors.email
                    ? 'border-red-500 bg-red-50/20 dark:bg-red-950/20'
                    : 'border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue'
                }`}
              />
              {touched.email && fieldErrors.email && (
                <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  <span>{fieldErrors.email}</span>
                </p>
              )}
            </div>

            {/* Optional Website / Company URL */}
            <div className="space-y-1.5">
              <label htmlFor="companyWebsite" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                {isDe ? 'Website oder Firmenname (optional)' : 'Website or Company Name (optional)'}
              </label>
              <input
                type="text"
                id="companyWebsite"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                placeholder={isDe ? 'unternehmen.de' : 'company.com'}
                className="w-full px-4 py-3 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue transition-colors"
              />
            </div>
          </div>

          {submitError && (
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* CTA BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base font-bold bg-nordible-blue hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 disabled:opacity-60"
            >
              <span>
                {isSubmitting
                  ? (isDe ? 'Wird übermittelt...' : 'Sending Request...')
                  : (isDe ? 'Kostenfreie Auswertung anfordern (In 24h per E-Mail)' : 'Send Me the Breakdown (Free, within 24h)')}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* TRUST REASSURANCES */}
          <div className="pt-2 grid sm:grid-cols-3 gap-2.5 text-left text-[11px] text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>{isDe ? '100% vertraulich & kostenfrei' : '100% Free & Confidential'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-indigo-500 shrink-0" />
              <span>{isDe ? 'Keine Werbeanrufe oder Spam' : 'Zero phone calls or spam'}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-nordible-blue shrink-0" />
              <span>{isDe ? 'Direkt von Gründer Kabeer Shah' : 'Direct Founder Review'}</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );

  if (mode === 'modal') {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`w-full max-w-xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {innerForm}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border-2 border-nordible-blue/20 bg-white dark:bg-gray-900 p-6 sm:p-10 shadow-xl relative overflow-hidden text-left ${className}`}>
      {innerForm}
    </div>
  );
}
