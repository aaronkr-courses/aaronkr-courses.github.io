---
layout: page
permalink: /courses/
title: Courses
description: Current and previous courses taught by Aaron Snowberger.
nav: false
nav_order: 2
display_categories: [2023, 2024]
grid: false
---

<!-- pages/courses.md -->
<!-- Display courses without categories -->

{%- assign sorted_courses = site.courses | sort: "importance" -%}

<style>
  .course {
    width: 100%;
  }
  .course h3.title {
    font-size: 1.4rem;
    font-weight: 400;
  }
  .course h4.subtitle {
    font-size: 1rem;
  }
  .course p.description {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .card-img.col-md-2 {
    margin-right: -1.5rem;
  }
  .card {
    margin-bottom: 1rem;
  }
  .card figure {
    margin-bottom: 0;
  }
</style>

<!-- Generate cards for each course -->
<div class="container">
  <div class="row">
  {%- for course in sorted_courses -%}
    {% include courses_horizontal.html %}
  {%- endfor %}
  </div>
</div>
