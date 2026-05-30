document.addEventListener("DOMContentLoaded", function () {
  var lightbox = document.querySelector("[data-post-lightbox]");
  var triggers = document.querySelectorAll("[data-post-lightbox-trigger]");
  if (!lightbox || !triggers.length) return;

  var panel = lightbox.querySelector(".post-image-lightbox__panel");
  var image = lightbox.querySelector("[data-post-lightbox-image]");
  var caption = lightbox.querySelector("[data-post-lightbox-caption]");
  var closeControls = lightbox.querySelectorAll("[data-post-lightbox-close]");
  var closeButton = lightbox.querySelector(".post-image-lightbox__close");
  var lastFocus = null;
  var previousOverflow = "";

  function focusables() {
    if (!panel) return [];
    return Array.prototype.slice.call(
      panel.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openLightbox(trigger) {
    if (!image) return;

    var source = trigger.getAttribute("data-lightbox-src") || trigger.getAttribute("href");
    if (!source) return;

    lastFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;

    image.src = source;
    image.alt = trigger.getAttribute("data-lightbox-alt") || "";

    if (caption) {
      caption.textContent = trigger.getAttribute("data-lightbox-caption") || "";
    }

    lightbox.hidden = false;
    document.body.classList.add("post-image-lightbox-open");
    document.body.style.overflow = "hidden";

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeLightbox() {
    if (lightbox.hidden) return;

    lightbox.hidden = true;
    document.body.classList.remove("post-image-lightbox-open");
    document.body.style.overflow = previousOverflow;

    if (image) {
      image.removeAttribute("src");
      image.alt = "";
    }

    if (caption) {
      caption.textContent = "";
    }

    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      openLightbox(trigger);
    });
  });

  closeControls.forEach(function (control) {
    control.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }

    if (event.key !== "Tab" || !panel) return;

    var list = focusables();
    if (!list.length) return;

    var first = list[0];
    var last = list[list.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});
