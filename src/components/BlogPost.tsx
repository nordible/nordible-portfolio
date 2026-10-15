'use client';
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
  Target,
  X,
  ZoomIn,
  Info,
  Briefcase
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  articlesBySlug, 
  defaultArticleSlug, 
  articleNotFoundTranslations,
  ArticleCard,
  ArticleImage,
  auditFunnelTranslations
} from '../data/blogContent';
import { contactConfig } from '../config/contact';
import { sendContactEmail } from '../services/emailService';

interface BlogPostProps {
  onBookConsultation?: () => void;
  slug?: string;
}

export default function BlogPost({ onBookConsultation, slug: propSlug }: BlogPostProps) {
  const { language, getPath } = useLanguage();
  const funnel = auditFunnelTranslations[language];
  const params = useParams<{ slug?: string }>();
  const activeSlug = propSlug || params.slug || defaultArticleSlug;
  const articleTranslations = articlesBySlug[activeSlug];
  
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<ArticleImage | null>(null);

  // 3-Step Qualification & Ad Funnel Modal State
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditStep, setAuditStep] = useState<1 | 2 | 3 | 'disqualified' | 'success'>(1);
  const [auditIndustry, setAuditIndustry] = useState('');
  const [auditGoal, setAuditGoal] = useState('');
  const [auditWebsite, setAuditWebsite] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [isSubmittingAudit, setIsSubmittingAudit] = useState(false);
  const [auditError, setAuditError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const openAuditModal = () => {
    setAuditError(null);
    setAuditStep(1);
    setIsAuditModalOpen(true);
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

  const getIndustryIcon = (iconType: 'building' | 'briefcase' | 'shield' | 'target') => {
    switch (iconType) {
      case 'building': return Building2;
      case 'briefcase': return Briefcase;
      case 'shield': return ShieldCheck;
      case 'target': return Target;
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

        {/* Ad Campaign Header Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-3.5 sm:p-4 shadow-lg shadow-blue-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-white/20 text-white shrink-0">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-xs sm:text-sm font-medium leading-snug">
              <strong className="font-bold">
                {funnel.adRibbon.boldText}
              </strong>{' '}
              {funnel.adRibbon.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={openAuditModal}
            className="px-4 py-2 rounded-xl bg-white text-nordible-blue hover:bg-blue-50 text-xs font-bold whitespace-nowrap shadow-md cursor-pointer transition-all active:scale-95 shrink-0"
          >
            {funnel.adRibbon.buttonText}
          </button>
        </div>

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
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm max-w-fit">
              {content.client.logo && (
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700/50 p-2 border border-gray-200 dark:border-gray-600 flex items-center justify-center shrink-0">
                  <img
                    src={content.client.logo}
                    alt={content.client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 block">
                  {content.client.label || (language === 'de' ? 'Auftraggeber & Praxispartner' : 'Client & Practice Partner')}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-nordible-dark dark:text-white font-heading">
                    {content.client.name}
                  </span>
                  {content.client.location && (
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      · {content.client.location}
                    </span>
                  )}
                </div>
                {content.client.industry && (
                  <span className="text-[11px] text-gray-600 dark:text-gray-400 block font-medium">
                    {content.client.industry}
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

        {/* Case Study Hero Visual */}
        <div 
          onClick={() => setActiveLightboxImage(content.heroImage)}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-nordible-border dark:border-gray-800 bg-gray-950 group cursor-zoom-in transition-all duration-300 hover:border-nordible-blue dark:hover:border-blue-500"
        >
          <img
            src={content.heroImage.src}
            alt={content.heroImage.alt}
            className="w-full h-auto object-cover max-h-[520px] transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="h-3.5 w-3.5 text-blue-300" />
            <span>{language === 'de' ? 'Vollbild' : 'Full Screen'}</span>
          </div>
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

            {/* Executive Business Takeaway */}
            {section.businessTakeaway && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/40 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200/80 dark:border-blue-900/50 flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-xl bg-nordible-blue text-white shrink-0 mt-0.5">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                    {language === 'de' ? 'Kernaussage für Entscheider' : 'Executive Business Takeaway'}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-nordible-dark dark:text-blue-100 leading-snug">
                    {section.businessTakeaway}
                  </p>
                </div>
              </div>
            )}

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

            {/* Section Single Image */}
            {section.image && (
              <div 
                onClick={() => section.image && setActiveLightboxImage(section.image)}
                className="relative rounded-2xl overflow-hidden border border-nordible-border dark:border-gray-800 bg-gray-950 shadow-xl group my-6 cursor-zoom-in transition-all duration-300 hover:border-nordible-blue dark:hover:border-blue-500"
              >
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-3.5 w-3.5 text-blue-300" />
                  <span>{language === 'de' ? 'Vollbild' : 'Full Screen'}</span>
                </div>
                {(section.image.caption || section.image.badge || section.image.explanation || section.image.businessBenefit) && (
                  <div className="p-4 sm:p-5 bg-gray-900/95 border-t border-gray-800 text-white space-y-3.5 text-xs sm:text-sm">
                    {(section.image.caption || section.image.badge) && (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {section.image.caption && <span className="font-mono text-blue-200 font-medium text-xs">{section.image.caption}</span>}
                        {section.image.badge && (
                          <span className="font-mono text-emerald-400 flex items-center gap-1 text-xs shrink-0 font-semibold">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {section.image.badge}
                          </span>
                        )}
                      </div>
                    )}
                    {(section.image.explanation || section.image.businessBenefit) && (
                      <div className="pt-3 border-t border-gray-800/80 grid sm:grid-cols-2 gap-3 text-left">
                        {section.image.explanation && (
                          <div className="space-y-1.5 bg-gray-800/50 rounded-xl p-3 border border-gray-700/50">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                              <Info className="h-3.5 w-3.5" />
                              {language === 'de' ? 'Was Sie hier sehen' : 'Plain-Language Explanation'}
                            </span>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                              {section.image.explanation}
                            </p>
                          </div>
                        )}
                        {section.image.businessBenefit && (
                          <div className="space-y-1.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                              <TrendingUp className="h-3.5 w-3.5" />
                              {language === 'de' ? 'Geschäftlicher Nutzen' : 'Business Benefit'}
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                              {section.image.businessBenefit}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Section Multi-Image Full-Width Stack */}
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 gap-6 pt-2 my-6">
                {section.images.map((img, iIdx) => (
                  <div 
                    key={iIdx} 
                    onClick={() => setActiveLightboxImage(img)}
                    className="relative rounded-2xl overflow-hidden border border-nordible-border dark:border-gray-700 bg-gray-950 shadow-lg group flex flex-col justify-between cursor-zoom-in transition-all duration-300 hover:border-nordible-blue dark:hover:border-blue-500 hover:shadow-2xl"
                  >
                    <div className="overflow-hidden bg-black/50 flex items-center justify-center relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="h-3.5 w-3.5 text-blue-300" />
                        <span>{language === 'de' ? 'Vollbild' : 'Full Screen'}</span>
                      </div>
                    </div>
                    {(img.caption || img.badge || img.explanation || img.businessBenefit) && (
                      <div className="p-4 sm:p-5 bg-gray-900/95 border-t border-gray-800 text-white space-y-3.5 text-xs sm:text-sm">
                        {(img.caption || img.badge) && (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            {img.caption && <span className="font-mono text-blue-200 font-medium text-xs">{img.caption}</span>}
                            {img.badge && (
                              <span className="font-mono text-emerald-400 flex items-center gap-1 text-xs shrink-0 font-semibold">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                {img.badge}
                              </span>
                            )}
                          </div>
                        )}
                        {(img.explanation || img.businessBenefit) && (
                          <div className="pt-3 border-t border-gray-800/80 grid sm:grid-cols-2 gap-3 text-left">
                            {img.explanation && (
                              <div className="space-y-1.5 bg-gray-800/50 rounded-xl p-3 border border-gray-700/50">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                                  <Info className="h-3.5 w-3.5" />
                                  {language === 'de' ? 'Was Sie hier sehen' : 'Plain-Language Explanation'}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                                  {img.explanation}
                                </p>
                              </div>
                            )}
                            {img.businessBenefit && (
                              <div className="space-y-1.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                  <TrendingUp className="h-3.5 w-3.5" />
                                  {language === 'de' ? 'Geschäftlicher Nutzen' : 'Business Benefit'}
                                </span>
                                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                                  {img.businessBenefit}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
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

        {/* Client Live Website Reference Card */}
        {content.client && content.client.link && (
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/90 border border-nordible-border dark:border-gray-700 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {content.client.logo && (
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700/50 p-2 border border-gray-200 dark:border-gray-600 flex items-center justify-center shrink-0">
                  <img
                    src={content.client.logo}
                    alt={content.client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div className="text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400 block">
                  {language === 'de' ? 'Live-Praxis-Webseite erkunden' : 'Explore Live Practice Website'}
                </span>
                <span className="text-base font-extrabold text-nordible-dark dark:text-white font-heading">
                  {content.client.name} {content.client.location ? `· ${content.client.location}` : ''}
                </span>
              </div>
            </div>

            <a
              href={content.client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-nordible-border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-xs font-bold text-nordible-dark dark:text-white hover:border-nordible-blue dark:hover:border-blue-400 hover:text-nordible-blue transition-all cursor-pointer shrink-0"
              aria-label={`Visit ${content.client.name}`}
            >
              <span>{content.client.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <ExternalLink className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
            </a>
          </div>
        )}

        {/* Core Offer Box: Free 15-Minute Audit */}
        <section className="bg-gradient-to-br from-nordible-dark via-blue-950 to-nordible-dark text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              {funnel.coreOffer.badge}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading leading-tight">
              {funnel.coreOffer.title}
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              {funnel.coreOffer.subtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={openAuditModal}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-6 py-4 shadow-xl cursor-pointer w-full sm:w-auto font-bold inline-flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>{funnel.coreOffer.startAuditBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleConsultation}
                className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs sm:text-sm px-6 py-4 w-full sm:w-auto cursor-pointer"
              >
                <span>{funnel.coreOffer.bookCallBtn}</span>
              </button>
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
          onClick={openAuditModal}
          className="btn-primary flex-1 py-3 text-xs tracking-wider shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>{funnel.coreOffer.mobileBtnText}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* 3-Step Interactive Qualification Modal */}
      {isAuditModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsAuditModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-nordible-border dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-nordible-blue dark:text-blue-400">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-nordible-blue dark:text-blue-400">
                  {funnel.modal.badge}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsAuditModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label={funnel.modal.closeAria}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Bar (Step 1-3) */}
            {typeof auditStep === 'number' && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>{funnel.modal.stepOf(auditStep, 3)}</span>
                  <span>{auditStep === 1 ? '33%' : auditStep === 2 ? '66%' : '100%'}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-nordible-blue transition-all duration-300"
                    style={{ width: `${(auditStep / 3) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Step 1: Industry Category */}
            {auditStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-gray-900 dark:text-white">
                    {funnel.modal.step1.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {funnel.modal.step1.subtitle}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {funnel.modal.step1.industries.map((item) => {
                    const ItemIcon = getIndustryIcon(item.iconType);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setAuditIndustry(item.id);
                          setAuditStep(2);
                        }}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                          auditIndustry === item.id
                            ? 'border-nordible-blue bg-blue-50/50 dark:bg-blue-950/40 text-nordible-blue dark:text-blue-300 shadow-sm'
                            : 'border-nordible-border dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:border-nordible-blue/60 text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700/60 text-nordible-blue dark:text-blue-400">
                            <ItemIcon className="h-4 w-4" />
                          </span>
                          <span className="text-xs sm:text-sm font-bold">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Goal & Readiness (Filter) */}
            {auditStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-gray-900 dark:text-white">
                    {funnel.modal.step2.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {funnel.modal.step2.subtitle}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setAuditGoal('mandate');
                      setAuditStep(3);
                    }}
                    className="w-full p-4 rounded-2xl border border-nordible-border dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:border-nordible-blue/60 text-left flex items-start gap-3 transition-all cursor-pointer group"
                  >
                    <span className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-nordible-blue transition-colors">
                        {funnel.modal.step2.mandate.title}
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                        {funnel.modal.step2.mandate.desc}
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAuditGoal('ranking');
                      setAuditStep(3);
                    }}
                    className="w-full p-4 rounded-2xl border border-nordible-border dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:border-nordible-blue/60 text-left flex items-start gap-3 transition-all cursor-pointer group"
                  >
                    <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-nordible-blue dark:text-blue-400 shrink-0 mt-0.5">
                      <Trophy className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-nordible-blue transition-colors">
                        {funnel.modal.step2.ranking.title}
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                        {funnel.modal.step2.ranking.desc}
                      </div>
                    </div>
                  </button>

                  {/* Disqualification Option: Private/Tire-kicker */}
                  <button
                    type="button"
                    onClick={() => {
                      setAuditStep('disqualified');
                    }}
                    className="w-full p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30 hover:border-gray-400 text-left flex items-start gap-3 transition-all cursor-pointer"
                  >
                    <span className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 shrink-0 mt-0.5">
                      <Info className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
                        {funnel.modal.step2.disqualified.title}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {funnel.modal.step2.disqualified.desc}
                      </div>
                    </div>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setAuditStep(1)}
                    className="text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    ← {funnel.modal.backBtn}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Verified Contact Info */}
            {auditStep === 3 && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!auditEmail || !auditWebsite) return;
                  setIsSubmittingAudit(true);
                  setAuditError(null);

                  // 1. Immediately persist lead to localStorage so it is visible in /dashboard
                  try {
                    const stored = localStorage.getItem('nordible_leads');
                    const existingLeads = stored ? JSON.parse(stored) : [];
                    const newLead = {
                      id: Date.now().toString(),
                      fullName: auditWebsite,
                      email: auditEmail,
                      phone: auditPhone,
                      projectType: `Audit: ${auditIndustry || 'B2B Case Study'}`,
                      budget: '15-Min Free Audit',
                      description: `Branche: ${auditIndustry}\nZiel: ${auditGoal}\nWebsite: ${auditWebsite}\nTelefon: ${auditPhone}`,
                      status: 'new' as const,
                      submittedAt: new Date().toISOString()
                    };
                    localStorage.setItem('nordible_leads', JSON.stringify([newLead, ...existingLeads]));
                  } catch (err) {
                    console.warn('Could not persist lead to localStorage:', err);
                  }

                  // 2. Dispatch email notification and handle errors explicitly
                  try {
                    const success = await sendContactEmail({
                      fullName: auditWebsite,
                      email: auditEmail,
                      phone: auditPhone,
                      projectType: `B2B Case Study Audit (${auditIndustry || 'Allgemein'})`,
                      budget: '15-Min Audit',
                      description: `Branche: ${auditIndustry}\nZiel: ${auditGoal}\nWebsite: ${auditWebsite}\nTelefon: ${auditPhone}`
                    });

                    if (success) {
                      setAuditStep('success');
                    } else {
                      setAuditError(funnel.modal.step3.errorMessage);
                    }
                  } catch (err) {
                    console.error('Audit submission failed:', err);
                    setAuditError(funnel.modal.step3.errorMessage);
                  } finally {
                    setIsSubmittingAudit(false);
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-gray-900 dark:text-white">
                    {funnel.modal.step3.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {funnel.modal.step3.subtitle}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      {funnel.modal.step3.websiteLabel}
                    </label>
                    <input
                      type="url"
                      required
                      placeholder={funnel.modal.step3.websitePlaceholder}
                      value={auditWebsite}
                      onChange={(e) => setAuditWebsite(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      {funnel.modal.step3.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={funnel.modal.step3.emailPlaceholder}
                      value={auditEmail}
                      onChange={(e) => setAuditEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      {funnel.modal.step3.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={funnel.modal.step3.phonePlaceholder}
                      value={auditPhone}
                      onChange={(e) => setAuditPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-nordible-blue focus:ring-1 focus:ring-nordible-blue"
                    />
                  </div>
                </div>

                {auditError && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-500 dark:text-red-400" />
                    <div className="flex-1 leading-relaxed">
                      <span>{auditError}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingAudit}
                    className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>
                      {isSubmittingAudit
                        ? funnel.modal.step3.submittingBtn
                        : funnel.modal.step3.submitBtn}
                    </span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAuditError(null);
                      setAuditStep(2);
                    }}
                    className="font-semibold hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    ← {funnel.modal.backBtn}
                  </button>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    {funnel.modal.step3.confidentialNote}
                  </span>
                </div>
              </form>
            )}

            {/* Disqualified Screen (Polite Redirect to Free Resources) */}
            {auditStep === 'disqualified' && (
              <div className="space-y-4 py-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-gray-900 dark:text-white">
                    {funnel.modal.disqualifiedScreen.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {funnel.modal.disqualifiedScreen.desc}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={getPath('/blog')}
                    onClick={() => setIsAuditModalOpen(false)}
                    className="btn-primary py-3 px-5 text-xs font-bold text-center"
                  >
                    {funnel.modal.disqualifiedScreen.hubBtn}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsAuditModalOpen(false)}
                    className="btn-secondary py-3 px-4 text-xs font-semibold"
                  >
                    {funnel.modal.disqualifiedScreen.closeBtn}
                  </button>
                </div>
              </div>
            )}

            {/* Success Screen */}
            {auditStep === 'success' && (
              <div className="space-y-5 py-2 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black font-heading text-gray-900 dark:text-white">
                    {funnel.modal.successScreen.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                    {funnel.modal.successScreen.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={contactConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-full shadow-lg shadow-blue-500/30"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{funnel.modal.successScreen.reserveSlotBtn}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar with Badge & Close Button */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between gap-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              {activeLightboxImage.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {activeLightboxImage.badge}
                </span>
              )}
            </div>

            <button
              onClick={() => setActiveLightboxImage(null)}
              className="p-2.5 sm:px-4 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
              aria-label="Close Fullscreen"
            >
              <span>{language === 'de' ? 'Schließen (Esc)' : 'Close (Esc)'}</span>
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Fullscreen Image Container */}
          <div 
            className="flex-1 flex items-center justify-center w-full max-w-7xl my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightboxImage.src}
              alt={activeLightboxImage.alt || 'Fullscreen screenshot'}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* Bottom Caption & Plain-Language Executive Card */}
          {(activeLightboxImage.caption || activeLightboxImage.explanation || activeLightboxImage.businessBenefit) && (
            <div 
              className="w-full max-w-4xl p-4 sm:p-5 rounded-2xl bg-gray-950/95 border border-white/10 backdrop-blur-md text-left text-xs sm:text-sm text-gray-200 z-10 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {activeLightboxImage.caption && (
                <div className="font-mono text-blue-200 text-xs sm:text-sm font-semibold text-center border-b border-gray-800 pb-2">
                  {activeLightboxImage.caption}
                </div>
              )}
              {(activeLightboxImage.explanation || activeLightboxImage.businessBenefit) && (
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {activeLightboxImage.explanation && (
                    <div className="space-y-1 bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                        <Info className="h-3.5 w-3.5" />
                        {language === 'de' ? 'Was Sie hier sehen' : 'Plain-Language Explanation'}
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed font-normal">
                        {activeLightboxImage.explanation}
                      </p>
                    </div>
                  )}
                  {activeLightboxImage.businessBenefit && (
                    <div className="space-y-1 bg-emerald-950/40 border border-emerald-500/25 rounded-xl p-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <TrendingUp className="h-3.5 w-3.5" />
                        {language === 'de' ? 'Geschäftlicher Nutzen' : 'Business Benefit'}
                      </span>
                      <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
                        {activeLightboxImage.businessBenefit}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
