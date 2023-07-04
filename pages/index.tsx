import ChatApp from '@components/molecules/ChatFunction';
import BaseLayoutComp from '@components/templates/Layout';
import { Typography } from 'antd';
const Home = () => {
  return (
    // <div style={{ margin: '3rem', height: '100%' }}>
    <BaseLayoutComp>
      <ChatApp />
    </BaseLayoutComp>
    // </div>
  );
};

export default Home;
