import { redirect } from 'next/navigation';
import { getAllProjects } from '@/data/portfolioProjects';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    id: project.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/projekte/${id}`);
}
