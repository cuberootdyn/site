# RULES OF ENGAGEMENT (ROE)

**Engagement:** [ENGAGEMENT_NAME]  
**Date:** [DATE]  
**Version:** 1.0

## 1. AUTHORIZATION AND LEGAL FRAMEWORK
This document provides explicit written permission for CubeRoot Dynamics ("Consultant") to perform security testing against the assets owned and/or operated by [CLIENT_NAME] ("Client"). This authorization is intended to provide a "Safe Harbor" for Consultant's activities, provided they are conducted within the scope defined herein.

## 2. SCOPE OF TESTING
### 2.1 Authorized Targets (In-Scope)
| IP Address / Domain / URL | Description | Constraints |
| :--- | :--- | :--- |
| [e.g. 1.2.3.4] | [Primary Gateway] | [None] |
| [e.g. *.client.com] | [External Surface] | [Exclude dev.client.com] |

### 2.2 Prohibited Targets (Out-of-Scope)
The following are strictly out-of-scope. Testing against these assets is a violation of this agreement:
- [Out-of-Scope IP/Domain]
- Any third-party hosted services (SaaS) unless explicit multi-party consent is obtained.
- Physical security of facilities.

## 3. TESTING WINDOWS AND TIMES
**Start Date:** [START_DATE]  
**End Date:** [END_DATE]  
**Time Zone:** [TIME_ZONE]  
**Testing Hours:** [e.g., 08:00 - 18:00 Local / 24x7]

## 4. PROHIBITED ACTIONS
Unless explicitly requested in writing, the following actions are prohibited:
- **Denial of Service (DoS):** Actions intended to crash services or consume bandwidth to the point of unavailability.
- **Data Exfiltration:** Moving real sensitive data (PII/Financial) out of the environment. Proof of access should be demonstrated via non-sensitive file markers.
- **Destructive Testing:** Actions that permanently delete or alter production data.
- **Social Engineering:** Testing against Client employees (unless Social Engineering is the primary SOW objective).

## 5. COMMUNICATION AND ESCALATION
### 5.1 Routine Communication
Consultant will provide a brief status update via [EMAIL/SLACK] every [FREQUENCY].

### 5.2 Critical Finding Notification
If a "Critical" severity vulnerability is discovered, Consultant will notify the Primary Contact immediately via phone and email.

### 5.3 Emergency Contact Procedures
In the event of a system outage or suspected security incident caused by testing, the following escalation path should be used:

**Client Emergency Contacts:**
- Primary: [NAME] - [PHONE] - [EMAIL]
- Secondary: [NAME] - [PHONE] - [EMAIL]

**Consultant Emergency Contacts:**
- Engagement Lead: [NAME] - [PHONE] - [EMAIL]

## 6. EVIDENCE HANDLING AND DATA RETENTION
- **Storage:** All evidence (screenshots, logs, tool output) will be stored in an encrypted volume.
- **Transmission:** Reports and sensitive data will be shared via [SECURE_PORTAL/ENCRYPTED_EMAIL].
- **Retention:** Consultant will retain engagement data for [NUMBER] days following the delivery of the final report, after which it will be securely destroyed unless otherwise requested.

## 7. SAFE HARBOR / BEST EFFORT CLAUSE
Client acknowledges that security testing is a "point-in-time" assessment. While Consultant will use professional diligence to identify vulnerabilities, the absence of findings does not guarantee the absence of security flaws. Consultant provides these services on a "best effort" basis within the time and scope allotted.

---

### ACKNOWLEDGMENT

**CUBEROOT DYNAMICS**  
Authorized Signatory: __________________________  
Date: __________________________

**[CLIENT_NAME]**  
Authorized Signatory: __________________________  
Date: __________________________
