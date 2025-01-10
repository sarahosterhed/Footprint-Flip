import "./TopCard.css";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { getImagePath } from "../../assets/getImagePath";

const TopCard = ({ card, userGuess }) => {
  const { t } = useTranslation();

  console.log("User guess:", userGuess);
  return (
    <div
      id={card.id}
      className={classNames("card", {
        "correct-guess": userGuess === "correct",
        "incorrect-guess": userGuess === "incorrect",
      })}
    >
      <p className="card-heading top-card-heading">{t(card.name)}</p>
      <img
        className="top-image"
        draggable={false}
        src={getImagePath(card.img)}
        alt={card.name}
        loading="lazy"
      />
      <p className=" card-text top-card-text">{card.co2} kg CO₂</p>
    </div>
  );
};

export default TopCard;
