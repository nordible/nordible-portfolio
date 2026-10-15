import type { Metadata } from 'next';
import BrochurePage from '@/components/BrochurePage';
import RouteClientWrapper from '@/components/RouteClientWrapper';

export const metadata: Metadata = {
  title: 'Premium Corporate Brochure | Nordible Technologies',
  description: 'Offizielle 6-seitige B2B Unternehmensbroschüre und Exekutiv-Prospekt von Nordible Technologies.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/brochure',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <BrochurePage />
    </RouteClientWrapper>
  );
}
