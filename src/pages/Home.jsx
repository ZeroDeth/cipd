import ModuleSelector from '../components/ModuleSelector';

export default function Home({ stats, setView }) {
  return (
    <div className="feed">
      <div className="welcome-block">
        <h2>Welcome, CIPD Scholar 🌸</h2>
        <p>Complete modules, master concepts, and earn achievements</p>
      </div>

      {stats.currentStreak > 0 && (
        <div className="streak-banner">
          🔥 {stats.currentStreak} question streak!
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-value">{stats.totalQuizzes}</div>
          <div className="stat-label">Quizzes Completed</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{stats.totalScenarios}</div>
          <div className="stat-label">Scenarios Done</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{stats.totalCrises}</div>
          <div className="stat-label">Crises Managed</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{stats.totalWarRooms}</div>
          <div className="stat-label">War Rooms Completed</div>
        </div>
      </div>

      <ModuleSelector
        onSelect={(code) => setView('study')}
        title="📖 Choose a Module to Explore"
      />
    </div>
  );
}
