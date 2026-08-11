/**
 * SONORA — Immersive Music Player
 * js/app.js
 *
 * CodeAlpha Frontend Development Internship · Task 4
 * Vanilla JavaScript ES6+ · HTML5 Audio API
 *
 * Architecture:
 *   - Centralized playerState
 *   - Modular functions
 *   - LocalStorage persistence
 *   - Keyboard shortcuts
 *   - Error handling
 */

'use strict';

/* =====================================================
   PLAYLIST DATA
===================================================== */
const PLAYLIST = [
  {
    id: 0,
    title:    'Midnight Drive',
    artist:   'Aria Vale',
    album:    'Neon Horizons',
    duration: '3:42',
    src:      'assets/audio/track-01.mp3',
    artwork:  'assets/images/album-01.jpg',
  },
  {
    id: 1,
    title:    'Neon Skies',
    artist:   'Nova Reed',
    album:    'Electric Aurora',
    duration: '4:15',
    src:      'assets/audio/track-02.mp3',
    artwork:  'assets/images/album-02.jpg',
  },
  {
    id: 2,
    title:    'Afterglow',
    artist:   'Elias North',
    album:    'Golden Hour',
    duration: '3:58',
    src:      'assets/audio/track-03.mp3',
    artwork:  'assets/images/album-03.jpg',
  },
  {
    id: 3,
    title:    'Velvet Nights',
    artist:   'Luna Gray',
    album:    'Velvet',
    duration: '4:32',
    src:      'assets/audio/track-04.mp3',
    artwork:  'assets/images/album-04.jpg',
  },
  {
    id: 4,
    title:    'Electric Dreams',
    artist:   'Orion West',
    album:    'Synthwave City',
    duration: '3:24',
    src:      'assets/audio/track-05.mp3',
    artwork:  'assets/images/album-05.jpg',
  },
  {
    id: 5,
    title:    'Ocean Lights',
    artist:   'Mira Sol',
    album:    'Tides',
    duration: '5:01',
    src:      'assets/audio/track-06.mp3',
    artwork:  'assets/images/album-06.jpg',
  },
  {
    id: 6,
    title:    'Slow Motion',
    artist:   'Atlas Ray',
    album:    'Frames',
    duration: '4:48',
    src:      'assets/audio/track-07.mp3',
    artwork:  'assets/images/album-07.jpg',
  },
  {
    id: 7,
    title:    'Last Horizon',
    artist:   'The Midnight Echo',
    album:    'Distant Shores',
    duration: '6:12',
    src:      'assets/audio/track-08.mp3',
    artwork:  'assets/images/album-08.jpg',
  },
];

/* =====================================================
   CENTRALISED APPLICATION STATE
===================================================== */
const playerState = {
  currentTrackIndex:  0,
  isPlaying:          false,
  volume:             0.8,
  isMuted:            false,
  shuffle:            false,
  repeatMode:         'off',   // 'off' | 'one' | 'all'
  isDraggingProgress: false,
  isDraggingVolume:   false,
  likedTracks:        new Set(),
  shuffleHistory:     [],
  pendingAutoplay:    false,   // true when we want to play as soon as audio is ready
};

/* =====================================================
   DOM ELEMENT REFERENCES
===================================================== */
const dom = {
  // Audio
  audio:            document.getElementById('audioPlayer'),

  // Artwork
  albumArt:         document.getElementById('albumArt'),
  artworkWrapper:   document.getElementById('artworkWrapper'),
  artworkGlow:      document.getElementById('artworkGlow'),
  nowPlayingBadge:  document.getElementById('nowPlayingBadge'),
  artworkError:     document.getElementById('artworkError'),
  btnErrorRetry:    document.getElementById('btnErrorRetry'),

  // Ambient
  ambientArt:       document.getElementById('ambientArt'),

  // Track info
  trackTitle:       document.getElementById('trackTitle'),
  trackArtist:      document.getElementById('trackArtist'),
  trackAlbum:       document.getElementById('trackAlbum'),
  trackNumber:      document.getElementById('trackNumber'),
  trackInfo:        document.querySelector('.track-info'),

  // Controls
  btnPlayPause:     document.getElementById('btnPlayPause'),
  playPauseIcon:    document.getElementById('playPauseIcon'),
  btnPrev:          document.getElementById('btnPrev'),
  btnNext:          document.getElementById('btnNext'),
  btnShuffle:       document.getElementById('btnShuffle'),
  btnRepeat:        document.getElementById('btnRepeat'),
  btnLike:          document.getElementById('btnLike'),
  btnAddQueue:      document.getElementById('btnAddQueue'),

  // Progress
  progressContainer: document.getElementById('progressContainer'),
  progressFill:      document.getElementById('progressFill'),
  progressThumb:     document.getElementById('progressThumb'),
  timeCurrent:       document.getElementById('timeCurrent'),
  timeTotal:         document.getElementById('timeTotal'),

  // Volume
  btnVolume:         document.getElementById('btnVolume'),
  volumeContainer:   document.getElementById('volumeContainer'),
  volumeFill:        document.getElementById('volumeFill'),
  volumeThumb:       document.getElementById('volumeThumb'),
  volumeLabel:       document.getElementById('volumeLabel'),

  // Playlist
  playlist:          document.getElementById('playlist'),

  // Toast
  toastContainer:    document.getElementById('toastContainer'),

  // Shortcuts modal
  shortcutsModal:    document.getElementById('shortcutsModal'),
  btnShortcuts:      document.getElementById('btnShortcuts'),
  btnCloseShortcuts: document.getElementById('btnCloseShortcuts'),
  shortcutsBackdrop: document.getElementById('shortcutsBackdrop'),
};

