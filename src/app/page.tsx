import type { Metadata } from 'next';
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
import { translations } from '@/lib/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const deFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: translations.de.homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deFaqSchema) }}
      />
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
