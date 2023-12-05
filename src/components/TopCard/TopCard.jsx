import "./TopCard.css";

const TopCard = ({ card, droppedCard, getImagePath, color }) => (
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
    <img draggable={false} src={getImagePath(card.img)} alt={card.name} />
    <p className="card-text">{card.co2} kg</p>
  </div>
);

export default TopCard;
