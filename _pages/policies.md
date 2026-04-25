---
layout: default
title: Academic Policies
permalink: /policies/
---

<style>
.pol-section{padding:44px 0 0}
.policy-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(262px,1fr));gap:14px;margin-bottom:52px}
a.pol-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;text-decoration:none;color:inherit;position:relative;overflow:hidden;transition:border-color .2s,transform .18s,box-shadow .2s}
a.pol-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent3));opacity:.55;transition:opacity .2s}
a.pol-card:hover::before{opacity:1}
a.pol-card:hover{border-color:#3a3a5a;transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.4)}
.pol-card-body{display:flex;flex-direction:column;gap:8px;padding:18px;flex:1;min-width:0}
.pol-code{font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:var(--accent3);letter-spacing:.08em;padding-right:56px}
.pol-card-title{font-size:.9rem;font-weight:500;color:var(--text);line-height:1.35}
.pol-excerpt{position:relative;max-height:82px;overflow:hidden;font-size:.78rem;color:var(--sub);line-height:1.6;flex:1}
.pol-excerpt::after{content:'';position:absolute;bottom:0;left:0;right:0;height:36px;background:linear-gradient(transparent,var(--surface));pointer-events:none}
[data-theme=light] .pol-excerpt::after{background:linear-gradient(transparent,#fff)}
.read-more{display:inline-block;margin-top:8px;font-family:'IBM Plex Mono',monospace;font-size:.67rem;color:var(--accent3);letter-spacing:.04em;pointer-events:none;transition:letter-spacing .2s}
a.pol-card:hover .read-more{letter-spacing:.08em}
.pol-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:4px}
.pol-tag{font-family:'IBM Plex Mono',monospace;font-size:.62rem;padding:2px 8px;border-radius:3px;background:var(--tag-bg);border:1px solid var(--border);color:var(--muted)}
.pol-tag.core{color:var(--accent3);border-color:rgba(109,204,221,.25)}
.pol-tag.ai-p{color:var(--accent);border-color:rgba(155,101,255,.28)}
.pol-tag.assess{color:var(--accent2);border-color:rgba(126,184,247,.25)}
.pol-tag.conduct{color:var(--warn);border-color:rgba(251,191,36,.22)}
.pol-card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:4px}
.pol-updated{font-family:'IBM Plex Mono',monospace;font-size:.62rem;color:var(--muted)}
.pol-arrow{font-size:.75rem;color:var(--muted);opacity:0;transition:opacity .18s,transform .18s}
a.pol-card:hover .pol-arrow{opacity:1;transform:translateX(3px)}
.list-section{padding:0 0 52px}
.pol-list{list-style:none}
a.pol-list-item{display:flex;align-items:baseline;gap:16px;padding:14px 0;border-bottom:1px solid var(--border);text-decoration:none;color:inherit;transition:background .15s}
a.pol-list-item:last-child{border-bottom:none}
a.pol-list-item:hover{background:var(--surface)}
.pl-num{font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:var(--muted);width:28px;flex-shrink:0}
.pl-content{flex:1;min-width:0}
.pl-title{font-size:.92rem;font-weight:500;color:var(--text);line-height:1.35}
.pl-desc{font-size:.78rem;color:var(--muted);margin-top:3px;line-height:1.5}
.pl-meta{display:flex;gap:10px;flex-shrink:0;align-items:center}
.pl-date{font-family:'IBM Plex Mono',monospace;font-size:.62rem;color:var(--muted);white-space:nowrap}
.pl-arrow{font-size:.75rem;color:var(--muted);opacity:0;transition:opacity .15s,transform .15s}
a.pol-list-item:hover .pl-arrow{opacity:1;transform:translateX(3px)}
.faq-section{padding:0 0 64px}
.faq-list{list-style:none}
.faq-item{border-bottom:1px solid var(--border)}
.faq-item:first-child{border-top:1px solid var(--border)}
.faq-q{display:flex;align-items:center;justify-content:space-between;padding:18px 0;cursor:pointer;background:none;border:none;width:100%;text-align:left;font-family:'Playfair Display','DM Serif Display',serif;font-size:1.05rem;font-weight:700;color:var(--text);transition:color .2s;gap:16px;line-height:1.3}
.faq-q:hover,.faq-item.open .faq-q{color:var(--accent3)}
.faq-chevron{font-size:.65rem;color:var(--muted);transition:transform .25s;flex-shrink:0;font-family:'IBM Plex Mono',monospace}
.faq-item.open .faq-chevron{transform:rotate(180deg)}
.faq-a{display:none;padding:0 0 18px;font-size:.88rem;color:var(--sub);line-height:1.8;max-width:640px}
.faq-a p+p{margin-top:10px}
.faq-item.open .faq-a{display:block}
@media(max-width:700px){.policy-grid{grid-template-columns:1fr}.pl-desc{display:none}}
</style>

<div class="wrap">
<header class="page-header">
  <p class="eyebrow animate d1">
    <span class="lang-en">Course Policies &amp; Expectations</span>
    <span class="lang-ko">수업 규정 및 기대</span>
  </p>
  <h1 class="animate d2">Academic<br><em>Policies</em></h1>
  <p class="hero-desc animate d3">
    <span class="lang-en">These policies apply to all courses unless the specific course syllabus states otherwise. Please read carefully before the semester begins.</span>
    <span class="lang-ko">특정 강좌 강의계획서에 달리 명시된 경우를 제외하고, 이 규정은 모든 강좌에 적용됩니다. 학기 시작 전에 주의 깊게 읽어 주세요.</span>
  </p>
</header>
<section class="pol-section">
  <div class="section-heading animate d3">
    <span class="section-label-sm"><span class="lang-en">Featured Policies</span><span class="lang-ko">주요 정책</span></span>
    <span class="section-line-sm"></span>
  </div>
  <div class="policy-grid animate d4">

    <a class="pol-card" href="{{ '/policies/ai' | relative_url }}">
      <div class="pol-card-body">
        <span class="pol-code">POL &mdash; 01</span>
        <div class="pol-card-title"><span class="lang-en">AI &amp; ChatGPT Use Policy</span><span class="lang-ko">AI 및 ChatGPT 사용 정책</span></div>
        <div class="pol-excerpt">
          <span class="lang-en">Generative AI (ChatGPT, Claude, Copilot) is permitted under specific conditions. All work must reflect your own understanding. Disclosure is mandatory. AI is prohibited in exams unless explicitly stated.</span>
          <span class="lang-ko">생성형 AI(ChatGPT, Claude, Copilot)는 특정 조건 하에 허용됩니다. 모든 결과물은 본인의 이해를 반영해야 합니다. 공개는 의무입니다. AI는 명시적으로 허용되지 않는 한 시험에서 금지됩니다.</span>
        </div>
        <span class="read-more"><span class="lang-en">Read full policy →</span><span class="lang-ko">전체 정책 읽기 →</span></span>
        <div class="pol-tags"><span class="pol-tag ai-p">AI Tools</span><span class="pol-tag core">Core</span></div>
        <div class="pol-card-footer"><span class="pol-updated">Jan 2025</span><span class="pol-arrow">→</span></div>
      </div>
    </a>

    <a class="pol-card" href="{{ '/policies/attendance' | relative_url }}">
      <div class="pol-card-body">
        <span class="pol-code">POL &mdash; 02</span>
        <div class="pol-card-title"><span class="lang-en">Attendance Policy</span><span class="lang-ko">출석 규정</span></div>
        <div class="pol-excerpt">
          <span class="lang-en">Attendance is required and contributes to your final grade. Missing more than 1/3 of classes results in automatic failure. Excused absences require documentation.</span>
          <span class="lang-ko">출석은 필수이며 최종 성적에 반영됩니다. 수업의 1/3 이상 결석하면 자동으로 과락됩니다. 공결은 서류 제출이 필요합니다.</span>
        </div>
        <span class="read-more"><span class="lang-en">Read full policy →</span><span class="lang-ko">전체 정책 읽기 →</span></span>
        <div class="pol-tags"><span class="pol-tag core">Core</span><span class="pol-tag assess">Grading</span></div>
        <div class="pol-card-footer"><span class="pol-updated">Mar 2025</span><span class="pol-arrow">→</span></div>
      </div>
    </a>

    <a class="pol-card" href="{{ '/policies/assignments' | relative_url }}">
      <div class="pol-card-body">
        <span class="pol-code">POL &mdash; 03</span>
        <div class="pol-card-title"><span class="lang-en">Assignments &amp; Collaboration</span><span class="lang-ko">과제 및 협업</span></div>
        <div class="pol-excerpt">
          <span class="lang-en">All assignments are individual unless labeled as group work. Discussing ideas is acceptable; code and writing must be yours. Plagiarism detection tools are used.</span>
          <span class="lang-ko">모든 과제는 그룹 과제로 명시되지 않는 한 개인 과제입니다. 아이디어 토론은 허용되지만, 코드와 글은 본인이 작성해야 합니다.</span>
        </div>
        <span class="read-more"><span class="lang-en">Read full policy →</span><span class="lang-ko">전체 정책 읽기 →</span></span>
        <div class="pol-tags"><span class="pol-tag conduct">Integrity</span><span class="pol-tag core">Core</span></div>
        <div class="pol-card-footer"><span class="pol-updated">Aug 2024</span><span class="pol-arrow">→</span></div>
      </div>
    </a>

  </div><!-- .policy-grid -->

  <div class="list-section">
    <div class="section-heading"><span class="section-label-sm"><span class="lang-en">All Policies</span><span class="lang-ko">전체 정책</span></span><span class="section-line-sm"></span></div>
    <ul class="pol-list">
      <li><a class="pol-list-item" href="{{ '/policies/ai' | relative_url }}">
        <span class="pl-num">01</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">AI &amp; ChatGPT Use Policy</span><span class="lang-ko">AI 및 ChatGPT 사용 정책</span></div>
          <div class="pl-desc"><span class="lang-en">Permitted uses, disclosure requirements, and exam restrictions.</span><span class="lang-ko">허용 사용, 공개 요건, 시험 제한.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Jan 2025</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/policies/attendance' | relative_url }}">
        <span class="pl-num">02</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Attendance &amp; Participation</span><span class="lang-ko">출석 및 참여</span></div>
          <div class="pl-desc"><span class="lang-en">Absence limits, excused absences, participation grading.</span><span class="lang-ko">결석 한도, 공결, 참여 점수.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Mar 2025</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/policies/assignments' | relative_url }}">
        <span class="pl-num">03</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Assignments &amp; Collaboration</span><span class="lang-ko">과제 및 협업</span></div>
          <div class="pl-desc"><span class="lang-en">Individual work, plagiarism, and code-sharing rules.</span><span class="lang-ko">개인 과제, 표절, 코드 공유 규정.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Aug 2024</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/policies/tests' | relative_url }}">
        <span class="pl-num">04</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Tests &amp; Exams</span><span class="lang-ko">시험</span></div>
          <div class="pl-desc"><span class="lang-en">Midterm and final exam rules, makeups, regrading.</span><span class="lang-ko">중간·기말고사 규정, 보충 시험, 재평가.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Aug 2024</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/policies/collaboration' | relative_url }}">
        <span class="pl-num">05</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Collaboration Policy</span><span class="lang-ko">협업 정책</span></div>
          <div class="pl-desc"><span class="lang-en">Acceptable collaboration on homework and projects.</span><span class="lang-ko">과제 및 프로젝트에서 허용되는 협업 범위.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Aug 2024</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/policies/late' | relative_url }}">
        <span class="pl-num">06</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Late Policy</span><span class="lang-ko">지각 제출 정책</span></div>
          <div class="pl-desc"><span class="lang-en">Late submission penalties and grace period rules.</span><span class="lang-ko">지각 제출 감점 및 유예 기간 규정.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Aug 2024</span><span class="pl-arrow">→</span></div>
      </a></li>
      <li><a class="pol-list-item" href="{{ '/office-hours' | relative_url }}">
        <span class="pl-num">07</span>
        <div class="pl-content">
          <div class="pl-title"><span class="lang-en">Office Hours &amp; Communication</span><span class="lang-ko">상담 시간 및 소통</span></div>
          <div class="pl-desc"><span class="lang-en">OH schedule, email policy, grade discussion rules.</span><span class="lang-ko">상담 시간, 이메일 정책, 성적 논의 규정.</span></div>
        </div>
        <div class="pl-meta"><span class="pl-date">Jan 2025</span><span class="pl-arrow">→</span></div>
      </a></li>
    </ul>
  </div><!-- .list-section -->

  <div class="faq-section">
    <div class="section-heading"><span class="section-label-sm"><span class="lang-en">Frequently Asked Questions</span><span class="lang-ko">자주 묻는 질문</span></span><span class="section-line-sm"></span></div>
    <ul class="faq-list">
      <li class="faq-item">
        <button class="faq-q">
          <span><span class="lang-en">Can I use ChatGPT to help write my assignments?</span><span class="lang-ko">ChatGPT를 사용하여 과제 작성을 도울 수 있나요?</span></span>
          <span class="faq-chevron">&#x25BE;</span>
        </button>
        <div class="faq-a">
          <p><span class="lang-en">Yes, with proper disclosure. You may use AI for brainstorming, concept exploration, and debugging code. All submitted writing and analysis must be your own. Add a disclosure statement specifying the tool and how it was used.</span><span class="lang-ko">네, 적절한 공개를 통해 사용할 수 있습니다. 브레인스토밍, 개념 탐구, 코드 디버깅에 AI를 사용할 수 있습니다. 제출된 글과 분석은 모두 본인의 것이어야 합니다. 도구와 사용 방법을 명시한 공개 선언을 추가하세요.</span></p>
        </div>
      </li>
      <li class="faq-item">
        <button class="faq-q">
          <span><span class="lang-en">What happens if I miss an exam?</span><span class="lang-ko">시험에 결석하면 어떻게 되나요?</span></span>
          <span class="faq-chevron">&#x25BE;</span>
        </button>
        <div class="faq-a">
          <p><span class="lang-en">Makeup exams require documented medical emergencies or official conflicts. Notify me at least 48 hours in advance. Simply forgetting or misreading the schedule does not qualify.</span><span class="lang-ko">보충 시험은 의료 응급 상황이나 공식적 충돌에 대한 서류가 필요합니다. 최소 48시간 전에 알려주세요. 단순히 잊어버리거나 일정을 잘못 읽는 것은 해당되지 않습니다.</span></p>
        </div>
      </li>
      <li class="faq-item">
        <button class="faq-q">
          <span><span class="lang-en">How do I appeal a grade?</span><span class="lang-ko">성적에 이의를 제기하려면 어떻게 하나요?</span></span>
          <span class="faq-chevron">&#x25BE;</span>
        </button>
        <div class="faq-a">
          <p><span class="lang-en">Submit a written regrade request within two weeks. Email a specific explanation of which problem was graded incorrectly and why. Regrading may result in a higher or lower score.</span><span class="lang-ko">2주 이내에 서면 재평가 요청을 제출하세요. 어떤 문제가 잘못 채점되었는지, 그 이유를 구체적으로 설명하는 이메일을 보내세요. 재평가 결과 점수가 올라가거나 내려갈 수 있습니다.</span></p>
        </div>
      </li>
      <li class="faq-item">
        <button class="faq-q">
          <span><span class="lang-en">How many absences are allowed?</span><span class="lang-ko">결석은 몇 번까지 허용되나요?</span></span>
          <span class="faq-chevron">&#x25BE;</span>
        </button>
        <div class="faq-a">
          <p><span class="lang-en">Up to three unexcused absences without penalty. Each additional absence reduces your attendance grade. Documented absences for illness or emergency are excused if submitted within one week.</span><span class="lang-ko">무단 결석은 3회까지 패널티 없이 허용됩니다. 추가 결석마다 출석 점수가 감점됩니다. 질병이나 긴급 상황에 대한 서류를 1주 이내에 제출하면 공결로 처리됩니다.</span></p>
        </div>
      </li>
      <li class="faq-item">
        <button class="faq-q">
          <span><span class="lang-en">Can I submit assignments late?</span><span class="lang-ko">과제를 늦게 제출할 수 있나요?</span></span>
          <span class="faq-chevron">&#x25BE;</span>
        </button>
        <div class="faq-a">
          <p><span class="lang-en">Late submissions are penalized without an approved extension. Ask before the deadline, not after. See the Late Policy for full details.</span><span class="lang-ko">승인된 연장 없이 늦게 제출하면 감점됩니다. 마감 후가 아닌 마감 전에 문의하세요. 자세한 내용은 지각 제출 정책을 참조하세요.</span></p>
        </div>
      </li>
    </ul>
  </div><!-- .faq-section -->

</section>
</div><!-- .wrap -->

<script>
document.querySelectorAll('.faq-q').forEach(b => {
  b.addEventListener('click', () => {
    const i = b.closest('.faq-item'), w = i.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(x => x.classList.remove('open'));
    if (!w) i.classList.add('open');
  });
});
</script>
