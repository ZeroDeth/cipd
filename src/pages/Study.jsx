import { useState, useRef } from 'react';
import { MODULES, STUDY } from '../data';
import ModuleSelector from '../components/ModuleSelector';

export default function Study({ stats, setStats }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!selectedModule) {
    return (
      <div className="feed">
        <button className="btn-back" onClick={() => setSelectedModule(null)}>
          ← Back to Home
        </button>
        <ModuleSelector
          onSelect={(code) => {
            setSelectedModule(code);
            setStats(prev => ({
              ...prev,
              studyViewed: new Set([...prev.studyViewed, code])
            }));
          }}
          title="📚 Select a Module to Study"
        />
      </div>
    );
  }

  const module = MODULES[selectedModule];
  const studySections = STUDY[selectedModule] || [];

  return (
    <div className="feed">
      <button className="btn-back" onClick={() => setSelectedModule(null)}>
        ← Back to Module Selection
      </button>

      <div className="block">
        <div
          className="block-title"
          style={{
            background: module.gradient,
            color: 'white',
            padding: '12px 16px',
            margin: '-20px -20px 12px -20px',
            borderRadius: '16px 16px 0 0'
          }}
        >
          <span>{module.icon}</span>
          <span>{module.code}</span>
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          {module.desc}
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>
          Study Tips: Click sections to expand. Review key terms (highlighted in pink). Reflect on critical questions before proceeding to quizzes.
        </p>
      </div>

      <div className="floral-accent">🌸</div>

      {studySections.map((section, idx) => (
        <div key={idx} className="study-section">
          <button
            className={`study-toggle ${expandedIndex === idx ? 'open' : ''}`}
            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
          >
            <span>{section.title}</span>
            <span>{expandedIndex === idx ? '−' : '+'}</span>
          </button>

          {expandedIndex === idx && (
            <div className="study-body">
              <div dangerouslySetInnerHTML={{ __html: section.body }} />

              {section.models && section.models.length > 0 && (
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '600', marginTop: '12px', marginBottom: '8px' }}>
                    📌 Key Models:
                  </div>
                  <div className="model-chips">
                    {section.models.map((model, i) => (
                      <span key={i} className="model-chip">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {section.criticalQ && (
                <div className="critical-q">
                  <strong>💡 Critical Question:</strong>
                  <p style={{ marginTop: '8px', marginBottom: '0' }}>
                    {section.criticalQ}
                  </p>
                </div>
              )}

              {section.scenario && (
                <div className="mini-scenario">
                  <strong>🎯 Real-World Scenario:</strong>
                  <p style={{ marginTop: '8px', marginBottom: '0' }}>
                    {section.scenario}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="floral-accent">🌸</div>

      <button
        className="btn-primary"
        onClick={() => window.location.hash = '#quiz'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        Ready to Test Your Knowledge? → Quiz
      </button>
    </div>
  );
}
