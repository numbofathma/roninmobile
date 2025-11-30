import { ReactElement } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Lato } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import Starfield from '@/components/Starfield';
import { CDN_URL, DEV_MODE, GTM_ID, RECAPTCHA_SITE_KEY } from '@/constants';
import { LangVars } from '@/constants/lang';
import { MetadataIconSizes } from '@/constants/icons';
import { getUserPlatform } from '@/helpers/platform';
import '@/styles/globals.scss';

const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const { name, title, description, keywords } = LangVars.Metadata;
const { apple, icon } = MetadataIconSizes;

export const metadata: Metadata = {
  metadataBase: new URL('https://roninmobile.eu'),
  title,
  description,
  keywords,
  authors: [{ name, url: 'https://github.com/numbofathma' }],
  openGraph: {
    url: 'https://roninmobile.eu',
    type: 'website',
    title,
    images: [{ url: `${CDN_URL}/static/img/roninmobile.webp` }],
    description,
  },
  twitter: {
    card: 'summary',
    site: 'https://roninmobile.eu',
    title,
    description,
    images: [{ url: `${CDN_URL}/static/img/roninmobile.webp` }],
  },
  icons: {
    shortcut: `${CDN_URL}/favicon.ico`,
    icon: icon.map((size: number) => ({
      url: `${CDN_URL}/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
    apple: apple.map((size: number) => ({
      url: `${CDN_URL}/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

const RootLayout = async ({ children }: { children: ReactElement }) => {
  const { isMobile } = await getUserPlatform();

  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <head>
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://cdn-cookieyes.com' />
        {!DEV_MODE && <GoogleTagManager gtmId={GTM_ID} />}
      </head>
      <body className={lato.className}>
        <Starfield isMobile={isMobile} />
        {children}
        <Script id='recaptcha-v3' src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy='afterInteractive' />
      </body>
    </html>
  );
};

export default RootLayout;
