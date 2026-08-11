/* ==========================================================================
   MUHAMMAD RASHID AZAM PORTFOLIO — MASTER JAVASCRIPT
   Features: Theme Switcher, Mobile Nav, Scroll Progress, Active Nav Tracker,
             Project Filtering, Modal Dialogs, Animated Counters, Form Validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. PRELOADER DISMISSAL
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
    // Fallback timeout in case load event already fired
    setTimeout(() => {
      if (!preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.style.display = 'none', 500);
      }
    }, 1500);
  }

  /* ------------------------------------------------------------------------
     2. THEME SWITCHER (DARK / LIGHT MODE) WITH LOCALSTORAGE
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Saved user theme preference or default to dark
  const savedTheme = localStorage.getItem('techbyrash_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('techbyrash_theme', newTheme);
    });
  }

  /* ------------------------------------------------------------------------
     3. STICKY NAVBAR & SCROLL PROGRESS BAR
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Sticky navbar compaction
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll progress bar width
    if (scrollProgress && scrollHeight > 0) {
      const progressPercent = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = `${progressPercent}%`;
    }

    // Back to top floating button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. MOBILE NAVIGATION MENU TOGGLE
     ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. ACTIVE NAV LINK TRACKING (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

  /* ------------------------------------------------------------------------
     6. PROJECT CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     7. PROJECT DETAIL MODAL DIALOG
     ------------------------------------------------------------------------ */
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalContentArea = document.getElementById('modal-content-area');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  // Detailed Project Database
  const projectData = {
    nextgenmind: {
      title: "NEXTGENMIND AI PLATFORM",
      category: "AI / SaaS",
      img: "assets/images/project-nextgenmind.svg",
      description: "NextGenMind AI is an intelligent conversational AI chatbot and digital intelligence workspace designed to synthesize LLM capabilities into a streamlined web application. It features automated prompt routing, multi-model response synthesis, and instant context generation.",
      features: [
        "Conversational AI Chatbot with natural language processing",
        "LLM API integration with streaming response handlers",
        "Modern dark-mode dashboard UI built with React & TypeScript",
        "Persistent prompt history and topic categorizations",
        "Responsive cross-device interface"
      ],
      tech: ["AI / LLMs", "React", "TypeScript", "REST APIs", "CSS Modules"],
      github: "https://github.com/rashidazam1351/nextgenmind-ai",
      live: "https://rashidazam.me"
    },
    uacgs: {
      title: "UNIVERSITY ADMISSION & CAREER GUIDANCE SYSTEM (UACGS)",
      category: "EdTech / Web Application",
      img: "assets/images/project-uacgs.svg",
      description: "UACGS is a comprehensive university admission guidance system engineered for Pakistani students. It allows candidates to calculate aggregate percentages accurately according to university formulas, explore eligible degree programs, and discover recommended institutions.",
      features: [
        "Automated Aggregate Calculator algorithm for Pakistani Universities",
        "Degree & University Recommendation Engine based on student score",
        "Comprehensive University Directory database",
        "Career Guidance pathfinder",
        "Clean, accessible student user interface"
      ],
      tech: ["HTML5", "CSS3", "JavaScript Engine", "EdTech Algorithms"],
      github: "https://github.com/rashidazam1351/uacgs-system",
      live: "https://rashidazam.me"
    },
    zynxis: {
      title: "ZYNXIS CLIENT MANAGEMENT DASHBOARD",
      category: "SaaS / Dashboard",
      img: "assets/images/project-zynxis.svg",
      description: "Built during the Zynxis Frontend Internship, this client dashboard is a modern frontend management interface that provides live client status tracking, revenue charts, query cache management, and persistent state transitions.",
      features: [
        "Client record creation, filtering, and status updates",
        "Interactive visual analytics charts built with Recharts",
        "State management using Zustand & persistent storage",
        "TanStack Query cache management & async data synchronization",
        "Framer Motion smooth micro-animations"
      ],
      tech: ["React", "TypeScript", "TanStack Query", "Zustand", "Recharts", "Tailwind CSS"],
      github: "https://github.com/rashidazam1351/zynxis-client-dashboard",
      live: "https://rashidazam.me"
    },
    lms: {
      title: "TECHBYRASH LEARNING MANAGEMENT SYSTEM (LMS)",
      category: "Education / LMS",
      img: "assets/images/project-lms.svg",
      description: "An online learning management portal designed for digital education courses. It features student authentication flow, video lecture playback via Google Drive API, course enrollment tracking, and an admin management interface.",
      features: [
        "Student registration & authentication system",
        "Google Drive API integration for video course streaming",
        "Course module progress tracking",
        "SEO optimized landing page & course catalogs",
        "Responsive admin dashboard"
      ],
      tech: ["JavaScript", "HTML5", "CSS Grid", "Drive Video API", "SEO Engine"],
      github: "https://github.com/rashidazam1351/techbyrash-lms",
      live: "https://rashidazam.me"
    },
    cricketpro: {
      title: "CRICKETPRO — MATCH SCORING & MANAGEMENT",
      category: "Sports / Web Application",
      img: "assets/images/project-cricket.svg",
      description: "CricketPro is a web scoring application tailored for local cricket matches and tournament management. It enables digital ball-by-ball score tracking, required run-rate metrics, player stats summaries, and match log reports.",
      features: [
        "Live ball-by-ball match score updating",
        "Over timeline widget with extras & wicket highlights",
        "Striker & bowler statistics calculator",
        "Match summary report generation",
        "Lightweight offline-first state persistence"
      ],
      tech: ["JavaScript Engine", "CSS Grid", "Web State API", "Sports Analytics"],
      github: "https://github.com/rashidazam1351/cricketpro-scoring",
      live: "https://rashidazam.me"
    },
    digitaltools: {
      title: "DIGITAL UTILITY TOOLS SUITE",
      category: "Web Tools",
      img: "assets/images/project-tools.svg",
      description: "A suite of daily digital web utilities built for productivity. Includes a real-time USDT to PKR Currency Converter with live exchange rate data, an Instagram Media Link Fetcher tool, and a Temporary Disposable Email Address generator.",
      features: [
        "USDT ↔ PKR Converter with auto-updating conversion math",
        "Media link fetcher interface for public posts",
        "Temporary inbox address generator for privacy testing",
        "Copy-to-clipboard micro-interactions",
        "Zero backend static utility architecture"
      ],
      tech: ["JavaScript APIs", "Exchange Rate API", "DOM Utility Engine", "CSS Modern"],
      github: "https://github.com/rashidazam1351/digital-utility-tools",
      live: "https://rashidazam.me"
    }
  };

  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data || !projectModal || !modalContentArea) return;

    modalContentArea.innerHTML = `
      <span class="project-category-badge" style="position:static; display:inline-block; margin-bottom:0.75rem;">${data.category}</span>
      <h3 class="modal-body-title">${data.title}</h3>
      <img src="${data.img}" alt="${data.title}" class="modal-body-img">
      <p class="modal-body-desc">${data.description}</p>
      
      <div class="modal-features-list">
        <h4>Key Project Features</h4>
        <ul>
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="project-tech-badges" style="margin-bottom: 1.5rem;">
        ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>

      <div class="modal-footer-actions">
        <a href="${data.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>Live Demo / Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>GitHub Repository</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });

  /* ------------------------------------------------------------------------
     8. ANIMATED STAT COUNTERS
     ------------------------------------------------------------------------ */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-count');
      const duration = 2000;
      const step = Math.ceil(target / (duration / 30));
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = current;
        }
      }, 30);
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ------------------------------------------------------------------------
     9. CLIENT-SIDE CONTACT FORM VALIDATION & TOAST
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const formToast = document.getElementById('form-toast');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));
      document.querySelectorAll('.form-input').forEach(fi => fi.classList.remove('invalid'));

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('invalid');
        subjectInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('invalid');
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      if (isValid) {
        // Show success toast feedback
        if (formToast) {
          formToast.className = 'form-toast success';
          formToast.textContent = '✓ Thank you, Muhammad Rashid Azam has received your message! (Form validated successfully)';
        }

        contactForm.reset();

        setTimeout(() => {
          if (formToast) formToast.className = 'form-toast';
        }, 6000);
      }
    });
  }

  /* ------------------------------------------------------------------------
     10. SCROLL ENTRANCE ANIMATIONS
     ------------------------------------------------------------------------ */
  const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-fade-down');

  const entranceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach(el => entranceObserver.observe(el));
});
