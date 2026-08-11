
# ✦ LUMINA — Visual Stories

<p align="center">
  <strong>A Premium Editorial Photography Gallery</strong>
</p>

<p align="center">
  <em>Curated moments. Captured stories. One immersive visual experience.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CodeAlpha-Frontend%20Internship-e2b170?style=for-the-badge" alt="CodeAlpha Internship">
  <img src="https://img.shields.io/badge/Task-01-060608?style=for-the-badge" alt="Task 1">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <strong>Zero Frameworks • Fully Responsive • Accessible • Interactive</strong>
</p>

---

## ◈ Overview

**LUMINA — Visual Stories** is a premium, production-level photography gallery application created for the **CodeAlpha Frontend Development Internship — Task 1: Image Gallery**.

Rather than implementing a basic grid of images, LUMINA is designed as a complete editorial gallery experience inspired by modern luxury photography platforms and high-end digital portfolios.

The application combines a cinematic dark interface with sophisticated CSS Grid layouts, dynamic filtering, real-time search, intelligent sorting, persistent favorites, an immersive lightbox, keyboard navigation, touch gestures, fullscreen viewing, image downloading, web sharing, URL state synchronization, responsive behavior, accessibility features, and polished micro-interactions.

> **Built entirely with HTML5, CSS3, and Vanilla JavaScript — with zero frontend frameworks or libraries.**

---

## ✦ Live Experience

### Core Experience

```text
┌─────────────────────────────────────────────────────────────┐
│                         LUMINA                              │
│                    Visual Stories                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              EVERY FRAME TELLS A STORY                      │
│                                                             │
│                    [ Explore Gallery ]                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Search photographs...        Sort: Featured                │
│                                                             │
│  [ All ] [ Nature ] [ Travel ] [ Architecture ]            │
│  [ Portraits ] [ Wildlife ] [ Urban ] [ ♥ Favorites ]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│        ┌──────────────┐ ┌───────┐ ┌──────────────┐         │
│        │              │ │       │ │              │         │
│        │   FEATURED   │ │ IMAGE │ │    IMAGE     │         │
│        │     IMAGE    │ │       │ │              │         │
│        │              │ ├───────┤ │              │         │
│        │              │ │ IMAGE │ │              │         │
│        └──────────────┘ └───────┘ └──────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# ✨ Features

## 🎨 Premium Visual Design

* Obsidian-inspired dark aesthetic
* Deep background tones such as `#060608` and `#0d0d12`
* Warm gold accent system
* Glassmorphic interface elements
* Cinematic photography presentation
* Editorial-style composition
* Premium typography using **Cormorant Garamond** and **Outfit**
* Responsive spacing and typography
* Subtle shadows and gradients
* Smooth micro-interactions
* Reduced-motion accessibility support

---

## 🖼️ Editorial Responsive Gallery

The gallery uses **CSS Grid** to create an editorial photography layout rather than a conventional equal-sized image grid.

Featured images can occupy different dimensions:

```text
1 × 1
2 × 1
1 × 2
2 × 2
```

### Responsive behavior

| Device             | Layout                           |
| ------------------ | -------------------------------- |
| 📱 Mobile          | 1 column                         |
| 📱 Tablet          | 2 columns                        |
| 💻 Desktop         | 4 columns                        |
| 🖥️ Large Displays | Constrained premium-width layout |

The layout adapts across mobile, tablet, desktop, and large-screen displays without introducing horizontal overflow.

---

# 🔍 Search, Filtering & Sorting

LUMINA includes a complete client-side gallery discovery system.

### Categories

```text
All
Nature
Architecture
Travel
Portraits
Wildlife
Urban
Favorites
```

### 🔎 Multi-field Search

Search dynamically across:

* Photograph title
* Location
* Category
* Photographer
* Description

Search input is debounced for smoother interaction and reduced unnecessary rendering.

### ↕ Sorting

Available sorting modes include:

```text
Featured First
A → Z
Z → A
Newest Added
```

Search, category filtering, and sorting can be combined without reloading the page.

---

# 🔗 URL State Synchronization

Gallery state can be reflected in the browser URL.

Example:

```text
?category=nature&search=mountain
```

This allows the current gallery state to be represented as a shareable URL while keeping the experience client-side.

---

# 🔦 Immersive Lightbox

Clicking any photograph opens a full-screen lightbox experience.

The lightbox provides:

* High-resolution image presentation
* Image title
* Category
* Location
* Photographer
* Description
* Image counter
* Previous / Next controls
* Close control
* Favorite action
* Download action
* Share action
* Fullscreen mode

