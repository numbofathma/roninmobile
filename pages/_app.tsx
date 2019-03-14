import * as React from 'react';
import App, { Container } from 'next/app';
import {Provider} from 'react-redux';
import store from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../static/css/style.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}
