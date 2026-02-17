# SECURITY ASSESSMENT REPORT

**Client:** [CLIENT_NAME]  
**Engagement:** [ENGAGEMENT_TYPE]  
**Date:** [DATE]  
**Confidentiality:** [CONFIDENTIAL / HIGHLY CONFIDENTIAL]

---

## 1. EXECUTIVE SUMMARY
### 1.1 Overview
[Provide a high-level summary of the assessment goals and the overall security posture of the client.]

### 1.2 Key Findings
- **Critical Issues Found:** [NUMBER]
- **High Issues Found:** [NUMBER]
- **Medium Issues Found:** [NUMBER]
- **Low/Info Issues Found:** [NUMBER]

### 1.3 Strategic Recommendations
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

---

## 2. SCOPE AND METHODOLOGY
### 2.1 Engagement Scope
The following assets were assessed during this engagement:
- [Asset 1]
- [Asset 2]

### 2.2 Methodology
This assessment followed the **PTES** (Penetration Testing Execution Standard) and utilized the following frameworks:
- OWASP Top 10 / ASVS
- MITRE ATT&CK
- NIST SP 800-115

### 2.3 Timeline
- **Start Date:** [DATE]
- **End Date:** [DATE]
- **Reporting Date:** [DATE]

---

## 3. RISK RATING METHODOLOGY
Findings are categorized based on their impact and likelihood, following the **DREAD** or **CVSS v3.1** models.

| Severity | Description |
| :--- | :--- |
| **CRITICAL** | Exploitation is easy and results in full system compromise or data breach. |
| **HIGH** | Significant risk of compromise; requires moderate effort or specific conditions. |
| **MEDIUM** | Moderate risk; requires complex exploitation or limited impact. |
| **LOW** | Minor risk; difficult to exploit or very low impact. |
| **INFO** | Best practice recommendations or information gathering results. |

---

## 4. DETAILED FINDINGS

### [FINDING_ID]: [FINDING_TITLE]
**Severity:** [CRITICAL/HIGH/MEDIUM/LOW/INFO]  
**CVSS Score:** [e.g. 9.8 (Base)]  
**CWE:** [e.g. CWE-89 (SQL Injection)]  
**Status:** [OPEN/REMEDIATED]

#### Description
[Detailed explanation of the vulnerability and why it is a risk.]

#### Evidence
[Insert screenshots, terminal output, or payload samples here.]
```bash
# Example payload
curl -X POST https://api.client.com/v1/login -d "user=' OR 1=1--"
```

#### Remediation
[Step-by-step guidance on how to fix the issue.]

#### References
- [Link to CVE/OWASP/Documentation]

---

## 5. APPENDICES
### Appendix A: Tools Used
- Nmap
- Burp Suite Professional
- Metasploit Framework
- [Custom Scripts]

### Appendix B: Raw Output Samples
[Insert sanitized tool logs or scan results.]

---

## 6. DISCLAIMER
This report is a "point-in-time" assessment. Security is dynamic; new vulnerabilities may emerge after this report is issued. CubeRoot Dynamics provides no warranty, express or implied, regarding the future security of the assessed systems.
