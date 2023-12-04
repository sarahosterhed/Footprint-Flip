// TopCard.js
import React from "react";
import "./TopCard.css";

const TopCard = ({ card, droppedCard, getImagePath }) => (
  // <div className="top-container">
  <div
    id={card.id}
    className="top-container"
    style={{
      borderLeft: card.id === droppedCard?.id ? "30px dashed black" : "",
    }}
  >
    <p className="card-heading">{card.name}</p>
    <img src={getImagePath(card.img)} alt={card.name} />
    <p className="card-text">{card.co2} kg</p>
  </div>
  // </div>
);

export default TopCard;
