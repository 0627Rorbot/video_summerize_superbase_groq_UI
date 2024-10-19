import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <p className="text-center text-sm text-gray-600 mt-2">{progress}%</p>
    </div>
  );
};

export default ProgressBar;
