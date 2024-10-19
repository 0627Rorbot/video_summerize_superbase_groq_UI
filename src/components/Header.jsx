import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="text-center text-white font-bold text-2xl">Video Insight Dashboard</div>
    </Header>
  );
};

export default AppHeader;
