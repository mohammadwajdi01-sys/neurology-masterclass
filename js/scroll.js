// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — Scroll Tracking
// Sticky headers, progress bar, active section sync
// ═══════════════════════════════════════════════════════════════

export class ScrollManager {
  constructor(app) {
    this.app = app;
    this.contentBody = null;
    this.progressFill = null;
    this.sections = [];
    this.observer = null;
    this.activeSection = null;
  }

  init() {
    this.contentBody = document.getElementById('content-body');
    this.progressFill = document.getElementById('progress-fill');

    if (this.contentBody) {
      this.contentBody.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }

    this.setupSectionObserver();
  }

  // ── Scroll Progress ───────────────────────────────────────
  onScroll() {
    if (!this.contentBody || !this.progressFill) return;

    const scrollTop = this.contentBody.scrollTop;
    const scrollHeight = this.contentBody.scrollHeight - this.contentBody.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    this.progressFill.style.width = `${progress}%`;

    // Track reading progress for study module
    if (progress > 80 && this.app.study) {
      this.app.study.markTopicProgress(this.app.currentTopicId, 'completed');
    } else if (progress > 10 && this.app.study) {
      this.app.study.markTopicProgress(this.app.currentTopicId, 'in-progress');
    }
  }

  // ── Section Observer ──────────────────────────────────────
  setupSectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, {
      root: this.contentBody,
      threshold: 0.3,
      rootMargin: '-20% 0px -60% 0px'
    });
  }

  observeContent() {
    if (!this.contentBody) return;

    // Reset
    this.sections = [];
    if (this.observer) {
      this.observer.disconnect();
    }
    this.setupSectionObserver();

    // Observe all h3 and h4 elements
    const headings = this.contentBody.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach(h => {
      this.sections.push(h);
      this.observer.observe(h);
    });

    // Reset progress
    if (this.progressFill) {
      this.progressFill.style.width = '0%';
    }
  }

  scrollToTop() {
    if (this.contentBody) {
      this.contentBody.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el && this.contentBody) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  dispose() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
