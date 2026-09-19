import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogHubTranslations } from '../data/blogContent';
import SectionAnchor from './SectionAnchor';

export default function BlogTeaser() {
  const { language, getPath } = useLanguage();
  const content = blogHubTranslations[language];
  const posts = content.posts.slice(0, 2);

  return (
    <section id="insights" className="relative py-14 sm:py-16 bg-nordible-bg dark:bg-gray-900 border-t border-nordible-border dark:border-gray-800 scroll-mt-20">
      <div id="blog" className="absolute top-0 pointer-events-none scroll-mt-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="group inline-flex items-center justify-center gap-2 text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            <span>{language === 'de' ? 'Unsere Technologie-Einblicke' : 'Our Technology Insights'}</span>
            <SectionAnchor id="insights" />
          </h2>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={getPath(`/blog/${post.slug}`)}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800/90 border border-nordible-border dark:border-gray-700 shadow-sm hover:border-nordible-blue/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] bg-gray-950 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading leading-snug group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <Link
            to={getPath('/blog')}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-nordible-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
          >
            <span>{language === 'de' ? 'Alle Einblicke & Fallstudien ansehen' : 'Explore All Insights & Case Studies'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
