/**
 * ==========================================================================
 * LUMINA — Visual Stories | Fine Art Photography Gallery
 * Vanilla ES6+ JavaScript Core Application
 * CodeAlpha Frontend Internship — Task 1: Image Gallery
 * ==========================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. CURATED GALLERY DATASET (24 PHOTOGRAPHS)
   -------------------------------------------------------------------------- */
const galleryData = [
  {
    id: 1,
    title: "Mountain Silence",
    category: "Nature",
    location: "Swiss Alps, Switzerland",
    photographer: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    description: "A serene dawn over snow-dusted alpine peaks reflecting absolute quietude.",
    featured: true,
    spanClass: "card-featured",
    date: "2026-01-15"
  },
  {
    id: 2,
    title: "The Monolith",
    category: "Architecture",
    location: "Tokyo, Japan",
    photographer: "Kenji Sato",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description: "Sleek glass geometric facets rising into the misty urban skyline.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-01-20"
  },
  {
    id: 3,
    title: "Venetian Echoes",
    category: "Travel",
    location: "Venice, Italy",
    photographer: "Elena Rossi",
    image: "https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=1200&q=85",
    description: "Gondolas gliding silently down historic canals during golden twilight.",
    featured: true,
    spanClass: "card-wide",
    date: "2026-02-02"
  },
  {
    id: 4,
    title: "Soul of the Nomads",
    category: "Portraits",
    location: "Altai Mountains, Mongolia",
    photographer: "Bayan Erden",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    description: "A commanding portrait capturing generations of steppe heritage and resilience.",
    featured: false,
    spanClass: "card-tall",
    date: "2025-11-10"
  },
  {
    id: 5,
    title: "Arctic Sovereign",
    category: "Wildlife",
    location: "Svalbard, Norway",
    photographer: "Henrik Lindqvist",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1200&q=85",
    description: "A polar bear standing solitary amidst fracturing pack ice in northern sea.",
    featured: true,
    spanClass: "card-standard",
    date: "2026-01-05"
  },
  {
    id: 6,
    title: "Cyber Neon",
    category: "Urban",
    location: "Shinjuku, Tokyo",
    photographer: "Kenji Sato",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85",
    description: "Vibrant neon signs reflecting off rain-slicked asphalt at midnight.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-02-14"
  },
  {
    id: 7,
    title: "Emerald Cascade",
    category: "Nature",
    location: "Skógafoss, Iceland",
    photographer: "Freja Hansen",
    image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=85",
    description: "Roaring waterfall crashing into black volcanic sands under mossy cliffs.",
    featured: false,
    spanClass: "card-tall",
    date: "2025-12-18"
  },
  {
    id: 8,
    title: "Curved Horizons",
    category: "Architecture",
    location: "Dubai, UAE",
    photographer: "Zaid Al-Mansoor",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    description: "Futuristic organic architecture defying conventional geometric boundaries.",
    featured: true,
    spanClass: "card-wide",
    date: "2026-02-08"
  },
  {
    id: 9,
    title: "Lantern Nights",
    category: "Travel",
    location: "Kyoto, Japan",
    photographer: "Mei-Ling Chen",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    description: "Warm paper lanterns illuminating traditional wooden alleyways in Gion.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-10-30"
  },
  {
    id: 10,
    title: "Timeless Gaze",
    category: "Portraits",
    location: "Milan, Italy",
    photographer: "Marco Bellini",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
    description: "Expressive natural light studio portrait depicting quiet introspection.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-01-28"
  },
  {
    id: 11,
    title: "Monarch Flight",
    category: "Wildlife",
    location: "Michoacán, Mexico",
    photographer: "Carlos Sandoval",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=85",
    description: "Thousands of orange monarch butterflies filling a sunlit pine canopy.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-11-22"
  },
  {
    id: 12,
    title: "Rain Reflections",
    category: "Urban",
    location: "London, UK",
    photographer: "Oliver Vance",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    description: "Classic red double-decker buses crossing misty Westminster bridge.",
    featured: true,
    spanClass: "card-featured",
    date: "2026-02-10"
  },
  {
    id: 13,
    title: "Golden Horizon",
    category: "Nature",
    location: "Merzouga, Sahara Desert",
    photographer: "Amira Benali",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
    description: "Endless windswept sand dunes glowing under brilliant golden sun rays.",
    featured: false,
    spanClass: "card-wide",
    date: "2025-09-14"
  },
  {
    id: 14,
    title: "Steel & Glass",
    category: "Architecture",
    location: "Manhattan, New York",
    photographer: "Oliver Vance",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
    description: "Looking straight up into dramatic skyscraper canyons in financial district.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-01-02"
  },
  {
    id: 15,
    title: "Santorini Azure",
    category: "Travel",
    location: "Oia, Greece",
    photographer: "Elena Rossi",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    description: "Iconic whitewashed cliffside villas overlooking Aegean sea at midday.",
    featured: true,
    spanClass: "card-tall",
    date: "2025-08-19"
  },
  {
    id: 16,
    title: "Street Musician",
    category: "Portraits",
    location: "Montmartre, Paris",
    photographer: "Jean-Pierre Laurent",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
    description: "An elderly violinist pouring emotion into cobblestone Parisian streets.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-10-12"
  },
  {
    id: 17,
    title: "Desert Sentinel",
    category: "Wildlife",
    location: "Kalahari, Namibia",
    photographer: "Amira Benali",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
    description: "A regal male lion keeping watch from a sun-baked acacia hilltop.",
    featured: false,
    spanClass: "card-wide",
    date: "2025-12-01"
  },
  {
    id: 18,
    title: "Concrete Jungle",
    category: "Urban",
    location: "Hong Kong",
    photographer: "Mei-Ling Chen",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=85",
    description: "High-density residential highrises creating intricate geometric patterns.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-01-18"
  },
  {
    id: 19,
    title: "Whispering Pines",
    category: "Nature",
    location: "Olympic National Park, USA",
    photographer: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    description: "Misty evergreen forest canopy bathed in soft morning light beams.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-11-04"
  },
  {
    id: 20,
    title: "Gothic Shadows",
    category: "Architecture",
    location: "Prague, Czech Republic",
    photographer: "Freja Hansen",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=85",
    description: "Intricate gothic cathedral spires silhouetted against twilight fog.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-09-28"
  },
  {
    id: 21,
    title: "Spice Bazaars",
    category: "Travel",
    location: "Istanbul, Turkey",
    photographer: "Zaid Al-Mansoor",
    image: "https://images.unsplash.com/photo-1527838832700-54595d144e9b?auto=format&fit=crop&w=1200&q=85",
    description: "Overflowing mounds of colorful aromatic spices and copper urns.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-10-08"
  },
  {
    id: 22,
    title: "Artisan Hands",
    category: "Portraits",
    location: "Oaxaca, Mexico",
    photographer: "Carlos Sandoval",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85",
    description: "Master potter shaping clay on a manual wheel with practiced precision.",
    featured: false,
    spanClass: "card-standard",
    date: "2025-12-30"
  },
  {
    id: 23,
    title: "Deep Blue Grace",
    category: "Wildlife",
    location: "Maui, Hawaii",
    photographer: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    description: "Humpback whale gliding gracefully through crystalline oceanic depths.",
    featured: true,
    spanClass: "card-wide",
    date: "2026-02-01"
  },
  {
    id: 24,
    title: "Twilight Commute",
    category: "Urban",
    location: "Berlin, Germany",
    photographer: "Freja Hansen",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",
    description: "Long exposure light trails of yellow trams cutting through urban evening dusk.",
    featured: false,
    spanClass: "card-standard",
    date: "2026-01-22"
  }
];

