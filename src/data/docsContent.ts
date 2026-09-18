export interface InternalDoc {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  lastUpdated: string;
  rawContent: string;
  isFlyer?: boolean;
}

// Map of canonical metadata overrides for known flagship documents
const DOC_METADATA_REGISTRY: Record<string, Partial<InternalDoc>> = {
  'b2b-prospectus-flyer': {
    id: 'prospect-flyer',
    shortTitle: 'B2B Prospectus Flyer',
    category: 'Commercial Collateral',
    isFlyer: true,
  },
  'business-plan-nordible-technologies': {
    id: 'business-plan',
    shortTitle: 'Business Plan',
    category: 'Commercial Strategy',
  },
  'financial-plan-and-revenue-forecast': {
    id: 'financial-plan',
    shortTitle: 'Financial Forecast',
    category: 'Financial Model',
  },
  'client-loi-contract-templates-germany': {
    id: 'loi-templates',
    shortTitle: 'Contract & LoI',
    category: 'Legal & Immigration',
  },
};

// Auto-discover all Markdown files inside /docs dynamically via Vite import.meta.glob
const rawDocModules = import.meta.glob('../../docs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Parse raw markdown string to extract clean Title, Category, and Date
const parseDocMetadata = (filePath: string, content: string): InternalDoc => {
  const fileBasename = filePath.split('/').pop()?.replace(/\.md$/, '') || 'document';
  const knownConfig = DOC_METADATA_REGISTRY[fileBasename] || {};

  // Extract first markdown H1 (# Title)
  const h1Match = content.match(/^#\s+(.+)$/m);
  const rawTitle = h1Match ? h1Match[1].trim() : fileBasename.replace(/[-_]/g, ' ');

  // Extract category if specified in markdown (**Category:** or **Kategorie:**)
  const categoryMatch = content.match(/\*\*(?:Category|Kategorie):\*\*\s*(.+)$/m);
  const category = knownConfig.category || (categoryMatch ? categoryMatch[1].trim() : 'Corporate Strategy');

  // Extract date if specified in markdown (**Date:** or **Stand:**)
  const dateMatch = content.match(/\*\*(?:Date|Stand):\*\*\s*(.+)$/m);
  const lastUpdated = knownConfig.lastUpdated || (dateMatch ? dateMatch[1].trim() : 'September 2026');

  // Generate short title
  let shortTitle = knownConfig.shortTitle;
  if (!shortTitle) {
    if (rawTitle.includes(':')) {
      shortTitle = rawTitle.split(':')[0].trim();
    } else {
      shortTitle = rawTitle.length > 24 ? `${rawTitle.slice(0, 22)}...` : rawTitle;
    }
  }

  const id = knownConfig.id || fileBasename;

  return {
    id,
    title: knownConfig.title || rawTitle,
    shortTitle,
    category,
    lastUpdated,
    rawContent: content,
    isFlyer: Boolean(knownConfig.isFlyer),
  };
};

// Automatically exported document collection
export const internalDocs: InternalDoc[] = Object.entries(rawDocModules).map(([filePath, content]) =>
  parseDocMetadata(filePath, content)
);

// Fallback safety sorting: place prospect-flyer first, followed by business-plan, etc.
const PREFERRED_ORDER = ['prospect-flyer', 'business-plan', 'financial-plan', 'loi-templates'];
internalDocs.sort((a, b) => {
  const indexA = PREFERRED_ORDER.indexOf(a.id);
  const indexB = PREFERRED_ORDER.indexOf(b.id);
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.title.localeCompare(b.title);
});

export interface ExecutiveAsset {
  id: string;
  title: string;
  subtitle: string;
  fileName: string;
  fileUrl: string;
  fileType: 'pdf' | 'image' | 'html';
  badge?: string;
  targetBlank?: boolean;
}

export const executiveAssets: ExecutiveAsset[] = [
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
