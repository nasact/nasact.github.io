---
title: "Our Projects"
permalink: /projects/
---

# All Our Projects

Below is a list of our latest projects.

{% for project in site.projects %}
  - [{{ project.title }}]({{ project.url }})
    <small>({{ project.excerpt | strip_html | truncate: 150 }})</small>
{% endfor %}
