import * as React from 'react';
import Image from '../Image/Image';
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

export default RoundImage;
