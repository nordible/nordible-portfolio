import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getAllProjects, getProject } from '@/data/portfolioProjects';
import { contactConfig } from '@/config/contact';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: 'Projekt nicht gefunden | Nordible Technologies' };

  return {
    title: `${project.title} (${project.client}) | Nordible Technologies`,
    description: project.executiveSummary.de,
    alternates: {
      canonical: `${contactConfig.websiteUrl}/projekte/${id}`,
      languages: {
        de: `${contactConfig.websiteUrl}/projekte/${id}`,
        en: `${contactConfig.websiteUrl}/en/projects/${id}`,
      },
    },
    openGraph: {
      title: `${project.title} - ${project.heroHeadline.de}`,
      description: project.executiveSummary.de,
      url: `${contactConfig.websiteUrl}/projekte/${id}`,
      siteName: contactConfig.company.name,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <RouteClientWrapper>
      <ProjectDetailPage project={project} />
    </RouteClientWrapper>
  );
}
