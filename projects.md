---
title: "Our Projects"
permalink: /projects/
---

# All Our Projects

Below is a list of our latest projects.

{% assign projects = site.projects | where: "category", "projects" | sort: "title" %}

{% for project in projects %}
- [{{ project.title }}]({{ project.permalink }})
  <small>({{ project.excerpt | strip_html | truncate: 150 }})</small>
{% endfor %}