/* =====================================================
   UTILITY FUNCTIONS
===================================================== */

/**
 * Format seconds as M:SS string
 * @param {number} seconds
 * @returns {string}
 */
function formatTime(seconds) {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Clamp a value between min and max
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Get a random integer excluding a specific value
 */
function randomExcluding(max, exclude) {
  if (max <= 1) return 0;
  let rand;
  do { rand = Math.floor(Math.random() * max); } while (rand === exclude);
  return rand;
}

/**
 * Persist player preferences to localStorage
 */
function saveState() {
  try {
    const toSave = {
      volume:            playerState.volume,
      isMuted:           playerState.isMuted,
      shuffle:           playerState.shuffle,
      repeatMode:        playerState.repeatMode,
      currentTrackIndex: playerState.currentTrackIndex,
    };
    localStorage.setItem('sonora_state', JSON.stringify(toSave));
  } catch (e) {
    // localStorage not available — ignore silently
  }
}

/**
 * Restore player preferences from localStorage
 */
function restoreState() {
  try {
    const saved = localStorage.getItem('sonora_state');
    if (!saved) return;
    const data = JSON.parse(saved);
    if (typeof data.volume            === 'number')  playerState.volume            = clamp(data.volume, 0, 1);
    if (typeof data.isMuted           === 'boolean') playerState.isMuted           = data.isMuted;
    if (typeof data.shuffle           === 'boolean') playerState.shuffle           = data.shuffle;
    if (['off','one','all'].includes(data.repeatMode)) playerState.repeatMode     = data.repeatMode;
    if (typeof data.currentTrackIndex === 'number' &&
        data.currentTrackIndex >= 0 &&
        data.currentTrackIndex < PLAYLIST.length) {
      playerState.currentTrackIndex = data.currentTrackIndex;
    }
  } catch (e) {
    // Corrupt data — ignore
  }
}

/* =====================================================
   TOAST NOTIFICATIONS
===================================================== */

/**
 * Show a toast notification
 * @param {string} message
 * @param {string} [icon] - SVG path data or emoji label
 */
function showToast(message, icon = '') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');

  if (icon) {
    const iconEl = document.createElement('span');
    iconEl.className = 'toast-icon';
    iconEl.textContent = icon;
    toast.appendChild(iconEl);
  }

  const text = document.createElement('span');
  text.textContent = message;
  toast.appendChild(text);

  dom.toastContainer.appendChild(toast);

  // Auto remove after 2.8s
  const removeTimer = setTimeout(() => {
    removeToast(toast);
  }, 2800);

  toast._removeTimer = removeTimer;
}

function removeToast(toast) {
  clearTimeout(toast._removeTimer);
  toast.classList.add('removing');
  toast.addEventListener('animationend', () => toast.remove(), { once: true });
}

/* =====================================================
   TRACK INFO UPDATE
===================================================== */

/**
 * Update the displayed track info (title, artist, album, track number)
 * @param {object} track - Playlist track object
 * @param {boolean} [animate=true]
 */
function updateTrackInfo(track, animate = true) {
  if (animate) {
    dom.trackInfo.classList.add('changing');
    setTimeout(() => {
      dom.trackTitle.textContent  = track.title;
      dom.trackArtist.textContent = track.artist;
      dom.trackAlbum.textContent  = track.album;
      dom.trackNumber.textContent = `Track ${String(track.id + 1).padStart(2, '0')} / ${String(PLAYLIST.length).padStart(2, '0')}`;
      dom.trackInfo.classList.remove('changing');
    }, 200);
  } else {
    dom.trackTitle.textContent  = track.title;
    dom.trackArtist.textContent = track.artist;
    dom.trackAlbum.textContent  = track.album;
    dom.trackNumber.textContent = `Track ${String(track.id + 1).padStart(2, '0')} / ${String(PLAYLIST.length).padStart(2, '0')}`;
  }

  // Update document title
  document.title = `${track.title} · ${track.artist} — SONORA`;

  // Update accessibility labels
  dom.albumArt.alt = `Album artwork for ${track.title} by ${track.artist}`;
  dom.btnLike.setAttribute('aria-label', `Like ${track.title}`);
}

