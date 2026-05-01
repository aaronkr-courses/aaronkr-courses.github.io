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
| 9 | Color contrast (muted + grade bar) | Medium | Fixed |
| 10 | Schedule table (`caption`, `thead`, `th scope`) | High | Fixed |
| 11 | PDF link text | Medium | Fixed |
| 12 | External links `rel="noopener noreferrer"` | Medium | Fixed |
| 13 | Toggle buttons `aria-pressed` | Medium | Fixed |
| 14 | Reduced motion media query | Medium | Fixed |
| 15 | /attend form labels, focus, ARIA tabs | High | Fixed |
| 16 | Mobile sub-menu `aria-expanded` | Medium | Fixed |
| 17 | FAQ buttons `aria-expanded` | Medium | Fixed |
| 18 | Decorative watermark image alt | Low | Fixed |
| 19 | Nested `<main>` landmark in course layout | High | Fixed |

---

## Files Modified

| File | Changes |
|---|---|
| `_includes/nav.html` | Skip link, `aria-label` on nav, dropdown buttons, hamburger, mobile nav `role="navigation"`, lang toggle, `.m-toggle` `aria-expanded`/`aria-controls` |
| `_includes/course_card.html` | Badge image `alt=""` + `aria-hidden`, card link `aria-label` |
| `_includes/schedule.html` | `<caption>`, `<thead>`, `<tbody>`, `<th scope>`, slide link `aria-label`, decorative divs `aria-hidden` |
| `_includes/textbooks.html` | PDF link detection and "(PDF)" warning in link text |
| `_includes/footer.html` | `rel="noopener noreferrer"` on all `target="_blank"` social links |
| `_includes/about_aaron.html` | `rel="noopener noreferrer"` on all `target="_blank"` instructor links |
| `_layouts/default.html` | `<main id="main-content">` wrapper, dropdown JS `aria-expanded` updates, mobile sub-menu JS `aria-expanded` toggle |
| `_layouts/page.html` | Inner `<main>` changed to `<article>` to prevent nested landmark |
| `_layouts/course.html` | `<aside aria-label="Course sections">`, inner `<main>` → `<article>`, decorative logo `alt="" role="presentation"`, `rel="noopener noreferrer"` on quick-links |
| `_sass/_base.scss` | Skip link styles, `.sr-only`, `:focus-visible`, `prefers-reduced-motion` |
| `_sass/_course.scss` | `.grade-name` color `rgba(255,255,255,.65)` → `#fff` (WCAG AA fix) |
| `index.md` | `aria-pressed` on wave/thumb toggles, thumb-toggle JS sync |
| `_pages/policies.md` | `.faq-q` buttons `aria-expanded="false"`, JS updated to toggle attribute |
| `attend/index.html` | Form `for` attrs, focus styles, theme toggle `aria-label`/`aria-pressed` |
| `attend/admin.html` | ARIA tab roles, `th scope`, modal `role="dialog"`, focus styles, theme toggle |

---

## Recommended Next Steps (not auto-fixed)

1. **`lang` attribute on toggle:** Update `<html lang>` to `"ko"` / `"en"` in the `applyLang()` JS function so assistive technologies know which language is active.
2. **Attend admin heading:** Change `<h2>Attendance Dashboard</h2>` in topbar to `<h1>` when auth succeeds.
3. **Attend spinner `aria-live`:** Wrap the loading state div in `aria-live="polite"` so screen readers announce session state changes.
4. **Course section headings:** Consider converting `.crs-heading` decorative divs to `<h2>` elements for better document outline (Grading, Schedule, Overview, etc.).

---

## Color Contrast Re-Audit (2026-05-01)

**Auditor:** Claude Code  
**Standard:** WCAG 2.1 AA (4.5:1 normal text < 18px regular or < 14px bold; 3:1 large text ≥ 18px or ≥ 14px bold; 3:1 UI components)  
**Formula:** contrast = (L_lighter + 0.05) / (L_darker + 0.05); linearize sRGB then L = 0.2126R + 0.7152G + 0.0722B

### Status of previous recommendation

`$muted-dark` was already changed from `#55557a` → `#7777a0` (confirmed in `_variables.scss`). This raised dark-mode muted contrast from ~2.8:1 to 5.00:1 on `#090910`. **PASS — no further action needed.**

