import React from 'react';
import { Palette, Terminal, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Product Design & Strategy',
      description: 'We design high-impact software products with a focus on science-backed UX and strategic growth.',
      features: ['UI/UX Design', 'User Research', 'Product Strategy', 'Brand Identity'],
      color: 'bg-purple-500'
    },
    {
      icon: Terminal,
      title: 'Software Engineering',
      description: 'Building scalable, high-performance applications for Web, Mobile, and Cloud environments.',
      features: ['Web & Mobile Apps', 'Scalable Backend', 'Cloud Infrastructure', 'API Systems'],
      color: 'bg-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Marketing',
      description: 'Driving product adoption and user retention through data-driven growth strategies.',
      features: ['SEO & SEM', 'Conversion Optimization', 'Product Analytics', 'Market Strategy'],
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-mono font-medium tracking-[0.2em] text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800">
            Core Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            From design to deployment and global growth—we build software that drives real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group tech-card rounded-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden notch-tl">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                0{index + 1}
              </div>
              
              <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 notch-tl`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}