import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import About from '@/components/About';
import Services from '@/components/Services';
import BusinessBenefits from '@/components/BusinessBenefits';
import InvestmentModelsTeaser from '@/components/InvestmentModelsTeaser';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import BlogTeaser from '@/components/BlogTeaser';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
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
