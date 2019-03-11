import styled from 'styled-components';
import {Button} from 'reactstrap';

export const SlideHeader = styled.h1`
    padding: 2.5rem 0 ;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: #555555;

    @media (min-width: 576px) {
        font-size: 2.5rem;
    }

    @media (min-width: 768px) {
        font-size: 3.5rem;
    }

    @media (min-width: 992px) {
        font-size: 4.5rem;
    }

`;

export const SlideButton = styled(Button)`
    background-color: transparent;
    color: #6C757D;
    font-weight: bold;
    margin: 3rem 0;
`;
