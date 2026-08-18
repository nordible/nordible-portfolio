import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-blue-500/10 border border-nordible-border">
              <img src="/images/logo-email.webp" alt="Nordible Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">Nordible Solutions</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {['Services', 'Portfolio', 'About', 'Consultation'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <a
              href="/nordible-pitch-deck.pdf"
              download="nordible-pitch-deck.pdf"
              className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-widest"
            >
              Pitch Deck
            </a>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="btn-primary py-3 px-6 text-sm"
            >
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-xl bg-nordible-bg dark:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-nordible-dark dark:text-white" /> : <Menu className="h-6 w-6 text-nordible-dark dark:text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white dark:bg-gray-900 border-t border-nordible-border dark:border-gray-800">
              {['Services', 'Portfolio', 'About', 'Consultation'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="/nordible-pitch-deck.pdf"
                download="nordible-pitch-deck.pdf"
                className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                Pitch Deck (PDF)
              </a>
              <div className="flex items-center justify-between px-4 py-3">
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Theme</span>
                 <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-blue-400"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
              <div className="px-4 pt-4">
                <button
                  onClick={() => scrollToSection('consultation')}
                  className="btn-primary w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
