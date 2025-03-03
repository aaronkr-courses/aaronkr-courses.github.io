---
layout: distill
title: Imaging-based medical device manufacturing
subtitle: 영상기반의료기기제조
description: BIO025 • 2025년 1학기 • 교통대학교
logo: ut-logo.png
img: assets/img/books/bio-images.jpg
importance: 6
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
  - name: Resources 자료실
  - name: Instructor 강사소개

information:
  - section: BIO025(1)
    time: 목 123 | Thur 9am-12pm
    location: W18동 102호
    kakaotalk:

Main-Text:
  - text: "주교재"
    author: "제오프 도허티 저 / 김경섭, 이문호, 정성환, 정회경 공저"
    title: >
      <strong>디지털 의료영상처리</strong> 기초부터 분석, 응용까지
    publisher: "홍릉과학출판사 | 2016년 12월 05일"
    link: "https://www.yes24.com/Product/Goods/95858463"
    code:
    notes:
    image: books/bio-images.jpg

Supplementary:
  - text: "부교재"
    author: "윤명성 등저"
    title: >
      <strong>의료영상을 이용한 3D 프린팅</strong>
    publisher: "대학서림 | 2020년 12월 21일"
    link: "https://www.yes24.com/Product/Goods/98570116"
    code:
    notes:
    image: books/3d-bio-printing.jpg

  - text: "부교재"
    author: "임창환, 김선정, 김안모, 김인영, 이병훈, 장동표, 최성용 공저"
    title: >
      <strong>교실 밖에서 듣는 바이오메디컬공학</strong> 한양대 공대 교수들이 말하는 미래 의공학 기술
    publisher: "MID 엠아이디 | 2021년 12월 17일"
    link: "https://www.yes24.com/Product/Goods/105641507"
    code:
    notes:
    image: books/bio-medical.jpg

  - text: "부교재"
    author: "Udacity Instructors"
    title: >
      <strong>AI for Healthcare</strong>
    publisher: "Udacity | 2020년 5월 12일"
    link: "https://www.udacity.com/course/ai-for-healthcare-nanodegree--nd320"
    code:
    notes:
    image: books/ai-for-healthcare.jpg
---

## Schedule 강의일정

{% include_relative 2025/ut-imd/schedule.md %}

<a class="btncv" href="#">Top</a>

---

## Overview 개요

<img style="float: left; width: 150px; margin: 0 10px 10px 0;" src="/assets/img/books/bio-images.jpg" />

**교과목 개요**

본 과목은 의료 3D프린팅 실무 적용을 위해 의료영상 기초 이론과 주요 DICOM 정보를 활용한 의료영상 기반 의료기기 제조 방법에 대해 학습하는 과목이다. 구체적으로는 3D 모델러의 활용, 골정정복 등 실제 의료정보 샘플을 활용한 모델링 실습, DICOM 데이터 해석 및 이해, 뼈 조각 분할, STL 변환 및 Post-Processing에 대하여 학습한다.

1. **교과목 교육목표 1:** Basic medical image processing with DICOMS / DICOMS를 사용한 기본 의료 영상 처리
2. **교과목 교육목표 2:** Medical image processing and segmentation / 의료 영상 처리 및 분할
3. **교과목 교육목표 3:** Applied Machine Learning for Medical Images / 의료 영상을 위한 응용 기계 학습

**전공역량**

- 바이오메디컬 SW개발능력(10%)
- 바이오메디컬 HW개발능력(30%)
- 바이오메디컬 이론 능력(10%)
- 바이오메디컬 실무능력(20%)
- 협력적 문제해결력(10%)
- 창의적 문제해결력(20%)

**역량별학습목표**

1. **[바이오메디컬 SW개발능력]** 바이오메디컬 관련 주요한 소프트웨어를 효율적으로 설계, 개발 및 평가할 수 있다.
2. **[바이오메디컬 HW개발능력]** 바이오메디컬 관련 주요한 하드웨어 시스템을 효율적으로 설계 및 개발할 수 있다.
3. **[바이오메디컬 이론 능력]** 바이오메디컬 관련 다양한 이론에 대해 이해하고 분석하여 새로운 연구 분야에 응용할 수 있다.
4. **[바이오메디컬 실무능력]** 바이오메디컬 관련 지식을 효율적으로 활용하여 실무에 적용할 수 있다.
5. **[협력적 문제해결력]** 주어진 문제에 대해 협업자와 함께 지식, 기능, 노력을 공유하고 해결책에 도달할 수 있다.
6. **[창의적 문제해결력]** 주어진 문제에 대해 필요한 여러 기술을 창의적으로 적용할 수 있다.

---

