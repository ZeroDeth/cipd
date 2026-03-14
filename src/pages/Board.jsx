import { useState, useRef } from 'react';
import { BOARD_TILES } from '../data';

export default function Board({ stats, setStats }) {
  const [position, setPosition] = useState(0);
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [boardScore, setBoardScore] = useState(0);
  const [completedTiles, setCompletedTiles] = useState(new Set());

  const rollDice = () => {
    setIsRolling(true);
    let currentValue = 1;

    const interval = setInterval(() => {
      currentValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(currentValue);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(finalValue);
      setIsRolling(false);

      // Move position
      const newPosition = Math.min(position + finalValue, BOARD_TILES.length - 1);
      setPosition(newPosition);
      handleTile(newPosition);
    }, 1000);
  };

  const handleTile = (tileIndex) => {
    const tile = BOARD_TILES[tileIndex];
    if (completedTiles.has(tileIndex)) return;

    let points = 0;
    let message = '';

    switch (tile.type) {
      case 'bonus':
        points = 20;
        message = 'Bonus 20 points!';
        break;
      case 'wildcard':
        const wildcardType = Math.random() > 0.5 ? 'double' : 'lose';
        if (wildcardType === 'double') {
          points = boardScore;
          message = 'Double your score!';
        } else {
          points = -10;
          message = 'Lose 10 points!';
        }
        break;
      case 'rest':
        points = 0;
        message = 'Take a break, no points this round.';
        break;
      case 'quiz':
        points = 10;
        message = 'Quiz tile! +10 points for landing here.';
        break;
      case 'scenario':
        points = 15;
        message = 'Scenario tile! +15 points.';
        break;
      case 'crisis':
        points = 20;
        message = 'Crisis tile! +20 points for brave navigation.';
        break;
    }

    setBoardScore(Math.max(0, boardScore + points));
    setCompletedTiles(new Set([...completedTiles, tileIndex]));

    // Update global stats
    if (tileIndex === BOARD_TILES.length - 1) {
      setStats(prev => ({
        ...prev,
        boardGames: prev.boardGames + 1
      }));
    }
  };

  const tiles = BOARD_TILES.map((tile, idx) => ({
    ...tile,
    position: idx,
    isCompleted: completedTiles.has(idx),
    isCurrent: position === idx
  }));

  return (
    <div className="feed">
      <div className="block">
        <div className="block-title">🎲 CIPD Board Game Journey</div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', color: 'var(--muted)' }}>POSITION</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary)' }}>
            {position + 1} / {BOARD_TILES.length}
          </div>
        </div>

        <div className="board-grid">
          {tiles.map((tile, idx) => (
            <div
              key={tile.id}
              className={`board-tile ${tile.type} ${tile.isCurrent ? 'current' : ''} ${
                tile.isCompleted ? 'completed' : ''
              }`}
            >
              <div className="board-tile-num">{idx + 1}</div>
              <div className="board-tile-emoji">{tile.icon}</div>
            </div>
          ))}
        </div>

        <div className="dice-area">
          <button
            className="dice-btn"
            onClick={rollDice}
            disabled={isRolling}
            style={{ cursor: isRolling ? 'not-allowed' : 'pointer', opacity: isRolling ? 0.8 : 1 }}
          >
            🎲
          </button>
          {diceValue && (
            <div className="dice-value">
              {isRolling ? '...' : diceValue}
            </div>
          )}
          {diceValue && !isRolling && (
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              You rolled a {diceValue}!
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <div style={{ fontSize: '12px', color: 'var(--muted)' }}>CURRENT SCORE</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>
            {boardScore} points
          </div>
        </div>

        {position === BOARD_TILES.length - 1 && (
          <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--success)', fontSize: '14px' }}>
              🏁 You've reached the end!
            </div>
            <button
              className="btn-primary"
              onClick={() => {
                setPosition(0);
                setBoardScore(0);
                setCompletedTiles(new Set());
                setDiceValue(null);
              }}
              style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <div className="floral-accent">🌸</div>

      <div className="block">
        <div className="block-title">📋 Tile Guide</div>
        <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
          <div style={{ marginBottom: '12px' }}>
            <strong>🏢 Quiz Tile</strong> — Test your knowledge
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>🔄 Scenario Tile</strong> — Strategic decision-making
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>⚠️ Crisis Tile</strong> — Navigate complex challenges
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>⭐ Bonus Tile</strong> — Earn extra points!
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>🎲 Wildcard Tile</strong> — Random event (double or lose points)
          </div>
          <div>
            <strong>☕ Rest Tile</strong> — Take a break (no points)
          </div>
        </div>
      </div>
    </div>
  );
}
