import { ACHIEVEMENTS } from '../data';

export default function Achievements({ stats }) {
  const achievements = ACHIEVEMENTS || [];

  return (
    <div className="feed">
      <div className="block">
        <div className="block-title">🏆 Your Achievements</div>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Complete activities to unlock achievements and showcase your mastery of CIPD Level 5.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map(ach => {
          const isUnlocked = ach.check ? ach.check(stats) : false;

          return (
            <div
              key={ach.id}
              className={`achievement-card ${isUnlocked ? '' : 'locked'}`}
            >
              <div className="achievement-icon">
                {isUnlocked ? ach.icon : '🔒'}
              </div>
              <div className="achievement-name">{ach.name}</div>
              <div className="achievement-desc">{ach.desc}</div>
            </div>
          );
        })}
      </div>

      <div className="floral-accent">🌸</div>

      <div className="block">
        <div className="block-title">📈 Progress Summary</div>
        <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
          <div style={{ marginBottom: '12px' }}>
            <strong>📚 Modules Explored:</strong> {stats.studyViewed?.size || 0} of 6
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>❓ Quizzes Completed:</strong> {stats.totalQuizzes}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>🎯 Scenarios Done:</strong> {stats.totalScenarios}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>⚠️ Crises Managed:</strong> {stats.totalCrises}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>💼 War Rooms:</strong> {stats.totalWarRooms}
          </div>
          <div>
            <strong>🎲 Board Games:</strong> {stats.boardGames}
          </div>
        </div>
      </div>
    </div>
  );
}
