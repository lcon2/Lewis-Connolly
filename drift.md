---
layout: null
permalink: /drift/
---

<style>
  /* Fullscreen reset */
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
  /* Centered Drift button */
  #beginBtn {
    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);
    font-family: 'Great Vibes', cursive; font-size: 2.2rem; color: #FFD54F;
    background: rgba(0,0,0,0.55); border: 2px solid #FFD54F; border-radius: 1.25rem;
    padding: 0.75rem 3rem; cursor: pointer; z-index: 2; transition: background 0.3s;
  }
  #beginBtn:hover { background: rgba(255,255,255,0.12); }
  /* Video containers fill viewport */
  #video-container { position: fixed; inset: 0; width: 100%; height: 100%; opacity: 0; z-index: 0; background: #000; }
  #driftYT { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
  /* Choice thumbnails */
  #choices { display: none; position: fixed; inset: 0; z-index: 3; display: flex; justify-content: center; align-items: center; gap: 3rem; }
  .choice img { height: 6rem; cursor: pointer; }
</style>

<!-- Background cello pad -->
<audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

<!-- Intro still and button -->
<img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="" style="position:fixed;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;" />
<button id="beginBtn">Drift</button>

<!-- Video container & YouTube placeholder -->
<div id="video-container">
  <div id="driftYT"></div>
</div>

<!-- Archetype Choices -->
<div id="choices">
  <div class="choice" onclick="loadVideo('longing')">
    <img src="{{ '/assets/images/longing.png' | relative_url }}" alt="Longing">
  </div>
  <div class="choice" onclick="loadVideo('stillness')">
    <img src="{{ '/assets/images/stillness.png' | relative_url }}" alt="Stillness">
  </div>
</div>

<!-- YouTube IFrame API -->
<script src="https://www.youtube.com/iframe_api" async></script>
<script>
  // Audio fade logic
  const bgAudio = document.getElementById('bgAudio');
  document.addEventListener('DOMContentLoaded', () => { bgAudio.volume = 0; bgAudio.play().catch(()=>{}); });
  document.addEventListener('pointermove', ()=>{
    if(bgAudio.muted){ bgAudio.muted = false;
      let s=0, iv = setInterval(()=>{ s++; bgAudio.volume = 0.18 * s/20; if(s>=20) clearInterval(iv); }, 60);
    }
  },{ once:true, passive:true });

  // YouTube Player setup on placeholder
  let ytPlayer;
  function onYouTubeIframeAPIReady(){
    ytPlayer = new YT.Player('driftYT', {
      videoId: 'RmKkHZ-7rcY',
      playerVars: { autoplay:0, controls:0, modestbranding:1, rel:0, fs:0, iv_load_policy:3, playsinline:1 },
      events: {
        onStateChange: e => { if(e.data === 0) document.getElementById('choices').style.display = 'flex'; }
      }
    });
  }

  // Start intro on button click
  const introImg = document.getElementById('introImage'), btn = document.getElementById('beginBtn');
  btn.addEventListener('click', () => {
    // fade audio
    let i=0, iv = setInterval(()=>{ i++; bgAudio.volume *= 1 - i/20; if(i>=20){ clearInterval(iv); bgAudio.pause(); } }, 50);
    // hide intro and show video
    introImg.style.opacity = '0'; btn.style.display = 'none';
    document.getElementById('video-container').style.opacity = '1';
    ytPlayer.playVideo();
  });

  // Load branch MP4 after choice
  function loadVideo(path){
    if(ytPlayer) ytPlayer.destroy();
    const vc = document.getElementById('video-container');
    vc.innerHTML = `<video autoplay playsinline style="position:absolute;top:0;left:0;width:100%;height:100%;">
      <source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4">
    </video>`;
    document.getElementById('choices').style.display = 'none';
  }
</script>