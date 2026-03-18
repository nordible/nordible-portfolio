import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-40"></div>
      
      {/* HUD Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-purple-500/20 pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-purple-500/20 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 right-5 -translate-y-1/2 font-mono text-[10px] text-gray-400 [writing-mode:vertical-rl] tracking-[0.5em] hidden xl:block uppercase opacity-30">
        Engine_Core_Active // v2.0.4
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-sm text-purple-600 dark:text-purple-400 font-mono text-[10px] mb-8 uppercase tracking-widest border border-purple-200 dark:border-purple-800 notch-tl">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></span>
              <span className="text-flicker">Status: Terminal_Initialized</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tighter mb-8">
              ENGINEERING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-600 dark:from-purple-400 dark:via-orange-400 dark:to-orange-500">
                WORLD-CLASS
              </span><br />
              PRODUCTS
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300 font-mono leading-relaxed bg-slate-50 dark:bg-gray-800/50 p-4 border-l-4 border-purple-500">
                <span className="text-purple-500 mr-2">{' > '}</span>
                We are a technology powerhouse dedicated to architecting high-impact software systems. 
                From core design to global scaling.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 mb-12 max-w-3xl">
              {[
                { label: 'System_Arch', val: 'End-to-End' },
                { label: 'Cognitive_UX', val: 'Science-Backed' },
                { label: 'Infra_Scale', val: 'Cloud-Native' }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gray-100 dark:border-gray-800 pl-4 group">
                  <div className="font-mono text-[10px] text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">[{item.label}]</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{item.val}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={scrollToConsultation}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-sm font-bold transition-all duration-300 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-white flex items-center justify-center space-x-3 tech-glow uppercase tracking-[0.2em] text-xs notch-tl"
              >
                <span>Initialize_Project()</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <div className="flex items-center px-6 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <span className="animate-pulse mr-2">●</span> Live_Wait_Time: {' < '} 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}