import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpinner;
