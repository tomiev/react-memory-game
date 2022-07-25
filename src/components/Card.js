import React from 'react'

export default function Card(card) {
  return (
    <div className='card' key={card.id}>
      <div>
        <img className="front" src={card.src} alt="Card front" />
        <img className="back" src="/img/cover.jpg" alt="Card back" />
      </div>
    </div>
  )
};
