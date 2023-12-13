import "./TopCard.css";
import { useTranslation } from "react-i18next";
import { getImagePath } from "../../assets/getImagePath";

const TopCard = ({ card, color }) => {
  const { t } = useTranslation();

  return (
    <div
      id={card.id}
      className="top-container"
      style={{
        backgroundColor:
          color === "green" ? "green" : color === "red" ? "red" : "",
      }}
    >
      <p className="card-heading top-card-heading">{t(card.name)}</p>
      <img
        className="top-image"
        draggable={false}
        src={getImagePath(card.img)}
        alt={card.name}
        loading="lazy"
      />
      <p className=" card-text top-card-text">{card.co2} kg</p>
    </div>
  );
};

export default TopCard;
