import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { AppPlatforms } from '@/constants/enums';

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
