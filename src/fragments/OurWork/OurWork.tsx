import React from 'react';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import { LangVars } from '@/constants/lang';

const OurWork = () => {
  const { sectionTitle, itemTitle } = LangVars.OurWork;

  return (
    <div className='mb-10'>
      <div className='mb-10'>
        <Header level={2} className='my-5 text-2xl text-myBlue md:text-4xl'>
          {sectionTitle}
        </Header>
        <p className='leading-8'>{itemTitle}</p>
      </div>
      <ProjectsList />
    </div>
  );
};

export default OurWork;
