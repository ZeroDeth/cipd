import { useState } from 'react';
import { WAR_ROOM_CASES } from '../data';

export default function WarRoom({ stats, setStats }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [scores, setScores] = useState({
    legalCompliance: 0,
    employeeEngagement: 0,
    businessImpact: 0,
    ethicalPractice: 0,
    strategicAlignment: 0
  });
  const [finished, setFinished] = useState(false);

  const startCase = (caseId) => {
    setSelectedCase(caseId);
    setPhaseIndex(0);
    setScores({
      legalCompliance: 0,
      employeeEngagement: 0,
      businessImpact: 0,
      ethicalPractice: 0,
      strategicAlignment: 0
    });
    setFinished(false);
  };

  if (!selectedCase) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedCase(null)}>
          ← Back to Home
        </button>
        <div className="block">
          <div className="block-title">💼 War Room Case Studies</div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {WAR_ROOM_CASES.map(caseItem => (
              <button
                key={caseItem.id}
                className="decision-btn"
                onClick={() => startCase(caseItem.id)}
              >
                <div style={{ fontWeight: '600' }}>{caseItem.icon} {caseItem.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {caseItem.phases.length} phases • Strategic challenge
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const caseData = WAR_ROOM_CASES.find(c => c.id === selectedCase);
  const phase = caseData.phases[phaseIndex];

  const handleOption = (selectedOption) => {
    const newScores = { ...scores };
    selectedOption.scores.legal && (newScores.legalCompliance += selectedOption.scores.legal);
    selectedOption.scores.engagement &&
      (newScores.employeeEngagement += selectedOption.scores.engagement);
    selectedOption.scores.business &&
      (newScores.businessImpact += selectedOption.scores.business);
    selectedOption.scores.ethics &&
      (newScores.ethicalPractice += selectedOption.scores.ethics);
    selectedOption.scores.strategy &&
      (newScores.strategicAlignment += selectedOption.scores.strategy);

    setScores(newScores);

    if (phaseIndex < caseData.phases.length - 1) {
      setPhaseIndex(phaseIndex + 1);
    } else {
      setFinished(true);
      setStats(prev => ({
        ...prev,
        totalWarRooms: prev.totalWarRooms + 1
      }));
    }
  };

  if (finished) {
    const dimensions = [
      { label: 'Legal Compliance', key: 'legalCompliance', color: '#e53935' },
      { label: 'Employee Engagement', key: 'employeeEngagement', color: '#ab47bc' },
      { label: 'Business Impact', key: 'businessImpact', color: '#c2185b' },
      { label: 'Ethical Practice', key: 'ethicalPractice', color: '#66bb6a' },
      { label: 'Strategic Alignment', key: 'strategicAlignment', color: '#f48fb1' }
    ];

    const maxScore = 9;

    return (
      <div className="feed">
        <div className="block">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Case Complete! 🎉</h2>

          <div style={{ textAlign: 'center', fontSize: '14px', marginBottom: '20px' }}>
            You've navigated <strong>{caseData.title}</strong>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
              📊 Dimension Scores
            </h3>

            {dimensions.map(dim => (
              <div key={dim.key} className="dimension-bar">
                <div className="dimension-label">
                  <span>{dim.label}</span>
                  <span className="dimension-score">{scores[dim.key]}/9</span>
                </div>
                <div className="dimension-fill-bg">
                  <div
                    className="dimension-fill"
                    style={{
                      width: `${(scores[dim.key] / maxScore) * 100}%`,
                      backgroundColor: dim.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '14px', background: 'rgba(194, 24, 91, 0.05)', borderRadius: '10px', marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>OVERALL PERFORMANCE</div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'var(--primary)' }}>
              {Math.round(
                Object.values(scores).reduce((a, b) => a + b, 0) /
                  dimensions.length
              )}
              /9 avg
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={() => setSelectedCase(null)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            ← Try Another Case
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feed">
      <div className="block">
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
          Phase {phaseIndex + 1} of {caseData.phases.length}
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          {caseData.title}
        </h2>

        {phaseIndex === 0 && (
          <div
            className="warroom-brief"
            dangerouslySetInnerHTML={{ __html: caseData.brief }}
          />
        )}

        <div className="warroom-phase">
          <div className="warroom-phase-title">{phase.title}</div>
          <div style={{ fontSize: '14px', marginBottom: '16px', color: 'var(--text)' }}>
            {phase.question}
          </div>

          <div>
            {phase.options.map((option, idx) => (
              <button
                key={idx}
                className="phase-option"
                onClick={() => handleOption(option)}
              >
                <div style={{ fontWeight: '600', marginBottom: '6px' }}>
                  {option.text}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  {option.feedback}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '16px' }}>
          Each decision impacts 5 dimensions: Legal, Engagement, Business, Ethics, Strategy.
        </div>
      </div>
    </div>
  );
}
