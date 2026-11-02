'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Phone, 
  MessageCircle, 
  Mail, 
  Calendar,
  ChevronDown,
  Building2,
  ShieldCheck,
  FileText,
  QrCode,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../lib/i18n';
import { contactConfig } from '../config/contact';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { language, setLanguage, t, getPath, supportedLanguages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isDe = language === 'de';
  const homePath = getPath('/');

  const whatsappMessage = isDe
    ? 'Hallo Nordible, ich interessiere mich für ein Technologie-Projekt in Frankfurt/Rhein-Main.'
    : "Hello Nordible, I'd like to discuss a technology project in Frankfurt/Rhine-Main.";
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleNavClick = (target: string, path?: string) => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
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

  const aboutLinks = [
    {
      title: t.nav.companyProfile,
      path: '/company-profile',
      icon: Building2,
    },
    {
      title: t.nav.whyChooseUs,
      path: '/why-choose-us',
      icon: ShieldCheck,
    },
  ];

  const freeTools = [
    {
      title: t.nav.freeInvoiceGenerator,
      href: 'https://free-invoice-generator.nordible.co/',
      isExternal: true,
      icon: FileText,
    },
    {
      title: t.nav.freeBusinessDirectory,
      href: 'http://business-directory.nordible.co/',
      isExternal: true,
      icon: Globe,
    },
    {
      title: t.nav.freeQrCodeGenerator,
      path: '/qr-code-generator',
      isExternal: false,
      icon: QrCode,
    },
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
            {navItems.filter(item => item.key !== 'about').map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.path)}
                className="text-xs lg:text-[13px] font-bold text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* About Dropdown with Free Tools Sub-Navigation */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setIsAboutOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => setIsAboutOpen(false), 200);
              }}
            >
              <button
                type="button"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex items-center gap-1 text-xs lg:text-[13px] font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer py-2 transition-colors ${
                  isAboutOpen 
                    ? 'text-nordible-blue dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400'
                }`}
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.about}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isAboutOpen ? 'rotate-180 text-nordible-blue dark:text-blue-400' : ''}`} />
              </button>

              {/* Sub-Navigation & Sub-Sub Navigation Panel */}
              {isAboutOpen && (
                <div 
                  className="absolute right-0 top-full pt-2 z-50 w-[480px] animate-in fade-in slide-in-from-top-2 duration-200"
                  role="menu"
                >
                  <div className="bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 rounded-2xl shadow-2xl p-3.5 grid grid-cols-2 gap-2 divide-x divide-nordible-border/60 dark:divide-gray-800">
                    {/* Left Column: About Nordible Pages */}
                    <div className="space-y-1 pr-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-2 block mb-1">
                        {isDe ? 'Über Nordible' : 'About Nordible'}
                      </span>
                      {aboutLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <button
                            key={link.path}
                            onClick={() => {
                              setIsAboutOpen(false);
                              handleNavClick('about', link.path);
                            }}
                            className="w-full text-left p-2 rounded-xl hover:bg-nordible-bg dark:hover:bg-gray-800 transition-colors flex items-center gap-2.5 group cursor-pointer"
                          >
                            <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-xs font-bold text-nordible-dark dark:text-white group-hover:text-nordible-blue dark:group-hover:text-blue-400 block transition-colors truncate">
                              {link.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Column: Free Tools (Sub - Sub Navigation) */}
                    <div className="pl-3 space-y-1">
                      <div className="flex items-center justify-between px-2 mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400 block">
                          {t.nav.freeTools}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                          <Sparkles className="h-2.5 w-2.5" />
                          {isDe ? 'Kostenfrei' : 'Free'}
                        </span>
                      </div>
                      {freeTools.map((tool) => {
                        const Icon = tool.icon;
                        if (tool.isExternal) {
                          return (
                            <a
                              key={tool.href}
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsAboutOpen(false)}
                              className="w-full text-left p-2 rounded-xl hover:bg-nordible-bg dark:hover:bg-gray-800 transition-colors flex items-center justify-between gap-2 group cursor-pointer block"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span className="text-xs font-bold text-nordible-dark dark:text-white group-hover:text-nordible-blue dark:group-hover:text-blue-400 block transition-colors truncate">
                                  {tool.title}
                                </span>
                              </div>
                              <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-nordible-blue shrink-0 mr-1" />
                            </a>
                          );
                        }
                        return (
                          <button
                            key={tool.path}
                            onClick={() => {
                              setIsAboutOpen(false);
                              handleNavClick('tool', tool.path);
                            }}
                            className="w-full text-left p-2 rounded-xl hover:bg-nordible-bg dark:hover:bg-gray-800 transition-colors flex items-center gap-2.5 group cursor-pointer"
                          >
                            <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-xs font-bold text-nordible-dark dark:text-white group-hover:text-nordible-blue dark:group-hover:text-blue-400 block transition-colors truncate">
                              {tool.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

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

            {/* Single Prominent Conversion CTA (Hick's Law Optimization) */}
            <a
              href={contactConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-nordible-blue hover:bg-nordible-dark text-white text-xs lg:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 ml-1.5 cursor-pointer"
              title={isDe ? 'Termin buchen (Google Calendar)' : 'Book Strategy Call (Google Calendar)'}
              aria-label={isDe ? 'Termin buchen' : 'Book Strategy Call'}
            >
              <Calendar className="h-4 w-4" />
              <span>{isDe ? 'Termin buchen' : 'Book Call'}</span>
            </a>
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
              {navItems.filter(item => item.key !== 'about').map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key, item.path)}
                  className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 rounded-xl transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile About Accordion with Free Tools Sub-Navigation */}
              <div className="border border-nordible-border/70 dark:border-gray-800 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-nordible-bg dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <span>{t.nav.about}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-nordible-blue' : ''}`} />
                </button>

                {isMobileAboutOpen && (
                  <div className="px-3 pb-3 space-y-3 bg-gray-50/50 dark:bg-gray-800/40 border-t border-nordible-border/50 dark:border-gray-800">
                    {/* About Links */}
                    <div className="pt-2 space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 px-2 block">
                        {isDe ? 'Über Nordible' : 'About Nordible'}
                      </span>
                      {aboutLinks.map((link) => (
                        <button
                          key={link.path}
                          onClick={() => handleNavClick('about', link.path)}
                          className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-nordible-blue rounded-lg transition-colors cursor-pointer block"
                        >
                          {link.title}
                        </button>
                      ))}
                    </div>

                    {/* Sub-Sub Navigation: Free Tools */}
                    <div className="pt-2 border-t border-gray-200/60 dark:border-gray-700/60 space-y-1">
                      <div className="flex items-center justify-between px-2 mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400 block">
                          {t.nav.freeTools}
                        </span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                          {isDe ? 'Kostenfrei' : 'Free'}
                        </span>
                      </div>
                      {freeTools.map((tool) => {
                        if (tool.isExternal) {
                          return (
                            <a
                              key={tool.href}
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMenuOpen(false)}
                              className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-nordible-blue rounded-lg transition-colors flex items-center justify-between"
                            >
                              <span>{tool.title}</span>
                              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                            </a>
                          );
                        }
                        return (
                          <button
                            key={tool.path}
                            onClick={() => handleNavClick('tool', tool.path)}
                            className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-nordible-blue rounded-lg transition-colors block cursor-pointer"
                          >
                            {tool.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
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
