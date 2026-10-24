import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import FounderPage from '@/components/FounderPage';
import InvestmentModelsPage from '@/components/InvestmentModelsPage';
import CompanyProfilePage from '@/components/CompanyProfilePage';
import WhyChooseUsPage from '@/components/WhyChooseUsPage';
import BlogPage from '@/components/BlogPage';
import BlogPost from '@/components/BlogPost';
import AreasServedPage from '@/components/AreasServedPage';
import LocationLandingPage from '@/components/LocationLandingPage';
import QrCodeGeneratorPage from '@/components/QrCodeGeneratorPage';
import DigitalCardPage from '@/components/DigitalCardPage';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfService from '@/components/TermsOfService';
import DocsReaderPage from '@/components/DocsReaderPage';
import LeadDashboard from '@/components/LeadDashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllCities, getCity, getSuburb } from '@/data/locations';
import { getAllServices, getService } from '@/data/services';
import { articlesBySlug } from '@/data/blogContent';
import ServiceLocationLandingPage from '@/components/ServiceLocationLandingPage';

export function generateStaticParams() {
  const slugs: Array<{ slug: string[] }> = [
    { slug: ['founder'] },
    { slug: ['investment-models'] },
    { slug: ['company-profile'] },
    { slug: ['why-choose-us'] },
    { slug: ['blog'] },
    { slug: ['standorte'] },
    { slug: ['qr-code-generator'] },
    { slug: ['brochure'] },
    { slug: ['card'] },
    { slug: ['privacy'] },
    { slug: ['terms'] },
    { slug: ['portal'] },
    { slug: ['dashboard'] },
  ];

  for (const articleSlug of Object.keys(articlesBySlug)) {
    slugs.push({ slug: ['blog', articleSlug] });
  }

  const services = getAllServices();
  for (const city of getAllCities()) {
    slugs.push({ slug: [city.slug] });
    for (const suburb of city.suburbs) {
      slugs.push({ slug: [city.slug, suburb.slug] });
      for (const service of services) {
        slugs.push({ slug: [city.slug, suburb.slug, service.slug] });
      }
    }
  }

  return slugs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join('/');
  if (path === 'portal' || path === 'dashboard') {
    return {
      robots: { index: false, follow: false },
    };
  }

  let title = 'Nordible Technologies | Technology & Marketing Partner';
  let description = 'AI-native technology and marketing partner in Frankfurt & Rhine-Main. Custom software, AI agents, and data-driven marketing.';

  if (slug.length === 1) {
    const city = getCity(slug[0]);
    if (city) {
      const isHanau = city.slug === 'hanau';
      title = isHanau 
        ? 'Web Development, Software & SEO in Hanau | Nordible' 
        : `Custom Software & AI Solutions in ${city.name} | Nordible`;
      description = isHanau
        ? 'Web design, bespoke software engineering & Google Ads / SEO for companies in Hanau & Rhine-Main. Direct founder collaboration with Kabeer Shah.'
        : `Technology & marketing partner in ${city.name} & Rhine-Main. Bespoke software engineering, AI agents, and SEO by founder Kabeer Shah.`;
    }
  } else if (slug.length === 2) {
    const sub = getSuburb(slug[0], slug[1]);
    if (sub) {
      title = `Software Engineering & Digital Agency in ${sub.suburb.name}, ${sub.city.name} | Nordible`;
      description = `Modern software, AI automation & marketing in ${sub.suburb.name} (${sub.suburb.postalCode}), ${sub.city.name}. 100% IP ownership & direct founder discovery.`;
    }
  } else if (slug.length === 3) {
    const sub = getSuburb(slug[0], slug[1]);
    const srv = getService(slug[2]);
    if (sub && srv) {
      title = `${srv.nameEn} in ${sub.suburb.name}, ${sub.city.name} | Nordible`;
      description = `${srv.heroTaglineEn} For businesses in ${sub.suburb.name} (${sub.suburb.postalCode}), ${sub.city.name}. Schedule a free consultation with founder Kabeer Shah.`;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/en/${path}`,
    },
  };
}

export default async function EnPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');

  if (path === 'founder') return <RouteClientWrapper><FounderPage /></RouteClientWrapper>;
  if (path === 'investment-models') return <RouteClientWrapper><InvestmentModelsPage /></RouteClientWrapper>;
  if (path === 'company-profile') return <RouteClientWrapper><CompanyProfilePage /></RouteClientWrapper>;
  if (path === 'why-choose-us') return <RouteClientWrapper><WhyChooseUsPage /></RouteClientWrapper>;
  if (path === 'blog') return <RouteClientWrapper><BlogPage /></RouteClientWrapper>;
  if (path === 'standorte') return (
    <>
      <Header />
      <AreasServedPage />
      <Footer />
    </>
  );
  if (path === 'qr-code-generator') return <QrCodeGeneratorPage />;
  if (path === 'brochure') redirect('/brochure.html');
  if (path === 'card') return <DigitalCardPage />;
  if (path === 'privacy') return <PrivacyPolicy />;
  if (path === 'terms') return <TermsOfService />;
  if (path === 'portal') return <DocsReaderPage />;
  if (path === 'dashboard') return <LeadDashboard />;

  if (slug.length === 2 && slug[0] === 'blog') {
    const articleSlug = slug[1];
    return (
      <RouteClientWrapper>
        <BlogPost slug={articleSlug} />
      </RouteClientWrapper>
    );
  }

  if (slug.length === 1) {
    const city = getCity(slug[0]);
    if (city) return <LocationLandingPage />;
  }

  if (slug.length === 2) {
    const sub = getSuburb(slug[0], slug[1]);
    if (sub) return <LocationLandingPage />;
  }

  if (slug.length === 3) {
    const sub = getSuburb(slug[0], slug[1]);
    const srv = getService(slug[2]);
    if (sub && srv) {
      return (
        <RouteClientWrapper>
          <ServiceLocationLandingPage />
        </RouteClientWrapper>
      );
    }
  }

  notFound();
}
