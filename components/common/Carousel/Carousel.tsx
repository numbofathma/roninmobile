import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CarouselNavWrapper, CarouselWrapper} from './style';

interface CarouselProps {
    images: string[];
    settings: any;
    thumbs?: number;
}

interface CarouselState {
    nav1: any;
    nav2: any;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
    private slider1: any;
    private slider2: any;

    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <React.Fragment>
                <CarouselWrapper>
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        {...this.props.settings}
                    >
                        {this.props.images.map( (src, index ) => (
                            <div key={index}>
                                <img src={src} />
                            </div>
                        ))}
                    </Slider>
                </CarouselWrapper>
                <CarouselNavWrapper>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={this.props.images.length}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {this.props.images.map( (src, index ) => (
                            <div key={index}>
                                <img src={src} />
                            </div>
                        ))}
                    </Slider>
                </CarouselNavWrapper>
            </React.Fragment>
        );
    }
}