Example navigation:

```text
        ←                    →
                 ┌───────────────┐
                 │               │
                 │    IMAGE      │
                 │               │
                 └───────────────┘

              Mountain Silence
                 Swiss Alps

                    04 / 24
```

---

# ⌨️ Keyboard Navigation

The lightbox supports keyboard controls:

| Key   | Action         |
| ----- | -------------- |
| `←`   | Previous image |
| `→`   | Next image     |
| `ESC` | Close lightbox |

This allows the entire viewing experience to be operated without relying exclusively on a mouse.

---

# 📱 Touch & Swipe Navigation

Mobile users can navigate the lightbox naturally using gestures.

```text
Swipe ←  → Next
Swipe →  → Previous
```

Touch events are handled directly through Vanilla JavaScript.

---

# ❤️ Persistent Favorites

Users can save photographs to their personal favorites collection.

Favorites are persisted using:

```javascript
localStorage
```

Therefore, saved photographs remain available even after refreshing or reopening the browser.

### Favorite states

```text
♡ Add to Favorites
♥ Remove from Favorites
```

A dedicated Favorites view allows users to browse only their saved photographs.

---

# ⛶ Fullscreen Mode

The lightbox supports native browser fullscreen functionality through the:

```javascript
Fullscreen API
```

This creates a distraction-free environment for viewing individual photographs.

---

# ↓ Image Download

The lightbox provides a download action for the currently displayed photograph.

Downloaded filenames are formatted using meaningful image information rather than generic browser-generated names.

---

# ↗ Web Share

Where supported by the browser/device, LUMINA uses the:

```javascript
Web Share API
```

If native sharing is unavailable, the application provides a clipboard-based fallback.

Example notification:

```text
✓ Link copied
```

---

# 🔔 Toast Notification System

A lightweight custom toast system provides immediate feedback for user actions.

Examples:

```text
✓ Added to favorites
✓ Removed from favorites
✓ Link copied
✓ Image downloaded
```

Notifications appear and disappear smoothly without interrupting the browsing experience.

---

# 📊 Animated Statistics

The About section includes animated statistics powered by:

```javascript
IntersectionObserver
```

Example:

```text
24+
Photographs

7
Categories

12
Locations

08
Photographers
```

Counters animate when the statistics section enters the viewport.

---

# ✨ Micro-Interactions

The interface includes subtle interaction design throughout the application.

Examples include:

* Image zoom on hover
* Card elevation
* Gradient overlays
* Filter transitions
* Active category indicators
* Favorite animations
* Lightbox transitions
* Header scroll behavior
* CTA hover states
* Scroll reveal animations
* Skeleton loading effects
* Toast notifications
* Back-to-top interaction

Animations are intentionally restrained to preserve a premium editorial feel.

---

# ⏳ Loading Experience

Gallery images use browser-native lazy loading where appropriate:

```html
loading="lazy"
```

Skeleton/shimmer states are used to make loading feel intentional rather than abrupt.

---

# ♿ Accessibility

Accessibility is treated as a core part of the implementation.

### Included

* Semantic HTML5 structure
* Proper heading hierarchy
* Descriptive image `alt` attributes
* Keyboard navigation
* Visible `:focus-visible` states
* ARIA labels
* ARIA modal attributes
* Accessible interactive controls
* Screen-reader-friendly structure
* Reduced-motion support
* Touch-friendly controls
* Sufficient visual contrast

The application also respects:

```css
@media (prefers-reduced-motion: reduce)
```

to minimize non-essential animations for users who request reduced motion.

---

# 📱 Responsive Design

LUMINA is designed to work across a wide range of screen sizes.

Tested design targets include:

```text
320px
375px
425px
768px
1024px
1280px
1440px
1920px+
```

### Mobile

* Single-column gallery
* Touch-friendly controls
* Responsive lightbox
* Mobile navigation
* No horizontal overflow

### Tablet

* Adaptive multi-column gallery
* Optimized spacing
* Responsive controls

### Desktop

* Four-column editorial gallery
* Large cinematic hero
* Spacious content container
* Advanced hover interactions

---

# 🛠️ Technology Stack

### Structure

* HTML5
* Semantic HTML
* ARIA
* Accessible navigation

### Styling

* CSS3
* CSS Custom Properties
* CSS Grid
* Flexbox
* CSS animations
* CSS transitions
* Media queries
* `clamp()`
* Glassmorphism
* Responsive layouts

### Logic

* Vanilla JavaScript
* ES6+
* Array methods
* DOM manipulation
* Event delegation
* LocalStorage
* IntersectionObserver
* Fullscreen API
* Web Share API
* Touch events
* URLSearchParams
* Debounced search

