import { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Study from './pages/Study';
import Quiz from './pages/Quiz';
import Scenarios from './pages/Scenarios';
import Crisis from './pages/Crisis';
import Board from './pages/Board';
import WarRoom from './pages/WarRoom';
import Flashcards from './pages/Flashcards';
import Achievements from './pages/Achievements';

const STORAGE_KEY = 'cipd-study-hub-stats';

const DEFAULT_STATS = {
  totalQuizzes: 0,
  totalScenarios: 0,
  totalCrises: 0,
  totalWarRooms: 0,
  perfectScores: 0,
  bestStreak: 0,
  currentStreak: 0,
  boardGames: 0,
  quizScore: 0,
  flashcardsStudied: 0,
  modulesCompleted: new Set(),
  studyViewed: new Set()
};

function loadStats() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_STATS;
    const parsed = JSON.parse(saved);
    return {
      ...DEFAULT_STATS,
      ...parsed,
      // Restore Sets from saved arrays
      modulesCompleted: new Set(parsed.modulesCompleted || []),
      studyViewed: new Set(parsed.studyViewed || [])
    };
  } catch {
    return DEFAULT_STATS;
  }
}

function saveStats(stats) {
  try {
    const serialisable = {
      ...stats,
      // Convert Sets to arrays for JSON
      modulesCompleted: [...stats.modulesCompleted],
      studyViewed: [...stats.studyViewed]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialisable));
  } catch {
    // Storage full or unavailable — silently degrade
  }
}

export default function App() {
  const [view, setView] = useState('home');
  const [stats, setStats] = useState(loadStats);

  // Persist stats to localStorage whenever they change
  useEffect(() => {
    saveStats(stats);
  }, [stats]);

  const renderPage = () => {
    switch (view) {
      case 'home':
        return <Home stats={stats} setView={setView} />;
      case 'study':
        return <Study stats={stats} setStats={setStats} setView={setView} />;
      case 'flashcards':
        return <Flashcards stats={stats} setStats={setStats} />;
      case 'quiz':
        return <Quiz stats={stats} setStats={setStats} />;
      case 'scenarios':
        return <Scenarios stats={stats} setStats={setStats} />;
      case 'crisis':
        return <Crisis stats={stats} setStats={setStats} />;
      case 'board':
        return <Board stats={stats} setStats={setStats} />;
      case 'warroom':
        return <WarRoom stats={stats} setStats={setStats} />;
      case 'achievements':
        return <Achievements stats={stats} />;
      default:
        return <Home stats={stats} setView={setView} />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Nav activeView={view} setView={setView} />
      {renderPage()}
    </div>
  );
}
