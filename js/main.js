/* União Pinturas — main.js */

(function () {
  "use strict";

  const IMAGES = {
    hero: "/images/hero.jpg",
    servicos: "/images/serviços.jpg",
    processo: "/images/processo.jpg",
    sobre: "/images/sobre.jpg",
    cta: "/images/cta.jpg"
  };

  function setupImageFallbacks() {
    document.querySelectorAll("[data-fallback]").forEach(function (el) {
      const img = el.tagName === "IMG" ? el : el.querySelector("img");
      if (!img) return;

      img.addEventListener("error", function () {
        const parent = el.closest(".hero__media, .services__banner, .process__media, .about__media, .cta__bg") || el;
        if (parent) {
          parent.classList.add("is-fallback");
        }
        img.style.display = "none";
      });
    });
  }

  function setupHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !isOpen);
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("is-open");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  function setupFAQ() {
    document.querySelectorAll(".faq__question").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const answerId = btn.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        document.querySelectorAll(".faq__question").forEach(function (other) {
          other.setAttribute("aria-expanded", "false");
          const otherAnswer = document.getElementById(other.getAttribute("aria-controls"));
          if (otherAnswer) otherAnswer.hidden = true;
        });

        if (!expanded && answer) {
          btn.setAttribute("aria-expanded", "true");
          answer.hidden = false;
        }
      });
    });
  }

  function setupReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupTimeline() {
    const steps = document.querySelector(".process__steps");
    if (!steps) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      steps.classList.add("is-drawn");
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            steps.classList.add("is-drawn");
            observer.unobserve(steps);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(steps);
  }

  function setupYear() {
    const el = document.getElementById("year");
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupImageFallbacks();
    setupHeader();
    setupMobileMenu();
    setupFAQ();
    setupReveal();
    setupTimeline();
    setupYear();
  });
})();
