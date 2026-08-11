# 🎧 SONORA — Immersive Music Player

<p align="center">
  <img src="https://img.shields.io/badge/CodeAlpha-Frontend%20Development-8B5CF6?style=for-the-badge&logo=code&logoColor=white" />
  <img src="https://img.shields.io/badge/Task%204-Music%20Player-38BDF8?style=for-the-badge&logo=spotify&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-Ready-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Designed-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  <strong>Sound, in motion.</strong>
</p>

<p align="center">
  A premium, immersive, fully functional music player engineered with
  <strong>Vanilla HTML5, CSS3 and JavaScript</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Zero%20Dependencies-✓-22C55E?style=flat-square" />
  <img src="https://img.shields.io/badge/Responsive-320px%20→%201920px-06B6D4?style=flat-square" />
  <img src="https://img.shields.io/badge/Accessibility-ARIA-8B5CF6?style=flat-square" />
  <img src="https://img.shields.io/badge/LocalStorage-Persistent-F59E0B?style=flat-square" />
</p>

---

## ✦ Overview

**SONORA** is an immersive browser-based music player created for:

> **CodeAlpha Frontend Development Internship — Task 4**

The project goes beyond the core internship requirements and transforms a conventional audio player into a polished digital listening experience.

The interface combines:

- Cinematic album artwork
- Obsidian glassmorphism
- Ambient visual backgrounds
- Animated playback states
- Responsive layouts
- Persistent player preferences
- Keyboard controls
- Shuffle and repeat logic
- Accessible controls
- Graceful audio error handling

The result is a music player that feels less like a basic HTML exercise and more like a small production-ready frontend application.

---

# ✨ Experience

```text
                         SONORA
                    ────────────────
                     Sound, in motion.

                ┌─────────────────────┐
                │                     │
                │    ALBUM ARTWORK    │
                │                     │
                │        ◉            │
                │                     │
                └─────────────────────┘

              Midnight Drive
                 Aria Vale

          ━━━━━━━━━━━━━━━━━━━━━━━
          01:42              04:18

        ◀◀     ▶ / ❚❚     ▶▶

       🔀      🔁       🔊 ━━━━━
````

SONORA is designed around a simple principle:

> **Music should feel alive while it plays.**

Every major interaction provides visual feedback through motion, state changes, transitions, ambient artwork, notifications, and animated playback indicators.

---

# 🚀 Feature Matrix

## 🎵 Core Music Player

| Feature        | Status |
| -------------- | :----: |
| Play / Pause   |    ✅   |
| Next Track     |    ✅   |
| Previous Track |    ✅   |
| Song Title     |    ✅   |
| Artist Name    |    ✅   |
| Current Time   |    ✅   |
| Total Duration |    ✅   |
| Progress Bar   |    ✅   |
| Drag-to-Seek   |    ✅   |
| Volume Slider  |    ✅   |
| Mute Control   |    ✅   |
| Playlist       |    ✅   |
| Autoplay       |    ✅   |

These capabilities directly cover the core CodeAlpha Task 4 requirements for a JavaScript music player. 

---

# ⚡ Advanced Features

SONORA also includes functionality beyond the required specification.

### 🔀 Intelligent Shuffle

Shuffle mode creates randomized playback while maintaining a history stack so that the **Previous** button remains meaningful during shuffled sessions.

### 🔁 Three-State Repeat

The player supports:

```text
REPEAT OFF
    ↓
REPEAT TRACK
    ↓
REPEAT ALL
    ↓
