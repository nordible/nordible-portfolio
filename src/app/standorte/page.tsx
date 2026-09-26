import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AreasServedPage from '@/components/AreasServedPage';

export const metadata: Metadata = {
  title: 'Standorte & Einzugsgebiete | Nordible Technologies',
  description: 'Entdecken Sie unsere Standorte und regionalen Servicebereiche in Frankfurt, Wiesbaden, Mainz, Darmstadt und Rhein-Main.',
  alternates: {
    canonical: '/standorte',
  },
};

const standorteBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Startseite',
      item: 'https://nordible.co',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Einzugsgebiete & Standorte',
      item: 'https://nordible.co/standorte',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(standorteBreadcrumbs) }}
      />
      <Header />
      <AreasServedPage />
      <Footer />
    </>
  );
}
