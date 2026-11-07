'use client';

import React, { useMemo } from 'react';
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Cpu,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import StepQuestionnaire from './StepQuestionnaire';
import { getBrochurePageTranslations } from '../config/questionnaireConfig';

export default function BrochurePage() {
  const { language } = useLanguage();
  const t = useMemo(() => getBrochurePageTranslations(language), [language]);

  const highlightIcons = {
    tech: Cpu,
    caseStudies: Layers,
    pricing: BarChart3,
  };

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 text-xs font-bold font-heading mb-4">
            <Sparkles className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-300" />
            <span>{t.headerBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
            {t.title}{' '}
            <span className="text-nordible-blue dark:text-blue-400">{t.titleYear}</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase: Left = Visual Preview & What's Inside, Right = Gated Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Brochure Card & Feature Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-nordible-dark via-slate-900 to-[#0A192F] p-7 text-white shadow-2xl border border-white/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {t.cardBadge}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-blue-300 uppercase tracking-wider">
                  {t.cardBrand}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading">
                  {t.cardTitle}
                </h2>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  {t.cardDesc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>{t.cardMeta}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t.cardFree}
                </span>
              </div>
            </div>

            {/* What's Inside List */}
            <div className="rounded-3xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider font-mono">
                {t.insideTitle}
              </h3>

              <div className="space-y-3.5">
                {t.highlights.map((item) => {
                  const Icon = highlightIcons[item.key] || Cpu;
                  return (
                    <div key={item.key} className="flex items-start gap-3 text-left">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-nordible-blue dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 text-center">
                <a
                  href="/brochure.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-nordible-blue dark:text-blue-400 hover:underline"
                >
                  <span>{t.previewWeb}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Reusable Lead Capture Form in Inline Mode */}
          <div className="lg:col-span-7">
            <StepQuestionnaire
              mode="inline"
              sourceContext="brochure"
              className="shadow-2xl"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
