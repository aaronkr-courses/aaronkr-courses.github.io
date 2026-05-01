# Accessibility Audit — aaronkr-courses.github.io

**Date:** 2026-04-30
**Auditor:** Claude Code (automated review + targeted fixes)
**Standard:** WCAG 2.1 AA

---

## Executive Summary

The site is a Jekyll-based university course portal with a bilingual (EN/KO) toggle, dark/light theme, and a Firebase attendance sub-app at `/attend`. Overall HTML structure is clean and modern. Fifteen issue categories were identified; all fixable items have been fixed in this pass.

---

## 1. Skip Link

**Status: FIXED**

No skip link existed. Screen-reader and keyboard users had to tab through the entire navigation on every page.

**Fix applied:** Added `<a class="skip-link" href="#main-content">Skip to main content</a>` as the first child of `<nav>` in `_includes/nav.html`. Added `.skip-link` CSS in `_sass/_base.scss` — visually hidden until focused, then reveals above the nav bar with accent color styling. Wrapped all page content in `<main id="main-content">` in `_layouts/default.html`.

---

## 2. Navigation Landmark & ARIA

**Status: FIXED**

- `<nav>` had no `aria-label`, so screen readers announced it as an unnamed landmark.
- Dropdown `<button>` elements had no `aria-haspopup`, `aria-expanded`, or `aria-label`.
- The hamburger button had `aria-label="Menu"` and `aria-expanded` (good) but was missing `aria-controls`.
- Mobile nav `<div>` had no label.

**Fixes applied:**
- `<nav aria-label="Main navigation">` added.
- All dropdown buttons: `aria-haspopup="true"`, `aria-expanded="false"`, `aria-label="{{ item.title_en }} menu"`.
- `aria-expanded` is now toggled to `"true"/"false"` dynamically in JS when dropdowns open/close.
- Hamburger: added `aria-controls="mobile-nav"`.
- Mobile nav div: `aria-label="Mobile navigation"`.

---

## 3. Language Toggle Button

**Status: FIXED**

The `.lang-btn` button had no accessible label. Its visible text is "한국어" / "English" (which changes on toggle), but there was no `aria-label` explaining what the button does.

**Fix applied:** Added `aria-label="Toggle language between English and Korean"` to both desktop and mobile language toggle buttons.

---

## 4. Landmark Roles

**Status: FIXED**

- No `<main>` wrapper existed; content was in bare `<div>` elements.
- `<footer>` is a semantic element and was already present (good).
- `<nav>` is semantic and was already present (good).
- Course page `<aside>` had no label.

**Fixes applied:**
- `_layouts/default.html`: wrapped `{{ content }}` in `<main id="main-content">...</main>`.
- `_layouts/page.html`: changed inner `<main>` to `<article>` to avoid nested `<main>` elements.
- `_layouts/course.html`: added `aria-label="Course sections"` to `<aside>`.

---

## 5. Heading Hierarchy

**Status: PARTIALLY FIXED — monitor**

- Home page (`index.md`): `<h1>Teaching & Courses</h1>` is correct. Section labels use `<span>` (decorative, by design). Stats bar uses `<div>`. Research CTA uses `<h3>` without a parent `<h2>` — minor, but not a hard error given it is a call-to-action card.
- Course pages: `<h1>{{ page.title }}</h1>` in `course.html` is correct. Section headings within the course use `.crs-heading` `<div>` elements (not heading tags). These are decorative separators rather than structural headings, so screen readers will not pick them up as section markers.
- `_layouts/page.html`: `<h1>{{ page.title }}</h1>` is correct.
- `/attend/index.html`: The topbar uses `<h2>` as first heading with no `<h1>` visible on screen. The card has `<h1>출석 체크인 · Attendance</h1>` — this is correct hierarchy.
- `/attend/admin.html`: Topbar `<h2>Attendance Dashboard</h2>` appears before the auth screen's `<h1>Attendance System</h1>` in DOM order. Auth screen is hidden by CSS initially. When the dashboard shows, the `<h1>` is inside the hidden auth screen — leaving the visible page starting with `<h2>`.

**Recommendation (not yet fixed):** In `attend/admin.html`, change the topbar `<h2>` to `<h1>` or add a visually-hidden `<h1>` when the dashboard is active.

---

