// components/layout/LogoProfessional.tsx
import React from 'react';

const LogoProfessional: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Shield Logo */}
      <div className="relative">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          Muhammad K. Amin
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
          Software Engineer
        </span>
      </div>
    </div>
  );
};
export default LogoProfessional;