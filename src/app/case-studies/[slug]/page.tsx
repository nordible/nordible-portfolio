import { redirect } from 'next/navigation';
import { articlesBySlug } from '@/data/blogContent';

export function generateStaticParams() {
  return Object.keys(articlesBySlug).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