/* Fallback SVG for broken external image links */
const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%2314141c"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23e2b170" font-family="sans-serif" font-size="28" font-weight="bold">LUMINA</text><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="%236e6e82" font-family="sans-serif" font-size="18">Image Preview Unavailable</text></svg>`;

/* --------------------------------------------------------------------------
   2. APPLICATION STATE MANAGEMENT
   -------------------------------------------------------------------------- */
const state = {
  allImages: [...galleryData],
  filteredImages: [...galleryData],
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  lightboxIndex: 0,
  favorites: new Set(),
  isTransitioning: false,
  touchStartX: 0,
  touchEndX: 0
};

/* --------------------------------------------------------------------------
   3. DOM ELEMENT REFERENCES
   -------------------------------------------------------------------------- */
const DOM = {
  header: document.getElementById('header'),
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  galleryGrid: document.getElementById('galleryGrid'),
  emptyState: document.getElementById('emptyState'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  galleryCountBadge: document.getElementById('galleryCountBadge'),
  searchInput: document.getElementById('searchInput'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  sortSelect: document.getElementById('sortSelect'),
  filterPills: document.getElementById('filterPills'),
  headerFavCount: document.getElementById('headerFavCount'),
  favCountPill: document.getElementById('favCountPill'),
  headerFavBtn: document.getElementById('headerFavBtn'),
  
  /* Lightbox Elements */
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxBackdrop: document.getElementById('lightboxBackdrop'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxSpinner: document.getElementById('lightboxSpinner'),
  lightboxCounter: document.getElementById('lightboxCounter'),
  lightboxTitle: document.getElementById('lightboxTitle'),
  lightboxCategory: document.getElementById('lightboxCategory'),
  lightboxLocation: document.getElementById('lightboxLocation'),
  lightboxPhotographer: document.getElementById('lightboxPhotographer'),
  lightboxDesc: document.getElementById('lightboxDesc'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),
  lightboxPrevBtn: document.getElementById('lightboxPrevBtn'),
  lightboxNextBtn: document.getElementById('lightboxNextBtn'),
  lightboxFavBtn: document.getElementById('lightboxFavBtn'),
  lightboxFullscreenBtn: document.getElementById('lightboxFullscreenBtn'),
  lightboxShareBtn: document.getElementById('lightboxShareBtn'),
  lightboxDownloadBtn: document.getElementById('lightboxDownloadBtn'),
  
  /* Global Components */
  backToTopBtn: document.getElementById('backToTopBtn'),
  toastContainer: document.getElementById('toastContainer'),
  statsGrid: document.getElementById('statsGrid')
};

/* --------------------------------------------------------------------------
   4. INITIALIZATION & LOCALSTORAGE MANAGEMENT
   -------------------------------------------------------------------------- */
function initializeApp() {
  loadFavorites();
  readUrlParameters();
  bindEventListeners();
  applyFiltersAndSort();
  initIntersectionObservers();
}

function loadFavorites() {
  try {
    const saved = localStorage.getItem('lumina_favorites');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.favorites = new Set(parsed);
    }
  } catch (err) {
    console.warn('LocalStorage error loading favorites:', err);
    state.favorites = new Set();
  }
  updateFavoriteBadgeCounts();
}

function saveFavorites() {
  try {
    const array = Array.from(state.favorites);
    localStorage.setItem('lumina_favorites', JSON.stringify(array));
  } catch (err) {
    console.warn('LocalStorage error saving favorites:', err);
  }
  updateFavoriteBadgeCounts();
}

function updateFavoriteBadgeCounts() {
  const count = state.favorites.size;
  if (DOM.headerFavCount) DOM.headerFavCount.textContent = count;
  if (DOM.favCountPill) DOM.favCountPill.textContent = count;
}

/* --------------------------------------------------------------------------
   5. URL PARAMETER SYNCHRONIZATION
   -------------------------------------------------------------------------- */
function readUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  const searchParam = params.get('search');
  const sortParam = params.get('sort');

  if (categoryParam) state.currentCategory = categoryParam;
  if (searchParam) {
    state.searchQuery = searchParam;
    DOM.searchInput.value = searchParam;
    DOM.searchClearBtn.hidden = false;
  }
  if (sortParam) {
    state.sortBy = sortParam;
    DOM.sortSelect.value = sortParam;
  }

  // Update active pill button UI
  const targetPill = DOM.filterPills.querySelector(`[data-category="${state.currentCategory}"]`);
  if (targetPill) {
    DOM.filterPills.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    targetPill.classList.add('active');
  }
}

function updateUrlParameters() {
  const params = new URLSearchParams();
  if (state.currentCategory !== 'all') params.set('category', state.currentCategory);
  if (state.searchQuery) params.set('search', state.searchQuery);
  if (state.sortBy !== 'featured') params.set('sort', state.sortBy);

  const newRelativePathQuery = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  history.replaceState(null, '', newRelativePathQuery);
}

/* --------------------------------------------------------------------------
   6. FILTERING, SEARCHING & SORTING ENGINE
   -------------------------------------------------------------------------- */
function applyFiltersAndSort() {
  let result = [...state.allImages];

  // Category Filter
  if (state.currentCategory === 'favorites') {
    result = result.filter(img => state.favorites.has(img.id));
  } else if (state.currentCategory !== 'all') {
    result = result.filter(img => img.category.toLowerCase() === state.currentCategory.toLowerCase());
  }

  // Search Filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    result = result.filter(img => 
      img.title.toLowerCase().includes(q) ||
      img.category.toLowerCase().includes(q) ||
      img.location.toLowerCase().includes(q) ||
      img.photographer.toLowerCase().includes(q) ||
      img.description.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'az') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.sortBy === 'za') {
    result.sort((a, b) => b.title.localeCompare(a.title));
  } else if (state.sortBy === 'newest') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (state.sortBy === 'featured') {
    result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
  }

  state.filteredImages = result;
  updateUrlParameters();
  renderGallery();
}

/* --------------------------------------------------------------------------
   7. GALLERY GRID RENDERER
   -------------------------------------------------------------------------- */
function renderGallery() {
  DOM.galleryGrid.innerHTML = '';

  const totalCount = state.allImages.length;
  const filteredCount = state.filteredImages.length;
  DOM.galleryCountBadge.textContent = `Showing ${filteredCount} of ${totalCount} photographs`;

  if (filteredCount === 0) {
    DOM.galleryGrid.hidden = true;
    DOM.emptyState.hidden = false;
    return;
  }

  DOM.emptyState.hidden = false; // Hide empty container
  DOM.emptyState.hidden = true;
  DOM.galleryGrid.hidden = false;

  // Build Document Fragment for performance
  const fragment = document.createDocumentFragment();

  state.filteredImages.forEach((item, index) => {
    const isFav = state.favorites.has(item.id);
    const card = document.createElement('article');
    card.className = `image-card ${item.spanClass}`;
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-index', index);
    card.style.animationDelay = `${(index % 8) * 0.08}s`;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title} — ${item.location}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSvg}';">
        <div class="card-overlay">
          <div class="card-header">
            <span class="card-category-pill">${item.category}</span>
            <button class="card-fav-btn ${isFav ? 'is-favorite' : ''}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}" title="Toggle Favorite" data-fav-id="${item.id}">
              <svg class="heart-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
          <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-location">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/></svg>
              <span>${item.location}</span>
            </div>
            <div class="card-footer-action">
              <span>View Exhibit</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  DOM.galleryGrid.appendChild(fragment);
}

/* --------------------------------------------------------------------------
   8. LIGHTBOX MODAL CONTROLLER
   -------------------------------------------------------------------------- */
function openLightbox(index) {
  if (index < 0 || index >= state.filteredImages.length) return;

  state.lightboxIndex = index;
  updateLightboxContent();

  DOM.lightboxModal.hidden = false;
  // Trigger reflow for CSS opacity animation
  void DOM.lightboxModal.offsetWidth;
  DOM.lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus trap on close button
  DOM.lightboxCloseBtn.focus();
}

function closeLightbox() {
  DOM.lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    DOM.lightboxModal.hidden = true;
  }, 350);
}

function updateLightboxContent() {
  const item = state.filteredImages[state.lightboxIndex];
  if (!item) return;

  const total = state.filteredImages.length;
  DOM.lightboxCounter.textContent = `${String(state.lightboxIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  // Fade transition on image change
  DOM.lightboxImg.classList.add('fading');
  DOM.lightboxSpinner.style.display = 'block';

  const tempImg = new Image();
  tempImg.src = item.image;

  tempImg.onload = () => {
    DOM.lightboxImg.src = item.image;
    DOM.lightboxImg.alt = `${item.title} — ${item.location}`;
    DOM.lightboxSpinner.style.display = 'none';
    DOM.lightboxImg.classList.remove('fading');
  };

  tempImg.onerror = () => {
    DOM.lightboxImg.src = fallbackSvg;
    DOM.lightboxSpinner.style.display = 'none';
    DOM.lightboxImg.classList.remove('fading');
  };

  DOM.lightboxTitle.textContent = item.title;
  DOM.lightboxCategory.textContent = item.category;
  DOM.lightboxLocation.textContent = item.location;
  DOM.lightboxPhotographer.textContent = item.photographer;
  DOM.lightboxDesc.textContent = item.description;

  // Favorite button state
  const isFav = state.favorites.has(item.id);
  if (isFav) {
    DOM.lightboxFavBtn.classList.add('is-favorite');
    DOM.lightboxFavBtn.setAttribute('title', 'Remove from Favorites');
  } else {
    DOM.lightboxFavBtn.classList.remove('is-favorite');
    DOM.lightboxFavBtn.setAttribute('title', 'Add to Favorites');
  }
}

function showNextImage() {
  if (state.isTransitioning || state.filteredImages.length <= 1) return;
  state.isTransitioning = true;
  state.lightboxIndex = (state.lightboxIndex + 1) % state.filteredImages.length;
  updateLightboxContent();
  setTimeout(() => { state.isTransitioning = false; }, 300);
}

function showPreviousImage() {
  if (state.isTransitioning || state.filteredImages.length <= 1) return;
  state.isTransitioning = true;
  state.lightboxIndex = (state.lightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
  updateLightboxContent();
  setTimeout(() => { state.isTransitioning = false; }, 300);
}

function toggleFavorite(imageId) {
  const numId = Number(imageId);
  if (state.favorites.has(numId)) {
    state.favorites.delete(numId);
    showToast('✓ Removed from favorites');
  } else {
    state.favorites.add(numId);
    showToast('♥ Added to favorites');
  }
  saveFavorites();
  applyFiltersAndSort();

  // If lightbox is open, sync favorite state
  if (!DOM.lightboxModal.hidden) {
    const currentItem = state.filteredImages[state.lightboxIndex];
    if (currentItem && currentItem.id === numId) {
      updateLightboxContent();
    }
  }
}

/* --------------------------------------------------------------------------
   9. EXTRA LIGHTBOX ACTIONS (FULLSCREEN, DOWNLOAD, SHARE)
   -------------------------------------------------------------------------- */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    DOM.lightboxModal.requestFullscreen().catch(err => {
      showToast('Fullscreen mode unavailable');
    });
  } else {
    document.exitFullscreen();
  }
}

