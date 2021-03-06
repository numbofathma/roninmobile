import * as React from 'react';
import Image from '@components/common/Image';
import { RoundImageWrapper } from './style';

interface RoundImageProps {
  src: string;
  title: string;
  width?: number;
  height?: number;
}

const RoundImage = (props: RoundImageProps) => (
  <RoundImageWrapper
    width={props.width}
    height={props.height}
  >
    <Image
      src={props.src}
      title={props.title}
      width={props.width}
      height={props.height}
    />
  </RoundImageWrapper>
);

RoundImage.defaultProps = {
  width: undefined,
  height: undefined,
};

export default RoundImage;
