import React from 'react';
import { ArrowLeft, ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface CompanyProfilePageProps {
  onBack: () => void;
  onBookConsultation: () => void;
}

export default function CompanyProfilePage({ onBack, onBookConsultation }: CompanyProfilePageProps) {
  const { t, language } = useLanguage();
  const a = t.about;
  const navigate = useNavigate();

  const qualityIcons = [Shield, Zap, Target];

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.founderPage.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Nordible Technologies · {a.badge}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-nordible-blue animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-nordible-blue dark:text-blue-400">
              {a.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {a.title} <span className="text-nordible-blue">{a.titleHighlight}</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl">
            <p>{a.desc1}</p>
            <p>{a.desc2}</p>
          </div>
        </div>

        {/* Key Metrics Ribbon */}
        <div className="grid grid-cols-2 gap-8 py-8 px-8 rounded-3xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm text-center sm:text-left">
          <div className="border-r border-nordible-border dark:border-gray-700 pr-4 sm:pr-8">
            <div className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {a.stat1Number}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
              {a.stat1Label}
            </div>
          </div>
          <div className="pl-4 sm:pr-8">
            <div className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {a.stat2Number}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
              {a.stat2Label}
            </div>
          </div>
        </div>

        {/* Core Qualities / Principles */}
        <div className="space-y-6 text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {language === 'de' ? 'Unsere Kernwerte' : 'Core Operating Principles'}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {a.qualities.map((quality, index) => {
              const Icon = qualityIcons[index % qualityIcons.length];
              return (
                <div key={index} className="card-premium group p-6 flex flex-col hover:border-nordible-blue/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-nordible-blue dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-nordible-dark dark:text-white mb-2 font-heading">
                    {quality.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founder Story Link Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-nordible-dark via-blue-950 to-nordible-dark text-white p-8 sm:p-10 shadow-xl overflow-hidden text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                {a.founderStoryLinkBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                {a.founderStoryLinkTitle}
              </h3>
              <p className="text-sm text-blue-100/80 font-medium leading-relaxed">
                {a.founderStoryLinkDesc}
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/founder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs px-6 py-3 shrink-0 shadow-lg cursor-pointer"
            >
              <span>{a.founderStoryLinkButton}</span>
            </button>
          </div>
        </div>

        {/* Action Controls at Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-nordible-border dark:border-gray-800">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.founderPage.backToHome}</span>
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
