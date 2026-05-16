import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import BusinessBenefits from './components/BusinessBenefits';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Availability from './components/Availability';
import About from './components/About';
import TechStack from './components/TechStack';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import LeadDashboard from './components/LeadDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentView, setCurrentView] = useState('website');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (currentView === 'dashboard') {
    return (
      <ThemeProvider>
        <LeadDashboard onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  if (currentView === 'privacy') {
    return (
      <ThemeProvider>
        <PrivacyPolicy onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  if (currentView === 'terms') {
    return (
      <ThemeProvider>
        <TermsOfService onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
        <div className="scanline pointer-events-none"></div>
        <Header />
        <main>
          <Hero />
          <TrustSignals />
          <Services />
          <BusinessBenefits />
          <Pricing />
          <Portfolio />
          <Testimonials />
          <Process />
          <Availability />
          <About />
          <TechStack />
          <AIChat />
        </main>
        <Footer
          onPrivacyClick={() => setCurrentView('privacy')}
          onTermsClick={() => setCurrentView('terms')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