REPEAT OFF
```

### 💾 Persistent Preferences

Player preferences are stored using browser `localStorage`.

Persisted state includes:

* Volume
* Mute state
* Shuffle state
* Repeat mode
* Current track
* Favorite tracks
* Shuffle history

Close the browser.

Return later.

Your player remembers.

---

# ⌨️ Keyboard Experience

SONORA includes a dedicated keyboard shortcut system.

| Key     | Action          |
| ------- | --------------- |
| `Space` | Play / Pause    |
| `N`     | Next Track      |
| `P`     | Previous Track  |
| `M`     | Toggle Mute     |
| `S`     | Toggle Shuffle  |
| `R`     | Toggle Repeat   |
| `L`     | Like / Favorite |
| `↑`     | Increase Volume |
| `↓`     | Decrease Volume |
| `?`     | Keyboard Help   |

Keyboard shortcuts are also exposed through an in-app reference panel.

---

# 🌌 Visual System

SONORA uses a dark cinematic visual language built around depth, glow and motion.

## Color Palette

```text
╭──────────────────────────────────────────────╮
│                                              │
│  OBSIDIAN                                    │
│  #0D0D14                                    │
│                                              │
│  VIOLET                                      │
│  #A78BFA                                    │
│                                              │
│  SKY                                          │
│  #38BDF8                                    │
│                                              │
│  GRADIENT                                     │
│  Violet → Blue → Pink                        │
│                                              │
╰──────────────────────────────────────────────╯
```

### Typography

**Inter**

Used for:

* Interface text
* Metadata
* Controls
* Navigation
* Player information

**Space Grotesk**

Used for:

* SONORA branding
* Display typography
* Headings
* Large visual elements

---

# 🧊 Glassmorphism Architecture

The interface uses layered visual surfaces rather than flat containers.

```text
                 ┌───────────────────────┐
                 │     Ambient Layer     │
                 │   Blurred Album Art   │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │    Glass Surface      │
                 │ backdrop-filter: blur │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │     Player Layer      │
                 │   Artwork + Controls  │
                 └───────────────────────┘
```

Visual effects include:

* Glassmorphism
* Backdrop blur
* Ambient artwork
* Gradient lighting
* Conic gradients
* Floating artwork
* Animated equalizers
* Playback ring animation
* Smooth transitions
* Micro-interactions

---

# 🌀 Motion System

SONORA is intentionally motion-heavy while remaining functional.

### Playback

When music is playing:

```text
        ╭──────────────────╮
        │                  │
        │    ◉ ARTWORK     │
        │                  │
        ╰──────────────────╯
               ↻
        rotating gradient
             artwork ring
```

### Active Track

The currently playing song displays animated equalizer bars.

```text
▂ ▅ ▃ ▇ ▄ ▆ ▂ ▅ ▃
```

### Ambient Background

Album artwork dynamically influences the surrounding visual environment, producing an immersive blurred backdrop.

### Reduced Motion

The application respects:

```css
prefers-reduced-motion
```

Users who prefer reduced animation receive a calmer visual experience without losing functionality.

---

# 🎨 Album Artwork

SONORA ships with eight cinematic demo tracks and corresponding album artwork.

|  # | Track               | Artist            | Artwork Direction             |
| -: | ------------------- | ----------------- | ----------------------------- |
| 01 | **Midnight Drive**  | Aria Vale         | Neon highway / noir night     |
| 02 | **Neon Skies**      | Nova Reed         | Cosmic clouds / electric blue |
| 03 | **Afterglow**       | Elias North       | Golden ocean sunset           |
| 04 | **Velvet Nights**   | Luna Gray         | Deep purple velvet            |
| 05 | **Electric Dreams** | Orion West        | Synthwave cityscape           |
| 06 | **Ocean Lights**    | Mira Sol          | Bioluminescent ocean          |
| 07 | **Slow Motion**     | Atlas Ray         | Golden amber motion blur      |
| 08 | **Last Horizon**    | The Midnight Echo | Mountain twilight             |

---

# 🗂️ Project Architecture

```text
task-4-music-player/
│
├── 📄 index.html
├── 📄 README.md
│
├── 📁 css/
│   └── 🎨 style.css
│
├── 📁 js/
│   └── ⚙️ app.js
│
└── 📁 assets/
    │
    ├── 📁 audio/
    │   ├── 🎵 track-01.mp3
    │   ├── 🎵 track-02.mp3
    │   ├── 🎵 track-03.mp3
    │   ├── 🎵 track-04.mp3
    │   ├── 🎵 track-05.mp3
    │   ├── 🎵 track-06.mp3
    │   ├── 🎵 track-07.mp3
    │   └── 🎵 track-08.mp3
    │
    └── 📁 images/
        ├── 🖼️ album-01
        ├── 🖼️ album-02
        ├── 🖼️ album-03
        ├── 🖼️ album-04
        ├── 🖼️ album-05
        ├── 🖼️ album-06
        ├── 🖼️ album-07
        └── 🖼️ album-08
