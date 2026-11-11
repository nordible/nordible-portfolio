'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  X,
  Lock,
  Clock,
  UserCheck,
  Download,
  FileText,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendContactEmail } from '../services/emailService';
import { 
  getQuestionnaireConfig, 
  QuestionnaireContext, 
  QuestionnaireFieldId, 
  TrustSignalItem 
} from '../config/questionnaireConfig';

export interface StepQuestionnaireProps {
  mode?: 'inline' | 'modal';
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  sourceContext?: QuestionnaireContext;
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

  const schema = useMemo(
    () => getQuestionnaireConfig(sourceContext, language, slug),
    [sourceContext, language, slug]
  );

  const [formData, setFormData] = useState<Record<QuestionnaireFieldId, string>>({
    projectDescription: preferredGoal || '',
    workEmail: '',
    phone: '',
    companyWebsite: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<QuestionnaireFieldId, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<QuestionnaireFieldId, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Close modal on Escape key press (Accessibility / Ergonomics)
  useEffect(() => {
    if (mode !== 'modal' || !isOpen || !onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, isOpen, onClose]);

  const handleChipClick = (chipText: string) => {
    setFormData((prev) => {
      const current = prev.projectDescription.trim();
      if (!current) return { ...prev, projectDescription: chipText };
      if (!current.includes(chipText)) {
        return { ...prev, projectDescription: `${current}, ${chipText}` };
      }
      return prev;
    });
  };

  const validate = () => {
    const errors: Partial<Record<QuestionnaireFieldId, string>> = {};
    for (const field of schema.fields) {
      const val = (formData[field.id] || '').trim();
      if (field.required && !val) {
        errors[field.id] = field.validationError || (language === 'de' ? 'Dieses Feld ist erforderlich.' : 'This field is required.');
      } else if (field.type === 'email' && val) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(val)) {
          errors[field.id] = language === 'de' ? 'Bitte prüfen Sie das E-Mail-Format.' : 'Please enter a valid email address.';
        }
      }
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<QuestionnaireFieldId, boolean>> = {};
    for (const f of schema.fields) allTouched[f.id] = true;
    setTouched(allTouched);

    const errors = validate();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // 1. Instant File Download if configured (Lead Magnet pattern)
    if (schema.success.isBrochureDownload && schema.success.downloadUrl) {
      try {
        const link = document.createElement('a');
        link.href = schema.success.downloadUrl;
        link.download = 'Nordible-Technologies-Corporate-Brochure.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (dlErr) {
        console.warn('Direct file download trigger error:', dlErr);
      }
    }

    const fullDescription = schema.dispatch.buildDescription(formData, { slug, mode });

    // 2. Persist to localStorage only for standard consultations (non-lead-magnet)
    if (!schema.dispatch.isLeadMagnet) {
      try {
        const stored = localStorage.getItem('nordible_leads');
        const existingLeads = stored ? JSON.parse(stored) : [];
        const newLead = {
          id: Date.now().toString(),
          fullName: formData.companyWebsite.trim() || formData.workEmail.split('@')[0],
          email: formData.workEmail.trim(),
          phone: formData.phone.trim(),
          projectType: schema.dispatch.projectType(slug),
          budget: schema.dispatch.budget,
          description: fullDescription,
          status: 'new' as const,
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('nordible_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.warn('Could not persist lead to localStorage:', err);
      }
    }

    // 3. Dispatch lead email
    try {
      const success = await sendContactEmail({
        fullName: formData.companyWebsite.trim() || formData.workEmail.split('@')[0],
        email: formData.workEmail.trim(),
        phone: formData.phone.trim() || 'Nicht angegeben',
        projectType: schema.dispatch.projectType(slug),
        budget: schema.dispatch.budget,
        description: fullDescription,
        to: schema.dispatch.recipients,
        brochureDownload: schema.dispatch.isLeadMagnet,
      });

      if (success || schema.dispatch.isLeadMagnet) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setSubmitError(
          language === 'de'
            ? 'Beim Versenden ist ein Fehler aufgetreten. Bitte schreiben Sie uns direkt an mail@nordible.co.'
            : 'Could not send message. Please write directly to mail@nordible.co.'
        );
      }
    } catch {
      if (schema.dispatch.isLeadMagnet) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setSubmitError(
          language === 'de'
            ? 'Beim Versenden ist ein Fehler aufgetreten. Bitte schreiben Sie uns direkt an mail@nordible.co.'
            : 'Could not send message. Please write directly to mail@nordible.co.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderTrustIcon = (icon: TrustSignalItem['icon']) => {
    switch (icon) {
      case 'shield':
        return <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />;
      case 'lock':
        return <Lock className="h-4 w-4 text-indigo-500 shrink-0" />;
      case 'clock':
        return <Clock className="h-4 w-4 text-nordible-blue shrink-0" />;
      case 'user':
        return <UserCheck className="h-4 w-4 text-nordible-blue shrink-0" />;
    }
  };

  if (mode === 'modal' && !isOpen) return null;

  const innerForm = (
    <div className="space-y-6 text-left">
      {/* Modal Close & Header (Modal Only) */}
      {mode === 'modal' && (
        <div className="flex items-center justify-between pb-3.5 border-b border-nordible-border dark:border-gray-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-400">
              {schema.headerBadgeIcon === 'file-text' ? <FileText className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
              {schema.modalBadge}
            </span>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
              aria-label={language === 'de' ? 'Fenster schließen' : 'Close modal'}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      )}

      {isSubmitted ? (
        /* DYNAMIC SUCCESS CONFIRMATION */
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-5 animate-fade-in">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="h-7 w-7" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-200 font-heading">
              {schema.success.title}
            </h3>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
              {schema.success.subtitle}
            </p>
          </div>

          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            {schema.success.isBrochureDownload && schema.success.downloadUrl && (
              <a
                href={schema.success.downloadUrl}
                download="Nordible-Technologies-Corporate-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto px-7 py-3 text-sm font-bold shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>{schema.success.fallbackDownloadText}</span>
              </a>
            )}

            {schema.success.webVersionUrl && (
              <a
                href={schema.success.webVersionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-nordible-blue dark:text-blue-400 hover:underline pt-1"
              >
                <span>{schema.success.webVersionText}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {mode === 'modal' && onClose && schema.success.closeButtonText && (
              <button
                type="button"
                onClick={onClose}
                className={schema.success.isBrochureDownload 
                  ? "mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline cursor-pointer"
                  : "btn-primary w-full sm:w-auto px-7 py-3 text-sm font-bold shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"}
              >
                <span>{schema.success.closeButtonText}</span>
              </button>
            )}

            {!schema.success.isBrochureDownload && schema.success.anotherRequestText && (
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    projectDescription: '',
                    workEmail: '',
                    phone: '',
                    companyWebsite: '',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-xl transition-colors cursor-pointer"
              >
                {schema.success.anotherRequestText}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* DYNAMIC FORM DRIVEN BY SCHEMA */
        <form noValidate onSubmit={handleSubmit} className="space-y-4">
          {/* Header */}
          <div className="space-y-1.5">
            {schema.headerBadge ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 text-xs font-bold font-heading">
                {schema.headerBadgeIcon === 'file-text' ? <FileText className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                <span>{schema.headerBadge}</span>
              </div>
            ) : null}
            <h3 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {schema.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {schema.subtitle}
            </p>
          </div>

          {/* Quick Clickable Chips (if configured) */}
          {schema.chips && schema.chips.length > 0 && (
            <div className="space-y-2">
              {schema.chipsTitle && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                  {schema.chipsTitle}
                </span>
              )}
              <div className="flex flex-wrap gap-2">
                {schema.chips.map((chip) => (
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
          )}

          {/* Dynamic Field Grid */}
          <div className="space-y-3.5">
            {/* Full-width fields */}
            {schema.fields.filter(f => f.colSpan !== 'half').map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label htmlFor={field.id} className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows={field.rows || 3}
                    value={formData[field.id]}
                    onBlur={() => setTouched((p) => ({ ...p, [field.id]: true }))}
                    onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className={`w-full p-4 rounded-2xl border text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                      touched[field.id] && fieldErrors[field.id]
                        ? 'border-red-500 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue'
                    }`}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onBlur={() => setTouched((p) => ({ ...p, [field.id]: true }))}
                    onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${
                      touched[field.id] && fieldErrors[field.id]
                        ? 'border-red-500 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue'
                    }`}
                  />
                )}
                {touched[field.id] && fieldErrors[field.id] && (
                  <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{fieldErrors[field.id]}</span>
                  </p>
                )}
                {field.helperText && (
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block">
                    {field.helperText}
                  </span>
                )}
              </div>
            ))}

            {/* Half-width fields (2-column row) */}
            {schema.fields.filter(f => f.colSpan === 'half').length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {schema.fields.filter(f => f.colSpan === 'half').map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id]}
                      onBlur={() => setTouched((p) => ({ ...p, [field.id]: true }))}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-colors ${
                        touched[field.id] && fieldErrors[field.id]
                          ? 'border-red-500 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-nordible-border dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800 focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue'
                      }`}
                    />
                    {touched[field.id] && fieldErrors[field.id] && (
                      <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{fieldErrors[field.id]}</span>
                      </p>
                    )}
                    {field.helperText && (
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 block">
                        {field.helperText}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
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
              {schema.submitButton.icon === 'download' ? <Download className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              <span>{isSubmitting ? schema.submitButton.submittingLabel : schema.submitButton.label}</span>
            </button>
          </div>

          {/* TRUST REASSURANCES */}
          {schema.trustSignals && schema.trustSignals.length > 0 ? (
            <div className="pt-1 grid sm:grid-cols-3 gap-2 text-left text-[11px] text-gray-500 dark:text-gray-400">
              {schema.trustSignals.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {renderTrustIcon(item.icon)}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ) : null}
        </form>
      )}
    </div>
  );

  if (mode === 'modal') {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`w-full max-w-lg my-auto max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 rounded-3xl shadow-2xl p-5 sm:p-8 relative ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {innerForm}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border-2 border-nordible-blue/20 bg-white dark:bg-gray-900 p-6 sm:p-10 shadow-xl relative text-left ${className}`}>
      {innerForm}
    </div>
  );
}
