import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Insights from './components/Insights';

function App() {
  const [insights, setInsights] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Video Insight Processor</h1>
      <FileUpload setInsights={setInsights} />
      <Insights insights={insights} />
    </div>
  );
}

export default App;
