// TopCard.js
import React from "react";
import "./TopCard.css";

const TopCard = ({ card, droppedCard, getImagePath }) => (
  <div className="top-container">
    <div
      id={card.id}
      className="top-cards"
      style={{
        borderLeft: card.id === droppedCard?.id ? "30px dashed black" : "",
      }}
    >
      <p>{card.name}</p>
      <p>{card.co2} kg</p>
      <img src={getImagePath(card.img)} alt={card.name} />
    </div>
  </div>
);

export default TopCard;
