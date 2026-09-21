'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Language, 
  Translations, 
  translations,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  NON_DEFAULT_LANGUAGES
} from '../lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getPath: (path: string) => string;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dynamically extracts language code from URL path, matching any non-default locale (e.g. /de, /fr, /es)
const getLocaleFromPath = (pathname: string): Language => {
  if (NON_DEFAULT_LANGUAGES.length === 0) return DEFAULT_LANGUAGE;
  const match = pathname.match(/^\/([a-z]{2})(?:\/|$)/i);
  if (match) {
    const candidate = match[1].toLowerCase() as Language;
    if (NON_DEFAULT_LANGUAGES.includes(candidate)) {
      return candidate;
    }
  }
  return DEFAULT_LANGUAGE;
};

// Strips any active locale prefix to get the canonical base route
const stripLocalePrefix = (pathname: string): string => {
  if (NON_DEFAULT_LANGUAGES.length === 0) return pathname;
  const prefixRegex = new RegExp(`^\\/(${NON_DEFAULT_LANGUAGES.join('|')})(?:\\/|$)`, 'i');
  const stripped = pathname.replace(prefixRegex, '/');
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Deterministic source of truth from the current URL path
  const language = getLocaleFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (targetLang: Language) => {
    if (targetLang === language) return;

    const baseRoute = stripLocalePrefix(location.pathname);
    const targetPath = targetLang === DEFAULT_LANGUAGE
      ? baseRoute
      : baseRoute === '/' 
        ? `/${targetLang}` 
        : `/${targetLang}${baseRoute}`;

    navigate(`${targetPath}${location.search}${location.hash}`);
  };

  const getPath = (path: string) => {
    const cleanPath = stripLocalePrefix(path);
    if (language === DEFAULT_LANGUAGE) {
      return cleanPath;
    }
    return cleanPath === '/' ? `/${language}` : `/${language}${cleanPath}`;
  };

  const t = translations[language] || translations[DEFAULT_LANGUAGE];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getPath, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
