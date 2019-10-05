import * as React from 'react';
import MobileDetect from 'mobile-detect';
import App, { Container } from 'next/app';
import {Provider} from 'react-redux';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import withGA from 'next-ga';
import {initStore} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css';

class MyApp extends App <any, any> {
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps =  Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        }

        const mobileDetect = ctx.req  ? new MobileDetect(ctx.req.headers['user-agent'])  : new MobileDetect(navigator.userAgent);

        return {
            pageProps,
            isMobile: mobileDetect.mobile() !== null,
            isAndroid: mobileDetect.os() === 'AndroidOS',
            isiOS: mobileDetect.os() === 'iOS'
        };
    }

    render () {
        const { Component, pageProps, store, isMobile, isAndroid, isiOS } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component
                        {...pageProps}
                        isMobile={isMobile}
                        isAndroid={isAndroid}
                        isiOS={isiOS}
                    />
                </Provider>
            </Container>
        );
    }
}

export default (withGA('UA-61042122-7', Router))(withRedux(initStore)(MyApp));
