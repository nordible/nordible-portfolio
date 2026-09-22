import type { Metadata } from 'next';
import DocsReaderPage from '@/components/DocsReaderPage';

export const metadata: Metadata = {
  title: 'Admin Portal | Nordible Technologies',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <DocsReaderPage />;
}
