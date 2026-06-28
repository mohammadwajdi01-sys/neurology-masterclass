// ═══════════════════════════════════════════════════════════════
// NEUROLOGY MASTERCLASS 2025 — Study Features
// Bookmarks, Flashcards, Quiz, Progress, Favorites
// ═══════════════════════════════════════════════════════════════

import { TOPICS } from './content.js';
import { STUDY_DATA } from './study-data.js';

export class StudyManager {
  constructor(app) {
    this.app = app;
    this.bookmarks = this.load('neuro-bookmarks') || [];
    this.favorites = this.load('neuro-favorites') || [];
    this.progress = this.load('neuro-progress') || {};
    this.quizScores = this.load('neuro-quiz') || {};

    // Flashcard state
    this.flashcardIndex = 0;
    this.flashcards = [];
    this.isFlashcardFlipped = false;

    // Quiz state
    this.quizQuestions = [];
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;
  }

  init() {
    this.setupNavLinks();
  }

  // ── localStorage helpers ──────────────────────────────────
  load(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch { /* quota exceeded */ }
  }

  // ── Bookmarks ─────────────────────────────────────────────
  isBookmarked(topicId) {
    return this.bookmarks.includes(topicId);
  }

  toggleBookmark(topicId) {
    if (this.isBookmarked(topicId)) {
      this.bookmarks = this.bookmarks.filter(b => b !== topicId);
    } else {
      this.bookmarks.push(topicId);
    }
    this.save('neuro-bookmarks', this.bookmarks);
    this.updateBookmarkUI(topicId);
  }

  updateBookmarkUI(topicId) {
    const btn = document.getElementById('bookmark-btn');
    if (btn) {
      btn.classList.toggle('bookmarked', this.isBookmarked(topicId));
      const label = btn.querySelector('.bookmark-label');
      if (label) {
        label.textContent = this.isBookmarked(topicId) ? 'Bookmarked' : 'Bookmark';
      }
    }
  }

  // ── Favorites ─────────────────────────────────────────────
  isFavorite(topicId) {
    return this.favorites.includes(topicId);
  }

  toggleFavorite(topicId) {
    if (this.isFavorite(topicId)) {
      this.favorites = this.favorites.filter(f => f !== topicId);
    } else {
      this.favorites.push(topicId);
    }
    this.save('neuro-favorites', this.favorites);
  }

  // ── Progress ──────────────────────────────────────────────
  getTopicProgress(topicId) {
    return this.progress[topicId] || 'none';
  }

  markTopicProgress(topicId, status) {
    if (this.progress[topicId] === 'completed' && status === 'in-progress') return;
    this.progress[topicId] = status;
    this.save('neuro-progress', this.progress);
  }

  getOverallProgress() {
    const completed = Object.values(this.progress).filter(p => p === 'completed').length;
    return { completed, total: TOPICS.length, percentage: Math.round((completed / TOPICS.length) * 100) };
  }

  // ── Nav Links ─────────────────────────────────────────────
  setupNavLinks() {
    const bookmarksNav = document.getElementById('nav-bookmarks');
    const flashcardsNav = document.getElementById('nav-flashcards');
    const quizNav = document.getElementById('nav-quiz');
    const progressNav = document.getElementById('nav-progress');

    if (bookmarksNav) {
      bookmarksNav.addEventListener('click', () => this.showBookmarksList());
    }
    if (flashcardsNav) {
      flashcardsNav.addEventListener('click', () => this.openFlashcards());
    }
    if (quizNav) {
      quizNav.addEventListener('click', () => this.openQuiz());
    }
    if (progressNav) {
      progressNav.addEventListener('click', () => this.showProgress());
    }
  }

  showBookmarksList() {
    if (this.bookmarks.length === 0) return;
    // Navigate to first bookmarked topic
    this.app.switchTopic(this.bookmarks[0]);
  }

  showProgress() {
    const prog = this.getOverallProgress();
    alert(`Progress: ${prog.completed}/${prog.total} topics completed (${prog.percentage}%)`);
  }

