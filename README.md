# Aaron Snowberger — Courses Site

A **Jekyll site** for Prof. Aaron Snowberger's teaching portfolio across five Korean universities. Hosted on GitHub Pages at [courses.aaron.kr](https://courses.aaron.kr).

## Quick Start

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

**First run:** Copy images from the existing Jekyll site:
```bash
cp -r ../aaronkr-courses.github.io/assets/img/ ./assets/img/
```

## Deploy to GitHub Pages

1. Push to the `main` branch of `aaronkr-courses/aaronkr-courses.github.io`
2. In repo Settings → Pages → Source: **Deploy from branch**, branch `main`, folder `/`
3. Set custom domain: `courses.aaron.kr` (GitHub adds a `CNAME` file automatically)
4. DNS: add a `CNAME` record pointing `courses` → `aaronkr-courses.github.io`

**Auto-generated on every build** (no action needed):
- `sitemap.xml` — via `jekyll-sitemap` plugin
- `robots.txt` — from `robots.txt` source file (Liquid template, uses `site.url`)
- `feed.xml` — via `jekyll-feed` plugin

---

## New Semester Checklist

Everything to update when a new semester starts (e.g. 2027-1):

### 1 · `_config.yml`
- [ ] Add the new semester to `course_categories` (e.g. `2027-1`)

### 1b · `_data/universities.yml` (only if a logo URL changed)
- [ ] Update the `logo:` URL for any university that changed its branding

### 2 · Course files — `_courses/YYYY/`
- [ ] Create `_courses/2027/` directory
- [ ] Create one `.md` per course (copy from previous semester, update front matter)
- [ ] Set `now: Yes` on every **active** course; remove/omit from completed ones
- [ ] Set correct `category: 2027-1`
- [ ] Set `uni: <abbr>` (e.g. `uni: ut`) — drives the logo, favicon, and watermark automatically via `_data/universities.yml`
- [ ] Update `data_file:` to match the new data file name (e.g. `2027/ut_iot_lectures`)
- [ ] Update `information:` (section codes, times, locations, KakaoTalk links)
- [ ] Update `grading:` if percentages change
- [ ] Update textbooks (`Main-Text:` / `Supplementary:`)

