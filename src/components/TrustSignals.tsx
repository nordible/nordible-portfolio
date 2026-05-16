import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function TrustSignals() {
  const stats = [
    // {
    //   icon: Code,
    //   number: '13+',
    //   label: 'Years Experience',
    //   description: 'Building web applications'
    // },
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
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="tech-card group p-8 rounded-2xl text-center transition-all duration-300 hover:border-purple-500/50 dark:hover:border-green-500/50 relative overflow-hidden notch-tl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-green-600 dark:to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-50 dark:bg-green-900/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner notch-tl">
                <stat.icon className="h-10 w-10 text-purple-600 dark:text-green-400" />
              </div>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-tighter">{stat.number}</div>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-3">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="relative px-8 py-12 bg-slate-50 dark:bg-green-900/10 rounded-3xl border border-gray-100 dark:border-green-900/30 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10"></div>
          <div className="relative z-10 text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 dark:text-green-500 uppercase">
              Trusted By Industry Leaders
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Global Partnerships & Collaborations
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity relative z-10">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16 group/logo">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain filter grayscale dark:invert dark:opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-500 transform group-hover/logo:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
