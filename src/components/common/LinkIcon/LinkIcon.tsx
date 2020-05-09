import * as React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FaIconWrapper } from './style';
import FaIcon from '../FaIcon';

interface IconProps {
  id: string;
  title: string;
  icon: IconDefinition;
  url: string;
}

const LinkIcon = (props: IconProps) => {
  const Link = (
    <a href={props.url} title={props.title} target="_blank" rel="noreferrer noopener">
      <FaIcon
        icon={props.icon}
        className="big"
      />
    </a>
  );

  return (
    <FaIconWrapper id={props.id}>
      {Link}
    </FaIconWrapper>
  );
};

export default LinkIcon;