### Dependencies

**Zero third-party frontend frameworks or libraries.**

```text
React       ❌
Vue         ❌
Angular     ❌
jQuery      ❌
Bootstrap   ❌
Tailwind    ❌

Vanilla JS  ✅
```

---

# 📁 Project Structure

```text
CodeAlpha_ImageGallery/
│
├── index.html
│   └── Semantic application structure
│
├── style.css
│   └── Complete design system and responsive styling
│
├── script.js
│   └── Gallery state, filtering, search, sorting,
│       lightbox, favorites and browser APIs
│
└── README.md
    └── Project documentation
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/CodeAlpha_ImageGallery.git
```

## 2. Enter the Project

```bash
cd CodeAlpha_ImageGallery
```

## 3. Launch the Application

Because LUMINA uses native web technologies, no package installation or build process is required.

You can simply open:

```text
index.html
```

in a modern browser.

### Recommended

For the best local development experience, use a local development server such as VS Code Live Server.

Alternatively:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

# 🧪 Feature Checklist

## Gallery

* [x] Responsive image gallery
* [x] Editorial CSS Grid layout
* [x] Featured image sizing
* [x] Hover effects
* [x] Smooth transitions
* [x] Lazy loading
* [x] Loading states

## Search / Filter

* [x] Category filtering
* [x] Favorites filtering
* [x] Multi-field search
* [x] Debounced search
* [x] Sorting
* [x] Combined filtering
* [x] Dynamic image count
* [x] Empty state
* [x] Reset filters
* [x] URL state synchronization

## Lightbox

* [x] Full-screen viewer
* [x] Previous button
* [x] Next button
* [x] Close button
* [x] Image counter
* [x] Keyboard navigation
* [x] Touch/swipe navigation
* [x] Filter-aware navigation
* [x] Fullscreen mode
* [x] Download
* [x] Share
* [x] Favorite toggle

## UX

* [x] Toast notifications
* [x] Scroll reveal
* [x] Animated statistics
* [x] Back-to-top button
* [x] Responsive navigation
* [x] Mobile experience
* [x] Reduced-motion support

## Accessibility

* [x] Semantic HTML
* [x] ARIA attributes
* [x] Keyboard navigation
* [x] Focus states
* [x] Alt text
* [x] Reduced motion
* [x] Accessible controls

---

# 🎓 CodeAlpha Internship

This project was developed as part of the:

**CodeAlpha Frontend Development Internship**

### Assignment

```text
Task 1 — Image Gallery
```

### Required Technologies

```text
HTML
CSS
JavaScript
```

### Implemented Requirements

The project fulfills the core CodeAlpha Image Gallery requirements:

* HTML/CSS gallery layout
* JavaScript navigation
* Previous / Next controls
* Lightbox viewing
* Hover effects
* Smooth transitions
* Responsive design
* Image filtering/categories

It additionally implements an expanded set of advanced functionality to demonstrate frontend development skills.

---

# 📸 Screenshots

> Add project screenshots here after deployment.

### Desktop

```text
[ Add Desktop Screenshot ]
```

### Gallery

```text
[ Add Gallery Screenshot ]
```

### Lightbox

```text
[ Add Lightbox Screenshot ]
```

### Mobile

```text
[ Add Mobile Screenshot ]
```

---

# 🌐 Deployment

The project can be deployed using static hosting platforms such as:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages

No backend server is required.

---

# 📈 Future Improvements

Potential future enhancements include:

* Cloud-based image management
* User authentication
* Server-side favorites
* Dynamic photographer profiles
* Advanced image metadata
* Infinite scrolling
* Progressive image loading
* PWA support
* Offline caching
* CMS integration
* AI-powered image search
* EXIF metadata viewer

---

# 👨‍💻 Developer

**Frontend Developer Intern**

Built as a CodeAlpha internship project with a focus on:

```text
Frontend Engineering
Responsive Design
JavaScript Architecture
Accessibility
Interaction Design
Performance
Modern Web APIs
```

---

# ⭐ Project Philosophy

> **LUMINA is more than an image grid.**
>
> It is an exploration of how native web technologies can create an immersive, polished and accessible visual experience without relying on a frontend framework.

Every interaction is intentionally designed to keep the focus where it belongs:

**on the photograph.**

---

<p align="center">
  <strong>LUMINA — Visual Stories</strong>
  <br>
  <em>Every frame tells a story.</em>
</p>

<p align="center">
  Built with HTML5 · CSS3 · Vanilla JavaScript
</p>
