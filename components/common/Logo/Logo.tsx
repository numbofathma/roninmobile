import styled from 'styled-components';

interface LogoStyle {
    isMobile: boolean;
}

export const Logo = styled.div<LogoStyle>`
    background-image: url(/static/img/ronin-round.png);
    width: ${(props: LogoStyle) => props.isMobile ? '225px' : '325px'};
    height: ${(props: LogoStyle) => props.isMobile ? '225px' : '325px'};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 0 auto;
`;

export const StaticLogo = styled.div`
    background-image: url(/static/img/ronin.png);
    width: 75px;
    height: 75px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 0 auto;
`;
