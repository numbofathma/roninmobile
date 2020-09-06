import styled from 'styled-components';
import { ImageWrapper } from '../Image/style';

export const RoundImageWrapper = styled(ImageWrapper as any)`
    display: inline-block;

    img {
        border-radius: 15%;
    }
`;
