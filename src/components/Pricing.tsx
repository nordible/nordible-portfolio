import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Pricing() {
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
    <section id="pricing" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Resource Allocation
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 hidden xl:block">
            <img src="/images/mascot/pricing-peek.webp" alt="" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            System <span className="text-nordible-blue">Investment</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Performance-driven engineering protocols tailored to your specific budget and business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <div key={index} className={`card-premium relative flex flex-col h-full ${pkg.popular ? 'border-nordible-blue shadow-2xl shadow-blue-500/10 md:scale-105 z-10' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nordible-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-1 shadow-lg">
                    <Zap className="h-4 w-4" />
                    <span>Recommended</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 uppercase tracking-wider font-heading">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="text-xs font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-2">Timeline: {pkg.duration}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{pkg.description}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3 group">
                    <div className="mt-1">
                      <div className="h-2 w-2 rounded-full bg-nordible-blue dark:bg-blue-400 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-bold tracking-tight leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToConsultation}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 text-sm ${pkg.popular ? 'bg-nordible-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-50 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
              >
                <span>Initialize</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">
            Custom architectures available upon request.
          </p>
          
          <button
            onClick={scrollToConsultation}
            className="btn-secondary"
          >
            Open Discovery Channel
          </button>
        </div>
      </div>
    </section>
  );
}