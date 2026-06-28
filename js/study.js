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
    
    const completedVal = document.getElementById('progress-completed-value');
    const percentVal = document.getElementById('progress-percent-value');
    const progressFill = document.getElementById('progress-bar-fill-global');
    const listContainer = document.getElementById('progress-topics-list');
    
    if (completedVal) completedVal.textContent = `${prog.completed} / ${prog.total}`;
    if (percentVal) percentVal.textContent = `${prog.percentage}%`;
    if (progressFill) progressFill.style.width = `${prog.percentage}%`;
    
    if (listContainer) {
      listContainer.innerHTML = TOPICS.map((topic, i) => {
        const status = this.getTopicProgress(topic.id);
        const scoreData = this.quizScores[topic.id];
        
        let statusLabel = 'Not Started';
        let checkboxHtml = '';
        
        if (status === 'completed') {
          statusLabel = 'Completed';
          checkboxHtml = `
            <div class="progress-status-checkbox completed" data-topic-id="${topic.id}" title="Mark as uncompleted" style="width: 20px; height: 20px; border-radius: var(--radius-full); border: 2px solid var(--success); background: var(--success); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: all var(--duration-fast) var(--ease-smooth);">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          `;
        } else if (status === 'in-progress') {
          statusLabel = 'In Progress';
          checkboxHtml = `
            <div class="progress-status-checkbox in-progress" data-topic-id="${topic.id}" title="Mark as completed" style="width: 20px; height: 20px; border-radius: var(--radius-full); border: 2px solid var(--accent); background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: all var(--duration-fast) var(--ease-smooth);">
              <div style="width: 8px; height: 8px; border-radius: var(--radius-full); background: var(--accent);"></div>
            </div>
          `;
        } else {
          checkboxHtml = `
            <div class="progress-status-checkbox none" data-topic-id="${topic.id}" title="Mark as completed" style="width: 20px; height: 20px; border-radius: var(--radius-full); border: 2px solid var(--glass-border); background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: all var(--duration-fast) var(--ease-smooth);">
            </div>
          `;
        }
        
        const quizText = scoreData ? `<span class="progress-quiz-badge">Quiz: ${scoreData.score}/${scoreData.total}</span>` : '';
        
        return `
          <div class="progress-topic-row" data-topic-id="${topic.id}">
            <div class="progress-topic-row-left">
              ${checkboxHtml}
              <span class="progress-topic-name" style="margin-left: var(--space-1);">${topic.number}. ${topic.title}</span>
            </div>
            <div class="progress-topic-row-right">
              ${quizText}
              <span style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 500;">${statusLabel}</span>
            </div>
          </div>
        `;
      }).join('');
      
      listContainer.querySelectorAll('.progress-topic-row').forEach(row => {
        row.addEventListener('click', () => {
          const topicId = row.dataset.topicId;
          this.app.switchTopic(topicId);
          this.closeProgress();
        });
      });

      listContainer.querySelectorAll('.progress-status-checkbox').forEach(box => {
        box.addEventListener('click', (e) => {
          e.stopPropagation();
          const topicId = box.dataset.topicId;
          const currentStatus = this.getTopicProgress(topicId);
          const newStatus = currentStatus === 'completed' ? 'none' : 'completed';
          this.markTopicProgress(topicId, newStatus);
          this.showProgress();
        });
      });
    }
    
    const overlay = document.getElementById('progress-overlay');
    if (overlay) overlay.classList.add('active');
  }

  closeProgress() {
    const overlay = document.getElementById('progress-overlay');
    if (overlay) overlay.classList.remove('active');
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
    console.log('flipFlashcard called. New state:', this.isFlashcardFlipped, 'Flashcard element found:', !!flashcard);
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
    this.quizUserAnswers = new Array(this.quizQuestions.length).fill(null);

    const overlay = document.getElementById('quiz-overlay');
    if (overlay) {
      overlay.classList.add('active');
      const quizNav = document.getElementById('quiz-nav');
      if (quizNav) quizNav.style.display = 'flex';
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
    const counter = document.getElementById('quiz-counter');

    if (questionNum) questionNum.textContent = `Question ${this.quizIndex + 1} of ${this.quizQuestions.length}`;
    if (questionText) questionText.textContent = q.question;
    if (progressFill) progressFill.style.width = `${((this.quizIndex + 1) / this.quizQuestions.length) * 100}%`;
    if (counter) counter.textContent = `${this.quizIndex + 1} / ${this.quizQuestions.length}`;

    if (optionsContainer) {
      const letters = ['A', 'B', 'C', 'D'];
      const chosenIndex = this.quizUserAnswers[this.quizIndex];

      optionsContainer.innerHTML = q.options.map((opt, i) => {
        let extraClass = '';
        if (chosenIndex !== null) {
          if (opt === q.correct) {
            extraClass = 'correct';
          } else if (i === chosenIndex) {
            extraClass = 'incorrect';
          }
        }
        return `
          <div class="quiz-option ${extraClass}" data-index="${i}" data-correct="${opt === q.correct}">
            <span class="quiz-option-letter">${letters[i]}</span>
            <span>${opt}</span>
          </div>
        `;
      }).join('');

      if (chosenIndex === null) {
        optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
          option.addEventListener('click', () => {
            if (this.quizUserAnswers[this.quizIndex] !== null) return;
            const clickedIdx = parseInt(option.dataset.index);
            this.quizUserAnswers[this.quizIndex] = clickedIdx;

            const isCorrect = option.dataset.correct === 'true';
            option.classList.add(isCorrect ? 'correct' : 'incorrect');

            if (!isCorrect) {
              optionsContainer.querySelector('[data-correct="true"]')?.classList.add('correct');
            }

            setTimeout(() => {
              this.nextQuizQuestion();
            }, 1200);
          });
        });
      }
    }
  }

  nextQuizQuestion() {
    if (this.quizIndex < this.quizQuestions.length - 1) {
      this.quizIndex++;
      this.renderQuizQuestion();
    } else {
      this.showQuizResults();
    }
  }

  prevQuizQuestion() {
    if (this.quizIndex > 0) {
      this.quizIndex--;
      this.renderQuizQuestion();
    }
  }

  showQuizResults() {
    this.quizScore = this.quizUserAnswers.reduce((acc, ans, idx) => {
      if (ans === null) return acc;
      const q = this.quizQuestions[idx];
      return acc + (q.options[ans] === q.correct ? 1 : 0);
    }, 0);

    const questionNum = document.getElementById('quiz-question-number');
    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const progressFill = document.getElementById('quiz-progress-fill');
    const quizNav = document.getElementById('quiz-nav');

    if (progressFill) progressFill.style.width = '100%';
    if (questionNum) questionNum.textContent = 'Quiz Complete!';
    if (questionText) questionText.textContent = '';
    if (quizNav) quizNav.style.display = 'none';

    if (optionsContainer) {
      const percentage = Math.round((this.quizScore / this.quizQuestions.length) * 100);
      optionsContainer.innerHTML = `
        <div class="quiz-score" style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4);">
          <div class="quiz-score-value">${this.quizScore}/${this.quizQuestions.length}</div>
          <div class="quiz-score-label" style="margin-bottom: var(--space-2);">${percentage}% correct</div>
          <button class="nav-item active" id="quiz-retake-btn" style="width: auto; padding: var(--space-2) var(--space-6); border-radius: var(--radius-full); text-align: center; justify-content: center; font-weight: 600; display: inline-flex; align-items: center;">
            Retake Quiz
          </button>
        </div>
      `;

      const retakeBtn = document.getElementById('quiz-retake-btn');
      if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
          this.openQuiz(this.app.currentTopicId);
        });
      }
    }

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
    this.closeProgress();
  }

  dispose() {
    // Cleanup
  }
}
