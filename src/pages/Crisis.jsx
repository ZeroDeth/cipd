import { useState, useEffect } from 'react';
import { CRISES } from '../data';
import ModuleSelector from '../components/ModuleSelector';

export default function Crisis({ stats, setStats }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedCrisis, setSelectedCrisis] = useState(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [crisisScore, setCrisisScore] = useState(0);
  const [finalReport, setFinalReport] = useState(null);

  const filteredCrises = CRISES.filter(c => !selectedModule || c.module === selectedModule);
  const crisis = selectedCrisis ? CRISES.find(c => c.id === selectedCrisis) : null;
  const stage = crisis ? crisis.stages[stageIndex] : null;

  // Timer effect
  useEffect(() => {
    if (!hasAnswered && stage && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !hasAnswered && stage) {
      // Auto-pick worst option
      handleOption(stage.options[stage.options.length - 1]);
    }
  }, [timeLeft, hasAnswered, stage]);

  const handleOption = (option) => {
    const points = option.impact === 'positive' ? 20 : option.impact === 'neutral' ? 10 : 0;
    setCrisisScore(crisisScore + points);
    setHasAnswered(true);
  };

  const nextStage = () => {
    if (stageIndex < crisis.stages.length - 1) {
      setStageIndex(stageIndex + 1);
      setTimeLeft(20);
      setHasAnswered(false);
    } else {
      setFinalReport({
        title: crisis.title,
        score: crisisScore,
        stages: crisis.stages.length
      });
      setStats(prev => ({
        ...prev,
        totalCrises: prev.totalCrises + 1
      }));
    }
  };

  if (!selectedModule) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedModule(null)}>
          ← Back to Home
        </button>
        <div className="block">
          <div className="block-title">⚠️ Select a Module for Crisis Management</div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {Array.from(new Set(CRISES.map(c => c.module))).map(code => (
              <button
                key={code}
                className="decision-btn"
                onClick={() => {
                  setSelectedModule(code);
                  setSelectedCrisis(null);
                  setStageIndex(0);
                  setTimeLeft(20);
                  setHasAnswered(false);
                  setCrisisScore(0);
                  setFinalReport(null);
                }}
              >
                Study Module {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!selectedCrisis) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedModule(null)}>
          ← Back to Module Selection
        </button>
        <div className="block">
          <div className="block-title">🚨 Crisis Scenarios</div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {filteredCrises.map(c => (
              <button
                key={c.id}
                className="decision-btn"
                onClick={() => {
                  setSelectedCrisis(c.id);
                  setStageIndex(0);
                  setTimeLeft(20);
                  setHasAnswered(false);
                  setCrisisScore(0);
                  setFinalReport(null);
                }}
              >
                <div style={{ fontWeight: '600' }}>{c.icon} {c.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {c.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (finalReport) {
    return (
      <div className="feed">
        <div className="block">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Crisis Managed! 🎉</h2>

          <div
            className={`result-circle ${crisisScore >= 30 ? 'high' : crisisScore >= 15 ? 'mid' : 'low'}`}
          >
            <div className="result-label">{crisisScore}</div>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>pts</div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', margin: '16px 0' }}>
            You navigated <strong>{finalReport.title}</strong> across {finalReport.stages} critical stages.
          </div>

          <button
            className="btn-primary"
            onClick={() => {
              setSelectedCrisis(null);
              setSelectedModule(null);
            }}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            ← Try Another Module
          </button>
        </div>
      </div>
    );
  }

  const selectedOption = hasAnswered
    ? stage.options.find((opt, idx) => {
        // Find which option was selected based on the last call
        return true;
      })
    : null;

  return (
    <div className="feed">
      <div className="block">
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
          {crisis.icon} {crisis.title} • Stage {stageIndex + 1} of {crisis.stages.length}
        </div>

        <div className="crisis-timer">
          <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
            ⏱️ Time Remaining: {timeLeft}s
          </div>
          <div className="crisis-timer-bar">
            <div
              className="crisis-timer-fill"
              style={{ width: `${(timeLeft / 20) * 100}%` }}
            />
          </div>
          {timeLeft < 5 && !hasAnswered && (
            <div style={{ fontSize: '12px', color: 'var(--error)', fontWeight: '600' }}>
              Hurry! Time is running out!
            </div>
          )}
        </div>

        <div className="crisis-stage-label">STAGE {stageIndex + 1}</div>

        <div className="scenario-context" style={{ marginTop: '12px', marginBottom: '16px' }}>
          {stage.situation}
        </div>

        {!hasAnswered ? (
          <div>
            {stage.options.map((option, idx) => (
              <button
                key={idx}
                className="decision-btn"
                onClick={() => handleOption(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        ) : (
          <div>
            {stage.options.map((option, idx) => (
              <div
                key={idx}
                className={`outcome-box ${option.impact}`}
                style={{
                  opacity: option.impact === 'positive' ? 1 : 0.7,
                  marginBottom: '12px'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: '600' }}>
                  {option.impact === 'positive'
                    ? '✓ Best Response'
                    : option.impact === 'neutral'
                    ? '~ Acceptable'
                    : '✗ Poor Response'}
                </div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  {option.text}
                </div>
                <div style={{ fontSize: '12px', marginTop: '8px', lineHeight: '1.4' }}>
                  {option.consequence}
                </div>
                <div className="points-badge">
                  {option.impact === 'positive'
                    ? '+20'
                    : option.impact === 'neutral'
                    ? '+10'
                    : '+0'}{' '}
                  points
                </div>
              </div>
            ))}

            <button
              className="btn-primary"
              onClick={nextStage}
              style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
            >
              {stageIndex < crisis.stages.length - 1
                ? 'Next Stage →'
                : 'Finish Crisis →'}
            </button>
          </div>
        )}

        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '16px' }}>
          Current Score: <strong>{crisisScore} points</strong>
        </div>
      </div>
    </div>
  );
}
