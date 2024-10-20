import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="site-layout-background flex items-center justify-center" style={{ padding: 0 }}>
      <h1 className="text-center text-white font-bold text-2xl">Video Insight Dashboard</h1>
    </Header>
  );
};

export default AppHeader;
