// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — App Controller
// Main orchestrator wiring all modules together
// ═══════════════════════════════════════════════════════════════

import { TOPICS, AUTHOR } from './content.js';

import { Navigation } from './navigation.js';
import { ScrollManager } from './scroll.js';
import { StudyManager } from './study.js';
import { Animations } from './animations.js';

class App {
  constructor() {
    this.currentTopicId = 'cva';
    this.currentTopic = TOPICS[0];
    this.labelsVisible = true;
    this.sidebarVisible = true;
    this.theme = localStorage.getItem('neuro-theme') || 'dark';

    this.navigation = null;
    this.scrollManager = null;
    this.study = null;
    this.animations = null;
  }

  async init() {
    // Apply saved theme immediately
    document.documentElement.setAttribute('data-theme', this.theme);

    // Init modules
    this.animations = new Animations();
    this.animations.init();

    this.study = new StudyManager(this);
    this.study.init();

    this.navigation = new Navigation(this);
    this.navigation.init();

    this.scrollManager = new ScrollManager(this);
    this.scrollManager.init();

    // Render initial state
    this.navigation.renderTopicList(
      document.getElementById('topics-list'),
      this.currentTopicId
    );

    // Setup all UI
    this.setupContentTabs();
    this.setupBookmarkButton();
    this.setupStudyUI();
    this.setupSidebarToggle();
    this.setupThemeToggle();
    this.setupImageLightbox();
    this.setupHeaderScrollFade();

    // Load first topic
    this.switchTopic('cva', false);

    // Update user info
    this.updateUserInfo();

    // Hide loading screen
    this.hideLoading();
  }

  // ── Topic Switching ───────────────────────────────────────
  switchTopic(topicId, animate = true) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    this.currentTopicId = topicId;
    this.currentTopic = topic;

    const contentBody = document.getElementById('content-body');