/* =====================================================
   ARTWORK UPDATE
===================================================== */

/**
 * Update the album artwork with transition animation
 * @param {string} src - Image source URL
 */
function updateArtwork(src) {
  // Transition out
  dom.albumArt.classList.add('transitioning');

  setTimeout(() => {
    dom.albumArt.src = src;
    dom.albumArt.classList.remove('transitioning');
    dom.albumArt.classList.add('entering');

    dom.albumArt.addEventListener('animationend', () => {
      dom.albumArt.classList.remove('entering');
    }, { once: true });

    // Update ambient background
    updateAmbientBackground(src);
  }, 200);
}

/**
 * Update the ambient background blur with current artwork
 */
function updateAmbientBackground(src) {
  dom.ambientArt.style.backgroundImage = `url('${src}')`;
  dom.ambientArt.classList.add('visible');
}

/* =====================================================
   ARTWORK GLOW
===================================================== */

/**
 * Apply dynamic glow to artwork area based on playing state
 */
function updateArtworkGlow(playing) {
  if (playing) {
    dom.artworkWrapper.classList.add('playing');
  } else {
    dom.artworkWrapper.classList.remove('playing');
  }
}

/* =====================================================
   PLAY / PAUSE UI STATE
===================================================== */

/**
 * Update play/pause button visuals
 */
function updatePlayPauseUI() {
  const iconPlay  = dom.playPauseIcon.querySelector('.icon-play');
  const iconPause = dom.playPauseIcon.querySelector('.icon-pause');

  if (playerState.isPlaying) {
    iconPlay.style.display  = 'none';
    iconPause.style.display = '';
    dom.btnPlayPause.setAttribute('aria-label', 'Pause');
    updateArtworkGlow(true);
  } else {
    iconPlay.style.display  = '';
    iconPause.style.display = 'none';
    dom.btnPlayPause.setAttribute('aria-label', 'Play');
    updateArtworkGlow(false);
  }
}

/* =====================================================
   PROGRESS BAR
===================================================== */

/**
 * Update progress bar fill and thumb position
 * @param {number} percent - 0 to 100
 */
function updateProgressBar(percent) {
  const clamped = clamp(percent, 0, 100);
  dom.progressFill.style.width = `${clamped}%`;
  dom.progressThumb.style.left = `${clamped}%`;
  dom.progressContainer.setAttribute('aria-valuenow', Math.round(clamped));
}

/**
 * Calculate click/drag position on a slider element
 * @param {HTMLElement} container
 * @param {MouseEvent|TouchEvent} e
 * @returns {number} 0–1
 */
function getSliderRatio(container, e) {
  const rect  = container.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const ratio = (clientX - rect.left) / rect.width;
  return clamp(ratio, 0, 1);
}

/* =====================================================
   VOLUME CONTROL UI
===================================================== */

/**
 * Update volume slider visuals
 */
function updateVolumeUI() {
  const effectiveVolume = playerState.isMuted ? 0 : playerState.volume;
  const percent = effectiveVolume * 100;

  dom.volumeFill.style.width  = `${percent}%`;
  dom.volumeThumb.style.left  = `${percent}%`;
  dom.volumeLabel.textContent = `${Math.round(percent)}%`;
  dom.volumeContainer.setAttribute('aria-valuenow', Math.round(percent));

  // Icon switching
  const icons = {
    high:  dom.btnVolume.querySelector('.vol-high'),
    mid:   dom.btnVolume.querySelector('.vol-mid'),
    low:   dom.btnVolume.querySelector('.vol-low'),
    muted: dom.btnVolume.querySelector('.vol-muted'),
  };

  Object.values(icons).forEach(el => el && (el.style.display = 'none'));

  if (playerState.isMuted || effectiveVolume === 0) {
    icons.muted.style.display = '';
    dom.btnVolume.setAttribute('aria-label', 'Unmute (M)');
  } else if (effectiveVolume >= 0.5) {
    icons.high.style.display = '';
    dom.btnVolume.setAttribute('aria-label', 'Mute (M)');
  } else if (effectiveVolume >= 0.15) {
    icons.mid.style.display = '';
    dom.btnVolume.setAttribute('aria-label', 'Mute (M)');
  } else {
    icons.low.style.display = '';
    dom.btnVolume.setAttribute('aria-label', 'Mute (M)');
  }
}

