import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import instructions from "../../animations/instructions.json";
import "./Instructions.css";

const Instructions = () => {
  const navigate = useNavigate();

  const playGame = () => {
    navigate("/gamepage");
  };

  const style = { height: 200 };
  return (
    <>
      <div className="instructions">
        <Lottie animationData={instructions} style={style} />
        <ol>
          <li>
            Drag and drop the cards to the top and arrange them in the correct
            order of increasing CO2 emissions. Guess the correct position of the
            cards based on the product from lowest to highest CO2 emissions.
          </li>
          <li>
            Once you think you have an idea where the specific product card will
            be placed, drop the card. The background color of your dropped card
            will turn green if the placement was correct or red if the placemnet
            was incorrect.
          </li>
          <li>
            When all the cards are empty from the bottom pile and all 12 cards
            are placed at the top, you will recieve a score.
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
