'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Share2, 
  Copy, 
  Check, 
  Cpu, 
  Layers, 
  ArrowRight,
  FileText,
  Sparkles,
  Bot
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectData } from '../data/portfolioProjects';
import { contactConfig } from '../config/contact';
import Header from './Header';
import Footer from './Footer';

interface ProjectDetailPageProps {
  project: ProjectData;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { language, getPath } = useLanguage();
  const navigate = useNavigate();
  const isDe = language === 'de';

  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const headline = isDe ? project.heroHeadline.de : project.heroHeadline.en;
  const badge = isDe ? project.badge.de : project.badge.en;
  const executiveSummary = isDe ? project.executiveSummary.de : project.executiveSummary.en;
  const challenges = isDe ? project.businessChallenge.de : project.businessChallenge.en;
  const solutions = isDe ? project.strategicSolution.de : project.strategicSolution.en;
  const techTrust = isDe ? project.technologyTrust.de : project.technologyTrust.en;
  const quote = project.clientQuote ? (isDe ? project.clientQuote.quote.de : project.clientQuote.quote.en) : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const generateMarkdownSummary = () => {
    return `# ${project.title} - ${project.client}
## Business Impact Summary
${executiveSummary}

## Quantified Business Results
${project.businessResults.map((r) => `- **${isDe ? (r.labelDe || r.label) : r.label}**: ${r.value} (${isDe ? (r.contextDe || r.context) : r.context})`).join('\n')}

## Core Business Challenges Solved
${challenges.map((c) => `- ${c}`).join('\n')}

## Strategic Solution
${solutions.map((s) => `- ${s}`).join('\n')}

## Technological Foundation & Security
${techTrust}
Stack: ${project.technologyTrust.stack.join(', ')}

---
Contact Systems Architect Kabeer Shah: ${contactConfig.email.founder} | ${contactConfig.phone.display}
Website: ${contactConfig.websiteUrl}
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownSummary());
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  // Structured Data Schema for AI Agents and Search Engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud / Web / Mobile',
    description: executiveSummary,
    creator: {
      '@type': 'Organization',
      name: contactConfig.company.name,
      url: contactConfig.websiteUrl,
      founder: {
        '@type': 'Person',
        name: contactConfig.founder.name,
        jobTitle: contactConfig.founder.titleEn,
      },
    },
    customer: {
      '@type': 'Organization',
      name: project.client,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Custom technology solutions with 100% intellectual property ownership.',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <main className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 pb-28 md:pb-16 pt-24">
        {/* Navigation Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to={getPath('/#portfolio')}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{isDe ? 'Zurück zum Portfolio' : 'Back to Portfolio'}</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                title={isDe ? 'Als KI-Agenten-Markdown kopieren' : 'Copy AI Agent Markdown'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors"
              >
                {copiedMarkdown ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{isDe ? 'KI-Text kopiert!' : 'Agent Markdown Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Bot className="h-3.5 w-3.5 text-blue-500" />
                    <span>{isDe ? 'Für KI-Agenten (MD)' : 'For AI Agents (MD)'}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyLink}
                title={isDe ? 'Projekt-Link kopieren' : 'Copy project link'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors"
              >
                {copiedUrl ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{isDe ? 'Kopiert' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-slate-400" />
                    <span>{isDe ? 'Teilen' : 'Share'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-200 dark:border-blue-800/50">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              {headline}
            </h1>

            {/* Client Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 pt-2 border-b border-slate-200 dark:border-slate-800/80 pb-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 dark:text-white">{isDe ? 'Kunde:' : 'Client:'}</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{project.client}</span>
              </div>
              
              {project.clientRole && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">{isDe ? 'Rolle:' : 'Role:'}</span>
                    <span>{project.clientRole}</span>
                  </div>
                </>
              )}

              {project.liveUrl && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    <span>{isDe ? 'Produkt / Website aufrufen' : 'Visit Live Project'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Metric Bar (Executive Numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {project.businessResults.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    {metric.value}
                  </span>
                  <TrendingUp className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {isDe ? (metric.labelDe || metric.label) : metric.label}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isDe ? (metric.contextDe || metric.context) : metric.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Summary Card (C-Level Hook) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-900/40 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-blue-700 dark:text-blue-400 uppercase">
                {isDe ? 'Management-Zusammenfassung (Executive Summary)' : 'Executive Summary & Business Impact'}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {executiveSummary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to={getPath(`/blog/${project.caseStudySlug}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>{isDe ? 'Detaillierte Fallstudie lesen' : 'Read Full Business Case Study'}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a
                href={contactConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
              >
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>{isDe ? 'Strategiegespräch buchen' : 'Book Executive Strategy Call'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Business Challenge vs Strategic Solution (Two-Column Impact Analysis) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Bottleneck */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-400">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">
                    {isDe ? 'Der geschäftliche Engpass' : 'The Business Bottleneck'}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                  {isDe ? 'Herausforderungen vor der Nordible-Intervention' : 'Pre-Intervention Operational Friction'}
                </h3>
                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  {challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
                {isDe ? 'Risiko: Margenverlust & verzögerte Marktchancen' : 'Risk: Margin erosion & delayed market opportunities'}
              </div>
            </div>

            {/* The Strategic Solution */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">
                    {isDe ? 'Die strategische Intervention' : 'The Strategic Intervention'}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                  {isDe ? 'Umsetzung & operative Beschleunigung' : 'High-Velocity Execution & IP Delivery'}
                </h3>
                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed font-medium">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                {isDe ? 'Ergebnis: 100 % Code-Eigentum ohne Zwischenhändler' : 'Outcome: 100% Code Ownership, Zero Middlemen'}
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonial / Endorsement (if available) */}
        {quote && project.clientQuote && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="absolute top-0 right-0 p-8 text-blue-500/10 text-8xl font-serif font-black select-none pointer-events-none">
                “
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed italic mb-6 text-slate-100 relative z-10">
                "{quote}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-base">
                  {project.clientQuote.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{project.clientQuote.author}</div>
                  <div className="text-xs text-blue-400 font-mono">
                    {project.clientQuote.role} · {project.clientQuote.company}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technology Foundation as Trust Anchor */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3 text-slate-500 dark:text-slate-400">
              <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xs font-mono font-bold tracking-wider uppercase">
                {isDe ? 'Technologisches Fundament als Vertrauensanker' : 'Technology Foundation as Trust Anchor'}
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {techTrust}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              {project.technologyTrust.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              {isDe
                ? 'Planen auch Sie ein Technologie- oder Digitalprojekt?'
                : 'Planning a high-impact technology or digital scaling project?'}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {isDe
                ? 'Sprechen Sie direkt mit Systems Architect Kabeer Shah. Keine Verkaufs-Zwischenhändler, 10x Umsetzungsgeschwindigkeit und 100 % Code-Eigentum.'
                : 'Collaborate directly with Systems Architect Kabeer Shah. Zero agency middlemen, 10x implementation speed, and 100% intellectual property ownership.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={contactConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm shadow-lg hover:bg-blue-50 transition-all"
              >
                {isDe ? 'Strategiegespräch buchen' : 'Book Executive Strategy Call'}
              </a>
              <Link
                to={getPath(`/blog/${project.caseStudySlug}`)}
                className="px-6 py-3 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-semibold text-sm border border-blue-400/30 transition-all"
              >
                {isDe ? 'Zur Fallstudie' : 'Read Full Case Study'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Ergonomic Mobile Bottom Action Bar (Thumb Zone) */}
      <aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2">
          <Link
            to={getPath(`/blog/${project.caseStudySlug}`)}
            className="flex-1 py-3 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs text-center border border-slate-200 dark:border-slate-700 truncate"
          >
            {isDe ? 'Fallstudie lesen' : 'Read Case Study'}
          </Link>
          <a
            href={contactConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs text-center shadow-md shadow-blue-600/30 truncate flex items-center justify-center gap-1.5"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>{isDe ? 'Gespräch buchen' : 'Book Strategy Call'}</span>
          </a>
        </div>
      </aside>

      <Footer />
    </>
  );
}
