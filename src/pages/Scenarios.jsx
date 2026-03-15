import { useState } from 'react';
import { MODULES } from '../data';
import ModuleSelector from '../components/ModuleSelector';

// Mock scenarios data (in real app, this would come from data file)
function getScenarios(moduleCode) {
  return [
    {
      id: 'scen-1',
      title: 'Organisational Challenge',
      situation: 'You are an HR leader tasked with transforming your organisation\'s culture. What is your first step?',
      options: [
        { text: 'Conduct a comprehensive cultural audit to understand current state', impact: 'positive', points: 20 },
        { text: 'Immediately implement new policies to force culture change', impact: 'negative', points: 0 },
        { text: 'Send out a survey asking employees how they feel', impact: 'neutral', points: 10 }
      ]
    },
    {
      id: 'scen-2',
      title: 'Strategic Decision',
      situation: 'New research shows your current HR approach is outdated. How do you respond?',
      options: [
        { text: 'Review the evidence carefully and plan evidence-based changes', impact: 'positive', points: 20 },
        { text: 'Ignore it—what you\'re doing works', impact: 'negative', points: 0 },
        { text: 'Test new approaches on a pilot group first', impact: 'positive', points: 20 }
      ]
    },
    {
      id: 'scen-3',
      title: 'Implementation Challenge',
      situation: 'You\'ve designed a new program but implementation is struggling. What do you do?',
      options: [
        { text: 'Identify implementation barriers and build support systems', impact: 'positive', points: 20 },
        { text: 'Cancel the program and try something else', impact: 'negative', points: 0 },
        { text: 'Increase pressure on managers to comply', impact: 'neutral', points: 10 }
      ]
    }
  ];
}

export default function Scenarios({ stats, setStats }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [scenarioScores, setScenarioScores] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const startScenarios = (moduleCode) => {
    setSelectedModule(moduleCode);
    setCurrentScenario(0);
    setCurrentPoints(0);
    setScenarioScores([]);
    setShowResult(false);
    setIsComplete(false);
  };

  const handleDecision = (option) => {
    setCurrentPoints(option.points);

    setResultData({
      choice: option.text,
      impact: option.impact,
      points: option.points,
      feedback:
        option.impact === 'positive'
          ? 'Excellent decision! This approach aligns with evidence-based HR practice.'
          : option.impact === 'neutral'
          ? 'This is a reasonable approach, though there might be better alternatives.'
          : 'This approach could create challenges. Consider the research on this topic.'
    });

    setShowResult(true);
  };

  const continueToNext = () => {
    const scenarios = getScenarios(selectedModule);
    const updatedScores = [...scenarioScores, currentPoints];
    setScenarioScores(updatedScores);

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setCurrentPoints(0);
      setShowResult(false);
    } else {
      // All scenarios done — show completion screen
      setStats(prev => ({
        ...prev,
        totalScenarios: prev.totalScenarios + 1
      }));
      setShowResult(false);
      setIsComplete(true);
    }
  };

  if (!selectedModule) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedModule(null)}>
          ← Back to Home
        </button>
        <ModuleSelector
          onSelect={startScenarios}
          title="🎯 Select a Module for Scenario Training"
        />
      </div>
    );
  }

  const scenarios = getScenarios(selectedModule);
  const scenario = scenarios[currentScenario];

  if (isComplete) {
    const totalScore = scenarioScores.reduce((a, b) => a + b, 0);
    const avgScore = scenarios.length > 0 ? Math.round(totalScore / scenarios.length) : 0;

    return (
      <div className="feed">
        <div className="block">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Scenarios Complete! 🎉</h2>

          <div className={`result-circle ${avgScore >= 15 ? 'high' : avgScore >= 10 ? 'mid' : 'low'}`}>
            <div className="result-label">{avgScore}</div>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>Points/Scenario</div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', margin: '16px 0' }}>
            You completed {scenarios.length} scenarios with strategic decision-making.
          </div>

          <button
            className="btn-primary"
            onClick={() => setSelectedModule(null)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            ← Try Another Module
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feed">
      <div className="block">
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
          Scenario {currentScenario + 1} of {scenarios.length}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '10px', color: 'var(--muted)' }}>TOTAL SCORE</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>
            {scenarioScores.reduce((a, b) => a + b, 0) + currentPoints} pts
          </div>
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
          {scenario.title}
        </h3>

        <div className="scenario-context">
          {scenario.situation}
        </div>

        {!showResult ? (
          <div>
            {scenario.options.map((option, idx) => (
              <button
                key={idx}
                className="decision-btn"
                onClick={() => handleDecision(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className={`outcome-box ${resultData.impact}`}>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>
                {resultData.impact === 'positive'
                  ? '✓ Strong Choice'
                  : resultData.impact === 'neutral'
                  ? '~ Reasonable Choice'
                  : '✗ Challenging Choice'}
              </div>
              <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                {resultData.feedback}
              </div>
              <div className="points-badge">+{resultData.points} points</div>
            </div>

            <button
              className="btn-primary"
              onClick={continueToNext}
              style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
            >
              {currentScenario < scenarios.length - 1
                ? 'Next Scenario →'
                : 'Finish Scenarios →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
