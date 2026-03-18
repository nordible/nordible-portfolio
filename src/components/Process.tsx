import React from 'react';
import { Search, Palette, Code, Rocket, TrendingUp, Clock, CheckCircle } from 'lucide-react';

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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven process that ensures your project is delivered on time and exceeds expectations
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform translate-x-4"></div>
              )}
              
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative z-10">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-purple-600 font-medium">{step.duration}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300">Days Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}