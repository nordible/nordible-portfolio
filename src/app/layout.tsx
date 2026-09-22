import type { Metadata } from 'next';
import Script from 'next/script';
import ClientProviders from '@/components/ClientProviders';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nordible.co'),
  title: 'Nordible Technologies | Technology Solutions, AI Agents & Digital Marketing | Frankfurt',
  description: 'Nordible Technologies: AI-native business technology partner in Frankfurt am Main. We empower businesses with custom software solutions, mobile apps, AI agents, professional video editing, and data-driven social media management.',
  keywords: [
    'Business Technology Partner Frankfurt',
    'AI Agents Frankfurt',
    'Video Editing Frankfurt',
    'Social Media Management Frankfurt',
    'Web Development Frankfurt',
    'Mobile Apps Frankfurt',
    'Technology Solutions',
    'Software Architecture',
    'GEO',
    'Cloud Infrastructure',
    'Nordible Technologies',
  ],
  authors: [{ name: 'Nordible Technologies' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    url: 'https://nordible.co/',
    title: 'Nordible Technologies | Technology Solutions, AI Agents & Digital Marketing',
    description: 'AI-native business technology partner in Frankfurt am Main. Tailored technology solutions, AI agents, video editing, and social media management.',
    images: [{ url: 'https://nordible.co/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nordible Technologies | Technology Solutions, AI Agents & Digital Marketing',
    description: 'AI-native business technology partner in Frankfurt am Main. Tailored technology solutions, AI agents, video editing, and social media management.',
    images: ['https://nordible.co/images/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nordible Technologies',
  alternateName: 'Nordible Solutions',
  image: 'https://nordible.co/images/og-image.png',
  '@id': 'https://nordible.co',
  url: 'https://nordible.co',
  telephone: '+4915211065739',
  email: 'mail@nordible.co',
  founder: {
    '@type': 'Person',
    name: 'Kabeer Shah',
    jobTitle: 'Founder & Principal Systems Architect',
    sameAs: [
      'https://www.linkedin.com/in/meetkabeershah/',
      'https://github.com/skbr1234',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Breitlacherstraße 101',
    addressLocality: 'Frankfurt',
    postalCode: '60489',
    addressCountry: 'DE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nordible Kerndienstleistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'KI-Agenten & KI-Workflows',
          description: 'Autonome KI-Agenten für Lead-Qualifizierung, Kunden-Onboarding, automatisierten 24/7-Support und Datenanalysen.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Videobearbeitung & Social Media Management',
          description: 'Professioneller Videoschnitt (Shorts, Reels, YouTube), plattformübergreifendes Posting und datengestützte Content-Strategien.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technologielösungen & Softwareentwicklung',
          description: 'Individuelle Web- und Mobile-Apps, skalierbare Cloud- und Softwarearchitekturen sowie moderne Webportale mit 100 % Code-Eigentum.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Geschäftsprozess-Automatisierung & Systeme',
          description: 'Automatisierung von Unternehmensprozessen, Vernetzung bestehender Software-Tools und operative Zeitersparnis.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Email & Setup',
          description: 'Sichere geschäftliche E-Mail-Infrastruktur (ihrname@ihrunternehmen.de) mit eigener Domain und Spam-Schutz.',
        },
      },
    ],
  },
  description: 'Nordible Technologies ist ein KI-nativer Business-Technologie- und Digitalmarketing-Partner mit Sitz in Frankfurt am Main, Deutschland.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/markdown" title="LLMs.txt" href="/llms.txt" />
        <link rel="alternate" type="text/markdown" title="LLMs Full Knowledge Base" href="/llms-full.txt" />
        <link rel="service-desc" type="application/json" href="/.well-known/agent.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
        
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E5H1MEHYYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E5H1MEHYYB');
          `}
        </Script>
      </body>
    </html>
  );
}
