---
layout: null
title: "Abide"
ai_summary: "A scroll-driven meditation where five words bloom large, then settle into the edges of the screen."
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
  <style>
    :root {
      --paper: #F6EEDB;
      --ink: #1f1e1b;
      --rose: #E68A8A;
      --blush: #F2B6B6;
      --sage: #8FBFA8;
      --mint: #BFE3D0;
      --powder: #9EC6DF;
      --sky: #CFE6F3;
      --amber: #F2C87E;
      --apricot: #F3B37A;
    }

    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    body {
      font-family: "Inter", "Segoe UI", sans-serif;
      font-weight: 600;
      color: var(--ink);
      background:
        radial-gradient(70% 60% at 18% 18%, #fff4e6 0%, transparent 60%),
        radial-gradient(80% 70% at 80% 20%, #e9f4ff 0%, transparent 60%),
        radial-gradient(90% 80% at 50% 85%, #f9e9d0 0%, transparent 65%),
        var(--paper);
      overflow-x: hidden;
    }

    #stage {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      pointer-events: none;
    }

    .word {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: clamp(2.5rem, 10vw, 10rem);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.2);
      transition: opacity 0.2s linear;
      will-change: transform, opacity;
      text-shadow: 0 6px 24px rgba(31, 30, 27, 0.08);
    }

    #scroll-space {
      height: 600vh;
    }

    @media (prefers-reduced-motion: reduce) {
      .word {
        transition: none;
      }
    }
  </style>
</head>
<body>
  <main id="stage" aria-hidden="true"></main>
  <div id="scroll-space" aria-hidden="true"></div>

  <script>
    (function () {
      var words = [
        { text: "Awareness", endX: -32, endY: -18, settleScale: 0.35, color: "var(--rose)" },
        { text: "Light", endX: 30, endY: -24, settleScale: 0.4, color: "var(--powder)" },
        { text: "Love", endX: -26, endY: 22, settleScale: 0.38, color: "var(--sage)" },
        { text: "Energy", endX: 26, endY: 18, settleScale: 0.36, color: "var(--amber)" },
        { text: "Truth", endX: 0, endY: 30, settleScale: 0.4, color: "var(--blush)" }
      ];

      var stage = document.getElementById("stage");
      var scrollSpace = document.getElementById("scroll-space");
      var nodes = words.map(function (item) {
        var el = document.createElement("div");
        el.className = "word";
        el.textContent = item.text;
        el.style.color = item.color;
        stage.appendChild(el);
        return el;
      });

      function clamp01(value) {
        return Math.max(0, Math.min(1, value));
      }

      function lerp(a, b, t) {
        return a + (b - a) * t;
      }

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function update() {
        var maxScroll = Math.max(1, scrollSpace.offsetHeight - window.innerHeight);
        var progress = clamp01(window.scrollY / maxScroll);
        var segment = 1 / words.length;

        words.forEach(function (word, i) {
          var start = i * segment;
          var local = clamp01((progress - start) / segment);
          var el = nodes[i];

          if (local <= 0) {
            el.style.opacity = 0;
            el.style.transform = "translate(-50%, -50%) scale(0.2)";
            return;
          }

          var growPhase = 0.6;
          var scale;
          var x;
          var y;

          if (local < growPhase) {
            var grow = easeInOutCubic(local / growPhase);
            scale = lerp(0.2, 1.6, grow);
            x = 0;
            y = 0;
            el.style.opacity = Math.min(1, local / 0.15);
          } else {
            var settle = easeInOutCubic((local - growPhase) / (1 - growPhase));
            scale = lerp(1.6, word.settleScale, settle);
            x = lerp(0, word.endX, settle);
            y = lerp(0, word.endY, settle);
            el.style.opacity = 1;
          }

          var fadeStart = 0.84;
          if (local > fadeStart) {
            var fade = clamp01((1 - local) / (1 - fadeStart));
            el.style.opacity = fade;
          }

          el.style.transform = "translate(-50%, -50%) translate(" + x + "vw, " + y + "vh) scale(" + scale + ")";
        });
      }

      var ticking = false;
      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            update();
            ticking = false;
          });
          ticking = true;
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", update);
      update();
    })();
  </script>
</body>
</html>
