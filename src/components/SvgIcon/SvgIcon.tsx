import { FC, memo } from 'react';
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
        maskImage: `url/static/img/icons/${icon}.svg)`,
        WebkitMaskImage: `url(/static/img/icons/${icon}.svg)`,
        ...iconStyle,
      }}
    />
  );
};

export default memo(SvgIcon);
