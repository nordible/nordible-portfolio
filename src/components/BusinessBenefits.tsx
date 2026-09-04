import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function BusinessBenefits() {
  const { language } = useLanguage();

  return (
    <section id="benefits" className="py-10 bg-nordible-bg dark:bg-gray-900 border-y border-nordible-border dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
            {language === 'de'
              ? 'Entwickelt für messbaren Unternehmenserfolg: +150% ROI, 40h/Woche automatisiert, 10x Skalierbarkeit.'
              : 'Engineered for measurable business impact: +150% ROI, 40h/week saved, and 10x scalability.'}
          </p>

          <Link
            to="/why-choose-us"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-nordible-blue dark:text-blue-400 hover:text-blue-600 transition-colors uppercase tracking-wider shrink-0 group"
          >
            <span>{language === 'de' ? 'Warum Nordible' : 'Why Choose Us'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}