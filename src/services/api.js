import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the URL for your Flask backend

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append('video', file);
  
  return axios.post(`${API_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(`Upload Progress: ${progress}%`);
    },
  });
};

export const processVideo = async (videoName) => {
  return axios.post(`${API_URL}/process`, { video_name: videoName });
};
