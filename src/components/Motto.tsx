'use client';

import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const mottoIcons = [Target, Users, TrendingUp];
const accentStyles = [
  {
    iconBg: 'bg-blue-50 dark:bg-blue-950/50 text-nordible-blue dark:text-blue-400 border-blue-200/60 dark:border-blue-900/50',
    tagColor: 'text-nordible-blue dark:text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
  },
  {
    iconBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-900/50',
    tagColor: 'text-amber-600 dark:text-amber-400',
    hoverBorder: 'hover:border-amber-500/40',
  },
  {
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-900/50',
    tagColor: 'text-emerald-600 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/40',
  },
];

export default function Motto() {
  const { t } = useLanguage();
  const m = t.motto;

  return (
    <section id="leitbild" className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 border-y border-nordible-border dark:border-gray-800 scroll-mt-20 overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(56,189,248,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-xs font-mono font-semibold text-nordible-blue dark:text-blue-400 tracking-wider uppercase mb-4 shadow-sm">
            <span>{m.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading mb-4">
            <span>
              {m.title}
              <span className="text-nordible-blue">{m.titleHighlight}</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            {m.subtitle}
          </p>
        </div>

        {/* 3-Pillar Cards Grid (Miller's Law Chunking) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {m.items.map((item, index) => {
            const Icon = mottoIcons[index % mottoIcons.length];
            const styling = accentStyles[index % accentStyles.length];

            return (
              <div
                key={index}
                className={`card-premium relative p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group ${styling.hoverBorder} hover:shadow-lg`}
              >
                <div>
                  {/* Top Metadata & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-bold tracking-wider uppercase ${styling.tagColor}`}>
                      {item.tag}
                    </span>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${styling.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Motto Headline */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Motto Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom decorative progress bar */}
                <div className="mt-8 pt-4 border-t border-nordible-border/60 dark:border-gray-800">
                  <div className="h-1 w-8 rounded-full bg-nordible-blue/30 group-hover:w-full group-hover:bg-nordible-blue transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
