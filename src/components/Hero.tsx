'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';

const DISPLAY_DURATION_MS = 5200;
const FADE_DURATION_MS = 1800;

export default function Hero() {
  const { t, getPath } = useLanguage();
  const navigate = useNavigate();

  const mottos = t.hero.rotatingTitles || [
    'Solve Bigger Problems',
    'Always talk to customers',
    'Build for the Long Term',
    'Always Have Fun',
    'Think 10 steps ahead'
  ];

  const results = t.hero.resultLinks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused || results.length <= 1) {
      return;
    }

    if (!isFadingOut) {
      const holdTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, DISPLAY_DURATION_MS);
      return () => clearTimeout(holdTimer);
    }

    const switchTimer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % results.length);
      setIsFadingOut(false);
    }, FADE_DURATION_MS);

    return () => clearTimeout(switchTimer);
  }, [activeIndex, isFadingOut, isPaused, results.length]);

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

  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-nordible-bg dark:bg-gray-900">
      {/* Atmospheric subtle sky glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.14),rgba(20,91,255,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.12),rgba(13,43,117,0.15),transparent)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Rotating External-Client Benefit Hero Statement */}
          <div className="lg:col-span-7 text-left">
            <div
              className="mb-8 max-w-2xl"
              onMouseEnter={() => {
                setIsPaused(true);
                setIsFadingOut(false);
              }}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => {
                setIsPaused(true);
                setIsFadingOut(false);
              }}
              onBlur={() => setIsPaused(false)}
            >
              <h1 className="grid grid-cols-1 items-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-nordible-dark dark:text-white leading-[1.22] tracking-tight font-heading">
                {results.map((item, index) => {
                  const isActive = index === activeIndex;
                  const showText = isActive && !isFadingOut;

                  return (
                    <Link
                      key={item.slug}
                      to={getPath(`/blog/${item.slug}`)}
                      aria-hidden={!showText}
                      aria-label={`${item.category}: ${item.label}`}
                      title={item.blogTitle}
                      tabIndex={showText ? 0 : -1}
                      className={`group col-start-1 row-start-1 block transition-all duration-[1800ms] ease-in-out motion-reduce:transition-none ${
                        showText
                          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10'
                          : isActive
                            ? 'opacity-0 -translate-y-2 scale-[0.99] pointer-events-none z-0'
                            : 'opacity-0 translate-y-2 scale-[0.99] pointer-events-none z-0'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400 mb-2">
                        {item.category}
                      </span>
                      <span className="block group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-stretch sm:items-center">
              <a
                href={contactConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-8 py-4 text-center shadow-lg shadow-blue-500/20 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4 shrink-0" />
                <span>{t.hero.ctaButton}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
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
                <div className="animate-behind-left whitespace-nowrap flex items-center gap-4 text-[9px] sm:text-[10px] font-bold font-heading tracking-[0.18em] uppercase text-nordible-blue/40 dark:text-blue-300/35">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m1-${idx}`} className="inline-flex items-center gap-4">
                      <span>{mottos[0]}</span>
                      <span className="text-nordible-orange text-[8px] select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 2: Motto 2 -> Rightward */}
                <div className="animate-behind-right whitespace-nowrap flex items-center gap-4 text-[9px] sm:text-[10px] font-bold font-heading tracking-[0.18em] uppercase text-nordible-dark/30 dark:text-gray-300/25">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m2-${idx}`} className="inline-flex items-center gap-4">
                      <span>{mottos[1]}</span>
                      <span className="text-nordible-blue text-[8px] select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 3: Motto 3 -> Leftward */}
                <div className="animate-behind-left whitespace-nowrap flex items-center gap-4 text-[9px] sm:text-[10px] font-bold font-heading tracking-[0.18em] uppercase text-nordible-blue/40 dark:text-blue-300/35" style={{ animationDuration: '30s' }}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m3-${idx}`} className="inline-flex items-center gap-4">
                      <span>{mottos[2]}</span>
                      <span className="text-nordible-orange text-[8px] select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 4: Motto 4 -> Rightward */}
                <div className="animate-behind-right whitespace-nowrap flex items-center gap-4 text-[9px] sm:text-[10px] font-bold font-heading tracking-[0.18em] uppercase text-nordible-dark/30 dark:text-gray-300/25" style={{ animationDuration: '34s' }}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span key={`m4-${idx}`} className="inline-flex items-center gap-4">
                      <span>{mottos[3]}</span>
                      <span className="text-nordible-blue text-[8px] select-none">✦</span>
                    </span>
                  ))}
                </div>

                {/* Line 5: Motto 5 -> Leftward */}
                {mottos[4] && (
                  <div className="animate-behind-left whitespace-nowrap flex items-center gap-4 text-[9px] sm:text-[10px] font-bold font-heading tracking-[0.18em] uppercase text-nordible-blue/40 dark:text-blue-300/35" style={{ animationDuration: '38s' }}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <span key={`m5-${idx}`} className="inline-flex items-center gap-4">
                        <span>{mottos[4]}</span>
                        <span className="text-nordible-orange text-[8px] select-none">✦</span>
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
