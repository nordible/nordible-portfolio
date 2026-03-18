import React, { useState } from 'react';
import { Check, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Pricing() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  const packages = [
    {
      name: 'MVP Core',
      price: '$1,500',
      originalPrice: '$2,000',
      duration: '2-4 weeks',
      description: 'Rapid engineering for high-impact prototypes and core products.',
      features: [
        'Secure Protocol Discovery',
        'Science-Backed UX Core',
        'Cloud-Native Architecture',
        'Performance Analytics',
        'Security SSL Audit',
        'Automated Deployments',
        '30 Days Post-Launch Support'
      ],
      breakdown: [
        { item: 'Architecture & Design', price: '$800' },
        { item: 'Systems Engineering', price: '$700' },
        { item: 'Cloud Integration', price: '$300' },
        { item: 'Quality Assurance', price: '$200' }
      ],
      popular: false,
      savings: '$500'
    },
    {
      name: 'Scalable System',
      price: '$4,500',
      originalPrice: '$6,000',
      duration: '6-10 weeks',
      description: 'Full-lifecycle software product with global scaling capabilities.',
      features: [
        'End-to-End Product Strategy',
        'Advanced System Integration',
        'User Behavioral Analytics',
        'Cross-Platform Optimization',
        'Load Balancing Setup',
        'Infrastructure as Code',
        '90 Days Mission Support'
      ],
      breakdown: [
        { item: 'Strategic Engineering', price: '$2,500' },
        { item: 'Advanced Middleware', price: '$1,500' },
        { item: 'Scale Infrastructure', price: '$1,000' },
        { item: 'System Hardening', price: '$1,000' }
      ],
      popular: true,
      savings: '$1,500'
    },
    {
      name: 'Enterprise Protocol',
      price: '$9,000+',
      originalPrice: '$12,000+',
      duration: '12-24 weeks',
      description: 'Complex software ecosystems for global industry leaders.',
      features: [
        'Multi-Region Deployment',
        'Custom Microservices',
        'AI/ML Logic Integration',
        'Enterprise Security Stack',
        'High-Availability Cluster',
        'Data Sovereignty Compliance',
        '6 Months Priority Support'
      ],
      breakdown: [
        { item: 'Distributed Architecture', price: '$5,000' },
        { item: 'Custom Core Logic', price: '$3,000' },
        { item: 'Security Orchestration', price: '$2,500' },
        { item: 'Compliance Tuning', price: '$1,500' }
      ],
      popular: false,
      savings: '$3,000+'
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800">
            Resource Allocation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Investment</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Transparent, performance-driven pricing for world-class engineering protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`tech-card rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl flex flex-col notch-tl ${pkg.popular ? 'border-purple-500/50 ring-1 ring-purple-500/20 scale-105 z-10' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] flex items-center space-x-1 shadow-lg notch-tl">
                    <Zap className="h-3 w-3" />
                    <span>Priority_Select</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-xl text-gray-400 line-through font-mono opacity-50">{pkg.originalPrice}</span>
                  <div className="text-5xl font-bold text-gray-900 dark:text-white font-mono tracking-tighter mt-1">{pkg.price}</div>
                  <div className="text-green-500 font-bold font-mono text-[10px] uppercase mt-2 tracking-widest">Efficiency_Gain: {pkg.savings}</div>
                </div>
                <div className="text-xs font-mono text-purple-500 font-bold uppercase tracking-widest mb-6">Pipeline: {pkg.duration}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3 group">
                    <div className="mt-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-tight leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                <button
                  onClick={() => setExpandedPackage(expandedPackage === index ? null : index)}
                  className="flex items-center justify-center w-full text-gray-500 hover:text-purple-500 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors py-2 border-y border-gray-100 dark:border-gray-800"
                >
                  <span>{expandedPackage === index ? 'Collapse_Manifest' : 'View_Cost_Manifest'}</span>
                  {expandedPackage === index ? 
                    <ChevronUp className="h-3 w-3 ml-2" /> : 
                    <ChevronDown className="h-3 w-3 ml-2" />
                  }
                </button>
                
                {expandedPackage === index && (
                  <div className="mt-4 p-4 bg-slate-50 dark:bg-gray-900/50 rounded-sm border border-gray-100 dark:border-gray-800 animate-tech-pulse">
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest tracking-[0.2em]">Resource_Breakdown:</h4>
                    <ul className="space-y-2">
                      {pkg.breakdown.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex justify-between text-[10px] font-mono">
                          <span className="text-gray-500 uppercase">{item.item}</span>
                          <span className="font-bold text-gray-900 dark:text-white">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                      <div className="flex justify-between font-mono text-[10px]">
                        <span className="text-gray-400 uppercase">Val_Total:</span>
                        <span className="text-gray-400 line-through">{pkg.originalPrice}</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs font-bold text-green-500 mt-1">
                        <span className="uppercase">Net_Alloc:</span>
                        <span>{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToConsultation}
                className={`w-full py-4 px-6 rounded-sm font-bold transition-all duration-300 flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-xs notch-tl ${pkg.popular ? 'bg-purple-600 hover:bg-purple-500 text-white tech-glow' : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-white'}`}
              >
                <span>Initialize</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="tech-card rounded-2xl p-8 max-w-2xl mx-auto mb-10 border-green-500/20 relative overflow-hidden notch-tl">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <p className="text-green-600 dark:text-green-400 text-lg font-mono font-bold mb-2 uppercase tracking-wider">
              {'> '} Network_Referral_Protocol
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Initialize a referral and receive <span className="text-green-500 font-bold font-mono">$100</span> upon successful protocol finalization.
            </p>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 font-mono text-xs uppercase tracking-widest mb-8">
            Custom architectures available upon request.
          </p>
          
          <button
            onClick={scrollToConsultation}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-5 rounded-sm font-bold transition-all duration-300 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-white tech-glow uppercase tracking-[0.2em] text-xs notch-tl"
          >
            Open Discovery Channel
          </button>
        </div>
      </div>
    </section>
  );
}