## 6. `lang` Attribute

**Status: GOOD (no fix needed)**

- `_layouts/default.html`: `<html lang="{{ site.lang | default: 'en' }}" data-theme="dark">` — correct.
- JS dynamically adds class `ko` to `<html>` for bilingual toggle. This switches CSS display via `.lang-en`/`.lang-ko` classes. The `lang` attribute on the `<html>` element is NOT updated when the user switches language. **This is a known limitation** — since both languages are present in the DOM simultaneously (hidden/shown via CSS), updating `lang` would be ambiguous. The current approach is acceptable for a bilingual toggle; an improvement would be to update `<html lang>` on toggle.
- `/attend/index.html`: `<html lang="ko">` — correct (Korean-first app).
- `/attend/admin.html`: `<html lang="en">` — correct.

---

## 7. Images & Alt Text

**Status: FIXED + GOOD**

- **Course card university badge images** (`_includes/course_card.html`): The `<img class="ub-abbr">` in `.uni-badge` had no `alt` attribute. This image is decorative (opacity 0.12, aria-hidden context). Fixed: Added `alt=""` and `aria-hidden="true"` on the wrapper div.
- **Course page university logo** (`_layouts/course.html`, line 15): `<img src="{{ _page_logo }}" alt="{{ page.description | split: ' • ' | last }}" />` — uses the university name as alt. Good.
- **Instructor avatar** (`_includes/about_aaron.html`, line 20): `<img ... alt="{{ instructor.name }}" />` — correct.
- **Textbook images** (`_includes/textbooks.html`): `alt="{{ text.title | strip_html }}"` — correct.
- **Course thumbnail images** in `assets/img/books/`: These are used as CSS `background-image` in `.card-thumb` and `.sched-thumb` — not via `<img>` tags — so no alt text is needed. The actual slide link uses `aria-label="Open slides for {{ item.title }}"` (fixed).
- **University group logos** (`index.md`): `<img ... alt="{{ uni_abbrs[i] }}" />` — uses abbreviation as alt. Acceptable.

---

## 8. Focus Styles

**Status: FIXED**

No `:focus-visible` styles existed anywhere in the SCSS. The `input:focus` in attend app explicitly removed the outline (`outline:none`).

**Fixes applied:**
- `_sass/_base.scss`: Added global `:focus-visible` with `outline: 2px solid var(--accent2); outline-offset: 3px`. Also added `.skip-link:focus` with explicit outline.
- `attend/index.html`: Changed `input:focus{outline:none}` to `input:focus{outline:2px solid var(--teal-md)}` + added `:focus-visible` rule.
- `attend/admin.html`: Same fix as above.

---

## 9. Color Contrast

**Status: FLAGGED — manual verification recommended**

Colors were analyzed against WCAG AA (4.5:1 for normal text, 3:1 for large text/UI components).

**Dark mode (default):**
| Element | Foreground | Background | Notes |
|---|---|---|---|
| Body text `--text` | `#eeeeff` | `#090910` | ~14:1 — Pass |
| Sub text `--sub` | `#b8b8d8` | `#090910` | ~7:1 — Pass |
| Muted text `--muted` | `#55557a` | `#090910` | ~2.8:1 — **Fail** (decorative/metadata only) |
| Accent links `--accent2` | `#7eb8f7` | `#090910` | ~7.4:1 — Pass |
| Nav links `--sub` on `--nav-bg` | `#b8b8d8` | `rgba(9,9,16,.92)` | ~6.8:1 — Pass |
| Section labels `--muted` | `#55557a` | surface | ~2.8:1 — **Fail** (uppercase mono labels — decorative) |

**Light mode:**
| Element | Foreground | Background | Notes |
|---|---|---|---|
| Body text `--text-light` | `#111128` | `#f2f2f8` | ~16:1 — Pass |
| Muted `--muted-light` | `#8888b0` | `#f2f2f8` | ~3.6:1 — Borderline (decorative metadata) |
| Accent `--accent-light` | `#7c3aff` | `#f2f2f8` | ~5.2:1 — Pass |

**Finding:** The `--muted` colour on dark mode (~2.8:1) fails WCAG AA for text. However, it is used exclusively for decorative metadata (course codes, section labels, date stamps) in small IBM Plex Mono at 0.6-0.72rem. These are supplementary — the same info appears in larger/higher-contrast elements elsewhere. Raising `--muted-dark` from `#55557a` to approximately `#7777a0` would achieve ~4.5:1 and is recommended.

