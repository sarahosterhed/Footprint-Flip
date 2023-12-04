import { useNavigate } from "react-router-dom";
import "./Instructions.css";

const Instructions = () => {
  const navigate = useNavigate();

  const playGame = () => {
    navigate("/gamepage");
  };
  return (
    <>
      <h1>How to play</h1>
      <div className="instructions">
        <ol>
          <li>
            Drag and drop the cards to arrange them in the correct order of
            increasing CO2 emissions.
          </li>
          <li>
            Once you think you have the correct order, submit your arrangement.
          </li>
          <li>
            Compare your ranking with the correct order to see how well you did!
          </li>
        </ol>

        <p>
          Keep in mind the environmental impact of each product, and make
          environmentally friendly choices!
        </p>
        <button className="start-button" onClick={playGame}>
          Play Game
        </button>
      </div>
    </>
  );
};

export default Instructions;
