import { useState } from 'react';
import { MODULES } from '../data';
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

export default function Quiz({ stats, setStats }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showingFeedback, setShowingFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const startQuiz = (moduleCode) => {
    const module = MODULES[moduleCode];
    const shuffled = shuffleArray(module.questions || []);
    setSelectedModule(moduleCode);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers([]);
    setShowingFeedback(false);
    setQuizComplete(false);
  };

  const handleAnswer = (selectedAnswer) => {
    const question = questions[currentIndex];
    const isCorrect = selectedAnswer === question.answer;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      selected: selectedAnswer,
      correct: isCorrect,
      question: question
    };
    setAnswers(newAnswers);
    setShowingFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowingFeedback(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const correctCount = answers.filter(a => a.correct).length;
    const percentage = Math.round((correctCount / questions.length) * 100);
    const isPerfect = percentage === 100;

    const newStreak = answers.every(a => a.correct)
      ? stats.currentStreak + questions.length
      : 0;

    setStats(prev => ({
      ...prev,
      totalQuizzes: prev.totalQuizzes + 1,
      quizScore: percentage,
      perfectScores: isPerfect ? prev.perfectScores + 1 : prev.perfectScores,
      bestStreak: Math.max(prev.bestStreak, newStreak),
      currentStreak: newStreak
    }));

    setQuizComplete(true);
  };

  if (!selectedModule) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedModule(null)}>
          ← Back to Home
        </button>
        <ModuleSelector
          onSelect={startQuiz}
          title="❓ Select a Module to Quiz Yourself"
        />
      </div>
    );
  }

  if (quizComplete) {
    const correctCount = answers.filter(a => a.correct).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    let circleClass = 'high';
    if (percentage < 70) circleClass = 'low';
    else if (percentage < 85) circleClass = 'mid';

    return (
      <div className="feed">
        <div className="block">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Quiz Complete! 🎉</h2>

          <div className={`result-circle ${circleClass}`}>
            <div className="result-label">{percentage}%</div>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              {correctCount}/{questions.length}
            </div>
          </div>

          <div className="results-grid">
            <div className="stat-box">
              <div className="stat-value">{correctCount}</div>
              <div className="stat-label">Correct Answers</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">{questions.length - correctCount}</div>
              <div className="stat-label">To Review</div>
            </div>
          </div>

          <div style={{ fontSize: '14px', textAlign: 'center', margin: '16px 0', color: 'var(--text-secondary)' }}>
            {percentage >= 90 && "Excellent work! You've mastered this module."}
            {percentage >= 70 && percentage < 90 && "Good progress! Review the areas you found challenging."}
            {percentage < 70 && "Keep studying! Focus on the questions you missed."}
          </div>

          <div style={{ marginTop: '16px' }}>
            <button
              className="btn-primary"
              onClick={() => setSelectedModule(null)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              ← Try Another Module
            </button>
          </div>
        </div>

        <div className="floral-accent">🌸</div>

        <div className="block">
          <div className="block-title">📋 Review Your Answers</div>
          {answers.map((answer, idx) => (
            <div key={idx} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
                Question {idx + 1} {answer.correct ? '✓' : '✗'}
              </div>
              <div className="quiz-question" style={{ fontSize: '14px', marginBottom: '8px' }}>
                {answer.question.q}
              </div>
              {answer.question.type === 'mc' && (
                <div style={{ fontSize: '13px' }}>
                  <div style={{ fontWeight: '600', color: answer.correct ? 'var(--success)' : 'var(--error)' }}>
                    Your answer: {answer.question.opts[answer.selected]}
                  </div>
                  {!answer.correct && (
                    <div style={{ fontWeight: '600', color: 'var(--success)', marginTop: '4px' }}>
                      Correct: {answer.question.opts[answer.question.answer]}
                    </div>
                  )}
                  <div className={answer.correct ? 'explanation correct' : 'explanation wrong'}>
                    {answer.question.explanation}
                  </div>
                </div>
              )}
              {answer.question.type === 'tf' && (
                <div style={{ fontSize: '13px' }}>
                  <div style={{ fontWeight: '600', color: answer.correct ? 'var(--success)' : 'var(--error)' }}>
                    Your answer: {answer.selected ? 'True' : 'False'}
                  </div>
                  {!answer.correct && (
                    <div style={{ fontWeight: '600', color: 'var(--success)', marginTop: '4px' }}>
                      Correct: {answer.question.answer ? 'True' : 'False'}
                    </div>
                  )}
                  <div className={answer.correct ? 'explanation correct' : 'explanation wrong'}>
                    {answer.question.explanation}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const answered = currentAnswer !== undefined;

  return (
    <div className="feed">
      <div className="block">
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
          Question {currentIndex + 1} of {questions.length}
        </div>

        <div className="quiz-progress">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`quiz-dot ${idx === currentIndex ? 'current' : ''} ${
                answers[idx]?.correct ? 'correct' : answers[idx] ? 'wrong' : ''
              }`}
              title={`Question ${idx + 1}`}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        <div className="quiz-question">{question.q}</div>

        {question.type === 'mc' && (
          <div>
            {question.opts.map((opt, idx) => (
              <label
                key={idx}
                className={`quiz-option ${
                  answered && idx === question.answer ? 'correct' : ''
                } ${
                  answered && idx === currentAnswer.selected && !currentAnswer.correct
                    ? 'wrong'
                    : ''
                } ${answered ? '' : 'quiz-option'}`}
                style={{ cursor: answered ? 'default' : 'pointer' }}
              >
                <input
                  type="radio"
                  name="answer"
                  disabled={answered}
                  onChange={() => handleAnswer(idx)}
                  checked={answered && currentAnswer.selected === idx}
                />
                {opt}
              </label>
            ))}
          </div>
        )}

        {question.type === 'tf' && (
          <div className="tf-row">
            <button
              className={`tf-btn true ${
                answered ? (currentAnswer.selected ? 'correct' : question.answer ? 'wrong' : '') : ''
              }`}
              onClick={() => handleAnswer(true)}
              disabled={answered}
              style={{ cursor: answered ? 'default' : 'pointer' }}
            >
              True
            </button>
            <button
              className={`tf-btn false ${
                answered ? (!currentAnswer.selected ? 'correct' : !question.answer ? 'wrong' : '') : ''
              }`}
              onClick={() => handleAnswer(false)}
              disabled={answered}
              style={{ cursor: answered ? 'default' : 'pointer' }}
            >
              False
            </button>
          </div>
        )}

        {answered && (
          <div className={currentAnswer.correct ? 'explanation correct' : 'explanation wrong'}>
            {currentAnswer.correct ? '✓ Correct!' : '✗ Incorrect'}
            <p style={{ marginTop: '8px', marginBottom: '0' }}>
              {question.explanation}
            </p>
          </div>
        )}

        {answered && (
          <button className="btn-primary" onClick={handleNext} style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}>
            {currentIndex < questions.length - 1 ? 'Next Question →' : 'Finish Quiz →'}
          </button>
        )}
      </div>
    </div>
  );
}
