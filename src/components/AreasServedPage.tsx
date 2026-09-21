'use client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, ArrowRight, Building2, Compass, Calendar } from 'lucide-react';
import { getAllCities } from '../data/locations';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';

export default function AreasServedPage() {
  const { language, getPath } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const cities = getAllCities();

  const isDe = language === 'de';

  // Filter cities and suburbs based on search input
  const filteredCities = cities.map((city) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return city;

    const cityMatches = city.name.toLowerCase().includes(term) || city.slug.includes(term);
    const matchingSuburbs = city.suburbs.filter(
      (sub) =>
        sub.name.toLowerCase().includes(term) ||
        sub.postalCode.includes(term) ||
        sub.districtGroup.toLowerCase().includes(term)
    );

    if (cityMatches) return city;
    if (matchingSuburbs.length > 0) {
      return { ...city, suburbs: matchingSuburbs };
    }
    return null;
  }).filter((c): c is NonNullable<typeof c> => c !== null);

  const frankfurt = filteredCities.find((c) => c.slug === 'frankfurt');
  const regionalCities = filteredCities.filter((c) => c.slug !== 'frankfurt');

  const goToConsultation = () => {
    navigate(getPath('/'));
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20 selection:bg-nordible-blue selection:text-white">
        
        {/* Header Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-800 text-nordible-blue dark:text-blue-300 text-xs font-bold font-heading">
              <Compass className="h-3.5 w-3.5" />
              <span>{isDe ? 'Einzugsgebiet & Standorte' : 'Areas Served & Locations'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-gray-900 dark:text-white">
              {isDe ? (
                <>
                  Frankfurt am Main &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nordible-blue to-blue-600 dark:from-blue-400 dark:to-cyan-300">
                    Rhein-Main-Gebiet
                  </span>
                </>
              ) : (
                <>
                  Frankfurt am Main &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nordible-blue to-blue-600 dark:from-blue-400 dark:to-cyan-300">
                    Rhine-Main Region
                  </span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {isDe
                ? 'Hauptsitz in Frankfurt am Main. Maßgeschneiderte Web- & App-Entwicklung, KI-Agenten und Digitales Marketing für alle Stadtteile und Städte im Rhein-Main-Gebiet.'
                : 'Headquartered in Frankfurt am Main. Tailored web & app development, AI agents, and digital growth for all districts and cities across the Rhine-Main region.'}
            </p>

            {/* Instant Filter Search Bar */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={isDe ? 'Stadtteil, Stadt oder PLZ suchen (z.B. Bornheim, 60385)...' : 'Search suburb, city, or postal code...'}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl border border-nordible-border dark:border-gray-700 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-nordible-blue"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Primary Hub: Frankfurt am Main Suburbs */}
        {frankfurt && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-nordible-border dark:border-gray-700/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-gray-900 dark:text-white">
                      {frankfurt.name}
                    </h2>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {frankfurt.suburbs.length} {isDe ? 'Stadtteile erfasst' : 'Districts covered'} · {isDe ? 'Hauptstandort' : 'Primary Hub'}
                    </span>
                  </div>
                </div>

                <Link
                  to={getPath(`/${frankfurt.slug}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-nordible-blue dark:text-blue-400 hover:underline"
                >
                  <span>{isDe ? 'Zur Frankfurt-Übersicht' : 'View Frankfurt Overview'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Suburb Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {frankfurt.suburbs.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={getPath(`/${frankfurt.slug}/${sub.slug}`)}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50/80 dark:bg-gray-900/60 dark:hover:bg-gray-700 border border-gray-200/80 dark:border-gray-700 text-left transition-all group flex flex-col justify-between cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-bold text-xs text-gray-800 dark:text-gray-200 group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                        {sub.name}
                      </span>
                      <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-nordible-blue opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-1">
                      PLZ {sub.postalCode}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Surrounding 50 km Regional Cities */}
        {regionalCities.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-black font-heading text-gray-900 dark:text-white">
                {isDe ? 'Städte im Rhein-Main-Gebiet' : 'Cities Across the Rhine-Main Region'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {isDe
                  ? 'Verlässliche Vor-Ort-Betreuung und Remote-Entwicklung im gesamten Rhein-Main-Gebiet:'
                  : 'On-site presence and remote execution across the entire Rhine-Main area:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regionalCities.map((city) => (
                <div
                  key={city.slug}
                  className="bg-white dark:bg-gray-800 border border-nordible-border dark:border-gray-700 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                      <div>
                        <h3 className="font-bold text-base text-gray-900 dark:text-white">
                          {city.name}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">
                          {city.suburbs.length} {isDe ? 'Stadtteile' : 'Districts'} · {city.state}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={getPath(`/${city.slug}`)}
                      className="text-xs font-bold text-nordible-blue dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{city.name}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {city.suburbs.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={getPath(`/${city.slug}/${sub.slug}`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-blue-50 dark:bg-gray-900/60 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors"
                      >
                        <span>{sub.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">({sub.postalCode})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fast Action Dock (Fitts's Law) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border border-nordible-border dark:border-gray-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-nordible-blue dark:text-blue-400 font-bold mb-1">
                📍 {isDe ? 'Ihr Standort nicht dabei?' : 'Your location not listed?'}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {isDe ? 'Wir betreuen Kunden im gesamten DACH-Raum' : 'We serve clients across Germany and Europe'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {isDe
                  ? 'Sprechen Sie direkt mit Gründer Kabeer Shah über Ihr digitales Vorhaben.'
                  : 'Consult directly with founder Kabeer Shah regarding your tech roadmap.'}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={goToConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>{isDe ? 'Zum Erstgespräch →' : 'Go to Consultation →'}</span>
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
