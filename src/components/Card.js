import React from 'react'
import './SingleCard.css'

export default function Card({ card }) {
  return (
    <div className='card'>
      <div>
        <img className="front" src={card.src} alt="Card front" />
        <img className="back" src="/img/cover.jpg" alt="Card back" />
      </div>
    </div>
  )
};
