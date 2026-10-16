'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, ChevronDown, Phone, MessageCircle, Mail, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../lib/i18n';
import { contactConfig } from '../config/contact';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t, getPath, supportedLanguages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isDe = language === 'de';
  const homePath = getPath('/');

  const whatsappMessage = isDe
    ? 'Hallo Nordible, ich interessiere mich für ein Technologie-Projekt in Frankfurt/Rhein-Main.'
    : "Hello Nordible, I'd like to discuss a technology project in Frankfurt/Rhine-Main.";
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleAudienceClick = () => {
    setIsMenuOpen(false);
    setIsAudienceOpen(false);
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
            <span className="text-base sm:text-lg font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight whitespace-nowrap">
              Nordible Technologies
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
                  className="absolute left-0 mt-1 w-60 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-nordible-border dark:border-gray-700 p-1.5 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseEnter={() => setIsAudienceOpen(true)}
                >
                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-nordible-blue dark:hover:text-blue-400 cursor-pointer"
                  >
                    {isDe ? 'Lokale Unternehmen' : 'Local Businesses'}
                  </button>

                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-nordible-blue dark:hover:text-blue-400 cursor-pointer"
                  >
                    {isDe ? 'Tech-Startups & Gründer' : 'Tech Startups & Founders'}
                  </button>

                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-nordible-blue dark:hover:text-blue-400 cursor-pointer"
                  >
                    {isDe ? 'Enterprise & Konzerne' : 'Enterprise & Corporate'}
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

            {/* 4 Direct Conversion Action Icons (Hick's Law & Floating Dock Parity) */}
            <div className="flex items-center gap-1.5 pl-1.5 border-l border-nordible-border/80 dark:border-gray-800">
              {/* Call */}
              <a
                href={contactConfig.phone.telHref}
                className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-nordible-blue hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-nordible-border/80 dark:border-gray-700/80 transition-all hover:scale-105 active:scale-95 shrink-0"
                title={`${isDe ? 'Direkt anrufen' : 'Call directly'}: ${contactConfig.phone.display}`}
                aria-label={isDe ? 'Direkt anrufen' : 'Call directly'}
              >
                <Phone className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 transition-all hover:scale-105 active:scale-95 shrink-0"
                title="WhatsApp Chat"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </a>

              {/* Email */}
              <a
                href={contactConfig.email.mailToGeneral}
                className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-nordible-blue hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-nordible-border/80 dark:border-gray-700/80 transition-all hover:scale-105 active:scale-95 shrink-0"
                title={`E-Mail: ${contactConfig.email.general}`}
                aria-label={isDe ? 'E-Mail senden' : 'Send email'}
              >
                <Mail className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
              </a>

              {/* Google Calendar Booking */}
              <a
                href={contactConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-nordible-blue hover:bg-nordible-dark text-white shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 shrink-0"
                title={isDe ? 'Termin buchen (Google Calendar)' : 'Book Strategy Call (Google Calendar)'}
                aria-label={isDe ? 'Termin buchen' : 'Book Strategy Call'}
              >
                <Calendar className="h-4 w-4" />
              </a>
            </div>
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

              {/* Mobile Audience Quick-Select */}
              <div className="pt-2 pb-1 px-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2 font-mono">
                  {isDe ? 'Zielgruppen' : 'Who We Serve'}
                </span>
                <div className="grid grid-cols-1 gap-1">
                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {isDe ? 'Lokale Unternehmen' : 'Local Businesses'}
                  </button>
                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {isDe ? 'Tech-Startups & Gründer' : 'Tech Startups & Founders'}
                  </button>
                  <button
                    onClick={handleAudienceClick}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {isDe ? 'Enterprise & Konzerne' : 'Enterprise & Corporate'}
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
              {/* Mobile 4 Quick Actions (Call, WhatsApp, Email, Calendar) */}
              <div className="pt-3 px-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2 font-mono">
                  {isDe ? 'Direktkontakt' : 'Quick Actions'}
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <a
                    href={contactConfig.phone.telHref}
                    className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 text-gray-700 dark:text-gray-200 active:scale-95 transition-transform"
                    aria-label={isDe ? 'Anrufen' : 'Call'}
                    title={contactConfig.phone.display}
                  >
                    <Phone className="h-4 w-4 text-nordible-blue dark:text-blue-400 mb-1" />
                    <span className="text-[10px] font-bold uppercase">{isDe ? 'Anruf' : 'Call'}</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 active:scale-95 transition-transform"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mb-1" />
                    <span className="text-[10px] font-bold uppercase">Chat</span>
                  </a>
                  <a
                    href={contactConfig.email.mailToGeneral}
                    className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/60 text-nordible-blue dark:text-blue-300 active:scale-95 transition-transform"
                    aria-label={isDe ? 'E-Mail' : 'Email'}
                    title={contactConfig.email.general}
                  >
                    <Mail className="h-4 w-4 text-nordible-blue dark:text-blue-400 mb-1" />
                    <span className="text-[10px] font-bold uppercase">Mail</span>
                  </a>
                  <a
                    href={contactConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-nordible-blue text-white shadow-md shadow-blue-500/20 active:scale-95 transition-transform"
                    aria-label={isDe ? 'Termin buchen' : 'Book Call'}
                    title={isDe ? 'Termin buchen' : 'Book Strategy Call'}
                  >
                    <Calendar className="h-4 w-4 text-white mb-1" />
                    <span className="text-[10px] font-bold uppercase">{isDe ? 'Termin' : 'Book'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
