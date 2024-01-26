---
layout: page
permalink: /courses/
title: courses
description: Materials for courses you taught. Replace this text with your description.
nav: false
nav_order: 2
display_categories: [2023, 2024]
horizontal: false
---

<!-- pages/courses.md -->
<!-- Display courses without categories -->

{%- assign sorted_courses = site.courses | sort: "importance" -%}

  <!-- Generate cards for each course -->

{% if page.horizontal -%}

  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for course in sorted_courses -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
</div>
