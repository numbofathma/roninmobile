import * as React from 'react';
import Document, {
  Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta property="og:url" content="https://roninmobile.eu" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ronin Mobile Website" />
          <meta property="og:image" content="/static/img/ronin-round.png" />
          <meta property="og:description" content="We are Ronin Mobile. We build hyper casual mobile and Facebook games. Check our site!" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