```

---

# 🧠 JavaScript Architecture

SONORA uses a centralized state-driven architecture.

```javascript
const playerState = {
    currentTrackIndex,
    isPlaying,
    volume,
    isMuted,
    shuffle,
    repeatMode,
    isDraggingProgress,
    isDraggingVolume,
    likedTracks,
    shuffleHistory
};
```

This keeps playback behavior, UI state and user preferences synchronized.

---

# 🔧 Core Functions

### Initialization

```javascript
initializePlayer()
```

Bootstraps the entire application.

---

### Track Loading

```javascript
loadTrack(index, autoplay)
```

Responsible for:

* Selecting the track
* Updating metadata
* Loading audio
* Updating artwork
* Updating ambient background
* Synchronizing the playlist
* Optionally starting playback

---

### Playback

```javascript
playTrack()
pauseTrack()
togglePlay()
```

Controls the HTML5 audio engine and corresponding interface state.

---

### Navigation

```javascript
nextTrack()
previousTrack()
```

Supports:

* Normal playback
* Shuffle
* Repeat
* History-aware navigation
* Track restart behavior
* Playlist wrapping

---

### Playback Modes

```javascript
toggleShuffle()
toggleRepeat()
handleTrackEnded()
```

Handles the player's playback decision tree.

---

### Timeline

```javascript
updateProgress()
seekAudio(ratio)
```

Controls:

* Progress rendering
* Current time
* Seeking
* Drag interaction

---

### Volume

```javascript
updateVolume(value)
toggleMute()
```

Controls:

* Volume level
* Mute state
* Volume icon state
* Persistent volume preferences

---

### Playlist

```javascript
renderPlaylist()
```

Rebuilds the playlist interface and synchronizes the active track.

---

### Notifications

```javascript
showToast(message, icon)
```

Provides immediate visual feedback for player actions.

---

### Persistence

```javascript
saveState()
restoreState()
```

Stores and restores user preferences through browser `localStorage`.

---

# 🛡️ Error Handling

SONORA is designed to fail gracefully.

If an audio file is missing or cannot be loaded, the application:

```text
Audio Error
     │
     ▼
Display Error State
     │
     ▼
Offer "Try Next Song"
     │
     ▼
Continue Player Session
```

A missing audio file does **not** cause the entire application to crash.

---

# 📱 Responsive Design

SONORA adapts across modern screen sizes.

```text
320px
  │
  ├── Mobile
  │   └── Stacked player
  │
  ├── Tablet
  │   └── Simplified composition
  │
  └── Desktop
      └── Full immersive layout
              │
              ▼
            1920px+
```

### Mobile

* Centered player
* Stacked content
* Touch-friendly controls
* Responsive artwork

### Tablet

* Optimized player composition
* Reduced visual density
* Album column adjustments

### Desktop

* Full side-by-side composition
* Expanded artwork
* Playlist visibility
* Ambient visual experience

---

# ♿ Accessibility

Accessibility is treated as part of the product rather than an afterthought.

SONORA includes:

* Semantic HTML
* ARIA labels
* Accessible controls
* Keyboard navigation
* Focus-friendly interactions
* Screen-reader-friendly control names
* Reduced-motion support
* Clear state feedback

---

# ▶️ How to Run

## Option 1 — Python HTTP Server

From the project directory:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

---

## Option 2 — VS Code Live Server

1. Open the project in VS Code.
2. Install **Live Server** if needed.
3. Right-click `index.html`.
4. Select:

```text
Open with Live Server
```

The browser will launch the application automatically.

---

## Option 3 — Open Directly

You can also open:

```text
index.html
```

directly in a modern browser.

> ⚠️ Some browsers may restrict local audio playback when using `file://`. For the most reliable experience, use a local HTTP server.

