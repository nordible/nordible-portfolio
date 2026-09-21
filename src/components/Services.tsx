'use client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Mail, ArrowRight, TrendingUp, Play, Pause, ChevronLeft, ChevronRight, Video, Bot, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionAnchor from './SectionAnchor';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  const serviceIcons = [TrendingUp, Video, Bot, Terminal, Cpu, Mail];
  const serviceColors = ['bg-blue-600', 'bg-purple-600', 'bg-indigo-600', 'bg-emerald-600', 'bg-nordible-dark', 'bg-nordible-blue'];

  const marqueeServices = [...s.items, ...s.items];

  return (
    <section id="services" className="relative py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="group inline-flex items-center justify-center gap-2 text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            <span>{s.title}</span>
            <SectionAnchor id="services" />
          </h2>
        </div>

        {/* Dynamic Moving Cards Track */}
        <div className="relative overflow-hidden w-full py-4">
          {/* Subtle Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>

          <div
            className={`animate-marquee flex items-stretch space-x-6 py-2 ${isPaused ? 'paused' : ''}`}
            style={{ animationDuration: '40s', animationDirection: direction }}
          >
            {marqueeServices.map((service, index) => {
              const originalIndex = index % s.items.length;
              const Icon = serviceIcons[originalIndex % serviceIcons.length];
              const color = serviceColors[originalIndex % serviceColors.length];

              return (
                <div
                  key={index}
                  className="card-premium group relative flex flex-col w-[320px] sm:w-[360px] md:w-[380px] shrink-0 hover:border-nordible-blue/30 transition-all duration-500 !p-6 text-left"
                >
                  <div className="absolute top-0 right-0 p-4 font-heading text-3xl font-extrabold opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    0{originalIndex + 1}
                  </div>

                  <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 font-heading">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed font-medium flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-nordible-border dark:border-gray-700/50">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-nordible-blue dark:bg-blue-400 mr-2 shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    {service.link ? (
                      service.link.startsWith('http') ? (
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold text-nordible-blue dark:text-blue-400 hover:text-nordible-blue/80 dark:hover:text-blue-300 transition-colors uppercase tracking-wider group/link"
                        >
                          <span>{s.visitProduct || 'Visit Product'}</span>
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-xs font-bold text-nordible-blue dark:text-blue-400 hover:text-nordible-blue/80 dark:hover:text-blue-300 transition-colors uppercase tracking-wider group/link"
                        >
                          <span>{s.visitProduct || 'Visit Product'}</span>
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const element = document.getElementById('consultation');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center text-xs font-bold text-nordible-blue dark:text-blue-400 hover:text-nordible-blue/80 dark:hover:text-blue-300 transition-colors uppercase tracking-wider group/link cursor-pointer"
                      >
                        <span>{s.inquireService || 'Discuss Solution'}</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accessible UX Motion Controls (Subtle Left, Pause/Play, Right) */}
        <div className="mt-8 flex justify-center items-center">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm">
            <button
              onClick={() => {
                setDirection('reverse');
                setIsPaused(false);
              }}
              aria-label="Move left"
              title="Move left"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'reverse' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume movement' : 'Pause movement'}
              title={isPaused ? 'Resume movement' : 'Pause movement'}
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
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
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
