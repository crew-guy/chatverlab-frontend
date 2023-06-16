import ChatApp from '@components/molecules/ChatFunction';
import { Typography } from 'antd';
const Home = () => {
  return (
    <div style={{ margin: '3rem', height: '100%' }}>
      <Typography.Title level={1} style={{ width: "100%", textAlign: 'center' }}>chat.verlab</Typography.Title>
      <ChatApp />
    </div>
  );
};

export default Home;
