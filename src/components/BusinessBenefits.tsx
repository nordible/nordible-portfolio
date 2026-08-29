import React from 'react';
import { DollarSign, TrendingUp, Clock, Shield, Users, Zap } from 'lucide-react';

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Increase Revenue',
      description: 'Modern technology solutions convert 3x better than legacy systems',
      metric: '+150% ROI',
      color: 'from-green-500 to-emerald-600',
      mascot: '/images/mascot/celebrate.webp'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automated processes reduce manual work by hours daily',
      metric: '40h/week Saved',
      color: 'from-blue-500 to-cyan-600',
      mascot: '/images/mascot/working-laptop.webp'
    },
    {
      icon: TrendingUp,
      title: 'Scale Faster',
      description: 'Cloud-native solutions that grow with your business',
      metric: '10x Scalability',
      color: 'from-purple-500 to-pink-600',
      mascot: '/images/mascot/hero-wave.webp'
    },
    {
      icon: Shield,
      title: 'Reduce Costs',
      description: 'Efficient code and architecture minimize hosting costs',
      metric: '-60% Expenses',
      color: 'from-orange-500 to-red-600',
      mascot: '/images/mascot/security-shield.webp'
    },
    {
      icon: Users,
      title: 'Better UX',
      description: 'Intuitive interfaces increase user satisfaction',
      metric: '+90% Retention',
      color: 'from-indigo-500 to-purple-600',
      mascot: '/images/mascot/primary-mascot.webp'
    },
    {
      icon: Zap,
      title: 'Faster Performance',
      description: 'Optimized applications load 5x faster',
      metric: '<2s Load Time',
      color: 'from-yellow-500 to-orange-600',
      mascot: '/images/mascot/mail-send.webp'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Performance Metrics
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            Real Business <span className="text-nordible-blue">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            We deliver measurable results through superior engineering and strategic product design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-premium group relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <img src={benefit.mascot} alt="" className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 font-heading">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                {benefit.description}
              </p>
              
              <div className="text-2xl font-extrabold text-nordible-blue dark:text-blue-400 tracking-tight flex items-center font-heading">
                <span className="mr-2 opacity-50">{' > '}</span>
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-12 bg-nordible-dark text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold mb-4 font-heading">Ready to Optimize Your Business?</h3>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
              Let's discuss how our technology can transform your specific goals into high-performance products.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-nordible-dark px-10 py-4 rounded-xl font-bold transition-all duration-200 hover:bg-blue-50 active:scale-95 shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}