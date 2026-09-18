import React from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { NON_DEFAULT_LANGUAGES } from './lib/i18n';
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
import ProspectFlyerPage from './components/ProspectFlyerPage';
import NotFoundPage from './components/NotFoundPage';
import LocationLandingPage from './components/LocationLandingPage';
import AreasServedPage from './components/AreasServedPage';

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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <FounderPage 
        onBack={() => navigate(getPath('/'))} 
        onBookConsultation={() => {
          navigate(getPath('/'));
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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <BlogPage 
        onBookConsultation={() => {
          navigate(getPath('/'));
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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <BlogPost 
        onBookConsultation={() => {
          navigate(getPath('/'));
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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <InvestmentModelsPage 
        onBack={() => navigate(getPath('/'))} 
        onBookConsultation={() => {
          navigate(getPath('/'));
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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <CompanyProfilePage 
        onBack={() => navigate(getPath('/'))} 
        onBookConsultation={() => {
          navigate(getPath('/'));
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
  const { getPath } = useLanguage();
  return (
    <>
      <Header />
      <WhyChooseUsPage 
        onBack={() => navigate(getPath('/'))} 
        onBookConsultation={() => {
          navigate(getPath('/'));
          setTimeout(() => {
            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />
      <Footer />
    </>
  );
}

function NotFoundRoute() {
  return (
    <>
      <Header />
      <NotFoundPage />
      <Footer />
    </>
  );
}

function DeRedirect() {
  const location = useLocation();
  const target = location.pathname.replace(/^\/de(\/|$)/, '/') || '/';
  return <Navigate to={`${target}${location.search}${location.hash}`} replace />;
}

function CanonicalTagUpdater() {
  const location = useLocation();

  React.useEffect(() => {
    const rawPath = location.pathname.replace(/\/$/, '') || '/';
    const canonicalUrl = rawPath === '/' ? 'https://nordible.co/' : `https://nordible.co${rawPath}`;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);
  }, [location.pathname]);

  return null;
}

function App() {
  const baseRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/founder', element: <FounderRoute /> },
    { path: '/investment-models', element: <InvestmentModelsRoute /> },
    { path: '/company-profile', element: <CompanyProfileRoute /> },
    { path: '/why-choose-us', element: <WhyChooseUsRoute /> },
    { path: '/blog', element: <BlogRoute /> },
    { path: '/blog/:slug', element: <BlogPostRoute /> },
    { path: '/dashboard', element: <LeadDashboard /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
    { path: '/terms', element: <TermsOfService /> },
    { path: '/portal', element: <DocsReaderPage /> },
    { path: '/prospect-flyer', element: <ProspectFlyerPage /> },
    { path: '/standorte', element: <AreasServedPage /> },
    { path: '/:city', element: <LocationLandingPage /> },
    { path: '/:city/:suburb', element: <LocationLandingPage /> },
  ];

  const redirects = [
    { path: '/pricing', to: '/investment-models' },
    { path: '/about', to: '/company-profile' },
    { path: '/why-us', to: '/why-choose-us' },
    { path: '/benefits', to: '/why-choose-us' },
    { path: '/flyer', to: '/prospect-flyer' },
    { path: '/areas-served', to: '/standorte' },
    { path: '/locations', to: '/standorte' },
  ];

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CanonicalTagUpdater />
        <div className="relative min-h-screen bg-nordible-bg dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden font-sans">
          <Routes>
            {/* Legacy German URL redirects (/de -> /, /de/* -> /*) */}
            <Route path="/de" element={<Navigate to="/" replace />} />
            <Route path="/de/*" element={<DeRedirect />} />

            {/* Default / German Routes */}
            {baseRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {redirects.map((r) => (
              <Route key={r.path} path={r.path} element={<Navigate to={r.to} replace />} />
            ))}

            {/* Dynamic Localized Routes for all languages in NON_DEFAULT_LANGUAGES */}
            {NON_DEFAULT_LANGUAGES.map((lang) => (
              <React.Fragment key={lang}>
                {baseRoutes.map((route) => (
                  <Route
                    key={`${lang}-${route.path}`}
                    path={route.path === '/' ? `/${lang}` : `/${lang}${route.path}`}
                    element={route.element}
                  />
                ))}
                {redirects.map((r) => (
                  <Route
                    key={`${lang}-${r.path}`}
                    path={`/${lang}${r.path}`}
                    element={<Navigate to={`/${lang}${r.to}`} replace />}
                  />
                ))}
              </React.Fragment>
            ))}

            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
          <FloatingCTA />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
