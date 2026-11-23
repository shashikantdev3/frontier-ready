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

// ---------- Practice questions: pick an answer, see if it is right ----------
(function () {
  var quizzes = document.querySelectorAll("[data-quiz]");
  quizzes.forEach(function (quiz) {
    var questions = quiz.querySelectorAll(".question[data-correct]");
    var score = quiz.querySelector(".quiz__score");
    var answered = 0, right = 0;

    var showScore = function () {
      if (!score) return;
      score.hidden = false;
      score.textContent = answered === questions.length
        ? "You got " + right + " of " + questions.length + " right." + (right < questions.length ? " Read the answers you missed, then come back tomorrow." : " Well done.")
        : right + " of " + answered + " right so far.";
    };

    questions.forEach(function (q) {
      var list = q.querySelector("ol");
      if (!list) return;
      var correct = parseInt(q.getAttribute("data-correct"), 10);
      var result = q.querySelector(".question__result");
      var details = q.querySelector(".question__answer");
      var items = list.querySelectorAll(":scope > li");
      list.classList.add("options");
      var buttons = [];
      items.forEach(function (li, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "option";
        b.innerHTML = '<span class="option__letter" aria-hidden="true">' + String.fromCharCode(65 + i) + "</span><span>" + li.innerHTML + "</span>";
        b.setAttribute("aria-label", "Option " + String.fromCharCode(65 + i) + ": " + li.textContent.trim());
        li.innerHTML = "";
        li.appendChild(b);
        buttons.push(b);
        b.addEventListener("click", function () {
          if (q.classList.contains("is-answered")) return;
          q.classList.add("is-answered");
          var ok = i + 1 === correct;
          answered++; if (ok) right++;
          buttons.forEach(function (x, j) {
            x.setAttribute("aria-disabled", "true");
            if (j + 1 === correct) x.classList.add("is-right");
          });
          if (!ok) b.classList.add("is-wrong");
          b.setAttribute("aria-pressed", "true");
          if (result) result.textContent = ok ? "Right." : "Not quite. The answer is " + String.fromCharCode(64 + correct) + ".";
          if (details) details.open = true;
          showScore();
        });
      });
    });
  });
})();

// ---------- On this page: mark the section you are reading ----------
(function () {
  var nav = document.querySelector(".on-page");
  if (!nav || !("IntersectionObserver" in window)) return;
  var links = {};
  nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var current = null;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var a = links[e.target.id];
      if (!a) return;
      if (current) current.removeAttribute("aria-current");
      a.setAttribute("aria-current", "location");
      current = a;
    });
  }, { rootMargin: "0px 0px -70% 0px" });
  Object.keys(links).forEach(function (id) {
    var h = document.getElementById(id);
    if (h) obs.observe(h);
  });
})();
