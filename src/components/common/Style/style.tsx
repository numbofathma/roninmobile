import styled from 'styled-components';
import { Button } from 'reactstrap';

interface SlideHeaderStyle {
  position?: SlideHeaderPositionString;
}

enum SlideHeaderPosition {
  left = 'flex-start',
  right = 'flex-end',
  center = 'center'
}

type SlideHeaderPositionString = keyof typeof SlideHeaderPosition;

export const SlideHeader = styled.h1<SlideHeaderStyle>`
    display: flex;
    align-items: center;
    padding: 2.5rem 0 ;
    font-size: 1.5rem;
    justify-content: ${(props) => (props.position ? SlideHeaderPosition[props.position] : 'center')};
    color: #212529;

    @media (min-width: 576px) {
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

    @media (min-width: 992px) {
        font-size: 3.5rem;
    }

`;

export const SlideButton = styled(Button)`
    font-family: 'Lato', sans-serif;
    background-color: transparent;
    color: #6C757D;
    font-weight: bold;
`;

export const SlideFooter = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 1 1 100%;
    height: 100%;
`;
