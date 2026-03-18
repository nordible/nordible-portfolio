import React from 'react';
import { Palette, Terminal, TrendingUp, ArrowRight } from 'lucide-react';

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
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From design to deployment and global growth—we build software that drives real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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