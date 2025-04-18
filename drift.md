---
layout: null
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

  <!-- Drift styles -->
  <link href="{{ '/assets/css/drift.css' | relative_url }}" rel="stylesheet">

  <!-- YouTube IFrame API -->
  <script src="https://www.youtube.com/iframe_api" defer></script>
</head>
<body style="margin:0;overflow:hidden;">
  <!-- Background audio -->
  <audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

  <!-- Entry still & button -->
  <img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="" style="position:fixed;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;">
  <button id="beginBtn" style="z-index:2;">Drift</button>

  <!-- YouTube container full-screen -->
  <div id="video-container" style="position:fixed;inset:0;opacity:0;z-index:0;">
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
  // Audio setup
  const bgAudio = document.getElementById('bgAudio');
  document.addEventListener('DOMContentLoaded', () => {
    bgAudio.volume = 0;
    bgAudio.play().catch(()=>{});
  });
  document.addEventListener('pointermove', () => {
    if(bgAudio.muted){
      bgAudio.muted = false;
      let step=0,fade= setInterval(()=>{
        step++; bgAudio.volume = 0.18 * (step/20);
        if(step>=20) clearInterval(fade);
      },60);
    }
  },{once:true,passive:true});

  // YouTube player
  let ytPlayer;
  function onYouTubeIframeAPIReady(){
    ytPlayer = new YT.Player('driftYT',{
      width:'100%',height:'100%',videoId:'RmKkHZ-7rcY',
      playerVars:{autoplay:0,controls:0,modestbranding:1,rel:0,fs:0,iv_load_policy:3,playsinline:1},
      events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}
    });
  }
  function onPlayerReady(){
    // full screen iframe
    const el = document.getElementById('driftYT');
    el.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
  }
  function onPlayerStateChange(e){ if(e.data===0) document.getElementById('choices').style.display='flex'; }

  // Start intro
  const introImg = document.getElementById('introImage'), btn=document.getElementById('beginBtn'), vidWrap=document.getElementById('video-container');
  btn.addEventListener('click',()=>{
    // fade audio
    let s=0,iv=setInterval(()=>{s++;bgAudio.volume*= (1 - s/20); if(s>=20){clearInterval(iv); bgAudio.pause();}} ,50);
    introImg.style.opacity=0; btn.style.display='none'; vidWrap.style.opacity=1;
    ytPlayer.playVideo();
  });

  // Load branch mp4
  function loadVideo(path){
    ytPlayer.destroy();
    const vc = document.getElementById('video-container');
    vc.innerHTML = `<video id="branchVid" autoplay playsinline style="width:100%;height:100%;"><source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4"></video>`;
    document.getElementById('choices').style.display='none';
  }
</script>
</body>
</html>
