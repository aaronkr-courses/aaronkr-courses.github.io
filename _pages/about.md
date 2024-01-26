---
layout: about
title: About
permalink: /
subtitle: >
  <a href='https://portal.dju.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/dju-logo.png" /></a>
  <a href='https://www.dju.ac.kr'>대전대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://portal.ut.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/ut-logo.jpg" /></a>
  <a href='https://www.ut.ac.kr/'>교통대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://portal.jnue.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/jnue-logo.jpg" /></a>
  <a href='https://www.jnue.kr'>전주교육대학교</a>
  &nbsp;&bull;&nbsp;
  <a href='https://my.hanbat.ac.kr'><img style="width: 20px; border-radius: 50%; margin-right: 2px;" src="/assets/img/hanbat-logo.jpg" /></a>
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

Aaron Snowberger is a PhD candidate majoring in Information and Communications Engineering at Hanbat National University in Korea. He also holds degrees in Computer Science and Media Design. He has taught high school technology courses for over 6 years, and has built dozens of web applications with Node and Express. His current research interests include computer vision, natural language processing, image processing, signal processing, and machine learning.

Aaron Snowberger는 한밭대학교 정보통신공학과 박사과정 수료했으며, 컴퓨터 공학 및 미디어 디자인 학위를 보유하고 있습니다. 그는 6년 이상의 고등학교 기술 교육 과정을 가르치고 있으며, Node 및 Express를 사용하여 수십 개의 웹 애플리케이션을 구축했습니다. 현재 연구 관심사는 컴퓨터 비전, 자연어 처리, 영상 처리, 신호 처리 및 기계 학습입니다.

## Courses

{% include courses.html %}

## GitHub Repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
