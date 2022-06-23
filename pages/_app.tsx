import React from 'react';
import { ChakraProvider, Spinner, Flex } from '@chakra-ui/react';
import App from 'next/app';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { Type as MenuType } from '../globals/Menu';
import { Type as LogoType } from '../globals/Logo';
import { Type as FooterType } from '../globals/Footer';
import Header from '../components/layout/Header';
import 'nprogress/nprogress.css';

type AppProps = {
  pageProps: unknown,
  Component: React.FC<{ footer: FooterType, logo: LogoType }>
} & {
  menu: {
    menu: MenuType,
    logo: LogoType,
  }
  footer: FooterType,
  logo: LogoType
};

nProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const Application = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps, menu, footer, logo } = appProps;
  const router = useRouter();
  if (router.isFallback) {
    return (
      <ChakraProvider resetCSS>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="calc(100vh)"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider resetCSS>
      <React.Fragment>
        <Header menu={menu} />
        <Component
          {...(pageProps as Record<string, unknown>)}
          footer={footer}
          logo={logo}
        />
      </React.Fragment>
    </ChakraProvider>
  );
};

Application.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [menu, logo, footer] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/menu?depth=1`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/logo`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    menu: {
      menu,
      logo,
    },
    footer,
    logo,
  };
};

export default Application;
