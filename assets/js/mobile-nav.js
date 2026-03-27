(function () {
  var toggles = Array.prototype.slice.call(document.querySelectorAll('.home-mobile-menu-toggle[aria-controls]'));
  if (!toggles.length) {
    return;
  }

  function setMenuState(toggle, panel, isOpen) {
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      panel.hidden = false;
      document.body.classList.add('home-mobile-menu-open');
    } else {
      panel.hidden = true;
      document.body.classList.remove('home-mobile-menu-open');
    }
  }

  toggles.forEach(function (toggle) {
    var panelId = toggle.getAttribute('aria-controls');
    var panel = document.getElementById(panelId);
    if (!panel) {
      return;
    }

    var closeTriggers = Array.prototype.slice.call(panel.querySelectorAll('[data-mobile-menu-close]'));
    var menuLinks = Array.prototype.slice.call(panel.querySelectorAll('a'));

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      setMenuState(toggle, panel, !expanded);
    });

    closeTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        setMenuState(toggle, panel, false);
      });
    });

    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(toggle, panel, false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') {
        return;
      }
      if (toggle.getAttribute('aria-expanded') === 'true') {
        setMenuState(toggle, panel, false);
        toggle.focus();
      }
    });

    var mobileMenuMedia = window.matchMedia('(max-width: 768px)');
    function closeMenuOffMobile(event) {
      if (!event.matches) {
        setMenuState(toggle, panel, false);
      }
    }
    if (typeof mobileMenuMedia.addEventListener === 'function') {
      mobileMenuMedia.addEventListener('change', closeMenuOffMobile);
    } else if (typeof mobileMenuMedia.addListener === 'function') {
      mobileMenuMedia.addListener(closeMenuOffMobile);
    }
  });
})();
