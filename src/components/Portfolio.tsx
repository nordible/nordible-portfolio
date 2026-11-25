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

        {/* Clean Client Results Grid: Only Client Logo, Client Name, Case Study Title & Case Study Link */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
          {portfolioProjects.map((project) => {
            const caseStudyTitle = isDe ? project.heroHeadline.de : project.heroHeadline.en;
            const hasLogo = Boolean(project.logo) && !imageErrors.has(project.id);

            return (
              <Link
                key={project.id}
                to={getPath(`/blog/${project.caseStudySlug}`)}
                className="card-premium group p-5 flex flex-col justify-between gap-4 hover:border-nordible-blue/50 hover:shadow-lg transition-all duration-300"
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
