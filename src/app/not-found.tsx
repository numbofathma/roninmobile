import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { LangVars } from '@/constants/lang';
import { CDN_URL } from '@/constants';

const { name } = LangVars.Metadata;

export const metadata: Metadata = {
  title: `${name} ~ 404: Page not found`,
};

const NotFound = () => {
  const logoWidth = 160;
  const logoHeight = 181;

  return (
    <div className='relative z-10 flex min-h-[100vh] grid-cols-12 justify-center gap-6'>
      <div className='flex flex-col items-center justify-center'>
        <Header level={1} className='text-xl md:text-2xl'>
          <span className='text-myRed'>404:</span> <span className='text-myBlue'>Sorry, we couldn&apos;t find it!</span>
        </Header>

        <div className='py-10 text-center'>
          <Image
            width={logoWidth}
            height={logoHeight}
            style={{
              maxWidth: `${logoWidth}px`,
              maxHeight: `${logoHeight}px`,
              width: '100%',
              height: 'auto',
            }}
            src={`${CDN_URL}/static/roninmobile.webp`}
            alt={name}
            priority
            className='mx-auto my-10'
          />
        </div>

        <div className='shrink-1 py-5 text-center'>
          <div className='flex justify-center text-center'>
            <Link href='/' title='Return to the homepage' className='button-base px-9 py-3'>
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
