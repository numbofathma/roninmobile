import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';
import style from './ProjectsItem.module.scss';

interface IProjectItemProps extends IProject {}

const ProjectItem = (props: IProjectItemProps) => {
  const { projectTitlePrefix } = LangVars.OurWork;
  const { slug, title, description, image } = props;

  return (
    <Link key={slug} href={`/project/${slug}`} title={`${projectTitlePrefix} "${title}"`}>
      <div className={style.project}>
        <div className={`${style['project-description']} border-4 bg-white p-4`}>
          <div>
            <div className='mb-2 text-lg font-extrabold text-gray-900'>{title}</div>
            <p className='text-base text-gray-700'>{description}</p>
          </div>
        </div>
        <div className='-ml-5 mt-3 shrink-0'>
          <Image width={88} height={88} src={image} alt={title} priority={false} className={`${style['project-image']} border-2 drop-shadow`} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
