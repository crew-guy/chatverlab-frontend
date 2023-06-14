import { NextPage } from 'next';
import BaseLayout from '@components/templates/BaseLayout';

const Home: NextPage = () => {
  return (
    <BaseLayout
      top={<div />}
      center={<div />}
      left={<div />}
    />
  );
};

export default Home;
