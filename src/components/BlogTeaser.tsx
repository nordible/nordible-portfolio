import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogTeaser() {
  const { language } = useLanguage();

  return (
    <section id="insights" className="py-10 bg-nordible-bg dark:bg-gray-900 border-y border-nordible-border dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm hover:border-nordible-blue/40 transition-colors">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 rounded-xl shrink-0 hidden sm:flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-0.5">
                {language === 'de' ? 'Wissen & Analysen' : 'Engineering Insights'}
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                {language === 'de'
                  ? 'Praxisnahe Fachartikel zu GEO, KI-Auffindbarkeit und moderner Software-Architektur.'
                  : 'Actionable deep dives on Generative Engine Optimization (GEO), AI discoverability, and scalable architectures.'}
              </p>
            </div>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-nordible-blue dark:text-blue-400 hover:text-blue-600 transition-colors uppercase tracking-wider shrink-0 group"
          >
            <span>{language === 'de' ? 'Blog & Artikel lesen' : 'Explore Insights & Blog'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
