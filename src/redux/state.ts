import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface State {
  projects: Project[];
  socials: SocialItem[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: FeaturedItem[];
  links: {
    googlePlay: string;
    appStore: string;
    mobileGooglePlay: string;
    mobileAppStore: string;
    facebook: string;
    website: string;
  };
  portfolio: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  portfolioSettings: any;
}

interface FeaturedItem {
  title: string;
  url: string;
}

export interface SocialItem {
  id: string;
  title: string;
  icon: IconDefinition;
  url: string;
}
