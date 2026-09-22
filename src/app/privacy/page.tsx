import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung (Privacy Policy) | Nordible Technologies',
  description: 'Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
