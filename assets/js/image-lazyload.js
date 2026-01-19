(() => {
  const manifest = window.IMAGE_MANIFEST;
  if (!manifest) return;

  const normalizeSrc = (src) => {
    if (!src || src.startsWith('data:')) return null;
    try {
      return new URL(src, window.location.origin).pathname;
    } catch (err) {
      return null;
    }
  };

  const wrapWithPicture = (img, webpSrcset) => {
    const parent = img.parentElement;
    if (!parent || parent.tagName === 'PICTURE') return;
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.type = 'image/webp';
    source.setAttribute('data-srcset', webpSrcset);
    parent.insertBefore(picture, img);
    picture.appendChild(source);
    picture.appendChild(img);
  };

  const prepareImage = (img) => {
    if (img.dataset.lazyPrepared) return false;
    const key = normalizeSrc(img.getAttribute('src'));
    if (!key || !manifest[key]) return false;

    const entry = manifest[key];
    if (entry.webp_srcset) {
      wrapWithPicture(img, entry.webp_srcset);
    }

    img.dataset.lazyPrepared = 'true';
    if (!img.getAttribute('loading')) {
      img.loading = 'lazy';
    }
    if (!img.getAttribute('decoding')) {
      img.decoding = 'async';
    }
    img.classList.add('blur-up');

    if (entry.placeholder) {
      img.dataset.src = img.getAttribute('src');
      img.src = entry.placeholder;
    }

    if (entry.srcset) {
      img.dataset.srcset = entry.srcset;
    }

    if (!img.getAttribute('sizes')) {
      img.dataset.sizes = '(max-width: 900px) 100vw, 600px';
    }

    return true;
  };

  const loadImage = (img) => {
    if (img.dataset.lazyLoaded) return;
    img.dataset.lazyLoaded = 'true';

    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
    if (img.dataset.sizes) {
      img.sizes = img.dataset.sizes;
    }

    const picture = img.parentElement;
    if (picture && picture.tagName === 'PICTURE') {
      const source = picture.querySelector('source[data-srcset]');
      if (source) {
        source.srcset = source.getAttribute('data-srcset');
      }
    }

    const finalize = () => {
      img.classList.add('is-loaded');
    };

    if (img.decode) {
      img.decode().then(finalize).catch(finalize);
    } else if (!img.complete) {
      img.addEventListener('load', finalize, { once: true });
    } else {
      finalize();
    }

    setTimeout(() => {
      if (!img.classList.contains('is-loaded')) {
        finalize();
      }
    }, 2000);
  };

  const images = Array.from(document.querySelectorAll('img'));
  const targets = images.filter(prepareImage);

  if (!targets.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    targets.forEach((img) => observer.observe(img));
    targets.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
        loadImage(img);
      }
    });
  } else {
    targets.forEach(loadImage);
  }
})();
