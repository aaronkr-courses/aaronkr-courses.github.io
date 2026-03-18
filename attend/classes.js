// ============================================================
//  CLASSES CONFIG — edit this file each semester
//
//  Add, remove, or update classes freely.
//  Each class needs:
//    id        — unique slug (used in Firestore, never changes for history)
//    name      — display name shown on admin + student pages
//    nameKo    — Korean name (shown on student page)
//    school    — university abbreviation
//    semester  — e.g. "2026-1"
//    students  — total enrolled students (for progress bar)
//    schedule  — optional array of { day:0-6, start:"HH:MM", end:"HH:MM" } for session scheduling (see JNUE example)
//       Days: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat.
//
//  TIP: Keep old semesters in the ARCHIVED section below so
//       session history stays readable. Just don't put them
//       in the ACTIVE array.
// ============================================================

// ── ACTIVE CLASSES (shown in dropdown) ───────────────────────
const CLASSES = [
  {
    id:       "2026-jbnu-dc",
    name:     "DC Circuits",
    nameKo:   "프로그램 기반 회로 이론 I (DC)",
    school:   "JBNU",
    semester: "2026-1",
    students: 45,
    schedule: [
      { day: 4, start: "09:00", end: "12:00" },  // Thur 9–12pm
    ]
  },
  {
    id:       "2026-jbnu-devs",
    name:     "Device Analysis",
    nameKo:   "기기분석의 이해",
    school:   "JBNU",
    semester: "2026-1",
    students: 38,
    schedule: [
      { day: 4, start: "13:00", end: "16:00" },  // Thur 1–4pm
    ]
  },
  {
    id:       "2026-jbnu-pe",
    name:     "Convergence Power Electronics",
    nameKo:   "융합전자전력공학",
    school:   "JBNU",
    semester: "2026-1",
    students: 52,
    schedule: [
      { day: 3, start: "10:00", end: "13:00" }   // Wednesday 10–1pm
    ]
  },
  {
    id:       "2026-ut-iot",
    name:     "IoT",
    nameKo:   "IoT",
    school:   "UT",
    semester: "2026-1",
    students: 30,
    schedule: [
      { day: 1, start: "09:00", end: "12:00" },  // Monday 9–12
    ]
  },
  {
    id:       "2026-ut-db",
    name:     "Database Design",
    nameKo:   "데이터베이스 설계",
    school:   "UT",
    semester: "2026-1",
    students: 35,
    schedule: [
      { day: 1, start: "13:00", end: "17:00" },  // Monday 1–5pm
    ]
  },
  {
    id:       "2026-wku-php",
    name:     "Internet Content Management (PHP)",
    nameKo:   "인터넷콘텐츠관리",
    school:   "WKU",
    semester: "2026-1",
    students: 40,
    schedule: [
      { day: 2, start: "14:00", end: "17:00" },  // Tues 2-5pm
    ]
  },
  {
    id:       "2026-hb-cpp",
    name:     "C++ Programming",
    nameKo:   "C++ 프로그래밍",
    school:   "HB",
    semester: "2026-1",
    students: 28,
    schedule: [
      { day: 3, start: "14:00", end: "18:00" }   // Wednesday 2–6pm
    ]
  },
  {
    id:       "2026-jnue-iss",
    name:     "Information Society and Software",
    nameKo:   "정보사회와 소프트웨어",
    school:   "JNUE",
    semester: "2026-1",
    students: 25,
    schedule: [
      { day: 5, start: "09:00", end: "11:00" },  // Friday 9–11am
      { day: 5, start: "11:00", end: "13:00" },  // Friday 11-1pm
      { day: 5, start: "14:00", end: "16:00" },  // Friday 2-4pm

    ]
  }
];

// ── SCHOOL COLORS (shown as badges in the dropdown) ──────────
const SCHOOLS = {
  JBNU: { label: "전북대", color: "#185FA5" },
  UT:   { label: "교통대", color: "#0F6E56" },
  WKU:  { label: "원광대", color: "#854F0B" },
  HB:   { label: "한밭대", color: "#993C1D" },
  JNUE: { label: "전주교육대", color: "#5F5E5A" }
};
