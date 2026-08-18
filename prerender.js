import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = ['/', '/privacy', '/terms'];

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
    
    for (const route of routes) {
      console.log(`Navigating to http://localhost:${port}${route}...`);
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0' });
      
      const html = await page.content();
      
      let outputPath = path.join(__dirname, 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, html);
      console.log(`Successfully pre-rendered to ${outputPath}`);
    }

    await browser.close();
    server.close();
    process.exit(0);
  });
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
