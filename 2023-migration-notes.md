# 2023 Course Migration Notes

This document records decisions, caveats, and data loss from migrating the 2023 course sites into `claude-courses`.

## What Was Migrated

All 6 source repos in `2023-course-sites/` have been fully migrated:

| Course | Source | Data File | Course File |
|--------|--------|-----------|-------------|
| DJU Web Security | `dju-sec/` | `_data/2023/dju_sec_lectures.yml` | `_courses/2023/dju-sec.md` |
| DJU PostgreSQL | `dju-sql/` | `_data/2023/dju_sql_lectures.yml` | `_courses/2023/dju-sql.md` |
| HB Advanced C | `hb-c/` | `_data/2023/hb_c_lectures.yml` | `_courses/2023/hb-c.md` |
| JNUE ISS (Scratch) | `jnue-iss/` | `_data/2023/jnue_iss_lectures.yml` | `_courses/2023/jnue-iss.md` |
| UT Node.js | `ut-nodejs.github.io/` | `_data/2023/ut_nodejs_lectures.yml` | `_courses/2023/ut-nodejs.md` |
| UT Web Foundations | `ut-web/` | `_data/2023/ut_web_lectures.yml` | `_courses/2023/ut-web.md` |

`_courses/2023/ut-cad.md` has no source repo — left as external_url only.

---

## Things That Didn't Go Over Cleanly

### 1. ut-cad — No source repo
No `2023-course-sites/ut-cad` directory exists. The course file retains `external_url` only with no schedule data.

### 2. ut-web — Module separator entries skipped
The source `lectures.yml` contained three module title entries without a `date` key:
```yaml
- title: "Module 1: HTML"
- title: "Module 2: CSS"
- title: "Module 3: JavaScript"
```
These are preserved in `_data/2023/ut_web_lectures.yml` but are silently skipped by `schedule.html` (which guards with `{%- if item.date -%}`). The schedule will display correctly — the module titles simply won't appear as rows. If you want module headers, the schedule include would need a special non-date row type.

### 3. jnue-iss — Section-specific quiz/exam links removed
The original source had per-section logistics in midterm/final rows using `display:none` to hide some sections' links and show others, like:
```html
<div style="display:none;"> <!-- Section A links --> </div>
<div> <!-- Section B links (visible) --> </div>
```
Since this site has a single shared schedule for all 4 sections, these hidden per-section links were removed. The current migration shows one set of links per test row. **If you need per-section exam links, the best approach is separate course files per section** (like the 2026 JNUE ISS approach).

### 4. dju-sec / dju-sql — 보강 sessions simplified
The original dju-sec source had make-up session entries (weeks 5 and 9) with red `<span style="color: red">` HTML to highlight them. These have been simplified to plain entries without inline color styling. The `schedule.html` renderer doesn't support arbitrary inline styles; if highlighting is needed, add a CSS class instead.

### 5. ut-nodejs — No source lectures.yml; schedule reconstructed from Markdown table
The `ut-nodejs.github.io` site used a Cayman-docs theme (not al-folio) with no `_data/lectures.yml`. The schedule was reconstructed from the Markdown table in `schedule.md`. Some limitations:
- **Slides links**: Most weeks link to raw GitHub PDF files, not Google Slides — these may or may not still be accessible.
- **Week 5**: No assignment link (students continued Week 4's work).
- **Week 11**: Reused Week 10's assignment links (by design in the original).
- **Week 13**: Reused Week 12's assignment links (by design in the original).
- The holiday row (5/5 Children's Day) is included as a dated entry with week number 10 (matching the source table, where the holiday occupies that slot before week 10).

### 6. jnue-iss — readings converted from YAML array to string
Source used YAML array format for readings:
```yaml
readings:
  - item1
  - item2
```
`schedule.html` renders `{{ item.readings }}` as a string. Arrays render as `["item1", "item2"]` which looks wrong. All readings were converted to slash-separated strings: `"item1 / item2"`.

### 7. Grading corrected from stub values
The original 2023 course stubs used incorrect placeholder grading percentages. All have been updated to match the actual syllabi from the source sites:
- **dju-sec, dju-sql, hb-c, jnue-iss, ut-web**: `10/30/10/20/30` (attendance/hw/project/midterm/final)
- **ut-nodejs**: `10/30/15/20/25` (attendance/hw/midterm/final/project) — unique grading from the Node.js course syllabus

### 8. ut-nodejs section times — not available
The ut-nodejs site used a different theme (Cayman-docs) that didn't list class times in an easily parseable way. The `information:` block uses `"월 AM"` / `"월 PM"` as placeholders rather than specific class periods (e.g. `월 123`). Update these when the exact schedule is known.

### 9. Images not migrated
Textbook cover images referenced in course front matter (e.g. `books/sec-text.jpg`, `books/scratch-text.jpg`) are not in `assets/img/`. They must be copied from `../aaronkr-courses.github.io/assets/img/` as part of the general assets copy task.

---

## Safe to Delete

Once you've confirmed the Jekyll build looks correct, the `2023-course-sites/` folder can be deleted entirely. All content has been extracted. The original sites remain live at their GitHub Pages URLs for reference.
