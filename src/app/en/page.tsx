import type { Metadata } from 'next';
import HomePage from '@/app/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en',
  },
};

export default function EnHomePage() {
  return <HomePage />;
}
