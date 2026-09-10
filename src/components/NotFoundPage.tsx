import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Layers, 
  Compass, 
  User, 
  TrendingUp, 
  BookOpen, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFoundPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const nf = t.notFound;

  useEffect(() => {
    const originalTitle = document.title;
    document.title = language === 'de' 
      ? '404 - Seite nicht gefunden | Nordible Technologies' 
      : '404 - Page Not Found | Nordible Technologies';

    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    let created = false;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
      created = true;
    }
    const prevRobots = metaRobots.content;
    metaRobots.content = 'noindex, follow';

    return () => {
      document.title = originalTitle;
      if (metaRobots) {
        if (created) {
          document.head.removeChild(metaRobots);
        } else {
          metaRobots.content = prevRobots;
        }
      }
    };
  }, [language]);

  const handleNavigate = (path: string, hash?: string) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    {
      title: nf.links.services,
      description: language === 'de' ? 'Cloud, Web & mobile Enterprise-Lösungen' : 'Cloud-native, web & enterprise software',
      icon: Layers,
      action: () => handleNavigate('/', 'services')
    },
    {
      title: nf.links.investmentModels,
      description: language === 'de' ? 'Transparente Partnerschafts- und Preismodelle' : 'Transparent engagement & partnership tiers',
      icon: TrendingUp,
      action: () => handleNavigate('/investment-models')
    },
    {
      title: nf.links.founderStory,
      description: language === 'de' ? 'Hintergrund, Vision und technische Leitung' : 'Founder journey, ethos, and leadership',
      icon: User,
      action: () => handleNavigate('/founder')
    },
    {
      title: nf.links.blog,
      description: language === 'de' ? 'Architekturmuster und Tech-Analysen' : 'Modern architecture patterns & tech essays',
      icon: BookOpen,
      action: () => handleNavigate('/blog')
    },
    {
      title: nf.links.contact,
      description: language === 'de' ? 'Direktes Erstgespräch mit dem Gründer' : 'Direct discovery session with the founder',
      icon: Mail,
      action: () => handleNavigate('/', 'consultation')
    }
  ];

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20 relative overflow-hidden flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-nordible-blue/15 to-emerald-400/10 blur-3xl rounded-full opacity-60 dark:opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-10">
        {/* Visual 404 Anchor / Badge */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/60 text-nordible-blue dark:text-blue-400 text-xs font-bold tracking-wider uppercase font-mono shadow-sm">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{nf.badge}</span>
          </div>

          <div className="relative">
            <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight font-heading bg-gradient-to-r from-gray-900 via-nordible-dark to-nordible-blue dark:from-white dark:via-gray-100 dark:to-blue-400 bg-clip-text text-transparent select-none">
              404
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white">
            {nf.title}
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {nf.description}
          </p>
        </div>

        {/* Ergonomic Action Controls (Fitts's Law / Thumb Reachable) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto pt-2">
          <button
            type="button"
            onClick={() => handleNavigate('/')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{nf.backHome}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavigate('/', 'services')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-nordible-blue dark:hover:border-blue-500 active:scale-[0.98] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <Layers className="w-4 h-4 text-nordible-blue dark:text-blue-400" />
            <span>{nf.exploreServices}</span>
          </button>
        </div>

        {/* Guided Recovery Grid (Reduced Cognitive Load) */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-5 font-mono text-center">
            {nf.quickLinksTitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={item.action}
                  className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/70 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/60 hover:border-nordible-blue/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 group-hover:text-nordible-blue transition-all shrink-0 ml-1" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Back navigation link */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => window.history.length > 1 ? window.history.back() : handleNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'de' ? 'Zur vorherigen Seite' : 'Go back to previous page'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
