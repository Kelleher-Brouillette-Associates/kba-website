/* Kelleher Brouillette Associates — site behavior */
(function () {
  document.documentElement.classList.remove("no-js");

  /* Header state on scroll */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Services dropdown: hover opens it on desktop (CSS); click/tap toggles it everywhere */
  var dropdowns = document.querySelectorAll(".nav-dd");
  function closeDropdowns(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      dd.classList.remove("open");
      dd.querySelector(".nav-dd-btn").setAttribute("aria-expanded", "false");
    });
  }
  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector(".nav-dd-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      closeDropdowns(dd);
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-dd")) closeDropdowns();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openDd = document.querySelector(".nav-dd.open");
    closeDropdowns();
    if (openDd) openDd.querySelector(".nav-dd-btn").focus();
  });

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contact form → Formspree */
  var form = document.getElementById("contact-form");
  if (form) {
    var card = form.closest(".form-card");
    var status = form.querySelector(".form-status");
    var button = form.querySelector("button[type=submit]");
    var label = button.innerHTML;

    function showError(html) {
      status.className = "form-status err";
      status.innerHTML = html;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      button.disabled = true;
      button.innerHTML = "Sending…";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            card.classList.add("sent");
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
          }
          return res.json().then(function (data) {
            var msg = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(", ") : "";
            throw new Error(msg);
          });
        })
        .catch(function (err) {
          showError((err && err.message ? err.message + ". " : "Something went wrong sending your message. ") +
            'Please try again, or email us directly at <a href="mailto:alexkelleher18@gmail.com">alexkelleher18@gmail.com</a>.');
        })
        .finally(function () {
          button.disabled = false;
          button.innerHTML = label;
        });
    });
  }
})();
