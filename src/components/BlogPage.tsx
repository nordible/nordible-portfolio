import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Clock, 
  Search, 
  Bot
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogHubTranslations } from '../data/blogContent';

interface BlogPageProps {
  onBookConsultation?: () => void;
}

export default function BlogPage({ onBookConsultation }: BlogPageProps) {
  const { language } = useLanguage();
  const content = blogHubTranslations[language];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'geo' | 'ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

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
    const matchesCategory = selectedCategory === 'all' || post.categorySlug === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = content.posts.find(p => p.featured) || content.posts[0];

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
            to="/"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-100 dark:border-blue-800">
            <Sparkles className="h-3.5 w-3.5" />
            {content.heroBadge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {content.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-3xl">
            {content.heroSubtitle}
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: content.categories.all },
                { id: 'geo', label: content.categories.geo },
                { id: 'ai', label: content.categories.ai },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-nordible-border dark:border-gray-700 hover:border-nordible-blue dark:hover:border-blue-500'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative min-w-[240px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-xs font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue transition-all"
              />
            </div>
          </div>
        </header>

        {/* Featured Case Study Hero Card */}
        {featuredPost && (
          <section aria-labelledby="featured-heading" className="text-left">
            <h2 id="featured-heading" className="sr-only">{content.featuredBadge}</h2>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800/90 border border-nordible-border dark:border-gray-700/80 shadow-xl shadow-blue-500/5 hover:border-nordible-blue/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Side */}
                <div className="lg:col-span-7 relative overflow-hidden bg-gray-950 aspect-[16/9] lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-nordible-blue text-white shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      {content.featuredBadge}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading leading-tight group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-nordible-border dark:border-gray-700/80 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      {content.readComplete}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Secondary Articles Grid */}
        <section className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.allArticlesHeading}
            </h2>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {content.showing} {filteredPosts.length} {filteredPosts.length === 1 ? content.articleSingle : content.articlePlural}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
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
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-gray-900/90 text-nordible-dark dark:text-white shadow">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-nordible-dark dark:text-white font-heading leading-snug group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-nordible-border dark:border-gray-700/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                      {content.readMore}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Science-Backed Conversion CTA Banner */}
        <section className="mt-16 rounded-3xl bg-nordible-dark text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/10 text-blue-300 border border-white/15">
              <Bot className="h-3.5 w-3.5" />
              {content.ctaBadge}
            </span>

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
                to="/"
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
