import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Instagram, Youtube, Heart, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const f = t.footer;
  const navigate = useNavigate();

  return (
    <footer className="relative bg-nordible-dark text-white py-20 overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-3">
              <a href="mailto:mail@nordible.co" className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Mail className="h-4 w-4 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-mono text-xs tracking-wider">mail@nordible.co</span>
              </a>
              <a href="tel:+4915235850031" className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Phone className="h-4 w-4 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-mono text-xs tracking-wider">+49 1523 5850031</span>
              </a>
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-white/5 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-blue-100/70 font-medium text-xs leading-relaxed whitespace-pre-line">
                  Nordible Technologies<br />Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany
                </span>
              </div>

              {/* Social Channels Directly Under Address */}
              <div className="pt-3 flex items-center space-x-3">
                {[
                  { icon: Github, url: 'https://github.com/nordible', label: 'GitHub' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/company/nordible-co/', label: 'LinkedIn' },
                  { icon: Instagram, url: 'https://www.instagram.com/nordible.co/', label: 'Instagram' },
                  { icon: Youtube, url: 'https://www.youtube.com/@nordible', label: 'YouTube' }
                ].map((social, i) => (
                  <a 
                    key={i} 
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
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Technology Solutions</a></li>
              <li><a href="https://email.nordible.co/" className="text-blue-100/60 hover:text-white transition-colors">Business Email</a></li>
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Enterprise Platforms</a></li>
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">{language === 'de' ? 'Digitales Marketing & Social Media' : 'Digital Marketing & Social Media'}</a></li>
              <li><a href="#portfolio" className="text-blue-100/60 hover:text-white transition-colors">Product Portfolio</a></li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  Insights & Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-blue-300 mb-4 uppercase tracking-widest">{f.companyTitle}</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link 
                  to="/company-profile" 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Unternehmensprofil' : 'Company Profile'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/why-choose-us" 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Warum Nordible' : 'Why Choose Us'}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/founder');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="text-blue-100/60 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {f.founderStory}
                </button>
              </li>
              <li>
                <Link 
                  to="/investment-models" 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block"
                >
                  {language === 'de' ? 'Wie wir zusammenarbeiten' : 'How We Work Together'}
                </Link>
              </li>
              <li><a href="#consultation" className="text-blue-100/60 hover:text-white transition-colors">{f.contactUs}</a></li>
              <li>
                <a 
                  href="/nordible-pitch-deck.pdf" 
                  download="nordible-pitch-deck.pdf"
                  className="text-blue-300 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{f.pitchDeck}</span>
                </a>
              </li>
              <li>
                <Link 
                  to="/privacy"
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  {f.terms}
                </Link>
              </li>
              <li>
                <Link 
                  to="/portal" 
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
              navigate('/');
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
              v{__APP_VERSION__}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
