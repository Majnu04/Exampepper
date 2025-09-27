import React from 'react';

interface QuickActionButtonProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
  delay?: string;
  gradient?: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ 
  emoji, 
  title, 
  description, 
  onClick, 
  delay = '0s',
  gradient = 'from-gray-500/20 to-gray-600/20'
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 animate-fade-in-up group text-left hover:scale-105 transform active:scale-95 overflow-hidden touch-manipulation min-h-[100px] sm:min-h-[120px]`}
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
          <div className="relative text-2xl sm:text-3xl lg:text-4xl group-hover:scale-125 transition-transform duration-500 flex-shrink-0 p-1 sm:p-2">
            {emoji}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-yellow-300 transition-colors duration-500">
            {title}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient.replace('/20', '/60')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </button>
  );
};

const QuickActions: React.FC<{ setTopic: (topic: string) => void }> = ({ setTopic }) => {
  const quickActions = [
    {
      emoji: '🧮',
      title: 'Mathematics',
      description: 'Solve equations, calculus, algebra problems',
      topic: 'Explain how to solve quadratic equations with examples',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      emoji: '🔬',
      title: 'Science',
      description: 'Physics, chemistry, biology concepts',
      topic: 'Explain the process of photosynthesis in detail',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      emoji: '📚',
      title: 'Literature',
      description: 'Analysis, essays, poetry interpretation',
      topic: 'Analyze the themes in Shakespeare\'s Romeo and Juliet',
      gradient: 'from-purple-500/20 to-violet-500/20'
    },
    {
      emoji: '🌍',
      title: 'Geography',
      description: 'World geography, climate, populations',
      topic: 'Explain the water cycle and its importance',
      gradient: 'from-teal-500/20 to-blue-500/20'
    },
    {
      emoji: '⚖️',
      title: 'History',
      description: 'Historical events, dates, significance',
      topic: 'Explain the causes and effects of World War II',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      emoji: '💻',
      title: 'Technology',
      description: 'Programming, IT concepts, algorithms',
      topic: 'Explain how machine learning algorithms work',
      gradient: 'from-indigo-500/20 to-purple-500/20'
    }
  ];

  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4 animate-fade-in-up">
          Explore Popular Topics
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Jump-start your learning with our curated study topics across various subjects
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {quickActions.map((action, index) => (
          <QuickActionButton
            key={index}
            emoji={action.emoji}
            title={action.title}
            description={action.description}
            onClick={() => setTopic(action.topic)}
            delay={`${index * 0.1}s`}
            gradient={action.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;