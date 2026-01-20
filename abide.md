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
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&display=swap" rel="stylesheet">
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
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    body {
      font-family: "Baloo 2", "Segoe UI", sans-serif;
      font-weight: 600;
      color: var(--ink);
      background: var(--paper);
      overflow-x: hidden;
      overflow-y: scroll;
      overscroll-behavior: none;
    }

    body::-webkit-scrollbar,
    html::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    body::before {
      content: "";
      position: fixed;
      inset: -15%;
      background:
        radial-gradient(120% 120% at 10% 12%, rgba(255, 244, 229, 0.9) 0%, rgba(255, 244, 229, 0) 65%),
        radial-gradient(130% 120% at 86% 22%, rgba(222, 237, 248, 0.75) 0%, rgba(222, 237, 248, 0) 68%),
        radial-gradient(140% 120% at 52% 92%, rgba(249, 231, 210, 0.9) 0%, rgba(249, 231, 210, 0) 70%),
        radial-gradient(160% 160% at 30% 60%, rgba(246, 238, 219, 0.55) 0%, rgba(246, 238, 219, 0) 72%);
      filter: blur(45px);
      opacity: 0.9;
      z-index: -1;
    }

    .abide-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 86px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(17, 17, 17, 0.96);
      backdrop-filter: blur(6px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      transform: translateY(-100%);
      opacity: 0;
      transition: transform 0.35s ease, opacity 0.35s ease;
      z-index: 10;
    }

    .abide-header.is-visible {
      transform: translateY(0);
      opacity: 1;
    }

    .abide-header .logo img {
      display: block;
      width: 70px;
      height: auto;
      border-radius: 5px;
      filter: grayscale(100%) brightness(0.8);
      transition: filter 0.3s ease, transform 0.3s ease;
    }

    .abide-header .logo img:hover,
    .abide-header .logo a:focus-visible img {
      transform: scale(1.1);
      filter: grayscale(0%) brightness(1.2);
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
      height: 1800vh;
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

    .sequence {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      pointer-events: none;
    }

    .sequence-group {
      position: absolute;
      inset: 0;
      display: block;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .sequence-word {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: clamp(1.4rem, 4.4vw, 3.8rem);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.4);
      transition: opacity 0.25s ease;
      text-shadow: 0 6px 24px rgba(31, 30, 27, 0.08);
    }

    .sequence-word.is-lead {
      font-size: clamp(2rem, 6.8vw, 6rem);
    }

    .end-card {
      position: fixed;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      width: min(460px, 78vw);
      background: rgba(246, 238, 219, 0.92);
      border-radius: 18px;
      padding: 26px 28px 24px;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.4s ease;
    }

    .end-card.is-visible {
      opacity: 0.7;
      pointer-events: auto;
    }

    .end-card p {
      margin: 0 0 18px;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      color: rgba(31, 30, 27, 0.78);
      font-weight: 400;
    }

    .end-card .end-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    .end-card .end-link,
    .end-card .end-button {
      background: transparent;
      border: none;
      padding: 0;
      font: inherit;
      font-weight: 400;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.85rem;
      color: rgba(31, 30, 27, 0.68);
      cursor: pointer;
      transition: color 0.2s ease;
      text-decoration: none;
    }

    .end-card .end-link:hover,
    .end-card .end-link:focus-visible,
    .end-card .end-button:hover,
    .end-card .end-button:focus-visible {
      color: rgba(31, 30, 27, 0.92);
    }

    .end-card .end-close {
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      opacity: 0.8;
    }

    @media (prefers-reduced-motion: reduce) {
      .word {
        transition: none;
      }
    }
  </style>
</head>
<body>
  <header class="abide-header">
    <div class="logo">
      <a href="{{ '/' | relative_url }}" aria-label="Home">
        <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Logo">
      </a>
    </div>
  </header>
  <audio id="bg-audio" src="{{ '/assets/audio/OM.mp3' | relative_url }}" autoplay loop preload="auto"></audio>
  <main id="stage" aria-hidden="true"></main>
  <div class="scroll-hint" aria-hidden="true">Scroll</div>
  <div class="breath" aria-hidden="true">
    <div class="breath-ring"></div>
    <div class="breath-text" data-state="in">Breath in</div>
    <div class="breath-text" data-state="out">Breath Out</div>
  </div>
  <section class="sequence" aria-hidden="true">
    <div class="sequence-lines"></div>
  </section>
  <section class="end-card" aria-hidden="true">
    <p>If this was meaningful,<br>you're welcome to pass it on.</p>
    <div class="end-actions">
      <button class="end-button" type="button">Copy link</button>
      <a class="end-link" href="https://buymeacoffee.com/lewisconnolly" target="_blank" rel="noopener noreferrer">Buy me a beer</a>
      <a class="end-link end-close" href="{{ '/' | relative_url }}">Close</a>
    </div>
  </section>
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
      var header = document.querySelector(".abide-header");
      var sequenceRoot = document.querySelector(".sequence-lines");
      var endCard = document.querySelector(".end-card");
      var copyButton = document.querySelector(".end-button");
      var bgAudio = document.getElementById("bg-audio");
      var nodes = words.map(function (item) {
        var el = document.createElement("div");
        el.className = "word";
        el.textContent = item.text;
        el.style.color = item.color;
        stage.appendChild(el);
        return el;
      });

      var sequenceSteps = [
        {
          lines: [
            { text: "Notice the body", x: 0, y: 0, scale: 1.1, role: "lead" },
            { text: "Breath", x: -28, y: -20, scale: 0.8 },
            { text: "Temperature", x: 24, y: -18, scale: 0.78 },
            { text: "Pressure", x: -18, y: 22, scale: 0.82 },
            { text: "Contact", x: 28, y: 18, scale: 0.8 }
          ]
        },
        {
          lines: [
            { text: "Notice sensation", x: 0, y: -6, scale: 1.05, role: "lead" },
            { text: "Tightness", x: -32, y: 14, scale: 0.8 },
            { text: "Ease", x: 30, y: 6, scale: 0.85 },
            { text: "Movement", x: 0, y: 26, scale: 0.78 },
            { text: "Nothing to fix", x: -24, y: -24, scale: 0.72 },
            { text: "Nothing to improve", x: 26, y: -24, scale: 0.72 },
            { text: "Just appearing", x: 0, y: 0, scale: 0.7 }
          ]
        },
        {
          lines: [
            { text: "Notice thought", x: 0, y: -8, scale: 1.05, role: "lead" },
            { text: "A word", x: -26, y: 18, scale: 0.78 },
            { text: "A memory", x: 24, y: 20, scale: 0.76 },
            { text: "A plan", x: 0, y: 30, scale: 0.72 },
            { text: "Arising", x: -30, y: -22, scale: 0.7 },
            { text: "Passing", x: 28, y: -20, scale: 0.7 },
            { text: "Like weather", x: -6, y: 2, scale: 0.7 },
            { text: "Moving through a wider sky", x: 6, y: 10, scale: 0.66 }
          ]
        },
        {
          lines: [
            { text: "You are not the thought", x: 0, y: -10, scale: 1.05, role: "lead" },
            { text: "You are what notices it", x: 0, y: 10, scale: 0.88 },
            { text: "Still here", x: -28, y: -26, scale: 0.72 },
            { text: "Before the thought", x: 28, y: -24, scale: 0.7 },
            { text: "Still here", x: -24, y: 26, scale: 0.72 },
            { text: "After it fades", x: 24, y: 24, scale: 0.7 }
          ]
        },
        {
          lines: [
            { text: "Notice emotion", x: 0, y: -8, scale: 1.05, role: "lead" },
            { text: "Pleasant", x: -30, y: 18, scale: 0.78 },
            { text: "Unpleasant", x: 28, y: 14, scale: 0.78 },
            { text: "Neutral", x: 0, y: 28, scale: 0.76 },
            { text: "Let it be exactly as it is", x: 0, y: -26, scale: 0.7 },
            { text: "No resistance", x: -20, y: -2, scale: 0.7 },
            { text: "No grasping", x: 22, y: 2, scale: 0.7 }
          ]
        },
        {
          lines: [
            { text: "Everything is allowed", x: 0, y: -6, scale: 1.05, role: "lead" },
            { text: "Nothing needs permission", x: 0, y: 10, scale: 0.84 },
            { text: "To arise", x: -26, y: 24, scale: 0.74 },
            { text: "Or to leave", x: 26, y: 24, scale: 0.74 }
          ]
        },
        {
          lines: [
            { text: "Rest as awareness", x: 0, y: -8, scale: 1.05, role: "lead" },
            { text: "Not focusing", x: -26, y: 18, scale: 0.78 },
            { text: "Not drifting", x: 26, y: 18, scale: 0.78 },
            { text: "Just present", x: 0, y: 30, scale: 0.76 }
          ]
        },
        {
          lines: [
            { text: "This moment", x: 0, y: -6, scale: 1.05, role: "lead" },
            { text: "Is complete", x: -22, y: 18, scale: 0.8 },
            { text: "Without commentary", x: 24, y: 18, scale: 0.76 }
          ]
        },
        {
          lines: [
            { text: "There is nowhere else to be", x: 0, y: -6, scale: 1.05, role: "lead" },
            { text: "Nothing else required", x: 0, y: 18, scale: 0.82 }
          ]
        },
        {
          lines: [
            { text: "Just this", x: 0, y: -8, scale: 1.05, role: "lead" },
            { text: "Breath", x: -30, y: 18, scale: 0.78 },
            { text: "Sensation", x: 0, y: 26, scale: 0.78 },
            { text: "Sound", x: 26, y: 18, scale: 0.78 },
            { text: "Silence", x: 0, y: -26, scale: 0.74 }
          ]
        },
        {
          lines: [
            { text: "Here", x: 0, y: 0, scale: 1.1, role: "lead" }
          ]
        },
        {
          lines: [
            { text: "Abide", x: 0, y: 0, scale: 1.2, role: "lead" }
          ]
        }
      ];

      var palette = [
        "var(--rose)",
        "var(--powder)",
        "var(--sage)",
        "var(--amber)",
        "var(--blush)",
        "var(--mint)",
        "var(--sky)",
        "var(--apricot)"
      ];

      var sequenceGroups = sequenceSteps.map(function (step, stepIndex) {
        var group = document.createElement("div");
        group.className = "sequence-group";
        step.lines.forEach(function (line, lineIndex) {
          var lineEl = document.createElement("div");
          lineEl.className = "sequence-word" + (line.role === "lead" ? " is-lead" : "");
          lineEl.textContent = line.text;
          lineEl.style.color = palette[(stepIndex + lineIndex) % palette.length];
          lineEl.dataset.x = line.x;
          lineEl.dataset.y = line.y;
          lineEl.dataset.scale = line.scale;
          lineEl.dataset.role = line.role || "";
          group.appendChild(lineEl);
        });
        sequenceRoot.appendChild(group);
        return group;
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
      var endTimer = null;
      var endReady = false;
      function update() {
        var maxScroll = Math.max(1, scrollSpace.offsetHeight - window.innerHeight);
        var target = clamp01(window.scrollY / maxScroll);
        progress = lerp(progress, target, 0.05);
        var wordsPortion = 0.18;
        var breathPortion = 0.25;
        var sequencePortion = 0.57;
        var segment = wordsPortion / words.length;
        var wordsEnd = wordsPortion;

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

        var breathLocal = clamp01((progress - wordsEnd) / breathPortion);
        if (breathLocal <= 0) {
          breathWrap.style.opacity = 0;
          breathIn.style.opacity = 0;
          breathOut.style.opacity = 0;
        } else {
          var fadeIn = clamp01(breathLocal / 0.18);
          var fadeOut = clamp01((1 - breathLocal) / 0.18);
          breathWrap.style.opacity = Math.min(1, fadeIn, fadeOut);

          var cycles = 2;
          var cycle = (breathLocal * cycles) % 1;
          var inhaleEnd = 0.6;
          var holdEnd = 0.78;
          var minScale = 0.12;
          var maxScale = 6.0;
          var eased;
          var scale;
          var inhale = cycle < holdEnd;

          if (cycle < inhaleEnd) {
            eased = easeInOutCubic(cycle / inhaleEnd);
            scale = lerp(minScale, maxScale, eased);
          } else if (cycle < holdEnd) {
            scale = maxScale;
            eased = 1;
          } else {
            eased = easeInOutCubic((cycle - holdEnd) / (1 - holdEnd));
            scale = lerp(maxScale, minScale, eased);
          }
          breathRing.style.transform = "scale(" + scale + ")";

          if (cycle < inhaleEnd) {
            breathIn.style.opacity = lerp(0.2, 1, eased);
            breathOut.style.opacity = 0;
          } else if (cycle < holdEnd) {
            breathIn.style.opacity = 1;
            breathOut.style.opacity = 0;
          } else {
            breathIn.style.opacity = lerp(1, 0, eased);
            breathOut.style.opacity = lerp(0.2, 1, eased);
          }
        }

        var sequenceLocal = clamp01((progress - (wordsPortion + breathPortion)) / sequencePortion);
        var stepSpan = 1 / sequenceGroups.length;
        sequenceGroups.forEach(function (group, index) {
          var stepLocal = clamp01((sequenceLocal - index * stepSpan) / stepSpan);
          if (stepLocal <= 0 || stepLocal >= 1) {
            group.style.opacity = 0;
            return;
          }
          group.style.opacity = 1;
          var words = group.querySelectorAll(".sequence-word");
          var lineWindow = 0.95;
          var perLine = lineWindow / Math.max(1, words.length);
          var groupFadeOut = stepLocal > 0.9 ? (1 - stepLocal) / 0.1 : 1;
          words.forEach(function (wordEl, lineIndex) {
            var lineStart = lineIndex * perLine;
            var lineLocal = clamp01((stepLocal - lineStart) / perLine);
            var lineFadeIn = lineLocal < 0.45 ? lineLocal / 0.45 : 1;
            wordEl.style.opacity = Math.min(lineFadeIn, groupFadeOut).toFixed(3);

            var x = parseFloat(wordEl.dataset.x || "0");
            var y = parseFloat(wordEl.dataset.y || "0");
            var baseScale = parseFloat(wordEl.dataset.scale || "0.8");
            var role = wordEl.dataset.role || "";
            var scale = baseScale;
            if (role === "lead") {
              if (stepLocal < 0.4) {
                scale = lerp(0.4, 1.8, easeInOutCubic(stepLocal / 0.4));
              } else {
                scale = lerp(1.8, baseScale, easeInOutCubic((stepLocal - 0.4) / 0.6));
              }
            }
            wordEl.style.transform = "translate(-50%, -50%) translate(" + x + "vw, " + y + "vh) scale(" + scale + ")";
          });
        });

        var endStart = 0.985;
        if (target < endStart) {
          endReady = false;
          if (endTimer) {
            clearTimeout(endTimer);
            endTimer = null;
          }
          endCard.classList.remove("is-visible");
        } else {
          if (!endReady && !endTimer) {
            endTimer = setTimeout(function () {
              endReady = true;
              endCard.classList.add("is-visible");
              endTimer = null;
            }, 4000);
          }
        }

        if (endReady) {
          endCard.classList.add("is-visible");
        }
      }

      function animate() {
        update();
        window.requestAnimationFrame(animate);
      }

      var hideTimer = null;
      var lastMouseY = window.innerHeight;
      function scheduleHeaderHide() {
        if (!header) return;
        if (hideTimer) {
          clearTimeout(hideTimer);
        }
        hideTimer = setTimeout(function () {
          if (lastMouseY > window.innerHeight * 0.2) {
            header.classList.remove("is-visible");
          }
        }, 2000);
      }

      function onMouseMove(event) {
        if (!header) return;
        lastMouseY = event.clientY;
        if (event.clientY <= window.innerHeight * 0.2) {
          header.classList.add("is-visible");
          if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
          }
        } else {
          scheduleHeaderHide();
        }
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", update);
      animate();

      function tryPlayAudio() {
        if (!bgAudio) return;
        bgAudio.volume = 0.35;
        var playPromise = bgAudio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {});
        }
      }

      tryPlayAudio();
      window.addEventListener("pointerdown", tryPlayAudio, { once: true });

      if (copyButton) {
        copyButton.addEventListener("click", function () {
          var url = window.location.href;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).catch(function () {});
          } else {
            var tmp = document.createElement("textarea");
            tmp.value = url;
            tmp.style.position = "fixed";
            tmp.style.left = "-9999px";
            document.body.appendChild(tmp);
            tmp.select();
            try {
              document.execCommand("copy");
            } catch (err) {}
            document.body.removeChild(tmp);
          }
        });
      }
    })();
  </script>
</body>
</html>
