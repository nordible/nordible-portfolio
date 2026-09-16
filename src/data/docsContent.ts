import businessPlanMd from '../../docs/business-plan-nordible-technologies.md?raw';
import financialPlanMd from '../../docs/financial-plan-and-revenue-forecast.md?raw';
import loiTemplatesMd from '../../docs/client-loi-contract-templates-germany.md?raw';

export interface InternalDoc {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  lastUpdated: string;
  rawContent: string;
}

export const internalDocs: InternalDoc[] = [
  {
    id: 'business-plan',
    title: 'Business Plan: Nordible Technologies',
    shortTitle: 'Business Plan',
    category: 'Commercial Strategy',
    lastUpdated: 'September 2026',
    rawContent: businessPlanMd,
  },
  {
    id: 'financial-plan',
    title: 'Financial Plan & Revenue Forecast',
    shortTitle: 'Financial Forecast',
    category: 'Financial Model',
    lastUpdated: 'September 2026',
    rawContent: financialPlanMd,
  },
  {
    id: 'loi-templates',
    title: 'Client Letter of Intent (LoI) & Contract Templates',
    shortTitle: 'Contract & LoI',
    category: 'Legal & Immigration',
    lastUpdated: 'September 2026',
    rawContent: loiTemplatesMd,
  },
];

export interface ExecutiveAsset {
  id: string;
  title: string;
  subtitle: string;
  fileName: string;
  fileUrl: string;
  fileType: 'pdf' | 'image';
  badge?: string;
}

export const executiveAssets: ExecutiveAsset[] = [
  {
    id: 'pitch-deck',
    title: 'Pitch Deck (PDF)',
    subtitle: 'Investor Presentation',
    fileName: 'nordible-pitch-deck.pdf',
    fileUrl: '/nordible-pitch-deck.pdf',
    fileType: 'pdf',
    badge: 'PDF',
  },
  {
    id: 'linkedin-cover',
    title: 'LinkedIn Cover (PNG)',
    subtitle: 'Brand Banner Asset',
    fileName: 'nordible-linkedin-cover.png',
    fileUrl: '/images/nordible-linkedin-cover.png',
    fileType: 'image',
    badge: 'PNG',
  },
];

