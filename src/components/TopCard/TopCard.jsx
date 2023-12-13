import "./TopCard.css";
import { useTranslation } from "react-i18next";

import smartphoneImage from "../../assets/mobile.svg";
import jeansImage from "../../assets/jeans.svg";

import coffee from "../../assets/coffee.svg";
import textileBag from "../../assets/bag.svg";
import busImage from "../../assets/bus.svg";
import carImage from "../../assets/car.svg";
import flightImage from "../../assets/flight.svg";
import meatImage from "../../assets/meat.svg";
import vegImage from "../../assets/vegetarian.svg";
import sneakersImage from "../../assets/sneakers.svg";
import tShirtImage from "../../assets/t-shirt.svg";
import trainImage from "../../assets/train.svg";
import defaultImage from "../../assets/questionMark.svg";

const TopCard = ({ card, color }) => {
  const { t } = useTranslation();

  const getImagePath = (img) => {
    switch (img) {
      case "../assets/smartphone.svg":
        return smartphoneImage;
      case "../assets/jeans.svg":
        return jeansImage;
      case "../assets/bus.svg":
        return busImage;
      case "../assets/car.svg":
        return carImage;
      case "../assets/flight.svg":
        return flightImage;
      case "../assets/sneakers.svg":
        return sneakersImage;
      case "../assets/meat.svg":
        return meatImage;
      case "../assets/vegetarian.svg":
        return vegImage;
      case "../assets/train.svg":
        return trainImage;
      case "../assets/t-shirt.svg":
        return tShirtImage;
      case "../assets/coffee.svg":
        return coffee;
      case "../assets/bag.svg":
        return textileBag;
      default:
        return defaultImage;
    }
  };

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
