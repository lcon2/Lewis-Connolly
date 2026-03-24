(() => {
  const photo = document.querySelector('.home-backdrop__photo');
  if (!photo) return;

  const src = photo.getAttribute('data-bg-src');
  if (!src) return;

  const apply = () => {
    photo.style.backgroundImage = `url("${src.replace(/"/g, '\\"')}")`;
    photo.classList.add('is-loaded');
  };

  const img = new Image();
  img.onload = apply;
  img.onerror = () => photo.classList.add('is-error');
  img.src = src;
})();
