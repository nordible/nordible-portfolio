import type { Metadata } from 'next';
import DigitalCardPage from '@/components/DigitalCardPage';

export const metadata: Metadata = {
  title: 'Digitale Visitenkarte | Nordible Technologies',
  description: 'Speichern Sie die Kontaktdaten von Nordible Technologies mit einem Klick auf Ihrem Smartphone inklusive Social Media.',
  alternates: {
    canonical: '/card',
  },
  openGraph: {
    title: 'Digitale Visitenkarte | Nordible Technologies',
    description: 'Speichern Sie die Kontaktdaten von Nordible Technologies mit einem Klick auf Ihrem Smartphone inklusive Social Media.',
    url: 'https://nordible.co/card',
    images: [{ url: 'https://nordible.co/images/og-image.png' }],
  },
};

export default function Page() {
  return <DigitalCardPage />;
}
