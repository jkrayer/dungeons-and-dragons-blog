---
title: Home
layout: home.njk
description: A blog about Dungeons and Dragons.
pagination:
  data: collections.posts
  size: 5
  reverse: true
  alias: posts
permalink: "{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}/{% else %}/{% endif %}"
---
