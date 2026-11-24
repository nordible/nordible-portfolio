# Implementation Checklist & Legal Documentation (TODO)

## 📋 Actionable Checklist (Aufgabenliste)

### 1. Web Deployment & Public Availability
- [ ] **Publish Terms of Service (`/terms`):** Ensure the page is publicly accessible without authentication at `https://nordible.co/terms`.
- [ ] **Publish Privacy Policy (`/privacy`):** Ensure the page is publicly accessible without authentication at `https://nordible.co/privacy`.
- [ ] **Verify Canonical & OpenGraph Metadata:** Confirm meta tags in `src/app/terms/page.tsx` and `src/app/privacy/page.tsx` match the legal entity.

### 2. UI / UX Best Practices (Benutzerfreundlichkeit)
- [ ] **Add TikTok Disconnect Action in Dashboard:**
  - Place a clear, high-contrast action button (e.g., *"Disconnect TikTok & Wipe Data"*) in user settings.
  - Apply Fitts's Law: Keep account disconnection controls distinct from daily scheduling actions to prevent accidental clicks.
  - Add a confirmation modal explaining that all OAuth tokens and pending queue items will be permanently erased.
- [ ] **Feedback Notifications:** Provide instant visual confirmation (toast notification) upon successful account disconnection:
  > *"TikTok account disconnected. All access tokens and unsent media have been permanently purged."*

### 3. Backend & Security Implementation (Datensicherheit)
- [ ] **Token Encryption:** Ensure TikTok OAuth access and refresh tokens are encrypted at rest (AES-256).
- [ ] **Automated Media Cleanup:** Confirm scheduled video files and captions are purged from storage immediately after API publishing confirmation.
- [ ] **Immediate Purge on Disconnect / Revocation:** Wire the webhook or disconnect endpoint to immediately delete:
  - Stored OAuth tokens (`access_token`, `refresh_token`);
  - User identifiers (`open_id`, display name, avatar);
  - Unsent scheduled queue items.

### 4. TikTok Developer Portal & App Review
- [ ] Enter `https://nordible.co/terms` into the **Terms of Service URL** field in the TikTok Developer Portal.
- [ ] Enter `https://nordible.co/privacy` into the **Privacy Policy URL** field in the TikTok Developer Portal.
- [ ] Verify that scopes requested match strictly: `user.info.basic`, `video.upload`, `video.publish`.

---

# 📜 Document 1: Terms of Service

