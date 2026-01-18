---
layout: post
title: "Watch the River"
date: 2026-01-17
author: "Lewis Connolly"
author_url: "/about/"
categories:
  - Reflection
  - Experience
  - Meaning
og_image: /assets/images/river.png
---
<img src="{{ '/assets/images/river.png' | relative_url }}" alt="Watch the River" style="display: block; margin: 20px auto; max-width: 600px; height: auto;">

It would be funny to release an AI album. I've been listening to some AI songs on Spotify recently, such as Many Men by Shifty Brent, a soulful 60s reimagining of the 50 Cent rap song. And The Velvet Sundown, probably the most famous AI band, a soft-rock, indie-Americana project. It's a particularly good example because it really leans into the fantasy of it all. "Their" profile on Spotify even includes photographs of the "band," all of which are, of course, AI-generated. They (or he) have created a consistent sound; it would be easy to believe this is a real band with a backstory, a van. It just so happens that this plausible alternate history is purely the result of a few clever prompts given to an AI music generator.

Just to be clear, I have virtually no musical ability -- the height of my music career was being part of Mrs. Fenton's school choir. But I listen to my fair share of stuff.

Okay, so first I need a singer. I'll model him on me. We're stepping into the multiverse here: an alternative-history me, a folk-singer me with a spiritual bent. Open white shirt, some prayer beads, and we'll put him in a Scottish nature scene. Something like this...

<img src="{{ '/assets/images/riverman.png' | relative_url }}" alt="Rowan North" style="display: block; margin: 20px auto; max-width: 600px; height: auto;">

Looks hilarious!

Okay, I'll need a stage name. I'll ask AI for some suggestions... something with a Scottish, folk-singer feel... Iain Wilder, Rowan North, Finlay Moor, Ciaran Vale, Jonah Stillwater. I'll go with Rowan North. That sounds right.

