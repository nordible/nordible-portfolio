import type { Metadata } from 'next';
import PitchDeckPage from '@/components/PitchDeckPage';

export const metadata: Metadata = {
  title: 'Executive Pitch Deck | Nordible Technologies',
  description: 'Enterprise pitch deck and capabilities presentation.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/deck',
  },
};

export default function Page() {
  return <PitchDeckPage />;
}
