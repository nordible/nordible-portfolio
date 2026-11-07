import { Language } from '../lib/i18n';
import { contactConfig } from './contact';

export type QuestionnaireContext = 'contact' | 'case-study' | 'brochure';
export type QuestionnaireFieldId = 'projectDescription' | 'workEmail' | 'phone' | 'companyWebsite';
export type FieldType = 'text' | 'textarea' | 'email' | 'tel';

export interface QuestionnaireFieldConfig {
  id: QuestionnaireFieldId;
  type: FieldType;
  required: boolean;
  label: string;
  placeholder: string;
  helperText?: string;
  validationError?: string;
  colSpan?: 'full' | 'half';
  rows?: number;
}

export interface TrustSignalItem {
  icon: 'shield' | 'lock' | 'clock' | 'user';
  text: string;
}

export interface QuestionnaireSuccessConfig {
  title: string;
  subtitle: string;
  isBrochureDownload?: boolean;
  downloadUrl?: string;
  fallbackDownloadText?: string;
  webVersionUrl?: string;
  webVersionText?: string;
  closeButtonText?: string;
  anotherRequestText?: string;
}

export interface QuestionnaireSchema {
  context: QuestionnaireContext;
  modalBadge: string;
  headerBadge: string;
  headerBadgeIcon: 'sparkles' | 'file-text';
  title: string;
  subtitle: string;
  chipsTitle?: string;
  chips?: string[];
  fields: QuestionnaireFieldConfig[];
  submitButton: {
    label: string;
    submittingLabel: string;
    icon: 'arrow' | 'download';
  };
  trustSignals: TrustSignalItem[];
  success: QuestionnaireSuccessConfig;
  dispatch: {
    projectType: (slug?: string) => string;
    budget: string;
    buildDescription: (data: Record<QuestionnaireFieldId, string>, meta?: { slug?: string; mode?: string }) => string;
    recipients?: string[];
    isLeadMagnet?: boolean;
  };
}

// Contextual chips dictionary for case studies
const CASE_STUDY_CHIPS: Record<string, Record<Language, string[]>> = {
  restaurant: {
    de: ['0%-Provisions-Shop aufbauen', 'Bestellumsatz steigern', 'Küchen- & Fahrerlogistik'],
    en: ['Launch 0% Commission Direct Ordering', 'Grow Online Basket Size', 'Driver & Kitchen Logistics'],
  },
  architecture: {
    de: ['Gewerbliche Bauherren gewinnen', 'Google Page 1 Sichtbarkeit', 'Architektur-Portfolio erneuern'],
    en: ['Attract Commercial Developers', 'Google Page 1 Rankings', 'Digital Portfolio Relaunch'],
  },
  seo: {
    de: ['Prüfen ob ChatGPT uns empfiehlt', 'Google Maps Top 3', 'Regionale B2B-Marktführerschaft'],
    en: ['Check if ChatGPT recommends us', 'Google Maps Local 3-Pack', 'Regional B2B Lead Dominance'],
  },
  default: {
    de: ['Neue Web- oder Mobile-App', 'KI-Agenten & Automatisierung', 'Bestehende Software optimieren', 'Cloud-Architektur & Skalierung'],
    en: ['New Web or Mobile App', 'AI Agents & Automation', 'Refactor Existing Software', 'Cloud Architecture & Scale'],
  },
};

function resolveCaseStudyChips(slug: string | undefined, lang: Language): string[] {
  if (!slug) return CASE_STUDY_CHIPS.default[lang];
  const s = slug.toLowerCase();
  if (s.includes('restaurant') || s.includes('delivery') || s.includes('buns')) {
    return CASE_STUDY_CHIPS.restaurant[lang];
  }
  if (s.includes('architect') || s.includes('architektur') || s.includes('shams')) {
    return CASE_STUDY_CHIPS.architecture[lang];
  }
  if (s.includes('seo') || s.includes('discoverability')) {
    return CASE_STUDY_CHIPS.seo[lang];
  }
  return CASE_STUDY_CHIPS.default[lang];
}

