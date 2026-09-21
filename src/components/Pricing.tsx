'use client';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  const packages = [
    {
      name: 'Rapid MVP',
      duration: '2-4 weeks',
      description: 'Rapid development of high-impact prototypes and core products. Tailored to your specific budget and functional requirements.',
      features: [
        'Requirements & Architecture Discovery',
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
      name: 'Production Platform',
      duration: '6-10 weeks',
      description: 'Full-lifecycle technology solution with global scaling capabilities. Built within your specified resource parameters.',
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
      name: 'Enterprise Architecture',
      duration: '12-24 weeks',
      description: 'Complex technology ecosystems for global industry leaders. Scaled to meet your enterprise budget and security standards.',
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
    <section id="pricing" className="relative py-20 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {p.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {packages.map((pkg, index) => (
            <div key={index} className={`card-premium relative flex flex-col h-full !p-6 ${pkg.popular ? 'border-nordible-blue shadow-2xl shadow-blue-500/10 md:scale-105 z-10' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nordible-blue text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow-lg">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{p.mostPopular}</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white mb-3 uppercase tracking-wider font-heading">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-1.5">Timeline: {pkg.duration}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-medium leading-relaxed">{pkg.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1 text-left">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2 group">
                    <div className="mt-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-nordible-blue dark:bg-blue-400 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-[11px] font-bold tracking-tight leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToConsultation}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest ${pkg.popular ? 'bg-nordible-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-50 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
              >
                <span>{p.ctaButton}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}