import { cache } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { getMetadataInfo, getProjectBySlug } from '@/helpers/api';
import { getUserPlatform } from '@/helpers/platform';
import { linkBuilder } from '@/helpers/template';
import { IPageProps, IProjectLink } from '@/interfaces/app';
import { CDN_URL } from '@/constants';
import { AppPlatforms } from '@/constants/enums';
import { LangVars } from '@/constants/lang';

interface IProjectPage extends IPageProps {
  params: Promise<{ slug: string }>;
}

const getProjectBySlugCached = cache(getProjectBySlug);

export const generateMetadata = async ({ params }: IProjectPage): Promise<Metadata> => {
  const { slug } = await params;
  const { name, description } = LangVars.Metadata;

  return await getMetadataInfo(slug, { title: name, description }, getProjectBySlugCached);
};

const ProjectPage = async ({ params }: IProjectPage) => {
  const { slug } = await params;

  const [{ project }, { isMobile, currentPlatform }] = await Promise.all([getProjectBySlugCached(slug), getUserPlatform()]);

  if (!project?.slug) redirect('/');

  const { title: projectTitle, description, portfolio = [], links = [], settings, orientation } = project;

  const appLinks = linkBuilder(links, isMobile, currentPlatform);

  return (
    <div className='flex h-full min-h-full flex-col'>
      <Link href='/' title='Back to Home' className={'absolute left-4 top-3 text-xs text-myBlue hover:text-myRed'}>
        <span className='inline-block rotate-180'>&#x27A4;</span> BACK
      </Link>
      <div className='container m-auto max-w-screen-xl px-7 py-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='my-5'>
            <Header level={1} className='text-center text-3xl text-myBlue lg:text-left lg:text-4xl'>
              <span className='text-myRed'></span>
              {projectTitle}
            </Header>
          </div>

          <div className='m-3 lg:m-0 lg:mt-5'>
            <Navigation
              links={[
                {
                  item: (
                    <>
                      <span className='mr-1 inline-block rotate-180 lg:hidden'>&#x27A4;</span>
                      APP POLICY
                      <span className='ml-1 hidden lg:inline-block'>&#x27A4;</span>
                    </>
                  ),
                  title: `Review the app policy for "${projectTitle}"`,
                  url: `/policy/${slug}`,
                },
                {
                  item: (
                    <>
                      TERMS<span className='ml-1'>&#x27A4;</span>
                    </>
                  ),
                  title: `View the terms and conditions for "${projectTitle}"`,
                  url: `/terms/${slug}`,
                },
              ]}
              className='justify-evenly lg:flex-col lg:items-end'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div>
            <hr className='mx-[50px] md:mx-0' />
            <p className='my-5 text-center lg:my-10 lg:text-justify'>{description}</p>
          </div>

          <div>
            <div className='flex h-full flex-col items-center justify-center sm:flex-row'>
              {appLinks.map(({ title, platform, url }: IProjectLink) => {
                const src =
                  platform === AppPlatforms.ANDROID ? `${CDN_URL}/static/img/links/google-play.svg` : `${CDN_URL}/static/img/links/app-store.svg`;

                return (
                  <div key={url} className='m-4 transition-transform ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <a href={url} title={`Check "${projectTitle}" on ${title}`} target='_blank' rel='noreferrer'>
                      <Image
                        src={src}
                        alt={`Check "${projectTitle}" on ${title}`}
                        width={200}
                        height={55}
                        className='h-[55px]'
                        loading='eager'
                        preload
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <hr className='mx-[50px] mt-5 md:mx-0 md:mt-0' />
          </div>
        </div>
      </div>

      <div className='flex flex-1'>
        <Carousel
          title={projectTitle}
          data={{ images: portfolio, settings, orientation }}
          options={{ loop: true }}
          isMobile={isMobile}
          className='py-5 md:py-10'
        />
      </div>
    </div>
  );
};

export default ProjectPage;