/**
 * Apply current volume to audio element
 */
function applyVolume() {
  dom.audio.volume = playerState.isMuted ? 0 : playerState.volume;
  dom.audio.muted  = playerState.isMuted;
}

/* =====================================================
   PLAYLIST RENDER
===================================================== */

/**
 * Render the full playlist to the DOM
 */
function renderPlaylist() {
  dom.playlist.innerHTML = '';

  PLAYLIST.forEach((track, index) => {
    const item = document.createElement('li');
    item.className = 'playlist-item';
    item.id = `track-${index}`;
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', index === playerState.currentTrackIndex ? 'true' : 'false');
    item.setAttribute('tabindex', '0');
    item.dataset.index = index;

    if (index === playerState.currentTrackIndex) {
      item.classList.add('active');
      if (!playerState.isPlaying) item.classList.add('paused');
    }

    // Number cell — shows equalizer if active & playing, play icon on hover
    const numCell = document.createElement('div');
    numCell.className = 'item-num-cell';

    if (index === playerState.currentTrackIndex) {
      // Equalizer
      const eq = document.createElement('div');
      eq.className = 'equalizer-bars';
      eq.setAttribute('aria-hidden', 'true');
      eq.innerHTML = '<span></span><span></span><span></span><span></span>';
      numCell.appendChild(eq);
    } else {
      const num = document.createElement('span');
      num.className = 'track-num';
      num.textContent = String(index + 1).padStart(2, '0');
      numCell.appendChild(num);

      const playIcon = document.createElement('div');
      playIcon.className = 'item-play-icon';
      playIcon.setAttribute('aria-hidden', 'true');
      playIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
      numCell.appendChild(playIcon);
    }

    // Details cell
    const details = document.createElement('div');
    details.className = 'item-details';

    const thumb = document.createElement('img');
    thumb.className = 'item-thumb';
    thumb.src = track.artwork;
    thumb.alt = `${track.title} album art`;
    thumb.loading = 'lazy';
    thumb.onerror = () => { thumb.src = 'assets/images/album-01.jpg'; };

    const text = document.createElement('div');
    text.className = 'item-text';
    text.innerHTML = `
      <div class="item-title">${track.title}</div>
      <div class="item-artist">${track.artist}</div>
    `;

    details.appendChild(thumb);
    details.appendChild(text);

    // Album col
    const albumCol = document.createElement('div');
    albumCol.className = 'item-album-col';
    albumCol.textContent = track.album;

    // Duration cell
    const dur = document.createElement('div');
    dur.className = 'item-duration';
    dur.textContent = track.duration;

    item.appendChild(numCell);
    item.appendChild(details);
    item.appendChild(albumCol);
    item.appendChild(dur);

    // Click to select & play
    item.addEventListener('click', () => {
      selectTrack(index, true);
    });

    // Keyboard: Enter or Space to select
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectTrack(index, true);
      }
    });

    dom.playlist.appendChild(item);
  });

  // Update aria-activedescendant on the listbox
  dom.playlist.setAttribute('aria-activedescendant', `track-${playerState.currentTrackIndex}`);

  // Update active track in playlist DOM
  updatePlaylistActive();
}

/**
 * Update active/paused class on playlist items without full re-render
 */
