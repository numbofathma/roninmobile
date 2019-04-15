import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
            });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
                    <meta property='og:url' content='https://roninmobile.eu' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Ronin Mobile Website' />
                    <meta property='og:description' content='We are Ronin Mobile. We build hyper casual mobile and Facebook games. Check our site!' />
                    <link href='https://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' />
                    <title>We are Ronin Mobile</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
