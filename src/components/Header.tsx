import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string, path?: string) => {
    setIsMenuOpen(false);
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  const navItems = [
    { key: 'services', label: t.nav.services },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'about', label: t.nav.about, path: '/company-profile' },
    { key: 'consultation', label: t.nav.consultation },
  ];

  return (
    <header className="header-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center p-1.5 shadow-md shadow-blue-500/10 border border-nordible-border dark:border-gray-700">
              <img src="/images/logos/nordible-icon.png" alt="Nordible Technologies Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">Nordible Technologies</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.path)}
                className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-nordible-blue transition-all"
              title="Switch Language / Sprache wechseln"
            >
              <Globe className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => handleNavClick('consultation')}
              className="btn-primary py-2.5 px-5 text-xs"
            >
              {t.nav.getStarted}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200"
            >
              <Globe className="h-3 w-3 text-nordible-blue" />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            <button
              className="p-2 rounded-xl bg-nordible-bg dark:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-nordible-dark dark:text-white" /> : <Menu className="h-6 w-6 text-nordible-dark dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white dark:bg-gray-900 border-t border-nordible-border dark:border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key, item.path)}
                  className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
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
                  onClick={() => handleNavClick('consultation')}
                  className="btn-primary w-full"
                >
                  {t.nav.getStarted}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
