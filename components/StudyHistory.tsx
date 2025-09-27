import React, { useState } from 'react';

interface HistoryItem {
  id: string;
  topic: string;
  timestamp: Date;
  preview: string;
}

interface StudyHistoryProps {
  history: HistoryItem[];
  onSelectTopic: (topic: string) => void;
}

const StudyHistory: React.FC<StudyHistoryProps> = ({ history, onSelectTopic }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayItems = isExpanded ? history : history.slice(0, 3);

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
          📚 Study History
        </h3>
        <span className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
          {history.length} sessions
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onSelectTopic(item.topic)}
            className="bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-600 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group animate-fade-in-up hover:scale-102 transform"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-yellow-400 transition-colors duration-300 truncate">
                  {item.topic}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {item.preview}
                </p>
                <span className="text-xs text-gray-500">
                  {item.timestamp.toLocaleDateString()} at {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {history.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 py-2 px-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-600 hover:border-yellow-400/50 transition-all duration-300 text-gray-300 hover:text-yellow-400 text-sm font-medium"
        >
          {isExpanded ? 'Show Less' : `Show ${history.length - 3} More`}
        </button>
      )}
    </div>
  );
};

export default StudyHistory;