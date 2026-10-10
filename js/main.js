/* Comportament mínim del web: configuració, menú mòbil i botons de CV. Sense dependències. */
(function () {
  "use strict";
  var doc = document;
  var cfg = window.SITE_CONFIG || {};
  var DEFAULT_NAME = "Mestral";

  doc.documentElement.classList.add("js");

  // 1. Nom i subtítol de la consultora (js/config.js)
  var name = cfg.name || DEFAULT_NAME;
  var tagline = cfg.tagline || "";
  if (name !== DEFAULT_NAME) {
    doc.title = doc.title.split(DEFAULT_NAME).join(name);
  }
  Array.prototype.forEach.call(doc.querySelectorAll("[data-site-name]"), function (el) {
    el.textContent = name;
  });
  if (tagline) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-site-tagline]"), function (el) {
      el.textContent = tagline;
    });
  }

  // 2. Botons «CV»: tots apunten a la mateixa carpeta de Drive (cfg.cvFolderUrl)
  var cvUrl = (cfg.cvFolderUrl || "").trim();
  Array.prototype.forEach.call(doc.querySelectorAll("[data-cv]"), function (el) {
    if (!cvUrl) return; // es manté el marcador [PENDENT] del HTML
    var link = doc.createElement("a");
    link.className = "btn btn-outline";
    link.href = cvUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "CV";
    var who = el.getAttribute("data-cv");
    link.setAttribute("aria-label", "CV de " + who + " (carpeta compartida, accés restringit; s'obri en una pestanya nova)");
    el.parentNode.replaceChild(link, el);
  });

  // 3. Menú de navegació en mòbil
  var toggle = doc.querySelector(".nav-toggle");
  var nav = doc.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setOpen(false);
    });
  }
})();
