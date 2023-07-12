import ChatApp from '@components/molecules/ChatFunction';
import ResizablePanes from '@components/organisms/ResizablePanes/index.tsx';
import S3Chat from '@components/organisms/S3Chat';
import BaseLayoutComp from '@components/templates/Layout';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
const Home = () => {
  const contentKey = useSelector((state: RootState) => state.contentKey)
  return (
    // <div style={{ margin: '3rem', height: '100%' }}>
    <BaseLayoutComp>
      {contentKey === '1' && <ChatApp />}
      {contentKey === '2' && <S3Chat />}
      {contentKey === '3' && <ResizablePanes />}
    </BaseLayoutComp>
    // </div>
  );
};

export default Home;
