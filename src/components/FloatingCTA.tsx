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

  return (
    <aside 
      aria-label="Quick Actions"
      className="fixed bottom-5 right-5 z-40 flex items-center space-x-2 select-none"
    >
      {/* Consultation Action */}
      <button
        type="button"
        onClick={handleConsultation}
        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-nordible-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 text-xs font-bold font-heading transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
        title={language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
      >
        <Calendar className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{language === 'de' ? 'Termin buchen' : 'Book Call'}</span>
      </button>

      {/* Scroll to Top */}
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
  );
}
