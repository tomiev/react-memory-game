import React from 'react'
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    };
  };

  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="Card front" />
        <img
          className="back"
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="Card back"
        />
      </div>
    </div>
  )
};