export function getQuestionnaireConfig(
  context: QuestionnaireContext,
  language: Language,
  slug?: string
): QuestionnaireSchema {
  const isDe = language === 'de';

  switch (context) {
    case 'brochure':
      return {
        context: 'brochure',
        modalBadge: isDe ? 'Unternehmensbroschüre (PDF)' : 'Corporate Brochure (PDF)',
        headerBadge: isDe ? 'Offizielle B2B-Broschüre (6 Seiten DIN A4)' : 'Official B2B Brochure (6-Page DIN A4)',
        headerBadgeIcon: 'file-text',
        title: isDe ? 'Nordible Unternehmensbroschüre kostenlos erhalten' : 'Get the Free Nordible Corporate Brochure',
        subtitle: isDe
          ? 'Erhalten Sie unsere vollständige druckfertige Broschüre mit ROI-Benchmarks, Architektur-Frameworks und Referenz-Projekten. Der Download startet sofort nach Eingabe Ihrer E-Mail.'
          : 'Download our complete print-ready brochure featuring architecture blueprints, ROI benchmarks, and case studies. Download begins instantly after providing your email.',
        fields: [
          {
            id: 'workEmail',
            type: 'email',
            required: true,
            label: isDe ? 'Geschäftliche E-Mail-Adresse *' : 'Business Email Address *',
            placeholder: isDe ? 'name@unternehmen.de' : 'name@company.com',
            validationError: isDe ? 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse an.' : 'Please enter a valid business email address.',
            colSpan: 'full',
          },
          {
            id: 'phone',
            type: 'tel',
            required: false,
            label: isDe ? 'Telefon / WhatsApp (optional)' : 'Phone / WhatsApp (optional)',
            placeholder: '+49 ...',
            helperText: isDe ? 'Freiwillig – keine Werbeanrufe' : 'Optional – zero sales calls',
            colSpan: 'half',
          },
          {
            id: 'companyWebsite',
            type: 'text',
            required: false,
            label: isDe ? 'Unternehmen (optional)' : 'Company (optional)',
            placeholder: isDe ? 'Firma GmbH' : 'Company Inc.',
            helperText: isDe ? 'Freiwillige Angabe' : 'Optional detail',
            colSpan: 'half',
          },
        ],
        submitButton: {
          label: isDe ? 'Kostenlose Broschüre herunterladen (PDF) ↗' : 'Download Free Brochure (PDF) ↗',
          submittingLabel: isDe ? 'Broschüre wird vorbereitet...' : 'Preparing Download...',
          icon: 'download',
        },
        trustSignals: [
          { icon: 'shield', text: isDe ? '100% kostenfrei als PDF' : '100% Free PDF' },
          { icon: 'lock', text: isDe ? 'Keine Werbeanrufe' : 'Zero sales calls' },
          { icon: 'clock', text: isDe ? 'Sofortiger Download' : 'Instant Direct Download' },
        ],
        success: {
          title: isDe ? 'Download gestartet!' : 'Download Started!',
          subtitle: isDe
            ? 'Ihre 6-seitige Nordible B2B-Unternehmensbroschüre (PDF) wird heruntergeladen.'
            : 'Your official 6-page Nordible corporate brochure (PDF) is downloading.',
          isBrochureDownload: true,
          downloadUrl: contactConfig.brochurePdfUrl || '/nordible-corporate-brochure.pdf',
          fallbackDownloadText: isDe ? 'Klicken Sie hier, falls Download nicht automatisch startete' : 'Click here if download did not start',
          webVersionUrl: '/brochure.html',
          webVersionText: isDe ? 'Interaktive Web-Broschüre im Browser öffnen ↗' : 'View interactive web brochure in browser ↗',
          closeButtonText: isDe ? 'Fenster schließen' : 'Close window',
        },
        dispatch: {
          projectType: () => 'Broschüren-Download 2026',
          budget: 'Kostenlose Broschüre angefordert',
          recipients: contactConfig.leadTestRecipients,
          isLeadMagnet: true,
          buildDescription: (data, meta) =>
            [
              'Kunde hat die Nordible B2B-Unternehmensbroschüre heruntergeladen.',
              `E-Mail: ${data.workEmail}`,
              `Telefon: ${data.phone || 'Nicht angegeben'}`,
              `Unternehmen: ${data.companyWebsite || 'Nicht angegeben'}`,
              `Modus: ${meta?.mode || 'unbekannt'} (${context})`,
            ].join('\n'),
        },
      };

    case 'case-study':
      return {
        context: 'case-study',
        modalBadge: isDe ? 'Kostenfreie Potenzialanalyse' : 'Free Potential Analysis',
        headerBadge: isDe ? 'Case-Study Transfer-Audit' : 'Case Study Transfer Audit',
        headerBadgeIcon: 'sparkles',
        title: isDe ? 'Technische Potenzialanalyse für Ihr Unternehmen' : 'Technical Potential Analysis for Your Business',
        subtitle: isDe
          ? 'Erhalten Sie eine fundierte Machbarkeitsprüfung direkt von Gründer Kabeer Shah – passgenau zu den Erkenntnissen dieser Fallstudie.'
          : 'Receive an actionable feasibility assessment directly from founder Kabeer Shah, tailored to the insights of this case study.',
        chipsTitle: isDe ? 'Schwerpunkt wählen (Klicken zum Übernehmen):' : 'Select Goal (Click to add):',
        chips: resolveCaseStudyChips(slug, language),
        fields: [
          {
            id: 'projectDescription',
            type: 'textarea',
            required: true,
            rows: 3,
            label: isDe ? '1. Was planen Sie zu bauen oder zu optimieren? *' : '1. What are you planning to build or optimize? *',
            placeholder: isDe
              ? 'z. B. Wir möchten das Modell aus dieser Fallstudie für unser Unternehmen adaptieren...'
              : 'e.g. We want to adapt the strategy from this case study for our business...',
            validationError: isDe ? 'Bitte beschreiben Sie kurz Ihr Vorhaben oder wählen Sie eine Option oben.' : 'Please briefly describe your project or select an option above.',
            colSpan: 'full',
          },
          {
            id: 'workEmail',
            type: 'email',
            required: true,
            label: isDe ? '2. Wohin dürfen wir die Auswertung senden? *' : '2. Where should Kabeer send the breakdown? *',
            placeholder: isDe ? 'name@unternehmen.de' : 'name@company.com',
            validationError: isDe ? 'Bitte geben Sie Ihre geschäftliche E-Mail-Adresse an.' : 'Please provide your work email address.',
            colSpan: 'half',
          },
          {
            id: 'companyWebsite',
            type: 'text',
            required: false,
            label: isDe ? 'Website oder Firmenname (optional)' : 'Website or Company Name (optional)',
            placeholder: isDe ? 'unternehmen.de' : 'company.com',
            helperText: isDe ? 'Freiwillige Angabe' : 'Optional detail',
            colSpan: 'half',
          },
        ],
        submitButton: {
          label: isDe ? 'Kostenfreie Auswertung anfordern (In 24h per E-Mail)' : 'Send Me the Breakdown (Free, within 24h)',
          submittingLabel: isDe ? 'Wird übermittelt...' : 'Sending Request...',
          icon: 'arrow',
        },
        trustSignals: [
          { icon: 'shield', text: isDe ? '100% vertraulich & kostenfrei' : '100% Free & Confidential' },
          { icon: 'lock', text: isDe ? 'Keine Werbeanrufe oder Spam' : 'Zero phone calls or spam' },
          { icon: 'user', text: isDe ? 'Direkt von Gründer Kabeer Shah' : 'Direct Founder Review' },
        ],
        success: {
          title: isDe ? 'Vielen Dank für Ihre Anfrage!' : 'Thank you for your request!',
          subtitle: isDe
            ? 'Unser Gründer Kabeer Shah analysiert Ihr Vorhaben persönlich und sendet Ihnen die Auswertung innerhalb von 24 Stunden per E-Mail.'
            : 'Founder Kabeer Shah will personally review your scope and email you a feasibility assessment within 24 hours.',
          closeButtonText: isDe ? 'Fenster schließen' : 'Close window',
          anotherRequestText: isDe ? 'Weiteres Projekt anfragen' : 'Submit another inquiry',
        },
        dispatch: {
          projectType: (s) => `Case Study Review: ${s || 'Specific Article'}`,
          budget: 'Free Architecture Review',
          buildDescription: (data, meta) =>
            [
              `Vorhaben / Anfrage: ${data.projectDescription}`,
              data.companyWebsite ? `Website / Unternehmen: ${data.companyWebsite}` : null,
              `Kontext: case-study (${meta?.slug || 'Blog'})`,
            ]
              .filter(Boolean)
              .join('\n'),
        },
      };

    case 'contact':
    default:
      return {
        context: 'contact',
        modalBadge: isDe ? 'Kostenfreie Machbarkeitsprüfung' : 'Free Architecture Review',
        headerBadge: isDe ? 'Kostenfreie Machbarkeitsprüfung' : 'Free Architecture Review',
        headerBadgeIcon: 'sparkles',
        title: isDe ? 'Kostenfreie Architektur- & Machbarkeitsprüfung' : 'Free Architecture & Feasibility Breakdown',
        subtitle: isDe
          ? 'Kein Verkaufsgespräch. Gründer Kabeer Shah prüft Ihr Vorhaben persönlich und sendet Ihnen eine konkrete technische Einschätzung und Kostenschätzung innerhalb von 24h per E-Mail.'
          : 'Zero sales pitch. Founder Kabeer Shah will personally analyze your project scope and email you an actionable architecture review & cost estimate within 24h.',
        chipsTitle: isDe ? 'Schnellwahl (Klicken zum Übernehmen):' : 'Quick Select (Click to add):',
        chips: CASE_STUDY_CHIPS.default[language],
        fields: [
          {
            id: 'projectDescription',
            type: 'textarea',
            required: true,
            rows: 3,
            label: isDe ? '1. Was planen Sie zu bauen oder zu optimieren? *' : '1. What are you planning to build or optimize? *',
            placeholder: isDe
              ? 'z. B. Wir möchten eine maßgeschneiderte Web-Plattform für ... bauen / Unsere aktuelle Software ist langsam und muss refaktorisiert werden...'
              : 'e.g. We want to build a custom web platform for ... / Our existing app is slow and needs architecture refactoring...',
            validationError: isDe ? 'Bitte beschreiben Sie kurz Ihr Vorhaben oder wählen Sie einen der Schwerpunkte oben.' : 'Please briefly describe your project or select an option above.',
            colSpan: 'full',
          },
          {
            id: 'workEmail',
            type: 'email',
            required: true,
            label: isDe ? '2. Wohin dürfen wir die Auswertung senden? *' : '2. Where should Kabeer send the breakdown? *',
            placeholder: isDe ? 'name@unternehmen.de' : 'name@company.com',
            validationError: isDe ? 'Bitte geben Sie Ihre geschäftliche E-Mail-Adresse an.' : 'Please provide your work email address.',
            colSpan: 'half',
          },
          {
            id: 'companyWebsite',
            type: 'text',
            required: false,
            label: isDe ? 'Website oder Firmenname (optional)' : 'Website or Company Name (optional)',
            placeholder: isDe ? 'unternehmen.de' : 'company.com',
            helperText: isDe ? 'Freiwillige Angabe' : 'Optional detail',
            colSpan: 'half',
          },
        ],
        submitButton: {
          label: isDe ? 'Kostenfreie Auswertung anfordern (In 24h per E-Mail)' : 'Send Me the Breakdown (Free, within 24h)',
          submittingLabel: isDe ? 'Wird übermittelt...' : 'Sending Request...',
          icon: 'arrow',
        },
        trustSignals: [
          { icon: 'shield', text: isDe ? '100% vertraulich & kostenfrei' : '100% Free & Confidential' },
          { icon: 'lock', text: isDe ? 'Keine Werbeanrufe oder Spam' : 'Zero phone calls or spam' },
          { icon: 'user', text: isDe ? 'Direkt von Gründer Kabeer Shah' : 'Direct Founder Review' },
        ],
        success: {
          title: isDe ? 'Vielen Dank für Ihre Anfrage!' : 'Thank you for your request!',
          subtitle: isDe
            ? 'Unser Gründer Kabeer Shah analysiert Ihr Vorhaben persönlich und sendet Ihnen die technische Machbarkeits- und Kosteneinschätzung innerhalb von 24 Stunden an Ihre E-Mail.'
            : 'Founder Kabeer Shah will personally review your project scope and email you a technical feasibility & realistic cost estimate within 24 hours.',
          closeButtonText: isDe ? 'Fenster schließen' : 'Close window',
          anotherRequestText: isDe ? 'Weiteres Projekt anfragen' : 'Submit another inquiry',
        },
        dispatch: {
          projectType: () => 'Kostenfreie Architektur- & Machbarkeitsprüfung',
          budget: 'Free Architecture Review',
          buildDescription: (data, meta) =>
            [
              `Vorhaben / Anfrage: ${data.projectDescription}`,
              data.companyWebsite ? `Website / Unternehmen: ${data.companyWebsite}` : null,
              `Kontext: ${meta?.mode || 'contact'} (${meta?.slug || 'Homepage'})`,
            ]
              .filter(Boolean)
              .join('\n'),
        },
      };
  }
}

