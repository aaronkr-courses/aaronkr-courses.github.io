# Attendance System — Deployment Guide
## For: aaronkr-courses.github.io/courses

---

## File structure (what goes where in your repo)

```
courses/                          ← your existing repo root
├── attend/                       ← NEW folder — drop it here
│   ├── firebase-config.js        ← your Firebase credentials (fill in once)
│   ├── classes.js                ← class list (edit each semester)
│   ├── admin.html                ← your professor dashboard
│   ├── index.html                ← student landing page (QR target)
│   └── firestore.rules           ← paste into Firebase console (not uploaded)
├── _config.yml                   ← existing Jekyll config — no changes needed
└── ...                           ← rest of your existing site
```

Live URLs after pushing:
- **Student page (QR target):** `https://aaronkr-courses.github.io/courses/attend/`
- **Your dashboard:**           `https://aaronkr-courses.github.io/courses/attend/admin.html`

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
6. Open `firebase-config.js` and paste them in
7. Set `PROFESSOR_EMAIL` to your Google account email exactly

---

## Step 2 — Set Firestore security rules

1. Firebase Console → **Firestore Database → Rules**
2. Delete existing rules, paste the contents of `firestore.rules`
3. Replace `YOUR_EMAIL@jbnu.ac.kr` with your real email (2 places)
4. Click **Publish**

---

## Step 3 — Add your domain to Firebase Auth

1. Firebase Console → **Authentication → Settings → Authorized domains**
2. Click **Add domain** → enter: `aaronkr-courses.github.io`
3. Save

---

## Step 4 — Upload the `attend/` folder to GitHub

Option A — GitHub web UI (simplest):
1. Go to your repo: https://github.com/aaronkr-courses/courses
2. Click **Add file → Upload files**
3. Drag all 4 files (firebase-config.js, classes.js, admin.html, index.html) into the `attend/` path
4. Commit to `main`

Option B — Git command line:
```bash
cd /path/to/your/courses-repo
mkdir -p attend
cp /path/to/downloaded/files/* attend/
git add attend/
git commit -m "Add attendance system"
git push
```

GitHub Pages builds in ~30–60 seconds. Then visit:
`https://aaronkr-courses.github.io/courses/attend/admin.html`

---

## Step 5 — Set up your Google Forms

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

## Each semester — what to update

**ONLY edit `classes.js`:**

1. Update the `CLASSES` array — add new classes, update form URLs, change student counts
2. Old classes from previous semesters: either remove them or leave them (they'll just not appear if deleted from CLASSES, but their Firestore history stays forever)
3. Push to GitHub — done

**You never need to touch** `admin.html`, `index.html`, or `firebase-config.js` again unless you want to change behavior.

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
