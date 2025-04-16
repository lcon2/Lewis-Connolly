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
  <!-- quietly looping cello pad (autoplays muted, then unmutes after first pointer movement) -->
  <audio id="bgAudio"
         src="{{ '/assets/audio/cello.mp3' | relative_url }}"
         preload="auto" loop muted playsinline></audio>

  <!-- intro still image -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="Spanish‑moss‑draped oaks">

  <!-- primary entry button -->
  <button id="beginBtn">Drift</button>

  <!-- intro & branch videos -->
  <div id="video-container">
    <video id="driftVideo" muted playsinline>
      <source src="{{ '/assets/videos/intro.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- archetype choices -->
  <div id="choices">
    <div class="choice" onclick="loadVideo('longing')">
      <img src="{{ '/assets/images/longing.png' | relative_url }}" alt="Longing" style="width:200px;height:auto">
    </div>
    <div class="choice" onclick="loadVideo('stillness')">
      <img src="{{ '/assets/images/stillness.png' | relative_url }}" alt="Stillness" style="width:200px;height:auto">
    </div>
  </div>

  <script>
    const bgAudio   = document.getElementById('bgAudio');
    const introImg  = document.getElementById('introImage');
    const beginBtn  = document.getElementById('beginBtn');
    const videoWrap = document.getElementById('video-container');
    const video     = document.getElementById('driftVideo');
    const choices   = document.getElementById('choices');

    /* -------------------------------------------------- */
    /*  Autoplay muted, un‑mute on first pointer movement */
    /* -------------------------------------------------- */

    document.addEventListener('DOMContentLoaded', () => {
      bgAudio.volume = 0;
      bgAudio.play().catch(()=>{/* muted autoplay often allowed */});
    });

    function unmuteAndFadeIn(){
      if(!bgAudio.muted) return;           // already unmuted
      bgAudio.muted = false;
      const targetVol = 0.18;
      const steps = 18;
      let step = 0;
      const fade = setInterval(() => {
        step++;
        bgAudio.volume = (targetVol/steps)*step;
        if(step>=steps) clearInterval(fade);
      }, 60);
    }

    // single pointer movement counts as user gesture in all major browsers
    document.addEventListener('pointermove', unmuteAndFadeIn, { once:true, passive:true });

    /* -------------------- main button click -------------------- */
    beginBtn.addEventListener('click', () => {
      // fade out cello pad over 1 s
      const fadeDuration = 1000; // ms
      const fadeSteps = 20;
      const stepTime = fadeDuration / fadeSteps;
      let currentStep = 0;
      const initialVol = bgAudio.volume;
      const fade = setInterval(() => {
        currentStep++;
        bgAudio.volume = initialVol * (1 - currentStep / fadeSteps);
        if (currentStep >= fadeSteps) {
          clearInterval(fade);
          bgAudio.pause();
          bgAudio.currentTime = 0;
        }
      }, stepTime);

      introImg.style.opacity  = '0';
      beginBtn.style.opacity  = '0';
      beginBtn.style.pointerEvents = 'none';

      videoWrap.style.opacity = '1';
      video.play();
    });

    /*  show archetype fork when intro video ends  */
    video.addEventListener('ended', () => {
      choices.style.display = 'flex';
    });

    /*  branch loader  */
    function loadVideo(path){
      video.src = `{{ '/assets/videos/' | relative_url }}${path}.mp4`;
      choices.style.display = 'none';
      video.play();
    }
  </script>
</body>
</html>
