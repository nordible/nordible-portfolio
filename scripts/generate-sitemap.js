import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const today = new Date().toISOString().split('T')[0];

// 1. Core static pages
const corePages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'founder', priority: '0.8', changefreq: 'monthly' },
  { path: 'company-profile', priority: '0.8', changefreq: 'monthly' },
  { path: 'investment-models', priority: '0.8', changefreq: 'monthly' },
  { path: 'why-choose-us', priority: '0.8', changefreq: 'monthly' },
  { path: 'standorte', priority: '0.7', changefreq: 'monthly' },
  { path: 'qr-code-generator', priority: '0.7', changefreq: 'monthly' },
  { path: 'brochure', priority: '0.7', changefreq: 'monthly' },
  { path: 'card', priority: '0.6', changefreq: 'monthly' },
  { path: 'privacy', priority: '0.5', changefreq: 'monthly' },
  { path: 'terms', priority: '0.5', changefreq: 'monthly' },
  { path: 'lite', priority: '0.9', changefreq: 'weekly' },
  { path: 'lite/projekte', priority: '0.8', changefreq: 'weekly' },
  { path: 'lite/fallstudien', priority: '0.8', changefreq: 'weekly' },
  { path: 'lite/services', priority: '0.7', changefreq: 'monthly' },
  { path: 'lite/company-profile', priority: '0.7', changefreq: 'monthly' },
  { path: 'lite/kontakt', priority: '0.7', changefreq: 'monthly' },
];

// 2. All 16 Dedicated Projects
const projectIds = [
  'oncocare',
  'instarem',
  'rst-baxter',
  'parents-vip',
  'smartbothub',
  'nextauto',
  'buns069',
  'shams-consult',
  'bombay-studio',
  'nordible-email',
  'linkedin-catchup',
  'habitualist',
  'zerodha-sandbox',
  'nerdspal',
  'invoice-generator',
  'nordible-directory',
];

// 3. Flagship case studies / blog articles (All 16 projects)
const blogArticles = [
  'restaurant-delivery-growth-case-study',
  'architecture-firm-seo-case-study',
  'frankfurt-local-seo-ai-discoverability',
  'ge-healthcare-careintellect-oncology-case-study',
  'nium-instarem-fintech-remittance-scale-case-study',
  'vantive-baxter-healthcare-remote-diagnostics-case-study',
  'parents-vip-influencer-creator-marketing-platform-case-study',
  'smartbothub-enterprise-conversational-ai-cost-reduction-case-study',
  'nextauto-enterprise-workflow-rpa-automation-case-study',
  'bombay-studio-luxury-interior-architecture-geo-case-study',
  'nordible-email-b2b-saas-security-infrastructure-case-study',
  'linkedin-catchup-assistant-b2b-relationship-automation-case-study',
  'habitualist-cross-platform-habit-tracker-growth-case-study',
  'zerodha-sandbox-fintech-trading-api-simulator-case-study',
  'nerdspal-community-knowledge-sharing-platform-case-study',
  'nordible-free-invoice-generator-privacy-first-case-study',
  'nordible-business-directory-ai-search-indexing-case-study',
];

// 4. Locations from locationsData.json
const locationsData = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'src', 'data', 'locationsData.json'), 'utf8')
);

const locationPaths = [];
for (const city of locationsData) {
  locationPaths.push({ path: city.slug, priority: '0.7', changefreq: 'monthly' });
  for (const suburb of city.suburbs) {
    locationPaths.push({ path: `${city.slug}/${suburb.slug}`, priority: '0.7', changefreq: 'monthly' });
  }
}

// Build all unique URL pairs (EN and DE)
const entries = [];

function addEntry(routePath, priority, changefreq) {
  const enPath = routePath ? `/${routePath}` : '/';
  const dePath = routePath ? `/de/${routePath}` : '/de';

  const enUrl = `https://nordible.co${enPath === '/' ? '/' : enPath}`;
  const deUrl = `https://nordible.co${dePath}`;

  // English entry
  entries.push({
    loc: enUrl,
    priority,
    changefreq,
    enUrl,
    deUrl,
  });

  // German entry
  entries.push({
    loc: deUrl,
    priority,
    changefreq,
    enUrl,
    deUrl,
  });
}

// Process entries
for (const p of corePages) {
  addEntry(p.path, p.priority, p.changefreq);
}

for (const id of projectIds) {
  addEntry(`projekte/${id}`, '0.8', 'weekly');
  addEntry(`lite/projekte/${id}`, '0.7', 'weekly');
}

for (const slug of blogArticles) {
  addEntry(`blog/${slug}`, '0.8', 'weekly');
  addEntry(`lite/fallstudien/${slug}`, '0.7', 'weekly');
}

for (const loc of locationPaths) {
  addEntry(loc.path, loc.priority, loc.changefreq);
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${e.enUrl}" />
    <xhtml:link rel="alternate" hreflang="de" href="${e.deUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${e.enUrl}" />
  </url>`).join('\n')}
</urlset>
`;

const outputPath = path.join(projectRoot, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf8');

console.log(`[sitemap] Successfully generated ${entries.length} valid URLs (${entries.length / 2} EN + ${entries.length / 2} DE) to ${outputPath}`);
