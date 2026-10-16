'use client';
import { ArrowRight, Store, Rocket, Building2, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language, getPath } = useLanguage();
  const navigate = useNavigate();
  const isDe = language === 'de';

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPath = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const paths = [
    {
      id: 'local' as const,
      icon: Store,
      badge: isDe ? 'Lokale Unternehmen' : 'Local Businesses',
      title: isDe ? 'Mandanten- & Umsatzwachstum' : 'Client & Revenue Growth',
      desc: isDe 
        ? 'Lokale Google-Dominanz & digitale Bestellsysteme ohne Werbekosten.' 
        : 'Local Google search authority & direct ordering funnels with €0 ad spend.',
      highlight: isDe ? 'Seite 1 & +74% Umsatz' : 'Page 1 & +74% Revenue',
      accentColor: 'border-amber-500/30 hover:border-amber-500/70 hover:shadow-amber-500/10',
      badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200'
    },
    {
      id: 'startup' as const,
      icon: Rocket,
      badge: isDe ? 'Tech-Startups & Gründer' : 'Tech Startups & Founders',
      title: isDe ? 'MVP & Skalierbare Software' : 'MVP & High-Velocity Code',
      desc: isDe 
        ? 'Schnelle Marktreife für SaaS, KI-Agenten und Cloud-Architektur.' 
        : 'Rapid time-to-market for SaaS, AI agents, and resilient web/mobile apps.',
      highlight: isDe ? '100 Mio. $ Plattform & 200% Skalierung' : '$100M+ Volume & 200% Scale',
      accentColor: 'border-blue-500/30 hover:border-blue-500/70 hover:shadow-blue-500/10',
      badgeColor: 'bg-blue-100 text-blue-900 dark:bg-blue-950/80 dark:text-blue-200'
    },
    {
      id: 'enterprise' as const,
      icon: Building2,
      badge: isDe ? 'Enterprise & Konzerne' : 'Enterprise & Corporate',
      title: isDe ? 'Mission-Critical & Automatisierung' : 'Mission-Critical & Automation',
      desc: isDe 
        ? 'Sichere MedTech- & FinTech-Lösungen, RPA und Cloud-Infrastruktur.' 
        : 'Enterprise healthcare IoT, back-office RPA, and high-security compliance.',
      highlight: isDe ? '40 Std./Woche gespart & 99.9% Uptime' : '40h/week saved & 99.9% uptime',
      accentColor: 'border-emerald-500/30 hover:border-emerald-500/70 hover:shadow-emerald-500/10',
      badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200'
    }
  ];

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
              className="relative w-full max-w-sm flex flex-col items-center cursor-pointer group"
              onClick={() => {
                navigate(getPath('/founder'));
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

        {/* 3-Path Interactive Persona Fork (Science-backed Hick's Law Self-Selection) */}
        <div className="mt-10 lg:mt-12 pt-8 border-t border-nordible-border/70 dark:border-gray-800">
          <div className="text-center sm:text-left mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 font-mono">
              {isDe ? 'Wählen Sie Ihren Bereich' : 'Select Your Path'}
            </span>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {isDe 
                ? 'Direkter Zugriff auf nachprüfbare Ergebnisse und Referenzen für Ihr Vorhaben:' 
                : 'Direct access to verifiable results and case studies tailored to your sector:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paths.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={handleSelectPath}
                  className={`group relative p-5 rounded-2xl bg-white dark:bg-gray-800/90 border ${p.accentColor} shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between text-left`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                      <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 group-hover:text-nordible-blue transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold text-nordible-dark dark:text-white font-heading group-hover:text-nordible-blue transition-colors mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {isDe ? 'Fokus-Ergebnis:' : 'Measurable Impact:'}
                      </div>
                      <div className="text-xs font-bold text-nordible-dark dark:text-white">
                        {p.highlight}
                      </div>
                    </div>
                    <div className="flex items-center text-xs font-bold text-nordible-blue dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      <span>{isDe ? 'Mehr erfahren' : 'Learn More'}</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
