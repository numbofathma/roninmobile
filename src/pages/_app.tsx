import * as React from 'react';
import MobileDetect from 'mobile-detect';
import Router from 'next/router';
import withGA from 'next-ga';
import App, { AppProps, AppContext } from 'next/app';
import { Store } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@public/static/css/style.css';
import { wrapper } from '../redux/store';

interface CustmAppProps {
  store: Store;
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
}

type MyAppProps = CustmAppProps & AppProps;

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
    }

    const mobileDetect = ctx.req && ctx.req.headers && ctx.req.headers['user-agent']
      ? new MobileDetect(ctx.req.headers['user-agent'])
      : new MobileDetect(navigator.userAgent);

    return {
      pageProps,
      isMobile: mobileDetect.mobile() !== null,
      isAndroid: mobileDetect.os() === 'AndroidOS',
      isiOS: mobileDetect.os() === 'iOS',
    };
  }

  render() {
    const {
      Component, pageProps, isMobile, isAndroid, isiOS,
    } = this.props;

    return (
      <Component
        {...pageProps}
        isMobile={isMobile}
        isAndroid={isAndroid}
        isiOS={isiOS}
      />
    );
  }
}

export default (withGA('UA-61042122-7', Router))(wrapper.withRedux(MyApp));