  // ── Flashcards ────────────────────────────────────────────
  generateFlashcards(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return [];

    // Use curated data if available
    const curated = STUDY_DATA[topicId];
    if (curated && curated.flashcards && curated.flashcards.length > 0) {
      return curated.flashcards.map(c => ({
        category: topic.title,
        question: c.question,
        answer: c.answer
      }));
    }

    // Fallback: auto-generate from HTML headings
    const cards = [];
    const html = topic.html;
    const sections = html.split(/<h[345][^>]*>/);
    const headings = html.match(/<h[345][^>]*>(.*?)<\/h[345]>/g) || [];
    headings.forEach((heading, i) => {
      const headingText = heading.replace(/<[^>]*>/g, '').trim();
      const sectionContent = sections[i + 1] || '';
      const contentText = sectionContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (contentText.length > 20 && contentText.length < 500) {
        cards.push({ category: topic.title, question: headingText, answer: contentText.substring(0, 300) + (contentText.length > 300 ? '...' : '') });
      }
    });
    return cards;
  }

  openFlashcards(topicId) {
    const id = topicId || this.app.currentTopicId;
    this.flashcards = this.generateFlashcards(id);
    if (this.flashcards.length === 0) return;

    this.flashcardIndex = 0;
    this.isFlashcardFlipped = false;

    const overlay = document.getElementById('flashcard-overlay');
    if (overlay) {
      overlay.classList.add('active');
      this.renderFlashcard();
    }
  }

  renderFlashcard() {
    const card = this.flashcards[this.flashcardIndex];
    if (!card) return;

    const category = document.getElementById('flashcard-category');
    const question = document.getElementById('flashcard-question');
    const answer = document.getElementById('flashcard-answer');
    const counter = document.getElementById('flashcard-counter');
    const flashcard = document.getElementById('flashcard');

    if (category) category.textContent = card.category;
    if (question) question.textContent = card.question;
    if (answer) answer.textContent = card.answer;
    if (counter) counter.textContent = `${this.flashcardIndex + 1} / ${this.flashcards.length}`;
    if (flashcard) flashcard.classList.toggle('flipped', this.isFlashcardFlipped);
  }

  flipFlashcard() {
    this.isFlashcardFlipped = !this.isFlashcardFlipped;
    const flashcard = document.getElementById('flashcard');
    if (flashcard) flashcard.classList.toggle('flipped', this.isFlashcardFlipped);
  }

  nextFlashcard() {
    this.isFlashcardFlipped = false;
    this.flashcardIndex = (this.flashcardIndex + 1) % this.flashcards.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.isFlashcardFlipped = false;
    this.flashcardIndex = (this.flashcardIndex - 1 + this.flashcards.length) % this.flashcards.length;
    this.renderFlashcard();
  }

