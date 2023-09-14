import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import './styles.css';
import { getHomeDataInternal } from '@/controllers/product';
import Layout from '../components/Layout';
import { store } from '../store/store';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);
  if (Component.getLayout) {
    return <Provider store={store}>{Component.getLayout(<Component {...pageProps} />)}</Provider>;
  }
  return (
    <div>
      <Provider store={store}>
        <Layout
          homeDataInp={pageProps?.homeData}
        >
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};

MyApp.getInitialProps = async () => {
  // Fetch data from external API
  const [homeData] = await Promise.all([
    getHomeDataInternal(),
  ]);
  // Pass data to the page via props
  return {
    pageProps: {
      homeData,
    },
  };
};

export default MyApp;
