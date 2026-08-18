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
    <section className="relative pt-16 pb-20 overflow-hidden bg-nordible-bg dark:bg-gray-900">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nordible-dark dark:text-white leading-[1.1] tracking-tight mb-6 font-heading">
              Engineering <br />
              <span className="text-nordible-blue">Exceptional</span> <br />
              Digital Systems
            </h1>

            <div className="max-w-xl mb-10">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                We are a software engineering partner dedicated to architecting high-performance digital systems. 
                From core design to global scaling, we build products that move the needle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-stretch sm:items-center">
              <button
                onClick={scrollToConsultation}
                className="btn-primary text-sm px-8 py-3.5 text-center"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>

              <a
                href="/nordible-pitch-deck.pdf"
                download="nordible-pitch-deck.pdf"
                className="inline-flex items-center justify-center text-sm font-bold px-6 py-3.5 rounded-xl border-2 border-nordible-blue text-nordible-blue dark:text-blue-400 hover:bg-nordible-blue hover:text-white dark:hover:bg-nordible-blue dark:hover:text-white transition-all active:scale-95 shadow-sm"
              >
                <span>Download Pitch Deck</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-nordible-border dark:border-gray-800 pt-8">
              {[
                { label: 'System Architecture', val: 'End-to-End' },
                { label: 'Science-Backed', val: 'Cognitive UX' },
                { label: 'Cloud-Native', val: 'Infinite Scale' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">{item.label}</div>
                  <div className="text-sm font-extrabold text-nordible-dark dark:text-white">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Mascot Placeholder Visual */}
            <div className="relative z-10 animate-float">
              <div className="w-[500px] h-[500px] flex items-center justify-center p-12 transform rotate-3 relative">
                <div className="relative z-20 text-center">
                   <img src="/images/mascot/hero-wave.webp" alt="Nordible Mascot" className="w-full h-auto object-contain drop-shadow-2xl" />
                   {/* <div className="speech-bubble text-nordible-dark -mt-10 -ml-20 rotate-[-12deg] absolute">
                      todo: Let's make your next system exceptional!
                   </div> */}
                </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/30 dark:bg-blue-900/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
