import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import AppHeader from './components/Header';
import FileUpload from './components/FileUpload';
import Insights from './components/Insights';

const { Content } = Layout;

function App() {
  const [insights, setInsights] = useState([]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <AppHeader />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="p-6 bg-gray-100">
            <FileUpload setInsights={setInsights} />
            <Insights insights={insights} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
