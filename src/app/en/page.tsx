import type { Metadata } from 'next';
import HomePage from '@/app/page';
import { translations } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Nordible Technologies | Technology & Marketing Partner',
  description: 'AI-native technology and marketing partner in Frankfurt & Rhine-Main. Custom software, AI agents, and data-driven marketing.',
  alternates: {
    canonical: '/en',
  },
};

const enFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: translations.en.homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enFaqSchema) }}
      />
      <HomePage />
    </>
  );
}
