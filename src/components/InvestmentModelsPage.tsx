import React from 'react';
import { ArrowLeft, ArrowRight, Zap, ShieldCheck, Clock, Lock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface InvestmentModelsPageProps {
  onBack: () => void;
  onBookConsultation: () => void;
}

export default function InvestmentModelsPage({ onBack, onBookConsultation }: InvestmentModelsPageProps) {
  const { t, language } = useLanguage();
  const p = t.pricing;

  const packages = [
    {
      name: 'Rapid MVP',
      duration: '2-4 weeks',
      description: language === 'de' 
        ? 'Schnelle Entwicklung von Prototypen und marktreifen Kernprodukten. Exakt auf Ihr Budget und Ihre funktionalen Anforderungen zugeschnitten.'
        : 'Rapid engineering for high-impact prototypes and core products. Tailored to your specific budget and functional requirements.',
      features: language === 'de' ? [
        'Detaillierte Anforderungs- & Architekturanalyse',
        'Wissenschaftsbasiertes UX-Design',
        'Cloud-Native Architektur',
        'Performance- und Conversion-Analytics',
        'Sicherheits- und SSL-Audit',
        'Automatisierte Deployment-Pipelines',
        '30 Tage Support nach Launch'
      ] : [
        'Requirements & Architecture Discovery',
        'Science-Backed UX Core',
        'Cloud-Native Architecture',
        'Performance Analytics',
        'Security SSL Audit',
        'Automated Deployments',
        '30 Days Post-Launch Support'
      ],
      popular: false
    },
    {
      name: language === 'de' ? 'Produktions-Plattform' : 'Production Platform',
      duration: '6-10 weeks',
      description: language === 'de'
        ? 'Ganzheitliche Technologielösung mit weltweiter Skalierbarkeit. Entwickelt im Rahmen Ihrer festgelegten Ressourcen.'
        : 'Full-lifecycle technology solution with global scaling capabilities. Built within your specified resource parameters.',
      features: language === 'de' ? [
        'Ganzheitliche Produkt- und Technologiestrategie',
        'Fortgeschrittene Systemintegration & APIs',
        'Nutzerverhaltens- & Produktanalyse',
        'Plattformübergreifende Optimierung',
        'Lastverteilung & Hochverfügbarkeit',
        'Infrastructure as Code (IaC)',
        '90 Tage dedizierter Betriebssupport'
      ] : [
        'End-to-End Product Strategy',
        'Advanced System Integration',
        'User Behavioral Analytics',
        'Cross-Platform Optimization',
        'Load Balancing Setup',
        'Infrastructure as Code',
        '90 Days Mission Support'
      ],
      popular: true
    },
    {
      name: language === 'de' ? 'Enterprise Architektur' : 'Enterprise Architecture',
      duration: '12-24 weeks',
      description: language === 'de'
        ? 'Komplexe Technologie-Ökosysteme für führende Industrieunternehmen. Höchste Enterprise-Sicherheitsstandards und maximale Performance.'
        : 'Complex technology ecosystems for global industry leaders. Scaled to meet your enterprise budget and security standards.',
      features: language === 'de' ? [
        'Multi-Region Cloud Deployment',
        'Maßgeschneiderte Microservices & APIs',
        'KI/ML-Logik & GEO Integration',
        'Enterprise Security & Compliance Stack',
        'Hochverfügbarkeits-Cluster & Failover',
        'Datensouveränität (DSGVO / HIPAA)',
        '6 Monate Prioritäts-Support'
      ] : [
        'Multi-Region Deployment',
        'Custom Microservices',
        'AI/ML Logic Integration',
        'Enterprise Security Stack',
        'High-Availability Cluster',
        'Data Sovereignty Compliance',
        '6 Months Priority Support'
      ],
      popular: false
    }
  ];

  const guarantees = [
    {
      icon: ShieldCheck,
      title: language === 'de' ? '100% IP-Eigentum' : '100% IP Ownership',
      desc: language === 'de' ? 'Sämtlicher Code, alle Assets und Lizenzen gehören vom ersten Tag an Ihnen.' : 'All source code, architectural assets, and intellectual property remain 100% yours.'
    },
    {
      icon: Clock,
      title: language === 'de' ? 'Planbare Meilensteine' : 'Predictable Sprints',
      desc: language === 'de' ? 'Feste Sprints mit transparenten Deadlines und kontinuierlicher Berichterstattung.' : 'Structured sprint cycles with weekly demos, clear deliverables, and zero scope drift.'
    },
    {
      icon: Lock,
      title: language === 'de' ? 'Enterprise Compliance' : 'Enterprise Security',
      desc: language === 'de' ? 'DSGVO-, ISO- und HIPAA-konforme Entwicklung nach strengen Sicherheitsrichtlinien.' : 'Built to European GDPR and enterprise security standards with automated compliance checks.'
    }
  ];

  return (
    <article className="min-h-screen bg-nordible-bg dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-nordible-border dark:border-gray-800 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-nordible-blue dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{p.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            Nordible Technologies · {p.title}
          </span>
        </div>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white tracking-tight leading-[1.15] font-heading">
            {p.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-premium relative flex flex-col justify-between !p-8 ${
                pkg.popular
                  ? 'border-nordible-blue shadow-2xl shadow-blue-500/10 md:-translate-y-2 z-10 ring-2 ring-nordible-blue/20'
                  : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nordible-blue text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1.5 shadow-lg">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{p.mostPopular}</span>
                  </div>
                </div>
              )}

              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-2 uppercase tracking-wider font-heading">
                    {pkg.name}
                  </h2>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[11px] font-bold text-nordible-blue dark:text-blue-400 uppercase tracking-widest mb-3 border border-blue-100 dark:border-blue-800">
                    Timeline: {pkg.duration}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-medium leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="border-t border-nordible-border dark:border-gray-800 pt-6 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    {language === 'de' ? 'Enthaltene Leistungen:' : 'Included Capabilities:'}
                  </span>
                  <ul className="space-y-3 text-left">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="h-4 w-4 text-nordible-blue dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs font-medium leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={onBookConsultation}
                className={`w-full py-3.5 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest cursor-pointer mt-auto ${
                  pkg.popular
                    ? 'bg-nordible-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 active:scale-95'
                    : 'bg-blue-50 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 active:scale-95'
                }`}
              >
                <span>{p.ctaButton}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees & Trust Signals */}
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          {guarantees.map((item, gIndex) => {
            const Icon = item.icon;
            return (
              <div key={gIndex} className="card-premium !p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-nordible-blue dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-nordible-dark dark:text-white mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-nordible-dark text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {language === 'de' ? 'Individuelles Projekt besprechen?' : 'Have a custom project scope?'}
            </h2>
            <p className="text-sm text-blue-100 font-medium">
              {language === 'de' 
                ? 'Wir erstellen maßgeschneiderte Architekturen und flexible Kooperationsmodelle für Ihre spezifischen Anforderungen.'
                : 'We design custom architectures and flexible engagement frameworks tailored to your specific organizational goals.'}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onBookConsultation}
                className="btn-primary bg-white text-nordible-dark hover:bg-blue-50 text-xs sm:text-sm px-8 py-4 shadow-xl cursor-pointer"
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
