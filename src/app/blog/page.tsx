import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import BlogPage from '@/components/BlogPage';

export const metadata: Metadata = {
  title: 'Architecture & Tech Insights | Nordible Technologies',
  description: 'Technical essays, case studies, and engineering architecture patterns from our founder and team.',
  alternates: {
    canonical: '/blog',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <BlogPage />
    </RouteClientWrapper>
  );
}
