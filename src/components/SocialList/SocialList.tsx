import React, { FC } from 'react';
import { ISocial } from '@/interfaces/app';
import style from './SocialList.module.scss';

interface ISocialListProps {
  socials: ISocial[];
}

const SocialList: FC<ISocialListProps> = ({ socials }) => (
  <div className={`${style.socialList} mt-5 flex justify-center`}>
    {socials.map(({ id, icon, url, title }: ISocial) => (
      <a key={id} href={url} title={title} target='_blank' className={style.socialListItem} rel='noreferrer'>
        <span className={style.icon} style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }} />
      </a>
    ))}
  </div>
);

export default SocialList;
