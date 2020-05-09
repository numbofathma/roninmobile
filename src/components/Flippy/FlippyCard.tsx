import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlippyCard = (props: any) => {
  const {
    className, cardType, style, elementType, animationDuration, ...rest
  } = props;

  return (React.createElement((elementType || 'div'),
    {
      className: `flippy-card flippy-${cardType} ${className || ''}`,
      ...rest,
      style: {
        ...(style || {}),
        ...{ transitionDuration: `${(animationDuration / 1000)}s` },
      },
    }, props.children)
  );
};

export const FrontSide = ({
  style, animationDuration, ...props
}: {style: React.CSSProperties; animationDuration: number; children: React.ReactNode}) => (
  <FlippyCard
    {...props}
    style={
        {
          ...(style || {}),
        }
      }
    animationDuration={animationDuration}
    cardType="front"
  />
);

export const BackSide = ({ style, animationDuration, ...props }: {style: React.CSSProperties; animationDuration: number; children: React.ReactNode}) => (
  <FlippyCard
    {...props}
    style={
      {
        ...(style || {}),
      }
    }
    animationDuration={animationDuration}
    cardType="back"
  />
);
