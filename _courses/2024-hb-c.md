---
layout: distill
title: Advanced C Programming
subtitle: 고급 C 프로그래밍
description: INFO2104 • 2024년 2학기 • 한밭대학교
logo: hanbat-logo.png
img: assets/img/books/do-it-c.jpg
importance: 6
category: 2024-2

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
  - section: INFO2104
    time: 금 1234 | Fri 9am-1pm
    location: N4동 316호
    kakaotalk: https://open.kakao.com/o/gDT4jIbg

Main-Text:
  - text: "주교재"
    author: "김성엽 저"
    title: >
      <strong>Do it! C 언어 입문</strong>
    publisher: "이지스퍼블리싱 | 2017년 01월 10일"
    link: "https://www.yes24.com/Product/Goods/35094862"
    code:
    notes:
    image: books/do-it-c.jpg

Supplementary:
  - text: "부교재"
    author: "김은철 저"
    title: >
      <strong>초보자를 위한 C 언어 300제</strong>
    publisher: "정보문화사 | 2017년 02월 06일"
    link: "https://www.yes24.com/Product/Goods/35552821"
    code:
    notes:
    image: books/c-300.jpg

  - text: "부교재"
    author: "강병익 저"
    title: >
      <strong>실무자를 위한 C 언어 100제</strong>
    publisher: "정보문화사 | 2023년 03월 30일"
    link: "https://www.yes24.com/Product/Goods/118178470"
    code:
    notes:
    image: books/c-adv-100.jpg
  
  - text: "부교재"
    author: "로버트 C. 시코드 저/박정재, 장기식, 장준원 역"
    title: >
      <strong>Effective C: 전문적인 C 프로그래밍 입문서</strong>
    publisher: "에이콘출판사 | 2023년 06월 30일"
    link: "https://www.yes24.com/Product/Goods/119423118"
    code:
    notes:
    image: books/effective-c.jpg
---

## Schedule 강의일정

{% include_relative 2024/hb-c/schedule.md %}

<a class="btncv" href="#">Top</a>

---

## Overview 개요

<strong>라이브러리 중심으로 배우는 C++ 핵심<br>
Core C++ learning with a focus on libraries</strong>

C++는 기존 C에서 좀 더 발전한 프로그래밍 언어입니다. 하지만 C를 처음 배웠던 사람은 자칫 C++에서 제시하는 프로그래밍 방법이 아닌 C 프로그래밍을 하던 습관대로 프로그램을 만들려고 할지도 모릅니다.

이 책은 16개 장과 부록 2개를 통해 초중급 프로그래머가 C++를 C++답게 코딩하는 방법을 제대로 알려줍니다. C++ 표준 라이브러리를 이용해 함수, 데이터 구조, 클래스, 상속 등 객체지향 프로그래밍 개념으로 C++ 프로그래밍을 하는 방법을 순서대로 소개합니다.

또한 특정 문제를 해결하는 프로그램을 작성하는 과정 각각에 도움이 되는 C++ 및 표준 라이브러리의 기능을 소개하는 독특한 방식을 취합니다. 단순한 문법 파악이 아닌 프로그래밍하는 원리를 알 수 있는 학습 구조로 이루어져 있습니다. 프로그래밍 언어를 한 번이라도 학습한 적 있는 분, STL을 사용하여 C++ 프로그래밍의 속도를 높이고 싶은 분이라면 이 책으로 C++ 프로그래밍을 제대로 배우기 바랍니다.

1. 핵심 개념을 적용하면서 발전시키는 학생 성적 관리 프로그램 만들기
2. 핵심 정리로 배운 내용 다지기
3. 연습문제를 풀면서 다지는 응용 기술 습득

C++ is a programming language that is more advanced than existing C. However, people who learned C for the first time may try to create programs according to their C programming habits rather than the programming method suggested by C++.

Through 16 chapters and two appendices, this book teaches beginner and intermediate programmers how to code C++ like C++. We sequentially introduce how to do C++ programming using object-oriented programming concepts such as functions, data structures, classes, and inheritance using the C++ standard library.

It also takes a unique approach to introducing features of C++ and the standard library, each of which helps in the process of writing a program that solves a specific problem. It has a learning structure that allows you to understand programming principles rather than simply understanding grammar. If you have ever learned a programming language or want to speed up C++ programming using STL, I recommend learning C++ programming properly with this book.

1. Create a student grade management program that develops while applying core concepts
2. Consolidate what you have learned by organizing key points
3. Acquire application skills by solving practice problems

## Textbook 교재

{% include textbooks.html %}

<a class="btncv" href="#">Top</a>

---

## Logistics 수업운영

### Course Information / 과정정보

시간이 지나도 변하지 않고 컴퓨팅 세계의 기반을 강화하는 데 도움이 되는 전문적이고 안전하며 이식 가능한 C 코드를 작성하는 방법을 알아본다.

- **프로그래밍(50%)** 직무에 필요한 문제 또는 시스템을 프로그래밍 언어로 구현할 수 있는 역량
- **전공기초(40%)** 정보통신전공을 수행할 수 있는 공학적 기초개념, 수학, 물리학 등의 기본역량
- **자기주도문제해결(10%)** 프로젝트, 캡스톤디자인 및 지식재산권, 공학경영, 논문작성 등 전공분야에 밀접하게 연관된 비전공분야의 역량

Students will learn how to write professional, safe, and portable C code that doesn't change over time and helps strengthen the foundations of the world of computing.

- **Programming (50%)** Ability to implement problems or systems required for the job in a programming language
- **Major foundations (40%)** Basic competencies such as basic engineering concepts, mathematics, physics, etc.
- **Self-directed problem solving (10%)** Competence in non-major fields closely related to major fields, such as project, capstone design and intellectual property rights, engineering management, and thesis writing

<a class="btncv" href="#">Top</a>

---

### Policies 규정

{% include_relative common/policies.md %}

<a class="btncv" href="#">Top</a>

---

## Resources 자료실

{% include_relative 2024/hb-cpp/resources.md %}

<a class="btncv" href="#">Top</a>

---

## Instructor 강사소개

{% include aboutAaron.html %}

<a class="btncv" href="#">Top</a>
