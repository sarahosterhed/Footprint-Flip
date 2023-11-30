import PlayedCard from "../PlayedCard/PlayedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSelector, useDispatch } from "react-redux";
import { updateCards } from "../../reducers/game";

const Board = () => {
  //This state represents an array of cards that is on the board. The initial state is the first randomized card always displayed in the beginning
  const cards = useSelector((state) => state.game.products);

  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    //Event to occur when card is released. Tell if it's correct or wrong and sort the cards. The "onDragEnd" provides an event
    console.log("Drag and called");
    const { active, over } = event;
    console.log("ACTIVE:" + active.id);
    console.log("OVER:" + over.id);

    const oldIndex = cards.findIndex((card) => card.id === active.id);
    const newIndex = cards.findIndex((card) => card.id === over.id);
    console.log("Old Index:", oldIndex);
    console.log("New Index:", newIndex);

    const updatedGameDeck = arrayMove(cards, oldIndex, newIndex);
    dispatch(updateCards(updatedGameDeck));
  };
  // if (active.id !== over.id) {
  //   setPlayedCards((card) => {
  //     const activeIndex = items.indexOf(active.id)
  //     const overIndex = items.indexOf(over.id)
  //     console.log(arrayMove(items, activeIndex, overIndex));

  //     return arrayMove(items, activeIndex, overIndex)
  //     //items: [2, 3, 1] 0 -> 2
  //     // [1, 2, 3] oldIndex: 0 newIndex: 2 -> [2, 3, 1]
  //   })
  // }

  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h1>GamePage</h1>
        <div className="card-board">
          <SortableContext
            items={cards}
            strategy={horizontalListSortingStrategy}
          >
            {/* We need components that use the useSortable hook */}
            {cards.map((card) => (
              <PlayedCard key={card.name} card={card} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </>
  );
};

export default Board;
