import { useState } from 'react';

export default function Nav({ activeView, setView }) {
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryTabs = [
    { id: 'home', emoji: '🏠', label: 'Home' },
    { id: 'study', emoji: '📚', label: 'Study' },
    { id: 'flashcards', emoji: '🗂️', label: 'Cards' },
    { id: 'quiz', emoji: '❓', label: 'Quiz' },
  ];

  const moreTabs = [
    { id: 'scenarios', emoji: '🎯', label: 'Scenarios' },
    { id: 'crisis', emoji: '⚠️', label: 'Crisis' },
    { id: 'board', emoji: '🎲', label: 'Board' },
    { id: 'warroom', emoji: '💼', label: 'War Room' },
    { id: 'achievements', emoji: '🏆', label: 'Achievements' },
  ];

  const isMoreActive = moreTabs.some(t => t.id === activeView);

  const handleMoreTab = (id) => {
    setView(id);
    setMoreOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {moreOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More drawer */}
      <div className={`nav-drawer ${moreOpen ? 'open' : ''}`}>
        <div className="nav-drawer-handle" />
        <div className="nav-drawer-title">More Features</div>
        <div className="nav-drawer-grid">
          {moreTabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-drawer-item ${activeView === tab.id ? 'active' : ''}`}
              onClick={() => handleMoreTab(tab.id)}
            >
              <span className="nav-drawer-emoji">{tab.emoji}</span>
              <span className="nav-drawer-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <nav className="nav-bottom">
        {primaryTabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeView === tab.id ? 'active' : ''}`}
            onClick={() => { setView(tab.id); setMoreOpen(false); }}
          >
            <span className="nav-tab-emoji">{tab.emoji}</span>
            <span className="nav-tab-label">{tab.label}</span>
          </button>
        ))}
        <button
          className={`nav-tab ${isMoreActive ? 'active' : ''}`}
          onClick={() => setMoreOpen(!moreOpen)}
        >
          <span className="nav-tab-emoji">{moreOpen ? '✕' : '☰'}</span>
          <span className="nav-tab-label">More</span>
        </button>
      </nav>
    </>
  );
}
