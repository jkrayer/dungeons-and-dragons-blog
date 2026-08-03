---
title: "Thieves of Capitol: The Golden Jubilee"
layout: base.njk
description: An amount of years before the war with the Elves, during the reign of Emperor Leto, the Undying, a group of thieves makes a name for themselves in the bustling streets of Axius.
tags:
  - campaign-home
  - campaign
campaignTag: campaign-thieves-of-capitol
permalink: /campaigns/thieves-of-capitol/
---

An amount of years before the war with the Elves, during the reign of Emperor Leto, the Undying, a group of thieves makes a name for themselves in the bustling streets of Axius. In this third chapter, the player's crew, "The Baker's Dozen," becomes embroiled in plots that will shape the future of an Empire.

## The Baker's Dozen is &hellip;
 - **Dell Graybeard**, a human porter played by Jeff.
 - **Una Undervoot**, a dwarf baker played by Lianne.
 - **B.F. Bagman**, a halfling bag-maker played by Steve.
 - **Ryan Wythyneye**, a human gangster played by Bryan.
 - **Gordon Heavyfoot**, a dwarf butcher played by Roehl.
 - **Tiny Tim**, a human busker played by John.

## Sessions and Events

{% set entries = collections.campaignEntries | reverse %}

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
