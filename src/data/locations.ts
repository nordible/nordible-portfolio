import locationsData from './locationsData.json';

export interface Suburb {
  slug: string;
  name: string;
  postalCode: string;
  districtGroup: string;
  taglineDe?: string;
  taglineEn?: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  suburbs: Suburb[];
}

export const CITIES: City[] = locationsData as City[];

export function getAllCities(): City[] {
  return CITIES;
}

export function getCity(citySlug: string): City | undefined {
  return CITIES.find(c => c.slug.toLowerCase() === citySlug.toLowerCase());
}

export function getSuburb(citySlug: string, suburbSlug: string): { city: City; suburb: Suburb } | undefined {
  const city = getCity(citySlug);
  if (!city) return undefined;
  const suburb = city.suburbs.find(s => s.slug.toLowerCase() === suburbSlug.toLowerCase());
  if (!suburb) return undefined;
  return { city, suburb };
}

export function getAdjacentSuburbs(citySlug: string, currentSuburbSlug: string, count = 4): Suburb[] {
  const city = getCity(citySlug);
  if (!city) return [];
  return city.suburbs
    .filter(s => s.slug.toLowerCase() !== currentSuburbSlug.toLowerCase())
    .slice(0, count);
}

export function getAllLocationRoutePaths(): string[] {
  const paths: string[] = [];
  for (const city of CITIES) {
    paths.push(`/${city.slug}`);
    for (const suburb of city.suburbs) {
      paths.push(`/${city.slug}/${suburb.slug}`);
    }
  }
  return paths;
}
