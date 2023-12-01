// TopCard.js
import React from 'react';

const TopCard = ({ card, droppedCard, getImagePath }) => (
    <div className='card-container'>
  <div
    id={card.id}
    className="top-cards card"
    style={{
      borderLeft: card.id === droppedCard?.id ? '30px dashed lightgray' : '',
      
    }}
  >
    <p>{card.name}</p>
    <p>{card.co2}</p>
    <img src={getImagePath(card.img)} style={{ width: '20%' }} alt={card.name} />
  </div>
  </div>
);

export default TopCard;
