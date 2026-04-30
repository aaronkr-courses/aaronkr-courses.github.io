// ============================================================
//  FIREBASE CONFIG TEMPLATE
//  ─────────────────────────────────────────────────────────
//  1. Copy this file:  cp firebase-config.example.js firebase-config.js
//  2. Fill in YOUR values from:
//       console.firebase.google.com → Project Settings → Your apps
//  3. firebase-config.js is gitignored — your credentials stay local.
// ============================================================

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"   // remove if not using Firebase Analytics
};

// Your Google account email — only this account can sign in to admin.
// Must exactly match the email in your Firestore security rules (firestore.rules).
const PROFESSOR_EMAIL = "your-email@gmail.com";

// Campus IP prefixes — students on university WiFi will match these.
// Off-campus IPs get flagged in the dashboard.
// Adjust to match your university's IP ranges.
const CAMPUS_IP_PREFIXES = ["192.168.", "10.0.", "172.16.", "165.229.", "203.254."];

// Token rotation in seconds (120 = 2 minutes).
// Lower = harder to share screenshots; higher = more forgiving if QR loads slowly.
const TOKEN_INTERVAL_SECONDS = 120;
