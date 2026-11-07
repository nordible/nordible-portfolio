import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import BrochurePage from '@/components/BrochurePage';

export const metadata: Metadata = {
  title: 'Nordible Unternehmensbroschüre | Kostenfreier B2B Download',
  description: 'Laden Sie die offizielle Nordible Technologies Unternehmensbroschüre als PDF herunter: Architektur-Benchmarks, KI-Workflows, Case Studies und Zusammenarbeitsmodelle.',
  alternates: {
    canonical: '/brochure',
  },
};

export default function Page() {
  return (
    <RouteClientWrapper>
      <BrochurePage />
    </RouteClientWrapper>
  );
}
