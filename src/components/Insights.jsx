import React from 'react';
import { FaClock } from 'react-icons/fa';

const Insights = ({ insights }) => {
  return (
    <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Video Insights</h2>
      {insights.length === 0 ? (
        <p className="text-gray-500">No insights available. Upload and process a video.</p>
      ) : (
        <div className="space-y-6">
          {insights.map((insight, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FaClock className="text-blue-500 mr-2" />
                <span className="font-medium text-blue-600">
                  {insight.start_time} - {insight.end_time} seconds
                </span>
              </div>
              <p className="text-gray-700">{insight.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Insights;
