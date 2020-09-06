import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselNavWrapper, CarouselWrapper } from './style';

interface CarouselProps {
  images: string[];
  settings: unknown;
  thumbs?: number;
}

interface CarouselState {
  nav1: Slider | undefined;
  nav2: Slider | undefined;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  private slider1: React.RefObject<Slider>;

  private slider2: React.RefObject<Slider>;

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      nav1: undefined,
      nav2: undefined,
    };

    this.slider1 = React.createRef();
    this.slider2 = React.createRef();
  }

  componentDidMount() {
    if (this.slider1.current && this.slider2.current) {
      this.setState({
        nav1: this.slider1.current,
        nav2: this.slider2.current,
      });
    }
  }

  render() {
    return (
      <>
        <CarouselWrapper>
          <Slider
            asNavFor={this.state.nav2}
            ref={this.slider1}
            {...this.props.settings}
          >
            {this.props.images.map((src, index) => (
              <div key={index}>
                <img src={src} alt="slide" />
              </div>
            ))}
          </Slider>
        </CarouselWrapper>
        <CarouselNavWrapper>
          <Slider
            asNavFor={this.state.nav1}
            ref={this.slider2}
            slidesToShow={this.props.images.length}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {this.props.images.map((src, index) => (
              <div key={index}>
                <img src={src} alt="slide" />
              </div>
            ))}
          </Slider>
        </CarouselNavWrapper>
      </>
    );
  }
}
