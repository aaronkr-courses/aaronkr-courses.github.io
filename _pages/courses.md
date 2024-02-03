---
layout: page
permalink: /courses/
title: Courses
description: Current and previous courses taught by Aaron Snowberger.
nav: false
nav_order: 2
course_categories: [2024, 2023]
grid: false
---

<style>
  .course {
    width: 100%;
  }
  .courses a {
    margin: 0 0.5rem;
    display: block;
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
  .card-img.card-logo {
    position: relative;
    left: 1rem;
    width: 140%;
  }
  .card-body .logo {
    width: 50px!important;
    position: absolute;
    right: 1rem;
    top: 1rem;
    opacity: .25;
    padding-right: 1rem;
  }
  .col-md-10 .card-body .logo {
      padding: 0;
  }
</style>

<!-- pages/courses.md -->
<div class="projects courses">
{%- if site.enable_course_categories and page.course_categories %}
<!-- Display courses with categories -->
  {%- for category in page.course_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.courses | where: "category", category -%}
  {%- assign sorted_courses = categorized_courses | sort: "importance" -%}

  <!-- Generate cards for each course -->
  <div class="container">
    {%- if forloop.first -%}
    {%- assign row_class = 'row' -%}
    {%- else -%}
    {%- assign row_class = 'row row-cols-2' -%}
    {%- endif -%}
    <div class="{{ row_class }}">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {% endfor %}

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
  {%- endif -%}
</div>
