# Nordible Business Directory – AI Discoverability Action Items

**Project:** AI Discoverability Improvements  
**Website:** https://business-directory.nordible.co

---

# Priority 1 – AI Discovery

- [ ] Publish `/llms.txt` on the root domain (`https://nordible.co/llms.txt`)
- [ ] Keep `/llms.txt` on the Business Directory subdomain
- [ ] Ensure both files stay synchronized
- [ ] Verify both URLs return **HTTP 200**
- [ ] Verify `Content-Type: text/plain; charset=utf-8`
- [ ] Remove any redirects (or limit to a single redirect)
- [ ] Ensure no authentication or cookies are required
- [ ] Ensure the file is accessible to anonymous users

---

# Priority 2 – Discovery Signals

- [ ] Add `llms.txt` link in website footer
- [ ] Add `llms.txt` to XML sitemap
- [ ] Reference `llms.txt` using HTTP Link headers where possible
- [ ] Add an "AI Resources" section to the website
- [ ] Ensure robots.txt allows crawling of the file

---

# Priority 3 – Technical SEO

- [ ] Validate robots.txt
- [ ] Validate sitemap.xml
- [ ] Add sitemap index if multiple sitemaps exist
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify canonical URLs on every page
- [ ] Ensure clean URL structure
- [ ] Fix duplicate meta titles/descriptions
- [ ] Improve internal linking

---

# Priority 4 – Structured Data

## Business Pages

- [ ] Add Organization schema
- [ ] Add LocalBusiness schema
- [ ] Add PostalAddress
- [ ] Add GeoCoordinates
- [ ] Add ContactPoint
- [ ] Add OpeningHoursSpecification
- [ ] Add AggregateRating
- [ ] Add Review schema
- [ ] Add sameAs links
- [ ] Add logo
- [ ] Add image
- [ ] Add priceRange (where applicable)

---

## Directory Pages

- [ ] CollectionPage schema
- [ ] Breadcrumb schema
- [ ] SearchAction schema
- [ ] WebSite schema
- [ ] ItemList schema

---

# Priority 5 – AI Readability

- [ ] Write concise summaries for every business
- [ ] Use descriptive headings (H1–H3)
- [ ] Add FAQs
- [ ] Avoid excessive marketing language
- [ ] Include plain-language descriptions
- [ ] Keep important information visible without JavaScript
- [ ] Improve semantic HTML

---

# Priority 6 – Knowledge Graph

- [ ] Add `sameAs` links
- [ ] Link to official website
- [ ] Link Google Business Profile (when available)
- [ ] Link LinkedIn
- [ ] Link Facebook
- [ ] Link Instagram
- [ ] Link X
- [ ] Link YouTube
- [ ] Link GitHub (where applicable)

---

# Priority 7 – Business Profiles

Each business should contain:

- [ ] Name
- [ ] Description
- [ ] Categories
- [ ] Address
- [ ] Phone
- [ ] Email
- [ ] Website
- [ ] Opening Hours
- [ ] Images
- [ ] Logo
- [ ] Services
- [ ] Products
- [ ] FAQs
- [ ] Reviews
- [ ] Social Profiles
- [ ] Verification Status
- [ ] Last Updated date

---

# Priority 8 – AI-Specific Features

- [ ] AI-generated business summary
- [ ] AI-readable business facts
- [ ] Machine-readable services list
- [ ] Machine-readable contact details
- [ ] Machine-readable opening hours
- [ ] Machine-readable location
- [ ] Machine-readable categories

---

# Priority 9 – Performance

- [ ] Improve Core Web Vitals
- [ ] Optimize Largest Contentful Paint (LCP)
- [ ] Optimize Interaction to Next Paint (INP)
- [ ] Optimize Cumulative Layout Shift (CLS)
- [ ] Compress images
- [ ] Lazy-load media
- [ ] Enable Brotli/Gzip compression
- [ ] Serve static assets through a CDN

---

# Priority 10 – Indexability

- [ ] Ensure important pages are indexable
- [ ] Remove accidental `noindex`
- [ ] Fix broken links
- [ ] Fix crawl errors
- [ ] Ensure every business page is linked internally
- [ ] Generate XML sitemap automatically for new listings

---

# Priority 11 – Trust Signals

- [ ] HTTPS everywhere
- [ ] Contact page
- [ ] About page
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy
- [ ] Business verification badges
- [ ] "Claim this Business" workflow

---

# Future Enhancements

## Machine-readable endpoints

- [ ] `/llms.txt`
- [ ] `/llms-full.txt`
- [ ] `/robots.txt`
- [ ] `/sitemap.xml`
- [ ] `/identity.json`
- [ ] `/.well-known/ai.json`

## Per-business endpoints

- [ ] `/business/{slug}/llms.txt`
- [ ] `/business/{slug}/schema.json`
- [ ] `/business/{slug}/identity.json`

---

# Validation

- [ ] Google Rich Results Test
- [ ] Schema.org Validator
- [ ] Google Search Console
- [ ] Bing Webmaster Tools
- [ ] Verify robots.txt accessibility
- [ ] Verify llms.txt accessibility
- [ ] Test pages with JavaScript disabled
- [ ] Verify pages are readable without login

---

# Nice-to-Have

- [ ] AI Discoverability Score for each business
- [ ] AI Readiness Score
- [ ] SEO Health Score
- [ ] Citation Completeness Score
- [ ] Directory Completeness Score
- [ ] Knowledge Graph Completeness Score

---

# Success Criteria

- AI agents can discover the directory without authentication.
- Every business has structured, machine-readable metadata.
- Every listing is crawlable and indexable.
- The directory exposes clear AI discovery signals.
- Business pages are optimized for both traditional search engines and AI assistants.