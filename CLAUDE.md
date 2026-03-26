# CLAUDE.md — dynamics-site

## Overview
Marketing site for Cube Root Dynamics, an independent offensive security consulting practice. Static vanilla HTML/CSS/JS site with no build step, deployed via Netlify.

## Tech Stack
- HTML5 / CSS3 / Vanilla JavaScript (no frameworks, no build step)
- Netlify (deployment, security headers via netlify.toml)
- Formspree (contact form)
- Calendly (scheduling integration)
- CISA KEV feed (live threat ticker)

## Build Commands
```bash
# No build step — open index.html directly or serve locally
npx serve .

# Deploy: push to main branch — Netlify auto-deploys from root /
```

## Project Structure
```
index.html          Main landing page (single page)
css/
  styles.css        All custom styles
js/
  main.js           Interactive logic (ticker, risk calculator, animations)
contracts/          Engagement document templates (NDA, MSA, SOW, ROE, IR retainer)
workflows/          Internal workflow docs (engagement, reporting, pricing)
assets/             Images and static assets
CNAME               Custom domain: cuberootdynamics.com
netlify.toml        Deployment config + security headers
robots.txt          SEO configuration
sitemap.xml         Sitemap
```

## Key Features
- Live threat ticker (CISA KEV feed with fallback data)
- Interactive Risk Calculator (3-step wizard with breach cost modeling)
- Animated terminal simulation and particle network hero
- Founding Client Program section
- Contact form (Formspree) and Calendly scheduling
- Schema.org JSON-LD + Open Graph SEO

## Hard Rules
- GitLab only — no GitHub
- No build step, no frameworks, no npm dependencies in production
- `netlify.toml` controls all security headers — do not bypass them
- `contracts/` and `workflows/` are internal business documents — do not expose paths in HTML
- Domain is `cuberootdynamics.com` — do not change CNAME without DNS update
