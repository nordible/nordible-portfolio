import type { Metadata } from 'next';
import LeadDashboard from '@/components/LeadDashboard';

export const metadata: Metadata = {
  title: 'Lead Dashboard | Nordible Technologies',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <LeadDashboard />;
}
