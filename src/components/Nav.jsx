export default function Nav({ activeView, setView }) {
  const views = [
    { id: 'home', emoji: '🏠', label: 'Home' },
    { id: 'study', emoji: '📚', label: 'Study' },
    { id: 'quiz', emoji: '❓', label: 'Quiz' },
    { id: 'scenarios', emoji: '🎯', label: 'Scenarios' },
    { id: 'crisis', emoji: '⚠️', label: 'Crisis' },
    { id: 'board', emoji: '🎲', label: 'Board' },
    { id: 'warroom', emoji: '💼', label: 'War Room' },
    { id: 'achievements', emoji: '🏆', label: 'Achievements' }
  ];

  return (
    <nav className="nav">
      {views.map(view => (
        <button
          key={view.id}
          className={`nav-item ${activeView === view.id ? 'active' : ''}`}
          onClick={() => setView(view.id)}
        >
          <span>{view.emoji}</span>
          <span>{view.label}</span>
        </button>
      ))}
    </nav>
  );
}
