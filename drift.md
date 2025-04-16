---
layout: page
title: "Drift"
permalink: /drift/
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drift: An Interactive Southern Gothic Experience</title>

  <!-- cursive font for the button label -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

  <!-- project‑specific stylesheet -->
  <link href="{{ '/assets/css/drift.css' | relative_url }}" rel="stylesheet">
</head>

<body>
  <!-- quietly looping cello pad (starts muted; unmuted on first interaction) -->
  <audio id="bgAudio" src="{{ '/assets/music/cello.mp3' | relative_url }}" preload="auto" loop muted></audio>

  <!-- intro still image -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="Spanish‑moss‑draped oaks">

  <!-- primary entry button -->
  <button id="beginBtn">Drift</button>

  <!-- intro & branch videos -->
  <div id="video-container">
    <video id="driftVideo" muted playsinline>
      <source src="{{ '/videos/intro.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- archetype choices -->
  <div id="choices">
    <div class="choice" onclick="loadVideo('longing')">
      <img src="{{ '/images/longing.jpg' | relative_url }}" alt="Longing" style="width:200px;height:auto">
    </div>
    <div class="choice" onclick="loadVideo('stillness')">
      <img src="{{ '/images/stillness.jpg' | relative_url }}" alt="Stillness" style="width:200px;height:auto">
    </div>
  </div>

  <script>
    const bgAudio   = document.getElementById('bgAudio');
    const introImg  = document.getElementById('introImage');
    const beginBtn  = document.getElementById('beginBtn');
    const videoWrap = document.getElementById('video-container');
    const video     = document.getElementById('driftVideo');
    const choices   = document.getElementById('choices');

    // ----- start experience -----
    beginBtn.addEventListener('click', () => {
      introImg.style.opacity  = '0';
      beginBtn.style.opacity  = '0';
      beginBtn.style.pointerEvents = 'none';

      videoWrap.style.opacity = '1';
      video.play();

      // unmute and play background cello softly
      bgAudio.muted  = false;
      bgAudio.volume = 0.15; // ~15% volume
      bgAudio.play().catch(() => {/* ignore autoplay failures */});
    });

    // show archetype fork when intro video ends
    video.addEventListener('ended', () => {
      choices.style.display = 'flex';
    });

    // branch loader
    function loadVideo(path){
      video.src = `{{ '/videos/' | relative_url }}${path}.mp4`;
      choices.style.display = 'none';
      video.play();
    }
  </script>
</body>
</html>
