import * as React from 'react';

export default function FlippyFooter({ cards, activeCardIndex, onDotClick }: {cards: any; activeCardIndex: number | undefined; onDotClick: any}) {
  return (
    <div className="flippy-footer">
      {cards.map((card: any, index: number) => (
        <span
          key={`flippyFooterItem${index}${card.toString()}`}
          className={`flippy-footer-item${(activeCardIndex === index ? ' isActive' : '')}`}
          onClick={onDotClick.bind(null, index)}
        >*
        </span>
      ))}
    </div>
  );
}
