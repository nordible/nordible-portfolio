import React, { useState } from 'react';
import { Award, Users, TrendingUp, Clock, Play, Pause, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TrustSignals() {
  const { t } = useLanguage();
  const ts = t.trustSignals;
  const [isPaused, setIsPaused] = useState(false);

  const statIcons = [Clock, Users, TrendingUp, Award];

  const companies = [
    { name: 'Schams Design Studio', logo: '/images/logos/shams-consult-logo.png', website: 'https://shams-consult.de/' },
    { name: 'Bombay Studio', logo: '/images/logos/bombay-studio-logo.png', website: 'https://www.bombaystudio.in/' },
    { name: 'General Electric', logo: '/images/logos/GeneralElectric_logo.svg', website: 'https://www.gehealthcare.com' },
    { name: 'NIUM', logo: '/images/logos/InstaRem_logo.svg', website: 'https://www.nium.com' },
    { name: 'Vantive', logo: '/images/logos/vantive_logo.jpg', website: 'https://www.vantive.com' },
    { name: 'The Parent Inc', logo: '/images/logos/TheParentInc-logo.webp', website: 'https://theparentinc.com' },
    { name: 'Smartek21', logo: '/images/logos/smartek21_logo.png', website: 'https://smartek21.com' },
    { name: 'NextServices', logo: '/images/logos/nextservices_logo.png', website: 'https://www.nextservices.com' }
  ];

  // Duplicate for seamless infinite loop
  const marqueeCompanies = [...companies, ...companies];

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Partnership Statement directly below Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {ts.title}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ts.stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div key={index} className="card-premium group p-8 text-center hover:border-nordible-blue/30 transition-all duration-500">
                <div className="bg-blue-50 dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="h-8 w-8 text-nordible-blue dark:text-blue-400" />
                </div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white mb-2 tracking-tight font-heading">{stat.number}</div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Continuous Moving Logos */}
        <div className="relative px-6 py-14 bg-nordible-section-bg dark:bg-gray-800 rounded-[36px] border border-nordible-border dark:border-gray-700 overflow-hidden">
          <div className="relative z-10 text-center mb-10">
            <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-white dark:bg-gray-900 rounded-full border border-blue-100 dark:border-gray-700">
              {ts.partnersBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {ts.partnersTitle}
            </h3>
          </div>

          {/* Marquee Container with Gradient Fade Edges */}
          <div className="relative overflow-hidden w-full py-4">
            {/* Left/Right Subtle Gradient Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>

            <div className={`animate-marquee flex items-center space-x-12 sm:space-x-16 ${isPaused ? 'paused' : ''}`}>
              {marqueeCompanies.map((company, index) => (
                <a
                  key={index}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center h-20 px-4 group/logo relative"
                  title={`${company.name} (Visit website)`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-11 sm:max-h-12 max-w-[170px] sm:max-w-[200px] object-contain filter grayscale opacity-60 dark:invert dark:opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                  />
                  <span className="absolute -top-2 -right-1 opacity-0 group-hover/logo:opacity-100 transition-opacity p-1 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-nordible-border dark:border-gray-700">
                    <ExternalLink className="h-3 w-3 text-nordible-blue dark:text-blue-400" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Subtle Control */}
          <div className="mt-8 flex justify-center items-center">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 text-[11px] font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              {isPaused ? (
                <>
                  <Play className="h-3 w-3 text-nordible-blue dark:text-blue-400" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="h-3 w-3 text-nordible-blue dark:text-blue-400" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
