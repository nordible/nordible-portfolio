'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language, getPath } = useLanguage();
  const navigate = useNavigate();

  const mottos = t.hero.rotatingTitles || [
    'Solve Bigger Problems',
    'Always talk to customers',
    'Build for the Long Term',
    'Always Have Fun',
    'Think 10 steps ahead'
  ];

  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFounderClick = () => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      navigate(getPath('/founder'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 1200);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, []);

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nordible-dark dark:text-white leading-[1.2] tracking-tight mb-4 font-heading">
              {t.hero.titlePart1}<span className="text-nordible-blue">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4 max-w-2xl">
              {t.hero.capabilities}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              <MapPin className="h-4 w-4 text-nordible-blue shrink-0" />
              <span>{t.hero.locationAnchor}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-stretch sm:items-center">
              <button
                onClick={scrollToConsultation}
                className="btn-primary text-sm px-8 py-4 text-center shadow-lg shadow-blue-500/20"
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
            </div>
          </div>

          {/* Right Column: Serious Founder Executive Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div 
              className="relative w-full max-w-sm flex flex-col items-center select-none cursor-default group"
              onClick={handleFounderClick}
            >
              {/* Soft background depth glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/15 blur-3xl rounded-full pointer-events-none"></div>

              {/* Animated 4 Company Mottos Moving Behind Founder Cutout */}
              <div 
                className="absolute inset-x-[-100px] sm:inset-x-[-160px] top-4 bottom-4 z-0 flex flex-col justify-between py-2 overflow-hidden pointer-events-none select-none opacity-45 dark:opacity-35"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
                aria-hidden="true"
              >
                {/* Line 1: Motto 1 -> Leftward */}
                <div className="animate-behind-left whitespace-nowrap flex items-center gap-6 text-sm sm:text-base font-black font-heading tracking-widest uppercase text-nordible-blue/40 dark:text-blue-300/35">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m1-${idx}`} className="inline-flex items-center gap-6">
                      <span>{mottos[0]}</span>
                      <span className="text-nordible-orange text-xs select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 2: Motto 2 -> Rightward */}
                <div className="animate-behind-right whitespace-nowrap flex items-center gap-6 text-sm sm:text-base font-black font-heading tracking-widest uppercase text-nordible-dark/30 dark:text-gray-300/25">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m2-${idx}`} className="inline-flex items-center gap-6">
                      <span>{mottos[1]}</span>
                      <span className="text-nordible-blue text-xs select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 3: Motto 3 -> Leftward */}
                <div className="animate-behind-left whitespace-nowrap flex items-center gap-6 text-sm sm:text-base font-black font-heading tracking-widest uppercase text-nordible-blue/40 dark:text-blue-300/35" style={{ animationDuration: '30s' }}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m3-${idx}`} className="inline-flex items-center gap-6">
                      <span>{mottos[2]}</span>
                      <span className="text-nordible-orange text-xs select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 4: Motto 4 -> Rightward */}
                <div className="animate-behind-right whitespace-nowrap flex items-center gap-6 text-sm sm:text-base font-black font-heading tracking-widest uppercase text-nordible-dark/30 dark:text-gray-300/25" style={{ animationDuration: '34s' }}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m4-${idx}`} className="inline-flex items-center gap-6">
                      <span>{mottos[3]}</span>
                      <span className="text-nordible-blue text-xs select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 5: Motto 5 -> Leftward */}
                {mottos[4] && (
                  <div className="animate-behind-left whitespace-nowrap flex items-center gap-6 text-sm sm:text-base font-black font-heading tracking-widest uppercase text-nordible-blue/40 dark:text-blue-300/35" style={{ animationDuration: '38s' }}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <span key={`m5-${idx}`} className="inline-flex items-center gap-6">
                        <span>{mottos[4]}</span>
                        <span className="text-nordible-orange text-xs select-none">✦</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Cutout Image with constrained height for complete single-screen visibility */}
              <div className="relative z-10 flex justify-center select-none">
                <img
                  src="/images/founder-transparent.webp"
                  alt={`${t.hero.founderName} - ${t.hero.founderRole}`}
                  width={780}
                  height={932}
                  className="max-h-[320px] sm:max-h-[360px] lg:max-h-[390px] w-auto object-contain drop-shadow-xl select-none"
                  loading="eager"
                  fetchPriority="high"
                  draggable={false}
                />
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
