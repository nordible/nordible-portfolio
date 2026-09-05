import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-nordible-bg dark:bg-gray-900">
      {/* Atmospheric subtle sky glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.14),rgba(20,91,255,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.12),rgba(13,43,117,0.15),transparent)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Focused Value Proposition */}
          <div className="lg:col-span-7 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white leading-[1.2] tracking-tight mb-8 font-heading">
              {t.hero.titlePart1}<span className="text-nordible-blue">{t.hero.titleHighlight}</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-stretch sm:items-center">
              <button
                onClick={scrollToConsultation}
                className="btn-primary text-sm px-8 py-4 text-center shadow-lg shadow-blue-500/20"
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
            </div>

            {/* Risk-Reversal Guarantees */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                ✓ {language === 'de' ? '100% Kostenfreie Erstberatung' : '100% Free Consultation'}
              </span>
              <span className="inline-flex items-center">
                ✓ {language === 'de' ? 'Direkt mit dem Gründer' : 'Direct with Founder'}
              </span>
              <span className="inline-flex items-center">
                ✓ {language === 'de' ? 'Antwort < 2h' : 'Response < 2h'}
              </span>
            </div>

            {/* Social Proof Strip */}
            <div className="mt-4 pt-4 border-t border-nordible-border/60 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>
                {language === 'de' 
                  ? 'Erprobt von Teams bei GE Healthcare, NIUM & Tech-Startups'
                  : 'Battle-tested for teams at GE Healthcare, NIUM & high-growth startups'}
              </span>
            </div>
          </div>

          {/* Right Column: Serious Founder Executive Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div 
              className="relative w-full max-w-sm flex flex-col items-center cursor-pointer group"
              onClick={() => {
                navigate('/founder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="Read Kabeer Shah's Journey"
            >
              {/* Soft background depth glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/15 blur-3xl rounded-full pointer-events-none"></div>

              {/* Cutout Image with constrained height for complete single-screen visibility */}
              <div className="relative z-10 flex justify-center">
                <img
                  src="/images/founder-transparent.png"
                  alt={`${t.hero.founderName} - ${t.hero.founderRole}`}
                  className="max-h-[320px] sm:max-h-[360px] lg:max-h-[390px] w-auto object-contain drop-shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                  loading="eager"
                />
              </div>

              {/* Founder Credential Card */}
              <div className="relative z-20 -mt-6 w-full rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 shadow-lg border border-nordible-border dark:border-gray-700 text-left group-hover:border-nordible-blue/40 transition-colors">
                <div className="text-base font-extrabold text-nordible-dark dark:text-white font-heading">
                  {t.hero.founderName}
                </div>
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-0.5">
                  {t.hero.founderRole}
                </div>
                <div className="mt-1">
                  <span className="text-[11px] font-semibold text-nordible-blue dark:text-blue-400 group-hover:underline inline-flex items-center gap-0.5">
                    {t.hero.readFounderStory}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
