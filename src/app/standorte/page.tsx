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

export default function Page() {
  return (
    <>
      <Header />
      <AreasServedPage />
      <Footer />
    </>
  );
}
