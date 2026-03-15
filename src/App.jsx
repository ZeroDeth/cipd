import { useState } from 'react';
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

export default function App() {
  const [view, setView] = useState('home');
  const [stats, setStats] = useState({
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
  });

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