---

# 🎵 Adding Your Own Music

Place MP3 files inside:

```text
assets/audio/
```

Expected structure:

```text
assets/audio/
│
├── track-01.mp3
├── track-02.mp3
├── track-03.mp3
├── track-04.mp3
├── track-05.mp3
├── track-06.mp3
├── track-07.mp3
└── track-08.mp3
```

The corresponding track metadata and artwork can be configured inside the JavaScript track data.

SONORA handles missing audio gracefully instead of allowing the player to crash.

---

# 🔍 Verification Checklist

## Core Playback

* [x] Play works
* [x] Pause works
* [x] Next track works
* [x] Previous track works
* [x] Track wrapping works
* [x] Previous restarts track after 3 seconds
* [x] Progress updates continuously
* [x] Progress seeking works
* [x] Drag-to-seek works
* [x] Volume slider works
* [x] Mute works
* [x] Track duration displays correctly
* [x] Current playback time displays correctly

## Playlist

* [x] Playlist renders correctly
* [x] Playlist selection works
* [x] Active track is highlighted
* [x] Equalizer appears on active track
* [x] Track metadata updates
* [x] Autoplay works

## Advanced Playback

* [x] Shuffle works
* [x] Shuffle avoids unnecessary repeats
* [x] Shuffle history is tracked
* [x] Repeat Off works
* [x] Repeat Track works
* [x] Repeat All works

## UX

* [x] Keyboard shortcuts work
* [x] Toast notifications work
* [x] Favorite tracks work
* [x] LocalStorage persistence works
* [x] Ambient artwork updates
* [x] Artwork animation works
* [x] Reduced-motion preference is honored

## Responsive

* [x] Mobile layout
* [x] Tablet layout
* [x] Desktop layout
* [x] 320px minimum layout
* [x] Large desktop layout

## Reliability

* [x] Missing audio handled gracefully
* [x] Audio errors handled
* [x] No fatal initialization errors
* [x] Player remains usable after audio failure

---

# 📊 Technical Stack

| Technology                | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| **HTML5**                 | Semantic application structure             |
| **CSS3**                  | Design system, animation and responsive UI |
| **JavaScript ES6+**       | Player engine and application logic        |
| **HTML5 Audio API**       | Audio playback                             |
| **LocalStorage API**      | Preference persistence                     |
| **CSS Custom Properties** | Design tokens                              |
| **ARIA**                  | Accessibility                              |
| **CSS Media Queries**     | Responsive layouts                         |

### Dependencies

```text
Dependencies: 0
Frameworks:   0
Build Tools:  0
Bundlers:     0
```

**Pure Vanilla JavaScript.**

---

# 🏗️ Engineering Principles

SONORA was built around several frontend principles:

### 01 — State First

Player behavior is centralized through `playerState`.

### 02 — Progressive Enhancement

The core player remains functional without unnecessary dependencies.

### 03 — Component-Like Organization

Even without a framework, functionality is separated into focused functions.

### 04 — Responsive by Default

The interface adapts instead of relying on a fixed desktop composition.

### 05 — Accessible Interaction

Controls communicate their state to both users and assistive technology.

### 06 — Graceful Failure

Audio failures are treated as recoverable states rather than fatal errors.

### 07 — Visual Feedback

Every important user interaction should have a visible response.

---

# 🎯 CodeAlpha Task Alignment

This project fulfills the requirements of:

> **CodeAlpha Frontend Development Internship — Task 4: Music Player using JavaScript**

The official task requires a music player interface built with HTML and CSS, JavaScript-powered audio controls including play, pause, next and previous, song title/artist/duration information, a progress bar and volume control. Playlist and autoplay are listed as bonus functionality. 

SONORA implements the required functionality and extends it with:

