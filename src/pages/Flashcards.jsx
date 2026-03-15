import { useState } from 'react';
import { FLASHCARDS, MODULES } from '../data';
import ModuleSelector from '../components/ModuleSelector';

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Flashcards({ stats, setStats }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState(new Set());
  const [reviewAgain, setReviewAgain] = useState(new Set());
  const [showSummary, setShowSummary] = useState(false);
  const [moduleColor, setModuleColor] = useState(null);

  const startFlashcards = (moduleCode) => {
    const moduleCards = FLASHCARDS[moduleCode] || [];
    const shuffled = shuffleArray(moduleCards);
    setSelectedModule(moduleCode);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMastered(new Set());
    setReviewAgain(new Set());
    setShowSummary(false);

    // Store the module gradient for card styling
    setModuleColor(MODULES[moduleCode]?.gradient || 'linear-gradient(135deg, #667eea, #764ba2)');
  };

  const handleMastered = () => {
    const updated = new Set(mastered);
    updated.add(currentIndex);
    setMastered(updated);
    advanceCard(updated, reviewAgain);
  };

  const handleReviewAgain = () => {
    const updated = new Set(reviewAgain);
    updated.add(currentIndex);
    setReviewAgain(updated);
    advanceCard(mastered, updated);
  };

  const advanceCard = (currentMastered, currentReview) => {
    const totalCategorised = currentMastered.size + currentReview.size;

    if (totalCategorised >= cards.length) {
      completeDeck();
      return;
    }

    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      completeDeck();
    }
  };

  const completeDeck = () => {
    setShowSummary(true);
    setStats(prev => ({
      ...prev,
      flashcardsStudied: (prev.flashcardsStudied || 0) + 1
    }));
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const reviewMissedCards = () => {
    const missed = cards.filter((_, idx) => reviewAgain.has(idx));
    const shuffled = shuffleArray(missed);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMastered(new Set());
    setReviewAgain(new Set());
    setShowSummary(false);
  };

  const restartAll = () => {
    startFlashcards(selectedModule);
  };

  const backToSelector = () => {
    setSelectedModule(null);
    setCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMastered(new Set());
    setReviewAgain(new Set());
    setShowSummary(false);
  };

  // Module selector screen
  if (!selectedModule) {
    return (
      <div className="feed">
        <ModuleSelector
          onSelect={startFlashcards}
          title="🗂️ Select a Module for Flashcards"
        />
      </div>
    );
  }

  // Summary screen
  if (showSummary) {
    return (
      <div className="feed">
        <div className="block">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Deck Complete! 🎉</h2>

          <div className="results-grid">
            <div className="stat-box">
              <div className="stat-value">{mastered.size}</div>
              <div className="stat-label">Mastered</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">{reviewAgain.size}</div>
              <div className="stat-label">To Review</div>
            </div>
          </div>

          <div style={{ fontSize: '14px', textAlign: 'center', margin: '16px 0', color: 'var(--text-secondary)' }}>
            {reviewAgain.size === 0 && "Perfect run! You've mastered every card."}
            {reviewAgain.size > 0 && reviewAgain.size <= mastered.size && "Good progress! Review the cards you missed to reinforce learning."}
            {reviewAgain.size > mastered.size && "Keep going! Practice makes perfect."}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
            {reviewAgain.size > 0 && (
              <button
                className="btn-primary"
                onClick={reviewMissedCards}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                🔄 Review Missed Cards ({reviewAgain.size})
              </button>
            )}
            <button
              className="btn-primary"
              onClick={backToSelector}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              ← Try Another Module
            </button>
            <button
              className="btn-primary"
              onClick={restartAll}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              🔀 Restart All
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Flashcard interface
  const card = cards[currentIndex];
  const progressPercent = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  return (
    <div className="feed">
      <div className="block">
        {/* Progress */}
        <div className="flashcard-progress">
          <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>
            Card {currentIndex + 1} of {cards.length}
          </div>
          <div className="flashcard-progress-bar">
            <div
              className="flashcard-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div
          className="flashcard-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
            <div
              className="flashcard-front"
              style={{ background: moduleColor }}
            >
              {card.front}
            </div>
            <div className="flashcard-back">
              {card.back}
            </div>
          </div>
        </div>

        {!isFlipped && (
          <div className="flashcard-hint">Tap to flip</div>
        )}

        {/* Got it / Review Again buttons */}
        {isFlipped && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <button
              className="btn-mastered"
              onClick={(e) => { e.stopPropagation(); handleMastered(); }}
              style={{ flex: 1 }}
            >
              ✓ Got it
            </button>
            <button
              className="btn-review"
              onClick={(e) => { e.stopPropagation(); handleReviewAgain(); }}
              style={{ flex: 1 }}
            >
              ↻ Review Again
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="flashcard-nav">
          <button
            className="btn-primary"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
          >
            ← Previous
          </button>
          <button
            className="btn-primary"
            onClick={handleNext}
            disabled={currentIndex >= cards.length - 1}
            style={{ opacity: currentIndex >= cards.length - 1 ? 0.4 : 1 }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
