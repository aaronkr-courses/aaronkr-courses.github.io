# Security Audit — Attendance App

Audit performed: 2026-04-30  
Scope: `attend/` folder (firebase-config.js, classes.js, admin.html, index.html, firestore.rules, deploy.yml)

---

## Summary

| Severity | Finding | Status |
|----------|---------|--------|
| 🔴 Critical | Firestore rules allowed fake `submitted: true` entries via direct API | **Fixed** |
| 🔴 Critical | `index.html` fallback created `submitted: true` directly, bypassing token | **Fixed** |
| 🟠 High | `firebase-config.js` had real credentials committed to git | **Fixed** (gitignored + GitHub Secrets) |
| 🟠 High | XSS: student name, ID, feedback rendered unescaped into innerHTML | **Fixed** |
| 🟡 Medium | `firestore.rules` template had placeholder email (`YOUR_EMAIL@jbnu.ac.kr`) not deployed | **Action required** |
| 🟡 Medium | Firebase API key not domain-restricted | **Action required** |
| 🟢 Low | `admin.html` client-side email check is bypassable (but Firestore rules are the real guard) | Acceptable |
| 🟢 Low | Student IDs not validated server-side | Acceptable for use case |
| ℹ️ Info | `_config.yml` email is public | Intentional (public courses site) |
| ℹ️ Info | Firebase web config values are public by design | By design |

---

## Fixed findings

### 🔴 Fake submissions via Firestore API (Critical — Fixed)

**What it was:** `allow create: if true` with no field validation meant anyone with the Firebase project ID could call the Firestore REST API and create a log entry with `submitted: true`, any `studentName`, and any `sessionId`. The QR token was only checked client-side in JavaScript — easily bypassed.

**What was fixed:** `firestore.rules` now enforces server-side:
1. `submitted` must be `false` on create (no self-reporting as present)
2. `studentName`/`studentId` must not be present on create (they come in the update step)
3. `tokenUsed` must match the current live session token (server-side cross-document validation)

```
allow create: if request.resource.data.submitted == false
              && !('studentName' in request.resource.data)
              && !('studentId' in request.resource.data)
              && request.resource.data.tokenUsed ==
                   get(/databases/.../documents/sessions/current).data.token;
```

**Action required:** Re-paste the updated `firestore.rules` into Firebase Console → Firestore → Rules and republish.

---

### 🔴 Fallback path created `submitted: true` directly (Critical — Fixed)

**What it was:** In `index.html`, if the page was refreshed mid-session and `scanLogRef` was lost, the fallback called `db.collection('logs').add({ submitted: true, studentName: name, ... })` — creating a submitted entry in one step, bypassing both the token rule and the "no name on create" rule.

**What was fixed:** Fallback now follows the same two-step pattern as the primary path:
1. Create an unsubmitted scan entry (with token, no name — satisfies all new Firestore rules)
2. Update it to set `submitted: true` + name + ID

---

### 🟠 Credentials in git (High — Fixed)

**What it was:** `firebase-config.js` committed with real API key and `PROFESSOR_EMAIL`.

**What was fixed:**
- `firebase-config.js` added to `.gitignore`
- `firebase-config.example.js` committed as a placeholder template
- `.github/workflows/deploy.yml` generates the real file from GitHub Secrets at build time
- `PROFESSOR_EMAIL` only ever lives in GitHub Secrets, never in git

---

### 🟠 XSS in admin dashboard (High — Fixed)

**What it was:** Student-submitted values (`studentName`, `studentId`, `feedback`, `city`) were inserted directly into `innerHTML` in `admin.html`'s `renderLogTable()` and `loadFeedback()`. A student could submit `<img src=x onerror=alert(1)>` as their name and execute JavaScript in the professor's browser.

**What was fixed:** `escHtml()` helper added to both `admin.html` and `index.html`. All user-supplied data is escaped before insertion into innerHTML.

---

## Action required

### 🟡 Re-deploy Firestore rules (Required before next class)

The `firestore.rules` file in this repo is the authoritative source of truth. After any change:

1. Firebase Console → **Firestore Database → Rules**
2. Delete existing rules, paste the full contents of `attend/firestore.rules`
3. Replace `YOUR_EMAIL` with your actual Google account email
4. Click **Publish**

> The rules currently deployed in Firebase Console are older and do not have the token validation or create restrictions. The app will work but is vulnerable until you republish.

---

### 🟡 Restrict Firebase API key to your domain (Recommended)

Firebase web API keys are public by design — the project ID, app ID, etc. are meant to be embedded in client-side code. Security comes from Firestore rules + Firebase Auth. However, restricting the key to your domain prevents other sites from using your key's quota.

1. [Google Cloud Console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials)
2. Click your Firebase API key → **Application restrictions → HTTP referrers**
3. Add:
   - `courses.aaron.kr/*`
   - `aaronkr-courses.github.io/*`
   - `localhost/*` (for local dev)
4. Save

---

## Acceptable risks

### 🟢 Admin page is publicly accessible by URL

`/attend/admin.html` has no URL-level access control — anyone can visit it. This is intentional:
- Google Auth is the actual gate; unauthenticated visitors see only the sign-in screen
- The page is useless without the correct Google account
- There's no benefit to obscuring the URL (security through obscurity is not real security)
- Bookmarking the URL is the intended workflow for the professor

### 🟢 Student IDs are not validated server-side

Students can submit any string as their student ID. This is an academic integrity issue, not a security issue. The Firestore data shows exactly what was submitted, including suspicious values. Cross-reference with your official class roster to verify.

### 🟢 Token generation uses partial entropy

The QR token is `Math.floor(Date.now() / (120 * 1000)).toString(36) + Math.random().toString(36).substr(2, 6)`. The first part is deterministic (based on time window), but the second part adds ~31 bits of random entropy. For a classroom app with a 2-minute window, this is sufficient — brute-forcing would require thousands of requests per minute, which Firestore quotas and rate patterns would make visible.

---

## What is intentionally public

| Value | Why it's okay to be public |
|-------|---------------------------|
| Firebase `apiKey`, `projectId`, `appId`, etc. | Firebase web SDK requires these in client-side code. Google explicitly says they are not secrets. Security is in Firestore rules + Auth, not the key itself. See [Firebase docs](https://firebase.google.com/docs/projects/api-keys). |
| `_config.yml` email (`aaronkr.trainer@gmail.com`) | This is the professor's public contact email — already listed on calendly, office-hours page, etc. It's intentional for a public courses site. |
| `SCHOOLS` and `CLASSES` data in `classes.js` | Course names, schedules, and student counts are not sensitive. Student data is never stored in this file. |

---

## Student data & privacy

The app collects and stores in Firestore:
- Full name (student-provided)
- Student ID number (student-provided)
- IP address
- Country, region, city (from ipapi.co geolocation)
- Timestamp
- Optional free-text feedback

**Recommendations:**
- Only the professor can read this data (enforced by Firestore rules)
- Do not export CSVs to shared drives or email them in plain text
- Inform students in your syllabus that attendance is tracked digitally and IP address is logged
- Per Korean PIPA (개인정보 보호법), collected personal data should not be kept longer than necessary — periodically delete old sessions from Firestore
