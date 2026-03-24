(() => {
  const fullLayer = document.querySelector('.home-backdrop__full');
  if (!fullLayer) return;

  const webp = fullLayer.getAttribute('data-bg-webp');
  const fallback = fullLayer.getAttribute('data-bg-fallback');

  const markLoaded = (url) => {
    if (!url) return;
    fullLayer.style.backgroundImage = `url("${url.replace(/"/g, '\\"')}")`;
    fullLayer.classList.add('is-loaded');
  };

  const tryLoad = (src, onFail) => {
    if (!src) {
      if (onFail) onFail();
      return;
    }
    const img = new Image();
    img.onload = () => markLoaded(src);
    img.onerror = () => { if (onFail) onFail(); };
    img.src = src;
  };

  tryLoad(webp, () => tryLoad(fallback, () => fullLayer.classList.add('is-error')));
})();
