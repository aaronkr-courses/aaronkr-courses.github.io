---
layout: distill
title: Secure (Web) Coding
subtitle: 시큐어코딩
description: 012744 • 2025년 1학기 • 대전대학교
logo: dju-logo-2.png
img: assets/img/books/secure-web.jpg
importance: 4
category: 2025-1
now: Yes

toc:
  - name: Schedule 강의일정
  - name: Overview 개요
  - name: Textbook 교재
  - name: Logistics 수업운영
    subsections:
      # if a section has subsections, you can add them as follows:
      # subsections:
      #   - name: Example Child Subsection 1
      #   - name: Example Child Subsection 2
      - name: Grading 평가방법
      - name: Assignments 과제
      - name: Midterm 중간고사
      - name: Final 기말고사
      - name: Project 프로젝트
  - name: Resources 자료실
  - name: Instructor 강사소개

information:
  - section: 012744
    time: 화 678 Tues 2pm - 5pm
    location: 융합과학관 408호
    kakaotalk:

Main-Text:
  - text: "주교재"
    author: "토쿠마루 히로시 저/양현, 김민호, 연구흠 역"
    title: >
      <strong>웹 애플리케이션 보안 완벽 가이드</strong> 체계적으로 배우는 안전한 웹 애플리케이션 제작 기법
    publisher: "위키북스 | 2019년 10월 04일"
    link: "https://www.yes24.com/Product/Goods/79380822"
    code:
    notes:
    image: books/secure-web.jpg

Supplementary:
  - text: "부교재"
    author: "로버트 시코드 저 / 이승준 역"
    title: >
      <strong>C & C++ 시큐어 코딩</strong>
    publisher: "에이콘출판사 | 2015년 01월 09일 | 원서 : Secure Coding in C and C++"
    link: "https://www.yes24.com/Product/Goods/15653270"
    code:
    notes:
    image: books/secure-c.jpg
---

## Schedule 강의일정

{% include_relative 2025/dju-sec/schedule.md %}

<a class="btncv" href="#">Top</a>

---

## Overview 개요

『웹 애플리케이션 보안 완벽 가이드』는 취약점을 최소화하기 위한 다양한 방법을 소개한다. 이 책에서는 PHP를 사용하지만 웹의 기본을 다루고 있어 다른 언어에서도 충분히 적용할 수 있는 내용을 다룬다. 4장까지는 PHP를 바탕으로 취약점을 소개하고, 취약점으로 발생할 수 있는 위협, 취약점을 없애기 위해 어떻게 개발해야 할지 예제 코드와 함께 상세하게 설명한다. 책에서 다루는 소스코드는 책과 함께 제공하는 가상 머신에도 포함돼 있으므로 책을 보면서 곧바로 실습을 진행할 수 있다. 5장 이후로는 개발 전 기획 단계에서 고려해야 할 기본적인 보안 기능과 직접 보안 진단을 하기 위한 방법들을 심도 있게 설명한다.

이 책은 웹 개발자뿐 아니라 보안 업계에 종사하는 웹 취약점 진단자에게도 유용한 내용이 수록돼 있어 진단 실무자에게도 유용할 것이다.

"Web Application Security: A Beginner's Guide" introduces various methods to minimize vulnerabilities. This book uses PHP, but covers the basics of the web, so the content can be applied to other languages. Up to Chapter 4, vulnerabilities are introduced based on PHP, threats that can arise from vulnerabilities, and how to develop to eliminate vulnerabilities are explained in detail with example code. The source code covered in the book is also included in the virtual machine provided with the book, so you can practice immediately while reading the book. From Chapter 5 onwards, basic security features to consider in the planning stage of development and methods for direct security diagnosis are explained in depth.

This book contains useful content for web developers as well as web vulnerability diagnosticians working in the security industry, so it will be useful for diagnosticians in practice.

## Textbook 교재

{% include textbooks.html %}

<a class="btncv" href="#">Top</a>

---

### Policies 규정

{% include_relative common/policies.md %}

<a class="btncv" href="#">Top</a>

---

## Instructor 강사소개

{% include aboutAaron.html %}

<a class="btncv" href="#">Top</a>
