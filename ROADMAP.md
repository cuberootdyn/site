# Cube Root Dynamics Development Roadmap

**Current State**: Professional security consulting site with risk assessment calculator, service packages, and contact forms. Production-ready content.

**Priority Context**: HOG v1.0.0 > Resume > DNS/HTTPS > This Roadmap > Bjornagotchi

---

## Phase 1: Production Hardening (Immediate)

### DNS & HTTPS
- [ ] Remove extra A record `91.195.240.123` from NameSilo DNS
- [ ] Configure GitHub Pages custom domain in repo settings
- [ ] Enable HTTPS enforcement once cert provisions (~10 min)
- [ ] Test SSL with `https://www.ssllabs.com/ssltest/`

### Payments
- [ ] Create Stripe account for Cube Root Dynamics
- [ ] Generate API keys (test + production)
- [ ] Add Stripe payment form to contact section
- [ ] Implement service package selection → checkout flow
- [ ] Test with Stripe test cards before going live

### Analytics & Monitoring
- [ ] Add Google Analytics 4 or Plausible (privacy-focused)
- [ ] Set up uptime monitoring (UptimeRobot free tier or BetterStack)
- [ ] Configure Formspree webhook for lead notifications
- [ ] Add conversion tracking for "Start Assessment" CTA

---

## Phase 2: Lead Generation Optimization (Q2 2026)

### Interactive Tools
- [ ] **Breach Cost Estimator** - More detailed than current risk calc, outputs PDF report
- [ ] **Security Maturity Scorecard** - Self-assessment questionnaire with graded results
- [ ] **Compliance Gap Analyzer** - Input their current controls, output what's missing for HIPAA/PCI/SOX
- [ ] Make all tools lead magnets (email required to download results)

### Content Marketing
- [ ] Blog section - 1 post/week on security topics (drive SEO)
  - "5 Signs Your Network Is Already Compromised"
  - "What Pen Testers Look For First (And How to Fix It)"
  - "Compliance vs Security: Why Passing Audits Doesn't Mean You're Safe"
- [ ] Case studies section (anonymized client engagements)
- [ ] Video explainers (2-3 min) for each service offering

### Social Proof
- [ ] Add testimonials section (get 3-5 quotes from past clients)
- [ ] Industry certifications/credentials display
- [ ] "Recent Engagements" live counter (generic, not client-specific)

---

## Phase 3: Service Delivery Automation (Q3 2026)

### Client Portal
- [ ] Secure client login area
- [ ] Engagement scoping wizard (replaces back-and-forth emails)
- [ ] Report delivery system (encrypted PDF downloads)
- [ ] Remediation tracking dashboard (mark findings as fixed, request re-test)

### Scheduling & CRM
- [ ] Calendly integration for discovery calls
- [ ] Lead scoring (HubSpot free CRM or Pipedrive)
- [ ] Email sequences for warm leads (Mailgun or SendGrid)
- [ ] Automated follow-ups after report delivery

---

## Phase 4: Advanced Capabilities Showcase (Q4 2026)

### Technical Demos
- [ ] Live CVE tracker widget (shows trending exploits)
- [ ] "Your Organization's Exposure" lookup (ASN/IP range → public-facing vulns)
- [ ] Attack surface visualization (animated network diagram)

### Thought Leadership
- [ ] Publish original vulnerability research (blog + responsible disclosure)
- [ ] Speak at local security meetups/conferences
- [ ] Contribute to open-source security tools (GitHub presence)

### Partnerships
- [ ] Integration with cyber insurance providers
- [ ] Referral program for IT consultants
- [ ] Co-marketing with complementary services (SOC, MDR providers)

---

## Phase 5: Recurring Revenue Model (2027)

### Subscription Services
- [ ] Security monitoring dashboard (ongoing, not one-off)
- [ ] Quarterly automated scans with quarterly reports
- [ ] Retainer packages with SLAs
- [ ] Training platform for client employees

### Product Development
- [ ] Custom threat intel feeds for clients
- [ ] Security policy templates library
- [ ] Incident response runbooks (industry-specific)

---

## Inspiration Sources (Mid-Tier Security Firms)

**Benchmark sites to study:**
- **Bishop Fox** - Interactive tools, strong blog
- **NCC Group** - Research-driven, technical depth
- **Rapid7** - Product + services hybrid model
- **Trail of Bits** - Open-source contributions, thought leadership

**Key differentiators to maintain:**
- No-BS tone (keep "Go Beyond the Checklist" messaging)
- Business-first reporting (not just vuln dumps)
- Transparency (show methodology, not just marketing fluff)

---

## Technical Debt & Maintenance

### Ongoing
- [ ] Monthly dependency updates (check for vulnerable JS libraries)
- [ ] Annual content refresh (pricing, stats, breach references)
- [ ] Performance optimization (aim for <2s load time)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)

### Security
- [ ] Implement CSP headers
- [ ] Add SRI hashes for external scripts
- [ ] Regular penetration testing of own site (dogfooding)
- [ ] Bug bounty program (even if small scope/rewards)

---

**Estimated Timeline**: Phases 1-2 in 2026, Phases 3-5 as business scales.  
**Budget Notes**: Most Phase 1-2 items are low/no-cost. Phase 3+ requires dedicated dev time or contractor.
