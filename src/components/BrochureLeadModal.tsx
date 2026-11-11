'use client';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StepQuestionnaire from './StepQuestionnaire';

export default function BrochureLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Programmatic trigger listener (so buttons can open it directly)
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-brochure-modal', handleOpenEvent);

    // 2. Timed auto-popup (Bombay Studio pattern: 12-second delay on first visit)
    const isExcludedRoute = 
      location.pathname.startsWith('/portal') ||
      location.pathname.startsWith('/lite') ||
      location.pathname.includes('brochure') ||
      location.pathname.includes('card');

    let timer: NodeJS.Timeout | null = null;
    if (!isExcludedRoute) {
      timer = setTimeout(() => {
        try {
          const shown = localStorage.getItem('nordible_brochure_shown');
          if (!shown) {
            setIsOpen(true);
            localStorage.setItem('nordible_brochure_shown', 'true');
          }
        } catch {
          // localStorage disabled / private browsing
        }
      }, 12000);
    }

    return () => {
      window.removeEventListener('open-brochure-modal', handleOpenEvent);
      if (timer) clearTimeout(timer);
    };
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <StepQuestionnaire
      mode="modal"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      sourceContext="brochure"
    />
  );
}