function updatePlaylistActive() {
  const items = dom.playlist.querySelectorAll('.playlist-item');
  items.forEach((item, i) => {
    const isActive = i === playerState.currentTrackIndex;
    item.classList.toggle('active', isActive);
    item.classList.toggle('paused', isActive && !playerState.isPlaying);
    item.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Scroll active item into view
  const activeItem = dom.playlist.querySelector('.playlist-item.active');
  if (activeItem) {
    activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* =====================================================
   TRACK LOADING
===================================================== */

/**
 * Load a track into the audio element and update all UI
 * @param {number} index - Track index in PLAYLIST
 * @param {boolean} [autoplay=false] - Begin playback after load
 */
function loadTrack(index, autoplay = false) {
  const track = PLAYLIST[index];
  if (!track) return;

  playerState.currentTrackIndex = index;

  // Signal whether we want to play as soon as the audio is ready.
  // We do NOT call play() here directly — instead we set a flag and let
  // the 'canplay' event handler trigger it. This avoids the AbortError
  // race condition that occurs when play() is called before load() finishes.
  playerState.pendingAutoplay = autoplay;

  // Hide any previous error state
  dom.artworkError.classList.remove('visible');
  dom.artworkError.setAttribute('aria-hidden', 'true');

  // Update UI
  updateTrackInfo(track);
  updateArtwork(track.artwork);

  // Update like button
  const isLiked = playerState.likedTracks.has(index);
  dom.btnLike.setAttribute('aria-pressed', String(isLiked));
  dom.btnLike.classList.toggle('active', isLiked);

  // Reset progress display before the new src loads
  dom.timeCurrent.textContent = '0:00';
  dom.timeTotal.textContent   = track.duration;
  updateProgressBar(0);

  // Set audio source and begin loading.
  // 'canplay' event will trigger playback if pendingAutoplay is true.
  dom.audio.src = track.src;
  dom.audio.load();

  // Re-render playlist to update equalizer indicator
  renderPlaylist();

  // Save state
  saveState();
}

/* =====================================================
   PLAYBACK CONTROL
===================================================== */

/**
 * Start playback
 */
function playTrack() {
  // If there's no src loaded yet, do nothing
  if (!dom.audio.src || dom.audio.src === window.location.href) return;

  const playPromise = dom.audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playerState.isPlaying      = true;
        playerState.pendingAutoplay = false;
        updatePlayPauseUI();
        updatePlaylistActive();
      })
      .catch(err => {
        playerState.pendingAutoplay = false;
        if (err.name === 'AbortError') {
          // Interrupted by a new load() call — not a real error, ignore silently.
          return;
        }
        if (err.name === 'NotAllowedError') {
          // Browser blocked autoplay before user interaction — this is expected.
          // Do NOT show error overlay; the user can press Play manually.
          console.info('SONORA: Autoplay blocked by browser policy. Press Play to start.');
          return;
        }
        // Genuine load failure
        handleAudioError();
      });
  }
}

/**
 * Pause playback
 */
function pauseTrack() {
  dom.audio.pause();
  playerState.isPlaying = false;
  updatePlayPauseUI();
  updatePlaylistActive();
}

/**
 * Toggle play / pause
 */
function togglePlay() {
  if (playerState.isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

/* =====================================================
   NAVIGATION
===================================================== */

/**
 * Select and optionally play a track by index
 */
function selectTrack(index, autoplay = false) {
  loadTrack(index, autoplay);
  if (autoplay) {
    showToast(`Playing ${PLAYLIST[index].title}`, '▶');
  }
}

/**
 * Advance to the next track (respecting shuffle & repeat)
 */
function nextTrack() {
  let nextIndex;

  if (playerState.shuffle) {
    nextIndex = randomExcluding(PLAYLIST.length, playerState.currentTrackIndex);
    playerState.shuffleHistory.push(playerState.currentTrackIndex);
  } else {
    nextIndex = (playerState.currentTrackIndex + 1) % PLAYLIST.length;
  }

  loadTrack(nextIndex, true);
  showToast(PLAYLIST[nextIndex].title, '⏭');
}

/**
 * Go to previous track (or restart if > 3s played)
 */
function previousTrack() {
  // If more than 3 seconds into the track, restart it
  if (dom.audio.currentTime > 3) {
    dom.audio.currentTime = 0;
    if (!playerState.isPlaying) playTrack();
    return;
  }

  let prevIndex;

  if (playerState.shuffle && playerState.shuffleHistory.length > 0) {
    prevIndex = playerState.shuffleHistory.pop();
  } else {
    prevIndex = (playerState.currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  }

  loadTrack(prevIndex, true);
  showToast(PLAYLIST[prevIndex].title, '⏮');
}

/* =====================================================
   SHUFFLE & REPEAT
===================================================== */

/**
 * Toggle shuffle mode
 */
function toggleShuffle() {
  playerState.shuffle = !playerState.shuffle;
  playerState.shuffleHistory = [];

  dom.btnShuffle.classList.toggle('active', playerState.shuffle);
  dom.btnShuffle.setAttribute('aria-pressed', String(playerState.shuffle));

  showToast(playerState.shuffle ? 'Shuffle on' : 'Shuffle off', '🔀');
  saveState();
}

/**
 * Cycle through repeat modes: off → one → all → off
 */
function toggleRepeat() {
  const modes = ['off', 'one', 'all'];
  const current = modes.indexOf(playerState.repeatMode);
  playerState.repeatMode = modes[(current + 1) % modes.length];

  dom.btnRepeat.dataset.mode = playerState.repeatMode;
  dom.btnRepeat.setAttribute('aria-label', `Toggle repeat: ${playerState.repeatMode}`);

  const labels = { off: 'Repeat off', one: 'Repeat: Track', all: 'Repeat: All' };
  const emojis = { off: '↩', one: '🔂', all: '🔁' };
  showToast(labels[playerState.repeatMode], emojis[playerState.repeatMode]);

  // Visual state
  dom.btnRepeat.classList.toggle('active', playerState.repeatMode !== 'off');
  saveState();
}

/* =====================================================
   TRACK ENDED HANDLER
===================================================== */

/**
 * Called when current track finishes playing
 */
function handleTrackEnded() {
  if (playerState.repeatMode === 'one') {
    // Repeat current track
    dom.audio.currentTime = 0;
    playTrack();
    return;
  }

  const isLastTrack = playerState.currentTrackIndex === PLAYLIST.length - 1;

  if (playerState.shuffle) {
    nextTrack();
    return;
  }

  if (playerState.repeatMode === 'all') {
    nextTrack();
    return;
  }

  // Normal mode — play next unless it's the last
  if (!isLastTrack) {
    nextTrack();
  } else {
    // End of playlist — reset UI
    playerState.isPlaying = false;
    dom.audio.currentTime = 0;
    updatePlayPauseUI();
    updatePlaylistActive();
    updateProgressBar(0);
    dom.timeCurrent.textContent = '0:00';
  }
}

/* =====================================================
   PROGRESS UPDATE (timeupdate event)
===================================================== */

/**
 * Called every animation frame / timeupdate to update progress bar
 */
function updateProgress() {
  if (playerState.isDraggingProgress) return;

  const { currentTime, duration } = dom.audio;
  if (!isFinite(duration) || isNaN(duration) || duration === 0) return;

  const percent = (currentTime / duration) * 100;
  updateProgressBar(percent);
  dom.timeCurrent.textContent = formatTime(currentTime);
}

/* =====================================================
   SEEK AUDIO
===================================================== */

/**
 * Seek audio to a given percentage of total duration
 * @param {number} ratio - 0 to 1
 */
function seekAudio(ratio) {
  const { duration } = dom.audio;
  if (!isFinite(duration) || isNaN(duration)) return;
  dom.audio.currentTime = ratio * duration;
}

/* =====================================================
   VOLUME CONTROL
===================================================== */

/**
 * Set volume (0–1) and update UI
 * @param {number} value
 */
function updateVolume(value) {
  playerState.volume  = clamp(value, 0, 1);
  playerState.isMuted = false;
  applyVolume();
  updateVolumeUI();
  saveState();
}

/**
 * Toggle mute / unmute
 */
function toggleMute() {
  playerState.isMuted = !playerState.isMuted;
  applyVolume();
  updateVolumeUI();
  showToast(playerState.isMuted ? 'Muted' : `Volume ${Math.round(playerState.volume * 100)}%`, playerState.isMuted ? '🔇' : '🔊');
  saveState();
}

/* =====================================================
   LIKE TRACK
===================================================== */

function toggleLike() {
  const idx = playerState.currentTrackIndex;
  if (playerState.likedTracks.has(idx)) {
    playerState.likedTracks.delete(idx);
    dom.btnLike.setAttribute('aria-pressed', 'false');
    dom.btnLike.classList.remove('active');
    showToast('Removed from favorites', '♡');
  } else {
    playerState.likedTracks.add(idx);
    dom.btnLike.setAttribute('aria-pressed', 'true');
    dom.btnLike.classList.add('active');
    showToast('Added to favorites', '♥');
  }
}

/* =====================================================
   ERROR HANDLING
===================================================== */

function handleAudioError() {
  playerState.isPlaying = false;
  updatePlayPauseUI();
  updatePlaylistActive();

  // Show error overlay
  dom.artworkError.classList.add('visible');
  dom.artworkError.setAttribute('aria-hidden', 'false');

  showToast('Unable to load track', '⚠');
}

/* =====================================================
   SHORTCUTS MODAL
===================================================== */

function openShortcuts() {
  dom.shortcutsModal.classList.add('visible');
  dom.shortcutsModal.setAttribute('aria-hidden', 'false');
  dom.btnShortcuts.setAttribute('aria-expanded', 'true');
  dom.btnCloseShortcuts.focus();
}

function closeShortcuts() {
  dom.shortcutsModal.classList.remove('visible');
  dom.shortcutsModal.setAttribute('aria-hidden', 'true');
  dom.btnShortcuts.setAttribute('aria-expanded', 'false');
  dom.btnShortcuts.focus();
}

/* =====================================================
   PROGRESS BAR DRAG INTERACTION
===================================================== */

function handleProgressPointerDown(e) {
  playerState.isDraggingProgress = true;
  const ratio = getSliderRatio(dom.progressContainer, e);
  seekAudio(ratio);
  updateProgressBar(ratio * 100);
}

function handleProgressPointerMove(e) {
  if (!playerState.isDraggingProgress) return;
  const ratio = getSliderRatio(dom.progressContainer, e);
  seekAudio(ratio);
  updateProgressBar(ratio * 100);
  dom.timeCurrent.textContent = formatTime(ratio * dom.audio.duration);
}

function handleProgressPointerUp() {
  playerState.isDraggingProgress = false;
}

/* =====================================================
   VOLUME BAR DRAG INTERACTION
===================================================== */

function handleVolumePointerDown(e) {
  playerState.isDraggingVolume = true;
  const ratio = getSliderRatio(dom.volumeContainer, e);
  updateVolume(ratio);
}

function handleVolumePointerMove(e) {
  if (!playerState.isDraggingVolume) return;
  const ratio = getSliderRatio(dom.volumeContainer, e);
  updateVolume(ratio);
}

function handleVolumePointerUp() {
  playerState.isDraggingVolume = false;
}

/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

function handleKeydown(e) {
  // Don't fire shortcuts when typing in inputs
  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

  switch (e.code) {
    case 'Space':
      e.preventDefault();
      togglePlay();
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (dom.audio.currentTime !== undefined) {
        dom.audio.currentTime = Math.min(dom.audio.currentTime + 5, dom.audio.duration || 0);
        showToast('+5 seconds', '→');
      }
      break;
    case 'ArrowLeft':
      e.preventDefault();
      if (dom.audio.currentTime !== undefined) {
        dom.audio.currentTime = Math.max(dom.audio.currentTime - 5, 0);
        showToast('-5 seconds', '←');
      }
      break;
    case 'ArrowUp':
      e.preventDefault();
      updateVolume(playerState.volume + 0.05);
      showToast(`Volume ${Math.round(playerState.volume * 100)}%`, '🔊');
      break;
    case 'ArrowDown':
      e.preventDefault();
      updateVolume(playerState.volume - 0.05);
      showToast(`Volume ${Math.round(playerState.volume * 100)}%`, '🔉');
      break;
    case 'KeyN':
      nextTrack();
      break;
    case 'KeyP':
      previousTrack();
      break;
    case 'KeyM':
      toggleMute();
      break;
    case 'KeyS':
      toggleShuffle();
      break;
    case 'KeyR':
      toggleRepeat();
      break;
    case 'Escape':
      closeShortcuts();
      break;
    default:
      break;
  }
}

/* =====================================================
   EVENT LISTENERS — AUDIO
===================================================== */

function bindAudioEvents() {
  dom.audio.addEventListener('loadedmetadata', () => {
    const { duration } = dom.audio;
    dom.timeTotal.textContent = formatTime(duration);
    dom.progressContainer.setAttribute('aria-valuemax', '100');
  });

  dom.audio.addEventListener('timeupdate', updateProgress);

  dom.audio.addEventListener('play', () => {
    playerState.isPlaying = true;
    updatePlayPauseUI();
    updatePlaylistActive();
  });

  dom.audio.addEventListener('pause', () => {
    playerState.isPlaying = false;
    updatePlayPauseUI();
    updatePlaylistActive();
  });

  dom.audio.addEventListener('ended', handleTrackEnded);

  dom.audio.addEventListener('error', (e) => {
    // Guard: only fire for genuine resource-load failures.
    // - Ignore the initial empty-src state (src is blank or same as page URL).
    // - Ignore MEDIA_ERR_ABORTED (code 1) which is triggered by load() interrupting play().
    const err = dom.audio.error;
    const isMeaninglessAbort = err && err.code === MediaError.MEDIA_ERR_ABORTED;
    const hasSrc = dom.audio.src && dom.audio.src !== window.location.href && !dom.audio.src.endsWith('/');
    if (hasSrc && !isMeaninglessAbort) {
      handleAudioError();
    }
  });

  dom.audio.addEventListener('canplay', () => {
    // Hide error overlay in case it was previously shown
    dom.artworkError.classList.remove('visible');
    dom.artworkError.setAttribute('aria-hidden', 'true');

    // If loadTrack was called with autoplay=true, now is the safe moment to play
    if (playerState.pendingAutoplay) {
      playerState.pendingAutoplay = false;
      playTrack();
    }
  });

  dom.audio.addEventListener('volumechange', () => {
    updateVolumeUI();
  });
}

/* =====================================================
   EVENT LISTENERS — CONTROLS
===================================================== */

function bindControlEvents() {
  // Play / Pause
  dom.btnPlayPause.addEventListener('click', togglePlay);

  // Next / Previous
  dom.btnNext.addEventListener('click', nextTrack);
  dom.btnPrev.addEventListener('click', previousTrack);

  // Shuffle / Repeat
  dom.btnShuffle.addEventListener('click', toggleShuffle);
  dom.btnRepeat.addEventListener('click', toggleRepeat);

  // Like
  dom.btnLike.addEventListener('click', toggleLike);

  // Add to queue (bonus interaction)
  dom.btnAddQueue.addEventListener('click', () => {
    showToast(`${PLAYLIST[playerState.currentTrackIndex].title} added to queue`, '＋');
  });

  // Volume mute button
  dom.btnVolume.addEventListener('click', toggleMute);

  // Error retry
  dom.btnErrorRetry.addEventListener('click', nextTrack);

  // Shortcuts modal
  dom.btnShortcuts.addEventListener('click', openShortcuts);
  dom.btnCloseShortcuts.addEventListener('click', closeShortcuts);
  dom.shortcutsBackdrop.addEventListener('click', closeShortcuts);

  // Keyboard hint in nav → open shortcuts
  document.getElementById('keyboardHint').addEventListener('click', openShortcuts);
}

/* =====================================================
   EVENT LISTENERS — PROGRESS BAR
===================================================== */

function bindProgressEvents() {
  // Mouse events
  dom.progressContainer.addEventListener('mousedown', handleProgressPointerDown);
  document.addEventListener('mousemove', handleProgressPointerMove);
  document.addEventListener('mouseup', handleProgressPointerUp);

  // Touch events
  dom.progressContainer.addEventListener('touchstart', handleProgressPointerDown, { passive: true });
  document.addEventListener('touchmove', handleProgressPointerMove, { passive: true });
  document.addEventListener('touchend', handleProgressPointerUp);

  // Keyboard accessibility on progress slider
  dom.progressContainer.addEventListener('keydown', (e) => {
    const step = 5;
    const dur = dom.audio.duration || 0;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      dom.audio.currentTime = Math.min(dom.audio.currentTime + step, dur);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      dom.audio.currentTime = Math.max(dom.audio.currentTime - step, 0);
    }
  });
}

/* =====================================================
   EVENT LISTENERS — VOLUME BAR
===================================================== */

function bindVolumeEvents() {
  dom.volumeContainer.addEventListener('mousedown', handleVolumePointerDown);
  document.addEventListener('mousemove', handleVolumePointerMove);
  document.addEventListener('mouseup', handleVolumePointerUp);

  dom.volumeContainer.addEventListener('touchstart', handleVolumePointerDown, { passive: true });
  document.addEventListener('touchmove', handleVolumePointerMove, { passive: true });
  document.addEventListener('touchend', handleVolumePointerUp);

  // Keyboard accessibility on volume slider
  dom.volumeContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      updateVolume(playerState.volume + 0.05);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      updateVolume(playerState.volume - 0.05);
    }
  });
}

