// Frontier Ready: the only script on the site.
// It does two things: the theme toggle and the progress checklist. Every storage call is wrapped so the site works without it.

(function () {
  var store = {
    get: function (key) {
      try { return window.localStorage.getItem(key); } catch (e) { return null; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, value); return true; } catch (e) { return false; }
    },
    remove: function (key) {
      try { window.localStorage.removeItem(key); } catch (e) {}
    }
  };

  // ---------- Theme toggle ----------
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var paint = function () {
      var dark = root.getAttribute("data-theme") === "dark";
      toggle.setAttribute("aria-pressed", dark ? "true" : "false");
      toggle.textContent = dark ? "Light theme" : "Dark theme";
    };
    toggle.hidden = false;
    paint();
    toggle.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark";
      if (dark) { root.removeAttribute("data-theme"); store.set("fr-theme", "light"); }
      else { root.setAttribute("data-theme", "dark"); store.set("fr-theme", "dark"); }
      paint();
    });
  }

  // ---------- Contents menu: open on wide screens, folded on phones ----------
  var menu = document.querySelector(".contents__menu");
  if (menu && window.matchMedia("(max-width: 59.99rem)").matches) menu.open = false;

  // ---------- Wide tables scroll inside their own box on phones ----------
  document.querySelectorAll(".prose table").forEach(function (t) {
    if (t.parentElement.classList.contains("table-wrap")) return;
    var wrap = document.createElement("div");
    wrap.className = "table-wrap";
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });

  // ---------- Progress checklist ----------
  var list = document.querySelector("[data-checklist]");
  if (list) {
    var KEY = "fr-progress-v1";
    var boxes = list.querySelectorAll("input[type=checkbox]");
    var status = list.querySelector(".checklist__status");
    var bar = list.querySelector(".checklist__bar span");
    var note = list.querySelector(".checklist__note");
    var saved = {};
    try { saved = JSON.parse(store.get(KEY) || "{}") || {}; } catch (e) { saved = {}; }

    var update = function () {
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      status.textContent = done + " of " + boxes.length + " steps done";
      bar.style.width = (boxes.length ? (done / boxes.length) * 100 : 0) + "%";
    };

    boxes.forEach(function (b) {
      b.checked = saved[b.id] === true;
      b.addEventListener("change", function () {
        saved[b.id] = b.checked;
        var ok = store.set(KEY, JSON.stringify(saved));
        if (!ok && note) note.textContent = "Your browser is not saving progress, so ticks will clear when you leave this page.";
        update();
      });
    });

    var reset = list.querySelector(".checklist__reset");
    if (reset) {
      reset.hidden = false;
      reset.addEventListener("click", function () {
        boxes.forEach(function (b) { b.checked = false; });
        saved = {};
        store.remove(KEY);
        update();
      });
    }
    update();
  }
})();
