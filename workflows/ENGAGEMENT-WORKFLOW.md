# CUBEROOT DYNAMICS: ENGAGEMENT LIFECYCLE

This document outlines the standard end-to-end workflow for offensive security engagements at CubeRoot Dynamics.

---

## 1. PRE-ENGAGEMENT PHASE

### 1.1 Intake & Lead Qualification
- **Who:** Sales / Ops Team
- **Activities:** Receive inquiry via website or referral. Initial vetting of client needs.
- **Deliverable:** Lead Entry in CRM.

### 1.2 Scoping Call
- **Who:** Technical Lead + Client Stakeholder
- **Activities:** Define targets, depth of testing, constraints, and timeline. Determine if it's a one-time assessment or continuous.
- **Decision Gate:** Go/No-Go based on technical feasibility and compliance.

### 1.3 Proposal & Pricing
- **Who:** Technical Lead / Principal
- **Activities:** Calculate effort based on `PRICING-GUIDE.md`. Draft Proposal.
- **Deliverable:** formal Proposal / Quote.

---

## 2. CONTRACTING PHASE

### 2.1 NDA Execution
- **Who:** Ops / Legal
- **Tool:** DocuSign / HelloSign
- **Deliverable:** Signed `NDA.md`.

### 2.2 MSA & SOW Execution
- **Who:** Ops / Legal / Client Executive
- **Activities:** Signature of the umbrella Master Services Agreement and the specific Statement of Work.
- **Deliverable:** Counter-signed `MSA.md` and `SOW.md`.

### 2.3 Rules of Engagement (ROE) Authorization
- **Who:** Lead Pentester + Client Technical Contact
- **Activities:** Finalize technical details (IPs, accounts, windows).
- **Deliverable:** Signed `RULES-OF-ENGAGEMENT.md`. **Testing cannot start without this.**

---

## 3. EXECUTION PHASE

### 3.1 Kickoff Meeting
- **Who:** Project Team + Client Team
- **Activities:** Introduction, verify ROE, confirm communication channels (Slack/Signal).
- **Timeline:** 30-60 mins.

### 3.2 Testing Execution
- **Who:** Pentesting Team
- **Activities:** 
  - Reconnaissance & OSINT
  - Vulnerability Identification
  - Exploitation & Post-Exploitation
- **Communication:** Daily or weekly status updates via Slack.
- **Critical Finding Notification:** Immediate phone/email if a "Critical" bug is found.

---

## 4. REPORTING & CLOSEOUT

### 4.1 Reporting Draft
- **Who:** Pentesting Team
- **Activities:** Consolidate findings into `REPORT-TEMPLATE.md`. Peer review.
- **Deliverable:** Draft Technical Report.

### 4.2 Debrief Meeting
- **Who:** Project Team + Client Stakeholders
- **Activities:** Present findings, demonstrate exploits (if requested), discuss remediation.
- **Timeline:** 60-90 mins.

### 4.3 Final Report Delivery
- **Who:** Principal Consultant
- **Activities:** Incorporate client feedback (clarifications).
- **Deliverable:** Final PDF Report (Encrypted).

### 4.4 Remediation & Verification
- **Who:** Client Team (Fixes) / Consultant (Verification)
- **Activities:** Client applies patches. Consultant re-tests identified vulnerabilities.
- **Deliverable:** Remediation Verification Letter.

---

## COMMUNICATION CADENCE SUMMARY
| Stage | Frequency | Channel |
| :--- | :--- | :--- |
| Scoping | As needed | Video Call / Email |
| Testing | Daily / Weekly | Slack / Encrypted Chat |
| Critical Finding | Immediate | Phone + Encrypted Email |
| Debrief | Once | Video Call |
| Remediation | Monthly (if continuous) | Slack / Email |
