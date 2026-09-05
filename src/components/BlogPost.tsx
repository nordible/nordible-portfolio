import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Copy, 
  MapPin, 
  Search, 
  Bot, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowUp, 
  ShieldCheck, 
  Building2, 
  Compass, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  articlesBySlug, 
  defaultArticleSlug, 
  articleNotFoundTranslations 
} from '../data/blogContent';

interface BlogPostProps {
  onBookConsultation?: () => void;
  slug?: string;
}

export default function BlogPost({ onBookConsultation, slug: propSlug }: BlogPostProps) {
  const { language } = useLanguage();
  const params = useParams<{ slug?: string }>();
  const activeSlug = propSlug || params.slug || defaultArticleSlug;
  const articleTranslations = articlesBySlug[activeSlug];
  
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSlug]);

  if (!articleTranslations) {
    const notFound = articleNotFoundTranslations[language];
    return (
      <div className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 flex items-center justify-center mx-auto">
            <AlertCircle className="h-8 w-8" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            {notFound.badge}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
            {notFound.title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {notFound.desc}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{notFound.backBtn}</span>
          </Link>
        </div>
      </div>
    );
  }

  const content = articleTranslations[language];

  const handleShare = async () => {
    const shareData = {
      title: content.title,
      text: content.introP1,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const schemaSnippet = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Client Business Name]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Name & No.]",
    "addressLocality": "Frankfurt am Main",
    "postalCode": "[Postal Code]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.1109",
    "longitude": "8.6821"
  },
  "sameAs": [
    "https://www.gelbeseiten.de/...",
    "https://www.linkedin.com/company/..."
  ]
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(schemaSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": content.title,
    "description": content.introP1.slice(0, 160),
    "author": {
      "@type": "Organization",
      "name": "Nordible Technologies",
      "url": "https://nordible.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nordible Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nordible.co/images/logos/nordible-icon.png"
      }
    },
    "image": "https://nordible.co/images/frankfurt-geo-dominate-ai-search.jpg",
    "datePublished": "2026-09-04",
    "dateModified": "2026-09-04",
    "about": ["Generative Engine Optimization", "Local SEO Germany", "Schema.org", "AI Discoverability"]
  };

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-24 selection:bg-nordible-blue selection:text-white">
      {/* Dynamic Structured Data for Search & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
            >
              {content.navHome}
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <Link
              to="/blog"
              className="text-gray-500 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
            >
              {content.navBlog}
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <span className="text-nordible-blue dark:text-blue-400 truncate max-w-[140px] sm:max-w-xs">
              {content.navCurrent}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-nordible-blue transition-all cursor-pointer"
              title={content.share}
            >
              {copiedUrl ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Share2 className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />}
              <span>{copiedUrl ? content.copied : content.share}</span>
            </button>

            <span className="hidden sm:inline-block text-xs font-mono text-gray-400 dark:text-gray-500">
              Nordible · {content.navCurrent}
            </span>
          </div>
        </nav>

        {/* Header Block */}
        <header className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {content.date}
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {content.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {content.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            {content.introP1}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-start gap-4">
            <div className="p-2 rounded-xl bg-nordible-blue text-white shrink-0 mt-0.5">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {content.objectiveBoxTitle}
              <ul className="mt-2 space-y-1.5 font-medium list-none">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue shrink-0" />
                  <span>{content.objective1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue shrink-0" />
                  <span>{content.objective2}</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Featured Hero Visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-nordible-border dark:border-gray-800 bg-gray-950 group">
          <img
            src="/images/frankfurt-geo-dominate-ai-search.jpg"
            alt={content.heroAlt}
            className="w-full h-auto object-cover max-h-[520px] transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
        </div>

        {/* Section 1: NAP Consistency */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              {content.sec1Number}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.sec1Title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.sec1P1}
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.sec1P2}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                <span>{content.sec1Cards.pillarsTitle}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.sec1Cards.pillarsDesc}
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                <span>{content.sec1Cards.regionalTitle}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.sec1Cards.regionalDesc}
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Search className="h-4 w-4" />
                <span>{content.sec1Cards.b2bTitle}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.sec1Cards.b2bDesc}
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>{content.sec1Cards.legalTitle}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.sec1Cards.legalDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Primary Map Data Feeders */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              {content.sec2Number}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.sec2Title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.sec2P1}
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  {content.sec2Cards.gbpTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  {content.sec2Cards.gbpDesc}
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 rounded self-start sm:self-center shrink-0">
                {content.sec2Cards.gbpBadge}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  {content.sec2Cards.appleTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  {content.sec2Cards.appleDesc}
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded self-start sm:self-center shrink-0">
                {content.sec2Cards.appleBadge}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  {content.sec2Cards.bingTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  {content.sec2Cards.bingDesc}
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded self-start sm:self-center shrink-0">
                {content.sec2Cards.bingBadge}
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: GEO & Machine-Readable Architecture */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              {content.sec3Number}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.sec3Title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.sec3P1}
          </p>

          {/* Schema.org Entity Graph */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-nordible-dark dark:text-white font-heading">
              {content.schemaTitle}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {content.schemaP1}
            </p>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
              {content.schemaPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Code Block Container with Copy Action */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-950 text-gray-200 border border-gray-800 shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="font-mono text-gray-400 ml-2">{content.schemaFilename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  aria-label="Copy JSON-LD code"
                >
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-blue-200">
                <code>{schemaSnippet}</code>
              </pre>
            </div>
          </div>

          {/* AI Crawler Access & llms.txt */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-nordible-dark dark:text-white font-heading">
              {content.crawlerTitle}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-premium p-6 space-y-3">
                <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Bot className="h-4 w-4" />
                  <span>{content.crawlerRobotsTitle}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {content.crawlerRobotsDesc}
                </p>
              </div>

              <div className="card-premium p-6 space-y-3">
                <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>{content.crawlerLlmsTitle}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {content.crawlerLlmsDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Result */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              {content.sec4Number}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              {content.sec4Title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.sec4P1}
          </p>

          <div className="bg-nordible-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <p className="text-lg sm:text-xl text-blue-50 font-medium leading-relaxed italic relative z-10">
              {content.sec4Quote}
            </p>
          </div>
        </section>

        {/* Call to Action Card */}
        <section className="bg-gradient-to-br from-nordible-dark via-blue-950 to-nordible-dark text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              {content.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              {content.ctaDesc}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleConsultation}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 shadow-xl cursor-pointer w-full sm:w-auto"
              >
                <span>{content.ctaButton}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
              <Link
                to="/"
                className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs sm:text-sm px-6 py-4 w-full sm:w-auto"
              >
                <span>{content.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Science-Backed Mobile Thumb Zone Sticky Controls */}
      {/* Positioned at screen bottom for effortless one-handed thumb reach */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-nordible-border dark:border-gray-800 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3">
        <button
          onClick={handleShare}
          className="p-3 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95 transition-transform"
          aria-label={content.share}
        >
          {copiedUrl ? <Check className="h-5 w-5 text-emerald-500" /> : <Share2 className="h-5 w-5 text-nordible-blue" />}
        </button>

        <button
          onClick={handleConsultation}
          className="btn-primary flex-1 py-3 text-xs tracking-wider shadow-lg shadow-blue-500/20 active:scale-95"
        >
          <span>{content.mobileBookBtn}</span>
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Desktop Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-40 p-3.5 rounded-2xl bg-white dark:bg-gray-800 text-nordible-dark dark:text-blue-400 border border-nordible-border dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </article>
  );
}
