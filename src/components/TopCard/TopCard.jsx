// TopCard.js
import React from "react";
import "./TopCard.css";

const TopCard = ({ card, droppedCard, getImagePath, color }) => (
  // <div className="top-container">
  <div
    id={card.id}
    className="top-container"
    style={{
      borderLeft: card.id === droppedCard?.id ? "30px dashed black" : "",
      backgroundColor:
        color === "green" ? "green" : color === "red" ? "red" : "",
    }}
  >
    <p className="card-heading">{card.name}</p>
    <img src={getImagePath(card.img)} alt={card.name} />
    <p className="card-text">{card.co2} kg</p>
  </div>
  // </div>
);

export default TopCard;
