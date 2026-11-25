import React from 'react';

/**
 * Lightweight, zero-JS prerender shell rendered during suspense/route loading
 * so users always see an immediate branded structure instead of a blank screen.
 */
export default function PrerenderShell() {
  return (
    <div
      className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-nordible-dark dark:text-white"
      aria-busy="true"
      aria-label="Loading Nordible Technologies"
    >
      {/* Top Header Shell */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-nordible-border dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center p-1.5 border border-nordible-border dark:border-gray-700">
              <img
                src="/images/logos/nordible-icon.png"
                alt="Nordible Technologies"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-base sm:text-lg font-extrabold font-heading tracking-tight">
              Nordible Technologies
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="h-3 w-16 rounded bg-slate-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-3 w-16 rounded bg-slate-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-3 w-20 rounded bg-slate-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-8 w-14 rounded-xl bg-slate-200 dark:bg-gray-800 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero Content Skeleton Shell */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="h-10 sm:h-12 w-11/12 rounded-xl bg-slate-200/80 dark:bg-gray-800 animate-pulse" />
            <div className="h-10 sm:h-12 w-3/4 rounded-xl bg-slate-200/80 dark:bg-gray-800 animate-pulse" />
            <div className="h-5 w-5/6 rounded-lg bg-slate-200/60 dark:bg-gray-800/70 animate-pulse" />
            <div className="h-12 w-56 rounded-xl bg-nordible-blue/25 animate-pulse" />
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-72 rounded-3xl bg-slate-200/70 dark:bg-gray-800 animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}
