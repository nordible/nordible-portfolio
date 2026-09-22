import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import InvestmentModelsPage from '@/components/InvestmentModelsPage';

export const metadata: Metadata = {
  title: 'How We Work Together & Investment Models | Nordible Technologies',
  description: 'Explore our transparent engagement tiers, structured sprint cycles, and 100% IP ownership model.',
  alternates: {
    canonical: '/investment-models',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <InvestmentModelsPage />
    </RouteClientWrapper>
  );
}
