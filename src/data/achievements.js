export const ACHIEVEMENTS = [
  {
    id: "ach-001",
    icon: "🎓",
    name: "Master Scholar",
    desc: "Complete all 6 modules with an average score of 85%+",
    check: (stats) => stats.modulesCompleted === 6 && stats.quizScore >= 85
  },
  {
    id: "ach-002",
    icon: "🏆",
    name: "Perfect Scorer",
    desc: "Achieve 100% on any quiz module (12 questions)",
    check: (stats) => stats.perfectScores >= 1
  },
  {
    id: "ach-003",
    icon: "🔥",
    name: "On Fire",
    desc: "Maintain a 10+ question streak without incorrect answers",
    check: (stats) => stats.bestStreak >= 10
  },
  {
    id: "ach-004",
    icon: "💪",
    name: "Crisis Manager",
    desc: "Successfully navigate all 6 crisis scenarios with \"positive\" outcomes",
    check: (stats) => stats.totalCrises >= 6 && stats.crisisScore >= 90
  },
  {
    id: "ach-005",
    icon: "🎯",
    name: "Strategic Thinker",
    desc: "Complete all 3 war room case studies with strategic alignment score of 35+",
    check: (stats) => stats.totalWarRooms >= 3 && stats.warRoomScore >= 35
  },
  {
    id: "ach-006",
    icon: "🧩",
    name: "Scenario Master",
    desc: "Complete 15 scenario challenges across all modules",
    check: (stats) => stats.totalScenarios >= 15
  },
  {
    id: "ach-007",
    icon: "📊",
    name: "Researcher",
    desc: "Engage with 10+ study topics to deepen evidence-based knowledge",
    check: (stats) => stats.studyTopicsEngaged >= 10
  },
  {
    id: "ach-008",
    icon: "🌟",
    name: "Quiz Wizard",
    desc: "Answer 50+ quiz questions correctly across all modules",
    check: (stats) => stats.totalQuizzes >= 50
  },
  {
    id: "ach-009",
    icon: "🎲",
    name: "Board Game Champion",
    desc: "Complete 5 full board game runs, finishing all 24 tiles",
    check: (stats) => stats.boardGames >= 5
  },
  {
    id: "ach-010",
    icon: "⚡",
    name: "Rapid Learner",
    desc: "Complete your first 20 questions in under 30 minutes",
    check: (stats) => stats.rapidLearner === true
  },
  {
    id: "ach-011",
    icon: "🏅",
    name: "Consistency Matters",
    desc: "Maintain a current streak of 7+ correct answers",
    check: (stats) => stats.currentStreak >= 7
  },
  {
    id: "ach-012",
    icon: "👑",
    name: "CIPD Level 5 Prepared",
    desc: "Master all modules, scenarios, and crises with expert understanding",
    check: (stats) =>
      stats.modulesCompleted === 6 &&
      stats.quizScore >= 85 &&
      stats.totalScenarios >= 15 &&
      stats.totalCrises >= 6 &&
      stats.totalWarRooms >= 3
  }
];
