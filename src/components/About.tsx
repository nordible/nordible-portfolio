import React from 'react';
import { 
  Shield, 
  Zap, 
  Target, 
  Rocket, 
  BarChart3, 
  Globe
} from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: Shield,
      title: "Clean Engineering",
      description: "We write robust, maintainable code that stands the test of time and scale."
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Speed is our second name. We ship features and systems with unmatched velocity."
    },
    {
      icon: Target,
      title: "Business Focused",
      description: "We don't just build tech; we build tools that solve real business challenges."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-tech-pulse"></div>
            <div className="inline-block px-4 py-1 mb-6 text-xs font-mono font-medium tracking-[0.2em] text-purple-600 dark:text-green-400 uppercase bg-purple-100 dark:bg-green-900/30 rounded-full border border-purple-200 dark:border-green-500/30">
              Company Profile
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Software Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Partner</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>
                Nordible Solutions is a specialized software engineering partner dedicated to architecting high-performance digital systems. 
                We don't just develop; we design and deploy high-impact solutions that solve real-world problems 
                at scale.
              </p>

              <p>
                From building cross-platform consumer apps like Habitualist to architecting complex enterprise systems 
                for global organizations like General Electric and Nium, our expertise spans the entire technology landscape. 
                We believe in science-backed UX, clean engineering, and resilient architectures.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-gray-200 dark:border-green-900/30">
              <div>
                <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white">14+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white">50+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Systems Shipped</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            {qualities.map((quality, index) => (
              <div key={index} className="tech-card group p-6 rounded-xl transition-all duration-300 hover:border-green-500/50 notch-tl">
                <div className="flex items-start space-x-5">
                  <div className="bg-purple-100 dark:bg-green-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform notch-tl">
                    <quality.icon className="h-6 w-6 text-purple-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="font-mono text-xs text-green-500 mr-2">[{index + 1}]</span>
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
};

export default About;
