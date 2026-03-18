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
import ClientStories from './components/ClientStories';
import About from './components/About';
import TechStack from './components/TechStack';
import AIChat from './components/AIChat';
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
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header onDashboard={() => setCurrentView('dashboard')} />
        <Hero />
        {/* freelancing features are already added to the site, just uncomment the freelancing secions instead of developing new ones */}
        <TrustSignals />
        <Services />
        <BusinessBenefits />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Process />
        <Availability />
        <ClientStories />
        <About />
        <TechStack />
        <AIChat />
        <Footer
          onPrivacyClick={() => setCurrentView('privacy')}
          onTermsClick={() => setCurrentView('terms')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;