'use client';

import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Video,
  Cpu,
  Layers,
  Workflow,
  MailCheck,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getAllServices, ServiceItem } from '../data/services';

const ICON_MAP: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Video,
  Cpu,
  Layers,
  Workflow,
  MailCheck,
};

const COLOR_MAP: Record<ServiceItem['iconName'], string> = {
  TrendingUp: 'bg-blue-600',
  Video: 'bg-purple-600',
  Cpu: 'bg-indigo-600',
  Layers: 'bg-emerald-600',
  Workflow: 'bg-nordible-dark',
  MailCheck: 'bg-nordible-blue',
};

export default function Services() {
  const { t, language, getPath } = useLanguage();
  const isDe = language === 'de';
  const services = getAllServices();
  const marqueeServices = [...services, ...services];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {t.services.title}
          </h2>
        </div>

        {/* Moving Service Titles Marquee — Full Details Live on Each Dedicated Service Page */}
        <div className="relative overflow-hidden w-full py-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none" />

          <div
            className="animate-marquee flex items-center space-x-4 sm:space-x-6 py-2 hover:[animation-play-state:paused]"
            style={{ animationDuration: '34s' }}
          >
            {marqueeServices.map((service, index) => {
              const isDuplicate = index >= services.length;
              const Icon = ICON_MAP[service.iconName] || Layers;
              const color = COLOR_MAP[service.iconName] || 'bg-nordible-blue';
              const title = isDe ? service.nameDe : service.nameEn;

              return (
                <Link
                  key={`${service.slug}-${index}`}
                  to={getPath(`/services/${service.slug}`)}
                  aria-hidden={isDuplicate ? true : undefined}
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="group shrink-0 inline-flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm hover:border-nordible-blue/50 hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className={`${color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-nordible-dark dark:text-white font-heading whitespace-nowrap group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-nordible-blue dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
