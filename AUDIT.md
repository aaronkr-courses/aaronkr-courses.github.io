# Repo Audit — aaronkr-courses.github.io

Audit performed: 2026-04-30  
Scope: Full repo (Jekyll site + `/attend` attendance app)  
Auditor: Claude (claude-sonnet-4-6)

---

## Executive Summary

| Category | Findings | Fixed in this audit |
|----------|----------|---------------------|
| Security — Critical | 2 | 2 |
| Security — High | 2 | 2 |
| Security — Medium | 2 | 0 (action required by you) |
| Security — Acceptable | 3 | — |
| Code Quality — CSS | 2 | 2 |
| Code Quality — YAML | 1 | 1 |
| Code Quality — JS | 1 | 1 |
| Code Quality — Info | 4 | — |

---

## Security Findings

### 🔴 Critical — Fixed

#### 1. Fake attendance submissions via Firestore REST API
**File:** `attend/firestore.rules`  
**What it was:** `allow create: if true` with no field validation. Anyone knowing the Firebase project ID could POST a log entry with `submitted: true` and any student name directly to the Firestore REST API — bypassing the QR token entirely.  
**Fix:** Rules now enforce server-side:
- `submitted` must be `false` on create
- `studentName`/`studentId` must not be present on create
- `tokenUsed` must match the live session token via cross-document `get()`

**Action required:** Re-paste the updated `attend/firestore.rules` into Firebase Console → Firestore → Rules and click **Publish**. The fix exists in code but is not live until you re-deploy the rules.

---

#### 2. Fallback path created `submitted: true` directly
**File:** `attend/index.html`  
**What it was:** When `scanLogRef` was lost (e.g. page refresh mid-session), the fallback called `db.collection('logs').add({ submitted: true, studentName: name, ... })` — a one-step write that bypassed both the new token rule and the "no name on create" rule.  
**Fix:** Fallback now follows the same two-step create→update pattern as the primary path.

---

### 🟠 High — Fixed

#### 3. Firebase credentials committed to git
**Files:** `attend/firebase-config.js`, `.gitignore`, `.github/workflows/deploy.yml`  
**What it was:** `firebase-config.js` had real API key `AIzaSy...` and `PROFESSOR_EMAIL` hard-coded and committed to the repo.  
**Fix:**
- `firebase-config.js` added to `.gitignore`
- `attend/firebase-config.example.js` committed as a placeholder template
- GitHub Actions workflow generates the real file from GitHub Secrets at build time

**Action required:** Add 5 GitHub Secrets (FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_SENDER_ID, FIREBASE_APP_ID, PROFESSOR_EMAIL). Switch GitHub Pages source to "GitHub Actions" in repo Settings → Pages.

---

#### 4. XSS: student-supplied values rendered via `innerHTML`
**Files:** `attend/admin.html`, `attend/index.html`  
**What it was:** `studentName`, `studentId`, `feedback`, `city`, and `className` were inserted directly into `innerHTML`. A student submitting `<img src=x onerror=alert(1)>` as their name would execute arbitrary JavaScript in the professor's browser.  
**Fix:** `escHtml()` helper added to both files; all user-supplied data is escaped before `innerHTML` insertion.

---

### 🟡 Medium — Action Required

#### 5. Firestore rules not re-deployed after changes
**Status:** The `attend/firestore.rules` file in the repo contains the fixed rules, but the copy running in Firebase Console is the old insecure version. The app works, but fake-submission protection is not active until you republish.  
**Action:** Firebase Console → Firestore → Rules → paste contents of `attend/firestore.rules` (replace `YOUR_EMAIL@jbnu.ac.kr` with your real email in 2 places) → Publish.

---

#### 6. Firebase API key not domain-restricted
**Status:** Firebase web API keys are public by design, but restricting the key to your domain prevents quota abuse from other sites.  
**Action:** Google Cloud Console → APIs & Services → Credentials → your Firebase API key → Application restrictions → HTTP referrers → add `courses.aaron.kr/*`, `aaronkr-courses.github.io/*`, `localhost/*` → Save (actually also had to add `aaronkr-courses.firebaseapp.com`).

---

### 🟢 Acceptable Risks

| Finding | Why it's acceptable |
|---------|---------------------|
| `admin.html` publicly accessible by URL | Google Auth is the real gate; unauthenticated visitors see only the sign-in screen |
| Student IDs not validated server-side | Academic integrity issue, not a security issue; Firestore records exactly what was submitted |
| Token uses partial determinism | First part is time-window based; second part adds ~31 bits of random entropy — sufficient for classroom use |
| `_config.yml` email is public | This is intentional — it's the professor's public contact email |
| Firebase web config values (apiKey, appId) are public | This is by design per Firebase documentation; security comes from Firestore rules + Auth, not the key |

---

## Code Quality Findings

### YAML

#### 7. Malformed YAML in `_data/nav.yml` — Fixed
**File:** [`_data/nav.yml`](_data/nav.yml), line 73  
**What it was:** `url: https://www.pailab.io/pages/arduino-overview"` — missing opening quote, closing quote present. YAML parser silently accepted the trailing `"` as part of the string value, producing a broken URL.  
**Fix:** Added the missing opening quote: `url: "https://www.pailab.io/pages/arduino-overview"`

---

### JavaScript

