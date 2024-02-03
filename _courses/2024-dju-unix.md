---
layout: distill
title: Unix System Control and Security
subtitle: 유닉스시스템관제 및 보안
description: 009833 • 2024년 1학기 • 대전대학교
logo: dju-logo.png
img: assets/img/books/unix.jpg
importance: 2
category: 2024

toc:
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
  - name: Resources 자료실
  - name: Instructor 강사소개
  - name: Schedule 강의일정

information:
  - section: 009833
    time: 화 1234 | Tues 9am-1pm
    location: 융합과학관 24호환
    kakaotalk:

Main-Text:
  - text: "주교재"
    author: "윤소정, 이종원 저"
    title: >
      <strong>유닉스 이론과 실습</strong> [3판]
    publisher: "한빛아카데미 | 2019년 11월 15일"
    link: "https://www.yes24.com/Product/Goods/82955368"
    code:
    notes:
    image: books/unix.jpg

Supplementary:
  - text: "부교재"
    author: "브라이언 워드 저 / 유하영, 전우영 공역"
    title: >
      슈퍼 사용자라면 반드시 알아야 할 <strong>리눅스 작동법</strong>
    publisher: "비제이퍼블릭(BJ퍼블릭) | 2015년 10월 29일"
    link: "https://www.yes24.com/Product/Goods/112208302"
    code:
    notes:
    image: books/linux-works-2.jpg

  - text: "부교재"
    author: "Brian Ward"
    title: >
      <strong>How Linux Works, 3rd Edition:</strong> What Every Superuser Should Know
    publisher: "Turnaround Publisher | 2020년 05월 26일"
    link: "https://www.yes24.com/Product/Goods/86535009"
    code:
    notes:
    image: books/linux-works-3.jpg
---

## Overview 개요

**다양한 예제와 단계별 학습으로 손쉽게 배우는 유닉스**

유닉스나 리눅스에 대한 기본 지식을 배우고자 하는 컴퓨터 관련 학과의 학부생을 대상으로 한다. 유닉스 입문에 꼭 필요한 기본 기능과 명령의 사용 방법을 예제와 함께 자세히 설명하기 때문에 유닉스 강의 교재로 적합하며, 독학용으로도 활용할 수 있다.

---

**슈퍼 사용자를 위한 리눅스**

일부 운영체제들과 달리 리눅스는 중요한 부분을 감추려고 하지 않는다. 컴퓨터에 대한 완전한 통제권을 여러분들에게 넘겨준다. 하지만 리눅스에 제대로 통달하려면 시스템이 부팅하는 방법과 네트워크가 동작하는 원리와 커널이 실제로 하는 작업 등 그 내부 구조를 파악해야 한다.

이 책은 수년간 베스트셀러의 영광을 고수한 브라이언 워드의 『HOW LINUX WORKS』를 전면적으로 개정한 2판으로, 운영체제의 내부 동작에 대해 알고 싶어하는 사람들에게 리눅스 내부 이면에 존재하는 개념들에 좀 더 접근하기 쉽게 도와주고 있다. 이 책을 통해 여러분은 실제로 수년에 걸쳐서 어렵게 체득해야만 얻을 수 있는 값진 정보들을 보다 쉽게 발견할 수 있을 것이다.

리눅스가 부팅하는 방법, 부트 로더를 시작으로 init 구현(systemd, Upstart, System V)에 이르는 부팅 관련 정보, 커널이 장치, 프로세스, 장치 드라이버를 관리하는 방법, 네트워킹, 인터페이스, 방화벽과 서버가 동작하는 방법, 개발 툴들의 동작 원리와 공유 라이브러리와의 연관성, 효과적인 셸 스크립트 작성 방법에 대해 배울 수 있다. 그 외에도 시스템 콜, 입력과 출력, 파일 시스템 등을 포함하여 사용자 공간 내부의 주요 시스템 작업들에 대해 검토하고, 커널에 대해 탐구할 것이다. 배경 지식, 이론, 현실적인 예제, 상세한 설명과 더불어 『리눅스 작동법』은 복잡한 여러 가지 문제들을 해결하고, 운영체제를 통제하는 데 필요한 모든 것을 가르쳐 줄 것이다.

**Easy to learn UNIX with various examples and step-by-step learning**

It is aimed at undergraduate students in computer-related departments who want to learn basic knowledge about Unix or Linux. It is suitable as a textbook for UNIX lectures and can also be used for self-study because it explains in detail how to use the basic functions and commands essential for introduction to UNIX, along with examples.

---

**Linux for Super Users**

Unlike some operating systems, Linux doesn't try to hide important parts. It gives you complete control over your computer. However, to truly master Linux, you need to understand its internal structure, including how the system boots, how the network works, and what the kernel actually does.

This book is a completely revised second edition of Brian Ward's 『HOW LINUX WORKS』, which has been a bestseller for many years. It provides people who want to know about the inner workings of the operating system with a closer look at the concepts that exist behind Linux. Helping is easy. Through this book, you will be able to more easily discover valuable information that can only be obtained through years of hard work.

How Linux boots, boot-related information starting from the boot loader to the init implementation (systemd, Upstart, System V), how the kernel manages devices, processes, and device drivers, how networking, interfaces, firewalls, and servers operate. You can learn about methods, operating principles of development tools, correlation with shared libraries, and how to write effective shell scripts. In addition, we will review major system operations within user space, including system calls, input and output, file system, etc., and explore the kernel. With background knowledge, theory, practical examples, and detailed explanations, How Linux Works will teach you everything you need to solve a variety of complex problems and control the operating system.

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

#### Grading 평가방법

- 출석 10%
- 중간고사 25%
- 기말고사 30%
- 과제 20%
- 퀴즈 10%
- 핵심역량 5%

{% include_relative common/policies.md %}

<a class="btncv" href="#">Top</a>

---

## Resources 자료실

{% include_relative 2024/dju-unix/resources.md %}

<a class="btncv" href="#">Top</a>

---

## Instructor 강사소개

{% include_relative common/aaron.md %}

<a class="btncv" href="#">Top</a>

---

## Schedule 강의일정

{% include_relative 2024/dju-unix/schedule.md %}

<a class="btncv" href="#">Top</a>
