import { notFound } from 'next/navigation';
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
import ProspectFlyerPage from '@/components/ProspectFlyerPage';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfService from '@/components/TermsOfService';
import DocsReaderPage from '@/components/DocsReaderPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllCities, getCity, getSuburb } from '@/data/locations';
import { articlesBySlug } from '@/data/blogContent';

export function generateStaticParams() {
  const slugs: Array<{ slug: string[] }> = [
    { slug: ['founder'] },
    { slug: ['investment-models'] },
    { slug: ['company-profile'] },
    { slug: ['why-choose-us'] },
    { slug: ['blog'] },
    { slug: ['standorte'] },
    { slug: ['qr-code-generator'] },
    { slug: ['prospect-flyer'] },
    { slug: ['privacy'] },
    { slug: ['terms'] },
    { slug: ['portal'] },
  ];

  for (const articleSlug of Object.keys(articlesBySlug)) {
    slugs.push({ slug: ['blog', articleSlug] });
  }

  for (const city of getAllCities()) {
    slugs.push({ slug: [city.slug] });
    for (const suburb of city.suburbs) {
      slugs.push({ slug: [city.slug, suburb.slug] });
    }
  }

  return slugs;
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
  if (path === 'prospect-flyer') return <ProspectFlyerPage />;
  if (path === 'privacy') return <PrivacyPolicy />;
  if (path === 'terms') return <TermsOfService />;
  if (path === 'portal') return <DocsReaderPage />;

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

  notFound();
}
