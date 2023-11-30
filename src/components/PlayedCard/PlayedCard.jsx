import { useSelector } from "react-redux";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const PlayedCard = ({ card }) => {
  const cards = useSelector((state) => state.game.products);
  console.log("Played Cards:", card.id);

  const currentCard = cards.find((c) => c.id === card.id);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: card.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      <h2>{currentCard.name}</h2>
      <p>{currentCard.co2}</p>
    </div>
  );
};

export default PlayedCard;
