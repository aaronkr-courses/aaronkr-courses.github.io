<div class="instructors clearfix">
  {% for instructor in site.data.staff.Instructors %}
  <div class="instructor-profile-one-col">
    <a href="{{ instructor.url }}" target="_blank"
      ><img
        src="{{ instructor.image | prepend: '/assets/img/' | relative_url }}"
    /></a>
    <ul class="instructor-info">
      <li>
        <span>Instructor</span>
        <strong><a href="{{ instructor.url }}" target="_blank">{{ instructor.name }}</a></strong>
      </li>
      <li>
        <span>Email:</span>
        <a href="mailto:{{ instructor.email | encode_email }}" target="_blank"
          >{{ instructor.email }}</a
        >
      </li>
      <li>
        <span>KakaoTalk:</span>
        <a href="{{ instructor.kakaotalk }}" target="_blank"
          >카카오톡 오픈채팅</a
        >
      </li>
      <!-- <li><span>Office hours:</span> {{ instructor.office-hours }}</li> -->
    </ul>
  </div>
  {% endfor %}
</div>

{%- include about_me.html %}
