'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioProjects } from '../data/portfolioProjects';

export default function Portfolio() {
  const { t, language, getPath } = useLanguage();
  const isDe = language === 'de';
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const marqueeProjects = [...portfolioProjects, ...portfolioProjects];

  return (
    <section
      id="portfolio"
      className="relative py-14 sm:py-20 bg-nordible-bg dark:bg-gray-900 overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {t.portfolio.title && (
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
              {t.portfolio.title}
            </h2>
          </div>
        )}

        {/* Moving Client Results Carousel: Client Logo, Client Name, Case Study Title & Link */}
        <div className="relative overflow-hidden w-full py-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nordible-bg dark:from-gray-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nordible-bg dark:from-gray-900 to-transparent z-20 pointer-events-none" />

          <div
            className="animate-marquee flex items-stretch space-x-5 sm:space-x-6 py-2 hover:[animation-play-state:paused]"
            style={{ animationDuration: '55s' }}
          >
            {marqueeProjects.map((project, index) => {
              const isDuplicate = index >= portfolioProjects.length;
              const caseStudyTitle = isDe ? project.heroHeadline.de : project.heroHeadline.en;
              const hasLogo = Boolean(project.logo) && !imageErrors.has(project.id);

              return (
                <Link
                  key={`${project.id}-${index}`}
                  to={getPath(`/blog/${project.caseStudySlug}`)}
                  aria-hidden={isDuplicate ? true : undefined}
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="card-premium group p-5 sm:p-6 flex flex-col justify-between gap-4 w-[280px] sm:w-[320px] md:w-[340px] shrink-0 text-left hover:border-nordible-blue/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-3.5">
                    {/* Client Logo + Client Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-gray-800 border border-nordible-border dark:border-gray-700 flex items-center justify-center p-1.5 shrink-0">
                        {hasLogo ? (
                          <img
                            src={project.logo}
                            alt={project.client}
                            loading="lazy"
                            className="max-w-full max-h-full object-contain"
                            onError={() => {
                              setImageErrors((prev) => new Set(prev).add(project.id));
                            }}
                          />
                        ) : (
                          <span className="text-sm font-extrabold font-heading text-nordible-blue dark:text-blue-400">
                            {project.client.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-nordible-blue dark:text-blue-400 block truncate">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Corresponding Case Study Title */}
                    <h3 className="text-sm font-bold text-nordible-dark dark:text-white font-heading leading-snug line-clamp-3 group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                      {caseStudyTitle}
                    </h3>
                  </div>

                  {/* Case Study Link */}
                  <div className="pt-3 border-t border-nordible-border dark:border-gray-800 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                    <span>{isDe ? 'Fallstudie ansehen' : 'Read Case Study'}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Direct Connection to Case Studies Hub */}
        <div className="mt-10 text-center">
          <Link
            to={getPath('/blog')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-nordible-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
          >
            <span>{isDe ? 'Alle Fallstudien im Überblick' : 'Explore All Case Studies'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
