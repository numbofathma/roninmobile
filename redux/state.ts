import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export interface State {
    projects: Project[];
    socials: SocialItem[];
}

export interface Project {
    title: string;
    slug: string;
    description: string;
    image: string;
    links: {
        googlePlay: string;
        appStore: string;
        mobileGooglePlay: string;
        mobileAppStore: string;
        facebook: string;
        website: string;
    };
    portfolio: string[];
    portfolioSettings: any;
}

export interface SocialItem {
    id: string;
    title: string;
    icon: IconDefinition;
    url: string;
}
