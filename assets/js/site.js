/* Shared behaviour for every page. No libraries needed. */
(function () {
  "use strict";

  /* ---------- Light / dark theme ---------- */
  var root = document.documentElement;
  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) { /* storage blocked: theme still applies for this visit */ }
    document.dispatchEvent(new CustomEvent("themechange", { detail: t }));
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  if (!root.getAttribute("data-theme") && storedTheme()) root.setAttribute("data-theme", storedTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.addEventListener("click", function () {
        applyTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    }

    /* ---------- Mobile menu ---------- */
    var menuBtn = document.querySelector(".menu-toggle");
    var links = document.querySelector(".nav-links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    /* ---------- Portrait: tap to meet Momoko ---------- */
    var portrait = document.querySelector(".portrait-switch");
    if (portrait) {
      portrait.addEventListener("click", function () {
        var on = portrait.getAttribute("aria-pressed") === "true";
        portrait.setAttribute("aria-pressed", on ? "false" : "true");
      });
    }

    /* ---------- Publication filters ---------- */
    var filterBtns = document.querySelectorAll(".filters button");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        document.querySelectorAll(".pub-group").forEach(function (g) {
          g.hidden = !(f === "all" || g.getAttribute("data-type") === f);
        });
      });
    });

    /* Respect "reduce motion": pause autoplaying videos (they stay on their poster frame). */
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video[autoplay]").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); });
    }

    /* ---------- News (from assets/js/news-data.js) ---------- */
    if (window.NEWS) renderNews(window.NEWS);
  });

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function dateLabel(item) {
    if (item.label) return item.label;
    var parts = String(item.date).split("-");
    return parts.length > 1 ? MONTHS[parseInt(parts[1], 10) - 1] + " " + parts[0] : parts[0];
  }
  /* Line icons for each news tag: trophy, microphone, page, chalkboard. */
  var ICON_PATHS = {
    Award: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 6h3v1.5A3.5 3.5 0 0 1 16.6 11M7 6H4v1.5A3.5 3.5 0 0 0 7.4 11"/>',
    Talk: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
    Paper: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5zM14 3v5h5M8.5 13h7M8.5 17h5"/>',
    Teaching: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20l2.5-4M16 20l-2.5-4M7 8.5h6M7 11.5h4"/>'
  };
  function symbolHTML(tag, labelled) {
    if (!ICON_PATHS[tag]) return "";
    var a11y = labelled ? ' role="img" aria-label="' + tag + '" title="' + tag + '"' : ' aria-hidden="true"';
    return '<span class="news-sym sym-' + tag.toLowerCase() + '"' + a11y + '>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      ICON_PATHS[tag] + "</svg></span>";
  }
  function newsItemHTML(item) {
    var sym = item.tag ? symbolHTML(item.tag, true) : "";
    var lines = item.text ? [].concat(item.text) : [];
    var text = lines.map(function (t) { return '<p class="news-text">' + t + "</p>"; }).join("");
    var where = item.where ? '<p class="news-where">' + item.where + "</p>" : "";
    var tone = item.tag ? " t-" + item.tag.toLowerCase() : "";
    return '<li class="news-item"><div class="news-date">' + dateLabel(item) + "</div>" +
      '<div class="news-body">' + sym + '<div><p class="news-title' + tone + '">' + item.title + "</p>" + where + text + "</div></div></li>";
  }
  function renderNews(items) {
    var preview = document.getElementById("news-preview");
    if (preview) {
      preview.innerHTML = items.filter(function (it) { return it.home; }).map(newsItemHTML).join("");
    }
    var legend = document.getElementById("news-legend");
    if (legend) {
      legend.innerHTML = ["Award", "Talk", "Paper", "Teaching"].map(function (t) {
        return "<span>" + symbolHTML(t, false) + t + "</span>";
      }).join("");
    }
    var all = document.getElementById("news-all");
    if (all) {
      var html = "", year = null;
      items.forEach(function (item) {
        var y = String(item.date).slice(0, 4);
        if (y !== year) {
          if (year !== null) html += "</ul>";
          html += '<h2 class="news-year" id="y' + y + '">' + y + '</h2><ul class="news-list">';
          year = y;
        }
        html += newsItemHTML(item);
      });
      if (year !== null) html += "</ul>";
      all.innerHTML = html;
    }
    /* Talks that have a paper: put a small page icon in front of the linked title. */
    document.querySelectorAll(".news-text a.paper").forEach(function (a) {
      a.insertAdjacentHTML("afterbegin",
        '<svg class="paper-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON_PATHS.Paper + "</svg>");
      if (!a.title) a.title = "Read the paper";
    });
  }
})();
