import RouteClientWrapper from '@/components/RouteClientWrapper';
import BlogPost from '@/components/BlogPost';
import { articlesBySlug } from '@/data/blogContent';

export function generateStaticParams() {
  return Object.keys(articlesBySlug).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <RouteClientWrapper>
      <BlogPost slug={slug} />
    </RouteClientWrapper>
  );
}
