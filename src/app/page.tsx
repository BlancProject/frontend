import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../public/fonts/font.css';
import React, { ReactElement, ReactNode } from 'react';

type Page<P = Record<string, never>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps<{ dehydratedState: unknown }> & {
  Component: Page<{ dehydratedState: unknown }>;
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <div className="flex flex-1 flex-col text-main-1 font-montserrat min-h-screen bg-white tablet:px-10">
        <Head>
          <title>Fashion Cloud</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}

export default App;
