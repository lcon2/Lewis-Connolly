---
layout: page        # or whatever layout you like (e.g., default, home, etc.)
title: "Drift"
permalink: /drift/  # gives you lewisconnolly.com/drift
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drift: An Interactive Southern Gothic Experience</title>
  <style>
    body {
      margin: 0;
      background-color: #111;
      color: #f4f4f4;
      font-family: 'Georgia', serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
    }
    #video-container {
      width: 100%;
      max-width: 960px;
      position: relative;
    }
    video {
      width: 100%;
      height: auto;
      border: none;
    }
    #choices {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 40px;
    }
    .choice {
      background-color: #222;
      border: 1px solid #444;
      padding: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .choice:hover {
      background-color: #333;
    }
  </style>
</head>
<body>
  <div id="video-container">
    <video id="driftVideo" autoplay muted playsinline>
      <source src="videos/intro.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div id="choices" style="display: none;">
    <div class="choice" onclick="loadVideo('longing')"> 
      <img src="images/longing.jpg" alt="Longing" style="width: 200px; height: auto;">
    </div>
    <div class="choice" onclick="loadVideo('stillness')">
      <img src="images/stillness.jpg" alt="Stillness" style="width: 200px; height: auto;">
    </div>
  </div>

  <script>
    const video = document.getElementById('driftVideo');
    const choices = document.getElementById('choices');

    video.addEventListener('ended', () => {
      choices.style.display = 'flex';
    });

    function loadVideo(path) {
      video.src = `videos/${path}.mp4`;
      choices.style.display = 'none';
      video.play();
    }
  </script>
</body>
</html>