Okay, now for the lyrics. I'm going for something kind of Celtic-spirituality-esque. I like the work of George William Russell (1867-1935), the Irish writer, painter, and poet. I think I'll try an AI lyric prompt that draws upon one of his works -- Candle of Vision -- with its Irish nature, folklore, and theosophy vibes. (I'll put the AI-generated lyrics at the end of this article.)

To do this, I'm using the website Suno.com. I'm going to sing into a microphone now, so it has a sample of my voice and it can do its magic.

And presto! Here it is. It doesn't sound much like me at all, but that is probably a good thing. I'm going to generate a few more -- make a little mini album.

<style>
.audio-card { max-width: 600px; margin: 30px auto 40px; background: #1a1a1a; border: 1px solid #333; border-radius: 14px; padding: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); }
.audio-header { display: flex; gap: 14px; align-items: center; }
.audio-cover { width: 72px; height: 72px; object-fit: cover; border-radius: 10px; border: 1px solid #2a2a2a; }
.audio-meta { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.audio-title { font-size: 1.05em; letter-spacing: 0.3px; margin-top: 4px; }
.audio-artist { color: #c9c9c9; font-size: 0.95em; }
.audio-controls { display: flex; gap: 8px; margin-top: 6px; }
.audio-btn { background: #222; color: #f0f0f0; border: 1px solid #3a3a3a; padding: 6px 10px; border-radius: 8px; cursor: pointer; }
.audio-btn:hover { border-color: #ff9933; color: #ff9933; }
.audio-volume { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.audio-volume label { font-size: 0.8em; color: #bdbdbd; }
.audio-volume input[type="range"] { width: 120px; accent-color: #ff9933; }
.audio-list { margin-top: 14px; border-top: 1px solid #2c2c2c; padding-top: 10px; display: grid; gap: 6px; }
.audio-track { width: 100%; text-align: left; background: #1f1f1f; color: #e6e6e6; border: 1px solid #2f2f2f; padding: 8px 10px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 10px; }
.audio-track:hover { border-color: #ff9933; color: #ff9933; }
.audio-track.is-active { background: #262626; border-color: #ff9933; color: #ff9933; }
.track-num { width: 18px; color: #9a9a9a; font-variant-numeric: tabular-nums; }
.track-name { flex: 1; }
.track-time { color: #b5b5b5; font-variant-numeric: tabular-nums; }
</style>

<div class="audio-card" data-player>
  <div class="audio-header">
    <img src="{{ '/assets/images/riverman.png' | relative_url }}" alt="Rowan North" class="audio-cover">
    <div class="audio-meta">
      <div class="audio-title" data-track-title>Stand and Watch the River</div>
      <div class="audio-artist">By Rowan North</div>
      <div class="audio-controls">
        <button class="audio-btn" type="button" data-action="prev">Prev</button>
        <button class="audio-btn" type="button" data-action="play">Play</button>
        <button class="audio-btn" type="button" data-action="next">Next</button>
      </div>
    </div>
    <div class="audio-volume">
      <label for="river-volume">Volume</label>
      <input id="river-volume" type="range" min="0" max="1" step="0.01" value="0.8" data-action="volume">
    </div>
  </div>
  <div class="audio-list">
    <button class="audio-track is-active" type="button" data-index="0">
      <span class="track-num">1</span>
      <span class="track-name">Stand and Watch the River</span>
      <span class="track-time" data-time="0">--:--</span>
    </button>
    <button class="audio-track" type="button" data-index="1">
      <span class="track-num">2</span>
      <span class="track-name">Holds Every Footstep</span>
      <span class="track-time" data-time="1">--:--</span>
    </button>
    <button class="audio-track" type="button" data-index="2">
      <span class="track-num">3</span>
      <span class="track-name">Without Instruction</span>
      <span class="track-time" data-time="2">--:--</span>
    </button>
  </div>
  <audio id="watch-the-river-player" preload="none"></audio>
</div>

<script>
(function () {
  var player = document.getElementById('watch-the-river-player');
  if (!player) return;
  var tracks = [
    { title: 'Stand and Watch the River', src: '/assets/audio/stand%20and%20watch%20the%20river.mp3' },
    { title: 'Holds Every Footstep', src: '/assets/audio/Holds%20Every%20Footstep.mp3' },
    { title: 'Without Instruction', src: '/assets/audio/Without%20Instruction.mp3' }
  ];
  var titleEl = document.querySelector('[data-track-title]');
  var playBtn = document.querySelector('[data-action="play"]');
  var prevBtn = document.querySelector('[data-action="prev"]');
  var nextBtn = document.querySelector('[data-action="next"]');
  var volumeSlider = document.querySelector('[data-action="volume"]');
  var trackButtons = Array.prototype.slice.call(document.querySelectorAll('.audio-track'));
  var timeEls = Array.prototype.slice.call(document.querySelectorAll('[data-time]'));
  var current = 0;

  function formatTime(seconds) {
    var mins = Math.floor(seconds / 60) || 0;
    var secs = Math.floor(seconds % 60) || 0;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function setActive(index) {
    current = index;
    player.src = tracks[index].src;
    if (titleEl) titleEl.textContent = tracks[index].title;
    trackButtons.forEach(function (btn) {
      btn.classList.toggle('is-active', Number(btn.getAttribute('data-index')) === index);
    });
  }

  function playCurrent() {
    player.play();
    if (playBtn) playBtn.textContent = 'Pause';
  }

  function pauseCurrent() {
    player.pause();
    if (playBtn) playBtn.textContent = 'Play';
  }

  function nextTrack() {
    var next = (current + 1) % tracks.length;
    setActive(next);
    playCurrent();
  }

  function prevTrack() {
    var prev = (current - 1 + tracks.length) % tracks.length;
    setActive(prev);
    playCurrent();
  }

  function loadDurations() {
    tracks.forEach(function (track, index) {
      var probe = new Audio();
      probe.preload = 'metadata';
      probe.src = track.src;
      probe.addEventListener('loadedmetadata', function () {
        if (timeEls[index]) timeEls[index].textContent = formatTime(probe.duration);
      });
    });
  }

  setActive(0);
  player.volume = 0.8;
  loadDurations();

  if (volumeSlider) {
    volumeSlider.addEventListener('input', function () {
      player.volume = Number(volumeSlider.value);
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', function () {
      if (player.paused) {
        playCurrent();
      } else {
        pauseCurrent();
      }
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', prevTrack);
  if (nextBtn) nextBtn.addEventListener('click', nextTrack);

  trackButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var index = Number(btn.getAttribute('data-index'));
      setActive(index);
      playCurrent();
    });
  });

  player.addEventListener('ended', nextTrack);
})();
</script>



<div style="max-width: 520px; margin: 20px auto; padding: 16px 20px; border: 1px solid #444; background-color: #181818; white-space: pre-line;">
[Verse 1]
I used to stand and watch the river
Thinking I was on the shore
Counting every passing current
Wondering what it flowed for

But the water kept on moving
Without a single thought
And something in that simple motion
Showed me what I'm not

[Refrain - soft, steady]
I am not the one who's looking
I am not the thought that tries
I am what the world is moving in
When the need to know grows quiet

[Verse 2]
The body breathes without instruction
The heart keeps its own time
Morning comes without permission
Evening leaves without a sign

Every sound arrives complete
Then leaves without regret
Nothing here is asking anything
And nothing is unmet

[Refrain - slightly altered]
I am not inside the moment
I am not outside the day
I am what is gently present
As the moment slips away

[Bridge - slower, more spacious]
No distance
Between the seeing and the seen
No boundary
Where the world ends and I begin

What I called myself
Was only a passing name
What remains
Was never born to change

[Verse 3]
The search grew tired of searching
And laid itself to rest
Like a hand that finally opens
After holding on too tight

There was no great revelation
No thunder, no release
Just the quiet understanding
That nothing here was missing

[Final Refrain - very gentle]
I am not becoming clearer
I am not arriving home
I am what has always been here
While the scenes have come and gone

[Outro - guitar fades, birds return]
</div>
