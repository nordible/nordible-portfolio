import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import WhyChooseUsPage from '@/components/WhyChooseUsPage';

export const metadata: Metadata = {
  title: 'Why Choose Us | Nordible Technologies',
  description: 'Discover the Nordible advantage: Senior engineering execution without agency overhead or offshore risks.',
  alternates: {
    canonical: '/why-choose-us',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <WhyChooseUsPage />
    </RouteClientWrapper>
  );
}
