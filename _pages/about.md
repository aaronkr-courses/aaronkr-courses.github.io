---
layout: about
title: About
permalink: /
subtitle: >
  <a href='https://portal.dju.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/dju-logo-2.png" /></a>
  <a href='https://www.dju.ac.kr'>대전대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://portal.ut.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/ut-logo.png" /></a>
  <a href='https://www.ut.ac.kr/'>교통대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://portal.jnue.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/jnue-logo.png" /></a>
  <a href='https://www.jnue.kr'>전주교육대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://my.hanbat.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/hanbat-logo.png" /></a>
  <a href='https://www.hanbat.ac.kr'>한밭대학교</a>

profile:
  align: right
  image: wro-profile.png
  image_circular: false # crops the image to make it circular
  address: >
    <p>aaronkr.trainer [at] gmail.com</p>

news: true # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

{%- include aboutAaron.html %}

## Courses

{% include courses_home.html %}

<!--
## GitHub Repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
-->
