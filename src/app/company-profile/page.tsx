import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import CompanyProfilePage from '@/components/CompanyProfilePage';

export const metadata: Metadata = {
  title: 'Company Profile | Nordible Technologies',
  description: 'Learn about Nordible Technologies: our mission, values, and engineering leadership in Frankfurt am Main.',
  alternates: {
    canonical: '/company-profile',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <CompanyProfilePage />
    </RouteClientWrapper>
  );
}
