import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import FounderPage from '@/components/FounderPage';

export const metadata: Metadata = {
  title: 'Founder Journey - Kabeer Shah | Nordible Technologies',
  description: 'Battle-tested systems architecture, enterprise software engineering, and technical leadership delivering measurable business results.',
  alternates: {
    canonical: '/founder',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <FounderPage />
    </RouteClientWrapper>
  );
}
