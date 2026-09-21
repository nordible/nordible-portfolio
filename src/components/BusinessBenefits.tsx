'use client';
import { useState } from 'react';
import { ArrowRight, Zap, Award, ShieldCheck, Target, CheckCircle2, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SectionAnchor from './SectionAnchor';

const benefitIcons = [Zap, Award, ShieldCheck, Target, CheckCircle2];

export default function BusinessBenefits() {
  const { t, language, getPath } = useLanguage();
  const bb = t.businessBenefits;
  const isDe = language === 'de';
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  const marqueeBenefits = [...bb.items, ...bb.items];

  return (
    <section id="benefits" className="relative py-16 sm:py-20 bg-nordible-bg dark:bg-gray-900 border-y border-nordible-border dark:border-gray-800 overflow-hidden scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Clean & Centered */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="group inline-flex items-center justify-center gap-2 text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            <span>{bb.title}</span>
            <SectionAnchor id="benefits" />
          </h2>
        </div>

        {/* Dynamic Moving Cards Track */}
        <div className="relative overflow-hidden w-full py-2">
          {/* Subtle Left/Right Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nordible-bg dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nordible-bg dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

          <div
            className={`animate-marquee flex items-stretch space-x-6 py-2 ${isPaused ? 'paused' : ''}`}
            style={{ animationDuration: '36s', animationDirection: direction }}
          >
            {marqueeBenefits.map((item, idx) => {
              const Icon = benefitIcons[idx % benefitIcons.length];
              return (
                <div
                  key={idx}
                  className="card-premium p-6 sm:p-7 text-left flex flex-col justify-between hover:border-nordible-blue/40 transition-all shadow-sm rounded-2xl group w-[280px] sm:w-[320px] md:w-[340px] shrink-0"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 mb-2 font-mono">
                      {item.metric}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-nordible-dark dark:text-white font-heading mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle Carousel Controls */}
        <div className="flex justify-center items-center mt-6">
          <div className="inline-flex items-center space-x-1.5 p-1 rounded-full bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 shadow-sm">
            <button
              onClick={() => {
                setDirection('reverse');
                setIsPaused(false);
              }}
              aria-label="Move left"
              title="Move left"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'reverse' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
              title={isPaused ? "Resume movement" : "Pause movement"}
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>

            <button
              onClick={() => {
                setDirection('normal');
                setIsPaused(false);
              }}
              aria-label="Move right"
              title="Move right"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'normal' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <Link
            to={getPath('/why-choose-us')}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-nordible-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
          >
            <span>{isDe ? 'Warum Nordible wählen' : 'Explore Why Choose Us'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}