import styled from 'styled-components';
import { SlideHeader } from '../common/Style/style';

export const ContactWrapper = styled.div.attrs({ id: 'contact-us' })`
    background: #FAFAFA;
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;

    ${SlideHeader} {
        color: #FFFFFF;
    }

    .form-text {
        color: #FFFFFF !important;
    }
`;

export const ContactLogoWrapper = styled.div`
    margin-top: 50px;
`;

export const LoaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
