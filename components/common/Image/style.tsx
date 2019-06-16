import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: inline-block;
    width: ${(props: {width?: number, height?: number}) => props.width ? `${props.width}px` : 'auto'};
    height: ${(props: {width?: number, height?: number}) => props.height ? `${props.height}px` : 'auto'};

    img {
        border: 1px solid #CCCCCC;
        width: 100%;
        height: auto;
    }
`;
