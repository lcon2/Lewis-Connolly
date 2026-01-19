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
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&display=swap" rel="stylesheet">
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
      --breath-orange: #EF8E54;
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
      font-family: "Baloo 2", "Segoe UI", sans-serif;
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
      height: 760vh;
    }

    .scroll-hint {
      position: fixed;
      left: 50%;
      bottom: 4.5vh;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 14px;
      text-transform: uppercase;
      letter-spacing: 0.28em;
      font-size: 0.85rem;
      color: rgba(31, 30, 27, 0.5);
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .scroll-hint::before {
      content: "";
      display: block;
      width: 48px;
      height: 1px;
      background: rgba(31, 30, 27, 0.35);
    }

    .breath {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .breath-ring {
      width: 140px;
      height: 140px;
      border: 6px solid var(--breath-orange);
      border-radius: 9999px;
      box-sizing: border-box;
      filter: drop-shadow(0 0 10px rgba(239, 142, 84, 0.25));
      transform-origin: center;
      opacity: 0.7;
    }

    .breath-text {
      position: absolute;
      font-size: clamp(1.2rem, 3.2vw, 2.4rem);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #7b5a43;
      opacity: 0;
      transition: opacity 0.2s ease;
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
  <div class="scroll-hint" aria-hidden="true">Scroll</div>
  <div class="breath" aria-hidden="true">
    <div class="breath-ring"></div>
    <div class="breath-text" data-state="in">Breath in</div>
    <div class="breath-text" data-state="out">Breath out</div>
  </div>
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
      var scrollHint = document.querySelector(".scroll-hint");
      var breathWrap = document.querySelector(".breath");
      var breathRing = document.querySelector(".breath-ring");
      var breathIn = document.querySelector('.breath-text[data-state="in"]');
      var breathOut = document.querySelector('.breath-text[data-state="out"]');
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

      var progress = 0;
      function update() {
        var maxScroll = Math.max(1, scrollSpace.offsetHeight - window.innerHeight);
        var target = clamp01(window.scrollY / maxScroll);
        progress = lerp(progress, target, 0.09);
        var segment = 1 / (words.length + 1);
        var wordsEnd = segment * words.length;

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

        var hintFade = clamp01(1 - progress / 0.08);
        scrollHint.style.opacity = hintFade.toFixed(3);

        var breathLocal = clamp01((progress - wordsEnd) / segment);
        if (breathLocal <= 0) {
          breathWrap.style.opacity = 0;
          breathIn.style.opacity = 0;
          breathOut.style.opacity = 0;
        } else {
          var fadeIn = clamp01(breathLocal / 0.12);
          var fadeOut = clamp01((1 - breathLocal) / 0.12);
          breathWrap.style.opacity = Math.min(1, fadeIn, fadeOut);

          var cycles = 2;
          var cycle = (breathLocal * cycles) % 1;
          var inhale = cycle < 0.5;
          var phase = inhale ? cycle / 0.5 : (cycle - 0.5) / 0.5;
          var eased = easeInOutCubic(phase);
          var scale = inhale ? lerp(0.92, 1.08, eased) : lerp(1.08, 0.92, eased);
          breathRing.style.transform = "scale(" + scale + ")";

          var textFade = inhale ? lerp(0.2, 1, eased) : lerp(1, 0.2, eased);
          breathIn.style.opacity = inhale ? textFade : 0;
          breathOut.style.opacity = inhale ? 0 : textFade;
        }
      }

      function animate() {
        update();
        window.requestAnimationFrame(animate);
      }

      window.addEventListener("resize", update);
      animate();
    })();
  </script>
</body>
</html>