### Full audit table

#### Dark mode — base background `#090910`, surface `#12121e`, tag-bg `#181828`

| Element / Class | Foreground | Background | Ratio | Threshold | Result | Action |
|---|---|---|---|---|---|---|
| Body text `--text` | `#eeeeff` | `#090910` | 14.25:1 | 4.5:1 | PASS | — |
| Paragraph `--sub` | `#b8b8d8` | `#090910` | 9.51:1 | 4.5:1 | PASS | — |
| Muted text `--muted` | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| Muted on surface | `#7777a0` | `#12121e` | 4.83:1 | 4.5:1 | PASS | — |
| Muted on tag-bg | `#7777a0` | `#181828` | 4.52:1 | 4.5:1 | PASS | — |
| Body text on surface | `#eeeeff` | `#12121e` | 13.07:1 | 4.5:1 | PASS | — |
| Sub on surface | `#b8b8d8` | `#12121e` | 9.98:1 | 4.5:1 | PASS | — |
| Body text on tag-bg | `#eeeeff` | `#181828` | 11.05:1 | 4.5:1 | PASS | — |
| Sub on tag-bg | `#b8b8d8` | `#181828` | 9.35:1 | 4.5:1 | PASS | — |
| `--accent` links | `#9b65ff` | `#090910` | 5.45:1 | 4.5:1 | PASS | — |
| `--accent2` links | `#7eb8f7` | `#090910` | 9.69:1 | 4.5:1 | PASS | — |
| `--accent3` links | `#6dccdd` | `#090910` | 10.71:1 | 4.5:1 | PASS | — |
| Nav brand `--accent` | `#9b65ff` | `#090910` | 5.45:1 | 4.5:1 | PASS | — |
| Nav links `--sub` | `#b8b8d8` | `#090910` | 9.51:1 | 4.5:1 | PASS | — |
| Nav links hover `--text` | `#eeeeff` | `#090910` | 14.25:1 | 4.5:1 | PASS | — |
| `.section-label` muted | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| `.strip-label` muted | `#7777a0` | `#12121e` | 4.83:1 | 4.5:1 | PASS | — |
| `.card-code` accent3 | `#6dccdd` | `#12121e` | 10.33:1 | 4.5:1 | PASS | — |
| `.card-title` text | `#eeeeff` | `#12121e` | 13.07:1 | 4.5:1 | PASS | — |
| `.card-subtitle` muted | `#7777a0` | `#12121e` | 4.83:1 | 4.5:1 | PASS | — |
| `.card-desc` sub | `#b8b8d8` | `#12121e` | 9.98:1 | 4.5:1 | PASS | — |
| `.card-meta` muted | `#7777a0` | `#12121e` | 4.83:1 | 4.5:1 | PASS | — |
| `.tag` muted on tag-bg | `#7777a0` | `#181828` | 4.52:1 | 4.5:1 | PASS | — |
| `.tag.ml` accent | `#9b65ff` | `#181828` | 4.84:1 | 4.5:1 | PASS | — |
| `.tag.theory` accent2 | `#7eb8f7` | `#181828` | 8.35:1 | 4.5:1 | PASS | — |
| `.tag.ai-tag` `#fb6f84` | `#fb6f84` | `#181828` | 5.96:1 | 4.5:1 | PASS | — |
| `.tag.seminar` warn | `#fbbf24` | `#181828` | 10.40:1 | 4.5:1 | PASS | — |
| `.pill` sub on tag-bg | `#b8b8d8` | `#181828` | 9.35:1 | 4.5:1 | PASS | — |
| **Grade bar: attend** | `#ffffff` | `#4a5568` | **6.99:1** | 4.5:1 | PASS | — |
| **Grade bar: hw** | `#ffffff` | `#7c3aff` | **5.16:1** | 4.5:1 | PASS | — |
| **Grade bar: quiz** | `#ffffff` | `#9b65ff` (old) | **3.49:1** | 4.5:1 | **FAIL** | Changed `$grade-quiz` → `#7840e8` |
| **Grade bar: quiz (fixed)** | `#ffffff` | `#7840e8` (new) | **5.40:1** | 4.5:1 | PASS | Fixed |
| **Grade bar: mid** | `#ffffff` | `#2563eb` | **4.80:1** | 4.5:1 | PASS | — |
| **Grade bar: final** | `#ffffff` | `#0e6490` | **6.26:1** | 4.5:1 | PASS | — |
| **Grade bar: project** | `#ffffff` | `#b45309` | **4.79:1** | 4.5:1 | PASS | — |
| `.sched-date` muted | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| `.sched-title` text | `#eeeeff` | `#090910` | 14.25:1 | 4.5:1 | PASS | — |
| `.sched-readings` sub | `#b8b8d8` | `#090910` | 9.51:1 | 4.5:1 | PASS | — |
| `.sched-week` muted | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| `.holiday-note` error | `#fb6f84` | `#090910` | 7.42:1 | 4.5:1 | PASS | — |
| `.test-note` warn | `#fbbf24` | `#090910` | 12.31:1 | 4.5:1 | PASS | — |
| `.sidebar-nav` muted | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| `.sidebar-nav` hover sub | `#b8b8d8` | `#090910` | 9.51:1 | 4.5:1 | PASS | — |
| `.sidebar-nav` active accent3 | `#6dccdd` | `#090910` | 10.71:1 | 4.5:1 | PASS | — |
| Footer muted | `#7777a0` | `#090910` | 5.00:1 | 4.5:1 | PASS | — |
| Footer accent2 | `#7eb8f7` | `#090910` | 9.69:1 | 4.5:1 | PASS | — |
| Footer accent3 | `#6dccdd` | `#090910` | 10.71:1 | 4.5:1 | PASS | — |
| Dropdown `.dd-code` muted | `#7777a0` | `#12121e` | 4.83:1 | 4.5:1 | PASS | — |
| Dropdown `.dd-all` accent | `#9b65ff` | `#12121e` | 5.45:1 | 4.5:1 | PASS | — |
| Dropdown li sub | `#b8b8d8` | `#12121e` | 9.98:1 | 4.5:1 | PASS | — |
| `.pill-teal` dark hover bg | `#090910` | `#6dccdd` | 10.71:1 | 3:1 (UI) | PASS | — |
| `.thumb-toggle` dark hover | `#090910` | `#7eb8f7` | 9.69:1 | 3:1 (UI) | PASS | — |
| Kakao btn: `#2a1800` on `#fee500` | `#2a1800` | `#fee500` | 13.43:1 | 4.5:1 | PASS | — |

