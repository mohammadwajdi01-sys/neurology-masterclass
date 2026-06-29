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
    this.quizMode = this.quizMode || 'practice';
    this.stopQuizTimer();

    const overlay = document.getElementById('quiz-overlay');
    if (!overlay) return;
    overlay.classList.add('active');

    // Wire mode toggle buttons
    document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === this.quizMode);
      btn.onclick = () => {
        this.quizMode = btn.dataset.mode;
        document.querySelectorAll('.quiz-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === this.quizMode));
        this.openQuiz(this.app.currentTopicId);
      };
    });

    // Timer: only in exam mode (3 minutes flat for all topics)
    const timerEl = document.getElementById('quiz-timer');
    if (this.quizMode === 'exam') {
      this._quizTimeRemaining = 180; // 3 minutes flat
      if (timerEl) timerEl.style.display = 'flex';
      this.startQuizTimer();
    } else {
      if (timerEl) timerEl.style.display = 'none';
    }

    // Submit row: only in exam mode
    const submitRow = document.getElementById('quiz-submit-row');
    if (submitRow) submitRow.style.display = this.quizMode === 'exam' ? 'flex' : 'none';

    const quizNav = document.getElementById('quiz-nav');
    if (quizNav) quizNav.style.display = 'flex';

    const submitBtn = document.getElementById('quiz-submit-btn');
    if (submitBtn) submitBtn.onclick = () => this.showQuizResults();

    this.renderQuizQuestion();
    if (this.quizMode === 'exam') this.renderQuestionGrid();
  }

  startQuizTimer() {
    this.stopQuizTimer();
    const display = document.getElementById('quiz-timer-display');
    const timerEl = document.getElementById('quiz-timer');
    this._quizTimerInterval = setInterval(() => {
      this._quizTimeRemaining--;
      const mins = Math.floor(this._quizTimeRemaining / 60);
      const secs = this._quizTimeRemaining % 60;
      if (display) display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
      if (timerEl) timerEl.classList.toggle('quiz-timer-urgent', this._quizTimeRemaining <= 30);
      if (this._quizTimeRemaining <= 0) { this.stopQuizTimer(); this.showQuizResults(); }
    }, 1000);
  }

  stopQuizTimer() {
    if (this._quizTimerInterval) { clearInterval(this._quizTimerInterval); this._quizTimerInterval = null; }
  }

  renderQuestionGrid() {
    const grid = document.getElementById('quiz-question-grid');
    if (!grid) return;
    grid.style.display = 'flex';
    grid.innerHTML = this.quizQuestions.map((_, i) => {
      const answered = this.quizUserAnswers[i] !== null;
      const isCurrent = i === this.quizIndex;
      return `<button class="quiz-grid-btn${answered ? ' answered' : ''}${isCurrent ? ' current' : ''}" data-qi="${i}">${i + 1}</button>`;
    }).join('');
    grid.querySelectorAll('.quiz-grid-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.quizIndex = parseInt(btn.dataset.qi);
        this.renderQuizQuestion();
        this.renderQuestionGrid();
      });
    });
  }

  renderQuizQuestion() {
    const q = this.quizQuestions[this.quizIndex];
    if (!q) { this.showQuizResults(); return; }

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
      const isPractice = this.quizMode === 'practice';

      optionsContainer.innerHTML = q.options.map((opt, i) => {
        let cls = '';
        if (isPractice && chosenIndex !== null) {
          if (opt === q.correct) cls = 'correct';
          else if (i === chosenIndex) cls = 'incorrect';
        }
        if (!isPractice && chosenIndex !== null && i === chosenIndex) cls = 'chosen';
        return `<div class="quiz-option ${cls}" data-index="${i}" data-correct="${opt === q.correct}">
          <span class="quiz-option-letter">${letters[i]}</span><span>${opt}</span></div>`;
      }).join('');

      if (chosenIndex === null || !isPractice) {
        optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
          option.addEventListener('click', () => {
            if (isPractice && this.quizUserAnswers[this.quizIndex] !== null) return;
            const clickedIdx = parseInt(option.dataset.index);
            this.quizUserAnswers[this.quizIndex] = clickedIdx;
            if (isPractice) {
              const isCorrect = option.dataset.correct === 'true';
              option.classList.add(isCorrect ? 'correct' : 'incorrect');
              if (!isCorrect) optionsContainer.querySelector('[data-correct="true"]')?.classList.add('correct');
              setTimeout(() => this.nextQuizQuestion(), 1200);
            } else {
              this.renderQuizQuestion();
              this.renderQuestionGrid();
            }
          });
        });
      }
    }
  }

  nextQuizQuestion() {
    if (this.quizIndex < this.quizQuestions.length - 1) {
      this.quizIndex++;
      this.renderQuizQuestion();
      if (this.quizMode === 'exam') this.renderQuestionGrid();
    } else {
      if (this.quizMode === 'practice') this.showQuizResults();
    }
  }

  prevQuizQuestion() {
    if (this.quizIndex > 0) {
      this.quizIndex--;
      this.renderQuizQuestion();
      if (this.quizMode === 'exam') this.renderQuestionGrid();
    }
  }

  showQuizResults() {
    this.stopQuizTimer();
    const total = this.quizQuestions.length;
    this.quizScore = this.quizUserAnswers.reduce((acc, ans, idx) => {
      if (ans === null) return acc;
      return acc + (this.quizQuestions[idx].options[ans] === this.quizQuestions[idx].correct ? 1 : 0);
    }, 0);

    const answered = this.quizUserAnswers.filter(a => a !== null).length;
    const pct = Math.round((this.quizScore / total) * 100);
    const grade = pct === 100 ? 'A+' : pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
    const gradeColor = ['A+','A'].includes(grade) ? '#22c55e' : grade === 'B' ? '#3b82f6' : grade === 'C' ? '#f59e0b' : '#ef4444';

    const progressFill = document.getElementById('quiz-progress-fill');
    const questionNum = document.getElementById('quiz-question-number');
    const questionText = document.getElementById('quiz-question-text');
    const quizNav = document.getElementById('quiz-nav');
    const quizGrid = document.getElementById('quiz-question-grid');
    const submitRow = document.getElementById('quiz-submit-row');
    const timerEl = document.getElementById('quiz-timer');

    if (progressFill) progressFill.style.width = '100%';
    if (questionNum) questionNum.textContent = 'Results';
    if (questionText) questionText.textContent = '';
    if (quizNav) quizNav.style.display = 'none';
    if (quizGrid) quizGrid.style.display = 'none';
    if (submitRow) submitRow.style.display = 'none';
    if (timerEl) timerEl.style.display = 'none';

    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
      const reportRows = this.quizQuestions.map((q, i) => {
        const userAnsIdx = this.quizUserAnswers[i];
        const userAns = userAnsIdx !== null ? q.options[userAnsIdx] : null;
        const isCorrect = userAns === q.correct;
        const verdict = userAns === null ? '⏭ Skipped' : isCorrect ? '✅ Correct' : '❌ Wrong';
        const vc = userAns === null ? '#6b7280' : isCorrect ? '#22c55e' : '#ef4444';
        return `<div class="quiz-report-row">
          <div class="quiz-report-q">
            <span class="quiz-report-num">Q${i+1}</span>
            <span class="quiz-report-question">${q.question}</span>
            <span class="quiz-report-verdict" style="color:${vc}">${verdict}</span>
          </div>
          <div class="quiz-report-answers">
            ${userAns && !isCorrect ? `<div class="quiz-report-wrong">Your answer: ${userAns}</div>` : ''}
            <div class="quiz-report-correct">Correct: ${q.correct}</div>
          </div>
        </div>`;
      }).join('');

      optionsContainer.innerHTML = `
        <div class="quiz-results-header">
          <div class="quiz-grade-badge" style="background:${gradeColor}20;color:${gradeColor};border:1px solid ${gradeColor}40">${grade}</div>
          <div class="quiz-score-value">${this.quizScore}/${total}</div>
          <div class="quiz-score-label">${pct}% &middot; ${answered}/${total} answered</div>
          <button class="quiz-submit-btn" id="quiz-retake-btn" style="margin-top:var(--space-3)">Retake Quiz</button>
        </div>
        <div class="quiz-report-list">${reportRows}</div>`;

      document.getElementById('quiz-retake-btn')?.addEventListener('click', () => this.openQuiz(this.app.currentTopicId));
      if (pct === 100) this.launchConfetti();
    }

    this.quizScores[this.app.currentTopicId] = { score: this.quizScore, total, date: new Date().toISOString() };
    this.save('neuro-quiz', this.quizScores);
  }

  // ── 🎉 Confetti on 100% ───────────────────────────────────
  launchConfetti() {
    const colors = ['#3b82f6','#6366f1','#22c55e','#f59e0b','#ef4444','#ec4899','#8b5cf6','#06b6d4'];
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;width:100%;height:100%;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width, y: -20 - Math.random() * 120,
      w: 8 + Math.random() * 8, h: 5 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 5, vy: 2.5 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2, spin: (Math.random() - 0.5) * 0.18, opacity: 1
    }));
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (frame > 100) p.opacity -= 0.01;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y); ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 220 && pieces.some(p => p.opacity > 0)) requestAnimationFrame(animate);
      else canvas.remove();
    };
    requestAnimationFrame(animate);
  }

  closeQuiz() {
    this.stopQuizTimer();
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
    this.stopQuizTimer();
  }
}

