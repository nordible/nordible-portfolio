import React from 'react';
import { 
  Shield, 
  Zap, 
  Target, 
  Linkedin, 
  Github, 
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const a = t.about;
  const navigate = useNavigate();

  const qualityIcons = [Shield, Zap, Target];

  return (
    <section id="about" className="relative py-24 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Profile Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative z-10 text-left">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
              {a.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-8 tracking-tight font-heading">
              {a.title} <span className="text-nordible-blue">{a.titleHighlight}</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>{a.desc1}</p>
              <p>{a.desc2}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-nordible-border dark:border-gray-700">
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">{a.stat1Number}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">{a.stat1Label}</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">{a.stat2Number}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">{a.stat2Label}</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6 relative z-10 text-left">
            {a.qualities.map((quality, index) => {
              const Icon = qualityIcons[index % qualityIcons.length];
              return (
                <div key={index} className="card-premium group hover:border-nordible-blue/30 cursor-default">
                  <div className="flex items-start space-x-5">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-nordible-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl text-nordible-dark dark:text-white mb-2 font-heading">
                        {quality.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">{quality.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated Founder Story Entry Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-nordible-dark via-blue-950 to-nordible-dark text-white p-8 sm:p-12 shadow-2xl overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-blue-300 uppercase bg-blue-900/50 rounded-full border border-blue-700/50">
                {a.founderStoryLinkBadge}
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {a.founderStoryLinkTitle}
              </h3>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-medium max-w-2xl">
                {a.founderStoryLinkDesc}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-4">
              <button
                onClick={() => {
                  navigate('/founder');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-7 py-4 shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <span>{a.founderStoryLinkButton}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center space-x-3 pt-2 text-xs text-blue-200">
                <a 
                  href="https://www.linkedin.com/in/meetkabeershah/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/skbr1234" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <span>Kabeer Shah · Founder &amp; Solutions Lead</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
