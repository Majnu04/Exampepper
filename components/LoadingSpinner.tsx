
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="animate-spin h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping"></div>
    </div>
  );
};

export default LoadingSpinner;
