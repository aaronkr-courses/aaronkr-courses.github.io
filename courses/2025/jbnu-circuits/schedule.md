<!-- hb-cpp/schedule.md -->

<table class="table table-hover">
  <colgroup>
    <col style="width:5%">
    <col style="width:5%">
    <col style="width:50%">
    <col style="width:20%">
  </colgroup>
  <thead class="thead-light">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Lecture</th>
      <th scope="col">Content</th>
      <th scope="col">Logistics</th>
    </tr>
  </thead>
  <tbody>

{% assign current_module = 0 %}
{% assign skip_classes = 0 %}
{% assign prev_date = 0 %}

{% for item in site.data.2025_jbnu_chips_lectures %}
{% if item.date %}
{% assign lecture = item %}
{% assign event_type = "upcoming" %}
{% assign today_date = "now" | date: "%s" | divided_by: 86400 %}
{% assign lecture_date = lecture.date | date: "%s" | divided_by: 86400 %}
{% if today_date > lecture_date %}
{% assign event_type = "past" %}
{% elsif today_date <= lecture_date and today_date > prev_date %}
{% assign event_type = "warning" %}
{% endif %}
{% assign prev_date = lecture_date %}

  <tr class="{{ event_type }}">
    <th scope="row">{{ lecture.date }}</th>
    {% if lecture.title contains 'Test' or lecture.title contains 'Chuseok' or forloop.last %}
    {% assign skip_classes = skip_classes | plus: 1 %}
    <td colspan="4" style="text-align: center; background: rgba(255, 255, 255, 0.075)">
        {{ lecture.title }}
    </td>
    {% else %}
    <td>
        {% if lecture.img %}
        <a href="{{ lecture.slides }}" target="_blank">
            <img src="{{ lecture.img | prepend: '/assets/img/' | relative_link }}" alt="slide thumbnail" style="max-width: 200px;" />
        </a>
        <br />
        {% else %}
        [ slides ]
        {% endif %}
    </td>
    <td>
        Week #{{ forloop.index | minus: current_module }}:
        <br />
        {{ lecture.title }}
        {% if lecture.readings %}
        <ul>
        {% for reading in lecture.readings %}
            <li>{{ reading }}</li>
        {% endfor %}
        </ul>
        {% endif %}
    </td>
    <td>
        {% if lecture.hw %}
        [ <a href="{{ lecture.hw }}" target="_blank">과제</a> ]
        {% endif %}
        <p>{{ lecture.logistics }}</p>
    </td>
    {% endif %}
  </tr>
  {% else %}
  {% assign current_module = current_module | plus: 1 %}
  {% assign module = item %}
  <tr class="info">
    <td colspan="5" align="center"><strong>{{ module.title }}</strong></td>
  </tr>
  {% endif %}
  {% endfor %}
  </tbody>
</table>
