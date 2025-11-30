'use client';

import { Lato } from 'next/font/google';
import Starfield from '@/components/Starfield';
import { LangVars } from '@/constants/lang';
import '@/styles/globals.scss';
import ErrorBlock from '@/components/ErrorBlock';

const { name } = LangVars.Metadata;

const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const GlobalError = ({ reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <html lang='en' data-scroll-behavior='smooth'>
    <head>
      <title>{`${name} ~ Oops: Something went wrong!`}</title>
    </head>
    <body className={`${lato.className} font-light`}>
      <Starfield isMobile={true} />
      <ErrorBlock code='Oops' message='Something went wrong!' action={reset} />
    </body>
  </html>
);

export default GlobalError;