/* =====================================================
   PLAYER INITIALISATION
===================================================== */

/**
 * Initialize the SONORA music player
 */
function initializePlayer() {
  // 1. Restore saved preferences
  restoreState();

  // 2. Bind all event listeners
  bindAudioEvents();
  bindControlEvents();
  bindProgressEvents();
  bindVolumeEvents();

  // 3. Keyboard shortcuts
  document.addEventListener('keydown', handleKeydown);

  // 4. Set initial volume
  applyVolume();
  updateVolumeUI();

  // 5. Update shuffle/repeat button states from saved state
  dom.btnShuffle.classList.toggle('active', playerState.shuffle);
  dom.btnShuffle.setAttribute('aria-pressed', String(playerState.shuffle));

  dom.btnRepeat.dataset.mode = playerState.repeatMode;
  dom.btnRepeat.classList.toggle('active', playerState.repeatMode !== 'off');
  dom.btnRepeat.setAttribute('aria-label', `Toggle repeat: ${playerState.repeatMode}`);

  // 6. Load initial/restored track (no autoplay due to browser policies)
  loadTrack(playerState.currentTrackIndex, false);

  // 7. Render playlist
  renderPlaylist();

  // 8. Update playlist count
  document.getElementById('playlistCount').textContent = `${PLAYLIST.length} tracks`;

  // 9. Initial ambient background
  updateAmbientBackground(PLAYLIST[playerState.currentTrackIndex].artwork);

  console.log('%c SONORA ', 'background:#a78bfa;color:#fff;font-weight:bold;font-size:16px;border-radius:4px;padding:4px 8px;');
  console.log('%cImmersive Music Player — CodeAlpha Task 4', 'color:#38bdf8;');
  console.log('%cKeyboard shortcuts: Space, N, P, M, S, R, ←→↑↓', 'color:#7e7b9a;');
}

/* =====================================================
   START APPLICATION
===================================================== */
document.addEventListener('DOMContentLoaded', initializePlayer);
