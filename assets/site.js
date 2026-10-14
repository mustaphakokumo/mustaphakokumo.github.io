(function () {
  "use strict";

  // Abstract / Presentations toggles. Each button controls the panel named in
  // aria-controls; opening one panel of a paper closes its sibling.
  document.querySelectorAll(".toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.closest(".toggles").querySelectorAll(".toggle").forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        document.getElementById(other.getAttribute("aria-controls")).hidden = true;
      });
      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        document.getElementById(btn.getAttribute("aria-controls")).hidden = false;
      }
    });
  });

  // Copy email.
  var copyBtn = document.getElementById("copy-email");
  var email = document.getElementById("email");
  if (copyBtn && email) {
    copyBtn.addEventListener("click", function () {
      var text = email.textContent.trim();
      var done = function () {
        copyBtn.textContent = "Copied";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
      };
      var fallback = function () {
        var range = document.createRange();
        range.selectNodeContents(email);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
    });
  }

  // Theme toggle: flips between light and dark, remembers the choice.
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Highlight the nav link of the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href*="#"]'))
    .filter(function (a) { return document.getElementById(a.hash.slice(1)); });
  var sections = links.map(function (a) { return document.getElementById(a.hash.slice(1)); });
  function setCurrent() {
    var line = window.innerHeight * 0.3;
    var current = sections[0];
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    links.forEach(function (a) {
      if (a.hash === "#" + current.id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  if (sections.length) {
    setCurrent();
    window.addEventListener("scroll", setCurrent, { passive: true });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