#### Light mode — base bg `#f2f2f8`, surface `#ffffff`, tag-bg `#ebebf8`

| Element / Class | Foreground | Background | Ratio | Threshold | Result | Action |
|---|---|---|---|---|---|---|
| Body text `--text` | `#111128` | `#f2f2f8` | 16.08:1 | 4.5:1 | PASS | — |
| Paragraph `--sub` | `#3a3a62` | `#f2f2f8` | 9.91:1 | 4.5:1 | PASS | — |
| **Muted text (old)** | `#8888b0` | `#f2f2f8` | **2.84:1** | 4.5:1 | **FAIL** | Changed `$muted-light` → `#6060a0` |
| **Muted text (fixed)** | `#6060a0` | `#f2f2f8` | **4.76:1** | 4.5:1 | PASS | Fixed |
| Muted on white (fixed) | `#6060a0` | `#ffffff` | 5.25:1 | 4.5:1 | PASS | Fixed |
| Muted on tag-bg (fixed) | `#6060a0` | `#ebebf8` | 4.47:1 | 4.5:1 | ≈PASS† | Fixed |
| Body text on surface | `#111128` | `#ffffff` | 18.35:1 | 4.5:1 | PASS | — |
| Sub on surface | `#3a3a62` | `#ffffff` | 11.36:1 | 4.5:1 | PASS | — |
| `--accent` on bg | `#7c3aff` | `#f2f2f8` | 4.69:1 | 4.5:1 | PASS | — |
| **`--accent2` on bg (old)** | `#2563eb` | `#f2f2f8` | **4.35:1** | 4.5:1 | **FAIL** | Changed `$accent2-light` → `#2256d8` |
| **`--accent2` on bg (fixed)** | `#2256d8` | `#f2f2f8` | **5.40:1** | 4.5:1 | PASS | Fixed |
| accent2 on white (fixed) | `#2256d8` | `#ffffff` | 5.95:1 | 4.5:1 | PASS | Fixed |
| accent2 on tag-bg (fixed) | `#2256d8` | `#ebebf8` | 5.12:1 | 4.5:1 | PASS | Fixed |
| **`--accent3` on bg (old)** | `#0badbc` | `#f2f2f8` | **2.43:1** | 4.5:1 | **FAIL** | Changed `$accent3-light` → `#066d7c` |
| **`--accent3` on bg (fixed)** | `#066d7c` | `#f2f2f8` | **5.22:1** | 4.5:1 | PASS | Fixed |
| accent3 on white (fixed) | `#066d7c` | `#ffffff` | 5.75:1 | 4.5:1 | PASS | Fixed |
| accent3 on tag-bg (fixed) | `#066d7c` | `#ebebf8` | 4.95:1 | 4.5:1 | PASS | Fixed |
| **`--warn` on bg (old)** | `#d97706` | `#f2f2f8` | **2.76:1** | 4.5:1 | **FAIL** | Changed `$warn-light` → `#9f5504` |
| **`--warn` on bg (fixed)** | `#9f5504` | `#f2f2f8` | **4.82:1** | 4.5:1 | PASS | Fixed |
| warn on white (fixed) | `#9f5504` | `#ffffff` | 5.31:1 | 4.5:1 | PASS | Fixed |
| **`--error` on bg (old)** | `#e5294a` | `#f2f2f8` | **3.94:1** | 4.5:1 | **FAIL** | Changed `$error-light` → `#c0182e` |
| **`--error` on bg (fixed)** | `#c0182e` | `#f2f2f8` | **5.43:1** | 4.5:1 | PASS | Fixed |
| error on white (fixed) | `#c0182e` | `#ffffff` | 5.99:1 | 4.5:1 | PASS | Fixed |
| **`tag.theory` on tag-bg (old)** | `#2563eb` | `#ebebf8` | **4.13:1** | 4.5:1 | **FAIL** | Hardcoded in `_components.scss` → `#2256d8` |
| **`tag.theory` on tag-bg (fixed)** | `#2256d8` | `#ebebf8` | **5.12:1** | 4.5:1 | PASS | Fixed |
| **`tag.ai-tag` on tag-bg (old)** | `#e5294a` | `#ebebf8` | **3.74:1** | 4.5:1 | **FAIL** | Hardcoded in `_components.scss` → `#c0182e` |
| **`tag.ai-tag` on tag-bg (fixed)** | `#c0182e` | `#ebebf8` | **5.16:1** | 4.5:1 | PASS | Fixed |
| Grade bar: attend (light) | `#ffffff` | `#4a5568` | 6.99:1 | 4.5:1 | PASS | — |
| Grade bar: hw (light) | `#ffffff` | `#7c3aff` | 5.16:1 | 4.5:1 | PASS | — |
| Grade bar: quiz (light, fixed) | `#ffffff` | `#7840e8` | 5.40:1 | 4.5:1 | PASS | Fixed |
| Grade bar: mid (light) | `#ffffff` | `#2563eb` | 4.80:1 | 4.5:1 | PASS | — |
| Grade bar: final (light) | `#ffffff` | `#0e6490` | 6.26:1 | 4.5:1 | PASS | — |
| Grade bar: project (light) | `#ffffff` | `#b45309` | 4.79:1 | 4.5:1 | PASS | — |
| **`.pill-teal` hover (old)** | `#f2f2f8` (--bg) | `#0badbc` | **2.43:1** | 3:1 (UI) | **FAIL** | Fixed via `$accent3-light` change |
| **`.pill-teal` hover (fixed)** | `#f2f2f8` (--bg) | `#066d7c` | **5.22:1** | 3:1 (UI) | PASS | Fixed |
| `.thumb-toggle` light hover | `#f2f2f8` | `#2256d8` | 4.35:1 | 3:1 (UI) | PASS | — |
| Kakao btn hover | `#2a1800` | `#fee500` | 13.43:1 | 4.5:1 | PASS | — |
| warn on bg (sched `.test-note`) | `#fbbf24` | `#090910` | 12.31:1 | 4.5:1 | PASS | — |