    const doSwitch = () => {
      this.updateViewportHeader(topic);
      this.updateContent(topic);
      this.updateVisualization(topic);
      this.navigation.updateActiveTopicUI(topicId);
      this.study.updateBookmarkUI(topicId);
      this.scrollManager.scrollToTop();
      this.scrollManager.observeContent();
      this.animations.observeSections(contentBody);
      // Reset header opacity when switching topic
      const header = document.getElementById('viewport-header');
      if (header) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
      }
    };

    if (animate && contentBody) {
      this.animations.animateTopicTransition(contentBody, doSwitch);
    } else {
      doSwitch();
    }
  }

  // ── Update Viewport Header ────────────────────────────────
  updateViewportHeader(topic) {
    const title = document.getElementById('viewport-title');
    const subtitle = document.getElementById('viewport-subtitle');

    if (title) title.textContent = `${topic.number}. ${topic.fullTitle}`;
    if (subtitle) subtitle.textContent = topic.subtitle;
  }

  // ── Update Content ────────────────────────────────────────
  updateContent(topic) {
    const contentInner = document.getElementById('content-inner');
    if (!contentInner) return;

    let html = topic.html;

    let headingCount = 0;
    html = html.replace(/<(h[2-6])>/g, (match, tag) => {
      headingCount++;
      return `<${tag} id="${topic.id}-heading-${headingCount}">`;
    });

    const sections = html.split(/(?=<h[23][\s>])/);
    const wrappedHtml = sections.map(section =>
      `<div class="content-section-block">${section}</div>`
    ).join('');

    contentInner.innerHTML = `<div class="medical-content">${wrappedHtml}</div>`;

    setTimeout(() => {
      contentInner.querySelectorAll('.content-section-block').forEach((block, i) => {
        setTimeout(() => block.classList.add('visible'), i * 60);
      });
    }, 100);
  }

  // ── Update Illustration ────────────────────────────────────
  updateVisualization(topic) {
    const heroImage = document.getElementById('hero-illustration');
    const placeholder = document.getElementById('illustration-placeholder');
    const expandHint = document.getElementById('expand-hint');
    if (!heroImage || !placeholder) return;

    const imagePath = `assets/illustrations/${topic.id}.jpeg`;

    heroImage.style.opacity = '0';
    placeholder.style.display = 'flex';
    if (expandHint) expandHint.style.opacity = '0';

    const img = new Image();
    img.onload = () => {
      heroImage.src = imagePath;
      heroImage.dataset.src = imagePath; // for lightbox
      placeholder.style.display = 'none';
      gsap.to(heroImage, { opacity: 1, duration: 0.8, ease: 'power2.out' });
      if (expandHint) setTimeout(() => gsap.to(expandHint, { opacity: 1, duration: 0.5 }), 900);
    };
    img.onerror = () => {
      heroImage.src = '';
      placeholder.style.display = 'flex';
      placeholder.querySelector('span').textContent = 'Illustration pending...';
      if (expandHint) expandHint.style.opacity = '0';
    };
    img.src = imagePath;
  }

  // ── Image Lightbox ────────────────────────────────────────
  setupImageLightbox() {
    const heroImage = document.getElementById('hero-illustration');
    const container = document.getElementById('illustration-container');
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    const openLightbox = () => {
      if (!heroImage.src || heroImage.style.opacity === '0') return;
      lightboxImg.src = heroImage.src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (container) {
      container.addEventListener('click', openLightbox);
      container.addEventListener('touchend', (e) => { e.preventDefault(); openLightbox(); }, { passive: false });
      container.style.cursor = 'zoom-in';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target === lightboxImg) closeLightbox();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ── Sidebar Toggle ────────────────────────────────────────
  setupSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        this.sidebarVisible = !this.sidebarVisible;
        sidebar.classList.toggle('collapsed', !this.sidebarVisible);
        toggleBtn.classList.toggle('active', !this.sidebarVisible);
      });
    }
  }

  // ── Theme Toggle (Dark / Light) ───────────────────────────
  setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    this._applyThemeIcon();

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('neuro-theme', this.theme);
        this._applyThemeIcon();
      });
    }
  }

  _applyThemeIcon() {
    const moon = document.querySelector('.icon-moon');
    const sun = document.querySelector('.icon-sun');
    if (this.theme === 'dark') {
      if (moon) moon.style.display = 'block';
      if (sun) sun.style.display = 'none';
    } else {
      if (moon) moon.style.display = 'none';
      if (sun) sun.style.display = 'block';
    }
  }

  // ── Header Scroll Fade ────────────────────────────────────
  setupHeaderScrollFade() {
    const contentBody = document.getElementById('content-body');
    const header = document.getElementById('viewport-header');
    if (!contentBody || !header) return;

    // Initially hidden
    header.style.opacity = '0';
    header.style.pointerEvents = 'none';

    contentBody.addEventListener('scroll', () => {
      const scrolled = contentBody.scrollTop;
      // Fade IN header as user scrolls (fully visible at 100px)
      const opacity = Math.min(1, scrolled / 100);
      header.style.opacity = opacity;
      header.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
    }, { passive: true });
  }

  // ── Content Tabs (single tab) ─────────────────────────────
  setupContentTabs() {
    const tabs = document.querySelectorAll('.content-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }

  // ── Bookmark Button ───────────────────────────────────────
  setupBookmarkButton() {
    const btn = document.getElementById('bookmark-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        this.study.toggleBookmark(this.currentTopicId);
      });
    }
  }

  // ── Study UI ──────────────────────────────────────────────
  setupStudyUI() {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
      flashcard.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Flashcard clicked! Flipped state before:', this.study.isFlashcardFlipped);
        this.study.flipFlashcard();
      });
    }

    const flashcardPrev = document.getElementById('flashcard-prev');
    const flashcardNext = document.getElementById('flashcard-next');
    const flashcardClose = document.getElementById('flashcard-close');

    if (flashcardPrev) flashcardPrev.addEventListener('click', (e) => { e.stopPropagation(); this.study.prevFlashcard(); });
    if (flashcardNext) flashcardNext.addEventListener('click', (e) => { e.stopPropagation(); this.study.nextFlashcard(); });
    if (flashcardClose) flashcardClose.addEventListener('click', () => this.study.closeFlashcards());

    const quizPrev = document.getElementById('quiz-prev');
    const quizNext = document.getElementById('quiz-next');
    const quizClose = document.getElementById('quiz-close');

    if (quizPrev) quizPrev.addEventListener('click', (e) => { e.stopPropagation(); this.study.prevQuizQuestion(); });
    if (quizNext) quizNext.addEventListener('click', (e) => { e.stopPropagation(); this.study.nextQuizQuestion(); });
    if (quizClose) quizClose.addEventListener('click', () => this.study.closeQuiz());

    const flashcardOverlay = document.getElementById('flashcard-overlay');
    if (flashcardOverlay) {
      flashcardOverlay.addEventListener('click', (e) => {
        if (e.target === flashcardOverlay) this.study.closeFlashcards();
      });
    }

    const quizOverlay = document.getElementById('quiz-overlay');
    if (quizOverlay) {
      quizOverlay.addEventListener('click', (e) => {
        if (e.target === quizOverlay) this.study.closeQuiz();
      });
    }

    const progressClose = document.getElementById('progress-close');
    if (progressClose) progressClose.addEventListener('click', () => this.study.closeProgress());

    const progressOverlay = document.getElementById('progress-overlay');
    if (progressOverlay) {
      progressOverlay.addEventListener('click', (e) => {
        if (e.target === progressOverlay) this.study.closeProgress();
      });
    }
  }

  // ── User Info ─────────────────────────────────────────────
  updateUserInfo() {
    const nameEl = document.getElementById('user-name');
    const roleEl = document.getElementById('user-role');
    const avatarEl = document.getElementById('user-avatar');

    if (nameEl) nameEl.textContent = AUTHOR.name;
    if (roleEl) roleEl.textContent = AUTHOR.role;
    if (avatarEl) avatarEl.textContent = AUTHOR.name.charAt(0);
  }

  // ── Loading Screen ────────────────────────────────────────
  hideLoading() {
    const loading = document.getElementById('loading-screen');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 600);
      }, 1500);
    }
  }

  // ── Cleanup ───────────────────────────────────────────────
  dispose() {
    this.navigation?.dispose();
    this.scrollManager?.dispose();
    this.study?.dispose();
    this.animations?.dispose();
  }
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
  window.neuroApp = app;
});
