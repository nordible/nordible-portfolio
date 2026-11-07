'use client';

import React, { Suspense } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import FloatingCTA from './FloatingCTA';
import ScrollToHash from './ScrollToHash';
import BrochureLeadModal from './BrochureLeadModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Suspense fallback={null}>
        <LanguageProvider>
          <ScrollToHash />
          <div className="relative min-h-screen bg-nordible-bg dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden font-sans">
            {children}
            <FloatingCTA />
            <BrochureLeadModal />
          </div>
        </LanguageProvider>
      </Suspense>
    </ThemeProvider>
  );
}
