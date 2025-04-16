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

  <style>
    /* ---------- base ---------- */
    *{box-sizing:border-box;margin:0;padding:0}
    body{
      background:#111; color:#f4f4f4; font-family:Georgia,serif;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      min-height:100vh; overflow:hidden;
    }

    /* ---------- intro still image ---------- */
    #introImage{
      position:fixed; inset:0; width:100%; height:100%; object-fit:cover;
      opacity:1; transition:opacity .8s ease-out;
    }

    /* ---------- begin button ---------- */
    #beginBtn{
      position:fixed; left:50%; top:50%; transform:translate(-50%,-50%);
      padding:.75rem 2.5rem; font-size:2rem;
      font-family:"Brush Script MT","Great Vibes",cursive;
      color:#f4f4f4; background:rgba(0,0,0,.55); border:2px solid #f4f4f4;
      cursor:pointer; opacity:0; pointer-events:none;
      transition:opacity .8s ease-out, background .3s;
      animation:fadeIn 1s forwards 3s;          /* show after 3 s */
    }
    #beginBtn:hover{background:rgba(255,255,255,.1)}
    @keyframes fadeIn{to{opacity:1; pointer-events:auto}}

    /* ---------- video container ---------- */
    #video-container{
      position:relative; width:100%; max-width:960px; opacity:0; transition:opacity .8s;
    }
    video{width:100%; height:auto; border:none}

    /* ---------- choice thumbnails ---------- */
    #choices{display:none; justify-content:center; margin-top:20px; gap:40px}
    .choice{background:#222; border:1px solid #444; padding:20px; cursor:pointer; transition:background .3s}
    .choice:hover{background:#333}
  </style>
</head>

<body>
  <!-- intro still -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="Spanish‑moss oaks">

  <!-- begin button -->
  <button id="beginBtn">Begin</button>

  <!-- video -->
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
    const introImg   = document.getElementById('introImage');
    const beginBtn   = document.getElementById('beginBtn');
    const videoWrap  = document.getElementById('video-container');
    const video      = document.getElementById('driftVideo');
    const choices    = document.getElementById('choices');

    // --- start experience ---
    beginBtn.addEventListener('click', () => {
      introImg.style.opacity = '0';
      beginBtn.style.opacity = '0';
      videoWrap.style.opacity = '1';
      video.play();
    });

    // --- show archetype fork when intro finishes ---
    video.addEventListener('ended', () => {
      choices.style.display = 'flex';
    });

    // --- branch loader ---
    function loadVideo(path){
      video.src = `{{ '/videos/' | relative_url }}${path}.mp4`;
      choices.style.display = 'none';
      video.play();
    }
  </script>
</body>
</html>