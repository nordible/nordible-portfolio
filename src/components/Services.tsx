import React from 'react';
import { Palette, Terminal, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  const serviceIcons = [Mail, Terminal, Palette];
  const serviceColors = ['bg-nordible-blue', 'bg-indigo-600', 'bg-nordible-dark'];

  return (
    <section id="services" className="relative py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            {s.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white mb-4 tracking-tight font-heading">
            {s.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            {s.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {s.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const color = serviceColors[index % serviceColors.length];

            return (
              <div key={index} className="card-premium group relative flex flex-col h-full hover:border-nordible-blue/30 transition-all duration-500 !p-6 text-left">
                <div className="absolute top-0 right-0 p-4 font-heading text-3xl font-extrabold opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  0{index + 1}
                </div>
                
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 group-hover:text-nordible-blue transition-colors font-heading">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                      <div className="w-1 h-1 bg-nordible-blue rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {service.link ? (
                  <div className="pt-4 border-t border-nordible-border dark:border-gray-700 mt-auto">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-nordible-blue dark:text-blue-400 hover:text-nordible-dark flex items-center transition-colors group/link"
                    >
                      <span>{s.visitProduct}</span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