export interface BrochurePageTranslations {
  headerBadge: string;
  title: string;
  titleYear: string;
  subtitle: string;
  cardBadge: string;
  cardBrand: string;
  cardTitle: string;
  cardDesc: string;
  cardMeta: string;
  cardFree: string;
  insideTitle: string;
  previewWeb: string;
  highlights: Array<{
    key: 'tech' | 'caseStudies' | 'pricing';
    title: string;
    desc: string;
  }>;
}

export function getBrochurePageTranslations(language: Language): BrochurePageTranslations {
  const isDe = language === 'de';
  return {
    headerBadge: isDe ? 'Offizielle Publikation · 6 Seiten DIN A4' : 'Official Publication · 6-Page DIN A4',
    title: isDe ? 'Nordible Unternehmensbroschüre' : 'Nordible Corporate Brochure',
    titleYear: '2026',
    subtitle: isDe
      ? 'Erhalten Sie unsere vollständige druckfertige B2B-Broschüre als PDF. Lernen Sie unsere Technologie-Standards, Referenzprojekte und Vorgehensmodelle kennen.'
      : 'Download our official print-ready B2B corporate brochure in high-res PDF. Discover our engineering standards, case studies, and transparent pricing frameworks.',
    cardBadge: 'DIN A4 Wickelfalz',
    cardBrand: 'Nordible Technologies Frankfurt',
    cardTitle: 'AI-Native Digital Growth Partner',
    cardDesc: isDe
      ? 'Technologieberatung, Fullstack-Engineering & datengetriebenes Marketing aus Frankfurt am Main.'
      : 'Technology consulting, fullstack engineering & data-driven digital growth from Frankfurt am Main.',
    cardMeta: isDe ? 'PDF Format · 6 Seiten' : 'PDF Format · 6 Pages',
    cardFree: isDe ? 'Kostenlos' : 'Free Download',
    insideTitle: isDe ? 'Was Sie in der Broschüre finden:' : 'What You Will Find Inside:',
    previewWeb: isDe ? 'Interaktive Web-Version im Browser ansehen ↗' : 'Preview interactive web version in browser ↗',
    highlights: [
      {
        key: 'tech',
        title: isDe ? '1. AI-Native Architektur' : '1. AI-Native Architecture',
        desc: isDe
          ? 'Wie wir autonome Agenten, RAG-Pipelines und moderne Cloud-Stacks in produktive Enterprise-Workflows integrieren.'
          : 'How we integrate autonomous agents, RAG pipelines, and cloud stacks into production enterprise workflows.',
      },
      {
        key: 'caseStudies',
        title: isDe ? '2. Echte Case Studies & Kennzahlen' : '2. Delivered Case Studies & ROI',
        desc: isDe
          ? 'Detaillierte Einblicke in umgesetzte Plattformen für E-Commerce, Architektur-Büros und SaaS-Produkte.'
          : 'In-depth case studies and performance metrics across e-commerce, architectural firms, and SaaS platforms.',
      },
      {
        key: 'pricing',
        title: isDe ? '3. Transparente Zusammenarbeitsmodelle' : '3. Transparent Engagement Models',
        desc: isDe
          ? 'Festpreis-Sprints, Fractional CTO und agile monatliche Betreuung ohne versteckte Nebenkosten.'
          : 'Fixed-price sprints, fractional CTO leadership, and transparent retainer models with zero surprise fees.',
      },
    ],
  };
}
