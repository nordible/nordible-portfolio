import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultation = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (location.pathname.startsWith('/portal')) {
    return null;
  }

  return (
    <>
      {/* Mobile Ergonomic Bottom Conversion Dock (Fitts's Law / Thumb-Zone) */}
      <nav 
        aria-label="Mobile Quick Conversion"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-nordible-border dark:border-gray-800 px-4 py-2.5 shadow-2xl flex items-center gap-2.5 safe-area-pb"
      >
        <a
          href="https://wa.me/4915235850031?text=Hello%20Nordible,%20I'd%20like%20to%20discuss%20a%20technology%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold font-heading shadow-md shadow-emerald-600/20 cursor-pointer"
        >
          <span>WhatsApp Chat</span>
        </a>

        <button
          type="button"
          onClick={handleConsultation}
          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-nordible-blue active:bg-blue-700 text-white text-xs font-bold font-heading shadow-md shadow-blue-500/20 cursor-pointer"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>{language === 'de' ? 'Erstgespräch' : 'Free Strategy Call'}</span>
        </button>
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
          aria-label={language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
          title={language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>{language === 'de' ? 'Erstgespräch anfragen' : 'Book Free Call'}</span>
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
