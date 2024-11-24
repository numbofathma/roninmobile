import React from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { getProjectBySlug, getUserPlatform } from '@/helpers/api';
import { linkBuilder } from '@/helpers/template';
import { IPageProps, IProjectLink } from '@/interfaces/app';
import { AppPlatforms } from '@/constants/enums';

interface IProjectPage extends IPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectPage = async ({ params }: IProjectPage) => {
  const { slug } = await params;
  const { isMobile, currentPlatform } = await getUserPlatform();
  const { project } = await getProjectBySlug(slug);

  if (!project?.slug) {
    redirect('/');
  }

  const { title: projectTitle, description, portfolio = [], links = [], settings } = project;

  return (
    <div className='flex h-full min-h-full flex-col'>
      <div className='container m-auto max-w-screen-xl px-7 py-5'>
        <Navigation
          links={[
            {
              item: (
                <>
                  <span className='mr-1 inline-block rotate-180'>&#x27A4;</span>HOME
                </>
              ),
              url: '/',
            },
            {
              item: (
                <>
                  APP POLICY<span className='ml-1'>&#x27A4;</span>
                </>
              ),
              url: `/policy/${slug}`,
            },
          ]}
        />
        <div className='my-5'>
          <Header level={1} className='text-center text-3xl text-myBlue lg:text-left lg:text-4xl'>
            {projectTitle}
          </Header>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className=''>
            <hr className='mx-[50px] md:mx-0' />
            <p className='my-5 text-center lg:my-10 lg:text-justify'>{description}</p>
          </div>
          <div>
            <div className='flex h-full flex-col items-center justify-center sm:flex-row'>
              {linkBuilder(links, isMobile, currentPlatform).map(({ title, platform, url }: IProjectLink) => {
                return (
                  <div key={url} className='m-4 transition-all ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <a href={url} title={`Check "${projectTitle}" on ${title}`} target='_blank' rel='noreferrer'>
                      <Image
                        src={platform === AppPlatforms.ANDROID ? '/static/img/links/google-play.svg' : '/static/img/links/app-store.svg'}
                        alt={`Check "${projectTitle}" on ${title}`}
                        width={200}
                        height={0}
                        className='h-[55px] w-auto'
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div>
              <hr className='mx-[50px] mt-5 md:mx-0 md:mt-0' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1'>
        <Carousel
          title={projectTitle}
          data={{ images: portfolio, settings }}
          options={{ loop: true }}
          isMobile={isMobile}
          className='py-5 md:py-10'
        />
      </div>
    </div>
  );
};

export default ProjectPage;
