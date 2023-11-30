import "./Instructions.css";
import co2 from "../../assets/co2.jpg";

const Instructions = () => {
  return (
    <>
      <div className="instructions-container">
        <img src={co2} />
      </div>
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
      </div>
    </>
  );
};

export default Instructions;
