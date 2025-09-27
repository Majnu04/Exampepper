import React from 'react';

const StatisticsBar: React.FC = () => {
  const stats = [
    { label: 'Questions Answered', value: '15K+', icon: '❓', color: 'from-blue-400 to-blue-600' },
    { label: 'Study Sessions', value: '8K+', icon: '📚', color: 'from-green-400 to-green-600' },
    { label: 'Success Rate', value: '99%', icon: '🎯', color: 'from-yellow-400 to-orange-500' },
    { label: 'Active Users', value: '3K+', icon: '👥', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-700 animate-slide-up overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/5 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-3">
            Platform Impact
          </h3>
          <p className="text-gray-400 text-lg">
            Trusted by thousands of students worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500">
                  <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsBar;