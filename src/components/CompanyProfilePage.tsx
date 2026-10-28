'use client';
import { ArrowLeft, ArrowRight, Shield, Zap, Target, Cpu, Server, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from '@/lib/router-compat';

interface CompanyProfilePageProps {
  onBack?: () => void;
  onBookConsultation?: () => void;
}

export default function CompanyProfilePage({ onBack, onBookConsultation }: CompanyProfilePageProps) {
  const navigate = useNavigate();
  const { t, getPath } = useLanguage();
  const a = t.about;

  const handleBack = onBack || (() => navigate(getPath('/')));
  const handleConsultation = onBookConsultation || (() => {
    navigate(getPath('/'));
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });

  const qualityIcons = [Shield, Zap, Target];
  const engineeringIcons = [Server, Cpu, Code2];

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.founderPage.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Nordible Technologies · {a.pageBreadcrumb}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 text-left">
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

        {/* Engineering & Delivery Pillars (SEO: Nearshore Softwareentwicklung & Node.js Architecture) */}
        <div className="space-y-6 text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {a.engineeringPillarsHeading}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
              {a.engineeringPillarsSubheading}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {a.engineeringPillars.map((pillar, index) => {
              const Icon = engineeringIcons[index % engineeringIcons.length];
              return (
                <div key={index} className="card-premium group p-6 flex flex-col justify-between hover:border-nordible-blue/40 transition-all">
                  <div>
                    <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-[10px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-800">
                      {pillar.badge}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3 text-nordible-blue dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-base text-nordible-dark dark:text-white mb-2 font-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Qualities / Principles */}
        <div className="space-y-6 text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {a.coreValuesHeading}
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


        {/* Action Controls at Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-nordible-border dark:border-gray-800">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.founderPage.backToHome}</span>
          </button>

          <button
            type="button"
            onClick={handleConsultation}
            className="btn-primary w-full sm:w-auto text-xs px-7 py-3 min-h-[48px]"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>

      </div>
    </article>
  );
}
