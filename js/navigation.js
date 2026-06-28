// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — Navigation, Search, Bookmarks
// ═══════════════════════════════════════════════════════════════

import { TOPICS } from './content.js';

export class Navigation {
  constructor(app) {
    this.app = app;
    this.searchOverlay = null;
    this.searchInput = null;
    this.searchResults = null;
    this.currentSearchResults = [];
    this.focusedResult = -1;
  }

  init() {
    this.setupSidebarToggle();
    this.setupSearch();
    this.setupKeyboardShortcuts();
  }

  // ── Sidebar Toggle ────────────────────────────────────────
  setupSidebarToggle() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }
  }

  // ── Topic Navigation ──────────────────────────────────────
  renderTopicList(container, activeTopic) {
    if (!container) return;
    container.innerHTML = '';

    TOPICS.forEach(topic => {
      const btn = document.createElement('button');
      btn.className = `topic-item${topic.id === activeTopic ? ' active' : ''}`;
      btn.dataset.topicId = topic.id;

      const progress = this.app.study ? this.app.study.getTopicProgress(topic.id) : 'none';
      const progressClass = progress === 'completed' ? 'completed' : progress === 'in-progress' ? 'in-progress' : '';

      btn.innerHTML = `
        <span class="topic-number">${topic.number}</span>
        <span>${topic.title}</span>
        <span class="topic-progress-dot ${progressClass}"></span>
      `;

      btn.addEventListener('click', () => {
        this.app.switchTopic(topic.id);
      });

      container.appendChild(btn);
    });
  }

  updateActiveTopicUI(topicId) {
    document.querySelectorAll('.topic-item').forEach(item => {
      item.classList.toggle('active', item.dataset.topicId === topicId);
    });
  }

  // ── Search ────────────────────────────────────────────────
  setupSearch() {
    this.searchOverlay = document.getElementById('search-overlay');
    this.searchResults = document.getElementById('search-results');

    // Sidebar search input
    const sidebarSearch = document.getElementById('sidebar-search');
    if (sidebarSearch) {
      sidebarSearch.addEventListener('focus', () => this.openSearch());
    }

    // Modal search input
    this.searchInput = document.getElementById('search-modal-input');
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.performSearch(this.searchInput.value));
      this.searchInput.addEventListener('keydown', (e) => this.handleSearchKeydown(e));
    }

    // Close on overlay click
    if (this.searchOverlay) {
      this.searchOverlay.addEventListener('click', (e) => {
        if (e.target === this.searchOverlay) this.closeSearch();
      });
    }
  }

  openSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.classList.add('active');
      setTimeout(() => this.searchInput?.focus(), 100);
    }
  }

  closeSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.classList.remove('active');
      if (this.searchInput) this.searchInput.value = '';
      if (this.searchResults) this.searchResults.innerHTML = '';
      this.currentSearchResults = [];
      this.focusedResult = -1;
    }
  }

  performSearch(query) {
    if (!this.searchResults) return;

    if (!query || query.length < 2) {
      this.searchResults.innerHTML = '';
      this.currentSearchResults = [];
      return;
    }

    const results = [];
    const q = query.toLowerCase();

    TOPICS.forEach(topic => {
      // Strip HTML tags for searching
      const text = topic.html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
      const textLower = text.toLowerCase();

      let idx = 0;
      let found = 0;
      while ((idx = textLower.indexOf(q, idx)) !== -1 && found < 3) {
        // Extract context
        const start = Math.max(0, idx - 40);
        const end = Math.min(text.length, idx + query.length + 40);
        let context = text.substring(start, end);
        if (start > 0) context = '...' + context;
        if (end < text.length) context += '...';

        results.push({
          topic,
          context,
          matchIndex: idx
        });

        idx += query.length;
        found++;
      }
    });

    this.currentSearchResults = results;
    this.focusedResult = -1;
    this.renderSearchResults(results, query);
  }

  renderSearchResults(results, query) {
    if (!this.searchResults) return;

    if (results.length === 0) {
      this.searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }

    this.searchResults.innerHTML = results.map((r, i) => {
      // Highlight match in context
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const highlighted = r.context.replace(regex, '<mark>$1</mark>');

      return `
        <div class="search-result-item" data-index="${i}" data-topic="${r.topic.id}">
          <div>
            <div class="search-result-topic">${r.topic.number}. ${r.topic.title}</div>
            <div class="search-result-text">${highlighted}</div>
          </div>
        </div>
      `;
    }).join('');

    // Click handlers
    this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const topicId = item.dataset.topic;
        this.app.switchTopic(topicId);
        this.closeSearch();
      });
    });
  }

  handleSearchKeydown(e) {
    const items = this.searchResults?.querySelectorAll('.search-result-item') || [];

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.focusedResult = Math.min(this.focusedResult + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.focusedResult = Math.max(this.focusedResult - 1, -1);
    } else if (e.key === 'Enter' && this.focusedResult >= 0) {
      e.preventDefault();
      items[this.focusedResult]?.click();
    } else if (e.key === 'Escape') {
      this.closeSearch();
    }

    items.forEach((item, i) => {
      item.classList.toggle('focused', i === this.focusedResult);
    });
  }

  // ── Keyboard Shortcuts ────────────────────────────────────
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Cmd/Ctrl + K = Search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearch();
      }
      // Escape = Close overlays
      if (e.key === 'Escape') {
        this.closeSearch();
        this.app.study?.closeAllOverlays();
      }
    });
  }

  dispose() {
    // Cleanup if needed
  }
}
