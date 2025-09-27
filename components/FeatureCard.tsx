import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = '0s' }) => {
  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-400/25 animate-fade-in-up group cursor-pointer hover:scale-105 transform overflow-hidden touch-manipulation min-h-[160px] sm:min-h-[180px]"
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center mb-3 sm:mb-4 lg:mb-6">
          <div className="relative mb-3 sm:mb-4">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-xl sm:rounded-2xl group-hover:from-yellow-400/25 group-hover:to-orange-400/25 transition-all duration-500">
              <div className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:scale-125 group-hover:text-yellow-300 transition-all duration-500">
                {icon}
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-500 mb-2 sm:mb-3">
            {title}
          </h3>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
          {description}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default FeatureCard;