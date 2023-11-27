import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h1>GamePage</h1>
    </div>
  );
};

export default GamePage;