  closeFlashcards() {
    const overlay = document.getElementById('flashcard-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  // ── Quiz Mode ─────────────────────────────────────────────
  generateQuiz(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return [];

    // Use curated data if available
    const curated = STUDY_DATA[topicId];
    if (curated && curated.quiz && curated.quiz.length > 0) {
      return curated.quiz.map(q => ({
        question: q.question,
        correct: q.correct,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
    }

    // Fallback: auto-generate from arrow facts
    const questions = [];
    const html = topic.html;
    const facts = [];
    const listItems = html.match(/<li>([^<]+)<\/li>/g) || [];
    listItems.forEach(li => {
      const content = li.replace(/<[^>]*>/g, '').trim();
      if (content.length > 20 && content.length < 200 && content.includes('→')) facts.push(content);
    });
    facts.slice(0, 8).forEach(fact => {
      const parts = fact.split('→').map(p => p.trim());
      if (parts.length >= 2) {
        const q = { question: `What is associated with "${parts[0]}"?`, correct: parts[1].substring(0, 80), options: [] };
        const wrongAnswers = facts.filter(f => f !== fact).map(f => f.split('→')[1]?.trim().substring(0, 80)).filter(Boolean).slice(0, 3);
        while (wrongAnswers.length < 3) wrongAnswers.push('None of the above');
        q.options = [q.correct, ...wrongAnswers.slice(0, 3)].sort(() => Math.random() - 0.5);
        questions.push(q);
      }
    });

    // If we didn't get enough questions from arrows, add heading-based ones
    if (questions.length < 3) {
      const headings = html.match(/<h5>([^<]+)<\/h5>/g) || [];
      headings.slice(0, 5).forEach(h => {
        const headingText = h.replace(/<[^>]*>/g, '').trim();
        if (headingText.length > 5) {
          questions.push({
            question: `Which investigation is described: "${headingText}"?`,
            correct: topic.title,
            options: [topic.title, ...TOPICS.filter(t => t.id !== topic.id).slice(0, 3).map(t => t.title)].sort(() => Math.random() - 0.5)
          });
        }
      });
    }

    return questions.slice(0, 10);
  }

  openQuiz(topicId) {
    const id = topicId || this.app.currentTopicId;
    this.quizQuestions = this.generateQuiz(id);
    if (this.quizQuestions.length === 0) return;

    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;

    const overlay = document.getElementById('quiz-overlay');
    if (overlay) {
      overlay.classList.add('active');
      this.renderQuizQuestion();
    }
  }

  renderQuizQuestion() {
    const q = this.quizQuestions[this.quizIndex];
    if (!q) {
      this.showQuizResults();
      return;
    }

    const questionNum = document.getElementById('quiz-question-number');
    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const progressFill = document.getElementById('quiz-progress-fill');

    if (questionNum) questionNum.textContent = `Question ${this.quizIndex + 1} of ${this.quizQuestions.length}`;
    if (questionText) questionText.textContent = q.question;
    if (progressFill) progressFill.style.width = `${((this.quizIndex + 1) / this.quizQuestions.length) * 100}%`;

    if (optionsContainer) {
      const letters = ['A', 'B', 'C', 'D'];
      optionsContainer.innerHTML = q.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}" data-correct="${opt === q.correct}">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span>${opt}</span>
        </div>
      `).join('');

      this.quizAnswered = false;
      optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
          if (this.quizAnswered) return;
          this.quizAnswered = true;

          const isCorrect = option.dataset.correct === 'true';
          if (isCorrect) this.quizScore++;

          option.classList.add(isCorrect ? 'correct' : 'incorrect');

          // Show correct answer
          if (!isCorrect) {
            optionsContainer.querySelector('[data-correct="true"]')?.classList.add('correct');
          }

          // Auto-advance
          setTimeout(() => {
            this.quizIndex++;
            this.renderQuizQuestion();
          }, 1200);
        });
      });
    }
  }

  showQuizResults() {
    const questionNum = document.getElementById('quiz-question-number');
    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const progressFill = document.getElementById('quiz-progress-fill');

    if (progressFill) progressFill.style.width = '100%';
    if (questionNum) questionNum.textContent = 'Quiz Complete!';
    if (questionText) questionText.textContent = '';
    if (optionsContainer) {
      const percentage = Math.round((this.quizScore / this.quizQuestions.length) * 100);
      optionsContainer.innerHTML = `
        <div class="quiz-score">
          <div class="quiz-score-value">${this.quizScore}/${this.quizQuestions.length}</div>
          <div class="quiz-score-label">${percentage}% correct</div>
        </div>
      `;
    }

    // Save score
    this.quizScores[this.app.currentTopicId] = {
      score: this.quizScore,
      total: this.quizQuestions.length,
      date: new Date().toISOString()
    };
    this.save('neuro-quiz', this.quizScores);
  }

  closeQuiz() {
    const overlay = document.getElementById('quiz-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  // ── Close All Overlays ────────────────────────────────────
  closeAllOverlays() {
    this.closeFlashcards();
    this.closeQuiz();
  }

  dispose() {
    // Cleanup
  }
}