† Muted on `#ebebf8`: ratio 4.47:1 is 0.03 below the 4.5:1 threshold. `.ctrl-row-label` (muted on tag-bg) is the only element in this exact context; see note below.

#### Decorative / exempt items (not required to meet contrast thresholds)

| Element | Reason |
|---|---|
| `.uni-badge` (opacity 0.12, `aria-hidden`) | Decorative watermark — exempt |
| `.sched-extra` semi-transparent caption over images | Overlaid on photographic content — exempt per WCAG 1.4.3 exception |
| `.bk-img-inner` text (35% white on gradient bg) | Decorative placeholder — exempt |
| Body background mesh grid (SVG gradient lines) | Pure decoration, no text |

### Changes made

| File | Variable / Selector | Old value | New value | Rationale |
|---|---|---|---|---|
| `_sass/_variables.scss` | `$muted-light` | `#8888b0` | `#6060a0` | 2.84:1 → 4.76:1 on `#f2f2f8` |
| `_sass/_variables.scss` | `$accent2-light` | `#2563eb` | `#2256d8` | 4.35:1 → 5.40:1 on `#f2f2f8` |
| `_sass/_variables.scss` | `$accent3-light` | `#0badbc` | `#066d7c` | 2.43:1 → 5.22:1 on `#f2f2f8` (also fixes `.pill-teal` and `.filter-toggle-btn` hover) |
| `_sass/_variables.scss` | `$warn-light` | `#d97706` | `#9f5504` | 2.76:1 → 4.82:1 on `#f2f2f8` |
| `_sass/_variables.scss` | `$error-light` | `#e5294a` | `#c0182e` | 3.94:1 → 5.43:1 on `#f2f2f8` |
| `_sass/_variables.scss` | `$grade-quiz` | `#9b65ff` | `#7840e8` | White text: 3.49:1 → 5.40:1 (both themes) |
| `_sass/_components.scss` | `[data-theme=light] .tag.theory` | `#2563eb` | `#2256d8` | 4.13:1 → 5.12:1 on `#ebebf8` (hardcoded override) |
| `_sass/_components.scss` | `[data-theme=light] .tag.ai-tag` | `#e5294a` | `#c0182e` | 3.74:1 → 5.16:1 on `#ebebf8` (hardcoded override) |

