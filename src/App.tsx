import React, { useState } from 'react';
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
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeadDashboard from './components/LeadDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentView, setCurrentView] = useState('website');

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
      <div className="relative min-h-screen bg-nordible-bg dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden font-sans">
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
          <Contact />
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
