document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("post-support-modal");
  var openBtn = document.getElementById("post-support-open");
  if (!modal || !openBtn) return;

  var panel = modal.querySelector(".post-support-modal__panel");
  var closeTriggers = modal.querySelectorAll("[data-post-support-close]");
  var closeIconBtn = modal.querySelector(".post-support-modal__close");
  var prevOverflow = "";
  var lastFocus = null;

  function focusables() {
    if (!panel) return [];
    return Array.prototype.slice.call(
      panel.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openModal() {
    lastFocus = document.activeElement;
    prevOverflow = document.body.style.overflow;
    modal.hidden = false;
    document.body.classList.add("post-support-modal-open");
    document.body.style.overflow = "hidden";
    if (closeIconBtn) closeIconBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("post-support-modal-open");
    document.body.style.overflow = prevOverflow;
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  openBtn.addEventListener("click", function () {
    openModal();
  });

  closeTriggers.forEach(function (el) {
    el.addEventListener("click", function () {
      closeModal();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key !== "Tab" || !panel) return;
    var list = focusables();
    if (list.length === 0) return;
    var first = list[0];
    var last = list[list.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
