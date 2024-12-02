import React from 'react';
import Script from 'next/script';
import { COOKIE_YES_ID, GA_ID } from '@/constants';

const GoogleAnalytics = () => {
  return (
    <>
      <Script id='cookieyes' src={`https://cdn-cookieyes.com/client_data/${COOKIE_YES_ID}/script.js`} defer strategy='lazyOnload' />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} defer strategy='lazyOnload' />
      <Script id='google-analytics' defer strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', '${GA_ID}');
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