### 3 · Lecture data files — `_data/YYYY/`
- [ ] Create `_data/2027/` directory
- [ ] Create one `_lectures.yml` per course (copy last semester's, update dates/weeks)
- [ ] Update all `date:` values (M/D format)
- [ ] Update `week:` numbers
- [ ] Add `hw:` / `hw2:` GitHub Classroom assignment links once created
- [ ] Add `slides:` Google Slides URLs as you create them
- [ ] Mark holidays with `no_class: true` (or just a descriptive title)
- [ ] Mark test weeks with `test: true`

### 4 · Announcements — `_data/announcements.yml`
- [ ] Add a "New semester begins" announcement
- [ ] Remove or comment out outdated announcements from last semester

Each entry supports these fields:
```yaml
- date: 2027-03-03        # YYYY-MM-DD (displayed as "Mar 3")
  type: new               # dot color: new | teal | info | warn | error
  title: "English title"
  title_ko: "한국어 제목"  # optional
  body: "English body"    # optional
  body_ko: "한국어 본문"   # optional
  url: "/archive/"        # optional link, defaults to #
  badge: "Spring 2027"    # optional badge label
  badge_type: admin       # optional: course | lab | admin (default: admin)
```
The section is hidden automatically when the file is empty.

### 5 · Office Hours — `_pages/office-hours.md`
- [ ] Update day/time grid if schedule changed
- [ ] Update campus buildings/room numbers if changed
- [ ] Update KakaoTalk / contact links if changed

### 6 · Index page — `index.md`
- [ ] Verify the Today pill days are correct (Mon=UT, Tue=WKU, Wed=HB, Thu=JBNU, Fri=JNUE)

### 7 · After the semester ends
- [ ] Set `now: Yes` → remove or set false on all finished courses
- [ ] The archive page auto-updates — no manual changes needed

---

## Site Map

| URL | File | Description |
|---|---|---|
| `/` | `index.md` | Homepage — today pill, current courses |
| `/archive/` | `_pages/archive.md` | All courses by semester |
| `/policies/` | `_pages/policies.md` | Shared academic policies |
| `/office-hours/` | `_pages/office-hours.md` | Campus schedule + contact |
| `/courses/2026/ut-iot/` | `_courses/2026/ut-iot.md` | IoT course (UT) |
| `/courses/2026/...` | `_courses/2026/*.md` | (2026 courses) |

---

## Design System

### Colors
```css
--accent:  #9b65ff   /* Purple — primary CTAs, headings */
--accent2: #7eb8f7   /* Blue   — secondary buttons */
--accent3: #6dccdd   /* Teal   — card borders, status */
--warn:    #fbbf24   /* Amber  — HW, warnings */
--error:   #fb6f84   /* Pink   — holidays */
```

### Fonts
- `IBM Plex Mono` — nav brand, code labels, badges
- `Playfair Display` — headings, stat numbers
- `DM Sans` — body text (weight 300)

---

## Adding a New Course

1. Create `_courses/YYYY/school-subject.md` with proper front matter
2. Create `_data/YYYY/school_subject_lectures.yml` with week-by-week schedule
3. Done — the nav, homepage, and archive will automatically include it

### Minimal course front matter:
```yaml
---
layout: course
title: Course Title
subtitle: 한국어 부제목
description: SECTION_CODE • YYYY년 N학기 • 대학교이름
uni: ut                         # abbr from _data/universities.yml → drives favicon + watermark
img: assets/img/books/book.jpg  # card thumbnail
importance: 1
category: 2026-1
now: Yes
data_file: 2026/school_subject_lectures   # path inside _data/ (no .yml extension)

grading:
  attendance: 10
  midterm: 25
  final: 25
  homework: 25
  project: 15

information:
  - section: 123456
    time: Mon 9am-12pm
    location: Building 101
    kakaotalk: https://open.kakao.com/...

Main-Text:
  - text: "주교재"
    author: "Author"
    title: <strong>Book Title</strong>
    publisher: "Publisher | Year"
    link: "https://..."
    image: books/book.jpg
---
[Overview markdown here]
```

> **Notes:**
> - `now: Yes` in YAML is a boolean `true`. The site uses `where_exp: "c", "c.now"` — never `where: "now", "Yes"` (which matches nothing).
> - `uni:` must match an `abbr:` in `_data/universities.yml`. For non-university courses (online, high school), use `logo: https://...` directly instead.

---

## Schedule Data Format

Each row in `_data/YYYY/school_subject_lectures.yml`:

```yaml
- date: 3/4               # M/D format
  week: 1                 # week number (shown as "Week N" heading)
  title: >                # HTML allowed; use > for multi-line
    <strong>Intro</strong>
  title_ko: >             # optional Korean title
    <strong>소개</strong>
  readings: "Book Ch. 1"  # optional reading hint
  slides: "https://docs.google.com/..."          # thumbnail links here
  slides2: "https://..."                         # optional 2nd slides link
  slides2_title: "Lab Slides"                    # label for slides2 (default: "Slides 2")
  img: 2026/ut-iot/01-intro.jpg                  # thumbnail image (relative to /assets/img/)
  hw: "https://classroom.github.com/..."         # homework link (shown as 과제 → button)
  hw2: "https://classroom.github.com/..."        # optional second HW link
  logistics: >            # optional HTML for logistics column; links are fine here
    <a href="...">Submit here</a>

# No-class / holiday row:
- date: 4/22
  week: 8
  no_class: true
  title: <strong>휴강</strong> (Holiday)

# Test row:
- date: 5/13
  week: 11
  test: true
  title: <strong>중간고사</strong> Midterm Test
```

**Column layout (table):**
1. **Date** — `date:` + holiday/test styling
2. **Slides thumbnail** — `img:` links to `slides:`; `slides2:` shows below thumbnail
3. **Info** — `week:` heading + `title:` + `readings:`
4. **Logistics** — `logistics:` HTML + `hw:`/`hw2:` buttons

---

## Updating Your Bio

The instructor box on every course page pulls bio text **live** from `aaronsnowberger.com/bio.json` at page load. To update it:

1. Edit `_data/bio.yml` in the `../aaronsnowberger.com` repo (the "medium" bio, `bios[1]`)
2. Push to GitHub — the courses site will pick up the change automatically on next page load

The static fallback text in `_includes/about_aaron.html` is shown briefly before the fetch completes (or if the fetch fails).

---

## Key Files

| File | Purpose |
|---|---|
| `_includes/policies.md` | **Single source of truth** for all shared academic policies |
| `_includes/schedule.html` | Renders `<table>` schedule from `_data/YYYY/…_lectures.yml` |
| `_includes/about_aaron.html` | Instructor bio box — fetches from aaronsnowberger.com/bio.json |
| `_includes/course_card.html` | Card component used on home/archive pages |
| `_sass/_variables.scss` | All color & layout variables |
| `_data/universities.yml` | **Single source of truth** for university logos, names, abbrs, and URLs |
| `_config.yml` | Site settings, course categories, GitHub/social handles |
| `_data/nav.yml` | Nav links — edit here to add/remove nav items |
| `_data/announcements.yml` | Homepage announcements strip |

---

## Multi-Site Architecture

| Site | Stack | URL |
|---|---|---|
| **Courses** (this site) | Jekyll on GitHub Pages | [courses.aaron.kr](https://courses.aaron.kr) |
| **Press / CV** | Jekyll on GitHub Pages | [aaronsnowberger.com](https://aaronsnowberger.com) |
| **Research / Lab** | Astro on Vercel | [pailab.io](https://pailab.io) |
| **Personal blog** | Next.js + WordPress | [aaron.kr](https://aaron.kr) |

**Profile image + university logos:** Host at Cloudinary. Same URLs used across all sites.

**Bio endpoint:** `aaronsnowberger.com/bio.json` — served by `bio.json` Jekyll page in the press site repo.
