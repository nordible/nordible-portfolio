import type { Metadata } from 'next';
import HomePage from '@/app/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/de',
  },
};

export default function DeHomePage() {
  return <HomePage />;
}
