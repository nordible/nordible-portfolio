import { City, Suburb } from '@/data/locations';

const BASE_URL = 'https://nordible.co';

export function generateCitySchema(city: City) {
  const cityUrl = `${BASE_URL}/${city.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Einzugsgebiet',
            item: `${BASE_URL}/standorte`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: city.name,
            item: cityUrl,
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${cityUrl}#service`,
        name: `Nordible Technologies – Software, KI & Digitalisierung ${city.name}`,
        url: cityUrl,
        telephone: '+4915211065739',
        email: 'mail@nordible.co',
        image: `${BASE_URL}/images/og-image.png`,
        priceRange: '€€',
        parentOrganization: {
          '@type': 'Organization',
          '@id': `${BASE_URL}#organization`,
          name: 'Nordible Technologies',
          url: BASE_URL,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Breitlacherstraße 101',
          addressLocality: 'Frankfurt am Main',
          postalCode: '60489',
          addressRegion: 'Hessen',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.125,
          longitude: 8.608,
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: city.state,
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `In welcher Sprache findet die Beratung in ${city.name} statt?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unsere persönliche Beratung und technische Leitung führen wir vorrangig auf Englisch durch. Projektanfragen, Spezifikationen und Unterlagen auf Deutsch sind selbstverständlich herzlich willkommen – wir bearbeiten deutsche Anfragen einwandfrei und antworten schnell.',
            },
          },
          {
            '@type': 'Question',
            name: `Welche Leistungen bieten Sie für Unternehmen in ${city.name} an?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wir bieten für ${city.name} das vollständige Spektrum an moderner Business-Technologie: Individuelle Webportale, Apps (iOS/Android), autonome KI-Agenten, Workflow-Automatisierung, KI-optimierte Auffindbarkeit (GEO/SEO) sowie professionellen Videoschnitt und IT-Infrastruktur.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Wem gehört der entwickelte Quellcode und das geistige Eigentum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ihnen zu 100 %. Bei Nordible gibt es keinen Vendor-Lock-in. Der gesamte Quellcode, die Datenbankstrukturen und Bereitstellungen gehen vollständig in das Eigentum Ihres Unternehmens über.',
            },
          },
          {
            '@type': 'Question',
            name: `Wie schnell können wir in ${city.name} starten und wann ist ein erstes Ergebnis fertig?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage. Nach einem kurzen Erstgespräch liefern wir funktionale Prototypen oder produktionsreife MVPs in der Regel innerhalb von 2 bis 4 Wochen.',
            },
          },
          {
            '@type': 'Question',
            name: `Sind persönliche Vor-Ort-Termine in ${city.name} möglich?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, sehr gerne! Unser Hauptsitz befindet sich in Frankfurt am Main. Für Projektbesprechungen oder Kennenlerngespräche können wir unkompliziert persönliche Vor-Ort-Termine in ${city.name} und dem gesamten Rhein-Main-Gebiet vereinbaren.`,
            },
          },
        ],
      },
    ],
  };
}

export function generateSuburbSchema(city: City, suburb: Suburb) {
  const suburbUrl = `${BASE_URL}/${city.slug}/${suburb.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Einzugsgebiet',
            item: `${BASE_URL}/standorte`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: city.name,
            item: `${BASE_URL}/${city.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: suburb.name,
            item: suburbUrl,
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${suburbUrl}#service`,
        name: `Nordible Technologies – Software & KI-Lösungen in ${suburb.name} (${suburb.postalCode}), ${city.name}`,
        url: suburbUrl,
        telephone: '+4915211065739',
        email: 'mail@nordible.co',
        image: `${BASE_URL}/images/og-image.png`,
        priceRange: '€€',
        parentOrganization: {
          '@type': 'Organization',
          '@id': `${BASE_URL}#organization`,
          name: 'Nordible Technologies',
          url: BASE_URL,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Breitlacherstraße 101',
          addressLocality: 'Frankfurt am Main',
          postalCode: '60489',
          addressRegion: 'Hessen',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.125,
          longitude: 8.608,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: suburb.name,
          postalCode: suburb.postalCode,
          containedInPlace: {
            '@type': 'City',
            name: city.name,
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `In welcher Sprache findet die Beratung für Unternehmen in ${suburb.name} statt?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unsere persönliche Beratung und technische Leitung führen wir vorrangig auf Englisch durch. Projektanfragen, Spezifikationen und Unterlagen auf Deutsch sind selbstverständlich herzlich willkommen – wir bearbeiten deutsche Anfragen einwandfrei und antworten schnell.',
            },
          },
          {
            '@type': 'Question',
            name: `Welche Leistungen bieten Sie für Unternehmen in ${suburb.name} (${suburb.postalCode}) an?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wir bieten für ${suburb.name} das vollständige Spektrum an moderner Business-Technologie: Individuelle Webportale, Apps (iOS/Android), autonome KI-Agenten, Workflow-Automatisierung, KI-optimierte Auffindbarkeit (GEO/SEO) sowie professionellen Videoschnitt und IT-Infrastruktur.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Wem gehört der entwickelte Quellcode und das geistige Eigentum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ihnen zu 100 %. Bei Nordible gibt es keinen Vendor-Lock-in. Der gesamte Quellcode, die Datenbankstrukturen und Bereitstellungen gehen vollständig in das Eigentum Ihres Unternehmens über.',
            },
          },
          {
            '@type': 'Question',
            name: `Wie schnell können wir in ${suburb.name} starten und wann ist ein erstes Ergebnis fertig?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage. Nach einem kurzen Erstgespräch liefern wir funktionale Prototypen oder produktionsreife MVPs in der Regel innerhalb von 2 bis 4 Wochen.',
            },
          },
          {
            '@type': 'Question',
            name: `Sind persönliche Vor-Ort-Termine in ${suburb.name} oder Frankfurt am Main möglich?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, sehr gerne! Unser Hauptsitz befindet sich in Frankfurt am Main. Für Projektbesprechungen oder Kennenlerngespräche können wir unkompliziert persönliche Vor-Ort-Termine in ${suburb.name}, Frankfurt und dem Rhein-Main-Gebiet vereinbaren.`,
            },
          },
        ],
      },
    ],
  };
}
