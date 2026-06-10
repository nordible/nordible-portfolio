import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function TrustSignals() {
  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: TrendingUp,
      number: '1M+',
      label: 'Users Served',
      description: 'Across all platforms'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'On-time delivery rate'
    }
  ];

  const companies = [
    { name: 'General Electric', logo: '/images/logos/GeneralElectric_logo.svg' },
    { name: 'NIUM', logo: '/images/logos/InstaRem_logo.svg' },
    { name: 'Vantive', logo: '/images/logos/vantive_logo.jpg' },
    { name: 'The Parent Inc', logo: '/images/logos/TheParentInc-logo.webp' },
    { name: 'Smartek21', logo: '/images/logos/smartek21_logo.png' },
    { name: 'NextServices', logo: '/images/logos/nextservices_logo.png' }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="card-premium group p-10 text-center hover:border-nordible-blue/30 transition-all duration-500">
              <div className="bg-blue-50 dark:bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <stat.icon className="h-10 w-10 text-nordible-blue dark:text-blue-400" />
              </div>
              <div className="text-5xl font-extrabold text-nordible-dark dark:text-white mb-3 tracking-tight font-heading">{stat.number}</div>
              <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
              <div className="text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="relative px-8 py-16 bg-nordible-section-bg dark:bg-gray-800 rounded-[40px] border border-nordible-border dark:border-gray-700 overflow-hidden">
          <div className="relative z-10 text-center mb-16">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-white dark:bg-gray-900 rounded-full border border-blue-100 dark:border-gray-700">
              Global Partnerships
            </div>
            <h3 className="text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
              Trusted by Industry Leaders Worldwide
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-60 hover:opacity-100 transition-opacity relative z-10">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16 group/logo">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 max-w-full object-contain filter grayscale dark:invert dark:opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-500 transform group-hover/logo:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
