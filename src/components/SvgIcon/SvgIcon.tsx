import { FC, memo } from 'react';
import { BASE_URL } from '@/constants';
import { SvgIcons } from '@/constants/enums';
import style from './SvgIcon.module.scss';

interface ISvgIconProps {
  icon?: SvgIcons;
  className?: string;
  style?: React.CSSProperties;
}

const SvgIcon: FC<ISvgIconProps> = ({ icon = SvgIcons.back, className = '', style: iconStyle }) => {
  if (!icon) {
    return null;
  }

  return (
    <span
      className={`${style.icon} svg-icon ${className}`}
      style={{
        maskImage: `url(${BASE_URL}/static/img/icons/${icon}.svg)`,
        WebkitMaskImage: `url(${BASE_URL}/static/img/icons/${icon}.svg)`,
        ...iconStyle,
      }}
    />
  );
};

export default memo(SvgIcon);
