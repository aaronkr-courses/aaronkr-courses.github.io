# SEO Audit — aaronkr-courses.github.io
**Site:** https://courses.aaron.kr  
**Date:** 2026-05-01  
**Auditor:** Claude Code (claude-sonnet-4-6)  
**Jekyll plugins:** jekyll-seo-tag, jekyll-sitemap, jekyll-feed

---

## Summary Table

| # | Check | Before | After | Status |
|---|-------|--------|-------|--------|
| 1 | `<title>` — unique, descriptive | Duplicate (head.html + seo-tag) | seo-tag only; index title improved | FIXED |
| 2 | `<meta name="description">` — all pages | Missing on all _pages; course pages used structured code string | Added to all 9 _pages; course pages get auto-generated human description | FIXED |
| 3 | `<link rel="canonical">` | Present (jekyll-seo-tag) | Present (jekyll-seo-tag) | PASS |
| 4 | `og:title` | Present (jekyll-seo-tag) | Present | PASS |
| 5 | `og:description` | Structured code string on courses; missing on _pages | Human-readable description injected; _pages get site fallback | FIXED |
| 6 | `og:image` | Absent on all pages | Course img field wired; site.logo fallback for all other pages | FIXED |
| 7 | `og:url` | Present (jekyll-seo-tag) | Present | PASS |
| 8 | `og:type` | `article` on courses (jekyll-seo-tag default) | Unchanged — acceptable; not harmful | NOTED |
| 9 | `twitter:card` | `summary` (jekyll-seo-tag default) | `summary_large_image` when page.img present | FIXED |
| 10 | `twitter:title` | Present (jekyll-seo-tag) | Present | PASS |
| 11 | `twitter:description` | Structured code string on courses | Human-readable description injected (overrides seo-tag) | FIXED |
| 12 | `twitter:image` | Absent | Course img or site.logo fallback | FIXED |
| 13 | `meta name="robots"` | Absent | `index, follow` on all Jekyll pages; `/attend` pages noindex,nofollow | FIXED |
| 14 | `meta name="viewport"` | Present | Present | PASS |
| 15 | `html lang` attribute | `site.lang` = `en` (correct for server-side) | Present and correct | PASS |
| 16 | `robots.txt` — valid, references sitemap | Present but missing Disallow for /attend | Added `Disallow: /attend/` | FIXED |
| 17 | `sitemap.xml` — present and correct | Present; includes PDF assets; URLs correct in live build | Added sitemap:false for /attend and /assets/pdf paths | FIXED |
| 18 | Sitemap URL correctness | `_site/` shows localhost:4000 (local build artifact) | `_config.yml` url is correct; live build uses `https://courses.aaron.kr` | PASS |
| 19 | hreflang | N/A — JS-only bilingual toggle (not URL-based) | Skipped by design | N/A |
| 20 | Structured data — Course schema | `BlogPosting` on courses (jekyll-seo-tag default) | Added proper `Course` + `CourseInstance` JSON-LD | FIXED |
| 21 | Structured data — EducationalOrganization | Absent | Added `Person` + `WebSite` JSON-LD on homepage | FIXED |
| 22 | One `<h1>` per page | Present on all layouts | Present | PASS |
| 23 | Crawlable links | All `<a href>` links present; nav uses relative_url | Pass | PASS |
| 24 | Descriptive link text | Nav uses lang-en/lang-ko spans; course cards have aria-label | Pass | PASS |
| 25 | Duplicate `<title>` tag | Both head.html manual title AND jekyll-seo-tag outputting `<title>` | Removed manual `<title>` from head.html; seo-tag is authoritative | FIXED |

---

## Per-Check Findings and Fixes

### 1. `<title>` Tag — FIXED
**Before:** `head.html` had a hardcoded `<title>{% if page.title %}{{ page.title }} — {% endif %}{{ site.title }}</title>` AND `{% seo %}` also outputs `<title>`. This produced duplicate title tags in every rendered page.

**After:** Removed the manual `<title>` tag from `_includes/head.html`. `{% seo %}` (jekyll-seo-tag) is now the sole title tag generator. It produces `page.title | site.title` format with an `|` separator (e.g., `C++ Programming | Aaron Snowberger — Courses`).

Also updated `index.md` title from `Courses` (generic) to `Teaching & Courses` (more descriptive for og:title).

---

### 2. `<meta name="description">` — FIXED

**Before:** No `description:` front matter on any `_pages` file. All 9 pages (`archive`, `office-hours`, `policies`, `policy-ai`, `policy-attendance`, `policy-assignments`, `policy-collaboration`, `policy-late`, `policy-tests`) fell back to `site.description` ("Courses taught by Prof. Aaron Snowberger at five Korean universities.") — same text on every page.

For course pages, `page.description` held the structured display string `CODE • SEMESTER • UNIVERSITY` (e.g. `INFO2118 • 2026년 1학기 • 한밭대학교`) — not suitable as a meta description.

