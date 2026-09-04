import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const c = t.contact;

  const whatsappUrl = "https://wa.me/4915235850031?text=Hello%20Nordible,%20I'd%20like%20to%20discuss%20a%20technology%20project.";

  return (
    <section id="consultation" className="relative py-14 sm:py-16 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {c.title} <span className="text-nordible-blue">{c.titleHighlight}</span>
          </h2>
        </div>

        {/* Primary Contact Channels */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
          
          {/* Primary WhatsApp Card */}
          <div className="card-premium p-5 sm:p-6 flex flex-col justify-between border-2 border-emerald-500/20 dark:border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 dark:from-emerald-950/20 dark:to-gray-900 shadow-md hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  {language === 'de' ? 'Direkt' : 'Direct Sync'}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-nordible-dark dark:text-white mb-2 font-heading">
                WhatsApp Direct Sync
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                {language === 'de'
                  ? 'Direkter 1:1-Austausch mit dem Gründer über Projekt, Budget und Machbarkeit.'
                  : 'Direct 1-on-1 technical exchange with the founder on project scope and architecture.'}
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-2.5 text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{language === 'de' ? 'Über WhatsApp chatten' : 'Chat on WhatsApp'}</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </a>
              <div className="text-center text-[11px] text-gray-500 dark:text-gray-400 font-semibold font-mono">
                +49 1523 5850031
              </div>
            </div>
          </div>

          {/* Email & Phone Card */}
          <div className="card-premium p-5 sm:p-6 flex flex-col justify-between hover:border-nordible-blue/30 transition-all duration-300 shadow-md hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-nordible-blue dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  {language === 'de' ? 'Offiziell' : 'Inquiries'}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-nordible-dark dark:text-white mb-2 font-heading">
                {language === 'de' ? 'E-Mail & Telefon' : 'Email & Direct Line'}
              </h3>

              <div className="space-y-2 mb-6 text-xs sm:text-sm">
                <a
                  href="mailto:mail@nordible.co"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 font-mono font-medium transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-nordible-blue shrink-0" />
                  <span>mail@nordible.co</span>
                </a>
                <a
                  href="tel:+4915235850031"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 font-mono font-medium transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-nordible-blue shrink-0" />
                  <span>+49 1523 5850031</span>
                </a>
              </div>
            </div>

            <div>
              <a
                href="mailto:mail@nordible.co?subject=Project%20Inquiry%20-%20Nordible%20Technologies"
                className="btn-primary w-full py-2.5 text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>{language === 'de' ? 'E-Mail senden' : 'Send Direct Email'}</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
