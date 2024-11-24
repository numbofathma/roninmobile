import React, { FC } from 'react';
import Link from 'next/link';

interface INavigationLink {
  text: string;
  url: string;
  className?: string;
}

interface INavigationProps {
  links: INavigationLink[];
}

const Navigation: FC<INavigationProps> = ({ links = [] }) => (
  <div className='flex justify-between'>
    {links.map(({ text, url, className }: INavigationLink) => (
      <div key={url}>
        <Link href={url} className={className || 'text-xs text-myBlue hover:text-myRed'}>
          {text}
        </Link>
      </div>
    ))}
  </div>
);

export default Navigation;
