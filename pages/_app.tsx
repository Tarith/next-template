import '@/styles/globals.css';
import { NextPageWithLayout } from '@/types/page';
import type { AppProps } from 'next/app';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
