---
layout: null
permalink: /drift/
---

<!-- No DOCTYPE or HTML wrapper so only the embed renders -->
<style>
  html, body { margin: 0; padding: 0; overflow: hidden; background: #000; }
</style>

<!-- Background cello pad -->
<audio id="bgAudio" src="{{ '/assets/audio/cello.mp3' | relative_url }}" preload="auto" loop muted playsinline></audio>

<!-- Entry still + button -->
<img id="introImage" src="{{ '/assets/images/trees.png' | relative_url }}" alt="" 
     style="position:fixed; inset:0; width:100%; height:100%; object-fit:cover; z-index:1;" />
<button id="beginBtn" 
        style="position:fixed; left:50%; top:50%; transform:translate(-50%,-50%);
               font-family:'Great Vibes',cursive; font-size:2.2rem; color:#FFD54F;
               background:rgba(0,0,0,.55); border:2px solid #FFD54F; border-radius:1.25rem;
               padding:.75rem 3rem; cursor:pointer; z-index:2;">
  Drift
</button>

<!-- Fullscreen YouTube container -->
<div id="video-container" style="position:fixed; inset:0; opacity:0; z-index:0;">
  <div id="driftYT"></div>
</div>

<!-- Choice overlays -->
<div id="choices" style="display:none; position:fixed; inset:0; z-index:3; 
     display:flex; justify-content:center; align-items:center; gap:3rem;">
  <div class="choice" onclick="loadVideo('longing')">
    <img src="{{ '/assets/images/longing.png' | relative_url }}" alt="Longing" style="height:6rem;">
  </div>
  <div class="choice" onclick="loadVideo('stillness')">
    <img src="{{ '/assets/images/stillness.png' | relative_url }}" alt="Stillness" style="height:6rem;">
  </div>
</div>

<!-- YouTube IFrame API -->
<script src="https://www.youtube.com/iframe_api" async></script>

<script>
// Audio fade setup
const bgAudio = document.getElementById('bgAudio');
document.addEventListener('DOMContentLoaded', ()=>{ bgAudio.volume=0; bgAudio.play().catch(()=>{}); });
document.addEventListener('pointermove', ()=>{ if(bgAudio.muted){ bgAudio.muted=false; let s=0,iv=setInterval(()=>{ s++; bgAudio.volume=0.18*s/20; if(s>=20)clearInterval(iv); },60); } },{ once:true,passive:true });

// YouTube
let ytPlayer;
function onYouTubeIframeAPIReady(){ ytPlayer=new YT.Player('driftYT',{ videoId:'RmKkHZ-7rcY',
  width:'100%', height:'100%',
  playerVars:{autoplay:0,controls:0,modestbranding:1,rel:0,fs:0,iv_load_policy:3,playsinline:1},
  events:{ onReady:()=>{ /* ensure full container */ const e=document.getElementById('driftYT'); e.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;'; },
             onStateChange:(e)=>{ if(e.data===0) document.getElementById('choices').style.display='flex'; }
  }
}); }

// Start intro on click
const introImg=document.getElementById('introImage'), btn=document.getElementById('beginBtn'), vidWrap=document.getElementById('video-container');
btn.addEventListener('click', ()=>{
  // fade audio
  let i=0,iv=setInterval(()=>{ i++; bgAudio.volume *= 1 - i/20; if(i>=20){ clearInterval(iv); bgAudio.pause(); } },50);
  // hide intro UI, show video
  introImg.style.opacity=0; btn.style.display='none'; vidWrap.style.opacity=1; ytPlayer.playVideo();
});

// Branch loader
function loadVideo(path){ ytPlayer.destroy(); const vc=document.getElementById('video-container'); vc.innerHTML=`<video autoplay playsinline style="position:absolute;top:0;left:0;width:100%;height:100%;"><source src="${'{{ '/assets/videos/' | relative_url }}'+path+'.mp4'}" type="video/mp4"></video>`; document.getElementById('choices').style.display='none'; }
</script>