**After:**
- Added unique `description:` front matter to all 9 `_pages` files (120–160 chars each).
- Added `description:` to `index.md`.
- `_includes/head.html` now generates a human-readable meta description for course pages by parsing `page.description` components and building: `{title} — {semester}, {university}. Taught by Prof. Aaron Snowberger. Find the syllabus, schedule, textbooks, and grading breakdown.` (~148 chars).
- Course authors may optionally add `seo_description:` front matter to any course file to override the auto-generated description.

---

### 3. Canonical Link — PASS
`jekyll-seo-tag` generates `<link rel="canonical">` on every page using `site.url + page.url`. No action required.

---

### 4–5. Open Graph title / description — FIXED
`og:title` was already present via `jekyll-seo-tag`. `og:description` on course pages used the structured code string. Fixed by injecting `<meta property="og:description">` after `{% seo %}` on course pages (crawlers use the last duplicate occurrence).

---

### 6. `og:image` / twitter:image — FIXED
**Before:** No `og:image` or `twitter:image` tags anywhere on the site.

**After (three-tier logic in `head.html`):**
1. If `page.img` is set (course pages) → `https://courses.aaron.kr/assets/img/{page.img}`
2. Else if `site.logo` is set → `https://courses.aaron.kr/assets/img/aaron.jpg`
3. Else → no tag (shouldn't occur given site.logo is now configured)

Also added `logo: /assets/img/aaron.jpg` to `_config.yml` so `jekyll-seo-tag` can reference it for the site-wide SEO JSON-LD Person schema.

---

### 7–8. `og:url` / `og:type` — PASS / NOTED
`og:url` is correct via jekyll-seo-tag. `og:type` outputs `article` for course collection pages because jekyll-seo-tag detects a modification date (from file mtime). This is not harmful — `article` is an acceptable type for educational content pages. Changing it would require forking the seo-tag plugin or suppressing its entire output and rewriting manually; not worth the maintenance cost.

---

### 9–12. Twitter Card — FIXED
**Before:** `twitter:card: summary` (jekyll-seo-tag default), no `twitter:image`.

**After:**
- Pages with `page.img`: `twitter:card: summary_large_image` + `twitter:image` pointing to course book cover
- All other pages: `twitter:image` pointing to `site.logo` (aaron.jpg), keeping `summary` card
- `twitter:description` overridden on course pages with human-readable text

---

### 13. `meta name="robots"` — FIXED
**Before:** No `<meta name="robots">` anywhere.

**After:**
- `_includes/head.html` now outputs `<meta name="robots" content="index, follow"/>` on all Jekyll-rendered pages.
- `attend/index.html` and `attend/admin.html` both have `<meta name="robots" content="noindex, nofollow"/>` added directly.

---

### 14. `meta name="viewport"` — PASS
Was already present: `<meta name="viewport" content="width=device-width,initial-scale=1.0"/>`. No change.

---

### 15. `html lang` attribute — PASS
`default.html`: `<html lang="{{ site.lang | default: 'en' }}" data-theme="dark">`. `site.lang: en` in `_config.yml`. Since the EN/KO toggle is JavaScript-only (no separate URL routes), `lang="en"` is correct as the server-side base. The JS toggle uses `document.documentElement.classList.toggle('ko', ...)` for CSS targeting. hreflang is intentionally omitted (see #19).

---

### 16. `robots.txt` — FIXED
**Before:**
```
User-agent: *
Allow: /
Sitemap: {{ site.url }}/sitemap.xml
```
Note: The file had `---` front matter delimiters (needed for Liquid processing of `{{ site.url }}`), so the Sitemap line would render correctly in production.

**After:** Added `Disallow: /attend/` to prevent crawlers from indexing the Firebase attendance app.

---

### 17–18. `sitemap.xml` — FIXED
The `_site/sitemap.xml` examined during the audit showed `localhost:4000` URLs — this is a local build artifact. The live build uses `url: https://courses.aaron.kr` from `_config.yml`.

**Fixes applied:**
- Added `sitemap: false` default for `path: "attend"` in `_config.yml` so jekyll-sitemap won't include `/attend/*` pages.
- Added `sitemap: false` default for `path: "assets/pdf"` to exclude PDFs from sitemap (they appeared in the local sitemap and add noise/waste crawl budget).

---

### 19. hreflang — N/A (Intentionally Omitted)
The bilingual EN/KO toggle is JavaScript-only with a single URL per page. There are no separate `/ko/` URL variants. `hreflang` is URL-based and is not applicable here. Implementing it would require adding `x-default` and `ko` alternates pointing to the same URL — which is technically valid but misleading and offers no SEO benefit. Correctly omitted.

---

### 20. Structured Data — Course Schema — FIXED
**Before:** `jekyll-seo-tag` outputs `BlogPosting` JSON-LD for all course pages — incorrect type.

**After:** Created `_includes/seo_course_schema.html` with proper `schema.org/Course` JSON-LD:
- `@type: Course`
- `name`, `description`, `url`
- `provider` → `EducationalOrganization` (university)
- `instructor` → `Person` (Aaron Snowberger) with sameAs links
- `hasCourseInstance` with location and schedule from `page.information`
- `offers` with free/0 KRW pricing
- Included from `head.html` for all `layout: course` pages

---

### 21. Structured Data — EducationalOrganization / WebSite — FIXED
**Before:** No site-level structured data beyond what jekyll-seo-tag provides.

**After:** Created `_includes/seo_org_schema.html` with `@graph` containing:
- `Person` (@id: https://aaron.kr/#person) with all social profile sameAs links
- `WebSite` (@id: https://courses.aaron.kr/#website) linked to person publisher
- Included from `head.html` only on the homepage (`page.url == '/'`)

---

### 22. One `<h1>` per page — PASS
- `default.html` / `page.html` layout: `<h1>{{ page.title }}</h1>` — one per page.
- `course.html`: `<h1 class="animate d2">{{ page.title }}</h1>` — one per course page.
- Homepage (`index.md`): `<h1 class="animate d2">Teaching &amp;<br><em>Courses</em></h1>` — one h1.
- Archive (`archive.md`): `<h1>Course <em>Archive</em></h1>` — one h1.
- All `_pages` that use `page.html` layout produce one h1 via `{{ page.title }}`.

No fixes needed.

---

### 23–24. Crawlable Links / Descriptive Link Text — PASS
All navigation links use `<a href="{{ url | relative_url }}">`. No JavaScript-only navigation. No `href="#"` dead links in the nav (the archive occasionally uses `ann.url | default: '#'` for announcements without URLs — minor, not an SEO concern).

Course card links use `aria-label="{{ c.title }}{% if c.subtitle %}: {{ c.subtitle }}{% endif %} — {{ uni_name }}"` — fully descriptive for screen readers and crawlers.

Nav links expose both `lang-en` and `lang-ko` spans — both are in the DOM and crawlable (CSS shows/hides based on `.ko` class). Google will see both text variants.

---

## Files Changed

| File | Change |
|------|--------|
| `_includes/head.html` | Removed duplicate `<title>` tag; added `meta robots index/follow`; added course description override logic; added og:image / twitter:image injection; added twitter:card summary_large_image for courses; wired Course and Org structured data includes |
| `_includes/seo_course_schema.html` | **NEW** — Course JSON-LD schema (schema.org/Course) |
| `_includes/seo_org_schema.html` | **NEW** — Person + WebSite JSON-LD schema for homepage |
| `_config.yml` | Added `logo`, `social`, `twitter` keys for jekyll-seo-tag; added `sitemap: false` defaults for `/attend` and `/assets/pdf` paths |
| `robots.txt` | Added `Disallow: /attend/` |
| `index.md` | Updated title to `Teaching & Courses`; added `description:` front matter |
| `_pages/archive.md` | Added `description:` front matter |
| `_pages/office-hours.md` | Added `description:` front matter |
| `_pages/policies.md` | Added `description:` front matter |
| `_pages/policy-ai.md` | Added `description:` front matter |
| `_pages/policy-attendance.md` | Added `description:` front matter |
| `_pages/policy-assignments.md` | Added `description:` front matter |
| `_pages/policy-collaboration.md` | Added `description:` front matter |
| `_pages/policy-late.md` | Added `description:` front matter; title improved to `Late Submission Policy` |
| `_pages/policy-tests.md` | Added `description:` front matter |
| `attend/index.html` | Added `<meta name="robots" content="noindex, nofollow"/>` |
| `attend/admin.html` | Added `<meta name="robots" content="noindex, nofollow"/>` |

---

## Remaining Recommendations (Not Fixed — Require Content Decisions)

1. **`og:type` on course pages** — Currently outputs `article` (jekyll-seo-tag default). Would ideally be `website` or a custom Course type, but overriding requires suppressing the entire seo-tag output. Low priority; `article` is not harmful.

2. **Course `description:` field dual-use** — The structured `CODE • SEMESTER • UNIVERSITY` format is used both as display data in layouts and (previously) as the SEO meta description. The head.html now auto-generates a better SEO description from the parts. For any course where the auto-generated description is insufficient, add `seo_description: "..."` to that course's front matter.

3. **Social preview image quality** — Course book cover images (`assets/img/books/`) are small (local assets). Consider creating dedicated 1200×630px Open Graph images for the most important current-semester courses.

4. **Sitemap URL in pre-built `_site/`** — The committed `_site/sitemap.xml` shows `localhost:4000` URLs. This is a local build artifact. The live GitHub Pages build will produce correct `https://courses.aaron.kr/` URLs. Delete `_site/` from the repository if it should not be committed.

5. **Google Search Console** — Submit `https://courses.aaron.kr/sitemap.xml` to Google Search Console to ensure all 47+ course pages are indexed. Verify the canonical domain (CNAME is set; confirm redirect from `aaronkr-courses.github.io` → `courses.aaron.kr` is active).
