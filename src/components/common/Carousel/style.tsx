import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    .slick-slide div {
      &:focus {
        outline: none;
      }
    }

    .slick-slide img {
        padding: 10px;
        margin: 0 auto;
        width: 100%;
        height: auto;

        &:focus {
          outline: none;
        }
    }

    .slick-prev {
        left: -15px;
        z-index: 100000;
        width: 50px;
        height: 50px;
    }

    .slick-next {
        right: -15px;
        z-index: 100000;
        width: 50px;
        height: 50px;
    }

    .slick-prev:before, .slick-next:before {
        color: #000000;
        font-size: 50px;
    }
`;

export const CarouselNavWrapper = styled.div`
    padding-bottom: 20px;

    .slick-slide {
      cursor: pointer;
    }

    .slick-slide div {
      padding: 5px;
      &:focus {
        outline: none;
      }
    }

    .slick-slide img {
        width: 100%;
        height: auto;
        margin: 0 auto;
        border: 2px solid #CCCCCC;
        border-radius: 5px;
    }

    .slick-slide.slick-active.slick-current img {
      border: 2px solid #212529;
    }

    .slick-prev {
        left: -5px;
        z-index: 100000;
    }

    .slick-next {
        right: -5px;
        z-index: 100000;
    }

    .slick-prev:before, .slick-next:before {
        color: #555555;
    }
`;
