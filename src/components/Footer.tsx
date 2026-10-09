'use client';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube, Heart, Lock, QrCode, FileText, Building2, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { contactConfig } from '../config/contact';
import { Mascot } from './Mascot';

export default function Footer() {
  const { t, language, getPath } = useLanguage();
  const f = t.footer;
  const navigate = useNavigate();
  const homePath = getPath('/');

  const socialLinks = [
    { icon: Github, url: contactConfig.social.github, label: 'GitHub' },
    { icon: Linkedin, url: contactConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: contactConfig.social.instagram, label: 'Instagram' },
    { icon: Youtube, url: contactConfig.social.youtube, label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-nordible-dark text-white overflow-hidden text-left">
      {/* High-Converting Agency Promo Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0D2B75] via-[#145BFF]/30 to-[#0D2B75] py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 drop-shadow-xl">
              <Mascot variant="hero-wave" alt="Nordible Mascot" priority />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-[#FF9F1A]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{language === 'de' ? 'Individuelle Softwareentwicklung & KI' : 'Custom Software & AI Engineering'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading">
                {language === 'de'
                  ? 'Benötigen Sie automatisierte Systeme oder maßgeschneiderte Software?'
                  : 'Need automated systems, AI agents, or custom web apps?'}
              </h2>
              <p className="text-sm text-blue-100/80 max-w-2xl">
                {language === 'de'
                  ? 'Nordible Technologies entwickelt hochperformante Webanwendungen, Cloud-Infrastrukturen und KI-Lösungen für zukunftsorientierte Unternehmen.'
                  : 'Nordible Technologies engineers enterprise-grade web applications, autonomous AI agents, and cloud platforms for ambitious teams.'}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact') || document.getElementById('consultation');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate(`${homePath}#contact`);
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#145BFF] hover:bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{language === 'de' ? 'Kostenloses Erstgespräch' : 'Book Free Strategy Call'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-3">
              <a href={contactConfig.email.mailToGeneral} className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Mail className="h-4 w-4 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-mono text-xs tracking-wider">{contactConfig.email.general}</span>
              </a>
              <a href={contactConfig.phone.telHref} className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Phone className="h-4 w-4 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-mono text-xs tracking-wider">{contactConfig.phone.display}</span>
              </a>
              <a
                href={contactConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={language === 'de' ? 'In Google Maps öffnen' : 'Open in Google Maps'}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <MapPin className="h-4 w-4 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 group-hover:text-white text-xs font-medium transition-colors">
                  {contactConfig.address.full}
                </span>
              </a>
              <p className="text-blue-100/50 text-[11px] pt-1">
                {language === 'de' 
                  ? 'Persönliche Termine vor Ort in Frankfurt, Rhein-Main und deutschlandweit nach Vereinbarung.' 
                  : 'On-site appointments in Frankfurt, Rhine-Main, and across Germany by arrangement.'}
              </p>

              <div className="pt-1">
                <Link
                  to={getPath('/card')}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-nordible-blue text-blue-200 hover:text-white text-xs font-medium transition-colors group"
                >
                  <UserCheck className="h-3.5 w-3.5 text-blue-400 group-hover:text-white transition-colors shrink-0" />
                  <span>{language === 'de' ? 'Digitale Visitenkarte (vCard)' : 'Digital Business Card (vCard)'}</span>
                </Link>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-white/5 hover:bg-nordible-blue text-blue-300 hover:text-white transition-all transform hover:scale-105"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-blue-300 mb-4 uppercase tracking-widest">{f.expertiseTitle}</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to={`${homePath}#services`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Technologielösungen & Apps' : 'Technology Solutions & Apps'}</Link></li>
              <li><Link to={`${homePath}#services`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Videobearbeitung & Produktion' : 'Video Editing & Production'}</Link></li>
              <li><Link to={`${homePath}#services`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'KI-Agenten-Implementierung' : 'AI Agent Implementation'}</Link></li>
              <li><Link to={`${homePath}#services`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Digitales Marketing & Social Media' : 'Digital Marketing & Social Media'}</Link></li>
              <li><Link to={`${homePath}#services`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Geschäftsprozess-Automatisierung' : 'Business Systems & Automation'}</Link></li>
              <li><a href="https://email.nordible.co/" className="text-blue-100/60 hover:text-white transition-colors">Business Email & Setup</a></li>
              <li><Link to={`${homePath}#portfolio`} className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Projekt-Portfolio' : 'Product Portfolio'}</Link></li>
              <li>
                <Link 
                  to={getPath('/blog')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  Insights & Blog
                </Link>
              </li>
            </ul>

            {/* Tools */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-[11px] font-bold text-blue-300 mb-3 uppercase tracking-widest">
                {language === 'de' ? 'Kostenlose Tools' : 'Free Tools'}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link 
                    to={getPath('/qr-code-generator')} 
                    className="text-blue-100/80 hover:text-white transition-colors text-left inline-flex items-center gap-2 group"
                  >
                    <QrCode className="h-3.5 w-3.5 text-blue-400 group-hover:text-white transition-colors shrink-0" />
                    <span>{language === 'de' ? 'QR-Code-Generator' : 'QR Code Generator'}</span>
                    <span className="px-1.5 py-0.5 text-[9px] rounded bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider">Free</span>
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://free-invoice-generator.nordible.co/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100/90 hover:text-white transition-colors text-left inline-flex items-center gap-2 group"
                  >
                    <FileText className="h-3.5 w-3.5 text-blue-400 group-hover:text-white transition-colors shrink-0" />
                    <span>{language === 'de' ? 'Rechnungsersteller' : 'Invoice Generator'}</span>
                    <span className="px-1.5 py-0.5 text-[9px] rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase tracking-wider">
                      {language === 'de' ? '100% Kostenlos' : '100% Free'}
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://business-directory.nordible.co/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    title={language === 'de' ? 'Unternehmen eintragen & B2B-Leads erhalten' : 'List your business & get B2B leads'}
                    className="text-blue-100/90 hover:text-white transition-colors text-left inline-flex items-center gap-2 group"
                  >
                    <Building2 className="h-3.5 w-3.5 text-blue-400 group-hover:text-white transition-colors shrink-0" />
                    <span>{language === 'de' ? 'B2B-Firmenverzeichnis' : 'B2B Business Directory'}</span>
                    <span className="px-1.5 py-0.5 text-[9px] rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold uppercase tracking-wider">
                      {language === 'de' ? 'Kostenlos' : 'Free Listing'}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-blue-300 mb-4 uppercase tracking-widest">{f.companyTitle}</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link 
                  to={getPath('/company-profile')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Unternehmensprofil' : 'Company Profile'}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('/why-choose-us')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Warum Nordible' : 'Why Choose Us'}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('/standorte')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Einzugsgebiet (Frankfurt & Rhein-Main)' : 'Areas Served (Frankfurt & Rhine-Main)'}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate(getPath('/founder'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {f.founderStory}
                </button>
              </li>
              <li>
                <Link 
                  to={getPath('/investment-models')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Wie wir zusammenarbeiten' : 'How We Work Together'}
                </Link>
              </li>
              <li><Link to={`${homePath}#contact`} className="text-blue-100/60 hover:text-white transition-colors">{f.contactUs}</Link></li>
              <li>
                <Link 
                  to={getPath('/privacy')}
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('/terms')} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  {f.terms}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('/portal')} 
                  rel="nofollow"
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-flex items-center gap-1.5 w-full"
                >
                  <Lock className="h-3 w-3 text-blue-300/70" />
                  <span>{f.founderPortal}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Very Bottom: Big Company Ribbon */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 cursor-pointer select-none group pb-6"
            onClick={() => {
              navigate(getPath('/'));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/5 group-hover:bg-white/10 border border-white/10 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 transition-all duration-300 group-hover:scale-105 flex items-center justify-center shrink-0 shadow-2xl">
              <img 
                src="/images/logos/nordible-icon.png" 
                alt="Nordible Technologies Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-heading text-white group-hover:text-nordible-blue transition-colors duration-300">
              Nordible Technologies
            </span>
          </div>

          <div className="pt-4 border-t border-white/5 w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-blue-100/60">
            <span>
              &copy; {new Date().getFullYear()} Nordible Technologies. {f.rights}
            </span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <div className="flex items-center space-x-1.5">
              <span>{language === 'de' ? 'Mit' : 'Made with'}</span>
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
              <span>{language === 'de' ? 'in Deutschland gemacht' : 'in Germany'}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="font-mono text-[11px] sm:text-xs text-blue-100/40 tracking-wider">
              v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
