import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a video file.');
      return;
    }
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setTranscript(result.transcript);
        setLoading(false);
      } else {
        setError(result.error);
        setLoading(false);
      }
    } catch (error) {
      setError('Error uploading video.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Video Processor</h1>

        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-10 mb-8 rounded-lg relative bg-gray-50">
          {!file ? (
            <>
              <FiUploadCloud className="text-5xl text-blue-500 mb-4" />
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <label htmlFor="file-upload" className="text-blue-500 font-semibold cursor-pointer">
                Select or Drag Video Here
              </label>
              <p className="text-gray-500 mt-2">Supported format: MP4</p>
            </>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <BsCheckCircle className="text-5xl text-green-500" />
              <p className="font-semibold text-lg">{file.name}</p>
              <button
                onClick={handleUpload}
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition-all"
              >
                Process Video
              </button>
            </div>
          )}
        </div>

        {loading && (
          <div className="flex flex-col items-center mt-6">
            <AiOutlineLoading3Quarters className="text-4xl text-blue-500 animate-spin" />
            <p className="text-blue-500 font-medium mt-2">Processing...</p>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
            <BsXCircle className="inline-block text-red-500 mr-2 text-lg" />
            <span>{error}</span>
          </div>
        )}

        {transcript && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transcription</h2>
            <div className="space-y-4">
              {transcript.map((segment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-md shadow-md border border-gray-200 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-blue-500">
                      {segment.start_time} - {segment.end_time} seconds
                    </h3>
                    <p className="text-gray-700 mt-2">{segment.sentence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
