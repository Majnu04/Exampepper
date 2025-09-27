import React, { useState, useEffect } from 'react';

const ProgressTracker: React.FC = () => {
  const [todayStudied, setTodayStudied] = useState(0);
  const [weeklyGoal] = useState(7); // 7 study sessions per week
  const [currentStreak, setCurrentStreak] = useState(3);

  // Simulate progress updates
  useEffect(() => {
    const timer = setInterval(() => {
      setTodayStudied(prev => Math.min(prev + 0.1, 3));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const todayProgress = Math.min((todayStudied / 3) * 100, 100);
  const weeklyProgress = Math.min((todayStudied / weeklyGoal) * 100, 100);

  return (
    <div className="bg-gradient-to-br from-yellow-400/10 via-gray-900/80 to-yellow-400/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 animate-slide-up">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          📈 Your Progress
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Track your learning journey
        </p>
      </div>

      <div className="space-y-6">
        {/* Today's Progress */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Today's Study Time</span>
            <span className="text-sm font-bold text-yellow-400">{Math.floor(todayStudied)}/3 sessions</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${todayProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Weekly Goal */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Weekly Goal</span>
            <span className="text-sm font-bold text-yellow-400">{Math.floor(todayStudied)}/{weeklyGoal} sessions</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${weeklyProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Streak Counter */}
        <div className="bg-gray-800/50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🔥</div>
              <div>
                <div className="text-lg font-bold text-white">{currentStreak} Day Streak</div>
                <div className="text-xs text-gray-400">Keep it up!</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-yellow-400 font-medium">Excellent!</div>
              <div className="text-xs text-gray-400">Stay consistent</div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Recent Achievements</h4>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-yellow-400/20 text-yellow-400 text-xs px-3 py-1 rounded-full border border-yellow-400/30">
              🎯 First Week
            </span>
            <span className="bg-blue-400/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-400/30">
              📚 Study Streak
            </span>
            <span className="bg-green-400/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/30">
              💡 Quick Learner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;