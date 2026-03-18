// ============================================================
//  FIREBASE CONFIG — fill this in once, never touch again
//  console.firebase.google.com → Project Settings → Your apps
// ============================================================

// Obfuscated config — restricts key via Google Cloud Console instead of hiding
const _a = atob;
const FIREBASE_CONFIG = {
  // apiKey: _a("AIzaSyBHD8v13DovLbpH1NUPUIvzvKP8VY8CkAs"),
  apiKey: "AIzaSyBHD8v13DovLbpH1NUPUIvzvKP8VY8CkAs",
  authDomain: "aaronkr-courses.firebaseapp.com",
  projectId: "aaronkr-courses",
  storageBucket: "aaronkr-courses.firebasestorage.app",
  messagingSenderId: "130275017151",
  appId: "1:130275017151:web:6fc9f3895fdf1cfbd0210a",
  measurementId: "G-1JJW461PEK"
};

// Your university Google account — only this email can sign in to admin
const PROFESSOR_EMAIL = "aaronkr.trainer@gmail.com";

// Campus IP prefixes — students on university WiFi will match these.
// Off-campus IPs get flagged in the dashboard.
const CAMPUS_IP_PREFIXES = ["192.168.", "10.0.", "172.16.", "165.229.", "203.254."];

// Token rotation in seconds (120 = 2 minutes)
const TOKEN_INTERVAL_SECONDS = 120;
