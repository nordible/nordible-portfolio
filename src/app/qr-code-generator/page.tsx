import type { Metadata } from 'next';
import QrCodeGeneratorPage from '@/components/QrCodeGeneratorPage';

export const metadata: Metadata = {
  title: 'Kostenloser QR-Code-Generator | Nordible Technologies',
  description: 'Erstellen Sie hochauflösende, werbefreie QR-Codes für URLs, WLAN, vCards und Kontakte.',
  alternates: {
    canonical: '/qr-code-generator',
  },
};

export default function Page() {
  return <QrCodeGeneratorPage />;
}
