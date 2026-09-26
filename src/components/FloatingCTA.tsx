'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowUp, Phone, MessageCircle, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';

export default function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, getPath } = useLanguage();
  const isDe = language === 'de';

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homePath = getPath('/');

  const handleConsultation = () => {
    const targetUrl = `${homePath}#contact`;
    if (location.pathname !== homePath) {
      navigate(targetUrl);
    } else {
      window.history.pushState(null, '', targetUrl);
      const element = document.getElementById('contact') || document.getElementById('consultation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (location.pathname.startsWith('/portal') || location.pathname.includes('flyer')) {
    return null;
  }

  const whatsappMessage = isDe
    ? 'Hallo Nordible, ich interessiere mich für ein Technologie-Projekt in Frankfurt/Rhein-Main.'
    : "Hello Nordible, I'd like to discuss a technology project in Frankfurt/Rhine-Main.";
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Mobile Ergonomic Bottom Conversion Dock (Steven Hoober's Thumb Zone & Fitts's Law) */}
      <nav 
        aria-label="Mobile Quick Conversion"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-nordible-border/80 dark:border-gray-800 px-2.5 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_25px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-1.5 max-w-md mx-auto">
          {/* Quick Call Button (Direct Phone Contact) */}
          <a
            href={contactConfig.phone.telHref}
            className="flex flex-col items-center justify-center min-w-[2.75rem] h-11 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700 transition-colors active:scale-95 shrink-0"
            aria-label={isDe ? 'Direkt anrufen' : 'Call directly'}
            title={contactConfig.phone.display}
          >
            <Phone className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
            <span className="text-[9px] font-bold mt-0.5 uppercase tracking-wide">
              {isDe ? 'Anruf' : 'Call'}
            </span>
          </a>

          {/* WhatsApp Direct Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center min-w-[2.75rem] h-11 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50 transition-colors active:scale-95 shrink-0"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[9px] font-bold mt-0.5 uppercase tracking-wide">Chat</span>
          </a>

          {/* Quick Email Link */}
          <a
            href={contactConfig.email.mailToGeneral}
            className="flex flex-col items-center justify-center min-w-[2.75rem] h-11 rounded-xl bg-blue-50/70 hover:bg-blue-100 dark:bg-blue-950/30 dark:hover:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 transition-colors active:scale-95 shrink-0"
            aria-label={isDe ? 'E-Mail senden' : 'Send email'}
            title={contactConfig.email.general}
          >
            <Mail className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
            <span className="text-[9px] font-bold mt-0.5 uppercase tracking-wide">Mail</span>
          </a>

          {/* Primary High-Contrast Consultation Button */}
          <button
            type="button"
            onClick={handleConsultation}
            className="flex-1 flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl bg-gradient-to-r from-nordible-blue to-blue-600 hover:from-blue-600 hover:to-nordible-blue active:scale-[0.98] text-white text-xs font-bold font-heading shadow-md shadow-blue-500/25 transition-all cursor-pointer min-w-0"
          >
            <Calendar className="h-4 w-4 shrink-0 text-blue-100" />
            <div className="flex flex-col items-start text-left leading-tight truncate">
              <span className="truncate">{isDe ? 'Erstgespräch anfragen' : 'Book Strategy Call'}</span>
              <span className="text-[9px] font-normal text-blue-100/90 font-sans truncate">
                {isDe ? 'Kostenfrei · Frankfurt' : 'Free · 24h Response'}
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Desktop & Tablet Floating Actions */}
      <aside 
        aria-label="Quick Actions"
        className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center space-x-2 select-none"
      >
        <button
          type="button"
          onClick={handleConsultation}
          className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-nordible-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 text-xs font-bold font-heading transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={isDe ? 'Beratung buchen' : 'Book Consultation'}
          title={isDe ? 'Beratung buchen' : 'Book Consultation'}
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>{isDe ? 'Erstgespräch anfragen' : 'Book Free Call'}</span>
        </button>

        {showTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-nordible-border dark:border-gray-700 shadow-md hover:border-nordible-blue dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        )}
      </aside>
    </>
  );
}

