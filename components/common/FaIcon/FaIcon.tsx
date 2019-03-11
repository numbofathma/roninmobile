import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';

const FaIcon = styled(FontAwesomeIcon)`
    color: #6C757D;
    cursor: pointer;
    transition: all 1s;
    ${!isMobile && `
        &:hover {
            color: #4999C3;
        }`
    }
`;

export default FaIcon;
