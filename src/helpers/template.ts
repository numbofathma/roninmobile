import { AppPlatforms } from '@/constants/enums';
import { IProjectLink } from '@/interfaces/app';

export const goTo = (selector: string) => {
  const element = document.querySelector(selector);
  element?.scrollIntoView();
};

export const debounce = <T extends (...args: unknown[]) => unknown>(func: T, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const linkBuilder = (links: IProjectLink[] = [], isMobile = false, currentPlatform: AppPlatforms) => {
  const filteredLinks = [AppPlatforms.ANDROID, AppPlatforms.IOS].map((platform: AppPlatforms) => {
    const isCurrentPlatform = platform === currentPlatform;
    const mobileStatus = isMobile ? isCurrentPlatform : false;

    return links.find((link: IProjectLink) => !!link.isMobile === mobileStatus && link.platform === platform);
  });

  return filteredLinks.filter(Boolean) as IProjectLink[];
};