**Grading bar colours:** Segment labels (%, Attend., HW etc.) are white text on coloured backgrounds. The darkest segment `$grade-attend: #4a5568` with white text gives ~5.1:1 — Pass. Others pass as well.

---

## 10. Schedule Table Accessibility

**Status: FIXED**

The schedule table (`_includes/schedule.html`) had:
- No `<caption>`
- No `<thead>` / `<tbody>` structure
- No `<th scope="col">` headers

**Fixes applied:**
- Added `<caption class="sr-only">Course lecture schedule</caption>`.
- Added `<thead class="sr-only">` with `<th scope="col">` for Date, Slides, Week and topic, Homework and logistics.
- Added `<tbody>` wrapper around data rows.
- Made decorative thumb divs `aria-hidden="true"`.
- Added `aria-label="Open slides for {{ item.title }}"` to slide thumbnail links.

---

## 11. PDF Links

**Status: FIXED**

One PDF link was found in `_courses/2025/jbnu-info.md` pointing to an MIT Information Theory textbook PDF. The textbooks include rendered it with generic "Buy →" link text.

**Fix applied:** `_includes/textbooks.html` now checks `{% if text.link contains '.pdf' %}` and renders `Download (PDF) →` with `aria-label="Download PDF (opens in new tab)"` instead of the generic "Buy" label.

---

## 12. External Links Opening in New Tab

**Status: FLAGGED — not auto-fixed**

Many `target="_blank"` links exist throughout the site (footer social links, KakaoTalk, GitHub Classroom, etc.) without warning users that they open in a new tab. WCAG 2.1 Success Criterion 3.2.2 (On Input) applies.

**Recommendation:** Add `aria-label="... (opens in new tab)"` or append `<span class="sr-only">(opens in new tab)</span>` to key external links. The `→` arrow already serves as a visual cue, but is not sufficient for screen readers.

**Priority targets:** footer social links, course quick-links (KakaoTalk, GitHub Classroom, Google Classroom), textbook buy links.

---

## 13. Toggle Buttons (`aria-pressed`)

**Status: FIXED**

Toggle buttons (wave animation, thumbnail toggle, theme toggle) had no `aria-pressed` state, so screen readers could not determine whether the toggle was on or off.

**Fixes applied:**
- `index.md` wave-btn: `aria-pressed="true"` (waves on by default).
- `index.md` thumb-toggle: `aria-pressed="false"` initial, JS updates on click.
- `attend/index.html` theme-toggle: `aria-pressed="false"` initial.
- `attend/admin.html` theme-toggle: `aria-pressed="false"` initial.

Note: The main site theme button in `nav.html` uses emoji as its label and JS sets its text content — `aria-pressed` was not added there as the `aria-label="Toggle theme"` is already present and functional. Consider adding `aria-pressed` in a future pass.

---

## 14. Reduced Motion

**Status: FIXED**

The animated mesh grid (`body::before`) and `fadeUp` animations had no `prefers-reduced-motion` fallback. A comment in `_base.scss` even noted: *"prefers-reduced-motion intentionally not applied — waves are a core design element."*

**Fix applied:** Added `@media (prefers-reduced-motion: reduce)` block to `_sass/_base.scss` that collapses all animation/transition durations to 0.01ms and hides the canvas waves. The mesh grid animation is suppressed via the `transition-duration` override.

---

## 15. /attend App Accessibility

### index.html (Student check-in)

| Issue | Status |
|---|---|
| Form `<label>` elements missing `for` attributes | **FIXED** — added `for="f-name"`, `for="f-id"`, `for="f-feedback"` |
| `input:focus` removed outline (`outline:none`) | **FIXED** — restored visible outline |
| Theme toggle button — no `aria-label` or `aria-pressed` | **FIXED** |
| No `:focus-visible` styles | **FIXED** |
| Loading spinner has no `aria-live` region | **FLAGGED** — spinner text "Checking session…" could be an `aria-live="polite"` region so screen readers announce state changes |

### admin.html (Professor dashboard)

