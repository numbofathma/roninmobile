import React, { ReactElement } from 'react';
import Link from 'next/link';

interface INavigationLink {
  item: ReactElement;
  url: string;
  className?: string;
}

interface INavigationProps {
  links: INavigationLink[];
  className?: string;
}

const Navigation = ({ links = [], className = '' }: INavigationProps) => (
  <div className={`flex ${className}`}>
    {links.map(({ item, url, className }: INavigationLink) => (
      <div key={url}>
        <Link href={url} className={className || 'text-xs text-myBlue hover:text-myRed'}>
          {item}
        </Link>
      </div>
    ))}
  </div>
);

export default Navigation;
