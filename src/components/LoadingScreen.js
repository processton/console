import React from "react";

const LoadingScreen = ({ moduleName, pageName }) => {
  return (
    <div className="w-full min-h-contentare flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Animated SVG Loader */}
      <div className="relative w-16 h-16 mb-4">
        <svg className="w-full h-full animate-spin" viewBox="0 0 50 50">
          <circle
            className="stroke-current text-blue-500"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeDasharray="80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Module & Page Name */}
      <h2 className="text-xl font-semibold">{moduleName}</h2>
      <p className="text-gray-500">Loading {pageName}...</p>
    </div>
  );
};

export default LoadingScreen;
