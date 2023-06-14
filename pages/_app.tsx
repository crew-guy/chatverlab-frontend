import type { AppProps } from 'next/app';
import Meta from '@components/atoms/Meta';
import { Provider } from "react-redux";
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Importing all the global styles & styles from ant design
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { Toaster } from 'react-hot-toast';
// Create a client
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Meta />
          <Toaster />
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider >
  );
}

export default MyApp;
