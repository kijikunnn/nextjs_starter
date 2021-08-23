/* eslint-disable @typescript-eslint/naming-convention */
import "tailwindcss/tailwind.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = (props: AppPropsWithLayout) => {
  const getLayout =
    props.Component.getLayout ??
    ((page) => {
      return page;
    });

  return getLayout(<props.Component {...props.pageProps} />);
};

export default App;
