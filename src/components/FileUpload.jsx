import React, { useState } from 'react';
import { uploadVideo, processVideo } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const FileUpload = ({ setInsights }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage('Please select a video file.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const uploadResponse = await uploadVideo(file);
      const videoName = file.name;

      // Start processing video after upload
      const processResponse = await processVideo(videoName);
      setInsights(processResponse.data.insights);

    } catch (error) {
      setErrorMessage('Error uploading or processing the video.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Video</h2>
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Upload & Process
        </button>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default FileUpload;
