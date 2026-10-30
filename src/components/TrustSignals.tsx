'use client';
import { Award, Users, TrendingUp, ExternalLink, Zap, ShieldCheck, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TrustSignals() {
  const { t } = useLanguage();
  const ts = t.trustSignals;

  const statIcons = [Award, TrendingUp, Users, Zap, ShieldCheck, UserCheck];

  const companies = [
    { name: 'General Electric', logo: '/images/logos/GeneralElectric_logo.svg', website: 'https://www.gehealthcare.com' },
    { name: 'NIUM', logo: '/images/logos/InstaRem_logo.svg', website: 'https://www.nium.com' },
    { name: 'Vantive', logo: '/images/logos/vantive_logo.jpg', website: 'https://www.vantive.com' },
    { name: 'The Parent Inc', logo: '/images/logos/TheParentInc-logo.webp', website: 'https://theparentinc.com' },
    { name: 'Smartek21', logo: '/images/logos/smartek21_logo.png', website: 'https://smartek21.com' },
    { name: 'NextServices', logo: '/images/logos/nextservices_logo.png', website: 'https://www.nextservices.com' },
    { name: 'BUNS 069', logo: '/images/logos/buns069-logo.webp', website: 'https://www.buns069.de/' },
    { name: 'Schams Design Studio', logo: '/images/logos/shams-consult-logo.png', website: 'https://shams-consult.de/' },
    { name: 'Bombay Studio', logo: '/images/logos/bombay-studio-logo.png', website: 'https://www.bombaystudio.in/' }
  ];

  // Duplicate for seamless infinite loop
  const marqueeStats = [...ts.stats, ...ts.stats];
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

        {/* Stats - Dynamic Continuous Single-Line Moving Track */}
        <div className="relative overflow-hidden w-full py-4 mb-16">
          {/* Subtle Left/Right Gradient Mask for Depth & Frictionless Visual Flow */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

          <div
            className="animate-marquee flex items-stretch space-x-5 sm:space-x-6 py-2 hover:[animation-play-state:paused]"
            style={{ animationDuration: '36s' }}
          >
            {marqueeStats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div
                  key={index}
                  className="card-premium group p-5 sm:p-7 text-center hover:border-nordible-blue/30 transition-all duration-500 w-[240px] sm:w-[280px] shrink-0 flex flex-col justify-center"
                >
                  <div className="bg-blue-50 dark:bg-gray-800 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-nordible-blue dark:text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-nordible-dark dark:text-white mb-1.5 tracking-tight font-heading">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.15em] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Continuous Moving Logos */}
        <div className="relative px-6 py-10 bg-nordible-section-bg dark:bg-gray-800 rounded-[36px] border border-nordible-border dark:border-gray-700 overflow-hidden">
          {ts.clientsHeading && (
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
                {ts.clientsHeading}
              </h3>
            </div>
          )}

          {/* Marquee Container with Gradient Fade Edges */}
          <div className="relative overflow-hidden w-full py-4">
            {/* Left/Right Subtle Gradient Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>

            <div
              className="animate-marquee flex items-center space-x-12 sm:space-x-16 hover:[animation-play-state:paused]"
              style={{ animationDuration: '32s' }}
            >
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
                    width={160}
                    height={48}
                    loading="lazy"
                    className="max-h-11 sm:max-h-12 max-w-[170px] sm:max-w-[200px] object-contain filter grayscale opacity-60 dark:invert dark:opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                  />
                  <span className="absolute -top-2 -right-1 opacity-0 group-hover/logo:opacity-100 transition-opacity p-1 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-nordible-border dark:border-gray-700">
                    <ExternalLink className="h-3 w-3 text-nordible-blue dark:text-blue-400" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
