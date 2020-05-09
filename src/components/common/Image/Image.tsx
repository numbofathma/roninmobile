import * as React from 'react';
import { ImageWrapper } from './style';

interface ImageProps {
  src: string;
  title: string;
  width?: number;
  height?: number;
}

const Image = (props: ImageProps) => (
  <ImageWrapper
    width={props.width}
    height={props.height}
  >
    <img src={props.src} title={props.title} alt={props.title} />
  </ImageWrapper>
);

export default Image;
