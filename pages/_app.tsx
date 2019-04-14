import * as React from 'react';
import App, { Container } from 'next/app';
import {Provider} from 'react-redux';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import withGA from 'next-ga';
import {initStore} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css';

class MyApp extends App <any, any> {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps =  Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        }

        return { pageProps };
    }

    render () {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default (withGA('UA-61042122-7', Router))(withRedux(initStore)(MyApp));