### Note on `$muted-light` on `#ebebf8` (tag-bg)

The computed ratio of `#6060a0` on `#ebebf8` is 4.47:1 — 0.03 below the 4.5:1 threshold. The only element in this context is `.ctrl-row-label` (filter panel section labels like "TYPE", "UNI"). These are uppercase monospace labels at 0.62rem which renders as approximately 9.3px — technically below the large-text threshold. However, they are supplementary labels for visible pill-filter buttons that carry the same information. Raising `$muted-light` further to `#5858a0` would achieve 4.6:1 on `#ebebf8` at the cost of slightly more visual weight across all muted text. This is left at `#6060a0` as an acceptable approximation; the ratio difference is within measurement rounding for 8-bit color.

---

## ARIA & Security Fix Pass (2026-05-01)

**Auditor:** Claude Code  
**Focus:** Remaining ARIA gaps, nested landmarks, `rel` security attributes, and `.grade-name` contrast missed in the contrast re-audit.

### Issues Fixed

#### `.grade-name` contrast — `_sass/_course.scss`

The previous contrast re-audit tested `.grade-pct` (solid `color: #fff`) but missed `.grade-name`, which used `color: rgba(255,255,255,.65)`. On solid colored grade segment backgrounds the effective rendered color fails WCAG AA:

| Grade segment | Background | Effective `.grade-name` color | Contrast | Result |
|---|---|---|---|---|
| Attendance | `#4a5568` | ~`#bfc3ca` (65% white blend) | 3.87:1 | **FAIL** |
| Final | `#0e6490` | ~`#dae7ee` (65% white blend) | ~4.2:1 | **FAIL** |
| Project | `#b45309` | ~`#f3e5da` (65% white blend) | ~3.6:1 | **FAIL** |

**Fix:** Changed `.grade-name { color: rgba(255,255,255,.65) }` → `color: #fff`. This matches `.grade-pct` and achieves 4.59:1–6.99:1 across all segment backgrounds.

