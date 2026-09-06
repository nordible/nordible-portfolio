import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import BusinessBenefits from './components/BusinessBenefits';
import InvestmentModelsTeaser from './components/InvestmentModelsTeaser';
import InvestmentModelsPage from './components/InvestmentModelsPage';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import About from './components/About';
import BlogTeaser from './components/BlogTeaser';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FounderPage from './components/FounderPage';
import LeadDashboard from './components/LeadDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import BlogPost from './components/BlogPost';
import BlogPage from './components/BlogPage';
import CompanyProfilePage from './components/CompanyProfilePage';
import WhyChooseUsPage from './components/WhyChooseUsPage';
import FloatingCTA from './components/FloatingCTA';
import DocsReaderPage from './components/DocsReaderPage';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <About />
        <Services />
        <BusinessBenefits />
        <InvestmentModelsTeaser />
        <Portfolio />
        <Testimonials />
        <Process />
        <BlogTeaser />
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

function BlogRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <BlogPage 
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
      <BlogPost 
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

function InvestmentModelsRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <InvestmentModelsPage 
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

function CompanyProfileRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <CompanyProfilePage 
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

function WhyChooseUsRoute() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <WhyChooseUsPage 
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

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-nordible-bg dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/founder" element={<FounderRoute />} />
            <Route path="/investment-models" element={<InvestmentModelsRoute />} />
            <Route path="/pricing" element={<Navigate to="/investment-models" replace />} />
            <Route path="/company-profile" element={<CompanyProfileRoute />} />
            <Route path="/about" element={<Navigate to="/company-profile" replace />} />
            <Route path="/why-choose-us" element={<WhyChooseUsRoute />} />
            <Route path="/why-us" element={<Navigate to="/why-choose-us" replace />} />
            <Route path="/benefits" element={<Navigate to="/why-choose-us" replace />} />
            <Route path="/blog" element={<BlogRoute />} />
            <Route path="/blog/:slug" element={<BlogPostRoute />} />
            <Route path="/dashboard" element={<LeadDashboard />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/portal" element={<DocsReaderPage />} />
          </Routes>
          <FloatingCTA />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
