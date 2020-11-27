# Xavi's website

This is a Jekyll-based website using the [Dimension](https://html5up.net/dimension) HTML5up template.

TODO:
* Add publications.
* Add a different style for the `blog` and refactor it.



<!-- <nav class="navbar navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
<div class="collapse" id="navbarToggleExternalContent">
  <nav class="navbar navbar-expand-sm">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active"><a class="nav-link" href="/index.html">Home</a></li>
        {% for item in site.main_pages %}
          {% if item.title %}
          <li class="nav-item active"><a class="nav-link" href="/index.html#{{ item.anchor }}">{{ item.title | escape }}</a></li>
          {% endif %}
        {% endfor %}
        {% assign default_paths = site.pages | map: "path" %}
        {% assign page_paths = site.header_pages | default: default_paths %}
        {% if page_paths %}
          {% for path in page_paths %}
            {% assign my_page = site.pages | where: "path", path | first %}
            {% if my_page.title %}
            <li class="nav-item active"><a class="nav-link" href="{{ my_page.url | relative_url }}#{{ my_page.anchor }}">{{ my_page.title | escape }}</a></li>
            {% endif %}
          {% endfor %}
        {% endif %}
      </ul>
    </div>
  </nav>
</div> -->
