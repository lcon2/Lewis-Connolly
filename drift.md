---
layout: null
ai_summary: "Drift is a small, interactive meditation: a still image, a word, a doorway, then a slow descent into music and video. It is not a story so much as an atmosphere. You are invited to let the mind wander, then choose between longing and stillness. The piece is about surrender, mood, and gentle choice."
title: "Drift"
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drift</title>

  <!-- Cursive font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ '/assets/css/drift.css' | relative_url }}" rel="stylesheet">
  <script src="https://www.youtube.com/iframe_api"></script>

  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      background: black;
    }

    #video-container {
      position: fixed;
      inset: 0;
      z-index: 0;
      opacity: 0;
    }

    #video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      pointer-events: none;
    }

    #introImage {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    #beginBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      font-size: 1.5rem;
      padding: 0.75em 1.5em;
      background: rgba(0, 0, 0, 0.6);
      color: #ffeb3b;
      border: 2px solid #ffeb3b;
      border-radius: 12px;
      font-family: 'Great Vibes', cursive;
      cursor: pointer;
      transition: opacity 0.5s ease;
    }

    #blackOverlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      z-index: 3;
      transition: opacity 2s ease;
      pointer-events: none;
    }

    #doorsOverlay {
      position: fixed;
      top: 0;
      left: 50%;
      width: 90vw;
      height: 100vh;
      transform: translateX(-50%);
      object-fit: cover;
      opacity: 0;
      z-index: 4;
      transition: opacity 2s ease;
      pointer-events: none;
    }

    #choices {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 5;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>
  <!-- Background audio -->
  <audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

  <!-- Entry still & button -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="">
  <button id="beginBtn">Drift</button>

  <!-- Overlays -->
  <img id="blackOverlay" src="{{ '/assets/images/black.png' | relative_url }}" alt="Black Overlay">
  <img id="doorsOverlay" src="{{ '/assets/images/doors.png' | relative_url }}" alt="Doors Overlay">

  <!-- YouTube container -->
  <div id="video-container"></div>

  <!-- Choices overlay -->
  <div id="choices">
    <div class="choice" onclick="loadVideo('longing')">
      <img src="{{ '/assets/images/longing.png' | relative_url }}" alt="Longing">
    </div>
    <div class="choice" onclick="loadVideo('stillness')">
      <img src="{{ '/assets/images/stillness.png' | relative_url }}" alt="Stillness">
    </div>
  </div>

<script>
  const bgAudio = document.getElementById('bgAudio');
  const introImg = document.getElementById('introImage');
  const btn = document.getElementById('beginBtn');
  const vidWrap = document.getElementById('video-container');
  const blackOverlay = document.getElementById('blackOverlay');
  const doorsOverlay = document.getElementById('doorsOverlay');

  let ytPlayer;

  document.addEventListener('DOMContentLoaded', () => {
    bgAudio.volume = 0;
    bgAudio.play().catch(() => {});
  });

  document.addEventListener('pointermove', () => {
    if (bgAudio.muted) {
      bgAudio.muted = false;
      let step = 0;
      const fade = setInterval(() => {
        step++;
        bgAudio.volume = 0.18 * (step / 20);
        if (step >= 20) clearInterval(fade);
      }, 60);
    }
  }, { once: true, passive: true });

  btn.addEventListener('click', () => {
    // Fade out cello music
    let s = 0;
    const iv = setInterval(() => {
      s++;
      bgAudio.volume *= (1 - s / 20);
      if (s >= 20) {
        clearInterval(iv);
        bgAudio.pause();
      }
    }, 50);

    introImg.style.opacity = 0;
    btn.style.display = 'none';

    // Inject YouTube iframe
    vidWrap.innerHTML = `
      <div id="ytPlayerHolder">
        <iframe
          id="ytPlayerFrame"
          src="https://www.youtube.com/embed/RmKkHZ-7rcY?autoplay=1&loop=1&controls=0&enablejsapi=1&playlist=RmKkHZ-7rcY&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      </div>
    `;
    vidWrap.style.opacity = 1;

    // Wait and initialize player
    setTimeout(() => {
      ytPlayer = new YT.Player('ytPlayerFrame', {
        events: {
          'onReady': onPlayerReady
        }
      });
    }, 500);
  });

  function onPlayerReady() {
    const poll = setInterval(() => {
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
      const time = ytPlayer.getCurrentTime();
      if (time >= 56 && !window._doorsRevealed) {
        window._doorsRevealed = true;

        // Fade in doors.png immediately
        doorsOverlay.style.opacity = 1;

        // Fade in black.png after 1s delay
        setTimeout(() => {
          blackOverlay.style.opacity = 1;
        }, 1000);

        clearInterval(poll);
      }
    }, 500);
  }

  function loadVideo(path) {
    ytPlayer?.destroy?.();
    const vc = document.getElementById('video-container');
    vc.innerHTML = `<video id="branchVid" autoplay playsinline muted style="width:100vw;height:100vh;object-fit:cover;"><source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4"></video>`;
    document.getElementById('choices').style.display = 'none';
  }
</script>
</body>
</html>