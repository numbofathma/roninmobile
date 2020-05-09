import * as React from 'react';
import { DownloadLinks } from '../../interfaces/interfaces';
import { AppStoreLink, GooglePlayLink, ProjectLinkWrapper } from './style';

interface ProjectLinkProps {
  isAndroid: boolean;
  isiOS: boolean;
  title: string;
  links: DownloadLinks;
}

const ProjectLink = (props: ProjectLinkProps) => {
  const googlePlayLink: string = props.isAndroid ? props.links.mobileGooglePlay : props.links.googlePlay;
  const appStoreLink: string = props.isiOS ? props.links.mobileAppStore : props.links.appStore;

  return (
    <ProjectLinkWrapper>
      {
        googlePlayLink
        && <GooglePlayLink
          title={`Download ${props.title} from Google Play`}
          href={googlePlayLink}
          target="_blank"
        />
      }
      {
        appStoreLink
        && <AppStoreLink
          title={`Download ${props.title} from App Store`}
          href={appStoreLink}
          target="_blank"
        />
      }
    </ProjectLinkWrapper>
  );
};

export default ProjectLink;
