(function () {
  var root = document.querySelector('.sidebar--archive-years');
  if (!root) return;

  function setYearOpen(li, open) {
    var btn = li.querySelector('.archive-sidebar-year__toggle');
    var months = li.querySelector('.archive-sidebar-year__months');
    if (!btn || !months) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    li.classList.toggle('is-open', open);
    if (open) months.removeAttribute('hidden');
    else months.setAttribute('hidden', '');
  }

  function applyDefaultOpenState() {
    var cur = new Date().getFullYear();
    root.querySelectorAll('.archive-sidebar-year').forEach(function (li) {
      var y = parseInt(li.getAttribute('data-year'), 10);
      if (isNaN(y)) return;
      var open = y >= cur - 2 && y <= cur;
      setYearOpen(li, open);
    });
  }

  function openYearFromHash() {
    var m = /^#year-(\d{4})$/.exec(window.location.hash);
    if (!m) return;
    var li = root.querySelector('.archive-sidebar-year[data-year="' + m[1] + '"]');
    if (li) setYearOpen(li, true);
  }

  function onToggleClick(e) {
    var btn = e.target.closest('.archive-sidebar-year__toggle');
    if (!btn || !root.contains(btn)) return;
    var li = btn.closest('.archive-sidebar-year');
    var months = li.querySelector('.archive-sidebar-year__months');
    if (!months) return;
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    setYearOpen(li, !expanded);
  }

  root.addEventListener('click', onToggleClick);
  window.addEventListener('hashchange', openYearFromHash);

  applyDefaultOpenState();
  openYearFromHash();
})();
