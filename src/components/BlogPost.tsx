import { useState, useEffect } from 'react';
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
  AlertCircle,
  Sparkles,
  Zap,
  Users,
  Video,
  Trophy,
  BadgePercent,
  TrendingUp,
  ExternalLink,
  Target
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  articlesBySlug, 
  defaultArticleSlug, 
  articleNotFoundTranslations,
  ArticleCard
} from '../data/blogContent';

interface BlogPostProps {
  onBookConsultation?: () => void;
  slug?: string;
}

export default function BlogPost({ onBookConsultation, slug: propSlug }: BlogPostProps) {
  const { language, getPath } = useLanguage();
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
            to={getPath('/blog')}
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
      text: content.introParagraphs[0] || '',
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

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleConsultation = () => {
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      navigate(getPath('/'));
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCardIcon = (icon?: ArticleCard['icon']) => {
    switch (icon) {
      case 'search':
        return <Search className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'zap':
        return <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400" />;
      case 'users':
        return <Users className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />;
      case 'video':
        return <Video className="h-4 w-4 text-purple-500 dark:text-purple-400" />;
      case 'building':
        return <Building2 className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'map':
        return <MapPin className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'shield':
        return <ShieldCheck className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'bot':
        return <Bot className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'sparkles':
        return <Sparkles className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      case 'compass':
        return <Compass className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
      default:
        return <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400" />;
    }
  };

  const renderMetricIcon = (icon?: 'trophy' | 'percent' | 'users' | 'trending') => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="h-5 w-5 text-amber-500 shrink-0" />;
      case 'percent':
        return <BadgePercent className="h-5 w-5 text-emerald-500 shrink-0" />;
      case 'users':
        return <Users className="h-5 w-5 text-nordible-blue dark:text-blue-400 shrink-0" />;
      case 'trending':
        return <TrendingUp className="h-5 w-5 text-nordible-blue dark:text-blue-400 shrink-0" />;
      default:
        return <TrendingUp className="h-5 w-5 text-nordible-blue dark:text-blue-400 shrink-0" />;
    }
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": content.title,
    "description": (content.introParagraphs[0] || '').slice(0, 160),
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
    "image": `https://nordible.co${content.heroImage.src}`,
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "about": [content.badge, "Nordible Case Study", "B2B Technology"]
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
              to={getPath('/')}
              className="text-gray-500 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
            >
              {content.navHome}
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <Link
              to={getPath('/blog')}
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
          {/* Metadata & Tag */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Trophy className="h-3.5 w-3.5 text-amber-500" />
              {content.badge}
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {content.date}
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {content.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {content.title}
          </h1>

          {/* Client Identity Chip (if client is defined) */}
          {content.client && (
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm max-w-fit">
              {content.client.logo && (
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-700/50 p-1.5 border border-gray-200 dark:border-gray-600 flex items-center justify-center shrink-0">
                  <img
                    src={content.client.logo}
                    alt={content.client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-nordible-dark dark:text-white font-heading">
                    {content.client.name}
                  </span>
                  {content.client.link && (
                    <a
                      href={content.client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400"
                      aria-label={`Visit ${content.client.name}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
                {content.client.location && (
                  <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 block">
                    {content.client.location}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Intro Paragraphs */}
          <div className="space-y-4">
            {content.introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={idx === 0 
                  ? "text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed" 
                  : "text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed"
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Objective Box (if defined) */}
          {content.objective && (
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-nordible-blue text-white shrink-0 mt-0.5 shadow-sm">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
                <p className="font-bold text-base text-nordible-dark dark:text-white font-heading">
                  {content.objective.title}
                </p>
                {content.objective.text && (
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {content.objective.text}
                  </p>
                )}
                {content.objective.points && content.objective.points.length > 0 && (
                  <ul className="mt-2 space-y-1.5 font-medium list-none">
                    {content.objective.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-nordible-blue shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Key Metrics Quick-Scan Bar (if defined) */}
        {content.metrics && content.metrics.length > 0 && (
          <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(content.metrics.length, 3)} gap-4`}>
            {content.metrics.map((m, mIdx) => (
              <div key={mIdx} className="p-5 rounded-2xl bg-white dark:bg-gray-800/90 border border-nordible-border dark:border-gray-700 shadow-sm text-left relative overflow-hidden">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  {m.label}
                </span>
                <div className="flex items-center gap-2">
                  {renderMetricIcon(m.icon)}
                  <span className="text-2xl font-extrabold tracking-tight font-heading text-nordible-dark dark:text-white">
                    {m.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Hero Visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-nordible-border dark:border-gray-800 bg-gray-950 group">
          <img
            src={content.heroImage.src}
            alt={content.heroImage.alt}
            className="w-full h-auto object-cover max-h-[520px] transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
          {(content.heroImage.caption || content.heroImage.badge) && (
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-gray-950/80 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              {content.heroImage.caption && (
                <span className="text-xs font-mono font-semibold text-blue-200">
                  {content.heroImage.caption}
                </span>
              )}
              {content.heroImage.badge && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> {content.heroImage.badge}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Sections */}
        {content.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
                {section.number}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
                {section.title}
              </h2>
            </div>

            {section.paragraphs && section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}

            {section.cards && section.cards.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {section.cards.map((card, cIdx) => (
                  <div key={cIdx} className="card-premium p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                        {renderCardIcon(card.icon)}
                        <span>{card.title}</span>
                      </div>
                      {card.badge && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.codeBlock && (
              <div className="relative rounded-2xl overflow-hidden bg-gray-950 text-gray-200 border border-gray-800 shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="font-mono text-gray-400 ml-2">{section.codeBlock.filename}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(section.codeBlock?.code || '')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                    aria-label="Copy code"
                  >
                    {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-blue-200">
                  <code>{section.codeBlock.code}</code>
                </pre>
              </div>
            )}

            {section.quote && (
              <div className="bg-gradient-to-br from-nordible-dark via-gray-900 to-nordible-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4 border border-gray-800">
                <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <p className="text-lg sm:text-xl text-blue-50 font-medium leading-relaxed italic relative z-10">
                  {section.quote}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Call to Action Card */}
        <section className="bg-gradient-to-br from-nordible-dark via-blue-950 to-nordible-dark text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            {content.cta.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20">
                {content.cta.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              {content.cta.title}
            </h2>
            {content.cta.desc && (
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                {content.cta.desc}
              </p>
            )}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleConsultation}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 shadow-xl cursor-pointer w-full sm:w-auto"
              >
                <span>{content.cta.buttonText}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
              {content.cta.secondaryText && (
                <Link
                  to={getPath('/')}
                  className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs sm:text-sm px-6 py-4 w-full sm:w-auto"
                >
                  <span>{content.cta.secondaryText}</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Science-Backed Mobile Thumb Zone Sticky Controls */}
      {/* Positioned at screen bottom for effortless one-handed thumb reach */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-nordible-border dark:border-gray-800 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3">
        <button
          onClick={handleShare}
          className="p-3 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95 transition-transform cursor-pointer"
          aria-label={content.share}
        >
          {copiedUrl ? <Check className="h-5 w-5 text-emerald-500" /> : <Share2 className="h-5 w-5 text-nordible-blue" />}
        </button>

        <button
          onClick={handleConsultation}
          className="btn-primary flex-1 py-3 text-xs tracking-wider shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer"
        >
          <span>{content.cta.mobileButtonText || content.cta.buttonText}</span>
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95 transition-transform cursor-pointer"
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
          className="hidden md:flex fixed bottom-8 right-8 z-40 p-3.5 rounded-2xl bg-white dark:bg-gray-800 text-nordible-dark dark:text-blue-400 border border-nordible-border dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </article>
  );
}
