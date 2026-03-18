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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              A Technology Powerhouse
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Nordible Solutions is a technology powerhouse dedicated to engineering world-class software products. 
              We don't just develop; we design, deploy, and market high-impact solutions that solve real-world problems 
              at scale.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From building cross-platform consumer apps like Habitualist to architecting complex enterprise systems 
              for global giants like General Electric and Nium, our expertise spans the entire technology landscape. 
              We believe in science-backed UX, clean engineering, and strategic product growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg flex-shrink-0">
                    <quality.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{quality.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}