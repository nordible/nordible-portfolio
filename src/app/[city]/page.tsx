import LocationLandingPage from '@/components/LocationLandingPage';
import { getAllCities, getCity } from '@/data/locations';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllCities().map((city) => ({
    city: city.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!getCity(city)) {
    notFound();
  }
  return <LocationLandingPage />;
}
