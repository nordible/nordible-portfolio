import React, { useState } from 'react';
import { Check, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Pricing() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  const packages = [
    {
      name: 'MVP Core',
      duration: '2-4 weeks',
      description: 'Rapid engineering for high-impact prototypes and core products. Tailored to your specific budget and functional requirements.',
      features: [
        'Secure Protocol Discovery',
        'Science-Backed UX Core',
        'Cloud-Native Architecture',
        'Performance Analytics',
        'Security SSL Audit',
        'Automated Deployments',
        '30 Days Post-Launch Support'
      ],
      popular: false
    },
    {
      name: 'Scalable System',
      duration: '6-10 weeks',
      description: 'Full-lifecycle software product with global scaling capabilities. Built within your specified resource parameters.',
      features: [
        'End-to-End Product Strategy',
        'Advanced System Integration',
        'User Behavioral Analytics',
        'Cross-Platform Optimization',
        'Load Balancing Setup',
        'Infrastructure as Code',
        '90 Days Mission Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Protocol',
      duration: '12-24 weeks',
      description: 'Complex software ecosystems for global industry leaders. Scaled to meet your enterprise budget and security standards.',
      features: [
        'Multi-Region Deployment',
        'Custom Microservices',
        'AI/ML Logic Integration',
        'Enterprise Security Stack',
        'High-Availability Cluster',
        'Data Sovereignty Compliance',
        '6 Months Priority Support'
      ],
      popular: false
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-purple-600 dark:text-green-400 uppercase bg-purple-100 dark:bg-green-900/30 rounded-full border border-purple-200 dark:border-green-800">
            Resource Allocation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-green-400 dark:to-emerald-600">Investment</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Performance-driven engineering protocols tailored to your specific budget and business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`tech-card rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl flex flex-col notch-tl ${pkg.popular ? 'border-purple-500/50 dark:border-green-500/50 ring-1 ring-purple-500/20 scale-105 z-10' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 dark:bg-green-600 text-white px-4 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] flex items-center space-x-1 shadow-lg notch-tl">
                    <Zap className="h-3 w-3" />
                    <span>Priority_Select</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="text-xs font-mono text-purple-500 dark:text-green-500 font-bold uppercase tracking-widest mb-2">Pipeline: {pkg.duration}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{pkg.description}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3 group">
                    <div className="mt-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-green-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-tight leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToConsultation}
                className={`w-full py-4 px-6 rounded-sm font-bold transition-all duration-300 flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-xs notch-tl ${pkg.popular ? 'bg-purple-600 dark:bg-green-600 hover:bg-purple-500 dark:hover:bg-green-500 text-white tech-glow' : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-purple-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black'}`}
              >
                <span>Initialize</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 font-mono text-xs uppercase tracking-widest mb-8">
            Custom architectures available upon request.
          </p>
          
          <button
            onClick={scrollToConsultation}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-5 rounded-sm font-bold transition-all duration-300 hover:bg-purple-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black tech-glow uppercase tracking-[0.2em] text-xs notch-tl"
          >
            Open Discovery Channel
          </button>
        </div>
      </div>
    </section>
  );
}