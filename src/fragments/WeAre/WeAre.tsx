import React from 'react';
import Image from 'next/image';
import { BASE_URL } from '@/constants';
import { LangVars } from '@/constants/lang';
import Header from '@/components/Header';

interface IWeAreProps {
  isMobile: boolean;
}

const WeAre = ({ isMobile = false }: IWeAreProps) => {
  const { name } = LangVars.Metadata;
  const { question, whatWeDo } = LangVars.About;
  const logoWidth = isMobile ? 160 : 240;
  const logoHeight = isMobile ? 181 : 272;

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-center'>
        <Image
          width={logoWidth}
          height={logoHeight}
          style={{
            maxWidth: `${logoWidth}px`,
            maxHeight: `${logoHeight}px`,
            width: '100%',
            height: 'auto',
          }}
          src={`${BASE_URL}/static/roninmobile.webp`}
          alt={name}
          priority
          className='mx-auto my-5'
        />
      </div>
      <Header level={1} className='my-5 text-3xl text-myBlue md:mb-5 md:mt-10 md:text-4xl'>
        {question}
      </Header>
      <div className='shrink-1 mb-5 text-center sm:my-10'>
        {/* <p className='mb-10 text-xl md:text-2xl'>{punchline}</p> */}
        {/* <hr className='mx-[100px]' /> */}
        <div className='flex justify-center text-center'>
          <p className='mt-10 md:w-[55%]'>{whatWeDo}</p>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
