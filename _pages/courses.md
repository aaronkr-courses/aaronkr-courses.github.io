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

<!-- pages/courses.md -->
<div class="projects">
{%- if site.enable_course_categories and page.display_categories %}
<!-- Display courses without categories -->
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.courses | where: "category", category -%}
  {%- assign sorted_courses = site.courses | sort: "importance" -%}

  <!-- Generate cards for each course -->
  <div class="container">
    <div class="row">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>

{%- else -%}

<!-- Display courses without categories -->

{%- assign sorted_courses = site.courses | sort: "importance" -%}

  <!-- Generate cards for each course -->
  <div class="container">
    <div class="row">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
</div>