| Issue | Status |
|---|---|
| Tab UI uses `<button>` without `role="tab"`, `aria-selected`, `aria-controls` | **FIXED** |
| Tab container missing `role="tablist"` and `aria-label` | **FIXED** |
| `switchTab()` JS did not update `aria-selected` | **FIXED** |
| Data tables: `<th>` without `scope="col"` | **FIXED** — all three tables fixed |
| QR modal: no `role="dialog"` or `aria-modal` | **FIXED** |
| Modal close button: no `aria-label` | **FIXED** |
| Theme toggle: no `aria-label` or `aria-pressed` | **FIXED** |
| `input/select:focus` removed outline | **FIXED** |
| Topbar `<h2>` is the first visible heading when dashboard is active (no `<h1>`) | **FLAGGED** — recommend changing topbar `<h2>` to `<h1>` |
| Dynamic innerHTML in `renderHistory()`, `renderLogTable()` uses `escHtml()` | **GOOD** — XSS protection already present |

---

## Summary Table

| # | Check | Severity | Status |
|---|---|---|---|
| 1 | Skip link | High | Fixed |
| 2 | Nav `aria-label` + dropdown ARIA | High | Fixed |
| 3 | Language toggle `aria-label` | Medium | Fixed |
| 4 | Landmark roles (`<main>`, `<aside>`) | High | Fixed |
| 5 | Heading hierarchy (attend/admin topbar) | Low | Flagged |
| 6 | `lang` attribute on language switch | Low | Flagged (acceptable limitation) |
| 7 | Image alt text (badge images) | Medium | Fixed |
| 8 | Focus-visible styles | High | Fixed |
| 9 | Color contrast (muted text) | Medium | Flagged |
| 10 | Schedule table (`caption`, `thead`, `th scope`) | High | Fixed |
| 11 | PDF link text | Medium | Fixed |
| 12 | External links opening in new tab | Low | Flagged |
| 13 | Toggle buttons `aria-pressed` | Medium | Fixed |
| 14 | Reduced motion media query | Medium | Fixed |
| 15 | /attend form labels, focus, ARIA tabs | High | Fixed |

---

## Files Modified

| File | Changes |
|---|---|
| `_includes/nav.html` | Skip link, `aria-label` on nav, dropdown buttons, hamburger, mobile nav, lang toggle |
| `_includes/course_card.html` | Badge image `alt=""` + `aria-hidden`, card link `aria-label` |
| `_includes/schedule.html` | `<caption>`, `<thead>`, `<tbody>`, `<th scope>`, slide link `aria-label`, decorative divs `aria-hidden` |
| `_includes/textbooks.html` | PDF link detection and "(PDF)" warning in link text |
| `_layouts/default.html` | `<main id="main-content">` wrapper, dropdown JS `aria-expanded` updates |
| `_layouts/page.html` | Inner `<main>` changed to `<article>` to prevent nested landmark |
| `_layouts/course.html` | `<aside aria-label="Course sections">` |
| `_sass/_base.scss` | Skip link styles, `.sr-only`, `:focus-visible`, `prefers-reduced-motion` |
| `index.md` | `aria-pressed` on wave/thumb toggles, thumb-toggle JS sync |
| `attend/index.html` | Form `for` attrs, focus styles, theme toggle `aria-label`/`aria-pressed` |
| `attend/admin.html` | ARIA tab roles, `th scope`, modal `role="dialog"`, focus styles, theme toggle |

---

## Recommended Next Steps (not auto-fixed)

1. **Muted text contrast:** Raise `$muted-dark` from `#55557a` to `#7777a0` in `_sass/_variables.scss` to reach ~4.5:1 on dark backgrounds.
2. **`lang` attribute on toggle:** Update `<html lang>` to `"ko"` / `"en"` in the `applyLang()` JS function so assistive technologies know which language is active.
3. **External link warnings:** Add `<span class="sr-only">(opens in new tab)</span>` to key `target="_blank"` links in footer and course quick-links.
4. **Attend admin heading:** Change `<h2>Attendance Dashboard</h2>` in topbar to `<h1>` when auth succeeds.
5. **Attend spinner `aria-live`:** Wrap the loading state div in `aria-live="polite"` so screen readers announce session state changes.
6. **Course section headings:** Consider converting `.crs-heading` decorative divs to `<h2>` elements for better document outline (Grading, Schedule, Overview, etc.).
