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
  '/why-choose-us'
];

const NON_DEFAULT_LOCALES = ['en'];

const routes = [
  ...BASE_ROUTES,
  ...NON_DEFAULT_LOCALES.flatMap(locale => 
    BASE_ROUTES.map(r => r === '/' ? `/${locale}` : `/${locale}${r}`)
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
      
      const html = await page.content();
      
      let outputPath = path.join(__dirname, 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, html);
      console.log(`Successfully pre-rendered to ${outputPath}`);
    }

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
