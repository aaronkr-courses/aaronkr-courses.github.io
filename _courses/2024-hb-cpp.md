---
layout: distill
title: C++ Programming
description: INFO2104 • 2023년 2학기 • 한밭대학교
logo: hanbat-logo.jpg
img: assets/img/books/cpp-fast.jpg
importance: 6
category: 2024
giscus_comments: true

authors:
  - name: Albert Einstein
    url: "https://en.wikipedia.org/wiki/Albert_Einstein"
    affiliations:
      name: IAS, Princeton
  - name: Boris Podolsky
    url: "https://en.wikipedia.org/wiki/Boris_Podolsky"
    affiliations:
      name: IAS, Princeton
  - name: Nathan Rosen
    url: "https://en.wikipedia.org/wiki/Nathan_Rosen"
    affiliations:
      name: IAS, Princeton

bibliography: 2018-12-22-distill.bib

toc:
  - name: Logistics
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Lectures
  - name: Resources
  - name: Midterm
  - name: Final
  - name: Project

_styles: >
  .distill .logo {
      position: absolute;
      max-width: 100px;
      top: 115px;
      left: 50%;
      transform: translateX(calc(-50% - 440px));
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

---

Students will learn how to write professional, safe, and portable C code that doesn't change over time and helps strengthen the foundations of the world of computing. Learn best practices for using C and the C standard library, as well as common errors you may encounter while using it. You will also learn how to debug, test, and analyze C programs.

- Able to identify and handle undefined behavior in C programs.
- Able to understand the range and representation of integer and floating point values.
- Able to understand how dynamic memory allocation works and non-standard functions can be used.
- Able to understand how character encoding and format can be used.
- Able to perform I/O on terminals and file systems using C standard streams and POSIX file descriptors.
- Able to understand the translation steps of the C compiler and the role of the preprocessor.
- Able to test, debug, and analyze C programs.

---

## Calendar

<iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fcrk3osm1p6clk6rnbisupv1kk%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.html path="assets/img/6.jpg" title="example image"
    class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.html path="assets/img/11.jpg" title="example image"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