```markdown
# Terms of Service (Allgemeine Geschäftsbedingungen)

**Effective Date:** November 13, 2026  
**Last Updated:** November 13, 2026  
**Service URL:** [https://nordible.co/terms](https://nordible.co/terms)  
**Operator:** Nordible Technologies, Frankfurt am Main, Germany  

---

### Summary / Auf einen Blick (TL;DR)
- Nordible Technologies provides a web-based scheduling and publishing application for authorized social media workflows.
- Our tool integrates with TikTok via the official TikTok Login Kit and Content Posting API.
- You retain ownership of all content you upload. We only store media and OAuth tokens to schedule and publish posts on your behalf.
- When you disconnect your TikTok account, all associated tokens and scheduled media are deleted immediately.

---

## 1. Acceptance of Terms
By accessing or using the social media management and scheduling service provided by **Nordible Technologies** ("we", "us", or "our") at [https://nordible.co](https://nordible.co), you ("User", "Client", or "Authorized Team Member") agree to be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use or access the service.

## 2. Description of the Service
Nordible Technologies provides a web-based content scheduling and publishing software. The tool enables verified users to:
- Authenticate and link supported third-party social media profiles;
- Upload and organize video files and associated metadata (e.g., captions, tags);
- Schedule automated content dispatch to linked accounts via authorized developer APIs.

## 3. Third-Party Integrations & TikTok API Services
Our scheduling software interacts with third-party platform APIs, specifically **TikTok API Services** (TikTok Login Kit and TikTok Content Posting API).

1. **Binding Terms:** By connecting your TikTok account to our service, you acknowledge and agree that you are also bound by:
   - **TikTok Terms of Service:** [https://www.tiktok.com/legal/terms-of-service](https://www.tiktok.com/legal/terms-of-service)
   - **TikTok Privacy Policy:** [https://www.tiktok.com/legal/privacy-policy](https://www.tiktok.com/legal/privacy-policy)
   - **TikTok Community Guidelines:** [https://www.tiktok.com/community-guidelines](https://www.tiktok.com/community-guidelines)
2. **Authorized Scopes:** Our integration requests only the minimum necessary permissions required to fulfill scheduling features:
   - `user.info.basic`: To identify your authorized account and display profile identity.
   - `video.upload`: To transfer video content to TikTok's upload infrastructure.
   - `video.publish`: To finalize and publish approved video posts on your scheduled timeline.
3. **Independent Third Parties:** TikTok is a registered trademark of ByteDance Ltd. / TikTok Inc. Nordible Technologies is an independent software provider. We do not control, modify, or assume liability for TikTok’s service availability, platform moderation, or API deprecation.

## 4. User Accounts, Access & Security
1. **Authorized Usage:** Access to our management console is restricted to authorized clients and their designated team members. You must not share administrative credentials.
2. **Account Disconnection:** You may disconnect your TikTok profile at any time via our web dashboard or directly through TikTok's security settings (under *Settings and privacy > Security & permissions > Apps and services*).
3. **Revocation Consequences:** Disconnecting your TikTok account automatically revokes our access tokens and immediately terminates any pending, unsent scheduled posts.

## 5. User Content & Intellectual Property
1. **Ownership:** You retain 100% ownership, copyright, and intellectual property rights in all video files, audio tracks, text captions, and branding assets you upload.
2. **Limited License:** You grant Nordible Technologies a strictly limited, non-exclusive, revocable license to host, transcode, and transmit your media files solely for the operational purpose of executing your scheduled posts through the authorized APIs.
3. **Content Standards:** You represent and warrant that your content does not infringe on third-party intellectual property, privacy rights, applicable laws, or TikTok's Community Guidelines.

## 6. Prohibited Activities
You agree not to:
- Use the service to distribute spam, unsolicited bulk uploads, malware, or illicit media;
- Reverse engineer, decompile, or tamper with the API interfaces or session security;
- Circumvent TikTok rate limits, platform policies, or authentication protocols;
- Resell, lease, or sub-license access to unauthorized third parties.

## 7. Service Availability & Disclaimers
1. **"As Is" Basis:** The service is provided on an "as is" and "as available" basis.
2. **API Dependency:** Delivery of scheduled content relies on the operational availability of external network APIs (including TikTok API Services). Nordible Technologies is not liable for delayed or failed posts caused by third-party API downtime, platform-side rate limits, account-level TikTok restrictions, or network interruptions.

## 8. Limitation of Liability
To the fullest extent permitted under German law (*BGB*):
- Nordible Technologies is liable only for intent (*Vorsatz*) and gross negligence (*grobe Fahrlässigkeit*), or breach of essential contractual duties (*Kardinalpflichten*).
- We are not liable for indirect damages, lost profits, reputational harm, or algorithmic penalties applied by external social media networks.

## 9. Termination
We reserve the right to suspend or terminate your access immediately if you violate these Terms, breach TikTok’s policies, or engage in unauthorized system access. You may terminate your account at any time by requesting deletion.

## 10. Governing Law & Jurisdiction
These Terms are governed by and construed in accordance with the laws of the **Federal Republic of Germany**, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). The exclusive place of jurisdiction for all disputes arising from or in connection with these Terms is **Frankfurt am Main, Germany**.

## 11. Contact & Inquiries
For questions regarding these Terms, contact:

**Nordible Technologies**  
Breitlacherstraße 101  
60489 Frankfurt am Main, Germany  
**Email:** [mail@nordible.co](mailto:mail@nordible.co)  
**Website:** [https://nordible.co](https://nordible.co)
```

