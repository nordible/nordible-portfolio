import React from 'react';
import { Search, Palette, Code, TrendingUp, Clock } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Strategy & Discovery',
      duration: '1-3 days',
      description: 'We define the product vision, market fit, and technical roadmap.',
      details: ['Market analysis', 'Product roadmap', 'Technical architecture']
    },
    {
      icon: Palette,
      title: 'Design & UX',
      duration: '1-2 weeks',
      description: 'Crafting science-backed interfaces focused on user behavior and psychology.',
      details: ['User psychology UX', 'Interactive prototypes', 'Visual design system']
    },
    {
      icon: Code,
      title: 'Engineering',
      duration: '2-12 weeks',
      description: 'Building robust, scalable applications for Web, Mobile, and Cloud.',
      details: ['Cross-platform dev', 'Scalable backend', 'Automated testing']
    },
    {
      icon: TrendingUp,
      title: 'Growth & Marketing',
      duration: 'Ongoing',
      description: 'Deploying and scaling your product with data-driven growth strategies.',
      details: ['Cloud deployment', 'Growth analytics', 'Market optimization']
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Development Pipeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            How We Build Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            A robust, engineering-led process that ensures your product is built for scale and success.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-nordible-border dark:bg-gray-700 -z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative group z-10">
              <div className="card-premium h-full flex flex-col hover:border-nordible-blue/30 transition-all duration-500">
                <div className="absolute -top-4 -right-4 font-heading text-5xl font-extrabold opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  0{index + 1}
                </div>
                
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                    <img src={index === 0 ? "/images/mascot/mail-sorting.webp" : index === 1 ? "/images/mascot/working-laptop.webp" : index === 2 ? "/images/mascot/working-laptop.webp" : "/images/mascot/mail-send.webp"} alt="" className="w-full h-full object-contain" />
                  </div>
                
                  <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 font-heading">{step.title}</h3>
                  
                  <div className="flex items-center space-x-2 mb-6 bg-blue-50 dark:bg-gray-700/50 w-fit px-3 py-1 rounded-full">
                    <Clock className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
                    <span className="text-[10px] text-nordible-blue dark:text-blue-400 font-extrabold uppercase tracking-widest">{step.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm font-medium leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3 mt-auto">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">
                        <div className="h-1.5 w-1.5 rounded-full bg-nordible-blue dark:bg-blue-500"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-premium p-10 relative overflow-hidden bg-nordible-dark text-white border-0">
          <div className="absolute top-0 right-0 p-8 font-heading text-[100px] font-extrabold opacity-[0.03] pointer-events-none uppercase">
            SUCCESS
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { label: 'Response Time', value: '24h', sub: 'Rapid Sync' },
              { label: 'Delivery Rate', value: '100%', sub: 'Excellence' },
              { label: 'Support Phase', value: '30d+', sub: 'Post-Launch' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l border-white/10 md:pl-10 first:border-0 first:pl-0">
                <div className="text-[10px] text-blue-300 uppercase tracking-[0.2em] mb-3 font-bold">{stat.label}</div>
                <div className="text-5xl font-extrabold mb-1 tracking-tighter font-heading">{stat.value}</div>
                <div className="text-xs text-blue-100/50 font-bold uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
