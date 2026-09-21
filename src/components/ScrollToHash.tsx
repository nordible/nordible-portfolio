'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HASH_ALIASES: Record<string, string> = {
  consultation: 'contact',
  pricing: 'investment-models',
  blog: 'insights',
};

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const rawId = hash.replace(/^#/, '');
    const targetId = HASH_ALIASES[rawId] || rawId;

    const scrollToElement = () => {
      const element = document.getElementById(targetId) || document.getElementById(rawId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (scrollToElement()) return;

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (scrollToElement() || attempts >= 20) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pathname, hash]);

  useEffect(() => {
    const handleHashChange = () => {
      const rawId = window.location.hash.replace(/^#/, '');
      if (!rawId) return;
      const targetId = HASH_ALIASES[rawId] || rawId;
      const element = document.getElementById(targetId) || document.getElementById(rawId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
}
