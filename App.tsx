
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import QuickActions from './components/QuickActions';
import FeatureCard from './components/FeatureCard';
import StatisticsBar from './components/StatisticsBar';
import ProgressTracker from './components/ProgressTracker';
import StudyHistory from './components/StudyHistory';
import { getExamPrepAnswer } from './services/geminiService';
import { BookOpenIcon, SparklesIcon, AcademicCapIcon, LightBulbIcon, ChartBarIcon, ClockIcon } from './components/Icons';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [studyHistory, setStudyHistory] = useState<Array<{
    id: string;
    topic: string;
    timestamp: Date;
    preview: string;
  }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const examAnswer = await getExamPrepAnswer(topic);
      setResponse(examAnswer);
      
      // Add to study history
      const historyItem = {
        id: Date.now().toString(),
        topic: topic.trim(),
        timestamp: new Date(),
        preview: examAnswer?.substring(0, 100) + '...' || 'Study session completed'
      };
      setStudyHistory(prev => [historyItem, ...prev.slice(0, 9)]); // Keep last 10 items
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/8 to-orange-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/6 to-purple-400/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400/6 to-teal-400/6 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      <main className="container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 max-w-7xl relative z-10">
        <header className="text-center mb-8 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-transparent via-gray-900/20 to-transparent rounded-2xl sm:rounded-3xl p-6 sm:p-12 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                <BookOpenIcon className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-yellow-400 relative z-10 drop-shadow-2xl hover:scale-110 transition-all duration-500 hover:text-yellow-300" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
                  Exam Prep AI
                </h1>
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto sm:mx-0 mt-3 sm:mt-4 rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-200 font-light px-2 sm:px-0 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Transform your study sessions with AI-powered explanations, personalized learning paths, and comprehensive exam preparation.
            </p>
          </div>
        </header>

        {/* Enhanced Features Section */}
        {!response && !isLoading && (
          <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
                Why Choose Exam Prep AI?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover the features that make your study sessions more effective and engaging
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 mb-8 sm:mb-16">
              <FeatureCard
                icon={<AcademicCapIcon />}
                title="Expert Explanations"
                description="Get detailed, step-by-step explanations tailored for exam preparation with examples and formulas."
                delay="0.2s"
              />
              <FeatureCard
                icon={<LightBulbIcon />}
                title="Smart Study Plans"
                description="Receive structured study guides with summary and detailed answers for different mark allocations."
                delay="0.4s"
              />
              <FeatureCard
                icon={<ChartBarIcon />}
                title="Progress Tracking"
                description="Monitor your learning progress with statistics, streaks, and personalized insights."
                delay="0.6s"
              />
            </div>
            
            <StatisticsBar />
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {/* Quick Actions */}
          {!response && !isLoading && (
            <div className="mb-12 sm:mb-16">
              <QuickActions setTopic={setTopic} />
            </div>
          )}
          
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="max-w-4xl mx-auto">
              <InputForm
                topic={topic}
                setTopic={setTopic}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-6 sm:space-y-10">
              {isLoading && (
              <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-10 bg-gray-900 rounded-xl sm:rounded-2xl border-2 border-yellow-400 mx-2 sm:mx-0 animate-slide-up shadow-2xl">
                <LoadingSpinner />
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-yellow-400 animate-pulse">
                  Generating your study guide...
                </p>
                <div className="flex space-x-1 mt-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mt-2 animate-fade-in">
                  Please wait, this may take a moment.
                </p>
              </div>
            )}
            {error && (
              <div
                className="bg-red-900 border-2 border-red-500 text-red-100 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl mx-2 sm:mx-0"
                role="alert"
              >
                <p className="font-bold text-lg sm:text-xl text-red-300 mb-2">Error</p>
                <p className="text-red-100 text-sm sm:text-base leading-relaxed">{error}</p>
              </div>
            )}
            {response && <ResponseDisplay content={response} />}
            {!isLoading && !response && !error && (
              <div className="text-center p-6 sm:p-8 lg:p-12 bg-gray-900 rounded-xl sm:rounded-2xl border-2 border-dashed border-yellow-400 mx-2 sm:mx-0 animate-slide-up hover:border-solid transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
                <div className="animate-float">
                  <SparklesIcon className="mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-yellow-400 mb-4 sm:mb-6 hover:text-yellow-300 transition-colors duration-300"/>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">Ready to start studying?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  Enter a topic or question above, like <span className="text-yellow-400 font-medium break-words hover:text-yellow-300 transition-colors cursor-pointer">"Explain the process of photosynthesis"</span> or <span className="text-yellow-400 font-medium break-words hover:text-yellow-300 transition-colors cursor-pointer">"Solve x^2 - 5x + 6 = 0"</span>, and I'll generate a detailed study guide for you.
                </p>
              </div>
            )}
            </div>
            
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 xl:col-span-1 space-y-4 sm:space-y-8 lg:space-y-10">
              <div className="lg:sticky lg:top-8">
                <ProgressTracker />
                {studyHistory.length > 0 && (
                  <div className="mt-4 sm:mt-6 lg:mt-8">
                    <StudyHistory 
                      history={studyHistory} 
                      onSelectTopic={setTopic} 
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-6 sm:py-8 lg:py-10 text-sm sm:text-base text-gray-400 border-t border-gray-800 mt-12 sm:mt-16 lg:mt-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <p className="text-yellow-400 font-medium mb-1 hover:text-yellow-300 transition-colors duration-300 cursor-default text-shimmer">Powered by AI.</p>
          <p className="text-xs sm:text-sm hover:text-gray-300 transition-colors duration-300 cursor-default">Always verify critical information.</p>
          <div className="mt-3 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
