import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Award, Terminal, CheckCircle2, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FounderPageProps {
  onBack: () => void;
  onBookConsultation: () => void;
}

export default function FounderPage({ onBack, onBookConsultation }: FounderPageProps) {
  const { t } = useLanguage();
  const f = t.founderPage;

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{f.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Nordible Technologies · {language === 'de' ? 'Gründer-Story' : "Founder's Story"}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {f.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-3xl">
            {f.subtitle}
          </p>
        </div>

        {/* Guiding Philosophy Quote Banner */}
        <div className="bg-nordible-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <p className="text-xl sm:text-2xl text-blue-50 font-medium italic leading-relaxed">
            {f.quote}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/founder.png"
                alt="Kabeer Shah"
                className="h-12 w-12 rounded-full object-cover border-2 border-nordible-blue"
              />
              <div>
                <span className="text-sm font-bold text-white block">
                  {f.quoteAuthor}
                </span>
                <span className="text-xs text-blue-200">
                  {f.quoteRole} · Nordible Technologies
                </span>
              </div>
            </div>

            <span className="font-heading font-extrabold text-lg text-white/90">
              Nordible Technologies
            </span>
          </div>
        </div>

        {/* Main Narrative Block & Executive Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 text-left">
          
          {/* Left Column: Portrait, Credentials & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 shadow-md p-4 flex flex-col items-center">
              <img
                src="/images/founder-transparent.png"
                alt="Kabeer Shah - Founder"
                className="w-full max-h-[380px] object-contain"
              />
              <div className="mt-4 text-center w-full pt-4 border-t border-nordible-border dark:border-gray-700">
                <div className="text-lg font-extrabold text-nordible-dark dark:text-white font-heading">
                  Kabeer Shah
                </div>
                <div className="text-xs font-bold text-nordible-blue uppercase tracking-wider mt-0.5">
                  Founder &amp; Head of Client Success
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Frankfurt, Germany
                </div>
              </div>
            </div>

            {/* Quick Credentials Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-400">
                Key Credentials
              </h4>
              <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>15+ Years</strong> in software engineering &amp; systems architecture</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>AWS Certified</strong> Solutions Architect</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Briefcase className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>Fortune 500 &amp; Fintech Unicorn</strong> tech leadership (GE, Nium)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Terminal className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>Stack Overflow Top 32k</strong> Contributor worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: In-depth Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-premium p-8 space-y-5">
              <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white font-heading">
                {f.introTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP1}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP2}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP3}
              </p>
            </div>

            {/* Core Values */}
            <div className="card-premium p-8 space-y-5">
              <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
                {f.valuesTitle}
              </h3>
              <div className="space-y-4">
                {f.values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="h-6 w-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-nordible-dark dark:text-white">{v.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{v.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Milestones & Leadership Journey */}
        <div className="pt-8 space-y-8 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {f.milestonesTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              {f.milestonesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {f.milestones.map((m, i) => (
              <div key={i} className="card-premium p-6 space-y-4 hover:border-nordible-blue/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-nordible-blue uppercase tracking-widest">{m.period}</div>
                  <h3 className="text-lg font-bold text-nordible-dark dark:text-white font-heading">{m.role}</h3>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{m.company}</div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                    {m.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-nordible-border dark:border-gray-800">
                  {m.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-nordible-border dark:border-gray-800">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{f.backToHome}</span>
          </button>

          <button
            type="button"
            onClick={onBookConsultation}
            className="btn-primary w-full sm:w-auto text-xs px-7 py-3"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>

      </div>
    </article>
  );
}