---

# 🔒 Document 2: Privacy Policy

```markdown
# Privacy Policy (Datenschutzerklärung)

**Effective Date:** November 13, 2026  
**Last Updated:** November 13, 2026  
**Policy URL:** [https://nordible.co/privacy](https://nordible.co/privacy)  
**Operator:** Nordible Technologies, Frankfurt am Main, Germany  

---

### Privacy Highlights / Datenschutz im Überblick
- **Purpose:** We process data strictly to allow you to authenticate, schedule, and publish video content to your TikTok account.
- **Zero Data Brokerage:** We **never** sell, rent, monetize, or share your data or TikTok API data with third-party brokers, advertisers, or profiling networks.
- **Minimal Storage:** OAuth tokens are encrypted at rest. Video files and captions are stored only until scheduled publication, then permanently erased.
- **Full GDPR Compliance:** You retain full rights to access, rectification, export, and complete erasure under EU GDPR.

---

## 1. Data Controller (Verantwortlicher)
The data controller responsible for the processing of personal data on this platform within the meaning of Art. 4(7) of the EU General Data Protection Regulation (GDPR / *DSGVO*) is:

**Nordible Technologies**  
Breitlacherstraße 101  
60489 Frankfurt am Main, Germany  
**Founder & Solutions Architect:** Kabeer Shah  
**Contact Email:** [mail@nordible.co](mailto:mail@nordible.co)  
**Website:** [https://nordible.co](https://nordible.co)  

---

## 2. TikTok API Services & Data Collection
Our tool connects to TikTok via **TikTok Login Kit** and the **TikTok Content Posting API**. By using this integration, our application processes specific categories of personal and media data.

### 2.1 Information Collected via TikTok Login Kit
When you connect your TikTok account via OAuth 2.0, we collect:
- **TikTok Open ID:** A unique platform-generated alphanumeric identifier used solely to link your session to your workspace.
- **Public Profile Information:** Display name and avatar URL (requested under scope `user.info.basic`) to identify the connected account within our dashboard.
- **OAuth Credentials:** Encrypted OAuth 2.0 access tokens and refresh tokens.

### 2.2 User-Supplied Scheduling Content
When creating scheduled posts, we temporarily process:
- **Video Media Files:** Video recordings uploaded by you to be dispatched via the `video.upload` API scope.
- **Post Metadata:** Captions, scheduled release timestamps, tags, and publishing preferences processed via the `video.publish` API scope.

### 2.3 Integration with TikTok Platform Terms
By utilizing this feature, you also interact directly with TikTok’s infrastructure. We encourage you to review their policies:
- **TikTok Privacy Policy:** [https://www.tiktok.com/legal/privacy-policy](https://www.tiktok.com/legal/privacy-policy)
- **TikTok Terms of Service:** [https://www.tiktok.com/legal/terms-of-service](https://www.tiktok.com/legal/terms-of-service)

---

## 3. Legal Basis of Processing (Rechtsgrundlagen gem. DSGVO)
We process your personal data in strict compliance with the GDPR:

1. **Performance of Contract (Art. 6(1)(b) GDPR):** Processing is necessary to provide the scheduling and automated posting service you request.
2. **Consent (Art. 6(1)(a) GDPR):** Granted when you explicitly authorize our application via the TikTok OAuth 2.0 consent dialog.
3. **Legitimate Interests (Art. 6(1)(f) GDPR):** Processing technical logs and security signals to protect our infrastructure against unauthorized access and maintain system stability.

---

## 4. How We Use and Protect Your Data

### 4.1 Strict Purpose Limitation
Your data and TikTok API data are used **strictly and exclusively** for:
- Authenticating your identity and displaying your active connected channel in the control panel;
- Uploading and publishing your pre-approved video content at the exact time you schedule;
- Verifying the status of scheduled posts.

### 4.2 Security Measures
- **Encryption at Rest & in Transit:** All network communication is enforced via TLS 1.3 (HTTPS). OAuth tokens (access and refresh tokens) are encrypted at rest using industry-standard AES-256 encryption.
- **Isolated Storage:** Media assets are stored in protected, access-restricted cloud storage environments accessible only by our automated publication workers.

### 4.3 No Third-Party Sharing or Selling
- We **do not sell, license, trade, or share** your personal data, uploaded content, or TikTok API data with third-party data brokers, data aggregators, ad tech networks, or AI model trainers.
- We disclose data to service providers (such as hosting infrastructure) only under strict Data Processing Agreements (DPAs) compliant with Art. 28 GDPR.

---

## 5. Data Retention & Deletion Policy (Speicherfristen & Löschung)

We adhere to the principle of storage limitation (Art. 5(1)(e) GDPR):

| Data Type | Retention Period | Deletion Trigger |
| :--- | :--- | :--- |
| **TikTok OAuth Tokens** | Maintained while account is active | **Deleted immediately** upon account disconnection or deletion request |
| **TikTok Profile Data (Name, Avatar)** | Cached during active connection | **Deleted immediately** upon disconnection |
| **Video Media Files** | Stored temporarily until publication | **Permanently purged** immediately after successful posting (or within 24 hours of failure) |
| **Post Metadata & Captions** | Stored during scheduled queue | **Purged immediately** upon post completion or cancellation |

### How to Revoke Access & Delete Data
1. **Via Dashboard:** Click **"Disconnect TikTok Account"** in your Nordible account settings. This action instantly wipes your stored tokens and purges all pending scheduled media.
2. **Via TikTok App:** Navigate to *Settings and privacy > Security & permissions > Apps and services > Nordible*, and revoke permissions.
3. **Via Direct Request:** Email [mail@nordible.co](mailto:mail@nordible.co) with the subject *"Data Erasure Request"*. We process erasure within 48 hours without undue delay.

---

## 6. Your Rights Under GDPR (Ihre Betroffenenrechte)
Under Chapter III of the GDPR, you have the following rights at any time:

- **Right of Access (Art. 15 GDPR):** Request a copy of the personal data we hold about you (*Auskunftsrecht*).
- **Right to Rectification (Art. 16 GDPR):** Correct inaccurate or incomplete personal data (*Berichtigungsrecht*).
- **Right to Erasure (Art. 17 GDPR):** Request permanent deletion of your data (*Recht auf Löschung / Recht auf Vergessenwerden*).
- **Right to Restriction of Processing (Art. 18 GDPR):** Restrict how your data is processed under specific legal conditions (*Einschränkung der Verarbeitung*).
- **Right to Data Portability (Art. 20 GDPR):** Receive your data in a structured, commonly used, and machine-readable format (*Datenübertragbarkeit*).
- **Right to Withdraw Consent (Art. 7(3) GDPR):** Revoke your consent to connect your TikTok account at any time with future effect (*Widerrufsrecht*).
- **Right to Lodge a Complaint (Art. 77 GDPR):** Lodge a complaint with a competent data protection supervisory authority (*Beschwerderecht bei der Aufsichtsbehörde*), such as:
  > **Der Hessische Beauftragte für Datenschutz und Informationsfreiheit**  
  > Postfach 3163, 65021 Wiesbaden, Germany  
  > Website: [https://datenschutz.hessen.de](https://datenschutz.hessen.de)

---

## 7. Changes to this Privacy Policy
We may update this Privacy Policy from time to time to reflect operational, regulatory, or platform API changes. Any modifications will be posted to [https://nordible.co/privacy](https://nordible.co/privacy) with an updated "Last Updated" date.

---

## 8. Contact Our Privacy Team
For any privacy-related requests, questions, or exercise of your rights, reach out to us at:

**Nordible Technologies**  
Attn: Data Protection  
Breitlacherstraße 101  
60489 Frankfurt am Main, Germany  
**Email:** [mail@nordible.co](mailto:mail@nordible.co)  
**Website:** [https://nordible.co](https://nordible.co)
```
