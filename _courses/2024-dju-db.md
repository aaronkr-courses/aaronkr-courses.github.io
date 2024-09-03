---
layout: distill
title: Database Security
subtitle: 데이터베이스 보안
description: 011780 • 2024년 2학기 • 대전대학교
logo: dju-logo-2.png
img: assets/img/books/sql-nosql.jpg
importance: 4
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
  - section: 011780
    time: 화 234 Tues 10am - 1pm
    location: 융합과학관 408호
    kakaotalk: https://open.kakao.com/o/ghQkqGMg

Main-Text:
  - text: "주교재"
    author: "박성진 저"
    title: >
      <strong>SQL과 NoSQL 기반의 데이터베이스 입문</strong>
    publisher: "생능출판사 | 2023년 02월 24일"
    link: "https://www.yes24.com/Product/Goods/117529483"
    code:
    notes:
    image: books/sql-nosql.jpg

Supplementary:
  - text: "부교재"
    author: "앤서니 드바로스 저/임소정, 강민혁 역"
    title: >
      <strong>실용 SQL: PostgreSQL로 시작하는 데이터 스토리텔링 가이드북</strong>
    publisher: "영진닷컴 | 2023년 01월 30일"
    link: "https://www.yes24.com/Product/Goods/116860700"
    code:
    notes:
    image: books/sql-text.jpg
---

## Schedule 강의일정

{% include_relative 2024/dju-db/schedule.md %}

<a class="btncv" href="#">Top</a>

---

## Overview 개요

PostgreSQL은 2022년 스택오버플로 설문조사를 기준으로 현업 개발자가 가장 많이 사용하는 데이터베이스가 되었습니다. ‘세상에서 가장 앞선 오픈소스 관계형 데이터베이스’라는 소개답게 표준 SQL의 지원과 뛰어난 자체 기능으로 개발자들의 선택을 받았죠. 이 책은 ‘가장 앞선 데이터베이스’인 PostgreSQL을 사용해 데이터를 관리하고 분석해 여기서 숨겨진 이야기를 찾는 방법을 알려 줍니다. 이 책은 ‘PostgreSQL로 시작하는 데이터 스토리텔링 가이드북’이라는 부제처럼 데이터를 더 효율적으로 정리하고 분석하려는 모두에게 도움이 됩니다.

- 실제 데이터로 데이터베이스 및 테이블 생성
- 데이터 집계, 정렬, 필터링을 통한 패턴 탐색
- 데이터 안에 있는 오류 식별 및 수정
- PostGIS를 활용한 공간 데이터 분석
- 기본 연산 및 고급 통계 함수 사용
- 고급 쿼리 생성 및 작업 자동화

PostgreSQL has become the most used database by business developers, according to a 2022 Stack Overflow survey. True to its introduction as ‘the world’s most advanced open-source relational database,’ it was chosen by developers for its standard SQL support and outstanding features. This book tells you how to manage and analyze data using PostgreSQL, the ‘most advanced database’, to find the hidden story here. This book is helpful for anyone who wants to organize and analyze data more efficiently, as the subtitle ‘Data Storytelling Guidebook Begins with PostgreSQL’.

- Create databases and tables with real data
- Exploring patterns through data aggregation, sorting, and filtering
- Identify and correct errors in data
- Spatial data analysis using PostGIS
- Use of basic arithmetic and advanced statistical functions
- Create advanced queries and automate tasks

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
