﻿<!-- ut-node/schedule.md -->

<table class="table table-hover">
  <colgroup>
    <col style="width:5%">
    <col style="width:55%">
    <col style="width:25%">
    <col style="width:15%">
  </colgroup>
  <thead class="thead-light">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Lecture</th>
      <th scope="col">Readings</th>
      <th scope="col">Logistics</th>
    </tr>
  </thead>
  <tbody>

{% assign current_module = 0 %}
{% assign skip_classes = 0 %}
{% assign prev_date = 0 %}

{% for item in site.data.2024_ut_imd_lectures %}
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
    {% if lecture.title contains 'No class' or forloop.last %}
    {% assign skip_classes = skip_classes | plus: 1 %}
    <td colspan="4" align="center">{{ lecture.title }}</td>
    {% else %}
    <td>
        Week #{{ forloop.index | minus: current_module | minus: skip_classes }}
        {% if lecture.lecturer %}({{ lecture.lecturer }}){% endif %}:
        <br />
        {{ lecture.title }}
        <br />
        [
            {% if lecture.slides %}
              <a href="{{ lecture.slides }}" target="_blank">slides</a>
            {% else %}
              slides
            {% endif %}
            {% if lecture.annotated %}
              (<a href="{{ lecture.annotated }}" target="_blank">annotated</a>)
            {% endif %}
            {% if lecture.video %}
            | <a href="{{ lecture.video }}" target="_blank">video</a>
            {% endif %}
            {% if lecture.notes %}
            | <a href="{{ lecture.notes }}" target="_blank">notes</a>
            {% else %}
            | notes
            {% endif %}
        ]
    </td>
    <td>
        {% if lecture.readings %}
        <ul>
        {% for reading in lecture.readings %}
            <li>{{ reading }}</li>
        {% endfor %}
        </ul>
        {% endif %}
    </td>
    <td>
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