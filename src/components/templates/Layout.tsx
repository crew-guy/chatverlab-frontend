import React, { ReactNode } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import { AppDispatch, RootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { setContentKey } from '@features/stateSlice';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

const BaseLayoutComp: React.FC<{ children: ReactNode }> = ({ children }) => {

  const dispatch: AppDispatch = useDispatch();
  const contentKey = useSelector((state: RootState) => state.contentKey)
  return (
    <Layout style={{ height: '100vh' }}>
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
          defaultSelectedKeys={[contentKey]}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Kendra RAG',
              onClick: () => dispatch(setContentKey('1'))
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Indexing with Pinecone',
              onClick: () => dispatch(setContentKey('2'))
            },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: 'PG vector AWS',
            //   onClick: () => dispatch(setContentKey('3'))
            // },
          ]
          }
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
