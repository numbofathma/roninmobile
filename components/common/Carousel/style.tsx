import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    .slick-slide img {
        padding: 10px;
        margin: 0 auto;
        width: 100%;
        height: auto;
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
        text-shadow: 0px 0px 15px rgba(225, 225, 225, 0.75);
    }
`;

export const CarouselNavWrapper = styled.div`
    padding-bottom: 20px;

    .slick-slide img {
        padding: 15px;
        width: 100%;
        height: auto;
        margin: 0 auto;
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
