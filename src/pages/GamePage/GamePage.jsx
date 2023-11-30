import { useNavigate } from "react-router-dom";
import { DndContext } from "@dnd-kit/core";
// import DropContainer from '../../components/DropContainer/DropContainer';
import DraggableCard from "../../components/DraggableCard/DraggableCard";
import { useSelector, useDispatch } from "react-redux";
import { moveCard } from "../../reducers/game";
import Board from "../../components/Board/Board";
import PlayedCard from "../../components/PlayedCard/PlayedCard";
import { useState, useMemo } from "react";
import "./GamePage.css";

const GamePage = () => {
  //const products = useSelector((state) => state.game.products);
  const cards = useSelector((state) => state.game.products);
  const [bottomCards, setBottomCards] = useState(cards.slice(1, 5));
  const [topCards, setTopCards] = useState(cards.slice(0, 1));

  const [draggedCard, setDraggedCard] = useState();
  const [droppedCard, setDroppedCard] = useState();
  const [droppedLast, setDroppedLast] = useState(false);

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
          </div>
        ))}
      </div>
    </div>
  );
};

const GamePageWithDND = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.game.products);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over) {
      // Dispatch an action to update the state
      dispatch(
        moveCard({ from: parseInt(active.id, 10), to: parseInt(over.id, 10) })
      );
    }
  };

  return (
    <>
      <Board />
      <DndContext onDragEnd={handleDragEnd}>
        <div>
          <button onClick={() => navigate("/")}>Go Back</button>
          <h1>GamePage</h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {products.map(({ id, name, co2, img }) => (
              <DraggableCard key={id} id={id} name={name} co2={co2} img={img} />
            ))}
          </div>
        </div>
      </DndContext>
    </>
  );
};

export default GamePage;