#### 8. XSS via `innerHTML` on externally fetched bio content — Fixed
**File:** [`_includes/about_aaron.html`](_includes/about_aaron.html), lines 54–55  
**What it was:**
```js
document.getElementById('bio-en').innerHTML = d.bio_en;
document.getElementById('bio-ko').innerHTML = d.bio_ko;
```
Content is fetched at runtime from `https://aaronsnowberger.com/bio.json`. If that domain were ever compromised or served unexpected content, it could inject HTML into the courses site.  
**Fix:** Changed to `textContent` (bio is plain text; no HTML rendering needed):
```js
document.getElementById('bio-en').textContent = d.bio_en;
document.getElementById('bio-ko').textContent = d.bio_ko;
```

---

### CSS / SCSS

#### 9. Inline `<style>` block in `_pages/policies.md` — Fixed
**Files:** [`_pages/policies.md`](_pages/policies.md), [`_sass/_pages.scss`](_sass/_pages.scss)  
**What it was:** 50-line minified `<style>` block at the top of `policies.md` defining `.pol-card`, `.pol-list-item`, `.faq-*`, `.policy-grid`, and related classes. These classes existed **only** in this inline block — not in the SCSS system — so they couldn't be overridden from SCSS, were invisible to IDE tooling, and violated the "no inline `<style>` blocks" architecture rule documented in `CLAUDE.md`.  
**Fix:** The 50-line block was moved into `_sass/_pages.scss` as properly formatted SCSS with nesting. The inline `<style>` was removed from `policies.md`.

---

#### 10. Grading bar hardcoded hex colors — Fixed
**Files:** [`_layouts/course.html`](_layouts/course.html), [`_sass/_variables.scss`](_sass/_variables.scss), [`_sass/_base.scss`](_sass/_base.scss)  
**What it was:** The grading bar and legend used 6 hardcoded hex values inline:
- `#4a5568` (attendance), `#7c3aff` (HW), `#9b65ff` (quiz)
- `#2563eb` (midterm), `#0e6490` (final), `#b45309` (project)

These were duplicated 12 times across `grade-seg` and `gl-dot` elements and couldn't be changed from one place.  
**Fix:**
1. Added 6 SCSS variables to `_variables.scss`: `$grade-attend`, `$grade-hw`, `$grade-quiz`, `$grade-mid`, `$grade-final`, `$grade-project`
2. Added 6 CSS custom properties to `:root` in `_base.scss`: `--grade-attend` through `--grade-project`
3. Replaced all 12 hardcoded hex values in `course.html` with `var(--grade-*)` references

---

### Informational / Low Priority

| # | Finding | File | Action |
|---|---------|------|--------|
| 11 | Google Fonts loaded without Subresource Integrity (SRI) | `_includes/head.html` | Not fixable — Google Fonts generates dynamic CSS URLs; SRI requires static hashes. Acceptable. |
| 12 | CDN scripts (`firebase`, `crypto-js`) loaded without SRI | `attend/index.html`, `attend/admin.html` | Could add `integrity=` attributes; low priority for internal tool |
| 13 | `console.log` in `scripts/fetch-github-stats.js` | `scripts/fetch-github-stats.js` | Build script only; never runs in production. Acceptable. |
| 14 | `_config.yml` still has an unused `universities:` block | `_config.yml` | Templates use `_data/universities.yml` (correct). The `_config.yml` block is redundant but harmless. Can be removed. |

---

## Files Changed in This Audit

| File | Change |
|------|--------|
| `_data/nav.yml` | Fixed malformed YAML (missing opening quote on line 73) |
| `_includes/about_aaron.html` | `innerHTML` → `textContent` for externally fetched bio |
| `_sass/_variables.scss` | Added 6 grading color SCSS variables |
| `_sass/_base.scss` | Added 6 grading color CSS custom properties to `:root` |
| `_layouts/course.html` | Replaced 12 hardcoded hex colors with `var(--grade-*)` |
| `_sass/_pages.scss` | Added policies index CSS (moved from inline style block) |
| `_pages/policies.md` | Removed 50-line inline `<style>` block |
| `attend/firestore.rules` | Added server-side token validation + field restrictions on create |
| `attend/index.html` | XSS fix + fallback two-step pattern + relative link |
| `attend/admin.html` | XSS fix + relative link |
| `attend/firebase-config.js` | Gitignored; real values stay local only |
| `attend/firebase-config.example.js` | Placeholder template committed to repo |
| `.github/workflows/deploy.yml` | Injects Firebase config from GitHub Secrets before build |
| `.gitignore` | Added `attend/firebase-config.js` |
| `attend/DEPLOY.md` | Deployment guide updated with correct URLs + setup steps |
| `attend/SECURITY.md` | Full security audit report (attend-specific) |

---

## Actions Still Required from You

1. **Re-paste `attend/firestore.rules`** into Firebase Console → Firestore → Rules → Publish  
   *(Token validation is only active once the rules are re-deployed)*

2. **Add 5 GitHub Secrets** (if not already done):  
   FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_SENDER_ID, FIREBASE_APP_ID, PROFESSOR_EMAIL

3. **Switch GitHub Pages source** to "GitHub Actions" in repo Settings → Pages  
   *(Required for the workflow to inject `firebase-config.js` before build)*

4. **Restrict Firebase API key** in Google Cloud Console → HTTP referrers: `courses.aaron.kr/*`
