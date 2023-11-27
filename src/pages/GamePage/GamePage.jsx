import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

const GamePage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h1>GamePage</h1>
      <Card />
    </div>
  );
};

export default GamePage;
