---
layout: null
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drift</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ '/assets/css/drift.css' | relative_url }}" rel="stylesheet">

  <!-- YouTube API -->
  <script src="https://www.youtube.com/iframe_api" defer></script>

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
      overflow: hidden;
    }

    #driftYT {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    #driftYT iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 177.77vh; /* Default: wide screen */
      height: 100vh;
      transform: translate(-50%, -50%);
      object-fit: cover;
      pointer-events: none;
    }

    @media (min-aspect-ratio: 16/9) {
      #driftYT iframe {
        width: 100vw;
        height: 56.25vw;
      }
    }

    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <!-- Background audio -->
  <audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

  <!-- Entry image and button -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="" style="position:fixed;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;">
  <button id="beginBtn" style="z-index:2;">Drift</button>

  <!-- YouTube container full-screen -->
  <div id="video-container">
    <div id="driftYT"></div>
  </div>

  <!-- Choices overlay -->
  <div id="choices" style="display:none;position:fixed;inset:0;z-index:3;justify-content:center;align-items:center;">
    <div class="choice" onclick="loadVideo('longing')">
      <img src="{{ '/assets/images/longing.png' | relative_url }}" alt="Longing">
    </div>
    <div class="choice" onclick="loadVideo('stillness')">
      <img src="{{ '/assets/images/stillness.png' | relative_url }}" alt="Stillness">
    </div>
  </div>

<script>
  const bgAudio = document.getElementById('bgAudio');
  document.addEventListener('DOMContentLoaded', () => {
    bgAudio.volume = 0;
    bgAudio.play().catch(()=>{});
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

  let ytPlayer;
  function onYouTubeIframeAPIReady(){
    ytPlayer = new YT.Player('driftYT', {
      videoId: 'RmKkHZ-7rcY',
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        fs: 0,
        iv_load_policy: 3,
        playsinline: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }

  function onPlayerReady() {
    document.getElementById('driftYT').style.display = 'block';
  }

  function onPlayerStateChange(e) {
    if (e.data === 0) {
      document.getElementById('choices').style.display = 'flex';
    }
  }

  const introImg = document.getElementById('introImage'),
        btn = document.getElementById('beginBtn'),
        vidWrap = document.getElementById('video-container');

  btn.addEventListener('click', () => {
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
    vidWrap.style.opacity = 1;
    ytPlayer.playVideo();
  });

  function loadVideo(path) {
    ytPlayer.destroy();
    const vc = document.getElementById('video-container');
    vc.innerHTML = `<video id="branchVid" autoplay playsinline muted style="width:100vw;height:100vh;object-fit:cover;"><source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4"></video>`;
    document.getElementById('choices').style.display = 'none';
  }
</script>
</body>
</html>