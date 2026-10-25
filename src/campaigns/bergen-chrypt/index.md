---
title: "Bergen Chrypt"
layout: base.njk
description: In forsaken lands a band of scoundrels pursues their fortune.
tags:
  - campaign-home
  - campaign
campaignTag: bergen-chrypt
campaignStatus: ongoing
permalink: /campaigns/bergen-chrypt/
---

In forsaken lands a band of scoundrels pursues their fortune.

## Those Who Survive &hellip;

## And Those Who've Fallen &hellip;

## Sessions and Events

{% set entries = collections.campaignEntries | entriesForCampaign(page) %}

{% if entries and entries.length > 0 %}

{% for entry in entries %}
  <article>
    <header>
      <hgroup>
        <div>{{ entry.data.pre }}</div>
        <h3><a href="{{ entry.url }}">{{ entry.data.title }}</a></h3>
      </hgroup>
      <p>{{ entry.data.fantasyDate }}</p>
    </header>    
    {{ entry.content | safe }}
  </article>
{% endfor %}

{% else %}
No entries have been posted for this campaign yet.
{% endif %}
