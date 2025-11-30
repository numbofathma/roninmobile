import { ReactElement } from 'react';
import Link from 'next/link';

interface INavigationLink {
  item: ReactElement;
  title: string;
  url: string;
  className?: string;
}

interface INavigationProps {
  links: INavigationLink[];
  className?: string;
}

const Navigation = ({ links = [], className = '' }: INavigationProps) => (
  <div className={`flex ${className}`}>
    {links.map(({ item, title, url, className }: INavigationLink) => (
      <div key={url}>
        <Link href={url} title={title} className={className || 'text-xs text-myBlue hover:text-myRed'}>
          {item}
        </Link>
      </div>
    ))}
  </div>
);

export default Navigation;
