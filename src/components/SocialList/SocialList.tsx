import * as React from 'react';
import { SocialItem } from '../../redux/state';
import LinkIcon from '../common/LinkIcon/LinkIcon';
import { SocialListWrapper } from './style';

interface SocialListProps {
  socials: SocialItem[];
}

const SocialList = (props: SocialListProps) => (
  <SocialListWrapper>
    {
        props.socials.map(
          (item: SocialItem) => (<LinkIcon key={item.id} {...item} />),
        )
    }
  </SocialListWrapper>
);

export default SocialList;
