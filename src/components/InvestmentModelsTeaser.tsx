'use client';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function InvestmentModelsTeaser() {
  const { t, getPath } = useLanguage();
  const p = t.pricing;

  return (
    <section id="investment-models" className="relative py-14 bg-nordible-section-bg dark:bg-gray-800/60 border-y border-nordible-border dark:border-gray-800 scroll-mt-20">
      <div id="pricing" className="absolute top-0 pointer-events-none scroll-mt-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Clean & Centered */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {p.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 text-left">
          {p.tiers.map((tier, idx) => (
            <div
              key={idx}
              className="card-premium p-6 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 hover:border-nordible-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-nordible-blue dark:text-blue-400 mb-1">
                  {tier.duration}
                </div>
                <h3 className="text-lg font-extrabold text-nordible-dark dark:text-white font-heading mb-2">
                  {tier.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                {tier.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <Link
            to={getPath('/investment-models')}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-nordible-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group min-h-[44px]"
          >
            <span>{p.exploreModels}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
