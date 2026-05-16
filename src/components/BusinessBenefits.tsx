import React from 'react';
import { DollarSign, TrendingUp, Clock, Shield, Users, Zap } from 'lucide-react';

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Increase Revenue',
      description: 'Modern software products convert 3x better than legacy systems',
      metric: '+150% ROI',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automated processes reduce manual work by hours daily',
      metric: '40h/week Saved',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Scale Faster',
      description: 'Cloud-native solutions that grow with your business',
      metric: '10x Scalability',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Reduce Costs',
      description: 'Efficient code and architecture minimize hosting costs',
      metric: '-60% Expenses',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Better UX',
      description: 'Intuitive interfaces increase user satisfaction',
      metric: '+90% Retention',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Faster Performance',
      description: 'Optimized applications load 5x faster',
      metric: '<2s Load Time',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-green-600 dark:text-green-400 uppercase bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-500/30">
            Performance Metrics
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Real Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            We deliver measurable results through superior engineering and strategic product design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="tech-card rounded-2xl p-8 transition-all duration-300 hover:border-green-500/50 group relative overflow-hidden notch-tl">
              <div className="absolute top-0 right-0 p-6 font-mono text-[60px] font-bold opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                0{index + 1}
              </div>
              
              <div className={`bg-gradient-to-r ${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform notch-tl`}>
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                {benefit.description}
              </p>
              
              <div className="font-mono text-2xl font-bold text-gray-900 dark:text-white tracking-tighter flex items-center">
                <span className="text-green-500 mr-2">{' > '}</span>
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 tech-card rounded-2xl p-10 bg-gradient-to-r from-green-600/5 to-emerald-600/5 dark:from-green-600/10 dark:to-emerald-600/10 border border-green-500/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Optimize Your Business?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
              Let's discuss how our technology can transform your specific goals into high-performance products.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gray-900 dark:bg-green-600 text-white dark:text-white px-10 py-4 rounded-sm font-bold transition-all duration-200 hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-white tech-glow uppercase tracking-widest text-sm"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}