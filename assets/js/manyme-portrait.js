(() => {
  const root = document.getElementById('manyme-portrait');
  if (!root) return;

  const VISIBLE_MS = 2000;
  const FADE_MS = 1000;
  const COUNT = 25;

  const layerA = root.querySelector('.manyme-portrait__layer--a');
  const layerB = root.querySelector('.manyme-portrait__layer--b');
  if (!layerA || !layerB) return;

  const layers = [layerA, layerB];
  let active = 0;
  let order = [];
  let pos = 0;
  let cycleReset = false;

  const baseUrl = () => {
    const b = root.dataset.base || '/assets/manyme/';
    return b.replace(/\/?$/, '/');
  };

  const urlFor = (n) => `${baseUrl()}me${n}.png`;

  const shuffleOrder = (prevLast) => {
    const arr = Array.from({ length: COUNT }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (prevLast !== undefined && arr[0] === prevLast) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  };

  const preloadAll = () => {
    const urls = Array.from({ length: COUNT }, (_, i) => urlFor(i + 1));
    return Promise.all(
      urls.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load ${src}`));
            img.src = src;
          })
      )
    );
  };

  const afterFade = () => {
    if (!cycleReset) {
      pos += 1;
    }
    active = 1 - active;
    scheduleStep();
  };

  const runCrossfade = (inactive, nextNum) => {
    const current = layers[active];
    const next = layers[inactive];
    next.src = urlFor(nextNum);

    const go = () => {
      next.classList.add('is-visible');
      current.classList.remove('is-visible');
      window.setTimeout(afterFade, FADE_MS);
    };

    if (next.decode) {
      next.decode().then(go).catch(go);
    } else if (next.complete && next.naturalWidth > 0) {
      go();
    } else {
      next.addEventListener('load', go, { once: true });
      next.addEventListener('error', go, { once: true });
    }
  };

  const transitionToNext = () => {
    cycleReset = false;
    let nextNum;
    if (pos < COUNT - 1) {
      nextNum = order[pos + 1];
    } else {
      order = shuffleOrder(order[COUNT - 1]);
      pos = 0;
      nextNum = order[0];
      cycleReset = true;
    }
    const inactive = 1 - active;
    runCrossfade(inactive, nextNum);
  };

  const scheduleStep = () => {
    window.setTimeout(transitionToNext, VISIBLE_MS);
  };

  const start = () => {
    order = shuffleOrder();
    pos = 0;
    const first = layers[0];
    first.src = urlFor(order[0]);
    first.classList.add('is-visible');
    layers[1].classList.remove('is-visible');

    const ready = () => {
      root.classList.add('manyme-portrait--ready');
      scheduleStep();
    };

    if (first.decode) {
      first.decode().then(ready).catch(ready);
    } else {
      ready();
    }
  };

  preloadAll()
    .then(start)
    .catch(() => {
      console.warn('manyme-portrait: preload incomplete; starting anyway');
      start();
    });
})();