```text
                    CODEALPHA TASK 4
                           │
             ┌─────────────┴─────────────┐
             │                           │
          REQUIRED                    BONUS
             │                           │
      ┌──────┴──────┐             ┌──────┴──────┐
      │             │             │             │
   Playback      Metadata      Playlist      Autoplay
   Controls      + Time
      │
   Progress
   Volume
```

---

# 📈 Beyond the Assignment

The implementation goes beyond the minimum task specification with:

* Advanced shuffle history
* Three-state repeat
* LocalStorage persistence
* Keyboard shortcut system
* Dynamic ambient backgrounds
* Animated equalizer
* Artwork playback ring
* Favorite system
* Toast notifications
* ARIA accessibility
* Reduced-motion support
* Responsive 320px–1920px+ layouts
* Graceful audio recovery

The goal was not simply to satisfy a checklist.

The goal was to create a **complete frontend experience**.

---

# 🧪 Quality Standards

SONORA follows a production-oriented frontend mindset:

```text
                    ┌───────────────┐
                    │   SONORA UI   │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      FUNCTIONAL         RESPONSIVE       ACCESSIBLE
          │                 │                 │
          ▼                 ▼                 ▼
       PLAYBACK          MOBILE          KEYBOARD
       STATE             TABLET          ARIA
       ERRORS            DESKTOP         MOTION
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                     USER EXPERIENCE
```

---

# 📁 File Responsibilities

### `index.html`

Contains the complete semantic application structure, including:

* Player shell
* Artwork container
* Track metadata
* Playback controls
* Progress controls
* Volume controls
* Playlist
* Toast container
* Modal interfaces
* Accessibility attributes

### `css/style.css`

Contains the visual system:

* CSS variables
* Layout
* Glass surfaces
* Gradients
* Typography
* Animations
* Responsive breakpoints
* Playback states
* Accessibility adjustments

### `js/app.js`

Contains the complete application logic:

* Audio engine
* Player state
* Track loading
* Navigation
* Shuffle
* Repeat
* Progress
* Volume
* Playlist
* Persistence
* Keyboard shortcuts
* Error handling
* Notifications

### `assets/audio/`

Stores playable MP3 files.

### `assets/images/`

Stores album artwork used throughout the player.

---

# 🚦 Project Status

<p align="center">

### 🟢 COMPLETE

**CodeAlpha Frontend Development Internship — Task 4**

</p>

```text
HTML Structure       ████████████████████ 100%
CSS Design System    ████████████████████ 100%
JavaScript Engine    ████████████████████ 100%
Audio Controls       ████████████████████ 100%
Playlist             ████████████████████ 100%
Responsive UI        ████████████████████ 100%
Accessibility        ████████████████████ 100%
Error Handling       ████████████████████ 100%
```

---

# 🎥 Project Walkthrough

A project walkthrough can demonstrate:

```text
01 → Application launch
02 → Playlist navigation
03 → Play / Pause
04 → Track switching
05 → Progress seeking
06 → Volume / Mute
07 → Shuffle
08 → Repeat modes
09 → Keyboard shortcuts
10 → Responsive layouts
11 → Error handling
12 → Overall visual experience
```

---

# 🌐 Repository

**CodeAlpha Frontend Development Internship**

Task:

```text
Task 4 — Music Player using JavaScript
```

The CodeAlpha internship instructions require interns to upload completed project source code to GitHub and submit the completed task through the provided submission process. 

---

# 👨‍💻 Developer

<p align="center">

### Built with precision, motion & vanilla JavaScript.

**SONORA**

*Sound, in motion.*

</p>

---

# 📜 License

This project was created as part of the **CodeAlpha Frontend Development Internship**.

The project is intended for educational, portfolio and internship-submission purposes.

---

<p align="center">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎧 SONORA

**Sound, in motion.**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<br>

<sub>
Built with HTML5 · CSS3 · JavaScript · HTML5 Audio API
</sub>

<br><br>

<sub>
© 2026 — CodeAlpha Frontend Development Internship
</sub>

</p>
```
