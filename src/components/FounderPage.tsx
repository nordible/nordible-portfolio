'use client';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Terminal, 
  CheckCircle2, 
  Briefcase,
  GraduationCap,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from '@/lib/router-compat';

interface FounderPageProps {
  onBack?: () => void;
  onBookConsultation?: () => void;
}

export default function FounderPage({ onBack, onBookConsultation }: FounderPageProps) {
  const navigate = useNavigate();
  const { t, language, getPath } = useLanguage();
  const f = t.founderPage;

  const handleBack = onBack || (() => navigate(getPath('/')));
  const handleConsultation = onBookConsultation || (() => {
    navigate(getPath('/'));
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{f.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Nordible Technologies · {language === 'de' ? 'Gründer-Story' : "Founder's Story"}
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/60 text-nordible-blue dark:text-blue-400 text-xs font-bold tracking-wider uppercase font-mono">
            {f.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {f.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {f.subtitle}
          </p>
        </div>

        {/* Hero Quote Block */}
        <div className="p-8 sm:p-10 rounded-3xl bg-nordible-dark bg-gradient-to-br from-nordible-dark via-blue-950 to-slate-900 text-white relative overflow-hidden shadow-xl text-left space-y-6">
          <div className="text-nordible-blue text-5xl font-serif leading-none select-none opacity-50">“</div>
          
          <p className="text-lg sm:text-xl font-heading font-medium leading-relaxed max-w-3xl text-gray-100">
            {f.quote}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/founder.png"
                alt="Kabeer Shah"
                className="h-12 w-12 rounded-full object-cover border-2 border-nordible-blue"
              />
              <div>
                <span className="text-sm font-bold text-white block">
                  {f.quoteAuthor}
                </span>
                <span className="text-xs text-blue-200">
                  {f.quoteRole} · Nordible Technologies
                </span>
              </div>
            </div>

            <span className="font-heading font-extrabold text-lg text-white/90">
              Nordible Technologies
            </span>
          </div>
        </div>

        {/* Main Narrative Block & Executive Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 text-left">
          
          {/* Left Column: Portrait, Credentials & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 shadow-md p-4 flex flex-col items-center">
              <img
                src="/images/founder-transparent.png"
                alt="Kabeer Shah - Founder"
                className="w-full max-h-[380px] object-contain"
              />
              <div className="mt-4 text-center w-full pt-4 border-t border-nordible-border dark:border-gray-700">
                <div className="text-lg font-extrabold text-nordible-dark dark:text-white font-heading">
                  Kabeer Shah
                </div>
                <div className="text-xs font-bold text-nordible-blue uppercase tracking-wider mt-0.5">
                  Tech Leader &amp; Solutions Architect
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Frankfurt am Main, Germany
                </div>

                {/* Social & Contact Direct Ergonomic Links */}
                <div className="flex items-center justify-center gap-2.5 mt-3.5 pt-3 border-t border-gray-100 dark:border-gray-700/60">
                  <a
                    href="https://www.linkedin.com/in/meetkabeershah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                    title="LinkedIn: meetkabeershah"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/skbr1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                    title="GitHub: skbr1234"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:mail@nordible.co"
                    className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                    title="Email: mail@nordible.co"
                    aria-label="Email Founder"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Credentials Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-400">
                Key Credentials
              </h4>
              <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>15+ Years</strong> delivering software &amp; tech solutions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>AWS Certified</strong> Cloud Practitioner (Valid until 2027)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <GraduationCap className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>B.Sc. (Information Technology)</strong> – Mumbai University (Grade A)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Briefcase className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>Enterprise &amp; Unicorn Leadership</strong> (GE Healthcare, Baxter, Nipro, Nium)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Terminal className="h-4 w-4 text-nordible-blue shrink-0 mt-0.5" />
                  <span><strong>Stack Overflow Top 32k</strong> Contributor (~32k Reputation)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: In-depth Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-premium p-8 space-y-5">
              <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white font-heading">
                {f.introTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP1}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP2}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.introP3}
              </p>
            </div>

            {/* Core Values */}
            <div className="card-premium p-8 space-y-5">
              <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white font-heading">
                {f.valuesTitle}
              </h3>
              <div className="space-y-4">
                {f.values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="h-6 w-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-nordible-dark dark:text-white">{v.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{v.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Milestones & Leadership Journey Timeline */}
        <div className="pt-8 space-y-10 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nordible-dark dark:text-white font-heading">
              {f.milestonesTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              {f.milestonesSubtitle}
            </p>
          </div>

          <div className="relative">
            {/* The Spine Line: Left on mobile, centered on desktop */}
            <div 
              aria-hidden="true" 
              className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-nordible-blue via-blue-400 to-gray-200 dark:to-gray-800"
            />

            <div className="space-y-8 lg:space-y-12">
              {f.milestones.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className="relative">
                    {/* Timeline Node Anchor (Center spine for desktop, left spine for mobile) */}
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 z-10 flex items-center justify-center pointer-events-none">
                      <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-nordible-blue shadow-md flex items-center justify-center ring-4 ring-white dark:ring-gray-900">
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-nordible-blue animate-pulse' : 'bg-nordible-blue'}`} />
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div 
                      className={`w-full pl-10 sm:pl-12 lg:pl-0 ${
                        isEven 
                          ? 'lg:w-[calc(50%-2.5rem)] lg:mr-auto' 
                          : 'lg:w-[calc(50%-2.5rem)] lg:ml-auto'
                      }`}
                    >
                      <div className="card-premium relative p-6 sm:p-7 space-y-4 hover:border-nordible-blue/40 transition-all shadow-sm hover:shadow-md">
                        {/* Horizontal Connector Line to Spine (Desktop only) */}
                        {isEven ? (
                          <div 
                            aria-hidden="true"
                            className="hidden lg:block absolute -right-10 top-7 w-10 h-0.5 bg-gradient-to-r from-nordible-border dark:from-gray-700 to-nordible-blue/60"
                          />
                        ) : (
                          <div 
                            aria-hidden="true"
                            className="hidden lg:block absolute -left-10 top-7 w-10 h-0.5 bg-gradient-to-l from-nordible-border dark:from-gray-700 to-nordible-blue/60"
                          />
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 text-xs font-bold font-mono tracking-wide">
                              {m.period}
                            </span>
                            {i === 0 && (
                              <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                Latest
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-nordible-dark dark:text-white font-heading">
                              {m.role}
                            </h3>
                            <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5">
                              {m.company}
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {m.description}
                          </p>

                          {m.highlights && m.highlights.length > 0 && (
                            <ul className="space-y-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                              {m.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-nordible-blue dark:bg-blue-400 shrink-0 mt-1.5" />
                                  <span className="leading-snug">{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-nordible-border dark:border-gray-800">
                          {m.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Back Navigation & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-nordible-border dark:border-gray-800">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{f.backToHome}</span>
          </button>

          <button
            type="button"
            onClick={handleConsultation}
            className="btn-primary w-full sm:w-auto text-xs px-7 py-3"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>

      </div>
    </article>
  );
}
