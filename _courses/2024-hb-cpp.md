---
layout: distill
title: C++ Programming
description: INFO2104 • 2023년 2학기 • 한밭대학교
logo: hanbat-logo.jpg
img: assets/img/books/cpp-fast.jpg
importance: 6
category: 2024
giscus_comments: true

toc:
  - name: Lectures
  - name: Logistics
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Grading
  - name: Resources
  - name: Midterm
  - name: Final
  - name: Project

_styles: >
  html {
    scroll-behavior: smooth;
  }
  d-byline .authors-affiliations {
    grid-column-end: span 4;
    grid-template-columns: repeat(4, 1fr);
  }
  d-byline a {
    color: initial;
  }
  .distill .logo {
    position: absolute;
    max-width: 140px;
    top: 90px;
    left: 50%;
    transform: translateX(calc(-50% - 460px));
  }

information:
  - section: INFO2104
    time: 금 1234 | Fri 9am-1pm
    location: N4동 316호
    kakaotalk: https://open.kakao.com/o/g7tnYPDf
---

시간이 지나도 변하지 않고 컴퓨팅 세계의 기반을 강화하는 데 도움이 되는 전문적이고 안전하며 이식 가능한 C 코드를 작성하는 방법을 알아본다. C와 C 표준 라이브러리를 사용하는 모범 사례와 사용 중에 발생할 수 있는 일반적인 오류 등을 배운다. C 프로그램을 디버깅하고 테스트하고 분석하는 방법도 배운다.

- C 프로그램에서 정의되지 않은 동작을 식별하고 처리할 수 있다.
- 정수 및 부동 소수점 값의 범위 및 표현을 이해할 수 있다.
- 동적 메모리 할당이 작동하는 방법과 비표준 함수를 사용할 수 있다.
- 문자 인코딩 및 형식을 사용할 수 있다.
- C 표준 스트림 및 POSIX 파일 설명자를 사용해 터미널과 파일 시스템에서 I/O를 수행할 수 있다.
- C 컴파일러의 번환 단계와 전처리기의 역할을 이해할 수 있다.
- C 프로그램을 테스트하고 디버그하며 분석할 수 있다.

Students will learn how to write professional, safe, and portable C code that doesn't change over time and helps strengthen the foundations of the world of computing. Learn best practices for using C and the C standard library, as well as common errors you may encounter while using it. You will also learn how to debug, test, and analyze C programs.

- Able to identify and handle undefined behavior in C programs.
- Able to understand the range and representation of integer and floating point values.
- Able to understand how dynamic memory allocation works and non-standard functions can be used.
- Able to understand how character encoding and format can be used.
- Able to perform I/O on terminals and file systems using C standard streams and POSIX file descriptors.
- Able to understand the translation steps of the C compiler and the role of the preprocessor.
- Able to test, debug, and analyze C programs.

---

## Logistics

### Course Information / 과정정보

시간이 지나도 변하지 않고 컴퓨팅 세계의 기반을 강화하는 데 도움이 되는 전문적이고 안전하며 이식 가능한 C 코드를 작성하는 방법을 알아본다.

- **프로그래밍(50%)** 직무에 필요한 문제 또는 시스템을 프로그래밍 언어로 구현할 수 있는 역량
- **전공기초(40%)** 정보통신전공을 수행할 수 있는 공학적 기초개념, 수학, 물리학 등의 기본역량
- **자기주도문제해결(10%)** 프로젝트, 캡스톤디자인 및 지식재산권, 공학경영, 논문작성 등 전공분야에 밀접하게 연관된 비전공분야의 역량

Students will learn how to write professional, safe, and portable C code that doesn't change over time and helps strengthen the foundations of the world of computing.

- **Programming (50%)** Ability to implement problems or systems required for the job in a programming language
- **Major foundations (40%)** Basic competencies such as basic engineering concepts, mathematics, physics, etc.
- **Self-directed problem solving (10%)** Competence in non-major fields closely related to major fields, such as project, capstone design and intellectual property rights, engineering management, and thesis writing

[Top](#)

---

### Grading

The class requirements include brief reading summaries, (at least) 3 projects, and 2 tests.
The grading breakdown is as follows:

- Attendance (& Participation) (10%)
- Assignments & Practice Exercises (30%)
- Projects (10%)
- Midterm Test (20%)
- Final Test (30%)

---

#### Attendance (& Participation) (10%)

We appreciate everyone being actively involved in the class!
Students who will succeed are those who are actively involved:

- **Active participation:** What does "active participation" look like? It means that you are engaged in the class, asking questions, answering questions, and participating in discussions.
- **Disinterest:** Students who are not interested in the class do not study, do not participate, and do not do well on the tests. They will get a low grade.

#### Assignments & Practice Exercises (30%)

There will be various practice exercises we will do together in class. There will also be some homework assignments for you to do on your own at home and submit online. We may also have some in-class quizzes to be submitted online.
These assignments may contain material that has been covered by published papers and webpages.

#### Projects (10%)

There will be (at least) three projects in this class (HTML, CSS, JavaScript). You will be required to submit a URL with your code or results.

#### Tests (50%)

There will be two tests in this class: a midterm and a final. Both tests may include both written and programming questions. The written questions will be similar to the homework questions, and the programming questions will be similar to the programming assignments. Written questions will be closed-book, and programming questions will be open-book (i.e., you can use any resources you want, including the Internet).

- **Midterm:** 20%
- **Final:** 30%

[Top](#)

---

#### Collaboration Policy

**Homework assignments must be done individually:** each student must hand in their own answers.
However, it is acceptable to collaborate when figuring out answers and to help each other solve the problems.
We will be assuming that you will be taking the responsibility to make sure you personally understand the solution arising from such collaboration.
You also must indicate on each homework with whom you have collaborated.

#### Late Policy

You will be allowed **6 total homework late days** without penalty for the entire semester.
You may be late by up to 6 days on any homework assignment.
Once those days are used, you will be penalized according to the following policy:

- Homework is worth full credit at the due time on the due date.
- The allowed late days are counted by day (i.e., each new late day starts at 12:00 am ET).
- Once the allowed late days are exceeded, the penalty is 50% per late day conted by hour (i.e., 2.0833% per hour).
- The homework is worth zero credit 48 hours after exceeding the late day limit.

You must turn in 75% of the practices and assignments, even if for zero credit, in order to pass the course.

#### Regrade Policy

If you feel that we have made a mistake in grading your homework, please submit a regrading request via email and I will consider your request.
Please note that regrading of a homework may cause your grade to go either up or down.

[Top](#)

---

## Lectures

<iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fcrk3osm1p6clk6rnbisupv1kk%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

[Top](#)

---

## Resources

### Computer Software / 소프트웨어

The software we will be using is listed below. 수업에서 사용할 소프트웨어가 다음과 같다.

- [Visual Studio Community](https://visualstudio.microsoft.com/free-developer-offers/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Code::Blocks (MinGW)](http://www.codeblocks.org/downloads)

### Textbook Resources / 교재자료

**Do it! 실습 파일과 PDF 전자책**

- [No Starch 책 사이트 (영어)](https://nostarch.com/effective_c)
- [Acorn Pub 책 사이트 (한글)​](http://acornpub.co.kr/book/effective-c)

### Tutorials / 튜토리얼

- [Learn-C.org](https://www.learn-c.org/)

[Top](#)
