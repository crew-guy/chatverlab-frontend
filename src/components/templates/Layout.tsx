import React, { ReactNode } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const BaseLayoutComp: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >

        <div className="demo-logo-vertical" />
        <Typography.Title level={2} style={{ marginTop: '0.5rem', marginLeft: '0.5rem', width: "100%", color: 'white', textAlign: 'center' }}>chat.verlab</Typography.Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={
            [
              UserOutlined,
              VideoCameraOutlined, UploadOutlined, UserOutlined
            ].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: `nav ${index + 1}`,
              }),
            )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Veranda Learning ©2023 Created by Verlab</Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayoutComp;
