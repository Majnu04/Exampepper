
import React from 'react';
import { PaperAirplaneIcon } from './Icons';

interface InputFormProps {
  topic: string;
  setTopic: (topic: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ topic, setTopic, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as any); // Form submit logic is in the parent
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <form onSubmit={onSubmit} className="relative hidden sm:block animate-slide-up">
        <div className="relative group">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-3xl border-2 border-gray-700/50 hover:border-gray-600/70 focus-within:border-yellow-400/60 transition-all duration-500 p-2">
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="✨ What would you like to learn today? Ask any question or enter a topic to get started..."
              className="w-full p-6 pr-48 text-xl lg:text-2xl rounded-2xl border-none bg-transparent text-white placeholder-gray-400 focus:ring-0 focus:outline-none resize-none transition-all duration-500 font-medium min-h-[140px]"
              rows={4}
              disabled={isLoading}
            />
            
            <button
              type="submit"
              disabled={isLoading || !topic.trim()}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center gap-4 h-16 px-10 font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-2xl hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl hover:shadow-yellow-400/40 transform hover:scale-110 active:scale-95 group"
            >
              {isLoading ? (
                <span className="text-lg animate-pulse">Generating...</span>
              ) : (
                <>
                  <span className="text-lg font-black">Generate</span>
                  <PaperAirplaneIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Mobile Version */}
      <form onSubmit={onSubmit} className="block sm:hidden space-y-6 animate-slide-up">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl border-2 border-gray-700/50 hover:border-gray-600/70 focus-within:border-yellow-400/60 transition-all duration-500 p-1">
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="✨ What would you like to learn today?"
              className="w-full p-6 text-lg rounded-xl border-none bg-transparent text-white placeholder-gray-400 focus:ring-0 focus:outline-none resize-none transition-all duration-500 font-medium min-h-[120px]"
              rows={5}
              disabled={isLoading}
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !topic.trim()}
          className="w-full flex items-center justify-center gap-4 h-16 px-8 font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-2xl hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl hover:shadow-yellow-400/40 active:scale-95 group text-lg"
        >
          {isLoading ? (
            <span className="animate-pulse">Generating...</span>
          ) : (
            <>
              <span className="font-black">Generate Study Guide</span>
              <PaperAirplaneIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
