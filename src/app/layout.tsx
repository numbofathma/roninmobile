import React, { ReactElement } from 'react';
import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Starfield from '@/components/Starfield';
import { BASE_URL, DEV_MODE, GA_ID } from '@/constants';
import { LangVars } from '@/constants/lang';
import { MetadataIconSizes } from '@/constants/icons';
import { getUserPlatform } from '@/helpers/api';
import '@/styles/globals.scss';

const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-lato',
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
    images: [{ url: `${BASE_URL}/static/img/roninmobile.webp` }],
    description,
  },
  twitter: {
    card: 'summary',
    site: 'https://roninmobile.eu',
    title,
    description,
    images: [{ url: `${BASE_URL}/static/img/roninmobile.webp` }],
  },
  icons: {
    shortcut: `favicon.ico`,
    icon: icon.map((size: number) => ({
      url: `${BASE_URL}/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
    })),
    apple: apple.map((size: number) => ({
      url: `${BASE_URL}/icons/icon-${size}x${size}.png`,
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
    <html lang='en'>
      <body className={lato.className}>
        <Starfield isMobile={isMobile} />
        {children}
      </body>
      {!DEV_MODE && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
};

export default RootLayout;
