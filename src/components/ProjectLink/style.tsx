import styled from 'styled-components';

export const ProjectLinkWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 75px;
    left: 0;
    bottom: 25px;
    text-align: center;
`;

export const StoreLink = styled.a`
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 115px;
    height: inherit;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
    transition: 0.5s;

    &:hover {
        opacity: 0.65;
    }
`;

export const GooglePlayLink = styled(StoreLink)`
    background-image: url(/static/img/links/googleplay.png);
`;

export const AppStoreLink = styled(StoreLink)`
    background-image: url(/static/img/links/appstore.png);
`;
