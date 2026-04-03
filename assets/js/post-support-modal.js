document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("post-support-modal");
  var openBtn = document.getElementById("post-support-open");
  if (!modal || !openBtn) return;

  var panel = modal.querySelector(".post-support-modal__panel");
  var closeTriggers = modal.querySelectorAll("[data-post-support-close]");
  var closeIconBtn = modal.querySelector(".post-support-modal__close");
  var hint = document.getElementById("post-support-modal-hint");
  var actions = document.getElementById("post-support-modal-actions");
  var coffee = actions && actions.querySelector(".post-support-modal__action--coffee");
  var stripe = actions && actions.querySelector(".post-support-modal__action--stripe");
  var prevOverflow = "";
  var lastFocus = null;
  var clearHoverTimer = null;

  function focusables() {
    if (!panel) return [];
    return Array.prototype.slice.call(
      panel.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function setHintFrom(el) {
    if (!hint || !el || !el.getAttribute) return;
    var t = el.getAttribute("data-support-hint");
    if (t) hint.textContent = t;
  }

  function clearHint() {
    if (hint) hint.textContent = "";
  }

  function scheduleClearHoverHint() {
    if (!actions) return;
    if (clearHoverTimer) clearTimeout(clearHoverTimer);
    clearHoverTimer = setTimeout(function () {
      clearHoverTimer = null;
      try {
        if (!actions.matches(":hover")) clearHint();
      } catch (err) {
        clearHint();
      }
    }, 45);
  }

  function openModal() {
    lastFocus = document.activeElement;
    prevOverflow = document.body.style.overflow;
    clearHint();
    modal.hidden = false;
    document.body.classList.add("post-support-modal-open");
    document.body.style.overflow = "hidden";
    if (closeIconBtn) closeIconBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("post-support-modal-open");
    document.body.style.overflow = prevOverflow;
    clearHint();
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  if (coffee) {
    coffee.addEventListener("mouseenter", function () {
      if (clearHoverTimer) clearTimeout(clearHoverTimer);
      setHintFrom(coffee);
    });
  }
  if (stripe) {
    stripe.addEventListener("mouseenter", function () {
      if (clearHoverTimer) clearTimeout(clearHoverTimer);
      setHintFrom(stripe);
    });
    stripe.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
  if (actions) {
    actions.addEventListener("mouseleave", scheduleClearHoverHint);
    actions.addEventListener("focusin", function (e) {
      var t = e.target;
      if (
        t &&
        (t.classList.contains("post-support-modal__action--coffee") ||
          t.classList.contains("post-support-modal__action--stripe"))
      ) {
        setHintFrom(t);
      }
    });
    actions.addEventListener("focusout", function () {
      setTimeout(function () {
        if (actions && !actions.contains(document.activeElement)) clearHint();
      }, 0);
    });
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
