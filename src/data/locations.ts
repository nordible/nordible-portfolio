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

export interface LocalProofCardContent {
  badge: string;
  subBadge: string;
  title: (suburbName: string) => string;
  description: string;
  metrics: {
    page1Label: string;
    page1Sub: string;
    climbLabel: string;
    climbSub: string;
    callsLabel: string;
    callsSub: string;
    clientsLabel: string;
    clientsSub: string;
  };
  ctaAudit: (suburbName: string) => string;
  ctaStudy: string;
}

export const localProofCardTranslations: Record<'en' | 'de', LocalProofCardContent> = {
  de: {
    badge: 'Verifizierte B2B-Fallstudie Frankfurt',
    subBadge: 'Google Seite 1 & Neukundengewinnung',
    title: (suburbName: string) => `Messbare Kundenergebnisse aus Frankfurt am Main – auch für Ihr Unternehmen in ${suburbName}`,
    description: 'Wie Nordible ein deutsches Architekturbüro zu Google Seite 1 für Kernleistungen, einem 4-Seiten-Sprung im hart umkämpften Frankfurter Markt und 2 festen Mandaten aus 3 Erstgesprächen (66,7% Abschlussquote) verhalf.',
    metrics: {
      page1Label: 'Seite 1',
      page1Sub: 'Google Kernplatzierungen',
      climbLabel: '+4 Seiten',
      climbSub: 'Sprung in Frankfurt',
      callsLabel: '6 Klicks → 3 Anrufe',
      callsSub: 'Direkte Google-Kontakte',
      clientsLabel: '2 Neukunden',
      clientsSub: '66,7% Abschlussquote'
    },
    ctaAudit: (suburbName: string) => `Potenzialanalyse für ${suburbName} vereinbaren`,
    ctaStudy: 'Vollständige Fallstudie lesen'
  },
  en: {
    badge: 'Verified Frankfurt B2B Case Study',
    subBadge: 'Google Page 1 & Inbound Client Acquisition',
    title: (suburbName: string) => `Measurable Client Results in Frankfurt am Main – applicable to your business in ${suburbName}`,
    description: 'How Nordible helped an architecture practice achieve Google Page 1 across core services, climb 4 pages in Frankfurt, and close 2 signed clients from 3 qualified calls (66.7% conversion rate).',
    metrics: {
      page1Label: 'Page 1',
      page1Sub: 'Google Core Rankings',
      climbLabel: '+4 Pages',
      climbSub: 'Climb in Frankfurt',
      callsLabel: '6 Clicks → 3 Calls',
      callsSub: 'Direct Google Phone Calls',
      clientsLabel: '2 Signed Clients',
      clientsSub: '66.7% Close Rate'
    },
    ctaAudit: (suburbName: string) => `Request Ranking Audit for ${suburbName}`,
    ctaStudy: 'Read Full Case Study'
  }
};