function downloadImage() {
  const currentItem = state.filteredImages[state.lightboxIndex];
  if (!currentItem) return;

  showToast('Preparing image download...');
  
  // Download using fetch & blob
  fetch(currentItem.image)
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      const cleanFileName = currentItem.title.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.jpg';
      a.download = `Lumina_${cleanFileName}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      showToast('✓ Image downloaded successfully');
    })
    .catch(() => {
      // Fallback direct link download
      const a = document.createElement('a');
      a.href = currentItem.image;
      a.target = '_blank';
      a.download = `${currentItem.title}.jpg`;
      a.click();
    });
}

function shareImage() {
  const currentItem = state.filteredImages[state.lightboxIndex];
  if (!currentItem) return;

  const shareData = {
    title: `LUMINA — ${currentItem.title}`,
    text: `Explore "${currentItem.title}" by ${currentItem.photographer} on LUMINA Visual Stories.`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    // Clipboard fallback
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('✓ Link copied to clipboard!');
    }).catch(() => {
      showToast('Unable to copy share link');
    });
  }
}

/* --------------------------------------------------------------------------
   10. TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, duration);
}

/* --------------------------------------------------------------------------
   11. EVENT LISTENERS BINDING
   -------------------------------------------------------------------------- */
function bindEventListeners() {
  // Sticky Header Scroll Listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      DOM.header.classList.add('scrolled');
    } else {
      DOM.header.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      DOM.backToTopBtn.classList.add('visible');
    } else {
      DOM.backToTopBtn.classList.remove('visible');
    }
  });

  // Mobile Drawer Toggle
  DOM.mobileMenuBtn.addEventListener('click', () => {
    const isOpen = DOM.mobileMenuBtn.classList.toggle('open');
    DOM.mobileDrawer.classList.toggle('open');
    DOM.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile drawer when clicking nav links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      DOM.mobileMenuBtn.classList.remove('open');
      DOM.mobileDrawer.classList.remove('open');
      DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Category Filter Pills Handler
  DOM.filterPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-btn');
    if (!pill) return;

    DOM.filterPills.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    pill.classList.add('active');

    state.currentCategory = pill.dataset.category;
    applyFiltersAndSort();
  });

  // Search Input Handler (Debounced)
  let searchTimeout;
  DOM.searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    DOM.searchClearBtn.hidden = val.length === 0;

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.searchQuery = val;
      applyFiltersAndSort();
    }, 250);
  });

  DOM.searchClearBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.searchClearBtn.hidden = true;
    state.searchQuery = '';
    applyFiltersAndSort();
  });

  // Sorting Select Handler
  DOM.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Reset Filters Button
  DOM.resetFiltersBtn.addEventListener('click', () => {
    state.currentCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';
    DOM.searchInput.value = '';
    DOM.searchClearBtn.hidden = true;
    DOM.sortSelect.value = 'featured';

    DOM.filterPills.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    applyFiltersAndSort();
    showToast('Filters reset to default');
  });

  // Header Favorites quick filter button
  DOM.headerFavBtn.addEventListener('click', () => {
    const favPill = DOM.filterPills.querySelector('[data-category="favorites"]');
    if (favPill) favPill.click();
    window.location.hash = 'gallery';
  });

  // Gallery Card Event Delegation (Open Lightbox or Favorite)
  DOM.galleryGrid.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.card-fav-btn');
    if (favBtn) {
      e.stopPropagation();
      const favId = favBtn.dataset.favId;
      toggleFavorite(favId);
      return;
    }

    const card = e.target.closest('.image-card');
    if (card) {
      const index = Number(card.dataset.index);
      openLightbox(index);
    }
  });

  // Lightbox Navigation & Action Controls
  DOM.lightboxCloseBtn.addEventListener('click', closeLightbox);
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
  DOM.lightboxNextBtn.addEventListener('click', showNextImage);
  DOM.lightboxPrevBtn.addEventListener('click', showPreviousImage);

  DOM.lightboxFavBtn.addEventListener('click', () => {
    const currentItem = state.filteredImages[state.lightboxIndex];
    if (currentItem) toggleFavorite(currentItem.id);
  });

  DOM.lightboxFullscreenBtn.addEventListener('click', toggleFullscreen);
  DOM.lightboxDownloadBtn.addEventListener('click', downloadImage);
  DOM.lightboxShareBtn.addEventListener('click', shareImage);

  // Keyboard Shortcuts (Esc, Arrow Left, Arrow Right)
  window.addEventListener('keydown', (e) => {
    if (DOM.lightboxModal.hidden) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  // Mobile Touch Swipe Gestures inside Lightbox Stage
  const stage = document.querySelector('.lightbox-stage');
  stage.addEventListener('touchstart', (e) => {
    state.touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    state.touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });

  // Floating Back to Top Button
  DOM.backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function handleSwipeGesture() {
  const deltaX = state.touchEndX - state.touchStartX;
  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      showNextImage(); // Swipe left -> Next
    } else {
      showPreviousImage(); // Swipe right -> Prev
    }
  }
}

/* --------------------------------------------------------------------------
   12. INTERSECTION OBSERVERS (STATS COUNTER & SCROLL REVEAL)
   -------------------------------------------------------------------------- */
function initIntersectionObservers() {
  // Stats counter observer
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatsCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (DOM.statsGrid) {
    statsObserver.observe(DOM.statsGrid);
  }
}

function animateStatsCounters() {
  const numbers = document.querySelectorAll('.stat-number');
  numbers.forEach(num => {
    const target = Number(num.dataset.target);
    let count = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        num.textContent = target;
        clearInterval(timer);
      } else {
        num.textContent = count;
      }
    }, 40);
  });
}

/* Launch App when DOM Content Loaded */
document.addEventListener('DOMContentLoaded', initializeApp);
