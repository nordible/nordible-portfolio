import type { Metadata } from 'next';
import TermsOfService from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (Terms of Service) | Nordible Technologies',
  description: 'Allgemeine Geschäftsbedingungen für Dienstleistungen von Nordible Technologies.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Page() {
  return <TermsOfService />;
}
