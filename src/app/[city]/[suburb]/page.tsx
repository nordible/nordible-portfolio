import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';
import { getAllCities, getSuburb } from '@/data/locations';
import { generateSuburbSchema } from '@/lib/locationSchema';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const paramsList: Array<{ city: string; suburb: string }> = [];
  for (const city of getAllCities()) {
    for (const suburb of city.suburbs) {
      paramsList.push({
        city: city.slug,
        suburb: suburb.slug,
      });
    }
  }
  return paramsList;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; suburb: string }> }): Promise<Metadata> {
  const { city, suburb } = await params;
  const result = getSuburb(city, suburb);
  if (!result) {
    return {
      title: 'Technologielösungen | Nordible',
    };
  }
  return {
    title: `Softwareentwicklung & Digitalagentur in ${result.suburb.name}, ${result.city.name} | Nordible`,
    description: `Moderne Software, KI-Automatisierung & Marketing für Unternehmen in ${result.suburb.name} (${result.suburb.postalCode}), ${result.city.name}. 100% IP-Eigentum, 24h Reaktionszeit & direktes Erstgespräch mit Gründer Kabeer Shah.`,
    alternates: {
      canonical: `/${city}/${suburb}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string; suburb: string }> }) {
  const { city, suburb } = await params;
  const result = getSuburb(city, suburb);
  if (!result) {
    notFound();
  }
  const schema = generateSuburbSchema(result.city, result.suburb);
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
