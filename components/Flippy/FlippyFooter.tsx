import * as React from 'react';

export default ({ cards, activeCardIndex, onDotClick }) => (
  <div className='flippy-footer'>
    {cards.map((card: any, index: number) => (
      <span
        key={`flippyFooterItem${index}${card.toString()}`}
        className={`flippy-footer-item${activeCardIndex === index ? ' isActive' : ''}`}
        onClick={onDotClick.bind(null, index)}
      >*
      </span>
    ))}
  </div>
);
