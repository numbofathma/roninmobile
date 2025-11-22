import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';
import style from './ProjectsItem.module.scss';

type IProjectItemProps = IProject;

const ProjectItem = (props: IProjectItemProps) => {
  const { projectTitlePrefix } = LangVars.OurWork;
  const { slug, title, description, image } = props;

  return (
    <Link href={`/project/${slug}`} title={`${projectTitlePrefix} "${title}"`} className={style['project']}>
      <span className={`${style['project-description']} mt-3 block border-4 bg-white p-6 md:mt-0`}>
        <span className='mb-5 flex flex-col items-center md:flex-row md:items-center'>
          <Image width={88} height={88} src={image} alt={title} priority={false} className={style['project-image']} />
          <span className='m-3 text-center text-lg font-extrabold text-gray-900 md:text-left'>{title}</span>
        </span>
        <p className='text-justify text-base text-gray-700'>{description}</p>
      </span>
    </Link>
  );
};

export default ProjectItem;
