/* =====================================================================
   Portfolio renderer. Reads window.PORTFOLIO (content.js) and builds
   every section. Routine updates never need changes in this file.
   No external libraries, no network calls, no tracking.
   ===================================================================== */
(function () {
  "use strict";
  var C = window.PORTFOLIO;
  if (!C) { document.body.innerHTML = "<p style='padding:2rem'>content.js did not load. Check that it sits next to index.html.</p>"; return; }
  var ARTIFACT = window.PORTFOLIO_ENV === "artifact";

  /* ---------- figures: fill {{name}} placeholders from C.numbers ---------- */
  var N = C.numbers || {};
  function fill(str) {
    return str.replace(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g, function (all, k) {
      if (N[k] == null) { if (window.console) console.warn("content.js: no figure named " + k + " in numbers"); return all; }
      return String(N[k]);
    });
  }
  (function walk(o) {
    Object.keys(o).forEach(function (k) {
      if (k === "numbers") return;
      var v = o[k];
      if (typeof v === "string") o[k] = fill(v);
      else if (v && typeof v === "object") walk(v);
    });
  })(C);
  // "500+" -> { value: 500, floor: true }; "29%+" -> 29; "9.9%" -> 9.9
  function parseFigure(txt) {
    var t = String(txt == null ? "" : txt).trim();
    var n = parseFloat(t.replace(/[^0-9.]/g, ""));
    return { value: isNaN(n) ? 0 : n, display: t, floor: /\+\s*$/.test(t) };
  }
  // Dashboard bars that point at a figure name
  if (C.dashboard && Array.isArray(C.dashboard.values)) {
    var pid = C.dashboard.periods && C.dashboard.periods[0] && C.dashboard.periods[0].id;
    C.dashboard.values.forEach(function (v) {
      if (v.figure != null) {
        var f = parseFigure(N[v.figure]);
        v.value = f.value; v.display = f.display; v.floor = f.floor;
      }
      if (!v.period) v.period = pid;
    });
    C.dashboard.values = C.dashboard.values.filter(function (v) { return v.display !== ""; });
  }
  // Monthly block -> trend rows
  if (C.monthly && Array.isArray(C.monthly.months) && C.dashboard) {
    var M = C.monthly, rows = [];
    Object.keys(M).forEach(function (metric) {
      var byCat = M[metric];
      if (metric === "months" || metric === "note" || !byCat || typeof byCat !== "object" || Array.isArray(byCat)) return;
      Object.keys(byCat).forEach(function (cat) {
        if ((byCat[cat] || []).length !== M.months.length && window.console)
          console.warn("content.js: monthly." + metric + "." + cat + " has " + (byCat[cat] || []).length + " values but months has " + M.months.length);
        (byCat[cat] || []).forEach(function (val, i) {
          if (val != null && M.months[i]) rows.push({ metric: metric, category: cat, month: M.months[i], value: val });
        });
      });
    });
    C.dashboard.trends = rows;
    if (M.note) C.dashboard.trendNote = M.note;
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function has(a) { return Array.isArray(a) && a.length > 0; }
  function list(items, cls) {
    if (!has(items)) return "";
    return "<ul class='" + (cls || "bullets") + "'>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function tags(items) {
    if (!has(items)) return "";
    return "<ul class='tags' aria-label='Tools'>" + items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  var P = C.person || {};
  var showResume = !!P.resume && !ARTIFACT;

  /* ---------- document meta ---------- */
  if (C.meta && C.meta.siteTitle) document.title = C.meta.siteTitle + " · " + (P.title || "Portfolio");
  var md = document.querySelector("meta[name='description']");
  if (md && C.meta && C.meta.description) md.setAttribute("content", C.meta.description);

  /* ---------- nav ---------- */
  var sections = [
    { id: "about", label: "About", on: !!C.about },
    { id: "experience", label: "Experience", on: has(C.experience) },
    { id: "work", label: "Case studies", on: has(C.caseStudies) },
    { id: "results", label: "Results", on: !!C.dashboard },
    { id: "journey", label: "Lead journey", on: !!C.journey },
    { id: "skills", label: "Skills", on: has(C.skills) },
    { id: "gallery", label: "Work samples", on: has(C.gallery) },
    { id: "credentials", label: "Credentials", on: has(C.certifications) || has(C.education) },
    { id: "contact", label: "Contact", on: true }
  ].filter(function (s) { return s.on; });

  $("#brand").innerHTML = "<a href='#top'>" + esc(P.name) + "</a>";
  $("#nav-list").innerHTML = sections.map(function (s) {
    return "<li><a href='#" + s.id + "'>" + esc(s.label) + "</a></li>";
  }).join("");
  var navBtn = $("#nav-toggle"), nav = $("#site-nav");
  navBtn.addEventListener("click", function () {
    var open = navBtn.getAttribute("aria-expanded") === "true";
    navBtn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  $all("#nav-list a").forEach(function (a) {
    a.addEventListener("click", function () { navBtn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); });
  });

  /* ---------- hero ---------- */
  (function () {
    var H = C.hero || {};
    var ctas = "<a class='btn primary' href='#work'>See case studies</a>";
    if (showResume) ctas += "<a class='btn' href='" + esc(P.resume) + "' download>Download résumé</a>";
    if (P.linkedin) ctas += "<a class='btn' href='" + esc(P.linkedin) + "' target='_blank' rel='noopener'>LinkedIn</a>";
    var trace = has(H.trace) ? "<p class='trace' aria-label='How I measure a lead'>" + H.trace.map(function (t, i) {
      return "<span" + (i === H.trace.length - 1 ? " class='end'" : "") + ">" + esc(t) + "</span>";
    }).join("<i aria-hidden='true'>›</i>") + "</p>" : "";
    var asOf = C.dashboard && C.dashboard.asOf ? "<p class='ledger-note'>" + esc(C.dashboard.asOf) + ". Lead figures from Salesforce.</p>" : "";
    var stats = has(H.stats) ? "<div class='ledger-wrap'><dl class='ledger'>" + H.stats.map(function (s) {
      return "<div><dt>" + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd>" + (s.note ? "<p>" + esc(s.note) + "</p>" : "") + "</div>";
    }).join("") + "</dl>" + asOf + "</div>" : "";
    $("#top").innerHTML =
      "<div class='wrap hero-grid'>" +
        "<div class='hero-main'>" +
          "<p class='eyebrow'>" + esc(P.title) + (P.focus ? " · " + esc(P.focus) : "") + "</p>" +
          "<h1>" + esc(P.name) + "</h1>" +
          "<p class='lede'>" + esc(H.lede) + "</p>" + trace +
          "<div class='ctas'>" + ctas + "</div>" +
        "</div>" +
        stats +
      "</div>";
  })();

  /* ---------- about ---------- */
  (function () {
    var A = C.about; if (!A) return;
    var mono = "<div class='portrait mono' aria-hidden='true'>" + esc(P.initials || "") + "</div>";
    var portrait = P.photo
      ? "<img class='portrait' id='portrait' src='" + esc(P.photo) + "' alt='" + esc(P.photoAlt || P.name) + "' width='240' height='240'>"
      : mono;
    var focus = has(A.focusAreas) ? "<dl class='focus'>" + A.focusAreas.map(function (f) {
      return "<div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.text) + "</dd></div>";
    }).join("") + "</dl>" : "";
    $("#about").innerHTML =
      "<div class='wrap'>" + head("About", "How I work") +
      "<div class='about-grid'>" +
        "<div class='prose'>" + (A.paragraphs || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        (A.lookingFor ? "<p class='looking'><strong>Looking for:</strong> " + esc(A.lookingFor) + "</p>" : "") + "</div>" +
        "<aside class='about-side'>" + portrait +
          "<p class='where'>" + esc(P.location || "") + "</p>" + focus + "</aside>" +
      "</div></div>";
    var img = document.getElementById("portrait");
    if (img) {
      var swap = function () { var d = document.createElement("div"); d.innerHTML = mono; img.replaceWith(d.firstChild); };
      if (img.complete && img.naturalWidth === 0) swap(); else img.addEventListener("error", swap);
    }
  })();

  function head(label, title, intro) {
    return "<header class='sec-head'><p class='eyebrow'>" + esc(label) + "</p><h2>" + esc(title) + "</h2>" +
      (intro ? "<p class='sec-intro'>" + esc(intro) + "</p>" : "") + "</header>";
  }

  /* ---------- experience timeline ---------- */
  var caseById = {};
  (C.caseStudies || []).forEach(function (c) { caseById[c.id] = c; });
  (function () {
    if (!has(C.experience)) return;
    var html = "<ol class='timeline'>" + C.experience.map(function (r, i) {
      var id = "role-" + esc(r.id || i);
      var related = has(r.projects) ? "<div class='related'><h4>Related case studies</h4><ul>" + r.projects.filter(function (p) { return caseById[p]; }).map(function (p) {
        return "<li><a href='#case-" + esc(p) + "' data-open-case='" + esc(p) + "'>" + esc(caseById[p].title) + "</a></li>";
      }).join("") + "</ul></div>" : "";
      return "<li class='role" + (i === 0 ? " current" : "") + "'>" +
        "<div class='when'><span>" + esc(r.start) + " – " + esc(r.end) + "</span><span class='loc'>" + esc(r.location) + "</span></div>" +
        "<div class='role-body'>" +
          "<h3>" + esc(r.role) + "</h3>" +
          "<p class='org'>" + esc(r.org) + (r.orgDetail ? " <span>· " + esc(r.orgDetail) + "</span>" : "") + "</p>" +
          "<p class='summary'>" + esc(r.summary) + "</p>" +
          list(r.highlights, "bullets strong") +
          (has(r.responsibilities) || has(r.tools) || related ?
            "<button class='expander' type='button' aria-expanded='" + (i === 0 ? "true" : "false") + "' aria-controls='" + id + "'>" +
              "<span class='when-closed'>Show responsibilities</span><span class='when-open'>Hide responsibilities</span></button>" +
            "<div class='more' id='" + id + "'" + (i === 0 ? "" : " hidden") + ">" +
              list(r.responsibilities) + tags(r.tools) + related +
            "</div>" : "") +
        "</div></li>";
    }).join("") + "</ol>";
    $("#experience").innerHTML = "<div class='wrap'>" + head("Experience", "Where I've worked", "Newest first. Expand a role for day-to-day scope and tools.") + html + "</div>";
  })();

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".expander");
    if (!b) return;
    var open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!open));
    var region = document.getElementById(b.getAttribute("aria-controls"));
    if (region) region.hidden = open;
  });

  /* ---------- case studies ---------- */
  (function () {
    if (!has(C.caseStudies)) return;
    var cats = (C.caseCategories || []).filter(function (cat) {
      return C.caseStudies.some(function (c) { return (c.categories || []).indexOf(cat.id) > -1; });
    });
    var catLabel = {}; cats.forEach(function (c) { catLabel[c.id] = c.label; });
    var chips = "<div class='chips' role='group' aria-label='Filter case studies'>" +
      "<button type='button' class='chip' aria-pressed='true' data-cat='all'>All <span>" + C.caseStudies.length + "</span></button>" +
      cats.map(function (cat) {
        var n = C.caseStudies.filter(function (c) { return (c.categories || []).indexOf(cat.id) > -1; }).length;
        return "<button type='button' class='chip' aria-pressed='false' data-cat='" + esc(cat.id) + "'>" + esc(cat.label) + " <span>" + n + "</span></button>";
      }).join("") + "</div>";
    var cards = "<div class='cases'>" + C.caseStudies.map(function (c) {
      var rid = "case-body-" + esc(c.id);
      return "<article class='case' id='case-" + esc(c.id) + "' data-cats='" + esc((c.categories || []).join(" ")) + "'>" +
        "<div class='case-top'>" +
          "<p class='case-meta'><span>" + esc(c.period) + "</span>" + (c.role ? "<span class='role-tag'>" + esc(c.role) + "</span>" : "") + "</p>" +
          "<h3>" + esc(c.title) + "</h3>" +
          "<p class='case-org'>" + esc(c.org) + (c.industry ? " · " + esc(c.industry) : "") + "</p>" +
          "<p class='case-context'>" + esc(c.context) + "</p>" +
          "<p class='case-cats'>" + (c.categories || []).map(function (k) { return catLabel[k] ? "<span>" + esc(catLabel[k]) + "</span>" : ""; }).join("") + "</p>" +
          "<button class='expander' type='button' aria-expanded='false' aria-controls='" + rid + "'><span class='when-closed'>Read case study</span><span class='when-open'>Close case study</span></button>" +
        "</div>" +
        "<div class='case-body' id='" + rid + "' hidden>" +
          step("Objective", "<p>" + esc(c.objective) + "</p>") +
          step("My contribution", "<p>" + esc(c.contribution) + "</p>") +
          step("Implementation", list(c.implementation)) +
          step("Results", list(c.results, "bullets results")) +
          step("Key takeaway", "<p class='takeaway'>" + esc(c.takeaway) + "</p>") +
          tags(c.tools) +
        "</div></article>";
    }).join("") + "</div>";
    function step(label, body) { return body ? "<section class='case-step'><h4>" + esc(label) + "</h4>" + body + "</section>" : ""; }
    $("#work").innerHTML = "<div class='wrap'>" + head("Case studies", "Selected work", "Each case follows the same order: context, objective, my part, what I did, results, and the takeaway. Figures are aggregates for the period stated.") + chips + cards + "</div>";

    $all("#work .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-cat");
        $all("#work .chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        $all("#work .case").forEach(function (card) {
          card.hidden = !(cat === "all" || card.getAttribute("data-cats").split(" ").indexOf(cat) > -1);
        });
      });
    });
  })();

  function openCase(id) {
    var card = document.getElementById("case-" + id);
    if (!card) return;
    if (card.hidden) { var all = $("#work .chip[data-cat='all']"); if (all) all.click(); }
    var b = $(".expander", card);
    if (b && b.getAttribute("aria-expanded") !== "true") b.click();
    card.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-open-case]");
    if (!a) return;
    e.preventDefault();
    openCase(a.getAttribute("data-open-case"));
  });

  /* ---------- results dashboard ---------- */
  (function () {
    var D = C.dashboard; if (!D) return;
    var catById = {}; (D.categories || []).forEach(function (c, i) { c._i = i; catById[c.id] = c; });
    var metricsWithData = (D.metrics || []).filter(function (m) { return D.values.some(function (v) { return v.metric === m.id; }); });
    var state = { metric: metricsWithData[0] && metricsWithData[0].id, cat: "all", period: D.periods && D.periods[0] && D.periods[0].id };

    var periodCtl = (D.periods || []).length > 1
      ? "<label class='field'><span>Period</span><select id='dash-period'>" + D.periods.map(function (p) { return "<option value='" + esc(p.id) + "'>" + esc(p.label) + "</option>"; }).join("") + "</select></label>"
      : "<p class='field static'><span>Period</span><strong>" + esc(D.periods && D.periods[0] ? D.periods[0].label : "") + "</strong></p>";

    var html = "<div class='wrap'>" + head("Results", "Performance, counted in the CRM", D.intro) +
      "<div class='dash'>" +
        "<div class='dash-controls'>" +
          "<div class='field'><span id='dash-metric-label'>Metric</span><div class='seg' role='radiogroup' aria-labelledby='dash-metric-label'>" +
            metricsWithData.map(function (m, i) { return "<button type='button' role='radio' aria-checked='" + (i === 0) + "' data-metric='" + esc(m.id) + "'>" + esc(m.label) + "</button>"; }).join("") +
          "</div></div>" +
          "<div class='field'><span id='dash-cat-label'>Brand</span><div class='seg' role='radiogroup' aria-labelledby='dash-cat-label'>" +
            "<button type='button' role='radio' aria-checked='true' data-cat='all'>Both</button>" +
            (D.categories || []).map(function (c) { return "<button type='button' role='radio' aria-checked='false' data-cat='" + esc(c.id) + "'>" + esc(c.label) + "</button>"; }).join("") +
          "</div></div>" + periodCtl +
        "</div>" +
        "<div class='dash-body'>" +
          "<div class='chart-card'><div class='chart-head'><h3 id='dash-title'></h3><button type='button' class='linkish' id='dash-table-toggle' aria-expanded='false'>Show as table</button></div>" +
            "<div id='dash-chart' class='chart'></div><div id='dash-table' hidden></div>" +
            "<details class='measure'><summary>How this is measured</summary><div id='dash-def'></div></details>" +
          "</div>" +
        "</div>" +
        (has(D.trends) ? "<div class='chart-card trend-card' id='trend-card'></div>" : "") +
        (has(D.notes) ? "<ul class='dash-notes'>" + D.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" : "") +
      "</div></div><div class='tip' id='tip' role='tooltip' hidden></div>";
    $("#results").innerHTML = html;

    var tip = $("#tip");
    function showTip(html, x, y) {
      tip.innerHTML = html; tip.hidden = false;
      var r = tip.getBoundingClientRect();
      var left = Math.min(Math.max(8, x - r.width / 2), window.innerWidth - r.width - 8);
      var top = y - r.height - 12; if (top < 8) top = y + 16;
      tip.style.left = left + "px"; tip.style.top = top + "px";
    }
    function hideTip() { tip.hidden = true; }

    function fmt(m, v) { return m && m.format === "percent" ? v + "%" : Number(v).toLocaleString("en-US"); }
    function axisFmt(m, v) {
      if (m && m.format !== "percent" && v >= 1000) return (Math.round(v / 100) / 10).toLocaleString("en-US") + "k";
      return fmt(m, round(v));
    }

    function draw() {
      var m = metricsWithData.filter(function (x) { return x.id === state.metric; })[0];
      var period = (D.periods || []).filter(function (p) { return p.id === state.period; })[0] || {};
      var cats = (D.categories || []).filter(function (c) { return state.cat === "all" || c.id === state.cat; });
      var rows = cats.map(function (c) {
        var v = D.values.filter(function (x) { return x.metric === m.id && x.category === c.id && x.period === state.period; })[0];
        return { cat: c, v: v };
      });
      $("#dash-title").textContent = m.label + " by brand";
      var max = Math.max.apply(null, rows.map(function (r) { return r.v ? r.v.value : 0; }).concat([1]));
      if (m.format === "percent") max = 100;
      var niceMax = niceCeil(max);
      var W = 640, rowH = 56, top = 8, left = 150, right = 70, H = top + rows.length * rowH + 30;
      var plotW = W - left - right;
      var ticks = [0, niceMax / 4, niceMax / 2, niceMax * 3 / 4, niceMax];
      var svg = "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='" + esc(m.label + ", " + (period.label || "")) + "'>";
      ticks.forEach(function (t) {
        var x = left + plotW * t / niceMax;
        svg += "<line class='grid' x1='" + x + "' x2='" + x + "' y1='" + top + "' y2='" + (H - 24) + "'></line>" +
          "<text class='axis' x='" + x + "' y='" + (H - 6) + "' text-anchor='middle'>" + esc(axisFmt(m, t)) + "</text>";
      });
      rows.forEach(function (r, i) {
        var y = top + i * rowH + 12, bh = 28;
        svg += "<text class='cat' x='" + (left - 12) + "' y='" + (y + bh / 2 + 5) + "' text-anchor='end'>" + esc(r.cat.label) + "</text>";
        if (!r.v) {
          svg += "<text class='na' x='" + (left + 4) + "' y='" + (y + bh / 2 + 5) + "'>Not published</text>";
          return;
        }
        var w = Math.max(4, plotW * r.v.value / niceMax);
        svg += "<g class='bar s" + r.cat._i + "' tabindex='0' data-i='" + i + "'>" +
          "<rect class='hit' x='" + left + "' y='" + (y - 8) + "' width='" + plotW + "' height='" + (bh + 16) + "'></rect>" +
          "<path class='mark' d='" + barPath(left, y, w, bh, 4) + "'></path>" +
          (r.v.floor ? "<line class='floor' x1='" + (left + w + 3) + "' x2='" + (left + w + 16) + "' y1='" + (y + bh / 2) + "' y2='" + (y + bh / 2) + "'></line>" : "") +
          "<text class='val' x='" + (left + w + (r.v.floor ? 22 : 8)) + "' y='" + (y + bh / 2 + 5) + "'>" + esc(r.v.display || fmt(m, r.v.value)) + "</text>" +
        "</g>";
      });
      svg += "</svg>";
      var legend = rows.length > 1 ? "" : "";
      $("#dash-chart").innerHTML = svg + legend;
      $all("#dash-chart .bar").forEach(function (g) {
        var r = rows[+g.getAttribute("data-i")];
        var html = "<strong>" + esc(r.cat.label) + "</strong><span>" + esc(m.label) + ": " + esc(r.v.display) + (r.v.floor ? " (at least " + esc(fmt(m, r.v.value)) + ")" : "") + "</span>" + (r.v.note ? "<span>" + esc(r.v.note) + "</span>" : "") + "<span class='muted'>" + esc(period.label || "") + " · " + esc(m.source || "") + "</span>";
        function at(e) { showTip(html, e.clientX, e.clientY); }
        g.addEventListener("mousemove", at);
        g.addEventListener("mouseleave", hideTip);
        g.addEventListener("focus", function () { var b = g.getBoundingClientRect(); showTip(html, b.left + b.width / 3, b.top); });
        g.addEventListener("blur", hideTip);
      });
      // table view
      $("#dash-table").innerHTML = "<table><caption>" + esc(m.label) + ", " + esc(period.label || "") + "</caption><thead><tr><th scope='col'>Brand</th><th scope='col'>Value</th><th scope='col'>Source</th></tr></thead><tbody>" +
        rows.map(function (r) { return "<tr><th scope='row'>" + esc(r.cat.label) + "</th><td>" + (r.v ? esc(r.v.display) : "Not published") + "</td><td>" + esc(m.source || "") + "</td></tr>"; }).join("") + "</tbody></table>";
      $("#dash-def").innerHTML = "<dl class='defs'><div><dt>Definition</dt><dd>" + esc(m.definition) + "</dd></div><div><dt>Source</dt><dd>" + esc(m.source) + "</dd></div><div><dt>Period</dt><dd>" + esc(period.label || "") + (period.note ? ". " + esc(period.note) : "") + "</dd></div>" +
        rows.filter(function (r) { return r.v && r.v.note; }).map(function (r) { return "<div><dt>" + esc(r.cat.label) + "</dt><dd>" + esc(r.v.note) + "</dd></div>"; }).join("") +
        (rows.some(function (r) { return r.v && r.v.floor; }) ? "<div><dt>Reading +</dt><dd>A value with + is a published minimum. The bar stops at that minimum and the short line after it marks that the true figure is higher.</dd></div>" : "") + "</dl>";
    }
    function barPath(x, y, w, h, r) {
      r = Math.min(r, w / 2, h / 2);
      return "M" + x + "," + y + "H" + (x + w - r) + "Q" + (x + w) + "," + y + " " + (x + w) + "," + (y + r) + "V" + (y + h - r) + "Q" + (x + w) + "," + (y + h) + " " + (x + w - r) + "," + (y + h) + "H" + x + "Z";
    }
    function niceCeil(v) {
      var p = Math.pow(10, Math.floor(Math.log10(v))), n = v / p;
      var s = n <= 1 ? 1 : n <= 2 ? 2 : n <= 4 ? 4 : n <= 5 ? 5 : 10;
      return s * p;
    }
    function round(v) { return Math.round(v * 10) / 10; }

    function wireSeg(attr, key, after) {
      $all("#results [data-" + attr + "]").forEach(function (b) {
        if (!b.closest(".dash-controls")) return;
        b.addEventListener("click", function () {
          state[key] = b.getAttribute("data-" + attr);
          $all("#results .dash-controls [data-" + attr + "]").forEach(function (x) { x.setAttribute("aria-checked", String(x === b)); });
          draw(); if (after) after();
        });
        b.addEventListener("keydown", function (e) {
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          var sibs = $all("[data-" + attr + "]", b.parentNode), i = sibs.indexOf(b);
          var n = sibs[(i + (e.key === "ArrowRight" ? 1 : sibs.length - 1)) % sibs.length];
          n.focus(); n.click(); e.preventDefault();
        });
      });
    }
    wireSeg("metric", "metric", drawTrend);
    wireSeg("cat", "cat", drawTrend);
    var ps = $("#dash-period"); if (ps) ps.addEventListener("change", function () { state.period = ps.value; draw(); });
    var tt = $("#dash-table-toggle");
    tt.addEventListener("click", function () {
      var open = tt.getAttribute("aria-expanded") === "true";
      tt.setAttribute("aria-expanded", String(!open));
      tt.textContent = open ? "Show as table" : "Show as chart";
      $("#dash-table").hidden = open; $("#dash-chart").hidden = !open;
    });
    draw();

    /* --- monthly trend (only when trends data exists) --- */
    var tState = null;
    function drawTrend() {
      var card = $("#trend-card"); if (!card) return;
      var months = uniq(D.trends.map(function (t) { return t.month; })).sort();
      var present = uniq(D.trends.map(function (t) { return t.metric; }));
      var tm = (D.metrics || []).map(function (x) { return x.id; }).filter(function (id) { return present.indexOf(id) > -1; })
        .concat(present.filter(function (id) { return !(D.metrics || []).some(function (x) { return x.id === id; }); }));
      if (!tState) tState = { from: months[0], to: months[months.length - 1], metric: tm[0] };
      var mId = tState.metric;
      var m = (D.metrics || []).filter(function (x) { return x.id === mId; })[0] || { id: mId, label: mId };
      var range = months.filter(function (mo) { return mo >= tState.from && mo <= tState.to; });
      var cats = (D.categories || []).filter(function (c) { return state.cat === "all" || c.id === state.cat; });
      var series = cats.map(function (c) {
        return { cat: c, pts: range.map(function (mo) {
          var t = D.trends.filter(function (x) { return x.metric === mId && x.category === c.id && x.month === mo; })[0];
          return t ? t.value : null;
        }) };
      }).filter(function (s) { return s.pts.some(function (v) { return v != null; }); });
      var opts = function (sel) { return months.map(function (mo) { return "<option value='" + mo + "'" + (mo === sel ? " selected" : "") + ">" + monthLabel(mo) + "</option>"; }).join(""); };
      var W = 640, H = 260, L = 44, R = 16, T = 16, B = 30, pw = W - L - R, ph = H - T - B;
      var vmax = niceCeil(Math.max.apply(null, [1].concat([].concat.apply([], series.map(function (s) { return s.pts.filter(function (v) { return v != null; }); })))));
      var x = function (i) { return L + (range.length < 2 ? pw / 2 : pw * i / (range.length - 1)); };
      var y = function (v) { return T + ph - ph * v / vmax; };
      var svg = "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='" + esc(m.label) + " by month'>";
      [0, .25, .5, .75, 1].forEach(function (f) { var v = vmax * f; svg += "<line class='grid' x1='" + L + "' x2='" + (W - R) + "' y1='" + y(v) + "' y2='" + y(v) + "'></line><text class='axis' x='" + (L - 8) + "' y='" + (y(v) + 4) + "' text-anchor='end'>" + esc(axisFmt(m, v)) + "</text>"; });
      range.forEach(function (mo, i) { svg += "<text class='axis' x='" + x(i) + "' y='" + (H - 8) + "' text-anchor='middle'>" + monthLabel(mo, true) + "</text>"; });
      series.forEach(function (s) {
        var d = "", pen = false;
        s.pts.forEach(function (v, i) { if (v == null) { pen = false; return; } d += (pen ? "L" : "M") + x(i) + "," + y(v); pen = true; });
        svg += "<path class='line s" + s.cat._i + "' d='" + d + "'></path>";
        var last = s.pts.length - 1; while (last > 0 && s.pts[last] == null) last--;
        s.pts.forEach(function (v, i) { if (v != null) svg += "<circle class='dot s" + s.cat._i + (i === last ? " end" : "") + "' cx='" + x(i) + "' cy='" + y(v) + "' r='" + (i === last ? 5 : 3.5) + "'></circle>"; });
      });
      svg += "<line class='cross' id='trend-cross' y1='" + T + "' y2='" + (T + ph) + "' x1='-10' x2='-10'></line><rect class='hit' x='" + L + "' y='" + T + "' width='" + pw + "' height='" + ph + "' id='trend-hit'></rect></svg>";
      card.innerHTML = "<div class='chart-head'><h3>" + esc(m.label) + " by month</h3></div>" +
        "<div class='trend-controls'><div class='field'><span id='trend-metric-label'>Monthly metric</span><div class='seg' role='radiogroup' aria-labelledby='trend-metric-label'>" +
          tm.map(function (id) { var mm = (D.metrics || []).filter(function (x) { return x.id === id; })[0] || { label: id };
            return "<button type='button' role='radio' aria-checked='" + (id === mId) + "' data-tmetric='" + esc(id) + "'>" + esc(mm.label) + "</button>"; }).join("") +
        "</div></div>" +
        "<div class='range'><label class='field'><span>From</span><select id='trend-from'>" + opts(tState.from) + "</select></label>" +
        "<label class='field'><span>To</span><select id='trend-to'>" + opts(tState.to) + "</select></label></div></div>" +
        "<ul class='legend'>" + series.map(function (s) { return "<li class='s" + s.cat._i + "'>" + esc(s.cat.label) + "</li>"; }).join("") + "</ul>" +
        (series.length ? "<div class='chart'>" + svg + "</div>" : "<p class='muted'>No monthly data for this brand and metric.</p>") +
        "<details class='measure'><summary>Monthly table and definition</summary>" +
          "<div class='chart'><table><caption>" + esc(m.label) + " by month</caption><thead><tr><th scope='col'>Month</th>" + series.map(function (s) { return "<th scope='col'>" + esc(s.cat.label) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          range.map(function (mo, i) { return "<tr><th scope='row'>" + monthLabel(mo) + "</th>" + series.map(function (s) { return "<td>" + (s.pts[i] == null ? "n/a" : esc(fmt(m, s.pts[i]))) + "</td>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table></div>" +
          "<dl class='defs'><div><dt>Definition</dt><dd>" + esc(m.definition || "") + "</dd></div><div><dt>Source</dt><dd>" + esc(m.source || "") + "</dd></div>" +
          (D.trendNote ? "<div><dt>Months</dt><dd>" + esc(D.trendNote) + "</dd></div>" : "") + "</dl></details>";
      $all("#trend-card [data-tmetric]").forEach(function (b) {
        b.addEventListener("click", function () { tState.metric = b.getAttribute("data-tmetric"); drawTrend(); var f = $("#trend-card [data-tmetric='" + tState.metric + "']"); if (f) f.focus(); });
      });
      $("#trend-from").addEventListener("change", function (e) { tState.from = e.target.value; if (tState.to < tState.from) tState.to = tState.from; drawTrend(); });
      $("#trend-to").addEventListener("change", function (e) { tState.to = e.target.value; if (tState.from > tState.to) tState.from = tState.to; drawTrend(); });
      var hit = $("#trend-hit"); if (!hit || !series.length) return;
      var cross = $("#trend-cross"), svgEl = hit.ownerSVGElement;
      hit.addEventListener("mousemove", function (e) {
        var pt = svgEl.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        var loc = pt.matrixTransform(svgEl.getScreenCTM().inverse());
        var i = range.length < 2 ? 0 : Math.round((loc.x - L) / pw * (range.length - 1));
        i = Math.max(0, Math.min(range.length - 1, i));
        cross.setAttribute("x1", x(i)); cross.setAttribute("x2", x(i));
        showTip("<strong>" + monthLabel(range[i]) + "</strong>" + series.map(function (s) { return "<span><i class='sw s" + s.cat._i + "'></i>" + esc(s.cat.label) + ": " + (s.pts[i] == null ? "n/a" : esc(fmt(m, s.pts[i]))) + "</span>"; }).join(""), e.clientX, e.clientY);
      });
      hit.addEventListener("mouseleave", function () { hideTip(); cross.setAttribute("x1", -10); cross.setAttribute("x2", -10); });
    }
    function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
    function monthLabel(mo, short) {
      var n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var p = mo.split("-"); return n[+p[1] - 1] + (short ? "" : " " + p[0]);
    }
    drawTrend();
  })();

  /* ---------- lead journey ---------- */
  (function () {
    var J = C.journey; if (!J || !has(J.stages)) return;
    var legendLabel = {}; (J.legend || []).forEach(function (l) { legendLabel[l.level] = l.label; });
    var html = "<div class='wrap'>" + head("Lead journey", "From search to sales opportunity", J.intro) +
      "<ul class='j-legend' aria-label='Legend'>" + (J.legend || []).map(function (l) { return "<li class='lv-" + esc(l.level) + "'><i aria-hidden='true'></i>" + esc(l.label) + "</li>"; }).join("") + "</ul>" +
      "<div class='journey'><ol class='stages' role='tablist' aria-label='Lead journey stages'>" +
      J.stages.map(function (s, i) {
        return "<li role='presentation'><button type='button' role='tab' id='stage-" + esc(s.id) + "' aria-controls='stage-panel' aria-selected='" + (i === 0) + "' tabindex='" + (i === 0 ? 0 : -1) + "' class='stage lv-" + esc(s.level) + "' data-i='" + i + "'>" +
          "<span class='n'>" + (i + 1) + "</span><span class='s-label'>" + esc(s.label) + "</span><span class='s-role'>" + esc(s.role) + "</span></button></li>";
      }).join("") + "</ol><div class='stage-panel' id='stage-panel' role='tabpanel' tabindex='0'></div></div></div>";
    $("#journey").innerHTML = html;
    function show(i) {
      var s = J.stages[i];
      $all("#journey .stage").forEach(function (b, k) { b.setAttribute("aria-selected", String(k === i)); b.tabIndex = k === i ? 0 : -1; });
      var p = $("#stage-panel");
      p.setAttribute("aria-labelledby", "stage-" + s.id);
      p.innerHTML = "<p class='eyebrow'>Stage " + (i + 1) + " of " + J.stages.length + "</p><h3>" + esc(s.label) + "</h3>" +
        "<p class='pill lv-" + esc(s.level) + "'>" + esc(legendLabel[s.level] || s.role) + " · " + esc(s.role) + "</p>" +
        "<p>" + esc(s.detail) + "</p>" + tags(s.tools) +
        "<div class='stage-nav'>" +
          (i > 0 ? "<button type='button' class='linkish' data-go='" + (i - 1) + "'>← " + esc(J.stages[i - 1].label) + "</button>" : "<span></span>") +
          (i < J.stages.length - 1 ? "<button type='button' class='linkish' data-go='" + (i + 1) + "'>" + esc(J.stages[i + 1].label) + " →</button>" : "") +
        "</div>";
    }
    $("#journey").addEventListener("click", function (e) {
      var b = e.target.closest(".stage, [data-go]"); if (!b) return;
      show(+(b.getAttribute("data-i") || b.getAttribute("data-go")));
    });
    $("#journey .stages").addEventListener("keydown", function (e) {
      var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(e.key in keys) && e.key !== "Home" && e.key !== "End") return;
      var btns = $all("#journey .stage"), cur = btns.indexOf(document.activeElement);
      var n = e.key === "Home" ? 0 : e.key === "End" ? btns.length - 1 : (cur + keys[e.key] + btns.length) % btns.length;
      btns[n].focus(); show(n); e.preventDefault();
    });
    show(0);
  })();

  /* ---------- skills ---------- */
  (function () {
    if (!has(C.skills)) return;
    $("#skills").innerHTML = "<div class='wrap'>" + head("Skills", "Tools and how I use them", "Described by what I actually do with each one, not by self-rated levels.") +
      "<div class='skills'>" + C.skills.map(function (g) {
        return "<section class='skill-group'><h3>" + esc(g.group) + "</h3><dl>" + g.items.map(function (it) {
          return "<div><dt>" + esc(it.name) + "</dt>" + (it.how ? "<dd>" + esc(it.how) + "</dd>" : "") + "</div>";
        }).join("") + "</dl></section>";
      }).join("") + "</div></div>";
  })();

  /* ---------- gallery ---------- */
  (function () {
    if (!has(C.gallery)) { $("#gallery").remove(); return; }
    var cats = uniqArr(C.gallery.map(function (g) { return g.category; }).filter(Boolean));
    $("#gallery").innerHTML = "<div class='wrap'>" + head("Work samples", "Selected work", "Approved samples. Select one to enlarge.") +
      (cats.length > 1 ? "<div class='chips' role='group' aria-label='Filter samples'><button type='button' class='chip' aria-pressed='true' data-gcat='all'>All</button>" +
        cats.map(function (c) { return "<button type='button' class='chip' aria-pressed='false' data-gcat='" + esc(c) + "'>" + esc(c) + "</button>"; }).join("") + "</div>" : "") +
      "<ul class='gallery'>" + C.gallery.map(function (g, i) {
        return "<li data-gcat='" + esc(g.category || "") + "'><button type='button' class='g-item' data-g='" + i + "'><img src='" + esc(g.image) + "' alt='" + esc(g.alt || g.title) + "' loading='lazy'><span>" + esc(g.title) + "</span></button></li>";
      }).join("") + "</ul></div>" +
      "<dialog id='lightbox' aria-label='Enlarged work sample'><button type='button' class='close' id='lb-close'>Close</button><div id='lb-body'></div></dialog>";
    var dlg = $("#lightbox");
    $("#gallery").addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (chip) {
        var c = chip.getAttribute("data-gcat");
        $all("#gallery .chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === chip)); });
        $all("#gallery .gallery li").forEach(function (li) { li.hidden = !(c === "all" || li.getAttribute("data-gcat") === c); });
        return;
      }
      var it = e.target.closest(".g-item"); if (!it) return;
      var g = C.gallery[+it.getAttribute("data-g")];
      $("#lb-body").innerHTML = "<img src='" + esc(g.image) + "' alt='" + esc(g.alt || g.title) + "'><h3>" + esc(g.title) + "</h3>" +
        (g.context ? "<p>" + esc(g.context) + "</p>" : "") + (g.role ? "<p><strong>My role:</strong> " + esc(g.role) + "</p>" : "") + (g.year ? "<p class='muted'>" + esc(g.year) + "</p>" : "");
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
    $("#lb-close").addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  })();
  function uniqArr(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }

  /* ---------- credentials ---------- */
  (function () {
    var certs = C.certifications || [], edu = C.education || [];
    if (!certs.length && !edu.length) return;
    $("#credentials").innerHTML = "<div class='wrap'>" + head("Credentials", "Certifications and education") +
      "<div class='cred-grid'>" +
        "<section><h3>Certifications</h3><ul class='certs'>" + certs.map(function (c) {
          var name = c.url ? "<a href='" + esc(c.url) + "' target='_blank' rel='noopener'>" + esc(c.name) + "</a>" : esc(c.name);
          return "<li><div><strong>" + name + "</strong><span>" + esc(c.issuer) + "</span></div><div class='cert-date'><span>" + esc(c.date) + "</span>" + (c.status ? "<em>" + esc(c.status) + "</em>" : "") + "</div></li>";
        }).join("") + "</ul></section>" +
        "<section><h3>Education</h3><ul class='certs'>" + edu.map(function (e) {
          return "<li><div><strong>" + esc(e.degree) + "</strong><span>" + esc(e.school) + "</span></div><div class='cert-date'><span>" + esc(e.years) + "</span></div></li>";
        }).join("") + "</ul>" +
        (has(C.languages) ? "<h3 class='lang-h'>Languages</h3><p>" + C.languages.map(esc).join(" · ") + "</p>" : "") +
        "</section></div></div>";
  })();

  /* ---------- contact ---------- */
  (function () {
    var rows = "";
    if (P.email) rows += "<div class='c-row'><dt>Email</dt><dd><span class='select' id='email-text'>" + esc(P.email) + "</span>" +
      "<button type='button' class='btn small' id='copy-email'>Copy</button><a class='btn small' href='mailto:" + esc(P.email) + "'>Open mail app</a></dd></div>";
    if (P.phone) rows += "<div class='c-row'><dt>Phone</dt><dd><span class='select' id='phone-text'>" + esc(P.phone) + "</span>" +
      "<button type='button' class='btn small' id='copy-phone'>Copy</button>" + (P.phoneIntl ? "<a class='btn small' href='tel:" + esc(P.phoneIntl) + "'>Call</a>" : "") + "</dd></div>";
    if (P.linkedin) rows += "<div class='c-row'><dt>LinkedIn</dt><dd><a href='" + esc(P.linkedin) + "' target='_blank' rel='noopener'>" + esc(P.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")) + "</a></dd></div>";
    if (showResume) rows += "<div class='c-row'><dt>Résumé</dt><dd><a href='" + esc(P.resume) + "' download>Download PDF</a></dd></div>";
    (P.otherLinks || []).forEach(function (l) { rows += "<div class='c-row'><dt>" + esc(l.label) + "</dt><dd><a href='" + esc(l.url) + "' target='_blank' rel='noopener'>" + esc(l.url.replace(/^https?:\/\//, "")) + "</a></dd></div>"; });
    if (P.location) rows += "<div class='c-row'><dt>Based in</dt><dd>" + esc(P.location) + "</dd></div>";
    $("#contact").innerHTML = "<div class='wrap'>" + head("Contact", "Get in touch", "Email is the fastest way to reach me.") + "<dl class='contact'>" + rows + "</dl></div>";
    function copier(btnId, textId, value) {
      var cb = $("#" + btnId); if (!cb) return;
      cb.addEventListener("click", function () {
        var done = function () { cb.textContent = "Copied"; setTimeout(function () { cb.textContent = "Copy"; }, 1800); };
        var fallback = function () {
          var r = document.createRange(); r.selectNodeContents($("#" + textId));
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); cb.textContent = "Selected, press Ctrl+C";
        };
        try { navigator.clipboard.writeText(value).then(done, fallback); } catch (e) { fallback(); }
      });
    }
    copier("copy-email", "email-text", P.email);
    copier("copy-phone", "phone-text", P.phone);
  })();

  /* ---------- footer ---------- */
  $("#footer").innerHTML = "<div class='wrap foot'><p>© " + esc((C.meta && C.meta.year) || "") + " " + esc(P.name) + ". Last updated " + esc((C.meta && C.meta.lastUpdated) || "") + ".</p>" +
    "<p>Figures are aggregates for the dates shown. No client or customer data appears on this site.</p></div>";

  /* ---------- deep links (#case-id) ---------- */
  function fromHash() {
    var h = location.hash.replace("#", "");
    if (h.indexOf("case-") === 0) openCase(h.slice(5));
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
