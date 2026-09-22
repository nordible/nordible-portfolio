import type { Metadata } from 'next';
import ProspectFlyerPage from '@/components/ProspectFlyerPage';

export const metadata: Metadata = {
  title: 'B2B Exekutiv-Prospekt & Leistungsflyer | Nordible Technologies',
  description: 'Offizieller 2-seitiger B2B-Prospekt und Leistungsübersicht im Vektor-Druckformat.',
  alternates: {
    canonical: '/prospect-flyer',
  },
};

export default function Page() {
  return <ProspectFlyerPage />;
}
