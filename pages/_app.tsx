import * as React from 'react';
import App, { Container } from 'next/app';
import {Provider} from 'react-redux';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import withGA from 'next-ga';
import {initStore} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css';
import {isMobile} from '../utils/utils';

class MyApp extends App <any, any> {
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps =  Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        }

        const userAgent = ctx.req
            ? ctx.req.headers['user-agent']
            : navigator.userAgent;

        return {
            pageProps,
            isMobile: isMobile(userAgent).isHandHeld(),
            isAndroid: isMobile(userAgent).isAndroid(),
            isiOS: isMobile(userAgent).isiOS()
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
