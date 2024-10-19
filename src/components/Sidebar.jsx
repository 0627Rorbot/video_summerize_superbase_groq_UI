import React from 'react';
import { Layout, Menu } from 'antd';
import { VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
          Video Processor
        </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
          Upload Video
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
