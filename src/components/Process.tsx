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
    <section id="process" className="relative py-24 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-mono font-medium tracking-[0.2em] text-blue-600 dark:text-green-400 uppercase bg-blue-100 dark:bg-green-900/30 rounded-full border border-blue-200 dark:border-green-800">
            Development Pipeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-green-400 dark:to-emerald-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            A robust, engineering-led process that ensures your product is built for scale and success.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-green-900/30 to-transparent -translate-y-12"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="tech-card h-full rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 dark:hover:border-green-500/50 relative z-10 flex flex-col notch-tl">
                <div className="absolute -top-4 -right-4 font-mono text-5xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                  0{index + 1}
                </div>
                
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 dark:from-green-600 dark:to-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform notch-tl">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-blue-500 dark:text-green-500" />
                  <span className="text-xs font-mono text-blue-500 dark:text-green-500 font-bold uppercase tracking-widest">{step.duration}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm font-medium leading-relaxed">{step.description}</p>
                
                <ul className="space-y-3 mt-auto">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">
                      <div className="h-1 w-1 rounded-full bg-blue-500 dark:bg-green-500"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-card rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 font-mono text-[80px] font-bold opacity-[0.02] pointer-events-none uppercase">
            SLA_METRICS
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { label: 'Response Time', value: '24h', sub: 'Internal Protocol' },
              { label: 'Delivery Rate', value: '100%', sub: 'Project Success' },
              { label: 'Support Phase', value: '30d+', sub: 'Post-Launch' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-xs font-mono text-blue-500 dark:text-green-500 uppercase tracking-[0.2em] mb-2 font-bold">{stat.label}</div>
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-1 font-mono tracking-tighter">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}