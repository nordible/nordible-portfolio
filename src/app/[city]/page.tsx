import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';
import { getAllCities, getCity } from '@/data/locations';
import { generateCitySchema } from '@/lib/locationSchema';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllCities().map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCity(city);
  if (!cityData) {
    return {
      title: 'Technologielösungen | Nordible',
    };
  }
  const isHanau = city.toLowerCase() === 'hanau';
  const title = isHanau 
    ? 'Website erstellen, Software & SEO in Hanau | Nordible' 
    : `Softwareentwicklung & KI-Lösungen in ${cityData.name} | Nordible`;
  const description = isHanau
    ? 'Webdesign, individuelle Software & Google Ads / SEO für Unternehmen in Hanau & Main-Kinzig-Kreis. Direkt geführt von Gründer Kabeer Shah · Vor Ort in 24h · Kostenloses Erstgespräch.'
    : `Ihr regionaler Technologie- & Marketingpartner in ${cityData.name} & Rhein-Main. Maßgeschneiderte Web-/Mobile-Apps, KI-Agenten & SEO. Direkt geführt von Gründer Kabeer Shah.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${city}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCity(city);
  if (!cityData) {
    notFound();
  }
  const schema = generateCitySchema(cityData);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocationLandingPage />
    </>
  );
}
