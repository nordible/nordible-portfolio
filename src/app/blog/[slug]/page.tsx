import type { Metadata } from 'next';
import RouteClientWrapper from '@/components/RouteClientWrapper';
import BlogPost from '@/components/BlogPost';
import { articlesBySlug } from '@/data/blogContent';

export function generateStaticParams() {
  return Object.keys(articlesBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesBySlug[slug]?.en || articlesBySlug[slug]?.de;
  return {
    title: article ? `${article.title} | Nordible Technologies` : 'Blog | Nordible Technologies',
    description: article?.introParagraphs?.[0],
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <RouteClientWrapper>
      <BlogPost slug={slug} />
    </RouteClientWrapper>
  );
}
