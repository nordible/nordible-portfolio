import React from 'react';
import { Palette, Terminal, Mail, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Mail,
      title: 'Business Email',
      description: 'Professional business email hosting with custom domains, top-tier security, and effortless migration.',
      features: ['Custom Domains', 'Spam Protection', 'Zero-Downtime Migration', '24/7 Expert Support'],
      color: 'bg-nordible-blue',
      link: 'https://email.nordible.co/'
    },
    {
      icon: Terminal,
      title: 'Technology Solutions',
      description: 'Building scalable, high-performance applications for Web, Mobile, and Cloud environments.',
      features: ['Web & Mobile Apps', 'Scalable Backend', 'API Systems', 'Cloud-Native Architecture'],
      color: 'bg-indigo-600'
    },
    {
      icon: Palette,
      title: 'Enterprise Solutions',
      description: 'Developing robust digital platforms that streamline operations and drive business efficiency.',
      features: ['Workflow Automation', 'Data Architecture', 'System Integration', 'Custom ERP/CRM'],
      color: 'bg-nordible-dark'
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white mb-4 tracking-tight font-heading">
            Our Expertise
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            From design to deployment and global growth—we engineer technology solutions that drive real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-premium group relative flex flex-col h-full hover:border-nordible-blue/30 transition-all duration-500 !p-6">
              <div className="absolute top-0 right-0 p-4 font-heading text-3xl font-extrabold opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                0{index + 1}
              </div>
              
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 group-hover:text-nordible-blue transition-colors font-heading">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-[11px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                    <span className="h-1 w-1 rounded-full bg-nordible-blue dark:bg-blue-500"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {service.link && (
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nordible-blue font-bold text-[11px] uppercase tracking-widest flex items-center hover:translate-x-2 transition-all"
                >
                  Visit Product <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
