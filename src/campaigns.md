---
title: Campaigns
layout: base.njk
description: Ongoing and archived campaign journals.
permalink: /campaigns/
---

{% set campaigns = collections.campaigns %}

{% if campaigns.length === 0 %}
No campaigns have been published yet.
{% else %}
<ul>
{% for campaign in campaigns %}
  <li>
    <a href="{{ campaign.url }}">{{ campaign.data.title }}</a>
    {% if campaign.data.description %}
      <p>{{ campaign.data.description }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>
{% endif %}
