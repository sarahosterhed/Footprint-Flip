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
import sneakersImage from "../../assets/sneakers.svg";
import tShirtImage from "../../assets/tShirt.svg";
import trainImage from "../../assets/train.svg";
import defaultImage from "../../assets/qmark.svg"; // Note: put a question mark image here later
import TopCard from "../../components/TopCard/TopCard";
import InvisibleCard from "../../components/InvisibleCard/InvisibleCard";
import BackButton from "../../components/BackButton/BackButton";

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
      case "../assets/smartphone.svg":
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
        setTopCards([...topCards, { ...draggedCard, hidden: false }]);
      } else {
        const i = topCards.indexOf(droppedCard);
        setTopCards([
          ...topCards.slice(0, i),
          { ...draggedCard, hidden: false },
          ...topCards.slice(i),
        ]);
      }
      setBottomCards(bottomCards.filter((card) => card != draggedCard));
    }
    setDraggedCard(null);
    setDroppedCard(null);
  };
  return (
    <div className="game-page">
      <BackButton />
      <div className="top-section">
        <p className="top-item item-color">Lowest Emission</p>
        <p className="top-item score-color">
          Score 🏁<span>0</span>
        </p>
        <p className="top-item item-color">Highest Emission</p>
      </div>
      <hr className="horizontal-line" />
      <div
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
          className="board-container"
        >
          {topCards.map((card) => (
            <TopCard
              key={card.id}
              card={card}
              droppedCard={droppedCard}
              getImagePath={getImagePath}
            />
          ))}
          <InvisibleCard droppedLast={droppedLast} />
        </div>
        <div style={{ position: "relative", margin: "5% 0 0 45%" }}>
          {bottomCards.map((card, index) => (
            <div
              draggable
              id={card.id}
              key={card.id}
              className="bottom-cards card card-container"
              style={{
                opacity: card.id == draggedCard?.id ? 0.2 : 1.0,
                position: "absolute",
                left: `${index * 15}px`,
                top: `${index * 15}px`,
              }}
            >
              <p className="product-item">{card.name}</p>
              {card.hidden ? <p>??</p> : <p>{card.co2}</p>}
              <img src={getImagePath(card.img)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
