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
//    formUrl   — your Google Form /viewform URL for THIS class
//               (update each semester — old sessions keep their old URL in history)
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
  },
  {
    id:       "2026-jbnu-devs",
    name:     "Device Analysis",
    nameKo:   "기기분석의 이해",
    school:   "JBNU",
    semester: "2026-1",
    students: 38,
  },
  {
    id:       "2026-jbnu-pe",
    name:     "Convergence Power Electronics",
    nameKo:   "융합전자전력공학",
    school:   "JBNU",
    semester: "2026-1",
    students: 52,
  },
  {
    id:       "2026-ut-iot",
    name:     "IoT",
    nameKo:   "IoT",
    school:   "UT",
    semester: "2026-1",
    students: 30,
  },
  {
    id:       "2026-ut-db",
    name:     "Database Design",
    nameKo:   "데이터베이스 설계",
    school:   "UT",
    semester: "2026-1",
    students: 35,
  },
  {
    id:       "2026-wku-php",
    name:     "Internet Content Management (PHP)",
    nameKo:   "인터넷콘텐츠관리",
    school:   "WKU",
    semester: "2026-1",
    students: 40,
  },
  {
    id:       "2026-hb-cpp",
    name:     "C++ Programming",
    nameKo:   "C++ 프로그래밍",
    school:   "HB",
    semester: "2026-1",
    students: 28,
  },
  {
    id:       "2026-jnue-iss",
    name:     "Information Society and Software",
    nameKo:   "정보사회와 소프트웨어",
    school:   "JNUE",
    semester: "2026-1",
    students: 25,
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
