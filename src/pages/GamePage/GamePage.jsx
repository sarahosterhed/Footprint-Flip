import { useSelector } from "react-redux";
import { useState } from "react";
import "./GamePage.css";
// import smartphoneImage from "../../assets/smartphone.svg";
import jeansImage from "../../assets/jeans.svg";

import bicycleImage from "../../assets/bicycle.svg";
import busImage from "../../assets/bus.svg";
import carImage from "../../assets/car.svg";
import flightImage from "../../assets/flight.svg";
import meatImage from "../../assets/meat.svg";
import sneakersImage from "../../assets/sneakers.svg"; //why taking bicycle?
import tShirtImage from "../../assets/tShirt.svg";
import trainImage from "../../assets/train.svg";
import defaultImage from "../../assets/car.svg"; // Note: put a question mark image here later

const GamePage = () => {
  //const products = useSelector((state) => state.game.products);
  const cards = useSelector((state) => state.game.products);
  const [bottomCards, setBottomCards] = useState(cards.slice(1, 5));
  const [topCards, setTopCards] = useState(cards.slice(0, 1));

  const [draggedCard, setDraggedCard] = useState();
  const [droppedCard, setDroppedCard] = useState();
  const [droppedLast, setDroppedLast] = useState(false);


const getImagePath = (img) => {
  console.log("Image Path:", img);
  switch (img) {
    case "../assets/smartphone.svg": ///change the image to smartphone later
      return busImage;
    case "../assets/jeans.svg":
      return jeansImage;
      case "../assets/bicycle.svg":
        return bicycleImage;
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
            case "../assets/train.svg":
              return trainImage;
            case "../assets/tShirt.svg":
              return tShirtImage;
    default:
      return defaultImage;
  }
};



  const handleDragStart = (e) => {
    const card = bottomCards.find((card) => card.id == e.target.id);
    console.log("Drag Start:", card);
    setDraggedCard(card);
    setDroppedCard(null);
    setDroppedLast(false);
  };

  const handleDragOver = (e) => {
    const card = topCards.find((card) => card.id == e.target.id);
    console.log("Drag over:", e.target.id);
    setDroppedCard(card);
    setDroppedLast(e.target.id == "invisible");
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    // console.log("END", e.target.className);
    if (draggedCard && (droppedCard || droppedLast)) {
      e.preventDefault();
      if (droppedLast) {
        setTopCards([...topCards, draggedCard]);
      } else {
        const i = topCards.indexOf(droppedCard);
        setTopCards([
          ...topCards.slice(0, i),
          draggedCard,
          ...topCards.slice(i),
        ]);
      }
      setBottomCards(bottomCards.filter((card) => card != draggedCard));
    }
    setDraggedCard(null);
    setDroppedCard(null);
  };
  return (
    <div
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {topCards.map((card) => (
          <div
            id={card.id}
            key={card.id}
            className="top-cards"
            style={{
              borderLeft:
                card.id == droppedCard?.id ? "30px dashed lightgray" : "",
            }}
          >
            <p>{card.name}</p>
            <p>{card.co2}</p>
            <img  src={getImagePath(card.img)} style={{ width: '20%'}}/>
          </div>
        ))}
        <div
          id="invisible"
          style={{
            width: "200px",
            borderLeft: droppedLast ? "30px dashed lightgray" : "",
          }}
        >
          INVISIBLE CARD
        </div>
      </div>
      <div>-----------------------------------------</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {bottomCards.map((card) => (
          <div
            draggable
            id={card.id}
            key={card.id}
            className="bottom-cards"
            style={{ opacity: card.id == draggedCard?.id ? 0.2 : 1.0 }}
          >
            <p>{card.name}</p>
            <p>{card.co2}</p>
            <img  src={getImagePath(card.img)} style={{ width: '20%'}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
