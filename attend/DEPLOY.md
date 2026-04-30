# Attendance System — Deployment Guide

## For: courses.aaron.kr (aaronkr-courses/aaronkr-courses.github.io)

---

## File structure

```
repo root/
├── .github/
│   └── workflows/
│       └── deploy.yml            ← GitHub Actions build + deploy (generates firebase-config.js)
├── attend/
│   ├── firebase-config.example.js  ← template (committed; no real credentials)
│   ├── firebase-config.js          ← gitignored; generated at build time from GitHub Secrets
│   ├── classes.js                  ← class list (edit each semester)
│   ├── admin.html                  ← professor dashboard
│   ├── index.html                  ← student landing page (QR target)
│   └── firestore.rules             ← paste into Firebase Console (never uploaded)
├── _config.yml
└── ...
```

Live URLs:
- **Student page (QR target):** `https://courses.aaron.kr/attend/`
- **Your dashboard:**           `https://courses.aaron.kr/attend/admin.html`

---

## Security notes (read before pushing to a public repo)

| What | Why it's safe | What you must do |
|------|--------------|-----------------|
| Firebase API key | Web API keys are public by design — they identify your project but don't grant access. Security comes from Firestore rules + Firebase Auth. | Restrict the key to your domain in [Google Cloud Console → API restrictions](https://console.cloud.google.com/apis/credentials). |
| `PROFESSOR_EMAIL` | Stored only in your local `firebase-config.js`, which is gitignored. | Never commit `firebase-config.js`. |
| Firestore rules | Writes to `session_history` and reads/updates to `logs` require the professor's authenticated email. Students can only create log entries. | Paste `firestore.rules` into Firebase Console and replace `YOUR_EMAIL@example.com` with your real email. |
| Admin page | Client-side email check is UX only. The real guard is Firestore rules. | Keep Firestore rules published and up to date. |

> **If you previously committed `firebase-config.js` with real values:**
> 1. Revoke the old Firebase API key in Google Cloud Console and generate a new one.
> 2. Run `git rm --cached attend/firebase-config.js` to stop tracking the file.
> 3. Optionally purge history with [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

---

## Step 1 — Set up Firebase (one time only)

1. Go to https://console.firebase.google.com → **Add project**
2. Name: `attendance-system` → disable Analytics → **Create**
3. **Firestore Database → Create database → Production mode**
   - Region: `asia-northeast3` (Seoul)
4. **Authentication → Get started → Google provider → Enable**
5. **Project Settings (gear) → Your apps → `</>` (Web)**
   - Register nickname: `attendance-web`
   - Copy the `firebaseConfig` values
6. Copy the `firebaseConfig` values — you'll add them as GitHub Secrets in Step 4
7. Note your Google account email — you'll add it as `PROFESSOR_EMAIL` in Step 4

---

## Step 2 — Set Firestore security rules

1. Firebase Console → **Firestore Database → Rules**
2. Delete existing rules, paste the contents of `firestore.rules`
3. Replace `YOUR_EMAIL@jbnu.ac.kr` with your real email (2 places)
4. Click **Publish**

---

## Step 3 — Add your domains to Firebase Auth

1. Firebase Console → **Authentication → Settings → Authorized domains**
2. Add both of these:
   - `courses.aaron.kr`
   - `aaronkr-courses.github.io` (fallback)
3. Save

---

## Step 4 — Add GitHub Secrets for Firebase config

The deploy workflow reads your real credentials from GitHub Secrets — they are never stored in the repo.

1. Go to: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**
2. Add these secrets exactly (names must match):

| Secret name | Where to find the value |
|---|---|
| `FIREBASE_API_KEY` | Firebase Console → Project Settings → Your apps → Web app config |
| `FIREBASE_PROJECT_ID` | Same (e.g. `aaronkr-courses`) |
| `FIREBASE_SENDER_ID` | Same (`messagingSenderId`) |
| `FIREBASE_APP_ID` | Same (`appId`) |
| `FIREBASE_MEASUREMENT_ID` | Same (`measurementId`) |
| `PROFESSOR_EMAIL` | Your Google account email (must match Firestore rules) |

---

## Step 5 — Switch GitHub Pages to deploy via GitHub Actions

1. GitHub repo → **Settings → Pages**
2. Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
3. Save

> Why: "Deploy from a branch" only uploads files from git. Since `firebase-config.js` is gitignored, it would be missing and the app would fail. GitHub Actions lets the workflow generate the file from Secrets before building.

---

## Step 6 — Push to main and verify

```bash
# firebase-config.js is gitignored — git will skip it automatically
git add .github/ attend/
git commit -m "Add attendance system with GitHub Actions deploy"
git push
```

After pushing, the workflow runs automatically. Watch progress at:  
**GitHub repo → Actions tab**

When it finishes (~2–3 minutes), visit:
- `https://courses.aaron.kr/attend/admin.html`

---

## Step 6 — Set up your Google Forms (optional)

For each class, create a Google Form with at least:
- Short answer: Full name (이름)
- Short answer: Student ID (학번)

Then get the pre-fill entry IDs:
1. Open the form → click **⋮ menu → Get pre-filled link**
2. Fill in sample values → **Get link**
3. The URL looks like:
   `...?entry.123456789=홍길동&entry.987654321=20231234`
4. Copy those `entry.XXXXXXXXX` numbers
5. Open `classes.js` and update `FORM_ENTRY_NAME` and `FORM_ENTRY_ID`

> If all your forms use the same question order, one set of entry IDs works for all.
> If a class has different entry IDs, add `entryName` and `entryId` to that class object.

---

## Local development

To run the full Jekyll site locally (so you can test `attend/` at `localhost:4000/attend/`):

```bash
# 1. Create your local config (gitignored — never committed)
cp attend/firebase-config.example.js attend/firebase-config.js
# Edit attend/firebase-config.js with your real Firebase values

# 2. Run Jekyll
bundle exec jekyll serve --livereload
# → http://localhost:4000/attend/admin.html
```

---

## Each semester — what to update

**ONLY edit `classes.js`:**

1. Update the `CLASSES` array — add new classes, update student counts
2. Old classes from previous semesters: either remove them or archive them (their Firestore history stays)
3. Push to GitHub — the Actions workflow re-deploys automatically

**You never need to touch** `admin.html`, `index.html`, or `firebase-config.example.js` again unless you want to change behavior.

---

## Each class session — how to use

1. Open `https://aaronkr-courses.github.io/courses/attend/admin.html` on your device
2. Sign in with Google
3. Click the class button (color-coded by university)
4. Click **▶ Start session**
5. Project/display the QR code
6. Click **■ Stop** when done

---

## Managing multiple classes per day

You can run sessions back-to-back:
- Stop one session → select the next class → Start
- Each session is logged separately with its class name + semester
- History tab lets you filter by class or semester

---

## Optionally: add a link from your courses site

To add an "Attendance" link in your site's nav, edit `_config.yml` or the relevant navbar include.
Or just bookmark the admin URL on your devices — since it requires Google login, there's no risk in it being publicly accessible.

---

## Anti-cheat summary

| Layer | What it stops |
|-------|--------------|
| Rotating QR token (2 min) | Screenshot sharing — old codes die automatically |
| Token in URL validated against Firestore | Manually typed URLs don't work |
| IP address logged + flagged | Off-campus access is highlighted in dashboard |
| Form is embedded, URL hidden | Students can't access the form without the QR page |
| Session on/off by professor | Form only accessible during your window |
| Timestamp + cross-reference with Google Form | Late submissions visible in data |
