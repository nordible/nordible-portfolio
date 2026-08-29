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
    <section className="relative pt-6 pb-10 lg:pt-8 lg:pb-12 overflow-hidden bg-nordible-bg dark:bg-gray-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white leading-[1.15] tracking-tight mb-4 font-heading">
              Engineering <br />
              <span className="text-nordible-blue">Exceptional</span> <br />
              Technology Solutions
            </h1>

            <div className="max-w-xl mb-6 space-y-2">
              <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                We don’t just build technology solutions for businesses—we build partnerships with people.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                Nordible Technologies collaborates directly with ambitious teams to design, architect, and ship resilient technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-stretch sm:items-center">
              <button
                onClick={scrollToConsultation}
                className="btn-primary text-sm px-7 py-3.5 text-center shadow-lg shadow-blue-500/20"
              >
                <span>Schedule Architecture Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-nordible-border dark:border-gray-800 pt-6">
              {[
                { label: 'Track Record', val: '15+ Years' },
                { label: 'Architecture', val: 'Enterprise Grade' },
                { label: 'Delivery', val: '50+ Solutions Shipped' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5 font-bold">{item.label}</div>
                  <div className="text-sm font-extrabold text-nordible-dark dark:text-white">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Serious Founder Executive Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-sm flex flex-col items-center">
              {/* Soft background depth glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/15 blur-3xl rounded-full pointer-events-none"></div>

              {/* Cutout Image with constrained height for complete single-screen visibility */}
              <div className="relative z-10 flex justify-center">
                <img
                  src="/images/founder-transparent.png"
                  alt="Kabeer Shah - Founder & Principal Architect"
                  className="max-h-[320px] sm:max-h-[360px] lg:max-h-[390px] w-auto object-contain drop-shadow-xl"
                  loading="eager"
                />
              </div>

              {/* Founder Credential Card */}
              <div className="relative z-20 -mt-6 w-full rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 shadow-lg border border-nordible-border dark:border-gray-700 text-left">
                <div className="text-base font-extrabold text-nordible-dark dark:text-white font-heading">
                  Kabeer Shah
                </div>
                <div className="text-[11px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-wider mt-0.5">
                  Founder &amp; Principal Architect
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  Ex-GE Healthcare &amp; Fintech Unicorn Lead
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
