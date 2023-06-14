import SearchPane from '@components/molecules/SearchPane';
import StepperWrapper from '@components/templates/Steps';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'src/redux/store';

const Home = () => {
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <StepperWrapper />
    // <SearchPane />
    // </PersistGate>
  );
};

export default Home;
