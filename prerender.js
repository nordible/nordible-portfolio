import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const server = createServer((request, response) => {
    return handler(request, response, {
      public: 'dist'
    });
  });

  server.listen(3000, async () => {
    console.log('Temporary server running at http://localhost:3000');

    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    const html = await page.content();
    const outputPath = path.join(__dirname, 'dist', 'index.html');
    
    fs.writeFileSync(outputPath, html);
    console.log(`Successfully pre-rendered to ${outputPath}`);

    await browser.close();
    server.close();
    process.exit(0);
  });
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
