import * as React from 'react';
import {DownloadLinks} from '../../interfaces/interfaces';
import isMobile from 'react-device-detect';
import {AppStoreLink, GooglePlayLink, ProjectLinkWrapper} from './style';

interface ProjectLinkProps {
    title: string;
    links: DownloadLinks;
}

const ProjectLink = (props: ProjectLinkProps) => {
    const googlePlayLink: string = isMobile ? props.links.mobileGooglePlay : props.links.googlePlay;
    const appStoreLink: string = isMobile ? props.links.mobileAppStore : props.links.appStore;

    return (
        <ProjectLinkWrapper>
            {
                googlePlayLink &&
                <GooglePlayLink
                    title={`Download ${props.title} from Google Play`}
                    href={googlePlayLink}
                    target={'_blank'}
                />
            }
            {
                appStoreLink &&
                <AppStoreLink
                    title={`Download ${props.title} from App Store`}
                    href={appStoreLink}
                    target={'_blank'}
                />
            }
        </ProjectLinkWrapper>
    );
};

export default ProjectLink;
