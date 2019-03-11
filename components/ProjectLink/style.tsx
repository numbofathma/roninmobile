import styled from 'styled-components';

export const ProjectLinkWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 75px;
    left: 0;
    bottom: 25px;
    text-align: center;
`;

export const GooglePlayLink = styled.a`
    display: inline-block;
    background-image: url(/static/img/links/googleplay.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 115px;
    height: inherit;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
`;

export const AppStoreLink = styled.a`
    display: inline-block;
    background-image: url(/static/img/links/appstore.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 115px;
    height: inherit;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
`;
