import { useNavigate } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
// import DropContainer from '../../components/DropContainer/DropContainer';
import DraggableCard from '../../components/DraggableCard/DraggableCard';
import { useSelector, useDispatch } from 'react-redux';
import { moveCard } from '../../reducers/game';
import Board from '../../components/Board/Board';

const GamePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.game.products);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over) {
      // Dispatch an action to update the state
      dispatch(moveCard({ from: parseInt(active.id, 10), to: parseInt(over.id, 10) }));
    }
  }

  return (
    <>
      <Board />
      <DndContext onDragEnd={handleDragEnd}>
        <div>
          <button onClick={() => navigate('/')}>Go Back</button>
          <h1>GamePage</h1>


          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
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
