import axios from 'axios';
// Get API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL;

export const uploadVideo = async (file, onUploadProgress) => {
  const formData = new FormData();
  formData.append('video', file);
  
  return axios.post(`${API_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
  });
};

export const processVideo = async (videoName) => {
  return axios.post(`${API_URL}/process`, { video_name: videoName });
};
