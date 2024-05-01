---
layout: distill
title: Web Programming Application
subtitle: 웹프로그래밍응용
description: 259122 • 2024년 1학기 • 교통대학교
logo: ut-logo.png
img: assets/img/books/node-get-programming.jpg
importance: 4
category: 2024

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
  - section: 259122-1 (pm)
    time: 수 567 | Wed 1pm-4pm
    location: W18동 421호
    kakaotalk: https://open.kakao.com/o/gGtgeIbg
  - section: 259122-2 (am)
    time: 수 123 | Wed 9am-12pm
    location: W18동 421호
    kakaotalk: https://open.kakao.com/o/g2opgIbg

Main-Text:
  - text: "주교재"
    author: "조나단 웩슬러 저 / 김성준 역"
    title: >
      <strong>Node.js로 프로그래밍 시작하기</strong>
    publisher: "에이콘출판사 | 2020년 01월 31일"
    link: "http://www.yes24.com/Product/Goods/86429845"
    code:
    notes:
    image: books/node-get-programming.jpg

Supplementary:
  - text: "부교재"
    author: "조현영 저"
    title: >
      <strong>Node.js 교과서</strong> 기본기에 충실한 노드제이에스 18 입문서
    publisher: "길벗 | 2022년 12월 20일"
    link: "https://www.yes24.com/Product/Goods/116192535"
    code:
    notes:
    image: books/node-ko.jpg
---

## Schedule 강의일정

{% include_relative 2024/ut-node/schedule.md %}

<a class="btncv" href="#">Top</a>

---

## Overview 개요

Node.js는 Javascript로 웹 서버를 만들 수 있으며, npm을 통해 다양한 미리 만들어진 패키지를 사용할 수 있습니다. 이 수업은 책에 나열된 5개의 프로그래밍 프로젝트를 따르며, 수업이 끝난 후 최종 프로젝트를 수행하도록 합니다.

주제로는 웹 개발 프로세스, 보안, 데이터베이스 관리 (Mongoose), 사용자 계정 인증 등이 포함됩니다. 비동기 코드 디버깅, 데이터 모델 및 Javascript 모듈에 대해서도 배우게 됩니다.

Node.js is used to build web servers in Javascript, and there are numerous pre-built packages available through npm. This class follows 5 programming projects listed in the book and requires students to work on a final project at the end of the class.

Topics such as the web development process, security, database management (Mongoose), and user account authentication are covered. You will also learn about debugging asynchronous code, data models, and Javascript modules.

### Objectives / 수업 목표

학생들은 Node.js 및 Express를 사용하여 웹 서버 및 웹 사이트에서 CRUD 기능을 배우고, <del>채팅</del> 및 기타 상호 작용 기능을 구현하는 방법을 배우고, 국제 시대에 적합한 영어 표현을 배우게 됩니다.

이 수업은 2시간 간격의 강의 (중간에 휴식)로 제공되며, 제공된 스타터 코드를 사용하여 강사가 지도하는 연습 문제를 통해 학생들이 수업을 적용할 수 있도록 실습실 세션을 제공합니다.

이 수업은 다음과 같은 주제를 다룹니다.

- Node.js 애플리케이션 실행 및 Node.js 모듈 생성
- Node.js 및 Express.js에서 웹 서버 구축 및 라우팅 처리
- 데이터를 제공하고 MVC 패러다임에 연결하는 MongoDB
- Mongoose 스키마를 사용하여 CRUD (생성, 읽기, 수정, 삭제) 기능 처리
- 사용자 계정 생성 및 사용자 인증
- API 구축 및 API 보안 추가
- Socket.io를 사용한 채팅 기능 추가
- <del>프로덕션에서 코드 배포 및 관리</del>

Students will learn about CRUD functions in web servers and websites with Node.js and Express, learn to implement <del>chatting</del> and other interactive functions, and learn English expressions suitable for the international era.

The course will be delivered as a series of 2-hour lectures (with a break in the middle), followed by Practice Lab sessions where students will apply the lessons in a series of instructor-guided exercises using the provided starter code as part of the exercises.

The course will cover the following topics.

- Running Node.js applications and creating Node.js modules
- Building web servers in Node.js and Express.js and handling routing
- Connecting to MongoDB to serve data and the Model, View, Controller paradigm
- Handling CRUD (Create, Read, Update, Delete) functions with Mongoose schemas
- Creating user accounts and authenticating users with Passport.js
- Building an API and adding API security
- Adding chat functionality with Socket.io
- <del>Deploying and managing code in production</del>

### Course Structure / 수업 구조

- **Lectures:** Lectures will be held for 2 hours every Wednesday. 강의는 매주 수요일에 2시간 동안 진행됩니다.
- **Practice Time**: Students will be given the final hour of each lecture period to practice what was covered in the lecture. 강의 시간의 마지막 1시간 동안 학생들은 강의에서 다룬 내용을 실습할 수 있습니다.
- **Assignments:** Students will be required to turn in assignments in GitHub Classroom 학생들은 GitHub Classroom에서 과제를 제출해야 합니다.
- **Homework:** Whatever is not finished in the Practice Time will be assigned as homework. The assignments will be due the following Friday. 실습 시간에 완료되지 않은 것은 숙제로 지정됩니다. 과제는 다음 금요일까지 제출되어야 합니다.

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

{% include_relative 2024/ut-node/resources.md %}

<a class="btncv" href="#">Top</a>

---

## Instructor 강사소개

{% include aboutAaron.html %}

<a class="btncv" href="#">Top</a>
