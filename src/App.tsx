import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
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
import FounderPage from './components/FounderPage';
import LeadDashboard from './components/LeadDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import BlogPostFrankfurt from './components/BlogPostFrankfurt';

function HomePage() {
  return (
    <>
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
      <Footer />
    </>
  );
}

function FounderRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <FounderPage 
        onBack={() => navigate('/')} 
        onBookConsultation={() => {
          navigate('/');
          setTimeout(() => {
            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />
      <Footer />
    </>
  );
}

function BlogPostRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <BlogPostFrankfurt 
        onBookConsultation={() => {
          navigate('/');
          setTimeout(() => {
            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-nordible-bg dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/founder" element={<FounderRoute />} />
            <Route path="/blog/frankfurt-local-seo-ai-discoverability" element={<BlogPostRoute />} />
            <Route path="/blog" element={<Navigate to="/blog/frankfurt-local-seo-ai-discoverability" replace />} />
            <Route path="/dashboard" element={<LeadDashboard />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
