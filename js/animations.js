// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — GSAP Animations
// Micro-interactions, page transitions, spring physics
// ═══════════════════════════════════════════════════════════════

export class Animations {
  constructor() {
    this.gsap = window.gsap;
    this.observers = [];
  }

  init() {
    this.setupScrollReveal();
    this.setupClickFeedback();
  }

  // ── Scroll Reveal ─────────────────────────────────────────
  setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (this.gsap) {
            this.gsap.fromTo(entry.target, {
              opacity: 0,
              y: 16,
              filter: 'blur(4px)'
            }, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    this.sectionObserver = observer;
    this.observers.push(observer);
  }

  observeSections(container) {
    if (!container) return;
    const blocks = container.querySelectorAll('.content-section-block');
    blocks.forEach(block => this.sectionObserver.observe(block));
  }

  unobserveSections(container) {
    if (!container) return;
    const blocks = container.querySelectorAll('.content-section-block');
    blocks.forEach(block => this.sectionObserver.unobserve(block));
  }

  // ── Click Feedback ────────────────────────────────────────
  setupClickFeedback() {
    document.addEventListener('pointerdown', (e) => {
      const interactive = e.target.closest('button, .nav-item, .topic-item, .content-tab, .preset-btn, .control-btn, .quiz-option, .flashcard');
      if (interactive && this.gsap) {
        this.gsap.to(interactive, {
          scale: 0.96,
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    });

    document.addEventListener('pointerup', (e) => {
      const interactive = e.target.closest('button, .nav-item, .topic-item, .content-tab, .preset-btn, .control-btn, .quiz-option, .flashcard');
      if (interactive && this.gsap) {
        this.gsap.to(interactive, {
          scale: 1,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)'
        });
      }
    });
  }

  // ── Topic Transition ──────────────────────────────────────
  animateTopicTransition(contentEl, callback) {
    if (!this.gsap) {
      if (callback) callback();
      return;
    }

    const tl = this.gsap.timeline();

    // Fade out current content
    tl.to(contentEl, {
      opacity: 0,
      y: -10,
      filter: 'blur(4px)',
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        if (callback) callback();
      }
    });

    // Fade in new content
    tl.fromTo(contentEl, {
      opacity: 0,
      y: 16,
      filter: 'blur(6px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.4,
      ease: 'power2.out'
    });

    return tl;
  }

  // ── Sidebar Transition ────────────────────────────────────
  animateSidebarToggle(sidebar, isOpen) {
    if (!this.gsap) return;
    this.gsap.to(sidebar, {
      x: isOpen ? 0 : -280,
      duration: 0.4,
      ease: 'power3.out'
    });
  }

  // ── Modal Entrance ────────────────────────────────────────
  animateModalIn(overlay, modal) {
    if (!this.gsap) {
      overlay.classList.add('active');
      return;
    }

    overlay.classList.add('active');
    this.gsap.fromTo(modal, {
      scale: 0.95,
      y: -12,
      opacity: 0
    }, {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 0.35,
      ease: 'power3.out'
    });
  }

  animateModalOut(overlay) {
    if (!this.gsap) {
      overlay.classList.remove('active');
      return;
    }

    this.gsap.to(overlay.querySelector('.search-modal, .flashcard-container, .quiz-card'), {
      scale: 0.95,
      y: -8,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => overlay.classList.remove('active')
    });
  }

  // ── Element Reveal ────────────────────────────────────────
  revealElement(el, delay = 0) {
    if (!this.gsap) {
      el.style.opacity = '1';
      return;
    }

    this.gsap.fromTo(el, {
      opacity: 0,
      y: 8,
      scale: 0.98
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      delay,
      ease: 'power2.out'
    });
  }

  // ── Cleanup ───────────────────────────────────────────────
  dispose() {
    this.observers.forEach(obs => obs.disconnect());
    this.observers = [];
  }
}
