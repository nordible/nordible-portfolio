import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationLandingPage from '@/components/ServiceLocationLandingPage';
import { getAllCities, getCity, getSuburb } from '@/data/locations';
import { getAllServices, getService } from '@/data/services';
import { generateServiceSuburbSchema } from '@/lib/locationSchema';

export function generateStaticParams() {
  const paramsList: Array<{ city: string; suburb: string; service: string }> = [];
  const services = getAllServices();

  for (const city of getAllCities()) {
    for (const suburb of city.suburbs) {
      for (const service of services) {
        paramsList.push({
          city: city.slug,
          suburb: suburb.slug,
          service: service.slug,
        });
      }
    }
  }

  return paramsList;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ city: string; suburb: string; service: string }> 
}): Promise<Metadata> {
  const { city, suburb, service } = await params;
  const suburbResult = getSuburb(city, suburb);
  const serviceData = getService(service);

  if (!suburbResult || !serviceData) {
    return {
      title: 'Technologielösungen | Nordible',
    };
  }

  const locationWithZip = `${suburbResult.suburb.name} (${suburbResult.suburb.postalCode}), ${suburbResult.city.name}`;

  return {
    title: `${serviceData.nameDe} in ${locationWithZip} | Nordible`,
    description: `${serviceData.nameDe} für Unternehmen in ${locationWithZip}. ${serviceData.descriptionDe}`,
    alternates: {
      canonical: `/${city}/${suburb}/${service}`,
    },
  };
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ city: string; suburb: string; service: string }> 
}) {
  const { city, suburb, service } = await params;
  const cityData = getCity(city);
  const suburbResult = getSuburb(city, suburb);
  const serviceData = getService(service);

  if (!cityData || !suburbResult || !serviceData) {
    notFound();
  }

  const schema = generateServiceSuburbSchema(cityData, suburbResult.suburb, serviceData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceLocationLandingPage />
    </>
  );
}
