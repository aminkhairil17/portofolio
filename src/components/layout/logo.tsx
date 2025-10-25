// components/layout/Logo.tsx
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Symbol */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">AK</span>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 dark:text-white leading-none">
          amin
          <span className="text-blue-600">_khairil</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
