import { useSelector } from "react-redux";
import { useState } from "react";
import "./GamePage.css";
import smartphoneImage from "../../assets/mobile.svg";
import jeansImage from "../../assets/jeans.svg";

import coffee from "../../assets/coffee.svg";
import bicycleImage from "../../assets/bicycle.svg";
import busImage from "../../assets/bus.svg";
import carImage from "../../assets/car.svg";
import flightImage from "../../assets/flight.svg";
import meatImage from "../../assets/meat.svg";
import vegoImage from "../../assets/vegetarian.svg";
import sneakersImage from "../../assets/sneakers.svg";
import tShirtImage from "../../assets/t-shirt.svg";
import trainImage from "../../assets/train.svg";
import defaultImage from "../../assets/qmark.svg"; // Note: put a question mark image here later
import TopCard from "../../components/TopCard/TopCard";
import InvisibleCard from "../../components/InvisibleCard/InvisibleCard";
import BackButton from "../../components/BackButton/BackButton";

import "drag-drop-touch";

const GamePage = () => {
  // Initialize state variables
  const cards = useSelector((state) => state.game.products);

  //random cards
  const randomCards = [...cards].sort(() => Math.random() - 0.5);

  const [bottomCards, setBottomCards] = useState(randomCards.slice(1, 10));
  const [topCards, setTopCards] = useState(randomCards.slice(0, 1));

  const [draggedCard, setDraggedCard] = useState();
  const [droppedCard, setDroppedCard] = useState();
  const [droppedLast, setDroppedLast] = useState(false);

  const [touchedCard, setTouchedCard] = useState(null);

  const [correctPlacedId, setCorrectPlacedId] = useState();
  const [wrongPlacedId, setWrongPlacedId] = useState();
  const [correctCount, setCorrectCount] = useState(0);
  const totalCards = 12; // Total number of cards

  // Function to retrieve image path based on card's image
  const getImagePath = (img) => {
    switch (img) {
      case "../assets/smartphone.svg":
        return smartphoneImage;
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
      case "../assets/vegetarian.svg":
        return vegoImage;
      case "../assets/train.svg":
        return trainImage;
      case "../assets/t-shirt.svg":
        return tShirtImage;
      case "../assets/coffee.svg":
        return coffee;
      default:
        return defaultImage;
    }
  };

  // Function triggered when dragging starts
  const handleDragStart = (e) => {
    // Find the card being dragged based on the ID
    const card = bottomCards.find((card) => card.id == e.target.id);

    // Set the dragged card and reset dropped indicators
    setDraggedCard(card);
    setDroppedCard(null);
    setDroppedLast(false);
  };

  // Function triggered when dragging over a target
  const handleDragOver = (e) => {
    // Find the card being dragged over based on the ID
    const card = topCards.find((card) => card.id == e.target.id);

    // Set the dropped card and update indicators
    setDroppedCard(card);
    setDroppedLast(e.target.id == "invisible");
    e.preventDefault();
  };

  // Function triggered when dragging ends
  const handleDragEnd = (e) => {
    // Function for delayed sorting after a 2-second delay
    const sortTopCardsWithDelay = (cardsToSort) => {
      // Sorts the cards after a 2-second delay

      // Sort the cards by CO2 property in ascending order
      const sortedCards = cardsToSort.slice().sort((a, b) => a.co2 - b.co2);

      setTimeout(() => {
        // Update the state with the sorted cards
        setTopCards(sortedCards);
        setCorrectPlacedId("");
        setWrongPlacedId("");
      }, 2000); // 2-second delay before sorting
      return sortedCards;
    };

    // Check if a card is being dragged and dropped over a target
    if (draggedCard && (droppedCard || droppedLast)) {
      let updatedTopCards = [];

      // Determine the updated list of top cards after dragging ends
      if (droppedLast) {
        //setTopCards([...topCards, { ...draggedCard, hidden: false }]);
        // If dropped at the last position, add the card to the end
        updatedTopCards = [...topCards, draggedCard];
        // Update state immediately to display the new card
        setTopCards(updatedTopCards);
      } else {
        // Calculate the index where the card is dropped
        const i = topCards.indexOf(droppedCard);
        updatedTopCards = [
          ...topCards.slice(0, i),
          { ...draggedCard, hidden: false },
          ...topCards.slice(i),
        ];
        // Update state immediately to display the new card
        setTopCards(updatedTopCards);
      }

      // Initiate sorting of top cards after a delay
      const sortedCards = sortTopCardsWithDelay(updatedTopCards);

      // Check if the user's placement is correct
      const isCorrectPlacement = updatedTopCards.every(
        (card, index) => card.id === sortedCards[index].id
      );

      if (isCorrectPlacement) {
        setCorrectPlacedId(draggedCard.id);
        setCorrectCount((prevCount) => prevCount + 1);
      } else {
        setWrongPlacedId(draggedCard.id);
      }

      // Filter out the dragged card from bottom cards
      setBottomCards(bottomCards.filter((card) => card != draggedCard));
    }
    // Reset dragged and dropped cards
    setDraggedCard(null);
    setDroppedCard(null);
  };

  // for mobile version
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touchedId = e.target.id;
    setTouchedCard(touchedId);
    handleDragStart(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleDragOver(e.touches[0]);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    handleDragEnd(e.changedTouches[0]);
    setTouchedCard(null);
  };

  return (
    <div className="game-page">
      <BackButton />
      <div className="top-section">
        <p className="top-item item-color">Lowest Emission</p>
        <p className="top-item score-color">
          Score 🏁 <span>{`${correctCount}/${totalCards}`}</span>
        </p>
        <p className="top-item item-color">Highest Emission</p>
      </div>
      <hr className="horizontal-line" />
      <div
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
              color={
                card.id == correctPlacedId
                  ? "green"
                  : card.id == wrongPlacedId
                  ? "red"
                  : "default"
              }
            />
          ))}
          <InvisibleCard droppedLast={droppedLast} />
        </div>
        <div style={{ position: "relative", margin: "5% 0 0 45%" }}>
          {bottomCards.map((card, index) => (
            <div
              draggable
              // onTouchStart={handleTouchStart}
              // onTouchMove={handleTouchMove}
              // onTouchEnd={handleTouchEnd}
              id={card.id}
              key={card.id}
              className="bottom-cards card card-container"
              style={{
                opacity:
                  card.id == draggedCard?.id || card.id === touchedCard
                    ? 0.2
                    : 1.0,
                position: "absolute",
                left: `${index * 5}px`,
                top: `${index * 5}px`,
                // backgroundColor: card.id === touchedCard ? "lightgray" : "",
                zIndex: card.id === draggedCard?.id ? 100 : "auto",
              }}
            >
              <p className="card-heading">{card.name}</p>
              <img src={getImagePath(card.img)} />
              {card.hidden ? (
                <p className="card-text">CO₂ ?</p>
              ) : (
                <p className="card-text">{card.co2}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
