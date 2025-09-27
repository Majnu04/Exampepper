import React from 'react';

const StudyTips: React.FC = () => {
  const tips = [
    {
      icon: '💡',
      title: 'Active Learning',
      tip: 'Engage with the material by asking questions and making connections to what you already know.'
    },
    {
      icon: '⏰',
      title: 'Spaced Repetition',
      tip: 'Review material at increasing intervals to strengthen long-term memory retention.'
    },
    {
      icon: '🎯',
      title: 'Practice Testing',
      tip: 'Test yourself regularly to identify knowledge gaps and improve recall under pressure.'
    },
    {
      icon: '📝',
      title: 'Note Taking',
      tip: 'Write summaries in your own words to process and understand concepts better.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 animate-slide-up">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          🎓 Study Tips & Strategies
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Proven techniques to maximize your learning efficiency
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl p-4 sm:p-5 border border-gray-600 hover:border-yellow-400/50 transition-all duration-300 group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {tip.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-yellow-400 text-sm sm:text-base mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {tip.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {tip.tip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyTips;