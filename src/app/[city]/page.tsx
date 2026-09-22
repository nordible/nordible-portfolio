import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';
import { getAllCities, getCity } from '@/data/locations';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllCities().map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCity(city);
  return {
    title: cityData ? `Technologielösungen & Softwareentwicklung in ${cityData.name} | Nordible` : 'Technologielösungen | Nordible',
    alternates: {
      canonical: `/${city}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!getCity(city)) {
    notFound();
  }
  return <LocationLandingPage />;
}
