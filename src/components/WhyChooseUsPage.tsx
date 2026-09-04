import React from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, DollarSign, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface WhyChooseUsPageProps {
  onBack: () => void;
  onBookConsultation: () => void;
}

export default function WhyChooseUsPage({ onBack, onBookConsultation }: WhyChooseUsPageProps) {
  const { t, language } = useLanguage();
  const bb = t.businessBenefits;
  const navigate = useNavigate();

  const benefitIcons = [DollarSign, Clock, TrendingUp];

  const differentiators = language === 'de' ? [
    {
      title: 'Direkter Gründerzugang',
      desc: 'Keine Account Manager oder Junior-Teams. Sie arbeiten direkt mit Principal Engineers und dem Gründer zusammen.'
    },
    {
      title: 'Wissenschaftsbasiertes UX',
      desc: 'Wir gestalten Benutzeroberflächen nach kognitiven UX-Prinzipien für maximale Konversion und intuitive Bedienung.'
    },
    {
      title: 'Keine technischen Schulden',
      desc: 'Moderne Cloud-Architekturen, saubere Codebases und automatisiertes Deployment für langfristige Skalierbarkeit.'
    }
  ] : [
    {
      title: 'Direct Founder Access',
      desc: 'No middle managers or junior handoffs. You collaborate directly with principal architects and leadership.'
    },
    {
      title: 'Science-Backed UX',
      desc: 'Cognitive interfaces engineered for user conversion, low cognitive load, and thumb-friendly ergonomics.'
    },
    {
      title: 'Zero Technical Debt',
      desc: 'Cloud-native topologies, rigorous typing, automated CI/CD, and architectures built to scale 10x.'
    }
  ];

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
            Nordible Technologies · {language === 'de' ? 'Warum Nordible' : 'Why Choose Us'}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-nordible-blue animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-nordible-blue dark:text-blue-400">
              {language === 'de' ? 'Messbarer Mehrwert' : 'Measurable Commercial Value'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {bb.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl">
            {language === 'de'
              ? 'Wir richten jede Software- und Cloud-Architektur direkt an Ihren Geschäftszielen aus: Umsatzsteigerung, Zeitersparnis und globale Skalierbarkeit.'
              : 'Every architecture we build is engineered directly around business ROI, operational velocity, and long-term technical resilience.'}
          </p>
        </div>

        {/* 3 Core Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {bb.items.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return (
              <div key={index} className="card-premium group relative overflow-hidden flex flex-col justify-between p-8 hover:border-nordible-blue/30 transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-nordible-blue dark:text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-3 font-heading">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="text-xl font-extrabold text-nordible-blue dark:text-blue-400 tracking-tight flex items-center font-heading pt-4 border-t border-nordible-border dark:border-gray-800">
                  <span className="mr-2 opacity-50">{' → '}</span>
                  {benefit.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Nordible Differentiators */}
        <div className="space-y-6 text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {language === 'de' ? 'Der Nordible Vorteil' : 'The Nordible Advantage'}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div key={index} className="card-premium group p-6 flex flex-col hover:border-nordible-blue/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-nordible-blue dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-lg text-nordible-dark dark:text-white mb-2 font-heading">
                  {diff.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
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
