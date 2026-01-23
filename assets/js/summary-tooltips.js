(function () {
  var tooltip = document.createElement('div');
  tooltip.className = 'summary-tooltip';
  tooltip.innerHTML = '<div class="summary-title"></div><div class="summary-body"></div>';
  document.body.appendChild(tooltip);

  var titleEl = tooltip.querySelector('.summary-title');
  var bodyEl = tooltip.querySelector('.summary-body');
  var activeLink = null;

  function positionTooltip(link) {
    var rect = link.getBoundingClientRect();
    var tooltipRect = tooltip.getBoundingClientRect();
    var top = rect.top - tooltipRect.height - 12;
    var left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    var padding = 12;

    if (top < padding) {
      top = rect.bottom + 12;
    }
    if (left < padding) {
      left = padding;
    }
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    tooltip.style.top = Math.round(top) + 'px';
    tooltip.style.left = Math.round(left) + 'px';
  }

  function show(link) {
    var summary = link.getAttribute('data-summary');
    if (!summary) {
      return;
    }
    activeLink = link;
    var title = link.getAttribute('data-title');
    titleEl.textContent = title ? title.trim() : link.textContent.trim();
    bodyEl.textContent = summary.trim();
    tooltip.classList.add('is-visible');
    positionTooltip(link);
  }

  function hide() {
    tooltip.classList.remove('is-visible');
    activeLink = null;
  }

  document.addEventListener('mouseover', function (event) {
    var link = event.target.closest('a[data-summary]');
    if (!link || link === activeLink) {
      return;
    }
    show(link);
  });

  document.addEventListener('mouseout', function (event) {
    if (!activeLink) {
      return;
    }
    var related = event.relatedTarget;
    if (related && (activeLink.contains(related) || tooltip.contains(related))) {
      return;
    }
    hide();
  });

  document.addEventListener('focusin', function (event) {
    var link = event.target.closest('a[data-summary]');
    if (link) {
      show(link);
    }
  });

  document.addEventListener('focusout', function (event) {
    if (event.target.closest('a[data-summary]')) {
      hide();
    }
  });

  window.addEventListener('scroll', function () {
    if (activeLink) {
      positionTooltip(activeLink);
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    if (activeLink) {
      positionTooltip(activeLink);
    }
  });
})();
