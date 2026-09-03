import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Copy, 
  MapPin, 
  Search, 
  Bot, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowUp,
  ShieldCheck,
  Building2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface BlogPostFrankfurtProps {
  onBookConsultation?: () => void;
}

export default function BlogPostFrankfurt({ onBookConsultation }: BlogPostFrankfurtProps) {
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
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Case Study: Local Dominance and AI Discoverability in Frankfurt',
      text: 'How Nordible engineered local directory dominance and Generative Engine Optimization (GEO) for a German business.',
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
    "headline": "Case Study: How We Engineered Local Dominance and AI Discoverability for a Frankfurt Business",
    "description": "Technical and strategic blueprint for mastering German business directories and Generative Engine Optimization (GEO) for LLM recommendations.",
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
    "datePublished": "2026-09-04",
    "dateModified": "2026-09-04",
    "about": ["Generative Engine Optimization", "Local SEO Germany", "Schema.org", "Frankfurt Business Discovery"]
  };

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-24 selection:bg-nordible-blue selection:text-white">
      {/* Dynamic Structured Data for Search & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-nordible-blue transition-all"
              title="Share article"
            >
              {copiedUrl ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Share2 className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />}
              <span>{copiedUrl ? 'Copied Link' : 'Share'}</span>
            </button>

            <span className="hidden sm:inline-block text-xs font-mono text-gray-400 dark:text-gray-500">
              Nordible · Case Study
            </span>
          </div>
        </nav>

        {/* Header Block */}
        <header className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-100 dark:border-blue-800">
              <Sparkles className="h-3.5 w-3.5" />
              GEO & Local SEO Case Study
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> September 2026
            </span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            How We Engineered Local Dominance and AI Discoverability for a Frankfurt Business
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            When businesses expand or modernize their digital presence in Germany, traditional SEO is no longer the entire playing field. Search has evolved: potential clients, partners, and decision-makers are no longer just typing queries into search bars—they are asking conversational AI engines like <strong className="text-nordible-dark dark:text-white font-semibold">ChatGPT, Google Gemini, and Perplexity</strong> for direct recommendations.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-start gap-4">
            <div className="p-2 rounded-xl bg-nordible-blue text-white shrink-0 mt-0.5">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Recently at <strong className="text-nordible-dark dark:text-white font-bold">Nordible</strong>, we took on the challenge of establishing a complete local and generative presence for our client based in <strong className="text-nordible-dark dark:text-white font-bold">Frankfurt am Main</strong> with two core objectives:
              <ul className="mt-2 space-y-1.5 font-medium list-none">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue shrink-0" />
                  <span><strong>Dominate local discovery</strong> across the core German directory and mapping ecosystems.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue shrink-0" />
                  <span><strong>Engineer AI discoverability (GEO)</strong> so that when an AI model is asked for top regional specialists, our client is directly cited.</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Section 1: NAP Consistency */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              Establishing NAP Consistency Across the German Directory Ecosystem
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            In Germany, directory data integrity is heavily weighted by both search algorithms and legal standards. Discrepancies in company naming, address formatting, or contact details dilute domain trust and confuse algorithmic indexers.
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We unified our client’s <strong className="text-nordible-dark dark:text-white font-semibold">NAP (Name, Address, Phone Number)</strong> footprint across premier German business directories and citation networks:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                <span>Authoritative German Pillars</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Claimed, verified, and synchronized listings on <strong>Gelbe Seiten</strong>, <strong>Das Örtliche</strong>, <strong>Das Telefonbuch</strong>, and <strong>11880.com</strong>.
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                <span>Regional & Industry Hubs</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Indexed on <strong>Meinestadt.de</strong>, <strong>Cylex Deutschland</strong>, and Frankfurt-specific regional citation networks.
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Search className="h-4 w-4" />
                <span>B2B Platforms</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Standardized company entity records across <strong>LinkedIn</strong>, <strong>Xing</strong>, and <strong>Wer liefert was (wlw)</strong>.
              </p>
            </div>

            <div className="card-premium p-6 space-y-3">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Legal Alignment</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Ensured all directory descriptions and business parameters precisely mirrored statutory <em>Impressum</em> and commercial registration standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Primary Map Data Feeders */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              Unifying the Primary Map Data Feeders
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Generative models rely extensively on grounding data pulled from major map ecosystems. We secured and optimized verified listings across the three primary providers:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Google Business Profile (GBP)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  Configured with precise Frankfurt geo-coordinates, verified service categories, primary business attributes, and regular status updates—feeding both Google Search and Gemini’s real-time local search graphs.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 rounded self-start sm:self-center shrink-0">
                Search & Gemini
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  Apple Business Connect
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  Fully integrated to ensure seamless surfacing inside Apple Maps, Siri, and Apple Intelligence.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded self-start sm:self-center shrink-0">
                Maps & Siri
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-nordible-border dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-nordible-dark dark:text-white flex items-center gap-2 font-heading">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  Bing Places for Business
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  Configured to anchor the entity data directly within Microsoft Copilot and Bing’s enterprise discovery index.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded self-start sm:self-center shrink-0">
                Copilot & Bing
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: GEO & Machine-Readable Architecture */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              03
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              Generative Engine Optimization (GEO) & Machine-Readable Architecture
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Being listed on directory websites is only half the battle. To be recommended by LLMs, a brand's website must be structured so automated reasoning systems can parse services, credibility, and location without ambiguity.
          </p>

          {/* Schema.org Entity Graph */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-nordible-dark dark:text-white font-heading">
              Rich Schema.org Entity Graph
            </h3>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Instead of relying on basic metadata, we deployed nested <strong className="text-nordible-dark dark:text-white font-semibold">JSON-LD Schema</strong> directly into the client’s web architecture:
            </p>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>Implemented <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 font-mono text-xs">LocalBusiness</code> / <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 font-mono text-xs">ProfessionalService</code> structured data.</li>
              <li>Mapped exact geographic coordinates (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 font-mono text-xs">geo</code>), service radii, opening hours, and structured <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 font-mono text-xs">hasOfferCatalog</code> definitions.</li>
              <li>Linked verified third-party entities (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 font-mono text-xs">sameAs</code>) pointing to official registry pages and certified directories to validate domain authority.</li>
            </ul>

            {/* Code Block Container with Copy Action */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-950 text-gray-200 border border-gray-800 shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="font-mono text-gray-400 ml-2">schema-entity.jsonld</span>
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
              AI Crawler Access & Structured Context (<code className="font-mono text-sm">llms.txt</code>)
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-premium p-6 space-y-3">
                <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Bot className="h-4 w-4" />
                  <span>Robots Policy</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Configured modern crawler rules to openly permit semantic parsing agents (including <strong>GPTBot</strong>, <strong>PerplexityBot</strong>, and <strong>Google-Extended</strong>) while protecting sensitive internal assets.
                </p>
              </div>

              <div className="card-premium p-6 space-y-3">
                <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span><code>llms.txt</code> Standard</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Deployed a standardized lightweight markdown file at <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs font-mono">/llms.txt</code> summarizing core capabilities, Frankfurt market focus, and contact interfaces for instant ingestion by LLM scrapers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Result */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-nordible-blue/10 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm font-mono">
              04
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">
              The Result: Built for the Next Era of Discovery
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            By bridging traditional German business directories with modern Generative Engine Optimization, our client moved from a fragmented web footprint to an authoritative, verifiable local entity.
          </p>

          <div className="bg-nordible-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <p className="text-lg sm:text-xl text-blue-50 font-medium leading-relaxed italic relative z-10">
              "Today, whether a potential customer searches via Google Maps in downtown Frankfurt or queries an AI model for a trusted local partner, our client’s business is positioned at the top of the conversation."
            </p>
          </div>
        </section>

        {/* Call to Action Card */}
        <section className="bg-gradient-to-br from-nordible-dark via-blue-950 to-nordible-dark text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase bg-blue-900/50 rounded-full border border-blue-800">
              Transform Your Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              Ready to Dominate Local Search & AI Discovery?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Need to modernize your digital presence, deploy custom web applications, or optimize your business for AI discovery? Let's build digital systems engineered for long-term growth.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleConsultation}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 shadow-xl cursor-pointer w-full sm:w-auto"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </button>
              <Link
                to="/"
                className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs sm:text-sm px-6 py-4 w-full sm:w-auto"
              >
                <span>Explore Full Portfolio</span>
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
          aria-label="Share article"
        >
          {copiedUrl ? <Check className="h-5 w-5 text-emerald-500" /> : <Share2 className="h-5 w-5 text-nordible-blue" />}
        </button>

        <button
          onClick={handleConsultation}
          className="btn-primary flex-1 py-3 text-xs tracking-wider shadow-lg shadow-blue-500/20 active:scale-95"
        >
          <span>Book Consultation</span>
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
