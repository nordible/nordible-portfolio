import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function InvestmentModelsTeaser() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="py-12 bg-nordible-bg dark:bg-gray-900 border-y border-nordible-border dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 dark:from-gray-800 dark:via-gray-800/80 dark:to-blue-900/20 border border-blue-100 dark:border-gray-700 shadow-sm">
          
          <div className="flex items-start sm:items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6 text-nordible-blue dark:text-blue-400" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 mb-1.5 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-100/60 dark:bg-blue-900/50 rounded-full">
                {p.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium max-w-xl">
                {p.teaserText}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 text-left md:text-right">
            <Link
              to="/investment-models"
              className="btn-primary w-full md:w-auto shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 group text-xs"
            >
              <span>{p.exploreModels}</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
