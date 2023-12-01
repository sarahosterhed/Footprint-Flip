// TopCard.js
import React from 'react';
import "./TopCard.css"

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
    <img src={getImagePath(card.img)} alt={card.name} />
  </div>
  </div>
);

export default TopCard;
