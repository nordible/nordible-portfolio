import React from 'react';
import { DollarSign, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BusinessBenefits() {
  const { t } = useLanguage();
  const bb = t.businessBenefits;

  const benefitIcons = [DollarSign, Clock, TrendingUp];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            {bb.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            {bb.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            {bb.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
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

        <div className="mt-16 rounded-3xl p-10 sm:p-12 bg-nordible-dark text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {t.founderPage.ctaHeading}
            </h3>
            <p className="text-base text-blue-100 font-medium">
              {t.founderPage.ctaSubtitle}
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToConsultation}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 shadow-xl"
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}