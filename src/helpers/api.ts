import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { IProject } from '@/interfaces/app';
import { AppPlatforms } from '@/constants/enums';

export const getProjects = async () => {
  const appUrl = (await headers()).get('x-current-path');

  try {
    const response = await fetch(`${appUrl}/api/projects`);
    const { data = [], ok } = await response.json();

    return {
      ok,
      projects: data as IProject[],
    };
  } catch (_) {
    return {
      ok: false,
      projects: [],
    };
  }
};

export const getProjectBySlug = async (slug: string) => {
  const appUrl = (await headers()).get('x-current-path');

  try {
    const response = await fetch(`${appUrl}/api/projects/${slug}`);
    const { data = {}, ok } = await response.json();

    return {
      ok,
      project: data as IProject,
    };
  } catch (_) {
    return {
      ok: false,
    };
  }
};

export const getUserPlatform = async () => {
  const { device = {}, os = {} } = userAgent({ headers: await headers() });
  const { name = 'Other' } = os;
  const isAndroid = name === 'Android';
  const isIOS = ['iOS', 'iPadOS'].includes(name);
  const isMobile = device?.type === 'mobile';
  const currentPlatform = isAndroid ? AppPlatforms.ANDROID : isIOS ? AppPlatforms.IOS : AppPlatforms.WEB;

  return {
    isMobile,
    isAndroid,
    isIOS,
    currentPlatform,
  };
};
