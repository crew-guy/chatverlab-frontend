import React from 'react';
import { Layout } from 'antd';
import { Resizable } from "react-resizable";

const { Sider, Content } = Layout;

const ChatPane: React.FC = () => {
  return (
    <Resizable
      width={300}
      height="auto"
    >
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        hi chat
        {/* Your chat content goes here */}
      </Content>
    </Resizable>
  );
};

const ResizablePanes: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} theme="light">
        <ChatPane />
      </Sider>
      <Sider width={300} theme="light">
        <ChatPane />
      </Sider>
      <Sider width={300} theme="light">
        <ChatPane />
      </Sider>
    </Layout>
  );
};

export default ResizablePanes;
