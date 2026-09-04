import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';
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
            <div className="space-y-4">
              <a href="mailto:mail@nordible.co" className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Mail className="h-5 w-5 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-bold text-sm tracking-widest uppercase">mail@nordible.co</span>
              </a>
              <a href="tel:+4915235850031" className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Phone className="h-5 w-5 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-bold text-sm tracking-widest uppercase">+4915235850031</span>
              </a>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-blue-100/80 font-medium text-sm leading-relaxed whitespace-pre-line">
                  Nordible Technologies<br />Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">{f.expertiseTitle}</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Technology Solutions</a></li>
              <li><a href="https://email.nordible.co/" className="text-blue-100/60 hover:text-white transition-colors">Business Email</a></li>
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Enterprise Platforms</a></li>
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
            <h3 className="text-xs font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">{f.companyTitle}</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <Link 
                  to="/company-profile" 
                  className="text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest text-left inline-block"
                >
                  {language === 'de' ? 'Unternehmensprofil' : 'Company Profile'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/why-choose-us" 
                  className="text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest text-left inline-block"
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
                  className="text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest text-left"
                >
                  {f.founderStory}
                </button>
              </li>
              <li>
                <Link 
                  to="/investment-models" 
                  className="text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest text-left inline-block"
                >
                  {language === 'de' ? 'Investitionsmodelle' : 'Investment Models'}
                </Link>
              </li>
              <li><a href="#consultation" className="text-blue-100/60 hover:text-white transition-colors">{f.contactUs}</a></li>
              <li>
                <a 
                  href="/nordible-pitch-deck.pdf" 
                  download="nordible-pitch-deck.pdf"
                  className="text-blue-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
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
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold text-blue-100/40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Nordible Technologies. {f.rights}
          </p>
          <div className="flex space-x-6">
            {[
              { icon: Github, url: 'https://github.com/nordible' },
              { icon: Linkedin, url: 'https://www.linkedin.com/company/nordible-co/' },
              { icon: Instagram, url: 'https://www.instagram.com/nordible.co/' },
              { icon: Youtube, url: 'https://www.youtube.com/@nordible' }
            ].map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-100/40 hover:text-nordible-blue transition-all transform hover:scale-110">
                <social.icon className="h-6 w-6" />
              </a>
            ))}
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

          <div className="pt-4 border-t border-white/5 w-full flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-blue-100/60">
            <span>{language === 'de' ? 'Mit' : 'Made with'}</span>
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>{language === 'de' ? 'in Deutschland gemacht' : 'in Germany'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
