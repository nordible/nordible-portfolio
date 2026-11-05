'use client';
import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogHubTranslations } from '../data/blogContent';

interface BlogPageProps {
  onBookConsultation?: () => void;
}

export default function BlogPage({ onBookConsultation }: BlogPageProps) {
  const { language, getPath } = useLanguage();
  const content = blogHubTranslations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Reset selected category if language switches
  useEffect(() => {
    setSelectedCategory('all');
  }, [language]);

  // Dynamically extract categories directly from the current blog posts
  const dynamicCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    content.posts.forEach((post) => {
      if (post.category && post.category.trim()) {
        categoriesSet.add(post.category.trim());
      }
    });
    return Array.from(categoriesSet);
  }, [content.posts]);

  const handleConsultation = () => {
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const filteredPosts = content.posts.filter((post) => {
    // 1. Dynamic category filter
    if (selectedCategory !== 'all' && post.category !== selectedCategory) {
      return false;
    }

    // 2. Search query filter
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      (post.clientName && post.clientName.toLowerCase().includes(q)) ||
      (post.projectTitle && post.projectTitle.toLowerCase().includes(q)) ||
      (post.category && post.category.toLowerCase().includes(q)) ||
      (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)))
    );
  });

  const blogHubJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": content.heroTitle,
    "description": content.heroSubtitle,
    "url": "https://nordible.co/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Nordible Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nordible.co/images/logos/nordible-icon.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-24 selection:bg-nordible-blue selection:text-white">
      {/* Dynamic Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogHubJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <Link
            to={getPath('/')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>{content.navBack}</span>
          </Link>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            {content.hubBadge}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="space-y-6 text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {content.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-3xl">
            {content.heroSubtitle}
          </p>

          {/* Clean Search Bar */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Dynamic Category Filter Pills */}
          <div className="pt-1">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 border border-nordible-border dark:border-gray-700'
                }`}
              >
                {content.categories?.all || (language === 'de' ? 'Alle Einblicke' : 'All Insights')} ({content.posts.length})
              </button>
              {dynamicCategories.map((cat) => {
                const count = content.posts.filter((p) => p.category === cat).length;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/25'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 border border-nordible-border dark:border-gray-700'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Case Studies Grid */}
        <section className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.allArticlesHeading}
            </h2>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {content.showing} {filteredPosts.length} {filteredPosts.length === 1 ? content.articleSingle : content.articlePlural}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 space-y-3">
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 font-heading">
                {language === 'de' ? 'Keine passenden Fallstudien gefunden' : 'No matching case studies found'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-nordible-blue dark:text-blue-400 hover:underline cursor-pointer"
              >
                {language === 'de' ? 'Filter & Suche zurücksetzen' : 'Reset filters & search'}
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={getPath(`/blog/${post.slug}`)}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-md hover:border-nordible-blue/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
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

                  {/* Card Content - Title & Dynamic Category */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      {post.category && (
                        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading leading-snug group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Science-Backed Conversion CTA Banner */}
        <section className="mt-16 rounded-3xl bg-nordible-dark text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading leading-tight tracking-tight">
              {content.ctaTitle}
            </h2>

            <p className="text-sm sm:text-base text-blue-100/70 leading-relaxed font-medium">
              {content.ctaSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleConsultation}
                className="btn-primary py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30 active:scale-95 transition-all cursor-pointer"
              >
                {content.ctaButton}
              </button>

              <Link
                to={getPath('/')}
                className="text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-white transition-colors"
              >
                {content.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
