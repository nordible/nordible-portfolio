import LocationLandingPage from '@/components/LocationLandingPage';
import { getAllCities, getSuburb } from '@/data/locations';
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

export default async function Page({ params }: { params: Promise<{ city: string; suburb: string }> }) {
  const { city, suburb } = await params;
  if (!getSuburb(city, suburb)) {
    notFound();
  }
  return <LocationLandingPage />;
}
