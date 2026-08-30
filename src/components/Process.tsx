import React from 'react';
import { Search, Palette, Code, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Process() {
  const { t } = useLanguage();
  const pr = t.process;

  const stepIcons = [Search, Palette, Code, TrendingUp];

  return (
    <section id="process" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            {pr.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            {pr.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            {pr.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 relative text-left">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28%] left-0 w-full h-0.5 bg-nordible-border dark:bg-gray-700 -z-0"></div>
          
          {pr.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div key={index} className="relative group z-10">
                <div className="card-premium h-full flex flex-col hover:border-nordible-blue/30 transition-all duration-500 p-8">
                  <div className="absolute top-4 right-4 font-heading text-4xl font-extrabold text-gray-200 dark:text-gray-700 opacity-60">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-nordible-blue dark:text-blue-400" />
                  </div>
                
                  <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 font-heading">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card-premium p-10 relative overflow-hidden bg-nordible-dark text-white border-0 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { label: 'Response Time', value: '24h', sub: 'Rapid Direct Sync' },
              { label: 'Delivery Rate', value: '100%', sub: 'On-Time Excellence' },
              { label: 'Founder Lead', value: 'Direct', sub: 'No Middlemen' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l border-white/10 md:pl-10 first:border-0 first:pl-0">
                <div className="text-[10px] text-blue-300 uppercase tracking-[0.2em] mb-2 font-bold">{stat.label}</div>
                <div className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight font-heading">{stat.value}</div>
                <div className="text-xs text-blue-100/60 font-bold uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
