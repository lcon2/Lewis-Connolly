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

  <!-- YouTube IFrame API -->
  <script src="https://www.youtube.com/iframe_api" defer></script>
</head>
<body>
  <!-- quietly looping cello pad (autoplays muted, then unmutes after first pointer movement) -->
  <audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

  <!-- intro still image -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="Spanish‑moss‑draped oaks">

  <!-- primary entry button -->
  <button id="beginBtn">Drift</button>

  <!-- intro video via YouTube embed -->
  <div id="video-container">
    <div id="driftYT"></div>
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
  document.addEventListener('DOMContentLoaded', () => {
    bgAudio.volume = 0;
    bgAudio.play().catch(() => {});
  });
  function unmuteAndFadeIn(){
    if(!bgAudio.muted) return;
    bgAudio.muted = false;
    let step=0, steps=18, target=0.18;
    const fade = setInterval(()=>{
      step++; bgAudio.volume = target*step/steps;
      if(step>=steps) clearInterval(fade);
    },60);
  }
  document.addEventListener('pointermove', unmuteAndFadeIn, { once:true, passive:true });

  /* YouTube IFrame API */
  let ytPlayer;
  function onYouTubeIframeAPIReady(){
    ytPlayer = new YT.Player('driftYT',{
      width:'100%', height:'100%', videoId:'RmKkHZ-7rcY',
      playerVars:{autoplay:0, controls:0, modestbranding:1, rel:0, playsinline:1},
      events:{'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}
    });
  }
  function onPlayerReady(event){
    // initialize video-container layout for 16:9
    const vc = document.getElementById('video-container');
    vc.style.paddingTop = '56.25%';
    vc.style.position = 'relative';
    document.getElementById('driftYT').style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
  }
  function onPlayerStateChange(event){ if(event.data===0) document.getElementById('choices').style.display='flex'; }

  /* Button click to reveal and play intro */
  const introImg = document.getElementById('introImage');
  const beginBtn = document.getElementById('beginBtn');
  const videoWrap= document.getElementById('video-container');
  beginBtn.addEventListener('click',()=>{
    let steps=20, cur=0, iv=setInterval(()=>{
      cur++; bgAudio.volume=bgAudio.volume*(1-(cur/steps));
      if(cur>=steps){ clearInterval(iv); bgAudio.pause(); bgAudio.currentTime=0; }
    },50);
    introImg.style.opacity='0';
    beginBtn.style.opacity='0'; beginBtn.style.pointerEvents='none';
    videoWrap.style.opacity='1';
    ytPlayer.playVideo();
  });

  /* Branch loader (local MP4s) */
  function loadVideo(path){
    ytPlayer.destroy();
    const vc=document.getElementById('video-container');
    vc.innerHTML=`<video id="branchVid" controls autoplay playsinline style="width:100%;height:auto"><source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4"></video>`;
    document.getElementById('choices').style.display='none';
  }
</script>
</body>
</html>
