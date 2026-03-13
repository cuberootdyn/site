# Cube Root Dynamics - Independent Security Consulting

Marketing site for Cube Root Dynamics, an independent offensive security consulting practice. Penetration testing, red team operations, and security research.

## Features
- Modern, trust-building design with dark security aesthetic
- Fully responsive layout
- Fast performance (vanilla JS/CSS, no build step)
- Live threat ticker (pulls from CISA KEV feed with fallback data)
- Interactive Risk Calculator (3-step wizard with breach cost modeling)
- Animated terminal simulation and particle network hero
- Founding Client Program section with progress bar
- Contact form (Formspree) and Calendly scheduling integration
- FAQ section
- SEO: sitemap.xml, robots.txt, Open Graph, Schema.org JSON-LD

## Project Structure
```
dynamics-site/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── main.js         # Interactive logic (ticker, calculator, animations)
├── contracts/          # Engagement document templates (NDA, MSA, SOW, ROE, IR retainer)
├── workflows/          # Internal workflow docs (engagement, reporting, pricing)
├── CNAME               # Custom domain: cuberootdynamics.com
├── netlify.toml        # Deployment config + security headers
├── robots.txt          # SEO configuration
├── sitemap.xml         # Sitemap for search engines
└── .nojekyll           # Disable Jekyll processing
```

## Deployment
Static site deployed via Netlify. No build step — publish directory is root `/`.

## Development
No build step required. Open `index.html` in a browser or serve locally:
```bash
npx serve .
```
