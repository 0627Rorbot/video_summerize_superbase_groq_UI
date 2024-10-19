import React, { useState } from 'react';
import { uploadVideo, processVideo } from '../services/api';
import { Progress, Button, notification } from 'antd';

const FileUpload = ({ setInsights }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      notification.error({ message: 'Please select a video file' });
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const uploadResponse = await uploadVideo(file, (event) => {
        const percent = Math.round((event.loaded * 100) / event.total);
        setProgress(percent);
      });

      const videoName = file.name;
      const processResponse = await processVideo(videoName);
      setInsights(processResponse.data.insights);

      notification.success({ message: 'Video processed successfully!' });
    } catch (error) {
      notification.error({ message: 'Error uploading or processing the video' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload and Process Video</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <Progress percent={progress} className="mb-4" />
      <Button type="primary" onClick={handleUpload} loading={loading} block>
        Upload and Process
      </Button>
    </div>
  );
};

export default FileUpload;
