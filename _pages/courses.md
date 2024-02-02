---
layout: page
permalink: /courses/
title: courses
description: Materials for courses you taught. Replace this text with your description.
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
    font-size: 1.2rem;
  }
  .card {
    margin-bottom: 1rem;
  }
  .card figure {
    margin-bottom: 0;
  }
  .card-body {
    padding-left: 0;
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
