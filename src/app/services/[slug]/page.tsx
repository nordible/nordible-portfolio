import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { getAllServices, getService } from '@/data/services';

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: 'Leistungen | Nordible Technologies' };
  }

  return {
    title: `${service.nameDe} | Nordible Technologies`,
    description: service.heroTaglineDe,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.nameDe,
    description: service.heroTaglineDe,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Nordible Technologies',
      url: 'https://nordible.co',
    },
    areaServed: 'Frankfurt am Main, Rhein-Main, Deutschland & Worldwide',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <RouteClientWrapper>
        <ServiceDetailPage slug={slug} />
      </RouteClientWrapper>
    </>
  );
}
