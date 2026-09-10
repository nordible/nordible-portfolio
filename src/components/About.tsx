import { ArrowRight, Building2, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { language, getPath } = useLanguage();
  const isDe = language === 'de';

  return (
    <section id="about" className="py-14 sm:py-16 bg-nordible-section-bg dark:bg-gray-800/60 border-y border-nordible-border dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {isDe ? 'Über Nordible Technologies' : 'About Nordible Technologies'}
          </h2>
        </div>

        {/* Card with Context & Highlights */}
        <div className="card-premium p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm text-left">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6">
            {isDe
              ? 'Nordible Technologies ist ein KI-nativer Business-Technologiepartner mit Sitz in Frankfurt am Main. Wir stärken Unternehmen durch Technologie – von skalierbaren Technologielösungen und Cloud-Architekturen bis hin zu zielgerichtetem Social-Media-Kanalmanagement. Mit über 13 Jahren Praxiserfahrung verbinden wir deutsche Ingenieurspräzision mit KI-gestützter Umsetzungsgeschwindigkeit, um komplexe Herausforderungen in messbaren Geschäftserfolg zu verwandeln.'
              : 'Nordible Technologies is an AI-native business technology partner based in Frankfurt am Main. We empower businesses with tech—delivering scalable technology solutions, resilient cloud platforms, and data-driven social media channel management. Led by a 15+ year veteran tech leader and cloud architect, we pair technical precision with autonomous AI workflows to turn technical complexity into measurable commercial advantage.'}
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-nordible-border/60 dark:border-gray-800 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-nordible-dark dark:text-gray-200">
                {isDe ? 'KI-nativer Technologiepartner' : 'AI-Native Business Partner'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-nordible-dark dark:text-gray-200">
                {isDe ? 'Frankfurt am Main & Remote' : 'Frankfurt am Main & Remote'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center shrink-0">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-nordible-dark dark:text-gray-200">
                {isDe ? 'Technologie, KI, Social Media & Video' : 'Technology, AI, Social Media & Video'}
              </span>
            </div>
          </div>

          {/* CTA Link Button */}
          <div className="pt-4 flex justify-center">
            <Link
              to={getPath('/company-profile')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-nordible-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              <span>{isDe ? 'Vollständiges Unternehmensprofil ansehen' : 'Explore Full Company Profile'}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