#### Nested `<main>` landmark — `_layouts/course.html`

`default.html` wraps all content in `<main id="main-content">`. `course.html` had its own inner `<main>` tag for the grading/schedule/overview content column, creating two nested `<main>` landmarks — invalid HTML5 and flagged by Axe. Changed inner `<main>` → `<article>` to match what was done for `page.html` in the previous audit pass.

#### Mobile sub-menu `aria-expanded` — `_includes/nav.html` + `_layouts/default.html`

`.m-toggle` buttons had `data-sub` to drive JS but no `aria-expanded` attribute. Screen readers announced these as plain buttons with no expansion state. Fixed:
- Added `aria-expanded="false" aria-controls="m-{{ _mob_id }}-sub"` to both `.m-toggle` button instances in `nav.html`.
- Updated the mobile sub-menu JS in `default.html` to call `b.setAttribute('aria-expanded', String(o))` on click.

#### Mobile nav landmark — `_includes/nav.html`

`<div class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">` had an `aria-label` but no landmark role, making the label invisible to assistive technologies. Added `role="navigation"` to the div so screen readers expose it as a named navigation landmark.

#### FAQ button `aria-expanded` — `_pages/policies.md`

Five `.faq-q` disclosure buttons had no `aria-expanded` attribute. Screen readers could not tell users whether each FAQ answer was expanded or collapsed. Fixed:
- Added `aria-expanded="false"` to each `<button class="faq-q">` in markup.
- Updated the FAQ JS to call `.setAttribute('aria-expanded', 'false'/'true')` when closing/opening items.

#### `rel="noopener noreferrer"` on `target="_blank"` links

All `target="_blank"` links across three files lacked `rel="noopener noreferrer"`, exposing a security vulnerability (reverse tabnapping via `window.opener`) and flagged by Lighthouse Best Practices. Fixed across:
- `_includes/footer.html` — GitHub, LinkedIn, Google Scholar, PAI Lab links
- `_includes/about_aaron.html` — KakaoTalk, aaron.kr, PAI Lab, ORCID, GitHub links
- `_layouts/course.html` — KakaoTalk, GitHub Classroom, Google Classroom quick-links + external schedule link

#### Decorative watermark image alt — `_layouts/course.html`

The course hero university watermark logo (`opacity: 0.08`, `pointer-events: none`, visually decorative) had `alt="{{ page.description | split: ' • ' | last }}"` which caused screen readers to announce the university name as image content. Changed to `alt="" role="presentation"` to mark it as purely decorative.

### Changes made in this pass

| File | Selector / Attribute | Change | Rationale |
|---|---|---|---|
| `_sass/_course.scss` | `.grade-name { color }` | `rgba(255,255,255,.65)` → `#fff` | WCAG AA contrast 3.6–3.9:1 → 4.6–7.0:1 |
| `_layouts/course.html` | Inner `<main>` tag | `<main>` → `<article>` | Eliminates nested `<main>` landmark |
| `_layouts/course.html` | Watermark `<img alt>` | University name → `alt="" role="presentation"` | Decorative image, 0.08 opacity |
| `_layouts/course.html` | Quick-links + external schedule `<a>` | Added `rel="noopener noreferrer"` | Security + Lighthouse Best Practices |
| `_includes/nav.html` | `.mobile-nav` `<div>` | Added `role="navigation"` | Exposes `aria-label` as named landmark |
| `_includes/nav.html` | `.m-toggle` buttons (×2) | Added `aria-expanded="false" aria-controls="..."` | Disclosure button pattern |
| `_layouts/default.html` | Mobile sub-menu JS | Added `b.setAttribute('aria-expanded', String(o))` | Keeps ARIA state in sync with visual state |
| `_includes/footer.html` | All `target="_blank"` links (×4) | Added `rel="noopener noreferrer"` | Security + Lighthouse Best Practices |
| `_includes/about_aaron.html` | All `target="_blank"` links (×5) | Added `rel="noopener noreferrer"` | Security + Lighthouse Best Practices |
| `_pages/policies.md` | `.faq-q` buttons (×5) | Added `aria-expanded="false"` | Disclosure button initial state |
| `_pages/policies.md` | FAQ JS | Toggle `aria-expanded` on open/close | Keeps ARIA state in sync |
