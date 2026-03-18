import React from 'react';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: Target,
      title: 'Full-Lifecycle Engineering',
      description: 'From design and development to cloud deployment and marketing strategy.'
    },
    {
      icon: Zap,
      title: 'High-Scale Performance',
      description: 'We build systems designed to handle millions of users with 99.9% uptime.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Science-backed UX focusing on behavioral psychology and user engagement.'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Growth',
      description: 'We don\'t just build products; we help them grow and dominate their markets.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-50 dark:bg-gray-900/80 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-tech-pulse"></div>
            <div className="inline-block px-4 py-1 mb-6 text-xs font-mono font-medium tracking-[0.2em] text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800">
              Company Profile
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              A Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Powerhouse</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>
                Nordible Solutions is a technology powerhouse dedicated to engineering world-class software products. 
                We don't just develop; we design, deploy, and market high-impact solutions that solve real-world problems 
                at scale.
              </p>

              <p>
                From building cross-platform consumer apps like Habitualist to architecting complex enterprise systems 
                for global giants like General Electric and Nium, our expertise spans the entire technology landscape. 
                We believe in science-backed UX, clean engineering, and strategic product growth.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white">08+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white">50+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Products Shipped</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            {qualities.map((quality, index) => (
              <div key={index} className="tech-card group p-6 rounded-xl transition-all duration-300 hover:border-purple-500/50 notch-tl">
                <div className="flex items-start space-x-5">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform notch-tl">
                    <quality.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="font-mono text-xs text-purple-500 mr-2">[{index + 1}]</span>
                      {quality.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">{quality.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}