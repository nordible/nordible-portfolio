import React from 'react';
import { 
  Shield, 
  Zap, 
  Target
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
    <section id="about" className="relative py-24 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
              Company Profile
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-8 tracking-tight font-heading">
              Software Engineering <span className="text-nordible-blue">Partner</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>
                Nordible Solutions is a specialized software engineering partner dedicated to architecting high-performance digital systems. 
                We don't just develop; we design and deploy high-impact solutions that solve real-world problems 
                at scale.
              </p>

              <p>
                From building cross-platform consumer apps to architecting complex enterprise systems 
                for global organizations, our expertise spans the entire technology landscape. 
                We believe in science-backed UX, clean engineering, and resilient architectures.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-nordible-border dark:border-gray-700">
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">14+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">50+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Systems Shipped</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6 relative z-10">
            {qualities.map((quality, index) => (
              <div key={index} className="card-premium group hover:border-nordible-blue/30 cursor-default">
                <div className="flex items-start space-x-5">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <quality.icon className="h-6 w-6 text-nordible-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-nordible-dark dark:text-white mb-2 font-heading">
                      {quality.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">{quality.description}</p>
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
