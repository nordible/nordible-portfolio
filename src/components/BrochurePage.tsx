'use client';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Printer, 
  ArrowLeft, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Navigation, 
  Phone, 
  Code, 
  Bot, 
  Search, 
  MapPin, 
  Mail, 
  Calendar, 
  Trophy, 
  Star, 
  Users, 
  Layers
} from 'lucide-react';
import QRCode from 'qrcode';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  corporateBrochurePresets, 
  BrochureDocument, 
  BrochureSheetCover, 
  BrochureSheetProblem, 
  BrochureSheetPhilosophy, 
  BrochureSheetCaseStudies, 
  BrochureSheetTeamModel, 
  BrochureSheetClosing, 
  BrochureSheetEventInvitation 
} from '../data/brochureContent';
import './BrochurePage.css';

export interface BrochurePageProps {
  preset?: string;
  customDocument?: BrochureDocument;
}

export default function BrochurePage({ preset: propPreset, customDocument }: BrochurePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, getPath } = useLanguage();

  const searchParams = new URLSearchParams(location.search);
  const activePresetKey = propPreset || searchParams.get('preset') || 'corporate-growth';
  const shouldAutoPrint = searchParams.get('print') === 'true';

  const docData: BrochureDocument = customDocument || 
    corporateBrochurePresets[language][activePresetKey] || 
    corporateBrochurePresets['de']['corporate-growth'];

  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // 1. Verify session authentication from Founder Portal
    try {
      const cached = sessionStorage.getItem('nordible_portal_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed.docs) && parsed.docs.length > 0) {
          setIsAuthenticated(true);
          return;
        }
      }
    } catch {
      // Ignore storage error
    }

    setIsAuthenticated(false);
    navigate(getPath('/portal'));
  }, [navigate, getPath]);

  useEffect(() => {
    // Generate QR code for booking
    const bookingUrl = 'https://cal.com/nordible/consultation';
    QRCode.toDataURL(bookingUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: '#0B132B',
        light: '#FFFFFF',
      },
    })
      .then((url: string) => setQrCodeDataUrl(url))
      .catch((err: unknown) => console.error('Failed to generate QR code:', err));
  }, []);

  useEffect(() => {
    // Prevent robots from indexing print flyer/brochure pages directly
    let metaTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'robots';
      document.head.appendChild(metaTag);
    }
    metaTag.content = 'noindex, nofollow, noarchive';

    // Auto-trigger print dialog if ?print=true is present
    if (shouldAutoPrint && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        window.print();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [shouldAutoPrint]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(getPath('/portal'));
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'trophy': return <Trophy className="h-4 w-4 text-amber-500" />;
      case 'trending': return <TrendingUp className="h-4 w-4 text-orange-500" />;
      case 'navigation': return <Navigation className="h-4 w-4 text-blue-500" />;
      case 'phone': return <Phone className="h-4 w-4 text-emerald-500" />;
      case 'star': return <Star className="h-4 w-4 text-amber-400" />;
      case 'users': return <Users className="h-4 w-4 text-blue-400" />;
      case 'shield': return <ShieldCheck className="h-4 w-4 text-emerald-400" />;
      case 'code': return <Code className="h-4 w-4 text-blue-500" />;
      case 'bot': return <Bot className="h-4 w-4 text-purple-500" />;
      case 'search': return <Search className="h-4 w-4 text-orange-500" />;
      case 'map': return <MapPin className="h-4 w-4 text-red-500" />;
      case 'mail': return <Mail className="h-4 w-4 text-indigo-500" />;
      default: return <Sparkles className="h-4 w-4 text-orange-500" />;
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#070C1E] flex items-center justify-center text-gray-400 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
          <span>Verifying Founder Session...</span>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return null;
  }

  return (
    <div className="brochure-view-container selection:bg-orange-500 selection:text-white">
      {/* =========================================================
          DESKTOP STICKY TOOLBAR (HIDDEN ON PRINT)
          ========================================================= */}
      <header className="brochure-toolbar hidden md:flex">
        <button
          type="button"
          onClick={handleBack}
          className="brochure-toolbar-back"
          title="Zurück"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'de' ? 'Zurück' : 'Back'}</span>
        </button>

        <div className="brochure-toolbar-title">
          <span>Nordible Technologies</span>
          <span className="highlight">{docData.version}</span>
          <span className="text-gray-400 font-normal">({docData.sheets.length} {language === 'de' ? 'Seiten A4' : 'Pages A4'})</span>
        </div>

        <div className="brochure-toolbar-actions">
          {/* Preset Switcher for demonstration & reuse */}
          <button
            type="button"
            onClick={() => {
              const nextPreset = activePresetKey === 'corporate-growth' ? 'corporate-event' : 'corporate-growth';
              navigate(`?preset=${nextPreset}`);
            }}
            className="brochure-btn-secondary"
            title="Preset wechseln"
          >
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>{activePresetKey === 'corporate-growth' ? 'Switch to Event Flyer' : 'Switch to Corporate Brochure'}</span>
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="brochure-btn-secondary"
            title="Sprache wechseln / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Print / Save-as-PDF CTA */}
          <button
            type="button"
            onClick={handlePrint}
            className="brochure-btn-print"
            title="Vektor-PDF erzeugen (Strg + P)"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{language === 'de' ? 'Als PDF exportieren / Drucken' : 'Export / Print PDF'}</span>
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE BOTTOM ERGONOMIC DOCK (FITTS'S LAW)
          ========================================================= */}
      <nav aria-label="Brochure Quick Actions" className="brochure-mobile-dock md:hidden">
        <button
          type="button"
          onClick={handleBack}
          className="p-3 rounded-full bg-white/10 text-white border border-white/20 active:scale-95"
          title="Zurück"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={toggleLanguage}
          className="px-3 py-2 rounded-xl bg-white/10 text-white border border-white/20 text-xs font-bold"
        >
          {language.toUpperCase()}
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="brochure-btn-print flex-1 justify-center"
          title="PDF generieren"
        >
          <Printer className="w-4 h-4" />
          <span>{language === 'de' ? 'Drucken / PDF' : 'Print PDF'}</span>
        </button>
      </nav>

      {/* =========================================================
          A4 SHEETS WRAPPER
          ========================================================= */}
      <main className="brochure-sheets-wrapper">
        {docData.sheets.map((sheet) => {
          const isNavy = sheet.content.type === 'cover' || sheet.content.type === 'closing' || sheet.content.type === 'eventInvitation';
          const sheetClass = `brochure-sheet ${isNavy ? 'brochure-sheet-navy' : ''}`;

          return (
            <section 
              key={sheet.id} 
              id={sheet.id}
              className={sheetClass}
              aria-label={`Brochure Page ${sheet.sheetNumber}`}
            >
              {/* Sheet Header */}
              <header className="brochure-sheet-header">
                <div className="brochure-brand-group">
                  <div className="brochure-brand-logo">
                    <img src="/images/logos/nordible-icon.png" alt="Nordible Technologies" />
                  </div>
                  <div className="brochure-brand-text">
                    <span className="brochure-brand-name">Nordible Technologies</span>
                    <span className="brochure-brand-sub">AI-Native Digital Growth Partner</span>
                  </div>
                </div>

                <div className="brochure-header-meta">
                  <span className="hidden sm:inline">{sheet.runningTag}</span>
                  <span className="brochure-page-pill">
                    {sheet.sheetNumber.toString().padStart(2, '0')} / {sheet.totalSheets.toString().padStart(2, '0')}
                  </span>
                </div>
              </header>

              {/* Sheet Body — Renders based on Content Type */}
              <div className="brochure-sheet-body">
                {/* 1. COVER SHEET */}
                {sheet.content.type === 'cover' && (() => {
                  const c = sheet.content as BrochureSheetCover;
                  return (
                    <div className="space-y-6 my-auto">
                      <div>
                        <span className="cover-hero-tag">
                          <Sparkles className="w-3.5 h-3.5" />
                          {c.categoryPill}
                        </span>
                        <h1 className="cover-main-title">
                          {c.headlineMain} <br />
                          <span className="gradient-text">{c.headlineHighlight}</span>
                        </h1>
                        <p className="cover-subtitle">
                          {c.subheadline}
                        </p>
                      </div>

                      {/* Editorial Visual Composition Card */}
                      <div className="cover-visual-card">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>VERIFIED GROWTH ENGINE 2026</span>
                          </div>
                          <span className="text-orange-400 font-bold">FRANKFURT AM MAIN</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-left">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-[10px] font-mono text-gray-400 uppercase">Search Authority</span>
                            <div className="text-xl font-black text-white mt-1">Google #1</div>
                            <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                              <CheckCircle2 className="w-3 h-3" /> Page 1 Domination
                            </span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-[10px] font-mono text-gray-400 uppercase">Next-Gen Discovery</span>
                            <div className="text-xl font-black text-white mt-1">AI Citing</div>
                            <span className="text-[10px] text-blue-400 flex items-center gap-1 mt-1">
                              <Bot className="w-3 h-3" /> ChatGPT & Perplexity
                            </span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-[10px] font-mono text-gray-400 uppercase">Inbound Result</span>
                            <div className="text-xl font-black text-white mt-1">High-Intent</div>
                            <span className="text-[10px] text-orange-400 flex items-center gap-1 mt-1">
                              <TrendingUp className="w-3 h-3" /> Qualified Mandates
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Pillars Bar */}
                      <div className="cover-pillars-bar">
                        {c.pillars.map((pillar, i) => (
                          <div key={i} className="cover-pillar-item">
                            • {pillar}
                          </div>
                        ))}
                      </div>

                      <div className="text-[11px] text-gray-400 italic">
                        {c.targetAudienceNote}
                      </div>
                    </div>
                  );
                })()}

                {/* 2. THE OPERATIONAL REALITY (PROBLEM) */}
                {sheet.content.type === 'problem' && (() => {
                  const p = sheet.content as BrochureSheetProblem;
                  return (
                    <div className="space-y-4 my-auto">
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">01 / Die Ausgangslage</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-heading">
                          {p.headlineMain} <br />
                          <span className="text-orange-600">{p.headlineSub}</span>
                        </h2>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
                        <p>{p.leadParagraph}</p>
                        <p>{p.bodyParagraph}</p>
                      </div>

                      <div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          {p.channelsHeading}
                        </h3>
                        <div className="problem-card-grid">
                          {p.channels.map((ch, idx) => (
                            <div key={idx} className="problem-channel-card">
                              <div className="problem-channel-title">✓ {ch.title}</div>
                              <div className="problem-channel-desc">{ch.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="problem-takeaway-box">
                        <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
                        <div>{p.executiveTakeaway}</div>
                      </div>
                    </div>
                  );
                })()}

                {/* 3. CONTINUOUS GROWTH PHILOSOPHY */}
                {sheet.content.type === 'philosophy' && (() => {
                  const ph = sheet.content as BrochureSheetPhilosophy;
                  return (
                    <div className="space-y-4 my-auto">
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">02 / Methodik & Zinseszins</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-heading">
                          {ph.headline}
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed mt-2 max-w-2xl">
                          {ph.thesis}
                        </p>
                      </div>

                      <div className="timeline-stages-grid">
                        {ph.timelineStages.map((stage, idx) => (
                          <div key={idx} className="timeline-stage-card">
                            <div className="timeline-badge-col">
                              <div className="timeline-phase">{stage.phase}</div>
                              <div className="timeline-period">{stage.timeline}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-xs font-bold text-slate-900">{stage.title}</div>
                              <div className="text-[11px] text-slate-600 leading-relaxed">{stage.description}</div>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {stage.deliverables.map((del, dIdx) => (
                                  <span key={dIdx} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                                    • {del}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 text-white text-xs font-bold text-center border-l-4 border-orange-500">
                        {ph.closingStatement}
                      </div>
                    </div>
                  );
                })()}

                {/* 4. CASE STUDIES & SOCIAL PROOF */}
                {sheet.content.type === 'caseStudies' && (() => {
                  const cs = sheet.content as BrochureSheetCaseStudies;
                  return (
                    <div className="space-y-4 my-auto">
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">03 / Verifizierte Beweise</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-heading">
                          {cs.headline}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">{cs.subtitle}</p>
                      </div>

                      <div className="case-study-container">
                        {cs.caseStudies.map((study, idx) => (
                          <div key={idx} className="case-study-card">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                              <div>
                                <div className="text-sm font-black text-slate-900">{study.clientName}</div>
                                <div className="text-[10px] text-slate-500">{study.location} · {study.industry}</div>
                              </div>
                              {study.badge && (
                                <span className="text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                                  {study.badge}
                                </span>
                              )}
                            </div>

                            <div className="text-[11px] text-slate-600 mb-2">
                              <strong>{language === 'de' ? 'Herausforderung' : 'Challenge'}:</strong> {study.challenge}
                            </div>

                            <div className="case-study-metrics-row">
                              {study.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="case-metric-tile">
                                  <div className="flex items-center justify-center gap-1">
                                    {renderIcon(m.icon)}
                                    <span className="case-metric-val">{m.value}</span>
                                  </div>
                                  <div className="case-metric-label">{m.label}</div>
                                  {m.sublabel && <div className="text-[8px] text-slate-400 mt-0.5">{m.sublabel}</div>}
                                </div>
                              ))}
                            </div>

                            {study.quote && (
                              <div className="mt-2 text-[10px] italic text-slate-600 bg-white p-2 rounded-lg border border-slate-200">
                                „{study.quote}“
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* 5. OUTSOURCED TEAM MODEL */}
                {sheet.content.type === 'teamModel' && (() => {
                  const tm = sheet.content as BrochureSheetTeamModel;
                  return (
                    <div className="space-y-4 my-auto">
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">04 / Kosten & Effizienz</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-heading">
                          {tm.headline}
                        </h2>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{tm.subtitle}</p>
                      </div>

                      {/* Cost Comparison Pill */}
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-slate-900 text-xs">
                        <div className="font-bold text-red-700 mb-1">{tm.rolesReplacedTitle}</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-slate-700">
                          {tm.rolesReplaced.map((r, rIdx) => (
                            <div key={rIdx} className="bg-white p-1.5 rounded border border-red-100">
                              <span className="block font-semibold">{r.role}</span>
                              <span className="text-red-600 font-mono font-bold">{r.salary}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-2 italic">{tm.totalCostNote}</div>
                      </div>

                      {/* Outcome Services Grid */}
                      <div>
                        <div className="text-xs font-mono font-bold uppercase text-slate-700 mb-2">
                          {tm.solutionHeading}
                        </div>
                        <div className="services-model-grid">
                          {tm.services.map((srv, sIdx) => (
                            <div key={sIdx} className="service-model-card">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                                {renderIcon(srv.icon)}
                                <span>{srv.title}</span>
                              </div>
                              <div className="text-[10px] font-semibold text-orange-600 mt-0.5">{srv.outcome}</div>
                              <div className="text-[10px] text-slate-600 mt-1 leading-relaxed">{srv.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 6. CLOSING & CALL TO ACTION */}
                {sheet.content.type === 'closing' && (() => {
                  const cl = sheet.content as BrochureSheetClosing;
                  return (
                    <div className="space-y-5 my-auto text-white">
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">05 / Partnerschaft</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 font-heading">
                          {cl.headlineMain} <br />
                          <span className="text-orange-400">{cl.headlineSub}</span>
                        </h2>
                        <p className="text-xs text-slate-300 leading-relaxed mt-2 max-w-xl">
                          {cl.leadParagraph}
                        </p>
                      </div>

                      {/* 3 Steps */}
                      <div>
                        <div className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                          {cl.stepsHeading}
                        </div>
                        <div className="closing-steps-grid">
                          {cl.steps.map((st, stIdx) => (
                            <div key={stIdx} className="closing-step-box">
                              <span className="text-xs font-mono font-bold text-orange-400">Schritt {st.step}</span>
                              <div className="text-xs font-bold text-white mt-1">{st.title}</div>
                              <div className="text-[10px] text-slate-300 mt-1 leading-relaxed">{st.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scannable QR Code & Direct Line Card */}
                      <div className="closing-qr-card">
                        <div className="space-y-1.5 flex-1">
                          <div className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
                            {cl.ctaTitle}
                          </div>
                          <p className="text-[11px] text-slate-300">
                            {cl.ctaSubtitle}
                          </p>
                          <div className="text-xs font-bold text-white pt-1">
                            {cl.contactName} · <span className="text-slate-400 font-normal">{cl.contactRole}</span>
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono">
                            E-Mail: <a href={`mailto:${cl.contactEmail}`} className="text-orange-400 hover:underline">{cl.contactEmail}</a>
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono">
                            Tel: <a href={`tel:${cl.contactPhone}`} className="text-orange-400 hover:underline">{cl.contactPhone}</a>
                          </div>
                        </div>

                        {/* High-Contrast Vector QR Code */}
                        {qrCodeDataUrl ? (
                          <div className="closing-qr-img shrink-0">
                            <img src={qrCodeDataUrl} alt="Booking QR Code" className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-20 h-20 rounded bg-white/20 flex items-center justify-center text-xs font-mono">
                            QR Code
                          </div>
                        )}
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 italic leading-relaxed text-center">
                        „{cl.finalStatement}“
                      </div>
                    </div>
                  );
                })()}

                {/* 7. REUSABLE EVENT INVITATION SHEET */}
                {sheet.content.type === 'eventInvitation' && (() => {
                  const ev = sheet.content as BrochureSheetEventInvitation;
                  return (
                    <div className="space-y-6 my-auto text-white">
                      <div>
                        <span className="cover-hero-tag">
                          <Calendar className="w-3.5 h-3.5" />
                          {ev.categoryPill}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 font-heading leading-tight">
                          {ev.eventTitle}
                        </h1>
                        <p className="text-sm text-orange-300 font-semibold mt-1">
                          {ev.eventSubtitle}
                        </p>
                      </div>

                      {/* Event Key Facts Bar */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 border border-white/10 p-3 rounded-xl text-left text-xs font-mono">
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase">Datum</span>
                          <span className="font-bold text-white">{ev.date}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase">Uhrzeit</span>
                          <span className="font-bold text-white">{ev.time}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase">Ort</span>
                          <span className="font-bold text-white">{ev.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase">Format</span>
                          <span className="font-bold text-white">{ev.format}</span>
                        </div>
                      </div>

                      {/* Agenda */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono font-bold uppercase text-gray-400">
                          {ev.agendaHeading}
                        </div>
                        <div className="space-y-1.5">
                          {ev.agenda.map((ag, agIdx) => (
                            <div key={agIdx} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs">
                              <span className="font-mono font-bold text-orange-400 w-16 shrink-0">{ag.time}</span>
                              <span className="text-white flex-1">{ag.topic}</span>
                              {ag.speaker && (
                                <span className="text-[10px] text-gray-400 font-mono">Ref: {ag.speaker}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RSVP Box */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-between gap-4">
                        <div className="space-y-0.5">
                          <div className="font-black text-sm">{ev.rsvpCta}</div>
                          <div className="text-[10px] text-orange-100">{ev.rsvpDeadline} · mail@nordible.co</div>
                        </div>
                        <a 
                          href="mailto:mail@nordible.co?subject=RSVP%20Executive%20Roundtable" 
                          className="px-4 py-2 rounded-lg bg-white text-orange-600 font-bold text-xs shadow-md whitespace-nowrap"
                        >
                          RSVP Bestätigen →
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Sheet Footer */}
              <footer className="brochure-sheet-footer">
                <div>
                  <strong>Nordible Technologies</strong> · Your Long-Term Digital Growth Partner
                </div>
                <div>
                  AI-Native • Data-Driven • Human-Led • <strong>www.nordible.co</strong>
                </div>
              </footer>
            </section>
          );
        })}
      </main>
    </div>
  );
}
