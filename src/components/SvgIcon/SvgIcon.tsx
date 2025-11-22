import { memo } from 'react';
import { CDN_URL } from '@/constants';
import { SvgIcons } from '@/constants/enums';
import style from './SvgIcon.module.scss';

interface ISvgIconProps {
  icon?: SvgIcons;
  className?: string;
  style?: React.CSSProperties;
}

const SvgIcon = ({ icon = SvgIcons.back, className = '', style: iconStyle }: ISvgIconProps) => {
  if (!icon) {
    return null;
  }

  return (
    <span
      className={`${style.icon} svg-icon ${className}`}
      style={{
        maskImage: `url(${CDN_URL}/static/img/icons/${icon}.svg)`,
        WebkitMaskImage: `url(${CDN_URL}/static/img/icons/${icon}.svg)`,
        ...iconStyle,
      }}
    />
  );
};

export default memo(SvgIcon);