<img style="float: left; width: 150px; margin: 0 10px 10px 0;" src="/assets/img/books/bio-medical.jpg" />

<strong>'전자약'에서부터 '뇌-컴퓨터 인터페이스'까지<br>
상상만 해 온 미래가 이미 다가와 있다면?<br>
질병 치료에서부터 인간 증강까지, 바이오메디컬공학이 떠오르고 있다</strong>

세계 자동차 시장을 선도하고 있는 테슬라의 CEO '일론 머스크'가 관심을 가지고 있는 또 하나의 분야가 있는데, 그것은 바로 '뇌'다. 현재는 뇌전증과 같은 질병을 뇌에 전극을 심어 치료하는 기술을 연구하고 있지만, 궁극적으로는 우리 머릿속 생각을 컴퓨터에 업로드할 수 있는 단계까지 발전시키는 것을 목표로 하고 있다고 한다. 그리고 그는 진짜로 원숭이의 뇌에 전극을 심어 생각만으로 컴퓨터 게임을 하게 함으로써 그 가능성을 보여주었다. 먼 미래의 이야기인 줄만 알았던 현실이 생각보다 가까이 와 있는 것이다.

이런 놀라운 실험이 성공하기까지는 흔히 '의공학'으로도 불리는 '바이오메디컬공학' 기술의 발전이 한 몫을 톡톡히 했다. 100년 전까지만 해도 우리는 X-레이 기술조차 없어 우리 몸속의 모습을 들여다보고 아픈 곳을 찾아내는 것이 어려운 시대였다. 하지만 바이오메디컬공학 기술의 발전 덕분에 이제는 수초 단위의 심장의 움직임을 영상으로 찍어낼 수 있게 되었고, 인공와우 같은 인공장기가 상용화되어 많은 사람들이 새 삶을 얻게 되었다. 뿐만 아니라 바이오메디컬공학은 먹지 않고도 질병을 치료하는 '전자약', '인공지능'이 판독하는 CT 영상처럼 우리가 상상만 했던 현실을 이미 실현시키고 있다.

그리고 이제 바이오메디컬공학은 4차 산업혁명의 대흐름과 함께 파킨슨병, 치매와 같이 인류가 극복하지 못한 질병을 정복하기 위해, 그리고 '로봇 팔'과 같은 첨단 의료기기를 개발하기 위해, 궁극적으로는 '뇌-컴퓨터 인터페이스' 기술을 통한 인간 증강을 위해 쉼 없이 달려나가고 있다. 바야흐로 미래 의료서비스와 인류의 복지를 책임질, '미래 핵심산업기술'이 된 것이다.

<strong>From 'electronic medicine' to 'brain-computer interface'<br>
What if the future you've only imagined has already arrived?<br>
From disease treatment to human augmentation, biomedical engineering is on the rise.</strong>

There is another area that Elon Musk, CEO of Tesla, which is leading the global automobile market, is interested in, and that is the brain. Currently, they are researching technology to treat diseases such as epilepsy by implanting electrodes in the brain, but the ultimate goal is to develop the technology to the point where we can upload the thoughts in our heads to a computer. And he actually showed the possibility by implanting electrodes in the brains of monkeys and allowing them to play computer games using only their thoughts. The reality that we thought was a story of the distant future is closer than we think.

The development of 'biomedical engineering' technology, commonly referred to as 'biomedical engineering', played a significant role in the success of this amazing experiment. Until 100 years ago, we did not even have X-ray technology, so it was difficult to look inside our bodies and find painful areas. However, thanks to the development of biomedical engineering technology, it is now possible to image the heart's movements in seconds, and artificial organs such as cochlear implants have been commercialized, giving many people a new life. In addition, biomedical engineering is already making reality that we only imagined, such as 'electronic medicine' that cures diseases without eating and CT images read by 'artificial intelligence'.

And now, with the great trend of the 4th Industrial Revolution, biomedical engineering is ultimately used to conquer diseases that humanity has not been able to overcome, such as Parkinson's disease and dementia, and to develop cutting-edge medical devices such as 'robotic arms'. We are constantly working towards human augmentation through 'brain-computer interface' technology. It has now become a 'future core industrial technology' that will be responsible for future medical services and human welfare.

## Textbook 교재

{% include textbooks.html %}

<a class="btncv" href="#">Top</a>

---

## Policies 규정

### Grading Curve 성적평가

- 출석: **10%**
- 중간고사: **30%**
- 기말고사: **30%**
- 과제 (연습문제, 실습코드, 등): **30%**

{% include_relative common/policies.md %}

<a class="btncv" href="#">Top</a>

---

## Instructor 강사소개

{% include aboutAaron.html %}

<a class="btncv" href="#">Top</a>
