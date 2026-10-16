'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, ChevronDown, Store, Rocket, Building2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../lib/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t, getPath, supportedLanguages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isDe = language === 'de';
  const homePath = getPath('/');

  const handleAudienceClick = (audienceKey: 'local' | 'startup' | 'enterprise') => {
    setIsMenuOpen(false);
    setIsAudienceOpen(false);
    window.dispatchEvent(new CustomEvent('select-audience', { detail: audienceKey }));
    handleNavClick('portfolio');
  };

  const handleNavClick = (target: string, path?: string) => {
    setIsMenuOpen(false);
    if (path) {
      navigate(getPath(path));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetHash = target === 'consultation' ? 'contact' : target;
    const targetUrl = `${homePath}#${targetHash}`;

    if (location.pathname !== homePath) {
      navigate(targetUrl);
    } else {
      window.history.pushState(null, '', targetUrl);
      const element = document.getElementById(targetHash) || document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    if (supportedLanguages.length === 2) {
      const other = supportedLanguages.find(l => l.code !== language);
      if (other) setLanguage(other.code);
    }
  };

  const navItems = [
    { key: 'services', label: t.nav.services },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'caseStudies', label: t.nav.caseStudies, path: '/blog' },
    { key: 'about', label: t.nav.about, path: '/company-profile' },
  ];

  return (
    <header className="header-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer shrink-0" 
            onClick={() => {
              if (location.pathname !== homePath) {
                navigate(homePath);
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center p-1.5 shadow-md shadow-blue-500/10 border border-nordible-border dark:border-gray-700">
              <img src="/images/logos/nordible-icon.png" alt="Nordible Technologies Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-base sm:text-lg font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              <span className="hidden 2xl:inline">Nordible Technologies</span>
              <span className="2xl:hidden">Nordible</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-x-2.5 lg:gap-x-3.5 xl:gap-x-5">
            {/* Audience Quick-Switcher Dropdown */}
            <div className="relative" onMouseLeave={() => setIsAudienceOpen(false)}>
              <button
                onClick={() => setIsAudienceOpen(!isAudienceOpen)}
                onMouseEnter={() => setIsAudienceOpen(true)}
                className="flex items-center gap-1 text-xs lg:text-[13px] font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-wider whitespace-nowrap py-1 cursor-pointer"
              >
                <span>{isDe ? 'Zielgruppen' : 'Who We Serve'}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isAudienceOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAudienceOpen && (
                <div 
                  className="absolute left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-nordible-border dark:border-gray-700 p-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseEnter={() => setIsAudienceOpen(true)}
                >
                  <button
                    onClick={() => handleAudienceClick('local')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300 shrink-0">
                      <Store className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-nordible-blue">
                        {isDe ? 'Lokale Unternehmen' : 'Local Businesses'}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                        Shams Consult · BUNS 069
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleAudienceClick('startup')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300 shrink-0">
                      <Rocket className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-nordible-blue">
                        {isDe ? 'Tech-Startups & Gründer' : 'Tech Startups & Founders'}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                        InstaReM · Parents VIP
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleAudienceClick('enterprise')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 shrink-0">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-nordible-blue">
                        {isDe ? 'Enterprise & Konzerne' : 'Enterprise & Corporate'}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                        GE · Vantive · Next · Smartek
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.path)}
                className="text-xs lg:text-[13px] font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* Adaptive Language Switcher */}
            {supportedLanguages.length <= 2 ? (
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-nordible-blue transition-all"
                title="Switch Language / Sprache wechseln"
              >
                <Globe className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            ) : (
              <div className="relative inline-flex items-center">
                <Globe className="absolute left-2.5 h-3.5 w-3.5 text-nordible-blue dark:text-blue-400 pointer-events-none" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="pl-7 pr-2.5 py-1.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-nordible-blue focus:outline-none transition-all cursor-pointer"
                  aria-label="Select Language"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.shortLabel}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-nordible-bg dark:bg-gray-800 text-nordible-dark dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95 cursor-pointer shrink-0"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => handleNavClick('consultation')}
              className="btn-primary py-2 px-3 lg:px-4 text-xs whitespace-nowrap cursor-pointer shrink-0 shadow-md shadow-blue-500/10"
            >
              {t.nav.getStarted}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {supportedLanguages.length <= 2 ? (
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200"
              >
                <Globe className="h-3 w-3 text-nordible-blue" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            ) : (
              <div className="relative inline-flex items-center">
                <Globe className="absolute left-2 h-3 w-3 text-nordible-blue pointer-events-none" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="pl-6 pr-2 py-1 rounded-lg border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200"
                  aria-label="Select Language"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.shortLabel}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
                  className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 rounded-xl transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Audience Quick-Select (Science-backed Thumb Zone) */}
              <div className="pt-2 pb-1 px-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2 font-mono">
                  {isDe ? 'Zielgruppen / Referenzen' : 'Who We Serve'}
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    onClick={() => handleAudienceClick('local')}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 text-xs font-bold text-amber-900 dark:text-amber-200 border border-amber-200/50 dark:border-amber-900/50 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Store className="h-3.5 w-3.5 text-amber-600" />
                      <span>{isDe ? 'Lokale Unternehmen' : 'Local Businesses'}</span>
                    </span>
                    <span className="text-[10px] opacity-75 font-mono">Shams · BUNS</span>
                  </button>
                  <button
                    onClick={() => handleAudienceClick('startup')}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 text-xs font-bold text-blue-900 dark:text-blue-200 border border-blue-200/50 dark:border-blue-900/50 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Rocket className="h-3.5 w-3.5 text-blue-600" />
                      <span>{isDe ? 'Tech-Startups' : 'Tech Startups'}</span>
                    </span>
                    <span className="text-[10px] opacity-75 font-mono">InstaReM · Parents</span>
                  </button>
                  <button
                    onClick={() => handleAudienceClick('enterprise')}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 text-xs font-bold text-emerald-900 dark:text-emerald-200 border border-emerald-200/50 dark:border-emerald-900/50 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{isDe ? 'Enterprise & Konzerne' : 'Enterprise & Corporate'}</span>
                    </span>
                    <span className="text-[10px] opacity-75 font-mono">GE · Vantive · Next</span>
                  </button>
                </div>
              </div>
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
