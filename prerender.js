import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_ROUTES = [
  '/', 
  '/blog', 
  '/founder', 
  '/privacy', 
  '/terms', 
  '/blog/frankfurt-local-seo-ai-discoverability', 
  '/blog/shams-consult-google-ranking', 
  '/investment-models', 
  '/company-profile', 
  '/why-choose-us',
  '/standorte',
  '/prospect-flyer'
];

// Dynamically include all city & suburb landing pages from locationsData.json
const locationsDataPath = path.join(__dirname, 'src', 'data', 'locationsData.json');
let locationRoutes = [];
if (fs.existsSync(locationsDataPath)) {
  const cities = JSON.parse(fs.readFileSync(locationsDataPath, 'utf-8'));
  for (const city of cities) {
    locationRoutes.push(`/${city.slug}`);
    for (const suburb of city.suburbs) {
      locationRoutes.push(`/${city.slug}/${suburb.slug}`);
    }
  }
}

const ALL_BASE_ROUTES = [...BASE_ROUTES, ...locationRoutes];
const NON_DEFAULT_LOCALES = ['en'];

const routes = [
  ...ALL_BASE_ROUTES,
  ...NON_DEFAULT_LOCALES.flatMap(locale => 
    ALL_BASE_ROUTES.map(r => r === '/' ? `/${locale}` : `/${locale}${r}`)
  )
];

async function prerender() {
  const server = createServer((request, response) => {
    return handler(request, response, {
      public: 'dist',
      rewrites: [
        { source: '**', destination: '/index.html' }
      ]
    });
  });

  server.listen(0, async () => {
    const port = server.address().port;
    console.log(`Temporary server running at http://localhost:${port}`);

    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err));
    
    for (const route of routes) {
      console.log(`Navigating to http://localhost:${port}${route}...`);
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {
        console.warn(`Warning: React did not mount children for ${route} within timeout`);
      });
      
      let html = await page.content();
      
      // Inject self-referencing canonical URL and social metadata
      const cleanRoute = route.replace(/\/$/, '') || '/';
      const canonicalUrl = cleanRoute === '/' ? 'https://nordible.co/' : `https://nordible.co${cleanRoute}`;
      
      html = html.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );
      html = html.replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );
      html = html.replace(
        /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="twitter:url" content="${canonicalUrl}" />`
      );
      
      let outputPath = path.join(__dirname, 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, html);
      console.log(`Successfully pre-rendered to ${outputPath} (Canonical: ${canonicalUrl})`);
    }

    // Generate dynamic multi-language sitemap.xml for all active routes
    const today = new Date().toISOString().split('T')[0];
    const sitemapRoutes = routes.filter(r => r !== '/portal' && r !== '/dashboard' && !r.includes('*'));

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapRoutes.map(r => {
      const cleanR = r.replace(/\/$/, '') || '/';
      const loc = cleanR === '/' ? 'https://nordible.co/' : `https://nordible.co${cleanR}`;
      const isTop = cleanR === '/' || cleanR === '/en';
      const isKeyPage = cleanR.startsWith('/blog') || cleanR === '/company-profile' || cleanR === '/founder' || cleanR === '/why-choose-us' || cleanR === '/investment-models' || cleanR === '/prospect-flyer';
      const priority = isTop ? '1.0' : (isKeyPage ? '0.8' : '0.7');
      const changefreq = cleanR === '/' || cleanR.includes('blog') ? 'weekly' : 'monthly';

      const isEn = cleanR.startsWith('/en');
      const dePath = isEn ? (cleanR === '/en' ? '/' : cleanR.replace(/^\/en/, '')) : cleanR;
      const enPath = isEn ? cleanR : (cleanR === '/' ? '/en' : `/en${cleanR}`);
      const deUrl = dePath === '/' ? 'https://nordible.co/' : `https://nordible.co${dePath}`;
      const enUrl = `https://nordible.co${enPath}`;

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${deUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${deUrl}" />
  </url>`;
    }).join('\n')}
</urlset>
`;

    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);
    fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
    console.log(`Successfully generated dynamic sitemap.xml with ${sitemapRoutes.length} URLs`);

    // Generate static redirect for legacy /de
    const deDir = path.join(__dirname, 'dist', 'de');
    if (!fs.existsSync(deDir)) {
      fs.mkdirSync(deDir, { recursive: true });
    }
    const deHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=/" />
  <link rel="canonical" href="https://nordible.co/" />
  <script>window.location.replace('/');</script>
  <title>Nordible Technologies</title>
</head>
<body>
  <p>Weiterleitung zur Startseite... <a href="/">Klicken Sie hier</a>.</p>
</body>
</html>`;
    fs.writeFileSync(path.join(deDir, 'index.html'), deHtml);
    console.log(`Successfully generated static redirect to ${path.join(deDir, 'index.html')}`);

    await browser.close();
    server.close();
    process.exit(0);
  });
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
